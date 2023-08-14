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

library ManageRareAbnormality version '1.1.0'

using FHIR version '4.0.1'

include FHIRHelpers version '4.0.1' called FHIRHelpers
include CDSConnectCommonsforFHIRv401 version '1.0.0' called C3F
include DashboardLibrary version '1.0.0' called Dash
include CollateManagementData version '1.1.0' called Collate
include CCSMCommonFunctions version '1.0.0' called CCF
include ScreeningSymptomaticLibrary version '1.0.0' called Symptomatic

//------------------------------------------------------------------------------
// CODE SYSTEMS, VALUE SETS, AND CODES
//------------------------------------------------------------------------------

codesystem "SNOMED-CT": 'http://snomed.info/sct'
codesystem "ICD-9": 'http://hl7.org/fhir/sid/icd-9-cm'
codesystem "ICD-10": 'http://hl7.org/fhir/sid/icd-10-cm'
codesystem "NULL FLAVOR": 'http://terminology.hl7.org/CodeSystem/v3-NullFlavor'
codesystem "LOCAL": 'http://OUR-PLACEHOLDER-URL.com'

valueset "Premenopausal": 'http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113762.1.4.1032.254' // AKA: Premenopausal
valueset "All Results of High Risk HPV Test": 'http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113762.1.4.1032.233'
valueset "HSIL": 'http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113762.1.4.1032.256'
valueset "Normal Histology Finding": 'http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113762.1.4.1032.262'

code "ASC-H": '441088002' from "SNOMED-CT" display 'Atypical squamous cells on cervical Papanicolaou smear cannot exclude high grade squamous intraepithelial lesion (finding)'
code "CIN1": '285836003' from "SNOMED-CT" display 'Cervical intraepithelial neoplasia grade 1 (disorder)'
code "Atypical Endometrial Cells": '103646000' from "SNOMED-CT" display 'Atypical endometrial cells of undetermined significance (morphologic abnormality)'
code "Atypical Endocervical Cells":	'441094005' from "SNOMED-CT" display 'Atypical endocervical cells on cervical Papanicolaou smear (finding)'
code "Endocervical AIS": '447760009' from "SNOMED-CT" display 'Endocervical adenocarcinoma in situ (disorder)'
code "AGC": '441219009' from "SNOMED-CT" display 'Atypical glandular cells on cervical Papanicolaou smear (finding)'
code "AGC Favor Neoplasia": '373883009' from "SNOMED-CT" display 'Atypical glandular cells, favor neoplastic (morphologic abnormality)'
code "Endocervical Cells Favor Neoplasia": '373882004' from "SNOMED-CT" display 'Atypical endocervical cells, favor neoplastic (morphologic abnormality)'
code "Unsatisfactory": '126481000119106' from "SNOMED-CT" display 'Vaginal Papanicolaou smear unsatisfactory for evaluation (finding)'
code "Absent Transformation Zone": '412716005' from "SNOMED-CT" display 'Cervical smear transformation zone cells absent (situation)'
code "Benign Endometrial Cells": '125155008' from "SNOMED-CT" display 'Endometrial cells, cytologically benign, in a postmenopausal woman (finding)'
code "Premenopausal Menorrhagia": '627.0' from "ICD-9" display 'Premenopausal menorrhagia' // AKA: Premenopausal
code "Excessive Bleeding in the Premenopausal Period": 'N92.4' from "ICD-10" display 'Excessive bleeding in the premenopausal period' // AKA: Premenopausal
code "Postmenopausal": '76498008' from "SNOMED-CT" display 'Postmenopausal state (finding)'
code "Histiocytes": '14295007' from "SNOMED-CT" display 'Resident tissue macrophage (cell)'
code "Unknown": 'UNK' from "NULL FLAVOR" display 'Unknown'
code "HPV16+": '708298003' from "SNOMED-CT" display 'Deoxyribonucleic acid of Human papillomavirus 16 (substance)'
code "HPV18+": '708299006' from "SNOMED-CT" display 'Deoxyribonucleic acid of Human papillomavirus 18 (substance)'
code "LSIL": '62051000119105' from "SNOMED-CT" display 'Low grade squamous intraepithelial lesion on cervical Papanicolaou smear (finding)'
code "ASC-US": '441087007' from "SNOMED-CT" display 'Atypical squamous cells of undetermined significance on cervical Papanicolaou smear (finding)'

// Local codes
code "Benign Glandular Cells": 'BGC' from "LOCAL" display 'Benign Glandular Cells'
code "Endometrial Stromal Cells": 'ESC' from "LOCAL" display 'Endometrial stromal cells'

//------------------------------------------------------------------------------
// PARAMETERS
//------------------------------------------------------------------------------

/***** BEGIN CDS LOGIC ********************************************************/

context Patient

//------------------------------------------------------------------------------
// RECOMMENDATIONS FOR RARE ABNORMALITIES
//------------------------------------------------------------------------------

/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
// RARE ABNORMALITY #1: Rare Cytology

define MostRecentCytologyReport:
  if Count(Collate.SortedCytologyReports) > 0 then
    Collate.SortedCytologyReports[0]
  else
    null

define MostRecentCytologyReportWasWithinPastFiveYears:
  MostRecentCytologyReport.date >= Now() - 5 years

define CytologyInterpretedAsAgc:
  AnyTrue(
    (MostRecentCytologyReport.allConclusions) aC
      return aC ~ "AGC"
  )

define CytologyInterpretedAsAgcFavorNeoplasia:
  AnyTrue(
    (MostRecentCytologyReport.allConclusions) aC
      return aC ~ "AGC Favor Neoplasia"
  )

define CytologyInterpretedAsAis:
  AnyTrue(
    (MostRecentCytologyReport.allConclusions) aC
      return aC in Dash."AIS"
  )

define CytologyInterpretedAsAgcOrAis:
  CytologyInterpretedAsAgc or
  CytologyInterpretedAsAis

define CytologyInterpretedAsAtypicalEndometrialCells:
  AnyTrue(
    (MostRecentCytologyReport.allConclusions) aC
      return aC ~ "Atypical Endometrial Cells"
  )

define CytologyInterpretedAsAtypicalEndocervicalCells:
  AnyTrue(
    (MostRecentCytologyReport.allConclusions) aC
      return aC ~ "Atypical Endocervical Cells"
  )

define CytologyInterpretedAsEndocervicalAis:
  AnyTrue(
    (MostRecentCytologyReport.allConclusions) aC
      return aC ~ "Endocervical AIS"
  )

define CytologyInterpretedAsEndocervicalCellsFavorNeoplasia:
  AnyTrue(
    (MostRecentCytologyReport.allConclusions) aC
      return aC ~ "Endocervical Cells Favor Neoplasia"
  )

define CytologyUnsatisfactory:
  AnyTrue(
    (MostRecentCytologyReport.allConclusions) aC
      return aC ~ "Unsatisfactory"
  )

define CytologyAbsentTransformationZone:
  AnyTrue(
    (MostRecentCytologyReport.allConclusions) aC
      return aC ~ "Absent Transformation Zone"
  )

define CytologyInterpretedAsNilm:
  AnyTrue(
    (MostRecentCytologyReport.allConclusions) aC
      return aC ~ Dash."NILM"
  )

define SecondMostRecentCytologyInterpretedAsNilm:
  AnyTrue(
    (SecondMostRecentCytologyReport.allConclusions) aC
      return aC ~ Dash."NILM"
  )

define CytologyInterpretedAsBenignEndometrialCells:
  AnyTrue(
    (MostRecentCytologyReport.allConclusions) aC
      return aC ~ "Benign Endometrial Cells"
  )

define CytologyInterpretedAsBenignGlandularCells:
  AnyTrue(
    (MostRecentCytologyReport.allConclusions) aC
      return aC ~ "Benign Glandular Cells"
  )

define CytologyInterpretedAsEndometrialStromalCells:
  AnyTrue(
    (MostRecentCytologyReport.allConclusions) aC
      return aC ~ "Endometrial Stromal Cells"
  )

define CytologyInterpretedAsHistiocytes:
  AnyTrue(
    (MostRecentCytologyReport.allConclusions) aC
      return aC ~ "Histiocytes"
  )

