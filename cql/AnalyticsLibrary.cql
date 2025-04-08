/*
  This CQL Library is used to aggregate data that can be used for CQL Analytics
*/

library AnalyticsLibrary version '1.0.0'


using FHIR version '4.0.1'

// Libraries that we will perform analytics on
include DashboardLibrary version '1.0.0' called Dash
include CollateManagementData version '1.1.0' called CDM
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
// CollateManagementData.cql----------------------------------------------------|
define CollateManagementDataAnalytics:
{
  MostRecentHpvResult: CDM.MostRecentHpvResult,
  SecondMostRecentHpvResult: CDM.SecondMostRecentHpvResult,
  ThirdMostRecentHpvResult: CDM.ThirdMostRecentHpvResult,
  FourthMostRecentHpvResult: CDM.FourthMostRecentHpvResult,
  MostRecentCytologyCotestResult: CDM.MostRecentCytologyCotestResult,
  SecondMostRecentCytologyCotestResult: CDM.SecondMostRecentCytologyCotestResult,
  ThirdMostRecentCytologyCotestResult: CDM.ThirdMostRecentCytologyCotestResult,
  FourthMostRecentCytologyCotestResult: CDM.FourthMostRecentCytologyCotestResult,
  MostRecentCytologyReportWasWithinPastFiveYears: CDM.MostRecentCytologyReportWasWithinPastFiveYears,
  CytologyInterpretedAsAscusOrAbove: CDM.CytologyInterpretedAsAscusOrAbove,
  AnyCytologyInterpretedAsAscusOrAbove: CDM.AnyCytologyInterpretedAsAscusOrAbove,
  MostRecentBiopsyResult: CDM.MostRecentBiopsyResult,
  ReferringHpvResult: CDM.ReferringHpvResult,
  MostRecentCytologyBeforeBiopsy: CDM.MostRecentCytologyBeforeBiopsy,
  ReferringCytologyResult: CDM.ReferringCytologyResult,
  DateOfLastCervicalPrecancerTreatment: CDM.DateOfLastCervicalPrecancerTreatment
}

// DashboardLibrary.cql---------------------------------------------------------|
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
  MostRecentDistinctImmunocompromisedEventDate: Dash.MostRecentDistinctImmunocompromisedEventDate
}

