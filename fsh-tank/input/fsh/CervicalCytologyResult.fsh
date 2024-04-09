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
* compose.include[=].concept[+].code = #1162767002
* compose.include[=].concept[=].display = "SCC"
* compose.include[=].concept[=].designation.use = $SNOMED#900000000000003001 "Fully specified name"
* compose.include[=].concept[=].designation.value = "Squamous cell carcinoma (morphologic abnormality)"
* compose.include[=].concept[+].code = #373882004
* compose.include[=].concept[=].display = "Endocervical Cells Favor Neoplasia"
* compose.include[=].concept[=].designation.use = $SNOMED#900000000000003001 "Fully specified name"
* compose.include[=].concept[=].designation.value = "Atypical endocervical cells, favor neoplastic (morphologic abnormality)"
* compose.include[=].concept[+].code = #447760009
* compose.include[=].concept[=].display = "Endocervical AIS"
* compose.include[=].concept[=].designation.use = $SNOMED#900000000000003001 "Fully specified name"
* compose.include[=].concept[=].designation.value = "Endocervical adenocarcinoma in situ (disorder)"
* compose.include[=].concept[+].code = #441094005
* compose.include[=].concept[=].display = "Atypical Endocervical Cells"
* compose.include[=].concept[=].designation.use = $SNOMED#900000000000003001 "Fully specified name"
* compose.include[=].concept[=].designation.value = "Atypical endocervical cells on cervical Papanicolaou smear (finding)"
* compose.include[=].concept[+].code = #103646000
* compose.include[=].concept[=].display = "Atypical Endometrial Cells"
* compose.include[=].concept[=].designation.use = $SNOMED#900000000000003001 "Fully specified name"
* compose.include[=].concept[=].designation.value = "Atypical endometrial cells of undetermined significance (morphologic abnormality)"
* compose.include[=].concept[+].code = #125155008
* compose.include[=].concept[=].display = "Benign Endometrial Cells"
* compose.include[=].concept[=].designation.use = $SNOMED#900000000000003001 "Fully specified name"
* compose.include[=].concept[=].designation.value = "Endometrial cells, cytologically benign, in a postmenopausal woman (finding)"
* compose.include[=].concept[+].code = #126481000119106
* compose.include[=].concept[=].display = "Unsatisfactory"
* compose.include[=].concept[=].designation.use = $SNOMED#900000000000003001 "Fully specified name"
* compose.include[=].concept[=].designation.value = "Vaginal Papanicolaou smear unsatisfactory for evaluation (finding)"
* compose.include[=].concept[+].code = #103639009
* compose.include[=].concept[=].display = "Atypical Glandular Cells Uncertain"
* compose.include[=].concept[=].designation.use = $SNOMED#900000000000003001 "Fully specified name"
* compose.include[=].concept[=].designation.value = "Atypical glandular cells of uncertain significance, probably benign (morphologic abnormality)"
* compose.include[=].concept[+].code = #373883009
* compose.include[=].concept[=].display = "AGC favor neoplasia"
* compose.include[=].concept[=].designation.use = $SNOMED#900000000000003001 "Fully specified name"
* compose.include[=].concept[=].designation.value = "Atypical glandular cells, favor neoplastic (morphologic abnormality)"
* compose.include[=].concept[+].code = #254890008
* compose.include[=].concept[=].display = "AIS"
* compose.include[=].concept[=].designation.use = $SNOMED#900000000000003001 "Fully specified name"
* compose.include[=].concept[=].designation.value = "Adenocarcinoma in situ of cervix (disorder)"
* compose.include[=].concept[+].code = #412716005
* compose.include[=].concept[=].display = "Absent Transformation Zone"
* compose.include[=].concept[=].designation.use = $SNOMED#900000000000003001 "Fully specified name"
* compose.include[=].concept[=].designation.value = "Cervical smear transformation zone cells absent (situation)"
* compose.include[=].concept[+].code = #14295007
* compose.include[=].concept[=].display = "Histiocytes"
* compose.include[=].concept[=].designation.use = $SNOMED#900000000000003001 "Fully specified name"
* compose.include[=].concept[=].designation.value = "Resident tissue macrophage (cell)"