define HasPremenopausalObservationOrCondition:
  Exists(Dash.PremenopausalObservations) or
  Exists(Dash.PremenopausalConditions)

define HasPostmenopausalObservationOrCondition:
  Exists(Dash.PostmenopausalObservations) or
  Exists(Dash.PostmenopausalConditions)

define HistologyInterpretedAsCin1:
  AnyTrue(
    (Collate.MostRecentBiopsyReport.allConclusions) aC
      return
        aC ~ "CIN1"
  )

define HistologyInterpretedAsNormal:
  AnyTrue(
    (Collate.MostRecentBiopsyReport.allConclusions) aC
      return 
        aC in "Normal Histology Finding"
  )

define HistologyInterpretedAsCin1OrNormal:
  HistologyInterpretedAsCin1 or
  HistologyInterpretedAsNormal

define HistologyInterpretedAsCancer:
  AnyTrue(
    (Collate.MostRecentBiopsyReport.allConclusions) aC
      return
        aC in Dash."Histologic cancer"
  )

define AnyHistologyInterpretedAsCancer:
  AnyTrue(
    (Collate.SortedBiopsyReports.allConclusions) aC
      return
        aC in Dash."Histologic cancer"
  )
    
define CancerDiagnosisAfterMostRecentCytology:
  Exists(
    Dash.CervicalCancerDiagnoses C
      where CCF.ConditionDate(C) > MostRecentCytologyReport.date
  )

define AnyHpvSinceMostRecentCytology:
  Exists(
    (Collate.SortedHpvReports) B
      where B.date >= MostRecentCytologyReport.date - 1 day
  )

define UnknownHpvCotest:
  Collate.MostRecentHpvReport.date within 1 day of MostRecentCytologyReport.date and
  AnyTrue(
    (Collate.MostRecentHpvReport.allConclusions) aC
      return
        aC ~ "Unknown" or
        not (aC in "All Results of High Risk HPV Test")
  )

define NegativeOrUnknownHpvCotest:
  Collate.MostRecentHpvReport.date within 1 day of MostRecentCytologyReport.date and
  AnyTrue(
    (Collate.MostRecentHpvReport.allConclusions) aC 
      return 
        aC in Dash."HPV Negative Results" or
        aC ~ "Unknown" or
        not (aC in "All Results of High Risk HPV Test")
  )

define PositiveUntypedHpvCotest:
  Collate.MostRecentHpvReport.date within 1 day of MostRecentCytologyReport.date and
  AnyTrue(
    (Collate.MostRecentHpvReport.allConclusions) aC 
      return 
        aC in Dash."High Risk Positive HPV Results Without HPV16 or HPV18"
  )

define PositiveHpv16or18Cotest:
  Collate.MostRecentHpvReport.date within 1 day of MostRecentCytologyReport.date and
  AnyTrue(
    (Collate.MostRecentHpvReport.allConclusions) aC 
      return 
        aC ~ "HPV16+" or
        aC ~ "HPV18+"
  )

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

define MostRecentCervixRemovalProcedureDate:
  CCF.ProcedureDate(
    C3F.MostRecentProcedure(
      Dash.RemovalOfCervixProcedures
    )
  )

define MostRecentCervixRemovalObservationDate:
  CCF.ObservationDate(
    C3F.MostRecent(
      Dash.AbsenceOfCervixObservations
    )
  )

define MostRecentCervixRemovalDiagnosisDate:
  CCF.Onset(
    C3F.MostRecentCondition(
      Dash.AbsenceOfCervixDiagnoses
    )
  )

define CervixRemovalDate:
  Coalesce(
    MostRecentCervixRemovalProcedureDate,
    MostRecentCervixRemovalObservationDate,
    MostRecentCervixRemovalDiagnosisDate
  )

define RecommendationForRareCytology:
  case
    // Subsequent Management
    when ( // G1.4
      MostRecentCytologyReportWasWithinPastFiveYears and
      (
        CytologyInterpretedAsAgc or
        CytologyInterpretedAsAtypicalEndocervicalCells
      ) and
      Collate.MostRecentBiopsyReport.date 12 months or less after MostRecentCytologyReport.date and
      HistologyInterpretedAsCin1OrNormal
    ) then
      {
        short: 'Surveillance',
        date: Collate.DateOfMostRecentReport + 1 year,
        group: 'Rare Cytology (G.1.4)',
        details: {
          'Cotesting at 1 and 2 years is recommended.',
          'If both cotests are negative, repeat cotesting at 3 years is recommended.',
          'If any test is abnormal, then colposcopy is recommended.'
        }
      }
    when ( // G1.5
      MostRecentCytologyReportWasWithinPastFiveYears and
      (
        CytologyInterpretedAsAgcFavorNeoplasia or
        CytologyInterpretedAsEndocervicalCellsFavorNeoplasia or
        CytologyInterpretedAsEndocervicalAis
      ) and
      not (
        CancerDiagnosisAfterMostRecentCytology or
        (
          HistologyInterpretedAsCancer and
          Collate.MostRecentBiopsyReport.date > MostRecentCytologyReport.date
        )
      )
    ) then
      {
        short: 'See Details',
        date: Today(),
        group: 'Rare Cytology (G.1.5)',
        details: {
          'A diagnostic excisional procedure is recommended if cancer is not identified during initial colposcopic workup.',
          'The procedure used should provide an intact specimen with interpretable margins. Endocervical sampling above the excisional bed is preferred.'
        }
      }    
    // G.1 Evaluation of Cytology Interpreted as AGC or AIS
    when ( // G1.1
      AgeInYears() < 35 and
      MostRecentCytologyReportWasWithinPastFiveYears and
      CytologyInterpretedAsAgcOrAis and
      not CytologyInterpretedAsAtypicalEndometrialCells and
      not Dash.Pregnant
    ) then
      {
        short: 'See Details',
        date: Today(),
        group: 'Rare Cytology (G.1.1)',
        details: {
          'Colposcopy is recommended.',
          'Endocervical sampling is recommended at initial colposcopy, except in pregnancy.',
          'Endometrial sampling is also recommended for nonpregnant patients younger than 35 years at increased risk of endometrial neoplasia based on clinical indications (e.g., abnormal uterine bleeding, conditions suggesting chronic anovulation, or obesity).'
        }
      }
    when ( // G1.2
      AgeInYears() >= 35 and
      MostRecentCytologyReportWasWithinPastFiveYears and
      CytologyInterpretedAsAgcOrAis and
      not CytologyInterpretedAsAtypicalEndometrialCells and
      not Dash.Pregnant
    ) then
      {
        short: 'See Details',
        date: Today(),
        group: 'Rare Cytology (G.1.2)',
        details: {
          'Colposcopy is recommended.',
          'Endocervical sampling is recommended at initial colposcopy, except in pregnancy.',
          'Endometrial sampling is also recommended in conjunction with colposcopy and endocervical sampling for nonpregnant patients 35 years or older with all categories of AGC and AIS.'
        }
      }
    when ( // G1.3
      MostRecentCytologyReportWasWithinPastFiveYears and
      CytologyInterpretedAsAgcOrAis and
      CytologyInterpretedAsAtypicalEndometrialCells and
      not Dash.Pregnant
    ) then
      {
        short: 'See Details',
        date: Today(),
        group: 'Rare Cytology (G.1.3)',
        details: {
          'Endometrial and endocervical sampling is preferred, with colposcopy acceptable at initial evaluation.',
          'Additional evaluation with colposcopy is recommended if colposcopy was deferred and no endometrial pathology is identified.'
        }
      }
    // G.2 Unsatisfactory Cytology
    when ( //G2.1
      MostRecentCytologyReportWasWithinPastFiveYears and
      CytologyUnsatisfactory and
      (
        not AnyHpvSinceMostRecentCytology or
        NegativeOrUnknownHpvCotest
      )
    ) then
      {
        short: 'Repeat Screening',
        date: Today() + 2 months,
        group: 'Rare Cytology (G.2.1)',
        details: {
          'Repeat age-based screening with cytology, cotesting or primary HPV testing in 2 to 4 months is recommended.',
          'Treatment to resolve atrophy or obscuring inflammation when a specific infection is present is acceptable.'
        }
      }
    when ( //G2.2
      MostRecentCytologyReportWasWithinPastFiveYears and
      CytologyUnsatisfactory and
      PositiveUntypedHpvCotest and
      AgeInYears() >= 25
    ) then
      {
        short: 'Cytology/Colposcopy',
        date: Today() + 2 months,
        group: 'Rare Cytology (G.2.2)',
        details: {
          'Repeat cytology in 2 to 4 months or colposcopy is acceptable.'
        }
      }
    when ( //G2.3
      MostRecentCytologyReportWasWithinPastFiveYears and
      CytologyUnsatisfactory and
      PositiveHpv16or18Cotest and
      AgeInYears() >= 25
    ) then
      {
        short: 'Colposcopy',
        date: Today(),
        group: 'Rare Cytology (G.2.3)',
        details: {
          'Colposcopy is recommended for all patients with HPV 16 or 18.'
        }
      }
    // G.3 Absent Transformation Zone on Screening Cytology
    when ( //G3.1
      AgeInYears() in Interval[21,30) and
      MostRecentCytologyReportWasWithinPastFiveYears and
      CytologyAbsentTransformationZone and
      CytologyInterpretedAsNilm
    ) then
      {
        short: 'See Details',
        date: Today(),
        group: 'Rare Cytology (G.3.1)',
        details: {
          'Absent transformation zone does not affect the interpretation of results. Routine screening is recommended.'
        }
      }
    when ( //G3.2
      AgeInYears() >= 30 and
      MostRecentCytologyReportWasWithinPastFiveYears and
      CytologyAbsentTransformationZone and
      CytologyInterpretedAsNilm and
      (
        not AnyHpvSinceMostRecentCytology or
        UnknownHpvCotest
      )
    ) then
      {
        short: 'See Details',
        date: Today(),
        group: 'Rare Cytology (G.3.2)',
        details: {
          'HPV testing is preferred.',
          'Repeat cytology in 3 years is acceptable if HPV testing is not performed.'
        }
      }
    // G.4 Benign Endometrial Cells in Premenopausal Patients or Benign Glandular Cells in Posthysterectomy patients
    when ( //G4.1
      HasPremenopausalObservationOrCondition and
      not HasPostmenopausalObservationOrCondition and
      not Symptomatic.IsSymptomatic and
      MostRecentCytologyReportWasWithinPastFiveYears and
      (
        CytologyInterpretedAsBenignEndometrialCells or
        CytologyInterpretedAsEndometrialStromalCells or
        CytologyInterpretedAsHistiocytes
      )
    ) then
      {
        short: 'See Details',
        date: Today(),
        group: 'Rare Cytology (G.4.1)',
        details: {
          'For asymptomatic premenopausal patients with benign endometrial cells, endometrial stromal cells, or histiocytes, no further evaluation is recommended.'
        }
      }
    when ( //G4.2
      HasPostmenopausalObservationOrCondition and
      MostRecentCytologyReportWasWithinPastFiveYears and
      CytologyInterpretedAsBenignEndometrialCells
    ) then
      {
        short: 'See Details',
        date: Today(),
        group: 'Rare Cytology (G.4.2)',
        details: {
          'Endometrial assessment is recommended.'
        }
      }
    when ( //G4.3
      AbsenceOrRemovalOfCervix and
      MostRecentCytologyReportWasWithinPastFiveYears and
      CytologyInterpretedAsBenignGlandularCells
    ) then
      {
        short: 'See Details',
        date: Today(),
        group: 'Rare Cytology (G.4.3)',
        details: {
          'No further evaluation is recommended.'
        }
      }
    else
      null
  end

