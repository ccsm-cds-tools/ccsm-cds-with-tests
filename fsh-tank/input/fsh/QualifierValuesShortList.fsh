Instance: QualifierValuesShortList
InstanceOf: ValueSet
Title: "QualifierValuesShortList"
Usage: #definition
* id = "QualifierValuesShortList"
* url = "http://OUR-PLACEHOLDER-URL.com/ValueSet/QualifierValuesShortList"
* name = "QualifierValuesShortList"
* status = $PUBSTAT#draft "Draft"
* experimental = true
* date = 2022-08-18
* jurisdiction[+] = $JURIS#US "United States of America"
* description = "description"
* purpose = "purpose"
* copyright = "Licensees of the UMLS Metathesaurus have free access to SNOMED CT. The IHTSDO license terms for SNOMED CT cover use and distribution worldwide, but fees may be applicable outside IHTSDO Member countries."
* compose.include[+].system = "http://snomed.info/sct"
* compose.include[=].version = "2022-03"
* compose.include[=].concept[+].code = #373066001
* compose.include[=].concept[=].display = "Yes"
* compose.include[=].concept[=].designation.use = $SNOMED#900000000000003001 "Fully specified name"
* compose.include[=].concept[=].designation.value = "Yes (qualifier value)"
* compose.include[=].concept[+].code = #373067005
* compose.include[=].concept[=].display = "No"
* compose.include[=].concept[=].designation.use = $SNOMED#900000000000003001 "Fully specified name"
* compose.include[=].concept[=].designation.value = "No (qualifier value)"