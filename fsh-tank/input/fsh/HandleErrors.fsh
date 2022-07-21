Instance: HandleErrors
InstanceOf: http://hl7.org/fhir/uv/cpg/StructureDefinition/cpg-computableplandefinition
Title: "Handle Errors"
Usage: #definition
// -----------------------------------------------------------------------------
// This PlanDefinition handles errors.
// -----------------------------------------------------------------------------
* insert CPGKnowledgeExtensions
* insert CommonMetadata
* meta.profile[+] = "http://hl7.org/fhir/uv/cpg/StructureDefinition/cpg-computableplandefinition"
// * cpg-partOf = Canonical(TopLevelPlanDefinition) // TODO: Tie this into the entire pathway
* url = "http://OUR-PLACEHOLDER-URL.com/PlanDefinition/HandleErrors"
* name = "HandleErrors"
* title = "Handle Errors"
* type = $PDTYPE#eca-rule "ECA Rule"
* description = "Natural language description of the plan definition"
* purpose = "Why this plan definition is defined"
* usage = "Describes the clinical usage of the plan"
* topic[+].text = "Insert mesh terms here" // TODO: Find suitable MeSH terms
* library = Canonical(ScreeningLibrary|1.0.0)
// -----------------------------------------------------------------------------
// Action #1: Communicate Errors
// -----------------------------------------------------------------------------
* action[+].title = "Communicate Errors"
* action[=].description = "DISPLAY data elements used in the Cervical Cancer Screening and Management Dashboard"
* action[=].textEquivalent = "Static text equivalent of the action, used if the dynamic aspects cannot be interpreted by the receiving system"
* action[=].definitionCanonical = Canonical(CommunicateErrors|1.0.0)
// -----------------------------------------------------------------------------
// Action #2: Prompt for More Information
// -----------------------------------------------------------------------------
* action[+].title = "Prompt for More Information"
* action[=].description = "DISPLAY data elements used in the Cervical Cancer Screening and Management Dashboard"
* action[=].textEquivalent = "Static text equivalent of the action, used if the dynamic aspects cannot be interpreted by the receiving system"
* action[=].definitionCanonical = Canonical(ProvideMoreInformation|1.0.0)