/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
// RARE ABNORMALITY #2: Exceptions to Colposcopy Clinical Action Threshold

define CytologyInterpretedAsAscH:
  AnyTrue(
    (MostRecentCytologyReport.allConclusions) aC
      return aC ~ "ASC-H"
  )

define SecondMostRecentCytologyReport:
  if Count(Collate.SortedCytologyReports) > 1 then
    Collate.SortedCytologyReports[1]
  else
    null

define TwoMostRecentCytologyReportsWithin5yearsApart:
  SecondMostRecentCytologyReport.date within 5 years of MostRecentCytologyReport.date

define SecondMostRecentCytologyUnsatisfactory:
  AnyTrue(
    (SecondMostRecentCytologyReport.allConclusions) aC
      return aC ~ "Unsatisfactory"
  )

define RecommendationForExceptionsToColposcopyThreshold:
  case
    when (
      MostRecentCytologyReportWasWithinPastFiveYears and
      CytologyInterpretedAsAscH
    ) then
      {
        short: 'Colposcopy',
        date: Today(),
        group: 'Exception to Colposcopy Threshold (H.2)',
        details: {
          'Colposcopy is recommended regardless of hrHPV result.'
        }
      }
    when (
      MostRecentCytologyReportWasWithinPastFiveYears and
      PositiveHpv16or18Cotest and
      CytologyInterpretedAsNilm and
      AgeInYears() >= 25
    ) then
      {
        short: 'Colposcopy',
        date: Today(),
        group: 'Exception to Colposcopy Threshold (H.2)',
        details: {
          'Colposcopy is recommended for all patients with HPV 16 or 18.'
        }
      }
    when (
      MostRecentCytologyReportWasWithinPastFiveYears and
      CytologyUnsatisfactory and
      TwoMostRecentCytologyReportsWithin5yearsApart and
      SecondMostRecentCytologyUnsatisfactory
    ) then
      {
        short: 'Colposcopy',
        date: Today(),
        group: 'Exception to Colposcopy Threshold',
        details: {
          'Colposcopy should be performed.'
        }
      }
    else
      null
  end

/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
// RARE ABNORMALITY #3: Managing Histology Results

define MostRecentBiopsyReportWasWithinPastYear:
  Collate.MostRecentBiopsyReport.date >= Now() - 1 year

define HistologyInterpretedAsCin2:
  AnyTrue(
    (Collate.MostRecentBiopsyReport.allConclusions) aC
      return
        aC ~ Dash."CIN2"
  )

define HistologyInterpretedAsCin3:
  AnyTrue(
    (Collate.MostRecentBiopsyReport.allConclusions) aC
      return 
        aC in Dash."Histologic CIN3"
  )

define HistologyInterpretedAsAis:
  AnyTrue(
    (Collate.MostRecentBiopsyReport.allConclusions) aC
      return
        aC in Dash."AIS"
  )

define HistologyInterpretedAsUnspecifiedHsil:
  AnyTrue(
    (Collate.MostRecentBiopsyReport.allConclusions) aC
      return
        aC ~ Dash."HSIL, Unspecified"
  )

define PrecedingCytologyResults:
  Coalesce(
    (Collate.SortedCytologyReports) S
      where S.date <= Collate.MostRecentBiopsyReport.date and
        S.date >= Collate.MostRecentBiopsyReport.date - 6 months
  )

define PrecedingCytologyIsHsil:
  AnyTrue(
    (PrecedingCytologyResults.allConclusions) aC
      return
        aC in "HSIL"
  )

define PrecedingCytologyIsAscH:
  AnyTrue(
    (PrecedingCytologyResults.allConclusions) aC
      return
        aC ~ "ASC-H"
  )

define PrecedingCytologyResultsBeforeSecondMostRecentBiopsy:
  Coalesce(
    (Collate.SortedCytologyReports) S
      where S.date <= SecondMostRecentBiopsyReport.date and
        S.date >= SecondMostRecentBiopsyReport.date - 6 months
  )

define PrecedingCytologyBeforeSecondMostRecentBiopsyIsHsil:
  AnyTrue(
    (PrecedingCytologyResultsBeforeSecondMostRecentBiopsy.allConclusions) aC
      return
        aC in "HSIL"
  )

define PrecedingCytologyBeforeSecondMostRecentBiopsyIsAscH:
  AnyTrue(
    (PrecedingCytologyResultsBeforeSecondMostRecentBiopsy.allConclusions) aC
      return
        aC ~ "ASC-H"
  )

define SecondMostRecentBiopsyReport:
  if Count(Collate.SortedBiopsyReports) > 1 then
      Collate.SortedBiopsyReports[1]
  else
    null

