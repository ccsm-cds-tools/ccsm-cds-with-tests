/*
  Library: Cervical Cancer Screening and Management Dashboard
  Author: CMS Alliance to Modernize Healthcare, operated by THE MITRE Corporation.

  (C) 2021 The MITRE Corporation. All Rights Reserved.
  Approved for Public Release: 21-1556.
  Distribution Unlimited.

  Unless otherwise noted, this work is available under an Apache 2.0 license.
  It was produced by the MITRE Corporation for the Division of Cancer Prevention
  and Control, Centers for Disease Control and Prevention in accordance with the
  Statement of Work, contract number 75FCMC18D0047, task order number 75D30120F09743.
*/

library DashboardLibrary version '1.0.0'

using FHIR version '4.0.1'

include CDSConnectCommonsforFHIRv401 version '1.0.0' called C3F
include CCSMCommonFunctions version '1.0.0' called Common
include FHIRHelpers version '4.0.1' called FHIRHelpers

//------------------------------------------------------------------------------
// CODE SYSTEMS, VALUE SETS, AND CODES
//------------------------------------------------------------------------------

codesystem "LOINC": 'http://loinc.org'
codesystem "SNOMED-CT": 'http://snomed.info/sct'
codesystem "RXNORM": 'http://www.nlm.nih.gov/research/umls/rxnorm'
codesystem "ICD-9": 'http://hl7.org/fhir/sid/icd-9-cm'
codesystem "ICD-10": 'http://hl7.org/fhir/sid/icd-10-cm'
codesystem "GENDER-IDENTITY": 'http://hl7.org/fhir/gender-identity'
codesystem "LOCAL": 'http://OUR-PLACEHOLDER-URL.com'

// Symptomatic value sets
valueset "Abnormal Uterine or Vaginal Bleeding Disorders": 'http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113762.1.4.1032.189'
valueset "Abnormal Uterine or Vaginal Bleeding Findings": 'http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113762.1.4.1032.187'
valueset "Cervical and/or Vaginal Lesion Findings": 'http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113762.1.4.1032.196'
valueset "Observed Cervical and/or Vaginal Lesions": 'http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113762.1.4.1032.197'

// Pregnancy value sets
valueset "Pregnancy": 'http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113883.3.526.3.378'
valueset "Pregnancy (New ICD10 codes published in 2018 and 2020)": 'http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113762.1.4.1032.80'

// Immunocompromised value sets
valueset "HIV": 'http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113883.3.464.1003.120.12.1003' // AKA: Diagnosis of HIV
valueset "Solid Organ Transplant Diagnosis Codes": 'http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113762.1.4.1032.206' // AKA: Diagnosis of Solid organ transplant
valueset "Systemic Lupus Erythematosus": 'http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113762.1.4.1032.215' // AKA: Diagnosis of Systemic Lupus Erythematosus
valueset "Hematopoietic stem cell transplant": 'http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113762.1.4.1032.221' // AKA: Diagnosis of HSCT
valueset "ICD10CM Value Set for Crohn's Disease": 'http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113883.3.3616.200.110.102.3079' // AKA: Diagnosis of Inflammatory bowel disease
valueset "SNOMED Value Set for Crohn's Disease": 'http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113883.3.3616.200.110.102.6091' // AKA: Diagnosis of Inflammatory bowel disease
valueset "ICD10CM Value Set for Ulcerative Colitis": 'http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113883.3.3616.200.110.102.3072' // AKA: Diagnosis of Inflammatory bowel disease
valueset "SNOMED Value Set for Ulcerative Colitis": 'http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113883.3.3616.200.110.102.6262' // AKA: Diagnosis of Inflammatory bowel disease
valueset "ICD10CM Value Set Adult Rheumatoid Arthritis": 'http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113883.3.3616.200.110.102.3061' // AKA: Diagnosis of Rheumatoid Arthritis
valueset "SNOMED Value Set for Adult Rheumatoid Arthritis": 'http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113883.3.3616.200.110.102.6008' // AKA: Diagnosis of Rheumatoid Arthritis
valueset "Chronic Graft versus Host Disease": 'http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113762.1.4.1032.216' // AKA: Diagnosis of Chronic GvHD
valueset "Immunosuppressant medications for inflammatory bowel disease or rheumatoid arthritis": 'http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113762.1.4.1032.258' // AKA: Immunosuppressant medication
valueset "Hematopoietic Stem Cell Transplant Procedures": 'http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113762.1.4.1032.250' // AKA: HSCT procedure
valueset "SNOMED Value Set for Hemopoietic Stem Cell Transplantation": 'http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113883.3.3616.200.110.102.6133' // AKA: HSCT procedure
valueset "Solid Organ Transplant Procedure Codes": 'http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113762.1.4.1032.211' // AKA: Solid organ transplant procedure
valueset "Kidney Transplant": 'http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113883.3.464.1003.109.11.1025' // AKA: Solid organ transplant procedure

// Cervical diagnoses, procedures, and observations
valueset "Diagnosis of Cervical cancer": 'http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113762.1.4.1032.246'
valueset "Cervical Precancer Disorders": 'http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113762.1.4.1032.228'
valueset "Diethylstilbestrol (DES) exposure": 'http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113762.1.4.1032.198'
valueset "Premenopausal": 'http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113762.1.4.1032.254' // AKA: Premenopausal
valueset "Diagnosis of Absence of cervix": 'http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113762.1.4.1032.201'
valueset "Absence of cervix observation": 'http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113762.1.4.1032.202'
valueset "Colposcopy procedure": 'http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113762.1.4.1032.252'
valueset "Surgery Female Genital System Cervix Uteri": 'http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113883.3.3157.1315'
valueset "Cervical Excision Procedures": 'http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113762.1.4.1032.182'
valueset "Cervical Ablation Procedures": 'http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113762.1.4.1032.241'
valueset "SNOMED Value Set for Removal of Cervix Procedures": 'http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113883.3.464.1003.198.11.1027'
valueset "CPT Value Set for Removal of Cervix Procedures": 'https://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113883.3.464.1003.198.11.1026'

