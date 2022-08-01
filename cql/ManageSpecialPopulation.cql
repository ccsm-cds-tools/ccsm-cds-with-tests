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

library ManageSpecialPopulation version '1.1.0'

using FHIR version '4.0.1'

include FHIRHelpers version '4.0.1' called FHIRHelpers
include CDSConnectCommonsforFHIRv401 version '1.0.0' called C3F
include DashboardLibrary version '1.0.0' called Dash
include CollateManagementData version '1.1.0' called Collate
include ManageRareAbnormality version '1.1.0' called Rare
include CCSMCommonFunctions version '1.0.0' called CCF

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
code "LSIL": '62051000119105' from "SNOMED-CT" display 'Low grade squamous intraepithelial lesion on cervical Papanicolaou smear (finding)'
code "ASC-US": '441087007' from "SNOMED-CT" display 'Atypical squamous cells of undetermined significance on cervical Papanicolaou smear (finding)'

//------------------------------------------------------------------------------
// PARAMETERS
//------------------------------------------------------------------------------

/***** BEGIN CDS LOGIC ********************************************************/

context Patient

//------------------------------------------------------------------------------
// RECOMMENDATIONS FOR SPECIAL POPULATIONS
//------------------------------------------------------------------------------

/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
// Special Populations Section K.1 Management of Patients Younger Than 25 Years

define AssociatedHpvCotest:
  Coalesce(
    (Collate.SortedHpvReports) H
      where H.date within 1 day of Under25And2YearsAgoCytologyReport.date
  )

define ColposcopySinceMostRecentCytology:
  Exists(
    (Dash.ColposcopyProcedures) P
      where CCF.ProcedureDate(P) >= Rare.MostRecentCytologyReport.date
  )

define HistologicHsilCin2OrUnspecified:
  First(
    (Collate.SortedBiopsyReports) B
    where AnyTrue(
      (B.allConclusions) aC
        return
          aC ~ Dash."CIN2" or
          aC ~ Dash."HSIL, Unspecified"
    )
  )

define SubsequentLowGradeHistologyReportsSinceMostRecentHsilHistology:
  (Collate.SortedBiopsyReports) B
    where
      B.date less than 2 years after HistologicHsilCin2OrUnspecified.date and
      AnyTrue(
        (B.allConclusions) aC
          return
            aC ~ "CIN1" or
            aC in "Normal Histology Finding"
      )

define SubsequentLowGradeCytologyReportsSinceMostRecentHsilHistology:
  (Collate.SortedCytologyReports) C
    where
      C.date less than 2 years after HistologicHsilCin2OrUnspecified.date and
      AnyTrue(
        (C.allConclusions) aC
          return
            aC ~ Dash."NILM" or
            aC ~ "LSIL" or
            aC ~ "ASC-US"
      )

define Under25AndLowGradeCytologyResults:
  AgeInYears() < 25 and
  (
    Rare.CytologyInterpretedAsLsil or
    (
      Collate.MostRecentCytologyCotestResult = 'ASC-US' and
      Collate.MostRecentHpvResult = 'HPV-positive'
    ) or
    (
      Rare.CytologyInterpretedAsAscus and
      Collate.MostRecentCytologyCotestResult is null
    )
  )

define Under25And2YearsAgoCytologyResults:
  (Collate.SortedCytologyReports) C
    where (
      C.date 2 years or more before Rare.MostRecentCytologyReport.date and
      C.date 3 years or less before Rare.MostRecentCytologyReport.date)

define Under25And2YearsAgoCytologyReport:
  Under25And2YearsAgoCytologyResults[0]

define Under25And2YearsAgoCytologyReportInterpretedAsLsil:
  AnyTrue(
    (Under25And2YearsAgoCytologyReport.allConclusions) aC
      return aC ~ "LSIL"
  )

define Under25And2YearsAgoCytologyReportInterpretedAsAscus:
  AnyTrue(
    (Under25And2YearsAgoCytologyReport.allConclusions) aC
      return aC ~ "ASC-US"
  )

