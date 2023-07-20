Instance: CervicalHistologyResult
InstanceOf: ValueSet
Title: "CervicalHistologyResult"
Usage: #definition
* id = "CervicalHistologyResult"
* url = "http://OUR-PLACEHOLDER-URL.com/ValueSet/CervicalHistologyResult"
* name = "CervicalHistologyResult"
* status = $PUBSTAT#draft "Draft"
* experimental = true
* date = 2022-06-27
* jurisdiction[+] = $JURIS#US "United States of America"
* description = "description"
* purpose = "purpose"
* copyright = "Licensees of the UMLS Metathesaurus have free access to SNOMED CT. The IHTSDO license terms for SNOMED CT cover use and distribution worldwide, but fees may be applicable outside IHTSDO Member countries."
* compose.include[+].system = "http://snomed.info/sct"
* compose.include[=].version = "20220301"
* compose.include[=].concept[+].code = #165324008
* compose.include[=].concept[=].display = "Normal"
* compose.include[=].concept[=].designation.use = $SNOMED#900000000000003001 "Fully specified name"
* compose.include[=].concept[=].designation.value = "Biopsy result normal (finding)"
* compose.include[=].concept[+].code = #285836003
* compose.include[=].concept[=].display = "CIN 1"
* compose.include[=].concept[=].designation.use = $SNOMED#900000000000003001 "Fully specified name"
* compose.include[=].concept[=].designation.value = "Cervical intraepithelial neoplasia grade 1 (disorder)"
* compose.include[=].concept[+].code = #285838002
* compose.include[=].concept[=].display = "CIN 2"
* compose.include[=].concept[=].designation.use = $SNOMED#900000000000003001 "Fully specified name"
* compose.include[=].concept[=].designation.value = "Cervical intraepithelial neoplasia grade 2 (disorder)"
* compose.include[=].concept[+].code = #22725004
* compose.include[=].concept[=].display = "HSIL, Unspecified"
* compose.include[=].concept[=].designation.use = $SNOMED#900000000000003001 "Fully specified name"
* compose.include[=].concept[=].designation.value = "High-grade squamous intraepithelial lesion (morphologic abnormality)"
* compose.include[=].concept[+].code = #20365006
* compose.include[=].concept[=].display = "CIN 3"
* compose.include[=].concept[=].designation.use = $SNOMED#900000000000003001 "Fully specified name"
* compose.include[=].concept[=].designation.value = "Squamous intraepithelial neoplasia, grade III (morphologic abnormality)"
* compose.include[=].concept[+].code = #254890008
* compose.include[=].concept[=].display = "AIS"
* compose.include[=].concept[=].designation.use = $SNOMED#900000000000003001 "Fully specified name"
* compose.include[=].concept[=].designation.value = "Adenocarcinoma in situ of cervix (disorder)"
* compose.include[=].concept[+].code = #363354003
* compose.include[=].concept[=].display = "Cancer"
* compose.include[=].concept[=].designation.use = $SNOMED#900000000000003001 "Fully specified name"
* compose.include[=].concept[=].designation.value = "Malignant tumor of cervix (disorder)"