// Diagnostic reports
valueset "HPV Test": 'http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113883.3.464.1003.110.12.1059'
valueset "Pap Test": 'http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113883.3.464.1003.108.12.1017'
valueset "Abnormal results of Cervical Cytology Test": 'http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113762.1.4.1032.235'
valueset "HPV Immunization": 'http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113762.1.4.1032.191'
valueset "AIS": 'http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113762.1.4.1032.259' // AKA: AIS
valueset "Histologic cancer": 'http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113762.1.4.1032.244'
valueset "High Risk HPV Positive Results": 'http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113762.1.4.1032.234'
valueset "High Risk Positive HPV Results Without HPV16 or HPV18": 'http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113762.1.4.1032.263'
valueset "Histologic CIN3": 'http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113762.1.4.1032.269'
valueset "HPV Negative Results": 'http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113762.1.4.1032.268'
valueset "HSIL": 'http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113762.1.4.1032.256'
valueset "Normal Histology Finding": 'http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113762.1.4.1032.262'

// Standard codes
code "Transgender Male Code": 'transgender-male' from "GENDER-IDENTITY" display 'transgender male'
code "Yes": '373066001' from "SNOMED-CT" display 'Yes (qualifier value)'
code "Pregnancy Status": '82810-3' from "LOINC" display 'Pregnancy status'
code "Patient currently pregnant": '77386006' from "SNOMED-CT" display 'Patient currently pregnant (finding)'
code "In utero exposure to DES": '736060002' from "SNOMED-CT" display 'History of exposure to diethystilbestrol in utero (situation)'
code "Systemic lupus erythematosus ICD-9-CM Code": '710.0' from "ICD-9" display 'Systemic lupus erythematosus' // AKA: Diagnosis of Systemic Lupus Erythematosus
code "Chronic GvHD ICD-9 Code": '279.52' from "ICD-9" display 'Chronic graft-versus-host disease' // AKA: Diagnosis of Chronic GvHD
code "Chronic GvHD ICD-10 Code": 'D89.811' from "ICD-10" display 'Chronic graft-versus-host disease' // AKA: Diagnosis of Chronic GvHD
code "Biopsy Report": '65753-6' from "LOINC" display 'Cervix Pathology biopsy report' // A.K.A. "Histology tests"
code "Negative": '260385009' from "SNOMED-CT" display 'Negative (qualifier value)'
code "NILM": '373887005' from "SNOMED-CT" display 'Negative for intraepithelial lesion or malignancy (finding)'
code "CIN2": '285838002' from "SNOMED-CT" display 'Cervical intraepithelial neoplasia grade 2 (disorder)'
code "HSIL, Unspecified": '22725004' from "SNOMED-CT" display 'High-grade squamous intraepithelial lesion (morphologic abnormality)'
code "ASC-H": '441088002' from "SNOMED-CT" display 'Atypical squamous cells on cervical Papanicolaou smear cannot exclude high grade squamous intraepithelial lesion (finding)'
code "CIN1": '285836003' from "SNOMED-CT" display 'Cervical intraepithelial neoplasia grade 1 (disorder)'
code "AGC": '441219009' from "SNOMED-CT" display 'Atypical glandular cells on cervical Papanicolaou smear (finding)'
code "HPV16+": '708298003' from "SNOMED-CT" display 'Deoxyribonucleic acid of Human papillomavirus 16 (substance)'
code "HPV18+": '708299006' from "SNOMED-CT" display 'Deoxyribonucleic acid of Human papillomavirus 18 (substance)'
code "LSIL": '62051000119105' from "SNOMED-CT" display 'Low grade squamous intraepithelial lesion on cervical Papanicolaou smear (finding)'
code "ASC-US": '441087007' from "SNOMED-CT" display 'Atypical squamous cells of undetermined significance on cervical Papanicolaou smear (finding)'
code "SCC": '1162767002' from "SNOMED-CT" display 'Squamous cell carcinoma (morphologic abnormality)'
code "Atypical Endocervical Cells":	'441094005' from "SNOMED-CT" display 'Atypical endocervical cells on cervical Papanicolaou smear (finding)'
code "Benign Endometrial Cells": '125155008' from "SNOMED-CT" display 'Endometrial cells, cytologically benign, in a postmenopausal woman (finding)'
code "Premenopausal Menorrhagia": '627.0' from "ICD-9" display 'Premenopausal menorrhagia' // AKA: Premenopausal
code "Excessive Bleeding in the Premenopausal Period": 'N92.4' from "ICD-10" display 'Excessive bleeding in the premenopausal period' // AKA: Premenopausal
code "Postmenopausal": '76498008' from "SNOMED-CT" display 'Postmenopausal state (finding)'
code "Histiocytes": '14295007' from "SNOMED-CT" display 'Resident tissue macrophage (cell)'
code "AGC Favor Neoplasia": '373883009' from "SNOMED-CT" display 'Atypical glandular cells, favor neoplastic (morphologic abnormality)'
code "Endocervical Cells Favor Neoplasia": '373882004' from "SNOMED-CT" display 'Atypical endocervical cells, favor neoplastic (morphologic abnormality)'

// Non-standard or "local" codes
code "Diagnosis of Genital GvHD": 'GenitalGvHD' from "LOCAL" display 'Diagnosis of Genital GvHD'
code "Abnormal Uterine or Vaginal Bleeding Question": 'AUVBQ' from "LOCAL" display 'Is the patient experiencing abnormal uterine or vaginal bleeding today?'
code "Visible Uterine or Vaginal Lesion Question": 'VUVLQ' from "LOCAL" display 'Does the patient have visible uterine or vaginal lesions?'
code "DES Exposure Question": 'DESEQ' from "LOCAL" display 'Did the patient experience in utero exposure to diethylstilbesterol (DES)?'
code "Future Pregnancy Concerns Question": 'FPCQ' from "LOCAL" display 'Does the patient have future pregnancy concerns related to treatment options?'
code "Benign Glandular Cells": 'BGC' from "LOCAL" display 'Benign Glandular Cells'
code "Endometrial Stromal Cells": 'ESC' from "LOCAL" display 'Endometrial stromal cells'
//------------------------------------------------------------------------------
// PARAMETERS
//------------------------------------------------------------------------------

