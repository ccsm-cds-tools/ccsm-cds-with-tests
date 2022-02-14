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

library DisplayCervicalCancerMedicalHistory version '1.0.0'

using FHIR version '4.0.1'

include CDSConnectCommonsforFHIRv401 version '1.0.0' called C3F
include CCSMCommonFunctions version '1.0.0' called Common
include FHIRHelpers version '4.0.1' called FHIRHelpers

//------------------------------------------------------------------------------
// CODE SYSTEMS, VALUE SETS, AND CODES
//------------------------------------------------------------------------------

// TODO: Crosscheck valuesets with value set spreadsheet

codesystem "LOINC": 'http://loinc.org'
codesystem "SNOMED-CT": 'http://snomed.info/sct'
codesystem "RXNORM": 'http://www.nlm.nih.gov/research/umls/rxnorm'
codesystem "ICD-9": 'http://hl7.org/fhir/sid/icd-9-cm'
codesystem "ICD-10": 'http://hl7.org/fhir/sid/icd-10-cm'
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
valueset "Diagnosis of Absence of cervix": 'http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113762.1.4.1032.201' 
valueset "Absence of cervix observation": 'http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113762.1.4.1032.202' 
valueset "Colposcopy procedure": 'http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113762.1.4.1032.252'
valueset "Surgery Female Genital System Cervix Uteri": 'http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113883.3.3157.1315'
valueset "Cervical Excision Procedures": 'http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113762.1.4.1032.182'
valueset "Cervical Ablation Procedures": 'http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113762.1.4.1032.241'
valueset "Removal of Cervix Procedures": 'http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113883.3.464.1003.198.11.1027'

// Diagnostic reports
valueset "HPV Test": 'http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113883.3.464.1003.110.12.1059'
valueset "Pap Test": 'http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113883.3.464.1003.108.12.1017'
valueset "Non NILM results of Cervical Cytology Test": 'http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113762.1.4.1032.235'
valueset "HPV Immunization": 'http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113762.1.4.1032.191'
valueset "AIS": 'http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113762.1.4.1032.259' // AKA: AIS
valueset "Histologic cancer": 'http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113762.1.4.1032.244'

// Standard codes
code "Yes": '373066001' from "SNOMED-CT" display 'Yes (qualifier value)'
code "Pregnancy Status": '82810-3' from "LOINC" display 'Pregnancy status'
code "Patient currently pregnant": '77386006' from "SNOMED-CT" display 'Patient currently pregnant (finding)'
code "In utero exposure to DES": '736060002' from "SNOMED-CT" display 'History of exposure to diethystilbestrol in utero (situation)'
code "Systemic lupus erythematosus ICD-9-CM Code": '710.0' from "ICD-9" display 'Systemic lupus erythematosus' // AKA: Diagnosis of Systemic Lupus Erythematosus
code "Chronic GvHD ICD-9 Code": '279.52' from "ICD-9" display 'Chronic graft-versus-host disease' // AKA: Diagnosis of Chronic GvHD
code "Chronic GvHD ICD-10 Code": 'D89.811' from "ICD-10" display 'Chronic graft-versus-host disease' // AKA: Diagnosis of Chronic GvHD
code "Biopsy Report": '65753-6' from "LOINC" display 'Cervix Pathology biopsy report' // A.K.A. "Histology tests"
code "Positive": '10828004' from "SNOMED-CT" display 'Positive (qualifier value)'
code "Negative": '260385009' from "SNOMED-CT" display 'Negative (qualifier value)'
code "Negative HPV Finding": '787724008' from "SNOMED-CT" display 'Human papillomavirus deoxyribonucleic acid test negative (finding)'
code "Positive HPV Finding": '720005005' from "SNOMED-CT" display 'Human papillomavirus deoxyribonucleic acid test positive, high risk on cervical specimen (finding)'
code "NILM": '373887005' from "SNOMED-CT" display 'Negative for intraepithelial lesion or malignancy (finding)'
code "CIN2": '285838002' from "SNOMED-CT" display 'Cervical intraepithelial neoplasia grade 2 (disorder)'
code "CIN3": '20365006' from "SNOMED-CT" display 'Squamous intraepithelial neoplasia, grade III (morphologic abnormality)'
code "HSIL, Unspecified": '22725004' from "SNOMED-CT" display 'High-grade squamous intraepithelial lesion (morphologic abnormality)'

