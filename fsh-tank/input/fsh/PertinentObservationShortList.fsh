Instance: PertinentObservationShortList
InstanceOf: ValueSet
Title: "PertinentObservationShortList"
Usage: #definition
* id = "PertinentObservationShortList"
* url = "http://OUR-PLACEHOLDER-URL.com/ValueSet/PertinentObservationShortList"
* name = "PertinentObservationShortList"
* status = $PUBSTAT#draft "Draft"
* experimental = true
* date = 2022-06-27
* jurisdiction[+] = $JURIS#US "United States of America"
* description = "description"
* purpose = "purpose"
* copyright = "None"
* compose.include[+].system = "http://OUR-PLACEHOLDER-URL.com"
* compose.include[=].version = "2022-08"
* compose.include[=].concept[+].code = #AUVBQ
* compose.include[=].concept[=].display = "Is the patient experiencing abnormal uterine or vaginal bleeding today?"
* compose.include[=].concept[=].designation.use = $SNOMED#900000000000003001 "Fully specified name"
* compose.include[=].concept[=].designation.value = "Is the patient experiencing abnormal uterine or vaginal bleeding today?"
* compose.include[=].concept[+].code = #VUVLQ
* compose.include[=].concept[=].display = "Does the patient have visible uterine or vaginal lesions?"
* compose.include[=].concept[=].designation.use = $SNOMED#900000000000003001 "Fully specified name"
* compose.include[=].concept[=].designation.value = "Does the patient have visible uterine or vaginal lesions?"
* compose.include[=].concept[+].code = #DESEQ
* compose.include[=].concept[=].display = "Did the patient experience in utero exposure to diethylstilbesterol (DES)?"
* compose.include[=].concept[=].designation.use = $SNOMED#900000000000003001 "Fully specified name"
* compose.include[=].concept[=].designation.value = "Did the patient experience in utero exposure to diethylstilbesterol (DES)?"
* compose.include[=].concept[+].code = #FPCQ
* compose.include[=].concept[=].display = "Does the patient have future pregnancy concerns related to treatment options?"
* compose.include[=].concept[=].designation.use = $SNOMED#900000000000003001 "Fully specified name"
* compose.include[=].concept[=].designation.value = "Does the patient have future pregnancy concerns related to treatment options?"