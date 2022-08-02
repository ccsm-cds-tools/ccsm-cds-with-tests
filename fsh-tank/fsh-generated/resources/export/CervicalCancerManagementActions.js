export const CervicalCancerManagementActions = {
  "resourceType": "PlanDefinition",
  "id": "CervicalCancerManagementActions",
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
  "url": "http://OUR-PLACEHOLDER-URL.com/PlanDefinition/CervicalCancerManagementActions",
  "name": "CervicalCancerManagementActions",
  "title": "CervicalCancerManagementActions",
  "type": {
    "coding": [
      {
        "code": "eca-rule",
        "system": "http://terminology.hl7.org/CodeSystem/plan-definition-type",
        "display": "ECA Rule"
      }
    ]
  },
  "description": "Natural language description of the plan definition",
  "purpose": "Why this plan definition is defined",
  "usage": "Describes the clinical usage of the plan",
  "topic": [
    {
      "text": "Insert mesh terms here"
    }
  ],
  "relatedArtifact": [
    {
      "type": "citation",
      "label": "ASCCP Recommendation",
      "display": "ASCCP recommendation statement on cervical management (TODO: INSERT DATE HERE)"
    }
  ],
  "library": [
    "http://OUR-PLACEHOLDER-URL.com/Library/ManagementLibrary|1.0.0"
  ],
  "action": [
    {
      "title": "Management Decision Aids",
      "description": "Management Decision Aids",
      "textEquivalent": "Management Decision Aids",
      "definitionCanonical": "http://OUR-PLACEHOLDER-URL.com/ActivityDefinition/CervicalCancerDecisionAids|1.0.0",
      "dynamicValue": [
        {
          "path": "payload[0].content.ofType(string)",
          "expression": {
            "language": "text/cql",
            "expression": "DecisionAids",
            "reference": "Library/ManagementLibrary|1.0"
          }
        }
      ]
    },
    {
      "title": "Recommended Management Activities",
      "description": "Recommended Management Activities",
      "textEquivalent": "Recommended Management Activities",
      "groupingBehavior": "visual-group",
      "selectionBehavior": "at-most-one",
      "action": [
        {
          "title": "Colposcopy",
          "condition": [
            {
              "kind": "applicability",
              "expression": {
                "language": "text/cql",
                "expression": "RecommendColposcopy",
                "reference": "Library/ManagementLibrary|1.0"
              }
            }
          ],
          "dynamicValue": [
            {
              "path": "code",
              "expression": {
                "language": "text/cql",
                "expression": "ColposcopyOrderCode",
                "reference": "Library/ManagementLibrary|1.0"
              }
            }
          ],
          "definitionCanonical": "http://OUR-PLACEHOLDER-URL.com/ActivityDefinition/CervicalCancerManagementActivity|1.0.0"
        },
        {
          "title": "Surveillance",
          "condition": [
            {
              "kind": "applicability",
              "expression": {
                "language": "text/cql",
                "expression": "RecommendSurveillance",
                "reference": "Library/ManagementLibrary|1.0"
              }
            }
          ],
          "dynamicValue": [
            {
              "path": "code",
              "expression": {
                "language": "text/cql",
                "expression": "SurveillanceOrderCode",
                "reference": "Library/ManagementLibrary|1.0"
              }
            }
          ],
          "definitionCanonical": "http://OUR-PLACEHOLDER-URL.com/ActivityDefinition/CervicalCancerManagementActivity|1.0.0"
        },
        {
          "title": "Treatment",
          "condition": [
            {
              "kind": "applicability",
              "expression": {
                "language": "text/cql",
                "expression": "RecommendTreatment",
                "reference": "Library/ManagementLibrary|1.0"
              }
            }
          ],
          "dynamicValue": [
            {
              "path": "code",
              "expression": {
                "language": "text/cql",
                "expression": "TreatmentOrderCode",
                "reference": "Library/ManagementLibrary|1.0"
              }
            }
          ],
          "definitionCanonical": "http://OUR-PLACEHOLDER-URL.com/ActivityDefinition/CervicalCancerManagementActivity|1.0.0"
        }
      ]
    }
  ]
}