// Non-standard or "local" codes
code "Diagnosis of Genital GvHD": 'GenitalGvHD' from "LOCAL" display 'Diagnosis of Genital GvHD'
code "Abnormal Uterine or Vaginal Bleeding Question": 'AUVBQ' from "LOCAL" display 'Is the patient experiencing abnormal uterine or vaginal bleeding today?'
code "Visible Uterine or Vaginal Lesion Question": 'VUVLQ' from "LOCAL" display 'Does the patient have visible uterine or vaginal lesions?'
code "DES Exposure Question": 'DESEQ' from "LOCAL" display 'Did the patient experience in utero exposure to diethylstilbesterol (DES)?'
code "Future Pregnancy Concerns Question": 'FPCQ' from "LOCAL" display 'Does the patient have future pregnancy concerns related to treatment options?'

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
// PERTINENT DEMOGRAPHICS
//------------------------------------------------------------------------------
// Age (calculated from date of birth)

define PatientAge:
  AgeInYears()

//------------------------------------------------------------------------------
// PERTINENT CONDITIONS
//------------------------------------------------------------------------------
// Conditions relevant to cervical cancer
//    Allow all clinical statues and no lookback restriction

define CervicalCancerDiagnoses:
  [Condition: "Diagnosis of Cervical cancer"]

define CervicalPrecancerDisorders:
  [Condition: "Cervical Precancer Disorders"]

define CervicalOrVaginalLesionDiagnoses:
  [Condition: "Observed Cervical and/or Vaginal Lesions"]

define DesExposureDiagnoses:
  [Condition: "Diethylstilbestrol (DES) exposure"]

define AbsenceOfCervixDiagnoses:
  [Condition: "Diagnosis of Absence of cervix"]

define PregnancyDiagnoses:
  C3F.Confirmed(
    C3F.ActiveOrRecurring(
      C3F.ConditionLookBack(
        [Condition: "Pregnancy"] union [Condition: "Pregnancy (New ICD10 codes published in 2018 and 2020)"],
        42 weeks
      )
    )
  )

define HivDiagnoses:
  [Condition: "HIV"]

define SolidOrganTransplantDiagnoses:
  [Condition: "Solid Organ Transplant Diagnosis Codes"]

define SystemicLupusErythematosusDiagnoses:
  [Condition: "Systemic Lupus Erythematosus"] union
  [Condition: "Systemic lupus erythematosus ICD-9-CM Code"]

define HematopoieticStemCellTransplantDiagnoses:
  [Condition: "Hematopoietic stem cell transplant"]

define InflammatoryBowelDisease:
  [Condition: "ICD10CM Value Set for Crohn's Disease"] union
  [Condition: "SNOMED Value Set for Crohn's Disease"] union
  [Condition: "ICD10CM Value Set for Ulcerative Colitis"] union
  [Condition: "SNOMED Value Set for Ulcerative Colitis"]

define RheumatoidArthritisDiagnoses:
  [Condition: "ICD10CM Value Set Adult Rheumatoid Arthritis"] union
  [Condition: "SNOMED Value Set for Adult Rheumatoid Arthritis"]

define InflammatoryBowelDiseaseOrRheumatoidArthritisDiagnoses:
  InflammatoryBowelDisease union
  RheumatoidArthritisDiagnoses

define InflammatoryBowelDiseaseOrRheumatoidArthritisDiagnosesAndOnImmunosuppressant:
  if OnImmunosuppressant then
    InflammatoryBowelDiseaseOrRheumatoidArthritisDiagnoses
  else
    null

define ChronicGraftVersusHostDiseaseDiagnoses:
  [Condition: "Chronic Graft versus Host Disease"] union
  [Condition: "Chronic GvHD ICD-9 Code"] union
  [Condition: "Chronic GvHD ICD-10 Code"]

