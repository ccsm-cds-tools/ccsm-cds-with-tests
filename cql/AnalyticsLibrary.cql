/*
  This CQL Library is used to aggregate data that can be used for CQL Analytics
*/

library AnalyticsLibrary version '1.0.0'

using FHIR version '4.0.1'

// Libraries that we will perform analytics on
include DashboardLibrary version '1.0.0' called Dash
include CCSMCommonFunctions version '1.0.0' called CCF
include CollateManagementData version '1.1.0' called CMD
include ManageCommonAbnormality version '1.1.0' called MCA
include ManagementLibrary version '1.0.0' called Management
include ManageRareAbnormality version '1.1.0' called MRA
include ManageSpecialPopulation version '1.1.0' called MSP
include ScreeningLibrary version '1.0.0' called Screening
include ScreeningAverageRiskLibrary version '1.0.0' called SAR
include ScreeningDesExposureLibrary version '1.0.0' called SDE
include ScreeningImmunocompromisedLibrary version '1.0.0' called SIC
include ScreeningSymptomaticLibrary version '1.0.0' called SSL

//------------------------------------------------------------------------------
// PARAMETERS
//------------------------------------------------------------------------------
parameter Analytics default true // Turn analytics generation on or off.

context Patient

//------------------------------------------------------------------------------
// Analytics Data Elements from Libraries
//------------------------------------------------------------------------------
define CollateManagementDataAnalytics:
{
  MostRecentHpvResult: CMD.MostRecentHpvResult,
  SecondMostRecentHpvResult: CMD.SecondMostRecentHpvResult,
  ThirdMostRecentHpvResult: CMD.ThirdMostRecentHpvResult,
  FourthMostRecentHpvResult: CMD.FourthMostRecentHpvResult,
  HpvDates: CMD.HpvDates H return ToString(H),
  MostRecentCytologyCotestResult: CMD.MostRecentCytologyCotestResult,
  SecondMostRecentCytologyCotestResult: CMD.SecondMostRecentCytologyCotestResult,
  ThirdMostRecentCytologyCotestResult: CMD.ThirdMostRecentCytologyCotestResult,
  FourthMostRecentCytologyCotestResult: CMD.FourthMostRecentCytologyCotestResult,
  CytologyDates: CMD.CytologyDates C return ToString(C),
  MostRecentCytologyReportWasWithinPastFiveYears: CMD.MostRecentCytologyReportWasWithinPastFiveYears,
  CytologyInterpretedAsAscusOrAbove: CMD.CytologyInterpretedAsAscusOrAbove,
  AnyCytologyInterpretedAsAscusOrAbove: CMD.AnyCytologyInterpretedAsAscusOrAbove,
  MostRecentBiopsyResult: CMD.MostRecentBiopsyResult,
  MostRecentBiopsyReportDate: ToString(CMD.MostRecentBiopsyReportDate),
  DateOfFirstBiopsyAfterMostRecentHpvReport: CMD.FirstBiopsyAfterMostRecentHpvReport.date,
  BiopsyDates: CMD.BiopsyDates B return ToString(B),
  ReferringHpvResult: CMD.ReferringHpvResult,
  MostRecentCytologyBeforeBiopsy: CMD.MostRecentCytologyBeforeBiopsy,
  DateOfMostRecentCytologyBeforeBiopsy: CMD.MostRecentCytologyBeforeBiopsy.date,
  ReferringCytologyResult: CMD.ReferringCytologyResult,
  DateOfMostRecentReport: ToString(CMD.DateOfMostRecentReport),
  DateOfLastCervicalPrecancerTreatment: ToString(CMD.DateOfLastCervicalPrecancerTreatment),
  MostRecentCytologyReportDate: ToString(CMD.MostRecentCytologyReportDate),
  MostRecentHpvResultPostBiopsy: CMD.MostRecentHpvResultPostBiopsy,
  SecondMostRecentHpvResultPostBiopsy: CMD.SecondMostRecentHpvResultPostBiopsy,
  ThirdMostRecentHpvResultPostBiopsy: CMD.ThirdMostRecentHpvResultPostBiopsy,
  MostRecentCytologyResultPostBiopsy: CMD.MostRecentCytologyResultPostBiopsy,
  SecondMostRecentCytologyResultPostBiopsy: CMD.SecondMostRecentCytologyResultPostBiopsy,
  ThirdMostRecentCytologyResultPostBiopsy: CMD.ThirdMostRecentCytologyResultPostBiopsy,
  MostRecentCin2orCin3BiopsyResult: CMD.MostRecentCin2orCin3Biopsy.riskTableInput,
  MostRecentCin2orCin3BiopsyDate: CMD.MostRecentCin2orCin3Biopsy.date,
  LastKnownCin3BiopsyDate: CMD.LastKnownCin3Biopsy.date,
  LastKnownCin2BiopsyDate: CMD.LastKnownCin2Biopsy.date,
  LastKnownAisBiopsyDate: CMD.LastKnownAisBiopsy.date,
  LastKnownHsilUnspecifiedBiopsyDate: CMD.LastKnownHsilUnspecifiedBiopsy.date,
  MostRecentHpvResultAfterTreatment: CMD.MostRecentHpvResultAfterTreatment,
  SecondMostRecentHpvResultAfterTreatment: CMD.SecondMostRecentHpvResultAfterTreatment,
  ThirdMostRecentHpvResultAfterTreatment: CMD.ThirdMostRecentHpvResultAfterTreatment,
  MostRecentCytologyResultAfterTreatment: CMD.MostRecentCytologyResultAfterTreatment,
  SecondMostRecentCytologyResultAfterTreatment: CMD.SecondMostRecentCytologyResultAfterTreatment,
  ThirdMostRecentCytologyResultAfterTreatment: CMD.ThirdMostRecentCytologyResultAfterTreatment
  
}

