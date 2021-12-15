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
include TopLevelScreeningLibrary version '1.0.0' called Entry
include DisplayCervicalCancerMedicalHistory version '1.0.0' called Dash
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
// TODO: Add parameter for Grade D recommendation for patients < 21
parameter GradeDAdequatePriorScreeningLookback default 10 years // TODO: We may want to change to 11 years to allow for wiggle room - Pending discussion with L2

/***** BEGIN CDS LOGIC ********************************************************/

context Patient

//------------------------------------------------------------------------------
// INCLUSIONS
//------------------------------------------------------------------------------
// Age >=21 years old
// AND 
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
      AgeInYears() > 65
    )
  ) and 
  Entry.FemaleorTransgenderMale

// TODO: Add Grade D Inclusions (negative recommendations) for patients < 21

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

define Age21Through29:
  AgeInYears() between 21 and 29

define Age30Through65:
  AgeInYears() between 30 and 65

define AgeOver65:
  AgeInYears() > 65

define MostRecentNilmCytology:
  if Exists(Dash.MostRecentNilmCytology) then
    {
      type: 'Cervical Cytology',
      date: Common.DiagnosticReportDate(Dash.MostRecentNilmCytology)
    }
  else
    null

define DateOfMostRecentNilmCytology:
  if Exists(MostRecentNilmCytology) then
    MostRecentNilmCytology.date
  else null

define MostRecentNegativeHpvTest:
  if Exists(Dash.MostRecentNegativeHpv) then
    {
      type: 'hrHPV',
      date: Common.DiagnosticReportDate(Dash.MostRecentNegativeHpv)
    }
  else
    null 

define DateOfMostRecentNegativeHpv:
  if Exists(MostRecentNegativeHpvTest) then 
    MostRecentNegativeHpvTest.date
  else 
    null

define MostRecentNegativeCotest:
  if Exists(MostRecentNilmCytology) and Exists(MostRecentNegativeHpvTest) then
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
  if Exists(MostRecentNegativeCotest) then 
    MostRecentNegativeCotest.date
  else 
    null

define ProposedDateOfNextCytology:
  if DateOfMostRecentNilmCytology is not null then
    if DateOfMostRecentNilmCytology + CytologyTestingCadence > Today() then
      DateOfMostRecentNilmCytology + CytologyTestingCadence
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

define RecentScreenings:
  {
    MostRecentNilmCytology,
    MostRecentNegativeHpvTest,
    MostRecentNegativeCotest
  }
  except { null }

define LastScreeningType:
  if Exists(RecentScreenings) then 
    Last(
      (RecentScreenings) T sort by date
    ).type
  else 
    'n/a' // Indicates that no recent screening was found

define ProposedScreeningDate:
  if LastScreeningType = 'Cervical Cytology' then
    ProposedDateOfNextCytology
  else if LastScreeningType = 'hrHPV' then
    ProposedDateOfNextHpvTest
  else if LastScreeningType = 'Cotesting with hrHPV and Cervical Cytology' then
    ProposedDateOfNextCotest
  else
    Today()