define Under25And2YearsAgoLowGradeCytologyResults: 
  AgeInYears() < 25 and
  ( 
    Exists(Under25And2YearsAgoCytologyResults) and
    (
      Under25And2YearsAgoCytologyReportInterpretedAsLsil or
      (
        Under25And2YearsAgoCytologyReportInterpretedAsAscus and
        AssociatedHpvCotest.riskTableInput = 'HPV-positive'
      ) or
      (
        Under25And2YearsAgoCytologyReportInterpretedAsAscus and
        AssociatedHpvCotest is null
      )
    )
  )

define Under25AndSecondMostRecentLowGradeCytologyResults:
  AgeInYears() < 25 and
  (
    Rare.SecondMostRecentCytologyInterpretedAsLsil or
    (
      Rare.SecondMostRecentCytologyInterpretedAsAscus and
      AssociatedHpvCotest.riskTableInput = 'HPV-positive'
    ) or
    (
      Rare.SecondMostRecentCytologyInterpretedAsAscus and
      AssociatedHpvCotest is null
    )
  )

define HistologyInterpretedAsLessThanCin2AfterAbnormalCytologyScreening:
  Rare.HistologyInterpretedAsCin1OrNormal and
  Under25AndLowGradeCytologyResults and
  Under25AndSecondMostRecentLowGradeCytologyResults and
  Collate.MostRecentBiopsyReport.date 3 years or less after Rare.MostRecentCytologyReport.date

define CytologyInterpretedAsAscusOrAbove:
  Rare.MostRecentCytologyReport.riskTableInput in {'ASC-US','LSIL','ASC-H','AGC','HSIL+'}

define SecondMostRecentCytologyInterpretedAsAscHOrHsil:
  AnyTrue(
    (Rare.SecondMostRecentCytologyReport.allConclusions) aC
      return
        aC ~ "ASC-H" or
        aC in "HSIL"
  )

define BiopsySinceMostRecentCytology:
  Exists(
    Collate.SortedBiopsyReports B
    where B.date > Rare.MostRecentCytologyReport.date
  )

define ShouldSwitchToRiskAt25Text:
  'Clinicians should switch to using risk estimates when patients reach the age of 25 years.'

