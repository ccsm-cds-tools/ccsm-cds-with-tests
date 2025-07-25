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
include DashboardLibrary version '1.0.0' called Dash
include CCSMCommonFunctions version '1.0.0' called Common

//------------------------------------------------------------------------------
// CODE SYSTEMS, VALUE SETS, AND CODES
//------------------------------------------------------------------------------

//------------------------------------------------------------------------------
// PARAMETERS
//------------------------------------------------------------------------------

parameter BiopsyLookbackPeriod default 25 years
parameter BiopsyReferralPeriod default 1 years  // NOTE: Changing from 1 month to 1 year to account for real-world scenarios
parameter HpvTestingGracePeriod default 6 months
parameter ManageTreatmentWithoutPreviousBiopsy default true // A value of true will remove the requirement for a histologic HSIL biopsy or high grade result to be present before treatment in order to manage using Rare Abnormality #4 (section J) or Risk Table 5
parameter RarelyScreenedGracePeriod default 6 months

/***** BEGIN CDS LOGIC ********************************************************/

context Patient

//------------------------------------------------------------------------------
// FUNCTIONS
//------------------------------------------------------------------------------

define HpvTestingInterval:
  5 years + HpvTestingGracePeriod

define RarelyScreenedInterval:
  5 years + RarelyScreenedGracePeriod
    
define function HPVTestingIntervalLookBack(LookBackDate System.DateTime):
  Interval[LookBackDate - HpvTestingInterval, LookBackDate)

// TODO: Confirm that we actually need this
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
  Dash.CytologyInterpretation(conclusions)

define function HpvInterpretation(conclusions List<System.Concept>):
  Dash.HpvInterpretation(conclusions)

define function HighestRankedInterpretation(interpretations List<Tuple { riskTableInput System.String, label System.String, rank System.Integer, grade System.Integer }>):
  Dash.HighestRankedInterpretation(interpretations)

define function BiopsyInterpretation(conclusions List<System.Concept>):
  Dash.BiopsyInterpretation(conclusions)

define function HasNoTreatmentAfterDate(d System.DateTime):
   DateOfLastCervicalPrecancerTreatment is null or 
   not (DateOfLastCervicalPrecancerTreatment occurs after d)

define function HasNoBiopsyOrTreatmentAfterDate(d System.DateTime):
    HasNoTreatmentAfterDate(d) and
   (
    MostRecentBiopsyReport.date is null or
    not (MostRecentBiopsyReport.date occurs after d)
   )


//------------------------------------------------------------------------------
// DATA RETRIEVAL
//------------------------------------------------------------------------------

/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
// HPV TESTS

define HpvReports:
  Dash.HpvDiagnosticReports

define HpvObservations:
  Dash.HpvObservations

define SortedHpvReports:
  (HpvReports) H
  return {
    riskTableInput: HighestRankedInterpretation(
      HpvInterpretation(
        Dash.CollateConclusionCodes(H,HpvObservations)
      )
    ).riskTableInput,
    allConclusions: Dash.CollateConclusionCodes(H,HpvObservations),
    date: Common.DiagnosticReportDate(H)
  }
  sort by date desc

define HpvDates:
  SortedHpvReports H
  return H.date

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

define CytologyObservations:
  Dash.CytologyObservations

define SortedCytologyReports:
  (CervicalCytologyReports) C
  return {
    riskTableInput: HighestRankedInterpretation(
      CytologyInterpretation(
        Dash.CollateConclusionCodes(C,CytologyObservations)
      )
    ).riskTableInput,
    allConclusions: Dash.CollateConclusionCodes(C,CytologyObservations),
    date: Common.DiagnosticReportDate(C)
  }
  sort by date desc

define CytologyDates:
  SortedCytologyReports C
  return C.date
    

// Edge Cases:
// DONE: 1. HPV but no cytology (solution: just use HPV, unless most recent result is primary HPV in which case reflex cytology testing is recommended)
// DONE: 2. Cytology but no HPV (2023 ASCCP Guidelines Errata)
// NOTE: This has been updated based on 2023 ASCCP Guidelines Errata

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

define MostRecentCytologyReportDate:
  if (MostRecentCytologyReport is not null) then
    MostRecentCytologyReport.date
  else
    null

define SecondMostRecentCytologyReport:
  if Count(SortedCytologyReports) > 1 then
    SortedCytologyReports[1]
  else
    null
    
define MostRecentCytologyReportWasWithinPastFiveYears:
  MostRecentCytologyReport.date >= Now() - 5 years

