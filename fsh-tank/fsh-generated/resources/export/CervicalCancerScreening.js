export const CervicalCancerScreening = {
  "resourceType": "PlanDefinition",
  "id": "CervicalCancerScreening",
  "meta": {
    "profile": [
      "http://hl7.org/fhir/uv/cpg/StructureDefinition/cpg-computableplandefinition"
    ]
  },
  "extension": [
    {
      "url": "http://hl7.org/fhir/uv/cpg/StructureDefinition/cpg-knowledgeCapability",
      "valueCode": "executable"
    },
    {
      "url": "http://hl7.org/fhir/uv/cpg/StructureDefinition/cpg-knowledgeRepresentationLevel",
      "valueCode": "structured"
    }
  ],
  "version": "1.0.0",
  "date": "2021-09-14",
  "status": "draft",
  "experimental": true,
  "publisher": "The Health FFRDC, operated by The MITRE Corporation, in support of the Division of Cancer Prevention and Control, Centers for Disease Control and Prevention.",
  "copyright": "(C) 2021 The MITRE Corporation. All Rights Reserved. Approved for Public Release: 21-1556. Distribution Unlimited. Unless otherwise noted, this work is available under an Apache 2.0 license. It was produced by the MITRE Corporation for the Division of Cancer Prevention and Control, Centers for Disease Control and Prevention in accordance with the Statement of Work, contract number 75FCMC18D0047, task order number 75D30120F09743.",
  "approvalDate": "2021-09-14",
  "lastReviewDate": "2021-09-14",
  "author": [
    {
      "name": "The Health FFRDC, operated by The MITRE Corporation, in support of the Division of Cancer Prevention and Control, Centers for Disease Control and Prevention."
    }
  ],
  "editor": [
    {
      "name": "Division of Cancer Prevention and Control, Centers for Disease Control and Prevention"
    }
  ],
  "reviewer": [
    {
      "name": "Division of Cancer Prevention and Control, Centers for Disease Control and Prevention"
    }
  ],
  "endorser": [
    {
      "name": "Division of Cancer Prevention and Control, Centers for Disease Control and Prevention"
    }
  ],
  "url": "http://OUR-PLACEHOLDER-URL.com/PlanDefinition/CervicalCancerScreening",
  "name": "CervicalCancerScreening",
  "title": "Cervical Cancer Screening",
  "type": {
    "coding": [
      {
        "code": "eca-rule",
        "system": "http://terminology.hl7.org/CodeSystem/plan-definition-type",
        "display": "ECA Rule"
      }
    ]
  },
  "description": "This CDS tool provides care cervical cancer screening recommendations to a diverse population of individuals (i.e., those experiencing abnormal uterine or vaginal bleeding, have in utero exposure to diethylstilbestrol [DES], are immunocompromised, or are at “average risk” for cervical cancer). The evidence sources that inspired this tool are listed in the relatedArtifact metadata field.",
  "useContext": [
    {
      "code": {
        "code": "gender",
        "system": "http://terminology.hl7.org/CodeSystem/usage-context-type",
        "display": "Gender"
      },
      "valueCodeableConcept": {
        "coding": [
          {
            "code": "F",
            "system": "http://terminology.hl7.org/CodeSystem/v3-AdministrativeGender",
            "display": "Female"
          }
        ]
      }
    }
  ],
  "purpose": "This CDS identifies individuals for whom cervical cancer screening is indicated. It delivers patient-specific evidence-based screening recommendations based on information in the patient’s health record. It also gathers relevant information in the patient record to display to the clinician as a dashboard in support of care decisions. The dashboard includes information such as evidence of previous pre-cancer or cancerous lesions, previous colposcopies and biopsy results, previous surgeries, etc. The CDS integrates tightly with a companion CDS component (i.e., “Management CDS”), which provides evidence-based care recommendations if screening results are “abnormal”.",
  "usage": "This artifact is intended for use by healthcare personnel working in primary healthcare settings who care for adolescent and adult patients (i.e., physicians, general practitioners, nurse practitioners, physician assistants, and obstetricians).",
  "topic": [
    {
      "text": "Preventive Medicine"
    },
    {
      "text": "Public Health"
    },
    {
      "text": "Cervical Cancer"
    },
    {
      "text": "Cancer Screening"
    }
  ],
  "library": [
    "http://OUR-PLACEHOLDER-URL.com/Library/ScreeningLibrary|1.0.0"
  ],
  "action": [
    {
      "title": "Cervical Cancer Screening Actions",
      "description": "Top level action that defines trigger and criteria for inclusion and exclusion.",
      "textEquivalent": "Static text equivalent of the action, used if the dynamic aspects cannot be interpreted by the receiving system",
      "documentation": [
        {
          "type": "documentation",
          "label": "Inclusions",
          "display": "Appropriate for individuals whose sex at birth is recorded as Female or whose gender identity is recorded as Transgender Male."
        }
      ],
      "trigger": [
        {
          "type": "named-event",
          "name": "encounter-start"
        }
      ],
      "condition": [
        {
          "kind": "applicability",
          "expression": {
            "language": "text/cql",
            "expression": "IsIncludedAndNotExcluded",
            "reference": "Library/ScreeningLibrary|1.0"
          }
        }
      ],
      "action": [
        {
          "title": "Display pertinent medical history",
          "description": "DISPLAY data elements used in the Cervical Cancer Screening and Management Dashboard",
          "textEquivalent": "Static text equivalent of the action, used if the dynamic aspects cannot be interpreted by the receiving system",
          "definitionCanonical": "http://OUR-PLACEHOLDER-URL.com/ActivityDefinition/DisplayCervicalCancerMedicalHistory|1.0.0"
        },
        {
          "title": "Screening Recommendations",
          "description": "Brief description of the action",
          "textEquivalent": "Static text equivalent of the action, used if the dynamic aspects cannot be interpreted by the receiving system",
          "condition": [
            {
              "kind": "applicability",
              "expression": {
                "language": "text/cql",
                "expression": "HasRecommendation",
                "reference": "Library/ScreeningLibrary|1.0"
              }
            }
          ],
          "definitionCanonical": "http://OUR-PLACEHOLDER-URL.com/PlanDefinition/CervicalCancerScreeningActions|1.0.0"
        },
        {
          "title": "Handle Errors",
          "description": "Brief description of the action",
          "textEquivalent": "Static text equivalent of the action, used if the dynamic aspects cannot be interpreted by the receiving system",
          "condition": [
            {
              "kind": "applicability",
              "expression": {
                "language": "text/cql",
                "expression": "ErrorsHaveOccurred",
                "reference": "Library/ScreeningLibrary|1.0"
              }
            }
          ],
          "action": [
            {
              "title": "Communicate Errors",
              "description": "Description",
              "textEquivalent": "Static text equivalent of the action, used if the dynamic aspects cannot be interpreted by the receiving system",
              "definitionCanonical": "http://OUR-PLACEHOLDER-URL.com/ActivityDefinition/CommunicateErrors|1.0.0",
              "dynamicValue": [
                {
                  "path": "payload[0].content.ofType(string)",
                  "expression": {
                    "language": "text/cql",
                    "expression": "Errors",
                    "reference": "Library/ScreeningLibrary|1.0"
                  }
                }
              ]
            },
            {
              "title": "Prompt for More Information",
              "description": "Description",
              "textEquivalent": "Static text equivalent of the action, used if the dynamic aspects cannot be interpreted by the receiving system",
              "groupingBehavior": "visual-group",
              "selectionBehavior": "at-most-one",
              "action": [
                {
                  "definitionCanonical": "http://OUR-PLACEHOLDER-URL.com/Questionnaire/PertinentConditionQuestionnaire|1.0.0"
                },
                {
                  "definitionCanonical": "http://OUR-PLACEHOLDER-URL.com/Questionnaire/PertinentObservationQuestionnaire|1.0.0"
                },
                {
                  "definitionCanonical": "http://OUR-PLACEHOLDER-URL.com/Questionnaire/PertinentProcedureQuestionnaire|1.0.0"
                },
                {
                  "definitionCanonical": "http://OUR-PLACEHOLDER-URL.com/Questionnaire/ScreeningAndManagementHistoryQuestionnaire|1.0.0"
                },
                {
                  "definitionCanonical": "http://OUR-PLACEHOLDER-URL.com/Questionnaire/PertinentVaccinationQuestionnaire|1.0.0"
                }
              ]
            }
          ]
        }
      ]
    }
  ]
}
