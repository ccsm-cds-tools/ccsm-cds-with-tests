/*
  Library: Management of Abnormal Cervical Cancer Screening Results
  Author: CMS Alliance to Modernize Healthcare, operated by THE MITRE Corporation.

  (C) 2021 The MITRE Corporation. All Rights Reserved.
  Approved for Public Release: 21-1556.
  Distribution Unlimited.

  Unless otherwise noted, this work is available under an Apache 2.0 license.
  It was produced by the MITRE Corporation for the Division of Cancer Prevention
  and Control, Centers for Disease Control and Prevention in accordance with the
  Statement of Work, contract number 75FCMC18D0047, task order number 75D30120F09743.
*/

library CollateManagementData version '1.1.0'

using FHIR version '4.0.1'

include FHIRHelpers version '4.0.1' called FHIRHelpers
include DisplayCervicalCancerMedicalHistory version '1.0.0' called Dash
include CCSMCommonFunctions version '1.0.0' called Common

//------------------------------------------------------------------------------
// CODE SYSTEMS, VALUE SETS, AND CODES
//------------------------------------------------------------------------------

codesystem "SNOMED-CT": 'http://snomed.info/sct'

valueset "HSIL": 'http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113762.1.4.1032.256'
valueset "Normal Histology Finding": 'http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113762.1.4.1032.262'

code "ASC-H": '441088002' from "SNOMED-CT" display 'Atypical squamous cells on cervical Papanicolaou smear cannot exclude high grade squamous intraepithelial lesion (finding)'
code "CIN1": '285836003' from "SNOMED-CT" display 'Cervical intraepithelial neoplasia grade 1 (disorder)'
code "AGC": '441219009' from "SNOMED-CT" display 'Atypical glandular cells on cervical Papanicolaou smear (finding)'
code "HPV16+": '708298003' from "SNOMED-CT" display 'Deoxyribonucleic acid of Human papillomavirus 16 (substance)'
code "HPV18+": '708299006' from "SNOMED-CT" display 'Deoxyribonucleic acid of Human papillomavirus 18 (substance)'
code "LSIL": '62051000119105' from "SNOMED-CT" display 'Low grade squamous intraepithelial lesion on cervical Papanicolaou smear (finding)'
code "ASC-US": '441087007' from "SNOMED-CT" display 'Atypical squamous cells of undetermined significance on cervical Papanicolaou smear (finding)'

//------------------------------------------------------------------------------
// PARAMETERS
//------------------------------------------------------------------------------

parameter BiopsyLookbackPeriod default 25 years
parameter BiopsyReferralPeriod default 1 month
parameter HpvTestingGracePeriod default 6 months

/***** BEGIN CDS LOGIC ********************************************************/

context Patient

//------------------------------------------------------------------------------
// FUNCTIONS
//------------------------------------------------------------------------------

define HpvTestingInterval:
  5 years + HpvTestingGracePeriod

define function HPVTestingIntervalLookBack(LookBackDate System.DateTime):
  Interval[LookBackDate - HpvTestingInterval, LookBackDate)

define function GetEarlierDate(d1 System.DateTime, d2 System.DateTime):
  if d1 is not null then
    if d2 is not null then
      if d1 same or before d2 then d1
      else d2
    else d1
  else
    if d2 is not null then d2
    else null

define function CytologyInterpretation(conclusions List<System.Concept>):
  if conclusions is not null then
    (conclusions) c
    return
      case
        when c ~ Dash."NILM" then {text: 'NILM', rank: 1}
        when c ~ "ASC-US" then {text: 'ASC-US', rank: 2}
        when c ~ "LSIL" then {text: 'LSIL', rank: 3}
        when c ~ "ASC-H" then {text: 'ASC-H', rank: 4}
        when c ~ "AGC" then {text: 'AGC', rank: 5}
        when c in "HSIL" then {text: 'HSIL+', rank: 6}
        else {text: 'ALL', rank: 0}
      end
  else
    {{text: 'ALL', rank: 0}}