define ManageCommonAbnormalityAnalytics:
{
  HpvDates: MCA.HpvDates,
  CytologyAloneInRecentHistory: MCA.CytologyAloneInRecentHistory,
  AbnormalCytologyAloneInRecentHistory: MCA.AbnormalCytologyAloneInRecentHistory,
  RarelyScreenedTreatmentRecommendation: MCA.RarelyScreenedTreatmentRecommendation,
  TableRecommendation: MCA.TableRecommendation,
  WhichTableMadeTheRecommendation: MCA.WhichTableMadeTheRecommendation,
  MostRecentCytologyIsNotACotest: MCA.MostRecentCytologyIsNotACotest,
  HpvInterpretedAsPositive: MCA.HpvInterpretedAsPositive,
  SecondMostRecentHpvInterpretedAsPositive: MCA.SecondMostRecentHpvInterpretedAsPositive,
  DateOfMostRecentPositiveScreeningResult: MCA.DateOfMostRecentPositiveScreeningResult,
  DateOfMostRecentHpvReport: MCA.DateOfMostRecentHpvReport,
  PositivePrimaryHpv: MCA.PositivePrimaryHpv,
  HighRiskHPVPositiveResults: MCA.HighRiskHPVPositiveResults,
  PreviousCytologyOrSurveillanceIsOldOrAbsent: MCA.PreviousCytologyOrSurveillanceIsOldOrAbsent,
  IsRarelyScreenedPatient: MCA.IsRarelyScreenedPatient,
  RelevantRow: MCA.RelevantRow
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
  HasPositiveHpvAfterTreatmentForHighGradeResult: MRA.HasPositiveHpvAfterTreatmentForHighGradeResult,
  HasPremenopausalObservationOrCondition: MRA.HasPremenopausalObservationOrCondition,
  HasPostmenopausalObservationOrCondition: MRA.HasPostmenopausalObservationOrCondition,
  AbsenceOrRemovalOfCervix: MRA.AbsenceOrRemovalOfCervix,
  CervixRemovalDate: MRA.CervixRemovalDate,
  HasColposcopyProcedureAfterMostRecentBiopsy: MRA.HasColposcopyProcedureAfterMostRecentBiopsy,
  HasColposcopyProcedureAfterMostRecentTreatment: MRA.HasColposcopyProcedureAfterMostRecentTreatment,
  RecentlyRespondedYesToFuturePregnancyConcernsQuestion: MRA.RecentlyRespondedYesToFuturePregnancyConcernsQuestion,
  MostRecentTreatmentDate: MRA.MostRecentTreatmentDate,
  HasTreatmentInLastYear: MRA.HasTreatmentInLastYear,
  HasTreatmentAfterMostRecentBiopsy: MRA.HasTreatmentAfterMostRecentBiopsy,
  HasSurveillanceAfterMostRecentBiopsy: MRA.HasSurveillanceAfterMostRecentBiopsy,
  HasPositiveSurveillanceAfterMostRecentBiopsy: MRA.HasPositiveSurveillanceAfterMostRecentBiopsy,
  HasHistologicHsilWithin12MonthsBeforeTreatment: MRA.HasHistologicHsilWithin12MonthsBeforeTreatment,
  HasTreatmentForHighGradeHistologyOrCytology: MRA.HasTreatmentForHighGradeHistologyOrCytology,
  TreatmentForHighGradeHistologyOrCytologyDate: MRA.TreatmentForHighGradeHistologyOrCytologyDate,
  HasFirstNegativeSurveillanceTestAfterMostRecentBiopsy: MRA.HasFirstNegativeSurveillanceTestAfterMostRecentBiopsy,
  HasHistologyAfterTreatmentForHighGradeResult: MRA.HasHistologyAfterTreatmentForHighGradeResult,
  WhichRarityMadeTheRecommendation: MRA.WhichRarityMadeTheRecommendation
}
define ManageSpecialPopulationAnalytics:
{
  BiopsySinceMostRecentCytology: MSP.BiopsySinceMostRecentCytology,
  PregnancyOnset: MSP.PregnancyOnset,
  HistologicAisDuringPregnancy: MSP.HistologicAisDuringPregnancy,
  TwoMostRecentCytologyReportsWithin18MonthsApart: MSP.TwoMostRecentCytologyReportsWithin18MonthsApart,
  HighGradePreCancerCervicalLesionDate: MSP.HighGradePreCancerCervicalLesionDate,
  CervicalCancerDiagnosisDate: MSP.CervicalCancerDiagnosisDate,
  HighGradeOrCancerHistologyResultsDate: MSP.HighGradeOrCancerHistologyResultsDate,
  HysterectomyPerformedForTreatment: MSP.HysterectomyPerformedForTreatment,
  InitialIntensiveSurveillancePeriodPostHysterectomy: MSP.InitialIntensiveSurveillancePeriodPostHysterectomy,
  WhichPopulationMadeTheRecommendation: MSP.WhichPopulationMadeTheRecommendation
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
  DateOfMostRecentNilmCytology: SAR.DateOfMostRecentNilmCytology,
  DateOfMostRecentNegativeHpv: SAR.DateOfMostRecentNegativeHpv,
  DateOfMostRecentNegativeCotest: SAR.DateOfMostRecentNegativeCotest,
  LastScreeningType: SAR.LastScreeningType,
  ProposedScreeningDate: SAR.ProposedScreeningDate,
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
  DateOfLastCytology: SIC.DateOfLastCytology,
  LastCytologyWasCotest: SIC.LastCytologyWasCotest
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
