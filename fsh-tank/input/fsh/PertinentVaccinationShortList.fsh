Instance: PertinentVaccinationShortList
InstanceOf: ValueSet
Title: "PertinentVaccinationShortList"
Usage: #definition
* id = "PertinentVaccinationShortList"
* url = "http://OUR-PLACEHOLDER-URL.com/ValueSet/PertinentVaccinationShortList"
* name = "PertinentVaccinationShortList"
* status = $PUBSTAT#draft "Draft"
* experimental = true
* date = 2022-06-27
* jurisdiction[+] = $JURIS#US "United States of America"
* description = "description"
* purpose = "purpose"
* copyright = "None"
* compose.include[+].system = "http://hl7.org/fhir/sid/cvx"
* compose.include[=].version = "20220615"
* compose.include[=].concept[+].code = #118
* compose.include[=].concept[=].display = "Human papilloma virus vaccine, bivalent"
* compose.include[=].concept[=].designation.use = $SNOMED#900000000000003001 "Fully specified name"
* compose.include[=].concept[=].designation.value = "human papilloma virus vaccine, bivalent"
* compose.include[=].concept[+].code = #137
* compose.include[=].concept[=].display = "HPV vaccine, unspecified formulation"
* compose.include[=].concept[=].designation.use = $SNOMED#900000000000003001 "Fully specified name"
* compose.include[=].concept[=].designation.value = "HPV, unspecified formulation"
* compose.include[=].concept[+].code = #165
* compose.include[=].concept[=].display = "Human Papillomavirus 9-valent vaccine"
* compose.include[=].concept[=].designation.use = $SNOMED#900000000000003001 "Fully specified name"
* compose.include[=].concept[=].designation.value = "Human Papillomavirus 9-valent vaccine"
* compose.include[=].concept[+].code = #62
* compose.include[=].concept[=].display = "Human papilloma virus vaccine, quadrivalent"
* compose.include[=].concept[=].designation.use = $SNOMED#900000000000003001 "Fully specified name"
* compose.include[=].concept[=].designation.value = "human papilloma virus vaccine, quadrivalent"