/**
 * Takes a list of HPV conclusion codes and maps each to a text value and a numerical 
 * ranking. The text value can be used as input to the risk tables and the numerical 
 * ranking is meant to convey precendence so that the most specific conclusion can 
 * be selected from amongst a group of codes. For instance, an HPV test may come back 
 * both as positive and positive for HPV16. We want to be able to select the latter 
 * in this case as input to the risk tables.
 * @param conclusions - a list of CodeableConcepts
 * @returns List<Tuple { text System.String, rank System.Integer }>
 */
define function HpvInterpretation(conclusions List<System.Concept>):
  (conclusions) c
  return
    case
      when c ~ "HPV16+" then {text: 'HPV16+', rank: 4}
      when c ~ "HPV18+" then {text: 'HPV16-, HPV18+', rank: 3}
      when c in Dash."High Risk HPV Positive Results" then {text: 'HPV-positive', rank: 2}
      when c in Dash."HPV Negative Results" then {text: 'HPV-negative', rank: 1}
      else {text: 'ALL', rank: 0}
    end

/**
 * Takes the output from HpvInterpretation() and returns the text of the
 * interpretation with the highest rank. This allows more specific conclusions to
 * take precedence over more general ones.
 * @param interpretations - a list of tuples
 * @returns System.String the text to be used as input to the risk tables
 */
define function HighestRankedInterpretation(interpretations List<Tuple { text System.String, rank System.Integer }>):
  Last(
    (
      (interpretations) I sort by rank
    ) S
    return S.text
  )

/**
 */
define function BiopsyInterpretation(conclusions List<System.Concept>):
  (conclusions) c
  return
    case
      when c in "Normal Histology Finding" then {text: '<CIN1', rank: 1}
      when c ~ "CIN1" then {text: 'CIN1', rank: 2}
      when c ~ Dash."CIN2" then {text: 'CIN2', rank: 3}
      when c in Dash."Histologic CIN3" then {text: 'CIN3', rank: 4}
      when c in Dash."AIS" then {text: 'AIS', rank: 5}
      when c in Dash."Histologic cancer" then {text: 'Cancer', rank: 6}
      else {text: 'ALL', rank: 0}
    end

//------------------------------------------------------------------------------
// DATA RETRIEVAL
//------------------------------------------------------------------------------

/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
// HPV TESTS

define HpvReports:
  Dash.HpvDiagnosticReports

define SortedHpvReports:
  (HpvReports) H
  return {
    riskTableInput: HighestRankedInterpretation(
      HpvInterpretation(
        H.conclusionCode
      )
    ),
    allConclusions: H.conclusionCode,
    date: Common.DiagnosticReportDate(H)
  }
  sort by date desc

define MostRecentHpvReport:
  if Count(SortedHpvReports) > 0 then
    if SortedHpvReports[0].date included in HPVTestingIntervalLookBack(Today()) then
      SortedHpvReports[0]
    else
      null
  else
    null

define SecondMostRecentHpvReport:
  if Count(SortedHpvReports) > 1 then
    if SortedHpvReports[1].date included in HPVTestingIntervalLookBack(MostRecentHpvReport.date) then
      SortedHpvReports[1]
    else
      null
  else
    null

define ThirdMostRecentHpvReport:
  if Count(SortedHpvReports) > 2 then
    if SortedHpvReports[2].date included in HPVTestingIntervalLookBack(SecondMostRecentHpvReport.date) then
      SortedHpvReports[2]
    else
      null
  else
    null

define FourthMostRecentHpvReport:
  if Count(SortedHpvReports) > 3 then
    if SortedHpvReports[3].date included in HPVTestingIntervalLookBack(ThirdMostRecentHpvReport.date) then
      SortedHpvReports[3]
    else
      null
  else
    null

define MostRecentHpvResult:
  MostRecentHpvReport.riskTableInput

define SecondMostRecentHpvResult:
  SecondMostRecentHpvReport.riskTableInput

define ThirdMostRecentHpvResult:
  ThirdMostRecentHpvReport.riskTableInput

define FourthMostRecentHpvResult:
  FourthMostRecentHpvReport.riskTableInput

/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
// CERVICAL CYTOLOGY

define CervicalCytologyReports:
  Dash.CervicalCytologyReports