define DashboardLibraryAnalytics:
{
  PatientAge: Dash.PatientAge,
  TransgenderMale: Dash.TransgenderMale,
  HasRecentPositiveHpv: Dash.HasRecentPositiveHpv,
  HasRecentAbnormalCytologyResults: Dash.HasRecentAbnormalCytologyResults,
  HasRecentRareCytologyResults: Dash.HasRecentRareCytologyResults,
  HasRecentAbnormalScreening: Dash.HasRecentAbnormalScreening,
  HasRecentAbnormalHistology: Dash.HasRecentAbnormalHistology,
  Immunocompromised: Dash.Immunocompromised,
  MostRecentDistinctImmunocompromisedEvent: Dash.MostRecentDistinctImmunocompromisedEvent,
  MostRecentDistinctImmunocompromisedEventDate: ToString(Dash.MostRecentDistinctImmunocompromisedEventDate),
  DateOfMostRecentPositiveHpv: ToString(CCF.DiagnosticReportDate(Dash.MostRecentPositiveHpv)),
  DateOfMostRecentNegativeHpv: ToString(SAR.DateOfMostRecentNegativeHpv)
}

define ManageCommonAbnormalityAnalytics:
{
  CytologyAloneInRecentHistory: MCA.CytologyAloneInRecentHistory,
  AbnormalCytologyAloneInRecentHistory: MCA.AbnormalCytologyAloneInRecentHistory,
  RarelyScreenedTreatmentRecommendation: MCA.RarelyScreenedTreatmentRecommendation,
  TableRecommendation: MCA.TableRecommendation,
  WhichTableMadeTheRecommendation: MCA.WhichTableMadeTheRecommendation,
  MostRecentCytologyIsNotACotest: MCA.MostRecentCytologyIsNotACotest,
  HpvInterpretedAsPositive: MCA.HpvInterpretedAsPositive,
  MostRecentScreeningResultIsPositive: MCA.MostRecentScreeningResultIsPositive,
  SecondMostRecentHpvInterpretedAsPositive: MCA.SecondMostRecentHpvInterpretedAsPositive,
  DateOfMostRecentPositiveScreeningResult: ToString(MCA.DateOfMostRecentPositiveScreeningResult),
  DateOfMostRecentHpvReport: ToString(MCA.DateOfMostRecentHpvReport),
  PositivePrimaryHpv: MCA.PositivePrimaryHpv,
  HighRiskHPVPositiveResults: MCA.HighRiskHPVPositiveResults,
  PreviousCytologyOrSurveillanceIsOldOrAbsent: MCA.PreviousCytologyOrSurveillanceIsOldOrAbsent,
  IsRarelyScreenedPatient: MCA.IsRarelyScreenedPatient,
  RelevantRow: MCA.RelevantRow,
  LastKnownHsilCytologyDate: MCA.LastKnownHsilCytology.date,
  HasAnyAscusHpvPositiveCotest: MCA.AnyAscusHpvPositiveCotest is not null,
  DateOfLastKnownAscusHpvPositiveCotestBeforeMostRecentPositiveResult: MCA.LastKnownAscusHpvPositiveCotestBeforeMostRecentPositiveResult.date,
  DateOfLastKnownLsilBeforeMostRecentMostRecentHpvReport: MCA.LastKnownLsilBeforeMostRecentMostRecentHpvReport.date,
  DateOfLastKnownCytologyInterpretedAsAscusOrAbove: MCA.LastKnownCytologyInterpretedAsAscusOrAbove.date
}