define SecondMostRecentHistologyInterpretedAsCin1:
  AnyTrue(
    (SecondMostRecentBiopsyReport.allConclusions) aC
      return
        aC ~ "CIN1"
  )

define SecondMostRecentHistologyInterpretedAsNormal:
  AnyTrue(
    (SecondMostRecentBiopsyReport.allConclusions) aC
      return 
        aC in "Normal Histology Finding"
  )

define SecondMostRecentHistologyInterpretedAsCin1OrNormal:
  SecondMostRecentHistologyInterpretedAsCin1 or
  SecondMostRecentHistologyInterpretedAsNormal

define MostRecentBiopsyReportWasWithinPast12months:
  Collate.MostRecentBiopsyReport.date >= Now() - 12 months

define MostRecentBiopsyReportWasWithinPast18months:
  Collate.MostRecentBiopsyReport.date >= Now() - 18 months

define TwoMostRecentBiopsyReportsWithin18monthsApart:
  SecondMostRecentBiopsyReport.date within 18 months of Collate.MostRecentBiopsyReport.date

define TwoMostRecentBiopsyReportsWithin15monthsApart:
  SecondMostRecentBiopsyReport.date within 15 months of Collate.MostRecentBiopsyReport.date

define RecentlyRespondedYesToFuturePregnancyConcernsQuestion:
  C3F.MostRecent(
    C3F.ObservationLookBack(
      Dash.ResponsesToFuturePregnancyConcernsQuestion R
        where R.value ~ Dash."Yes",
      3 months
    )
  ) is not null

define InitialCervicalHistologyInterpretedAsUnspecifiedHsilOrCin2InLast18Months:
  First(
    (Collate.SortedBiopsyReports) B
      where B.date >= Now() - 18 months and
      AnyTrue(
        (B.allConclusions) aC
          return
            aC ~ Dash."HSIL, Unspecified" or
            aC ~ Dash."CIN2"
      )
  )

define InitialCervicalHistologyInterpretedAsUnspecifiedHsilOrCin2InLast6Years:
  First(
    (Collate.SortedBiopsyReports) B
      where B.date >= Now() - 6 years and
      AnyTrue(
        (B.allConclusions) aC
          return
            aC ~ Dash."HSIL, Unspecified" or
            aC ~ Dash."CIN2"
      )
  )

define HistologyInterpretedAsUnspecifiedHsilOrCin2BeforeMostRecentBiopsy:
  (Collate.SortedBiopsyReports) B
    where
      B.date 2 years or more before Collate.MostRecentBiopsyReport.date and
      B.date 2.5 years or less before Collate.MostRecentBiopsyReport.date and
      AnyTrue(
        (B.allConclusions) aC
          return
            aC ~ Dash."HSIL, Unspecified" or
            aC ~ Dash."CIN2"
      )

define HasHistologyInterpretedAsUnspecifiedHsilOrCin2BeforeMostRecentBiopsy:
  Exists(HistologyInterpretedAsUnspecifiedHsilOrCin2BeforeMostRecentBiopsy)

define CytologyInterpretedAsLsil:
  AnyTrue(
    (MostRecentCytologyReport.allConclusions) aC
      return aC ~ "LSIL"
  )

define CytologyInterpretedAsAscus:
  AnyTrue(
    (MostRecentCytologyReport.allConclusions) aC
      return aC ~ "ASC-US"
  )

define MostRecentNegativeHsilSurveillanceResult:
  if (InitialCervicalHistologyInterpretedAsUnspecifiedHsilOrCin2InLast18Months is not null) then
    Collate.MostRecentBiopsyReport.date 18 months or less after InitialCervicalHistologyInterpretedAsUnspecifiedHsilOrCin2InLast18Months.date and
    HistologyInterpretedAsCin1OrNormal and
    MostRecentCytologyReport.date 18 months or less after InitialCervicalHistologyInterpretedAsUnspecifiedHsilOrCin2InLast18Months.date and
    (
      CytologyInterpretedAsLsil or
      CytologyInterpretedAsAscus or
      CytologyInterpretedAsNilm
    )
  else
    false

define SecondMostRecentCytologyInterpretedAsLsil:
  AnyTrue(
    (SecondMostRecentCytologyReport.allConclusions) aC
      return aC ~ "LSIL"
  )

define SecondMostRecentCytologyInterpretedAsAscus:
  AnyTrue(
    (SecondMostRecentCytologyReport.allConclusions) aC
      return aC ~ "ASC-US"
  )

define SecondMostRecentNegativeHsilSurveillanceResult:
  if (InitialCervicalHistologyInterpretedAsUnspecifiedHsilOrCin2InLast18Months is not null) then
    SecondMostRecentBiopsyReport.date 18 months or less after InitialCervicalHistologyInterpretedAsUnspecifiedHsilOrCin2InLast18Months.date and
    SecondMostRecentHistologyInterpretedAsCin1OrNormal and
    SecondMostRecentCytologyReport.date 18 months or less after InitialCervicalHistologyInterpretedAsUnspecifiedHsilOrCin2InLast18Months.date and
    (
      SecondMostRecentCytologyInterpretedAsLsil or
      SecondMostRecentCytologyInterpretedAsAscus or
      SecondMostRecentCytologyInterpretedAsNilm
    )
  else
    false

define SubsequentLowGradeHistologyReportsSinceInitialUnspecifiedHsilOrCin2InLast6Years:
  if (InitialCervicalHistologyInterpretedAsUnspecifiedHsilOrCin2InLast6Years is not null) then
    Collate.SortedBiopsyReports R
      where R.date after InitialCervicalHistologyInterpretedAsUnspecifiedHsilOrCin2InLast6Years.date and
      AnyTrue(
        (R.allConclusions) aC
          return
            aC ~ "CIN1" or
            aC in "Normal Histology Finding"
      )
  else
    null

define SubsequentLowGradeCytologyReportsSinceInitialUnspecifiedHsilOrCin2InLast6Years:
  if (InitialCervicalHistologyInterpretedAsUnspecifiedHsilOrCin2InLast6Years is not null) then
    Collate.SortedCytologyReports R
      where R.date after InitialCervicalHistologyInterpretedAsUnspecifiedHsilOrCin2InLast6Years.date and
      AnyTrue(
        (R.allConclusions) aC
          return
            aC ~ Dash."NILM" or
            aC ~ "LSIL" or
            aC ~ "ASC-US"
      )
  else
    null

define MostRecentSurveillanceTestNegative:
  (
    Collate.MostRecentHpvResult = 'HPV-negative' and
    Collate.MostRecentCytologyCotestResult = 'NILM'
  ) or
  (
    Collate.MostRecentHpvResult = 'HPV-negative' and
    Collate.MostRecentCytologyCotest is null
  )

define CytologyInterpretedAsHsil:
  AnyTrue(
    (MostRecentCytologyReport.allConclusions) aC
      return aC in "HSIL"
  )  

define CervixRemovalDateIsAfterMostRecentAisBiopsy:
  (CervixRemovalDate is not null) and 
  CervixRemovalDate after Collate.MostRecentAisBiopsy.date

define MostRecentTreatmentAfterAis:
  MostRecentTreatment P
  where CCF.ProcedureDate(P) occurs after Collate.MostRecentAisBiopsy.date

define HasTreatmentAfterAis:
  MostRecentTreatmentAfterAis is not null  

