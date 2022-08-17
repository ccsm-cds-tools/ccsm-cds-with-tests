Instance: CervicalCytologyResult
InstanceOf: ValueSet
Title: "CervicalCytologyResult"
Usage: #definition
* id = "CervicalCytologyResult"
* url = "http://OUR-PLACEHOLDER-URL.com/ValueSet/CervicalCytologyResult"
* name = "CervicalCytologyResult"
* status = $PUBSTAT#draft "Draft"
* experimental = true
* date = 2022-06-27
* jurisdiction[+] = $JURIS#US "United States of America"
* description = "description"
* purpose = "purpose"
* copyright = "Licensees of the UMLS Metathesaurus have free access to SNOMED CT. The IHTSDO license terms for SNOMED CT cover use and distribution worldwide, but fees may be applicable outside IHTSDO Member countries."
* compose.include[+].system = "http://snomed.info/sct"
* compose.include[=].version = "20220301"
* compose.include[=].concept[+].code = #373887005
* compose.include[=].concept[=].display = "NILM"
* compose.include[=].concept[=].designation.use = $SNOMED#900000000000003001 "Fully specified name"
* compose.include[=].concept[=].designation.value = "Negative for intraepithelial lesion or malignancy (finding)"
* compose.include[=].concept[+].code = #62051000119105
* compose.include[=].concept[=].display = "LSIL"
* compose.include[=].concept[=].designation.use = $SNOMED#900000000000003001 "Fully specified name"
* compose.include[=].concept[=].designation.value = "Low grade squamous intraepithelial lesion on cervical Papanicolaou smear (finding)"
* compose.include[=].concept[+].code = #441087007
* compose.include[=].concept[=].display = "ASC-US"
* compose.include[=].concept[=].designation.use = $SNOMED#900000000000003001 "Fully specified name"
* compose.include[=].concept[=].designation.value = "Atypical squamous cells of undetermined significance on cervical Papanicolaou smear (finding)"
* compose.include[=].concept[+].code = #441088002
* compose.include[=].concept[=].display = "ASC-H"
* compose.include[=].concept[=].designation.use = $SNOMED#900000000000003001 "Fully specified name"
* compose.include[=].concept[=].designation.value = "Atypical squamous cells on cervical Papanicolaou smear cannot exclude high grade squamous intraepithelial lesion (finding)"
* compose.include[=].concept[+].code = #441219009
* compose.include[=].concept[=].display = "AGC"
* compose.include[=].concept[=].designation.use = $SNOMED#900000000000003001 "Fully specified name"
* compose.include[=].concept[=].designation.value = "Atypical glandular cells on cervical Papanicolaou smear (finding)"
* compose.include[=].concept[+].code = #416033009
* compose.include[=].concept[=].display = "HSIL"
* compose.include[=].concept[=].designation.use = $SNOMED#900000000000003001 "Fully specified name"
* compose.include[=].concept[=].designation.value = "Cervicovaginal cytology: High grade squamous intraepithelial lesion or carcinoma (finding)"