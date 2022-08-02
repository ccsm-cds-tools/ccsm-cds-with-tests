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
include CCSMCommonFunctions version '1.0.0' called Common
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

define CancerDiagnosisAfterMostRecentCytology:
  Exists(
    Dash.CervicalCancerDiagnoses C
      where Common.ConditionDate(C) > MostRecentCytologyReport.date
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
          'For patients with cytology showing AGC not otherwise specified or atypical endocervical cells not otherwise specified in whom histologic HSIL (CIN 2+) or AIS/cancer is not identified, cotesting at one and two years is recommended. If both cotests are negative, repeat cotesting at 3 years is recommended. If any test is abnormal, then colposcopy is recommended (BII).'
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
          'For patients with atypical glandular or endocervical cells \'favor neoplasia\' or endocervical AIS cytology, if invasive disease is not identified during initial colposcopic workup, a diagnostic excisional procedure is recommended. The diagnostic excisional procedure used in this setting should provide an intact specimen with interpretable margins (BII). Endocervical sampling above the excisional bed is preferred (BII).'
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
          'For nonpregnant patients of all ages with all subcategories of AGC and AIS, except when atypical endometrial cells are specified, colposcopy is recommended regardless of HPV test result; endocervical sampling is recommended at initial colposcopy except in pregnancy (for management in pregnancy, see Section K.2) (AII). Accordingly, triage by reflex HPV testing is not recommended, and triage by repeat cytology is unacceptable (DII). Endometrial sampling is also recommended for nonpregnant patients younger than 35 years at increased risk of endometrial neoplasia based on clinical indications (e.g., abnormal uterine bleeding, conditions suggesting chronic anovulation, or obesity) (AII).'
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
          'For nonpregnant patients of all ages with all subcategories of AGC and AIS, except when atypical endometrial cells are specified, colposcopy is recommended regardless of HPV test result; endocervical sampling is recommended at initial colposcopy except in pregnancy (for management in pregnancy, see Section K.2) (AII). Accordingly, triage by reflex HPV testing is not recommended, and triage by repeat cytology is unacceptable (DII). Endometrial sampling is recommended in conjunction with colposcopy and endocervical sampling in nonpregnant patients 35 years or older with all categories of AGC and AIS (AII).'
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
          'For patients with atypical endometrial cells specified, initial evaluation limited to endometrial and endocervical sampling is preferred, with colposcopy acceptable at the time of initial evaluation. If colposcopy was deferred and no endometrial pathology is identified, additional evaluation with colposcopy is then recommended.'
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
          'For patients with an unsatisfactory cytology result and no, unknown, or a negative HPV test result, repeat age-based screening (cytology, cotest, or primary HPV test) in 2 to 4 months is recommended (BIII). Triage using HPV testing is not recommended (DIII). Before repeat cytology, treatment to resolve atrophy or obscuring inflammation when a specific infection is present is acceptable (CIII).'
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
          'For patients 25 years and older who are cotested and have unsatisfactory cytology and a positive HPV test without genotyping for HPV 16 or HPV 18, repeat cytology in 2 to 4 months or colposcopy is acceptable (BII).'
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
          'For patients 25 years and older who are cotested and have unsatisfactory cytology and a positive HPV test with partial genotyping is positive for HPV 16 or HPV 18, direct referral for colposcopy is recommended (BII).'
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
          'Routine screening is recommended (BIII). When cervical cytology alone is performed for screening, HPV testing as a triage test after negative cytology and absent endocervical cells/transformation zone component in this age group is unacceptable (DIII).'
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
          'HPV testing is preferred (BIII). Repeat cytology in 3 years is acceptable if HPV testing is not performed (BIII). If HPV testing is performed, manage using Clinical Action Thresholds according to 2019 consensus guidelines.'
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
          'For asymptomatic premenopausal patients with benign endometrial cells, endometrial stromal cells, or histiocytes, no further evaluation is recommended (BII).'
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
          'For postmenopausal patient with benign endometrial cells found via cytology, endometrial assessment is recommended (BII).'
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
          'For patients \'post-hysterectomy\' with benign glandular cells identified via cytology, no further evaluation is recommended (BII).'
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
          'For patients with ASC-H cytology, colposcopy is recommended regardless of hrHPV result (AII).'
        }
      }
    when (
      MostRecentCytologyReportWasWithinPastFiveYears and
      PositiveHpv16or18Cotest and
      CytologyInterpretedAsNilm
    ) then
      {
        short: 'Colposcopy',
        date: Today(),
        group: 'Exception to Colposcopy Threshold (H.2)',
        details: {
          'For patients with hrHPV 18-positive NILM or hrHPV 16-positive NILM, colposcopy is recommended (AII).'
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
          'Colposcopy should be performed after 2 consecutive unsatisfactory screening tests (CIII).'
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

define RecommendationForHistologyResults:
  case
    // I.1 Management of Histologic HSIL, not Further Specified or Qualified
    when (
      AgeInYears() >= 25 and
      not RecentlyRespondedYesToFuturePregnancyConcernsQuestion and
      MostRecentBiopsyReportWasWithinPastYear and
      HistologyInterpretedAsUnspecifiedHsil
    ) then
      {
        short: 'Surveillance or Treatment',
        date: Today(),
        group: 'Managing Histology (I.1)',
        details: {
          'Treatment is preferred if histologic HSIL cannot be specified (e.g., reported as histologic HSIL or histologic HSIL [CIN 2,3]) (CIII), but observation is acceptable if there are concerns related to future pregnancies (CIII). For patients 25 years or older, observation includes colposcopy and HPV-based testing with cotest or primary hrHPV testing at 6-month intervals for up to 2 years.'
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
          'Treatment is recommended, and observation is unacceptable (AII). When treatment of histologic HSIL is planned, excisional treatment is preferred, and treatment with ablation is acceptable (BI). Outside of the setting of a clinical research trial, nonsurgical therapies, including topical agents, therapeutic vaccines, and other biologics, are unacceptable for the treatment of histologic HSIL (CIN 2 or CIN 3) (DIII). Hysterectomy is unacceptable as primary therapy solely for the treatment of histologic HSIL (CIN 2, CIN 3, or unqualified) (EII). When considering ablative therapy, in particular cryotherapy, ablation is unacceptable in the following circumstances as defined by the WHO: (a) the lesion extends into the canal and (b) when the lesion covers more than 75% of the surface area of the ectocervix or extends beyond the cryotip being used. Additional situations for which cryotherapy is not recommended include the following: (a) the squamocolumnar junction or the upper limit of any lesion is not fully visualized; (b) endocervical canal sample is diagnosed as CIN 2+ or CIN that cannot be graded; (c) after previous treatment for CIN 2+; (d) in the setting of inadequate biopsies of the cervix to confirm histologic diagnosis; and (e) if cancer is suspected (EIII).'
        }
      }
    when ( // I2.2
      AgeInYears() >= 25 and
      not Dash.Pregnant and not RecentlyRespondedYesToFuturePregnancyConcernsQuestion and
      MostRecentBiopsyReportWasWithinPastYear and
      HistologyInterpretedAsCin2
    ) then
      {
        short: 'Surveillance or Treatment',
        date: Today(),
        group: 'Managing Histology (I.2)',
        details: {
          'Treatment is recommended unless the patient\'s concerns about the effect of treatment on future pregnancy outweigh concerns about cancer (BII). Observation is unacceptable when the squamocolumnar junction or the upper limit of the lesion is not fully visualized or when the results of an endocervical sampling, if performed, is CIN 2+ or ungraded (EIII). For patients with a diagnosis of histologic HSIL (CIN 2) whose concerns about the effects of treatment on a future pregnancy outweigh their concerns about cancer, either observation or treatment is acceptable provided the squamocolumnar junction is visible and CIN 2+ or ungraded CIN is not identified on endocervical sampling (CII). For patients 25 years or older, observation includes colposcopy and HPV-based testing with cotest or primary hrHPV testing at 6-month intervals for up to 2 years.\n\nWhen treatment of histologic HSIL is planned, excisional treatment is preferred, and treatment with ablation is acceptable (BI). Outside of the setting of a clinical research trial, nonsurgical therapies, including topical agents, therapeutic vaccines, and other biologics, are unacceptable for the treatment of histologic HSIL (CIN 2 or CIN 3) (DIII). Hysterectomy is unacceptable as primary therapy solely for the treatment of histologic HSIL (CIN 2, CIN 3, or unqualified) (EII). When considering ablative therapy, in particular cryotherapy, ablation is unacceptable in the following circumstances as defined by the WHO: (a) the lesion extends into the canal and (b) when the lesion covers more than 75% of the surface area of the ectocervix or extends beyond the cryotip being used. Additional situations for which cryotherapy is not recommended include the following: (a) the squamocolumnar junction or the upper limit of any lesion is not fully visualized; (b) endocervical canal sample is diagnosed as CIN 2+ or CIN that cannot be graded; (c) after previous treatment for CIN 2+; (d) in the setting of inadequate biopsies of the cervix to confirm histologic diagnosis; and (e) if cancer is suspected (EIII).'
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
          'If CIN 2 remains present for a 2-year period, treatment is recommended (CII).'
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
          'Surveillance with HPV-based testing is recommended every 3 years for 25 years after histologic HSIL (unspecified or CIN2) even if beyond the age of 65 (BII).'
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
          'Subsequent surveillance with HPV-based testing should occur every year since the patient has demonstrated less than CIN2 and less than ASC-H during surveillance following a histologic unspecified or CIN2 result.'
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
          'If the histologic HSIL cannot be specified as CIN 2, treatment is preferred, but observation is acceptable if there are concerns related to future pregnancies (CIII). For patients 25 years or older, observation includes colposcopy and HPV-based testing with cotest or primary hrHPV testing at 6-month intervals for up to 2 years.'
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
          'For patients with a diagnosis of histologic HSIL (CIN 2) whose concerns about the effects of treatment on a future pregnancy outweigh their concerns about cancer, either observation or treatment is acceptable provided the squamocolumnar junction is visible and CIN 2+ or ungraded CIN is not identified on endocervical sampling (CII). For patients 25 years or older, observation includes colposcopy and HPV-based testing with cotest or primary hrHPV testing at 6-month intervals for up to 2 years.'
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
          'When CIN 2+ is not identified, HSIL cytology is managed more aggressively than ASC-H cytology. For cytology showing HSIL, but biopsy showing histologic LSIL (CIN 1) or less, either an immediate diagnostic excisional procedure or observation with HPV-based testing and colposcopy at 1 year is acceptable, provided in the latter case that the initial colposcopic examination fully visualized the squamocolumnar junction and the upper limit of any lesion, and that the endocervical sampling, if collected, was less than CIN 2 (BII). When CIN2+ is not identified histologically after an ASC-H or HSIL cytology result, it is acceptable to review the cytologic, histologic, and colposcopic findings. If the review yields a revised interpretation, management should follow guidelines for the revised diagnosis (CIII).'
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
          'For ASC-H, if the colposcopic examination can fully visualize the squamocolumnar junction and the upper limit of any lesion and that the endocervical sampling, if collected, is negative, observation at 1 year with HPV-based testing with cotesting or primary hrHPV testing is recommended; a diagnostic excisional procedure is not recommended (BII).'
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
          'Retest with HPV-based testing (i.e., cotesting or primary hrHPV testing) every 3 years after surveillance tests are negative during the 2-year observation period following histologic LSIL (CIN1) or less preceded by ASC-H or HSIL cytology. Proceed with long-term surveillance (i.e., HPV-based testing every 3 years for at least 25 years, even if this is beyond the age of 65 years (BII).'
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
          'HPV-based testing (i.e., cotesting or primary hrHPV testing) is recommended 1 year after the initial negative follow up result(s) when observation is elected after a histologic LSIL (CIN1) preceded by ASC-H or HSIL cytology.'
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
          'A diagnostic excisional procedure is recommended for patients with HSIL cytology results at either the 1- or 2-year visit, or ASC-H results that persist at the 2-year visit (CIII).'
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
          'If any test is abnormal during the observation period after a HSIL and ASC-H cytology, a repeat colposcopy is recommended, and management based on resulting biopsies is recommended.'
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
          'For patients 25 years or older with histologic LSIL (CIN 1) who is diagnosed at consecutive visits for at least 2 years, observation is preferred (BII) but treatment is acceptable (CIII). If treatment is selected and the entire squamocolumnar junction and all lesions were fully visualized during colposcopic examination, either excision or ablation treatments are acceptable (CII).'
        }
      }
    // I.6 Management of AIS: Adoption of Society of Gynecologic Oncology Recommendations
    when (
      AgeInYears() >= 25 and
      MostRecentBiopsyReportWasWithinPastYear and
      HistologyInterpretedAsAis
    ) then
      {
        short: 'See Details',
        date: Today(),
        group: 'Managing Histology (I.6)',
        details: {
          'A diagnostic excisional procedure is recommended for all patients with a diagnosis of AIS on cervical biopsy to rule out invasive adenocarcinoma, even when definitive hysterectomy is planned. Excisional procedures should optimally remove an intact specimen to facilitate accurate interpretation of margin status. Although there is no preference for cold knife conization versus LEEP, intentional disruption of the specimen by performance of a LEEP followed by a \'top hat\' endocervical excision to achieve the desired specimen length is unacceptable. An excisional specimen length of at least 10 mm is preferred, and this can be increased to 18 to 20 mm for patients who are not concerned about the effect of treatment on future pregnancy. These dimensions are preferred regardless of whether hysterectomy is planned. After the initial diagnostic procedure, hysterectomy is the preferred management for all patients who have a histologic diagnosis of AIS, although fertility-sparing management for appropriately selected patients is acceptable. For patients with confirmed AIS with negative margins on the excisional specimen, simple hysterectomy is preferred. For patients with confirmed AIS with positive margins on the excisional specimen, re-excision to achieve negative margins is preferred, even if hysterectomy is planned. For patients with AIS and persistent positive margins for whom additional excisional procedures are not feasible, either a simple or modified radical hysterectomy is acceptable. After hysterectomy, surveillance per the ASCCP surveillance guidelines for treated CIN 2+ is recommended (Section J.3).\n\nFor patients of reproductive age who desire future pregnancy, fertility-sparing management with an excisional procedure is acceptable provided that negative margins have been achieved on the excisional specimen, and the patient is willing and able to adhere to surveillance recommendations. If negative margins cannot be achieved after maximal excisional attempts, fertility-sparing management is not recommended. For patients who undergo fertility-sparing management, surveillance with cotesting and endocervical sampling is recommended every 6 months for at least 3 years, then annually for at least 2 years, or until hysterectomy is performed. For patients who have consistently negative cotesting and endocervical sampling results for 5 years, extending the surveillance interval to every 3 years starting in the sixth year of surveillance is acceptable. Small retrospective studies have shown HPV test results to be the best predictor for recurrent disease. Therefore, for patients who have consistently negative cotesting and endocervical sampling results, continued surveillance is acceptable after completion of childbearing. For patients who have had positive HPV test results or abnormal cytology/histologic results during surveillance, hysterectomy at the completion of childbearing is preferred (see Figure 11).'
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
  Common.ProcedureDate(MostRecentTreatment)

define TreatmentInLastYear:
  MostRecentTreatment P
  where Common.ProcedureDate(P) >= Now() - 12 months

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
          aC ~ Dash."HSIL, Unspecified" or
          aC in Dash."AIS"
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
  Common.ProcedureDate(TreatmentForHighGradeHistologyOrCytology)

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
  if Count(NegativeSurveillanceTestsAfterTreatmentForHighGradeHistologyOrCytology) >= 4 then
    (
      NegativeSurveillanceTestsAfterTreatmentForHighGradeHistologyOrCytology[0].date 2 years or more before NegativeSurveillanceTestsAfterTreatmentForHighGradeHistologyOrCytology[2].date and
      NegativeSurveillanceTestsAfterTreatmentForHighGradeHistologyOrCytology[0].date 3 years or less before NegativeSurveillanceTestsAfterTreatmentForHighGradeHistologyOrCytology[2].date
    ) or
    (
      NegativeSurveillanceTestsAfterTreatmentForHighGradeHistologyOrCytology[1].date 2 years or more before NegativeSurveillanceTestsAfterTreatmentForHighGradeHistologyOrCytology[3].date and
      NegativeSurveillanceTestsAfterTreatmentForHighGradeHistologyOrCytology[1].date 3 years or less before NegativeSurveillanceTestsAfterTreatmentForHighGradeHistologyOrCytology[3].date
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
          'If recurrent histologic HSIL (CIN 2+) develops after excisional treatment, and repeat excision is not feasible or not desired, hysterectomy is recommended.'
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
          'Colposcopy and appropriate biopsies should be performed if an hrHPV \'positive\' result after treatment for histologic HSIL (AIII).'
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
          'After treatment, hrHPV-based testing is preferred at 6 months regardless of the margin status of the excisional specimen (BII). hrHPV-based testing includes cotesting and primary hrHPV testing. Follow-up at 6 months with colposcopy and ECC is acceptable (BIII). When margins are positive for CIN 2+ or ECC performed at the time of the excisional procedure shows CIN 2+ in patients 25 years or older who are not concerned about the potential effect of treatment on future pregnancy outcomes, repeat excision or observation is acceptable. For observation, HPV-based testing in 6 months is preferred; it is also acceptable to perform a colposcopy and ECC at 6 months.'
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
          'In patients treated for histologic or cytologic HSIL, after the initial HPV-based test at 6 months, annual HPV or cotesting is preferred until 3 consecutive negative tests have been obtained (AII). Discontinuation of screening is recommended if a patient has a limited life expectancy. Management according to the highest-grade abnormality found on histology or cytology is recommended.'
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
          'In patients treated for histologic or cytologic HSIL, after the initial intensive surveillance period, continued surveillance at 3-year intervals is recommended for at least 25 years after treatment of high-grade histology (histologic HSIL, CIN 2, CIN 3, or AIS) or high-grade cytology (HSIL, AGC, or persistent ASC-H) even if this is beyond the age of 65 years (BII). When patients with a history of treated high-grade histology or cytology reach the age of 65 years, if they have completed the initial 25-year surveillance period, continued surveillance at 3-year intervals is acceptable and may continue as long as the patient is in reasonably good health (BIII). Discontinuation of screening is recommended if a patient has a limited life expectancy. Management according to the highest-grade abnormality found on histology or cytology is recommended.'
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
          'Continued surveillance with HPV testing or cotesting at 3-year intervals for at least 25 years is recommended after treatment and initial post-treatment management of histologic HSIL, CIN 2, CIN 3, or AIS.'
        }
      }
    else
      null
  end

define Recommendation:
  Coalesce(
    RecommendationForSurveillanceAfterAbnormalities,
    RecommendationForHistologyResults,
    RecommendationForExceptionsToColposcopyThreshold,
    RecommendationForRareCytology
  )

// TODO: Replace integers with textual symbol
define WhichRarityMadeTheRecommendation:
  case
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