define RecommendationForPatientsYoungerThan25:
  case
    // Heading 3: Management of Histology of Less than CIN2 Preceded by Cytology ASC-H and HSIL in Patients Younger than 25 Year
    when ( // Heading 3.3
      AgeInYears() < 25 and
      not Dash.Pregnant and
      Rare.HistologyInterpretedAsCin1OrNormal and
      (
        Rare.CytologyInterpretedAsHsil or
        Rare.CytologyInterpretedAsAscH
      ) and
      Rare.MostRecentCytologyReport.date more than 18 months after Collate.MostRecentBiopsyReport.date and
      Rare.MostRecentCytologyReport.date less than 3 years after Collate.MostRecentBiopsyReport.date
    ) then
      {
        short: 'See Details',
        date: Today(),
        group: 'Younger Than 25 (K.1.3)',
        details: {
          'If a high-grade cytologic abnormality (HSIL, ASC-H) without histologic HSIL persists for 2 years, a diagnostic excisional procedure is recommended (unless the patient is pregnant). A diagnostic excisional procedure is recommended in patients when the squamocolumnar junction or the upper limit of all lesions are not fully visualized.'
        }
      }    
    when ( // Heading 3.2
      AgeInYears() >= 21 and AgeInYears() < 25 and
      Rare.HistologyInterpretedAsCin1OrNormal and
      (
        CytologyInterpretedAsAscusOrAbove or
        Rare.CytologyInterpretedAsAis
      ) and
      Rare.MostRecentCytologyReport.date less than 3 years after Collate.MostRecentBiopsyReport.date and
      SecondMostRecentCytologyInterpretedAsAscHOrHsil and
      Rare.SecondMostRecentCytologyReport.date less than 6 months before Collate.MostRecentBiopsyReport.date
    ) then
      {
        short: 'Colposcopy',
        date: Today(),
        group: 'Younger Than 25 (K.1.3)',
        details: {
          'Colposcopy is recommended for cytologic ASC-US or above on repeat testing following a CIN1 or < CIN1 result that is preceded by a cytologic ASC-H, AGC, AIS, or HSIL result.',
          ShouldSwitchToRiskAt25Text
        }
      }    
    when ( // Heading 3.1b
      AgeInYears() < 25 and
      Rare.HistologyInterpretedAsCin1OrNormal and
      Rare.CytologyInterpretedAsHsil and
      Rare.MostRecentCytologyReport.date less than 12 months before Collate.MostRecentBiopsyReport.date
    ) then
      {
        short: 'Colposcopy and Cytology',
        date: Collate.DateOfMostRecentReport + 1 year,
        group: 'Younger Than 25 (K.1.3)',
        details: {
          'Observation is recommended with colposcopy and cytology at 1 and 2 years following a cervical histology result of CIN1 or <CIN1 preceded by a HSIL cytology. Diagnostic excisional procedures are not recommended for patients younger than 25 years with these results as long as the squamocolumnar junction and the upper limit of all lesions are fully visualized, the endocervical sampling is less than CIN 2, and review of histology/cytology does not change the diagnosis.',
          ShouldSwitchToRiskAt25Text
        }
      }
    when ( // Heading 3.1c
      AgeInYears() < 25 and
      Rare.HistologyInterpretedAsCin1OrNormal and
      Rare.CytologyInterpretedAsAscH and
      Rare.MostRecentCytologyReport.date less than 12 months before Collate.MostRecentBiopsyReport.date
    ) then
      {
        short: 'Cytology',
        date: Collate.DateOfMostRecentReport + 1 year,
        group: 'Younger Than 25 (K.1.3)',
        details: {
          'Observation is recommended with cytology at 1 and 2 years following a cervical histology result of CIN1 or <CIN1 preceded by a ASC-H, AGC or AIS cytology. Diagnostic excisional procedures are not recommended for patients younger than 25 years with these results as long as the squamocolumnar junction and the upper limit of all lesions are fully visualized, the endocervical sampling is less than CIN 2, and review of histology/cytology does not change the diagnosis.',
          ShouldSwitchToRiskAt25Text
        }
      }

    // Heading 4: Management of Histologic HSIL (CIN2 or CIN3) for Patients Younger Than 25 Years
    when ( // Heading4.5
      AgeInYears() < 25 and
      (
        Rare.HistologyInterpretedAsCin2 or
        Rare.HistologyInterpretedAsUnspecifiedHsil
      ) and
      (
        Rare.SecondMostRecentHistologyInterpretedAsCin2 or
        Rare.SecondMostRecentHistologyInterpretedAsUnspecifiedHsil
      ) and
      Rare.SecondMostRecentBiopsyReport.date within 2 years of Collate.MostRecentBiopsyReport.date
    ) then
      {
        short: 'Treatment',
        group: 'Younger Than 25 (K.1.4)',
        date: Today(),
        details: {
          'Treatment is recommended. Excisional treatment is recommended when the squamocolumnar junction or the lesions(s) are not fully visualized.'
        }
      }  
    when ( // Heading4.4
      AgeInYears() < 25 and
      HistologicHsilCin2OrUnspecified is not null and
      Count(SubsequentLowGradeHistologyReportsSinceMostRecentHsilHistology) >= 2 and
      Count(SubsequentLowGradeCytologyReportsSinceMostRecentHsilHistology) >= 2
    ) then
      {
        short: 'Colposcopy and Cytology',
        date: Collate.DateOfMostRecentReport + 1 year,
        group: 'Younger Than 25 (K.1.4)',
        details: {
          'Surveillance with colposcopy and cervical cytology should be performed at 1 year after the most recent cervical histology and cytology tests following an earlier histology HSIL (CIN2) or histologic HSIL, unspecified result.'
        }
      }  
    when ( // Heading4.1
      AgeInYears() < 25 and
      Rare.MostRecentBiopsyReportWasWithinPastYear and
      Rare.HistologyInterpretedAsCin3
    ) then
      {
        short: 'Treatment',
        date: Today(),
        group: 'Younger Than 25 (K.1.4)',
        details: {
          'Treatment is recommended, and observation is unacceptable (EII).'
        }
      }
    when ( // Heading4.2
      AgeInYears() < 25 and
      Rare.MostRecentBiopsyReportWasWithinPastYear and
      Rare.HistologyInterpretedAsCin2
    ) then
      {
        short: 'See Details',
        date: Today(),
        group: 'Younger Than 25 (K.1.4)',
        details: {
          'Observation is preferred, and treatment is acceptable (BII). Observation includes colposcopy and cytology at 6-month intervals.'
        }
      }
    when ( // Heading4.3
      AgeInYears() < 25 and
      Rare.MostRecentBiopsyReportWasWithinPastYear and
      Rare.HistologyInterpretedAsUnspecifiedHsil
    ) then
      {
        short: 'See Details',
        date: Today(),
        group: 'Younger Than 25 (K.1.4)',
        details: {
          'Observation or treatment is acceptable after an unspecified histologic HSIL result. Observation includes colposcopy and cytology at 6-month intervals.'
        }
      }
    // Heading 1 & Heading 2: Initial Management After an Abnormal Screening Test Result; Management of Cytology ASC-H and HSIL in Patients Younger than 25 Years
    when ( // 2
      AgeInYears() < 25 and
      Rare.MostRecentCytologyReportWasWithinPastFiveYears and
      (
        Rare.CytologyInterpretedAsHsil or
        Rare.CytologyInterpretedAsAscH or
        Rare.CytologyInterpretedAsAgc or
        Rare.CytologyInterpretedAsAis
      ) and
      not BiopsySinceMostRecentCytology
    ) then
      {
        short: 'Colposcopy',
        date: Today(),
        group: 'Younger Than 25 (K.1.1)',
        details: {
          'Colposcopy is recommended for individuals under 25 years old with cytologic HSIL, ASC-H, AGC or AIS (BII). Immediate treatment without histologic confirmation is not recommended for cytology HSIL or ASC-H.',
          ShouldSwitchToRiskAt25Text
        }
      }
    when ( // 4
      AgeInYears() < 25 and
      Rare.MostRecentCytologyReportWasWithinPastFiveYears and
      Collate.MostRecentCytologyCotestResult = 'ASC-US' and
      Collate.MostRecentHpvResult = 'HPV-negative'
    ) then
      {
        short: 'Cytology',
        date: Collate.DateOfMostRecentReport + 3 years,
        group: 'Younger Than 25 (K.1.1)',
        details: {
          'Cervical Cytology test (alone) is indicated 3 years after an ASC-US/HPV-Negative result.',
          ShouldSwitchToRiskAt25Text
        }
      }
    when ( // 5a
      HistologyInterpretedAsLessThanCin2AfterAbnormalCytologyScreening and
      Collate.MostRecentBiopsyReport.date > Now() - 12 months
    ) then
      {
        short: 'Cytology',
        date: Collate.DateOfMostRecentReport + 1 year,
        group: 'Younger Than 25 (K.1.1)',
        details: {
          'For patients under 25 years old perform cervical cytology one year following cervical histologic LSIL(CIN1) or <CIN1 result (BIII).',
          ShouldSwitchToRiskAt25Text
        }
      }
    when ( // #5b
      HistologyInterpretedAsLessThanCin2AfterAbnormalCytologyScreening and
      Collate.MostRecentBiopsyReport.date <= Now() - 12 months and
      not (Rare.MostRecentCytologyReport.date > Collate.MostRecentBiopsyReport.date)
    ) then
      {
        short: 'Cytology',
        date: Today(),
        group: 'Younger Than 25 (K.1.1)',
        details: {
          'This patient is due now for cervical cytology screening. For patients under 25 years old, cervical cytology should be performed one year after a cervical histologic LSIL(CIN1) or <CIN1 result. (BIII).',
          ShouldSwitchToRiskAt25Text
        }
      }
    when ( // 1.c
      Under25AndLowGradeCytologyResults and
      Under25And2YearsAgoLowGradeCytologyResults
    ) then
      {
        short: 'Colposcopy',
        date: Today(),
        group: 'Younger Than 25 (K.1.1)',
        details: {
          'Colposcopy is recommended if low-grade cytology persists at the 2-year follow up visit after low-grade cytology results (BII).',
          ShouldSwitchToRiskAt25Text
        }
      }
    when ( // 1.a
      Under25AndLowGradeCytologyResults 
    ) then
      {
        short: 'Cytology',
        date: Collate.DateOfMostRecentReport + 1 year,
        group: 'Younger Than 25 (K.1.1)',
        details: {
          'Repeat cytology alone at one and two years is recommended after an initial low-grade cytology screening result of LSIL, ASC-US HPV-positive, or ASC-US result without HPV testing (BII).',
          ShouldSwitchToRiskAt25Text
        }
      }
    else
      null
  end