define ManagementLibraryAnalytics:
{
  HasHighGradePreCancerCervicalLesion: Management.HasHighGradePreCancerCervicalLesion,
  HasCervicalCancerDiagnoses: Management.HasCervicalCancerDiagnoses,
  WhichRarityMadeTheRecommendation: Management.WhichRarityMadeTheRecommendation,
  ManagementRecommendation: Management.ManagementRecommendation,
  HasRecommendation: Management.HasRecommendation,
  DecisionAids: Management.DecisionAids
}

define ManageRareAbnormalityAnalytics:
{
  DateOfLastKnownCytologyInterpretedAsAgc: MRA.LastKnownCytologyInterpretedAsAgc.date,
  HasPositiveHpvAfterTreatmentForHighGradeResult: MRA.HasPositiveHpvAfterTreatmentForHighGradeResult,
  AnyCytologyInterpretedAsAscusOrAboveAfterTreatmentForHighGradeResult: MRA.AnyCytologyInterpretedAsAscusOrAboveAfterTreatmentForHighGradeResult,
  HistologyInterpretedAsCin1OrNormal: MRA.HistologyInterpretedAsCin1OrNormal,
  DateOfLastKnownCytologyInterpretedAsAscHInPast5Years: MRA.LastKnownCytologyInterpretedAsAscHInPast5Years.date,
  HasPersistentAscHBeforeTreatment: MRA.HasPersistentAscHBeforeTreatment,
  CytologyInterpretedAsAgcFavorNeoplasia: MRA.CytologyInterpretedAsAgcFavorNeoplasia,
  CytologyInterpretedAsAis: MRA.CytologyInterpretedAsAis,
  CytologyInterpretedAsHsil: MRA.CytologyInterpretedAsHsil,
  CytologyInterpretedAsAtypicalEndocervicalCells: MRA.CytologyInterpretedAsAtypicalEndocervicalCells,
  CytologyInterpretedAsEndocervicalAis: MRA.CytologyInterpretedAsEndocervicalAis,
  CytologyInterpretedAsEndocervicalCellsFavorNeoplasia: MRA.CytologyInterpretedAsEndocervicalCellsFavorNeoplasia,
  CytologyInterpretedAsAscus: MRA.CytologyInterpretedAsAscus,
  CytologyInterpretedAsLsil: MRA.CytologyInterpretedAsLsil,
  CytologyUnsatisfactory: MRA.CytologyUnsatisfactory,
  CytologyAbsentTransformationZone: MRA.CytologyAbsentTransformationZone,
  CytologyInterpretedAsNilm: MRA.CytologyInterpretedAsNilm,
  SecondMostRecentCytologyInterpretedAsNilm: MRA.SecondMostRecentCytologyInterpretedAsNilm,
  CytologyInterpretedAsBenignEndometrialCells: MRA.CytologyInterpretedAsBenignEndometrialCells,
  CytologyInterpretedAsBenignGlandularCells: MRA.CytologyInterpretedAsBenignGlandularCells,
  CytologyInterpretedAsEndometrialStromalCells: MRA.CytologyInterpretedAsEndometrialStromalCells,
  CytologyInterpretedAsHistiocytes: MRA.CytologyInterpretedAsHistiocytes,
  PositiveHpv16or18Cotest: MRA.PositiveHpv16or18Cotest,
  HistologyInterpretedAsCin2: MRA.HistologyInterpretedAsCin2,
  HistologyInterpretedAsCin3: MRA.HistologyInterpretedAsCin3,
  HistologyInterpretedAsAis: MRA.HistologyInterpretedAsAis,
  HistologyInterpretedAsUnspecifiedHsil: MRA.HistologyInterpretedAsUnspecifiedHsil,
  SecondMostRecentBiopsyResult: MRA.SecondMostRecentBiopsyReport.riskTableInput,
  AnyHistologyInterpretedAsCin2: MRA.AnyHistologyInterpretedAsCin2,
  AnyHistologyInterpretedAsCin3: MRA.AnyHistologyInterpretedAsCin3,
  SecondMostRecentHistologyInterpretedAsCin1OrNormal: MRA.SecondMostRecentHistologyInterpretedAsCin1OrNormal,
  HasHistologyInterpretedAsUnspecifiedHsilOrCin2BeforeMostRecentBiopsy: MRA.HasHistologyInterpretedAsUnspecifiedHsilOrCin2BeforeMostRecentBiopsy,
  MostRecentSurveillanceTestNegative: MRA.MostRecentSurveillanceTestNegative,
  HasTwoNegativeHsilSurveillanceTests: MRA.HasTwoNegativeHsilSurveillanceTests,
  SecondNegativeHsilSurveillanceTestDate: MRA.SecondNegativeHsilSurveillanceTestDate,
  DateOfLastKnownCytologyInterpretedAsHsil: MRA.LastKnownCytologyInterpretedAsHsil.date,
  HasPremenopausalObservationOrCondition: MRA.HasPremenopausalObservationOrCondition,
  HasPostmenopausalObservationOrCondition: MRA.HasPostmenopausalObservationOrCondition,
  AbsenceOrRemovalOfCervix: MRA.AbsenceOrRemovalOfCervix,
  CervixRemovalDate: ToString(MRA.CervixRemovalDate),
  HasColposcopyProcedureAfterMostRecentBiopsy: MRA.HasColposcopyProcedureAfterMostRecentBiopsy,
  HasColposcopyProcedureAfterMostRecentTreatment: MRA.HasColposcopyProcedureAfterMostRecentTreatment,
  RecentlyRespondedYesToFuturePregnancyConcernsQuestion: MRA.RecentlyRespondedYesToFuturePregnancyConcernsQuestion,
  MostRecentTreatmentDate: ToString(MRA.MostRecentTreatmentDate),
  HasTreatmentInLastYear: MRA.HasTreatmentInLastYear,
  HasTreatmentAfterMostRecentBiopsy: MRA.HasTreatmentAfterMostRecentBiopsy,
  HasSurveillanceAfterMostRecentBiopsy: MRA.HasSurveillanceAfterMostRecentBiopsy,
  HasPositiveSurveillanceAfterMostRecentBiopsy: MRA.HasPositiveSurveillanceAfterMostRecentBiopsy,
  HasHistologicHsilWithin12MonthsBeforeTreatment: MRA.HasHistologicHsilWithin12MonthsBeforeTreatment,
  HasTreatmentForHighGradeHistologyOrCytology: MRA.HasTreatmentForHighGradeHistologyOrCytology,
  TreatmentForHighGradeHistologyOrCytologyDate: ToString(MRA.TreatmentForHighGradeHistologyOrCytologyDate),
  HasFirstNegativeSurveillanceTestAfterMostRecentBiopsy: MRA.HasFirstNegativeSurveillanceTestAfterMostRecentBiopsy,
  InitialIntensiveSurveillancePeriod: MRA.InitialIntensiveSurveillancePeriod,
  HasHistologyAfterTreatmentForHighGradeResult: MRA.HasHistologyAfterTreatmentForHighGradeResult,
  WhichRarityMadeTheRecommendation: MRA.WhichRarityMadeTheRecommendation
}
define ManageSpecialPopulationAnalytics:
{
  HasSubsequentLowGradeHistologyReportsSinceMostRecentHsilHistology: Count(MSP.SubsequentLowGradeHistologyReportsSinceMostRecentHsilHistology) > 0,
  HasSubsequentLowGradeCytologyReportsSinceMostRecentHsilHistology: Count(MSP.SubsequentLowGradeCytologyReportsSinceMostRecentHsilHistology) > 0,
  SecondMostRecentCytologyInterpretedAsAscHOrHsil: MSP.SecondMostRecentCytologyInterpretedAsAscHOrHsil,
  BiopsySinceMostRecentCytology: MSP.BiopsySinceMostRecentCytology,
  PregnancyOnset: MSP.PregnancyOnset,
  HistologicAisDuringPregnancy: MSP.HistologicAisDuringPregnancy,
  TwoMostRecentCytologyReportsWithin18MonthsApart: MSP.TwoMostRecentCytologyReportsWithin18MonthsApart,
  HighGradePreCancerCervicalLesionDate: ToString(MSP.HighGradePreCancerCervicalLesionDate.date),
  CervicalCancerDiagnosisDate: ToString(MSP.CervicalCancerDiagnosisDate.date),
  HighGradeOrCancerHistologyResultsDate: ToString(MSP.HighGradeOrCancerHistologyResultsDate.date),
  MostRecentCauseForHysterectomyDate: MSP.MostRecentCauseForHysterectomyDate,
  HysterectomyPerformedForTreatment: MSP.HysterectomyPerformedForTreatment,
  InitialIntensiveSurveillancePeriodPostHysterectomy: MSP.InitialIntensiveSurveillancePeriodPostHysterectomy,
  WhichPopulationMadeTheRecommendation: MSP.WhichPopulationMadeTheRecommendation,
  MostRecentHpvReportWasWithinPastFiveYears: MSP.MostRecentHpvReportWasWithinPastFiveYears
}