parameter MedicationLookbackPeriod default 6 months
parameter HrHPVLookbackPeriod default 10 years
parameter CervicalCytologyLookbackPeriod default 10 years
parameter QuestionnaireUrl default 'http://OUR-PLACEHOLDER-URL.com/Questionnaire/ProvideMoreInformation'
parameter AbnormalTestLookbackPeriod default 8 years

/***** BEGIN CDS LOGIC ********************************************************/

context Patient

//------------------------------------------------------------------------------
// FUNCTIONS
//------------------------------------------------------------------------------

define function CytologyInterpretation(conclusions List<System.Concept>):
  if conclusions is not null then
    (conclusions) c
    return
      case
        when c ~ "NILM" then {text: 'NILM', rank: 2}
        when c ~ "ASC-US" then {text: 'ASC-US', rank: 3}
        when c ~ "LSIL" then {text: 'LSIL', rank: 4}
        when c ~ "ASC-H" then {text: 'ASC-H', rank: 5}
        when c ~ "AGC" then {text: 'AGC', rank: 6}
        when c in "HSIL" or c ~ "SCC" then {text: 'HSIL+', rank: 7}
        when c is null then {text: 'NULL', rank: -1}
        else {text: 'UNK', rank: 1}
      end
  else
    {{text: 'ALL', rank: 0}}

/**
 * Takes a list of HPV conclusion codes and maps each to a text value and a numerical 
 * ranking. The text value can be used as input to the risk tables and the numerical 
 * ranking is meant to convey precendence so that the most specific conclusion can 
 * be selected from amongst a group of codes. For instance, an HPV test may come back 
 * both as positive and positive for HPV16. We want to be able to select the latter 
 * in this case as input to the risk tables.
 * @param conclusions - a list of CodeableConcepts
 * @returns List<Tuple { text System.String, rank System.Integer }>
 */
define function HpvInterpretation(conclusions List<System.Concept>):
  if conclusions is not null then
    (conclusions) c
    return
      case
        when c ~ "HPV16+" then {text: 'HPV16+', rank: 5}
        when c ~ "HPV18+" then {text: 'HPV16-, HPV18+', rank: 4}
        when c in "High Risk HPV Positive Results" then {text: 'HPV-positive', rank: 3}
        when c in "HPV Negative Results" then {text: 'HPV-negative', rank: 2}
        when c is null then {text: 'NULL', rank: -1}
        else {text: 'UNK', rank: 1}
      end
  else
    {{text: 'ALL', rank: 0}}

/**
 * Takes the output from HpvInterpretation() and returns the text of the
 * interpretation with the highest rank. This allows more specific conclusions to
 * take precedence over more general ones.
 * @param interpretations - a list of tuples
 * @returns System.String the text to be used as input to the risk tables
 */
define function HighestRankedInterpretation(interpretations List<Tuple { text System.String, rank System.Integer }>):
  Last(
    (
      (interpretations) I sort by rank
    ) S
    return S.text
  )

/**
 */
define function BiopsyInterpretation(conclusions List<System.Concept>):
  if conclusions is not null then
    (conclusions) c
    return
      case
        when c in "Normal Histology Finding" then {text: '<CIN1', rank: 2}
        when c ~ "CIN1" then {text: 'CIN1', rank: 3}
        when c ~ "CIN2" then {text: 'CIN2', rank: 4}
        when c in "Histologic CIN3" then {text: 'CIN3', rank: 5}
        when c in "AIS" then {text: 'AIS', rank: 6}
        when c in "Histologic cancer" then {text: 'Cancer', rank: 7}
        when c is null then {text: 'NULL', rank: -1}
        else {text: 'UNK', rank: 1}
      end
  else
    {{text: 'ALL', rank: 0}}

//------------------------------------------------------------------------------
// PERTINENT DEMOGRAPHICS
//------------------------------------------------------------------------------
// Age (calculated from date of birth)

define PatientAge:
  AgeInYears()

// Sex assigned at birth
define BirthSex:
  Patient.extension E
    where E.url = 'http://hl7.org/fhir/us/core/StructureDefinition/us-core-birthsex'

define BirthSexPresent:
  exists(BirthSex)

define FemaleBirthSex:
  exists(
    BirthSex E
      where E.value = 'F'
  )

define UnknownBirthSex:
  exists(
    BirthSex E
      where (
        E.value = 'ASKU' or
        E.value = 'OTH' or
        E.value = 'UNK'
      )
  )

define BirthSexMissingOrUnknown:
  not BirthSexPresent or 
  UnknownBirthSex

// Patient Gender
define FemaleGender:
  Patient.gender.value = 'female'

define Female:
  FemaleBirthSex or
  (BirthSexMissingOrUnknown and FemaleGender)

define GenderIdentity:
  Patient.extension E
    where E.url = 'http://hl7.org/fhir/StructureDefinition/patient-genderIdentity' or 
      E.url = 'http://hl7.org/fhir/us/core/StructureDefinition/us-core-genderIdentity'

define TransgenderMale:
  exists(
    GenderIdentity E
      where E.value as FHIR.CodeableConcept ~ "Transgender Male Code"
  )

define FemaleorTransgenderMale:
  Female or TransgenderMale

//------------------------------------------------------------------------------
// PERTINENT CONDITIONS
//------------------------------------------------------------------------------
// Conditions relevant to cervical cancer
//    Allow all clinical statues and no lookback restriction

define CervicalCancerDiagnoses:
  Common.ValidCondition([Condition: "Diagnosis of Cervical cancer"])

define CervicalPrecancerDisorders:
  Common.ValidCondition([Condition: "Cervical Precancer Disorders"])

define CervicalOrVaginalLesionDiagnoses:
  Common.ValidCondition([Condition: "Observed Cervical and/or Vaginal Lesions"])

