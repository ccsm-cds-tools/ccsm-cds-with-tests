/*  
  Library: Cervical Cancer Screening for Immunocompromised Individuals
  Author: CMS Alliance to Modernize Healthcare, operated by THE MITRE Corporation.

  (C) 2021 The MITRE Corporation. All Rights Reserved. 
  Approved for Public Release: 21-1556. 
  Distribution Unlimited.

  Unless otherwise noted, this work is available under an Apache 2.0 license. 
  It was produced by the MITRE Corporation for the Division of Cancer Prevention 
  and Control, Centers for Disease Control and Prevention in accordance with the 
  Statement of Work, contract number 75FCMC18D0047, task order number 75D30120F09743.
*/

library ScreeningImmunocompromisedLibrary version '1.0.0'

using FHIR version '4.0.1'

include CDSConnectCommonsforFHIRv401 version '1.0.0' called C3F
include FHIRHelpers version '4.0.1' called FHIRHelpers
include DisplayCervicalCancerMedicalHistory version '1.0.0' called Dash
include CCSMCommonFunctions version '1.0.0' called Common
include TopLevelScreeningLibrary version '1.0.0' called Entry

//------------------------------------------------------------------------------
// PARAMETERS
//------------------------------------------------------------------------------

parameter CytologyWindow default 18 months

/***** BEGIN CDS LOGIC ********************************************************/

context Patient

//------------------------------------------------------------------------------
// INCLUSIONS
//------------------------------------------------------------------------------
// Sex at birth = Female 
//    OR Gender identity = Transgender Male 
// AND "Immunocompromised", which is defined as: 
//   Diagnosis of HIV  
//   OR Solid Organ Transplant Diagnosis Codes  
//   OR Solid Organ Transplant procedure (completed) 
//   OR Diagnosis of Systemic Lupus Erythematosus (SLE)
//   OR Diagnosis of Hematopoietic Stem Cell Transplant (HSCT)  
//   OR Hematopoietic Stem Cell Transplant procedure (completed) 
//   OR Genital Graft versus Host Disease (GvHD)
//      AFTER Hematopoietic Stem Cell Transplant procedure (completed)
//   OR Chronic Graft versus Host Disease (GvHD)
//      AFTER Hematopoietic Stem Cell Transplant procedure (completed)
//   OR 
//     Diagnosis of Inflammatory Bowel Disease (IBD)
//        OR Diagnosis of Rheumatoid Arthritis (RA)
//     AND
//        Immunosuppressant Medication for IBD or RA, Request (completed)
//        OR Immunosuppressant Medication for IBD or RA, Dispensed (completed)
//        OR Immunosuppressant Medication for IBD or RA, Administration (completed)
//        OR Immunosuppressant Medication for IBD or RA, Statement (active)

define Immunocompromised:
  Dash.Immunocompromised

define IsIncluded:
  Entry.FemaleorTransgenderMale and
  Immunocompromised

//------------------------------------------------------------------------------
// EXCLUSIONS
//------------------------------------------------------------------------------
// Removal of cervix procedures (completed)
// OR Diagnosis of Absence of cervix
// OR Absence of cervix observation (final, amended, corrected)
// OR Abnormal screening result <= 7 years ago (7 years is a parameter in Dash)
// OR Abnormal histology result <= 7 years ago (7 years is a parameter in Dash)

define HasRemovalOfCervixProcedures:
  Exists(Dash.RemovalOfCervixProcedures)

define HasAbsenceOfCervixDiagnoses:
  Exists(Dash.AbsenceOfCervixDiagnoses)

define HasAbsenceOfCervixObservations:
  Exists(Dash.AbsenceOfCervixObservations)

define HasRecentAbnormalScreening:
  Dash.HasRecentAbnormalScreening

define HasRecentAbnormalHistology:
  Dash.HasRecentAbnormalHistology

define Excluded:
  HasRemovalOfCervixProcedures or
  HasAbsenceOfCervixDiagnoses or
  HasAbsenceOfCervixObservations or
  HasRecentAbnormalScreening or
  HasRecentAbnormalHistology

//------------------------------------------------------------------------------
// CDS ACTIONS
//------------------------------------------------------------------------------

define IsIncludedAndNotExcluded:
  IsIncluded and
  not Excluded

define DateOfImmunosuppressionOnset:
  Dash.MostRecentDistinctImmunocompromisedEventDate

define RecentCytologyReports: 
  Common.SortedDiagnosticReports(Dash.CervicalCytologyReports)

define RecentCytologyReportsSinceImmunosuppressionOnset:
  RecentCytologyReports R
    where Common.DiagnosticReportDate(R) after DateOfImmunosuppressionOnset