define ScreeningLibraryAnalytics:
{
  HasHighGradePreCancerCervicalLesion: Screening.HasHighGradePreCancerCervicalLesion,
  HasCervicalCancerDiagnoses: Screening.HasCervicalCancerDiagnoses,
  HasRecentAbnormalScreening: Screening.HasRecentAbnormalScreening,
  HasRecentAbnormalHistology: Screening.HasRecentAbnormalHistology,
  IsIncludedAndNotExcluded: Screening.IsIncludedAndNotExcluded,
  HasRecommendation: Screening.HasRecommendation,
  SuggestedOrders: Screening.SuggestedOrders,
  DecisionAids: Screening.DecisionAids
}

define ScreeningAverageRiskLibraryAnalytics:
{
  DateOfMostRecentNilmCytology: ToString(SAR.DateOfMostRecentNilmCytology),
  DateOfMostRecentNegativeHpv: ToString(SAR.DateOfMostRecentNegativeHpv),
  DateOfMostRecentNegativeCotest: ToString(SAR.DateOfMostRecentNegativeCotest),
  ProposedDateOfNextCytology: ToString(SAR.ProposedDateOfNextCytology),
  ProposedDateOfNextHpvTest: ToString(SAR.ProposedDateOfNextHpvTest),
  ProposedDateOfNextCotest: ToString(SAR.ProposedDateOfNextCotest),
  LastScreeningType: SAR.LastScreeningType,
  ProposedScreeningDate: ToString(SAR.ProposedScreeningDate),
  RecommendImmediateCervicalCytology: SAR.RecommendImmediateCervicalCytology,
  RecommendImmediatePrimaryHpv: SAR.RecommendImmediatePrimaryHpv,
  RecommendImmediateCotesting: SAR.RecommendImmediateCotesting,
  AbnormalResultInRecord: SAR.AbnormalResultInRecord,
  AbsenceOrRemovalOfCervix: SAR.AbsenceOrRemovalOfCervix,
  AbsenceOrRemovalOfCervixWithoutHistoryOfHighGradePrecancerOrCancer: SAR.AbsenceOrRemovalOfCervixWithoutHistoryOfHighGradePrecancerOrCancer,
  AdequatelyScreened: SAR.AdequatelyScreened,
  HasTwoNegativeHpvTestsForGradeD: SAR.HasTwoNegativeHpvTestsForGradeD
}