define DesExposureDiagnoses:
  Common.ValidCondition([Condition: "Diethylstilbestrol (DES) exposure"])

define AbsenceOfCervixDiagnoses:
  Common.ValidCondition([Condition: "Diagnosis of Absence of cervix"])

define PregnancyDiagnoses:
  C3F.Confirmed(
    C3F.ActiveCondition(
      C3F.ConditionLookBack(
        [Condition: "Pregnancy"] union [Condition: "Pregnancy (New ICD10 codes published in 2018 and 2020)"],
        42 weeks
      )
    )
  )

define HivDiagnoses:
  Common.ValidCondition([Condition: "HIV"])

define SolidOrganTransplantDiagnoses:
  Common.ValidCondition([Condition: "Solid Organ Transplant Diagnosis Codes"])

define SystemicLupusErythematosusDiagnoses:
  Common.ValidCondition([Condition: "Systemic Lupus Erythematosus"]) union
  Common.ValidCondition([Condition: "Systemic lupus erythematosus ICD-9-CM Code"])

define HematopoieticStemCellTransplantDiagnoses:
  Common.ValidCondition([Condition: "Hematopoietic stem cell transplant"])

define InflammatoryBowelDisease:
  Common.ValidCondition([Condition: "ICD10CM Value Set for Crohn's Disease"]) union
  Common.ValidCondition([Condition: "SNOMED Value Set for Crohn's Disease"]) union
  Common.ValidCondition([Condition: "ICD10CM Value Set for Ulcerative Colitis"]) union
  Common.ValidCondition([Condition: "SNOMED Value Set for Ulcerative Colitis"])

define RheumatoidArthritisDiagnoses:
  Common.ValidCondition([Condition: "ICD10CM Value Set Adult Rheumatoid Arthritis"]) union
  Common.ValidCondition([Condition: "SNOMED Value Set for Adult Rheumatoid Arthritis"])

define InflammatoryBowelDiseaseOrRheumatoidArthritisDiagnoses:
  InflammatoryBowelDisease union
  RheumatoidArthritisDiagnoses

define InflammatoryBowelDiseaseOrRheumatoidArthritisDiagnosesAndOnImmunosuppressant:
  if OnImmunosuppressant then
    InflammatoryBowelDiseaseOrRheumatoidArthritisDiagnoses
  else
    null

define ChronicGraftVersusHostDiseaseDiagnoses:
  Common.ValidCondition([Condition: "Chronic Graft versus Host Disease"]) union
  Common.ValidCondition([Condition: "Chronic GvHD ICD-9 Code"]) union
  Common.ValidCondition([Condition: "Chronic GvHD ICD-10 Code"])

define ChronicGraftVersusHostDiseaseDiagnosesAfterStemCell:
  ChronicGraftVersusHostDiseaseDiagnoses C
  where Common.ConditionDate(C) after DateOfFirstHematopoieticStemCellTransplantProcedure

define GenitalGraftVersusHostDiseaseDiagnoses:
  Common.ValidCondition([Condition: "Diagnosis of Genital GvHD"])

define GenitalGraftVersusHostDiseaseDiagnosesAfterStemCell:
  GenitalGraftVersusHostDiseaseDiagnoses C
  where Common.ConditionDate(C) after DateOfFirstHematopoieticStemCellTransplantProcedure

define ImmunocompromisedConditions:
  HivDiagnoses union
  SolidOrganTransplantDiagnoses union
  SystemicLupusErythematosusDiagnoses union
  HematopoieticStemCellTransplantDiagnoses union
  InflammatoryBowelDisease union
  RheumatoidArthritisDiagnoses union
  ChronicGraftVersusHostDiseaseDiagnoses union
  GenitalGraftVersusHostDiseaseDiagnoses

define AbnormalUterineOrVaginalBleedingDiagnoses:
  Common.ValidCondition([Condition: "Abnormal Uterine or Vaginal Bleeding Disorders"])

define PremenopausalConditions:
  C3F.ActiveOrRecurring(
    Common.ValidCondition(
      [Condition: "Premenopausal"] union
      [Condition: "Premenopausal Menorrhagia"] union
      [Condition: "Excessive Bleeding in the Premenopausal Period"]
    )
  )

define PostmenopausalConditions:
  Common.ValidCondition(
    [Condition: "Postmenopausal"]
  )

define PertinentConditions:
  CervicalCancerDiagnoses union
  CervicalPrecancerDisorders union
  CervicalOrVaginalLesionDiagnoses union
  DesExposureDiagnoses union
  AbsenceOfCervixDiagnoses union
  PregnancyDiagnoses union
  ImmunocompromisedConditions union
  AbnormalUterineOrVaginalBleedingDiagnoses union
  PremenopausalConditions union
  PostmenopausalConditions

define PertinentConditionsSummary:
  (PertinentConditions) C
  return {
    name: Common.ConceptText(C.code),
    value: C.clinicalStatus.coding[0].code.value,
    date: Common.DateTimeText(
      Coalesce(
        C.onset as FHIR.dateTime,
        C.recordedDate
      )
    ),
    reference: 'Condition/' + C.id
  }
  sort by (date as String) desc

//------------------------------------------------------------------------------
// PERTINENT OBSERVATIONS
//------------------------------------------------------------------------------
// Allow status of final, amended, corrected with a lookback of 12 months

define AbnormalUterineOrVaginalBleedingObservations:
  C3F.ObservationLookBack(
    C3F.Verified(
      [Observation: "Abnormal Uterine or Vaginal Bleeding Findings"]
    ),
    12 months
  )

define CervicalOrVaginalLesionObservations:
  C3F.ObservationLookBack(
    C3F.Verified(
      [Observation: "Cervical and/or Vaginal Lesion Findings"]
    ),
    12 months
  )

define PregnancyObservations:
  C3F.ObservationLookBack(
    C3F.Verified(
      [Observation: "Pregnancy Status"] P
        where P.value ~ "Patient currently pregnant"
    ),
    42 weeks
  )

