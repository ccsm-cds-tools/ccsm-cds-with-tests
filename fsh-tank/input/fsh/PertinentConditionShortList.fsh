Instance: PertinentConditionShortList
InstanceOf: ValueSet
Title: "PertinentConditionShortList"
Usage: #definition
* id = "PertinentConditionShortList"
* url = "http://OUR-PLACEHOLDER-URL.com/ValueSet/PertinentConditionShortList"
* name = "PertinentConditionShortList"
* status = $PUBSTAT#draft "Draft"
* experimental = true
* date = 2022-06-27
* jurisdiction[+] = $JURIS#US "United States of America"
* description = "description"
* purpose = "purpose"
* copyright = "Licensees of the UMLS Metathesaurus have free access to SNOMED CT. The IHTSDO license terms for SNOMED CT cover use and distribution worldwide, but fees may be applicable outside IHTSDO Member countries."
* compose.include[+].system = "http://hl7.org/fhir/sid/icd-10-cm"
* compose.include[=].version = "2023"
* compose.include[=].concept[+].code = #C53
* compose.include[=].concept[=].display = "Cervical Cancer"
* compose.include[=].concept[=].designation.use = $SNOMED#900000000000003001 "Fully specified name"
* compose.include[=].concept[=].designation.value = "Malignant neoplasm of cervix uteri"
* compose.include[=].concept[+].code = #D06
* compose.include[=].concept[=].display = "Cervical Precancer"
* compose.include[=].concept[=].designation.use = $SNOMED#900000000000003001 "Fully specified name"
* compose.include[=].concept[=].designation.value = "Carcinoma in situ of cervix uteri"
* compose.include[=].concept[+].code = #Z33.1
* compose.include[=].concept[=].display = "Pregnant"
* compose.include[=].concept[=].designation.use = $SNOMED#900000000000003001 "Fully specified name"
* compose.include[=].concept[=].designation.value = "Pregnant state, incidental"
* compose.include[=].concept[+].code = #M05
* compose.include[=].concept[=].display = "Rheumatoid Arthritis"
* compose.include[=].concept[=].designation.use = $SNOMED#900000000000003001 "Fully specified name"
* compose.include[=].concept[=].designation.value = "Rheumatoid arthritis with rheumatoid factor"
* compose.include[=].concept[+].code = #N93
* compose.include[=].concept[=].display = "Abnormal Uterine and Vaginal Bleeding"
* compose.include[=].concept[=].designation.use = $SNOMED#900000000000003001 "Fully specified name"
* compose.include[=].concept[=].designation.value = "Other abnormal uterine and vaginal bleeding"
* compose.include[+].system = "http://snomed.info/sct"
* compose.include[=].version = "20220301"
* compose.include[=].concept[+].code = #716005004
* compose.include[=].concept[=].display = "Diethylstilbestrol (DES) exposure"
* compose.include[=].concept[=].designation.use = $SNOMED#900000000000003001 "Fully specified name"
* compose.include[=].concept[=].designation.value = "Fetal diethylstilbestrol syndrome (disorder)"
* compose.include[=].concept[+].code = #22636003
* compose.include[=].concept[=].display = "Premenopausal"
* compose.include[=].concept[=].designation.use = $SNOMED#900000000000003001 "Fully specified name"
* compose.include[=].concept[=].designation.value = "Premenopausal state (finding)"
* compose.include[=].concept[+].code = #76498008
* compose.include[=].concept[=].display = "Postmenopausal"
* compose.include[=].concept[=].designation.use = $SNOMED#900000000000003001 "Fully specified name"
* compose.include[=].concept[=].designation.value = "Postmenopausal state (finding)"
* compose.include[=].concept[+].code = #289794001
* compose.include[=].concept[=].display = "Lesion of Cervix"
* compose.include[=].concept[=].designation.use = $SNOMED#900000000000003001 "Fully specified name"
* compose.include[=].concept[=].designation.value = "Lesion of cervix (finding)"