export const PertinentObservationShortList = {
  "resourceType": "ValueSet",
  "id": "PertinentObservationShortList",
  "url": "http://OUR-PLACEHOLDER-URL.com/ValueSet/PertinentObservationShortList",
  "name": "PertinentObservationShortList",
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
        "system": "http://OUR-PLACEHOLDER-URL.com",
        "version": "2022-08",
        "concept": [
          {
            "code": "AUVBQ",
            "display": "Is the patient experiencing abnormal uterine or vaginal bleeding today?",
            "designation": [
              {
                "use": {
                  "code": "900000000000003001",
                  "system": "http://snomed.info/sct",
                  "display": "Fully specified name"
                },
                "value": "Is the patient experiencing abnormal uterine or vaginal bleeding today?"
              }
            ]
          },
          {
            "code": "VUVLQ",
            "display": "Does the patient have visible uterine or vaginal lesions?",
            "designation": [
              {
                "use": {
                  "code": "900000000000003001",
                  "system": "http://snomed.info/sct",
                  "display": "Fully specified name"
                },
                "value": "Does the patient have visible uterine or vaginal lesions?"
              }
            ]
          },
          {
            "code": "DESEQ",
            "display": "Did the patient experience in utero exposure to diethylstilbesterol (DES)?",
            "designation": [
              {
                "use": {
                  "code": "900000000000003001",
                  "system": "http://snomed.info/sct",
                  "display": "Fully specified name"
                },
                "value": "Did the patient experience in utero exposure to diethylstilbesterol (DES)?"
              }
            ]
          },
          {
            "code": "FPCQ",
            "display": "Does the patient have future pregnancy concerns related to treatment options?",
            "designation": [
              {
                "use": {
                  "code": "900000000000003001",
                  "system": "http://snomed.info/sct",
                  "display": "Fully specified name"
                },
                "value": "Does the patient have future pregnancy concerns related to treatment options?"
              }
            ]
          }
        ]
      }
    ]
  }
}
