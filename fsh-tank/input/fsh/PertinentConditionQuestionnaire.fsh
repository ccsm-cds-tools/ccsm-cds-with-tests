Instance: PertinentConditionQuestionnaire
InstanceOf: http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire
Title: "PertinentConditionQuestionnaire"
Usage: #definition
// -----------------------------------------------------------------------------
// This Questionnaire is so providers can enter additional information they may 
// have about the patient.
// -----------------------------------------------------------------------------
* meta.profile[+] = "http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire"
* url = "http://OUR-PLACEHOLDER-URL.com/Questionnaire/PertinentConditionQuestionnaire"
* version = "1.0.0"
* name = "PertinentConditionQuestionnaire"
* title = "PertinentConditionQuestionnaire"
* status = http://hl7.org/fhir/publication-status#draft "Draft"
* subjectType = http://hl7.org/fhir/resource-types#Patient "Patient"
* extension[+].url = "http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-entryMode"
* extension[=].valueCode = #random

* item[+].linkId = "condition-to-amend"
* item[=].text = "ID"
* item[=].type = #string
* item[=].readOnly = true
* item[=].initial.valueString = "n/a"
* item[=].enableWhen[+].question = "condition-to-amend"
* item[=].enableWhen[=].operator = #!=
* item[=].enableWhen[=].answerString = "n/a"

* item[+].linkId = "condition-type"
* item[=].text = "Condition Type"
* item[=].required = true
* item[=].type = #choice
* item[=].repeats = false
* item[=].answerValueSet = Canonical(PertinentConditionShortList)

* item[+].linkId = "condition-date"
* item[=].text = "Onset Date"
* item[=].required = true
* item[=].enableWhen[+].question = "condition-type"
* item[=].enableWhen[=].operator = #exists
* item[=].enableWhen[=].answerBoolean = true
* item[=].type = #date