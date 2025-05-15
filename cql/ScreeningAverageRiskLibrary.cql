/*
  Library: Cervical Cancer Screening for Individuals of Average Risk
  Author: CMS Alliance to Modernize Healthcare, operated by THE MITRE Corporation.

  (C) 2021 The MITRE Corporation. All Rights Reserved.
  Approved for Public Release: 21-1556.
  Distribution Unlimited.

  Unless otherwise noted, this work is available under an Apache 2.0 license.
  It was produced by the MITRE Corporation for the Division of Cancer Prevention
  and Control, Centers for Disease Control and Prevention in accordance with the
  Statement of Work, contract number 75FCMC18D0047, task order number 75D30120F09743.
*/

library ScreeningAverageRiskLibrary version '1.0.0'

using FHIR version '4.0.1'

include FHIRHelpers version '4.0.1' called FHIRHelpers
include CDSConnectCommonsforFHIRv401 version '1.0.0' called C3F
include CCSMCommonFunctions version '1.0.0' called Common
include DashboardLibrary version '1.0.0' called Dash
include ScreeningSymptomaticLibrary version '1.0.0' called Symptomatic
include ScreeningDesExposureLibrary version '1.0.0' called DesExposure
include ScreeningImmunocompromisedLibrary version '1.0.0' called Immunocompromised

//------------------------------------------------------------------------------
// CODE SYSTEMS, VALUE SETS, AND CODES
//------------------------------------------------------------------------------

//------------------------------------------------------------------------------
// PARAMETERS
//------------------------------------------------------------------------------

parameter MinimumScreeningAge default 21 // Age in years
parameter CytologyTestingCadence default 3 years
parameter PrimaryHpvTestingCadence default 5 years
parameter CotestingCadence default 5 years
parameter AllowGradeDExclusion default true
parameter AllowGradeDRecommendation default true
parameter GradeDAdequatePriorScreeningLookback default 10 years // TODO: We may want to change to 11 years to allow for wiggle room - Pending discussion with L2

/***** BEGIN CDS LOGIC ********************************************************/

context Patient

//------------------------------------------------------------------------------
// INCLUSIONS
//------------------------------------------------------------------------------
// Sex at birth = Female
//   OR Gender identity = Transgender Male

define IsIncluded:
  (
    (
      AgeInYears() >= MinimumScreeningAge and
      AgeInYears() <= 65
    ) or
    (
      AllowGradeDRecommendation and
      (
        AgeInYears() > 65 or
        AgeInYears() < MinimumScreeningAge
      )
    )
  ) and
  Dash.FemaleorTransgenderMale

//------------------------------------------------------------------------------
// EXCLUSIONS
//------------------------------------------------------------------------------
// Included and not excluded from screening logic for symptomatic individuals
// OR Included and not excluded from screening logic for individuals exposed to DES
// OR Included and not excluded from screening logic for Immunocompromised individuals
// OR Diagnosis of High grade pre-cancerous cervical lesion
// OR Diagnosis of Cervical cancer
// OR Cervical histology result = "histologic HSIL (CIN2)" or "histologic HSIL (CIN3)" or “histologic AIS” or “histologic Cancer”
// OR Abnormal screening result <= 7 years ago (7 years is a parameter in Dash)
// OR Abnormal histology result <= 7 years ago (7 years is a parameter in Dash)

define ExcludedBecauseSymptomatic:
  Symptomatic.IsIncludedAndNotExcluded

define ExcludedBecauseDesExposure:
  DesExposure.IsIncludedAndNotExcluded

define ExcludedBecauseImmunocompromised:
  Immunocompromised.IsIncludedAndNotExcluded

define HasHighGradePreCancerCervicalLesion:
  Exists(Dash.CervicalPrecancerDisorders)

define HasCervicalCancerDiagnoses:
  Exists(Dash.CervicalCancerDiagnoses)

define HasRecentAbnormalScreening:
  Dash.HasRecentAbnormalScreening

define HasRecentAbnormalHistology:
  Dash.HasRecentAbnormalHistology

define Excluded:
  ExcludedBecauseSymptomatic or
  ExcludedBecauseDesExposure or
  ExcludedBecauseImmunocompromised or
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

define AgeUnder21:
  AgeInYears() < 21

define Age21Through29:
  AgeInYears() between 21 and 29

define Age30Through65:
  AgeInYears() between 30 and 65

define AgeOver65:
  AgeInYears() > 65