define SortedCytologyReports:
  (CervicalCytologyReports) C
  return {
    riskTableInput: HighestRankedInterpretation(
      CytologyInterpretation(
        C.conclusionCode
      )
    ),
    allConclusions: C.conclusionCode,
    date: Common.DiagnosticReportDate(C)
  }
  sort by date desc

// Edge Cases:
// DONE: 1. HPV but no cytology (solution: just use HPV)
// TODO: 2. Cytology but no HPV (no solution: display error)
// NOTE: This is being updated based on "gaps" document

define MostRecentCytologyCotest:
  Coalesce(
    (SortedCytologyReports) S
      where S.date within 1 day of MostRecentHpvReport.date
  )

define SecondMostRecentCytologyCotest:
  Coalesce(
    (SortedCytologyReports) S
      where S.date within 1 day of SecondMostRecentHpvReport.date
  )

define ThirdMostRecentCytologyCotest:
  Coalesce(
    (SortedCytologyReports) S
      where S.date within 1 day of ThirdMostRecentHpvReport.date
  )

define FourthMostRecentCytologyCotest:
  Coalesce(
    (SortedCytologyReports) S
      where S.date within 1 day of FourthMostRecentHpvReport.date
  )

define MostRecentCytologyCotestResult:
  if MostRecentHpvReport is null then
    null
  else
    if MostRecentCytologyCotest is null then
      'ALL'
    else
      MostRecentCytologyCotest.riskTableInput

define SecondMostRecentCytologyCotestResult:
  if SecondMostRecentHpvReport is null then
    null
  else
    if SecondMostRecentCytologyCotest is null then
      'ALL'
    else
      SecondMostRecentCytologyCotest.riskTableInput

define ThirdMostRecentCytologyCotestResult:
  if ThirdMostRecentHpvReport is null then
    null
  else
    if ThirdMostRecentCytologyCotest is null then
      'ALL'
    else
      ThirdMostRecentCytologyCotest.riskTableInput

define FourthMostRecentCytologyCotestResult:
  if FourthMostRecentHpvReport is null then
    null
  else
    if FourthMostRecentCytologyCotest is null then
      'ALL'
    else
      FourthMostRecentCytologyCotest.riskTableInput

// Just cytology... not necessarily a cotest
define MostRecentCytologyReport:
  if Count(SortedCytologyReports) > 0 then
    SortedCytologyReports[0]
  else
    null

define MostRecentCytologyReportWasWithinPastFiveYears:
  MostRecentCytologyReport.date >= Now() - 5 years

/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
// BIOPSIES / HISTOLOGY

define BiopsyReports:
  Common.LookBack(
    Dash.HistologyDiagnosticReports,
    BiopsyLookbackPeriod
  )

define SortedBiopsyReports:
  (BiopsyReports) B
  return {
    riskTableInput: HighestRankedInterpretation(
      BiopsyInterpretation(
        B.conclusionCode
      )
    ),
    allConclusions: B.conclusionCode,
    date: Common.DiagnosticReportDate(B)
  }
  sort by date desc

define MostRecentBiopsyReport:
  if Count(SortedBiopsyReports) > 0 then
      SortedBiopsyReports[0]
  else
    null

define MostRecentBiopsyResult:
  MostRecentBiopsyReport.riskTableInput

define MostRecentBiopsyReferralPeriod:
  Interval[MostRecentBiopsyReport.date - BiopsyReferralPeriod, MostRecentBiopsyReport.date)

define ReferringHpvResult:
  if MostRecentHpvReport.date included in MostRecentBiopsyReferralPeriod then
    MostRecentHpvResult
  else if SecondMostRecentHpvReport.date included in MostRecentBiopsyReferralPeriod then
    SecondMostRecentHpvResult
  else if ThirdMostRecentHpvReport.date included in MostRecentBiopsyReferralPeriod then
    ThirdMostRecentHpvResult
  else if FourthMostRecentHpvReport.date included in MostRecentBiopsyReferralPeriod then
    FourthMostRecentHpvResult
  else
    'ALL'

define MostRecentCytologyBeforeBiopsy:
  Coalesce(
    (SortedCytologyReports) S
      where S.date included in MostRecentBiopsyReferralPeriod
  )

define MostRecentCytologyResultBeforeBiopsy:
  MostRecentCytologyBeforeBiopsy.riskTableInput