define OneNilmCytologySinceImmunosuppressionOnset:
  Count(RecentCytologyReportsSinceImmunosuppressionOnset) > 0 and
  AnyTrue(
    (RecentCytologyReportsSinceImmunosuppressionOnset[0].conclusionCode) cC 
    return cC ~ Dash."NILM"
  )

define TwoNilmCytologiesSinceImmunosuppressionOnset:
  Count(RecentCytologyReportsSinceImmunosuppressionOnset) > 1 and
  OneNilmCytologySinceImmunosuppressionOnset and
  AnyTrue(
    (RecentCytologyReportsSinceImmunosuppressionOnset[1].conclusionCode) cC 
    return cC ~ Dash."NILM"
  )

define ThreeNilmCytologiesSinceImmunosuppressionOnset:
  Count(RecentCytologyReportsSinceImmunosuppressionOnset) > 2 and
  TwoNilmCytologiesSinceImmunosuppressionOnset and
  AnyTrue(
    (RecentCytologyReportsSinceImmunosuppressionOnset[2].conclusionCode) cC 
    return cC ~ Dash."NILM"
  )

define RecentCytologyReportsSinceImmunosuppressionOnsetFilterForNilm:
  case
    when ThreeNilmCytologiesSinceImmunosuppressionOnset then
      {
        RecentCytologyReportsSinceImmunosuppressionOnset[0],
        RecentCytologyReportsSinceImmunosuppressionOnset[1], 
        RecentCytologyReportsSinceImmunosuppressionOnset[2]
      }
    when TwoNilmCytologiesSinceImmunosuppressionOnset then 
      {
        RecentCytologyReportsSinceImmunosuppressionOnset[0], 
        RecentCytologyReportsSinceImmunosuppressionOnset[1]
      }
    when OneNilmCytologySinceImmunosuppressionOnset then
      {
        RecentCytologyReportsSinceImmunosuppressionOnset[0]
      }
    else null
  end

define NilmCytologyReportsSinceImmunosuppressionOnset:
  RecentCytologyReportsSinceImmunosuppressionOnsetFilterForNilm R
    return {
      type: 'DiagnosticReport',
      date: Common.DiagnosticReportDate(R)
    }
    sort by date

define DateOfFirstNilmCytologyAfterImmunosuppressionOnset:
  if OneNilmCytologySinceImmunosuppressionOnset then 
    NilmCytologyReportsSinceImmunosuppressionOnset[0].date
  else 
    null

define DateOfSecondNilmCytologyAfterImmunosuppressionOnset:
  if TwoNilmCytologiesSinceImmunosuppressionOnset then 
    NilmCytologyReportsSinceImmunosuppressionOnset[1].date
  else 
    null

define DateOfThirdNilmCytologyAfterImmunosuppressionOnset:
  if ThreeNilmCytologiesSinceImmunosuppressionOnset then 
    NilmCytologyReportsSinceImmunosuppressionOnset[2].date
  else 
    null

define CytologySequenceIntact:
  if DateOfFirstNilmCytologyAfterImmunosuppressionOnset is not null then
    if DateOfSecondNilmCytologyAfterImmunosuppressionOnset is not null then
      if DateOfThirdNilmCytologyAfterImmunosuppressionOnset is not null then
        DateOfFirstNilmCytologyAfterImmunosuppressionOnset >  
          DateOfSecondNilmCytologyAfterImmunosuppressionOnset - CytologyWindow
        and
        DateOfSecondNilmCytologyAfterImmunosuppressionOnset >
          DateOfThirdNilmCytologyAfterImmunosuppressionOnset - CytologyWindow
      else
        DateOfFirstNilmCytologyAfterImmunosuppressionOnset >
          DateOfSecondNilmCytologyAfterImmunosuppressionOnset - CytologyWindow
        and
        DateOfSecondNilmCytologyAfterImmunosuppressionOnset > (Today() - CytologyWindow)
    else
      if DateOfFirstNilmCytologyAfterImmunosuppressionOnset before Today() - CytologyWindow then
        false
      else
        true
  else
    false

define Age21Through29:
  AgeInYears() between 21 and 29

define Age30AndOlder:
  AgeInYears() >= 30

define NeedFirstOfThreeAnnualCytologyTests:
  if (
    IsIncludedAndNotExcluded and
    (
      Age21Through29 or
      Age30AndOlder
    ) and
    (
      DateOfFirstNilmCytologyAfterImmunosuppressionOnset is null or
      CytologySequenceIntact = false
    )
  ) then true
  else false

define NeedSecondOfThreeAnnualCytologyTests:
  if (
    DateOfFirstNilmCytologyAfterImmunosuppressionOnset is not null and
    DateOfSecondNilmCytologyAfterImmunosuppressionOnset is null and
    CytologySequenceIntact
  ) then true
  else false

