Instance: HpvTestResult
InstanceOf: ValueSet
Title: "HpvTestResult"
Usage: #definition
* id = "HpvTestResult"
* url = "http://OUR-PLACEHOLDER-URL.com/ValueSet/HpvTestResult"
* name = "HpvTestResult"
* status = $PUBSTAT#draft "Draft"
* experimental = true
* date = 2022-06-27
* jurisdiction[+] = $JURIS#US "United States of America"
* description = "description"
* purpose = "purpose"
* copyright = "Licensees of the UMLS Metathesaurus have free access to SNOMED CT. The IHTSDO license terms for SNOMED CT cover use and distribution worldwide, but fees may be applicable outside IHTSDO Member countries."
* compose.include[+].system = "http://snomed.info/sct"
* compose.include[=].version = "20220301"
* compose.include[=].concept[+].code = #260385009
* compose.include[=].concept[=].display = "Negative"
* compose.include[=].concept[=].designation.use = $SNOMED#900000000000003001 "Fully specified name"
* compose.include[=].concept[=].designation.value = "Negative (qualifier value)"
* compose.include[=].concept[+].code = #10828004
* compose.include[=].concept[=].display = "Positive (Not Type 16/18)"
* compose.include[=].concept[=].designation.use = $SNOMED#900000000000003001 "Fully specified name"
* compose.include[=].concept[=].designation.value = "Positive (qualifier value)"
* compose.include[=].concept[+].code = #708298003
* compose.include[=].concept[=].display = "Positive (Type 16)"
* compose.include[=].concept[=].designation.use = $SNOMED#900000000000003001 "Fully specified name"
* compose.include[=].concept[=].designation.value = "Deoxyribonucleic acid of Human papillomavirus 16 (substance)"
* compose.include[=].concept[+].code = #708299006
* compose.include[=].concept[=].display = "Positive (Type 18)"
* compose.include[=].concept[=].designation.use = $SNOMED#900000000000003001 "Fully specified name"
* compose.include[=].concept[=].designation.value = "Deoxyribonucleic acid of Human papillomavirus 18 (substance)"