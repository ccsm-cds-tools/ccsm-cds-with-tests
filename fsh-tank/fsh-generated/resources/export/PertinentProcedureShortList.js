export const PertinentProcedureShortList = {
  "resourceType": "ValueSet",
  "id": "PertinentProcedureShortList",
  "url": "http://OUR-PLACEHOLDER-URL.com/ValueSet/PertinentProcedureShortList",
  "name": "PertinentProcedureShortList",
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
        "version": "2022-03",
        "concept": [
          {
            "code": "392003006",
            "display": "Colposcopy",
            "designation": [
              {
                "use": {
                  "code": "900000000000003001",
                  "system": "http://snomed.info/sct",
                  "display": "Fully specified name"
                },
                "value": "Colposcopy (procedure)"
              }
            ]
          },
          {
            "code": "120038005",
            "display": "Cervix Excision",
            "designation": [
              {
                "use": {
                  "code": "900000000000003001",
                  "system": "http://snomed.info/sct",
                  "display": "Fully specified name"
                },
                "value": "Cervix excision (procedure)"
              }
            ]
          },
          {
            "code": "74580009",
            "display": "Cervix Ablation",
            "designation": [
              {
                "use": {
                  "code": "900000000000003001",
                  "system": "http://snomed.info/sct",
                  "display": "Fully specified name"
                },
                "value": "Cauterization of lesion of cervix (procedure)"
              }
            ]
          },
          {
            "code": "116140006",
            "display": "Hysterectomy",
            "designation": [
              {
                "use": {
                  "code": "900000000000003001",
                  "system": "http://snomed.info/sct",
                  "display": "Fully specified name"
                },
                "value": "Total hysterectomy (procedure)"
              }
            ]
          }
        ]
      }
    ]
  }
}