define DesExposureObservations:
    C3F.Verified(
      [Observation: "In utero exposure to DES"]
    )

define AbsenceOfCervixObservations:
    C3F.Verified(
      [Observation: "Absence of cervix observation"]
    )

define PremenopausalObservations:
  C3F.Verified(
    [Observation: "Premenopausal"] union
    [Observation: "Premenopausal Menorrhagia"] union
    [Observation: "Excessive Bleeding in the Premenopausal Period"]
  )

define PostmenopausalObservations:
  C3F.Verified(
    [Observation: "Postmenopausal"]
  )

define PertinentObservations:
  AbnormalUterineOrVaginalBleedingObservations union
  CervicalOrVaginalLesionObservations union
  PregnancyObservations union
  DesExposureObservations union
  AbsenceOfCervixObservations union
  PremenopausalObservations union
  PostmenopausalObservations union
  // Clinician-provided Observations:
  ResponsesToAbnormalBleedingQuestion union
  ResponsesToVisibleLesionQuestion union
  ResponsesToDesExposureQuestion union
  ResponsesToFuturePregnancyConcernsQuestion

define PertinentObservationsSummary:
  (PertinentObservations) Obs
  return {
    name: Common.ConceptText(Obs.code),
    value: Common.ConceptText(Obs.value),
    date: Common.ObservationDateString(Obs),
    reference: 'Observation/' + Obs.id
  }
  sort by (date as String) desc

//------------------------------------------------------------------------------
// PERTINENT MEDICATIONS
//------------------------------------------------------------------------------
// Medications relevant to cervical cancer (e.g., immunosuppressant treatment)
//    Medication Request (completed) < 6 months ago
//    Medication Dispense (completed) < 6 months ago
//    Medication Administration (completed) < 6 months ago
//    Medication Statement (active) < 6 months ago

define ImmunosuppressantMedicationRequests:
  Common.MedicationRequestsWithOrderIntent(
    Common.CompletedMedicationRequest(
      C3F.MedicationRequestLookBack(
        [MedicationRequest: "Immunosuppressant medications for inflammatory bowel disease or rheumatoid arthritis"],
        MedicationLookbackPeriod
      )
    )
  )

define ImmunosuppressantMedicationDispenses:
  Common.CompletedMedicationDispense(
    C3F.MedicationDispenseLookBack(
      [MedicationDispense: "Immunosuppressant medications for inflammatory bowel disease or rheumatoid arthritis"],
      MedicationLookbackPeriod
    )
  )

define ImmunosuppressantMedicationAdministrations:
  Common.CompletedMedicationAdministration(
    Common.LookBack(
      [MedicationAdministration: "Immunosuppressant medications for inflammatory bowel disease or rheumatoid arthritis"],
      MedicationLookbackPeriod
    )
  )

define ImmunosuppressantMedicationStatements:
  C3F.ActiveMedicationStatement(
    C3F.MedicationStatementLookBack(
      [MedicationStatement: "Immunosuppressant medications for inflammatory bowel disease or rheumatoid arthritis"],
      MedicationLookbackPeriod
    )
  )

define OnImmunosuppressant:
  Exists(ImmunosuppressantMedicationRequests) or
  Exists(ImmunosuppressantMedicationDispenses) or
  Exists(ImmunosuppressantMedicationAdministrations) or
  Exists(ImmunosuppressantMedicationStatements)

define PertinentMedicationRequests:
  ImmunosuppressantMedicationRequests

define PertinentMedicationDispenses:
  ImmunosuppressantMedicationDispenses

define PertinentMedicationAdministrations:
  ImmunosuppressantMedicationAdministrations

define PertinentMedicationStatements:
  ImmunosuppressantMedicationStatements

define PertinentMedicationRequestsSummary:
  (PertinentMedicationRequests) M
  return {
    name: Common.ConceptText(M.medication as FHIR.CodeableConcept),
    value: M.status.value,
    date: Common.DateTimeText(M.authoredOn),
    reference: 'MedicationRequest/' + M.id
  }
  sort by date desc

define PertinentMedicationDispensesSummary:
  (PertinentMedicationDispenses) M
  return {
    name: Common.ConceptText(M.medication as FHIR.CodeableConcept),
    value: M.status.value,
    date: Coalesce(
      Common.DateTimeText(M.whenHandedOver),
      Common.DateTimeText(M.whenPrepared)
    ),
    reference: 'MedicationDispense/' + M.id
  }
  sort by date desc

define PertinentMedicationAdministrationsSummary:
  (PertinentMedicationAdministrations) M
  return {
    name: Common.ConceptText(M.medication as FHIR.CodeableConcept),
    value: M.status.value,
    date: Common.DateTimeText((M.effective as FHIR.Period)."start") +
      ' to ' +
      Common.DateTimeText((M.effective as FHIR.Period)."end"),
    reference: 'MedicationAdministration/' + M.id
  }
  sort by date desc

define PertinentMedicationStatementsSummary:
  (PertinentMedicationStatements) M
  return {
    name:  Common.ConceptText(M.medication as FHIR.CodeableConcept),
    value: M.status.value,
    date: Common.DateTimeText((M.effective as FHIR.Period)."start") +
      ' to ' +
      Common.DateTimeText((M.effective as FHIR.Period)."end"),
    reference: 'MedicationStatement/' + M.id
  }
  sort by date desc

define PertinentMedicationsSummary:
  (PertinentMedicationRequestsSummary union
  PertinentMedicationDispensesSummary union
  PertinentMedicationAdministrationsSummary union
  PertinentMedicationStatementsSummary) M
  sort by date desc

//------------------------------------------------------------------------------
// PERTINENT PROCEDURES
//------------------------------------------------------------------------------
// Procedures relevant to cervical cancer (completed)
//     With status of completed

define HematopoieticStemCellTransplantProcedures:
  C3F.Completed(
    [Procedure: "Hematopoietic Stem Cell Transplant Procedures"] union
    [Procedure: "SNOMED Value Set for Hemopoietic Stem Cell Transplantation"]
  )