define ScreeningDesExposureLibraryAnalytics:
{
  WasExposedToDesInUtero: SDE.WasExposedToDesInUtero,
  ActionShort: SDE.ActionShort
}

define ScreeningImmunocompromisedLibraryAnalytics:
{
  CompletedAnnualCytologyTestSequence: SIC.CompletedAnnualCytologyTestSequence,
  DateOfLastCytology: ToString(SIC.DateOfLastCytology),
  LastCytologyWasCotest: SIC.LastCytologyWasCotest,
  OneNilmCytologySinceImmunosuppressionOnset: SIC.OneNilmCytologySinceImmunosuppressionOnset,
  TwoNilmCytologiesSinceImmunosuppressionOnset: SIC.TwoNilmCytologiesSinceImmunosuppressionOnset,
  ThreeNilmCytologiesSinceImmunosuppressionOnset: SIC.ThreeNilmCytologiesSinceImmunosuppressionOnset,
  DateOfFirstNilmCytologyAfterImmunosuppressionOnset: SIC.DateOfFirstNilmCytologyAfterImmunosuppressionOnset,
  DateOfSecondNilmCytologyAfterImmunosuppressionOnset: SIC.DateOfSecondNilmCytologyAfterImmunosuppressionOnset,
  DateOfThirdNilmCytologyAfterImmunosuppressionOnset: SIC.DateOfThirdNilmCytologyAfterImmunosuppressionOnset
}