// I.6 Management of AIS over 50: Adoption of Society of Gynecologic Oncology Recommendations
// Severity of AIS should recommend treatment until hysterectomy is performed.
define RecommendationForAisHistologyResults:
  case
    when (
      AgeInYears() > 50 and
      Collate.MostRecentAisBiopsy is not null and
      not CervixRemovalDateIsAfterMostRecentAisBiopsy and
      not HasTreatmentAfterAis
    ) then
      {
        short: 'See Details',
        date: Today(),
        group: 'Managing Histology (I.6)',
        details: {
          'A diagnostic excisional procedure is recommended for all patients with a diagnosis of AIS on cervical biopsy to rule out invasive adenocarcinoma.',
          'If negative margins on the excisional specimen, a hysterectomy is preferred.',
          'For patients with positive margins on the excisional specimen, re-excision to achieve negative margins is preferred, even if hysterectomy is planned.'
        }
      }
    when ( 
      AgeInYears() > 50 and
      Collate.MostRecentAisBiopsy is not null and
      HasTreatmentAfterAis and
      not CervixRemovalDateIsAfterMostRecentAisBiopsy
    ) then
      {
        short: 'See Details',
        date: Today(),
        group: 'Managing Histology (I.6)',
        details: {
          'If negative margins on the diagnostic excisional specimen, a hysterectomy is preferred.',
          'For patients with positive margins on the excisional specimen, re-excision to achieve negative margins is preferred, even if hysterectomy is planned.',
          'For patients with AIS and persistent positive margins for whom additional excisional procedures are not feasible, either a simple or modified radical hysterectomy is acceptable.'
        }
      }      
    when (
      AgeInYears() >= 25 and AgeInYears() <= 50 and
      Collate.MostRecentAisBiopsy is not null and
      not CervixRemovalDateIsAfterMostRecentAisBiopsy and
      not HasTreatmentAfterAis
    ) then
      {
        short: 'See Details',
        date: Today(),
        group: 'Managing Histology (I.6)',
        details: {
          'A diagnostic excisional procedure is recommended for all patients with a diagnosis of AIS on cervical biopsy to rule out invasive adenocarcinoma.',
          'If negative margins on the excisional specimen, a hysterectomy is preferred although fertility-sparing management for appropriately selected patients is acceptable.',
          'For patients who undergo fertility-sparing management, surveillance with cotesting and endocervical sampling is recommended every 6 months for at least 3 years, then annually for at least 2 years, or until hysterectomy is performed.',
          'If an abnormal result is returned during surveillance, manage using the 2019 ASCCP guidelines.'
        }
      }
    when (
      AgeInYears() >= 25 and AgeInYears() <= 50 and
      Collate.MostRecentAisBiopsy is not null and
      not CervixRemovalDateIsAfterMostRecentAisBiopsy and
      HasTreatmentAfterAis
    ) then
      {
        short: 'See Details',
        date: Today(),
        group: 'Managing Histology (I.6)',
        details: {
          'If negative margins on the diagnostic excisional specimen, a hysterectomy is preferred although fertility-sparing management for appropriately selected patients is acceptable.',
          'For patients with positive margins on the excisional specimen, re-excision to achieve negative margins is preferred, even if hysterectomy is planned.',
          'For patients who undergo fertility-sparing management, surveillance with cotesting and endocervical sampling is recommended every 6 months for at least 3 years, then annually for at least 2 years, or until hysterectomy is performed.',
          'If cotesting and endocervical sampling consistently negative in first 5 years, extending surveillance interval to every 3 years is acceptable.',
          'If an abnormal result is returned during surveillance, manage using the 2019 ASCCP guidelines.'
        }
      }
    else
      null
    end

    