define DateOfFirstHematopoieticStemCellTransplantProcedure:
  Common.DateOfFirstProcedure(HematopoieticStemCellTransplantProcedures)

define SolidOrganTransplantProcedures:
  C3F.Completed(
    [Procedure: "Solid Organ Transplant Procedure Codes"] union
    [Procedure: "Kidney Transplant"]
  )

define ImmunocompromisedProcedures:
  HematopoieticStemCellTransplantProcedures union
  SolidOrganTransplantProcedures

define ColposcopyProcedures:
  C3F.Completed(
    [Procedure: "Colposcopy procedure"] union
    [Procedure: "Surgery Female Genital System Cervix Uteri"]
  )

define CervicalExcisionProcedures:
  C3F.Completed(
    [Procedure: "Cervical Excision Procedures"]
  )

define CervicalAblationProcedures:
  C3F.Completed(
    [Procedure: "Cervical Ablation Procedures"]
  )

define RemovalOfCervixProcedures:
  C3F.Completed(
    [Procedure: "SNOMED Value Set for Removal of Cervix Procedures"] union
    [Procedure: "CPT Value Set for Removal of Cervix Procedures"]
  )

define PertinentProcedures:
  ImmunocompromisedProcedures
  ColposcopyProcedures union
  CervicalExcisionProcedures union
  CervicalAblationProcedures union
  RemovalOfCervixProcedures

define PertinentProceduresSummary:
  (PertinentProcedures) P
  return {
    name: Common.ConceptText(P.code),
    value: P.status.value,
    date: Common.ProcedureDateString(P),
    reference: 'Procedure/' + P.id
  }

//------------------------------------------------------------------------------
// PERTINENT DIAGNOSTIC REPORTS
//------------------------------------------------------------------------------
// Diagnostic reports relevant to cervical cancer
//    Status of (final, amended, corrected, appended).

define function CollateConclusionCodes(D DiagnosticReport, ObsList List<Observation>):
  D.conclusionCode union
  (ObsList) O
    where 
      Exists( (D.result ) R where Last(Split(R.reference,'/')) =  O.id ) or
      Exists( (O.basedOn) oB where AnyTrue((D.basedOn) dB return dB = oB ) ) or
      C3F.FindDate(O) = Common.DiagnosticReportDate(D)
    return O.value as FHIR.CodeableConcept

define HpvDiagnosticReports:
  Common.CompletedDiagnosticReport(
    Common.LookBack(
      [DiagnosticReport: "HPV Test"],
      HrHPVLookbackPeriod
    )
  )

define HpvObservations:
  [Observation: "HPV Test"]

define MostRecentHpvReport:
  Common.MostRecentDiagnosticReport(HpvDiagnosticReports)

define MostRecentNegativeHpv:
  MostRecentHpvReport R
    where AnyTrue(
      (CollateConclusionCodes(R,HpvObservations)) CCC return CCC in "HPV Negative Results"
    )

define CervicalCytologyReports:
  Common.CompletedDiagnosticReport(
    Common.LookBack(
      [DiagnosticReport: "Pap Test"],
      CervicalCytologyLookbackPeriod
    )
  )

define CytologyObservations:
  [Observation: "Pap Test"]

define MostRecentCytologyReport:
  Common.MostRecentDiagnosticReport(CervicalCytologyReports)

define MostRecentNilmCytology:
  (MostRecentCytologyReport) R
    where AnyTrue(
      (CollateConclusionCodes(R,CytologyObservations)) cC return cC ~ "NILM"
    )

define HistologyDiagnosticReports:
  Common.CompletedDiagnosticReport([DiagnosticReport: "Biopsy Report"])

define HistologyObservations:
  [Observation: "Biopsy Report"]

define HpvDiagnosticReportsSummary:
  (HpvDiagnosticReports) D
  return {
    name: 'HPV Test',
    longName: Common.ConceptText(D.code),
    value: HighestRankedInterpretation(HpvInterpretation(CollateConclusionCodes(D,HpvObservations))),
    longValue: flatten(
      (CollateConclusionCodes(D,HpvObservations)) cC 
        return (cC.coding) cCC 
          return cCC.display
    ),
    date: Common.DiagnosticReportDateString(D),
    reference: 'DiagnosticReport/' + D.id
  }

define CervicalCytologyReportsSummary:
  (CervicalCytologyReports) D
  return {
    name: 'Cervical Cytology',
    longName: Common.ConceptText(D.code),
    value: HighestRankedInterpretation(CytologyInterpretation(CollateConclusionCodes(D,CytologyObservations))),
    longValue: flatten(
      (CollateConclusionCodes(D,CytologyObservations)) cC 
        return (cC.coding) cCC 
          return cCC.display
    ),
    date: Common.DiagnosticReportDateString(D),
    reference: 'DiagnosticReport/' + D.id
  }

define HistologyDiagnosticReportsSummary:
  (HistologyDiagnosticReports) D
  return {
    name: 'Cervical Histology',
    longName: Common.ConceptText(D.code),
    value: HighestRankedInterpretation(BiopsyInterpretation(CollateConclusionCodes(D,HistologyObservations))),
    longValue: flatten(
      (CollateConclusionCodes(D,HistologyObservations)) cC 
        return (cC.coding) cCC 
          return cCC.display
    ),
    date: Common.DiagnosticReportDateString(D),
    reference: 'DiagnosticReport/' + D.id
  }

define DiagnosticReportsSummary:
  (
    HpvDiagnosticReportsSummary union
    CervicalCytologyReportsSummary union
    HistologyDiagnosticReportsSummary
  ) D
  sort by date desc

define HighGradeOrCancerHistologyResults:
  HistologyDiagnosticReports D
    let cC: CollateConclusionCodes(D,HistologyObservations)
    where cC includes ToConcept("CIN2") or
      cC in "Histologic CIN3" or
      cC includes ToConcept("HSIL, Unspecified") or
      cC in "AIS" or
      cC in "Histologic cancer"

//------------------------------------------------------------------------------
// PERTINENT ENCOUNTERS
//------------------------------------------------------------------------------

