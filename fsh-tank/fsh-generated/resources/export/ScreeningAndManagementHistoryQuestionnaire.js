export const ScreeningAndManagementHistoryQuestionnaire = {
  "resourceType": "Questionnaire",
  "id": "ScreeningAndManagementHistoryQuestionnaire",
  "meta": {
    "profile": [
      "http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire"
    ]
  },
  "url": "http://OUR-PLACEHOLDER-URL.com/Questionnaire/ScreeningAndManagementHistoryQuestionnaire",
  "version": "1.0.0",
  "name": "ScreeningAndManagementHistoryQuestionnaire",
  "title": "ScreeningAndManagementHistoryQuestionnaire",
  "status": "draft",
  "subjectType": [
    "Practitioner"
  ],
  "extension": [
    {
      "url": "http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-entryMode",
      "valueCode": "random"
    }
  ],
  "item": [
    {
      "linkId": "diagnostic-report-to-amend",
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
          "question": "diagnostic-report-to-amend",
          "operator": "!=",
          "answerString": "n/a"
        }
      ]
    },
    {
      "linkId": "test-type",
      "text": "Test Type",
      "required": true,
      "type": "choice",
      "repeats": true,
      "answerValueSet": "http://OUR-PLACEHOLDER-URL.com/ValueSet/ScreeningAndManagementTestType"
    },
    {
      "linkId": "hpv-results",
      "text": "HPV Results",
      "enableWhen": [
        {
          "question": "test-type",
          "operator": "=",
          "answerString": "HPV"
        }
      ],
      "enableBehavior": "any",
      "type": "choice",
      "repeats": true,
      "answerValueSet": "http://OUR-PLACEHOLDER-URL.com/ValueSet/HpvTestResult"
    },
    {
      "linkId": "cytology-results",
      "text": "Cytology Results",
      "enableWhen": [
        {
          "question": "test-type",
          "operator": "=",
          "answerString": "Cervical Cytology (Pap)"
        }
      ],
      "enableBehavior": "any",
      "type": "choice",
      "repeats": true,
      "answerValueSet": "http://OUR-PLACEHOLDER-URL.com/ValueSet/CervicalCytologyResult"
    },
    {
      "linkId": "histology-results",
      "text": "Histology Results",
      "enableWhen": [
        {
          "question": "test-type",
          "operator": "=",
          "answerString": "Cervical Histology"
        }
      ],
      "enableBehavior": "any",
      "type": "choice",
      "repeats": true,
      "answerValueSet": "http://OUR-PLACEHOLDER-URL.com/ValueSet/CervicalHistologyResult"
    },
    {
      "linkId": "test-date",
      "text": "Test Date",
      "required": true,
      "enableWhen": [
        {
          "question": "hpv-results",
          "operator": "exists",
          "answerBoolean": true
        },
        {
          "question": "cytology-results",
          "operator": "exists",
          "answerBoolean": true
        },
        {
          "question": "histology-results",
          "operator": "exists",
          "answerBoolean": true
        }
      ],
      "enableBehavior": "any",
      "type": "date"
    }
  ]
}
