export const CervicalCytologyResult = {
  "resourceType": "ValueSet",
  "id": "CervicalCytologyResult",
  "url": "http://OUR-PLACEHOLDER-URL.com/ValueSet/CervicalCytologyResult",
  "name": "CervicalCytologyResult",
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
            "code": "373887005",
            "display": "NILM",
            "designation": [
              {
                "use": {
                  "code": "900000000000003001",
                  "system": "http://snomed.info/sct",
                  "display": "Fully specified name"
                },
                "value": "Negative for intraepithelial lesion or malignancy (finding)"
              }
            ]
          },
          {
            "code": "62051000119105",
            "display": "LSIL",
            "designation": [
              {
                "use": {
                  "code": "900000000000003001",
                  "system": "http://snomed.info/sct",
                  "display": "Fully specified name"
                },
                "value": "Low grade squamous intraepithelial lesion on cervical Papanicolaou smear (finding)"
              }
            ]
          },
          {
            "code": "441087007",
            "display": "ASC-US",
            "designation": [
              {
                "use": {
                  "code": "900000000000003001",
                  "system": "http://snomed.info/sct",
                  "display": "Fully specified name"
                },
                "value": "Atypical squamous cells of undetermined significance on cervical Papanicolaou smear (finding)"
              }
            ]
          },
          {
            "code": "441088002",
            "display": "ASC-H",
            "designation": [
              {
                "use": {
                  "code": "900000000000003001",
                  "system": "http://snomed.info/sct",
                  "display": "Fully specified name"
                },
                "value": "Atypical squamous cells on cervical Papanicolaou smear cannot exclude high grade squamous intraepithelial lesion (finding)"
              }
            ]
          },
          {
            "code": "441219009",
            "display": "AGC",
            "designation": [
              {
                "use": {
                  "code": "900000000000003001",
                  "system": "http://snomed.info/sct",
                  "display": "Fully specified name"
                },
                "value": "Atypical glandular cells on cervical Papanicolaou smear (finding)"
              }
            ]
          },
          {
            "code": "416033009",
            "display": "HSIL",
            "designation": [
              {
                "use": {
                  "code": "900000000000003001",
                  "system": "http://snomed.info/sct",
                  "display": "Fully specified name"
                },
                "value": "Cervicovaginal cytology: High grade squamous intraepithelial lesion or carcinoma (finding)"
              }
            ]
          }
        ]
      }
    ]
  }
}
