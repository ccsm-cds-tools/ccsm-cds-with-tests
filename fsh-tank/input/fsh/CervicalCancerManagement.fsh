Instance:   CervicalCancerManagement
InstanceOf: http://hl7.org/fhir/uv/cpg/StructureDefinition/cpg-computableplandefinition
Title: "ASCCP Recommendations for Cervical Cancer Management"
Usage: #definition
* insert CPGKnowledgeExtensions
* insert CommonMetadata
* meta.profile[+] = "http://hl7.org/fhir/uv/cpg/StructureDefinition/cpg-computableplandefinition"
// * cpg-partOf = Canonical(TopLevelPlanDefinition) // TODO: Tie this into the entire pathway
* url = "http://OUR-PLACEHOLDER-URL.com/PlanDefinition/CervicalCancerManagement"
* name = "CervicalCancerManagement"
* title = "ASCCP Recommendations for Cervical Cancer Management"
* type = $PDTYPE#eca-rule "ECA Rule"
* description = "Natural language description of the plan definition"
* purpose = "Why this plan definition is defined"
* usage = "Describes the clinical usage of the plan"
* topic[+].text = "Insert mesh terms here" // TODO: Find suitable MeSH terms
* relatedArtifact[+].type = $RATYPE#citation "Citation"
* relatedArtifact[=].label = "ASCCP Recommendation"
* relatedArtifact[=].display = "ASCCP recommendation statement on cervical management (TODO: INSERT DATE HERE)"
* library = Canonical(ManagementLibrary|1.0.0)
// -----------------------------------------------------------------------------
// Top-level action just includes inclusion and exclusion criteria
// -----------------------------------------------------------------------------
* action[+].title = "Cervical Cancer Management Actions"
* action[=].description = "Brief description of the action"
* action[=].textEquivalent = "Static text equivalent of the action, used if the dynamic aspects cannot be interpreted by the receiving system"
* action[=].documentation[+].type = $RATYPE#citation "Citation"
* action[=].documentation[=].label = "ASCCP Recommendation"
* action[=].documentation[=].display = "ASCCP recommendation statement on cervical management (TODO: INSERT DATE HERE)"
* action[=].trigger[+].type = $TTYPE#named-event "Named Event"
* action[=].trigger[=].name = "encounter-start" // CDS Hook name
* action[=].condition[+].kind = $ACKIND#applicability "Applicability"
* action[=].condition[=].expression.language = $EXLANG|4.0.1#text/cql-identifier "CQL"
* action[=].condition[=].expression.expression = "IsIncludedAndNotExcluded"
// -----------------------------------------------------------------------------
// Action #1: Display pertinent medical and screening history
// -----------------------------------------------------------------------------
* action[=].action[+].title = "Display pertinent medical history"
* action[=].action[=].description = "DISPLAY data elements used in the Cervical Cancer Screening and Management Dashboard"
* action[=].action[=].textEquivalent = "Static text equivalent of the action, used if the dynamic aspects cannot be interpreted by the receiving system"
* action[=].action[=].definitionCanonical = Canonical(DisplayCervicalCancerMedicalHistory|1.0.0)
// -----------------------------------------------------------------------------
// Action #2: Management Recommendations
// -----------------------------------------------------------------------------
* action[=].action[+].title = "Management Recommendations"
* action[=].action[=].description = "Brief description of the action"
* action[=].action[=].textEquivalent = "Static text equivalent of the action, used if the dynamic aspects cannot be interpreted by the receiving system"
* action[=].action[=].condition[+].kind = $ACKIND#applicability "Applicability"
* action[=].action[=].condition[=].expression.language = $EXLANG|4.0.1#text/cql-identifier "CQL"
* action[=].action[=].condition[=].expression.expression = "HasRecommendation"
* action[=].action[=].definitionCanonical = Canonical(CervicalCancerManagementActions|1.0.0)
// -----------------------------------------------------------------------------
// Action #3: Handle Errors
// -----------------------------------------------------------------------------
* action[=].action[+].title = "Handle Errors"
* action[=].action[=].description = "Brief description of the action"
* action[=].action[=].textEquivalent = "Static text equivalent of the action, used if the dynamic aspects cannot be interpreted by the receiving system"
* action[=].action[=].condition[+].kind = $ACKIND#applicability "Applicability"
* action[=].action[=].condition[=].expression.language = $EXLANG|4.0.1#text/cql-identifier "CQL"
* action[=].action[=].condition[=].expression.expression = "ErrorsHaveOccurred"
* action[=].action[=].action[+].title = "Communicate Errors"
* action[=].action[=].action[=].description = "Description"
* action[=].action[=].action[=].textEquivalent = "Static text equivalent of the action, used if the dynamic aspects cannot be interpreted by the receiving system"
* action[=].action[=].action[=].definitionCanonical = Canonical(CommunicateErrors|1.0.0)
* action[=].action[=].action[=].dynamicValue[+].path = "payload[0].content.ofType(string)" // this is the CommunicationRequest.payload element
* action[=].action[=].action[=].dynamicValue[=].expression.language = $EXLANG|4.0.1#text/cql-identifier "CQL"
* action[=].action[=].action[=].dynamicValue[=].expression.expression = "Errors"
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
