Instance: PertinentProcedureQuestionnaire
InstanceOf: http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire
Title: "PertinentProcedureQuestionnaire"
Usage: #definition
// -----------------------------------------------------------------------------
// This Questionnaire is so providers can enter additional information they may 
// have about the patient.
// -----------------------------------------------------------------------------
* meta.profile[+] = "http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire"
* url = "http://OUR-PLACEHOLDER-URL.com/Questionnaire/PertinentProcedureQuestionnaire"
* version = "1.0.0"
* name = "PertinentProcedureQuestionnaire"
* title = "PertinentProcedureQuestionnaire"
* status = http://hl7.org/fhir/publication-status#draft "Draft"
* subjectType = http://hl7.org/fhir/resource-types#Patient "Patient"
* extension[+].url = "http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-entryMode"
* extension[=].valueCode = #random

* item[+].linkId = "procedure-to-amend"
* item[=].text = "ID"
* item[=].type = #string
* item[=].readOnly = true
* item[=].initial.valueString = "n/a"
* item[=].enableWhen[+].question = "procedure-to-amend"
* item[=].enableWhen[=].operator = #!=
* item[=].enableWhen[=].answerString = "n/a"

* item[+].linkId = "procedure-type"
* item[=].text = "Procedure Type"
* item[=].required = true
* item[=].type = #choice
* item[=].repeats = false
* item[=].answerValueSet = Canonical(PertinentProcedureShortList)

* item[+].linkId = "procedure-date"
* item[=].text = "Procedure Date"
* item[=].required = true
* item[=].enableWhen[+].question = "procedure-type"
* item[=].enableWhen[=].operator = #exists
* item[=].enableWhen[=].answerBoolean = true
* item[=].type = #date