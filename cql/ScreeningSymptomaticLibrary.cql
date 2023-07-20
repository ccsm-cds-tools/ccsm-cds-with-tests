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
include DashboardLibrary version '1.0.0' called Dash
include CCSMCommonFunctions version '1.0.0' called Common

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
  C3F.MostRecent(
    C3F.ObservationLookBack(
      Dash.ResponsesToAbnormalBleedingQuestion R
        where R.value ~ Dash."Yes",
      SymptomaticLookBack
    )
  ) is not null

define IsSymptomatic:
  HasRecentAbnormalBleedingCondition or
  HasRecentAbnormalBleedingEncounter or
  HasRecentAbnormalBleedingObservation or
  RecentlyRespondedYesToAbnormalBleedingQuestion

define IsIncluded:
  Dash.FemaleorTransgenderMale and
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
  Common.DiagnosticReportDate(MostRecentNilmCytology) >= Today() - 12 months

define MostRecentNegativeHpv:
  Dash.MostRecentNegativeHpv

define MostRecentCoincidentNilmCytologyAndNegativeHpvReport:
  from "MostRecentNilmCytology" C, "MostRecentNegativeHpv" H
  where
    Common.DiagnosticReportDate(C) within 3 years of Today() and
    Common.DiagnosticReportDate(H) within 3 years of Today() and
    Common.CoincidentDiagnosticReports(C, H)

define HasCoincidentNilmCytologyAndNegativeHpvWitinLast3Years:
  MostRecentCoincidentNilmCytologyAndNegativeHpvReport M
  return
      M.C is not null and M.H is not null


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

define DefaultSymptomaticRecommendation:
  {
    'A diagnostic pelvic exam is recommended for patients with abnormal uterine bleeding.',
    'Cervical cancer is unlikely in women with negative cervical cytology/HPV cotesting in the past 3 years, therefore pap testing may be deferred unless the exam is highly suspicious for cervical cancer.'
  }

define Age21YearsAndYoungerRecommendation:
  DefaultSymptomaticRecommendation

define NilmCytologyWithinLast12MonthsRecommendation:
  DefaultSymptomaticRecommendation

define NilmCytologyAndNegativeHpvWitinLast3YearsRecommendation:
  DefaultSymptomaticRecommendation
  
define VisibleLesionRecommendation:
  {
    'A diagnostic pelvic exam is recommended for patients with abnormal uterine bleeding.',
    'If a cervical lesion is seen a cytology, co-testing and/or cervical biopsy should be considered. If there is concern for endometrial cancer or other endometrial pathology, and endometrial biopsy should be considered.'
  }

define ElseRecommendation:
  {
    'A diagnostic pelvic exam is recommended for patients with abnormal uterine bleeding.',
    'If a cervical lesion is seen a cytology, co-testing and/or cervical biopsy should be considered. If there is concern for endometrial cancer or other endometrial pathology, and endometrial biopsy should be considered.'
  }


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

define ActionShort:
  'See Details'

define Recommendation:
  if IsIncludedAndNotExcluded then {
    short: ActionShort,
    date: Today(),
    details: RecommendationText,
    group: 'Screening: Symptomatic'
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
