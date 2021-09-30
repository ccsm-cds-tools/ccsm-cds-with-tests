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
// CODE SYSTEMS, VALUE SETS, AND CODES
//------------------------------------------------------------------------------

codesystem "LOINC": 'http://loinc.org'

// Standard codes
code "Had Intercourse": '64728-9' from "LOINC" display 'Have you ever had vaginal intercourse' // TODO: This criteria was deleted. Remove here in L3.

//------------------------------------------------------------------------------
// PARAMETERS
//------------------------------------------------------------------------------

parameter CytologyWindow default 18 months
parameter SexualActivityLookBack default 12 months // TODO: Remove. Sexual Activity is no longer a factor.

/***** BEGIN CDS LOGIC ********************************************************/

context Patient

//------------------------------------------------------------------------------
// FUNCTIONS
//------------------------------------------------------------------------------

define function DateOfCondition(C Condition):
  Coalesce(
    (C.onset as FHIR.dateTime).value,
    (C.onset as FHIR.Period)."end".value,
    (C.onset as FHIR.Period)."start".value,
    C.recordedDate.value
  )

define function DateOfProcedure(P Procedure):
  Coalesce(
    (P.performed as FHIR.dateTime).value,
    (P.performed as FHIR.Period)."end".value,
    (P.performed as FHIR.Period)."start".value
  )

//------------------------------------------------------------------------------
// INCLUSIONS
//------------------------------------------------------------------------------
// Sex at birth = Female 
// OR Gender identity = Transgender Male 
// AND "Immunocompromised", which is defined as: 
//   HIV  
//     OR Solid Organ Transplant Diagnosis Codes  
//     OR Solid Organ Transplant procedure (completed) 
//     OR Diagnosis of Systemic Lupus Erythematosus (SLE)
//     OR Diagnosis of Hematopoietic Stem Cell Transplant (HSCT)  
//     OR Hematopoietic Stem Cell Transplant procedure (completed) 
//     OR Genital Graft versus Host Disease 
//     OR Chronic Graft versus Host Disease 
//   OR 
//     Diagnosis of Inflammatory Bowel Disease 
//       OR Diagnosis of Rheumatoid Arthritis 
//     AND
//       Immunosuppressant, Request (completed) 
//         OR Immunosuppressant, Dispensed (completed) 
//         OR Immunosuppressant, Administration (completed) 
//         OR Immunosuppressant, Statement (active)

define Immunocompromised:
  Dash.Immunocompromised

define IsIncluded:
  Entry.FemaleorTransgenderMale and
  Immunocompromised

//------------------------------------------------------------------------------
// EXCLUSIONS
//------------------------------------------------------------------------------
// Removal of cervix (completed)
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

define ImmunosuppressionConditions:
  Dash.ImmunocompromisedConditions

define DateOfMostRecentImmunosuppressionCondition:
  DateOfCondition(
    C3F.MostRecentCondition(
      ImmunosuppressionConditions
    )
  )

define ImmunosuppressionProcedures:
  Dash.SolidOrganTransplantProcedures union
  Dash.HematopoieticStemCellTransplantProcedures

define DateOfMostRecentImmunosuppressionProcedure:
  DateOfProcedure(
    C3F.MostRecentProcedure(
      ImmunosuppressionProcedures
    )
  )

define DateOfImmunosuppressionOnset:
  if DateOfMostRecentImmunosuppressionCondition is not null then
    if DateOfMostRecentImmunosuppressionProcedure is not null then
      if DateOfMostRecentImmunosuppressionCondition after DateOfMostRecentImmunosuppressionProcedure then
        DateOfMostRecentImmunosuppressionCondition
      else
        DateOfMostRecentImmunosuppressionProcedure
    else
      DateOfMostRecentImmunosuppressionCondition
  else
    if DateOfMostRecentImmunosuppressionProcedure is not null then
      DateOfMostRecentImmunosuppressionProcedure
    else
      null

