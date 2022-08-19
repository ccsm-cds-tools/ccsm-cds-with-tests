export const PertinentVaccinationShortList = {
  "resourceType": "ValueSet",
  "id": "PertinentVaccinationShortList",
  "url": "http://OUR-PLACEHOLDER-URL.com/ValueSet/PertinentVaccinationShortList",
  "name": "PertinentVaccinationShortList",
  "status": "draft",
  "experimental": true,
  "date": "2022-06-27",
  "jurisdiction": [
    {
      "coding": [
        {
          "code": "US",
          "system": "urn:iso:std:iso:3166",
          "display": "United States of America"
        }
      ]
    }
  ],
  "description": "description",
  "purpose": "purpose",
  "copyright": "None",
  "compose": {
    "include": [
      {
        "system": "http://hl7.org/fhir/sid/cvx",
        "version": "20220615",
        "concept": [
          {
            "code": "118",
            "display": "Human papilloma virus vaccine, bivalent",
            "designation": [
              {
                "use": {
                  "code": "900000000000003001",
                  "system": "http://snomed.info/sct",
                  "display": "Fully specified name"
                },
                "value": "human papilloma virus vaccine, bivalent"
              }
            ]
          },
          {
            "code": "137",
            "display": "HPV vaccine, unspecified formulation",
            "designation": [
              {
                "use": {
                  "code": "900000000000003001",
                  "system": "http://snomed.info/sct",
                  "display": "Fully specified name"
                },
                "value": "HPV, unspecified formulation"
              }
            ]
          },
          {
            "code": "165",
            "display": "Human Papillomavirus 9-valent vaccine",
            "designation": [
              {
                "use": {
                  "code": "900000000000003001",
                  "system": "http://snomed.info/sct",
                  "display": "Fully specified name"
                },
                "value": "Human Papillomavirus 9-valent vaccine"
              }
            ]
          },
          {
            "code": "62",
            "display": "Human papilloma virus vaccine, quadrivalent",
            "designation": [
              {
                "use": {
                  "code": "900000000000003001",
                  "system": "http://snomed.info/sct",
                  "display": "Fully specified name"
                },
                "value": "human papilloma virus vaccine, quadrivalent"
              }
            ]
          }
        ]
      }
    ]
  }
}