define MostRecentNilmCytology:
  if (Dash.MostRecentNilmCytology is not null) then
    {
      type: 'Cervical Cytology',
      date: Common.DiagnosticReportDate(Dash.MostRecentNilmCytology)
    }
  else
    null

define DateOfMostRecentNilmCytology:
  if (MostRecentNilmCytology.date is not null) then
    MostRecentNilmCytology.date
  else null

define MostRecentNegativeHpvTest:
  if (Dash.MostRecentNegativeHpv is not null) then
    {
      type: 'hrHPV',
      date: Common.DiagnosticReportDate(Dash.MostRecentNegativeHpv)
    }
  else
    null

define DateOfMostRecentNegativeHpv:
  if (MostRecentNegativeHpvTest is not null) then
    MostRecentNegativeHpvTest.date
  else
    null

define MostRecentNegativeCotest:
  if (MostRecentNilmCytology is not null) and (MostRecentNegativeHpvTest is not null) then
    from Dash."MostRecentNilmCytology" C, Dash."MostRecentNegativeHpv" H
    where
        Common.CoincidentDiagnosticReports(C, H)
    return {
        type: 'Cotesting with hrHPV and Cervical Cytology',
        date: Common.DiagnosticReportDate(
          Common.MostRecentDiagnosticReport({C,H})
        )
      }
    else
      null

define DateOfMostRecentNegativeCotest:
  if (MostRecentNegativeCotest is not null) then
    MostRecentNegativeCotest.date
  else
    null

define ProposedDateOfNextCytology:
  if DateOfMostRecentNilmCytology is not null then
    if DateOfMostRecentNilmCytology + CytologyTestingCadence > Today() then
      DateOfMostRecentNilmCytology + CytologyTestingCadence
    else
      Now()
  else if (Age21Through29 and DateOfMostRecentNegativeCotest is not null) then
    if DateOfMostRecentNegativeCotest + CytologyTestingCadence > Today() then
      DateOfMostRecentNegativeCotest + CytologyTestingCadence
    else
      Now()
  else if (Age21Through29 and DateOfMostRecentNegativeHpv is not null) then
    if DateOfMostRecentNegativeHpv + CytologyTestingCadence > Today() then
      DateOfMostRecentNegativeHpv + CytologyTestingCadence
    else
      Now()
  else
    Now()

define ProposedDateOfNextHpvTest:
  if DateOfMostRecentNegativeHpv is not null then
    if DateOfMostRecentNegativeHpv + PrimaryHpvTestingCadence > Today() then
      DateOfMostRecentNegativeHpv + PrimaryHpvTestingCadence
    else
      Now()
  else
    Now()

define ProposedDateOfNextCotest:
  if DateOfMostRecentNegativeCotest is not null then
    if DateOfMostRecentNegativeCotest + CotestingCadence > Today() then
      DateOfMostRecentNegativeCotest + CotestingCadence
    else
      Now()
  else
    Now()

define WillBeAge65OrLessAtNextScreening:
  (Patient.birthDate as FHIR.date) less than 66 years before ToDate(ProposedScreeningDate) 
    
// define RecentScreenings:
//   {
//     MostRecentNilmCytology,
//     MostRecentNegativeHpvTest,
//     MostRecentNegativeCotest
//   }
//   except { null }

// define LastScreeningType:
//   if Exists(RecentScreenings) then
//     Last(
//       (RecentScreenings) T sort by date, rank desc
//     ).type
//   else
//     'n/a' // Indicates that no recent screening was found

define LastScreeningType:
  if (DateOfMostRecentNegativeCotest is not null) then
    if (
      DateOfMostRecentNegativeCotest occurs on or after DateOfMostRecentNilmCytology and
      DateOfMostRecentNegativeCotest occurs on or after DateOfMostRecentNegativeHpv
    ) then 'Cotesting with hrHPV and Cervical Cytology'
    else if (
      DateOfMostRecentNilmCytology occurs after DateOfMostRecentNegativeHpv
    ) then 'Cervical Cytology'
    else 'hrHPV'
  else if (DateOfMostRecentNilmCytology is not null) then
    if (DateOfMostRecentNegativeHpv is not null) then
      if (
        DateOfMostRecentNilmCytology occurs after DateOfMostRecentNegativeHpv
      ) then 'Cervical Cytology'
      else 'hrHPV'
    else 'Cervical Cytology'
  else if (DateOfMostRecentNegativeHpv is not null) then
    'hrHPV'
  else
    'n/a' // Indicates that no recent screening was found

