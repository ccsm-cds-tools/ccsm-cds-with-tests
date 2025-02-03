Instance:   CervicalCancerManagementActions
InstanceOf: http://hl7.org/fhir/uv/cpg/StructureDefinition/cpg-computableplandefinition
Title: "CervicalCancerManagementActions"
Usage: #definition
* insert CPGKnowledgeExtensions
* insert CommonMetadata
* meta.profile[+] = "http://hl7.org/fhir/uv/cpg/StructureDefinition/cpg-computableplandefinition"
// * cpg-partOf = Canonical(TopLevelPlanDefinition) // TODO: Tie this into the entire pathway
* url = "http://OUR-PLACEHOLDER-URL.com/PlanDefinition/CervicalCancerManagementActions"
* name = "CervicalCancerManagementActions"
* title = "CervicalCancerManagementActions"
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
// Action #1: Management Decision Aids
// -----------------------------------------------------------------------------
* action[+].title = "Management Decision Aids"
* action[=].description = "Management Decision Aids"
* action[=].textEquivalent = "Management Decision Aids"
* action[=].definitionCanonical = Canonical(CervicalCancerDecisionAids|1.0.0)
* action[=].dynamicValue[+].path = "payload[0].contentString" // this is the CommunicationRequest.payload element
* action[=].dynamicValue[=].expression.language = $EXLANG|4.0.1#text/cql.identifier "CQL"
* action[=].dynamicValue[=].expression.expression = "DecisionAidsString"
* action[=].dynamicValue[=].expression.reference = "Library/ManagementLibrary|1.0"
* insert ManagementCitationActionDocumentation
// -----------------------------------------------------------------------------
// Action #2: Recommended Management Activities
// -----------------------------------------------------------------------------
* action[+].title = "Recommended Management Activities"
* action[=].description = "Recommended Management Activities"
* action[=].textEquivalent = "Recommended Management Activities"
* action[=].groupingBehavior = http://hl7.org/fhir/action-grouping-behavior#visual-group "Visual Group"
* action[=].selectionBehavior = http://hl7.org/fhir/action-selection-behavior#at-most-one "At Most One"
// Colposcopy ------------------------------------------------------------------
* action[=].action[+].title = "Colposcopy"
* action[=].action[=].condition[+].kind = $ACKIND#applicability "Applicability"
* action[=].action[=].condition[=].expression.language = $EXLANG|4.0.1#text/cql.identifier "CQL"
* action[=].action[=].condition[=].expression.expression = "RecommendColposcopy"
* action[=].action[=].condition[=].expression.reference = "Library/ManagementLibrary|1.0"
* action[=].action[=].dynamicValue[+].path = "code" // this is the ServiceRequest.code element
* action[=].action[=].dynamicValue[=].expression.language = $EXLANG|4.0.1#text/cql.identifier "CQL"
* action[=].action[=].dynamicValue[=].expression.expression = "ColposcopyOrderCode"
* action[=].action[=].dynamicValue[=].expression.reference = "Library/ManagementLibrary|1.0"
* action[=].action[=].definitionCanonical = Canonical(CervicalCancerManagementActivity|1.0.0)
* insert ManagementCitationActionActionDocumentation
// Surveillance ----------------------------------------------------------------
* action[=].action[+].title = "Surveillance"
* action[=].action[=].condition[+].kind = $ACKIND#applicability "Applicability"
* action[=].action[=].condition[=].expression.language = $EXLANG|4.0.1#text/cql.identifier "CQL"
* action[=].action[=].condition[=].expression.expression = "RecommendSurveillance"
* action[=].action[=].condition[=].expression.reference = "Library/ManagementLibrary|1.0"
* action[=].action[=].dynamicValue[+].path = "code" // this is the ServiceRequest.code element
* action[=].action[=].dynamicValue[=].expression.language = $EXLANG|4.0.1#text/cql.identifier "CQL"
* action[=].action[=].dynamicValue[=].expression.expression = "SurveillanceOrderCode"
* action[=].action[=].dynamicValue[=].expression.reference = "Library/ManagementLibrary|1.0"
* action[=].action[=].definitionCanonical = Canonical(CervicalCancerManagementActivity|1.0.0)
* insert ManagementCitationActionActionDocumentation
// Treatment -------------------------------------------------------------------
* action[=].action[+].title = "Treatment"
* action[=].action[=].condition[+].kind = $ACKIND#applicability "Applicability"
* action[=].action[=].condition[=].expression.language = $EXLANG|4.0.1#text/cql.identifier "CQL"
* action[=].action[=].condition[=].expression.expression = "RecommendTreatment"
* action[=].action[=].condition[=].expression.reference = "Library/ManagementLibrary|1.0"
* action[=].action[=].dynamicValue[+].path = "code" // this is the ServiceRequest.code element
* action[=].action[=].dynamicValue[=].expression.language = $EXLANG|4.0.1#text/cql.identifier "CQL"
* action[=].action[=].dynamicValue[=].expression.expression = "TreatmentOrderCode"
* action[=].action[=].dynamicValue[=].expression.reference = "Library/ManagementLibrary|1.0"
* action[=].action[=].definitionCanonical = Canonical(CervicalCancerManagementActivity|1.0.0)
* insert ManagementCitationActionActionDocumentation