/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
// Special Populations Section K.2 Management of Patients During Pregnancy

define PregnancyOnset:
  Coalesce(
    CCF.ConditionDate(
      C3F.MostRecentCondition(
        Dash.PregnancyDiagnoses
      ) 
    ),
    CCF.ObservationDate(
      C3F.MostRecent(
        Dash.PregnancyObservations
      )
    ) 
  ) 

define FirstHistologyAfterPregnancyOnset:
  Last(
    (Collate.SortedBiopsyReports) B
      where B.date >= PregnancyOnset
  )

define HistologicAisDuringPregnancy:
  Exists(
    (Collate.SortedBiopsyReports) B
      where
        B.date >= PregnancyOnset and
        B.date <= PregnancyOnset + 42 weeks and
        AnyTrue(
          (B.allConclusions) aC
            return
              aC in Dash."AIS"
        )
  )

define RecommendationForPregnantPatients:
  case
    // #1 is covered by the Common Abnormality Recommendation section.
    when ( // K2.2 - Recommendation #1
      AgeInYears() >= 25 and
      Dash.Pregnant and
      FirstHistologyAfterPregnancyOnset.date > Now() - 1 year and
      FirstHistologyAfterPregnancyOnset.riskTableInput in {'CIN2','CIN3'}
    ) then
      {
        short: 'See Details',
        date: Today(),
        group: 'Pregnant (K.2)',
        details: {
          'Surveillance colposcopy and testing (with diagnostic cytology or HPV depending on age) is preferred every 12 to 24 weeks but deferring colposcopy to the postpartum period is acceptable (BII). In postpartum period, colposcopy is recommended no earlier than 4 weeks after delivery (BII). In patients diagnosed with histologic HSIL (CIN2 or CIN3) during pregnancy, if a lesion is detected at postpartum colposcopy, an excisional treatment procedure or full diagnostic evaluation (cervical cytology, HPV, and biopsy) is acceptable (BII). In the absence of a lesion on colposcopy, a full diagnostic evaluation is recommended/ expedited treatment is not recommended (BII). For patients with a diagnosis of histologic HSIL (CIN 2) whose concerns about the effects of treatment on a future pregnancy outweigh their concerns about cancer, either observation or treatment is acceptable provided the squamocolumnar junction is visible and CIN 2+ or ungraded CIN is not identified on endocervical sampling (CII). If the histologic HSIL cannot be specified as CIN 2, treatment is preferred, but observation is acceptable if there are concerns related to future pregnancies (CIII). For patients 25 years or older, observation includes colposcopy and HPV-based testing with cotest or primary hrHPV testing at 6-month intervals for up to 2 years.'
        }
      }
    when ( // K2.2 - Recommendation #2
      AgeInYears() >= 25 and
      Dash.Pregnant and
      HistologicAisDuringPregnancy
    ) then
      {
        short: 'See Details',
        date: Today(),
        group: 'Pregnant (K.2)',
        details: {
          'Referral to a gynecologic oncologist is preferred if AIS is diagnosed during pregnancy, but management by a gynecologist skilled in the colposcopic diagnosis and treatment of AIS is acceptable (CIII).'
        }
      }
    else
      null
  end