define ProposedScreeningDate:
  if (LastScreeningType = 'Cervical Cytology' or Age21Through29) then
    ProposedDateOfNextCytology
  else if LastScreeningType = 'hrHPV' then
    ProposedDateOfNextHpvTest
  else if LastScreeningType = 'Cotesting with hrHPV and Cervical Cytology' then
    ProposedDateOfNextCotest
  else
    Today()

define RecommendImmediateCervicalCytology:
  IsIncludedAndNotExcluded and
  ProposedDateOfNextCytology = Now() and
  (
    Age21Through29 or
    (
      (
        LastScreeningType = 'Cervical Cytology' or
        LastScreeningType = 'n/a'
      ) and
      (
        Age30Through65 or
        (
          AllowGradeDRecommendation and
          AgeOver65 and
          NotAdequatelyScreened
        )
      )
    )
  )


define RecommendImmediatePrimaryHpv:
  IsIncludedAndNotExcluded and
  (
    ProposedDateOfNextHpvTest = Now() and
    (
      LastScreeningType = 'hrHPV' or
      LastScreeningType = 'n/a'
    ) and
    (
      Age30Through65 or
      (
        AllowGradeDRecommendation and
        AgeOver65 and
        NotAdequatelyScreened
      )
    )
  )

define RecommendImmediateCotesting:
  IsIncludedAndNotExcluded and
  (
    ProposedDateOfNextCotest = Now() and
    (
      LastScreeningType = 'Cotesting with hrHPV and Cervical Cytology' or
      LastScreeningType = 'n/a'
    ) and
    (
      Age30Through65 or
      (
        AllowGradeDRecommendation and
        AgeOver65 and
        NotAdequatelyScreened
      )
    )
  )

define RecommendImmediateScreening:
  RecommendImmediateCervicalCytology or
  RecommendImmediatePrimaryHpv or
  RecommendImmediateCotesting