define ChronicGraftVersusHostDiseaseDiagnosesAfterStemCell:
  ChronicGraftVersusHostDiseaseDiagnoses C 
  where Common.ConditionDate(C) after DateOfFirstHematopoieticStemCellTransplantProcedure

define GenitalGraftVersusHostDiseaseDiagnoses:
  [Condition: "Diagnosis of Genital GvHD"]

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
  [Condition: "Abnormal Uterine or Vaginal Bleeding Disorders"]

define PertinentConditions:
  CervicalCancerDiagnoses union
  CervicalPrecancerDisorders union
  DesExposureDiagnoses union
  AbsenceOfCervixDiagnoses union
  PregnancyDiagnoses union
  ImmunocompromisedConditions union
  AbnormalUterineOrVaginalBleedingDiagnoses

define PertinentConditionsSummary:
  (PertinentConditions) C
  return {
    Name: Common.ConceptText(C.code),
    Status: C.clinicalStatus.coding[0].code.value,
    Onset: Common.Onset(C),
    DateRecorded: Common.DateTimeText(C.recordedDate)
  }
  sort by (Onset as String) desc

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

define PertinentObservations:
  AbnormalUterineOrVaginalBleedingObservations union
  CervicalOrVaginalLesionObservations union
  PregnancyObservations union
  DesExposureObservations union
  AbsenceOfCervixObservations union
  // Clinician-provided Observations:
  ResponsesToAbnormalBleedingQuestion union
  ResponsesToVisibleLesionQuestion union
  ResponsesToDesExposureQuestion union
  ResponsesToFuturePregnancyConcernsQuestion

define PertinentObservationsSummary:
  (PertinentObservations) Obs
  return {
    Name: Common.ConceptText(Obs.code),
    Status: Obs.status,
    Date: Common.ObservationDateString(Obs),
    Value: Common.ConceptText(Obs.value)
  }
  sort by (Date as String) desc

//------------------------------------------------------------------------------
// PERTINENT MEDICATIONS
//------------------------------------------------------------------------------
// Medications relevant to cervical cancer (e.g., immunosuppressant treatment)
//    Medication Request (completed) < 6 months ago
//    Medication Dispense (completed) < 6 months ago
//    Medication Administration (completed) < 6 months ago
//    Medication Statement (active) < 6 months ago

define ImmunosuppressantMedicationRequests:
  Common.CompletedMedicationRequest(
    C3F.MedicationRequestLookBack(
      [MedicationRequest: "Immunosuppressant medications for inflammatory bowel disease or rheumatoid arthritis"],
      MedicationLookbackPeriod
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
    Type: 'Request',
    Name: Common.ConceptText(M.medication as FHIR.CodeableConcept),
    Start: Common.DateTimeText(M.authoredOn),
    End:   null as String, // MedicationRequest end date not supported in R4
    Status: M.status.value
  }
  sort by Start desc, End desc

define PertinentMedicationDispensesSummary:
  (PertinentMedicationDispenses) M
  return {
    Type: 'Dispense',
    Name: Common.ConceptText(M.medication as FHIR.CodeableConcept),
    Start: Coalesce(
      Common.DateTimeText(M.whenHandedOver),
      Common.DateTimeText(M.whenPrepared)
    ),
    End:   null as String, // MedicationDispense end date not supported in R4
    Status: M.status.value
  }
  sort by Start desc, End desc

define PertinentMedicationAdministrationsSummary:
  (PertinentMedicationAdministrations) M
  return {
    Type: 'Administration',
    Name: Common.ConceptText(M.medication as FHIR.CodeableConcept),
    Start: Common.DateTimeText((M.effective as FHIR.Period)."start"),
    End:   Common.DateTimeText((M.effective as FHIR.Period)."end"),
    Status: M.status.value
  }
  sort by Start desc, End desc

define PertinentMedicationStatementsSummary:
  (PertinentMedicationStatements) M
  return {
    Type:  'Statement',
    Name:  Common.ConceptText(M.medication as FHIR.CodeableConcept),
    Start: Common.DateTimeText((M.effective as FHIR.Period)."start"),
    End:   Common.DateTimeText((M.effective as FHIR.Period)."end"),
    Status: M.status.value
  }
  sort by Start desc, End desc

define PertinentMedicationsSummary:
  (PertinentMedicationRequestsSummary union
  PertinentMedicationDispensesSummary union
  PertinentMedicationAdministrationsSummary union
  PertinentMedicationStatementsSummary) M
  sort by Start desc

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
    [Procedure: "Removal of Cervix Procedures"]
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
    Type: 'Procedure',
    Name: Common.ConceptText(P.code),
    Date: Common.ProcedureDateString(P)
  }

