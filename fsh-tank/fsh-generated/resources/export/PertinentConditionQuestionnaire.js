export const PertinentConditionQuestionnaire = {
  "resourceType": "Questionnaire",
  "id": "PertinentConditionQuestionnaire",
  "meta": {
    "profile": [
      "http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire"
    ]
  },
  "url": "http://OUR-PLACEHOLDER-URL.com/Questionnaire/PertinentConditionQuestionnaire",
  "version": "1.0.0",
  "name": "PertinentConditionQuestionnaire",
  "title": "PertinentConditionQuestionnaire",
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
      "linkId": "condition-to-amend",
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
          "question": "condition-to-amend",
          "operator": "!=",
          "answerString": "n/a"
        }
      ]
    },
    {
      "linkId": "condition-type",
      "text": "Condition Type",
      "required": true,
      "type": "choice",
      "repeats": false,
      "answerValueSet": "http://OUR-PLACEHOLDER-URL.com/ValueSet/PertinentConditionShortList"
    },
    {
      "linkId": "condition-date",
      "text": "Onset Date",
      "required": true,
      "enableWhen": [
        {
          "question": "condition-type",
          "operator": "exists",
          "answerBoolean": true
        }
      ],
      "type": "date"
    }
  ]
}