define RecommendationText:
  if IsIncludedAndNotExcluded then
    if (
      AllowGradeDExclusion and
      AbsenceOrRemovalOfCervixWithoutHistoryOfHighGradePrecancerOrCancer
    ) then
      {
        // id: '4.H.D.0.0'
        // recommendation: {
          'This patient has documentation of a hysterectomy. If hysterectomy was performed for treatment of histologic HSIL, CIN 2, CIN 3 or AIS, patients should have 3 consecutive annual primary HPV tests or cotests before entering long term surveillance. Long term surveillance involves primary HPV testing or cotesting at 3-year intervals for 25 years.',
          'Screening is generally not recommended after hysterectomy if no previous diagnosis of CIN2 or greater in the preceding 25 years and the cervix was removed at the time of hysterectomy.',
          'Cancer screening is not recommended for patients who have undergone hysterectomy but have no previous diagnosis of histologic HSIL, CIN 2, CIN 3 or AIS, or completed the 25 year long term surveillance.'
        // }
      }
    else
      if AgeOver65 then
        if AllowGradeDRecommendation then
          if RecommendImmediateScreening then
            if LastScreeningType != 'n/a' then
            { 
              'Cervical cancer screening is recommended.',
              'It appears this patient is on a screening regimen that includes ' + LastScreeningType +'. To meet adequate testing criteria to exit cervical cancer screening, ' + LastScreeningType + ' is recommended.',
              'Per USPSTF guidelines for individuals older than 65, this patient is due for cervical cancer screening because they have not been adequately screened in the past. Adequate prior screening is defined as having either three consecutive negative cytology results, or two consecutive negative hrHPV or cotest results, within the past 10 years, with the most recent test occurring within the past 5 years, before stopping screening.'
            }
            else
            {
              'Cervical cancer screening is recommended.',
              'The screening can be performed using one of the following screening approaches:',
              '1. hrHPV testing alone',
              '2. Cotesting with cervical cytology and hrHPV testing',
              '3. Cervical cytology testing alone',
              'Per USPSTF guidelines for individuals older than 65, this patient is due for cervical cancer screening because they have not been adequately screened in the past. Adequate prior screening is defined as having either three consecutive negative cytology results, or two consecutive negative hrHPV or cotest results, within the past 10 years, with the most recent test occurring within the past 5 years, before stopping screening.'

            }
          else
            if NotAdequatelyScreened then
            { 
              'Cervical cancer screening is recommended.',
              'It appears this patient is on a screening regimen that includes ' + LastScreeningType +'. To meet adequate testing criteria to exit cervical cancer screening, ' + LastScreeningType + ' is recommended on ' + ToString(ToDate(ProposedScreeningDate)) + '.',
              'Per USPSTF guidelines for individuals older than 65, this patient is due for cervical cancer screening because they have not been adequately screened in the past. Adequate prior screening is defined as having either three consecutive negative cytology results, or two consecutive negative hrHPV or cotest results, within the past 10 years, with the most recent test occurring within the past 5 years, before stopping screening.'
            }
            else
            {
              'No cervical cancer screening is recommended.',
              'Per USPSTF guidelines, this patient is over 65 years of age and has been adequately screened in the past. Therefore, they no longer require cervical cancer screening.',
              'Adequate prior screening is defined as having either three consecutive negative cytology results, or two consecutive negative hrHPV or cotest results, within the past 10 years, with the most recent test occurring within the past 5 years, before stopping screening.'
            }
        else
          null
      else if AgeUnder21 then
        if AllowGradeDRecommendation then
          {
            'Per the USPSTF Grade D Recommendation, cervical cancer screening is not recommended for average-risk, asymptomatic individuals < 21 years of age.'
          }
        else
          null
      else // Age 21-65
        if Age21Through29 and RecommendImmediateScreening then
          { 'Screening is recommended using cervical cytology testing alone.' }
        else if RecommendImmediateScreening then
          {
            // id: '4.M.I.0.0'
            // recommendation: {
              'Cervical cancer screening is recommended.',
              'The screening can be performed using one of the following screening approaches:',
              '1. hrHPV testing alone',
              '2. Cotesting with cervical cytology and hrHPV testing',
              '3. Cervical cytology testing alone'
            // }
          }
        else if Age21Through29 then
          { 'Cervical cancer screening using cervical cytology testing alone is next due on ' + ToString(ToDate(ProposedScreeningDate)) + '.' }
        else if WillBeAge65OrLessAtNextScreening then
            {
              'Cervical cancer screening is next due on ' + ToString(ToDate(ProposedScreeningDate)) + '.',
              'The screening can be performed using one of the following screening approaches:',
              '1. hrHPV testing alone',
              '2. Cotesting with cervical cytology and hrHPV testing',
              '3. Cervical cytology testing alone'
            }
        else 
            {
              'No cervical cancer screening is recommended.',
              'Per USPSTF guidelines, this patient will be older than 65 by the time of their next screening, and has been adequately screened in the past. Therefore, they no longer require cervical cancer screening.',
              'Adequate prior screening is defined as having either three consecutive negative cytology results, or two consecutive negative hrHPV or cotest results, within the past 10 years, with the most recent test occurring within the past 5 years, before stopping screening.'
            }

  else
    null

define ActionShort:
  if RecommendImmediateScreening then 'Cervical Screening Due Now'
  else 'Cervical Screening Up To Date'

define Recommendation: 
  if IsIncludedAndNotExcluded then{
    short: ActionShort,
    date: ToDate(ProposedScreeningDate),
    details:  RecommendationText,
    group: 'Screening: Average Risk'
  }
  else null

//------------------------------------------------------------------------------
// ERRORS
//------------------------------------------------------------------------------

define ErrorNonNilmCytologyResult:
  if Exists(
    (Dash.CervicalCytologyReports) D 
      let CCC: Dash.CollateConclusionCodes(D,Dash.CytologyObservations)
      where (
        Exists(CCC) and
        AnyTrue((CCC) cC return cC !~ Dash."NILM")
      )
  ) then
    'A cytology test was found with a non-NILM result. Consider cervical cancer management.'
  else
    null

define ErrorNonNegativeHpvResult:
  if Exists(
    (Dash.HpvDiagnosticReports) D 
      let CCC: Dash.CollateConclusionCodes(D,Dash.HpvObservations)
      where (
        Exists(CCC) and
        AnyTrue((CCC) cC return (cC in Dash."HPV Negative Results") = false)
      )
  ) then
    'An HPV test was found with a non-negative result. Consider cervical cancer management.'
  else
    null

define AbnormalResultInRecord:
  ErrorNonNilmCytologyResult is not null or
  ErrorNonNegativeHpvResult is not null

define Errors:
  {}

