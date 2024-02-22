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
// Special Populations Management of Patients With Histologic Cancer

define RecommendationForPatientsWithHistologicCancer:
  case
    when (
      Rare.AnyHistologyInterpretedAsCancer
    ) then
      {
        short: 'Histologic Cancer',
        date: Today(),
        group: 'Histologic Cancer',
        details: {
          'Refer to Gynecologic Oncology.'
        }
      } 
    else
      null
  end
  
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
// Special Populations Section K.1 Management of Patients Younger Than 25 Years

define Associated18MonthHpvCotest:
  Coalesce(
    (Collate.SortedHpvReports) H
      where H.date within 1 day of Under25And18MonthsAgoCytologyReport.date
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

define Under25AndLowGradeCytologyResultsInPast3Years:
  AgeInYears() < 25 and
  (
    ( 
      Rare.CytologyInterpretedAsLsil and
      Rare.MostRecentCytologyReport is not null and
      Rare.MostRecentCytologyReport.date 3 years or less before Now()
    ) or
    (
      Collate.MostRecentCytologyCotest is not null and
      Collate.MostRecentCytologyCotestResult = 'ASC-US' and
      Collate.MostRecentHpvResult = 'HPV-positive' and
      Collate.MostRecentCytologyCotest.date 3 years or less before Now()
    ) or
    (
      Rare.CytologyInterpretedAsAscus and
      Collate.MostRecentCytologyCotestResult is null and
      Rare.MostRecentCytologyReport is not null and
      Rare.MostRecentCytologyReport.date 3 years or less before Now()
    )
  )

define function Under25CytologyResultsInPastInterval(LookBackStart System.Quantity, LookBackEnd System.Quantity):
  (Collate.SortedCytologyReports) C
  let LookbackInterval: Interval[(Rare.MostRecentCytologyReport).date - LookBackEnd, (Rare.MostRecentCytologyReport).date - LookBackStart]
    where (
      C.date in LookbackInterval
    )

define Under25And18MonthsAgoCytologyResults:
  Under25CytologyResultsInPastInterval(18 months, 3 years)

define Under25And18MonthsAgoCytologyReport:
  Under25And18MonthsAgoCytologyResults[0]

define Under25And18MonthsAgoCytologyReportInterpretedAsLsil:
  AnyTrue(
    (Under25And18MonthsAgoCytologyReport.allConclusions) aC
      return aC ~ "LSIL"
  )

define Under25And18MonthsAgoCytologyReportInterpretedAsAscus:
  AnyTrue(
    (Under25And18MonthsAgoCytologyReport.allConclusions) aC
      return aC ~ "ASC-US"
  )

define Under25And18MonthsAgoLowGradeCytologyResults: 
  AgeInYears() < 25 and
  ( 
    Exists(Under25And18MonthsAgoCytologyResults) and
    (
      Under25And18MonthsAgoCytologyReportInterpretedAsLsil or
      (
        Under25And18MonthsAgoCytologyReportInterpretedAsAscus and
        Associated18MonthHpvCotest.riskTableInput = 'HPV-positive'
      ) or
      (
        Under25And18MonthsAgoCytologyReportInterpretedAsAscus and
        Associated18MonthHpvCotest is null
      )
    )
  )

define Under25AndSecondMostRecentLowGradeCytologyResults:
  AgeInYears() < 25 and
  (
    Rare.SecondMostRecentCytologyInterpretedAsLsil or
    (
      Rare.SecondMostRecentCytologyInterpretedAsAscus and
      Associated18MonthHpvCotest.riskTableInput = 'HPV-positive'
    ) or
    (
      Rare.SecondMostRecentCytologyInterpretedAsAscus and
      Associated18MonthHpvCotest is null
    )
  )

define HistologyInterpretedAsLessThanCin2AfterAbnormalCytologyScreening:
  Rare.HistologyInterpretedAsCin1OrNormal and
  Under25AndLowGradeCytologyResults and
  Under25AndSecondMostRecentLowGradeCytologyResults and
  Collate.MostRecentBiopsyReport.date 3 years or less after Rare.MostRecentCytologyReport.date

define BiopsySinceMostRecentCytology:
  Exists(
    Collate.SortedBiopsyReports B
    where B.date > Rare.MostRecentCytologyReport.date
  )

define ShouldSwitchToRiskAt25Text:
  'Clinicians should switch to using risk estimates when patients reach the age of 25 years.'

define RecommendationForPatientsYoungerThan25:
  // K.1 Heading 3: Management of Histology of Less than CIN2 Preceded by Cytology ASC-H and HSIL in Patients Younger than 25 Years
  case
    // K.1.3.3
    when (
      AgeInYears() < 25 and
      not Dash.Pregnant and
      Rare.SecondMostRecentCytologyInterpretedAsAscHOrHsil and
      (
        ( // case 1
          Rare.HistologyInterpretedAsCin1OrNormal and
          Rare.SecondMostRecentCytologyReport.date less than 12 months before Collate.MostRecentBiopsyReport.date and
          (
            Rare.CytologyInterpretedAsAscHOrHsil and
            Rare.MostRecentCytologyReport.date more than 2 years after Collate.MostRecentBiopsyReport.date and
            Rare.MostRecentCytologyReport.date 3 years or less after Collate.MostRecentBiopsyReport.date
          )
        )
        or 
        ( // case 2
          Rare.SecondMostRecentHistologyInterpretedAsCin1OrNormal and
          Rare.SecondMostRecentCytologyReport.date less than 12 months before Rare.SecondMostRecentBiopsyReport.date and
          (
            Rare.CytologyInterpretedAsAscHOrHsil and
            Rare.MostRecentCytologyReport.date more than 2 years after Rare.SecondMostRecentBiopsyReport.date and
            Rare.MostRecentCytologyReport.date 3 years or less after Rare.SecondMostRecentBiopsyReport.date
          ) and
          (
            Rare.HistologyInterpretedAsCin1OrNormal and
            Collate.MostRecentBiopsyReport.date more than 2 years after Rare.SecondMostRecentBiopsyReport.date and
            Collate.MostRecentBiopsyReport.date 3 years or less after Rare.SecondMostRecentBiopsyReport.date
          )
        )
      )
    ) then
      {
        short: 'See Details',
        date: Today(),
        group: 'Younger Than 25 (K.1.3)',
        details: {
          'A diagnostic excisional procedure is recommended for patients under 25 years, unless the patient is pregnant.',
          'A diagnostic excisional procedure is recommended in patients when the squamocolumnar junction or the upper limit of all lesions are not fully visualized.'
        }
      }   

    // K.1.3.2(a)
    when ( 
      AgeInYears() < 25 and
      Rare.HistologyInterpretedAsCin1OrNormal and
      (
        ( // case 1
          Rare.CytologyInterpretedAsAscH and
          Rare.MostRecentCytologyReport.date less than 12 months before Collate.MostRecentBiopsyReport.date
        ) 
        or 
        ( // case 2
          Rare.SecondMostRecentCytologyInterpretedAsAscH and
          Rare.SecondMostRecentCytologyReport.date less than 12 months before Collate.MostRecentBiopsyReport.date and
          Rare.CytologyInterpretedAsNilm and
          Rare.MostRecentCytologyReport.date 3 years or less after Collate.MostRecentBiopsyReport.date
        )
      )
    ) then
      {
        short: 'Cytology',
        date: Collate.DateOfMostRecentReport + 1 year,
        group: 'Younger Than 25 (K.1.3)',
        details: {
          'Observation is recommended with cytology in 1 year.',
          'Diagnostic excisional procedures are not recommended for patients younger than 25 with some exceptions.*',
          '*Refer to ASCCP Consensus Guideline 2019 Section K.1'
        }
      }

    // K.1.3.2(b)
    when (
      AgeInYears() < 25 and
      Rare.HistologyInterpretedAsCin1OrNormal and
      Rare.SecondMostRecentCytologyInterpretedAsAscHOrHsil and 
      Rare.SecondMostRecentCytologyReport.date less than 12 months before Collate.MostRecentBiopsyReport.date and
      (
        Collate.CytologyInterpretedAsAscusOrAbove or
        Rare.CytologyInterpretedAsAis
      ) and
      Rare.MostRecentCytologyReport.date less than 3 years after Collate.MostRecentBiopsyReport.date
    ) then
      {
        short: 'Colposcopy',
        date: Today(),
        group: 'Younger Than 25 (K.1.3)',
        details: {
          'Colposcopy is recommended.'
        }
      }

    // K.1.3.1
    when (
      AgeInYears() < 25 and

      ( 
        Rare.HistologyInterpretedAsCin1OrNormal and
        (
          ( // case 1
            Rare.CytologyInterpretedAsHsil and
            Rare.MostRecentCytologyReport.date less than 12 months before Collate.MostRecentBiopsyReport.date
          )
          or 
          ( // case 2
            Rare.CytologyInterpretedAsNilm and  
            Rare.SecondMostRecentCytologyInterpretedAsHsil and
            Rare.SecondMostRecentCytologyReport.date less than 12 months before Collate.MostRecentBiopsyReport.date and
            Rare.MostRecentCytologyReport.date 3 years or less after Collate.MostRecentBiopsyReport.date
          )
          or
          ( // case 3
            Rare.SecondMostRecentHistologyInterpretedAsCin1OrNormal and
            Rare.CytologyInterpretedAsHsil and
            Rare.MostRecentCytologyReport.date less than 12 months before Rare.SecondMostRecentBiopsyReport.date and
            Collate.MostRecentBiopsyReport.date 3 years or less after Rare.SecondMostRecentBiopsyReport.date
          )
        )        
      )
      or 
      ( // case 4
        Rare.SecondMostRecentHistologyInterpretedAsCin1OrNormal and
        Rare.SecondMostRecentCytologyInterpretedAsHsil and
        Rare.SecondMostRecentCytologyReport.date less than 12 months before Rare.SecondMostRecentBiopsyReport.date and
        Collate.MostRecentBiopsyReport.date 3 years or less after Rare.SecondMostRecentBiopsyReport.date and
        Rare.MostRecentCytologyReport.date 3 years or less after Rare.SecondMostRecentBiopsyReport.date
      )
    ) then
      {
        short: 'Colposcopy and Cytology',
        date: Collate.DateOfMostRecentReport + 1 year,
        group: 'Younger Than 25 (K.1.3)',
        details: {
          'Observation is recommended with colposcopy and cytology in 1 year.',
          'Diagnostic excisional procedures are not recommended for patients younger than 25 with some exceptions.*',
          '*Refer to ASCCP Consensus Guideline 2019 Section K.1'
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
      Rare.SecondMostRecentBiopsyReport.date 18 months or more before Collate.MostRecentBiopsyReport.date and
      Rare.SecondMostRecentBiopsyReport.date 3 years or less before Collate.MostRecentBiopsyReport.date
    ) then
      {
        short: 'Treatment',
        group: 'Younger Than 25 (K.1.4)',
        date: Today(),
        details: {
          'Treatment is recommended.',
          'Excisional treatment is recommended when the squamocolumnar junction or the lesions(s) are not fully visualized.'
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
          'Colposcopy and cervical cytology should be performed in 1 year.'
        }
      }
    when ( // Heading4.1
      AgeInYears() < 25 and
      Rare.AnyHistologyInterpretedAsCin3 and
      Collate.HasNoTreatmentAfterDate(Collate.LastKnownCin3Biopsy.date)
    ) then
      {
        short: 'Treatment',
        date: Today(),
        group: 'Younger Than 25 (K.1.4)',
        details: {
          'Treatment is recommended for CIN3. Observation is unacceptable unless the patient is pregnant.',
          'Excisional treatment is recommended when the squamocolumnar junction or the lesions(s) are not fully visualized.'
        }
      }
    when ( // Heading4.2
      AgeInYears() < 25 and
      (Rare.LastKnownCin2BiopsyInPast2Years is not null) and
      Collate.HasNoTreatmentAfterDate(Collate.LastKnownCin2Biopsy.date)
    ) then
      {
        short: 'See Details',
        date: Today(),
        group: 'Younger Than 25 (K.1.4)',
        details: {
          'Observation is preferred, and treatment is acceptable.',
          'Observation includes colposcopy and cytology at 6-month intervals.',
          'Treatment should not be performed if the patient is pregnant.'
        }
      }
    when ( // Heading4.3
      AgeInYears() < 25 and
      (Rare.LastKnownHsilUnspecifiedBiopsyInPast2Years is not null) and
     Collate.HasNoTreatmentAfterDate(Collate.LastKnownHsilUnspecifiedBiopsy.date)
    ) then
      {
        short: 'See Details',
        date: Today(),
        group: 'Younger Than 25 (K.1.4)',
        details: {
          'Observation or treatment is acceptable.',
          'Observation includes colposcopy and cytology at 6-month intervals.',
          'Treatment should not be performed if the patient is pregnant.'
        }
      }
    // Heading 1 & Heading 2: Initial Management After an Abnormal Screening Test Result; Management of Cytology ASC-H and HSIL in Patients Younger than 25 Years
    when ( // 2
      AgeInYears() < 25 and
      (
        Rare.LastKnownCytologyInterpretedAsHsilInPast5Years is not null or
        Rare.LastKnownCytologyInterpretedAsAscHInPast5Years is not null
      ) and
      not BiopsySinceMostRecentCytology
    ) then
      {
        short: 'Colposcopy',
        date: Today(),
        group: 'Younger Than 25 (K.1.1)',
        details: {
          'Colposcopy is recommended.',
          'Immediate treatment without histologic confirmation is not recommended for cytology HSIL or ASC-H.'
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
          'Repeat testing is indicated in 3 years. This should be cytology (Pap) if patient is < 25 and HPV testing or cotesting if patient is age 25 or older at the time of repeat testing.'
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
          'Cervical cytology is recommended in 1 year. If the patient will be age 25 in 1 year, use HPV testing or cotesting.'
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
          'Cervical cytology is due now.'
        }
      }
    when ( // 1.c
      Under25AndLowGradeCytologyResults and
      Under25And18MonthsAgoLowGradeCytologyResults
    ) then
      {
        short: 'Colposcopy',
        date: Today(),
        group: 'Younger Than 25 (K.1.1)',
        details: {
          'Colposcopy is recommended.'
        }
      }
    when ( // 1.a
      Under25AndLowGradeCytologyResultsInPast3Years
    ) then
      {
        short: 'Cytology',
        date: Collate.DateOfMostRecentReport + 1 year,
        group: 'Younger Than 25 (K.1.1)',
        details: {
          'Cervical cytology is recommended in 1 year. If the patient will be age 25 in 1 year, use HPV testing or cotesting.'
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
          'Surveillance colposcopy and testing (with cytology or HPV testing or cotesting depending on age) is preferred every 12 to 24 weeks but deferring colposcopy to the postpartum period is acceptable.',
          'Repeat biopsy is recommended if invasion is suspected or the appearance of the lesion worsens.',
          'Treatment of histologic HSIL (CIN 2 or CIN 3) during pregnancy is not recommended.'
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
          'Referral to a gynecologic oncologist is preferred.',
          'Management by a gynecologist skilled in the colposcopic diagnosis and treatment of AIS is acceptable.'
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
        Collate.CytologyInterpretedAsAscusOrAbove or
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
          'Colposcopy is recommended in this immunocompromised patient.'
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
          'Cervical cytology is recommended in 6 to 12 months in this immunocompromised patient.'
        }
      }   
    else
      null
  end

/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
// Special Populations Section K.4 Managing Patients After Hysterectomy

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
    Rare.CervixRemovalDate 1 year or less after MostRecentCauseForHysterectomyDate or
    Exists(CervixRemovalWithHighGradePrecancerOrCancerReasonCode)

define NegativeSurveillanceTestsAfterHysterectomy: // NOTE: We should be able to refactor the LP4 Grade D Exclusions in a similar way
  Rare.SortedNegativeSurveillanceTests T
  where T.date >= Rare.CervixRemovalDate

define InitialIntensiveSurveillancePeriodPostHysterectomy:
  if Count(NegativeSurveillanceTestsAfterHysterectomy) >= 3 then
    NegativeSurveillanceTestsAfterHysterectomy[2].date less than 5 years after Rare.CervixRemovalDate
  else
    false

define DateK41:
  if Count(NegativeSurveillanceTestsAfterHysterectomy) = 0 then 
    Rare.CervixRemovalDate + 1 year
  else
    Last(NegativeSurveillanceTestsAfterHysterectomy).date + 1 year

define RecommendationForManagingPatientsAfterHysterectomy:
  case
    when ( // K4.1
      Rare.CervixRemovalDate >= Now() - 25 years and
      HysterectomyPerformedForTreatment and
      not InitialIntensiveSurveillancePeriodPostHysterectomy
    ) then
      {
        short: 'Primary HPV or Cotest',
        date: ToDate(DateK41),
        group: 'Hysterectomy (K.4)',
        details: {
          'Primary hrHPV testing or cotesting is recommended annually for 3 years after hysterectomy performed for treatment of histologic HSIL, CIN 2, CIN 3 or AIS.'
        }
      }
    when ( // K4.2
      Rare.CervixRemovalDate >= Now() - 25 years and
      HysterectomyPerformedForTreatment and
      InitialIntensiveSurveillancePeriodPostHysterectomy
    ) then
      {
        short: 'Primary HPV or Cotest',
        date: Collate.DateOfMostRecentReport + 3 years,
        group: 'Hysterectomy (K.4)',
        details: {
          'Primary hrHPV testing or cotesting is recommended every 3 years for 25 years after hysterectomy is performed for treatment of histologic HSIL, CIN 2, CIN 3 or AIS.'
        }
      }
    when ( // no hysterectomy date
      Rare.AbsenceOrRemovalOfCervix
    ) then 
      {
        short: 'See Details',
        date: Today(),
        group: 'Hysterectomy (K.4)',
        details: {
          'This patient has documentation of a hysterectomy. If hysterectomy was performed for treatment of histologic HSIL, CIN 2, CIN 3 or AIS, patients should have 3 consecutive annual primary HPV tests or cotests before entering long term surveillance. Long term surveillance involves primary HPV testing or cotesting at 3-year intervals for 25 years.',
          'Screening is generally not recommended after hysterectomy if no previous diagnosis of CIN2 or greater in the preceding 25 years and the cervix was removed at the time of hysterectomy.',
          'Cancer screening is not recommended for patients who have undergone hysterectomy but have no previous diagnosis of histologic HSIL, CIN 2, CIN 3 or AIS, or completed the 25 year long term surveillance.'
        }
      }
    else
      null
  end

define Recommendation:
  Coalesce(
    RecommendationForPatientsWithHistologicCancer,
    RecommendationForPatientsYoungerThan25,
    RecommendationForPregnantPatients,
    RecommendationForImmunosuppressedPatients,
    RecommendationForManagingPatientsAfterHysterectomy
  )

define WhichPopulationMadeTheRecommendation:
  case
    when RecommendationForPatientsWithHistologicCancer is not null then 6
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

