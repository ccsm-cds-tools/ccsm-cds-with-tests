export const ManagementLibrary = {
   "library" : {
      "annotation" : [ {
         "translatorOptions" : "",
         "type" : "CqlToElmInfo"
      } ],
      "identifier" : {
         "id" : "ManagementLibrary",
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
            "localIdentifier" : "FHIRHelpers",
            "path" : "FHIRHelpers",
            "version" : "4.0.1"
         }, {
            "localIdentifier" : "Dash",
            "path" : "DashboardLibrary",
            "version" : "1.0.0"
         }, {
            "localIdentifier" : "ManageCommonAbnormality",
            "path" : "ManageCommonAbnormality",
            "version" : "1.1.0"
         }, {
            "localIdentifier" : "ManageRareAbnormality",
            "path" : "ManageRareAbnormality",
            "version" : "1.1.0"
         }, {
            "localIdentifier" : "ManageSpecialPopulation",
            "path" : "ManageSpecialPopulation",
            "version" : "1.1.0"
         }, {
            "localIdentifier" : "Common",
            "path" : "CCSMCommonFunctions",
            "version" : "1.0.0"
         }, {
            "localIdentifier" : "Symptomatic",
            "path" : "ScreeningSymptomaticLibrary",
            "version" : "1.0.0"
         }, {
            "localIdentifier" : "L4",
            "path" : "ScreeningAverageRiskLibrary",
            "version" : "1.0.0"
         }, {
            "localIdentifier" : "RiskTableLookup",
            "path" : "AutogeneratedTableLookup",
            "version" : "1.0.0"
         }, {
            "localIdentifier" : "Orders",
            "path" : "OrderSetLibrary",
            "version" : "1.0.0"
         } ]
      },
      "parameters" : {
         "def" : [ {
            "name" : "BiopsyLookbackPeriod",
            "accessLevel" : "Public",
            "default" : {
               "value" : 25,
               "unit" : "years",
               "type" : "Quantity"
            }
         }, {
            "name" : "BiopsyReferralPeriod",
            "accessLevel" : "Public",
            "default" : {
               "value" : 1,
               "unit" : "month",
               "type" : "Quantity"
            }
         }, {
            "name" : "ExcludeSymptomatic",
            "accessLevel" : "Public",
            "default" : {
               "valueType" : "{urn:hl7-org:elm-types:r1}Boolean",
               "value" : "true",
               "type" : "Literal"
            }
         }, {
            "name" : "HpvTestingGracePeriod",
            "accessLevel" : "Public",
            "default" : {
               "value" : 6,
               "unit" : "months",
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
            "name" : "ICD-9",
            "id" : "http://hl7.org/fhir/sid/icd-9-cm",
            "accessLevel" : "Public"
         }, {
            "name" : "ICD-10",
            "id" : "http://hl7.org/fhir/sid/icd-10-cm",
            "accessLevel" : "Public"
         }, {
            "name" : "NULL FLAVOR",
            "id" : "http://terminology.hl7.org/CodeSystem/v3-NullFlavor",
            "accessLevel" : "Public"
         }, {
            "name" : "LOCAL",
            "id" : "http://OUR-PLACEHOLDER-URL.com",
            "accessLevel" : "Public"
         } ]
      },
      "valueSets" : {
         "def" : [ {
            "name" : "All Results of High Risk HPV Test",
            "id" : "http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113762.1.4.1032.233",
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
            "name" : "Atypical Endometrial Cells",
            "id" : "103646000",
            "display" : "Atypical endometrial cells of undetermined significance (morphologic abnormality)",
            "accessLevel" : "Public",
            "codeSystem" : {
               "name" : "SNOMED-CT"
            }
         }, {
            "name" : "Atypical Endocervical Cells",
            "id" : "441094005",
            "display" : "Atypical endocervical cells on cervical Papanicolaou smear (finding)",
            "accessLevel" : "Public",
            "codeSystem" : {
               "name" : "SNOMED-CT"
            }
         }, {
            "name" : "Endocervical AIS",
            "id" : "447760009",
            "display" : "Endocervical adenocarcinoma in situ (disorder)",
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
            "name" : "AGC Favor Neoplasia",
            "id" : "373883009",
            "display" : "Atypical glandular cells, favor neoplastic (morphologic abnormality)",
            "accessLevel" : "Public",
            "codeSystem" : {
               "name" : "SNOMED-CT"
            }
         }, {
            "name" : "Endocervical Cells Favor Neoplasia",
            "id" : "373882004",
            "display" : "Atypical endocervical cells, favor neoplastic (morphologic abnormality)",
            "accessLevel" : "Public",
            "codeSystem" : {
               "name" : "SNOMED-CT"
            }
         }, {
            "name" : "Unsatisfactory",
            "id" : "126481000119106",
            "display" : "Vaginal Papanicolaou smear unsatisfactory for evaluation (finding)",
            "accessLevel" : "Public",
            "codeSystem" : {
               "name" : "SNOMED-CT"
            }
         }, {
            "name" : "Absent Transformation Zone",
            "id" : "412716005",
            "display" : "Cervical smear transformation zone cells absent (situation)",
            "accessLevel" : "Public",
            "codeSystem" : {
               "name" : "SNOMED-CT"
            }
         }, {
            "name" : "Benign Endometrial Cells",
            "id" : "125155008",
            "display" : "Endometrial cells, cytologically benign, in a postmenopausal woman (finding)",
            "accessLevel" : "Public",
            "codeSystem" : {
               "name" : "SNOMED-CT"
            }
         }, {
            "name" : "Histiocytes",
            "id" : "14295007",
            "display" : "Resident tissue macrophage (cell)",
            "accessLevel" : "Public",
            "codeSystem" : {
               "name" : "SNOMED-CT"
            }
         }, {
            "name" : "Unknown",
            "id" : "UNK",
            "display" : "Unknown",
            "accessLevel" : "Public",
            "codeSystem" : {
               "name" : "NULL FLAVOR"
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
            "name" : "Endometrial Stromal Cells",
            "id" : "ESC",
            "display" : "Endometrial stromal cells",
            "accessLevel" : "Public",
            "codeSystem" : {
               "name" : "LOCAL"
            }
         }, {
            "name" : "Benign Glandular Cells",
            "id" : "BGC",
            "display" : "Benign Glandular Cells",
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
            "name" : "HasRecentAbnormalScreening",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "name" : "HasRecentAbnormalScreening",
               "libraryName" : "Dash",
               "type" : "ExpressionRef"
            }
         }, {
            "name" : "HasHighGradePreCancerCervicalLesion",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "type" : "Exists",
               "operand" : {
                  "name" : "CervicalPrecancerDisorders",
                  "libraryName" : "Dash",
                  "type" : "ExpressionRef"
               }
            }
         }, {
            "name" : "HasCervicalCancerDiagnoses",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "type" : "Exists",
               "operand" : {
                  "name" : "CervicalCancerDiagnoses",
                  "libraryName" : "Dash",
                  "type" : "ExpressionRef"
               }
            }
         }, {
            "name" : "IsIncluded",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "type" : "And",
               "operand" : [ {
                  "name" : "FemaleorTransgenderMale",
                  "libraryName" : "Dash",
                  "type" : "ExpressionRef"
               }, {
                  "type" : "Or",
                  "operand" : [ {
                     "type" : "Or",
                     "operand" : [ {
                        "type" : "Or",
                        "operand" : [ {
                           "type" : "Or",
                           "operand" : [ {
                              "name" : "HasRecentAbnormalScreening",
                              "type" : "ExpressionRef"
                           }, {
                              "name" : "HasHighGradePreCancerCervicalLesion",
                              "type" : "ExpressionRef"
                           } ]
                        }, {
                           "name" : "HasCervicalCancerDiagnoses",
                           "type" : "ExpressionRef"
                        } ]
                     }, {
                        "type" : "Exists",
                        "operand" : {
                           "name" : "HighGradeOrCancerHistologyResults",
                           "libraryName" : "Dash",
                           "type" : "ExpressionRef"
                        }
                     } ]
                  }, {
                     "type" : "Exists",
                     "operand" : {
                        "name" : "CervixRemovalWithHighGradePrecancerOrCancerReasonCode",
                        "libraryName" : "ManageSpecialPopulation",
                        "type" : "ExpressionRef"
                     }
                  } ]
               } ]
            }
         }, {
            "name" : "Excluded",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "type" : "If",
               "condition" : {
                  "asType" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "type" : "As",
                  "operand" : {
                     "name" : "ExcludeSymptomatic",
                     "type" : "ParameterRef"
                  }
               },
               "then" : {
                  "name" : "IsSymptomatic",
                  "libraryName" : "Symptomatic",
                  "type" : "ExpressionRef"
               },
               "else" : {
                  "valueType" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "value" : "false",
                  "type" : "Literal"
               }
            }
         }, {
            "name" : "IsIncludedAndNotExcluded",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "type" : "And",
               "operand" : [ {
                  "name" : "IsIncluded",
                  "type" : "ExpressionRef"
               }, {
                  "type" : "Not",
                  "operand" : {
                     "name" : "Excluded",
                     "type" : "ExpressionRef"
                  }
               } ]
            }
         }, {
            "name" : "RareAbnormalityRecommendation",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "name" : "Recommendation",
               "libraryName" : "ManageRareAbnormality",
               "type" : "ExpressionRef"
            }
         }, {
            "name" : "WhichRarityMadeTheRecommendation",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "name" : "WhichRarityMadeTheRecommendation",
               "libraryName" : "ManageRareAbnormality",
               "type" : "ExpressionRef"
            }
         }, {
            "name" : "SpecialPopulationRecommendation",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "name" : "Recommendation",
               "libraryName" : "ManageSpecialPopulation",
               "type" : "ExpressionRef"
            }
         }, {
            "name" : "WhichPopulationMadeTheRecommendation",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "name" : "WhichPopulationMadeTheRecommendation",
               "libraryName" : "ManageSpecialPopulation",
               "type" : "ExpressionRef"
            }
         }, {
            "name" : "CommonAbnormalityRecommendation",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "name" : "Recommendation",
               "libraryName" : "ManageCommonAbnormality",
               "type" : "ExpressionRef"
            }
         }, {
            "name" : "RecommendationFromRiskTable",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "name" : "TableRecommendation",
               "libraryName" : "ManageCommonAbnormality",
               "type" : "ExpressionRef"
            }
         }, {
            "name" : "Errors",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "type" : "Union",
               "operand" : [ {
                  "type" : "List"
               }, {
                  "name" : "Errors",
                  "libraryName" : "Dash",
                  "type" : "ExpressionRef"
               } ]
            }
         }, {
            "name" : "ErrorsHaveOccurred",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "type" : "Exists",
               "operand" : {
                  "name" : "Errors",
                  "type" : "ExpressionRef"
               }
            }
         }, {
            "name" : "NoErrorsHaveOccurred",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "type" : "Not",
               "operand" : {
                  "name" : "ErrorsHaveOccurred",
                  "type" : "ExpressionRef"
               }
            }
         }, {
            "name" : "ManagementRecommendation",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "type" : "Coalesce",
               "operand" : [ {
                  "name" : "SpecialPopulationRecommendation",
                  "type" : "ExpressionRef"
               }, {
                  "name" : "RareAbnormalityRecommendation",
                  "type" : "ExpressionRef"
               }, {
                  "name" : "CommonAbnormalityRecommendation",
                  "type" : "ExpressionRef"
               } ]
            }
         }, {
            "name" : "HasRecommendation",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "type" : "And",
               "operand" : [ {
                  "type" : "Not",
                  "operand" : {
                     "type" : "IsNull",
                     "operand" : {
                        "path" : "short",
                        "type" : "Property",
                        "source" : {
                           "name" : "ManagementRecommendation",
                           "type" : "ExpressionRef"
                        }
                     }
                  }
               }, {
                  "name" : "NoErrorsHaveOccurred",
                  "type" : "ExpressionRef"
               } ]
            }
         }, {
            "name" : "RecommendColposcopy",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "type" : "Or",
               "operand" : [ {
                  "type" : "Equal",
                  "operand" : [ {
                     "path" : "short",
                     "type" : "Property",
                     "source" : {
                        "name" : "ManagementRecommendation",
                        "type" : "ExpressionRef"
                     }
                  }, {
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "Colposcopy",
                     "type" : "Literal"
                  } ]
               }, {
                  "type" : "Equal",
                  "operand" : [ {
                     "path" : "short",
                     "type" : "Property",
                     "source" : {
                        "name" : "ManagementRecommendation",
                        "type" : "ExpressionRef"
                     }
                  }, {
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "Colposcopy/Treatment",
                     "type" : "Literal"
                  } ]
               } ]
            }
         }, {
            "name" : "RecommendSurveillance",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "type" : "Equal",
               "operand" : [ {
                  "path" : "short",
                  "type" : "Property",
                  "source" : {
                     "name" : "ManagementRecommendation",
                     "type" : "ExpressionRef"
                  }
               }, {
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "Surveillance",
                  "type" : "Literal"
               } ]
            }
         }, {
            "name" : "RecommendTreatment",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "type" : "Or",
               "operand" : [ {
                  "type" : "Equal",
                  "operand" : [ {
                     "path" : "short",
                     "type" : "Property",
                     "source" : {
                        "name" : "ManagementRecommendation",
                        "type" : "ExpressionRef"
                     }
                  }, {
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "Treatment",
                     "type" : "Literal"
                  } ]
               }, {
                  "type" : "Equal",
                  "operand" : [ {
                     "path" : "short",
                     "type" : "Property",
                     "source" : {
                        "name" : "ManagementRecommendation",
                        "type" : "ExpressionRef"
                     }
                  }, {
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "Colposcopy/Treatment",
                     "type" : "Literal"
                  } ]
               } ]
            }
         }, {
            "name" : "ColposcopyOrderCode",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "name" : "ColposcopyCodeableConcept",
               "libraryName" : "Orders",
               "type" : "ExpressionRef"
            }
         }, {
            "name" : "SurveillanceOrderCode",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "name" : "SurveillanceCodeableConcept",
               "libraryName" : "Orders",
               "type" : "ExpressionRef"
            }
         }, {
            "name" : "TreatmentOrderCode",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "name" : "TreatmentCodeableConcept",
               "libraryName" : "Orders",
               "type" : "ExpressionRef"
            }
         }, {
            "name" : "ServiceRequestOrderDetail",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "type" : "Query",
               "source" : [ {
                  "alias" : "D",
                  "expression" : {
                     "path" : "details",
                     "type" : "Property",
                     "source" : {
                        "name" : "ManagementRecommendation",
                        "type" : "ExpressionRef"
                     }
                  }
               } ],
               "relationship" : [ ],
               "return" : {
                  "expression" : {
                     "type" : "Tuple",
                     "element" : [ {
                        "name" : "text",
                        "value" : {
                           "name" : "D",
                           "type" : "AliasRef"
                        }
                     } ]
                  }
               }
            }
         }, {
            "name" : "DecisionAids",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "type" : "Tuple",
               "element" : [ {
                  "name" : "recommendation",
                  "value" : {
                     "path" : "short",
                     "type" : "Property",
                     "source" : {
                        "name" : "ManagementRecommendation",
                        "type" : "ExpressionRef"
                     }
                  }
               }, {
                  "name" : "recommendationGroup",
                  "value" : {
                     "path" : "group",
                     "type" : "Property",
                     "source" : {
                        "name" : "ManagementRecommendation",
                        "type" : "ExpressionRef"
                     }
                  }
               }, {
                  "name" : "recommendationDetails",
                  "value" : {
                     "path" : "details",
                     "type" : "Property",
                     "source" : {
                        "name" : "ManagementRecommendation",
                        "type" : "ExpressionRef"
                     }
                  }
               }, {
                  "name" : "errors",
                  "value" : {
                     "name" : "Errors",
                     "type" : "ExpressionRef"
                  }
               }, {
                  "name" : "disclaimer",
                  "value" : {
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "",
                     "type" : "Literal"
                  }
               }, {
                  "name" : "suggestedOrders",
                  "value" : {
                     "type" : "List",
                     "element" : [ {
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "",
                        "type" : "Literal"
                     } ]
                  }
               } ]
            }
         } ]
      }
   }
}

