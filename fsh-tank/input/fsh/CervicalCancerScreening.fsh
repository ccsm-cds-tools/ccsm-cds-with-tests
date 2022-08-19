Instance:   CervicalCancerScreening
InstanceOf: http://hl7.org/fhir/uv/cpg/StructureDefinition/cpg-computableplandefinition
Title: "Cervical Cancer Screening"
Usage: #definition
* insert CPGKnowledgeExtensions
* insert CommonMetadata
* meta.profile[+] = "http://hl7.org/fhir/uv/cpg/StructureDefinition/cpg-computableplandefinition"
// * cpg-partOf = Canonical(TopLevelPlanDefinition) // TODO: Tie this into the entire pathway
* url = "http://OUR-PLACEHOLDER-URL.com/PlanDefinition/CervicalCancerScreening"
* name = "CervicalCancerScreening"
* title = "Cervical Cancer Screening"
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
// Top-level action just includes inclusion and exclusion criteria
// -----------------------------------------------------------------------------
* action[+].title = "Cervical Cancer Screening Actions"
* action[=].description = "Top level action that defines trigger and criteria for inclusion and exclusion."
* action[=].textEquivalent = "Static text equivalent of the action, used if the dynamic aspects cannot be interpreted by the receiving system"
* action[=].documentation[+].type = $RATYPE#documentation "Documentation"
* action[=].documentation[=].label = "Inclusions"
* action[=].documentation[=].display = "Appropriate for individuals whose sex at birth is recorded as Female or whose gender identity is recorded as Transgender Male."
* action[=].trigger[+].type = $TTYPE#named-event "Named Event"
* action[=].trigger[=].name = "encounter-start" // CDS Hook name
* action[=].condition[+].kind = $ACKIND#applicability "Applicability"
* action[=].condition[=].expression.language = $EXLANG|4.0.1#text/cql "CQL"
* action[=].condition[=].expression.expression = "IsIncludedAndNotExcluded"
* action[=].condition[=].expression.reference = "Library/ScreeningLibrary|1.0"
// -----------------------------------------------------------------------------
// Action #1: Display pertinent medical and screening history
// -----------------------------------------------------------------------------
* action[=].action[+].title = "Display pertinent medical history"
* action[=].action[=].description = "DISPLAY data elements used in the Cervical Cancer Screening and Management Dashboard"
* action[=].action[=].textEquivalent = "Static text equivalent of the action, used if the dynamic aspects cannot be interpreted by the receiving system"
* action[=].action[=].definitionCanonical = Canonical(DisplayCervicalCancerMedicalHistory|1.0.0)
// -----------------------------------------------------------------------------
// Action #2: Screening Recommendations
// -----------------------------------------------------------------------------
* action[=].action[+].title = "Screening Recommendations"
* action[=].action[=].description = "Brief description of the action"
* action[=].action[=].textEquivalent = "Static text equivalent of the action, used if the dynamic aspects cannot be interpreted by the receiving system"
* action[=].action[=].condition[+].kind = $ACKIND#applicability "Applicability"
* action[=].action[=].condition[=].expression.language = $EXLANG|4.0.1#text/cql "CQL"
* action[=].action[=].condition[=].expression.expression = "HasRecommendation"
* action[=].action[=].condition[=].expression.reference = "Library/ScreeningLibrary|1.0"
* action[=].action[=].definitionCanonical = Canonical(CervicalCancerScreeningActions|1.0.0)
// -----------------------------------------------------------------------------
// Action #3: Handle Errors
// -----------------------------------------------------------------------------
* action[=].action[+].title = "Handle Errors"
* action[=].action[=].description = "Brief description of the action"
* action[=].action[=].textEquivalent = "Static text equivalent of the action, used if the dynamic aspects cannot be interpreted by the receiving system"
* action[=].action[=].condition[+].kind = $ACKIND#applicability "Applicability"
* action[=].action[=].condition[=].expression.language = $EXLANG|4.0.1#text/cql "CQL"
* action[=].action[=].condition[=].expression.expression = "ErrorsHaveOccurred"
* action[=].action[=].condition[=].expression.reference = "Library/ScreeningLibrary|1.0"
* action[=].action[=].action[+].title = "Communicate Errors"
* action[=].action[=].action[=].description = "Description"
* action[=].action[=].action[=].textEquivalent = "Static text equivalent of the action, used if the dynamic aspects cannot be interpreted by the receiving system"
* action[=].action[=].action[=].definitionCanonical = Canonical(CommunicateErrors|1.0.0)
* action[=].action[=].action[=].dynamicValue[+].path = "payload[0].content.ofType(string)" // this is the CommunicationRequest.payload element
* action[=].action[=].action[=].dynamicValue[=].expression.language = $EXLANG|4.0.1#text/cql "CQL"
* action[=].action[=].action[=].dynamicValue[=].expression.expression = "Errors"
* action[=].action[=].action[=].dynamicValue[=].expression.reference = "Library/ScreeningLibrary|1.0"
* action[=].action[=].action[+].title = "Prompt for More Information"
* action[=].action[=].action[=].description = "Description"
* action[=].action[=].action[=].textEquivalent = "Static text equivalent of the action, used if the dynamic aspects cannot be interpreted by the receiving system"
* action[=].action[=].action[=].groupingBehavior = http://hl7.org/fhir/action-grouping-behavior#visual-group "Visual Group"
* action[=].action[=].action[=].selectionBehavior = http://hl7.org/fhir/action-selection-behavior#at-most-one "At Most One"
* action[=].action[=].action[=].action[+].definitionCanonical = Canonical(PertinentConditionQuestionnaire|1.0.0)
* action[=].action[=].action[=].action[+].definitionCanonical = Canonical(PertinentObservationQuestionnaire|1.0.0)
* action[=].action[=].action[=].action[+].definitionCanonical = Canonical(PertinentProcedureQuestionnaire|1.0.0)
* action[=].action[=].action[=].action[+].definitionCanonical = Canonical(ScreeningAndManagementHistoryQuestionnaire|1.0.0)
* action[=].action[=].action[=].action[+].definitionCanonical = Canonical(PertinentVaccinationQuestionnaire|1.0.0)