define RecommendImmediateCervicalCytology:
  IsIncludedAndNotExcluded and
  (
    ProposedDateOfNextCytology = Now() and
    (
      LastScreeningType = 'Cervical Cytology' or
      LastScreeningType = 'n/a'
    ) and
    (
      Age21Through29 or
      Age30Through65 or
      (
        AllowGradeDRecommendation and
        AgeOver65 and
        NotAdequatelyScreened
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

define RecommendationText:
  if IsIncludedAndNotExcluded then
    if (
      AllowGradeDExclusion and
      AbsenceOrRemovalOfCervixWithoutHistoryOfHighGradePrecancerOrCancer
    ) then
      'Per the USPSTF Grade D Recommendation, cervical cancer screening is not recommended for this patient because they do not have a cervix and there is no evidence of high grade precancer/cancer in their medical history.'
    else
      if AgeOver65 then
        if AllowGradeDRecommendation then
          if (
            RecommendImmediateCervicalCytology or
            RecommendImmediatePrimaryHpv or
            RecommendImmediateCotesting
          ) then
            if LastScreeningType != 'n/a' then
              'Per USPSTF guidelines, this patient is due for cervical cancer screening because they have not been adequately screened in the past. ' + 
              'Adequate testing is defined as having: 1) three consecutive negative cytology results within 10 years prior to screening, ' + 
              '2) two consecutive negative hrHPV results within 10 years prior to the end of screening, with the most recent test occurring within 5 years or ' + 
              '3) two consecutive negative cotesting results within 10 years prior to the end of screening, with the most recent test occurring within 5 years. ' +
              'It appears that this patient is on a screening regimen that includes ' + LastScreeningType + '. To meet "adequate testing criteria", ' + LastScreeningType + ' is recommended.'
            else
              'Per USPSTF guidelines, this patient is due for cervical cancer screening because they have not been adequately screened in the past. ' + 
              'Adequate testing is defined as having: 1) three consecutive negative cytology results within 10 years prior to screening, ' + 
              '2) two consecutive negative hrHPV results within 10 years prior to the end of screening, with the most recent test occurring within 5 years or ' + 
              '3) two consecutive negative cotesting results within 10 years prior to the end of screening, with the most recent test occurring within 5 years. ' + 
              'To meet "adequate testing criteria", a 1) cervical cytology test or, 2) hrHPV test, or 3) a cotest (which includes a cervical cytology test and a hrHPV test) is recommended.'
          else
            if NotAdequatelyScreened then
              LastScreeningType + ' is next due on ' + ToString(ToDate(ProposedScreeningDate)) +
              '. Note: ' + LastScreeningType + ' seems to either 1) be the preferred screening approach, or 2) is most evident in the patient record. Per USPSTF guidelines, screening can be performed by using: 1) cervical cytology testing alone, 2) hrHPV testing alone, or 3) cotesting with cervical cytology testing and hrHPV testing.'
            else
              'Per USPSTF guidelines, this patient is over 65 years of age and has been adequately screened in the past. Therefore, they no longer require cervical cancer screening.'
        else
          null
      else // Age 65 or younger
        if (
          RecommendImmediateCervicalCytology or
          RecommendImmediatePrimaryHpv or
          RecommendImmediateCotesting
        ) then
          'Per USPSTF guidelines, this patient is due for cervical cancer screening. The screening can be performed by using: 1) cervical cytology testing alone, 2) hrHPV testing alone, or 3) cotesting with cervical cytology testing and hrHPV testing.'
        else
          LastScreeningType + ' is next due on ' + ToString(ToDate(ProposedScreeningDate)) +
          '. Note: ' + LastScreeningType + ' seems to either 1) be the preferred screening approach, or 2) is most evident in the patient record. Per USPSTF guidelines, screening can be performed by using: 1) cervical cytology testing alone, 2) hrHPV testing alone, or 3) cotesting with cervical cytology testing and hrHPV testing.'
  else
    null

//------------------------------------------------------------------------------
// ERRORS
//------------------------------------------------------------------------------

define ErrorMissingCytologyResult:
  if (
      Exists(CervicalCytologyTestsForGradeDUnfiltered) and
      (
        AnyTrue(
          (CervicalCytologyTestsForGradeDUnfiltered.conclusionCode) aC
            return aC is null
        )
      or 
        Count(CervicalCytologyTestsForGradeDUnfiltered.conclusionCode) ~ 0
      )
    ) then
      'A cytology test was found with no result. Please review patient record to resolve.'
  else
    null

define ErrorUnexpectedCytologyResult:
    if (
      ErrorMissingCytologyResult is null and
      AnyTrue(
        (CervicalCytologyTestsForGradeDUnfiltered.conclusionCode) aC
          return aC !~ Dash."NILM"
      )
    ) then
      'A Cytology test was found with a non-NILM result. Consider cervical cancer management.'
    else
      null

define ErrorMissingHpvResult:
  if (
      Exists(HpvTestsForGradeDUnfiltered) and
      (
        AnyTrue(
          (HpvTestsForGradeDUnfiltered.conclusionCode) aC
            return aC is null
        )
      or 
        Count(HpvTestsForGradeDUnfiltered.conclusionCode) ~ 0
      )
    ) then
      'An hrHPV test was found with no result. Please review patient record to resolve.'
  else
    null

define ErrorUnexpectedHpvResult:
    if (
      ErrorMissingHpvResult is null and
      AnyTrue(
        (HpvTestsForGradeDUnfiltered.conclusionCode) aC
          return aC !~ Dash."Negative HPV Finding"
      )
    ) then
      'An hrHPV test was found with a non-NILM result. Consider cervical cancer management.'
    else
      null
    
define Errors:
  {
    ErrorMissingCytologyResult,
    ErrorUnexpectedCytologyResult,
    ErrorMissingHpvResult,
    ErrorUnexpectedHpvResult
  } 
  except { null }
  union
    Dash.Errors

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
      where AnyTrue((H.conclusionCode) cC return cC ~ Dash."Negative HPV Finding")
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