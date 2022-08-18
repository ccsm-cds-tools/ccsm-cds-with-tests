export const PertinentProcedureQuestionnaire = {
  "resourceType": "Questionnaire",
  "id": "PertinentProcedureQuestionnaire",
  "meta": {
    "profile": [
      "http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire"
    ]
  },
  "url": "http://OUR-PLACEHOLDER-URL.com/Questionnaire/PertinentProcedureQuestionnaire",
  "version": "1.0.0",
  "name": "PertinentProcedureQuestionnaire",
  "title": "PertinentProcedureQuestionnaire",
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
      "linkId": "procedure-to-amend",
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
          "question": "procedure-to-amend",
          "operator": "!=",
          "answerString": "n/a"
        }
      ]
    },
    {
      "linkId": "procedure-type",
      "text": "Procedure Type",
      "required": true,
      "type": "choice",
      "repeats": false,
      "answerValueSet": "http://OUR-PLACEHOLDER-URL.com/ValueSet/PertinentProcedureShortList"
    },
    {
      "linkId": "procedure-date",
      "text": "Procedure Date",
      "required": true,
      "enableWhen": [
        {
          "question": "procedure-type",
          "operator": "exists",
          "answerBoolean": true
        }
      ],
      "type": "date"
    }
  ]
}