define NilmCytologyReportsSinceImmunosuppressionOnset:
  Dash.NilmCytologyReports R
    where Common.DiagnosticReportDate(R) after DateOfImmunosuppressionOnset
    return {
      type: 'DiagnosticReport',
      date: Common.DiagnosticReportDate(R)
    }
    sort by date

define DateOfFirstNilmCytologyAfterImmunosuppressionOnset:
  if Count(NilmCytologyReportsSinceImmunosuppressionOnset) > 0 then 
    NilmCytologyReportsSinceImmunosuppressionOnset[0].date
  else 
    null

define DateOfSecondNilmCytologyAfterImmunosuppressionOnset:
  if Count(NilmCytologyReportsSinceImmunosuppressionOnset) > 1 then 
    NilmCytologyReportsSinceImmunosuppressionOnset[1].date
  else 
    null

define DateOfThirdNilmCytologyAfterImmunosuppressionOnset:
  if Count(NilmCytologyReportsSinceImmunosuppressionOnset) > 2 then 
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
    else
      if DateOfFirstNilmCytologyAfterImmunosuppressionOnset before Today() - CytologyWindow then
        false
      else
        true
  else
    false

define Under21:
  AgeInYears() < 21

define Age21Through29:
  AgeInYears() between 21 and 29

define Age30AndOlder:
  AgeInYears() >= 30

define ObservationsOfSexualActivity:
  C3F.Verified(
    C3F.ObservationLookBack(
      [Observation: "Had Intercourse"] Obs
        where Obs.value includes ToConcept(Dash."Yes"),
      SexualActivityLookBack
    )
  )

define RecentOnsetSexualActivity:
  Exists(ObservationsOfSexualActivity)

define NoCytologySinceSexualActivityOnset:
  not Exists(
    Dash.CervicalCytologyReports C
      where Common.DiagnosticReportDate(C) after
      Common.ObservationDate(
        C3F.MostRecent(
          ObservationsOfSexualActivity
        )
      )
  )

define NeedFirstOfThreeAnnualCytologyTests:
  if (
    (
      IsIncludedAndNotExcluded and
      Under21 and 
      RecentOnsetSexualActivity and
      NoCytologySinceSexualActivityOnset
    ) or
    (
      IsIncludedAndNotExcluded and
      (
        Age21Through29 or
        Age30AndOlder
      ) and
      (
        DateOfFirstNilmCytologyAfterImmunosuppressionOnset is null or
        CytologySequenceIntact = false
      )
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

define NegativeHpvReportsSinceImmunosuppressionOnset:
  Dash.HpvDiagnosticReports R
    where
      R.conclusionCode includes ToConcept(Dash."Negative HPV Finding") and
      Common.DiagnosticReportDate(R) after DateOfImmunosuppressionOnset
    return {
      type: 'DiagnosticReport',
      date: Common.DiagnosticReportDate(R)
    }
    sort by date

define LastCytologyWasCotest:
  Exists(
    NegativeHpvReportsSinceImmunosuppressionOnset H
      where H.date within 1 day of DateOfLastCytology
  )

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
    if Under21 or Age21Through29 then
      'Per CDC guidelines, Cervical Cytology screening is indicated.'
    else
      'Per CDC guidelines, cervical cancer screening is indicated using either 1) cotesting with cervical cytology and hrHPV tests, or 2) cervical cytology testing alone. Note: individuals tested with cervical cytology alone should be tested every 12 months for 3 years if cytology results are normal (i.e., NILM).'
  else
    if Under21 or Age21Through29 then
      'Cervical cytology screening is next due on ' + ToString(ToDate(ProposedDateOfNextScreening)) + '.'
    else
      if LastCytologyWasCotest then
        'Cotesting with a cervical cytology test and a hrHPV test is next due on ' + + ToString(ToDate(ProposedDateOfNextScreening)) + '.'
      else
        'Cervical cytology screening is next due on ' + ToString(ToDate(ProposedDateOfNextScreening)) + '.'

define RecommendImmediateCervicalCytology:
  ProposeImmediateTesting

define RecommendImmediateCotesting:
  ProposeImmediateTesting and
  Age30AndOlder

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