/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
// Special Populations Section K.3 Managing Patients With Immunosuppression

define Immunocompromised:
  Dash.Immunocompromised

define MostRecentHpvReportWasWithinPastFiveYears:
  Collate.MostRecentHpvReport.date > Now() - 5 years

define TwoMostRecentCytologyReportsWithin18MonthsApart:
  Rare.SecondMostRecentCytologyReport.date within 18 months of Rare.MostRecentCytologyReport.date

define RecommendationForImmunosuppressedPatients:
  case      
    when ( // K3.3
      Immunocompromised and
      Rare.MostRecentCytologyReportWasWithinPastFiveYears and
      (
        CytologyInterpretedAsAscusOrAbove or
        Rare.CytologyInterpretedAsAis
      ) and
      Rare.SecondMostRecentCytologyReport.riskTableInput = 'ASC-US' and
      TwoMostRecentCytologyReportsWithin18MonthsApart
    ) then
      {
        short: 'Colposcopy',
        date: Today(),
        group: 'Immunosuppressed (K.3)',
        details: {
          'Colposcopy is recommended when the patient is immunocompromised and is found to have cytologic ASC-US or higher or HPV positive after a cytologic ASC-US result.'
        }
      }
    when ( // K3.1
      Immunocompromised and
      (
        (
          Collate.MostRecentHpvResult = 'HPV-positive' and
          Collate.MostRecentCytologyCotestResult = 'ASC-US' and
          Rare.MostRecentCytologyReportWasWithinPastFiveYears
        ) or
        (
          Rare.MostRecentCytologyReportWasWithinPastFiveYears and
          (
            Rare.MostRecentCytologyReport.riskTableInput in {'LSIL','ASC-H','AGC','HSIL+'} or
            Rare.CytologyInterpretedAsAis
          )
        ) or
        (
          Collate.MostRecentHpvResult in {'HPV16+','HPV16-, HPV18+'} and
          MostRecentHpvReportWasWithinPastFiveYears
        )
      )
    ) then
      {
        short: 'Colposcopy',
        date: Today(),
        group: 'Immunosuppressed (K.3)',
        details: {
          'Colposcopy referral is recommended for immunocompromised patients of any age with cytology results of HPV-positive ASC-US or higher and for any cytology results of LSIL or worse.'
        }
      }   
    when ( // K3.2
      Immunocompromised and
      Rare.MostRecentCytologyReportWasWithinPastFiveYears and
      Rare.MostRecentCytologyReport.riskTableInput = 'ASC-US'
    ) then
      {
        short: 'Cytology',
        date: Collate.DateOfMostRecentReport + 6 months,
        group: 'Immunosuppressed (K.3)',
        details: {
          'Repeat cytology in 6 to 12 months when the patient is immunocompromised and is found to have cytologic ASC-US.'
        }
      }   
    else
      null
  end

