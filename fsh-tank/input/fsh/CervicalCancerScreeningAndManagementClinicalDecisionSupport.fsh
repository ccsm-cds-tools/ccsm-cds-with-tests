Instance:   CervicalCancerScreeningAndManagementClinicalDecisionSupport
InstanceOf: http://hl7.org/fhir/uv/cpg/StructureDefinition/cpg-computableplandefinition
Title: "Cervical Cancer Screening And Management Clinical Decision Support"
Usage: #definition
* insert CPGKnowledgeExtensions
* insert CommonMetadata
* meta.profile[+] = "http://hl7.org/fhir/uv/cpg/StructureDefinition/cpg-computableplandefinition"
// * cpg-partOf = Canonical(TopLevelPlanDefinition) // TODO: Tie this into the entire pathway
* url = "http://OUR-PLACEHOLDER-URL.com/PlanDefinition/CervicalCancerScreeningAndManagementClinicalDecisionSupport"
* name = "CervicalCancerScreeningAndManagementClinicalDecisionSupport"
* title = "Cervical Cancer Screening And Management Clinical Decision Support"
* type = $PDTYPE#eca-rule "ECA Rule"
* description = "This CDS tool provides care cervical cancer screening recommendations to a diverse population of individuals (i.e., those experiencing abnormal uterine or vaginal bleeding, have in utero exposure to diethylstilbestrol [DES], are immunocompromised, or are at “average risk” for cervical cancer). The evidence sources that inspired this tool are listed in the relatedArtifact metadata field."
* useContext[+].code = $UCTYPE#gender "Gender"
* useContext[=].valueCodeableConcept.coding = $V3AG#F "Female"
* purpose = "This CDS identifies individuals for whom cervical cancer screening is indicated. It delivers patient-specific evidence-based screening recommendations based on information in the patient’s health record. It also gathers relevant information in the patient record to display to the clinician as a dashboard in support of care decisions. The dashboard includes information such as evidence of previous pre-cancer or cancerous lesions, previous colposcopies and biopsy results, previous surgeries, etc. The CDS integrates tightly with a companion CDS component (i.e., “Management CDS”), which provides evidence-based care recommendations if screening results are “abnormal”."
* usage = "This artifact is intended for use by healthcare personnel working in primary healthcare settings who care for adolescent and adult patients (i.e., physicians, general practitioners, nurse practitioners, physician assistants, and obstetricians)."
* topic[+].text = "Preventive Medicine"
* topic[+].text = "Public Health"
* topic[+].text = "Cervical Cancer"
* topic[+].text = "Cancer Screening"
* library = Canonical(ScreeningLibrary|1.0.0)
// -----------------------------------------------------------------------------
// Action #1: Screening
// -----------------------------------------------------------------------------
* action[+].title = "Screening"
* action[=].description = "Top level action that defines trigger and criteria for inclusion and exclusion."
* action[=].textEquivalent = "Static text equivalent of the action, used if the dynamic aspects cannot be interpreted by the receiving system"
* action[=].definitionCanonical = Canonical(CervicalCancerScreening|1.0.0)
// -----------------------------------------------------------------------------
// Action #2: Management
// -----------------------------------------------------------------------------
* action[+].title = "Management"
* action[=].description = "Top level action that defines trigger and criteria for inclusion and exclusion."
* action[=].textEquivalent = "Static text equivalent of the action, used if the dynamic aspects cannot be interpreted by the receiving system"
* action[=].definitionCanonical = Canonical(CervicalCancerManagement|1.0.0)
// -----------------------------------------------------------------------------
// Action #3: Analytics
// -----------------------------------------------------------------------------
* action[+].title = "Analytics"
* action[=].description = "Top level action that runs analytics."
* action[=].textEquivalent = "Static text equivalent of the action, used if the dynamic aspects cannot be interpreted by the receiving system"
* action[=].definitionCanonical = Canonical(CervicalCancerAnalytics|1.0.0)