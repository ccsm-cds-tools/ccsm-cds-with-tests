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
include ScreeningDesExposureLibrary version '1.0.0' called DexExposure
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
parameter GradeDAdequatePriorScreeningLookback default 10 years

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

//------------------------------------------------------------------------------
// EXCLUSIONS
//------------------------------------------------------------------------------
// Included and not excluded from screening logic for symptomatic individuals
// OR Included and not excluded from screening logic for individuals exposed to DES
// OR Included and not excluded from screening logic for Immunocompromised individuals
// OR Diagnosis of High grade pre-cancerous cervical lesion 
// OR Diagnosis of Cervical cancer 
// OR Cervical histology result = "histologic HSIL (CIN2)" or "histologic HSIL (CIN3)"
// OR Abnormal screening result <= 7 years ago (7 years is a parameter in Dash)
// OR Abnormal histology result <= 7 years ago (7 years is a parameter in Dash)

define ExcludedBecauseSymptomatic:
  Symptomatic.IsIncludedAndNotExcluded

define ExcludedBecauseDesExposure:
  DexExposure.IsIncludedAndNotExcluded

define ExcludedBecauseImmunocompromised:
  Immunocompromised.IsIncludedAndNotExcluded

define HasHighGradePreCancerCervicalLesion:
  Exists(Dash.CervicalPrecancerDisorders)

define HasCervicalCancerDiagnoses:
  Exists(Dash.CervicalCancerDiagnoses)

define Cin2OrCin3HistologyResults: // TODO: Add histologic AIS and histologic Cancer. Check to see if this expression is defined elsewhere in L3.
  Dash.HistologyDiagnosticReports H
    where H.conclusionCode includes ToConcept(Dash."CIN2") or
      H.conclusionCode includes ToConcept(Dash."CIN3")

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
  Exists(Cin2OrCin3HistologyResults) or
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

define NilmCytologyReports:
  Dash.NilmCytologyReports R
      return {
        type: 'Cervical Cytology',
        date: Common.DiagnosticReportDate(R)
      }
      sort by date

define MostRecentNilmCytology:
  if Exists(NilmCytologyReports) then
    Last(NilmCytologyReports)
  else
    {
      type: '',
      date: Now() - 200 years
    }

define DateOfMostRecentNilmCytology:
  MostRecentNilmCytology.date

define HasRecentNilmCytology:
  DateOfMostRecentNilmCytology after Now() - CytologyTestingCadence

define NegativeHpvReports:
  Dash.NegativeHpvReports R
    return {
      type: 'hrHPV',
      date: Common.DiagnosticReportDate(R)
    }
    sort by date

define MostRecentNegativeHpvTest:
  if Exists(NegativeHpvReports) then
    Last(NegativeHpvReports)
  else
    {
      type: '',
      date: Now() - 200 years
    }

define DateOfMostRecentNegativeHpv:
  MostRecentNegativeHpvTest.date

define HasRecentNegativeHpvTests:
  DateOfMostRecentNegativeHpv after Now() - PrimaryHpvTestingCadence

define NegativeCotests:
  from Dash."NilmCytologyReports" C, Dash."NegativeHpvReports" H
  where
    (
      Common.AssociateDiagnosticReports(C, H) or
      C.encounter = H.encounter or
      PositionOf(
        Coalesce((C.basedOn) R where R.type = 'ServiceRequest' return R.reference),
        Coalesce((H.basedOn) R where R.type = 'ServiceRequest' return R.reference)
      ) != -1
    )
  return {
      type: 'Cotesting with hrHPV and Cervical Cytology',
      date: Common.DiagnosticReportDate(
        Common.MostRecentDiagnosticReport({C,H})
      )
    }
    sort by date

define MostRecentNegativeCotest:
  if Exists(NegativeCotests) then
    Last(NegativeCotests)
  else
    {
      type: '',
      date: Now() - 200 years
    }

define DateOfMostRecentNegativeCotest:
  MostRecentNegativeCotest.date

define HasRecentNegativeCotest:
  DateOfMostRecentNegativeCotest after Now() - CotestingCadence

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

define LastScreeningType:
  Last(
    ({
      MostRecentNilmCytology,
      MostRecentNegativeHpvTest,
      MostRecentNegativeCotest
    }) T sort by date
  ).type

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
      LastScreeningType = ''
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
      LastScreeningType = ''
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
      LastScreeningType = ''
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
      AbsenceOrRemovalOfCervix // TODO: Make sure that Included group does not have high grade history
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
            if LastScreeningType != '' then
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
              ''
        else
          ''
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
    ''

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

//------------------------------------------------------------------------------
// GRADE D EXCLUSION: ABSENCE / REMOVAL OF CERVIX
//------------------------------------------------------------------------------

define HasRemovalOfCervixProcedures:
  Exists(Dash.RemovalOfCervixProcedures)

define HasAbsenceOfCervixDiagnoses:
  Exists(Dash.AbsenceOfCervixDiagnoses)

define HasAbsenceOfCervixObservations:
  Exists(Dash.AbsenceOfCervixObservations)

define AbsenceOrRemovalOfCervix:
  HasRemovalOfCervixProcedures or
  HasAbsenceOfCervixDiagnoses or 
  HasAbsenceOfCervixObservations

// TODO: Add AbsenceOrRemovalOfCervix And NOT history of high grade precancer / cancer


//------------------------------------------------------------------------------
// GRADE D RECOMMENDATION: ADEQUATE SCREENING FOR INDIVIDUALS OLDER THAN 65
//------------------------------------------------------------------------------

define NotAdequatelyScreened:
  not AdequatelyScreened

define AdequatelyScreened:
  HasThreeNegativeCytologyTestsForGradeD or
  HasTwoNegativeHpvTestsForGradeD

define CervicalCytologyTestsForGradeD:
  if AllowGradeDRecommendation then
    [DiagnosticReport: Dash."Pap Test"] C
      where AnyTrue((C.conclusionCode) cC return cC ~ Dash."NILM") and 
        Common.DiagnosticReportDate(C) > Today() - GradeDAdequatePriorScreeningLookback and
        C.status.value in List{'final', 'amended', 'corrected', 'appended'}
      return {
        type: 'Cervical Cytology',
        date: Common.DiagnosticReportDate(C)
      }
      sort by date
  else
    {
      {
        type: null,
        date: null
      }
    }

define HasThreeNegativeCytologyTestsForGradeD:
  Count(CervicalCytologyTestsForGradeD) >= 3 and
  Last(CervicalCytologyTestsForGradeD).date after Now() - 5 years

define HpvTestsForGradeD:
  if AllowGradeDRecommendation then
    [DiagnosticReport: Dash."HPV Test"] H
      where AnyTrue((H.conclusionCode) cC return cC ~ Dash."Negative HPV Finding") and
        Common.DiagnosticReportDate(H) > Today() - GradeDAdequatePriorScreeningLookback and
        H.status.value in List{'final', 'amended', 'corrected', 'appended'}
      return {
        type: 'hrHPV',
        date: Common.DiagnosticReportDate(H)
      }
      sort by date
  else
    {
      {
        type: null,
        date: null
      }
    }

define HasTwoNegativeHpvTestsForGradeD:
  Count(HpvTestsForGradeD) >= 2 and
  Last(HpvTestsForGradeD).date after Now() - 5 years