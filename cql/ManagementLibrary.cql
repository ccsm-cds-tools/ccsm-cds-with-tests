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

library ManagementLibrary version '1.0.0'

using FHIR version '4.0.1'

include DashboardLibrary version '1.0.0' called Dash
include ManageCommonAbnormality version '1.1.0' called ManageCommonAbnormality
include ManageRareAbnormality version '1.1.0' called ManageRareAbnormality
include ManageSpecialPopulation version '1.1.0' called ManageSpecialPopulation
include ScreeningSymptomaticLibrary version '1.0.0' called Symptomatic
include OrderSetLibrary version '1.0.0' called Orders

//------------------------------------------------------------------------------
// PARAMETERS
//------------------------------------------------------------------------------

parameter BiopsyLookbackPeriod default 25 years
parameter BiopsyReferralPeriod default 1 years // NOTE: Changing from 1 month to 1 year to account for real-world scenarios
parameter ExcludeSymptomatic default true
parameter HpvTestingGracePeriod default 6 months

/***** BEGIN CDS LOGIC ********************************************************/

context Patient

//------------------------------------------------------------------------------
// INCLUSIONS
//------------------------------------------------------------------------------
// Sex at birth = Female
//   OR Gender identity = Transgender Male
// AND
//   INCLUSION #1: Abnormal cervical cancer screening test within the last 7 years
//       hrHPV result = "Positive"
//       OR Cervical Cytology result not equal to "NILM"
//       OR Cervical Histology result not equal to "Negative"
//       <= 7 years ago
//   OR INCLUSION #2: Includes women who have been "diagnosed" with a high-grade precancerous lesion or cervical cancer
//       Diagnosis of High grade pre-cancerous cervical lesion
//       OR Diagnosis of Cervical cancer
//       OR Cervical histology result = "Histologic HSIL (CIN2)" or "Histologic HSIL (CIN3)" or “Histologic HSIL, unspecified” or "Histologic AIS" or "Histologic cancer"

define HasRecentAbnormalScreening:
  Dash.HasRecentAbnormalScreening

define HasHighGradePreCancerCervicalLesion:
  Exists(Dash.CervicalPrecancerDisorders)

define HasCervicalCancerDiagnoses:
  Exists(Dash.CervicalCancerDiagnoses)

define IsIncluded:
  Dash.FemaleorTransgenderMale and
  (
    HasRecentAbnormalScreening or
    HasHighGradePreCancerCervicalLesion or
    HasCervicalCancerDiagnoses or
    Exists(Dash.HighGradeOrCancerHistologyResults) or
    ManageRareAbnormality.AbsenceOrRemovalOfCervix or 
    Exists(ManageRareAbnormality.CervicalPrecancerTreatments)
  )

//------------------------------------------------------------------------------
// EXCLUSIONS
//------------------------------------------------------------------------------
// None
// Upon more detailed review of 2012 ASCCP Management Guidelines, may modify exclusion criteria

define Excluded:
  if ExcludeSymptomatic then
    Symptomatic.IsSymptomatic
  else
    false

//------------------------------------------------------------------------------
// CDS ACTIONS
//------------------------------------------------------------------------------

define IsIncludedAndNotExcluded:
  IsIncluded and not Excluded

//------------------------------------------------------------------------------
// RECOMMENDATIONS FOR RARE ABNORMALITIES
//------------------------------------------------------------------------------
define RareAbnormalityRecommendation:
  ManageRareAbnormality.Recommendation

define WhichRarityMadeTheRecommendation:
  ManageRareAbnormality.WhichRarityMadeTheRecommendation

//------------------------------------------------------------------------------
// RECOMMENDATIONS FOR SPECIAL POPULATIONS
//------------------------------------------------------------------------------
define SpecialPopulationRecommendation:
  ManageSpecialPopulation.Recommendation

define WhichPopulationMadeTheRecommendation:
  ManageSpecialPopulation.WhichPopulationMadeTheRecommendation

//------------------------------------------------------------------------------
// RECOMMENDATIONS FOR COMMON ABNORMALITIES
//------------------------------------------------------------------------------

define CommonAbnormalityRecommendation:
  ManageCommonAbnormality.Recommendation

// NOTE: Needed for testing
define RecommendationFromRiskTable:
  if CommonAbnormalityRecommendation is not null then
    ManageCommonAbnormality.TableRecommendation
  else null

//------------------------------------------------------------------------------
// ERRORS
//------------------------------------------------------------------------------

define Errors:
  {} union
  ManageCommonAbnormality.Errors union
  ManageRareAbnormality.Errors union
  ManageSpecialPopulation.Errors union
  Dash.Errors

define ErrorsHaveOccurred:
  Exists(Errors)

define NoErrorsHaveOccurred:
  not ErrorsHaveOccurred

//------------------------------------------------------------------------------
// FINAL RECOMMENDATION
//------------------------------------------------------------------------------

define ManagementRecommendation: // NOTE: Should we call this RecommendationText for consistency with other logic paths?
  Coalesce(
    SpecialPopulationRecommendation,
    RareAbnormalityRecommendation,
    CommonAbnormalityRecommendation
  )

define HasRecommendation:
  ManagementRecommendation.short is not null and
  NoErrorsHaveOccurred

//------------------------------------------------------------------------------
// ORDERS
//------------------------------------------------------------------------------

define RecommendColposcopy:
  ManagementRecommendation.short = 'Colposcopy' or 
  ManagementRecommendation.short = 'Colposcopy or Surveillance' or
  ManagementRecommendation.short = 'Colposcopy or Treatment'

define RecommendSurveillance:
  ManagementRecommendation.short = 'Surveillance' or
  ManagementRecommendation.short = 'Colposcopy or Surveillance' or
  ManagementRecommendation.short = 'Surveillance or Treatment'

define RecommendTreatment:
  ManagementRecommendation.short = 'Treatment' or 
  ManagementRecommendation.short = 'Colposcopy or Treatment' or
  ManagementRecommendation.short = 'Surveillance or Treatment'

define ColposcopyOrderCode:
  Orders.ColposcopyCodeableConcept

define SurveillanceOrderCode:
  Orders.SurveillanceCodeableConcept

define TreatmentOrderCode:
  Orders.TreatmentCodeableConcept

define ServiceRequestOrderDetail:
  (ManagementRecommendation.details) D return { text: D }

define SuggestedOrders:
  {
    if RecommendColposcopy then 'Colposcopy' else null,
    if RecommendSurveillance then 'Surveillance' else null,
    if RecommendTreatment then 'Treatment' else null
  }
  except {null}

define OrderDate:
  ToString(ManagementRecommendation.date)

//------------------------------------------------------------------------------
// CDS OUTPUTS
//------------------------------------------------------------------------------

define RiskTableSummary:
   if (
     ManageSpecialPopulation.Recommendation is null and
     ManageRareAbnormality.Recommendation is null and
     ManageCommonAbnormality.Recommendation is not null
   ) then ManageCommonAbnormality.RiskTableSummary
   else null

define DecisionAids:
  {
    recommendation: ManagementRecommendation.short,
    recommendationGroup: ManagementRecommendation.group,
    recommendationDetails: ManagementRecommendation.details,
    recommendationDate: OrderDate,
    errors: Errors,
    disclaimer: 'An evidence based recommendation is provided based on clinical data available in the patient\'s electronic medical record. Please validate with patient and document any additional relevant history and cervical cancer screening related procedures, and lab testing with documented written evidence.',
    suggestedOrders: SuggestedOrders,
    riskTable: RiskTableSummary
  }