define AbnormalUterineOrVaginalBleedingEncounters:
  Common.RelevantEncounterStatus(
    [Encounter] E
      where (
        E.reasonCode in "Abnormal Uterine or Vaginal Bleeding Disorders" or
        E.reasonCode in "Abnormal Uterine or Vaginal Bleeding Findings"
      )
  )

define PertinentEncounters:
  AbnormalUterineOrVaginalBleedingEncounters

define PertinentEncountersSummary:
  (PertinentEncounters) E
  return {
    name: Common.ConceptText(E.reasonCode[0]),
    value: E.status,
    date: Common.DateTimeText((E.period as FHIR.Period)."start") + 
      ' to ' +
      Common.DateTimeText((E.period as FHIR.Period)."end"),
    reference: 'Encounter/' + E.id
  }

//------------------------------------------------------------------------------
// HPV IMMUNIZATIONS
//------------------------------------------------------------------------------
// hrHPV immunization

define HrHPVImmunizations:
  Common.CompletedImmunization([Immunization: "HPV Immunization"])

define PertinentImmunizations:
  HrHPVImmunizations

define PertinentImmunizationsSummary:
  (PertinentImmunizations) I
  return {
    name: Common.ConceptText(I.vaccineCode),
    value: I.status,
    date: Coalesce(
      I.occurrence,
      Common.DateTimeText(I.occurrence)
    ),
    reference: 'Immunization/' + I.id
  }

//------------------------------------------------------------------------------
// CLINICIAN PROVIDED INFORMATION
//------------------------------------------------------------------------------

define ResponsesToAbnormalBleedingQuestion:
  C3F.ObservationLookBack(
    [Observation: "Abnormal Uterine or Vaginal Bleeding Question"],
    12 months
  )

define ResponsesToVisibleLesionQuestion:
  C3F.ObservationLookBack(
    [Observation: "Visible Uterine or Vaginal Lesion Question"],
    12 months
  )

define ResponsesToDesExposureQuestion:
  [Observation: "DES Exposure Question"]

define ResponsesToFuturePregnancyConcernsQuestion:
  C3F.ObservationLookBack(
    [Observation: "Future Pregnancy Concerns Question"],
    12 months
  )

//------------------------------------------------------------------------------
// FLAGS
//------------------------------------------------------------------------------

define RecentPositiveHpv:
  Common.LookBack(
    (HpvDiagnosticReports) D
      where Exists(
        (CollateConclusionCodes(D,HpvObservations)) cC 
          where cC in "High Risk HPV Positive Results"
      ),
    AbnormalTestLookbackPeriod
  )

define HasRecentPositiveHpv:
  Exists(RecentPositiveHpv)

define RecentAbnormalCytologyResults:
  Common.LookBack(
    (CervicalCytologyReports) D
      where Exists(
        (CollateConclusionCodes(D,CytologyObservations)) cC
          where cC in "Abnormal results of Cervical Cytology Test" 
      ),
    AbnormalTestLookbackPeriod
  )

define RecentRareCytologyResults:
  Common.LookBack(
    (CervicalCytologyReports) D
      where AnyTrue(
        (CollateConclusionCodes(D,CytologyObservations)) cC return 
          cC ~ "Benign Glandular Cells" or
          cC ~ "Benign Endometrial Cells" or
          cC ~ "Endometrial Stromal Cells" or 
          cC ~ "Histiocytes" or
          cC ~ "AGC Favor Neoplasia" or
          cC ~ "Endocervical Cells Favor Neoplasia" or
          cC ~ "Atypical Endocervical Cells" or
          cC in "AIS"
      ),
    AbnormalTestLookbackPeriod
  )  

define HasRecentAbnormalCytologyResults:
  Exists(RecentAbnormalCytologyResults)

define HasRecentRareCytologyResults:
  Exists(RecentRareCytologyResults)

define HasRecentAbnormalScreening:
  HasRecentPositiveHpv or
  HasRecentAbnormalCytologyResults or
  HasRecentRareCytologyResults

define RecentAbnormalHistology:
  Common.LookBack(
    HistologyDiagnosticReports D
      where not (CollateConclusionCodes(D,HistologyObservations) includes ToConcept("Negative")),
    AbnormalTestLookbackPeriod
  )

define HasRecentAbnormalHistology:
  Exists(RecentAbnormalHistology)

define Immunocompromised:
  Exists(HivDiagnoses) or
  Exists(SolidOrganTransplantDiagnoses) or
  Exists(SolidOrganTransplantProcedures) or
  Exists(SystemicLupusErythematosusDiagnoses) or
  Exists(HematopoieticStemCellTransplantDiagnoses) or
  Exists(HematopoieticStemCellTransplantProcedures) or
  Exists(ChronicGraftVersusHostDiseaseDiagnosesAfterStemCell) or
  Exists(GenitalGraftVersusHostDiseaseDiagnosesAfterStemCell) or
  Exists(InflammatoryBowelDiseaseOrRheumatoidArthritisDiagnosesAndOnImmunosuppressant)

// Logic to determine most recent distinct immunocompromised event:

define FirstDiagnosisOfHiv:
  {
    type: 'Diagnosis Of HIV',
    date: Common.DateOfFirstCondition(HivDiagnoses)
  }

define FirstDiagnosisOfSolidOrganTransplant:
  {
    type: 'Diagnosis Of Solid Organ Transplant',
    date: Common.DateOfFirstCondition(SolidOrganTransplantDiagnoses)
  }

define FirstProcedureForSolidOrganTransplant:
  {
    type: 'Procedure For Solid Organ Transplant',
    date: Common.DateOfFirstProcedure(SolidOrganTransplantProcedures)
  }

define FirstSolidOrganTransplant:
  if FirstDiagnosisOfSolidOrganTransplant.date is not null then
    if FirstProcedureForSolidOrganTransplant.date is not null then
      First(
        (
          {FirstDiagnosisOfSolidOrganTransplant, FirstProcedureForSolidOrganTransplant}
        ) T
        sort by date
      )
    else
      FirstDiagnosisOfSolidOrganTransplant
  else
    FirstProcedureForSolidOrganTransplant