define ReferringCytologyResult:
  if MostRecentCytologyCotest.date included in MostRecentBiopsyReferralPeriod then
    MostRecentCytologyCotestResult
  else if SecondMostRecentCytologyCotest.date included in MostRecentBiopsyReferralPeriod then
    SecondMostRecentCytologyCotestResult
  else if ThirdMostRecentCytologyCotest.date included in MostRecentBiopsyReferralPeriod then
    ThirdMostRecentCytologyCotestResult
  else if FourthMostRecentCytologyCotest.date included in MostRecentBiopsyReferralPeriod then
    FourthMostRecentCytologyCotestResult
  else if MostRecentCytologyBeforeBiopsy is not null then
    MostRecentCytologyResultBeforeBiopsy
  else
    'ALL'

define MostRecentHpvResultPostBiopsy:
  if MostRecentHpvReport.date occurs after MostRecentBiopsyReport.date then
    MostRecentHpvResult
  else
    null

define MostRecentCytologyResultPostBiopsy:
  if MostRecentCytologyCotest.date occurs after MostRecentBiopsyReport.date then
    MostRecentCytologyCotestResult
  else
    null

define SecondMostRecentHpvResultPostBiopsy:
  if SecondMostRecentHpvReport.date occurs after MostRecentBiopsyReport.date then
    SecondMostRecentHpvResult
  else
    null

define SecondMostRecentCytologyResultPostBiopsy:
  if SecondMostRecentCytologyCotest.date occurs after MostRecentBiopsyReport.date then
    SecondMostRecentCytologyCotestResult
  else
    null

define ThirdMostRecentHpvResultPostBiopsy:
  if ThirdMostRecentHpvReport.date occurs after MostRecentBiopsyReport.date then
    ThirdMostRecentHpvResult
  else
    null

define ThirdMostRecentCytologyResultPostBiopsy:
  if ThirdMostRecentCytologyCotest.date occurs after MostRecentBiopsyReport.date then
    ThirdMostRecentCytologyCotestResult
  else
    null

/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
// TREATMENTS

// Find CIN2/CIN3 biopsy
define Cin2orCin3Biopsies:
  SortedBiopsyReports S
    where S.riskTableInput in {'CIN2','CIN3'}

define MostRecentCin2orCin3Biopsy:
  First(Cin2orCin3Biopsies)

// Look for treatments after this CIN2/CIN3 biopsy
define CervicalPrecancerTreatments:
  Dash.CervicalExcisionProcedures union
    Dash.CervicalAblationProcedures

define CervicalPrecancerTreatmentsAfterBiopsy:
  CervicalPrecancerTreatments T
    where Common.ProcedureDate(T) occurs after MostRecentCin2orCin3Biopsy.date
    return {
      date: Common.ProcedureDate(T)
    }
    sort by date

define DateOfLastCervicalPrecancerTreatment:
  Last(
    CervicalPrecancerTreatmentsAfterBiopsy
  ).date

// Look for HPV/pap tests after treatment
define MostRecentHpvResultAfterTreatment:
  if MostRecentHpvReport.date occurs after DateOfLastCervicalPrecancerTreatment then
    MostRecentHpvResult
  else
    null

define SecondMostRecentHpvResultAfterTreatment:
  if SecondMostRecentHpvReport.date occurs after DateOfLastCervicalPrecancerTreatment then
    SecondMostRecentHpvResult
  else
    null

define ThirdMostRecentHpvResultAfterTreatment:
  if ThirdMostRecentHpvReport.date occurs after DateOfLastCervicalPrecancerTreatment then
    ThirdMostRecentHpvResult
  else
    null

define MostRecentCytologyResultAfterTreatment:
  if MostRecentHpvResultAfterTreatment is null then
    null
  else
    MostRecentCytologyCotestResult

define SecondMostRecentCytologyResultAfterTreatment:
  if SecondMostRecentHpvResultAfterTreatment is null then
    null
  else
    SecondMostRecentCytologyCotestResult

define ThirdMostRecentCytologyResultAfterTreatment:
  if ThirdMostRecentHpvResultAfterTreatment is null then
    null
  else
    ThirdMostRecentCytologyCotestResult
