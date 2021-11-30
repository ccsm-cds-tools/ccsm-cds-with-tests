Instance: PrimaryHpvScreeningRecommendation
InstanceOf: http://hl7.org/fhir/uv/cpg/StructureDefinition/cpg-computableactivity
Title: "USPSTF Cervical Cancer Screening Recommendations: Primary HPV"
Usage: #definition
// -----------------------------------------------------------------------------
// This ActivityDefinition generates a ServiceRequest that either contains an 
// immediate request for an HPV test or the date for when the next screening 
// test is recommended to occur.
// -----------------------------------------------------------------------------
* insert CPGKnowledgeExtensions
* insert CommonMetadata
* meta.profile[+] = "http://hl7.org/fhir/uv/cpg/StructureDefinition/cpg-computableactivity"
// * cpg-partOf = Canonical(TopLevelPlanDefinition) // TODO: Tie this into the entire pathway
* url = "http://OUR-PLACEHOLDER-URL.com/ActivityDefinition/PrimaryHpvScreeningRecommendation"
* name = "PrimaryHpvScreeningRecommendation"
* title = "USPSTF Cervical Cancer Screening Recommendations: Primary HPV"
* description = "Natural language description of the activity definition"
* purpose = "Why this activity definition is defined"
* usage = "Describes the clinical usage of the activity definition"
* topic[+].text = "Insert mesh terms here" // TODO: Find suitable MeSH terms
* relatedArtifact[+].type = $RATYPE#citation "Citation"
* relatedArtifact[=].label = "USPSTF Recommendation"
* relatedArtifact[=].display = "U.S. Preventive Services Task Force's final recommendation statement on cervical cancer screening (August 21, 2018)"
* library = Canonical(TopLevelScreeningLibrary|1.0.0)
* kind = $RRTYPE#ServiceRequest "ServiceRequest"
* intent = $RINTENT#proposal "Proposal"
* priority = $RPRIOR#routine "Routine"
* dynamicValue[+].path = "code" // this is the ServiceRequest.code element
* dynamicValue[=].expression.language = $EXLANG|4.0.1#text/cql "CQL"
* dynamicValue[=].expression.expression = "ServiceRequest Code"
* dynamicValue[=].expression.reference = "Library/TopLevelScreeningLibrary|1.0"
* dynamicValue[+].path = "orderDetail" // this is the ServiceRequest.orderDetail element
* dynamicValue[=].expression.language = $EXLANG|4.0.1#text/cql "CQL"
* dynamicValue[=].expression.expression = "ServiceRequest Order Detail"
* dynamicValue[=].expression.reference = "Library/TopLevelScreeningLibrary|1.0"