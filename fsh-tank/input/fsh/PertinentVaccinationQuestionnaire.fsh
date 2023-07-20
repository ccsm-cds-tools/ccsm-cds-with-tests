Instance: PertinentVaccinationQuestionnaire
InstanceOf: http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire
Title: "PertinentVaccinationQuestionnaire"
Usage: #definition
// -----------------------------------------------------------------------------
// This Questionnaire is so providers can enter additional information they may 
// have about the patient.
// -----------------------------------------------------------------------------
* meta.profile[+] = "http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire"
* url = "http://OUR-PLACEHOLDER-URL.com/Questionnaire/PertinentVaccinationQuestionnaire"
* version = "1.0.0"
* name = "PertinentVaccinationQuestionnaire"
* title = "PertinentVaccinationQuestionnaire"
* status = http://hl7.org/fhir/publication-status#draft "Draft"
* subjectType = http://hl7.org/fhir/resource-types#Patient "Patient"
* extension[+].url = "http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-entryMode"
* extension[=].valueCode = #random

* item[+].linkId = "immunization-to-amend"
* item[=].text = "ID"
* item[=].type = #string
* item[=].readOnly = true
* item[=].initial.valueString = "n/a"
* item[=].enableWhen[+].question = "immunization-to-amend"
* item[=].enableWhen[=].operator = #!=
* item[=].enableWhen[=].answerString = "n/a"

* item[+].linkId = "immunization-type"
* item[=].text = "immunization Type"
* item[=].required = true
* item[=].type = #choice
* item[=].repeats = false
* item[=].answerValueSet = Canonical(PertinentVaccinationShortList)

* item[+].linkId = "immunization-date"
* item[=].text = "Immunization Date"
* item[=].required = true
* item[=].enableWhen[+].question = "immunization-type"
* item[=].enableWhen[=].operator = #exists
* item[=].enableWhen[=].answerBoolean = true
* item[=].type = #date