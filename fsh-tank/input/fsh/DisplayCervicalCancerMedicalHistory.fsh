Instance: DisplayCervicalCancerMedicalHistory
InstanceOf: http://hl7.org/fhir/uv/cpg/StructureDefinition/cpg-computableactivity
Title: "Display Cervical Cancer Medical History"
Usage: #definition
// -----------------------------------------------------------------------------
// This ActivityDefinition generates a CommunicationRequest with a payload 
// containing the patient's relevant screening and medical history.
// -----------------------------------------------------------------------------
* insert CPGKnowledgeExtensions
* insert CommonMetadata
* meta.profile[+] = "http://hl7.org/fhir/uv/cpg/StructureDefinition/cpg-computableactivity"
// * cpg-partOf = Canonical(TopLevelPlanDefinition) // TODO: Tie this into the entire pathway
* url = "http://OUR-PLACEHOLDER-URL.com/ActivityDefinition/DisplayCervicalCancerMedicalHistory"
* name = "DisplayCervicalCancerMedicalHistory"
* title = "Display Cervical Cancer Medical History"
* description = "Natural language description of the activity definition"
* purpose = "Why this activity definition is defined"
* usage = "Describes the clinical usage of the activity definition"
* topic[+].text = "Insert mesh terms here" // TODO: Find suitable MeSH terms
* relatedArtifact[+].type = $RATYPE#citation "Citation"
* relatedArtifact[=].label = "USPSTF Recommendation"
* relatedArtifact[=].display = "U.S. Preventive Services Task Force's final recommendation statement on cervical cancer screening (August 21, 2018)"
* library = Canonical(DashboardLibrary|1.0)
* kind = $RRTYPE#CommunicationRequest "CommunicationRequest"
* intent = $RINTENT#proposal "Proposal"
* priority = $RPRIOR#routine "Routine"
* dynamicValue[+].path = "payload" // this is the CommunicationRequest.payload element
* dynamicValue[=].expression.language = $EXLANG|4.0.1#text/cql "CQL"
* dynamicValue[=].expression.expression = "Cervical Cancer Screening and Management Summary"
* dynamicValue[=].expression.reference = "Library/DashboardLibrary|1.0"