export const HpvTestResult = {
  "resourceType": "ValueSet",
  "id": "HpvTestResult",
  "url": "http://OUR-PLACEHOLDER-URL.com/ValueSet/HpvTestResult",
  "name": "HpvTestResult",
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
        "system": "http://snomed.info/sct",
        "version": "20220301",
        "concept": [
          {
            "code": "260385009",
            "display": "Negative",
            "designation": [
              {
                "use": {
                  "code": "900000000000003001",
                  "system": "http://snomed.info/sct",
                  "display": "Fully specified name"
                },
                "value": "Negative (qualifier value)"
              }
            ]
          },
          {
            "code": "10828004",
            "display": "Positive (Not Type 16/18)",
            "designation": [
              {
                "use": {
                  "code": "900000000000003001",
                  "system": "http://snomed.info/sct",
                  "display": "Fully specified name"
                },
                "value": "Positive (qualifier value)"
              }
            ]
          },
          {
            "code": "708298003",
            "display": "Positive (Type 16)",
            "designation": [
              {
                "use": {
                  "code": "900000000000003001",
                  "system": "http://snomed.info/sct",
                  "display": "Fully specified name"
                },
                "value": "Deoxyribonucleic acid of Human papillomavirus 16 (substance)"
              }
            ]
          },
          {
            "code": "708299006",
            "display": "Positive (Type 18)",
            "designation": [
              {
                "use": {
                  "code": "900000000000003001",
                  "system": "http://snomed.info/sct",
                  "display": "Fully specified name"
                },
                "value": "Deoxyribonucleic acid of Human papillomavirus 18 (substance)"
              }
            ]
          }
        ]
      }
    ]
  }
}
