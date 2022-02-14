/*  
  Library: Cervical Cancer Screening for Symptomatic Individuals
  Author: CMS Alliance to Modernize Healthcare, operated by THE MITRE Corporation.

  (C) 2021 The MITRE Corporation. All Rights Reserved. 
  Approved for Public Release: 21-1556. 
  Distribution Unlimited.

  Unless otherwise noted, this work is available under an Apache 2.0 license. 
  It was produced by the MITRE Corporation for the Division of Cancer Prevention 
  and Control, Centers for Disease Control and Prevention in accordance with the 
  Statement of Work, contract number 75FCMC18D0047, task order number 75D30120F09743.
*/

library ScreeningSymptomaticLibrary version '1.0.0'

using FHIR version '4.0.1'

include CDSConnectCommonsforFHIRv401 version '1.0.0' called C3F
include FHIRHelpers version '4.0.1' called FHIRHelpers
include DisplayCervicalCancerMedicalHistory version '1.0.0' called Dash
include CCSMCommonFunctions version '1.0.0' called Common
include TopLevelScreeningLibrary version '1.0.0' called Entry

//------------------------------------------------------------------------------
// CODE SYSTEMS, VALUE SETS, AND CODES
//------------------------------------------------------------------------------

//------------------------------------------------------------------------------
// PARAMETERS
//------------------------------------------------------------------------------

parameter SymptomaticLookBack default 1 day

/***** BEGIN CDS LOGIC ********************************************************/

context Patient

//------------------------------------------------------------------------------
// PERTINENT DEMOGRAPHICS
//------------------------------------------------------------------------------

define IsAge21YearsOrYounger:
  AgeInYears() <= 21

//------------------------------------------------------------------------------
// INCLUSIONS
//------------------------------------------------------------------------------
// Sex at birth = Female
//   OR Gender identity = Transgender Male
// AND     
// Diagnosis of Abnormal uterine/vaginal bleeding (active, recurrence, relapse) 
//   OR Abnormal uterine/vaginal bleeding listed as the reason for an encounter (triaged, in-progress, completed) 
//   OR Abnormal uterine/vaginal bleeding observation (final, amended, corrected) 
//   OR response to "Is the patient experiencing abnormal uterine or vaginal bleeding today?" = "Yes" 
// AND 
// Date recorded is <= 24 hours ago

define HasRecentAbnormalBleedingCondition:
  Exists(
    C3F.ConditionLookBack(
      Dash.AbnormalUterineOrVaginalBleedingDiagnoses,
      SymptomaticLookBack
    )
  )

define HasRecentAbnormalBleedingEncounter:
  Exists(
    C3F.EncounterLookBack(
      Dash.AbnormalUterineOrVaginalBleedingEncounters,
      SymptomaticLookBack
    )
  )

define HasRecentAbnormalBleedingObservation:
  Exists(
    C3F.ObservationLookBack(
      Dash.AbnormalUterineOrVaginalBleedingObservations,
      SymptomaticLookBack
    )
  )

define RecentlyRespondedYesToAbnormalBleedingQuestion:
  Exists(
    C3F.MostRecent(
      C3F.ObservationLookBack(
        Dash.ResponsesToAbnormalBleedingQuestion R
          where R.value ~ Dash."Yes",
        SymptomaticLookBack
      )
    )
  )

define IsSymptomatic:
  HasRecentAbnormalBleedingCondition or
  HasRecentAbnormalBleedingEncounter or
  HasRecentAbnormalBleedingObservation or
  RecentlyRespondedYesToAbnormalBleedingQuestion

define IsIncluded:
  Entry.FemaleorTransgenderMale and
  IsSymptomatic

//------------------------------------------------------------------------------
// EXCLUSIONS
//------------------------------------------------------------------------------
// None
define Excluded:
  false

//------------------------------------------------------------------------------
// CDS ACTIONS
//------------------------------------------------------------------------------

define IsIncludedAndNotExcluded:
  IsIncluded and not Excluded

define MostRecentNilmCytology:
  Dash.MostRecentNilmCytology

define HasNilmCytologyWithinLast12Months:
  Exists(Common.LookBack(Dash.MostRecentNilmCytology, 12 months))

define MostRecentNegativeHpv:
  Dash.MostRecentNegativeHpv

