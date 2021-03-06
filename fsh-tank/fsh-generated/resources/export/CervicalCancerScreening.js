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
  "description": "This CDS tool provides care cervical cancer screening recommendations to a diverse population of individuals (i.e., those experiencing abnormal uterine or vaginal bleeding, have in utero exposure to diethylstilbestrol [DES], are immunocompromised, or are at ???average risk??? for cervical cancer). The evidence sources that inspired this tool are listed in the relatedArtifact metadata field.",
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
  "purpose": "This CDS identifies individuals for whom cervical cancer screening is indicated. It delivers patient-specific evidence-based screening recommendations based on information in the patient???s health record. It also gathers relevant information in the patient record to display to the clinician as a dashboard in support of care decisions. The dashboard includes information such as evidence of previous pre-cancer or cancerous lesions, previous colposcopies and biopsy results, previous surgeries, etc. The CDS integrates tightly with a companion CDS component (i.e., ???Management CDS???), which provides evidence-based care recommendations if screening results are ???abnormal???.",
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
  "relatedArtifact": [
    {
      "type": "citation",
      "label": "Symptomatic",
      "display": "ASCCP Clinical Practice Statement: Evaluation of the Cervix in Patient with Abnormal Vaginal Bleeding (2017)"
    },
    {
      "type": "citation",
      "label": "In utero DES exposure",
      "display": "ACOG Cervical Cancer Screening and Prevention. Practice Bulletin No. 168 (2016)"
    },
    {
      "type": "citation",
      "label": "In utero DES exposure",
      "display": "Rubin MM. Antenatal Exposure to DES: Lessons Learned???Future Concerns (August 2007)"
    },
    {
      "type": "citation",
      "label": "In utero DES exposure",
      "display": "NCI DES and Cancer (May 2020)"
    },
    {
      "type": "citation",
      "label": "Immunocompromised",
      "display": "Guidelines for Prevention and Treatment of Opportunistic Infections in Adults and Adolescents with HIV (2020)"
    },
    {
      "type": "citation",
      "label": "Immunocompromised",
      "display": "Moscicki, A.B., et al. Guidelines for Cervical Cancer Screening Immunosuppressed Women without HIV Infection (2019)"
    },
    {
      "type": "citation",
      "label": "USPSTF Recommendation",
      "display": "U.S. Preventive Services Task Force's final recommendation statement on cervical cancer screening (August 21, 2018)"
    }
  ],
  "library": [
    "http://OUR-PLACEHOLDER-URL.com/Library/TopLevelScreeningLibrary|1.0.0"
  ],
  "action": [
    {
      "title": "Cervical Cancer Screening Actions",
      "description": "Top level action that defines trigger and criteria for inclusion and exclusion.",
      "documentation": [
        {
          "type": "documentation",
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
            "reference": "Library/TopLevelScreeningLibrary|1.0"
          }
        }
      ],
      "action": [
        {
          "title": "Cervical Cancer Screening Actions (Symptomatic Individuals)",
          "description": "Top level action for screening of symptomatic individuals that defines trigger and criteria for inclusion and exclusion.",
          "documentation": [
            {
              "type": "citation",
              "label": "Symptomatic",
              "display": "ASCCP Clinical Practice Statement: Evaluation of the Cervix in Patient with Abnormal Vaginal Bleeding (2017)"
            }
          ],
          "condition": [
            {
              "kind": "applicability",
              "expression": {
                "language": "text/cql",
                "expression": "NoErrorsHaveOccurred",
                "reference": "Library/TopLevelScreeningLibrary|1.0"
              }
            }
          ],
          "definitionCanonical": "http://OUR-PLACEHOLDER-URL.com/PlanDefinition/CervicalCancerScreeningSymptomaticIndividuals|1.0.0"
        },
        {
          "title": "Cervical Cancer Screening Actions (In Utero DES Exposure)",
          "description": "Top level action for screening of individuals exposed to DES in utero that defines trigger and criteria for inclusion and exclusion.",
          "documentation": [
            {
              "type": "citation",
              "label": "In utero DES exposure",
              "display": "ACOG Cervical Cancer Screening and Prevention. Practice Bulletin No. 168 (2016)"
            },
            {
              "type": "citation",
              "label": "In utero DES exposure",
              "display": "Rubin MM. Antenatal Exposure to DES: Lessons Learned???Future Concerns (August 2007)"
            },
            {
              "type": "citation",
              "label": "In utero DES exposure",
              "display": "NCI DES and Cancer (May 2020)"
            }
          ],
          "condition": [
            {
              "kind": "applicability",
              "expression": {
                "language": "text/cql",
                "expression": "NoErrorsHaveOccurred",
                "reference": "Library/TopLevelScreeningLibrary|1.0"
              }
            }
          ],
          "definitionCanonical": "http://OUR-PLACEHOLDER-URL.com/PlanDefinition/CervicalCancerScreeningDesExposure|1.0.0"
        },
        {
          "title": "Cervical Cancer Screening Actions (Immunocompromised Individuals)",
          "description": "Top level action for screening of immunocompromised individuals that defines trigger and criteria for inclusion and exclusion.",
          "documentation": [
            {
              "type": "citation",
              "label": "Immunocompromised",
              "display": "Guidelines for Prevention and Treatment of Opportunistic Infections in Adults and Adolescents with HIV (2020)"
            },
            {
              "type": "citation",
              "label": "Immunocompromised",
              "display": "Moscicki, A.B., et al. Guidelines for Cervical Cancer Screening Immunosuppressed Women without HIV Infection (2019)"
            }
          ],
          "condition": [
            {
              "kind": "applicability",
              "expression": {
                "language": "text/cql",
                "expression": "NoErrorsHaveOccurred",
                "reference": "Library/TopLevelScreeningLibrary|1.0"
              }
            }
          ],
          "definitionCanonical": "http://OUR-PLACEHOLDER-URL.com/PlanDefinition/CervicalCancerScreeningImmunocompromisedIndividuals|1.0.0"
        },
        {
          "title": "Cervical Cancer Screening Actions (Average Risk)",
          "description": "Top level action for average risk screening that defines trigger and criteria for inclusion and exclusion.",
          "documentation": [
            {
              "type": "citation",
              "label": "USPSTF Recommendation",
              "display": "U.S. Preventive Services Task Force's final recommendation statement on cervical cancer screening (August 21, 2018)"
            }
          ],
          "condition": [
            {
              "kind": "applicability",
              "expression": {
                "language": "text/cql",
                "expression": "NoErrorsHaveOccurred",
                "reference": "Library/TopLevelScreeningLibrary|1.0"
              }
            }
          ],
          "definitionCanonical": "http://OUR-PLACEHOLDER-URL.com/PlanDefinition/CervicalCancerScreeningAverageRisk|1.0.0"
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
                "reference": "Library/TopLevelScreeningLibrary|1.0"
              }
            }
          ],
          "definitionCanonical": "http://OUR-PLACEHOLDER-URL.com/PlanDefinition/HandleErrors|1.0.0"
        }
      ]
    }
  ]
}
