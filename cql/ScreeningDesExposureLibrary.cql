/*  
  Library: Cervical Cancer Screening for Individuals Exposed to DES In Utero
  Author: CMS Alliance to Modernize Healthcare, operated by THE MITRE Corporation.

  (C) 2021 The MITRE Corporation. All Rights Reserved. 
  Approved for Public Release: 21-1556. 
  Distribution Unlimited.

  Unless otherwise noted, this work is available under an Apache 2.0 license. 
  It was produced by the MITRE Corporation for the Division of Cancer Prevention 
  and Control, Centers for Disease Control and Prevention in accordance with the 
  Statement of Work, contract number 75FCMC18D0047, task order number 75D30120F09743.
*/

library ScreeningDesExposureLibrary version '1.0.0'

using FHIR version '4.0.1'

include CDSConnectCommonsforFHIRv401 version '1.0.0' called C3F
include FHIRHelpers version '4.0.1' called FHIRHelpers
include DashboardLibrary version '1.0.0' called Dash
include CCSMCommonFunctions version '1.0.0' called Common

//------------------------------------------------------------------------------
// CODE SYSTEMS, VALUE SETS, AND CODES
//------------------------------------------------------------------------------

codesystem "SNOMED-CT": 'http://snomed.info/sct'
codesystem "LOINC": 'http://loinc.org'

//------------------------------------------------------------------------------
// PARAMETERS
//------------------------------------------------------------------------------

parameter BirthdayThreshold default @1980-01-01

/***** BEGIN CDS LOGIC ********************************************************/

context Patient

//------------------------------------------------------------------------------
// INCLUSIONS
//------------------------------------------------------------------------------
// Sex at birth = Female
//    OR Gender identity = Transgender Male 
// AND 
// Date of Birth BEFORE 01/01/1980
// AND
// Diagnosis of DES Exposure In Utero (accept all clinicalStatus values)
//    OR DES Exposure In Utero observation (final, amended, corrected)
//    OR response to "Did the patient experience diethylstilbesterol (DES) exposure in utero?" = "Yes"

define BornOnOrBeforeBirthdayThreshold:
  Patient.birthDate occurs before or on BirthdayThreshold

define HasDesExposureDiagnoses:
  Exists(Dash.DesExposureDiagnoses)

define HasDesExposureObservations:
  Exists(Dash.DesExposureObservations)

define RecentlyRespondedYesToDesExposureQuestion:
  Exists(
    Dash.ResponsesToDesExposureQuestion R
      where R.value ~ Dash."Yes"
  )

define WasExposedToDesInUtero:
  HasDesExposureDiagnoses or 
  HasDesExposureObservations or
  RecentlyRespondedYesToDesExposureQuestion

// Top Level Inclusion
define IsIncluded:
  Dash.FemaleorTransgenderMale and
  BornOnOrBeforeBirthdayThreshold and
  WasExposedToDesInUtero

//------------------------------------------------------------------------------
// EXCLUSIONS
//------------------------------------------------------------------------------
// Diagnosis of High grade pre-cancerous cervical lesion 
// OR Diagnosis of Cervical cancer 
// OR Cervical histology result = "histologic HSIL (CIN2)" or "histologic HSIL (CIN3)" or “histologic AIS” or “histologic cancer”
// OR Abnormal screening result <= 7 years ago (7 years is a parameter in Dash)
// OR Abnormal histology result <= 7 years ago (7 years is a parameter in Dash)

define HasHighGradePreCancerCervicalLesion:
  Exists(Dash.CervicalPrecancerDisorders)

define HasCervicalCancerDiagnoses:
  Exists(Dash.CervicalCancerDiagnoses)

define HasRecentAbnormalScreening:
  Dash.HasRecentAbnormalScreening

define HasRecentAbnormalHistology:
  Dash.HasRecentAbnormalHistology

define Excluded:
  HasHighGradePreCancerCervicalLesion or
  HasCervicalCancerDiagnoses or
  Exists(Dash.HighGradeOrCancerHistologyResults) or
  HasRecentAbnormalScreening or
  HasRecentAbnormalHistology

//------------------------------------------------------------------------------
// CDS ACTIONS
//------------------------------------------------------------------------------

define IsIncludedAndNotExcluded:
  IsIncluded and not Excluded

define WhichRecommendationApplies:
  if IsIncludedAndNotExcluded then
    { 
      recommendation: {
        'Consider individualized care for this patient.',
        'ACOG guidelines recommended annual cervical cytology screening for individuals with DES exposure in utero, with tissue sampling that includes collection of endocervical and ectocervical cells, as well as cells from vaginal fornices.'
      },
      id: '2.S.0.0.0'
    }
  else
    null

define RecommendationText:
  if (WhichRecommendationApplies is not null) then
    WhichRecommendationApplies.recommendation
  else
    null

define RecommendationId:
  if (WhichRecommendationApplies is not null) then
    WhichRecommendationApplies.id
  else
    null

define Citation:
  if RecommendationText is not null then
    'Antenatal Exposure to DES: Lessons Learned...Future Concerns'
  else
    null

define ActionShort:
  'See Details'

define Recommendation:
  if IsIncludedAndNotExcluded then {
    short: ActionShort,
    date: Today(),
    details: RecommendationText,
    id: RecommendationId,
    group: 'Screening: DES Exposure'
  }
  else null

//------------------------------------------------------------------------------
// ERRORS
//------------------------------------------------------------------------------

define Errors:
  {}

define ErrorsHaveOccurred:
  Exists(Errors)

define NoErrorsHaveOccurred:
  not ErrorsHaveOccurred