define FirstDiagnosisOfSystemicLupusErythematosus:
  {
    type: 'Diagnosis Of Systemic Lupus Erythematosus',
    date: Common.DateOfFirstCondition(SystemicLupusErythematosusDiagnoses)
  }

define FirstDiagnosisOfHematopoieticStemCellTransplant:
  {
    type: 'Diagnosis Of Hematopoietic Stem Cell Transplant',
    date: Common.DateOfFirstCondition(HematopoieticStemCellTransplantDiagnoses)
  }

define FirstProcedureForHematopoieticStemCellTransplant:
  {
    type: 'Procedure For Hematopoietic Stem Cell Transplant',
    date: DateOfFirstHematopoieticStemCellTransplantProcedure
  }

define FirstHematopoieticStemCellTransplant:
  if FirstDiagnosisOfHematopoieticStemCellTransplant.date is not null then
    if FirstProcedureForHematopoieticStemCellTransplant is not null then
      First(
        (
          {FirstDiagnosisOfHematopoieticStemCellTransplant, FirstProcedureForHematopoieticStemCellTransplant}
        ) T
        sort by date
      )
    else
      FirstDiagnosisOfHematopoieticStemCellTransplant
  else FirstProcedureForHematopoieticStemCellTransplant

define FirstDiagnosisOfChronicGraftVersusHostDiseaseAfterStemCell:
  {
    type: 'Diagnosis Of Chronic Graft Versus Host Disease After Stem Cell',
    date: Common.DateOfFirstCondition(ChronicGraftVersusHostDiseaseDiagnosesAfterStemCell)
  }

define FirstDiagnosisOfGenitalGraftVersusHostDiseaseAfterStemCell:
  {
    type: 'Diagnosis Of Genital Graft Versus Host Disease After Stem Cell',
    date: Common.DateOfFirstCondition(GenitalGraftVersusHostDiseaseDiagnosesAfterStemCell)
  }

define FirstDiagnosisOfIbdOrRheumatoidArthritisAndOnImmunosuppressant:
  {
    type: 'Diagnosis Of IBD Or Rheumatoid Arthritis And On Immunosuppressant',
    date: Common.DateOfFirstCondition(InflammatoryBowelDiseaseOrRheumatoidArthritisDiagnosesAndOnImmunosuppressant)
  }

define DistinctImmunocompromisedEvents:
  {FirstDiagnosisOfHiv,
  FirstSolidOrganTransplant,
  FirstDiagnosisOfSystemicLupusErythematosus,
  FirstHematopoieticStemCellTransplant,
  FirstDiagnosisOfChronicGraftVersusHostDiseaseAfterStemCell,
  FirstDiagnosisOfGenitalGraftVersusHostDiseaseAfterStemCell,
  FirstDiagnosisOfIbdOrRheumatoidArthritisAndOnImmunosuppressant}

define SortedDistinctImmunocompromisedEvents:
  DistinctImmunocompromisedEvents E
    where
      E.date is not null
    return {
      type: E.type,
      date: E.date
    }
    sort by date

define MostRecentDistinctImmunocompromisedEvent:
  Last(SortedDistinctImmunocompromisedEvents)

define MostRecentDistinctImmunocompromisedEventDate:
  MostRecentDistinctImmunocompromisedEvent.date

define Flags:
  {
    HasRecentAbnormalScreening,
    HasRecentAbnormalHistology,
    Immunocompromised
  }

//------------------------------------------------------------------------------
// ERRORS
//------------------------------------------------------------------------------

define ErrorDiagnosticReportWithNoConclusonCodes:
  if 
    (
      Exists(HpvDiagnosticReports) and
      AnyTrue(
        (HpvDiagnosticReports) D return not Exists(CollateConclusionCodes(D,HpvObservations))
      )
    ) or
    (
      Exists(CervicalCytologyReports) and
      AnyTrue(
        (CervicalCytologyReports) D return not Exists(CollateConclusionCodes(D,CytologyObservations))
      )
    ) or
    (
      Exists(HistologyDiagnosticReports) and
      AnyTrue(
        (HistologyDiagnosticReports) D return not Exists(CollateConclusionCodes(D,HistologyObservations))
      )
    ) then
      'A laboratory test was found without a result. Please review patient record to resolve.'
  else
    null

define ErrorDiagnosticReportWithUnsupportedConclusonCode:
  if (
    Exists(DiagnosticReportsSummary) and 
    AnyTrue(
      (DiagnosticReportsSummary) DRS return DRS.value = 'UNK'
    )
  ) then
    'A laboratory test was found with an unexpected result code. Please review patient record to resolve.'
  else
    null

define Errors:
  {
    ErrorDiagnosticReportWithNoConclusonCodes,
    ErrorDiagnosticReportWithUnsupportedConclusonCode
  }
  except {null}

// SUMMARY

define Pregnant:
  Exists(PregnancyDiagnoses) or
  Exists(PregnancyObservations)

// The Summary object represents the full Cervical Cancer Screening and Management Medical History to be displayed to the clinician. A robust UI
// should be created in order to display this information in a Cervical Cancer Screening and Management Dashboard

define CervicalCancerScreeningAndMedicalHistory:
{
  patientInfo: {
    name: First(Patient.name.given) + ' ' +First(Patient.name.family),
    id: Patient.identifier.value,
    isPregnant: Pregnant,
    dateOfBirth: Patient.birthDate,
    sexAtBirth: null,
    age: AgeInYears(),
    gender: null,
    primaryLanguage: null,
    race: null
  },
  patientHistory: {
    conditions: PertinentConditionsSummary,
    observations: PertinentObservationsSummary,
    medications: PertinentMedicationsSummary,
    procedures: PertinentProceduresSummary,
    diagnosticReports: DiagnosticReportsSummary,
    encounters: PertinentEncountersSummary,
    immunizations: PertinentImmunizationsSummary
  }
}
