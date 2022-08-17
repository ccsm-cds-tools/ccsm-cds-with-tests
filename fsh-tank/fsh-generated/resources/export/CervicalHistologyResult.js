export const CervicalHistologyResult = {
  "resourceType": "ValueSet",
  "id": "CervicalHistologyResult",
  "url": "http://OUR-PLACEHOLDER-URL.com/ValueSet/CervicalHistologyResult",
  "name": "CervicalHistologyResult",
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
            "code": "165324008",
            "display": "Normal",
            "designation": [
              {
                "use": {
                  "code": "900000000000003001",
                  "system": "http://snomed.info/sct",
                  "display": "Fully specified name"
                },
                "value": "Biopsy result normal (finding)"
              }
            ]
          },
          {
            "code": "285836003",
            "display": "CIN 1",
            "designation": [
              {
                "use": {
                  "code": "900000000000003001",
                  "system": "http://snomed.info/sct",
                  "display": "Fully specified name"
                },
                "value": "Cervical intraepithelial neoplasia grade 1 (disorder)"
              }
            ]
          },
          {
            "code": "285838002",
            "display": "CIN 2",
            "designation": [
              {
                "use": {
                  "code": "900000000000003001",
                  "system": "http://snomed.info/sct",
                  "display": "Fully specified name"
                },
                "value": "Cervical intraepithelial neoplasia grade 2 (disorder)"
              }
            ]
          },
          {
            "code": "20365006",
            "display": "CIN 3",
            "designation": [
              {
                "use": {
                  "code": "900000000000003001",
                  "system": "http://snomed.info/sct",
                  "display": "Fully specified name"
                },
                "value": "Squamous intraepithelial neoplasia, grade III (morphologic abnormality)"
              }
            ]
          },
          {
            "code": "254890008",
            "display": "AIS",
            "designation": [
              {
                "use": {
                  "code": "900000000000003001",
                  "system": "http://snomed.info/sct",
                  "display": "Fully specified name"
                },
                "value": "Adenocarcinoma in situ of cervix (disorder)"
              }
            ]
          },
          {
            "code": "363354003",
            "display": "Cancer",
            "designation": [
              {
                "use": {
                  "code": "900000000000003001",
                  "system": "http://snomed.info/sct",
                  "display": "Fully specified name"
                },
                "value": "Malignant tumor of cervix (disorder)"
              }
            ]
          }
        ]
      }
    ]
  }
}
