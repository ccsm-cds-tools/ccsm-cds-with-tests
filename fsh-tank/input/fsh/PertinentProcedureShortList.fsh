Instance: PertinentProcedureShortList
InstanceOf: ValueSet
Title: "PertinentProcedureShortList"
Usage: #definition
* id = "PertinentProcedureShortList"
* url = "http://OUR-PLACEHOLDER-URL.com/ValueSet/PertinentProcedureShortList"
* name = "PertinentProcedureShortList"
* status = $PUBSTAT#draft "Draft"
* experimental = true
* date = 2022-06-27
* jurisdiction[+] = $JURIS#US "United States of America"
* description = "description"
* purpose = "purpose"
* copyright = "Licensees of the UMLS Metathesaurus have free access to SNOMED CT. The IHTSDO license terms for SNOMED CT cover use and distribution worldwide, but fees may be applicable outside IHTSDO Member countries."
* compose.include[+].system = "http://snomed.info/sct"
* compose.include[=].version = "2022-03"
* compose.include[=].concept[+].code = #392003006
* compose.include[=].concept[=].display = "Colposcopy"
* compose.include[=].concept[=].designation.use = $SNOMED#900000000000003001 "Fully specified name"
* compose.include[=].concept[=].designation.value = "Colposcopy (procedure)"
* compose.include[=].concept[+].code = #120038005
* compose.include[=].concept[=].display = "Cervix Excision"
* compose.include[=].concept[=].designation.use = $SNOMED#900000000000003001 "Fully specified name"
* compose.include[=].concept[=].designation.value = "Cervix excision (procedure)"
* compose.include[=].concept[+].code = #74580009
* compose.include[=].concept[=].display = "Cervix Ablation"
* compose.include[=].concept[=].designation.use = $SNOMED#900000000000003001 "Fully specified name"
* compose.include[=].concept[=].designation.value = "Cauterization of lesion of cervix (procedure)"
* compose.include[=].concept[+].code = #116140006
* compose.include[=].concept[=].display = "Hysterectomy"
* compose.include[=].concept[=].designation.use = $SNOMED#900000000000003001 "Fully specified name"
* compose.include[=].concept[=].designation.value = "Total hysterectomy (procedure)"