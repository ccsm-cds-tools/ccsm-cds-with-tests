Instance: ProvideMoreInformation
InstanceOf: http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire
Title: "Provide more information"
Usage: #definition
// -----------------------------------------------------------------------------
// This Questionnaire is so providers can enter additional information they may 
// have about the patient.
// -----------------------------------------------------------------------------
* meta.profile[+] = "http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire"
* url = "http://OUR-PLACEHOLDER-URL.com/Questionnaire/ProvideMoreInformation"
* version = "1.0.0"
* name = "ProvideMoreInformation"
* title = "Form for capturing additional information from the provider"
* status = http://hl7.org/fhir/publication-status#draft "Draft"
* subjectType = http://hl7.org/fhir/resource-types#Patient "Patient"
* item[+].linkId = "Unique id for item in questionnaire"
* item[=].text = "Primary text for the item"
* item[=].type = http://hl7.org/fhir/item-type#display "Display"
// TODO: Complete Questionnaire
// code "Abnormal Uterine or Vaginal Bleeding Question": 'AUVBQ' from "LOCAL" display 'Is the patient experiencing abnormal uterine or vaginal bleeding today?'
// code "Visible Uterine or Vaginal Lesion Question": 'VUVLQ' from "LOCAL" display 'Does the patient have visible uterine or vaginal lesions?'
// code "DES Exposure Question": 'DESEQ' from "LOCAL" display 'Did the patient experience in utero exposure to diethylstilbesterol (DES)?'
// code "Had Intercourse": '64728-9' from "LOINC" display 'Have you ever had vaginal intercourse'
//
// code "Biopsy Report": '65753-6' from "LOINC" display 'Cervix Pathology biopsy report'
// code "CIN1": '285836003' from "SNOMED-CT" display 'Cervical intraepithelial neoplasia grade 1 (disorder)'
// code "CIN2": '285838002' from "SNOMED-CT" display 'Cervical intraepithelial neoplasia grade 2 (disorder)' // TODO: Move to Dash
// code "CIN3": '20365006' from "SNOMED-CT" display 'Squamous intraepithelial neoplasia, grade III (morphologic abnormality)' // TODO: Move to Dash
// code "AIS": '447760009' from "SNOMED-CT" display 'Endocervical adenocarcinoma in situ (disorder)'
// code "Cancer": '363354003' from "SNOMED-CT" display 'Malignant tumor of cervix (disorder)'
//
// code "NILM": '373887005' from "SNOMED-CT" display 'Negative for intraepithelial lesion or malignancy (finding)'
// code "ASC-US": '39035006' from "SNOMED-CT" display 'Atypical squamous cells of undetermined significance (morphologic abnormality)'
// code "LSIL": '416030007' from "SNOMED-CT" display 'Low grade squamous intraepithelial lesion (finding)'
// code "ASC-H": '373878001' from "SNOMED-CT" display 'Atypical squamous cells, cannot exclude high-grade squamous intraepithelial lesion (morphologic abnormality)'
// code "AGC": '373883009' from "SNOMED-CT" display 'Atypical glandular cells, favor neoplastic (morphologic abnormality)'
// code "HSIL": '416033009' from "SNOMED-CT" display 'High grade squamous intraepithelial lesion or carcinoma (finding)'
//
// code "Positive": '10828004' from "SNOMED-CT" display 'Positive (qualifier value)'
// code "Negative": '260385009' from "SNOMED-CT" display 'Negative (qualifier value)'
// code "HPV16+": 'LA22705-0' from "LOINC" display 'HPV type 16 detected'
// code "HPV18+": 'LA22706-8' from "LOINC" display 'HPV type 18 detected'