Instance: ScreeningAndManagementHistoryQuestionnaire
InstanceOf: http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire
Title: "ScreeningAndManagementHistoryQuestionnaire"
Usage: #definition
// -----------------------------------------------------------------------------
// This Questionnaire is so providers can enter additional information they may 
// have about the patient.
// -----------------------------------------------------------------------------
* meta.profile[+] = "http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire"
* url = "http://OUR-PLACEHOLDER-URL.com/Questionnaire/ScreeningAndManagementHistoryQuestionnaire"
* version = "1.0.0"
* name = "ScreeningAndManagementHistoryQuestionnaire"
* title = "ScreeningAndManagementHistoryQuestionnaire"
* status = http://hl7.org/fhir/publication-status#draft "Draft"
* subjectType = http://hl7.org/fhir/resource-types#Patient "Patient"
* extension[+].url = "http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-entryMode"
* extension[=].valueCode = #random

* item[+].linkId = "diagnostic-report-to-amend"
* item[=].text = "ID"
* item[=].type = #string
* item[=].readOnly = true
* item[=].initial.valueString = "n/a"
* item[=].enableWhen[+].question = "diagnostic-report-to-amend"
* item[=].enableWhen[=].operator = #!=
* item[=].enableWhen[=].answerString = "n/a"

* item[+].linkId = "test-type"
* item[=].text = "Test Type"
* item[=].required = true
* item[=].type = #choice
* item[=].repeats = true
* item[=].answerValueSet = Canonical(ScreeningAndManagementTestType)

* item[+].linkId = "hpv-results"
* item[=].text = "HPV Results"
* item[=].enableWhen[+].question = "test-type"
* item[=].enableWhen[=].operator = #=
* item[=].enableWhen[=].answerString = "HPV"
* item[=].enableBehavior = #any
* item[=].type = #choice
* item[=].repeats = true
* item[=].answerValueSet = Canonical(HpvTestResult)

* item[+].linkId = "cytology-results"
* item[=].text = "Cytology Results"
* item[=].enableWhen[+].question = "test-type"
* item[=].enableWhen[=].operator = #=
* item[=].enableWhen[=].answerString = "Cervical Cytology (Pap)"
* item[=].enableBehavior = #any
* item[=].type = #choice
* item[=].repeats = true
* item[=].answerValueSet = Canonical(CervicalCytologyResult)

* item[+].linkId = "histology-results"
* item[=].text = "Histology Results"
* item[=].enableWhen[+].question = "test-type"
* item[=].enableWhen[=].operator = #=
* item[=].enableWhen[=].answerString = "Cervical Histology"
* item[=].enableBehavior = #any
* item[=].type = #choice
* item[=].repeats = true
* item[=].answerValueSet = Canonical(CervicalHistologyResult)

* item[+].linkId = "test-date"
* item[=].text = "Test Date"
* item[=].required = true
* item[=].enableWhen[+].question = "hpv-results"
* item[=].enableWhen[=].operator = #exists
* item[=].enableWhen[=].answerBoolean = true
* item[=].enableWhen[+].question = "cytology-results"
* item[=].enableWhen[=].operator = #exists
* item[=].enableWhen[=].answerBoolean = true
* item[=].enableWhen[+].question = "histology-results"
* item[=].enableWhen[=].operator = #exists
* item[=].enableWhen[=].answerBoolean = true
* item[=].enableBehavior = #any
* item[=].type = #date