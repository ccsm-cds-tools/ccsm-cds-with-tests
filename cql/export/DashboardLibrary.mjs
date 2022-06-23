export const DashboardLibrary = {
   "library" : {
      "annotation" : [ {
         "translatorOptions" : "",
         "type" : "CqlToElmInfo"
      } ],
      "identifier" : {
         "id" : "DashboardLibrary",
         "version" : "1.0.0"
      },
      "schemaIdentifier" : {
         "id" : "urn:hl7-org:elm",
         "version" : "r1"
      },
      "usings" : {
         "def" : [ {
            "localIdentifier" : "System",
            "uri" : "urn:hl7-org:elm-types:r1"
         }, {
            "localIdentifier" : "FHIR",
            "uri" : "http://hl7.org/fhir",
            "version" : "4.0.1"
         } ]
      },
      "includes" : {
         "def" : [ {
            "localIdentifier" : "C3F",
            "path" : "CDSConnectCommonsforFHIRv401",
            "version" : "1.0.0"
         }, {
            "localIdentifier" : "Common",
            "path" : "CCSMCommonFunctions",
            "version" : "1.0.0"
         }, {
            "localIdentifier" : "FHIRHelpers",
            "path" : "FHIRHelpers",
            "version" : "4.0.1"
         } ]
      },
      "parameters" : {
         "def" : [ {
            "name" : "MedicationLookbackPeriod",
            "accessLevel" : "Public",
            "default" : {
               "value" : 6,
               "unit" : "months",
               "type" : "Quantity"
            }
         }, {
            "name" : "HrHPVLookbackPeriod",
            "accessLevel" : "Public",
            "default" : {
               "value" : 10,
               "unit" : "years",
               "type" : "Quantity"
            }
         }, {
            "name" : "CervicalCytologyLookbackPeriod",
            "accessLevel" : "Public",
            "default" : {
               "value" : 10,
               "unit" : "years",
               "type" : "Quantity"
            }
         }, {
            "name" : "QuestionnaireUrl",
            "accessLevel" : "Public",
            "default" : {
               "valueType" : "{urn:hl7-org:elm-types:r1}String",
               "value" : "http://OUR-PLACEHOLDER-URL.com/Questionnaire/ProvideMoreInformation",
               "type" : "Literal"
            }
         }, {
            "name" : "AbnormalTestLookbackPeriod",
            "accessLevel" : "Public",
            "default" : {
               "value" : 8,
               "unit" : "years",
               "type" : "Quantity"
            }
         } ]
      },
      "codeSystems" : {
         "def" : [ {
            "name" : "LOINC",
            "id" : "http://loinc.org",
            "accessLevel" : "Public"
         }, {
            "name" : "SNOMED-CT",
            "id" : "http://snomed.info/sct",
            "accessLevel" : "Public"
         }, {
            "name" : "RXNORM",
            "id" : "http://www.nlm.nih.gov/research/umls/rxnorm",
            "accessLevel" : "Public"
         }, {
            "name" : "ICD-9",
            "id" : "http://hl7.org/fhir/sid/icd-9-cm",
            "accessLevel" : "Public"
         }, {
            "name" : "ICD-10",
            "id" : "http://hl7.org/fhir/sid/icd-10-cm",
            "accessLevel" : "Public"
         }, {
            "name" : "LOCAL",
            "id" : "http://OUR-PLACEHOLDER-URL.com",
            "accessLevel" : "Public"
         } ]
      },
      "valueSets" : {
         "def" : [ {
            "name" : "Abnormal Uterine or Vaginal Bleeding Disorders",
            "id" : "http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113762.1.4.1032.189",
            "accessLevel" : "Public"
         }, {
            "name" : "Abnormal Uterine or Vaginal Bleeding Findings",
            "id" : "http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113762.1.4.1032.187",
            "accessLevel" : "Public"
         }, {
            "name" : "Cervical and/or Vaginal Lesion Findings",
            "id" : "http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113762.1.4.1032.196",
            "accessLevel" : "Public"
         }, {
            "name" : "Observed Cervical and/or Vaginal Lesions",
            "id" : "http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113762.1.4.1032.197",
            "accessLevel" : "Public"
         }, {
            "name" : "Pregnancy",
            "id" : "http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113883.3.526.3.378",
            "accessLevel" : "Public"
         }, {
            "name" : "Pregnancy (New ICD10 codes published in 2018 and 2020)",
            "id" : "http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113762.1.4.1032.80",
            "accessLevel" : "Public"
         }, {
            "name" : "HIV",
            "id" : "http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113883.3.464.1003.120.12.1003",
            "accessLevel" : "Public"
         }, {
            "name" : "Solid Organ Transplant Diagnosis Codes",
            "id" : "http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113762.1.4.1032.206",
            "accessLevel" : "Public"
         }, {
            "name" : "Systemic Lupus Erythematosus",
            "id" : "http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113762.1.4.1032.215",
            "accessLevel" : "Public"
         }, {
            "name" : "Hematopoietic stem cell transplant",
            "id" : "http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113762.1.4.1032.221",
            "accessLevel" : "Public"
         }, {
            "name" : "ICD10CM Value Set for Crohn's Disease",
            "id" : "http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113883.3.3616.200.110.102.3079",
            "accessLevel" : "Public"
         }, {
            "name" : "SNOMED Value Set for Crohn's Disease",
            "id" : "http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113883.3.3616.200.110.102.6091",
            "accessLevel" : "Public"
         }, {
            "name" : "ICD10CM Value Set for Ulcerative Colitis",
            "id" : "http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113883.3.3616.200.110.102.3072",
            "accessLevel" : "Public"
         }, {
            "name" : "SNOMED Value Set for Ulcerative Colitis",
            "id" : "http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113883.3.3616.200.110.102.6262",
            "accessLevel" : "Public"
         }, {
            "name" : "ICD10CM Value Set Adult Rheumatoid Arthritis",
            "id" : "http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113883.3.3616.200.110.102.3061",
            "accessLevel" : "Public"
         }, {
            "name" : "SNOMED Value Set for Adult Rheumatoid Arthritis",
            "id" : "http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113883.3.3616.200.110.102.6008",
            "accessLevel" : "Public"
         }, {
            "name" : "Chronic Graft versus Host Disease",
            "id" : "http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113762.1.4.1032.216",
            "accessLevel" : "Public"
         }, {
            "name" : "Immunosuppressant medications for inflammatory bowel disease or rheumatoid arthritis",
            "id" : "http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113762.1.4.1032.258",
            "accessLevel" : "Public"
         }, {
            "name" : "Hematopoietic Stem Cell Transplant Procedures",
            "id" : "http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113762.1.4.1032.250",
            "accessLevel" : "Public"
         }, {
            "name" : "SNOMED Value Set for Hemopoietic Stem Cell Transplantation",
            "id" : "http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113883.3.3616.200.110.102.6133",
            "accessLevel" : "Public"
         }, {
            "name" : "Solid Organ Transplant Procedure Codes",
            "id" : "http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113762.1.4.1032.211",
            "accessLevel" : "Public"
         }, {
            "name" : "Kidney Transplant",
            "id" : "http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113883.3.464.1003.109.11.1025",
            "accessLevel" : "Public"
         }, {
            "name" : "Diagnosis of Cervical cancer",
            "id" : "http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113762.1.4.1032.246",
            "accessLevel" : "Public"
         }, {
            "name" : "Cervical Precancer Disorders",
            "id" : "http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113762.1.4.1032.228",
            "accessLevel" : "Public"
         }, {
            "name" : "Diethylstilbestrol (DES) exposure",
            "id" : "http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113762.1.4.1032.198",
            "accessLevel" : "Public"
         }, {
            "name" : "Diagnosis of Absence of cervix",
            "id" : "http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113762.1.4.1032.201",
            "accessLevel" : "Public"
         }, {
            "name" : "Absence of cervix observation",
            "id" : "http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113762.1.4.1032.202",
            "accessLevel" : "Public"
         }, {
            "name" : "Colposcopy procedure",
            "id" : "http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113762.1.4.1032.252",
            "accessLevel" : "Public"
         }, {
            "name" : "Surgery Female Genital System Cervix Uteri",
            "id" : "http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113883.3.3157.1315",
            "accessLevel" : "Public"
         }, {
            "name" : "Cervical Excision Procedures",
            "id" : "http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113762.1.4.1032.182",
            "accessLevel" : "Public"
         }, {
            "name" : "Cervical Ablation Procedures",
            "id" : "http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113762.1.4.1032.241",
            "accessLevel" : "Public"
         }, {
            "name" : "Removal of Cervix Procedures",
            "id" : "http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113883.3.464.1003.198.11.1027",
            "accessLevel" : "Public"
         }, {
            "name" : "HPV Test",
            "id" : "http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113883.3.464.1003.110.12.1059",
            "accessLevel" : "Public"
         }, {
            "name" : "Pap Test",
            "id" : "http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113883.3.464.1003.108.12.1017",
            "accessLevel" : "Public"
         }, {
            "name" : "Abnormal results of Cervical Cytology Test",
            "id" : "http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113762.1.4.1032.235",
            "accessLevel" : "Public"
         }, {
            "name" : "HPV Immunization",
            "id" : "http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113762.1.4.1032.191",
            "accessLevel" : "Public"
         }, {
            "name" : "AIS",
            "id" : "http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113762.1.4.1032.259",
            "accessLevel" : "Public"
         }, {
            "name" : "Histologic cancer",
            "id" : "http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113762.1.4.1032.244",
            "accessLevel" : "Public"
         }, {
            "name" : "High Risk HPV Positive Results",
            "id" : "http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113762.1.4.1032.234",
            "accessLevel" : "Public"
         }, {
            "name" : "High Risk Positive HPV Results Without HPV16 or HPV18",
            "id" : "http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113762.1.4.1032.263",
            "accessLevel" : "Public"
         }, {
            "name" : "Histologic CIN3",
            "id" : "http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113762.1.4.1032.269",
            "accessLevel" : "Public"
         }, {
            "name" : "HPV Negative Results",
            "id" : "http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113762.1.4.1032.268",
            "accessLevel" : "Public"
         }, {
            "name" : "HSIL",
            "id" : "http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113762.1.4.1032.256",
            "accessLevel" : "Public"
         }, {
            "name" : "Normal Histology Finding",
            "id" : "http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113762.1.4.1032.262",
            "accessLevel" : "Public"
         } ]
      },
      "codes" : {
         "def" : [ {
            "name" : "Yes",
            "id" : "373066001",
            "display" : "Yes (qualifier value)",
            "accessLevel" : "Public",
            "codeSystem" : {
               "name" : "SNOMED-CT"
            }
         }, {
            "name" : "Pregnancy Status",
            "id" : "82810-3",
            "display" : "Pregnancy status",
            "accessLevel" : "Public",
            "codeSystem" : {
               "name" : "LOINC"
            }
         }, {
            "name" : "Patient currently pregnant",
            "id" : "77386006",
            "display" : "Patient currently pregnant (finding)",
            "accessLevel" : "Public",
            "codeSystem" : {
               "name" : "SNOMED-CT"
            }
         }, {
            "name" : "In utero exposure to DES",
            "id" : "736060002",
            "display" : "History of exposure to diethystilbestrol in utero (situation)",
            "accessLevel" : "Public",
            "codeSystem" : {
               "name" : "SNOMED-CT"
            }
         }, {
            "name" : "Systemic lupus erythematosus ICD-9-CM Code",
            "id" : "710.0",
            "display" : "Systemic lupus erythematosus",
            "accessLevel" : "Public",
            "codeSystem" : {
               "name" : "ICD-9"
            }
         }, {
            "name" : "Chronic GvHD ICD-9 Code",
            "id" : "279.52",
            "display" : "Chronic graft-versus-host disease",
            "accessLevel" : "Public",
            "codeSystem" : {
               "name" : "ICD-9"
            }
         }, {
            "name" : "Chronic GvHD ICD-10 Code",
            "id" : "D89.811",
            "display" : "Chronic graft-versus-host disease",
            "accessLevel" : "Public",
            "codeSystem" : {
               "name" : "ICD-10"
            }
         }, {
            "name" : "Biopsy Report",
            "id" : "65753-6",
            "display" : "Cervix Pathology biopsy report",
            "accessLevel" : "Public",
            "codeSystem" : {
               "name" : "LOINC"
            }
         }, {
            "name" : "Negative",
            "id" : "260385009",
            "display" : "Negative (qualifier value)",
            "accessLevel" : "Public",
            "codeSystem" : {
               "name" : "SNOMED-CT"
            }
         }, {
            "name" : "NILM",
            "id" : "373887005",
            "display" : "Negative for intraepithelial lesion or malignancy (finding)",
            "accessLevel" : "Public",
            "codeSystem" : {
               "name" : "SNOMED-CT"
            }
         }, {
            "name" : "CIN2",
            "id" : "285838002",
            "display" : "Cervical intraepithelial neoplasia grade 2 (disorder)",
            "accessLevel" : "Public",
            "codeSystem" : {
               "name" : "SNOMED-CT"
            }
         }, {
            "name" : "HSIL, Unspecified",
            "id" : "22725004",
            "display" : "High-grade squamous intraepithelial lesion (morphologic abnormality)",
            "accessLevel" : "Public",
            "codeSystem" : {
               "name" : "SNOMED-CT"
            }
         }, {
            "name" : "ASC-H",
            "id" : "441088002",
            "display" : "Atypical squamous cells on cervical Papanicolaou smear cannot exclude high grade squamous intraepithelial lesion (finding)",
            "accessLevel" : "Public",
            "codeSystem" : {
               "name" : "SNOMED-CT"
            }
         }, {
            "name" : "CIN1",
            "id" : "285836003",
            "display" : "Cervical intraepithelial neoplasia grade 1 (disorder)",
            "accessLevel" : "Public",
            "codeSystem" : {
               "name" : "SNOMED-CT"
            }
         }, {
            "name" : "AGC",
            "id" : "441219009",
            "display" : "Atypical glandular cells on cervical Papanicolaou smear (finding)",
            "accessLevel" : "Public",
            "codeSystem" : {
               "name" : "SNOMED-CT"
            }
         }, {
            "name" : "HPV16+",
            "id" : "708298003",
            "display" : "Deoxyribonucleic acid of Human papillomavirus 16 (substance)",
            "accessLevel" : "Public",
            "codeSystem" : {
               "name" : "SNOMED-CT"
            }
         }, {
            "name" : "HPV18+",
            "id" : "708299006",
            "display" : "Deoxyribonucleic acid of Human papillomavirus 18 (substance)",
            "accessLevel" : "Public",
            "codeSystem" : {
               "name" : "SNOMED-CT"
            }
         }, {
            "name" : "LSIL",
            "id" : "62051000119105",
            "display" : "Low grade squamous intraepithelial lesion on cervical Papanicolaou smear (finding)",
            "accessLevel" : "Public",
            "codeSystem" : {
               "name" : "SNOMED-CT"
            }
         }, {
            "name" : "ASC-US",
            "id" : "441087007",
            "display" : "Atypical squamous cells of undetermined significance on cervical Papanicolaou smear (finding)",
            "accessLevel" : "Public",
            "codeSystem" : {
               "name" : "SNOMED-CT"
            }
         }, {
            "name" : "Diagnosis of Genital GvHD",
            "id" : "GenitalGvHD",
            "display" : "Diagnosis of Genital GvHD",
            "accessLevel" : "Public",
            "codeSystem" : {
               "name" : "LOCAL"
            }
         }, {
            "name" : "Abnormal Uterine or Vaginal Bleeding Question",
            "id" : "AUVBQ",
            "display" : "Is the patient experiencing abnormal uterine or vaginal bleeding today?",
            "accessLevel" : "Public",
            "codeSystem" : {
               "name" : "LOCAL"
            }
         }, {
            "name" : "Visible Uterine or Vaginal Lesion Question",
            "id" : "VUVLQ",
            "display" : "Does the patient have visible uterine or vaginal lesions?",
            "accessLevel" : "Public",
            "codeSystem" : {
               "name" : "LOCAL"
            }
         }, {
            "name" : "DES Exposure Question",
            "id" : "DESEQ",
            "display" : "Did the patient experience in utero exposure to diethylstilbesterol (DES)?",
            "accessLevel" : "Public",
            "codeSystem" : {
               "name" : "LOCAL"
            }
         }, {
            "name" : "Future Pregnancy Concerns Question",
            "id" : "FPCQ",
            "display" : "Does the patient have future pregnancy concerns related to treatment options?",
            "accessLevel" : "Public",
            "codeSystem" : {
               "name" : "LOCAL"
            }
         } ]
      },
      "contexts" : {
         "def" : [ {
            "name" : "Patient"
         } ]
      },
      "statements" : {
         "def" : [ {
            "name" : "Patient",
            "context" : "Patient",
            "expression" : {
               "type" : "SingletonFrom",
               "operand" : {
                  "dataType" : "{http://hl7.org/fhir}Patient",
                  "templateId" : "http://hl7.org/fhir/StructureDefinition/Patient",
                  "type" : "Retrieve"
               }
            }
         }, {
            "name" : "CytologyInterpretation",
            "context" : "Patient",
            "accessLevel" : "Public",
            "type" : "FunctionDef",
            "expression" : {
               "type" : "If",
               "condition" : {
                  "asType" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "type" : "As",
                  "operand" : {
                     "type" : "Not",
                     "operand" : {
                        "type" : "IsNull",
                        "operand" : {
                           "name" : "conclusions",
                           "type" : "OperandRef"
                        }
                     }
                  }
               },
               "then" : {
                  "type" : "Query",
                  "source" : [ {
                     "alias" : "c",
                     "expression" : {
                        "name" : "conclusions",
                        "type" : "OperandRef"
                     }
                  } ],
                  "relationship" : [ ],
                  "return" : {
                     "expression" : {
                        "type" : "Case",
                        "caseItem" : [ {
                           "when" : {
                              "type" : "Equivalent",
                              "operand" : [ {
                                 "name" : "c",
                                 "type" : "AliasRef"
                              }, {
                                 "type" : "ToConcept",
                                 "operand" : {
                                    "name" : "NILM",
                                    "type" : "CodeRef"
                                 }
                              } ]
                           },
                           "then" : {
                              "type" : "Tuple",
                              "element" : [ {
                                 "name" : "text",
                                 "value" : {
                                    "valueType" : "{urn:hl7-org:elm-types:r1}String",
                                    "value" : "NILM",
                                    "type" : "Literal"
                                 }
                              }, {
                                 "name" : "rank",
                                 "value" : {
                                    "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                                    "value" : "1",
                                    "type" : "Literal"
                                 }
                              } ]
                           }
                        }, {
                           "when" : {
                              "type" : "Equivalent",
                              "operand" : [ {
                                 "name" : "c",
                                 "type" : "AliasRef"
                              }, {
                                 "type" : "ToConcept",
                                 "operand" : {
                                    "name" : "ASC-US",
                                    "type" : "CodeRef"
                                 }
                              } ]
                           },
                           "then" : {
                              "type" : "Tuple",
                              "element" : [ {
                                 "name" : "text",
                                 "value" : {
                                    "valueType" : "{urn:hl7-org:elm-types:r1}String",
                                    "value" : "ASC-US",
                                    "type" : "Literal"
                                 }
                              }, {
                                 "name" : "rank",
                                 "value" : {
                                    "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                                    "value" : "2",
                                    "type" : "Literal"
                                 }
                              } ]
                           }
                        }, {
                           "when" : {
                              "type" : "Equivalent",
                              "operand" : [ {
                                 "name" : "c",
                                 "type" : "AliasRef"
                              }, {
                                 "type" : "ToConcept",
                                 "operand" : {
                                    "name" : "LSIL",
                                    "type" : "CodeRef"
                                 }
                              } ]
                           },
                           "then" : {
                              "type" : "Tuple",
                              "element" : [ {
                                 "name" : "text",
                                 "value" : {
                                    "valueType" : "{urn:hl7-org:elm-types:r1}String",
                                    "value" : "LSIL",
                                    "type" : "Literal"
                                 }
                              }, {
                                 "name" : "rank",
                                 "value" : {
                                    "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                                    "value" : "3",
                                    "type" : "Literal"
                                 }
                              } ]
                           }
                        }, {
                           "when" : {
                              "type" : "Equivalent",
                              "operand" : [ {
                                 "name" : "c",
                                 "type" : "AliasRef"
                              }, {
                                 "type" : "ToConcept",
                                 "operand" : {
                                    "name" : "ASC-H",
                                    "type" : "CodeRef"
                                 }
                              } ]
                           },
                           "then" : {
                              "type" : "Tuple",
                              "element" : [ {
                                 "name" : "text",
                                 "value" : {
                                    "valueType" : "{urn:hl7-org:elm-types:r1}String",
                                    "value" : "ASC-H",
                                    "type" : "Literal"
                                 }
                              }, {
                                 "name" : "rank",
                                 "value" : {
                                    "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                                    "value" : "4",
                                    "type" : "Literal"
                                 }
                              } ]
                           }
                        }, {
                           "when" : {
                              "type" : "Equivalent",
                              "operand" : [ {
                                 "name" : "c",
                                 "type" : "AliasRef"
                              }, {
                                 "type" : "ToConcept",
                                 "operand" : {
                                    "name" : "AGC",
                                    "type" : "CodeRef"
                                 }
                              } ]
                           },
                           "then" : {
                              "type" : "Tuple",
                              "element" : [ {
                                 "name" : "text",
                                 "value" : {
                                    "valueType" : "{urn:hl7-org:elm-types:r1}String",
                                    "value" : "AGC",
                                    "type" : "Literal"
                                 }
                              }, {
                                 "name" : "rank",
                                 "value" : {
                                    "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                                    "value" : "5",
                                    "type" : "Literal"
                                 }
                              } ]
                           }
                        }, {
                           "when" : {
                              "type" : "InValueSet",
                              "code" : {
                                 "name" : "c",
                                 "type" : "AliasRef"
                              },
                              "valueset" : {
                                 "name" : "HSIL",
                                 "type" : "ValueSetRef"
                              }
                           },
                           "then" : {
                              "type" : "Tuple",
                              "element" : [ {
                                 "name" : "text",
                                 "value" : {
                                    "valueType" : "{urn:hl7-org:elm-types:r1}String",
                                    "value" : "HSIL+",
                                    "type" : "Literal"
                                 }
                              }, {
                                 "name" : "rank",
                                 "value" : {
                                    "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                                    "value" : "6",
                                    "type" : "Literal"
                                 }
                              } ]
                           }
                        } ],
                        "else" : {
                           "type" : "Tuple",
                           "element" : [ {
                              "name" : "text",
                              "value" : {
                                 "valueType" : "{urn:hl7-org:elm-types:r1}String",
                                 "value" : "ALL",
                                 "type" : "Literal"
                              }
                           }, {
                              "name" : "rank",
                              "value" : {
                                 "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                                 "value" : "0",
                                 "type" : "Literal"
                              }
                           } ]
                        }
                     }
                  }
               },
               "else" : {
                  "type" : "List",
                  "element" : [ {
                     "type" : "Tuple",
                     "element" : [ {
                        "name" : "text",
                        "value" : {
                           "valueType" : "{urn:hl7-org:elm-types:r1}String",
                           "value" : "ALL",
                           "type" : "Literal"
                        }
                     }, {
                        "name" : "rank",
                        "value" : {
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "0",
                           "type" : "Literal"
                        }
                     } ]
                  } ]
               }
            },
            "operand" : [ {
               "name" : "conclusions",
               "operandTypeSpecifier" : {
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "name" : "{urn:hl7-org:elm-types:r1}Concept",
                     "type" : "NamedTypeSpecifier"
                  }
               }
            } ]
         }, {
            "name" : "HpvInterpretation",
            "context" : "Patient",
            "accessLevel" : "Public",
            "type" : "FunctionDef",
            "expression" : {
               "type" : "Query",
               "source" : [ {
                  "alias" : "c",
                  "expression" : {
                     "name" : "conclusions",
                     "type" : "OperandRef"
                  }
               } ],
               "relationship" : [ ],
               "return" : {
                  "expression" : {
                     "type" : "Case",
                     "caseItem" : [ {
                        "when" : {
                           "type" : "Equivalent",
                           "operand" : [ {
                              "name" : "c",
                              "type" : "AliasRef"
                           }, {
                              "type" : "ToConcept",
                              "operand" : {
                                 "name" : "HPV16+",
                                 "type" : "CodeRef"
                              }
                           } ]
                        },
                        "then" : {
                           "type" : "Tuple",
                           "element" : [ {
                              "name" : "text",
                              "value" : {
                                 "valueType" : "{urn:hl7-org:elm-types:r1}String",
                                 "value" : "HPV16+",
                                 "type" : "Literal"
                              }
                           }, {
                              "name" : "rank",
                              "value" : {
                                 "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                                 "value" : "4",
                                 "type" : "Literal"
                              }
                           } ]
                        }
                     }, {
                        "when" : {
                           "type" : "Equivalent",
                           "operand" : [ {
                              "name" : "c",
                              "type" : "AliasRef"
                           }, {
                              "type" : "ToConcept",
                              "operand" : {
                                 "name" : "HPV18+",
                                 "type" : "CodeRef"
                              }
                           } ]
                        },
                        "then" : {
                           "type" : "Tuple",
                           "element" : [ {
                              "name" : "text",
                              "value" : {
                                 "valueType" : "{urn:hl7-org:elm-types:r1}String",
                                 "value" : "HPV16-, HPV18+",
                                 "type" : "Literal"
                              }
                           }, {
                              "name" : "rank",
                              "value" : {
                                 "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                                 "value" : "3",
                                 "type" : "Literal"
                              }
                           } ]
                        }
                     }, {
                        "when" : {
                           "type" : "InValueSet",
                           "code" : {
                              "name" : "c",
                              "type" : "AliasRef"
                           },
                           "valueset" : {
                              "name" : "High Risk HPV Positive Results",
                              "type" : "ValueSetRef"
                           }
                        },
                        "then" : {
                           "type" : "Tuple",
                           "element" : [ {
                              "name" : "text",
                              "value" : {
                                 "valueType" : "{urn:hl7-org:elm-types:r1}String",
                                 "value" : "HPV-positive",
                                 "type" : "Literal"
                              }
                           }, {
                              "name" : "rank",
                              "value" : {
                                 "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                                 "value" : "2",
                                 "type" : "Literal"
                              }
                           } ]
                        }
                     }, {
                        "when" : {
                           "type" : "InValueSet",
                           "code" : {
                              "name" : "c",
                              "type" : "AliasRef"
                           },
                           "valueset" : {
                              "name" : "HPV Negative Results",
                              "type" : "ValueSetRef"
                           }
                        },
                        "then" : {
                           "type" : "Tuple",
                           "element" : [ {
                              "name" : "text",
                              "value" : {
                                 "valueType" : "{urn:hl7-org:elm-types:r1}String",
                                 "value" : "HPV-negative",
                                 "type" : "Literal"
                              }
                           }, {
                              "name" : "rank",
                              "value" : {
                                 "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                                 "value" : "1",
                                 "type" : "Literal"
                              }
                           } ]
                        }
                     } ],
                     "else" : {
                        "type" : "Tuple",
                        "element" : [ {
                           "name" : "text",
                           "value" : {
                              "valueType" : "{urn:hl7-org:elm-types:r1}String",
                              "value" : "ALL",
                              "type" : "Literal"
                           }
                        }, {
                           "name" : "rank",
                           "value" : {
                              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                              "value" : "0",
                              "type" : "Literal"
                           }
                        } ]
                     }
                  }
               }
            },
            "operand" : [ {
               "name" : "conclusions",
               "operandTypeSpecifier" : {
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "name" : "{urn:hl7-org:elm-types:r1}Concept",
                     "type" : "NamedTypeSpecifier"
                  }
               }
            } ]
         }, {
            "name" : "HighestRankedInterpretation",
            "context" : "Patient",
            "accessLevel" : "Public",
            "type" : "FunctionDef",
            "expression" : {
               "type" : "Last",
               "source" : {
                  "type" : "Query",
                  "source" : [ {
                     "alias" : "S",
                     "expression" : {
                        "type" : "Query",
                        "source" : [ {
                           "alias" : "I",
                           "expression" : {
                              "name" : "interpretations",
                              "type" : "OperandRef"
                           }
                        } ],
                        "relationship" : [ ],
                        "sort" : {
                           "by" : [ {
                              "direction" : "asc",
                              "path" : "rank",
                              "type" : "ByColumn"
                           } ]
                        }
                     }
                  } ],
                  "relationship" : [ ],
                  "return" : {
                     "expression" : {
                        "path" : "text",
                        "scope" : "S",
                        "type" : "Property"
                     }
                  }
               }
            },
            "operand" : [ {
               "name" : "interpretations",
               "operandTypeSpecifier" : {
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "type" : "TupleTypeSpecifier",
                     "element" : [ {
                        "name" : "text",
                        "elementType" : {
                           "name" : "{urn:hl7-org:elm-types:r1}String",
                           "type" : "NamedTypeSpecifier"
                        }
                     }, {
                        "name" : "rank",
                        "elementType" : {
                           "name" : "{urn:hl7-org:elm-types:r1}Integer",
                           "type" : "NamedTypeSpecifier"
                        }
                     } ]
                  }
               }
            } ]
         }, {
            "name" : "BiopsyInterpretation",
            "context" : "Patient",
            "accessLevel" : "Public",
            "type" : "FunctionDef",
            "expression" : {
               "type" : "Query",
               "source" : [ {
                  "alias" : "c",
                  "expression" : {
                     "name" : "conclusions",
                     "type" : "OperandRef"
                  }
               } ],
               "relationship" : [ ],
               "return" : {
                  "expression" : {
                     "type" : "Case",
                     "caseItem" : [ {
                        "when" : {
                           "type" : "InValueSet",
                           "code" : {
                              "name" : "c",
                              "type" : "AliasRef"
                           },
                           "valueset" : {
                              "name" : "Normal Histology Finding",
                              "type" : "ValueSetRef"
                           }
                        },
                        "then" : {
                           "type" : "Tuple",
                           "element" : [ {
                              "name" : "text",
                              "value" : {
                                 "valueType" : "{urn:hl7-org:elm-types:r1}String",
                                 "value" : "<CIN1",
                                 "type" : "Literal"
                              }
                           }, {
                              "name" : "rank",
                              "value" : {
                                 "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                                 "value" : "1",
                                 "type" : "Literal"
                              }
                           } ]
                        }
                     }, {
                        "when" : {
                           "type" : "Equivalent",
                           "operand" : [ {
                              "name" : "c",
                              "type" : "AliasRef"
                           }, {
                              "type" : "ToConcept",
                              "operand" : {
                                 "name" : "CIN1",
                                 "type" : "CodeRef"
                              }
                           } ]
                        },
                        "then" : {
                           "type" : "Tuple",
                           "element" : [ {
                              "name" : "text",
                              "value" : {
                                 "valueType" : "{urn:hl7-org:elm-types:r1}String",
                                 "value" : "CIN1",
                                 "type" : "Literal"
                              }
                           }, {
                              "name" : "rank",
                              "value" : {
                                 "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                                 "value" : "2",
                                 "type" : "Literal"
                              }
                           } ]
                        }
                     }, {
                        "when" : {
                           "type" : "Equivalent",
                           "operand" : [ {
                              "name" : "c",
                              "type" : "AliasRef"
                           }, {
                              "type" : "ToConcept",
                              "operand" : {
                                 "name" : "CIN2",
                                 "type" : "CodeRef"
                              }
                           } ]
                        },
                        "then" : {
                           "type" : "Tuple",
                           "element" : [ {
                              "name" : "text",
                              "value" : {
                                 "valueType" : "{urn:hl7-org:elm-types:r1}String",
                                 "value" : "CIN2",
                                 "type" : "Literal"
                              }
                           }, {
                              "name" : "rank",
                              "value" : {
                                 "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                                 "value" : "3",
                                 "type" : "Literal"
                              }
                           } ]
                        }
                     }, {
                        "when" : {
                           "type" : "InValueSet",
                           "code" : {
                              "name" : "c",
                              "type" : "AliasRef"
                           },
                           "valueset" : {
                              "name" : "Histologic CIN3",
                              "type" : "ValueSetRef"
                           }
                        },
                        "then" : {
                           "type" : "Tuple",
                           "element" : [ {
                              "name" : "text",
                              "value" : {
                                 "valueType" : "{urn:hl7-org:elm-types:r1}String",
                                 "value" : "CIN3",
                                 "type" : "Literal"
                              }
                           }, {
                              "name" : "rank",
                              "value" : {
                                 "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                                 "value" : "4",
                                 "type" : "Literal"
                              }
                           } ]
                        }
                     }, {
                        "when" : {
                           "type" : "InValueSet",
                           "code" : {
                              "name" : "c",
                              "type" : "AliasRef"
                           },
                           "valueset" : {
                              "name" : "AIS",
                              "type" : "ValueSetRef"
                           }
                        },
                        "then" : {
                           "type" : "Tuple",
                           "element" : [ {
                              "name" : "text",
                              "value" : {
                                 "valueType" : "{urn:hl7-org:elm-types:r1}String",
                                 "value" : "AIS",
                                 "type" : "Literal"
                              }
                           }, {
                              "name" : "rank",
                              "value" : {
                                 "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                                 "value" : "5",
                                 "type" : "Literal"
                              }
                           } ]
                        }
                     }, {
                        "when" : {
                           "type" : "InValueSet",
                           "code" : {
                              "name" : "c",
                              "type" : "AliasRef"
                           },
                           "valueset" : {
                              "name" : "Histologic cancer",
                              "type" : "ValueSetRef"
                           }
                        },
                        "then" : {
                           "type" : "Tuple",
                           "element" : [ {
                              "name" : "text",
                              "value" : {
                                 "valueType" : "{urn:hl7-org:elm-types:r1}String",
                                 "value" : "Cancer",
                                 "type" : "Literal"
                              }
                           }, {
                              "name" : "rank",
                              "value" : {
                                 "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                                 "value" : "6",
                                 "type" : "Literal"
                              }
                           } ]
                        }
                     } ],
                     "else" : {
                        "type" : "Tuple",
                        "element" : [ {
                           "name" : "text",
                           "value" : {
                              "valueType" : "{urn:hl7-org:elm-types:r1}String",
                              "value" : "ALL",
                              "type" : "Literal"
                           }
                        }, {
                           "name" : "rank",
                           "value" : {
                              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                              "value" : "0",
                              "type" : "Literal"
                           }
                        } ]
                     }
                  }
               }
            },
            "operand" : [ {
               "name" : "conclusions",
               "operandTypeSpecifier" : {
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "name" : "{urn:hl7-org:elm-types:r1}Concept",
                     "type" : "NamedTypeSpecifier"
                  }
               }
            } ]
         }, {
            "name" : "PatientAge",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "precision" : "Year",
               "type" : "CalculateAge",
               "operand" : {
                  "path" : "birthDate.value",
                  "type" : "Property",
                  "source" : {
                     "name" : "Patient",
                     "type" : "ExpressionRef"
                  }
               }
            }
         }, {
            "name" : "CervicalCancerDiagnoses",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "dataType" : "{http://hl7.org/fhir}Condition",
               "templateId" : "http://hl7.org/fhir/StructureDefinition/Condition",
               "codeProperty" : "code",
               "codeComparator" : "in",
               "type" : "Retrieve",
               "codes" : {
                  "name" : "Diagnosis of Cervical cancer",
                  "type" : "ValueSetRef"
               }
            }
         }, {
            "name" : "CervicalPrecancerDisorders",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "dataType" : "{http://hl7.org/fhir}Condition",
               "templateId" : "http://hl7.org/fhir/StructureDefinition/Condition",
               "codeProperty" : "code",
               "codeComparator" : "in",
               "type" : "Retrieve",
               "codes" : {
                  "name" : "Cervical Precancer Disorders",
                  "type" : "ValueSetRef"
               }
            }
         }, {
            "name" : "CervicalOrVaginalLesionDiagnoses",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "dataType" : "{http://hl7.org/fhir}Condition",
               "templateId" : "http://hl7.org/fhir/StructureDefinition/Condition",
               "codeProperty" : "code",
               "codeComparator" : "in",
               "type" : "Retrieve",
               "codes" : {
                  "name" : "Observed Cervical and/or Vaginal Lesions",
                  "type" : "ValueSetRef"
               }
            }
         }, {
            "name" : "DesExposureDiagnoses",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "dataType" : "{http://hl7.org/fhir}Condition",
               "templateId" : "http://hl7.org/fhir/StructureDefinition/Condition",
               "codeProperty" : "code",
               "codeComparator" : "in",
               "type" : "Retrieve",
               "codes" : {
                  "name" : "Diethylstilbestrol (DES) exposure",
                  "type" : "ValueSetRef"
               }
            }
         }, {
            "name" : "AbsenceOfCervixDiagnoses",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "dataType" : "{http://hl7.org/fhir}Condition",
               "templateId" : "http://hl7.org/fhir/StructureDefinition/Condition",
               "codeProperty" : "code",
               "codeComparator" : "in",
               "type" : "Retrieve",
               "codes" : {
                  "name" : "Diagnosis of Absence of cervix",
                  "type" : "ValueSetRef"
               }
            }
         }, {
            "name" : "PregnancyDiagnoses",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "name" : "Confirmed",
               "libraryName" : "C3F",
               "type" : "FunctionRef",
               "operand" : [ {
                  "name" : "ActiveOrRecurring",
                  "libraryName" : "C3F",
                  "type" : "FunctionRef",
                  "operand" : [ {
                     "name" : "ConditionLookBack",
                     "libraryName" : "C3F",
                     "type" : "FunctionRef",
                     "operand" : [ {
                        "type" : "Union",
                        "operand" : [ {
                           "dataType" : "{http://hl7.org/fhir}Condition",
                           "templateId" : "http://hl7.org/fhir/StructureDefinition/Condition",
                           "codeProperty" : "code",
                           "codeComparator" : "in",
                           "type" : "Retrieve",
                           "codes" : {
                              "name" : "Pregnancy",
                              "type" : "ValueSetRef"
                           }
                        }, {
                           "dataType" : "{http://hl7.org/fhir}Condition",
                           "templateId" : "http://hl7.org/fhir/StructureDefinition/Condition",
                           "codeProperty" : "code",
                           "codeComparator" : "in",
                           "type" : "Retrieve",
                           "codes" : {
                              "name" : "Pregnancy (New ICD10 codes published in 2018 and 2020)",
                              "type" : "ValueSetRef"
                           }
                        } ]
                     }, {
                        "value" : 42,
                        "unit" : "weeks",
                        "type" : "Quantity"
                     } ]
                  } ]
               } ]
            }
         }, {
            "name" : "HivDiagnoses",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "dataType" : "{http://hl7.org/fhir}Condition",
               "templateId" : "http://hl7.org/fhir/StructureDefinition/Condition",
               "codeProperty" : "code",
               "codeComparator" : "in",
               "type" : "Retrieve",
               "codes" : {
                  "name" : "HIV",
                  "type" : "ValueSetRef"
               }
            }
         }, {
            "name" : "SolidOrganTransplantDiagnoses",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "dataType" : "{http://hl7.org/fhir}Condition",
               "templateId" : "http://hl7.org/fhir/StructureDefinition/Condition",
               "codeProperty" : "code",
               "codeComparator" : "in",
               "type" : "Retrieve",
               "codes" : {
                  "name" : "Solid Organ Transplant Diagnosis Codes",
                  "type" : "ValueSetRef"
               }
            }
         }, {
            "name" : "SystemicLupusErythematosusDiagnoses",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "type" : "Union",
               "operand" : [ {
                  "dataType" : "{http://hl7.org/fhir}Condition",
                  "templateId" : "http://hl7.org/fhir/StructureDefinition/Condition",
                  "codeProperty" : "code",
                  "codeComparator" : "in",
                  "type" : "Retrieve",
                  "codes" : {
                     "name" : "Systemic Lupus Erythematosus",
                     "type" : "ValueSetRef"
                  }
               }, {
                  "dataType" : "{http://hl7.org/fhir}Condition",
                  "templateId" : "http://hl7.org/fhir/StructureDefinition/Condition",
                  "codeProperty" : "code",
                  "codeComparator" : "~",
                  "type" : "Retrieve",
                  "codes" : {
                     "type" : "ToList",
                     "operand" : {
                        "name" : "Systemic lupus erythematosus ICD-9-CM Code",
                        "type" : "CodeRef"
                     }
                  }
               } ]
            }
         }, {
            "name" : "HematopoieticStemCellTransplantDiagnoses",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "dataType" : "{http://hl7.org/fhir}Condition",
               "templateId" : "http://hl7.org/fhir/StructureDefinition/Condition",
               "codeProperty" : "code",
               "codeComparator" : "in",
               "type" : "Retrieve",
               "codes" : {
                  "name" : "Hematopoietic stem cell transplant",
                  "type" : "ValueSetRef"
               }
            }
         }, {
            "name" : "InflammatoryBowelDisease",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "type" : "Union",
               "operand" : [ {
                  "type" : "Union",
                  "operand" : [ {
                     "dataType" : "{http://hl7.org/fhir}Condition",
                     "templateId" : "http://hl7.org/fhir/StructureDefinition/Condition",
                     "codeProperty" : "code",
                     "codeComparator" : "in",
                     "type" : "Retrieve",
                     "codes" : {
                        "name" : "ICD10CM Value Set for Crohn's Disease",
                        "type" : "ValueSetRef"
                     }
                  }, {
                     "dataType" : "{http://hl7.org/fhir}Condition",
                     "templateId" : "http://hl7.org/fhir/StructureDefinition/Condition",
                     "codeProperty" : "code",
                     "codeComparator" : "in",
                     "type" : "Retrieve",
                     "codes" : {
                        "name" : "SNOMED Value Set for Crohn's Disease",
                        "type" : "ValueSetRef"
                     }
                  } ]
               }, {
                  "type" : "Union",
                  "operand" : [ {
                     "dataType" : "{http://hl7.org/fhir}Condition",
                     "templateId" : "http://hl7.org/fhir/StructureDefinition/Condition",
                     "codeProperty" : "code",
                     "codeComparator" : "in",
                     "type" : "Retrieve",
                     "codes" : {
                        "name" : "ICD10CM Value Set for Ulcerative Colitis",
                        "type" : "ValueSetRef"
                     }
                  }, {
                     "dataType" : "{http://hl7.org/fhir}Condition",
                     "templateId" : "http://hl7.org/fhir/StructureDefinition/Condition",
                     "codeProperty" : "code",
                     "codeComparator" : "in",
                     "type" : "Retrieve",
                     "codes" : {
                        "name" : "SNOMED Value Set for Ulcerative Colitis",
                        "type" : "ValueSetRef"
                     }
                  } ]
               } ]
            }
         }, {
            "name" : "RheumatoidArthritisDiagnoses",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "type" : "Union",
               "operand" : [ {
                  "dataType" : "{http://hl7.org/fhir}Condition",
                  "templateId" : "http://hl7.org/fhir/StructureDefinition/Condition",
                  "codeProperty" : "code",
                  "codeComparator" : "in",
                  "type" : "Retrieve",
                  "codes" : {
                     "name" : "ICD10CM Value Set Adult Rheumatoid Arthritis",
                     "type" : "ValueSetRef"
                  }
               }, {
                  "dataType" : "{http://hl7.org/fhir}Condition",
                  "templateId" : "http://hl7.org/fhir/StructureDefinition/Condition",
                  "codeProperty" : "code",
                  "codeComparator" : "in",
                  "type" : "Retrieve",
                  "codes" : {
                     "name" : "SNOMED Value Set for Adult Rheumatoid Arthritis",
                     "type" : "ValueSetRef"
                  }
               } ]
            }
         }, {
            "name" : "InflammatoryBowelDiseaseOrRheumatoidArthritisDiagnoses",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "type" : "Union",
               "operand" : [ {
                  "name" : "InflammatoryBowelDisease",
                  "type" : "ExpressionRef"
               }, {
                  "name" : "RheumatoidArthritisDiagnoses",
                  "type" : "ExpressionRef"
               } ]
            }
         }, {
            "name" : "ImmunosuppressantMedicationRequests",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "name" : "CompletedMedicationRequest",
               "libraryName" : "Common",
               "type" : "FunctionRef",
               "operand" : [ {
                  "name" : "MedicationRequestLookBack",
                  "libraryName" : "C3F",
                  "type" : "FunctionRef",
                  "operand" : [ {
                     "dataType" : "{http://hl7.org/fhir}MedicationRequest",
                     "templateId" : "http://hl7.org/fhir/StructureDefinition/MedicationRequest",
                     "codeProperty" : "medication",
                     "codeComparator" : "in",
                     "type" : "Retrieve",
                     "codes" : {
                        "name" : "Immunosuppressant medications for inflammatory bowel disease or rheumatoid arthritis",
                        "type" : "ValueSetRef"
                     }
                  }, {
                     "name" : "MedicationLookbackPeriod",
                     "type" : "ParameterRef"
                  } ]
               } ]
            }
         }, {
            "name" : "ImmunosuppressantMedicationDispenses",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "name" : "CompletedMedicationDispense",
               "libraryName" : "Common",
               "type" : "FunctionRef",
               "operand" : [ {
                  "name" : "MedicationDispenseLookBack",
                  "libraryName" : "C3F",
                  "type" : "FunctionRef",
                  "operand" : [ {
                     "dataType" : "{http://hl7.org/fhir}MedicationDispense",
                     "templateId" : "http://hl7.org/fhir/StructureDefinition/MedicationDispense",
                     "codeProperty" : "medication",
                     "codeComparator" : "in",
                     "type" : "Retrieve",
                     "codes" : {
                        "name" : "Immunosuppressant medications for inflammatory bowel disease or rheumatoid arthritis",
                        "type" : "ValueSetRef"
                     }
                  }, {
                     "name" : "MedicationLookbackPeriod",
                     "type" : "ParameterRef"
                  } ]
               } ]
            }
         }, {
            "name" : "ImmunosuppressantMedicationAdministrations",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "name" : "CompletedMedicationAdministration",
               "libraryName" : "Common",
               "type" : "FunctionRef",
               "operand" : [ {
                  "name" : "LookBack",
                  "libraryName" : "Common",
                  "type" : "FunctionRef",
                  "operand" : [ {
                     "dataType" : "{http://hl7.org/fhir}MedicationAdministration",
                     "templateId" : "http://hl7.org/fhir/StructureDefinition/MedicationAdministration",
                     "codeProperty" : "medication",
                     "codeComparator" : "in",
                     "type" : "Retrieve",
                     "codes" : {
                        "name" : "Immunosuppressant medications for inflammatory bowel disease or rheumatoid arthritis",
                        "type" : "ValueSetRef"
                     }
                  }, {
                     "name" : "MedicationLookbackPeriod",
                     "type" : "ParameterRef"
                  } ]
               } ]
            }
         }, {
            "name" : "ImmunosuppressantMedicationStatements",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "name" : "ActiveMedicationStatement",
               "libraryName" : "C3F",
               "type" : "FunctionRef",
               "operand" : [ {
                  "name" : "MedicationStatementLookBack",
                  "libraryName" : "C3F",
                  "type" : "FunctionRef",
                  "operand" : [ {
                     "dataType" : "{http://hl7.org/fhir}MedicationStatement",
                     "templateId" : "http://hl7.org/fhir/StructureDefinition/MedicationStatement",
                     "codeProperty" : "medication",
                     "codeComparator" : "in",
                     "type" : "Retrieve",
                     "codes" : {
                        "name" : "Immunosuppressant medications for inflammatory bowel disease or rheumatoid arthritis",
                        "type" : "ValueSetRef"
                     }
                  }, {
                     "name" : "MedicationLookbackPeriod",
                     "type" : "ParameterRef"
                  } ]
               } ]
            }
         }, {
            "name" : "OnImmunosuppressant",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "type" : "Or",
               "operand" : [ {
                  "type" : "Or",
                  "operand" : [ {
                     "type" : "Or",
                     "operand" : [ {
                        "type" : "Exists",
                        "operand" : {
                           "name" : "ImmunosuppressantMedicationRequests",
                           "type" : "ExpressionRef"
                        }
                     }, {
                        "type" : "Exists",
                        "operand" : {
                           "name" : "ImmunosuppressantMedicationDispenses",
                           "type" : "ExpressionRef"
                        }
                     } ]
                  }, {
                     "type" : "Exists",
                     "operand" : {
                        "name" : "ImmunosuppressantMedicationAdministrations",
                        "type" : "ExpressionRef"
                     }
                  } ]
               }, {
                  "type" : "Exists",
                  "operand" : {
                     "name" : "ImmunosuppressantMedicationStatements",
                     "type" : "ExpressionRef"
                  }
               } ]
            }
         }, {
            "name" : "InflammatoryBowelDiseaseOrRheumatoidArthritisDiagnosesAndOnImmunosuppressant",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "type" : "If",
               "condition" : {
                  "asType" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "type" : "As",
                  "operand" : {
                     "name" : "OnImmunosuppressant",
                     "type" : "ExpressionRef"
                  }
               },
               "then" : {
                  "name" : "InflammatoryBowelDiseaseOrRheumatoidArthritisDiagnoses",
                  "type" : "ExpressionRef"
               },
               "else" : {
                  "type" : "As",
                  "operand" : {
                     "type" : "Null"
                  },
                  "asTypeSpecifier" : {
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "name" : "{http://hl7.org/fhir}Condition",
                        "type" : "NamedTypeSpecifier"
                     }
                  }
               }
            }
         }, {
            "name" : "ChronicGraftVersusHostDiseaseDiagnoses",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "type" : "Union",
               "operand" : [ {
                  "type" : "Union",
                  "operand" : [ {
                     "dataType" : "{http://hl7.org/fhir}Condition",
                     "templateId" : "http://hl7.org/fhir/StructureDefinition/Condition",
                     "codeProperty" : "code",
                     "codeComparator" : "in",
                     "type" : "Retrieve",
                     "codes" : {
                        "name" : "Chronic Graft versus Host Disease",
                        "type" : "ValueSetRef"
                     }
                  }, {
                     "dataType" : "{http://hl7.org/fhir}Condition",
                     "templateId" : "http://hl7.org/fhir/StructureDefinition/Condition",
                     "codeProperty" : "code",
                     "codeComparator" : "~",
                     "type" : "Retrieve",
                     "codes" : {
                        "type" : "ToList",
                        "operand" : {
                           "name" : "Chronic GvHD ICD-9 Code",
                           "type" : "CodeRef"
                        }
                     }
                  } ]
               }, {
                  "dataType" : "{http://hl7.org/fhir}Condition",
                  "templateId" : "http://hl7.org/fhir/StructureDefinition/Condition",
                  "codeProperty" : "code",
                  "codeComparator" : "~",
                  "type" : "Retrieve",
                  "codes" : {
                     "type" : "ToList",
                     "operand" : {
                        "name" : "Chronic GvHD ICD-10 Code",
                        "type" : "CodeRef"
                     }
                  }
               } ]
            }
         }, {
            "name" : "HematopoieticStemCellTransplantProcedures",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "name" : "Completed",
               "libraryName" : "C3F",
               "type" : "FunctionRef",
               "operand" : [ {
                  "type" : "Union",
                  "operand" : [ {
                     "dataType" : "{http://hl7.org/fhir}Procedure",
                     "templateId" : "http://hl7.org/fhir/StructureDefinition/Procedure",
                     "codeProperty" : "code",
                     "codeComparator" : "in",
                     "type" : "Retrieve",
                     "codes" : {
                        "name" : "Hematopoietic Stem Cell Transplant Procedures",
                        "type" : "ValueSetRef"
                     }
                  }, {
                     "dataType" : "{http://hl7.org/fhir}Procedure",
                     "templateId" : "http://hl7.org/fhir/StructureDefinition/Procedure",
                     "codeProperty" : "code",
                     "codeComparator" : "in",
                     "type" : "Retrieve",
                     "codes" : {
                        "name" : "SNOMED Value Set for Hemopoietic Stem Cell Transplantation",
                        "type" : "ValueSetRef"
                     }
                  } ]
               } ]
            }
         }, {
            "name" : "DateOfFirstHematopoieticStemCellTransplantProcedure",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "name" : "DateOfFirstProcedure",
               "libraryName" : "Common",
               "type" : "FunctionRef",
               "operand" : [ {
                  "name" : "HematopoieticStemCellTransplantProcedures",
                  "type" : "ExpressionRef"
               } ]
            }
         }, {
            "name" : "ChronicGraftVersusHostDiseaseDiagnosesAfterStemCell",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "type" : "Query",
               "source" : [ {
                  "alias" : "C",
                  "expression" : {
                     "name" : "ChronicGraftVersusHostDiseaseDiagnoses",
                     "type" : "ExpressionRef"
                  }
               } ],
               "relationship" : [ ],
               "where" : {
                  "type" : "After",
                  "operand" : [ {
                     "name" : "ConditionDate",
                     "libraryName" : "Common",
                     "type" : "FunctionRef",
                     "operand" : [ {
                        "name" : "C",
                        "type" : "AliasRef"
                     } ]
                  }, {
                     "name" : "DateOfFirstHematopoieticStemCellTransplantProcedure",
                     "type" : "ExpressionRef"
                  } ]
               }
            }
         }, {
            "name" : "GenitalGraftVersusHostDiseaseDiagnoses",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "dataType" : "{http://hl7.org/fhir}Condition",
               "templateId" : "http://hl7.org/fhir/StructureDefinition/Condition",
               "codeProperty" : "code",
               "codeComparator" : "~",
               "type" : "Retrieve",
               "codes" : {
                  "type" : "ToList",
                  "operand" : {
                     "name" : "Diagnosis of Genital GvHD",
                     "type" : "CodeRef"
                  }
               }
            }
         }, {
            "name" : "GenitalGraftVersusHostDiseaseDiagnosesAfterStemCell",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "type" : "Query",
               "source" : [ {
                  "alias" : "C",
                  "expression" : {
                     "name" : "GenitalGraftVersusHostDiseaseDiagnoses",
                     "type" : "ExpressionRef"
                  }
               } ],
               "relationship" : [ ],
               "where" : {
                  "type" : "After",
                  "operand" : [ {
                     "name" : "ConditionDate",
                     "libraryName" : "Common",
                     "type" : "FunctionRef",
                     "operand" : [ {
                        "name" : "C",
                        "type" : "AliasRef"
                     } ]
                  }, {
                     "name" : "DateOfFirstHematopoieticStemCellTransplantProcedure",
                     "type" : "ExpressionRef"
                  } ]
               }
            }
         }, {
            "name" : "ImmunocompromisedConditions",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "type" : "Union",
               "operand" : [ {
                  "type" : "Union",
                  "operand" : [ {
                     "type" : "Union",
                     "operand" : [ {
                        "type" : "Union",
                        "operand" : [ {
                           "name" : "HivDiagnoses",
                           "type" : "ExpressionRef"
                        }, {
                           "name" : "SolidOrganTransplantDiagnoses",
                           "type" : "ExpressionRef"
                        } ]
                     }, {
                        "type" : "Union",
                        "operand" : [ {
                           "name" : "SystemicLupusErythematosusDiagnoses",
                           "type" : "ExpressionRef"
                        }, {
                           "name" : "HematopoieticStemCellTransplantDiagnoses",
                           "type" : "ExpressionRef"
                        } ]
                     } ]
                  }, {
                     "type" : "Union",
                     "operand" : [ {
                        "name" : "InflammatoryBowelDisease",
                        "type" : "ExpressionRef"
                     }, {
                        "name" : "RheumatoidArthritisDiagnoses",
                        "type" : "ExpressionRef"
                     } ]
                  } ]
               }, {
                  "type" : "Union",
                  "operand" : [ {
                     "name" : "ChronicGraftVersusHostDiseaseDiagnoses",
                     "type" : "ExpressionRef"
                  }, {
                     "name" : "GenitalGraftVersusHostDiseaseDiagnoses",
                     "type" : "ExpressionRef"
                  } ]
               } ]
            }
         }, {
            "name" : "AbnormalUterineOrVaginalBleedingDiagnoses",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "dataType" : "{http://hl7.org/fhir}Condition",
               "templateId" : "http://hl7.org/fhir/StructureDefinition/Condition",
               "codeProperty" : "code",
               "codeComparator" : "in",
               "type" : "Retrieve",
               "codes" : {
                  "name" : "Abnormal Uterine or Vaginal Bleeding Disorders",
                  "type" : "ValueSetRef"
               }
            }
         }, {
            "name" : "PertinentConditions",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "type" : "Union",
               "operand" : [ {
                  "type" : "Union",
                  "operand" : [ {
                     "type" : "Union",
                     "operand" : [ {
                        "type" : "Union",
                        "operand" : [ {
                           "name" : "CervicalCancerDiagnoses",
                           "type" : "ExpressionRef"
                        }, {
                           "name" : "CervicalPrecancerDisorders",
                           "type" : "ExpressionRef"
                        } ]
                     }, {
                        "type" : "Union",
                        "operand" : [ {
                           "name" : "DesExposureDiagnoses",
                           "type" : "ExpressionRef"
                        }, {
                           "name" : "AbsenceOfCervixDiagnoses",
                           "type" : "ExpressionRef"
                        } ]
                     } ]
                  }, {
                     "type" : "Union",
                     "operand" : [ {
                        "name" : "PregnancyDiagnoses",
                        "type" : "ExpressionRef"
                     }, {
                        "name" : "ImmunocompromisedConditions",
                        "type" : "ExpressionRef"
                     } ]
                  } ]
               }, {
                  "name" : "AbnormalUterineOrVaginalBleedingDiagnoses",
                  "type" : "ExpressionRef"
               } ]
            }
         }, {
            "name" : "PertinentConditionsSummary",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "type" : "Query",
               "source" : [ {
                  "alias" : "C",
                  "expression" : {
                     "name" : "PertinentConditions",
                     "type" : "ExpressionRef"
                  }
               } ],
               "relationship" : [ ],
               "return" : {
                  "expression" : {
                     "type" : "Tuple",
                     "element" : [ {
                        "name" : "name",
                        "value" : {
                           "name" : "ConceptText",
                           "libraryName" : "Common",
                           "type" : "FunctionRef",
                           "operand" : [ {
                              "path" : "code",
                              "scope" : "C",
                              "type" : "Property"
                           } ]
                        }
                     }, {
                        "name" : "value",
                        "value" : {
                           "path" : "value",
                           "type" : "Property",
                           "source" : {
                              "path" : "code",
                              "type" : "Property",
                              "source" : {
                                 "type" : "Indexer",
                                 "operand" : [ {
                                    "path" : "coding",
                                    "type" : "Property",
                                    "source" : {
                                       "path" : "clinicalStatus",
                                       "scope" : "C",
                                       "type" : "Property"
                                    }
                                 }, {
                                    "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                                    "value" : "0",
                                    "type" : "Literal"
                                 } ]
                              }
                           }
                        }
                     }, {
                        "name" : "date",
                        "value" : {
                           "name" : "DateTimeText",
                           "libraryName" : "Common",
                           "type" : "FunctionRef",
                           "operand" : [ {
                              "type" : "Coalesce",
                              "operand" : [ {
                                 "strict" : false,
                                 "type" : "As",
                                 "operand" : {
                                    "path" : "onset",
                                    "scope" : "C",
                                    "type" : "Property"
                                 },
                                 "asTypeSpecifier" : {
                                    "name" : "{http://hl7.org/fhir}dateTime",
                                    "type" : "NamedTypeSpecifier"
                                 }
                              }, {
                                 "path" : "recordedDate",
                                 "scope" : "C",
                                 "type" : "Property"
                              } ]
                           } ]
                        }
                     }, {
                        "name" : "reference",
                        "value" : {
                           "type" : "Concatenate",
                           "operand" : [ {
                              "valueType" : "{urn:hl7-org:elm-types:r1}String",
                              "value" : "Condition/",
                              "type" : "Literal"
                           }, {
                              "name" : "ToString",
                              "libraryName" : "FHIRHelpers",
                              "type" : "FunctionRef",
                              "operand" : [ {
                                 "path" : "id",
                                 "scope" : "C",
                                 "type" : "Property"
                              } ]
                           } ]
                        }
                     } ]
                  }
               },
               "sort" : {
                  "by" : [ {
                     "direction" : "desc",
                     "type" : "ByExpression",
                     "expression" : {
                        "strict" : false,
                        "type" : "As",
                        "operand" : {
                           "name" : "date",
                           "type" : "IdentifierRef"
                        },
                        "asTypeSpecifier" : {
                           "name" : "{urn:hl7-org:elm-types:r1}String",
                           "type" : "NamedTypeSpecifier"
                        }
                     }
                  } ]
               }
            }
         }, {
            "name" : "AbnormalUterineOrVaginalBleedingObservations",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "name" : "ObservationLookBack",
               "libraryName" : "C3F",
               "type" : "FunctionRef",
               "operand" : [ {
                  "name" : "Verified",
                  "libraryName" : "C3F",
                  "type" : "FunctionRef",
                  "operand" : [ {
                     "dataType" : "{http://hl7.org/fhir}Observation",
                     "templateId" : "http://hl7.org/fhir/StructureDefinition/Observation",
                     "codeProperty" : "code",
                     "codeComparator" : "in",
                     "type" : "Retrieve",
                     "codes" : {
                        "name" : "Abnormal Uterine or Vaginal Bleeding Findings",
                        "type" : "ValueSetRef"
                     }
                  } ]
               }, {
                  "value" : 12,
                  "unit" : "months",
                  "type" : "Quantity"
               } ]
            }
         }, {
            "name" : "CervicalOrVaginalLesionObservations",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "name" : "ObservationLookBack",
               "libraryName" : "C3F",
               "type" : "FunctionRef",
               "operand" : [ {
                  "name" : "Verified",
                  "libraryName" : "C3F",
                  "type" : "FunctionRef",
                  "operand" : [ {
                     "dataType" : "{http://hl7.org/fhir}Observation",
                     "templateId" : "http://hl7.org/fhir/StructureDefinition/Observation",
                     "codeProperty" : "code",
                     "codeComparator" : "in",
                     "type" : "Retrieve",
                     "codes" : {
                        "name" : "Cervical and/or Vaginal Lesion Findings",
                        "type" : "ValueSetRef"
                     }
                  } ]
               }, {
                  "value" : 12,
                  "unit" : "months",
                  "type" : "Quantity"
               } ]
            }
         }, {
            "name" : "PregnancyObservations",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "name" : "ObservationLookBack",
               "libraryName" : "C3F",
               "type" : "FunctionRef",
               "operand" : [ {
                  "name" : "Verified",
                  "libraryName" : "C3F",
                  "type" : "FunctionRef",
                  "operand" : [ {
                     "type" : "Query",
                     "source" : [ {
                        "alias" : "P",
                        "expression" : {
                           "dataType" : "{http://hl7.org/fhir}Observation",
                           "templateId" : "http://hl7.org/fhir/StructureDefinition/Observation",
                           "codeProperty" : "code",
                           "codeComparator" : "~",
                           "type" : "Retrieve",
                           "codes" : {
                              "type" : "ToList",
                              "operand" : {
                                 "name" : "Pregnancy Status",
                                 "type" : "CodeRef"
                              }
                           }
                        }
                     } ],
                     "relationship" : [ ],
                     "where" : {
                        "type" : "Equivalent",
                        "operand" : [ {
                           "name" : "ToConcept",
                           "libraryName" : "FHIRHelpers",
                           "type" : "FunctionRef",
                           "operand" : [ {
                              "asType" : "{http://hl7.org/fhir}CodeableConcept",
                              "type" : "As",
                              "operand" : {
                                 "path" : "value",
                                 "scope" : "P",
                                 "type" : "Property"
                              }
                           } ]
                        }, {
                           "type" : "ToConcept",
                           "operand" : {
                              "name" : "Patient currently pregnant",
                              "type" : "CodeRef"
                           }
                        } ]
                     }
                  } ]
               }, {
                  "value" : 42,
                  "unit" : "weeks",
                  "type" : "Quantity"
               } ]
            }
         }, {
            "name" : "DesExposureObservations",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "name" : "Verified",
               "libraryName" : "C3F",
               "type" : "FunctionRef",
               "operand" : [ {
                  "dataType" : "{http://hl7.org/fhir}Observation",
                  "templateId" : "http://hl7.org/fhir/StructureDefinition/Observation",
                  "codeProperty" : "code",
                  "codeComparator" : "~",
                  "type" : "Retrieve",
                  "codes" : {
                     "type" : "ToList",
                     "operand" : {
                        "name" : "In utero exposure to DES",
                        "type" : "CodeRef"
                     }
                  }
               } ]
            }
         }, {
            "name" : "AbsenceOfCervixObservations",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "name" : "Verified",
               "libraryName" : "C3F",
               "type" : "FunctionRef",
               "operand" : [ {
                  "dataType" : "{http://hl7.org/fhir}Observation",
                  "templateId" : "http://hl7.org/fhir/StructureDefinition/Observation",
                  "codeProperty" : "code",
                  "codeComparator" : "in",
                  "type" : "Retrieve",
                  "codes" : {
                     "name" : "Absence of cervix observation",
                     "type" : "ValueSetRef"
                  }
               } ]
            }
         }, {
            "name" : "ResponsesToAbnormalBleedingQuestion",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "name" : "ObservationLookBack",
               "libraryName" : "C3F",
               "type" : "FunctionRef",
               "operand" : [ {
                  "dataType" : "{http://hl7.org/fhir}Observation",
                  "templateId" : "http://hl7.org/fhir/StructureDefinition/Observation",
                  "codeProperty" : "code",
                  "codeComparator" : "~",
                  "type" : "Retrieve",
                  "codes" : {
                     "type" : "ToList",
                     "operand" : {
                        "name" : "Abnormal Uterine or Vaginal Bleeding Question",
                        "type" : "CodeRef"
                     }
                  }
               }, {
                  "value" : 12,
                  "unit" : "months",
                  "type" : "Quantity"
               } ]
            }
         }, {
            "name" : "ResponsesToVisibleLesionQuestion",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "name" : "ObservationLookBack",
               "libraryName" : "C3F",
               "type" : "FunctionRef",
               "operand" : [ {
                  "dataType" : "{http://hl7.org/fhir}Observation",
                  "templateId" : "http://hl7.org/fhir/StructureDefinition/Observation",
                  "codeProperty" : "code",
                  "codeComparator" : "~",
                  "type" : "Retrieve",
                  "codes" : {
                     "type" : "ToList",
                     "operand" : {
                        "name" : "Visible Uterine or Vaginal Lesion Question",
                        "type" : "CodeRef"
                     }
                  }
               }, {
                  "value" : 12,
                  "unit" : "months",
                  "type" : "Quantity"
               } ]
            }
         }, {
            "name" : "ResponsesToDesExposureQuestion",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "dataType" : "{http://hl7.org/fhir}Observation",
               "templateId" : "http://hl7.org/fhir/StructureDefinition/Observation",
               "codeProperty" : "code",
               "codeComparator" : "~",
               "type" : "Retrieve",
               "codes" : {
                  "type" : "ToList",
                  "operand" : {
                     "name" : "DES Exposure Question",
                     "type" : "CodeRef"
                  }
               }
            }
         }, {
            "name" : "ResponsesToFuturePregnancyConcernsQuestion",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "name" : "ObservationLookBack",
               "libraryName" : "C3F",
               "type" : "FunctionRef",
               "operand" : [ {
                  "dataType" : "{http://hl7.org/fhir}Observation",
                  "templateId" : "http://hl7.org/fhir/StructureDefinition/Observation",
                  "codeProperty" : "code",
                  "codeComparator" : "~",
                  "type" : "Retrieve",
                  "codes" : {
                     "type" : "ToList",
                     "operand" : {
                        "name" : "Future Pregnancy Concerns Question",
                        "type" : "CodeRef"
                     }
                  }
               }, {
                  "value" : 12,
                  "unit" : "months",
                  "type" : "Quantity"
               } ]
            }
         }, {
            "name" : "PertinentObservations",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "type" : "Union",
               "operand" : [ {
                  "type" : "Union",
                  "operand" : [ {
                     "type" : "Union",
                     "operand" : [ {
                        "type" : "Union",
                        "operand" : [ {
                           "type" : "Union",
                           "operand" : [ {
                              "name" : "AbnormalUterineOrVaginalBleedingObservations",
                              "type" : "ExpressionRef"
                           }, {
                              "name" : "CervicalOrVaginalLesionObservations",
                              "type" : "ExpressionRef"
                           } ]
                        }, {
                           "type" : "Union",
                           "operand" : [ {
                              "name" : "PregnancyObservations",
                              "type" : "ExpressionRef"
                           }, {
                              "name" : "DesExposureObservations",
                              "type" : "ExpressionRef"
                           } ]
                        } ]
                     }, {
                        "type" : "Union",
                        "operand" : [ {
                           "name" : "AbsenceOfCervixObservations",
                           "type" : "ExpressionRef"
                        }, {
                           "name" : "ResponsesToAbnormalBleedingQuestion",
                           "type" : "ExpressionRef"
                        } ]
                     } ]
                  }, {
                     "type" : "Union",
                     "operand" : [ {
                        "name" : "ResponsesToVisibleLesionQuestion",
                        "type" : "ExpressionRef"
                     }, {
                        "name" : "ResponsesToDesExposureQuestion",
                        "type" : "ExpressionRef"
                     } ]
                  } ]
               }, {
                  "name" : "ResponsesToFuturePregnancyConcernsQuestion",
                  "type" : "ExpressionRef"
               } ]
            }
         }, {
            "name" : "PertinentObservationsSummary",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "type" : "Query",
               "source" : [ {
                  "alias" : "Obs",
                  "expression" : {
                     "name" : "PertinentObservations",
                     "type" : "ExpressionRef"
                  }
               } ],
               "relationship" : [ ],
               "return" : {
                  "expression" : {
                     "type" : "Tuple",
                     "element" : [ {
                        "name" : "name",
                        "value" : {
                           "name" : "ConceptText",
                           "libraryName" : "Common",
                           "type" : "FunctionRef",
                           "operand" : [ {
                              "path" : "code",
                              "scope" : "Obs",
                              "type" : "Property"
                           } ]
                        }
                     }, {
                        "name" : "value",
                        "value" : {
                           "name" : "ConceptText",
                           "libraryName" : "Common",
                           "type" : "FunctionRef",
                           "operand" : [ {
                              "asType" : "{http://hl7.org/fhir}CodeableConcept",
                              "type" : "As",
                              "operand" : {
                                 "path" : "value",
                                 "scope" : "Obs",
                                 "type" : "Property"
                              }
                           } ]
                        }
                     }, {
                        "name" : "date",
                        "value" : {
                           "name" : "ObservationDateString",
                           "libraryName" : "Common",
                           "type" : "FunctionRef",
                           "operand" : [ {
                              "name" : "Obs",
                              "type" : "AliasRef"
                           } ]
                        }
                     }, {
                        "name" : "reference",
                        "value" : {
                           "type" : "Concatenate",
                           "operand" : [ {
                              "valueType" : "{urn:hl7-org:elm-types:r1}String",
                              "value" : "Observation/",
                              "type" : "Literal"
                           }, {
                              "name" : "ToString",
                              "libraryName" : "FHIRHelpers",
                              "type" : "FunctionRef",
                              "operand" : [ {
                                 "path" : "id",
                                 "scope" : "Obs",
                                 "type" : "Property"
                              } ]
                           } ]
                        }
                     } ]
                  }
               },
               "sort" : {
                  "by" : [ {
                     "direction" : "desc",
                     "type" : "ByExpression",
                     "expression" : {
                        "strict" : false,
                        "type" : "As",
                        "operand" : {
                           "name" : "date",
                           "type" : "IdentifierRef"
                        },
                        "asTypeSpecifier" : {
                           "name" : "{urn:hl7-org:elm-types:r1}String",
                           "type" : "NamedTypeSpecifier"
                        }
                     }
                  } ]
               }
            }
         }, {
            "name" : "PertinentMedicationRequests",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "name" : "ImmunosuppressantMedicationRequests",
               "type" : "ExpressionRef"
            }
         }, {
            "name" : "PertinentMedicationDispenses",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "name" : "ImmunosuppressantMedicationDispenses",
               "type" : "ExpressionRef"
            }
         }, {
            "name" : "PertinentMedicationAdministrations",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "name" : "ImmunosuppressantMedicationAdministrations",
               "type" : "ExpressionRef"
            }
         }, {
            "name" : "PertinentMedicationStatements",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "name" : "ImmunosuppressantMedicationStatements",
               "type" : "ExpressionRef"
            }
         }, {
            "name" : "PertinentMedicationRequestsSummary",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "type" : "Query",
               "source" : [ {
                  "alias" : "M",
                  "expression" : {
                     "name" : "PertinentMedicationRequests",
                     "type" : "ExpressionRef"
                  }
               } ],
               "relationship" : [ ],
               "return" : {
                  "expression" : {
                     "type" : "Tuple",
                     "element" : [ {
                        "name" : "name",
                        "value" : {
                           "name" : "ConceptText",
                           "libraryName" : "Common",
                           "type" : "FunctionRef",
                           "operand" : [ {
                              "strict" : false,
                              "type" : "As",
                              "operand" : {
                                 "path" : "medication",
                                 "scope" : "M",
                                 "type" : "Property"
                              },
                              "asTypeSpecifier" : {
                                 "name" : "{http://hl7.org/fhir}CodeableConcept",
                                 "type" : "NamedTypeSpecifier"
                              }
                           } ]
                        }
                     }, {
                        "name" : "value",
                        "value" : {
                           "path" : "value",
                           "type" : "Property",
                           "source" : {
                              "path" : "status",
                              "scope" : "M",
                              "type" : "Property"
                           }
                        }
                     }, {
                        "name" : "date",
                        "value" : {
                           "name" : "DateTimeText",
                           "libraryName" : "Common",
                           "type" : "FunctionRef",
                           "operand" : [ {
                              "path" : "authoredOn",
                              "scope" : "M",
                              "type" : "Property"
                           } ]
                        }
                     }, {
                        "name" : "reference",
                        "value" : {
                           "type" : "Concatenate",
                           "operand" : [ {
                              "valueType" : "{urn:hl7-org:elm-types:r1}String",
                              "value" : "MedicationRequest/",
                              "type" : "Literal"
                           }, {
                              "name" : "ToString",
                              "libraryName" : "FHIRHelpers",
                              "type" : "FunctionRef",
                              "operand" : [ {
                                 "path" : "id",
                                 "scope" : "M",
                                 "type" : "Property"
                              } ]
                           } ]
                        }
                     } ]
                  }
               },
               "sort" : {
                  "by" : [ {
                     "direction" : "desc",
                     "path" : "date",
                     "type" : "ByColumn"
                  } ]
               }
            }
         }, {
            "name" : "PertinentMedicationDispensesSummary",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "type" : "Query",
               "source" : [ {
                  "alias" : "M",
                  "expression" : {
                     "name" : "PertinentMedicationDispenses",
                     "type" : "ExpressionRef"
                  }
               } ],
               "relationship" : [ ],
               "return" : {
                  "expression" : {
                     "type" : "Tuple",
                     "element" : [ {
                        "name" : "name",
                        "value" : {
                           "name" : "ConceptText",
                           "libraryName" : "Common",
                           "type" : "FunctionRef",
                           "operand" : [ {
                              "strict" : false,
                              "type" : "As",
                              "operand" : {
                                 "path" : "medication",
                                 "scope" : "M",
                                 "type" : "Property"
                              },
                              "asTypeSpecifier" : {
                                 "name" : "{http://hl7.org/fhir}CodeableConcept",
                                 "type" : "NamedTypeSpecifier"
                              }
                           } ]
                        }
                     }, {
                        "name" : "value",
                        "value" : {
                           "path" : "value",
                           "type" : "Property",
                           "source" : {
                              "path" : "status",
                              "scope" : "M",
                              "type" : "Property"
                           }
                        }
                     }, {
                        "name" : "date",
                        "value" : {
                           "type" : "Coalesce",
                           "operand" : [ {
                              "name" : "DateTimeText",
                              "libraryName" : "Common",
                              "type" : "FunctionRef",
                              "operand" : [ {
                                 "path" : "whenHandedOver",
                                 "scope" : "M",
                                 "type" : "Property"
                              } ]
                           }, {
                              "name" : "DateTimeText",
                              "libraryName" : "Common",
                              "type" : "FunctionRef",
                              "operand" : [ {
                                 "path" : "whenPrepared",
                                 "scope" : "M",
                                 "type" : "Property"
                              } ]
                           } ]
                        }
                     }, {
                        "name" : "reference",
                        "value" : {
                           "type" : "Concatenate",
                           "operand" : [ {
                              "valueType" : "{urn:hl7-org:elm-types:r1}String",
                              "value" : "MedicationDispense/",
                              "type" : "Literal"
                           }, {
                              "name" : "ToString",
                              "libraryName" : "FHIRHelpers",
                              "type" : "FunctionRef",
                              "operand" : [ {
                                 "path" : "id",
                                 "scope" : "M",
                                 "type" : "Property"
                              } ]
                           } ]
                        }
                     } ]
                  }
               },
               "sort" : {
                  "by" : [ {
                     "direction" : "desc",
                     "path" : "date",
                     "type" : "ByColumn"
                  } ]
               }
            }
         }, {
            "name" : "PertinentMedicationAdministrationsSummary",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "type" : "Query",
               "source" : [ {
                  "alias" : "M",
                  "expression" : {
                     "name" : "PertinentMedicationAdministrations",
                     "type" : "ExpressionRef"
                  }
               } ],
               "relationship" : [ ],
               "return" : {
                  "expression" : {
                     "type" : "Tuple",
                     "element" : [ {
                        "name" : "name",
                        "value" : {
                           "name" : "ConceptText",
                           "libraryName" : "Common",
                           "type" : "FunctionRef",
                           "operand" : [ {
                              "strict" : false,
                              "type" : "As",
                              "operand" : {
                                 "path" : "medication",
                                 "scope" : "M",
                                 "type" : "Property"
                              },
                              "asTypeSpecifier" : {
                                 "name" : "{http://hl7.org/fhir}CodeableConcept",
                                 "type" : "NamedTypeSpecifier"
                              }
                           } ]
                        }
                     }, {
                        "name" : "value",
                        "value" : {
                           "path" : "value",
                           "type" : "Property",
                           "source" : {
                              "path" : "status",
                              "scope" : "M",
                              "type" : "Property"
                           }
                        }
                     }, {
                        "name" : "date",
                        "value" : {
                           "type" : "Concatenate",
                           "operand" : [ {
                              "type" : "Concatenate",
                              "operand" : [ {
                                 "name" : "DateTimeText",
                                 "libraryName" : "Common",
                                 "type" : "FunctionRef",
                                 "operand" : [ {
                                    "path" : "start",
                                    "type" : "Property",
                                    "source" : {
                                       "strict" : false,
                                       "type" : "As",
                                       "operand" : {
                                          "path" : "effective",
                                          "scope" : "M",
                                          "type" : "Property"
                                       },
                                       "asTypeSpecifier" : {
                                          "name" : "{http://hl7.org/fhir}Period",
                                          "type" : "NamedTypeSpecifier"
                                       }
                                    }
                                 } ]
                              }, {
                                 "valueType" : "{urn:hl7-org:elm-types:r1}String",
                                 "value" : " to ",
                                 "type" : "Literal"
                              } ]
                           }, {
                              "name" : "DateTimeText",
                              "libraryName" : "Common",
                              "type" : "FunctionRef",
                              "operand" : [ {
                                 "path" : "end",
                                 "type" : "Property",
                                 "source" : {
                                    "strict" : false,
                                    "type" : "As",
                                    "operand" : {
                                       "path" : "effective",
                                       "scope" : "M",
                                       "type" : "Property"
                                    },
                                    "asTypeSpecifier" : {
                                       "name" : "{http://hl7.org/fhir}Period",
                                       "type" : "NamedTypeSpecifier"
                                    }
                                 }
                              } ]
                           } ]
                        }
                     }, {
                        "name" : "reference",
                        "value" : {
                           "type" : "Concatenate",
                           "operand" : [ {
                              "valueType" : "{urn:hl7-org:elm-types:r1}String",
                              "value" : "MedicationAdministration/",
                              "type" : "Literal"
                           }, {
                              "name" : "ToString",
                              "libraryName" : "FHIRHelpers",
                              "type" : "FunctionRef",
                              "operand" : [ {
                                 "path" : "id",
                                 "scope" : "M",
                                 "type" : "Property"
                              } ]
                           } ]
                        }
                     } ]
                  }
               },
               "sort" : {
                  "by" : [ {
                     "direction" : "desc",
                     "path" : "date",
                     "type" : "ByColumn"
                  } ]
               }
            }
         }, {
            "name" : "PertinentMedicationStatementsSummary",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "type" : "Query",
               "source" : [ {
                  "alias" : "M",
                  "expression" : {
                     "name" : "PertinentMedicationStatements",
                     "type" : "ExpressionRef"
                  }
               } ],
               "relationship" : [ ],
               "return" : {
                  "expression" : {
                     "type" : "Tuple",
                     "element" : [ {
                        "name" : "name",
                        "value" : {
                           "name" : "ConceptText",
                           "libraryName" : "Common",
                           "type" : "FunctionRef",
                           "operand" : [ {
                              "strict" : false,
                              "type" : "As",
                              "operand" : {
                                 "path" : "medication",
                                 "scope" : "M",
                                 "type" : "Property"
                              },
                              "asTypeSpecifier" : {
                                 "name" : "{http://hl7.org/fhir}CodeableConcept",
                                 "type" : "NamedTypeSpecifier"
                              }
                           } ]
                        }
                     }, {
                        "name" : "value",
                        "value" : {
                           "path" : "value",
                           "type" : "Property",
                           "source" : {
                              "path" : "status",
                              "scope" : "M",
                              "type" : "Property"
                           }
                        }
                     }, {
                        "name" : "date",
                        "value" : {
                           "type" : "Concatenate",
                           "operand" : [ {
                              "type" : "Concatenate",
                              "operand" : [ {
                                 "name" : "DateTimeText",
                                 "libraryName" : "Common",
                                 "type" : "FunctionRef",
                                 "operand" : [ {
                                    "path" : "start",
                                    "type" : "Property",
                                    "source" : {
                                       "strict" : false,
                                       "type" : "As",
                                       "operand" : {
                                          "path" : "effective",
                                          "scope" : "M",
                                          "type" : "Property"
                                       },
                                       "asTypeSpecifier" : {
                                          "name" : "{http://hl7.org/fhir}Period",
                                          "type" : "NamedTypeSpecifier"
                                       }
                                    }
                                 } ]
                              }, {
                                 "valueType" : "{urn:hl7-org:elm-types:r1}String",
                                 "value" : " to ",
                                 "type" : "Literal"
                              } ]
                           }, {
                              "name" : "DateTimeText",
                              "libraryName" : "Common",
                              "type" : "FunctionRef",
                              "operand" : [ {
                                 "path" : "end",
                                 "type" : "Property",
                                 "source" : {
                                    "strict" : false,
                                    "type" : "As",
                                    "operand" : {
                                       "path" : "effective",
                                       "scope" : "M",
                                       "type" : "Property"
                                    },
                                    "asTypeSpecifier" : {
                                       "name" : "{http://hl7.org/fhir}Period",
                                       "type" : "NamedTypeSpecifier"
                                    }
                                 }
                              } ]
                           } ]
                        }
                     }, {
                        "name" : "reference",
                        "value" : {
                           "type" : "Concatenate",
                           "operand" : [ {
                              "valueType" : "{urn:hl7-org:elm-types:r1}String",
                              "value" : "MedicationStatement/",
                              "type" : "Literal"
                           }, {
                              "name" : "ToString",
                              "libraryName" : "FHIRHelpers",
                              "type" : "FunctionRef",
                              "operand" : [ {
                                 "path" : "id",
                                 "scope" : "M",
                                 "type" : "Property"
                              } ]
                           } ]
                        }
                     } ]
                  }
               },
               "sort" : {
                  "by" : [ {
                     "direction" : "desc",
                     "path" : "date",
                     "type" : "ByColumn"
                  } ]
               }
            }
         }, {
            "name" : "PertinentMedicationsSummary",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "type" : "Query",
               "source" : [ {
                  "alias" : "M",
                  "expression" : {
                     "type" : "Union",
                     "operand" : [ {
                        "type" : "Union",
                        "operand" : [ {
                           "name" : "PertinentMedicationRequestsSummary",
                           "type" : "ExpressionRef"
                        }, {
                           "name" : "PertinentMedicationDispensesSummary",
                           "type" : "ExpressionRef"
                        } ]
                     }, {
                        "type" : "Union",
                        "operand" : [ {
                           "name" : "PertinentMedicationAdministrationsSummary",
                           "type" : "ExpressionRef"
                        }, {
                           "name" : "PertinentMedicationStatementsSummary",
                           "type" : "ExpressionRef"
                        } ]
                     } ]
                  }
               } ],
               "relationship" : [ ],
               "sort" : {
                  "by" : [ {
                     "direction" : "desc",
                     "path" : "date",
                     "type" : "ByColumn"
                  } ]
               }
            }
         }, {
            "name" : "SolidOrganTransplantProcedures",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "name" : "Completed",
               "libraryName" : "C3F",
               "type" : "FunctionRef",
               "operand" : [ {
                  "type" : "Union",
                  "operand" : [ {
                     "dataType" : "{http://hl7.org/fhir}Procedure",
                     "templateId" : "http://hl7.org/fhir/StructureDefinition/Procedure",
                     "codeProperty" : "code",
                     "codeComparator" : "in",
                     "type" : "Retrieve",
                     "codes" : {
                        "name" : "Solid Organ Transplant Procedure Codes",
                        "type" : "ValueSetRef"
                     }
                  }, {
                     "dataType" : "{http://hl7.org/fhir}Procedure",
                     "templateId" : "http://hl7.org/fhir/StructureDefinition/Procedure",
                     "codeProperty" : "code",
                     "codeComparator" : "in",
                     "type" : "Retrieve",
                     "codes" : {
                        "name" : "Kidney Transplant",
                        "type" : "ValueSetRef"
                     }
                  } ]
               } ]
            }
         }, {
            "name" : "ImmunocompromisedProcedures",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "type" : "Union",
               "operand" : [ {
                  "name" : "HematopoieticStemCellTransplantProcedures",
                  "type" : "ExpressionRef"
               }, {
                  "name" : "SolidOrganTransplantProcedures",
                  "type" : "ExpressionRef"
               } ]
            }
         }, {
            "name" : "ColposcopyProcedures",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "name" : "Completed",
               "libraryName" : "C3F",
               "type" : "FunctionRef",
               "operand" : [ {
                  "type" : "Union",
                  "operand" : [ {
                     "dataType" : "{http://hl7.org/fhir}Procedure",
                     "templateId" : "http://hl7.org/fhir/StructureDefinition/Procedure",
                     "codeProperty" : "code",
                     "codeComparator" : "in",
                     "type" : "Retrieve",
                     "codes" : {
                        "name" : "Colposcopy procedure",
                        "type" : "ValueSetRef"
                     }
                  }, {
                     "dataType" : "{http://hl7.org/fhir}Procedure",
                     "templateId" : "http://hl7.org/fhir/StructureDefinition/Procedure",
                     "codeProperty" : "code",
                     "codeComparator" : "in",
                     "type" : "Retrieve",
                     "codes" : {
                        "name" : "Surgery Female Genital System Cervix Uteri",
                        "type" : "ValueSetRef"
                     }
                  } ]
               } ]
            }
         }, {
            "name" : "CervicalExcisionProcedures",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "name" : "Completed",
               "libraryName" : "C3F",
               "type" : "FunctionRef",
               "operand" : [ {
                  "dataType" : "{http://hl7.org/fhir}Procedure",
                  "templateId" : "http://hl7.org/fhir/StructureDefinition/Procedure",
                  "codeProperty" : "code",
                  "codeComparator" : "in",
                  "type" : "Retrieve",
                  "codes" : {
                     "name" : "Cervical Excision Procedures",
                     "type" : "ValueSetRef"
                  }
               } ]
            }
         }, {
            "name" : "CervicalAblationProcedures",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "name" : "Completed",
               "libraryName" : "C3F",
               "type" : "FunctionRef",
               "operand" : [ {
                  "dataType" : "{http://hl7.org/fhir}Procedure",
                  "templateId" : "http://hl7.org/fhir/StructureDefinition/Procedure",
                  "codeProperty" : "code",
                  "codeComparator" : "in",
                  "type" : "Retrieve",
                  "codes" : {
                     "name" : "Cervical Ablation Procedures",
                     "type" : "ValueSetRef"
                  }
               } ]
            }
         }, {
            "name" : "RemovalOfCervixProcedures",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "name" : "Completed",
               "libraryName" : "C3F",
               "type" : "FunctionRef",
               "operand" : [ {
                  "dataType" : "{http://hl7.org/fhir}Procedure",
                  "templateId" : "http://hl7.org/fhir/StructureDefinition/Procedure",
                  "codeProperty" : "code",
                  "codeComparator" : "in",
                  "type" : "Retrieve",
                  "codes" : {
                     "name" : "Removal of Cervix Procedures",
                     "type" : "ValueSetRef"
                  }
               } ]
            }
         }, {
            "name" : "PertinentProcedures",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "type" : "Union",
               "operand" : [ {
                  "type" : "Union",
                  "operand" : [ {
                     "type" : "Query",
                     "source" : [ {
                        "alias" : "ColposcopyProcedures",
                        "expression" : {
                           "name" : "ImmunocompromisedProcedures",
                           "type" : "ExpressionRef"
                        }
                     } ],
                     "relationship" : [ ]
                  }, {
                     "name" : "CervicalExcisionProcedures",
                     "type" : "ExpressionRef"
                  } ]
               }, {
                  "type" : "Union",
                  "operand" : [ {
                     "name" : "CervicalAblationProcedures",
                     "type" : "ExpressionRef"
                  }, {
                     "name" : "RemovalOfCervixProcedures",
                     "type" : "ExpressionRef"
                  } ]
               } ]
            }
         }, {
            "name" : "PertinentProceduresSummary",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "type" : "Query",
               "source" : [ {
                  "alias" : "P",
                  "expression" : {
                     "name" : "PertinentProcedures",
                     "type" : "ExpressionRef"
                  }
               } ],
               "relationship" : [ ],
               "return" : {
                  "expression" : {
                     "type" : "Tuple",
                     "element" : [ {
                        "name" : "name",
                        "value" : {
                           "name" : "ConceptText",
                           "libraryName" : "Common",
                           "type" : "FunctionRef",
                           "operand" : [ {
                              "path" : "code",
                              "scope" : "P",
                              "type" : "Property"
                           } ]
                        }
                     }, {
                        "name" : "value",
                        "value" : {
                           "path" : "value",
                           "type" : "Property",
                           "source" : {
                              "path" : "status",
                              "scope" : "P",
                              "type" : "Property"
                           }
                        }
                     }, {
                        "name" : "date",
                        "value" : {
                           "name" : "ProcedureDateString",
                           "libraryName" : "Common",
                           "type" : "FunctionRef",
                           "operand" : [ {
                              "name" : "P",
                              "type" : "AliasRef"
                           } ]
                        }
                     }, {
                        "name" : "reference",
                        "value" : {
                           "type" : "Concatenate",
                           "operand" : [ {
                              "valueType" : "{urn:hl7-org:elm-types:r1}String",
                              "value" : "Procedure/",
                              "type" : "Literal"
                           }, {
                              "name" : "ToString",
                              "libraryName" : "FHIRHelpers",
                              "type" : "FunctionRef",
                              "operand" : [ {
                                 "path" : "id",
                                 "scope" : "P",
                                 "type" : "Property"
                              } ]
                           } ]
                        }
                     } ]
                  }
               }
            }
         }, {
            "name" : "HpvDiagnosticReports",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "name" : "CompletedDiagnosticReport",
               "libraryName" : "Common",
               "type" : "FunctionRef",
               "operand" : [ {
                  "name" : "LookBack",
                  "libraryName" : "Common",
                  "type" : "FunctionRef",
                  "operand" : [ {
                     "dataType" : "{http://hl7.org/fhir}DiagnosticReport",
                     "templateId" : "http://hl7.org/fhir/StructureDefinition/DiagnosticReport",
                     "codeProperty" : "code",
                     "codeComparator" : "in",
                     "type" : "Retrieve",
                     "codes" : {
                        "name" : "HPV Test",
                        "type" : "ValueSetRef"
                     }
                  }, {
                     "name" : "HrHPVLookbackPeriod",
                     "type" : "ParameterRef"
                  } ]
               } ]
            }
         }, {
            "name" : "MostRecentHpvReport",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "name" : "MostRecentDiagnosticReport",
               "libraryName" : "Common",
               "type" : "FunctionRef",
               "operand" : [ {
                  "name" : "HpvDiagnosticReports",
                  "type" : "ExpressionRef"
               } ]
            }
         }, {
            "name" : "MostRecentNegativeHpv",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "type" : "Query",
               "source" : [ {
                  "alias" : "R",
                  "expression" : {
                     "name" : "MostRecentHpvReport",
                     "type" : "ExpressionRef"
                  }
               } ],
               "relationship" : [ ],
               "where" : {
                  "type" : "AnyInValueSet",
                  "codes" : {
                     "type" : "Query",
                     "source" : [ {
                        "alias" : "X",
                        "expression" : {
                           "path" : "conclusionCode",
                           "scope" : "R",
                           "type" : "Property"
                        }
                     } ],
                     "return" : {
                        "distinct" : false,
                        "expression" : {
                           "name" : "ToConcept",
                           "libraryName" : "FHIRHelpers",
                           "type" : "FunctionRef",
                           "operand" : [ {
                              "name" : "X",
                              "type" : "AliasRef"
                           } ]
                        }
                     }
                  },
                  "valueset" : {
                     "name" : "HPV Negative Results",
                     "type" : "ValueSetRef"
                  }
               }
            }
         }, {
            "name" : "CervicalCytologyReports",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "name" : "CompletedDiagnosticReport",
               "libraryName" : "Common",
               "type" : "FunctionRef",
               "operand" : [ {
                  "name" : "LookBack",
                  "libraryName" : "Common",
                  "type" : "FunctionRef",
                  "operand" : [ {
                     "dataType" : "{http://hl7.org/fhir}DiagnosticReport",
                     "templateId" : "http://hl7.org/fhir/StructureDefinition/DiagnosticReport",
                     "codeProperty" : "code",
                     "codeComparator" : "in",
                     "type" : "Retrieve",
                     "codes" : {
                        "name" : "Pap Test",
                        "type" : "ValueSetRef"
                     }
                  }, {
                     "name" : "CervicalCytologyLookbackPeriod",
                     "type" : "ParameterRef"
                  } ]
               } ]
            }
         }, {
            "name" : "MostRecentCytologyReport",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "name" : "MostRecentDiagnosticReport",
               "libraryName" : "Common",
               "type" : "FunctionRef",
               "operand" : [ {
                  "name" : "CervicalCytologyReports",
                  "type" : "ExpressionRef"
               } ]
            }
         }, {
            "name" : "MostRecentNilmCytology",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "type" : "Query",
               "source" : [ {
                  "alias" : "R",
                  "expression" : {
                     "name" : "MostRecentCytologyReport",
                     "type" : "ExpressionRef"
                  }
               } ],
               "relationship" : [ ],
               "where" : {
                  "type" : "AnyTrue",
                  "source" : {
                     "type" : "Query",
                     "source" : [ {
                        "alias" : "cC",
                        "expression" : {
                           "path" : "conclusionCode",
                           "scope" : "R",
                           "type" : "Property"
                        }
                     } ],
                     "relationship" : [ ],
                     "return" : {
                        "expression" : {
                           "type" : "Equivalent",
                           "operand" : [ {
                              "name" : "ToConcept",
                              "libraryName" : "FHIRHelpers",
                              "type" : "FunctionRef",
                              "operand" : [ {
                                 "name" : "cC",
                                 "type" : "AliasRef"
                              } ]
                           }, {
                              "type" : "ToConcept",
                              "operand" : {
                                 "name" : "NILM",
                                 "type" : "CodeRef"
                              }
                           } ]
                        }
                     }
                  }
               }
            }
         }, {
            "name" : "HistologyDiagnosticReports",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "name" : "CompletedDiagnosticReport",
               "libraryName" : "Common",
               "type" : "FunctionRef",
               "operand" : [ {
                  "dataType" : "{http://hl7.org/fhir}DiagnosticReport",
                  "templateId" : "http://hl7.org/fhir/StructureDefinition/DiagnosticReport",
                  "codeProperty" : "code",
                  "codeComparator" : "~",
                  "type" : "Retrieve",
                  "codes" : {
                     "type" : "ToList",
                     "operand" : {
                        "name" : "Biopsy Report",
                        "type" : "CodeRef"
                     }
                  }
               } ]
            }
         }, {
            "name" : "HpvDiagnosticReportsSummary",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "type" : "Query",
               "source" : [ {
                  "alias" : "D",
                  "expression" : {
                     "name" : "HpvDiagnosticReports",
                     "type" : "ExpressionRef"
                  }
               } ],
               "relationship" : [ ],
               "return" : {
                  "expression" : {
                     "type" : "Tuple",
                     "element" : [ {
                        "name" : "name",
                        "value" : {
                           "valueType" : "{urn:hl7-org:elm-types:r1}String",
                           "value" : "HPV Test",
                           "type" : "Literal"
                        }
                     }, {
                        "name" : "longName",
                        "value" : {
                           "name" : "ConceptText",
                           "libraryName" : "Common",
                           "type" : "FunctionRef",
                           "operand" : [ {
                              "path" : "code",
                              "scope" : "D",
                              "type" : "Property"
                           } ]
                        }
                     }, {
                        "name" : "value",
                        "value" : {
                           "name" : "HighestRankedInterpretation",
                           "type" : "FunctionRef",
                           "operand" : [ {
                              "name" : "HpvInterpretation",
                              "type" : "FunctionRef",
                              "operand" : [ {
                                 "type" : "Query",
                                 "source" : [ {
                                    "alias" : "X",
                                    "expression" : {
                                       "path" : "conclusionCode",
                                       "scope" : "D",
                                       "type" : "Property"
                                    }
                                 } ],
                                 "return" : {
                                    "distinct" : false,
                                    "expression" : {
                                       "name" : "ToConcept",
                                       "libraryName" : "FHIRHelpers",
                                       "type" : "FunctionRef",
                                       "operand" : [ {
                                          "name" : "X",
                                          "type" : "AliasRef"
                                       } ]
                                    }
                                 }
                              } ]
                           } ]
                        }
                     }, {
                        "name" : "longValue",
                        "value" : {
                           "type" : "Flatten",
                           "operand" : {
                              "type" : "Query",
                              "source" : [ {
                                 "alias" : "cC",
                                 "expression" : {
                                    "path" : "conclusionCode",
                                    "scope" : "D",
                                    "type" : "Property"
                                 }
                              } ],
                              "relationship" : [ ],
                              "return" : {
                                 "expression" : {
                                    "type" : "Query",
                                    "source" : [ {
                                       "alias" : "cCC",
                                       "expression" : {
                                          "path" : "coding",
                                          "scope" : "cC",
                                          "type" : "Property"
                                       }
                                    } ],
                                    "relationship" : [ ],
                                    "return" : {
                                       "expression" : {
                                          "path" : "display",
                                          "scope" : "cCC",
                                          "type" : "Property"
                                       }
                                    }
                                 }
                              }
                           }
                        }
                     }, {
                        "name" : "date",
                        "value" : {
                           "name" : "DiagnosticReportDateString",
                           "libraryName" : "Common",
                           "type" : "FunctionRef",
                           "operand" : [ {
                              "name" : "D",
                              "type" : "AliasRef"
                           } ]
                        }
                     }, {
                        "name" : "reference",
                        "value" : {
                           "type" : "Concatenate",
                           "operand" : [ {
                              "valueType" : "{urn:hl7-org:elm-types:r1}String",
                              "value" : "DiagnosticReport/",
                              "type" : "Literal"
                           }, {
                              "name" : "ToString",
                              "libraryName" : "FHIRHelpers",
                              "type" : "FunctionRef",
                              "operand" : [ {
                                 "path" : "id",
                                 "scope" : "D",
                                 "type" : "Property"
                              } ]
                           } ]
                        }
                     } ]
                  }
               }
            }
         }, {
            "name" : "CervicalCytologyReportsSummary",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "type" : "Query",
               "source" : [ {
                  "alias" : "D",
                  "expression" : {
                     "name" : "CervicalCytologyReports",
                     "type" : "ExpressionRef"
                  }
               } ],
               "relationship" : [ ],
               "return" : {
                  "expression" : {
                     "type" : "Tuple",
                     "element" : [ {
                        "name" : "name",
                        "value" : {
                           "valueType" : "{urn:hl7-org:elm-types:r1}String",
                           "value" : "Cervical Cytology",
                           "type" : "Literal"
                        }
                     }, {
                        "name" : "longName",
                        "value" : {
                           "name" : "ConceptText",
                           "libraryName" : "Common",
                           "type" : "FunctionRef",
                           "operand" : [ {
                              "path" : "code",
                              "scope" : "D",
                              "type" : "Property"
                           } ]
                        }
                     }, {
                        "name" : "value",
                        "value" : {
                           "name" : "HighestRankedInterpretation",
                           "type" : "FunctionRef",
                           "operand" : [ {
                              "name" : "CytologyInterpretation",
                              "type" : "FunctionRef",
                              "operand" : [ {
                                 "type" : "Query",
                                 "source" : [ {
                                    "alias" : "X",
                                    "expression" : {
                                       "path" : "conclusionCode",
                                       "scope" : "D",
                                       "type" : "Property"
                                    }
                                 } ],
                                 "return" : {
                                    "distinct" : false,
                                    "expression" : {
                                       "name" : "ToConcept",
                                       "libraryName" : "FHIRHelpers",
                                       "type" : "FunctionRef",
                                       "operand" : [ {
                                          "name" : "X",
                                          "type" : "AliasRef"
                                       } ]
                                    }
                                 }
                              } ]
                           } ]
                        }
                     }, {
                        "name" : "longValue",
                        "value" : {
                           "type" : "Flatten",
                           "operand" : {
                              "type" : "Query",
                              "source" : [ {
                                 "alias" : "cC",
                                 "expression" : {
                                    "path" : "conclusionCode",
                                    "scope" : "D",
                                    "type" : "Property"
                                 }
                              } ],
                              "relationship" : [ ],
                              "return" : {
                                 "expression" : {
                                    "type" : "Query",
                                    "source" : [ {
                                       "alias" : "cCC",
                                       "expression" : {
                                          "path" : "coding",
                                          "scope" : "cC",
                                          "type" : "Property"
                                       }
                                    } ],
                                    "relationship" : [ ],
                                    "return" : {
                                       "expression" : {
                                          "path" : "display",
                                          "scope" : "cCC",
                                          "type" : "Property"
                                       }
                                    }
                                 }
                              }
                           }
                        }
                     }, {
                        "name" : "date",
                        "value" : {
                           "name" : "DiagnosticReportDateString",
                           "libraryName" : "Common",
                           "type" : "FunctionRef",
                           "operand" : [ {
                              "name" : "D",
                              "type" : "AliasRef"
                           } ]
                        }
                     }, {
                        "name" : "reference",
                        "value" : {
                           "type" : "Concatenate",
                           "operand" : [ {
                              "valueType" : "{urn:hl7-org:elm-types:r1}String",
                              "value" : "DiagnosticReport/",
                              "type" : "Literal"
                           }, {
                              "name" : "ToString",
                              "libraryName" : "FHIRHelpers",
                              "type" : "FunctionRef",
                              "operand" : [ {
                                 "path" : "id",
                                 "scope" : "D",
                                 "type" : "Property"
                              } ]
                           } ]
                        }
                     } ]
                  }
               }
            }
         }, {
            "name" : "HistologyDiagnosticReportsSummary",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "type" : "Query",
               "source" : [ {
                  "alias" : "D",
                  "expression" : {
                     "name" : "HistologyDiagnosticReports",
                     "type" : "ExpressionRef"
                  }
               } ],
               "relationship" : [ ],
               "return" : {
                  "expression" : {
                     "type" : "Tuple",
                     "element" : [ {
                        "name" : "name",
                        "value" : {
                           "valueType" : "{urn:hl7-org:elm-types:r1}String",
                           "value" : "Cervical Histology",
                           "type" : "Literal"
                        }
                     }, {
                        "name" : "longName",
                        "value" : {
                           "name" : "ConceptText",
                           "libraryName" : "Common",
                           "type" : "FunctionRef",
                           "operand" : [ {
                              "path" : "code",
                              "scope" : "D",
                              "type" : "Property"
                           } ]
                        }
                     }, {
                        "name" : "value",
                        "value" : {
                           "name" : "HighestRankedInterpretation",
                           "type" : "FunctionRef",
                           "operand" : [ {
                              "name" : "BiopsyInterpretation",
                              "type" : "FunctionRef",
                              "operand" : [ {
                                 "type" : "Query",
                                 "source" : [ {
                                    "alias" : "X",
                                    "expression" : {
                                       "path" : "conclusionCode",
                                       "scope" : "D",
                                       "type" : "Property"
                                    }
                                 } ],
                                 "return" : {
                                    "distinct" : false,
                                    "expression" : {
                                       "name" : "ToConcept",
                                       "libraryName" : "FHIRHelpers",
                                       "type" : "FunctionRef",
                                       "operand" : [ {
                                          "name" : "X",
                                          "type" : "AliasRef"
                                       } ]
                                    }
                                 }
                              } ]
                           } ]
                        }
                     }, {
                        "name" : "longValue",
                        "value" : {
                           "type" : "Flatten",
                           "operand" : {
                              "type" : "Query",
                              "source" : [ {
                                 "alias" : "cC",
                                 "expression" : {
                                    "path" : "conclusionCode",
                                    "scope" : "D",
                                    "type" : "Property"
                                 }
                              } ],
                              "relationship" : [ ],
                              "return" : {
                                 "expression" : {
                                    "type" : "Query",
                                    "source" : [ {
                                       "alias" : "cCC",
                                       "expression" : {
                                          "path" : "coding",
                                          "scope" : "cC",
                                          "type" : "Property"
                                       }
                                    } ],
                                    "relationship" : [ ],
                                    "return" : {
                                       "expression" : {
                                          "path" : "display",
                                          "scope" : "cCC",
                                          "type" : "Property"
                                       }
                                    }
                                 }
                              }
                           }
                        }
                     }, {
                        "name" : "date",
                        "value" : {
                           "name" : "DiagnosticReportDateString",
                           "libraryName" : "Common",
                           "type" : "FunctionRef",
                           "operand" : [ {
                              "name" : "D",
                              "type" : "AliasRef"
                           } ]
                        }
                     }, {
                        "name" : "reference",
                        "value" : {
                           "type" : "Concatenate",
                           "operand" : [ {
                              "valueType" : "{urn:hl7-org:elm-types:r1}String",
                              "value" : "DiagnosticReport/",
                              "type" : "Literal"
                           }, {
                              "name" : "ToString",
                              "libraryName" : "FHIRHelpers",
                              "type" : "FunctionRef",
                              "operand" : [ {
                                 "path" : "id",
                                 "scope" : "D",
                                 "type" : "Property"
                              } ]
                           } ]
                        }
                     } ]
                  }
               }
            }
         }, {
            "name" : "DiagnosticReportsSummary",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "type" : "Query",
               "source" : [ {
                  "alias" : "D",
                  "expression" : {
                     "type" : "Union",
                     "operand" : [ {
                        "type" : "Union",
                        "operand" : [ {
                           "name" : "HpvDiagnosticReportsSummary",
                           "type" : "ExpressionRef"
                        }, {
                           "name" : "CervicalCytologyReportsSummary",
                           "type" : "ExpressionRef"
                        } ]
                     }, {
                        "name" : "HistologyDiagnosticReportsSummary",
                        "type" : "ExpressionRef"
                     } ]
                  }
               } ],
               "relationship" : [ ],
               "sort" : {
                  "by" : [ {
                     "direction" : "desc",
                     "path" : "date",
                     "type" : "ByColumn"
                  } ]
               }
            }
         }, {
            "name" : "HighGradeOrCancerHistologyResults",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "type" : "Query",
               "source" : [ {
                  "alias" : "H",
                  "expression" : {
                     "name" : "HistologyDiagnosticReports",
                     "type" : "ExpressionRef"
                  }
               } ],
               "relationship" : [ ],
               "where" : {
                  "type" : "Or",
                  "operand" : [ {
                     "type" : "Or",
                     "operand" : [ {
                        "type" : "Or",
                        "operand" : [ {
                           "type" : "Or",
                           "operand" : [ {
                              "type" : "Contains",
                              "operand" : [ {
                                 "type" : "Query",
                                 "source" : [ {
                                    "alias" : "X",
                                    "expression" : {
                                       "path" : "conclusionCode",
                                       "scope" : "H",
                                       "type" : "Property"
                                    }
                                 } ],
                                 "return" : {
                                    "distinct" : false,
                                    "expression" : {
                                       "name" : "ToConcept",
                                       "libraryName" : "FHIRHelpers",
                                       "type" : "FunctionRef",
                                       "operand" : [ {
                                          "name" : "X",
                                          "type" : "AliasRef"
                                       } ]
                                    }
                                 }
                              }, {
                                 "type" : "ToConcept",
                                 "operand" : {
                                    "name" : "CIN2",
                                    "type" : "CodeRef"
                                 }
                              } ]
                           }, {
                              "type" : "AnyInValueSet",
                              "codes" : {
                                 "type" : "Query",
                                 "source" : [ {
                                    "alias" : "X",
                                    "expression" : {
                                       "path" : "conclusionCode",
                                       "scope" : "H",
                                       "type" : "Property"
                                    }
                                 } ],
                                 "return" : {
                                    "distinct" : false,
                                    "expression" : {
                                       "name" : "ToConcept",
                                       "libraryName" : "FHIRHelpers",
                                       "type" : "FunctionRef",
                                       "operand" : [ {
                                          "name" : "X",
                                          "type" : "AliasRef"
                                       } ]
                                    }
                                 }
                              },
                              "valueset" : {
                                 "name" : "Histologic CIN3",
                                 "type" : "ValueSetRef"
                              }
                           } ]
                        }, {
                           "type" : "Contains",
                           "operand" : [ {
                              "type" : "Query",
                              "source" : [ {
                                 "alias" : "X",
                                 "expression" : {
                                    "path" : "conclusionCode",
                                    "scope" : "H",
                                    "type" : "Property"
                                 }
                              } ],
                              "return" : {
                                 "distinct" : false,
                                 "expression" : {
                                    "name" : "ToConcept",
                                    "libraryName" : "FHIRHelpers",
                                    "type" : "FunctionRef",
                                    "operand" : [ {
                                       "name" : "X",
                                       "type" : "AliasRef"
                                    } ]
                                 }
                              }
                           }, {
                              "type" : "ToConcept",
                              "operand" : {
                                 "name" : "HSIL, Unspecified",
                                 "type" : "CodeRef"
                              }
                           } ]
                        } ]
                     }, {
                        "type" : "AnyInValueSet",
                        "codes" : {
                           "type" : "Query",
                           "source" : [ {
                              "alias" : "X",
                              "expression" : {
                                 "path" : "conclusionCode",
                                 "scope" : "H",
                                 "type" : "Property"
                              }
                           } ],
                           "return" : {
                              "distinct" : false,
                              "expression" : {
                                 "name" : "ToConcept",
                                 "libraryName" : "FHIRHelpers",
                                 "type" : "FunctionRef",
                                 "operand" : [ {
                                    "name" : "X",
                                    "type" : "AliasRef"
                                 } ]
                              }
                           }
                        },
                        "valueset" : {
                           "name" : "AIS",
                           "type" : "ValueSetRef"
                        }
                     } ]
                  }, {
                     "type" : "AnyInValueSet",
                     "codes" : {
                        "type" : "Query",
                        "source" : [ {
                           "alias" : "X",
                           "expression" : {
                              "path" : "conclusionCode",
                              "scope" : "H",
                              "type" : "Property"
                           }
                        } ],
                        "return" : {
                           "distinct" : false,
                           "expression" : {
                              "name" : "ToConcept",
                              "libraryName" : "FHIRHelpers",
                              "type" : "FunctionRef",
                              "operand" : [ {
                                 "name" : "X",
                                 "type" : "AliasRef"
                              } ]
                           }
                        }
                     },
                     "valueset" : {
                        "name" : "Histologic cancer",
                        "type" : "ValueSetRef"
                     }
                  } ]
               }
            }
         }, {
            "name" : "AbnormalUterineOrVaginalBleedingEncounters",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "name" : "RelevantEncounterStatus",
               "libraryName" : "Common",
               "type" : "FunctionRef",
               "operand" : [ {
                  "type" : "Query",
                  "source" : [ {
                     "alias" : "E",
                     "expression" : {
                        "dataType" : "{http://hl7.org/fhir}Encounter",
                        "templateId" : "http://hl7.org/fhir/StructureDefinition/Encounter",
                        "type" : "Retrieve"
                     }
                  } ],
                  "relationship" : [ ],
                  "where" : {
                     "type" : "Or",
                     "operand" : [ {
                        "type" : "AnyInValueSet",
                        "codes" : {
                           "type" : "Query",
                           "source" : [ {
                              "alias" : "X",
                              "expression" : {
                                 "path" : "reasonCode",
                                 "scope" : "E",
                                 "type" : "Property"
                              }
                           } ],
                           "return" : {
                              "distinct" : false,
                              "expression" : {
                                 "name" : "ToConcept",
                                 "libraryName" : "FHIRHelpers",
                                 "type" : "FunctionRef",
                                 "operand" : [ {
                                    "name" : "X",
                                    "type" : "AliasRef"
                                 } ]
                              }
                           }
                        },
                        "valueset" : {
                           "name" : "Abnormal Uterine or Vaginal Bleeding Disorders",
                           "type" : "ValueSetRef"
                        }
                     }, {
                        "type" : "AnyInValueSet",
                        "codes" : {
                           "type" : "Query",
                           "source" : [ {
                              "alias" : "X",
                              "expression" : {
                                 "path" : "reasonCode",
                                 "scope" : "E",
                                 "type" : "Property"
                              }
                           } ],
                           "return" : {
                              "distinct" : false,
                              "expression" : {
                                 "name" : "ToConcept",
                                 "libraryName" : "FHIRHelpers",
                                 "type" : "FunctionRef",
                                 "operand" : [ {
                                    "name" : "X",
                                    "type" : "AliasRef"
                                 } ]
                              }
                           }
                        },
                        "valueset" : {
                           "name" : "Abnormal Uterine or Vaginal Bleeding Findings",
                           "type" : "ValueSetRef"
                        }
                     } ]
                  }
               } ]
            }
         }, {
            "name" : "PertinentEncounters",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "name" : "AbnormalUterineOrVaginalBleedingEncounters",
               "type" : "ExpressionRef"
            }
         }, {
            "name" : "PertinentEncountersSummary",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "type" : "Query",
               "source" : [ {
                  "alias" : "E",
                  "expression" : {
                     "name" : "PertinentEncounters",
                     "type" : "ExpressionRef"
                  }
               } ],
               "relationship" : [ ],
               "return" : {
                  "expression" : {
                     "type" : "Tuple",
                     "element" : [ {
                        "name" : "name",
                        "value" : {
                           "name" : "ConceptText",
                           "libraryName" : "Common",
                           "type" : "FunctionRef",
                           "operand" : [ {
                              "type" : "Indexer",
                              "operand" : [ {
                                 "path" : "reasonCode",
                                 "scope" : "E",
                                 "type" : "Property"
                              }, {
                                 "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                                 "value" : "0",
                                 "type" : "Literal"
                              } ]
                           } ]
                        }
                     }, {
                        "name" : "value",
                        "value" : {
                           "path" : "status",
                           "scope" : "E",
                           "type" : "Property"
                        }
                     }, {
                        "name" : "date",
                        "value" : {
                           "type" : "Concatenate",
                           "operand" : [ {
                              "type" : "Concatenate",
                              "operand" : [ {
                                 "name" : "DateTimeText",
                                 "libraryName" : "Common",
                                 "type" : "FunctionRef",
                                 "operand" : [ {
                                    "path" : "start",
                                    "type" : "Property",
                                    "source" : {
                                       "strict" : false,
                                       "type" : "As",
                                       "operand" : {
                                          "path" : "period",
                                          "scope" : "E",
                                          "type" : "Property"
                                       },
                                       "asTypeSpecifier" : {
                                          "name" : "{http://hl7.org/fhir}Period",
                                          "type" : "NamedTypeSpecifier"
                                       }
                                    }
                                 } ]
                              }, {
                                 "valueType" : "{urn:hl7-org:elm-types:r1}String",
                                 "value" : " to ",
                                 "type" : "Literal"
                              } ]
                           }, {
                              "name" : "DateTimeText",
                              "libraryName" : "Common",
                              "type" : "FunctionRef",
                              "operand" : [ {
                                 "path" : "end",
                                 "type" : "Property",
                                 "source" : {
                                    "strict" : false,
                                    "type" : "As",
                                    "operand" : {
                                       "path" : "period",
                                       "scope" : "E",
                                       "type" : "Property"
                                    },
                                    "asTypeSpecifier" : {
                                       "name" : "{http://hl7.org/fhir}Period",
                                       "type" : "NamedTypeSpecifier"
                                    }
                                 }
                              } ]
                           } ]
                        }
                     }, {
                        "name" : "reference",
                        "value" : {
                           "type" : "Concatenate",
                           "operand" : [ {
                              "valueType" : "{urn:hl7-org:elm-types:r1}String",
                              "value" : "Encounter/",
                              "type" : "Literal"
                           }, {
                              "name" : "ToString",
                              "libraryName" : "FHIRHelpers",
                              "type" : "FunctionRef",
                              "operand" : [ {
                                 "path" : "id",
                                 "scope" : "E",
                                 "type" : "Property"
                              } ]
                           } ]
                        }
                     } ]
                  }
               }
            }
         }, {
            "name" : "HrHPVImmunizations",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "dataType" : "{http://hl7.org/fhir}Immunization",
               "templateId" : "http://hl7.org/fhir/StructureDefinition/Immunization",
               "codeProperty" : "vaccineCode",
               "codeComparator" : "in",
               "type" : "Retrieve",
               "codes" : {
                  "name" : "HPV Immunization",
                  "type" : "ValueSetRef"
               }
            }
         }, {
            "name" : "PertinentImmunizations",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "name" : "HrHPVImmunizations",
               "type" : "ExpressionRef"
            }
         }, {
            "name" : "PertinentImmunizationsSummary",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "type" : "Query",
               "source" : [ {
                  "alias" : "I",
                  "expression" : {
                     "name" : "PertinentImmunizations",
                     "type" : "ExpressionRef"
                  }
               } ],
               "relationship" : [ ],
               "return" : {
                  "expression" : {
                     "type" : "Tuple",
                     "element" : [ {
                        "name" : "name",
                        "value" : {
                           "name" : "ConceptText",
                           "libraryName" : "Common",
                           "type" : "FunctionRef",
                           "operand" : [ {
                              "path" : "vaccineCode",
                              "scope" : "I",
                              "type" : "Property"
                           } ]
                        }
                     }, {
                        "name" : "value",
                        "value" : {
                           "path" : "status",
                           "scope" : "I",
                           "type" : "Property"
                        }
                     }, {
                        "name" : "date",
                        "value" : {
                           "type" : "Coalesce",
                           "operand" : [ {
                              "name" : "ToString",
                              "libraryName" : "FHIRHelpers",
                              "type" : "FunctionRef",
                              "operand" : [ {
                                 "asType" : "{http://hl7.org/fhir}string",
                                 "type" : "As",
                                 "operand" : {
                                    "path" : "occurrence",
                                    "scope" : "I",
                                    "type" : "Property"
                                 }
                              } ]
                           }, {
                              "name" : "DateTimeText",
                              "libraryName" : "Common",
                              "type" : "FunctionRef",
                              "operand" : [ {
                                 "asType" : "{http://hl7.org/fhir}dateTime",
                                 "type" : "As",
                                 "operand" : {
                                    "path" : "occurrence",
                                    "scope" : "I",
                                    "type" : "Property"
                                 }
                              } ]
                           } ]
                        }
                     }, {
                        "name" : "reference",
                        "value" : {
                           "type" : "Concatenate",
                           "operand" : [ {
                              "valueType" : "{urn:hl7-org:elm-types:r1}String",
                              "value" : "Immunization/",
                              "type" : "Literal"
                           }, {
                              "name" : "ToString",
                              "libraryName" : "FHIRHelpers",
                              "type" : "FunctionRef",
                              "operand" : [ {
                                 "path" : "id",
                                 "scope" : "I",
                                 "type" : "Property"
                              } ]
                           } ]
                        }
                     } ]
                  }
               }
            }
         }, {
            "name" : "RecentPositiveHpv",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "name" : "LookBack",
               "libraryName" : "Common",
               "type" : "FunctionRef",
               "operand" : [ {
                  "type" : "Query",
                  "source" : [ {
                     "alias" : "H",
                     "expression" : {
                        "name" : "HpvDiagnosticReports",
                        "type" : "ExpressionRef"
                     }
                  } ],
                  "relationship" : [ ],
                  "where" : {
                     "type" : "AnyInValueSet",
                     "codes" : {
                        "type" : "Query",
                        "source" : [ {
                           "alias" : "X",
                           "expression" : {
                              "path" : "conclusionCode",
                              "scope" : "H",
                              "type" : "Property"
                           }
                        } ],
                        "return" : {
                           "distinct" : false,
                           "expression" : {
                              "name" : "ToConcept",
                              "libraryName" : "FHIRHelpers",
                              "type" : "FunctionRef",
                              "operand" : [ {
                                 "name" : "X",
                                 "type" : "AliasRef"
                              } ]
                           }
                        }
                     },
                     "valueset" : {
                        "name" : "High Risk HPV Positive Results",
                        "type" : "ValueSetRef"
                     }
                  }
               }, {
                  "name" : "AbnormalTestLookbackPeriod",
                  "type" : "ParameterRef"
               } ]
            }
         }, {
            "name" : "HasRecentPositiveHpv",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "type" : "Exists",
               "operand" : {
                  "name" : "RecentPositiveHpv",
                  "type" : "ExpressionRef"
               }
            }
         }, {
            "name" : "RecentAbnormalCytologyResults",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "name" : "LookBack",
               "libraryName" : "Common",
               "type" : "FunctionRef",
               "operand" : [ {
                  "type" : "Query",
                  "source" : [ {
                     "alias" : "C",
                     "expression" : {
                        "name" : "CervicalCytologyReports",
                        "type" : "ExpressionRef"
                     }
                  } ],
                  "relationship" : [ ],
                  "where" : {
                     "type" : "AnyInValueSet",
                     "codes" : {
                        "type" : "Query",
                        "source" : [ {
                           "alias" : "X",
                           "expression" : {
                              "path" : "conclusionCode",
                              "scope" : "C",
                              "type" : "Property"
                           }
                        } ],
                        "return" : {
                           "distinct" : false,
                           "expression" : {
                              "name" : "ToConcept",
                              "libraryName" : "FHIRHelpers",
                              "type" : "FunctionRef",
                              "operand" : [ {
                                 "name" : "X",
                                 "type" : "AliasRef"
                              } ]
                           }
                        }
                     },
                     "valueset" : {
                        "name" : "Abnormal results of Cervical Cytology Test",
                        "type" : "ValueSetRef"
                     }
                  }
               }, {
                  "name" : "AbnormalTestLookbackPeriod",
                  "type" : "ParameterRef"
               } ]
            }
         }, {
            "name" : "HasRecentAbnormalCytologyResults",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "type" : "Exists",
               "operand" : {
                  "name" : "RecentAbnormalCytologyResults",
                  "type" : "ExpressionRef"
               }
            }
         }, {
            "name" : "HasRecentAbnormalScreening",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "type" : "Or",
               "operand" : [ {
                  "name" : "HasRecentPositiveHpv",
                  "type" : "ExpressionRef"
               }, {
                  "name" : "HasRecentAbnormalCytologyResults",
                  "type" : "ExpressionRef"
               } ]
            }
         }, {
            "name" : "RecentAbnormalHistology",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "name" : "LookBack",
               "libraryName" : "Common",
               "type" : "FunctionRef",
               "operand" : [ {
                  "type" : "Query",
                  "source" : [ {
                     "alias" : "H",
                     "expression" : {
                        "name" : "HistologyDiagnosticReports",
                        "type" : "ExpressionRef"
                     }
                  } ],
                  "relationship" : [ ],
                  "where" : {
                     "type" : "Not",
                     "operand" : {
                        "type" : "Contains",
                        "operand" : [ {
                           "type" : "Query",
                           "source" : [ {
                              "alias" : "X",
                              "expression" : {
                                 "path" : "conclusionCode",
                                 "scope" : "H",
                                 "type" : "Property"
                              }
                           } ],
                           "return" : {
                              "distinct" : false,
                              "expression" : {
                                 "name" : "ToConcept",
                                 "libraryName" : "FHIRHelpers",
                                 "type" : "FunctionRef",
                                 "operand" : [ {
                                    "name" : "X",
                                    "type" : "AliasRef"
                                 } ]
                              }
                           }
                        }, {
                           "type" : "ToConcept",
                           "operand" : {
                              "name" : "Negative",
                              "type" : "CodeRef"
                           }
                        } ]
                     }
                  }
               }, {
                  "name" : "AbnormalTestLookbackPeriod",
                  "type" : "ParameterRef"
               } ]
            }
         }, {
            "name" : "HasRecentAbnormalHistology",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "type" : "Exists",
               "operand" : {
                  "name" : "RecentAbnormalHistology",
                  "type" : "ExpressionRef"
               }
            }
         }, {
            "name" : "Immunocompromised",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "type" : "Or",
               "operand" : [ {
                  "type" : "Or",
                  "operand" : [ {
                     "type" : "Or",
                     "operand" : [ {
                        "type" : "Or",
                        "operand" : [ {
                           "type" : "Or",
                           "operand" : [ {
                              "type" : "Or",
                              "operand" : [ {
                                 "type" : "Or",
                                 "operand" : [ {
                                    "type" : "Or",
                                    "operand" : [ {
                                       "type" : "Exists",
                                       "operand" : {
                                          "name" : "HivDiagnoses",
                                          "type" : "ExpressionRef"
                                       }
                                    }, {
                                       "type" : "Exists",
                                       "operand" : {
                                          "name" : "SolidOrganTransplantDiagnoses",
                                          "type" : "ExpressionRef"
                                       }
                                    } ]
                                 }, {
                                    "type" : "Exists",
                                    "operand" : {
                                       "name" : "SolidOrganTransplantProcedures",
                                       "type" : "ExpressionRef"
                                    }
                                 } ]
                              }, {
                                 "type" : "Exists",
                                 "operand" : {
                                    "name" : "SystemicLupusErythematosusDiagnoses",
                                    "type" : "ExpressionRef"
                                 }
                              } ]
                           }, {
                              "type" : "Exists",
                              "operand" : {
                                 "name" : "HematopoieticStemCellTransplantDiagnoses",
                                 "type" : "ExpressionRef"
                              }
                           } ]
                        }, {
                           "type" : "Exists",
                           "operand" : {
                              "name" : "HematopoieticStemCellTransplantProcedures",
                              "type" : "ExpressionRef"
                           }
                        } ]
                     }, {
                        "type" : "Exists",
                        "operand" : {
                           "name" : "ChronicGraftVersusHostDiseaseDiagnosesAfterStemCell",
                           "type" : "ExpressionRef"
                        }
                     } ]
                  }, {
                     "type" : "Exists",
                     "operand" : {
                        "name" : "GenitalGraftVersusHostDiseaseDiagnosesAfterStemCell",
                        "type" : "ExpressionRef"
                     }
                  } ]
               }, {
                  "type" : "Exists",
                  "operand" : {
                     "name" : "InflammatoryBowelDiseaseOrRheumatoidArthritisDiagnosesAndOnImmunosuppressant",
                     "type" : "ExpressionRef"
                  }
               } ]
            }
         }, {
            "name" : "FirstDiagnosisOfHiv",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "type" : "Tuple",
               "element" : [ {
                  "name" : "type",
                  "value" : {
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "Diagnosis Of HIV",
                     "type" : "Literal"
                  }
               }, {
                  "name" : "date",
                  "value" : {
                     "name" : "DateOfFirstCondition",
                     "libraryName" : "Common",
                     "type" : "FunctionRef",
                     "operand" : [ {
                        "name" : "HivDiagnoses",
                        "type" : "ExpressionRef"
                     } ]
                  }
               } ]
            }
         }, {
            "name" : "FirstDiagnosisOfSolidOrganTransplant",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "type" : "Tuple",
               "element" : [ {
                  "name" : "type",
                  "value" : {
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "Diagnosis Of Solid Organ Transplant",
                     "type" : "Literal"
                  }
               }, {
                  "name" : "date",
                  "value" : {
                     "name" : "DateOfFirstCondition",
                     "libraryName" : "Common",
                     "type" : "FunctionRef",
                     "operand" : [ {
                        "name" : "SolidOrganTransplantDiagnoses",
                        "type" : "ExpressionRef"
                     } ]
                  }
               } ]
            }
         }, {
            "name" : "FirstProcedureForSolidOrganTransplant",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "type" : "Tuple",
               "element" : [ {
                  "name" : "type",
                  "value" : {
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "Procedure For Solid Organ Transplant",
                     "type" : "Literal"
                  }
               }, {
                  "name" : "date",
                  "value" : {
                     "name" : "DateOfFirstProcedure",
                     "libraryName" : "Common",
                     "type" : "FunctionRef",
                     "operand" : [ {
                        "name" : "SolidOrganTransplantProcedures",
                        "type" : "ExpressionRef"
                     } ]
                  }
               } ]
            }
         }, {
            "name" : "FirstSolidOrganTransplant",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "type" : "If",
               "condition" : {
                  "asType" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "type" : "As",
                  "operand" : {
                     "type" : "Not",
                     "operand" : {
                        "type" : "IsNull",
                        "operand" : {
                           "path" : "date",
                           "type" : "Property",
                           "source" : {
                              "name" : "FirstDiagnosisOfSolidOrganTransplant",
                              "type" : "ExpressionRef"
                           }
                        }
                     }
                  }
               },
               "then" : {
                  "type" : "If",
                  "condition" : {
                     "asType" : "{urn:hl7-org:elm-types:r1}Boolean",
                     "type" : "As",
                     "operand" : {
                        "type" : "Not",
                        "operand" : {
                           "type" : "IsNull",
                           "operand" : {
                              "path" : "date",
                              "type" : "Property",
                              "source" : {
                                 "name" : "FirstProcedureForSolidOrganTransplant",
                                 "type" : "ExpressionRef"
                              }
                           }
                        }
                     }
                  },
                  "then" : {
                     "type" : "First",
                     "source" : {
                        "type" : "Query",
                        "source" : [ {
                           "alias" : "T",
                           "expression" : {
                              "type" : "List",
                              "element" : [ {
                                 "name" : "FirstDiagnosisOfSolidOrganTransplant",
                                 "type" : "ExpressionRef"
                              }, {
                                 "name" : "FirstProcedureForSolidOrganTransplant",
                                 "type" : "ExpressionRef"
                              } ]
                           }
                        } ],
                        "relationship" : [ ],
                        "sort" : {
                           "by" : [ {
                              "direction" : "asc",
                              "path" : "date",
                              "type" : "ByColumn"
                           } ]
                        }
                     }
                  },
                  "else" : {
                     "name" : "FirstDiagnosisOfSolidOrganTransplant",
                     "type" : "ExpressionRef"
                  }
               },
               "else" : {
                  "name" : "FirstProcedureForSolidOrganTransplant",
                  "type" : "ExpressionRef"
               }
            }
         }, {
            "name" : "FirstDiagnosisOfSystemicLupusErythematosus",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "type" : "Tuple",
               "element" : [ {
                  "name" : "type",
                  "value" : {
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "Diagnosis Of Systemic Lupus Erythematosus",
                     "type" : "Literal"
                  }
               }, {
                  "name" : "date",
                  "value" : {
                     "name" : "DateOfFirstCondition",
                     "libraryName" : "Common",
                     "type" : "FunctionRef",
                     "operand" : [ {
                        "name" : "SystemicLupusErythematosusDiagnoses",
                        "type" : "ExpressionRef"
                     } ]
                  }
               } ]
            }
         }, {
            "name" : "FirstDiagnosisOfHematopoieticStemCellTransplant",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "type" : "Tuple",
               "element" : [ {
                  "name" : "type",
                  "value" : {
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "Diagnosis Of Hematopoietic Stem Cell Transplant",
                     "type" : "Literal"
                  }
               }, {
                  "name" : "date",
                  "value" : {
                     "name" : "DateOfFirstCondition",
                     "libraryName" : "Common",
                     "type" : "FunctionRef",
                     "operand" : [ {
                        "name" : "HematopoieticStemCellTransplantDiagnoses",
                        "type" : "ExpressionRef"
                     } ]
                  }
               } ]
            }
         }, {
            "name" : "FirstProcedureForHematopoieticStemCellTransplant",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "type" : "Tuple",
               "element" : [ {
                  "name" : "type",
                  "value" : {
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "Procedure For Hematopoietic Stem Cell Transplant",
                     "type" : "Literal"
                  }
               }, {
                  "name" : "date",
                  "value" : {
                     "name" : "DateOfFirstHematopoieticStemCellTransplantProcedure",
                     "type" : "ExpressionRef"
                  }
               } ]
            }
         }, {
            "name" : "FirstHematopoieticStemCellTransplant",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "type" : "If",
               "condition" : {
                  "asType" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "type" : "As",
                  "operand" : {
                     "type" : "Not",
                     "operand" : {
                        "type" : "IsNull",
                        "operand" : {
                           "path" : "date",
                           "type" : "Property",
                           "source" : {
                              "name" : "FirstDiagnosisOfHematopoieticStemCellTransplant",
                              "type" : "ExpressionRef"
                           }
                        }
                     }
                  }
               },
               "then" : {
                  "type" : "If",
                  "condition" : {
                     "asType" : "{urn:hl7-org:elm-types:r1}Boolean",
                     "type" : "As",
                     "operand" : {
                        "type" : "Not",
                        "operand" : {
                           "type" : "IsNull",
                           "operand" : {
                              "name" : "FirstProcedureForHematopoieticStemCellTransplant",
                              "type" : "ExpressionRef"
                           }
                        }
                     }
                  },
                  "then" : {
                     "type" : "First",
                     "source" : {
                        "type" : "Query",
                        "source" : [ {
                           "alias" : "T",
                           "expression" : {
                              "type" : "List",
                              "element" : [ {
                                 "name" : "FirstDiagnosisOfHematopoieticStemCellTransplant",
                                 "type" : "ExpressionRef"
                              }, {
                                 "name" : "FirstProcedureForHematopoieticStemCellTransplant",
                                 "type" : "ExpressionRef"
                              } ]
                           }
                        } ],
                        "relationship" : [ ],
                        "sort" : {
                           "by" : [ {
                              "direction" : "asc",
                              "path" : "date",
                              "type" : "ByColumn"
                           } ]
                        }
                     }
                  },
                  "else" : {
                     "name" : "FirstDiagnosisOfHematopoieticStemCellTransplant",
                     "type" : "ExpressionRef"
                  }
               },
               "else" : {
                  "name" : "FirstProcedureForHematopoieticStemCellTransplant",
                  "type" : "ExpressionRef"
               }
            }
         }, {
            "name" : "FirstDiagnosisOfChronicGraftVersusHostDiseaseAfterStemCell",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "type" : "Tuple",
               "element" : [ {
                  "name" : "type",
                  "value" : {
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "Diagnosis Of Chronic Graft Versus Host Disease After Stem Cell",
                     "type" : "Literal"
                  }
               }, {
                  "name" : "date",
                  "value" : {
                     "name" : "DateOfFirstCondition",
                     "libraryName" : "Common",
                     "type" : "FunctionRef",
                     "operand" : [ {
                        "name" : "ChronicGraftVersusHostDiseaseDiagnosesAfterStemCell",
                        "type" : "ExpressionRef"
                     } ]
                  }
               } ]
            }
         }, {
            "name" : "FirstDiagnosisOfGenitalGraftVersusHostDiseaseAfterStemCell",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "type" : "Tuple",
               "element" : [ {
                  "name" : "type",
                  "value" : {
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "Diagnosis Of Genital Graft Versus Host Disease After Stem Cell",
                     "type" : "Literal"
                  }
               }, {
                  "name" : "date",
                  "value" : {
                     "name" : "DateOfFirstCondition",
                     "libraryName" : "Common",
                     "type" : "FunctionRef",
                     "operand" : [ {
                        "name" : "GenitalGraftVersusHostDiseaseDiagnosesAfterStemCell",
                        "type" : "ExpressionRef"
                     } ]
                  }
               } ]
            }
         }, {
            "name" : "FirstDiagnosisOfIbdOrRheumatoidArthritisAndOnImmunosuppressant",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "type" : "Tuple",
               "element" : [ {
                  "name" : "type",
                  "value" : {
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "Diagnosis Of IBD Or Rheumatoid Arthritis And On Immunosuppressant",
                     "type" : "Literal"
                  }
               }, {
                  "name" : "date",
                  "value" : {
                     "name" : "DateOfFirstCondition",
                     "libraryName" : "Common",
                     "type" : "FunctionRef",
                     "operand" : [ {
                        "name" : "InflammatoryBowelDiseaseOrRheumatoidArthritisDiagnosesAndOnImmunosuppressant",
                        "type" : "ExpressionRef"
                     } ]
                  }
               } ]
            }
         }, {
            "name" : "DistinctImmunocompromisedEvents",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "type" : "List",
               "element" : [ {
                  "name" : "FirstDiagnosisOfHiv",
                  "type" : "ExpressionRef"
               }, {
                  "name" : "FirstSolidOrganTransplant",
                  "type" : "ExpressionRef"
               }, {
                  "name" : "FirstDiagnosisOfSystemicLupusErythematosus",
                  "type" : "ExpressionRef"
               }, {
                  "name" : "FirstHematopoieticStemCellTransplant",
                  "type" : "ExpressionRef"
               }, {
                  "name" : "FirstDiagnosisOfChronicGraftVersusHostDiseaseAfterStemCell",
                  "type" : "ExpressionRef"
               }, {
                  "name" : "FirstDiagnosisOfGenitalGraftVersusHostDiseaseAfterStemCell",
                  "type" : "ExpressionRef"
               }, {
                  "name" : "FirstDiagnosisOfIbdOrRheumatoidArthritisAndOnImmunosuppressant",
                  "type" : "ExpressionRef"
               } ]
            }
         }, {
            "name" : "SortedDistinctImmunocompromisedEvents",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "type" : "Query",
               "source" : [ {
                  "alias" : "E",
                  "expression" : {
                     "name" : "DistinctImmunocompromisedEvents",
                     "type" : "ExpressionRef"
                  }
               } ],
               "relationship" : [ ],
               "where" : {
                  "type" : "Not",
                  "operand" : {
                     "type" : "IsNull",
                     "operand" : {
                        "path" : "date",
                        "scope" : "E",
                        "type" : "Property"
                     }
                  }
               },
               "return" : {
                  "expression" : {
                     "type" : "Tuple",
                     "element" : [ {
                        "name" : "type",
                        "value" : {
                           "path" : "type",
                           "scope" : "E",
                           "type" : "Property"
                        }
                     }, {
                        "name" : "date",
                        "value" : {
                           "path" : "date",
                           "scope" : "E",
                           "type" : "Property"
                        }
                     } ]
                  }
               },
               "sort" : {
                  "by" : [ {
                     "direction" : "asc",
                     "path" : "date",
                     "type" : "ByColumn"
                  } ]
               }
            }
         }, {
            "name" : "MostRecentDistinctImmunocompromisedEvent",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "type" : "Last",
               "source" : {
                  "name" : "SortedDistinctImmunocompromisedEvents",
                  "type" : "ExpressionRef"
               }
            }
         }, {
            "name" : "MostRecentDistinctImmunocompromisedEventDate",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "path" : "date",
               "type" : "Property",
               "source" : {
                  "name" : "MostRecentDistinctImmunocompromisedEvent",
                  "type" : "ExpressionRef"
               }
            }
         }, {
            "name" : "Flags",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "type" : "List",
               "element" : [ {
                  "name" : "HasRecentAbnormalScreening",
                  "type" : "ExpressionRef"
               }, {
                  "name" : "HasRecentAbnormalHistology",
                  "type" : "ExpressionRef"
               }, {
                  "name" : "Immunocompromised",
                  "type" : "ExpressionRef"
               } ]
            }
         }, {
            "name" : "ErrorDiagnosticReportWithNoConclusonCodes",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "type" : "If",
               "condition" : {
                  "asType" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "type" : "As",
                  "operand" : {
                     "type" : "And",
                     "operand" : [ {
                        "type" : "Exists",
                        "operand" : {
                           "name" : "DiagnosticReportsSummary",
                           "type" : "ExpressionRef"
                        }
                     }, {
                        "type" : "IsNull",
                        "operand" : {
                           "type" : "Query",
                           "source" : [ {
                              "alias" : "$this",
                              "expression" : {
                                 "name" : "DiagnosticReportsSummary",
                                 "type" : "ExpressionRef"
                              }
                           } ],
                           "where" : {
                              "type" : "Not",
                              "operand" : {
                                 "type" : "IsNull",
                                 "operand" : {
                                    "path" : "value",
                                    "type" : "Property",
                                    "source" : {
                                       "name" : "$this",
                                       "type" : "AliasRef"
                                    }
                                 }
                              }
                           },
                           "return" : {
                              "distinct" : false,
                              "expression" : {
                                 "path" : "value",
                                 "type" : "Property",
                                 "source" : {
                                    "name" : "$this",
                                    "type" : "AliasRef"
                                 }
                              }
                           }
                        }
                     } ]
                  }
               },
               "then" : {
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "A Diagnostic Report was found but contained no computable ConclusionCodes. Please review patient record to resolve.",
                  "type" : "Literal"
               },
               "else" : {
                  "asType" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "As",
                  "operand" : {
                     "type" : "Null"
                  }
               }
            }
         }, {
            "name" : "ErrorHistologyWithUnexpectedCode",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "type" : "If",
               "condition" : {
                  "asType" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "type" : "As",
                  "operand" : {
                     "valueType" : "{urn:hl7-org:elm-types:r1}Boolean",
                     "value" : "false",
                     "type" : "Literal"
                  }
               },
               "then" : {
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "A histology test was found but with an enexpected result code. Please review patient record to resolve.",
                  "type" : "Literal"
               },
               "else" : {
                  "asType" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "As",
                  "operand" : {
                     "type" : "Null"
                  }
               }
            }
         }, {
            "name" : "ErrorCytologyyWithUnexpectedCode",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "type" : "If",
               "condition" : {
                  "asType" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "type" : "As",
                  "operand" : {
                     "valueType" : "{urn:hl7-org:elm-types:r1}Boolean",
                     "value" : "false",
                     "type" : "Literal"
                  }
               },
               "then" : {
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "A cervical cytology test was found but with an enexpected result code. Please review patient record to resolve.",
                  "type" : "Literal"
               },
               "else" : {
                  "asType" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "As",
                  "operand" : {
                     "type" : "Null"
                  }
               }
            }
         }, {
            "name" : "ErrorHpvWithUnexpectedCode",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "type" : "If",
               "condition" : {
                  "asType" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "type" : "As",
                  "operand" : {
                     "valueType" : "{urn:hl7-org:elm-types:r1}Boolean",
                     "value" : "false",
                     "type" : "Literal"
                  }
               },
               "then" : {
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "An HPV test was found but with an enexpected result code. Please review patient record to resolve.",
                  "type" : "Literal"
               },
               "else" : {
                  "asType" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "As",
                  "operand" : {
                     "type" : "Null"
                  }
               }
            }
         }, {
            "name" : "Errors",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "type" : "Except",
               "operand" : [ {
                  "type" : "List",
                  "element" : [ {
                     "name" : "ErrorDiagnosticReportWithNoConclusonCodes",
                     "type" : "ExpressionRef"
                  } ]
               }, {
                  "type" : "Query",
                  "source" : [ {
                     "alias" : "X",
                     "expression" : {
                        "type" : "List",
                        "element" : [ {
                           "type" : "Null"
                        } ]
                     }
                  } ],
                  "return" : {
                     "distinct" : false,
                     "expression" : {
                        "asType" : "{urn:hl7-org:elm-types:r1}String",
                        "type" : "As",
                        "operand" : {
                           "name" : "X",
                           "type" : "AliasRef"
                        }
                     }
                  }
               } ]
            }
         }, {
            "name" : "Pregnant",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "type" : "Or",
               "operand" : [ {
                  "type" : "Exists",
                  "operand" : {
                     "name" : "PregnancyDiagnoses",
                     "type" : "ExpressionRef"
                  }
               }, {
                  "type" : "Exists",
                  "operand" : {
                     "name" : "PregnancyObservations",
                     "type" : "ExpressionRef"
                  }
               } ]
            }
         }, {
            "name" : "CervicalCancerScreeningAndMedicalHistory",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "type" : "Tuple",
               "element" : [ {
                  "name" : "patientInfo",
                  "value" : {
                     "type" : "Tuple",
                     "element" : [ {
                        "name" : "name",
                        "value" : {
                           "type" : "Concatenate",
                           "operand" : [ {
                              "name" : "ToString",
                              "libraryName" : "FHIRHelpers",
                              "type" : "FunctionRef",
                              "operand" : [ {
                                 "type" : "First",
                                 "source" : {
                                    "type" : "Flatten",
                                    "operand" : {
                                       "type" : "Query",
                                       "source" : [ {
                                          "alias" : "$this",
                                          "expression" : {
                                             "path" : "name",
                                             "type" : "Property",
                                             "source" : {
                                                "name" : "Patient",
                                                "type" : "ExpressionRef"
                                             }
                                          }
                                       } ],
                                       "where" : {
                                          "type" : "Not",
                                          "operand" : {
                                             "type" : "IsNull",
                                             "operand" : {
                                                "path" : "given",
                                                "type" : "Property",
                                                "source" : {
                                                   "name" : "$this",
                                                   "type" : "AliasRef"
                                                }
                                             }
                                          }
                                       },
                                       "return" : {
                                          "distinct" : false,
                                          "expression" : {
                                             "path" : "given",
                                             "type" : "Property",
                                             "source" : {
                                                "name" : "$this",
                                                "type" : "AliasRef"
                                             }
                                          }
                                       }
                                    }
                                 }
                              } ]
                           }, {
                              "name" : "ToString",
                              "libraryName" : "FHIRHelpers",
                              "type" : "FunctionRef",
                              "operand" : [ {
                                 "type" : "First",
                                 "source" : {
                                    "type" : "Query",
                                    "source" : [ {
                                       "alias" : "$this",
                                       "expression" : {
                                          "path" : "name",
                                          "type" : "Property",
                                          "source" : {
                                             "name" : "Patient",
                                             "type" : "ExpressionRef"
                                          }
                                       }
                                    } ],
                                    "where" : {
                                       "type" : "Not",
                                       "operand" : {
                                          "type" : "IsNull",
                                          "operand" : {
                                             "path" : "family",
                                             "type" : "Property",
                                             "source" : {
                                                "name" : "$this",
                                                "type" : "AliasRef"
                                             }
                                          }
                                       }
                                    },
                                    "return" : {
                                       "distinct" : false,
                                       "expression" : {
                                          "path" : "family",
                                          "type" : "Property",
                                          "source" : {
                                             "name" : "$this",
                                             "type" : "AliasRef"
                                          }
                                       }
                                    }
                                 }
                              } ]
                           } ]
                        }
                     }, {
                        "name" : "id",
                        "value" : {
                           "type" : "Query",
                           "source" : [ {
                              "alias" : "$this",
                              "expression" : {
                                 "path" : "identifier",
                                 "type" : "Property",
                                 "source" : {
                                    "name" : "Patient",
                                    "type" : "ExpressionRef"
                                 }
                              }
                           } ],
                           "where" : {
                              "type" : "Not",
                              "operand" : {
                                 "type" : "IsNull",
                                 "operand" : {
                                    "path" : "value",
                                    "type" : "Property",
                                    "source" : {
                                       "name" : "$this",
                                       "type" : "AliasRef"
                                    }
                                 }
                              }
                           },
                           "return" : {
                              "distinct" : false,
                              "expression" : {
                                 "path" : "value",
                                 "type" : "Property",
                                 "source" : {
                                    "name" : "$this",
                                    "type" : "AliasRef"
                                 }
                              }
                           }
                        }
                     }, {
                        "name" : "isPregnant",
                        "value" : {
                           "name" : "Pregnant",
                           "type" : "ExpressionRef"
                        }
                     }, {
                        "name" : "dateOfBirth",
                        "value" : {
                           "path" : "birthDate",
                           "type" : "Property",
                           "source" : {
                              "name" : "Patient",
                              "type" : "ExpressionRef"
                           }
                        }
                     }, {
                        "name" : "sexAtBirth",
                        "value" : {
                           "type" : "Null"
                        }
                     }, {
                        "name" : "age",
                        "value" : {
                           "precision" : "Year",
                           "type" : "CalculateAge",
                           "operand" : {
                              "path" : "birthDate.value",
                              "type" : "Property",
                              "source" : {
                                 "name" : "Patient",
                                 "type" : "ExpressionRef"
                              }
                           }
                        }
                     }, {
                        "name" : "gender",
                        "value" : {
                           "type" : "Null"
                        }
                     }, {
                        "name" : "primaryLanguage",
                        "value" : {
                           "type" : "Null"
                        }
                     }, {
                        "name" : "race",
                        "value" : {
                           "type" : "Null"
                        }
                     } ]
                  }
               }, {
                  "name" : "patientHistory",
                  "value" : {
                     "type" : "Tuple",
                     "element" : [ {
                        "name" : "conditions",
                        "value" : {
                           "name" : "PertinentConditionsSummary",
                           "type" : "ExpressionRef"
                        }
                     }, {
                        "name" : "observations",
                        "value" : {
                           "name" : "PertinentObservationsSummary",
                           "type" : "ExpressionRef"
                        }
                     }, {
                        "name" : "medications",
                        "value" : {
                           "name" : "PertinentMedicationsSummary",
                           "type" : "ExpressionRef"
                        }
                     }, {
                        "name" : "procedures",
                        "value" : {
                           "name" : "PertinentProceduresSummary",
                           "type" : "ExpressionRef"
                        }
                     }, {
                        "name" : "diagnosticReports",
                        "value" : {
                           "name" : "DiagnosticReportsSummary",
                           "type" : "ExpressionRef"
                        }
                     }, {
                        "name" : "encounters",
                        "value" : {
                           "name" : "PertinentEncountersSummary",
                           "type" : "ExpressionRef"
                        }
                     }, {
                        "name" : "immunizations",
                        "value" : {
                           "name" : "PertinentImmunizationsSummary",
                           "type" : "ExpressionRef"
                        }
                     } ]
                  }
               } ]
            }
         } ]
      }
   }
}

