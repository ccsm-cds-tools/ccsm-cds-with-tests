Instance: ScreeningAndManagementTestType
InstanceOf: ValueSet
Title: "ScreeningAndManagementTestType"
Usage: #definition
* id = "ScreeningAndManagementTestType"
* url = "http://OUR-PLACEHOLDER-URL.com/ValueSet/ScreeningAndManagementTestType"
* name = "ScreeningAndManagementTestType"
* status = $PUBSTAT#draft "Draft"
* experimental = true
* date = 2022-06-27
* jurisdiction[+] = $JURIS#US "United States of America"
* description = "description"
* purpose = "purpose"
* copyright = "This content from LOINC ® is copyright © 1995+ Regenstrief Institute, Inc. and the LOINC Committee, and available at no cost under the license at http://loinc.org/terms-of-use."
* compose.include[+].system = "http://loinc.org"
* compose.include[=].version = "2.72"
* compose.include[=].concept[+].code = #21440-3
* compose.include[=].concept[=].display = "HPV"
* compose.include[=].concept[=].designation.use = $SNOMED#900000000000003001 "Fully specified name"
* compose.include[=].concept[=].designation.value = "Human papilloma virus 16+18+31+33+35+45+51+52+56 DNA [Presence] in Cervix by Probe"
* compose.include[=].concept[+].code = #10524-7
* compose.include[=].concept[=].display = "Cervical Cytology (Pap)"
* compose.include[=].concept[=].designation.use = $SNOMED#900000000000003001 "Fully specified name"
* compose.include[=].concept[=].designation.value = "Microscopic observation [Identifier] in Cervix by Cyto stain"
* compose.include[=].concept[+].code = #65753-6
* compose.include[=].concept[=].display = "Cervical Histology"
* compose.include[=].concept[=].designation.use = $SNOMED#900000000000003001 "Fully specified name"
* compose.include[=].concept[=].designation.value = "Cervix Pathology biopsy report"