//------------------------------------------------------------------------------
// PERTINENT DIAGNOSTIC REPORTS
//------------------------------------------------------------------------------
// Diagnostic reports relevant to cervical cancer
//    Status of (final, amended, corrected, appended).

define HpvDiagnosticReports:
  Common.CompletedDiagnosticReport(
    Common.LookBack(
      [DiagnosticReport: "HPV Test"],
      HrHPVLookbackPeriod
    )
  )

define MostRecentHpvReport:
  Common.MostRecentDiagnosticReport(HpvDiagnosticReports)

define MostRecentNegativeHpv:
  MostRecentHpvReport R
    where (
      R.conclusionCode includes ToConcept("Negative HPV Finding") or
      R.conclusionCode includes ToConcept("Negative")
    )

define CervicalCytologyReports:
  Common.CompletedDiagnosticReport(
    Common.LookBack(
      [DiagnosticReport: "Pap Test"],
      CervicalCytologyLookbackPeriod
    )
  )

define MostRecentCytologyReport:
  Common.MostRecentDiagnosticReport(CervicalCytologyReports)

define MostRecentNilmCytology:
  (MostRecentCytologyReport) R
    where AnyTrue(
      (R.conclusionCode) cC return cC ~ "NILM"
    )

define HistologyDiagnosticReports:
  Common.CompletedDiagnosticReport([DiagnosticReport: "Biopsy Report"])

define HpvDiagnosticReportsSummary:
  (HpvDiagnosticReports) D
  return {
    Type: 'HrHPV',
    Name: Common.ConceptText(D.code),
    Value: (D.conclusionCode) cC return Common.ConceptText(cC),
    Status: D.status.value,
    Date: Common.DiagnosticReportDateString(D)
  }

define CervicalCytologyReportsSummary:
  (CervicalCytologyReports) D
  return {
    Type: 'Cervical Cytology',
    Name: Common.ConceptText(D.code),
    Value: (D.conclusionCode) cC return Common.ConceptText(cC),
    Status: D.status.value,
    Date: Common.DiagnosticReportDateString(D)
  }

define HistologyDiagnosticReportsSummary:
  (HistologyDiagnosticReports) D
  return {
    Type: 'Histology',
    Name: Common.ConceptText(D.code),
    Value: (D.conclusionCode) cC return Common.ConceptText(cC),
    Status: D.status.value,
    Date: Common.DiagnosticReportDateString(D)
  }

define DiagnosticReportsSummary:
  (
    HpvDiagnosticReportsSummary union 
    CervicalCytologyReportsSummary union
    HistologyDiagnosticReportsSummary
  ) D
  sort by Date desc

define HighGradeOrCancerHistologyResults:
  HistologyDiagnosticReports H
    where H.conclusionCode includes ToConcept("CIN2") or
      H.conclusionCode includes ToConcept("CIN3") or
      H.conclusionCode includes ToConcept("HSIL, Unspecified") or
      H.conclusionCode in "AIS" or
      H.conclusionCode in "Histologic cancer"

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
    Reason: Common.ConceptText(E.reasonCode[0]),
    Status: E.status,
    Start: Common.DateTimeText((E.period as FHIR.Period)."start"),
    End: Common.DateTimeText((E.period as FHIR.Period)."end")
  }

//------------------------------------------------------------------------------
// HPV IMMUNIZATIONS
//------------------------------------------------------------------------------
// hrHPV immunization

define HrHPVImmunizations:
  [Immunization: "HPV Immunization"]

define PertinentImmunizations:
  HrHPVImmunizations