define CytologyInterpretedAsAscusOrAbove:
  MostRecentCytologyReport.riskTableInput in {'ASC-US','LSIL','ASC-H','AGC','HSIL+'}

define AnyCytologyInterpretedAsAscusOrAbove:
  SortedCytologyReports C
    where C.riskTableInput in {'ASC-US','LSIL','ASC-H','AGC','HSIL+'}

/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
// BIOPSIES / HISTOLOGY

define BiopsyReports:
  Common.LookBack(
    Dash.HistologyDiagnosticReports,
    BiopsyLookbackPeriod
  )

define HistologyObservations:
  Dash.HistologyObservations

define SortedBiopsyReports:
  (BiopsyReports) B
  return {
    riskTableInput: HighestRankedInterpretation(
      BiopsyInterpretation(
        Dash.CollateConclusionCodes(B,HistologyObservations, Dash."Biopsy Report")
      )
    ).riskTableInput,
    allConclusions: Dash.CollateConclusionCodes(B,HistologyObservations, Dash."Biopsy Report"),
    date: Common.DiagnosticReportDate(B)
  }
  sort by date desc

define BiopsyDates:
  SortedBiopsyReports B
  return B.date
  
define MostRecentBiopsyReport:
  if Count(SortedBiopsyReports) > 0 then
      SortedBiopsyReports[0]
  else
    null

define MostRecentBiopsyReportDate:
  if (MostRecentBiopsyReport is not null) then
    MostRecentBiopsyReport.date
  else
    null

define MostRecentBiopsyResult:
  MostRecentBiopsyReport.riskTableInput

define MostRecentBiopsyReferralPeriod:
  Interval[MostRecentBiopsyReport.date - BiopsyReferralPeriod, MostRecentBiopsyReport.date)

define FirstBiopsyAfterMostRecentHpvReport:
  Last(  
    (SortedBiopsyReports) B 
    where B.date after MostRecentHpvReport.date
  )
  
  
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

define MostRecentReports:
  ({
    MostRecentHpvReport,
    MostRecentCytologyReport,
    MostRecentBiopsyReport
  }) M
    where M is not null
    return M.date
    sort desc

define MostRecentReport:
  First(MostRecentReports)

define DateOfMostRecentReport:
  if MostRecentReport is not null then ToDate(MostRecentReport)
  else null

/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
// TREATMENTS

// Find CIN2/CIN3 biopsy
define Cin2orCin3Biopsies:
  SortedBiopsyReports S
    where S.riskTableInput in {'CIN2','CIN3'}

define MostRecentCin2orCin3Biopsy:
  First(Cin2orCin3Biopsies)

define Cin3Biopsies:
  SortedBiopsyReports S
    where S.riskTableInput in {'CIN3'}

define LastKnownCin3Biopsy:
  First(Cin3Biopsies)
      
define Cin2Biopsies:
  SortedBiopsyReports S
    where S.riskTableInput in {'CIN2'}

define LastKnownCin2Biopsy:
  First(Cin2Biopsies)
  
define HsilUnspecifiedBiopsies:
  SortedBiopsyReports S
    where S.riskTableInput in {'HSIL, Unspecified'}

define LastKnownHsilUnspecifiedBiopsy:
  First(HsilUnspecifiedBiopsies)
  
// Find AIS biopsy
define AisBiopsies:
  SortedBiopsyReports S
    where S.riskTableInput in {'AIS'}

define LastKnownAisBiopsy:
  First(AisBiopsies)
  
// Look for treatments after this CIN2/CIN3 biopsy
define CervicalPrecancerTreatments:
  Dash.CervicalExcisionProcedures union
    Dash.CervicalAblationProcedures

define CervicalPrecancerTreatmentsAfterBiopsySorted:
  CervicalPrecancerTreatments T
    where Common.ProcedureDate(T) occurs after MostRecentCin2orCin3Biopsy.date
    return {
      date: Common.ProcedureDate(T)
    }
    sort by date

define CervicalPrecancerTreatmentsSorted:
  CervicalPrecancerTreatments T
    return {
      date: ToDate(Common.ProcedureDate(T))
    }
    sort by date

define DateOfLastCervicalPrecancerTreatment:
  if ManageTreatmentWithoutPreviousBiopsy then
    Last(
      CervicalPrecancerTreatmentsSorted
    ).date
  else
    Last(
      CervicalPrecancerTreatmentsAfterBiopsySorted
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
