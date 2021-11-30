Instance:   ManageCervicalCommonAbnormalities
InstanceOf: http://hl7.org/fhir/uv/cpg/StructureDefinition/cpg-computableplandefinition
Title: "ASCCP Recommendations for Cervical Cancer Management: Common Abnormalities"
Usage: #definition
* insert CPGKnowledgeExtensions
* insert CommonMetadata
* meta.profile[+] = "http://hl7.org/fhir/uv/cpg/StructureDefinition/cpg-computableplandefinition"
// * cpg-partOf = Canonical(TopLevelPlanDefinition) // TODO: Tie this into the entire pathway
* url = "http://OUR-PLACEHOLDER-URL.com/PlanDefinition/ManageCervicalCommonAbnormalities"
* name = "ManageCervicalCommonAbnormalities"
* title = "ASCCP Recommendations for Cervical Cancer Management: Common Abnormalities"
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
// Action #1: Abnormal Results
// -----------------------------------------------------------------------------
* action[+].title = "Abnormal Results"
* action[=].description = "Brief description of the action"
* action[=].textEquivalent = "Static text equivalent of the action, used if the dynamic aspects cannot be interpreted by the receiving system"
* action[=].documentation[+].type = $RATYPE#citation "Citation"
* action[=].documentation[=].label = "ASCCP Recommendation"
* action[=].documentation[=].display = "ASCCP recommendation statement on cervical management (TODO: INSERT DATE HERE)"
* action[=].condition[+].kind = $ACKIND#applicability "Applicability"
* action[=].condition[=].expression.language = $EXLANG|4.0.1#text/cql "CQL"
* action[=].condition[=].expression.expression = "GeneralScreening"
* action[=].condition[=].expression.reference = "Library/ManagementLibrary|1.0"
* insert ManagementActions
// -----------------------------------------------------------------------------
// Action #2: Surveillance following results not requiring immediate colposcopic referral
// -----------------------------------------------------------------------------
* action[+].title = "Surveillance following results not requiring immediate colposcopic referral"
* action[=].description = "Brief description of the action"
* action[=].textEquivalent = "Static text equivalent of the action, used if the dynamic aspects cannot be interpreted by the receiving system"
* action[=].documentation[+].type = $RATYPE#citation "Citation"
* action[=].documentation[=].label = "ASCCP Recommendation"
* action[=].documentation[=].display = "ASCCP recommendation statement on cervical management (TODO: INSERT DATE HERE)"
* action[=].condition[+].kind = $ACKIND#applicability "Applicability"
* action[=].condition[=].expression.language = $EXLANG|4.0.1#text/cql "CQL"
* action[=].condition[=].expression.expression = "Surveillance"
* action[=].condition[=].expression.reference = "Library/ManagementLibrary|1.0"
* insert ManagementActions
// -----------------------------------------------------------------------------
// Action #3: Receipt of colposcopy/biopsy results
// -----------------------------------------------------------------------------
* action[+].title = "Receipt of colposcopy/biopsy results"
* action[=].description = "Brief description of the action"
* action[=].textEquivalent = "Static text equivalent of the action, used if the dynamic aspects cannot be interpreted by the receiving system"
* action[=].documentation[+].type = $RATYPE#citation "Citation"
* action[=].documentation[=].label = "ASCCP Recommendation"
* action[=].documentation[=].display = "ASCCP recommendation statement on cervical management (TODO: INSERT DATE HERE)"
* action[=].condition[+].kind = $ACKIND#applicability "Applicability"
* action[=].condition[=].expression.language = $EXLANG|4.0.1#text/cql "CQL"
* action[=].condition[=].expression.expression = "ColposcopyResults"
* action[=].condition[=].expression.reference = "Library/ManagementLibrary|1.0"
* insert ManagementActions
// -----------------------------------------------------------------------------
// Action #4: Surveillance visit following colposcopy/biopsy finding less than CIN 2
// -----------------------------------------------------------------------------
* action[+].title = "Surveillance visit following colposcopy/biopsy finding less than CIN 2"
* action[=].description = "Brief description of the action"
* action[=].textEquivalent = "Static text equivalent of the action, used if the dynamic aspects cannot be interpreted by the receiving system"
* action[=].documentation[+].type = $RATYPE#citation "Citation"
* action[=].documentation[=].label = "ASCCP Recommendation"
* action[=].documentation[=].display = "ASCCP recommendation statement on cervical management (TODO: INSERT DATE HERE)"
* action[=].condition[+].kind = $ACKIND#applicability "Applicability"
* action[=].condition[=].expression.language = $EXLANG|4.0.1#text/cql "CQL"
* action[=].condition[=].expression.expression = "PostColposcopy"
* action[=].condition[=].expression.reference = "Library/ManagementLibrary|1.0"
* insert ManagementActions
// -----------------------------------------------------------------------------
// Action #5: Follow-up after treatment for CIN2 or CIN 3
// -----------------------------------------------------------------------------
* action[+].title = "Follow-up after treatment for CIN2 or CIN 3"
* action[=].description = "Brief description of the action"
* action[=].textEquivalent = "Static text equivalent of the action, used if the dynamic aspects cannot be interpreted by the receiving system"
* action[=].documentation[+].type = $RATYPE#citation "Citation"
* action[=].documentation[=].label = "ASCCP Recommendation"
* action[=].documentation[=].display = "ASCCP recommendation statement on cervical management (TODO: INSERT DATE HERE)"
* action[=].condition[+].kind = $ACKIND#applicability "Applicability"
* action[=].condition[=].expression.language = $EXLANG|4.0.1#text/cql "CQL"
* action[=].condition[=].expression.expression = "PostTreatment"
* action[=].condition[=].expression.reference = "Library/ManagementLibrary|1.0"
* insert ManagementActions