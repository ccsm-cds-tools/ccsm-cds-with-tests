Instance:   CervicalCancerScreeningActions
InstanceOf: http://hl7.org/fhir/uv/cpg/StructureDefinition/cpg-computableplandefinition
Title: "CervicalCancerScreeningActions"
Usage: #definition
* insert CPGKnowledgeExtensions
* insert CommonMetadata
* meta.profile[+] = "http://hl7.org/fhir/uv/cpg/StructureDefinition/cpg-computableplandefinition"
// * cpg-partOf = Canonical(TopLevelPlanDefinition) // TODO: Tie this into the entire pathway
* url = "http://OUR-PLACEHOLDER-URL.com/PlanDefinition/CervicalCancerScreeningActions"
* name = "CervicalCancerScreeningActions"
* title = "CervicalCancerScreeningActions"
* type = $PDTYPE#eca-rule "ECA Rule"
* description = "Natural language description of the plan definition"
* purpose = "Why this plan definition is defined"
* usage = "Describes the clinical usage of the plan"
* topic[+].text = "Insert mesh terms here" // TODO: Find suitable MeSH terms
* relatedArtifact[+].type = $RATYPE#citation "Citation" 
* relatedArtifact[=].label = "USPSTF Recommendation"
* relatedArtifact[=].display = "U.S. Preventive Services Task Force's final recommendation statement on cervical cancer screening (August 21, 2018)"
* library = Canonical(ScreeningLibrary|1.0.0)
// -----------------------------------------------------------------------------
// Action #1: Screening Decision Aids
// -----------------------------------------------------------------------------
* action[+].title = "Screening Decision Aids"
* action[=].description = "Screening Decision Aids"
* action[=].textEquivalent = "Screening Decision Aids"
* action[=].definitionCanonical = Canonical(CervicalCancerDecisionAids|1.0.0)
* action[=].dynamicValue[+].path = "payload[0].content.ofType(string)" // this is the CommunicationRequest.payload element
* action[=].dynamicValue[=].expression.language = $EXLANG|4.0.1#text/cql "CQL"
* action[=].dynamicValue[=].expression.expression = "DecisionAids"
* action[=].dynamicValue[=].expression.reference = "Library/ScreeningLibrary|1.0"
* insert ScreeningCitationActionDocumentation
// -----------------------------------------------------------------------------
// Action #2: Recommended Screening Activities
// -----------------------------------------------------------------------------
* action[+].title = "Recommended Screening Activities"
* action[=].description = "Recommended Screening Activities"
* action[=].textEquivalent = "Recommended Screening Activities"
* action[=].groupingBehavior = http://hl7.org/fhir/action-grouping-behavior#visual-group "Visual Group"
* action[=].selectionBehavior = http://hl7.org/fhir/action-selection-behavior#at-most-one "At Most One"
// Primary HPV Testing  --------------------------------------------------------
* action[=].action[+].title = "Primary HPV"
* action[=].action[=].condition[+].kind = $ACKIND#applicability "Applicability"
* action[=].action[=].condition[=].expression.language = $EXLANG|4.0.1#text/cql "CQL"
* action[=].action[=].condition[=].expression.expression = "RecommendPrimaryHpv"
* action[=].action[=].condition[=].expression.reference = "Library/ScreeningLibrary|1.0"
* action[=].action[=].dynamicValue[+].path = "code" // this is the ServiceRequest.code element
* action[=].action[=].dynamicValue[=].expression.language = $EXLANG|4.0.1#text/cql "CQL"
* action[=].action[=].dynamicValue[=].expression.expression = "PrimaryHpvOrderCode"
* action[=].action[=].dynamicValue[=].expression.reference = "Library/ScreeningLibrary|1.0"
* action[=].action[=].definitionCanonical = Canonical(CervicalCancerScreeningActivity|1.0.0)
* insert ScreeningCitationActionActionDocumentation
// Cytology Alone --------------------------------------------------------------
* action[=].action[+].title = "Cytology"
* action[=].action[=].condition[+].kind = $ACKIND#applicability "Applicability"
* action[=].action[=].condition[=].expression.language = $EXLANG|4.0.1#text/cql "CQL"
* action[=].action[=].condition[=].expression.expression = "RecommendCytology"
* action[=].action[=].condition[=].expression.reference = "Library/ScreeningLibrary|1.0"
* action[=].action[=].dynamicValue[+].path = "code" // this is the ServiceRequest.code element
* action[=].action[=].dynamicValue[=].expression.language = $EXLANG|4.0.1#text/cql "CQL"
* action[=].action[=].dynamicValue[=].expression.expression = "CytologyOrderCode"
* action[=].action[=].dynamicValue[=].expression.reference = "Library/ScreeningLibrary|1.0"
* action[=].action[=].definitionCanonical = Canonical(CervicalCancerScreeningActivity|1.0.0)
* insert ScreeningCitationActionActionDocumentation
// Cotesting -------------------------------------------------------------------
* action[=].action[+].title = "Cotesting"
* action[=].action[=].condition[+].kind = $ACKIND#applicability "Applicability"
* action[=].action[=].condition[=].expression.language = $EXLANG|4.0.1#text/cql "CQL"
* action[=].action[=].condition[=].expression.expression = "RecommendCotesting"
* action[=].action[=].condition[=].expression.reference = "Library/ScreeningLibrary|1.0"
* action[=].action[=].dynamicValue[+].path = "code" // this is the ServiceRequest.code element
* action[=].action[=].dynamicValue[=].expression.language = $EXLANG|4.0.1#text/cql "CQL"
* action[=].action[=].dynamicValue[=].expression.expression = "CotestingOrderCode"
* action[=].action[=].dynamicValue[=].expression.reference = "Library/ScreeningLibrary|1.0"
* action[=].action[=].definitionCanonical = Canonical(CervicalCancerScreeningActivity|1.0.0)
* insert ScreeningCitationActionActionDocumentation