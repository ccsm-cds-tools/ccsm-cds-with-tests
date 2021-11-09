Instance:   ManageCervicalSpecialPopulations
InstanceOf: http://hl7.org/fhir/uv/cpg/StructureDefinition/cpg-computableplandefinition
Title: "ASCCP Recommendations for Cervical Cancer Management: Special Populations"
Usage: #definition
* insert CPGKnowledgeExtensions
* insert CommonMetadata
* meta.profile[+] = "http://hl7.org/fhir/uv/cpg/StructureDefinition/cpg-computableplandefinition"
// * cpg-partOf = Canonical(TopLevelPlanDefinition) // TODO: Tie this into the entire pathway
* url = "http://OUR-PLACEHOLDER-URL.com/PlanDefinition/ManageCervicalSpecialPopulations"
* name = "ManageCervicalSpecialPopulations"
* title = "ASCCP Recommendations for Cervical Cancer Management: Special Populations"
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
* action[+].title = "Cervical Cancer Management Actions: Special Populations"
* action[=].description = "Brief description of the action"
* action[=].textEquivalent = "Static text equivalent of the action, used if the dynamic aspects cannot be interpreted by the receiving system"
* action[=].documentation[+].type = $RATYPE#citation "Citation"
* action[=].documentation[=].label = "ASCCP Recommendation"
* action[=].documentation[=].display = "ASCCP recommendation statement on cervical management (TODO: INSERT DATE HERE)"
* action[=].condition[+].kind = $ACKIND#applicability "Applicability"
* action[=].condition[=].expression.language = $EXLANG|4.0.1#text/cql "CQL"
* action[=].condition[=].expression.expression = "IsIncludedAndNotExcluded"
* action[=].condition[=].expression.reference = "Library/ManagementLibrary|1.0"
// TODO: Should we bother defining inputs and outputs for this plan definition?
// * action[=].input
// * action[=].output
// -----------------------------------------------------------------------------
// Action #1: Managing patients younger than 25 years
// -----------------------------------------------------------------------------
* action[=].action[+].title = "Managing patients younger than 25 years"
* action[=].action[=].description = "Brief description of the action"
* action[=].action[=].textEquivalent = "Static text equivalent of the action, used if the dynamic aspects cannot be interpreted by the receiving system"
* action[=].action[=].documentation[+].type = $RATYPE#citation "Citation"
* action[=].action[=].documentation[=].label = "ASCCP Recommendation"
* action[=].action[=].documentation[=].display = "ASCCP recommendation statement on cervical management (TODO: INSERT DATE HERE)"
* action[=].action[=].condition[+].kind = $ACKIND#applicability "Applicability"
* action[=].action[=].condition[=].expression.language = $EXLANG|4.0.1#text/cql "CQL"
* action[=].action[=].condition[=].expression.expression = "ManagePatientUnder25"
* action[=].action[=].condition[=].expression.reference = "Library/ManagementLibrary|1.0"
* insert ManagementActions
// -----------------------------------------------------------------------------
// Action #2: Managing patients during pregnancy
// -----------------------------------------------------------------------------
* action[=].action[+].title = "Managing patients during pregnancy"
* action[=].action[=].description = "Brief description of the action"
* action[=].action[=].textEquivalent = "Static text equivalent of the action, used if the dynamic aspects cannot be interpreted by the receiving system"
* action[=].action[=].documentation[+].type = $RATYPE#citation "Citation"
* action[=].action[=].documentation[=].label = "ASCCP Recommendation"
* action[=].action[=].documentation[=].display = "ASCCP recommendation statement on cervical management (TODO: INSERT DATE HERE)"
* action[=].action[=].condition[+].kind = $ACKIND#applicability "Applicability"
* action[=].action[=].condition[=].expression.language = $EXLANG|4.0.1#text/cql "CQL"
* action[=].action[=].condition[=].expression.expression = "ManagePregnantPatient"
* action[=].action[=].condition[=].expression.reference = "Library/ManagementLibrary|1.0"
* insert ManagementActions
// -----------------------------------------------------------------------------
// Action #3: Managing patients with immunosuppression
// -----------------------------------------------------------------------------
* action[=].action[+].title = "Managing patients with immunosuppression"
* action[=].action[=].description = "Brief description of the action"
* action[=].action[=].textEquivalent = "Static text equivalent of the action, used if the dynamic aspects cannot be interpreted by the receiving system"
* action[=].action[=].documentation[+].type = $RATYPE#citation "Citation"
* action[=].action[=].documentation[=].label = "ASCCP Recommendation"
* action[=].action[=].documentation[=].display = "ASCCP recommendation statement on cervical management (TODO: INSERT DATE HERE)"
* action[=].action[=].condition[+].kind = $ACKIND#applicability "Applicability"
* action[=].action[=].condition[=].expression.language = $EXLANG|4.0.1#text/cql "CQL"
* action[=].action[=].condition[=].expression.expression = "ManageImmunosuppressedPatient"
* action[=].action[=].condition[=].expression.reference = "Library/ManagementLibrary|1.0"
* insert ManagementActions
// -----------------------------------------------------------------------------
// Action #4: Managing patients after hysterectomy
// -----------------------------------------------------------------------------
* action[=].action[+].title = "Managing patients after hysterectomy"
* action[=].action[=].description = "Brief description of the action"
* action[=].action[=].textEquivalent = "Static text equivalent of the action, used if the dynamic aspects cannot be interpreted by the receiving system"
* action[=].action[=].documentation[+].type = $RATYPE#citation "Citation"
* action[=].action[=].documentation[=].label = "ASCCP Recommendation"
* action[=].action[=].documentation[=].display = "ASCCP recommendation statement on cervical management (TODO: INSERT DATE HERE)"
* action[=].action[=].condition[+].kind = $ACKIND#applicability "Applicability"
* action[=].action[=].condition[=].expression.language = $EXLANG|4.0.1#text/cql "CQL"
* action[=].action[=].condition[=].expression.expression = "ManagePatientAfterHysterectomy"
* action[=].action[=].condition[=].expression.reference = "Library/ManagementLibrary|1.0"
* insert ManagementActions
// -----------------------------------------------------------------------------
// Action #5: Managing patients older than 65 years with history of prior abnormalities
// -----------------------------------------------------------------------------
* action[=].action[+].title = "Managing patients older than 65 years with history of prior abnormalities"
* action[=].action[=].description = "Brief description of the action"
* action[=].action[=].textEquivalent = "Static text equivalent of the action, used if the dynamic aspects cannot be interpreted by the receiving system"
* action[=].action[=].documentation[+].type = $RATYPE#citation "Citation"
* action[=].action[=].documentation[=].label = "ASCCP Recommendation"
* action[=].action[=].documentation[=].display = "ASCCP recommendation statement on cervical management (TODO: INSERT DATE HERE)"
* action[=].action[=].condition[+].kind = $ACKIND#applicability "Applicability"
* action[=].action[=].condition[=].expression.language = $EXLANG|4.0.1#text/cql "CQL"
* action[=].action[=].condition[=].expression.expression = "ManagePatientOver65"
* action[=].action[=].condition[=].expression.reference = "Library/ManagementLibrary|1.0"
* insert ManagementActions