define RecommendationForHistologyResults:
  case
    // I.1 Management of Histologic HSIL, not Further Specified or Qualified
    when (
      AgeInYears() >= 25 and AgeInYears() <= 50 and
      not RecentlyRespondedYesToFuturePregnancyConcernsQuestion and
      MostRecentBiopsyReportWasWithinPastYear and
      HistologyInterpretedAsUnspecifiedHsil
    ) then
      {
        short: 'Surveillance or Treatment',
        date: Today(),
        group: 'Managing Histology (I.1)',
        details: {
          'Treatment is preferred for histologic HSIL. Observation is acceptable if there are concerns related to future pregnancies and the following criteria are met: entire SCJ is visualized, lesion does not extend into endocervical canal, ECC is < CIN 2.',
          'Observation, if elected includes colposcopy and HPV-based testing with cotest or primary hrHPV testing at 6-month intervals for up to 2 years.'
        }
      }
    // I.1 Management of Histologic HSIL, not Further Specified or Qualified over age 50
    when (
      AgeInYears() > 50 and
      not RecentlyRespondedYesToFuturePregnancyConcernsQuestion and
      MostRecentBiopsyReportWasWithinPastYear and
      HistologyInterpretedAsUnspecifiedHsil
    ) then
      {
        short: 'Treatment',
        date: Today(),
        group: 'Managing Histology (I.1)',
        details: {
          'Treatment is recommended for histologic HSIL.'
        }
      }
    // I.2 Management of Histologic HSIL (CIN2 or CIN3)
    when ( // I2.1
      AgeInYears() >= 25 and
      not Dash.Pregnant and
      MostRecentBiopsyReportWasWithinPastYear and
      HistologyInterpretedAsCin3
    ) then
      {
        short: 'Treatment',
        date: Today(),
        group: 'Managing Histology (I.2)',
        details: {
          'Treatment of CIN3 is recommended. Observation is unacceptable except during pregnancy.',
          'When treatment of histologic HSIL is planned, excisional treatment is preferred, and treatment with ablation is acceptable.',
          'When considering ablative therapy, in particular cryotherapy, ablation is unacceptable in circumstances defined by the WHO.'
        }
      }
    when ( // I2.2
      AgeInYears() >= 25 and AgeInYears() <= 50 and
      not Dash.Pregnant and not RecentlyRespondedYesToFuturePregnancyConcernsQuestion and
      MostRecentBiopsyReportWasWithinPastYear and
      HistologyInterpretedAsCin2
    ) then
      {
        short: 'Surveillance or Treatment',
        date: Today(),
        group: 'Managing Histology (I.2)',
        details: {
          'Treatment of CIN2 is recommended unless the patient\'s concerns about the effect of treatment on future pregnancy outweigh concerns about cancer.',
          'Excisional treatment is preferred, and treatment with ablation is acceptable.',
          'Observation is unacceptable when the squamocolumnar junction or the upper limit of the lesion is not fully visualized or when the results of an endocervical sampling, if performed, is CIN 2+ or ungraded.',
          'Observation includes colposcopy and HPV-based testing with cotest or primary hrHPV testing at 6-month intervals for up to 2 years.'
        }
      }
    when ( // I2.2 over age 50
      AgeInYears() > 50 and
      not Dash.Pregnant and not RecentlyRespondedYesToFuturePregnancyConcernsQuestion and
      MostRecentBiopsyReportWasWithinPastYear and
      HistologyInterpretedAsCin2
    ) then
      {
        short: 'Treatment',
        date: Today(),
        group: 'Managing Histology (I.2)',
        details: {
          'Treatment of CIN2 is recommended.',
          'Excisional treatment is preferred, and treatment with ablation is acceptable.'
        }
      }
            
    // I.3 Management of CIN2 in Those Who Are Concerned About the Potential Effect of Treatment on Future Pregnancy Outcomes
    when ( // I3.5
      AgeInYears() >= 25 and AgeInYears() <= 50 and
      (
        HistologyInterpretedAsUnspecifiedHsil or
        HistologyInterpretedAsCin2
      ) and
      HasHistologyInterpretedAsUnspecifiedHsilOrCin2BeforeMostRecentBiopsy and
      RecentlyRespondedYesToFuturePregnancyConcernsQuestion
    ) then
      {
        short: 'Surveillance or Treatment',
        date: Today(),
        group: 'Managing Histology (I.3)',
        details: {
          'Treatment is recommended for CIN 2 lasting 2 years.',
          'Excisional treatment is preferred, and treatment with ablation is acceptable.',
          'When considering ablative therapy, in particular cryotherapy, ablation is unacceptable in circumstances defined by the WHO.'
        }
      }    
    when ( // I3.4
      AgeInYears() >= 25 and AgeInYears() <= 50 and
      (InitialCervicalHistologyInterpretedAsUnspecifiedHsilOrCin2InLast6Years is not null) and
      Count(SubsequentLowGradeHistologyReportsSinceInitialUnspecifiedHsilOrCin2InLast6Years) = 5 and
      Count(SubsequentLowGradeCytologyReportsSinceInitialUnspecifiedHsilOrCin2InLast6Years) >= 5 and
      RecentlyRespondedYesToFuturePregnancyConcernsQuestion
    ) then
      {
        short: 'Surveillance',
        date: Today() + 3 years,
        group: 'Managing Histology (I.3)',
        details: {
          'Surveillance with primary HPV testing or co-testing is recommended every 3 years for at least 25 years, even if beyond the age of 65. Surveillance can continue for as long as the patient remains in good health.'
        }
      }    
    when ( // I3.3
      AgeInYears() >= 25 and AgeInYears() <= 50 and
      (InitialCervicalHistologyInterpretedAsUnspecifiedHsilOrCin2InLast18Months is not null) and
      MostRecentNegativeHsilSurveillanceResult
      SecondMostRecentNegativeHsilSurveillanceResult and
      RecentlyRespondedYesToFuturePregnancyConcernsQuestion
    ) then
      {
        short: 'Surveillance',
        date: Today() + 1 year,
        group: 'Managing Histology (I.3)',
        details: {
          'Primary HPV testing or co-testing in 1 year is recommended.'
        }
      }
    when ( // I3.2
      AgeInYears() >= 25 and AgeInYears() <= 50 and
      MostRecentBiopsyReportWasWithinPastYear and
      HistologyInterpretedAsUnspecifiedHsil
      RecentlyRespondedYesToFuturePregnancyConcernsQuestion
    ) then
      {
        short: 'Surveillance or Treatment',
        date: Today(),
        group: 'Managing Histology (I.3)',
        details: {
          'Treatment is preferred for histologic HSIL. Observation is acceptable if there are concerns related to future pregnancies and the following criteria are met: entire SCJ is visualized, lesion does not extend into endocervical canal, ECC is < CIN 2.',
          'Observation, if elected includes colposcopy and HPV-based testing with cotest or primary hrHPV testing at 6-month intervals for up to 2 years.'
        }
      }
    when ( // I3.1
      AgeInYears() >= 25 and AgeInYears() <= 50 and
      MostRecentBiopsyReportWasWithinPastYear and
      HistologyInterpretedAsCin2 and
      RecentlyRespondedYesToFuturePregnancyConcernsQuestion
    ) then
      {
        short: 'Surveillance or Treatment',
        date: Today(),
        group: 'Managing Histology (I.3)',
        details: {
          'Observation or treatment for CIN 2 is acceptable, provided the squamocolumnar junction is fully visualized and CIN 2+ or ungraded CIN is not identified on endocervical sampling.',
          'Observation includes colposcopy and HPV-based testing with cotest or primary hrHPV testing at 6-month intervals for up to 2 years.'
        }
      }
    // I.4 Management of LSIL (CIN1) or Less Preceded by ASC-H or HSIL Cytology
    when ( // I4.1
      AgeInYears() >= 25 and
      MostRecentBiopsyReportWasWithinPastYear and
      HistologyInterpretedAsCin1OrNormal and
      PrecedingCytologyIsHsil
    ) then
      {
        short: 'See Details',
        date: Today(),
        group: 'Managing Histology (I.4.1)',
        details: {
          'Immediate diagnostic excisional procedure or observation with HPV-based testing and colposcopy at 1 year, or review the cytologic, histologic, and colposcopic findings are acceptable.',
          'Observation is only acceptable when the initial colposcopic examination fully visualized the squamocolumnar junction and the upper limit of any lesion, and that the endocervical sampling, if collected, was less than CIN 2.'
        }
      }
    when ( // I4.2
      AgeInYears() >= 25 and
      MostRecentBiopsyReportWasWithinPastYear and
      HistologyInterpretedAsCin1OrNormal and
      PrecedingCytologyIsAscH
    ) then
      {
        short: 'See Details',
        date: Today(),
        group: 'Managing Histology (I.4.2)',
        details: {
          'Observation with HPV-based testing at 1 year, or review of the cytologic, histologic, and colposcopic findings are acceptable.',
          'A diagnostic excisional procedure is not recommended.'
        }
      }
    when ( // I4.3 - Recommendation #2
      AgeInYears() >= 25 and
      MostRecentSurveillanceTestNegative and
      Collate.MostRecentHpvReport.date >= Now() - 3.5 years and
      (
        (
          (
            Collate.MostRecentBiopsyReport.date 18 months or less before Collate.MostRecentHpvReport.date and
            HistologyInterpretedAsNormal and
            TwoMostRecentBiopsyReportsWithin18monthsApart
          ) and
          (
            HasFirstNegativeSurveillanceTestAfterSecondMostRecentBiopsy and
            FirstNegativeSurveillanceTestAfterSecondMostRecentBiopsy.date 18 months or less before Collate.MostRecentHpvReport.date and
            FirstNegativeSurveillanceTestAfterSecondMostRecentBiopsy.date 18 months or less after SecondMostRecentBiopsyReport.date
          ) and
          (
            SecondMostRecentHistologyInterpretedAsCin1OrNormal and
            PrecedingCytologyBeforeSecondMostRecentBiopsyIsHsil
          ) and
          (
            not (
              MostRecentTreatmentDate 1 year or less after Collate.MostRecentBiopsyReport.date
            ) or
            MostRecentTreatment is null
          ) 
        ) or
        (
          (
            HasFirstNegativeSurveillanceTestAfterMostRecentBiopsy and
            FirstNegativeSurveillanceTestAfterMostRecentBiopsy.date 18 months or less before Collate.MostRecentHpvReport.date and
            FirstNegativeSurveillanceTestAfterMostRecentBiopsy.date 18 months or less after Collate.MostRecentBiopsyReport.date
          ) and
          (
            HistologyInterpretedAsCin1OrNormal and
            PrecedingCytologyIsAscH
          ) and
          (
            not (
              MostRecentTreatmentDate 1 year or less after Collate.MostRecentBiopsyReport.date
            ) or
            MostRecentTreatment is null
          ) 
        )
      )
    ) then
      {
        short: 'See Details',
        date: Today(),
        group: 'Managing Histology (I.4.3.2)',
        details: {
          'HPV-based testing (cotesting or primary hrHPV testing) every 3 years is recommended for at least 25 years, even if this is beyond the age of 65 years. Surveilance may continue for as long as the patient remains in good health.'
        }
      }    
    when ( // I4.3 - Recommendation #1
      AgeInYears() >= 25 and
      (
        (
          (
            MostRecentBiopsyReportWasWithinPast18months and
            HistologyInterpretedAsNormal and
            TwoMostRecentBiopsyReportsWithin18monthsApart
          ) and
          (
            HasFirstNegativeSurveillanceTestAfterSecondMostRecentBiopsy and
            FirstNegativeSurveillanceTestAfterSecondMostRecentBiopsy.date > Now() - 18 months and
            FirstNegativeSurveillanceTestAfterSecondMostRecentBiopsy.date 18 months or less after SecondMostRecentBiopsyReport.date
          ) and
          (
            SecondMostRecentHistologyInterpretedAsCin1OrNormal and
            PrecedingCytologyBeforeSecondMostRecentBiopsyIsHsil
          ) and
          (
            not (
              MostRecentTreatmentDate 1 year or less after SecondMostRecentBiopsyReport.date
            ) or
            MostRecentTreatment is null
          )
        ) or
        (
          (
            HasFirstNegativeSurveillanceTestAfterMostRecentBiopsy and
            FirstNegativeSurveillanceTestAfterMostRecentBiopsy.date > Now() - 18 months and
            FirstNegativeSurveillanceTestAfterMostRecentBiopsy.date 18 months or less after Collate.MostRecentBiopsyReport.date
          ) and
          (
            HistologyInterpretedAsCin1OrNormal and
            PrecedingCytologyIsAscH
          ) and
          (
            not (
              MostRecentTreatmentDate 1 year or less after Collate.MostRecentBiopsyReport.date
            ) or
            MostRecentTreatment is null 
          ) 
        )
      )
    ) then
      {
        short: 'See Details',
        date: Today(),
        group: 'Managing Histology (I.4.3.1)',
        details: {
          'HPV-based testing (cotesting or primary hrHPV testing) is recommended in 1 year.'
        }
      }
    when ( // I4.5
      AgeInYears() >= 25 and
      HistologyInterpretedAsCin1OrNormal and
      (
        PrecedingCytologyIsHsil or
        PrecedingCytologyIsAscH
      ) and
      (
        not (
          MostRecentTreatmentDate 1 year or less after Collate.MostRecentBiopsyReport.date
        ) or
        MostRecentTreatment is null
      ) and
      (
        (
          CytologyInterpretedAsHsil and
          MostRecentCytologyReport.date 1 year or more after Collate.MostRecentBiopsyReport.date and
          MostRecentCytologyReport.date less than 3 years after Collate.MostRecentBiopsyReport.date
        ) or
        (
          CytologyInterpretedAsAscH and
          MostRecentCytologyReport.date 2 years or more after Collate.MostRecentBiopsyReport.date and
          MostRecentCytologyReport.date less than 3 years after Collate.MostRecentBiopsyReport.date
        )
      )
    ) then
      {
        short: 'See Details',
        date: Today(),
        group: 'Managing Histology (I.4.5)',
        details: {
          'A diagnostic excisional procedure is recommended.'
        }
      }    
    when ( // I4.4
      AgeInYears() >= 25 and
      HistologyInterpretedAsCin1OrNormal and
      (
        PrecedingCytologyIsHsil or
        PrecedingCytologyIsAscH
      ) and
      (
        not (
          MostRecentTreatmentDate 1 year or less after Collate.MostRecentBiopsyReport.date
        ) or
        MostRecentTreatment is null
      ) and
      (
        (
          (MostRecentCytologyReport is not null) and
          not CytologyInterpretedAsNilm and
          not CytologyInterpretedAsHsil and
          MostRecentCytologyReport.date 1 year or more after Collate.MostRecentBiopsyReport.date and
          MostRecentCytologyReport.date less than 3 years after Collate.MostRecentBiopsyReport.date
        ) or
        (
          (Collate.MostRecentHpvReport is not null) and
          Collate.MostRecentHpvResult != 'HPV-negative' and
          Collate.MostRecentHpvReport.date 1 year or more after Collate.MostRecentBiopsyReport.date and
          Collate.MostRecentHpvReport.date less than 3 years after Collate.MostRecentBiopsyReport.date
        ) or
        (
          // TODO: As written, this part of the path will not trigger. Going forward, we should look into a way to clarify the lookback for 'LSIL (CIN1) or Less Preceded by ASC-H or HSIL Cytology' so that it is not reliant on the MostRecentBiopsyReport
          (Collate.MostRecentBiopsyReport is not null) and
          not HistologyInterpretedAsNormal and
          Collate.MostRecentBiopsyReport.date 1 year or more after Collate.MostRecentBiopsyReport.date and
          Collate.MostRecentBiopsyReport.date less than 3 years after Collate.MostRecentBiopsyReport.date
        )
      )
    ) then
      {
        short: 'Colposcopy',
        date: Today(),
        group: 'Managing Histology (I.4.4)',
        details: {
          'Colposcopy is recommended.'
        }
      }
    // I.5 Histologic LSIL (CIN1) Diagnosed Repeatedly for at Least 2 Years
    when (
      AgeInYears() >= 25 and
      MostRecentBiopsyReportWasWithinPast12months and
      HistologyInterpretedAsCin1 and
      SecondMostRecentHistologyInterpretedAsCin1 and
      TwoMostRecentBiopsyReportsWithin15monthsApart
    ) then
      {
        short: 'See Details',
        date: Today(),
        group: 'Managing Histology (I.5)',
        details: {
          'Histologic LSIL (CIN1) is not considered a cancer precursor, so observation is preferred. Treatment is acceptable if strongly preferred by the patient.',
          'If treatment is selected and the entire squamocolumnar junction and all lesions were fully visualized during colposcopic examination, either excision or ablation treatments are acceptable.'
        }
      }
    else
      null
  end