define ScreeningSymptomaticLibraryAnalytics:
{
  IsSymptomatic: SSL.IsSymptomatic,
  HasNilmCytologyWithinLast12Months: SSL.HasNilmCytologyWithinLast12Months,
  HasCoincidentNilmCytologyAndNegativeHpvWitinLast3Years: SSL.HasCoincidentNilmCytologyAndNegativeHpvWitinLast3Years,
  HasVisibleCervicalOrVaginalLesion: SSL.HasVisibleCervicalOrVaginalLesion
}
//------------------------------------------------------------------------------
// Analytics Output
//------------------------------------------------------------------------------

define RunAnalytics:
  Analytics

define AnalyticsOutput:
  {
    DashboardLibrary: DashboardLibraryAnalytics,
    CollateManagementData: CollateManagementDataAnalytics,
    ManageCommonAbnormality: ManageCommonAbnormalityAnalytics,
    ManagementLibrary: ManagementLibraryAnalytics,
    ManageRareAbnormality: ManageRareAbnormalityAnalytics,
    ManageSpecialPopulation: ManageSpecialPopulationAnalytics,
    ScreeningLibrary: ScreeningLibraryAnalytics,
    ScreeningAverageRiskLibrary: ScreeningAverageRiskLibraryAnalytics,
    ScreeningDesExposureLibrary: ScreeningDesExposureLibraryAnalytics,
    ScreeningImmunocompromisedLibrary: ScreeningImmunocompromisedLibraryAnalytics,
    ScreeningSymptomaticLibrary: ScreeningSymptomaticLibraryAnalytics
  }
