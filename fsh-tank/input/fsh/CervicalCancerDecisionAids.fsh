Instance: CervicalCancerDecisionAids
InstanceOf: http://hl7.org/fhir/uv/cpg/StructureDefinition/cpg-computableactivity
Title: "CervicalCancerDecisionAids"
Usage: #definition
// -----------------------------------------------------------------------------
// This ActivityDefinition generates a CommunicationRequest with a payload 
// containing the patient's relevant screening and medical history.
// -----------------------------------------------------------------------------
* insert CPGKnowledgeExtensions
* insert CommonMetadata
* meta.profile[+] = "http://hl7.org/fhir/uv/cpg/StructureDefinition/cpg-computableactivity"
// * cpg-partOf = Canonical(TopLevelPlanDefinition) // TODO: Tie this into the entire pathway
* url = "http://OUR-PLACEHOLDER-URL.com/ActivityDefinition/CervicalCancerDecisionAids"
* name = "CervicalCancerDecisionAids"
* title = "CervicalCancerDecisionAids"
* description = "Natural language description of the activity definition"
* purpose = "Why this activity definition is defined"
* usage = "Describes the clinical usage of the activity definition"
* topic[+].text = "Insert mesh terms here" // TODO: Find suitable MeSH terms
* library = Canonical(ManagementLibrary|1.0.0)
* kind = $RRTYPE#CommunicationRequest "CommunicationRequest"
* intent = $RINTENT#proposal "Proposal"
* priority = $RPRIOR#routine "Routine"