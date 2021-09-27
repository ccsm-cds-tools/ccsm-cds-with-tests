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
include DisplayCervicalCancerMedicalHistory version '1.0.0' called Dash
include CCSMCommonFunctions version '1.0.0' called Common
include TopLevelScreeningLibrary version '1.0.0' called Entry

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
//   OR Gender identity = Transgender Male 
// AND 
// Age >= 40 years old 
// AND
// Diagnosis of In Utero Exposure to DES  (accept all clinicalStatus values)
//   OR In utero exposure to DES observation (final, amended, corrected) 
//   OR response to "Did the patient experience in utero exposure to diethylstilbesterol (DES)?" = "Yes"

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
  Entry.FemaleorTransgenderMale and
  BornOnOrBeforeBirthdayThreshold and
  WasExposedToDesInUtero

//------------------------------------------------------------------------------
// EXCLUSIONS
//------------------------------------------------------------------------------
// Diagnosis of High grade pre-cancerous cervical lesion 
// OR Diagnosis of Cervical cancer 
// OR Cervical histology result = "histologic HSIL (CIN2)" or "histologic HSIL (CIN3)"
// OR Abnormal screening result <= 7 years ago (7 years is a parameter in Dash)
// OR Abnormal histology result <= 7 years ago (7 years is a parameter in Dash)

define HasHighGradePreCancerCervicalLesion:
  Exists(Dash.CervicalPrecancerDisorders)

define HasCervicalCancerDiagnoses:
  Exists(Dash.CervicalCancerDiagnoses)

// LEFT OFF HERE

define Cin2OrCin3HistologyResults: // High Grade Or Cancer Histology Results
  Dash.HistologyDiagnosticReports H
    where H.conclusionCode includes ToConcept(Dash."CIN2") or // Follow-Up: We potentially could look within a High-Grade Value Set
      H.conclusionCode includes ToConcept(Dash."CIN3")

define HasRecentAbnormalScreening:
  Dash.HasRecentAbnormalScreening

define HasRecentAbnormalHistology:
  Dash.HasRecentAbnormalHistology

// Add Histologic AIS
// Add Histologic Cancer
// Cross-check with other logic paths

define Excluded:
  HasHighGradePreCancerCervicalLesion or
  HasCervicalCancerDiagnoses or
  Exists(Cin2OrCin3HistologyResults) or
  HasRecentAbnormalScreening or
  HasRecentAbnormalHistology

//------------------------------------------------------------------------------
// CDS ACTIONS
//------------------------------------------------------------------------------

define IsIncludedAndNotExcluded:
  IsIncluded and not Excluded

define HasNilmCytologyWithinLast12Months:
  Dash.HasNilmCytologyWithinLast12Months

define NilmCytologyWithinLast12Months: // TODO: We can probably take this from the Dashboard
  Common.LookBack(Dash.NilmCytologyReports, 12 months)

define MostRecentNilmCytologyWithinPastYear:
  Common.MostRecentDiagnosticReport(NilmCytologyWithinLast12Months)

define DateOfRecentNilmCytology:
  Common.DiagnosticReportDate(MostRecentNilmCytologyWithinPastYear)

define ProposedDateOfNextCytology:
  DateOfRecentNilmCytology + 1 year

define RecommendImmediateCervicalCytology:
  IsIncludedAndNotExcluded and
  not HasNilmCytologyWithinLast12Months

define RecommendationText:
  if RecommendImmediateCervicalCytology then
    'Per the "Antenatal Exposure to DES: Lessons Learned...Future Concerns" CME Review Article and the ACOG Practice Bulletin #168 "Cervical Cancer Screening and Prevention, cervical cytology screening is indicated. Tissue sampling should include collection of endocervical and ectocervical cells, as well as those from vaginal fornices.'
  else if IsIncludedAndNotExcluded and Exists(ProposedDateOfNextCytology) then
    'Cervical cytology screening is next due on ' + ToString(ToDate(ProposedDateOfNextCytology)) + '.'
  else
    ''

//------------------------------------------------------------------------------
// ERRORS
//------------------------------------------------------------------------------

define ErrorDesExposureButTooYoung:
  if WasExposedToDesInUtero and not BornOnOrBeforeBirthdayThreshold then
    'There are indications that the patient was exposed to DES in utero but was born after ' + ToString(ToDate(BirthdayThreshold)) + '; please review the patient record for consistency.'
  else
    null

define Errors:
  {
    ErrorDesExposureButTooYoung
  } union
  Dash.Errors

define ErrorsHaveOccurred:
  Exists(Errors)

define NoErrorsHaveOccurred:
  not ErrorsHaveOccurred