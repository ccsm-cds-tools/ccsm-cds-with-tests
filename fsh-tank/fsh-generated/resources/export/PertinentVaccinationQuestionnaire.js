export const PertinentVaccinationQuestionnaire = {
  "resourceType": "Questionnaire",
  "id": "PertinentVaccinationQuestionnaire",
  "meta": {
    "profile": [
      "http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire"
    ]
  },
  "url": "http://OUR-PLACEHOLDER-URL.com/Questionnaire/PertinentVaccinationQuestionnaire",
  "version": "1.0.0",
  "name": "PertinentVaccinationQuestionnaire",
  "title": "PertinentVaccinationQuestionnaire",
  "status": "draft",
  "subjectType": [
    "Patient"
  ],
  "extension": [
    {
      "url": "http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-entryMode",
      "valueCode": "random"
    }
  ],
  "item": [
    {
      "linkId": "immunization-to-amend",
      "text": "ID",
      "type": "string",
      "readOnly": true,
      "initial": [
        {
          "valueString": "n/a"
        }
      ],
      "enableWhen": [
        {
          "question": "immunization-to-amend",
          "operator": "!=",
          "answerString": "n/a"
        }
      ]
    },
    {
      "linkId": "immunization-type",
      "text": "immunization Type",
      "required": true,
      "type": "choice",
      "repeats": false,
      "answerValueSet": "http://OUR-PLACEHOLDER-URL.com/ValueSet/PertinentVaccinationShortList"
    },
    {
      "linkId": "immunization-date",
      "text": "Immunization Date",
      "required": true,
      "enableWhen": [
        {
          "question": "immunization-type",
          "operator": "exists",
          "answerBoolean": true
        }
      ],
      "type": "date"
    }
  ]
}
