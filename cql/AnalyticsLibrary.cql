/*
  This CQL Library is used to aggregate data that can be used for CQL Analytics
*/

library AnalyticsLibrary version '1.0.0'

using FHIR version '4.0.1'

// Libraries that we will perform analytics on
include DashboardLibrary version '1.0.0' called Dash

//------------------------------------------------------------------------------
// PARAMETERS
//------------------------------------------------------------------------------
parameter Analtyics default true // Turn analytics generation on or off.

context Patient


//------------------------------------------------------------------------------
// Analytics Data Elements from Libraries
//------------------------------------------------------------------------------

// DashboardLibrary.cql---------------------------------------------------------|
define CervicalCancerScreeningAndMedicalHistory:
  Dash.CervicalCancerScreeningAndMedicalHistory

define DashboardLibraryAnalytics:
  {
    CervicalCancerScreeningAndMedicalHistory
  }
  except {null}


//------------------------------------------------------------------------------
// Analytics Output
//------------------------------------------------------------------------------

define RunAnalytics:
  Analtyics

define AnalyticsOutput:
  {
    DashboardLibraryAnalytics
  }