// define Errors: // NOTE: Removing Errors caused by an unknown cytology or HPV result, as this is causing issues when additional conclusion codes are included
//   {
//     ErrorNonNilmCytologyResult,
//     ErrorNonNegativeHpvResult
//   }
//   except { null }

define ErrorsHaveOccurred:
  Exists(Errors)

define NoErrorsHaveOccurred:
  not ErrorsHaveOccurred

//------------------------------------------------------------------------------
// GRADE D EXCLUSION: ABSENCE / REMOVAL OF CERVIX WITHOUT HISTORY OF HIGH GRADE PRECANCER OR CANCER
//------------------------------------------------------------------------------
// Do not screen if cervix has been removed and the patient does not have a history of high-grade cervical precancer or cancer

// IF
//    Removal of cervix procedure (completed)
//    OR Diagnosis of Absence of cervix
//    OR Absence of cervix observation
// AND NOT Diagnosis of High grade pre-cancerous cervical lesion
//    OR Diagnosis of Cervical cancer
//    OR Cervical histology result = "histologic HSIL (CIN2)" or "histologic HSIL (CIN3)" or “histologic AIS” or “histologic cancer”

define HasRemovalOfCervixProcedures:
  Exists(Dash.RemovalOfCervixProcedures)

define HasAbsenceOfCervixDiagnoses:
  Exists(Dash.AbsenceOfCervixDiagnoses)

define HasAbsenceOfCervixObservations:
  Exists(Dash.AbsenceOfCervixObservations)

define AbsenceOrRemovalOfCervix: // TODO: This also appears in LP5. We should be able to consolidate.
  HasRemovalOfCervixProcedures or
  HasAbsenceOfCervixDiagnoses or
  HasAbsenceOfCervixObservations

define AbsenceOrRemovalOfCervixWithoutHistoryOfHighGradePrecancerOrCancer:
  AbsenceOrRemovalOfCervix and not
  (
    HasHighGradePreCancerCervicalLesion or
    HasCervicalCancerDiagnoses or
    Exists(Dash.HighGradeOrCancerHistologyResults)
  )

//------------------------------------------------------------------------------
// GRADE D RECOMMENDATION: INADEQUATE SCREENING FOR INDIVIDUALS OLDER THAN 65
//------------------------------------------------------------------------------
// Enables women older than 65 to be screened if they have not had adequate prior screening and are not at high risk for CC.

define NotAdequatelyScreened:
  not AdequatelyScreened

define AdequatelyScreened:
  HasThreeNegativeCytologyTestsForGradeD or
  HasTwoNegativeHpvTestsForGradeD

define CervicalCytologyTestsForGradeDUnfiltered:
  Common.CompletedDiagnosticReport(
    Common.LookBack(
      [DiagnosticReport: Dash."Pap Test"],
      GradeDAdequatePriorScreeningLookback
    )
  )

define CervicalCytologyTestsForGradeD:
  if AllowGradeDRecommendation then
    CervicalCytologyTestsForGradeDUnfiltered C
      where AnyTrue((C.conclusionCode) cC return cC ~ Dash."NILM")
      return {
        type: 'Cervical Cytology',
        date: Common.DiagnosticReportDate(C)
      }
      sort by date
  else
    null

// NOTE: Revisit after L3 logic is updated for those who have "aged out" of screening
// TODO: Add test cases for Grade D
define HasThreeNegativeCytologyTestsForGradeD:
  if Exists(CervicalCytologyTestsForGradeD) then
    Count(CervicalCytologyTestsForGradeD) >= 3 and
    Last(CervicalCytologyTestsForGradeD).date after Now() - 5 years
  else
    false

define HpvTestsForGradeDUnfiltered:
  Common.CompletedDiagnosticReport(
    Common.LookBack(
      [DiagnosticReport: Dash."HPV Test"],
      GradeDAdequatePriorScreeningLookback
    )
  )

define HpvTestsForGradeD:
  if AllowGradeDRecommendation then
    HpvTestsForGradeDUnfiltered H
      where AnyTrue((H.conclusionCode) cC return cC in Dash."HPV Negative Results")
      return {
        type: 'hrHPV',
        date: Common.DiagnosticReportDate(H)
      }
      sort by date
  else
    null

define HasTwoNegativeHpvTestsForGradeD:
  if Exists(HpvTestsForGradeD) then
    Count(HpvTestsForGradeD) >= 2 and
    Last(HpvTestsForGradeD).date after Now() - 5 years
  else
    false