define MostRecentCoincidentNilmCytologyAndNegativeHpvReport: 
  from "MostRecentNilmCytology" C, "MostRecentNegativeHpv" H
  where
    Common.DiagnosticReportDate(C) within 3 years of Today() and
    Common.DiagnosticReportDate(H) within 3 years of Today() and
    Common.CoincidentDiagnosticReports(C, H)

define HasCoincidentNilmCytologyAndNegativeHpvWitinLast3Years:
  Exists(MostRecentCoincidentNilmCytologyAndNegativeHpvReport)

define RecentVisibleLesionDiagnoses:
  C3F.ConditionLookBack(
    Dash.CervicalOrVaginalLesionDiagnoses,
    SymptomaticLookBack
  )

define RecentVisibleLesionObservations:
  C3F.ObservationLookBack(
    Dash.CervicalOrVaginalLesionObservations,
    SymptomaticLookBack
  )

define RecentYesResponsesToVisibleLesionQuestion:
  C3F.ObservationLookBack(
    Dash.ResponsesToVisibleLesionQuestion R
      where R.value ~ Dash."Yes",
    SymptomaticLookBack
  )

define HasVisibleCervicalOrVaginalLesion:
  Exists(RecentVisibleLesionDiagnoses) or
  Exists(RecentVisibleLesionObservations) or
  Exists(RecentYesResponsesToVisibleLesionQuestion)

define Age21YearsAndYoungerRecommendation:
  'Per the ASCCP Clinical Practice Statement titled "Evaluation of the Cervix in Patients with Abnormal Vaginal Bleeding" a diagnostic exam is indicated. Cervical cancer is unlikely in women under the age of 21, therefore pap testing may be deferred unless the exam is highly suspicious for cervical cancer.'

define NilmCytologyWithinLast12MonthsRecommendation:
  'Per the ASCCP Clinical Practice Statement titled "Evaluation of the Cervix in Patients with Abnormal Vaginal Bleeding" a diagnostic exam is indicated. Cervical cancer is unlikely in women with negative cervical cytology in the past year, therefore pap testing may be deferred unless the exam is highly suspicious for cervical cancer.'

define NilmCytologyAndNegativeHpvWitinLast3YearsRecommendation:
  'Per the ASCCP Clinical Practice Statement titled "Evaluation of the Cervix in Patients with Abnormal Vaginal Bleeding" a diagnostic exam is indicated. Cervical cancer is unlikely in women with negative cervical cytology/HPV cotesting in the past 3 years, therefore pap testing may be deferred unless the exam is highly suspicious for cervical cancer.'

define VisibleLesionRecommendation:
  'Per the ASCCP Clinical Practice Statement titled "Evaluation of the Cervix in Patients with Abnormal Vaginal Bleeding" a diagnostic exam with appropriate tissue sampling is indicated (e.g., cervical cytology and/or biopsy).'

define ElseRecommendation:
  'Per the ASCCP Clinical Practice Statement titled "Evaluation of the Cervix in Patients with Abnormal Vaginal Bleeding" a diagnostic exam and is indicated. Consider cervical cytology testing as a component of the diagnostic work up.'

define RecommendationText:
  if IsIncludedAndNotExcluded then
    case
      when IsAge21YearsOrYounger then Age21YearsAndYoungerRecommendation
      when HasNilmCytologyWithinLast12Months then NilmCytologyWithinLast12MonthsRecommendation
      when HasCoincidentNilmCytologyAndNegativeHpvWitinLast3Years then NilmCytologyAndNegativeHpvWitinLast3YearsRecommendation
      when HasVisibleCervicalOrVaginalLesion then VisibleLesionRecommendation
      else ElseRecommendation
    end
  else null

define Citation:
  if RecommendationText is not null then
    'ASCCP Clinical Practice Statement, "Evaluation of the Cervix in Patients with Abnormal Vaginal Bleeding," Published: February 7, 2017'
  else
    null

//------------------------------------------------------------------------------
// ERRORS
//------------------------------------------------------------------------------

define Errors:
  {} union
  Dash.Errors

define ErrorsHaveOccurred:
  Exists(Errors)

define NoErrorsHaveOccurred:
  not ErrorsHaveOccurred