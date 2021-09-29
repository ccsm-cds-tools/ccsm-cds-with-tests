Instance:   ManageCervicalRareAbnormalities
InstanceOf: http://hl7.org/fhir/uv/cpg/StructureDefinition/cpg-computableplandefinition
Title: "ASCCP Recommendations for Cervical Cancer Management: Rare Abnormalities and Special Populations"
Usage: #definition
* insert CPGKnowledgeExtensions
* insert CommonMetadata
* meta.profile[+] = "http://hl7.org/fhir/uv/cpg/StructureDefinition/cpg-computableplandefinition"
// * cpg-partOf = Canonical(TopLevelPlanDefinition) // TODO: Tie this into the entire pathway
* url = "http://OUR-PLACEHOLDER-URL.com/PlanDefinition/ManageCervicalRareAbnormalities"
* name = "ManageCervicalRareAbnormalities"
* title = "ASCCP Recommendations for Cervical Cancer Management: Rare Abnormalities and Special Populations"
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
// Action #1: Rare Cytology Results
// -----------------------------------------------------------------------------
* action[+].title = "Rare Cytology Results"
* action[=].description = "Brief description of the action"
* action[=].textEquivalent = "Static text equivalent of the action, used if the dynamic aspects cannot be interpreted by the receiving system"
* action[=].documentation[+].type = $RATYPE#citation "Citation"
* action[=].documentation[=].label = "ASCCP Recommendation"
* action[=].documentation[=].display = "ASCCP recommendation statement on cervical management (TODO: INSERT DATE HERE)"
* action[=].condition[+].kind = $ACKIND#applicability "Applicability"
* action[=].condition[=].expression.language = $EXLANG|4.0.1#text/cql "CQL"
* action[=].condition[=].expression.expression = "RareCytology"
* action[=].condition[=].expression.reference = "Library/ManagementLibrary|1.0"
* insert ManagementActions
// -----------------------------------------------------------------------------
// Action #2: Exceptions to Colposcopy Clinical Action Threshold
// -----------------------------------------------------------------------------
* action[+].title = "Exceptions to Colposcopy Clinical Action Threshold"
* action[=].description = "Brief description of the action"
* action[=].textEquivalent = "Static text equivalent of the action, used if the dynamic aspects cannot be interpreted by the receiving system"
* action[=].documentation[+].type = $RATYPE#citation "Citation"
* action[=].documentation[=].label = "ASCCP Recommendation"
* action[=].documentation[=].display = "ASCCP recommendation statement on cervical management (TODO: INSERT DATE HERE)"
* action[=].condition[+].kind = $ACKIND#applicability "Applicability"
* action[=].condition[=].expression.language = $EXLANG|4.0.1#text/cql "CQL"
* action[=].condition[=].expression.expression = "ColposcopyException"
* action[=].condition[=].expression.reference = "Library/ManagementLibrary|1.0"
* insert ManagementActions
// -----------------------------------------------------------------------------
// Action #3: Managing Histology Results
// -----------------------------------------------------------------------------
* action[+].title = "Managing Histology Results"
* action[=].description = "Brief description of the action"
* action[=].textEquivalent = "Static text equivalent of the action, used if the dynamic aspects cannot be interpreted by the receiving system"
* action[=].documentation[+].type = $RATYPE#citation "Citation"
* action[=].documentation[=].label = "ASCCP Recommendation"
* action[=].documentation[=].display = "ASCCP recommendation statement on cervical management (TODO: INSERT DATE HERE)"
* action[=].condition[+].kind = $ACKIND#applicability "Applicability"
* action[=].condition[=].expression.language = $EXLANG|4.0.1#text/cql "CQL"
* action[=].condition[=].expression.expression = "ManagingHistology"
* action[=].condition[=].expression.reference = "Library/ManagementLibrary|1.0"
* insert ManagementActions
// -----------------------------------------------------------------------------
// Action #4: Surveillance after abnormalities
// -----------------------------------------------------------------------------
* action[+].title = "Surveillance after abnormalities"
* action[=].description = "Brief description of the action"
* action[=].textEquivalent = "Static text equivalent of the action, used if the dynamic aspects cannot be interpreted by the receiving system"
* action[=].documentation[+].type = $RATYPE#citation "Citation"
* action[=].documentation[=].label = "ASCCP Recommendation"
* action[=].documentation[=].display = "ASCCP recommendation statement on cervical management (TODO: INSERT DATE HERE)"
* action[=].condition[+].kind = $ACKIND#applicability "Applicability"
* action[=].condition[=].expression.language = $EXLANG|4.0.1#text/cql "CQL"
* action[=].condition[=].expression.expression = "SurveillanceAfterAbnormalities"
* action[=].condition[=].expression.reference = "Library/ManagementLibrary|1.0"
* insert ManagementActions
// -----------------------------------------------------------------------------
// Action #5: Special Populations
// -----------------------------------------------------------------------------
* action[+].title = "Special Populations"
* action[=].description = "Brief description of the action"
* action[=].textEquivalent = "Static text equivalent of the action, used if the dynamic aspects cannot be interpreted by the receiving system"
* action[=].documentation[+].type = $RATYPE#citation "Citation"
* action[=].documentation[=].label = "ASCCP Recommendation"
* action[=].documentation[=].display = "ASCCP recommendation statement on cervical management (TODO: INSERT DATE HERE)"
* action[=].condition[+].kind = $ACKIND#applicability "Applicability"
* action[=].condition[=].expression.language = $EXLANG|4.0.1#text/cql "CQL"
* action[=].condition[=].expression.expression = "SpecialPopulation"
* action[=].condition[=].expression.reference = "Library/ManagementLibrary|1.0"
* action[=].definitionCanonical = Canonical(ManageCervicalSpecialPopulations|1.0.0)