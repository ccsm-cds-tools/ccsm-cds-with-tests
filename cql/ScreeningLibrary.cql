// # Introduction
// Criteria for Entering Cervical Cancer Screening and Management CDS
// All Logic Paths require either:
  // Sex at birth = Female
  // OR Gender identity = Transgender Male
// Therefore, logic for this entry criteria is abstracted to this library
library ScreeningLibrary version '1.0.0'
using FHIR version '4.0.1'

// # Referenced libraries
include CDSConnectCommonsforFHIRv401 version '1.0.0' called C3F
include FHIRHelpers version '4.0.1' called FHIRHelpers
include DashboardLibrary version '1.0.0' called Dash
include ScreeningAverageRiskLibrary version '1.0.0' called Average
include ScreeningSymptomaticLibrary version '1.0.0' called Sympto
include ScreeningDesExposureLibrary version '1.0.0' called DesExpo
include ScreeningImmunocompromisedLibrary version '1.0.0' called Immuno
include OrderSetLibrary version '1.0.0' called Orders

// # Value sets and codesystem

// ## Code Systems

// ## Value sets

// ## Individual codes

// # Parameters

// Defines the age at which a patient should begin regular screening. The default
// age is 21 years old, and comes from the U.S. Preventive Services Taskfore
parameter MinimumScreeningAge default 21 // Age in years

// # CDS Logic
context Patient

// # Target population

// INCLUSIONS
/* Sex at birth = Female
OR Gender identity = Transgender Male */

// Sex assigned at birth
define BirthSex:
  Dash.BirthSex

define BirthSexPresent:
  Dash.BirthSexPresent

define FemaleBirthSex:
  Dash.FemaleBirthSex

define UnknownBirthSex:
  Dash.UnknownBirthSex

define BirthSexMissingOrUnknown:
  Dash.BirthSexMissingOrUnknown

// Patient Gender
define FemaleGender:
  Dash.FemaleGender

define Female:
  Dash.Female

define GenderIdentity:
  Dash.GenderIdentity

define TransgenderMale:
  Dash.TransgenderMale

define FemaleorTransgenderMale:
  Dash.FemaleorTransgenderMale

define IsIncluded:
  Dash.FemaleorTransgenderMale

define Excluded:
  Average.AbnormalResultInRecord and not Sympto.IsSymptomatic

define IsIncludedAndNotExcluded:
  IsIncluded and not Excluded

//------------------------------------------------------------------------------
// ERRORS
//------------------------------------------------------------------------------

define Errors:
  {} union
  Average.Errors union
  Immuno.Errors union
  Sympto.Errors union
  DesExpo.Errors union
  Dash.Errors

define ErrorsHaveOccurred:
  Exists(Errors)

define NoErrorsHaveOccurred:
  not ErrorsHaveOccurred

//------------------------------------------------------------------------------
// RECOMMENDATIONS FOR AVERAGE RISK INDIVIDUALS
//------------------------------------------------------------------------------
define AverageRiskRecommendation:
  Average.Recommendation

//------------------------------------------------------------------------------
// RECOMMENDATIONS FOR IMMUNOCOMPROMISED INDIVIDUALS
//------------------------------------------------------------------------------
define ImmunocompromisedRecommendation:
  Immuno.Recommendation

//------------------------------------------------------------------------------
// RECOMMENDATIONS FOR INDIVIDUALS EXPOSED TO DES
//------------------------------------------------------------------------------
define DesExposedRecommendation:
  DesExpo.Recommendation

//------------------------------------------------------------------------------
// RECOMMENDATIONS FOR SYMPTOMATIC INDIVIDUALS
//------------------------------------------------------------------------------
define SymptomaticRecommendation:
  Sympto.Recommendation

//------------------------------------------------------------------------------
// FINAL RECOMMENDATION
//------------------------------------------------------------------------------

define ScreeningRecommendation: // NOTE: Should we call this RecommendationText for consistency with other logic paths?
  Coalesce(
    SymptomaticRecommendation,
    DesExposedRecommendation,
    ImmunocompromisedRecommendation,
    AverageRiskRecommendation
  )

define HasRecommendation:
  ScreeningRecommendation.short is not null and
  NoErrorsHaveOccurred

//------------------------------------------------------------------------------
// ORDERS
//------------------------------------------------------------------------------

define RecommendPrimaryHpv:
  Average.RecommendImmediateScreening and Average.Age30Through65

define RecommendCytology:
  Average.RecommendImmediateScreening or
  Immuno.RecommendImmediateCervicalCytology

define RecommendCotesting:
  (
    Average.RecommendImmediateScreening and
    Average.Age30Through65
  ) or
  Immuno.RecommendImmediateCotesting

define PrimaryHpvOrderCode:
  Orders.PrimaryHpvCodeableConcept

define CytologyOrderCode:
  Orders.CytologyCodeableConcept

define CotestingOrderCode:
  Orders.CotestCodeableConcept

define ServiceRequestOrderDetail:
  (ScreeningRecommendation.details) D return { text: D }

define SuggestedOrders:
  {
    if RecommendPrimaryHpv then 'Primary HPV' else null,
    if RecommendCytology then 'Cytology' else null,
    if RecommendCotesting then 'Cotest' else null
  }
  except {null}

define OrderDate:
  ToString(ScreeningRecommendation.date)

//------------------------------------------------------------------------------
// CDS OUTPUTS
//------------------------------------------------------------------------------

define DecisionAids:
  {
    recommendation: ScreeningRecommendation.short,
    recommendationGroup: ScreeningRecommendation.group,
    recommendationDetails: ScreeningRecommendation.details,
    recommendationDate: OrderDate,
    errors: Errors,
    disclaimer: 'An evidence based recommendation is provided based on clinical data available in the patient\'s electronic medical record. Please validate with patient and document any additional relevant history and cervical cancer screening related procedures, and lab testing with documented written evidence.',
    suggestedOrders: SuggestedOrders
  }