/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
// Special Populations Section K.4 Managing Patients After Hysterectomy

define MostRecentCervixRemovalProcedureDate:
  CCF.ProcedureDate(
    C3F.MostRecentProcedure(
      Dash.RemovalOfCervixProcedures
    )
  )

define CervixRemovalWithHighGradePrecancerOrCancerReasonCode:
  Dash.RemovalOfCervixProcedures P
    where AnyTrue(
      (P.reasonCode) rC
        return
          rC in Dash."Cervical Precancer Disorders" or
          rC in Dash."Diagnosis of Cervical cancer" or
          rC ~ Dash."CIN2" or
          rC in Dash."Histologic CIN3" or
          rC ~ Dash."HSIL, Unspecified" or
          rC in Dash."AIS" or
          rC in Dash."Histologic cancer"
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

define HighGradePreCancerCervicalLesionDate:
  if Exists(Dash.CervicalPrecancerDisorders) then
    {
      date: CCF.ConditionDate(C3F.MostRecentCondition(Dash.CervicalPrecancerDisorders))
    }
  else
    null

define CervicalCancerDiagnosisDate:
  if Exists(Dash.CervicalCancerDiagnoses) then
    {
      date: CCF.ConditionDate(C3F.MostRecentCondition(Dash.CervicalCancerDiagnoses))
    }
  else
    null

define HighGradeOrCancerHistologyResultsDate:
  if Exists(Dash.HighGradeOrCancerHistologyResults) then
    {
      date: CCF.DiagnosticReportDate(CCF.MostRecentDiagnosticReport(Dash.HighGradeOrCancerHistologyResults))
    }
  else
    null

define CauseForHysterectomyDates:
  {
    HighGradePreCancerCervicalLesionDate,
    CervicalCancerDiagnosisDate,
    HighGradeOrCancerHistologyResultsDate
  } except { null }

define SortedCauseForHysterectomyDates:
  CauseForHysterectomyDates D
  return D
  sort by date desc

define MostRecentCauseForHysterectomyDate:
  if Count(SortedCauseForHysterectomyDates) > 0 then
    SortedCauseForHysterectomyDates[0].date
  else
    null

define HysterectomyPerformedForTreatment:
    CervixRemovalDate 1 year or less after MostRecentCauseForHysterectomyDate or
    Exists(CervixRemovalWithHighGradePrecancerOrCancerReasonCode)

define NegativeSurveillanceTestsAfterHysterectomy: // NOTE: We should be able to refactor the LP4 Grade D Exclusions in a similar way
  Rare.SortedNegativeSurveillanceTests T
  where T.date >= CervixRemovalDate

define InitialIntensiveSurveillancePeriodPostHysterectomy:
  if Count(NegativeSurveillanceTestsAfterHysterectomy) >= 3 then
    NegativeSurveillanceTestsAfterHysterectomy[2].date less than 5 years after CervixRemovalDate
  else
    false

define DateK41:
  if Count(NegativeSurveillanceTestsAfterHysterectomy) = 0 then 
    CervixRemovalDate + 1 year
  else
    Last(NegativeSurveillanceTestsAfterHysterectomy).date + 1 year

define RecommendationForManagingPatientsAfterHysterectomy:
  case
    when ( // K4.1
      CervixRemovalDate >= Now() - 25 years and
      HysterectomyPerformedForTreatment and
      not InitialIntensiveSurveillancePeriodPostHysterectomy
    ) then
      {
        short: 'Primary HPV or Cotest',
        date: ToDate(DateK41),
        group: 'Hysterectomy (K.4)',
        details: {
          'Three annual hrHPV-based tests with cotest or primary hrHPV test are recommended after a hysterectomy is performed for treatment of a high-grade precancer or cancer.'
        }
      }
    when ( // K4.2
      CervixRemovalDate >= Now() - 25 years and
      HysterectomyPerformedForTreatment and
      InitialIntensiveSurveillancePeriodPostHysterectomy
    ) then
      {
        short: 'Primary HPV or Cotest',
        date: Collate.DateOfMostRecentReport + 3 years,
        group: 'Hysterectomy (K.4)',
        details: {
          'HPV-based testing with cotest or primary hrHPV test is recommended every 3 years after a histologic HSIL (CIN2 or CIN3) or AIS results for 25 years, regardless of whether the patient has had a hysterectomy either for treatment or at any point during the surveillance period (CIII).'
        }
      }
    else
      null
  end

/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
// Special Populations Section K.5 Managing Patients Older Than 65 Years With a History of Prior Abnormalities

define Over65RecommendationText:
  'If patients over age 65 years undergo HPV testing, cotesting, or cytology, management according to guidelines for patients aged 25 to 65 years is recommended (CII). If surveillance testing is recommended for either a history of abnormal screening results or treatment for precancer, discontinuing surveillance is unacceptable if the patient is in reasonably good health and testing is feasible (DII). Discontinuation of surveillance is recommended for patients with a limited life expectancy (EIII). This population will be managed based on logic defined for rare abnormalities and common abnormalities.'

// If patients over age 65 years undergo HPV testing, cotesting, or cytology, management according to guidelines for patients aged 25 to 65 years is recommended (CII). Care recommendations for these individuals are covered within the Common Abnormality logic paths.
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

define Recommendation:
  Coalesce(
    RecommendationForPatientsYoungerThan25,
    RecommendationForPregnantPatients,
    RecommendationForImmunosuppressedPatients,
    RecommendationForManagingPatientsAfterHysterectomy
  )

define WhichPopulationMadeTheRecommendation:
  case
    when RecommendationForPatientsYoungerThan25 is not null then 5
    when RecommendationForPregnantPatients is not null then 4
    when RecommendationForImmunosuppressedPatients is not null then 3
    when RecommendationForManagingPatientsAfterHysterectomy is not null then 2
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