/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
// RARE ABNORMALITY #4: Surveillance After Abnormalities

define MostRecentTreatment:
  C3F.MostRecentProcedure(
    Dash.CervicalAblationProcedures union
    Dash.CervicalExcisionProcedures 
  )

define MostRecentTreatmentDate:
  CCF.ProcedureDate(MostRecentTreatment)

define TreatmentInLastYear:
  MostRecentTreatment P
  where CCF.ProcedureDate(P) >= Now() - 12 months

define HasTreatmentInLastYear:
  TreatmentInLastYear is not null

define AnyHistologicHsil:
  (Collate.SortedBiopsyReports) B
    where AnyTrue(
      (B.allConclusions) aC
        return
          aC ~ Dash."CIN2" or
          aC in Dash."Histologic CIN3" or
          aC ~ Dash."HSIL, Unspecified"
    )

define HistologyInterpretedAsHistologicHsil:
  HistologyInterpretedAsCin2 or
  HistologyInterpretedAsCin3 or
  HistologyInterpretedAsUnspecifiedHsil

define SecondMostRecentHistologyInterpretedAsCin2:
  AnyTrue(
    (SecondMostRecentBiopsyReport.allConclusions) aC
      return
        aC ~ Dash."CIN2"
  )

define SecondMostRecentHistologyInterpretedAsCin3:
  AnyTrue(
    (SecondMostRecentBiopsyReport.allConclusions) aC
      return 
        aC in Dash."Histologic CIN3"
  )

define SecondMostRecentHistologyInterpretedAsUnspecifiedHsil:
  AnyTrue(
    (SecondMostRecentBiopsyReport.allConclusions) aC
      return
        aC ~ Dash."HSIL, Unspecified"
  )

define SecondMostRecentHistologyInterpretedAsHistologicHsil:
  SecondMostRecentHistologyInterpretedAsCin2 or
  SecondMostRecentHistologyInterpretedAsCin3 or
  SecondMostRecentHistologyInterpretedAsUnspecifiedHsil

define HistologicHsilWithin12MonthsBeforeTreatment:
  AnyHistologicHsil B
  where
    B.date 12 months or less before MostRecentTreatmentDate

define HasHistologicHsilWithin12MonthsBeforeTreatment:
  Exists(HistologicHsilWithin12MonthsBeforeTreatment)

define PositiveHrHpvTestAfterTreatment:
  Collate.MostRecentHpvReport.date >= Now() - 12 months and
  Collate.MostRecentHpvReport.date 12 months or less after MostRecentTreatmentDate and
  AnyTrue(
    (Collate.MostRecentHpvReport.allConclusions) aC 
      return 
        aC in Dash."High Risk HPV Positive Results"
  )

define RareAbnormalityHighGradeHistology:
  (Collate.SortedBiopsyReports) B
    where AnyTrue(
      (B.allConclusions) aC
        return
          aC ~ Dash."CIN2" or
          aC in Dash."Histologic CIN3" or
          aC ~ Dash."HSIL, Unspecified"
    )

define RareAbnormalityHighGradeHistologyBeforeTreatment:
  if (MostRecentTreatment is not null) then
    RareAbnormalityHighGradeHistology C
    where
      C.date 12 months or less before MostRecentTreatmentDate
  else
    null

define CytologicHsilOrAgc:
  (Collate.SortedCytologyReports) C
    where AnyTrue(
      (C.allConclusions) aC
        return
          aC in "HSIL" or
          aC ~ "AGC"
    )

define CytologicHsilOrAgcBeforeTreatment:
  if (MostRecentTreatment is not null) then
    CytologicHsilOrAgc C
    where
      C.date 12 months or less before MostRecentTreatmentDate
  else
    null

define CytologyResultsBeforeTreatment:
  if (MostRecentTreatment is not null) then
    (Collate.SortedCytologyReports) C
    where
      C.date 12 months or less before MostRecentTreatmentDate
  else
    null

define HasPersistentAscHBeforeTreatment:
  if Count(CytologyResultsBeforeTreatment) >= 2 then
    AnyTrue(
      (CytologyResultsBeforeTreatment[0].allConclusions) aC
        return aC ~ "ASC-H"
    ) and
    AnyTrue(
      (CytologyResultsBeforeTreatment[1].allConclusions) aC
        return aC ~ "ASC-H"
    )
  else
    false

define TreatmentForHighGradeHistologyOrCytology:
  if (MostRecentTreatment is not null) and
    (
      Exists(RareAbnormalityHighGradeHistologyBeforeTreatment) or
      Exists(CytologicHsilOrAgcBeforeTreatment) or
      HasPersistentAscHBeforeTreatment
    ) then
    MostRecentTreatment
  else
    null

