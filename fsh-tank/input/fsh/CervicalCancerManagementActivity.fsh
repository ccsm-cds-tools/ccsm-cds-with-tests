Instance: CervicalCancerManagementActivity
InstanceOf: http://hl7.org/fhir/uv/cpg/StructureDefinition/cpg-computableactivity
Title: "CervicalCancerManagementActivity"
Usage: #definition
* insert CPGKnowledgeExtensions
* insert CommonMetadata
* meta.profile[+] = "http://hl7.org/fhir/uv/cpg/StructureDefinition/cpg-computableactivity"
// * cpg-partOf = Canonical(TopLevelPlanDefinition) // TODO: Tie this into the entire pathway
* url = "http://OUR-PLACEHOLDER-URL.com/ActivityDefinition/CervicalCancerManagementActivity"
* name = "CervicalCancerManagementActivity"
* title = "CervicalCancerManagementActivity"
* description = "Natural language description of the activity definition"
* purpose = "Why this activity definition is defined"
* usage = "Describes the clinical usage of the activity definition"
* topic[+].text = "Insert mesh terms here" // TODO: Find suitable MeSH terms
* relatedArtifact[+].type = $RATYPE#citation "Citation" 
* relatedArtifact[=].label = "ASCCP Recommendation"
* relatedArtifact[=].display = "ASCCP recommendation statement on cervical management (TODO: INSERT DATE HERE)"
* library = Canonical(ManagementLibrary|1.0.0)
* kind = $RRTYPE#ServiceRequest "ServiceRequest"
* intent = $RINTENT#proposal "Proposal"
* priority = $RPRIOR#routine "Routine"
* dynamicValue[+].path = "orderDetail" // this is the ServiceRequest.orderDetail element
* dynamicValue[=].expression.language = $EXLANG|4.0.1#text/cql "CQL"
* dynamicValue[=].expression.expression = "ServiceRequestOrderDetail"
* dynamicValue[=].expression.reference = "Library/ManagementLibrary|1.0"
* dynamicValue[+].path = "occurrenceDateTime" // this is the ServiceRequest.occurrence element
* dynamicValue[=].expression.language = $EXLANG|4.0.1#text/cql "CQL"
* dynamicValue[=].expression.expression = "OrderDate"
* dynamicValue[=].expression.reference = "Library/ManagementLibrary|1.0"