define PertinentImmunizationsSummary:
  (PertinentImmunizations) I
  return {
    Name: Common.ConceptText(I.vaccineCode),
    Status: I.status,
    AdministrationDate: Coalesce(
      I.occurrence,
      Common.DateTimeText(I.occurrence)
    ),
    ExpirationDate: Common.DateText(I.expirationDate)
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
    (HpvDiagnosticReports) H
      where H.conclusionCode includes ToConcept("Positive HPV Finding"),  // NOTE: Should this be a value set, to include genotyped testing?
    AbnormalTestLookbackPeriod
  )

define HasRecentPositiveHpv:
  Exists(RecentPositiveHpv)

define RecentAbnormalCytologyResults:
  Common.LookBack(
    (CervicalCytologyReports) C
      where C.conclusionCode in "Non NILM results of Cervical Cytology Test",
    AbnormalTestLookbackPeriod
  )

define HasRecentAbnormalCytologyResults:
  Exists(RecentAbnormalCytologyResults)

define HasRecentAbnormalScreening:
  HasRecentPositiveHpv or 
  HasRecentAbnormalCytologyResults

define RecentAbnormalHistology:
  Common.LookBack(
    HistologyDiagnosticReports H
      where not (H.conclusionCode includes ToConcept("Negative")),
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
          FirstDiagnosisOfSolidOrganTransplant union
          FirstProcedureForSolidOrganTransplant
        ) T 
        return {
          type: T.type,
          date: T.date
        }
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
          FirstDiagnosisOfHematopoieticStemCellTransplant union
          FirstProcedureForHematopoieticStemCellTransplant
        ) T 
        return {
          type: T.type,
          date: T.date
        }
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
  FirstDiagnosisOfHiv union
  FirstSolidOrganTransplant union
  FirstDiagnosisOfSystemicLupusErythematosus union
  FirstHematopoieticStemCellTransplant union
  FirstDiagnosisOfChronicGraftVersusHostDiseaseAfterStemCell union
  FirstDiagnosisOfGenitalGraftVersusHostDiseaseAfterStemCell union
  FirstDiagnosisOfIbdOrRheumatoidArthritisAndOnImmunosuppressant

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
  if (
      Exists(DiagnosticReportsSummary) and
      DiagnosticReportsSummary.Value is null
    ) then
      'A Diagnostic Report was found but contained no computable ConclusionCodes. Please review patient record to resolve.'
  else
    null

define ErrorHistologyWithUnexpectedCode:
  if 
    false // TODO: Determine criteria for an "unexpected code"
    then 
    'A histology test was found but with an enexpected result code. Please review patient record to resolve.'
  else
    null

define ErrorCytologyyWithUnexpectedCode:
  if 
    false // TODO: Determine criteria for an "unexpected code"
    then
    'A cervical cytology test was found but with an enexpected result code. Please review patient record to resolve.'
  else
    null

define ErrorHpvWithUnexpectedCode:
  if 
    false // TODO: Determine criteria for an "unexpected code"
    then
    'An HPV test was found but with an enexpected result code. Please review patient record to resolve.'
  else
    null

define Errors:
  {
    ErrorDiagnosticReportWithNoConclusonCodes
  //   ErrorHistologyWithUnexpectedCode,
  //   ErrorCytologyyWithUnexpectedCode,
  //   ErrorHpvWithUnexpectedCode
  } 
  except {null}
  // TODO: DiagnosticReports without conclusionCodes
  // TODO: Histology with a code that isn't one we expect
  // TODO: Cervical Cytology with a code we don't expect
  // TODO: HPV with a code we don't expect

// SUMMARY

// The Summary object represents the full Cervical Cancer Screening and Management Medical History to be displayed to the clinician. A robust UI
// should be created in order to display this information in a Cervical Cancer Screening and Management Dashboard

define CervicalCancerScreeningAndMedicalHistory: 
{
  Age: PatientAge,
  Conditions: PertinentConditionsSummary,
  Observations: PertinentObservationsSummary,
  Medications: PertinentMedicationsSummary,
  Procedures: PertinentProceduresSummary,
  DiagnosticReports: DiagnosticReportsSummary,
  Encounters: PertinentEncountersSummary,
  Immunizations: PertinentImmunizationsSummary
}