define NeedThirdOfThreeAnnualCytologyTests:
  if (
    DateOfFirstNilmCytologyAfterImmunosuppressionOnset is not null and
    DateOfSecondNilmCytologyAfterImmunosuppressionOnset is not null and 
    DateOfThirdNilmCytologyAfterImmunosuppressionOnset is null and
    CytologySequenceIntact
  ) then true
  else false

define CompletedAnnualCytologyTestSequence:
  DateOfFirstNilmCytologyAfterImmunosuppressionOnset is not null and
  DateOfSecondNilmCytologyAfterImmunosuppressionOnset is not null and 
  DateOfThirdNilmCytologyAfterImmunosuppressionOnset is not null and
  CytologySequenceIntact

define DateOfLastCytology:
  if Count(NilmCytologyReportsSinceImmunosuppressionOnset) > 0 then
    Last(NilmCytologyReportsSinceImmunosuppressionOnset).date
  else
    null

define LastCytology:
  RecentCytologyReportsSinceImmunosuppressionOnset C 
    where Common.DiagnosticReportDate(C) ~ DateOfLastCytology

define CoincidentHpvTests:
  from Dash.HpvDiagnosticReports R, LastCytology C
    where Common.CoincidentDiagnosticReports(R, C)
    return R

define NegativeCotests:
  CoincidentHpvTests R
    where
      R.conclusionCode includes ToConcept(Dash."Negative HPV Finding")
    return {
      type: 'DiagnosticReport',
      date: Common.DiagnosticReportDate(R)
    }

define LastCytologyWasCotest:
  Exists(NegativeCotests)

define TestingCadence:
  if (
    CompletedAnnualCytologyTestSequence or
    (
      LastCytologyWasCotest and
      Age30AndOlder
    )
  ) then 3 years
  else 12 months

define ProposedDateOfNextScreening:
  if DateOfLastCytology is not null then
    if DateOfLastCytology + TestingCadence > Today() then
      DateOfLastCytology + TestingCadence
    else
      Now()
  else
    Now()

define ProposeImmediateTesting:
  Count(NilmCytologyReportsSinceImmunosuppressionOnset) = 0 or
  ProposedDateOfNextScreening same or before Today()

define RecommendationText:
  if ProposeImmediateTesting then
    case
      when Age21Through29 then 
        'Per CDC guidelines, Cervical Cytology screening is indicated.'
      when Age30AndOlder then
        'Per CDC guidelines, cervical cancer screening is indicated using either 1) cotesting with cervical cytology and hrHPV tests, or 2) cervical cytology testing alone. Note: individuals tested with cervical cytology alone should be tested every 12 months for 3 years if cytology results are normal (i.e., NILM).'
      else // No recommendation for Age < 21
        null
    end
  else // Propose Future Testing
    case 
      when Age21Through29 then 
        'Cervical cytology screening is next due on ' + ToString(ToDate(ProposedDateOfNextScreening)) + '.'
      when Age30AndOlder then
        if LastCytologyWasCotest then
          'Cotesting with a cervical cytology test and a hrHPV test is next due on ' + + ToString(ToDate(ProposedDateOfNextScreening)) + '.'
        else
          'Per CDC guidelines, cervical cancer screening using either 1) cotesting with cervical cytology and hrHPV tests, or 2) cervical cytology testing alone is next due on ' + ToString(ToDate(ProposedDateOfNextScreening)) + '.'
      else // No recommendation for Age < 21
        null
    end

define RecommendImmediateCervicalCytology:
  ProposeImmediateTesting and
  (Age21Through29 or Age30AndOlder)

define RecommendImmediateCotesting:
  ProposeImmediateTesting and
  Age30AndOlder

//------------------------------------------------------------------------------
// ERRORS
//------------------------------------------------------------------------------

define ErrorCotestWithMissingHpvResult:
  if (
      Exists(CoincidentHpvTests) and
      (
        AllTrue(
          (CoincidentHpvTests.conclusionCode) aC
            return aC is null
        )
      or 
        Count(CoincidentHpvTests.conclusionCode) ~ 0
      )
    ) then
      'An hrHPV test found as part of a cotest contained no result. Please review patient record to resolve.'
  else
    null

define ErrorCotestWithNonNegativeHpvResult:
  if (
    ErrorCotestWithMissingHpvResult is null and
    AnyTrue(
      (CoincidentHpvTests.conclusionCode) aC
        return aC !~ Dash."Negative HPV Finding"
    )
  ) then
    'An hrHPV test found as part of a cotest contained a non-negative result. Consider cervical cancer management.'
  else
    null

define Errors:
  {
    ErrorCotestWithMissingHpvResult,
    ErrorCotestWithNonNegativeHpvResult
  } 
  except { null }
  union
    Dash.Errors

define ErrorsHaveOccurred:
  Exists(Errors)

define NoErrorsHaveOccurred:
  not ErrorsHaveOccurred