define HasTreatmentForHighGradeHistologyOrCytology:
  TreatmentForHighGradeHistologyOrCytology is not null

define TreatmentForHighGradeHistologyOrCytologyDate:
  CCF.ProcedureDate(TreatmentForHighGradeHistologyOrCytology)

define NegativeHrHpvTests:
  Collate.SortedHpvReports R
    where AnyTrue(
      (R.allConclusions) aC
        return
          aC in Dash."HPV Negative Results"
    )

define NegativeHrHpvTestsAsPartOfCotest:
  from NegativeHrHpvTests H, Collate.SortedCytologyReports C
    where H.date within 1 day of C.date
    return H

define NegativePrimaryHrHpvTests:
  NegativeHrHpvTests except NegativeHrHpvTestsAsPartOfCotest

define NegativeCytologyTests:
  Collate.SortedCytologyReports R
    where AnyTrue(
      (R.allConclusions) aC
        return
          aC ~ Dash."NILM"
    )

define NegativeCotests:
  from NegativeHrHpvTests H, NegativeCytologyTests C
    where H.date within 1 day of C.date
    return H

define NegativeSurveillanceTests:
  (
    NegativePrimaryHrHpvTests union
    NegativeCotests
  )

define SortedNegativeSurveillanceTests:
  NegativeSurveillanceTests H
    where H.date is not null
    return {
      date: H.date
    }
    sort by date asc

define NegativeSurveillanceTestsAfterMostRecentBiopsy:
  SortedNegativeSurveillanceTests H
    where H.date > Collate.MostRecentBiopsyReport.date

define FirstNegativeSurveillanceTestAfterMostRecentBiopsy:
  if Count(NegativeSurveillanceTestsAfterMostRecentBiopsy) > 0 then
    NegativeSurveillanceTestsAfterMostRecentBiopsy[0]
  else
    null

define HasFirstNegativeSurveillanceTestAfterMostRecentBiopsy:
  FirstNegativeSurveillanceTestAfterMostRecentBiopsy is not null

define NegativeSurveillanceTestsAfterSecondMostRecentBiopsy:
  SortedNegativeSurveillanceTests H
    where H.date > SecondMostRecentBiopsyReport.date

define FirstNegativeSurveillanceTestAfterSecondMostRecentBiopsy:
  if Count(NegativeSurveillanceTestsAfterSecondMostRecentBiopsy) > 0 then
    NegativeSurveillanceTestsAfterSecondMostRecentBiopsy[0]
  else
    null

define HasFirstNegativeSurveillanceTestAfterSecondMostRecentBiopsy:
  FirstNegativeSurveillanceTestAfterSecondMostRecentBiopsy is not null

define NegativeSurveillanceTestsAfterTreatmentForHighGradeHistologyOrCytology:
  if HasTreatmentForHighGradeHistologyOrCytology then
    SortedNegativeSurveillanceTests T
    where T.date > TreatmentForHighGradeHistologyOrCytologyDate
  else
    null

define InitialIntensiveSurveillancePeriod:
  if Count(NegativeSurveillanceTestsAfterTreatmentForHighGradeHistologyOrCytology) >= 3 then
    (
      NegativeSurveillanceTestsAfterTreatmentForHighGradeHistologyOrCytology[0].date 2 years or more before NegativeSurveillanceTestsAfterTreatmentForHighGradeHistologyOrCytology[2].date and
      NegativeSurveillanceTestsAfterTreatmentForHighGradeHistologyOrCytology[0].date 3 years or less before NegativeSurveillanceTestsAfterTreatmentForHighGradeHistologyOrCytology[2].date
    )
  else
    false

define RecommendationForSurveillanceAfterAbnormalities:
  case
    // J.2 Short-Term Follow-up After Treatment for Histologic HSIL
    when ( // J2.3
      HistologyInterpretedAsHistologicHsil and
      Collate.MostRecentBiopsyReport.date 5 years or less after MostRecentTreatmentDate and
      SecondMostRecentHistologyInterpretedAsHistologicHsil and
      SecondMostRecentBiopsyReport.date 5 years or less before MostRecentTreatmentDate
    ) then
      {
        short: 'See Details',
        date: Today(),
        group: 'Management Surveillance (J.2.3)',
        details: {
          'Repeat excision is acceptable if recurrent histologic HSIL (CIN 2+) develops after excisional treatment. If repeat excision is not feasible or not desired, hysterectomy is recommended.'
        }
      }    
    when ( // J2.2
      PositiveHrHpvTestAfterTreatment and
      HasHistologicHsilWithin12MonthsBeforeTreatment
    ) then
      {
        short: 'See Details',
        date: Today(),
        group: 'Management Surveillance (J.2.2)',
        details: {
          'Colposcopy is recommended.'
        }
      }    
    when ( // J2.1
      HasTreatmentInLastYear and
      HasHistologicHsilWithin12MonthsBeforeTreatment
    ) then
      {
        short: 'See Details',
        date: Today(),
        group: 'Management Surveillance (J.2.1)',
        details: {
          'Primary HPV testing or co-testing is preferred at 6 months regardless of the margin status of the excisional specimen.',
          'Follow-up at 6 months with colposcopy and ECC is acceptable*.',
          '*Refer to ASCCP Consensus Guideline 2019 Section J.2'
        }
      }
    // J.3 Guidance for Long-Term Follow-up After Treatment for High-Grade Histology or Cytology
    when ( // J3.1
      HasTreatmentForHighGradeHistologyOrCytology and
      TreatmentForHighGradeHistologyOrCytologyDate >= Now() - 25 years and
      not InitialIntensiveSurveillancePeriod
    ) then
      {
        short: 'See Details',
        date: Today(),
        group: 'Management Surveillance (J.3.1)',
        details: {
          'Primary HPV testing or co-testing is recommended at 6, 18, and 30 months following treatment. After 3 consecutive negative tests have been obtained, surveillance can continue at 3-year intervals for at least 25 years, even if this is past age 65, and may continue for as long as the patient remains in good health.'
        }
      }
    when ( // J3.2, Part 1
      HasTreatmentForHighGradeHistologyOrCytology and
      TreatmentForHighGradeHistologyOrCytologyDate >= Now() - 25 years and
      InitialIntensiveSurveillancePeriod
    ) then
      {
        short: 'See Details',
        date: Today(),
        group: 'Management Surveillance (J.3.2)',
        details: {
          'Primary HPV testing or co-testing at 3-year intervals is recommended for at least 25 years after treatment of high-grade histology.',
          'Discontinuation of screening is recommended if a patient has a limited life expectancy.'
        }
      }
    when ( // J3.2, Part 2
      HasTreatmentForHighGradeHistologyOrCytology and
      TreatmentForHighGradeHistologyOrCytologyDate < Now() - 25 years and
      InitialIntensiveSurveillancePeriod
    ) then
      {
        short: 'See Details',
        date: Today(),
        group: 'Management Surveillance (J.3.2)',
        details: {
          'Continued surveillance with HPV testing or co-testing at 3-year intervals is recommended and may continue as long as the patient is in reasonably good health.'
        }
      }
    else
      null
  end

define Recommendation:
  Coalesce(
    RecommendationForAisHistologyResults,
    RecommendationForSurveillanceAfterAbnormalities,
    RecommendationForHistologyResults,
    RecommendationForExceptionsToColposcopyThreshold,
    RecommendationForRareCytology
  )

// TODO: Replace integers with textual symbol
define WhichRarityMadeTheRecommendation:
  case
    when RecommendationForAisHistologyResults is not null then 3
    when RecommendationForSurveillanceAfterAbnormalities is not null then 4
    when RecommendationForHistologyResults is not null then 3
    when RecommendationForExceptionsToColposcopyThreshold is not null then 2
    when RecommendationForRareCytology is not null then 1
    else null
  end

//------------------------------------------------------------------------------
// ERRORS
//------------------------------------------------------------------------------

define Errors:
  {}

define ErrorsHaveOccurred:
  Exists(Errors)

define NoErrorsHaveOccurred:
  not ErrorsHaveOccurred