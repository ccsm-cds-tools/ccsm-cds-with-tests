Instance: PertinentObservationQuestionnaire
InstanceOf: http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire
Title: "PertinentObservationQuestionnaire"
Usage: #definition
// -----------------------------------------------------------------------------
// This Questionnaire is so providers can enter additional information they may 
// have about the patient.
// -----------------------------------------------------------------------------
* meta.profile[+] = "http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire"
* url = "http://OUR-PLACEHOLDER-URL.com/Questionnaire/PertinentObservationQuestionnaire"
* version = "1.0.0"
* name = "PertinentObservationQuestionnaire"
* title = "PertinentObservationQuestionnaire"
* status = http://hl7.org/fhir/publication-status#draft "Draft"
* subjectType = http://hl7.org/fhir/resource-types#Patient "Patient"
* extension[+].url = "http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-entryMode"
* extension[=].valueCode = #random

* item[+].linkId = "observation-to-amend"
* item[=].text = "ID"
* item[=].type = #string
* item[=].readOnly = true
* item[=].initial.valueString = "n/a"
* item[=].enableWhen[+].question = "observation-to-amend"
* item[=].enableWhen[=].operator = #!=
* item[=].enableWhen[=].answerString = "n/a"

* item[+].linkId = "observation-type"
* item[=].text = "Observation Type"
* item[=].required = true
* item[=].type = #choice
* item[=].repeats = false
* item[=].answerValueSet = Canonical(PertinentObservationShortList)

* item[+].linkId = "observation-value"
* item[=].text = "Observation Value"
* item[=].enableWhen[+].question = "observation-type"
* item[=].enableWhen[=].operator = #exists
* item[=].enableWhen[=].answerBoolean = true
* item[=].enableBehavior = #any
* item[=].type = #choice
* item[=].repeats = false
* item[=].answerValueSet = Canonical(QualifierValuesShortList)

* item[+].linkId = "observation-date"
* item[=].text = "Observation Date"
* item[=].required = true
* item[=].enableWhen[+].question = "observation-type"
* item[=].enableWhen[=].operator = #exists
* item[=].enableWhen[=].answerBoolean = true
* item[=].type = #date