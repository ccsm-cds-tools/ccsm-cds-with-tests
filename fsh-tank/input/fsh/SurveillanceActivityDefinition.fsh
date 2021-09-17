Instance: SurveillanceActivityDefinition
InstanceOf: http://hl7.org/fhir/uv/cpg/StructureDefinition/cpg-computableactivity
Title: "ASCCP Cervical Cancer Management Recommendations: Surveillance"
Usage: #definition
* insert CPGKnowledgeExtensions
* insert CommonMetadata
* meta.profile[+] = "http://hl7.org/fhir/uv/cpg/StructureDefinition/cpg-computableactivity"
// * cpg-partOf = Canonical(TopLevelPlanDefinition) // TODO: Tie this into the entire pathway
* url = "http://OUR-PLACEHOLDER-URL.com/ActivityDefinition/SurveillanceActivityDefinition"
* name = "SurveillanceActivityDefinition"
* title = "ASCCP Cervical Cancer Management Recommendations: Surveillance"
* description = "Natural language description of the activity definition"
* purpose = "Why this activity definition is defined"
* usage = "Describes the clinical usage of the activity definition"
* topic[+].text = "Insert mesh terms here" // TODO: Find suitable MeSH terms
* relatedArtifact[+].type = $RATYPE#citation "Citation" 
* relatedArtifact[=].label = "ASCCP Recommendation"
* relatedArtifact[=].display = "ASCCP recommendation statement on cervical management (TODO: INSERT DATE HERE)"
* library = Canonical(ManagementLibrary|1.0)
* kind = $RRTYPE#ServiceRequest "ServiceRequest"
* intent = $RINTENT#proposal "Proposal"
* priority = $RPRIOR#routine "Routine"
* dynamicValue[+].path = "code" // this is the ServiceRequest.code element
* dynamicValue[=].expression.language = $EXLANG|4.0.1#text/cql "CQL"
* dynamicValue[=].expression.expression = "ServiceRequest Code"
* dynamicValue[=].expression.reference = "Library/ManagementLibrary|1.0"
* dynamicValue[+].path = "orderDetail" // this is the ServiceRequest.orderDetail element
* dynamicValue[=].expression.language = $EXLANG|4.0.1#text/cql "CQL"
* dynamicValue[=].expression.expression = "ServiceRequest Order Detail"
* dynamicValue[=].expression.reference = "Library/ManagementLibrary|1.0"