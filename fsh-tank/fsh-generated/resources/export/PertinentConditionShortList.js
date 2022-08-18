export const PertinentConditionShortList = {
  "resourceType": "ValueSet",
  "id": "PertinentConditionShortList",
  "url": "http://OUR-PLACEHOLDER-URL.com/ValueSet/PertinentConditionShortList",
  "name": "PertinentConditionShortList",
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
  "copyright": "Licensees of the UMLS Metathesaurus have free access to SNOMED CT. The IHTSDO license terms for SNOMED CT cover use and distribution worldwide, but fees may be applicable outside IHTSDO Member countries.",
  "compose": {
    "include": [
      {
        "system": "http://hl7.org/fhir/sid/icd-10-cm",
        "version": "2023",
        "concept": [
          {
            "code": "C53",
            "display": "Cervical Cancer",
            "designation": [
              {
                "use": {
                  "code": "900000000000003001",
                  "system": "http://snomed.info/sct",
                  "display": "Fully specified name"
                },
                "value": "Malignant neoplasm of cervix uteri"
              }
            ]
          },
          {
            "code": "D06",
            "display": "Cervical Precancer",
            "designation": [
              {
                "use": {
                  "code": "900000000000003001",
                  "system": "http://snomed.info/sct",
                  "display": "Fully specified name"
                },
                "value": "Carcinoma in situ of cervix uteri"
              }
            ]
          },
          {
            "code": "Z33.1",
            "display": "Pregnant",
            "designation": [
              {
                "use": {
                  "code": "900000000000003001",
                  "system": "http://snomed.info/sct",
                  "display": "Fully specified name"
                },
                "value": "Pregnant state, incidental"
              }
            ]
          },
          {
            "code": "M05",
            "display": "Rheumatoid Arthritis",
            "designation": [
              {
                "use": {
                  "code": "900000000000003001",
                  "system": "http://snomed.info/sct",
                  "display": "Fully specified name"
                },
                "value": "Rheumatoid arthritis with rheumatoid factor"
              }
            ]
          },
          {
            "code": "N93",
            "display": "Abnormal Uterine and Vaginal Bleeding",
            "designation": [
              {
                "use": {
                  "code": "900000000000003001",
                  "system": "http://snomed.info/sct",
                  "display": "Fully specified name"
                },
                "value": "Other abnormal uterine and vaginal bleeding"
              }
            ]
          }
        ]
      },
      {
        "system": "http://snomed.info/sct",
        "version": "20220301",
        "concept": [
          {
            "code": "716005004",
            "display": "Diethylstilbestrol (DES) exposure",
            "designation": [
              {
                "use": {
                  "code": "900000000000003001",
                  "system": "http://snomed.info/sct",
                  "display": "Fully specified name"
                },
                "value": "Fetal diethylstilbestrol syndrome (disorder)"
              }
            ]
          },
          {
            "code": "22636003",
            "display": "Premenopausal",
            "designation": [
              {
                "use": {
                  "code": "900000000000003001",
                  "system": "http://snomed.info/sct",
                  "display": "Fully specified name"
                },
                "value": "Premenopausal state (finding)"
              }
            ]
          },
          {
            "code": "76498008",
            "display": "Postmenopausal",
            "designation": [
              {
                "use": {
                  "code": "900000000000003001",
                  "system": "http://snomed.info/sct",
                  "display": "Fully specified name"
                },
                "value": "Postmenopausal state (finding)"
              }
            ]
          },
          {
            "code": "289794001",
            "display": "Lesion of Cervix",
            "designation": [
              {
                "use": {
                  "code": "900000000000003001",
                  "system": "http://snomed.info/sct",
                  "display": "Fully specified name"
                },
                "value": "Lesion of cervix (finding)"
              }
            ]
          }
        ]
      }
    ]
  }
}
