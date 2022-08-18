export const PertinentObservationQuestionnaire = {
  "resourceType": "Questionnaire",
  "id": "PertinentObservationQuestionnaire",
  "meta": {
    "profile": [
      "http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire"
    ]
  },
  "url": "http://OUR-PLACEHOLDER-URL.com/Questionnaire/PertinentObservationQuestionnaire",
  "version": "1.0.0",
  "name": "PertinentObservationQuestionnaire",
  "title": "PertinentObservationQuestionnaire",
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
      "linkId": "observation-to-amend",
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
          "question": "observation-to-amend",
          "operator": "!=",
          "answerString": "n/a"
        }
      ]
    },
    {
      "linkId": "observation-type",
      "text": "Observation Type",
      "required": true,
      "type": "choice",
      "repeats": false,
      "answerValueSet": "http://OUR-PLACEHOLDER-URL.com/ValueSet/PertinentObservationShortList"
    },
    {
      "linkId": "observation-value",
      "text": "Observation Value",
      "enableWhen": [
        {
          "question": "observation-type",
          "operator": "exists",
          "answerBoolean": true
        }
      ],
      "enableBehavior": "any",
      "type": "choice",
      "repeats": false,
      "answerValueSet": "http://OUR-PLACEHOLDER-URL.com/ValueSet/QualifierValuesShortList"
    },
    {
      "linkId": "observation-date",
      "text": "Observation Date",
      "required": true,
      "enableWhen": [
        {
          "question": "observation-type",
          "operator": "exists",
          "answerBoolean": true
        }
      ],
      "type": "date"
    }
  ]
}
