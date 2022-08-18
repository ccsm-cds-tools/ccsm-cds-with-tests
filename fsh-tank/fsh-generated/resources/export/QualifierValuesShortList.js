export const QualifierValuesShortList = {
  "resourceType": "ValueSet",
  "id": "QualifierValuesShortList",
  "url": "http://OUR-PLACEHOLDER-URL.com/ValueSet/QualifierValuesShortList",
  "name": "QualifierValuesShortList",
  "status": "draft",
  "experimental": true,
  "date": "2022-08-18",
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
        "system": "http://snomed.info/sct",
        "version": "2022-03",
        "concept": [
          {
            "code": "373066001",
            "display": "Yes",
            "designation": [
              {
                "use": {
                  "code": "900000000000003001",
                  "system": "http://snomed.info/sct",
                  "display": "Fully specified name"
                },
                "value": "Yes (qualifier value)"
              }
            ]
          },
          {
            "code": "373067005",
            "display": "No",
            "designation": [
              {
                "use": {
                  "code": "900000000000003001",
                  "system": "http://snomed.info/sct",
                  "display": "Fully specified name"
                },
                "value": "No (qualifier value)"
              }
            ]
          }
        ]
      }
    ]
  }
}
