export const ManageRareAbnormality = {
   "library" : {
      "annotation" : [ {
         "translatorOptions" : "",
         "type" : "CqlToElmInfo"
      } ],
      "identifier" : {
         "id" : "ManageRareAbnormality",
         "version" : "1.1.0"
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
            "localIdentifier" : "FHIRHelpers",
            "path" : "FHIRHelpers",
            "version" : "4.0.1"
         }, {
            "localIdentifier" : "C3F",
            "path" : "CDSConnectCommonsforFHIRv401",
            "version" : "1.0.0"
         }, {
            "localIdentifier" : "Dash",
            "path" : "DashboardLibrary",
            "version" : "1.0.0"
         }, {
            "localIdentifier" : "Collate",
            "path" : "CollateManagementData",
            "version" : "1.1.0"
         }, {
            "localIdentifier" : "Common",
            "path" : "CCSMCommonFunctions",
            "version" : "1.0.0"
         }, {
            "localIdentifier" : "Symptomatic",
            "path" : "ScreeningSymptomaticLibrary",
            "version" : "1.0.0"
         } ]
      },
      "codeSystems" : {
         "def" : [ {
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
            "name" : "Premenopausal",
            "id" : "http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113762.1.4.1032.254",
            "accessLevel" : "Public"
         }, {
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
            "name" : "Premenopausal Menorrhagia",
            "id" : "627.0",
            "display" : "Premenopausal menorrhagia",
            "accessLevel" : "Public",
            "codeSystem" : {
               "name" : "ICD-9"
            }
         }, {
            "name" : "Excessive Bleeding in the Premenopausal Period",
            "id" : "N92.4",
            "display" : "Excessive bleeding in the premenopausal period",
            "accessLevel" : "Public",
            "codeSystem" : {
               "name" : "ICD-10"
            }
         }, {
            "name" : "Postmenopausal",
            "id" : "76498008",
            "display" : "Postmenopausal state (finding)",
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
            "name" : "Benign Glandular Cells",
            "id" : "BGC",
            "display" : "Benign Glandular Cells",
            "accessLevel" : "Public",
            "codeSystem" : {
               "name" : "LOCAL"
            }
         }, {
            "name" : "Endometrial Stromal Cells",
            "id" : "ESC",
            "display" : "Endometrial stromal cells",
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
            "name" : "MostRecentCytologyReport",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "type" : "If",
               "condition" : {
                  "asType" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "type" : "As",
                  "operand" : {
                     "type" : "Greater",
                     "operand" : [ {
                        "type" : "Count",
                        "source" : {
                           "name" : "SortedCytologyReports",
                           "libraryName" : "Collate",
                           "type" : "ExpressionRef"
                        }
                     }, {
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "0",
                        "type" : "Literal"
                     } ]
                  }
               },
               "then" : {
                  "type" : "Indexer",
                  "operand" : [ {
                     "name" : "SortedCytologyReports",
                     "libraryName" : "Collate",
                     "type" : "ExpressionRef"
                  }, {
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "0",
                     "type" : "Literal"
                  } ]
               },
               "else" : {
                  "type" : "As",
                  "operand" : {
                     "type" : "Null"
                  },
                  "asTypeSpecifier" : {
                     "type" : "TupleTypeSpecifier",
                     "element" : [ {
                        "name" : "riskTableInput",
                        "type" : {
                           "name" : "{urn:hl7-org:elm-types:r1}String",
                           "type" : "NamedTypeSpecifier"
                        }
                     }, {
                        "name" : "allConclusions",
                        "type" : {
                           "type" : "ListTypeSpecifier",
                           "elementType" : {
                              "name" : "{http://hl7.org/fhir}CodeableConcept",
                              "type" : "NamedTypeSpecifier"
                           }
                        }
                     }, {
                        "name" : "date",
                        "type" : {
                           "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                           "type" : "NamedTypeSpecifier"
                        }
                     } ]
                  }
               }
            }
         }, {
            "name" : "MostRecentCytologyReportWasWithinPastFiveYears",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "type" : "GreaterOrEqual",
               "operand" : [ {
                  "path" : "date",
                  "type" : "Property",
                  "source" : {
                     "name" : "MostRecentCytologyReport",
                     "type" : "ExpressionRef"
                  }
               }, {
                  "type" : "Subtract",
                  "operand" : [ {
                     "type" : "Now"
                  }, {
                     "value" : 5,
                     "unit" : "years",
                     "type" : "Quantity"
                  } ]
               } ]
            }
         }, {
            "name" : "CytologyInterpretedAsAgc",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "type" : "AnyTrue",
               "source" : {
                  "type" : "Query",
                  "source" : [ {
                     "alias" : "aC",
                     "expression" : {
                        "path" : "allConclusions",
                        "type" : "Property",
                        "source" : {
                           "name" : "MostRecentCytologyReport",
                           "type" : "ExpressionRef"
                        }
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
                              "name" : "aC",
                              "type" : "AliasRef"
                           } ]
                        }, {
                           "type" : "ToConcept",
                           "operand" : {
                              "name" : "AGC",
                              "type" : "CodeRef"
                           }
                        } ]
                     }
                  }
               }
            }
         }, {
            "name" : "CytologyInterpretedAsAgcFavorNeoplasia",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "type" : "AnyTrue",
               "source" : {
                  "type" : "Query",
                  "source" : [ {
                     "alias" : "aC",
                     "expression" : {
                        "path" : "allConclusions",
                        "type" : "Property",
                        "source" : {
                           "name" : "MostRecentCytologyReport",
                           "type" : "ExpressionRef"
                        }
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
                              "name" : "aC",
                              "type" : "AliasRef"
                           } ]
                        }, {
                           "type" : "ToConcept",
                           "operand" : {
                              "name" : "AGC Favor Neoplasia",
                              "type" : "CodeRef"
                           }
                        } ]
                     }
                  }
               }
            }
         }, {
            "name" : "CytologyInterpretedAsAis",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "type" : "AnyTrue",
               "source" : {
                  "type" : "Query",
                  "source" : [ {
                     "alias" : "aC",
                     "expression" : {
                        "path" : "allConclusions",
                        "type" : "Property",
                        "source" : {
                           "name" : "MostRecentCytologyReport",
                           "type" : "ExpressionRef"
                        }
                     }
                  } ],
                  "relationship" : [ ],
                  "return" : {
                     "expression" : {
                        "type" : "InValueSet",
                        "code" : {
                           "name" : "ToConcept",
                           "libraryName" : "FHIRHelpers",
                           "type" : "FunctionRef",
                           "operand" : [ {
                              "name" : "aC",
                              "type" : "AliasRef"
                           } ]
                        },
                        "valueset" : {
                           "name" : "AIS",
                           "libraryName" : "Dash",
                           "type" : "ValueSetRef"
                        }
                     }
                  }
               }
            }
         }, {
            "name" : "CytologyInterpretedAsAgcOrAis",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "type" : "Or",
               "operand" : [ {
                  "name" : "CytologyInterpretedAsAgc",
                  "type" : "ExpressionRef"
               }, {
                  "name" : "CytologyInterpretedAsAis",
                  "type" : "ExpressionRef"
               } ]
            }
         }, {
            "name" : "CytologyInterpretedAsAtypicalEndometrialCells",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "type" : "AnyTrue",
               "source" : {
                  "type" : "Query",
                  "source" : [ {
                     "alias" : "aC",
                     "expression" : {
                        "path" : "allConclusions",
                        "type" : "Property",
                        "source" : {
                           "name" : "MostRecentCytologyReport",
                           "type" : "ExpressionRef"
                        }
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
                              "name" : "aC",
                              "type" : "AliasRef"
                           } ]
                        }, {
                           "type" : "ToConcept",
                           "operand" : {
                              "name" : "Atypical Endometrial Cells",
                              "type" : "CodeRef"
                           }
                        } ]
                     }
                  }
               }
            }
         }, {
            "name" : "CytologyInterpretedAsAtypicalEndocervicalCells",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "type" : "AnyTrue",
               "source" : {
                  "type" : "Query",
                  "source" : [ {
                     "alias" : "aC",
                     "expression" : {
                        "path" : "allConclusions",
                        "type" : "Property",
                        "source" : {
                           "name" : "MostRecentCytologyReport",
                           "type" : "ExpressionRef"
                        }
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
                              "name" : "aC",
                              "type" : "AliasRef"
                           } ]
                        }, {
                           "type" : "ToConcept",
                           "operand" : {
                              "name" : "Atypical Endocervical Cells",
                              "type" : "CodeRef"
                           }
                        } ]
                     }
                  }
               }
            }
         }, {
            "name" : "CytologyInterpretedAsEndocervicalAis",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "type" : "AnyTrue",
               "source" : {
                  "type" : "Query",
                  "source" : [ {
                     "alias" : "aC",
                     "expression" : {
                        "path" : "allConclusions",
                        "type" : "Property",
                        "source" : {
                           "name" : "MostRecentCytologyReport",
                           "type" : "ExpressionRef"
                        }
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
                              "name" : "aC",
                              "type" : "AliasRef"
                           } ]
                        }, {
                           "type" : "ToConcept",
                           "operand" : {
                              "name" : "Endocervical AIS",
                              "type" : "CodeRef"
                           }
                        } ]
                     }
                  }
               }
            }
         }, {
            "name" : "CytologyInterpretedAsEndocervicalCellsFavorNeoplasia",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "type" : "AnyTrue",
               "source" : {
                  "type" : "Query",
                  "source" : [ {
                     "alias" : "aC",
                     "expression" : {
                        "path" : "allConclusions",
                        "type" : "Property",
                        "source" : {
                           "name" : "MostRecentCytologyReport",
                           "type" : "ExpressionRef"
                        }
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
                              "name" : "aC",
                              "type" : "AliasRef"
                           } ]
                        }, {
                           "type" : "ToConcept",
                           "operand" : {
                              "name" : "Endocervical Cells Favor Neoplasia",
                              "type" : "CodeRef"
                           }
                        } ]
                     }
                  }
               }
            }
         }, {
            "name" : "CytologyUnsatisfactory",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "type" : "AnyTrue",
               "source" : {
                  "type" : "Query",
                  "source" : [ {
                     "alias" : "aC",
                     "expression" : {
                        "path" : "allConclusions",
                        "type" : "Property",
                        "source" : {
                           "name" : "MostRecentCytologyReport",
                           "type" : "ExpressionRef"
                        }
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
                              "name" : "aC",
                              "type" : "AliasRef"
                           } ]
                        }, {
                           "type" : "ToConcept",
                           "operand" : {
                              "name" : "Unsatisfactory",
                              "type" : "CodeRef"
                           }
                        } ]
                     }
                  }
               }
            }
         }, {
            "name" : "CytologyAbsentTransformationZone",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "type" : "AnyTrue",
               "source" : {
                  "type" : "Query",
                  "source" : [ {
                     "alias" : "aC",
                     "expression" : {
                        "path" : "allConclusions",
                        "type" : "Property",
                        "source" : {
                           "name" : "MostRecentCytologyReport",
                           "type" : "ExpressionRef"
                        }
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
                              "name" : "aC",
                              "type" : "AliasRef"
                           } ]
                        }, {
                           "type" : "ToConcept",
                           "operand" : {
                              "name" : "Absent Transformation Zone",
                              "type" : "CodeRef"
                           }
                        } ]
                     }
                  }
               }
            }
         }, {
            "name" : "CytologyInterpretedAsNilm",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "type" : "AnyTrue",
               "source" : {
                  "type" : "Query",
                  "source" : [ {
                     "alias" : "aC",
                     "expression" : {
                        "path" : "allConclusions",
                        "type" : "Property",
                        "source" : {
                           "name" : "MostRecentCytologyReport",
                           "type" : "ExpressionRef"
                        }
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
                              "name" : "aC",
                              "type" : "AliasRef"
                           } ]
                        }, {
                           "type" : "ToConcept",
                           "operand" : {
                              "name" : "NILM",
                              "libraryName" : "Dash",
                              "type" : "CodeRef"
                           }
                        } ]
                     }
                  }
               }
            }
         }, {
            "name" : "SecondMostRecentCytologyReport",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "type" : "If",
               "condition" : {
                  "asType" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "type" : "As",
                  "operand" : {
                     "type" : "Greater",
                     "operand" : [ {
                        "type" : "Count",
                        "source" : {
                           "name" : "SortedCytologyReports",
                           "libraryName" : "Collate",
                           "type" : "ExpressionRef"
                        }
                     }, {
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "1",
                        "type" : "Literal"
                     } ]
                  }
               },
               "then" : {
                  "type" : "Indexer",
                  "operand" : [ {
                     "name" : "SortedCytologyReports",
                     "libraryName" : "Collate",
                     "type" : "ExpressionRef"
                  }, {
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "1",
                     "type" : "Literal"
                  } ]
               },
               "else" : {
                  "type" : "As",
                  "operand" : {
                     "type" : "Null"
                  },
                  "asTypeSpecifier" : {
                     "type" : "TupleTypeSpecifier",
                     "element" : [ {
                        "name" : "riskTableInput",
                        "type" : {
                           "name" : "{urn:hl7-org:elm-types:r1}String",
                           "type" : "NamedTypeSpecifier"
                        }
                     }, {
                        "name" : "allConclusions",
                        "type" : {
                           "type" : "ListTypeSpecifier",
                           "elementType" : {
                              "name" : "{http://hl7.org/fhir}CodeableConcept",
                              "type" : "NamedTypeSpecifier"
                           }
                        }
                     }, {
                        "name" : "date",
                        "type" : {
                           "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                           "type" : "NamedTypeSpecifier"
                        }
                     } ]
                  }
               }
            }
         }, {
            "name" : "SecondMostRecentCytologyInterpretedAsNilm",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "type" : "AnyTrue",
               "source" : {
                  "type" : "Query",
                  "source" : [ {
                     "alias" : "aC",
                     "expression" : {
                        "path" : "allConclusions",
                        "type" : "Property",
                        "source" : {
                           "name" : "SecondMostRecentCytologyReport",
                           "type" : "ExpressionRef"
                        }
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
                              "name" : "aC",
                              "type" : "AliasRef"
                           } ]
                        }, {
                           "type" : "ToConcept",
                           "operand" : {
                              "name" : "NILM",
                              "libraryName" : "Dash",
                              "type" : "CodeRef"
                           }
                        } ]
                     }
                  }
               }
            }
         }, {
            "name" : "CytologyInterpretedAsBenignEndometrialCells",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "type" : "AnyTrue",
               "source" : {
                  "type" : "Query",
                  "source" : [ {
                     "alias" : "aC",
                     "expression" : {
                        "path" : "allConclusions",
                        "type" : "Property",
                        "source" : {
                           "name" : "MostRecentCytologyReport",
                           "type" : "ExpressionRef"
                        }
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
                              "name" : "aC",
                              "type" : "AliasRef"
                           } ]
                        }, {
                           "type" : "ToConcept",
                           "operand" : {
                              "name" : "Benign Endometrial Cells",
                              "type" : "CodeRef"
                           }
                        } ]
                     }
                  }
               }
            }
         }, {
            "name" : "CytologyInterpretedAsBenignGlandularCells",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "type" : "AnyTrue",
               "source" : {
                  "type" : "Query",
                  "source" : [ {
                     "alias" : "aC",
                     "expression" : {
                        "path" : "allConclusions",
                        "type" : "Property",
                        "source" : {
                           "name" : "MostRecentCytologyReport",
                           "type" : "ExpressionRef"
                        }
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
                              "name" : "aC",
                              "type" : "AliasRef"
                           } ]
                        }, {
                           "type" : "ToConcept",
                           "operand" : {
                              "name" : "Benign Glandular Cells",
                              "type" : "CodeRef"
                           }
                        } ]
                     }
                  }
               }
            }
         }, {
            "name" : "CytologyInterpretedAsEndometrialStromalCells",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "type" : "AnyTrue",
               "source" : {
                  "type" : "Query",
                  "source" : [ {
                     "alias" : "aC",
                     "expression" : {
                        "path" : "allConclusions",
                        "type" : "Property",
                        "source" : {
                           "name" : "MostRecentCytologyReport",
                           "type" : "ExpressionRef"
                        }
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
                              "name" : "aC",
                              "type" : "AliasRef"
                           } ]
                        }, {
                           "type" : "ToConcept",
                           "operand" : {
                              "name" : "Endometrial Stromal Cells",
                              "type" : "CodeRef"
                           }
                        } ]
                     }
                  }
               }
            }
         }, {
            "name" : "CytologyInterpretedAsHistiocytes",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "type" : "AnyTrue",
               "source" : {
                  "type" : "Query",
                  "source" : [ {
                     "alias" : "aC",
                     "expression" : {
                        "path" : "allConclusions",
                        "type" : "Property",
                        "source" : {
                           "name" : "MostRecentCytologyReport",
                           "type" : "ExpressionRef"
                        }
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
                              "name" : "aC",
                              "type" : "AliasRef"
                           } ]
                        }, {
                           "type" : "ToConcept",
                           "operand" : {
                              "name" : "Histiocytes",
                              "type" : "CodeRef"
                           }
                        } ]
                     }
                  }
               }
            }
         }, {
            "name" : "HasPremenopausalObservationOrCondition",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "type" : "Or",
               "operand" : [ {
                  "type" : "Exists",
                  "operand" : {
                     "name" : "PremenopausalObservations",
                     "libraryName" : "Dash",
                     "type" : "ExpressionRef"
                  }
               }, {
                  "type" : "Exists",
                  "operand" : {
                     "name" : "PremenopausalConditions",
                     "libraryName" : "Dash",
                     "type" : "ExpressionRef"
                  }
               } ]
            }
         }, {
            "name" : "HasPostmenopausalObservationOrCondition",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "type" : "Or",
               "operand" : [ {
                  "type" : "Exists",
                  "operand" : {
                     "name" : "PostmenopausalObservations",
                     "libraryName" : "Dash",
                     "type" : "ExpressionRef"
                  }
               }, {
                  "type" : "Exists",
                  "operand" : {
                     "name" : "PostmenopausalConditions",
                     "libraryName" : "Dash",
                     "type" : "ExpressionRef"
                  }
               } ]
            }
         }, {
            "name" : "HistologyInterpretedAsCin1",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "type" : "AnyTrue",
               "source" : {
                  "type" : "Query",
                  "source" : [ {
                     "alias" : "aC",
                     "expression" : {
                        "path" : "allConclusions",
                        "type" : "Property",
                        "source" : {
                           "name" : "MostRecentBiopsyReport",
                           "libraryName" : "Collate",
                           "type" : "ExpressionRef"
                        }
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
                              "name" : "aC",
                              "type" : "AliasRef"
                           } ]
                        }, {
                           "type" : "ToConcept",
                           "operand" : {
                              "name" : "CIN1",
                              "type" : "CodeRef"
                           }
                        } ]
                     }
                  }
               }
            }
         }, {
            "name" : "HistologyInterpretedAsNormal",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "type" : "AnyTrue",
               "source" : {
                  "type" : "Query",
                  "source" : [ {
                     "alias" : "aC",
                     "expression" : {
                        "path" : "allConclusions",
                        "type" : "Property",
                        "source" : {
                           "name" : "MostRecentBiopsyReport",
                           "libraryName" : "Collate",
                           "type" : "ExpressionRef"
                        }
                     }
                  } ],
                  "relationship" : [ ],
                  "return" : {
                     "expression" : {
                        "type" : "InValueSet",
                        "code" : {
                           "name" : "ToConcept",
                           "libraryName" : "FHIRHelpers",
                           "type" : "FunctionRef",
                           "operand" : [ {
                              "name" : "aC",
                              "type" : "AliasRef"
                           } ]
                        },
                        "valueset" : {
                           "name" : "Normal Histology Finding",
                           "type" : "ValueSetRef"
                        }
                     }
                  }
               }
            }
         }, {
            "name" : "HistologyInterpretedAsCin1OrNormal",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "type" : "Or",
               "operand" : [ {
                  "name" : "HistologyInterpretedAsCin1",
                  "type" : "ExpressionRef"
               }, {
                  "name" : "HistologyInterpretedAsNormal",
                  "type" : "ExpressionRef"
               } ]
            }
         }, {
            "name" : "HistologyInterpretedAsCancer",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "type" : "AnyTrue",
               "source" : {
                  "type" : "Query",
                  "source" : [ {
                     "alias" : "aC",
                     "expression" : {
                        "path" : "allConclusions",
                        "type" : "Property",
                        "source" : {
                           "name" : "MostRecentBiopsyReport",
                           "libraryName" : "Collate",
                           "type" : "ExpressionRef"
                        }
                     }
                  } ],
                  "relationship" : [ ],
                  "return" : {
                     "expression" : {
                        "type" : "InValueSet",
                        "code" : {
                           "name" : "ToConcept",
                           "libraryName" : "FHIRHelpers",
                           "type" : "FunctionRef",
                           "operand" : [ {
                              "name" : "aC",
                              "type" : "AliasRef"
                           } ]
                        },
                        "valueset" : {
                           "name" : "Histologic cancer",
                           "libraryName" : "Dash",
                           "type" : "ValueSetRef"
                        }
                     }
                  }
               }
            }
         }, {
            "name" : "CancerDiagnosisAfterMostRecentCytology",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "type" : "Exists",
               "operand" : {
                  "type" : "Query",
                  "source" : [ {
                     "alias" : "C",
                     "expression" : {
                        "name" : "CervicalCancerDiagnoses",
                        "libraryName" : "Dash",
                        "type" : "ExpressionRef"
                     }
                  } ],
                  "relationship" : [ ],
                  "where" : {
                     "type" : "Greater",
                     "operand" : [ {
                        "name" : "ConditionDate",
                        "libraryName" : "Common",
                        "type" : "FunctionRef",
                        "operand" : [ {
                           "name" : "C",
                           "type" : "AliasRef"
                        } ]
                     }, {
                        "path" : "date",
                        "type" : "Property",
                        "source" : {
                           "name" : "MostRecentCytologyReport",
                           "type" : "ExpressionRef"
                        }
                     } ]
                  }
               }
            }
         }, {
            "name" : "AnyHpvSinceMostRecentCytology",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "type" : "Exists",
               "operand" : {
                  "type" : "Query",
                  "source" : [ {
                     "alias" : "B",
                     "expression" : {
                        "name" : "SortedHpvReports",
                        "libraryName" : "Collate",
                        "type" : "ExpressionRef"
                     }
                  } ],
                  "relationship" : [ ],
                  "where" : {
                     "type" : "GreaterOrEqual",
                     "operand" : [ {
                        "path" : "date",
                        "scope" : "B",
                        "type" : "Property"
                     }, {
                        "type" : "Subtract",
                        "operand" : [ {
                           "path" : "date",
                           "type" : "Property",
                           "source" : {
                              "name" : "MostRecentCytologyReport",
                              "type" : "ExpressionRef"
                           }
                        }, {
                           "value" : 1,
                           "unit" : "day",
                           "type" : "Quantity"
                        } ]
                     } ]
                  }
               }
            }
         }, {
            "name" : "UnknownHpvCotest",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "type" : "And",
               "operand" : [ {
                  "type" : "And",
                  "operand" : [ {
                     "type" : "In",
                     "operand" : [ {
                        "path" : "date",
                        "type" : "Property",
                        "source" : {
                           "name" : "MostRecentHpvReport",
                           "libraryName" : "Collate",
                           "type" : "ExpressionRef"
                        }
                     }, {
                        "lowClosed" : true,
                        "highClosed" : true,
                        "type" : "Interval",
                        "low" : {
                           "type" : "Subtract",
                           "operand" : [ {
                              "path" : "date",
                              "type" : "Property",
                              "source" : {
                                 "name" : "MostRecentCytologyReport",
                                 "type" : "ExpressionRef"
                              }
                           }, {
                              "value" : 1,
                              "unit" : "day",
                              "type" : "Quantity"
                           } ]
                        },
                        "high" : {
                           "type" : "Add",
                           "operand" : [ {
                              "path" : "date",
                              "type" : "Property",
                              "source" : {
                                 "name" : "MostRecentCytologyReport",
                                 "type" : "ExpressionRef"
                              }
                           }, {
                              "value" : 1,
                              "unit" : "day",
                              "type" : "Quantity"
                           } ]
                        }
                     } ]
                  }, {
                     "type" : "Not",
                     "operand" : {
                        "type" : "IsNull",
                        "operand" : {
                           "path" : "date",
                           "type" : "Property",
                           "source" : {
                              "name" : "MostRecentCytologyReport",
                              "type" : "ExpressionRef"
                           }
                        }
                     }
                  } ]
               }, {
                  "type" : "AnyTrue",
                  "source" : {
                     "type" : "Query",
                     "source" : [ {
                        "alias" : "aC",
                        "expression" : {
                           "path" : "allConclusions",
                           "type" : "Property",
                           "source" : {
                              "name" : "MostRecentHpvReport",
                              "libraryName" : "Collate",
                              "type" : "ExpressionRef"
                           }
                        }
                     } ],
                     "relationship" : [ ],
                     "return" : {
                        "expression" : {
                           "type" : "Or",
                           "operand" : [ {
                              "type" : "Equivalent",
                              "operand" : [ {
                                 "name" : "ToConcept",
                                 "libraryName" : "FHIRHelpers",
                                 "type" : "FunctionRef",
                                 "operand" : [ {
                                    "name" : "aC",
                                    "type" : "AliasRef"
                                 } ]
                              }, {
                                 "type" : "ToConcept",
                                 "operand" : {
                                    "name" : "Unknown",
                                    "type" : "CodeRef"
                                 }
                              } ]
                           }, {
                              "type" : "Not",
                              "operand" : {
                                 "type" : "InValueSet",
                                 "code" : {
                                    "name" : "ToConcept",
                                    "libraryName" : "FHIRHelpers",
                                    "type" : "FunctionRef",
                                    "operand" : [ {
                                       "name" : "aC",
                                       "type" : "AliasRef"
                                    } ]
                                 },
                                 "valueset" : {
                                    "name" : "All Results of High Risk HPV Test",
                                    "type" : "ValueSetRef"
                                 }
                              }
                           } ]
                        }
                     }
                  }
               } ]
            }
         }, {
            "name" : "NegativeOrUnknownHpvCotest",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "type" : "And",
               "operand" : [ {
                  "type" : "And",
                  "operand" : [ {
                     "type" : "In",
                     "operand" : [ {
                        "path" : "date",
                        "type" : "Property",
                        "source" : {
                           "name" : "MostRecentHpvReport",
                           "libraryName" : "Collate",
                           "type" : "ExpressionRef"
                        }
                     }, {
                        "lowClosed" : true,
                        "highClosed" : true,
                        "type" : "Interval",
                        "low" : {
                           "type" : "Subtract",
                           "operand" : [ {
                              "path" : "date",
                              "type" : "Property",
                              "source" : {
                                 "name" : "MostRecentCytologyReport",
                                 "type" : "ExpressionRef"
                              }
                           }, {
                              "value" : 1,
                              "unit" : "day",
                              "type" : "Quantity"
                           } ]
                        },
                        "high" : {
                           "type" : "Add",
                           "operand" : [ {
                              "path" : "date",
                              "type" : "Property",
                              "source" : {
                                 "name" : "MostRecentCytologyReport",
                                 "type" : "ExpressionRef"
                              }
                           }, {
                              "value" : 1,
                              "unit" : "day",
                              "type" : "Quantity"
                           } ]
                        }
                     } ]
                  }, {
                     "type" : "Not",
                     "operand" : {
                        "type" : "IsNull",
                        "operand" : {
                           "path" : "date",
                           "type" : "Property",
                           "source" : {
                              "name" : "MostRecentCytologyReport",
                              "type" : "ExpressionRef"
                           }
                        }
                     }
                  } ]
               }, {
                  "type" : "AnyTrue",
                  "source" : {
                     "type" : "Query",
                     "source" : [ {
                        "alias" : "aC",
                        "expression" : {
                           "path" : "allConclusions",
                           "type" : "Property",
                           "source" : {
                              "name" : "MostRecentHpvReport",
                              "libraryName" : "Collate",
                              "type" : "ExpressionRef"
                           }
                        }
                     } ],
                     "relationship" : [ ],
                     "return" : {
                        "expression" : {
                           "type" : "Or",
                           "operand" : [ {
                              "type" : "Or",
                              "operand" : [ {
                                 "type" : "InValueSet",
                                 "code" : {
                                    "name" : "ToConcept",
                                    "libraryName" : "FHIRHelpers",
                                    "type" : "FunctionRef",
                                    "operand" : [ {
                                       "name" : "aC",
                                       "type" : "AliasRef"
                                    } ]
                                 },
                                 "valueset" : {
                                    "name" : "HPV Negative Results",
                                    "libraryName" : "Dash",
                                    "type" : "ValueSetRef"
                                 }
                              }, {
                                 "type" : "Equivalent",
                                 "operand" : [ {
                                    "name" : "ToConcept",
                                    "libraryName" : "FHIRHelpers",
                                    "type" : "FunctionRef",
                                    "operand" : [ {
                                       "name" : "aC",
                                       "type" : "AliasRef"
                                    } ]
                                 }, {
                                    "type" : "ToConcept",
                                    "operand" : {
                                       "name" : "Unknown",
                                       "type" : "CodeRef"
                                    }
                                 } ]
                              } ]
                           }, {
                              "type" : "Not",
                              "operand" : {
                                 "type" : "InValueSet",
                                 "code" : {
                                    "name" : "ToConcept",
                                    "libraryName" : "FHIRHelpers",
                                    "type" : "FunctionRef",
                                    "operand" : [ {
                                       "name" : "aC",
                                       "type" : "AliasRef"
                                    } ]
                                 },
                                 "valueset" : {
                                    "name" : "All Results of High Risk HPV Test",
                                    "type" : "ValueSetRef"
                                 }
                              }
                           } ]
                        }
                     }
                  }
               } ]
            }
         }, {
            "name" : "PositiveUntypedHpvCotest",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "type" : "And",
               "operand" : [ {
                  "type" : "And",
                  "operand" : [ {
                     "type" : "In",
                     "operand" : [ {
                        "path" : "date",
                        "type" : "Property",
                        "source" : {
                           "name" : "MostRecentHpvReport",
                           "libraryName" : "Collate",
                           "type" : "ExpressionRef"
                        }
                     }, {
                        "lowClosed" : true,
                        "highClosed" : true,
                        "type" : "Interval",
                        "low" : {
                           "type" : "Subtract",
                           "operand" : [ {
                              "path" : "date",
                              "type" : "Property",
                              "source" : {
                                 "name" : "MostRecentCytologyReport",
                                 "type" : "ExpressionRef"
                              }
                           }, {
                              "value" : 1,
                              "unit" : "day",
                              "type" : "Quantity"
                           } ]
                        },
                        "high" : {
                           "type" : "Add",
                           "operand" : [ {
                              "path" : "date",
                              "type" : "Property",
                              "source" : {
                                 "name" : "MostRecentCytologyReport",
                                 "type" : "ExpressionRef"
                              }
                           }, {
                              "value" : 1,
                              "unit" : "day",
                              "type" : "Quantity"
                           } ]
                        }
                     } ]
                  }, {
                     "type" : "Not",
                     "operand" : {
                        "type" : "IsNull",
                        "operand" : {
                           "path" : "date",
                           "type" : "Property",
                           "source" : {
                              "name" : "MostRecentCytologyReport",
                              "type" : "ExpressionRef"
                           }
                        }
                     }
                  } ]
               }, {
                  "type" : "AnyTrue",
                  "source" : {
                     "type" : "Query",
                     "source" : [ {
                        "alias" : "aC",
                        "expression" : {
                           "path" : "allConclusions",
                           "type" : "Property",
                           "source" : {
                              "name" : "MostRecentHpvReport",
                              "libraryName" : "Collate",
                              "type" : "ExpressionRef"
                           }
                        }
                     } ],
                     "relationship" : [ ],
                     "return" : {
                        "expression" : {
                           "type" : "InValueSet",
                           "code" : {
                              "name" : "ToConcept",
                              "libraryName" : "FHIRHelpers",
                              "type" : "FunctionRef",
                              "operand" : [ {
                                 "name" : "aC",
                                 "type" : "AliasRef"
                              } ]
                           },
                           "valueset" : {
                              "name" : "High Risk Positive HPV Results Without HPV16 or HPV18",
                              "libraryName" : "Dash",
                              "type" : "ValueSetRef"
                           }
                        }
                     }
                  }
               } ]
            }
         }, {
            "name" : "PositiveHpv16or18Cotest",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "type" : "And",
               "operand" : [ {
                  "type" : "And",
                  "operand" : [ {
                     "type" : "In",
                     "operand" : [ {
                        "path" : "date",
                        "type" : "Property",
                        "source" : {
                           "name" : "MostRecentHpvReport",
                           "libraryName" : "Collate",
                           "type" : "ExpressionRef"
                        }
                     }, {
                        "lowClosed" : true,
                        "highClosed" : true,
                        "type" : "Interval",
                        "low" : {
                           "type" : "Subtract",
                           "operand" : [ {
                              "path" : "date",
                              "type" : "Property",
                              "source" : {
                                 "name" : "MostRecentCytologyReport",
                                 "type" : "ExpressionRef"
                              }
                           }, {
                              "value" : 1,
                              "unit" : "day",
                              "type" : "Quantity"
                           } ]
                        },
                        "high" : {
                           "type" : "Add",
                           "operand" : [ {
                              "path" : "date",
                              "type" : "Property",
                              "source" : {
                                 "name" : "MostRecentCytologyReport",
                                 "type" : "ExpressionRef"
                              }
                           }, {
                              "value" : 1,
                              "unit" : "day",
                              "type" : "Quantity"
                           } ]
                        }
                     } ]
                  }, {
                     "type" : "Not",
                     "operand" : {
                        "type" : "IsNull",
                        "operand" : {
                           "path" : "date",
                           "type" : "Property",
                           "source" : {
                              "name" : "MostRecentCytologyReport",
                              "type" : "ExpressionRef"
                           }
                        }
                     }
                  } ]
               }, {
                  "type" : "AnyTrue",
                  "source" : {
                     "type" : "Query",
                     "source" : [ {
                        "alias" : "aC",
                        "expression" : {
                           "path" : "allConclusions",
                           "type" : "Property",
                           "source" : {
                              "name" : "MostRecentHpvReport",
                              "libraryName" : "Collate",
                              "type" : "ExpressionRef"
                           }
                        }
                     } ],
                     "relationship" : [ ],
                     "return" : {
                        "expression" : {
                           "type" : "Or",
                           "operand" : [ {
                              "type" : "Equivalent",
                              "operand" : [ {
                                 "name" : "ToConcept",
                                 "libraryName" : "FHIRHelpers",
                                 "type" : "FunctionRef",
                                 "operand" : [ {
                                    "name" : "aC",
                                    "type" : "AliasRef"
                                 } ]
                              }, {
                                 "type" : "ToConcept",
                                 "operand" : {
                                    "name" : "HPV16+",
                                    "type" : "CodeRef"
                                 }
                              } ]
                           }, {
                              "type" : "Equivalent",
                              "operand" : [ {
                                 "name" : "ToConcept",
                                 "libraryName" : "FHIRHelpers",
                                 "type" : "FunctionRef",
                                 "operand" : [ {
                                    "name" : "aC",
                                    "type" : "AliasRef"
                                 } ]
                              }, {
                                 "type" : "ToConcept",
                                 "operand" : {
                                    "name" : "HPV18+",
                                    "type" : "CodeRef"
                                 }
                              } ]
                           } ]
                        }
                     }
                  }
               } ]
            }
         }, {
            "name" : "HasRemovalOfCervixProcedures",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "type" : "Exists",
               "operand" : {
                  "name" : "RemovalOfCervixProcedures",
                  "libraryName" : "Dash",
                  "type" : "ExpressionRef"
               }
            }
         }, {
            "name" : "HasAbsenceOfCervixDiagnoses",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "type" : "Exists",
               "operand" : {
                  "name" : "AbsenceOfCervixDiagnoses",
                  "libraryName" : "Dash",
                  "type" : "ExpressionRef"
               }
            }
         }, {
            "name" : "HasAbsenceOfCervixObservations",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "type" : "Exists",
               "operand" : {
                  "name" : "AbsenceOfCervixObservations",
                  "libraryName" : "Dash",
                  "type" : "ExpressionRef"
               }
            }
         }, {
            "name" : "AbsenceOrRemovalOfCervix",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "type" : "Or",
               "operand" : [ {
                  "type" : "Or",
                  "operand" : [ {
                     "name" : "HasRemovalOfCervixProcedures",
                     "type" : "ExpressionRef"
                  }, {
                     "name" : "HasAbsenceOfCervixDiagnoses",
                     "type" : "ExpressionRef"
                  } ]
               }, {
                  "name" : "HasAbsenceOfCervixObservations",
                  "type" : "ExpressionRef"
               } ]
            }
         }, {
            "name" : "RecommendationForRareCytology",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "type" : "Case",
               "caseItem" : [ {
                  "when" : {
                     "type" : "And",
                     "operand" : [ {
                        "type" : "And",
                        "operand" : [ {
                           "type" : "And",
                           "operand" : [ {
                              "name" : "MostRecentCytologyReportWasWithinPastFiveYears",
                              "type" : "ExpressionRef"
                           }, {
                              "type" : "Or",
                              "operand" : [ {
                                 "name" : "CytologyInterpretedAsAgc",
                                 "type" : "ExpressionRef"
                              }, {
                                 "name" : "CytologyInterpretedAsAtypicalEndocervicalCells",
                                 "type" : "ExpressionRef"
                              } ]
                           } ]
                        }, {
                           "type" : "And",
                           "operand" : [ {
                              "type" : "In",
                              "operand" : [ {
                                 "path" : "date",
                                 "type" : "Property",
                                 "source" : {
                                    "name" : "MostRecentBiopsyReport",
                                    "libraryName" : "Collate",
                                    "type" : "ExpressionRef"
                                 }
                              }, {
                                 "lowClosed" : false,
                                 "highClosed" : true,
                                 "type" : "Interval",
                                 "low" : {
                                    "path" : "date",
                                    "type" : "Property",
                                    "source" : {
                                       "name" : "MostRecentCytologyReport",
                                       "type" : "ExpressionRef"
                                    }
                                 },
                                 "high" : {
                                    "type" : "Add",
                                    "operand" : [ {
                                       "path" : "date",
                                       "type" : "Property",
                                       "source" : {
                                          "name" : "MostRecentCytologyReport",
                                          "type" : "ExpressionRef"
                                       }
                                    }, {
                                       "value" : 12,
                                       "unit" : "months",
                                       "type" : "Quantity"
                                    } ]
                                 }
                              } ]
                           }, {
                              "type" : "Not",
                              "operand" : {
                                 "type" : "IsNull",
                                 "operand" : {
                                    "path" : "date",
                                    "type" : "Property",
                                    "source" : {
                                       "name" : "MostRecentCytologyReport",
                                       "type" : "ExpressionRef"
                                    }
                                 }
                              }
                           } ]
                        } ]
                     }, {
                        "name" : "HistologyInterpretedAsCin1OrNormal",
                        "type" : "ExpressionRef"
                     } ]
                  },
                  "then" : {
                     "type" : "Tuple",
                     "element" : [ {
                        "name" : "short",
                        "value" : {
                           "valueType" : "{urn:hl7-org:elm-types:r1}String",
                           "value" : "Surveillance",
                           "type" : "Literal"
                        }
                     }, {
                        "name" : "date",
                        "value" : {
                           "type" : "Add",
                           "operand" : [ {
                              "name" : "DateOfMostRecentReport",
                              "libraryName" : "Collate",
                              "type" : "ExpressionRef"
                           }, {
                              "value" : 1,
                              "unit" : "year",
                              "type" : "Quantity"
                           } ]
                        }
                     }, {
                        "name" : "group",
                        "value" : {
                           "valueType" : "{urn:hl7-org:elm-types:r1}String",
                           "value" : "Rare Cytology (G.1.4)",
                           "type" : "Literal"
                        }
                     }, {
                        "name" : "details",
                        "value" : {
                           "type" : "List",
                           "element" : [ {
                              "valueType" : "{urn:hl7-org:elm-types:r1}String",
                              "value" : "For patients with cytology showing AGC not otherwise specified or atypical endocervical cells not otherwise specified in whom histologic HSIL (CIN 2+) or AIS/cancer is not identified, cotesting at one and two years is recommended. If both cotests are negative, repeat cotesting at 3 years is recommended. If any test is abnormal, then colposcopy is recommended (BII).",
                              "type" : "Literal"
                           } ]
                        }
                     } ]
                  }
               }, {
                  "when" : {
                     "type" : "And",
                     "operand" : [ {
                        "type" : "And",
                        "operand" : [ {
                           "name" : "MostRecentCytologyReportWasWithinPastFiveYears",
                           "type" : "ExpressionRef"
                        }, {
                           "type" : "Or",
                           "operand" : [ {
                              "type" : "Or",
                              "operand" : [ {
                                 "name" : "CytologyInterpretedAsAgcFavorNeoplasia",
                                 "type" : "ExpressionRef"
                              }, {
                                 "name" : "CytologyInterpretedAsEndocervicalCellsFavorNeoplasia",
                                 "type" : "ExpressionRef"
                              } ]
                           }, {
                              "name" : "CytologyInterpretedAsEndocervicalAis",
                              "type" : "ExpressionRef"
                           } ]
                        } ]
                     }, {
                        "type" : "Not",
                        "operand" : {
                           "type" : "Or",
                           "operand" : [ {
                              "name" : "CancerDiagnosisAfterMostRecentCytology",
                              "type" : "ExpressionRef"
                           }, {
                              "type" : "And",
                              "operand" : [ {
                                 "name" : "HistologyInterpretedAsCancer",
                                 "type" : "ExpressionRef"
                              }, {
                                 "type" : "Greater",
                                 "operand" : [ {
                                    "path" : "date",
                                    "type" : "Property",
                                    "source" : {
                                       "name" : "MostRecentBiopsyReport",
                                       "libraryName" : "Collate",
                                       "type" : "ExpressionRef"
                                    }
                                 }, {
                                    "path" : "date",
                                    "type" : "Property",
                                    "source" : {
                                       "name" : "MostRecentCytologyReport",
                                       "type" : "ExpressionRef"
                                    }
                                 } ]
                              } ]
                           } ]
                        }
                     } ]
                  },
                  "then" : {
                     "type" : "Tuple",
                     "element" : [ {
                        "name" : "short",
                        "value" : {
                           "valueType" : "{urn:hl7-org:elm-types:r1}String",
                           "value" : "See Details",
                           "type" : "Literal"
                        }
                     }, {
                        "name" : "date",
                        "value" : {
                           "type" : "Today"
                        }
                     }, {
                        "name" : "group",
                        "value" : {
                           "valueType" : "{urn:hl7-org:elm-types:r1}String",
                           "value" : "Rare Cytology (G.1.5)",
                           "type" : "Literal"
                        }
                     }, {
                        "name" : "details",
                        "value" : {
                           "type" : "List",
                           "element" : [ {
                              "valueType" : "{urn:hl7-org:elm-types:r1}String",
                              "value" : "For patients with atypical glandular or endocervical cells 'favor neoplasia' or endocervical AIS cytology, if invasive disease is not identified during initial colposcopic workup, a diagnostic excisional procedure is recommended. The diagnostic excisional procedure used in this setting should provide an intact specimen with interpretable margins (BII). Endocervical sampling above the excisional bed is preferred (BII).",
                              "type" : "Literal"
                           } ]
                        }
                     } ]
                  }
               }, {
                  "when" : {
                     "type" : "And",
                     "operand" : [ {
                        "type" : "And",
                        "operand" : [ {
                           "type" : "And",
                           "operand" : [ {
                              "type" : "And",
                              "operand" : [ {
                                 "type" : "Less",
                                 "operand" : [ {
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
                                 }, {
                                    "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                                    "value" : "35",
                                    "type" : "Literal"
                                 } ]
                              }, {
                                 "name" : "MostRecentCytologyReportWasWithinPastFiveYears",
                                 "type" : "ExpressionRef"
                              } ]
                           }, {
                              "name" : "CytologyInterpretedAsAgcOrAis",
                              "type" : "ExpressionRef"
                           } ]
                        }, {
                           "type" : "Not",
                           "operand" : {
                              "name" : "CytologyInterpretedAsAtypicalEndometrialCells",
                              "type" : "ExpressionRef"
                           }
                        } ]
                     }, {
                        "type" : "Not",
                        "operand" : {
                           "name" : "Pregnant",
                           "libraryName" : "Dash",
                           "type" : "ExpressionRef"
                        }
                     } ]
                  },
                  "then" : {
                     "type" : "Tuple",
                     "element" : [ {
                        "name" : "short",
                        "value" : {
                           "valueType" : "{urn:hl7-org:elm-types:r1}String",
                           "value" : "See Details",
                           "type" : "Literal"
                        }
                     }, {
                        "name" : "date",
                        "value" : {
                           "type" : "Today"
                        }
                     }, {
                        "name" : "group",
                        "value" : {
                           "valueType" : "{urn:hl7-org:elm-types:r1}String",
                           "value" : "Rare Cytology (G.1.1)",
                           "type" : "Literal"
                        }
                     }, {
                        "name" : "details",
                        "value" : {
                           "type" : "List",
                           "element" : [ {
                              "valueType" : "{urn:hl7-org:elm-types:r1}String",
                              "value" : "For nonpregnant patients of all ages with all subcategories of AGC and AIS, except when atypical endometrial cells are specified, colposcopy is recommended regardless of HPV test result; endocervical sampling is recommended at initial colposcopy except in pregnancy (for management in pregnancy, see Section K.2) (AII). Accordingly, triage by reflex HPV testing is not recommended, and triage by repeat cytology is unacceptable (DII). Endometrial sampling is also recommended for nonpregnant patients younger than 35 years at increased risk of endometrial neoplasia based on clinical indications (e.g., abnormal uterine bleeding, conditions suggesting chronic anovulation, or obesity) (AII).",
                              "type" : "Literal"
                           } ]
                        }
                     } ]
                  }
               }, {
                  "when" : {
                     "type" : "And",
                     "operand" : [ {
                        "type" : "And",
                        "operand" : [ {
                           "type" : "And",
                           "operand" : [ {
                              "type" : "And",
                              "operand" : [ {
                                 "type" : "GreaterOrEqual",
                                 "operand" : [ {
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
                                 }, {
                                    "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                                    "value" : "35",
                                    "type" : "Literal"
                                 } ]
                              }, {
                                 "name" : "MostRecentCytologyReportWasWithinPastFiveYears",
                                 "type" : "ExpressionRef"
                              } ]
                           }, {
                              "name" : "CytologyInterpretedAsAgcOrAis",
                              "type" : "ExpressionRef"
                           } ]
                        }, {
                           "type" : "Not",
                           "operand" : {
                              "name" : "CytologyInterpretedAsAtypicalEndometrialCells",
                              "type" : "ExpressionRef"
                           }
                        } ]
                     }, {
                        "type" : "Not",
                        "operand" : {
                           "name" : "Pregnant",
                           "libraryName" : "Dash",
                           "type" : "ExpressionRef"
                        }
                     } ]
                  },
                  "then" : {
                     "type" : "Tuple",
                     "element" : [ {
                        "name" : "short",
                        "value" : {
                           "valueType" : "{urn:hl7-org:elm-types:r1}String",
                           "value" : "See Details",
                           "type" : "Literal"
                        }
                     }, {
                        "name" : "date",
                        "value" : {
                           "type" : "Today"
                        }
                     }, {
                        "name" : "group",
                        "value" : {
                           "valueType" : "{urn:hl7-org:elm-types:r1}String",
                           "value" : "Rare Cytology (G.1.2)",
                           "type" : "Literal"
                        }
                     }, {
                        "name" : "details",
                        "value" : {
                           "type" : "List",
                           "element" : [ {
                              "valueType" : "{urn:hl7-org:elm-types:r1}String",
                              "value" : "For nonpregnant patients of all ages with all subcategories of AGC and AIS, except when atypical endometrial cells are specified, colposcopy is recommended regardless of HPV test result; endocervical sampling is recommended at initial colposcopy except in pregnancy (for management in pregnancy, see Section K.2) (AII). Accordingly, triage by reflex HPV testing is not recommended, and triage by repeat cytology is unacceptable (DII). Endometrial sampling is recommended in conjunction with colposcopy and endocervical sampling in nonpregnant patients 35 years or older with all categories of AGC and AIS (AII).",
                              "type" : "Literal"
                           } ]
                        }
                     } ]
                  }
               }, {
                  "when" : {
                     "type" : "And",
                     "operand" : [ {
                        "type" : "And",
                        "operand" : [ {
                           "type" : "And",
                           "operand" : [ {
                              "name" : "MostRecentCytologyReportWasWithinPastFiveYears",
                              "type" : "ExpressionRef"
                           }, {
                              "name" : "CytologyInterpretedAsAgcOrAis",
                              "type" : "ExpressionRef"
                           } ]
                        }, {
                           "name" : "CytologyInterpretedAsAtypicalEndometrialCells",
                           "type" : "ExpressionRef"
                        } ]
                     }, {
                        "type" : "Not",
                        "operand" : {
                           "name" : "Pregnant",
                           "libraryName" : "Dash",
                           "type" : "ExpressionRef"
                        }
                     } ]
                  },
                  "then" : {
                     "type" : "Tuple",
                     "element" : [ {
                        "name" : "short",
                        "value" : {
                           "valueType" : "{urn:hl7-org:elm-types:r1}String",
                           "value" : "See Details",
                           "type" : "Literal"
                        }
                     }, {
                        "name" : "date",
                        "value" : {
                           "type" : "Today"
                        }
                     }, {
                        "name" : "group",
                        "value" : {
                           "valueType" : "{urn:hl7-org:elm-types:r1}String",
                           "value" : "Rare Cytology (G.1.3)",
                           "type" : "Literal"
                        }
                     }, {
                        "name" : "details",
                        "value" : {
                           "type" : "List",
                           "element" : [ {
                              "valueType" : "{urn:hl7-org:elm-types:r1}String",
                              "value" : "For patients with atypical endometrial cells specified, initial evaluation limited to endometrial and endocervical sampling is preferred, with colposcopy acceptable at the time of initial evaluation. If colposcopy was deferred and no endometrial pathology is identified, additional evaluation with colposcopy is then recommended.",
                              "type" : "Literal"
                           } ]
                        }
                     } ]
                  }
               }, {
                  "when" : {
                     "type" : "And",
                     "operand" : [ {
                        "type" : "And",
                        "operand" : [ {
                           "name" : "MostRecentCytologyReportWasWithinPastFiveYears",
                           "type" : "ExpressionRef"
                        }, {
                           "name" : "CytologyUnsatisfactory",
                           "type" : "ExpressionRef"
                        } ]
                     }, {
                        "type" : "Or",
                        "operand" : [ {
                           "type" : "Not",
                           "operand" : {
                              "name" : "AnyHpvSinceMostRecentCytology",
                              "type" : "ExpressionRef"
                           }
                        }, {
                           "name" : "NegativeOrUnknownHpvCotest",
                           "type" : "ExpressionRef"
                        } ]
                     } ]
                  },
                  "then" : {
                     "type" : "Tuple",
                     "element" : [ {
                        "name" : "short",
                        "value" : {
                           "valueType" : "{urn:hl7-org:elm-types:r1}String",
                           "value" : "Repeat Screening",
                           "type" : "Literal"
                        }
                     }, {
                        "name" : "date",
                        "value" : {
                           "type" : "Add",
                           "operand" : [ {
                              "type" : "Today"
                           }, {
                              "value" : 2,
                              "unit" : "months",
                              "type" : "Quantity"
                           } ]
                        }
                     }, {
                        "name" : "group",
                        "value" : {
                           "valueType" : "{urn:hl7-org:elm-types:r1}String",
                           "value" : "Rare Cytology (G.2.1)",
                           "type" : "Literal"
                        }
                     }, {
                        "name" : "details",
                        "value" : {
                           "type" : "List",
                           "element" : [ {
                              "valueType" : "{urn:hl7-org:elm-types:r1}String",
                              "value" : "For patients with an unsatisfactory cytology result and no, unknown, or a negative HPV test result, repeat age-based screening (cytology, cotest, or primary HPV test) in 2 to 4 months is recommended (BIII). Triage using HPV testing is not recommended (DIII). Before repeat cytology, treatment to resolve atrophy or obscuring inflammation when a specific infection is present is acceptable (CIII).",
                              "type" : "Literal"
                           } ]
                        }
                     } ]
                  }
               }, {
                  "when" : {
                     "type" : "And",
                     "operand" : [ {
                        "type" : "And",
                        "operand" : [ {
                           "type" : "And",
                           "operand" : [ {
                              "name" : "MostRecentCytologyReportWasWithinPastFiveYears",
                              "type" : "ExpressionRef"
                           }, {
                              "name" : "CytologyUnsatisfactory",
                              "type" : "ExpressionRef"
                           } ]
                        }, {
                           "name" : "PositiveUntypedHpvCotest",
                           "type" : "ExpressionRef"
                        } ]
                     }, {
                        "type" : "GreaterOrEqual",
                        "operand" : [ {
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
                        }, {
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "25",
                           "type" : "Literal"
                        } ]
                     } ]
                  },
                  "then" : {
                     "type" : "Tuple",
                     "element" : [ {
                        "name" : "short",
                        "value" : {
                           "valueType" : "{urn:hl7-org:elm-types:r1}String",
                           "value" : "Cytology/Colposcopy",
                           "type" : "Literal"
                        }
                     }, {
                        "name" : "date",
                        "value" : {
                           "type" : "Add",
                           "operand" : [ {
                              "type" : "Today"
                           }, {
                              "value" : 2,
                              "unit" : "months",
                              "type" : "Quantity"
                           } ]
                        }
                     }, {
                        "name" : "group",
                        "value" : {
                           "valueType" : "{urn:hl7-org:elm-types:r1}String",
                           "value" : "Rare Cytology (G.2.2)",
                           "type" : "Literal"
                        }
                     }, {
                        "name" : "details",
                        "value" : {
                           "type" : "List",
                           "element" : [ {
                              "valueType" : "{urn:hl7-org:elm-types:r1}String",
                              "value" : "For patients 25 years and older who are cotested and have unsatisfactory cytology and a positive HPV test without genotyping for HPV 16 or HPV 18, repeat cytology in 2 to 4 months or colposcopy is acceptable (BII).",
                              "type" : "Literal"
                           } ]
                        }
                     } ]
                  }
               }, {
                  "when" : {
                     "type" : "And",
                     "operand" : [ {
                        "type" : "And",
                        "operand" : [ {
                           "type" : "And",
                           "operand" : [ {
                              "name" : "MostRecentCytologyReportWasWithinPastFiveYears",
                              "type" : "ExpressionRef"
                           }, {
                              "name" : "CytologyUnsatisfactory",
                              "type" : "ExpressionRef"
                           } ]
                        }, {
                           "name" : "PositiveHpv16or18Cotest",
                           "type" : "ExpressionRef"
                        } ]
                     }, {
                        "type" : "GreaterOrEqual",
                        "operand" : [ {
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
                        }, {
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "25",
                           "type" : "Literal"
                        } ]
                     } ]
                  },
                  "then" : {
                     "type" : "Tuple",
                     "element" : [ {
                        "name" : "short",
                        "value" : {
                           "valueType" : "{urn:hl7-org:elm-types:r1}String",
                           "value" : "Colposcopy",
                           "type" : "Literal"
                        }
                     }, {
                        "name" : "date",
                        "value" : {
                           "type" : "Today"
                        }
                     }, {
                        "name" : "group",
                        "value" : {
                           "valueType" : "{urn:hl7-org:elm-types:r1}String",
                           "value" : "Rare Cytology (G.2.3)",
                           "type" : "Literal"
                        }
                     }, {
                        "name" : "details",
                        "value" : {
                           "type" : "List",
                           "element" : [ {
                              "valueType" : "{urn:hl7-org:elm-types:r1}String",
                              "value" : "For patients 25 years and older who are cotested and have unsatisfactory cytology and a positive HPV test with partial genotyping is positive for HPV 16 or HPV 18, direct referral for colposcopy is recommended (BII).",
                              "type" : "Literal"
                           } ]
                        }
                     } ]
                  }
               }, {
                  "when" : {
                     "type" : "And",
                     "operand" : [ {
                        "type" : "And",
                        "operand" : [ {
                           "type" : "And",
                           "operand" : [ {
                              "type" : "In",
                              "operand" : [ {
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
                              }, {
                                 "lowClosed" : true,
                                 "highClosed" : false,
                                 "type" : "Interval",
                                 "low" : {
                                    "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                                    "value" : "21",
                                    "type" : "Literal"
                                 },
                                 "high" : {
                                    "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                                    "value" : "30",
                                    "type" : "Literal"
                                 }
                              } ]
                           }, {
                              "name" : "MostRecentCytologyReportWasWithinPastFiveYears",
                              "type" : "ExpressionRef"
                           } ]
                        }, {
                           "name" : "CytologyAbsentTransformationZone",
                           "type" : "ExpressionRef"
                        } ]
                     }, {
                        "name" : "CytologyInterpretedAsNilm",
                        "type" : "ExpressionRef"
                     } ]
                  },
                  "then" : {
                     "type" : "Tuple",
                     "element" : [ {
                        "name" : "short",
                        "value" : {
                           "valueType" : "{urn:hl7-org:elm-types:r1}String",
                           "value" : "See Details",
                           "type" : "Literal"
                        }
                     }, {
                        "name" : "date",
                        "value" : {
                           "type" : "Today"
                        }
                     }, {
                        "name" : "group",
                        "value" : {
                           "valueType" : "{urn:hl7-org:elm-types:r1}String",
                           "value" : "Rare Cytology (G.3.1)",
                           "type" : "Literal"
                        }
                     }, {
                        "name" : "details",
                        "value" : {
                           "type" : "List",
                           "element" : [ {
                              "valueType" : "{urn:hl7-org:elm-types:r1}String",
                              "value" : "Routine screening is recommended (BIII). When cervical cytology alone is performed for screening, HPV testing as a triage test after negative cytology and absent endocervical cells/transformation zone component in this age group is unacceptable (DIII).",
                              "type" : "Literal"
                           } ]
                        }
                     } ]
                  }
               }, {
                  "when" : {
                     "type" : "And",
                     "operand" : [ {
                        "type" : "And",
                        "operand" : [ {
                           "type" : "And",
                           "operand" : [ {
                              "type" : "And",
                              "operand" : [ {
                                 "type" : "GreaterOrEqual",
                                 "operand" : [ {
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
                                 }, {
                                    "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                                    "value" : "30",
                                    "type" : "Literal"
                                 } ]
                              }, {
                                 "name" : "MostRecentCytologyReportWasWithinPastFiveYears",
                                 "type" : "ExpressionRef"
                              } ]
                           }, {
                              "name" : "CytologyAbsentTransformationZone",
                              "type" : "ExpressionRef"
                           } ]
                        }, {
                           "name" : "CytologyInterpretedAsNilm",
                           "type" : "ExpressionRef"
                        } ]
                     }, {
                        "type" : "Or",
                        "operand" : [ {
                           "type" : "Not",
                           "operand" : {
                              "name" : "AnyHpvSinceMostRecentCytology",
                              "type" : "ExpressionRef"
                           }
                        }, {
                           "name" : "UnknownHpvCotest",
                           "type" : "ExpressionRef"
                        } ]
                     } ]
                  },
                  "then" : {
                     "type" : "Tuple",
                     "element" : [ {
                        "name" : "short",
                        "value" : {
                           "valueType" : "{urn:hl7-org:elm-types:r1}String",
                           "value" : "See Details",
                           "type" : "Literal"
                        }
                     }, {
                        "name" : "date",
                        "value" : {
                           "type" : "Today"
                        }
                     }, {
                        "name" : "group",
                        "value" : {
                           "valueType" : "{urn:hl7-org:elm-types:r1}String",
                           "value" : "Rare Cytology (G.3.2)",
                           "type" : "Literal"
                        }
                     }, {
                        "name" : "details",
                        "value" : {
                           "type" : "List",
                           "element" : [ {
                              "valueType" : "{urn:hl7-org:elm-types:r1}String",
                              "value" : "HPV testing is preferred (BIII). Repeat cytology in 3 years is acceptable if HPV testing is not performed (BIII). If HPV testing is performed, manage using Clinical Action Thresholds according to 2019 consensus guidelines.",
                              "type" : "Literal"
                           } ]
                        }
                     } ]
                  }
               }, {
                  "when" : {
                     "type" : "And",
                     "operand" : [ {
                        "type" : "And",
                        "operand" : [ {
                           "type" : "And",
                           "operand" : [ {
                              "type" : "And",
                              "operand" : [ {
                                 "name" : "HasPremenopausalObservationOrCondition",
                                 "type" : "ExpressionRef"
                              }, {
                                 "type" : "Not",
                                 "operand" : {
                                    "name" : "HasPostmenopausalObservationOrCondition",
                                    "type" : "ExpressionRef"
                                 }
                              } ]
                           }, {
                              "type" : "Not",
                              "operand" : {
                                 "name" : "IsSymptomatic",
                                 "libraryName" : "Symptomatic",
                                 "type" : "ExpressionRef"
                              }
                           } ]
                        }, {
                           "name" : "MostRecentCytologyReportWasWithinPastFiveYears",
                           "type" : "ExpressionRef"
                        } ]
                     }, {
                        "type" : "Or",
                        "operand" : [ {
                           "type" : "Or",
                           "operand" : [ {
                              "name" : "CytologyInterpretedAsBenignEndometrialCells",
                              "type" : "ExpressionRef"
                           }, {
                              "name" : "CytologyInterpretedAsEndometrialStromalCells",
                              "type" : "ExpressionRef"
                           } ]
                        }, {
                           "name" : "CytologyInterpretedAsHistiocytes",
                           "type" : "ExpressionRef"
                        } ]
                     } ]
                  },
                  "then" : {
                     "type" : "Tuple",
                     "element" : [ {
                        "name" : "short",
                        "value" : {
                           "valueType" : "{urn:hl7-org:elm-types:r1}String",
                           "value" : "See Details",
                           "type" : "Literal"
                        }
                     }, {
                        "name" : "date",
                        "value" : {
                           "type" : "Today"
                        }
                     }, {
                        "name" : "group",
                        "value" : {
                           "valueType" : "{urn:hl7-org:elm-types:r1}String",
                           "value" : "Rare Cytology (G.4.1)",
                           "type" : "Literal"
                        }
                     }, {
                        "name" : "details",
                        "value" : {
                           "type" : "List",
                           "element" : [ {
                              "valueType" : "{urn:hl7-org:elm-types:r1}String",
                              "value" : "For asymptomatic premenopausal patients with benign endometrial cells, endometrial stromal cells, or histiocytes, no further evaluation is recommended (BII).",
                              "type" : "Literal"
                           } ]
                        }
                     } ]
                  }
               }, {
                  "when" : {
                     "type" : "And",
                     "operand" : [ {
                        "type" : "And",
                        "operand" : [ {
                           "name" : "HasPostmenopausalObservationOrCondition",
                           "type" : "ExpressionRef"
                        }, {
                           "name" : "MostRecentCytologyReportWasWithinPastFiveYears",
                           "type" : "ExpressionRef"
                        } ]
                     }, {
                        "name" : "CytologyInterpretedAsBenignEndometrialCells",
                        "type" : "ExpressionRef"
                     } ]
                  },
                  "then" : {
                     "type" : "Tuple",
                     "element" : [ {
                        "name" : "short",
                        "value" : {
                           "valueType" : "{urn:hl7-org:elm-types:r1}String",
                           "value" : "See Details",
                           "type" : "Literal"
                        }
                     }, {
                        "name" : "date",
                        "value" : {
                           "type" : "Today"
                        }
                     }, {
                        "name" : "group",
                        "value" : {
                           "valueType" : "{urn:hl7-org:elm-types:r1}String",
                           "value" : "Rare Cytology (G.4.2)",
                           "type" : "Literal"
                        }
                     }, {
                        "name" : "details",
                        "value" : {
                           "type" : "List",
                           "element" : [ {
                              "valueType" : "{urn:hl7-org:elm-types:r1}String",
                              "value" : "For postmenopausal patient with benign endometrial cells found via cytology, endometrial assessment is recommended (BII).",
                              "type" : "Literal"
                           } ]
                        }
                     } ]
                  }
               }, {
                  "when" : {
                     "type" : "And",
                     "operand" : [ {
                        "type" : "And",
                        "operand" : [ {
                           "name" : "AbsenceOrRemovalOfCervix",
                           "type" : "ExpressionRef"
                        }, {
                           "name" : "MostRecentCytologyReportWasWithinPastFiveYears",
                           "type" : "ExpressionRef"
                        } ]
                     }, {
                        "name" : "CytologyInterpretedAsBenignGlandularCells",
                        "type" : "ExpressionRef"
                     } ]
                  },
                  "then" : {
                     "type" : "Tuple",
                     "element" : [ {
                        "name" : "short",
                        "value" : {
                           "valueType" : "{urn:hl7-org:elm-types:r1}String",
                           "value" : "See Details",
                           "type" : "Literal"
                        }
                     }, {
                        "name" : "date",
                        "value" : {
                           "type" : "Today"
                        }
                     }, {
                        "name" : "group",
                        "value" : {
                           "valueType" : "{urn:hl7-org:elm-types:r1}String",
                           "value" : "Rare Cytology (G.4.3)",
                           "type" : "Literal"
                        }
                     }, {
                        "name" : "details",
                        "value" : {
                           "type" : "List",
                           "element" : [ {
                              "valueType" : "{urn:hl7-org:elm-types:r1}String",
                              "value" : "For patients 'post-hysterectomy' with benign glandular cells identified via cytology, no further evaluation is recommended (BII).",
                              "type" : "Literal"
                           } ]
                        }
                     } ]
                  }
               } ],
               "else" : {
                  "type" : "As",
                  "operand" : {
                     "type" : "Null"
                  },
                  "asTypeSpecifier" : {
                     "type" : "TupleTypeSpecifier",
                     "element" : [ {
                        "name" : "short",
                        "type" : {
                           "name" : "{urn:hl7-org:elm-types:r1}String",
                           "type" : "NamedTypeSpecifier"
                        }
                     }, {
                        "name" : "date",
                        "type" : {
                           "name" : "{urn:hl7-org:elm-types:r1}Date",
                           "type" : "NamedTypeSpecifier"
                        }
                     }, {
                        "name" : "group",
                        "type" : {
                           "name" : "{urn:hl7-org:elm-types:r1}String",
                           "type" : "NamedTypeSpecifier"
                        }
                     }, {
                        "name" : "details",
                        "type" : {
                           "type" : "ListTypeSpecifier",
                           "elementType" : {
                              "name" : "{urn:hl7-org:elm-types:r1}String",
                              "type" : "NamedTypeSpecifier"
                           }
                        }
                     } ]
                  }
               }
            }
         }, {
            "name" : "CytologyInterpretedAsAscH",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "type" : "AnyTrue",
               "source" : {
                  "type" : "Query",
                  "source" : [ {
                     "alias" : "aC",
                     "expression" : {
                        "path" : "allConclusions",
                        "type" : "Property",
                        "source" : {
                           "name" : "MostRecentCytologyReport",
                           "type" : "ExpressionRef"
                        }
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
                              "name" : "aC",
                              "type" : "AliasRef"
                           } ]
                        }, {
                           "type" : "ToConcept",
                           "operand" : {
                              "name" : "ASC-H",
                              "type" : "CodeRef"
                           }
                        } ]
                     }
                  }
               }
            }
         }, {
            "name" : "TwoMostRecentCytologyReportsWithin5yearsApart",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "type" : "And",
               "operand" : [ {
                  "type" : "In",
                  "operand" : [ {
                     "path" : "date",
                     "type" : "Property",
                     "source" : {
                        "name" : "SecondMostRecentCytologyReport",
                        "type" : "ExpressionRef"
                     }
                  }, {
                     "lowClosed" : true,
                     "highClosed" : true,
                     "type" : "Interval",
                     "low" : {
                        "type" : "Subtract",
                        "operand" : [ {
                           "path" : "date",
                           "type" : "Property",
                           "source" : {
                              "name" : "MostRecentCytologyReport",
                              "type" : "ExpressionRef"
                           }
                        }, {
                           "value" : 5,
                           "unit" : "years",
                           "type" : "Quantity"
                        } ]
                     },
                     "high" : {
                        "type" : "Add",
                        "operand" : [ {
                           "path" : "date",
                           "type" : "Property",
                           "source" : {
                              "name" : "MostRecentCytologyReport",
                              "type" : "ExpressionRef"
                           }
                        }, {
                           "value" : 5,
                           "unit" : "years",
                           "type" : "Quantity"
                        } ]
                     }
                  } ]
               }, {
                  "type" : "Not",
                  "operand" : {
                     "type" : "IsNull",
                     "operand" : {
                        "path" : "date",
                        "type" : "Property",
                        "source" : {
                           "name" : "MostRecentCytologyReport",
                           "type" : "ExpressionRef"
                        }
                     }
                  }
               } ]
            }
         }, {
            "name" : "SecondMostRecentCytologyUnsatisfactory",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "type" : "AnyTrue",
               "source" : {
                  "type" : "Query",
                  "source" : [ {
                     "alias" : "aC",
                     "expression" : {
                        "path" : "allConclusions",
                        "type" : "Property",
                        "source" : {
                           "name" : "SecondMostRecentCytologyReport",
                           "type" : "ExpressionRef"
                        }
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
                              "name" : "aC",
                              "type" : "AliasRef"
                           } ]
                        }, {
                           "type" : "ToConcept",
                           "operand" : {
                              "name" : "Unsatisfactory",
                              "type" : "CodeRef"
                           }
                        } ]
                     }
                  }
               }
            }
         }, {
            "name" : "RecommendationForExceptionsToColposcopyThreshold",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "type" : "Case",
               "caseItem" : [ {
                  "when" : {
                     "type" : "And",
                     "operand" : [ {
                        "name" : "MostRecentCytologyReportWasWithinPastFiveYears",
                        "type" : "ExpressionRef"
                     }, {
                        "name" : "CytologyInterpretedAsAscH",
                        "type" : "ExpressionRef"
                     } ]
                  },
                  "then" : {
                     "type" : "Tuple",
                     "element" : [ {
                        "name" : "short",
                        "value" : {
                           "valueType" : "{urn:hl7-org:elm-types:r1}String",
                           "value" : "Colposcopy",
                           "type" : "Literal"
                        }
                     }, {
                        "name" : "date",
                        "value" : {
                           "type" : "Today"
                        }
                     }, {
                        "name" : "group",
                        "value" : {
                           "valueType" : "{urn:hl7-org:elm-types:r1}String",
                           "value" : "Exception to Colposcopy Threshold (H.2)",
                           "type" : "Literal"
                        }
                     }, {
                        "name" : "details",
                        "value" : {
                           "type" : "List",
                           "element" : [ {
                              "valueType" : "{urn:hl7-org:elm-types:r1}String",
                              "value" : "For patients with ASC-H cytology, colposcopy is recommended regardless of hrHPV result (AII).",
                              "type" : "Literal"
                           } ]
                        }
                     } ]
                  }
               }, {
                  "when" : {
                     "type" : "And",
                     "operand" : [ {
                        "type" : "And",
                        "operand" : [ {
                           "name" : "MostRecentCytologyReportWasWithinPastFiveYears",
                           "type" : "ExpressionRef"
                        }, {
                           "name" : "PositiveHpv16or18Cotest",
                           "type" : "ExpressionRef"
                        } ]
                     }, {
                        "name" : "CytologyInterpretedAsNilm",
                        "type" : "ExpressionRef"
                     } ]
                  },
                  "then" : {
                     "type" : "Tuple",
                     "element" : [ {
                        "name" : "short",
                        "value" : {
                           "valueType" : "{urn:hl7-org:elm-types:r1}String",
                           "value" : "Colposcopy",
                           "type" : "Literal"
                        }
                     }, {
                        "name" : "date",
                        "value" : {
                           "type" : "Today"
                        }
                     }, {
                        "name" : "group",
                        "value" : {
                           "valueType" : "{urn:hl7-org:elm-types:r1}String",
                           "value" : "Exception to Colposcopy Threshold (H.2)",
                           "type" : "Literal"
                        }
                     }, {
                        "name" : "details",
                        "value" : {
                           "type" : "List",
                           "element" : [ {
                              "valueType" : "{urn:hl7-org:elm-types:r1}String",
                              "value" : "For patients with hrHPV 18-positive NILM or hrHPV 16-positive NILM, colposcopy is recommended (AII).",
                              "type" : "Literal"
                           } ]
                        }
                     } ]
                  }
               }, {
                  "when" : {
                     "type" : "And",
                     "operand" : [ {
                        "type" : "And",
                        "operand" : [ {
                           "type" : "And",
                           "operand" : [ {
                              "name" : "MostRecentCytologyReportWasWithinPastFiveYears",
                              "type" : "ExpressionRef"
                           }, {
                              "name" : "CytologyUnsatisfactory",
                              "type" : "ExpressionRef"
                           } ]
                        }, {
                           "name" : "TwoMostRecentCytologyReportsWithin5yearsApart",
                           "type" : "ExpressionRef"
                        } ]
                     }, {
                        "name" : "SecondMostRecentCytologyUnsatisfactory",
                        "type" : "ExpressionRef"
                     } ]
                  },
                  "then" : {
                     "type" : "Tuple",
                     "element" : [ {
                        "name" : "short",
                        "value" : {
                           "valueType" : "{urn:hl7-org:elm-types:r1}String",
                           "value" : "Colposcopy",
                           "type" : "Literal"
                        }
                     }, {
                        "name" : "date",
                        "value" : {
                           "type" : "Today"
                        }
                     }, {
                        "name" : "group",
                        "value" : {
                           "valueType" : "{urn:hl7-org:elm-types:r1}String",
                           "value" : "Exception to Colposcopy Threshold",
                           "type" : "Literal"
                        }
                     }, {
                        "name" : "details",
                        "value" : {
                           "type" : "List",
                           "element" : [ {
                              "valueType" : "{urn:hl7-org:elm-types:r1}String",
                              "value" : "Colposcopy should be performed after 2 consecutive unsatisfactory screening tests (CIII).",
                              "type" : "Literal"
                           } ]
                        }
                     } ]
                  }
               } ],
               "else" : {
                  "type" : "As",
                  "operand" : {
                     "type" : "Null"
                  },
                  "asTypeSpecifier" : {
                     "type" : "TupleTypeSpecifier",
                     "element" : [ {
                        "name" : "short",
                        "type" : {
                           "name" : "{urn:hl7-org:elm-types:r1}String",
                           "type" : "NamedTypeSpecifier"
                        }
                     }, {
                        "name" : "date",
                        "type" : {
                           "name" : "{urn:hl7-org:elm-types:r1}Date",
                           "type" : "NamedTypeSpecifier"
                        }
                     }, {
                        "name" : "group",
                        "type" : {
                           "name" : "{urn:hl7-org:elm-types:r1}String",
                           "type" : "NamedTypeSpecifier"
                        }
                     }, {
                        "name" : "details",
                        "type" : {
                           "type" : "ListTypeSpecifier",
                           "elementType" : {
                              "name" : "{urn:hl7-org:elm-types:r1}String",
                              "type" : "NamedTypeSpecifier"
                           }
                        }
                     } ]
                  }
               }
            }
         }, {
            "name" : "MostRecentBiopsyReportWasWithinPastYear",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "type" : "GreaterOrEqual",
               "operand" : [ {
                  "path" : "date",
                  "type" : "Property",
                  "source" : {
                     "name" : "MostRecentBiopsyReport",
                     "libraryName" : "Collate",
                     "type" : "ExpressionRef"
                  }
               }, {
                  "type" : "Subtract",
                  "operand" : [ {
                     "type" : "Now"
                  }, {
                     "value" : 1,
                     "unit" : "year",
                     "type" : "Quantity"
                  } ]
               } ]
            }
         }, {
            "name" : "HistologyInterpretedAsCin2",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "type" : "AnyTrue",
               "source" : {
                  "type" : "Query",
                  "source" : [ {
                     "alias" : "aC",
                     "expression" : {
                        "path" : "allConclusions",
                        "type" : "Property",
                        "source" : {
                           "name" : "MostRecentBiopsyReport",
                           "libraryName" : "Collate",
                           "type" : "ExpressionRef"
                        }
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
                              "name" : "aC",
                              "type" : "AliasRef"
                           } ]
                        }, {
                           "type" : "ToConcept",
                           "operand" : {
                              "name" : "CIN2",
                              "libraryName" : "Dash",
                              "type" : "CodeRef"
                           }
                        } ]
                     }
                  }
               }
            }
         }, {
            "name" : "HistologyInterpretedAsCin3",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "type" : "AnyTrue",
               "source" : {
                  "type" : "Query",
                  "source" : [ {
                     "alias" : "aC",
                     "expression" : {
                        "path" : "allConclusions",
                        "type" : "Property",
                        "source" : {
                           "name" : "MostRecentBiopsyReport",
                           "libraryName" : "Collate",
                           "type" : "ExpressionRef"
                        }
                     }
                  } ],
                  "relationship" : [ ],
                  "return" : {
                     "expression" : {
                        "type" : "InValueSet",
                        "code" : {
                           "name" : "ToConcept",
                           "libraryName" : "FHIRHelpers",
                           "type" : "FunctionRef",
                           "operand" : [ {
                              "name" : "aC",
                              "type" : "AliasRef"
                           } ]
                        },
                        "valueset" : {
                           "name" : "Histologic CIN3",
                           "libraryName" : "Dash",
                           "type" : "ValueSetRef"
                        }
                     }
                  }
               }
            }
         }, {
            "name" : "HistologyInterpretedAsAis",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "type" : "AnyTrue",
               "source" : {
                  "type" : "Query",
                  "source" : [ {
                     "alias" : "aC",
                     "expression" : {
                        "path" : "allConclusions",
                        "type" : "Property",
                        "source" : {
                           "name" : "MostRecentBiopsyReport",
                           "libraryName" : "Collate",
                           "type" : "ExpressionRef"
                        }
                     }
                  } ],
                  "relationship" : [ ],
                  "return" : {
                     "expression" : {
                        "type" : "InValueSet",
                        "code" : {
                           "name" : "ToConcept",
                           "libraryName" : "FHIRHelpers",
                           "type" : "FunctionRef",
                           "operand" : [ {
                              "name" : "aC",
                              "type" : "AliasRef"
                           } ]
                        },
                        "valueset" : {
                           "name" : "AIS",
                           "libraryName" : "Dash",
                           "type" : "ValueSetRef"
                        }
                     }
                  }
               }
            }
         }, {
            "name" : "HistologyInterpretedAsUnspecifiedHsil",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "type" : "AnyTrue",
               "source" : {
                  "type" : "Query",
                  "source" : [ {
                     "alias" : "aC",
                     "expression" : {
                        "path" : "allConclusions",
                        "type" : "Property",
                        "source" : {
                           "name" : "MostRecentBiopsyReport",
                           "libraryName" : "Collate",
                           "type" : "ExpressionRef"
                        }
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
                              "name" : "aC",
                              "type" : "AliasRef"
                           } ]
                        }, {
                           "type" : "ToConcept",
                           "operand" : {
                              "name" : "HSIL, Unspecified",
                              "libraryName" : "Dash",
                              "type" : "CodeRef"
                           }
                        } ]
                     }
                  }
               }
            }
         }, {
            "name" : "PrecedingCytologyResults",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "type" : "Coalesce",
               "operand" : [ {
                  "type" : "Query",
                  "source" : [ {
                     "alias" : "S",
                     "expression" : {
                        "name" : "SortedCytologyReports",
                        "libraryName" : "Collate",
                        "type" : "ExpressionRef"
                     }
                  } ],
                  "relationship" : [ ],
                  "where" : {
                     "type" : "And",
                     "operand" : [ {
                        "type" : "LessOrEqual",
                        "operand" : [ {
                           "path" : "date",
                           "scope" : "S",
                           "type" : "Property"
                        }, {
                           "path" : "date",
                           "type" : "Property",
                           "source" : {
                              "name" : "MostRecentBiopsyReport",
                              "libraryName" : "Collate",
                              "type" : "ExpressionRef"
                           }
                        } ]
                     }, {
                        "type" : "GreaterOrEqual",
                        "operand" : [ {
                           "path" : "date",
                           "scope" : "S",
                           "type" : "Property"
                        }, {
                           "type" : "Subtract",
                           "operand" : [ {
                              "path" : "date",
                              "type" : "Property",
                              "source" : {
                                 "name" : "MostRecentBiopsyReport",
                                 "libraryName" : "Collate",
                                 "type" : "ExpressionRef"
                              }
                           }, {
                              "value" : 6,
                              "unit" : "months",
                              "type" : "Quantity"
                           } ]
                        } ]
                     } ]
                  }
               } ]
            }
         }, {
            "name" : "PrecedingCytologyIsHsil",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "type" : "AnyTrue",
               "source" : {
                  "type" : "Query",
                  "source" : [ {
                     "alias" : "aC",
                     "expression" : {
                        "path" : "allConclusions",
                        "type" : "Property",
                        "source" : {
                           "name" : "PrecedingCytologyResults",
                           "type" : "ExpressionRef"
                        }
                     }
                  } ],
                  "relationship" : [ ],
                  "return" : {
                     "expression" : {
                        "type" : "InValueSet",
                        "code" : {
                           "name" : "ToConcept",
                           "libraryName" : "FHIRHelpers",
                           "type" : "FunctionRef",
                           "operand" : [ {
                              "name" : "aC",
                              "type" : "AliasRef"
                           } ]
                        },
                        "valueset" : {
                           "name" : "HSIL",
                           "type" : "ValueSetRef"
                        }
                     }
                  }
               }
            }
         }, {
            "name" : "PrecedingCytologyIsAscH",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "type" : "AnyTrue",
               "source" : {
                  "type" : "Query",
                  "source" : [ {
                     "alias" : "aC",
                     "expression" : {
                        "path" : "allConclusions",
                        "type" : "Property",
                        "source" : {
                           "name" : "PrecedingCytologyResults",
                           "type" : "ExpressionRef"
                        }
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
                              "name" : "aC",
                              "type" : "AliasRef"
                           } ]
                        }, {
                           "type" : "ToConcept",
                           "operand" : {
                              "name" : "ASC-H",
                              "type" : "CodeRef"
                           }
                        } ]
                     }
                  }
               }
            }
         }, {
            "name" : "SecondMostRecentBiopsyReport",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "type" : "If",
               "condition" : {
                  "asType" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "type" : "As",
                  "operand" : {
                     "type" : "Greater",
                     "operand" : [ {
                        "type" : "Count",
                        "source" : {
                           "name" : "SortedBiopsyReports",
                           "libraryName" : "Collate",
                           "type" : "ExpressionRef"
                        }
                     }, {
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "1",
                        "type" : "Literal"
                     } ]
                  }
               },
               "then" : {
                  "type" : "Indexer",
                  "operand" : [ {
                     "name" : "SortedBiopsyReports",
                     "libraryName" : "Collate",
                     "type" : "ExpressionRef"
                  }, {
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "1",
                     "type" : "Literal"
                  } ]
               },
               "else" : {
                  "type" : "As",
                  "operand" : {
                     "type" : "Null"
                  },
                  "asTypeSpecifier" : {
                     "type" : "TupleTypeSpecifier",
                     "element" : [ {
                        "name" : "riskTableInput",
                        "type" : {
                           "name" : "{urn:hl7-org:elm-types:r1}String",
                           "type" : "NamedTypeSpecifier"
                        }
                     }, {
                        "name" : "allConclusions",
                        "type" : {
                           "type" : "ListTypeSpecifier",
                           "elementType" : {
                              "name" : "{http://hl7.org/fhir}CodeableConcept",
                              "type" : "NamedTypeSpecifier"
                           }
                        }
                     }, {
                        "name" : "date",
                        "type" : {
                           "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                           "type" : "NamedTypeSpecifier"
                        }
                     } ]
                  }
               }
            }
         }, {
            "name" : "PrecedingCytologyResultsBeforeSecondMostRecentBiopsy",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "type" : "Coalesce",
               "operand" : [ {
                  "type" : "Query",
                  "source" : [ {
                     "alias" : "S",
                     "expression" : {
                        "name" : "SortedCytologyReports",
                        "libraryName" : "Collate",
                        "type" : "ExpressionRef"
                     }
                  } ],
                  "relationship" : [ ],
                  "where" : {
                     "type" : "And",
                     "operand" : [ {
                        "type" : "LessOrEqual",
                        "operand" : [ {
                           "path" : "date",
                           "scope" : "S",
                           "type" : "Property"
                        }, {
                           "path" : "date",
                           "type" : "Property",
                           "source" : {
                              "name" : "SecondMostRecentBiopsyReport",
                              "type" : "ExpressionRef"
                           }
                        } ]
                     }, {
                        "type" : "GreaterOrEqual",
                        "operand" : [ {
                           "path" : "date",
                           "scope" : "S",
                           "type" : "Property"
                        }, {
                           "type" : "Subtract",
                           "operand" : [ {
                              "path" : "date",
                              "type" : "Property",
                              "source" : {
                                 "name" : "SecondMostRecentBiopsyReport",
                                 "type" : "ExpressionRef"
                              }
                           }, {
                              "value" : 6,
                              "unit" : "months",
                              "type" : "Quantity"
                           } ]
                        } ]
                     } ]
                  }
               } ]
            }
         }, {
            "name" : "PrecedingCytologyBeforeSecondMostRecentBiopsyIsHsil",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "type" : "AnyTrue",
               "source" : {
                  "type" : "Query",
                  "source" : [ {
                     "alias" : "aC",
                     "expression" : {
                        "path" : "allConclusions",
                        "type" : "Property",
                        "source" : {
                           "name" : "PrecedingCytologyResultsBeforeSecondMostRecentBiopsy",
                           "type" : "ExpressionRef"
                        }
                     }
                  } ],
                  "relationship" : [ ],
                  "return" : {
                     "expression" : {
                        "type" : "InValueSet",
                        "code" : {
                           "name" : "ToConcept",
                           "libraryName" : "FHIRHelpers",
                           "type" : "FunctionRef",
                           "operand" : [ {
                              "name" : "aC",
                              "type" : "AliasRef"
                           } ]
                        },
                        "valueset" : {
                           "name" : "HSIL",
                           "type" : "ValueSetRef"
                        }
                     }
                  }
               }
            }
         }, {
            "name" : "PrecedingCytologyBeforeSecondMostRecentBiopsyIsAscH",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "type" : "AnyTrue",
               "source" : {
                  "type" : "Query",
                  "source" : [ {
                     "alias" : "aC",
                     "expression" : {
                        "path" : "allConclusions",
                        "type" : "Property",
                        "source" : {
                           "name" : "PrecedingCytologyResultsBeforeSecondMostRecentBiopsy",
                           "type" : "ExpressionRef"
                        }
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
                              "name" : "aC",
                              "type" : "AliasRef"
                           } ]
                        }, {
                           "type" : "ToConcept",
                           "operand" : {
                              "name" : "ASC-H",
                              "type" : "CodeRef"
                           }
                        } ]
                     }
                  }
               }
            }
         }, {
            "name" : "SecondMostRecentHistologyInterpretedAsCin1",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "type" : "AnyTrue",
               "source" : {
                  "type" : "Query",
                  "source" : [ {
                     "alias" : "aC",
                     "expression" : {
                        "path" : "allConclusions",
                        "type" : "Property",
                        "source" : {
                           "name" : "SecondMostRecentBiopsyReport",
                           "type" : "ExpressionRef"
                        }
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
                              "name" : "aC",
                              "type" : "AliasRef"
                           } ]
                        }, {
                           "type" : "ToConcept",
                           "operand" : {
                              "name" : "CIN1",
                              "type" : "CodeRef"
                           }
                        } ]
                     }
                  }
               }
            }
         }, {
            "name" : "SecondMostRecentHistologyInterpretedAsNormal",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "type" : "AnyTrue",
               "source" : {
                  "type" : "Query",
                  "source" : [ {
                     "alias" : "aC",
                     "expression" : {
                        "path" : "allConclusions",
                        "type" : "Property",
                        "source" : {
                           "name" : "SecondMostRecentBiopsyReport",
                           "type" : "ExpressionRef"
                        }
                     }
                  } ],
                  "relationship" : [ ],
                  "return" : {
                     "expression" : {
                        "type" : "InValueSet",
                        "code" : {
                           "name" : "ToConcept",
                           "libraryName" : "FHIRHelpers",
                           "type" : "FunctionRef",
                           "operand" : [ {
                              "name" : "aC",
                              "type" : "AliasRef"
                           } ]
                        },
                        "valueset" : {
                           "name" : "Normal Histology Finding",
                           "type" : "ValueSetRef"
                        }
                     }
                  }
               }
            }
         }, {
            "name" : "SecondMostRecentHistologyInterpretedAsCin1OrNormal",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "type" : "Or",
               "operand" : [ {
                  "name" : "SecondMostRecentHistologyInterpretedAsCin1",
                  "type" : "ExpressionRef"
               }, {
                  "name" : "SecondMostRecentHistologyInterpretedAsNormal",
                  "type" : "ExpressionRef"
               } ]
            }
         }, {
            "name" : "MostRecentBiopsyReportWasWithinPast12months",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "type" : "GreaterOrEqual",
               "operand" : [ {
                  "path" : "date",
                  "type" : "Property",
                  "source" : {
                     "name" : "MostRecentBiopsyReport",
                     "libraryName" : "Collate",
                     "type" : "ExpressionRef"
                  }
               }, {
                  "type" : "Subtract",
                  "operand" : [ {
                     "type" : "Now"
                  }, {
                     "value" : 12,
                     "unit" : "months",
                     "type" : "Quantity"
                  } ]
               } ]
            }
         }, {
            "name" : "MostRecentBiopsyReportWasWithinPast18months",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "type" : "GreaterOrEqual",
               "operand" : [ {
                  "path" : "date",
                  "type" : "Property",
                  "source" : {
                     "name" : "MostRecentBiopsyReport",
                     "libraryName" : "Collate",
                     "type" : "ExpressionRef"
                  }
               }, {
                  "type" : "Subtract",
                  "operand" : [ {
                     "type" : "Now"
                  }, {
                     "value" : 18,
                     "unit" : "months",
                     "type" : "Quantity"
                  } ]
               } ]
            }
         }, {
            "name" : "TwoMostRecentBiopsyReportsWithin18monthsApart",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "type" : "And",
               "operand" : [ {
                  "type" : "In",
                  "operand" : [ {
                     "path" : "date",
                     "type" : "Property",
                     "source" : {
                        "name" : "SecondMostRecentBiopsyReport",
                        "type" : "ExpressionRef"
                     }
                  }, {
                     "lowClosed" : true,
                     "highClosed" : true,
                     "type" : "Interval",
                     "low" : {
                        "type" : "Subtract",
                        "operand" : [ {
                           "path" : "date",
                           "type" : "Property",
                           "source" : {
                              "name" : "MostRecentBiopsyReport",
                              "libraryName" : "Collate",
                              "type" : "ExpressionRef"
                           }
                        }, {
                           "value" : 18,
                           "unit" : "months",
                           "type" : "Quantity"
                        } ]
                     },
                     "high" : {
                        "type" : "Add",
                        "operand" : [ {
                           "path" : "date",
                           "type" : "Property",
                           "source" : {
                              "name" : "MostRecentBiopsyReport",
                              "libraryName" : "Collate",
                              "type" : "ExpressionRef"
                           }
                        }, {
                           "value" : 18,
                           "unit" : "months",
                           "type" : "Quantity"
                        } ]
                     }
                  } ]
               }, {
                  "type" : "Not",
                  "operand" : {
                     "type" : "IsNull",
                     "operand" : {
                        "path" : "date",
                        "type" : "Property",
                        "source" : {
                           "name" : "MostRecentBiopsyReport",
                           "libraryName" : "Collate",
                           "type" : "ExpressionRef"
                        }
                     }
                  }
               } ]
            }
         }, {
            "name" : "TwoMostRecentBiopsyReportsWithin15monthsApart",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "type" : "And",
               "operand" : [ {
                  "type" : "In",
                  "operand" : [ {
                     "path" : "date",
                     "type" : "Property",
                     "source" : {
                        "name" : "SecondMostRecentBiopsyReport",
                        "type" : "ExpressionRef"
                     }
                  }, {
                     "lowClosed" : true,
                     "highClosed" : true,
                     "type" : "Interval",
                     "low" : {
                        "type" : "Subtract",
                        "operand" : [ {
                           "path" : "date",
                           "type" : "Property",
                           "source" : {
                              "name" : "MostRecentBiopsyReport",
                              "libraryName" : "Collate",
                              "type" : "ExpressionRef"
                           }
                        }, {
                           "value" : 15,
                           "unit" : "months",
                           "type" : "Quantity"
                        } ]
                     },
                     "high" : {
                        "type" : "Add",
                        "operand" : [ {
                           "path" : "date",
                           "type" : "Property",
                           "source" : {
                              "name" : "MostRecentBiopsyReport",
                              "libraryName" : "Collate",
                              "type" : "ExpressionRef"
                           }
                        }, {
                           "value" : 15,
                           "unit" : "months",
                           "type" : "Quantity"
                        } ]
                     }
                  } ]
               }, {
                  "type" : "Not",
                  "operand" : {
                     "type" : "IsNull",
                     "operand" : {
                        "path" : "date",
                        "type" : "Property",
                        "source" : {
                           "name" : "MostRecentBiopsyReport",
                           "libraryName" : "Collate",
                           "type" : "ExpressionRef"
                        }
                     }
                  }
               } ]
            }
         }, {
            "name" : "RecentlyRespondedYesToFuturePregnancyConcernsQuestion",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "type" : "Not",
               "operand" : {
                  "type" : "IsNull",
                  "operand" : {
                     "name" : "MostRecent",
                     "libraryName" : "C3F",
                     "type" : "FunctionRef",
                     "operand" : [ {
                        "name" : "ObservationLookBack",
                        "libraryName" : "C3F",
                        "type" : "FunctionRef",
                        "operand" : [ {
                           "type" : "Query",
                           "source" : [ {
                              "alias" : "R",
                              "expression" : {
                                 "name" : "ResponsesToFuturePregnancyConcernsQuestion",
                                 "libraryName" : "Dash",
                                 "type" : "ExpressionRef"
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
                                       "scope" : "R",
                                       "type" : "Property"
                                    }
                                 } ]
                              }, {
                                 "type" : "ToConcept",
                                 "operand" : {
                                    "name" : "Yes",
                                    "libraryName" : "Dash",
                                    "type" : "CodeRef"
                                 }
                              } ]
                           }
                        }, {
                           "value" : 3,
                           "unit" : "months",
                           "type" : "Quantity"
                        } ]
                     } ]
                  }
               }
            }
         }, {
            "name" : "InitialCervicalHistologyInterpretedAsUnspecifiedHsilOrCin2InLast18Months",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "type" : "First",
               "source" : {
                  "type" : "Query",
                  "source" : [ {
                     "alias" : "B",
                     "expression" : {
                        "name" : "SortedBiopsyReports",
                        "libraryName" : "Collate",
                        "type" : "ExpressionRef"
                     }
                  } ],
                  "relationship" : [ ],
                  "where" : {
                     "type" : "And",
                     "operand" : [ {
                        "type" : "GreaterOrEqual",
                        "operand" : [ {
                           "path" : "date",
                           "scope" : "B",
                           "type" : "Property"
                        }, {
                           "type" : "Subtract",
                           "operand" : [ {
                              "type" : "Now"
                           }, {
                              "value" : 18,
                              "unit" : "months",
                              "type" : "Quantity"
                           } ]
                        } ]
                     }, {
                        "type" : "AnyTrue",
                        "source" : {
                           "type" : "Query",
                           "source" : [ {
                              "alias" : "aC",
                              "expression" : {
                                 "path" : "allConclusions",
                                 "scope" : "B",
                                 "type" : "Property"
                              }
                           } ],
                           "relationship" : [ ],
                           "return" : {
                              "expression" : {
                                 "type" : "Or",
                                 "operand" : [ {
                                    "type" : "Equivalent",
                                    "operand" : [ {
                                       "name" : "ToConcept",
                                       "libraryName" : "FHIRHelpers",
                                       "type" : "FunctionRef",
                                       "operand" : [ {
                                          "name" : "aC",
                                          "type" : "AliasRef"
                                       } ]
                                    }, {
                                       "type" : "ToConcept",
                                       "operand" : {
                                          "name" : "HSIL, Unspecified",
                                          "libraryName" : "Dash",
                                          "type" : "CodeRef"
                                       }
                                    } ]
                                 }, {
                                    "type" : "Equivalent",
                                    "operand" : [ {
                                       "name" : "ToConcept",
                                       "libraryName" : "FHIRHelpers",
                                       "type" : "FunctionRef",
                                       "operand" : [ {
                                          "name" : "aC",
                                          "type" : "AliasRef"
                                       } ]
                                    }, {
                                       "type" : "ToConcept",
                                       "operand" : {
                                          "name" : "CIN2",
                                          "libraryName" : "Dash",
                                          "type" : "CodeRef"
                                       }
                                    } ]
                                 } ]
                              }
                           }
                        }
                     } ]
                  }
               }
            }
         }, {
            "name" : "InitialCervicalHistologyInterpretedAsUnspecifiedHsilOrCin2InLast6Years",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "type" : "First",
               "source" : {
                  "type" : "Query",
                  "source" : [ {
                     "alias" : "B",
                     "expression" : {
                        "name" : "SortedBiopsyReports",
                        "libraryName" : "Collate",
                        "type" : "ExpressionRef"
                     }
                  } ],
                  "relationship" : [ ],
                  "where" : {
                     "type" : "And",
                     "operand" : [ {
                        "type" : "GreaterOrEqual",
                        "operand" : [ {
                           "path" : "date",
                           "scope" : "B",
                           "type" : "Property"
                        }, {
                           "type" : "Subtract",
                           "operand" : [ {
                              "type" : "Now"
                           }, {
                              "value" : 6,
                              "unit" : "years",
                              "type" : "Quantity"
                           } ]
                        } ]
                     }, {
                        "type" : "AnyTrue",
                        "source" : {
                           "type" : "Query",
                           "source" : [ {
                              "alias" : "aC",
                              "expression" : {
                                 "path" : "allConclusions",
                                 "scope" : "B",
                                 "type" : "Property"
                              }
                           } ],
                           "relationship" : [ ],
                           "return" : {
                              "expression" : {
                                 "type" : "Or",
                                 "operand" : [ {
                                    "type" : "Equivalent",
                                    "operand" : [ {
                                       "name" : "ToConcept",
                                       "libraryName" : "FHIRHelpers",
                                       "type" : "FunctionRef",
                                       "operand" : [ {
                                          "name" : "aC",
                                          "type" : "AliasRef"
                                       } ]
                                    }, {
                                       "type" : "ToConcept",
                                       "operand" : {
                                          "name" : "HSIL, Unspecified",
                                          "libraryName" : "Dash",
                                          "type" : "CodeRef"
                                       }
                                    } ]
                                 }, {
                                    "type" : "Equivalent",
                                    "operand" : [ {
                                       "name" : "ToConcept",
                                       "libraryName" : "FHIRHelpers",
                                       "type" : "FunctionRef",
                                       "operand" : [ {
                                          "name" : "aC",
                                          "type" : "AliasRef"
                                       } ]
                                    }, {
                                       "type" : "ToConcept",
                                       "operand" : {
                                          "name" : "CIN2",
                                          "libraryName" : "Dash",
                                          "type" : "CodeRef"
                                       }
                                    } ]
                                 } ]
                              }
                           }
                        }
                     } ]
                  }
               }
            }
         }, {
            "name" : "HistologyInterpretedAsUnspecifiedHsilOrCin2BeforeMostRecentBiopsy",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "type" : "Query",
               "source" : [ {
                  "alias" : "B",
                  "expression" : {
                     "name" : "SortedBiopsyReports",
                     "libraryName" : "Collate",
                     "type" : "ExpressionRef"
                  }
               } ],
               "relationship" : [ ],
               "where" : {
                  "type" : "And",
                  "operand" : [ {
                     "type" : "And",
                     "operand" : [ {
                        "type" : "SameOrBefore",
                        "operand" : [ {
                           "path" : "date",
                           "scope" : "B",
                           "type" : "Property"
                        }, {
                           "type" : "Subtract",
                           "operand" : [ {
                              "path" : "date",
                              "type" : "Property",
                              "source" : {
                                 "name" : "MostRecentBiopsyReport",
                                 "libraryName" : "Collate",
                                 "type" : "ExpressionRef"
                              }
                           }, {
                              "value" : 2,
                              "unit" : "years",
                              "type" : "Quantity"
                           } ]
                        } ]
                     }, {
                        "type" : "And",
                        "operand" : [ {
                           "type" : "In",
                           "operand" : [ {
                              "path" : "date",
                              "scope" : "B",
                              "type" : "Property"
                           }, {
                              "lowClosed" : true,
                              "highClosed" : false,
                              "type" : "Interval",
                              "low" : {
                                 "type" : "Subtract",
                                 "operand" : [ {
                                    "path" : "date",
                                    "type" : "Property",
                                    "source" : {
                                       "name" : "MostRecentBiopsyReport",
                                       "libraryName" : "Collate",
                                       "type" : "ExpressionRef"
                                    }
                                 }, {
                                    "value" : 2.5,
                                    "unit" : "years",
                                    "type" : "Quantity"
                                 } ]
                              },
                              "high" : {
                                 "path" : "date",
                                 "type" : "Property",
                                 "source" : {
                                    "name" : "MostRecentBiopsyReport",
                                    "libraryName" : "Collate",
                                    "type" : "ExpressionRef"
                                 }
                              }
                           } ]
                        }, {
                           "type" : "Not",
                           "operand" : {
                              "type" : "IsNull",
                              "operand" : {
                                 "path" : "date",
                                 "type" : "Property",
                                 "source" : {
                                    "name" : "MostRecentBiopsyReport",
                                    "libraryName" : "Collate",
                                    "type" : "ExpressionRef"
                                 }
                              }
                           }
                        } ]
                     } ]
                  }, {
                     "type" : "AnyTrue",
                     "source" : {
                        "type" : "Query",
                        "source" : [ {
                           "alias" : "aC",
                           "expression" : {
                              "path" : "allConclusions",
                              "scope" : "B",
                              "type" : "Property"
                           }
                        } ],
                        "relationship" : [ ],
                        "return" : {
                           "expression" : {
                              "type" : "Or",
                              "operand" : [ {
                                 "type" : "Equivalent",
                                 "operand" : [ {
                                    "name" : "ToConcept",
                                    "libraryName" : "FHIRHelpers",
                                    "type" : "FunctionRef",
                                    "operand" : [ {
                                       "name" : "aC",
                                       "type" : "AliasRef"
                                    } ]
                                 }, {
                                    "type" : "ToConcept",
                                    "operand" : {
                                       "name" : "HSIL, Unspecified",
                                       "libraryName" : "Dash",
                                       "type" : "CodeRef"
                                    }
                                 } ]
                              }, {
                                 "type" : "Equivalent",
                                 "operand" : [ {
                                    "name" : "ToConcept",
                                    "libraryName" : "FHIRHelpers",
                                    "type" : "FunctionRef",
                                    "operand" : [ {
                                       "name" : "aC",
                                       "type" : "AliasRef"
                                    } ]
                                 }, {
                                    "type" : "ToConcept",
                                    "operand" : {
                                       "name" : "CIN2",
                                       "libraryName" : "Dash",
                                       "type" : "CodeRef"
                                    }
                                 } ]
                              } ]
                           }
                        }
                     }
                  } ]
               }
            }
         }, {
            "name" : "HasHistologyInterpretedAsUnspecifiedHsilOrCin2BeforeMostRecentBiopsy",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "type" : "Exists",
               "operand" : {
                  "name" : "HistologyInterpretedAsUnspecifiedHsilOrCin2BeforeMostRecentBiopsy",
                  "type" : "ExpressionRef"
               }
            }
         }, {
            "name" : "CytologyInterpretedAsLsil",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "type" : "AnyTrue",
               "source" : {
                  "type" : "Query",
                  "source" : [ {
                     "alias" : "aC",
                     "expression" : {
                        "path" : "allConclusions",
                        "type" : "Property",
                        "source" : {
                           "name" : "MostRecentCytologyReport",
                           "type" : "ExpressionRef"
                        }
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
                              "name" : "aC",
                              "type" : "AliasRef"
                           } ]
                        }, {
                           "type" : "ToConcept",
                           "operand" : {
                              "name" : "LSIL",
                              "type" : "CodeRef"
                           }
                        } ]
                     }
                  }
               }
            }
         }, {
            "name" : "CytologyInterpretedAsAscus",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "type" : "AnyTrue",
               "source" : {
                  "type" : "Query",
                  "source" : [ {
                     "alias" : "aC",
                     "expression" : {
                        "path" : "allConclusions",
                        "type" : "Property",
                        "source" : {
                           "name" : "MostRecentCytologyReport",
                           "type" : "ExpressionRef"
                        }
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
                              "name" : "aC",
                              "type" : "AliasRef"
                           } ]
                        }, {
                           "type" : "ToConcept",
                           "operand" : {
                              "name" : "ASC-US",
                              "type" : "CodeRef"
                           }
                        } ]
                     }
                  }
               }
            }
         }, {
            "name" : "MostRecentNegativeHsilSurveillanceResult",
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
                           "name" : "InitialCervicalHistologyInterpretedAsUnspecifiedHsilOrCin2InLast18Months",
                           "type" : "ExpressionRef"
                        }
                     }
                  }
               },
               "then" : {
                  "type" : "And",
                  "operand" : [ {
                     "type" : "And",
                     "operand" : [ {
                        "type" : "And",
                        "operand" : [ {
                           "type" : "And",
                           "operand" : [ {
                              "type" : "In",
                              "operand" : [ {
                                 "path" : "date",
                                 "type" : "Property",
                                 "source" : {
                                    "name" : "MostRecentBiopsyReport",
                                    "libraryName" : "Collate",
                                    "type" : "ExpressionRef"
                                 }
                              }, {
                                 "lowClosed" : false,
                                 "highClosed" : true,
                                 "type" : "Interval",
                                 "low" : {
                                    "path" : "date",
                                    "type" : "Property",
                                    "source" : {
                                       "name" : "InitialCervicalHistologyInterpretedAsUnspecifiedHsilOrCin2InLast18Months",
                                       "type" : "ExpressionRef"
                                    }
                                 },
                                 "high" : {
                                    "type" : "Add",
                                    "operand" : [ {
                                       "path" : "date",
                                       "type" : "Property",
                                       "source" : {
                                          "name" : "InitialCervicalHistologyInterpretedAsUnspecifiedHsilOrCin2InLast18Months",
                                          "type" : "ExpressionRef"
                                       }
                                    }, {
                                       "value" : 18,
                                       "unit" : "months",
                                       "type" : "Quantity"
                                    } ]
                                 }
                              } ]
                           }, {
                              "type" : "Not",
                              "operand" : {
                                 "type" : "IsNull",
                                 "operand" : {
                                    "path" : "date",
                                    "type" : "Property",
                                    "source" : {
                                       "name" : "InitialCervicalHistologyInterpretedAsUnspecifiedHsilOrCin2InLast18Months",
                                       "type" : "ExpressionRef"
                                    }
                                 }
                              }
                           } ]
                        }, {
                           "name" : "HistologyInterpretedAsCin1OrNormal",
                           "type" : "ExpressionRef"
                        } ]
                     }, {
                        "type" : "And",
                        "operand" : [ {
                           "type" : "In",
                           "operand" : [ {
                              "path" : "date",
                              "type" : "Property",
                              "source" : {
                                 "name" : "MostRecentCytologyReport",
                                 "type" : "ExpressionRef"
                              }
                           }, {
                              "lowClosed" : false,
                              "highClosed" : true,
                              "type" : "Interval",
                              "low" : {
                                 "path" : "date",
                                 "type" : "Property",
                                 "source" : {
                                    "name" : "InitialCervicalHistologyInterpretedAsUnspecifiedHsilOrCin2InLast18Months",
                                    "type" : "ExpressionRef"
                                 }
                              },
                              "high" : {
                                 "type" : "Add",
                                 "operand" : [ {
                                    "path" : "date",
                                    "type" : "Property",
                                    "source" : {
                                       "name" : "InitialCervicalHistologyInterpretedAsUnspecifiedHsilOrCin2InLast18Months",
                                       "type" : "ExpressionRef"
                                    }
                                 }, {
                                    "value" : 18,
                                    "unit" : "months",
                                    "type" : "Quantity"
                                 } ]
                              }
                           } ]
                        }, {
                           "type" : "Not",
                           "operand" : {
                              "type" : "IsNull",
                              "operand" : {
                                 "path" : "date",
                                 "type" : "Property",
                                 "source" : {
                                    "name" : "InitialCervicalHistologyInterpretedAsUnspecifiedHsilOrCin2InLast18Months",
                                    "type" : "ExpressionRef"
                                 }
                              }
                           }
                        } ]
                     } ]
                  }, {
                     "type" : "Or",
                     "operand" : [ {
                        "type" : "Or",
                        "operand" : [ {
                           "name" : "CytologyInterpretedAsLsil",
                           "type" : "ExpressionRef"
                        }, {
                           "name" : "CytologyInterpretedAsAscus",
                           "type" : "ExpressionRef"
                        } ]
                     }, {
                        "name" : "CytologyInterpretedAsNilm",
                        "type" : "ExpressionRef"
                     } ]
                  } ]
               },
               "else" : {
                  "valueType" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "value" : "false",
                  "type" : "Literal"
               }
            }
         }, {
            "name" : "SecondMostRecentCytologyInterpretedAsLsil",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "type" : "AnyTrue",
               "source" : {
                  "type" : "Query",
                  "source" : [ {
                     "alias" : "aC",
                     "expression" : {
                        "path" : "allConclusions",
                        "type" : "Property",
                        "source" : {
                           "name" : "SecondMostRecentCytologyReport",
                           "type" : "ExpressionRef"
                        }
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
                              "name" : "aC",
                              "type" : "AliasRef"
                           } ]
                        }, {
                           "type" : "ToConcept",
                           "operand" : {
                              "name" : "LSIL",
                              "type" : "CodeRef"
                           }
                        } ]
                     }
                  }
               }
            }
         }, {
            "name" : "SecondMostRecentCytologyInterpretedAsAscus",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "type" : "AnyTrue",
               "source" : {
                  "type" : "Query",
                  "source" : [ {
                     "alias" : "aC",
                     "expression" : {
                        "path" : "allConclusions",
                        "type" : "Property",
                        "source" : {
                           "name" : "SecondMostRecentCytologyReport",
                           "type" : "ExpressionRef"
                        }
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
                              "name" : "aC",
                              "type" : "AliasRef"
                           } ]
                        }, {
                           "type" : "ToConcept",
                           "operand" : {
                              "name" : "ASC-US",
                              "type" : "CodeRef"
                           }
                        } ]
                     }
                  }
               }
            }
         }, {
            "name" : "SecondMostRecentNegativeHsilSurveillanceResult",
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
                           "name" : "InitialCervicalHistologyInterpretedAsUnspecifiedHsilOrCin2InLast18Months",
                           "type" : "ExpressionRef"
                        }
                     }
                  }
               },
               "then" : {
                  "type" : "And",
                  "operand" : [ {
                     "type" : "And",
                     "operand" : [ {
                        "type" : "And",
                        "operand" : [ {
                           "type" : "And",
                           "operand" : [ {
                              "type" : "In",
                              "operand" : [ {
                                 "path" : "date",
                                 "type" : "Property",
                                 "source" : {
                                    "name" : "SecondMostRecentBiopsyReport",
                                    "type" : "ExpressionRef"
                                 }
                              }, {
                                 "lowClosed" : false,
                                 "highClosed" : true,
                                 "type" : "Interval",
                                 "low" : {
                                    "path" : "date",
                                    "type" : "Property",
                                    "source" : {
                                       "name" : "InitialCervicalHistologyInterpretedAsUnspecifiedHsilOrCin2InLast18Months",
                                       "type" : "ExpressionRef"
                                    }
                                 },
                                 "high" : {
                                    "type" : "Add",
                                    "operand" : [ {
                                       "path" : "date",
                                       "type" : "Property",
                                       "source" : {
                                          "name" : "InitialCervicalHistologyInterpretedAsUnspecifiedHsilOrCin2InLast18Months",
                                          "type" : "ExpressionRef"
                                       }
                                    }, {
                                       "value" : 18,
                                       "unit" : "months",
                                       "type" : "Quantity"
                                    } ]
                                 }
                              } ]
                           }, {
                              "type" : "Not",
                              "operand" : {
                                 "type" : "IsNull",
                                 "operand" : {
                                    "path" : "date",
                                    "type" : "Property",
                                    "source" : {
                                       "name" : "InitialCervicalHistologyInterpretedAsUnspecifiedHsilOrCin2InLast18Months",
                                       "type" : "ExpressionRef"
                                    }
                                 }
                              }
                           } ]
                        }, {
                           "name" : "SecondMostRecentHistologyInterpretedAsCin1OrNormal",
                           "type" : "ExpressionRef"
                        } ]
                     }, {
                        "type" : "And",
                        "operand" : [ {
                           "type" : "In",
                           "operand" : [ {
                              "path" : "date",
                              "type" : "Property",
                              "source" : {
                                 "name" : "SecondMostRecentCytologyReport",
                                 "type" : "ExpressionRef"
                              }
                           }, {
                              "lowClosed" : false,
                              "highClosed" : true,
                              "type" : "Interval",
                              "low" : {
                                 "path" : "date",
                                 "type" : "Property",
                                 "source" : {
                                    "name" : "InitialCervicalHistologyInterpretedAsUnspecifiedHsilOrCin2InLast18Months",
                                    "type" : "ExpressionRef"
                                 }
                              },
                              "high" : {
                                 "type" : "Add",
                                 "operand" : [ {
                                    "path" : "date",
                                    "type" : "Property",
                                    "source" : {
                                       "name" : "InitialCervicalHistologyInterpretedAsUnspecifiedHsilOrCin2InLast18Months",
                                       "type" : "ExpressionRef"
                                    }
                                 }, {
                                    "value" : 18,
                                    "unit" : "months",
                                    "type" : "Quantity"
                                 } ]
                              }
                           } ]
                        }, {
                           "type" : "Not",
                           "operand" : {
                              "type" : "IsNull",
                              "operand" : {
                                 "path" : "date",
                                 "type" : "Property",
                                 "source" : {
                                    "name" : "InitialCervicalHistologyInterpretedAsUnspecifiedHsilOrCin2InLast18Months",
                                    "type" : "ExpressionRef"
                                 }
                              }
                           }
                        } ]
                     } ]
                  }, {
                     "type" : "Or",
                     "operand" : [ {
                        "type" : "Or",
                        "operand" : [ {
                           "name" : "SecondMostRecentCytologyInterpretedAsLsil",
                           "type" : "ExpressionRef"
                        }, {
                           "name" : "SecondMostRecentCytologyInterpretedAsAscus",
                           "type" : "ExpressionRef"
                        } ]
                     }, {
                        "name" : "SecondMostRecentCytologyInterpretedAsNilm",
                        "type" : "ExpressionRef"
                     } ]
                  } ]
               },
               "else" : {
                  "valueType" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "value" : "false",
                  "type" : "Literal"
               }
            }
         }, {
            "name" : "SubsequentLowGradeHistologyReportsSinceInitialUnspecifiedHsilOrCin2InLast6Years",
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
                           "name" : "InitialCervicalHistologyInterpretedAsUnspecifiedHsilOrCin2InLast6Years",
                           "type" : "ExpressionRef"
                        }
                     }
                  }
               },
               "then" : {
                  "type" : "Query",
                  "source" : [ {
                     "alias" : "R",
                     "expression" : {
                        "name" : "SortedBiopsyReports",
                        "libraryName" : "Collate",
                        "type" : "ExpressionRef"
                     }
                  } ],
                  "relationship" : [ ],
                  "where" : {
                     "type" : "And",
                     "operand" : [ {
                        "type" : "After",
                        "operand" : [ {
                           "path" : "date",
                           "scope" : "R",
                           "type" : "Property"
                        }, {
                           "path" : "date",
                           "type" : "Property",
                           "source" : {
                              "name" : "InitialCervicalHistologyInterpretedAsUnspecifiedHsilOrCin2InLast6Years",
                              "type" : "ExpressionRef"
                           }
                        } ]
                     }, {
                        "type" : "AnyTrue",
                        "source" : {
                           "type" : "Query",
                           "source" : [ {
                              "alias" : "aC",
                              "expression" : {
                                 "path" : "allConclusions",
                                 "scope" : "R",
                                 "type" : "Property"
                              }
                           } ],
                           "relationship" : [ ],
                           "return" : {
                              "expression" : {
                                 "type" : "Or",
                                 "operand" : [ {
                                    "type" : "Equivalent",
                                    "operand" : [ {
                                       "name" : "ToConcept",
                                       "libraryName" : "FHIRHelpers",
                                       "type" : "FunctionRef",
                                       "operand" : [ {
                                          "name" : "aC",
                                          "type" : "AliasRef"
                                       } ]
                                    }, {
                                       "type" : "ToConcept",
                                       "operand" : {
                                          "name" : "CIN1",
                                          "type" : "CodeRef"
                                       }
                                    } ]
                                 }, {
                                    "type" : "InValueSet",
                                    "code" : {
                                       "name" : "ToConcept",
                                       "libraryName" : "FHIRHelpers",
                                       "type" : "FunctionRef",
                                       "operand" : [ {
                                          "name" : "aC",
                                          "type" : "AliasRef"
                                       } ]
                                    },
                                    "valueset" : {
                                       "name" : "Normal Histology Finding",
                                       "type" : "ValueSetRef"
                                    }
                                 } ]
                              }
                           }
                        }
                     } ]
                  }
               },
               "else" : {
                  "type" : "As",
                  "operand" : {
                     "type" : "Null"
                  },
                  "asTypeSpecifier" : {
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "type" : "TupleTypeSpecifier",
                        "element" : [ {
                           "name" : "riskTableInput",
                           "type" : {
                              "name" : "{urn:hl7-org:elm-types:r1}String",
                              "type" : "NamedTypeSpecifier"
                           }
                        }, {
                           "name" : "allConclusions",
                           "type" : {
                              "type" : "ListTypeSpecifier",
                              "elementType" : {
                                 "name" : "{http://hl7.org/fhir}CodeableConcept",
                                 "type" : "NamedTypeSpecifier"
                              }
                           }
                        }, {
                           "name" : "date",
                           "type" : {
                              "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                              "type" : "NamedTypeSpecifier"
                           }
                        } ]
                     }
                  }
               }
            }
         }, {
            "name" : "SubsequentLowGradeCytologyReportsSinceInitialUnspecifiedHsilOrCin2InLast6Years",
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
                           "name" : "InitialCervicalHistologyInterpretedAsUnspecifiedHsilOrCin2InLast6Years",
                           "type" : "ExpressionRef"
                        }
                     }
                  }
               },
               "then" : {
                  "type" : "Query",
                  "source" : [ {
                     "alias" : "R",
                     "expression" : {
                        "name" : "SortedCytologyReports",
                        "libraryName" : "Collate",
                        "type" : "ExpressionRef"
                     }
                  } ],
                  "relationship" : [ ],
                  "where" : {
                     "type" : "And",
                     "operand" : [ {
                        "type" : "After",
                        "operand" : [ {
                           "path" : "date",
                           "scope" : "R",
                           "type" : "Property"
                        }, {
                           "path" : "date",
                           "type" : "Property",
                           "source" : {
                              "name" : "InitialCervicalHistologyInterpretedAsUnspecifiedHsilOrCin2InLast6Years",
                              "type" : "ExpressionRef"
                           }
                        } ]
                     }, {
                        "type" : "AnyTrue",
                        "source" : {
                           "type" : "Query",
                           "source" : [ {
                              "alias" : "aC",
                              "expression" : {
                                 "path" : "allConclusions",
                                 "scope" : "R",
                                 "type" : "Property"
                              }
                           } ],
                           "relationship" : [ ],
                           "return" : {
                              "expression" : {
                                 "type" : "Or",
                                 "operand" : [ {
                                    "type" : "Or",
                                    "operand" : [ {
                                       "type" : "Equivalent",
                                       "operand" : [ {
                                          "name" : "ToConcept",
                                          "libraryName" : "FHIRHelpers",
                                          "type" : "FunctionRef",
                                          "operand" : [ {
                                             "name" : "aC",
                                             "type" : "AliasRef"
                                          } ]
                                       }, {
                                          "type" : "ToConcept",
                                          "operand" : {
                                             "name" : "NILM",
                                             "libraryName" : "Dash",
                                             "type" : "CodeRef"
                                          }
                                       } ]
                                    }, {
                                       "type" : "Equivalent",
                                       "operand" : [ {
                                          "name" : "ToConcept",
                                          "libraryName" : "FHIRHelpers",
                                          "type" : "FunctionRef",
                                          "operand" : [ {
                                             "name" : "aC",
                                             "type" : "AliasRef"
                                          } ]
                                       }, {
                                          "type" : "ToConcept",
                                          "operand" : {
                                             "name" : "LSIL",
                                             "type" : "CodeRef"
                                          }
                                       } ]
                                    } ]
                                 }, {
                                    "type" : "Equivalent",
                                    "operand" : [ {
                                       "name" : "ToConcept",
                                       "libraryName" : "FHIRHelpers",
                                       "type" : "FunctionRef",
                                       "operand" : [ {
                                          "name" : "aC",
                                          "type" : "AliasRef"
                                       } ]
                                    }, {
                                       "type" : "ToConcept",
                                       "operand" : {
                                          "name" : "ASC-US",
                                          "type" : "CodeRef"
                                       }
                                    } ]
                                 } ]
                              }
                           }
                        }
                     } ]
                  }
               },
               "else" : {
                  "type" : "As",
                  "operand" : {
                     "type" : "Null"
                  },
                  "asTypeSpecifier" : {
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "type" : "TupleTypeSpecifier",
                        "element" : [ {
                           "name" : "riskTableInput",
                           "type" : {
                              "name" : "{urn:hl7-org:elm-types:r1}String",
                              "type" : "NamedTypeSpecifier"
                           }
                        }, {
                           "name" : "allConclusions",
                           "type" : {
                              "type" : "ListTypeSpecifier",
                              "elementType" : {
                                 "name" : "{http://hl7.org/fhir}CodeableConcept",
                                 "type" : "NamedTypeSpecifier"
                              }
                           }
                        }, {
                           "name" : "date",
                           "type" : {
                              "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                              "type" : "NamedTypeSpecifier"
                           }
                        } ]
                     }
                  }
               }
            }
         }, {
            "name" : "MostRecentSurveillanceTestNegative",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "type" : "Or",
               "operand" : [ {
                  "type" : "And",
                  "operand" : [ {
                     "type" : "Equal",
                     "operand" : [ {
                        "name" : "MostRecentHpvResult",
                        "libraryName" : "Collate",
                        "type" : "ExpressionRef"
                     }, {
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "HPV-negative",
                        "type" : "Literal"
                     } ]
                  }, {
                     "type" : "Equal",
                     "operand" : [ {
                        "name" : "MostRecentCytologyCotestResult",
                        "libraryName" : "Collate",
                        "type" : "ExpressionRef"
                     }, {
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "NILM",
                        "type" : "Literal"
                     } ]
                  } ]
               }, {
                  "type" : "And",
                  "operand" : [ {
                     "type" : "Equal",
                     "operand" : [ {
                        "name" : "MostRecentHpvResult",
                        "libraryName" : "Collate",
                        "type" : "ExpressionRef"
                     }, {
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "HPV-negative",
                        "type" : "Literal"
                     } ]
                  }, {
                     "type" : "IsNull",
                     "operand" : {
                        "name" : "MostRecentCytologyCotest",
                        "libraryName" : "Collate",
                        "type" : "ExpressionRef"
                     }
                  } ]
               } ]
            }
         }, {
            "name" : "CytologyInterpretedAsHsil",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "type" : "AnyTrue",
               "source" : {
                  "type" : "Query",
                  "source" : [ {
                     "alias" : "aC",
                     "expression" : {
                        "path" : "allConclusions",
                        "type" : "Property",
                        "source" : {
                           "name" : "MostRecentCytologyReport",
                           "type" : "ExpressionRef"
                        }
                     }
                  } ],
                  "relationship" : [ ],
                  "return" : {
                     "expression" : {
                        "type" : "InValueSet",
                        "code" : {
                           "name" : "ToConcept",
                           "libraryName" : "FHIRHelpers",
                           "type" : "FunctionRef",
                           "operand" : [ {
                              "name" : "aC",
                              "type" : "AliasRef"
                           } ]
                        },
                        "valueset" : {
                           "name" : "HSIL",
                           "type" : "ValueSetRef"
                        }
                     }
                  }
               }
            }
         }, {
            "name" : "NegativeHrHpvTests",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "type" : "Query",
               "source" : [ {
                  "alias" : "R",
                  "expression" : {
                     "name" : "SortedHpvReports",
                     "libraryName" : "Collate",
                     "type" : "ExpressionRef"
                  }
               } ],
               "relationship" : [ ],
               "where" : {
                  "type" : "AnyTrue",
                  "source" : {
                     "type" : "Query",
                     "source" : [ {
                        "alias" : "aC",
                        "expression" : {
                           "path" : "allConclusions",
                           "scope" : "R",
                           "type" : "Property"
                        }
                     } ],
                     "relationship" : [ ],
                     "return" : {
                        "expression" : {
                           "type" : "InValueSet",
                           "code" : {
                              "name" : "ToConcept",
                              "libraryName" : "FHIRHelpers",
                              "type" : "FunctionRef",
                              "operand" : [ {
                                 "name" : "aC",
                                 "type" : "AliasRef"
                              } ]
                           },
                           "valueset" : {
                              "name" : "HPV Negative Results",
                              "libraryName" : "Dash",
                              "type" : "ValueSetRef"
                           }
                        }
                     }
                  }
               }
            }
         }, {
            "name" : "NegativeHrHpvTestsAsPartOfCotest",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "type" : "Query",
               "source" : [ {
                  "alias" : "H",
                  "expression" : {
                     "name" : "NegativeHrHpvTests",
                     "type" : "ExpressionRef"
                  }
               }, {
                  "alias" : "C",
                  "expression" : {
                     "name" : "SortedCytologyReports",
                     "libraryName" : "Collate",
                     "type" : "ExpressionRef"
                  }
               } ],
               "relationship" : [ ],
               "where" : {
                  "type" : "And",
                  "operand" : [ {
                     "type" : "In",
                     "operand" : [ {
                        "path" : "date",
                        "scope" : "H",
                        "type" : "Property"
                     }, {
                        "lowClosed" : true,
                        "highClosed" : true,
                        "type" : "Interval",
                        "low" : {
                           "type" : "Subtract",
                           "operand" : [ {
                              "path" : "date",
                              "scope" : "C",
                              "type" : "Property"
                           }, {
                              "value" : 1,
                              "unit" : "day",
                              "type" : "Quantity"
                           } ]
                        },
                        "high" : {
                           "type" : "Add",
                           "operand" : [ {
                              "path" : "date",
                              "scope" : "C",
                              "type" : "Property"
                           }, {
                              "value" : 1,
                              "unit" : "day",
                              "type" : "Quantity"
                           } ]
                        }
                     } ]
                  }, {
                     "type" : "Not",
                     "operand" : {
                        "type" : "IsNull",
                        "operand" : {
                           "path" : "date",
                           "scope" : "C",
                           "type" : "Property"
                        }
                     }
                  } ]
               },
               "return" : {
                  "expression" : {
                     "name" : "H",
                     "type" : "AliasRef"
                  }
               }
            }
         }, {
            "name" : "NegativePrimaryHrHpvTests",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "type" : "Except",
               "operand" : [ {
                  "name" : "NegativeHrHpvTests",
                  "type" : "ExpressionRef"
               }, {
                  "name" : "NegativeHrHpvTestsAsPartOfCotest",
                  "type" : "ExpressionRef"
               } ]
            }
         }, {
            "name" : "NegativeCytologyTests",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "type" : "Query",
               "source" : [ {
                  "alias" : "R",
                  "expression" : {
                     "name" : "SortedCytologyReports",
                     "libraryName" : "Collate",
                     "type" : "ExpressionRef"
                  }
               } ],
               "relationship" : [ ],
               "where" : {
                  "type" : "AnyTrue",
                  "source" : {
                     "type" : "Query",
                     "source" : [ {
                        "alias" : "aC",
                        "expression" : {
                           "path" : "allConclusions",
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
                                 "name" : "aC",
                                 "type" : "AliasRef"
                              } ]
                           }, {
                              "type" : "ToConcept",
                              "operand" : {
                                 "name" : "NILM",
                                 "libraryName" : "Dash",
                                 "type" : "CodeRef"
                              }
                           } ]
                        }
                     }
                  }
               }
            }
         }, {
            "name" : "NegativeCotests",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "type" : "Query",
               "source" : [ {
                  "alias" : "H",
                  "expression" : {
                     "name" : "NegativeHrHpvTests",
                     "type" : "ExpressionRef"
                  }
               }, {
                  "alias" : "C",
                  "expression" : {
                     "name" : "NegativeCytologyTests",
                     "type" : "ExpressionRef"
                  }
               } ],
               "relationship" : [ ],
               "where" : {
                  "type" : "And",
                  "operand" : [ {
                     "type" : "In",
                     "operand" : [ {
                        "path" : "date",
                        "scope" : "H",
                        "type" : "Property"
                     }, {
                        "lowClosed" : true,
                        "highClosed" : true,
                        "type" : "Interval",
                        "low" : {
                           "type" : "Subtract",
                           "operand" : [ {
                              "path" : "date",
                              "scope" : "C",
                              "type" : "Property"
                           }, {
                              "value" : 1,
                              "unit" : "day",
                              "type" : "Quantity"
                           } ]
                        },
                        "high" : {
                           "type" : "Add",
                           "operand" : [ {
                              "path" : "date",
                              "scope" : "C",
                              "type" : "Property"
                           }, {
                              "value" : 1,
                              "unit" : "day",
                              "type" : "Quantity"
                           } ]
                        }
                     } ]
                  }, {
                     "type" : "Not",
                     "operand" : {
                        "type" : "IsNull",
                        "operand" : {
                           "path" : "date",
                           "scope" : "C",
                           "type" : "Property"
                        }
                     }
                  } ]
               },
               "return" : {
                  "expression" : {
                     "name" : "H",
                     "type" : "AliasRef"
                  }
               }
            }
         }, {
            "name" : "NegativeSurveillanceTests",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "type" : "Union",
               "operand" : [ {
                  "name" : "NegativePrimaryHrHpvTests",
                  "type" : "ExpressionRef"
               }, {
                  "name" : "NegativeCotests",
                  "type" : "ExpressionRef"
               } ]
            }
         }, {
            "name" : "SortedNegativeSurveillanceTests",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "type" : "Query",
               "source" : [ {
                  "alias" : "H",
                  "expression" : {
                     "name" : "NegativeSurveillanceTests",
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
                        "scope" : "H",
                        "type" : "Property"
                     }
                  }
               },
               "return" : {
                  "expression" : {
                     "type" : "Tuple",
                     "element" : [ {
                        "name" : "date",
                        "value" : {
                           "path" : "date",
                           "scope" : "H",
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
            "name" : "NegativeSurveillanceTestsAfterSecondMostRecentBiopsy",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "type" : "Query",
               "source" : [ {
                  "alias" : "H",
                  "expression" : {
                     "name" : "SortedNegativeSurveillanceTests",
                     "type" : "ExpressionRef"
                  }
               } ],
               "relationship" : [ ],
               "where" : {
                  "type" : "Greater",
                  "operand" : [ {
                     "path" : "date",
                     "scope" : "H",
                     "type" : "Property"
                  }, {
                     "path" : "date",
                     "type" : "Property",
                     "source" : {
                        "name" : "SecondMostRecentBiopsyReport",
                        "type" : "ExpressionRef"
                     }
                  } ]
               }
            }
         }, {
            "name" : "FirstNegativeSurveillanceTestAfterSecondMostRecentBiopsy",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "type" : "If",
               "condition" : {
                  "asType" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "type" : "As",
                  "operand" : {
                     "type" : "Greater",
                     "operand" : [ {
                        "type" : "Count",
                        "source" : {
                           "name" : "NegativeSurveillanceTestsAfterSecondMostRecentBiopsy",
                           "type" : "ExpressionRef"
                        }
                     }, {
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "0",
                        "type" : "Literal"
                     } ]
                  }
               },
               "then" : {
                  "type" : "Indexer",
                  "operand" : [ {
                     "name" : "NegativeSurveillanceTestsAfterSecondMostRecentBiopsy",
                     "type" : "ExpressionRef"
                  }, {
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "0",
                     "type" : "Literal"
                  } ]
               },
               "else" : {
                  "type" : "As",
                  "operand" : {
                     "type" : "Null"
                  },
                  "asTypeSpecifier" : {
                     "type" : "TupleTypeSpecifier",
                     "element" : [ {
                        "name" : "date",
                        "type" : {
                           "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                           "type" : "NamedTypeSpecifier"
                        }
                     } ]
                  }
               }
            }
         }, {
            "name" : "HasFirstNegativeSurveillanceTestAfterSecondMostRecentBiopsy",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "type" : "Not",
               "operand" : {
                  "type" : "IsNull",
                  "operand" : {
                     "name" : "FirstNegativeSurveillanceTestAfterSecondMostRecentBiopsy",
                     "type" : "ExpressionRef"
                  }
               }
            }
         }, {
            "name" : "MostRecentTreatment",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "name" : "MostRecentProcedure",
               "libraryName" : "C3F",
               "type" : "FunctionRef",
               "operand" : [ {
                  "type" : "Union",
                  "operand" : [ {
                     "name" : "CervicalAblationProcedures",
                     "libraryName" : "Dash",
                     "type" : "ExpressionRef"
                  }, {
                     "name" : "CervicalExcisionProcedures",
                     "libraryName" : "Dash",
                     "type" : "ExpressionRef"
                  } ]
               } ]
            }
         }, {
            "name" : "MostRecentTreatmentDate",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "name" : "ProcedureDate",
               "libraryName" : "Common",
               "type" : "FunctionRef",
               "operand" : [ {
                  "name" : "MostRecentTreatment",
                  "type" : "ExpressionRef"
               } ]
            }
         }, {
            "name" : "NegativeSurveillanceTestsAfterMostRecentBiopsy",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "type" : "Query",
               "source" : [ {
                  "alias" : "H",
                  "expression" : {
                     "name" : "SortedNegativeSurveillanceTests",
                     "type" : "ExpressionRef"
                  }
               } ],
               "relationship" : [ ],
               "where" : {
                  "type" : "Greater",
                  "operand" : [ {
                     "path" : "date",
                     "scope" : "H",
                     "type" : "Property"
                  }, {
                     "path" : "date",
                     "type" : "Property",
                     "source" : {
                        "name" : "MostRecentBiopsyReport",
                        "libraryName" : "Collate",
                        "type" : "ExpressionRef"
                     }
                  } ]
               }
            }
         }, {
            "name" : "FirstNegativeSurveillanceTestAfterMostRecentBiopsy",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "type" : "If",
               "condition" : {
                  "asType" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "type" : "As",
                  "operand" : {
                     "type" : "Greater",
                     "operand" : [ {
                        "type" : "Count",
                        "source" : {
                           "name" : "NegativeSurveillanceTestsAfterMostRecentBiopsy",
                           "type" : "ExpressionRef"
                        }
                     }, {
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "0",
                        "type" : "Literal"
                     } ]
                  }
               },
               "then" : {
                  "type" : "Indexer",
                  "operand" : [ {
                     "name" : "NegativeSurveillanceTestsAfterMostRecentBiopsy",
                     "type" : "ExpressionRef"
                  }, {
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "0",
                     "type" : "Literal"
                  } ]
               },
               "else" : {
                  "type" : "As",
                  "operand" : {
                     "type" : "Null"
                  },
                  "asTypeSpecifier" : {
                     "type" : "TupleTypeSpecifier",
                     "element" : [ {
                        "name" : "date",
                        "type" : {
                           "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                           "type" : "NamedTypeSpecifier"
                        }
                     } ]
                  }
               }
            }
         }, {
            "name" : "HasFirstNegativeSurveillanceTestAfterMostRecentBiopsy",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "type" : "Not",
               "operand" : {
                  "type" : "IsNull",
                  "operand" : {
                     "name" : "FirstNegativeSurveillanceTestAfterMostRecentBiopsy",
                     "type" : "ExpressionRef"
                  }
               }
            }
         }, {
            "name" : "RecommendationForHistologyResults",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "type" : "Case",
               "caseItem" : [ {
                  "when" : {
                     "type" : "And",
                     "operand" : [ {
                        "type" : "And",
                        "operand" : [ {
                           "type" : "And",
                           "operand" : [ {
                              "type" : "GreaterOrEqual",
                              "operand" : [ {
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
                              }, {
                                 "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                                 "value" : "25",
                                 "type" : "Literal"
                              } ]
                           }, {
                              "type" : "Not",
                              "operand" : {
                                 "name" : "RecentlyRespondedYesToFuturePregnancyConcernsQuestion",
                                 "type" : "ExpressionRef"
                              }
                           } ]
                        }, {
                           "name" : "MostRecentBiopsyReportWasWithinPastYear",
                           "type" : "ExpressionRef"
                        } ]
                     }, {
                        "name" : "HistologyInterpretedAsUnspecifiedHsil",
                        "type" : "ExpressionRef"
                     } ]
                  },
                  "then" : {
                     "type" : "Tuple",
                     "element" : [ {
                        "name" : "short",
                        "value" : {
                           "valueType" : "{urn:hl7-org:elm-types:r1}String",
                           "value" : "Surveillance or Treatment",
                           "type" : "Literal"
                        }
                     }, {
                        "name" : "date",
                        "value" : {
                           "type" : "Today"
                        }
                     }, {
                        "name" : "group",
                        "value" : {
                           "valueType" : "{urn:hl7-org:elm-types:r1}String",
                           "value" : "Managing Histology (I.1)",
                           "type" : "Literal"
                        }
                     }, {
                        "name" : "details",
                        "value" : {
                           "type" : "List",
                           "element" : [ {
                              "valueType" : "{urn:hl7-org:elm-types:r1}String",
                              "value" : "Treatment is preferred if histologic HSIL cannot be specified (e.g., reported as histologic HSIL or histologic HSIL [CIN 2,3]) (CIII), but observation is acceptable if there are concerns related to future pregnancies (CIII). For patients 25 years or older, observation includes colposcopy and HPV-based testing with cotest or primary hrHPV testing at 6-month intervals for up to 2 years.",
                              "type" : "Literal"
                           } ]
                        }
                     } ]
                  }
               }, {
                  "when" : {
                     "type" : "And",
                     "operand" : [ {
                        "type" : "And",
                        "operand" : [ {
                           "type" : "And",
                           "operand" : [ {
                              "type" : "GreaterOrEqual",
                              "operand" : [ {
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
                              }, {
                                 "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                                 "value" : "25",
                                 "type" : "Literal"
                              } ]
                           }, {
                              "type" : "Not",
                              "operand" : {
                                 "name" : "Pregnant",
                                 "libraryName" : "Dash",
                                 "type" : "ExpressionRef"
                              }
                           } ]
                        }, {
                           "name" : "MostRecentBiopsyReportWasWithinPastYear",
                           "type" : "ExpressionRef"
                        } ]
                     }, {
                        "name" : "HistologyInterpretedAsCin3",
                        "type" : "ExpressionRef"
                     } ]
                  },
                  "then" : {
                     "type" : "Tuple",
                     "element" : [ {
                        "name" : "short",
                        "value" : {
                           "valueType" : "{urn:hl7-org:elm-types:r1}String",
                           "value" : "Treatment",
                           "type" : "Literal"
                        }
                     }, {
                        "name" : "date",
                        "value" : {
                           "type" : "Today"
                        }
                     }, {
                        "name" : "group",
                        "value" : {
                           "valueType" : "{urn:hl7-org:elm-types:r1}String",
                           "value" : "Managing Histology (I.2)",
                           "type" : "Literal"
                        }
                     }, {
                        "name" : "details",
                        "value" : {
                           "type" : "List",
                           "element" : [ {
                              "valueType" : "{urn:hl7-org:elm-types:r1}String",
                              "value" : "Treatment is recommended, and observation is unacceptable (AII). When treatment of histologic HSIL is planned, excisional treatment is preferred, and treatment with ablation is acceptable (BI). Outside of the setting of a clinical research trial, nonsurgical therapies, including topical agents, therapeutic vaccines, and other biologics, are unacceptable for the treatment of histologic HSIL (CIN 2 or CIN 3) (DIII). Hysterectomy is unacceptable as primary therapy solely for the treatment of histologic HSIL (CIN 2, CIN 3, or unqualified) (EII). When considering ablative therapy, in particular cryotherapy, ablation is unacceptable in the following circumstances as defined by the WHO: (a) the lesion extends into the canal and (b) when the lesion covers more than 75% of the surface area of the ectocervix or extends beyond the cryotip being used. Additional situations for which cryotherapy is not recommended include the following: (a) the squamocolumnar junction or the upper limit of any lesion is not fully visualized; (b) endocervical canal sample is diagnosed as CIN 2+ or CIN that cannot be graded; (c) after previous treatment for CIN 2+; (d) in the setting of inadequate biopsies of the cervix to confirm histologic diagnosis; and (e) if cancer is suspected (EIII).",
                              "type" : "Literal"
                           } ]
                        }
                     } ]
                  }
               }, {
                  "when" : {
                     "type" : "And",
                     "operand" : [ {
                        "type" : "And",
                        "operand" : [ {
                           "type" : "And",
                           "operand" : [ {
                              "type" : "And",
                              "operand" : [ {
                                 "type" : "GreaterOrEqual",
                                 "operand" : [ {
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
                                 }, {
                                    "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                                    "value" : "25",
                                    "type" : "Literal"
                                 } ]
                              }, {
                                 "type" : "Not",
                                 "operand" : {
                                    "name" : "Pregnant",
                                    "libraryName" : "Dash",
                                    "type" : "ExpressionRef"
                                 }
                              } ]
                           }, {
                              "type" : "Not",
                              "operand" : {
                                 "name" : "RecentlyRespondedYesToFuturePregnancyConcernsQuestion",
                                 "type" : "ExpressionRef"
                              }
                           } ]
                        }, {
                           "name" : "MostRecentBiopsyReportWasWithinPastYear",
                           "type" : "ExpressionRef"
                        } ]
                     }, {
                        "name" : "HistologyInterpretedAsCin2",
                        "type" : "ExpressionRef"
                     } ]
                  },
                  "then" : {
                     "type" : "Tuple",
                     "element" : [ {
                        "name" : "short",
                        "value" : {
                           "valueType" : "{urn:hl7-org:elm-types:r1}String",
                           "value" : "Surveillance or Treatment",
                           "type" : "Literal"
                        }
                     }, {
                        "name" : "date",
                        "value" : {
                           "type" : "Today"
                        }
                     }, {
                        "name" : "group",
                        "value" : {
                           "valueType" : "{urn:hl7-org:elm-types:r1}String",
                           "value" : "Managing Histology (I.2)",
                           "type" : "Literal"
                        }
                     }, {
                        "name" : "details",
                        "value" : {
                           "type" : "List",
                           "element" : [ {
                              "valueType" : "{urn:hl7-org:elm-types:r1}String",
                              "value" : "Treatment is recommended unless the patient's concerns about the effect of treatment on future pregnancy outweigh concerns about cancer (BII). Observation is unacceptable when the squamocolumnar junction or the upper limit of the lesion is not fully visualized or when the results of an endocervical sampling, if performed, is CIN 2+ or ungraded (EIII). For patients with a diagnosis of histologic HSIL (CIN 2) whose concerns about the effects of treatment on a future pregnancy outweigh their concerns about cancer, either observation or treatment is acceptable provided the squamocolumnar junction is visible and CIN 2+ or ungraded CIN is not identified on endocervical sampling (CII). For patients 25 years or older, observation includes colposcopy and HPV-based testing with cotest or primary hrHPV testing at 6-month intervals for up to 2 years.\n\nWhen treatment of histologic HSIL is planned, excisional treatment is preferred, and treatment with ablation is acceptable (BI). Outside of the setting of a clinical research trial, nonsurgical therapies, including topical agents, therapeutic vaccines, and other biologics, are unacceptable for the treatment of histologic HSIL (CIN 2 or CIN 3) (DIII). Hysterectomy is unacceptable as primary therapy solely for the treatment of histologic HSIL (CIN 2, CIN 3, or unqualified) (EII). When considering ablative therapy, in particular cryotherapy, ablation is unacceptable in the following circumstances as defined by the WHO: (a) the lesion extends into the canal and (b) when the lesion covers more than 75% of the surface area of the ectocervix or extends beyond the cryotip being used. Additional situations for which cryotherapy is not recommended include the following: (a) the squamocolumnar junction or the upper limit of any lesion is not fully visualized; (b) endocervical canal sample is diagnosed as CIN 2+ or CIN that cannot be graded; (c) after previous treatment for CIN 2+; (d) in the setting of inadequate biopsies of the cervix to confirm histologic diagnosis; and (e) if cancer is suspected (EIII).",
                              "type" : "Literal"
                           } ]
                        }
                     } ]
                  }
               }, {
                  "when" : {
                     "type" : "And",
                     "operand" : [ {
                        "type" : "And",
                        "operand" : [ {
                           "type" : "And",
                           "operand" : [ {
                              "type" : "And",
                              "operand" : [ {
                                 "type" : "GreaterOrEqual",
                                 "operand" : [ {
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
                                 }, {
                                    "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                                    "value" : "25",
                                    "type" : "Literal"
                                 } ]
                              }, {
                                 "type" : "LessOrEqual",
                                 "operand" : [ {
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
                                 }, {
                                    "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                                    "value" : "50",
                                    "type" : "Literal"
                                 } ]
                              } ]
                           }, {
                              "type" : "Or",
                              "operand" : [ {
                                 "name" : "HistologyInterpretedAsUnspecifiedHsil",
                                 "type" : "ExpressionRef"
                              }, {
                                 "name" : "HistologyInterpretedAsCin2",
                                 "type" : "ExpressionRef"
                              } ]
                           } ]
                        }, {
                           "name" : "HasHistologyInterpretedAsUnspecifiedHsilOrCin2BeforeMostRecentBiopsy",
                           "type" : "ExpressionRef"
                        } ]
                     }, {
                        "name" : "RecentlyRespondedYesToFuturePregnancyConcernsQuestion",
                        "type" : "ExpressionRef"
                     } ]
                  },
                  "then" : {
                     "type" : "Tuple",
                     "element" : [ {
                        "name" : "short",
                        "value" : {
                           "valueType" : "{urn:hl7-org:elm-types:r1}String",
                           "value" : "Surveillance or Treatment",
                           "type" : "Literal"
                        }
                     }, {
                        "name" : "date",
                        "value" : {
                           "type" : "Today"
                        }
                     }, {
                        "name" : "group",
                        "value" : {
                           "valueType" : "{urn:hl7-org:elm-types:r1}String",
                           "value" : "Managing Histology (I.3)",
                           "type" : "Literal"
                        }
                     }, {
                        "name" : "details",
                        "value" : {
                           "type" : "List",
                           "element" : [ {
                              "valueType" : "{urn:hl7-org:elm-types:r1}String",
                              "value" : "If CIN 2 remains present for a 2-year period, treatment is recommended (CII).",
                              "type" : "Literal"
                           } ]
                        }
                     } ]
                  }
               }, {
                  "when" : {
                     "type" : "And",
                     "operand" : [ {
                        "type" : "And",
                        "operand" : [ {
                           "type" : "And",
                           "operand" : [ {
                              "type" : "And",
                              "operand" : [ {
                                 "type" : "And",
                                 "operand" : [ {
                                    "type" : "GreaterOrEqual",
                                    "operand" : [ {
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
                                    }, {
                                       "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                                       "value" : "25",
                                       "type" : "Literal"
                                    } ]
                                 }, {
                                    "type" : "LessOrEqual",
                                    "operand" : [ {
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
                                    }, {
                                       "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                                       "value" : "50",
                                       "type" : "Literal"
                                    } ]
                                 } ]
                              }, {
                                 "type" : "Not",
                                 "operand" : {
                                    "type" : "IsNull",
                                    "operand" : {
                                       "name" : "InitialCervicalHistologyInterpretedAsUnspecifiedHsilOrCin2InLast6Years",
                                       "type" : "ExpressionRef"
                                    }
                                 }
                              } ]
                           }, {
                              "type" : "Equal",
                              "operand" : [ {
                                 "type" : "Count",
                                 "source" : {
                                    "name" : "SubsequentLowGradeHistologyReportsSinceInitialUnspecifiedHsilOrCin2InLast6Years",
                                    "type" : "ExpressionRef"
                                 }
                              }, {
                                 "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                                 "value" : "5",
                                 "type" : "Literal"
                              } ]
                           } ]
                        }, {
                           "type" : "GreaterOrEqual",
                           "operand" : [ {
                              "type" : "Count",
                              "source" : {
                                 "name" : "SubsequentLowGradeCytologyReportsSinceInitialUnspecifiedHsilOrCin2InLast6Years",
                                 "type" : "ExpressionRef"
                              }
                           }, {
                              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                              "value" : "5",
                              "type" : "Literal"
                           } ]
                        } ]
                     }, {
                        "name" : "RecentlyRespondedYesToFuturePregnancyConcernsQuestion",
                        "type" : "ExpressionRef"
                     } ]
                  },
                  "then" : {
                     "type" : "Tuple",
                     "element" : [ {
                        "name" : "short",
                        "value" : {
                           "valueType" : "{urn:hl7-org:elm-types:r1}String",
                           "value" : "Surveillance",
                           "type" : "Literal"
                        }
                     }, {
                        "name" : "date",
                        "value" : {
                           "type" : "Add",
                           "operand" : [ {
                              "type" : "Today"
                           }, {
                              "value" : 3,
                              "unit" : "years",
                              "type" : "Quantity"
                           } ]
                        }
                     }, {
                        "name" : "group",
                        "value" : {
                           "valueType" : "{urn:hl7-org:elm-types:r1}String",
                           "value" : "Managing Histology (I.3)",
                           "type" : "Literal"
                        }
                     }, {
                        "name" : "details",
                        "value" : {
                           "type" : "List",
                           "element" : [ {
                              "valueType" : "{urn:hl7-org:elm-types:r1}String",
                              "value" : "Surveillance with HPV-based testing is recommended every 3 years for 25 years after histologic HSIL (unspecified or CIN2) even if beyond the age of 65 (BII).",
                              "type" : "Literal"
                           } ]
                        }
                     } ]
                  }
               }, {
                  "when" : {
                     "type" : "And",
                     "operand" : [ {
                        "type" : "And",
                        "operand" : [ {
                           "type" : "And",
                           "operand" : [ {
                              "type" : "And",
                              "operand" : [ {
                                 "type" : "GreaterOrEqual",
                                 "operand" : [ {
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
                                 }, {
                                    "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                                    "value" : "25",
                                    "type" : "Literal"
                                 } ]
                              }, {
                                 "type" : "LessOrEqual",
                                 "operand" : [ {
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
                                 }, {
                                    "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                                    "value" : "50",
                                    "type" : "Literal"
                                 } ]
                              } ]
                           }, {
                              "type" : "Not",
                              "operand" : {
                                 "type" : "IsNull",
                                 "operand" : {
                                    "name" : "InitialCervicalHistologyInterpretedAsUnspecifiedHsilOrCin2InLast18Months",
                                    "type" : "ExpressionRef"
                                 }
                              }
                           } ]
                        }, {
                           "type" : "Query",
                           "source" : [ {
                              "alias" : "SecondMostRecentNegativeHsilSurveillanceResult",
                              "expression" : {
                                 "name" : "MostRecentNegativeHsilSurveillanceResult",
                                 "type" : "ExpressionRef"
                              }
                           } ],
                           "relationship" : [ ]
                        } ]
                     }, {
                        "name" : "RecentlyRespondedYesToFuturePregnancyConcernsQuestion",
                        "type" : "ExpressionRef"
                     } ]
                  },
                  "then" : {
                     "type" : "Tuple",
                     "element" : [ {
                        "name" : "short",
                        "value" : {
                           "valueType" : "{urn:hl7-org:elm-types:r1}String",
                           "value" : "Surveillance",
                           "type" : "Literal"
                        }
                     }, {
                        "name" : "date",
                        "value" : {
                           "type" : "Add",
                           "operand" : [ {
                              "type" : "Today"
                           }, {
                              "value" : 1,
                              "unit" : "year",
                              "type" : "Quantity"
                           } ]
                        }
                     }, {
                        "name" : "group",
                        "value" : {
                           "valueType" : "{urn:hl7-org:elm-types:r1}String",
                           "value" : "Managing Histology (I.3)",
                           "type" : "Literal"
                        }
                     }, {
                        "name" : "details",
                        "value" : {
                           "type" : "List",
                           "element" : [ {
                              "valueType" : "{urn:hl7-org:elm-types:r1}String",
                              "value" : "Subsequent surveillance with HPV-based testing should occur every year since the patient has demonstrated less than CIN2 and less than ASC-H during surveillance following a histologic unspecified or CIN2 result.",
                              "type" : "Literal"
                           } ]
                        }
                     } ]
                  }
               }, {
                  "when" : {
                     "type" : "And",
                     "operand" : [ {
                        "type" : "And",
                        "operand" : [ {
                           "type" : "And",
                           "operand" : [ {
                              "type" : "GreaterOrEqual",
                              "operand" : [ {
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
                              }, {
                                 "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                                 "value" : "25",
                                 "type" : "Literal"
                              } ]
                           }, {
                              "type" : "LessOrEqual",
                              "operand" : [ {
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
                              }, {
                                 "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                                 "value" : "50",
                                 "type" : "Literal"
                              } ]
                           } ]
                        }, {
                           "name" : "MostRecentBiopsyReportWasWithinPastYear",
                           "type" : "ExpressionRef"
                        } ]
                     }, {
                        "type" : "Query",
                        "source" : [ {
                           "alias" : "RecentlyRespondedYesToFuturePregnancyConcernsQuestion",
                           "expression" : {
                              "name" : "HistologyInterpretedAsUnspecifiedHsil",
                              "type" : "ExpressionRef"
                           }
                        } ],
                        "relationship" : [ ]
                     } ]
                  },
                  "then" : {
                     "type" : "Tuple",
                     "element" : [ {
                        "name" : "short",
                        "value" : {
                           "valueType" : "{urn:hl7-org:elm-types:r1}String",
                           "value" : "Surveillance or Treatment",
                           "type" : "Literal"
                        }
                     }, {
                        "name" : "date",
                        "value" : {
                           "type" : "Today"
                        }
                     }, {
                        "name" : "group",
                        "value" : {
                           "valueType" : "{urn:hl7-org:elm-types:r1}String",
                           "value" : "Managing Histology (I.3)",
                           "type" : "Literal"
                        }
                     }, {
                        "name" : "details",
                        "value" : {
                           "type" : "List",
                           "element" : [ {
                              "valueType" : "{urn:hl7-org:elm-types:r1}String",
                              "value" : "If the histologic HSIL cannot be specified as CIN 2, treatment is preferred, but observation is acceptable if there are concerns related to future pregnancies (CIII). For patients 25 years or older, observation includes colposcopy and HPV-based testing with cotest or primary hrHPV testing at 6-month intervals for up to 2 years.",
                              "type" : "Literal"
                           } ]
                        }
                     } ]
                  }
               }, {
                  "when" : {
                     "type" : "And",
                     "operand" : [ {
                        "type" : "And",
                        "operand" : [ {
                           "type" : "And",
                           "operand" : [ {
                              "type" : "And",
                              "operand" : [ {
                                 "type" : "GreaterOrEqual",
                                 "operand" : [ {
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
                                 }, {
                                    "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                                    "value" : "25",
                                    "type" : "Literal"
                                 } ]
                              }, {
                                 "type" : "LessOrEqual",
                                 "operand" : [ {
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
                                 }, {
                                    "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                                    "value" : "50",
                                    "type" : "Literal"
                                 } ]
                              } ]
                           }, {
                              "name" : "MostRecentBiopsyReportWasWithinPastYear",
                              "type" : "ExpressionRef"
                           } ]
                        }, {
                           "name" : "HistologyInterpretedAsCin2",
                           "type" : "ExpressionRef"
                        } ]
                     }, {
                        "name" : "RecentlyRespondedYesToFuturePregnancyConcernsQuestion",
                        "type" : "ExpressionRef"
                     } ]
                  },
                  "then" : {
                     "type" : "Tuple",
                     "element" : [ {
                        "name" : "short",
                        "value" : {
                           "valueType" : "{urn:hl7-org:elm-types:r1}String",
                           "value" : "Surveillance or Treatment",
                           "type" : "Literal"
                        }
                     }, {
                        "name" : "date",
                        "value" : {
                           "type" : "Today"
                        }
                     }, {
                        "name" : "group",
                        "value" : {
                           "valueType" : "{urn:hl7-org:elm-types:r1}String",
                           "value" : "Managing Histology (I.3)",
                           "type" : "Literal"
                        }
                     }, {
                        "name" : "details",
                        "value" : {
                           "type" : "List",
                           "element" : [ {
                              "valueType" : "{urn:hl7-org:elm-types:r1}String",
                              "value" : "For patients with a diagnosis of histologic HSIL (CIN 2) whose concerns about the effects of treatment on a future pregnancy outweigh their concerns about cancer, either observation or treatment is acceptable provided the squamocolumnar junction is visible and CIN 2+ or ungraded CIN is not identified on endocervical sampling (CII). For patients 25 years or older, observation includes colposcopy and HPV-based testing with cotest or primary hrHPV testing at 6-month intervals for up to 2 years.",
                              "type" : "Literal"
                           } ]
                        }
                     } ]
                  }
               }, {
                  "when" : {
                     "type" : "And",
                     "operand" : [ {
                        "type" : "And",
                        "operand" : [ {
                           "type" : "And",
                           "operand" : [ {
                              "type" : "GreaterOrEqual",
                              "operand" : [ {
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
                              }, {
                                 "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                                 "value" : "25",
                                 "type" : "Literal"
                              } ]
                           }, {
                              "name" : "MostRecentBiopsyReportWasWithinPastYear",
                              "type" : "ExpressionRef"
                           } ]
                        }, {
                           "name" : "HistologyInterpretedAsCin1OrNormal",
                           "type" : "ExpressionRef"
                        } ]
                     }, {
                        "name" : "PrecedingCytologyIsHsil",
                        "type" : "ExpressionRef"
                     } ]
                  },
                  "then" : {
                     "type" : "Tuple",
                     "element" : [ {
                        "name" : "short",
                        "value" : {
                           "valueType" : "{urn:hl7-org:elm-types:r1}String",
                           "value" : "See Details",
                           "type" : "Literal"
                        }
                     }, {
                        "name" : "date",
                        "value" : {
                           "type" : "Today"
                        }
                     }, {
                        "name" : "group",
                        "value" : {
                           "valueType" : "{urn:hl7-org:elm-types:r1}String",
                           "value" : "Managing Histology (I.4.1)",
                           "type" : "Literal"
                        }
                     }, {
                        "name" : "details",
                        "value" : {
                           "type" : "List",
                           "element" : [ {
                              "valueType" : "{urn:hl7-org:elm-types:r1}String",
                              "value" : "When CIN 2+ is not identified, HSIL cytology is managed more aggressively than ASC-H cytology. For cytology showing HSIL, but biopsy showing histologic LSIL (CIN 1) or less, either an immediate diagnostic excisional procedure or observation with HPV-based testing and colposcopy at 1 year is acceptable, provided in the latter case that the initial colposcopic examination fully visualized the squamocolumnar junction and the upper limit of any lesion, and that the endocervical sampling, if collected, was less than CIN 2 (BII). When CIN2+ is not identified histologically after an ASC-H or HSIL cytology result, it is acceptable to review the cytologic, histologic, and colposcopic findings. If the review yields a revised interpretation, management should follow guidelines for the revised diagnosis (CIII).",
                              "type" : "Literal"
                           } ]
                        }
                     } ]
                  }
               }, {
                  "when" : {
                     "type" : "And",
                     "operand" : [ {
                        "type" : "And",
                        "operand" : [ {
                           "type" : "And",
                           "operand" : [ {
                              "type" : "GreaterOrEqual",
                              "operand" : [ {
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
                              }, {
                                 "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                                 "value" : "25",
                                 "type" : "Literal"
                              } ]
                           }, {
                              "name" : "MostRecentBiopsyReportWasWithinPastYear",
                              "type" : "ExpressionRef"
                           } ]
                        }, {
                           "name" : "HistologyInterpretedAsCin1OrNormal",
                           "type" : "ExpressionRef"
                        } ]
                     }, {
                        "name" : "PrecedingCytologyIsAscH",
                        "type" : "ExpressionRef"
                     } ]
                  },
                  "then" : {
                     "type" : "Tuple",
                     "element" : [ {
                        "name" : "short",
                        "value" : {
                           "valueType" : "{urn:hl7-org:elm-types:r1}String",
                           "value" : "See Details",
                           "type" : "Literal"
                        }
                     }, {
                        "name" : "date",
                        "value" : {
                           "type" : "Today"
                        }
                     }, {
                        "name" : "group",
                        "value" : {
                           "valueType" : "{urn:hl7-org:elm-types:r1}String",
                           "value" : "Managing Histology (I.4.2)",
                           "type" : "Literal"
                        }
                     }, {
                        "name" : "details",
                        "value" : {
                           "type" : "List",
                           "element" : [ {
                              "valueType" : "{urn:hl7-org:elm-types:r1}String",
                              "value" : "For ASC-H, if the colposcopic examination can fully visualize the squamocolumnar junction and the upper limit of any lesion and that the endocervical sampling, if collected, is negative, observation at 1 year with HPV-based testing with cotesting or primary hrHPV testing is recommended; a diagnostic excisional procedure is not recommended (BII).",
                              "type" : "Literal"
                           } ]
                        }
                     } ]
                  }
               }, {
                  "when" : {
                     "type" : "And",
                     "operand" : [ {
                        "type" : "And",
                        "operand" : [ {
                           "type" : "And",
                           "operand" : [ {
                              "type" : "GreaterOrEqual",
                              "operand" : [ {
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
                              }, {
                                 "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                                 "value" : "25",
                                 "type" : "Literal"
                              } ]
                           }, {
                              "name" : "MostRecentSurveillanceTestNegative",
                              "type" : "ExpressionRef"
                           } ]
                        }, {
                           "type" : "GreaterOrEqual",
                           "operand" : [ {
                              "path" : "date",
                              "type" : "Property",
                              "source" : {
                                 "name" : "MostRecentHpvReport",
                                 "libraryName" : "Collate",
                                 "type" : "ExpressionRef"
                              }
                           }, {
                              "type" : "Subtract",
                              "operand" : [ {
                                 "type" : "Now"
                              }, {
                                 "value" : 3.5,
                                 "unit" : "years",
                                 "type" : "Quantity"
                              } ]
                           } ]
                        } ]
                     }, {
                        "type" : "Or",
                        "operand" : [ {
                           "type" : "And",
                           "operand" : [ {
                              "type" : "And",
                              "operand" : [ {
                                 "type" : "And",
                                 "operand" : [ {
                                    "type" : "And",
                                    "operand" : [ {
                                       "type" : "And",
                                       "operand" : [ {
                                          "type" : "And",
                                          "operand" : [ {
                                             "type" : "In",
                                             "operand" : [ {
                                                "path" : "date",
                                                "type" : "Property",
                                                "source" : {
                                                   "name" : "MostRecentBiopsyReport",
                                                   "libraryName" : "Collate",
                                                   "type" : "ExpressionRef"
                                                }
                                             }, {
                                                "lowClosed" : true,
                                                "highClosed" : false,
                                                "type" : "Interval",
                                                "low" : {
                                                   "type" : "Subtract",
                                                   "operand" : [ {
                                                      "path" : "date",
                                                      "type" : "Property",
                                                      "source" : {
                                                         "name" : "MostRecentHpvReport",
                                                         "libraryName" : "Collate",
                                                         "type" : "ExpressionRef"
                                                      }
                                                   }, {
                                                      "value" : 18,
                                                      "unit" : "months",
                                                      "type" : "Quantity"
                                                   } ]
                                                },
                                                "high" : {
                                                   "path" : "date",
                                                   "type" : "Property",
                                                   "source" : {
                                                      "name" : "MostRecentHpvReport",
                                                      "libraryName" : "Collate",
                                                      "type" : "ExpressionRef"
                                                   }
                                                }
                                             } ]
                                          }, {
                                             "type" : "Not",
                                             "operand" : {
                                                "type" : "IsNull",
                                                "operand" : {
                                                   "path" : "date",
                                                   "type" : "Property",
                                                   "source" : {
                                                      "name" : "MostRecentHpvReport",
                                                      "libraryName" : "Collate",
                                                      "type" : "ExpressionRef"
                                                   }
                                                }
                                             }
                                          } ]
                                       }, {
                                          "name" : "HistologyInterpretedAsNormal",
                                          "type" : "ExpressionRef"
                                       } ]
                                    }, {
                                       "name" : "TwoMostRecentBiopsyReportsWithin18monthsApart",
                                       "type" : "ExpressionRef"
                                    } ]
                                 }, {
                                    "type" : "And",
                                    "operand" : [ {
                                       "type" : "And",
                                       "operand" : [ {
                                          "name" : "HasFirstNegativeSurveillanceTestAfterSecondMostRecentBiopsy",
                                          "type" : "ExpressionRef"
                                       }, {
                                          "type" : "And",
                                          "operand" : [ {
                                             "type" : "In",
                                             "operand" : [ {
                                                "path" : "date",
                                                "type" : "Property",
                                                "source" : {
                                                   "name" : "FirstNegativeSurveillanceTestAfterSecondMostRecentBiopsy",
                                                   "type" : "ExpressionRef"
                                                }
                                             }, {
                                                "lowClosed" : true,
                                                "highClosed" : false,
                                                "type" : "Interval",
                                                "low" : {
                                                   "type" : "Subtract",
                                                   "operand" : [ {
                                                      "path" : "date",
                                                      "type" : "Property",
                                                      "source" : {
                                                         "name" : "MostRecentHpvReport",
                                                         "libraryName" : "Collate",
                                                         "type" : "ExpressionRef"
                                                      }
                                                   }, {
                                                      "value" : 18,
                                                      "unit" : "months",
                                                      "type" : "Quantity"
                                                   } ]
                                                },
                                                "high" : {
                                                   "path" : "date",
                                                   "type" : "Property",
                                                   "source" : {
                                                      "name" : "MostRecentHpvReport",
                                                      "libraryName" : "Collate",
                                                      "type" : "ExpressionRef"
                                                   }
                                                }
                                             } ]
                                          }, {
                                             "type" : "Not",
                                             "operand" : {
                                                "type" : "IsNull",
                                                "operand" : {
                                                   "path" : "date",
                                                   "type" : "Property",
                                                   "source" : {
                                                      "name" : "MostRecentHpvReport",
                                                      "libraryName" : "Collate",
                                                      "type" : "ExpressionRef"
                                                   }
                                                }
                                             }
                                          } ]
                                       } ]
                                    }, {
                                       "type" : "And",
                                       "operand" : [ {
                                          "type" : "In",
                                          "operand" : [ {
                                             "path" : "date",
                                             "type" : "Property",
                                             "source" : {
                                                "name" : "FirstNegativeSurveillanceTestAfterSecondMostRecentBiopsy",
                                                "type" : "ExpressionRef"
                                             }
                                          }, {
                                             "lowClosed" : false,
                                             "highClosed" : true,
                                             "type" : "Interval",
                                             "low" : {
                                                "path" : "date",
                                                "type" : "Property",
                                                "source" : {
                                                   "name" : "SecondMostRecentBiopsyReport",
                                                   "type" : "ExpressionRef"
                                                }
                                             },
                                             "high" : {
                                                "type" : "Add",
                                                "operand" : [ {
                                                   "path" : "date",
                                                   "type" : "Property",
                                                   "source" : {
                                                      "name" : "SecondMostRecentBiopsyReport",
                                                      "type" : "ExpressionRef"
                                                   }
                                                }, {
                                                   "value" : 18,
                                                   "unit" : "months",
                                                   "type" : "Quantity"
                                                } ]
                                             }
                                          } ]
                                       }, {
                                          "type" : "Not",
                                          "operand" : {
                                             "type" : "IsNull",
                                             "operand" : {
                                                "path" : "date",
                                                "type" : "Property",
                                                "source" : {
                                                   "name" : "SecondMostRecentBiopsyReport",
                                                   "type" : "ExpressionRef"
                                                }
                                             }
                                          }
                                       } ]
                                    } ]
                                 } ]
                              }, {
                                 "type" : "And",
                                 "operand" : [ {
                                    "name" : "SecondMostRecentHistologyInterpretedAsCin1OrNormal",
                                    "type" : "ExpressionRef"
                                 }, {
                                    "name" : "PrecedingCytologyBeforeSecondMostRecentBiopsyIsHsil",
                                    "type" : "ExpressionRef"
                                 } ]
                              } ]
                           }, {
                              "type" : "Or",
                              "operand" : [ {
                                 "type" : "Not",
                                 "operand" : {
                                    "type" : "And",
                                    "operand" : [ {
                                       "type" : "In",
                                       "operand" : [ {
                                          "name" : "MostRecentTreatmentDate",
                                          "type" : "ExpressionRef"
                                       }, {
                                          "lowClosed" : false,
                                          "highClosed" : true,
                                          "type" : "Interval",
                                          "low" : {
                                             "path" : "date",
                                             "type" : "Property",
                                             "source" : {
                                                "name" : "MostRecentBiopsyReport",
                                                "libraryName" : "Collate",
                                                "type" : "ExpressionRef"
                                             }
                                          },
                                          "high" : {
                                             "type" : "Add",
                                             "operand" : [ {
                                                "path" : "date",
                                                "type" : "Property",
                                                "source" : {
                                                   "name" : "MostRecentBiopsyReport",
                                                   "libraryName" : "Collate",
                                                   "type" : "ExpressionRef"
                                                }
                                             }, {
                                                "value" : 1,
                                                "unit" : "year",
                                                "type" : "Quantity"
                                             } ]
                                          }
                                       } ]
                                    }, {
                                       "type" : "Not",
                                       "operand" : {
                                          "type" : "IsNull",
                                          "operand" : {
                                             "path" : "date",
                                             "type" : "Property",
                                             "source" : {
                                                "name" : "MostRecentBiopsyReport",
                                                "libraryName" : "Collate",
                                                "type" : "ExpressionRef"
                                             }
                                          }
                                       }
                                    } ]
                                 }
                              }, {
                                 "type" : "IsNull",
                                 "operand" : {
                                    "name" : "MostRecentTreatment",
                                    "type" : "ExpressionRef"
                                 }
                              } ]
                           } ]
                        }, {
                           "type" : "And",
                           "operand" : [ {
                              "type" : "And",
                              "operand" : [ {
                                 "type" : "And",
                                 "operand" : [ {
                                    "type" : "And",
                                    "operand" : [ {
                                       "name" : "HasFirstNegativeSurveillanceTestAfterMostRecentBiopsy",
                                       "type" : "ExpressionRef"
                                    }, {
                                       "type" : "And",
                                       "operand" : [ {
                                          "type" : "In",
                                          "operand" : [ {
                                             "path" : "date",
                                             "type" : "Property",
                                             "source" : {
                                                "name" : "FirstNegativeSurveillanceTestAfterMostRecentBiopsy",
                                                "type" : "ExpressionRef"
                                             }
                                          }, {
                                             "lowClosed" : true,
                                             "highClosed" : false,
                                             "type" : "Interval",
                                             "low" : {
                                                "type" : "Subtract",
                                                "operand" : [ {
                                                   "path" : "date",
                                                   "type" : "Property",
                                                   "source" : {
                                                      "name" : "MostRecentHpvReport",
                                                      "libraryName" : "Collate",
                                                      "type" : "ExpressionRef"
                                                   }
                                                }, {
                                                   "value" : 18,
                                                   "unit" : "months",
                                                   "type" : "Quantity"
                                                } ]
                                             },
                                             "high" : {
                                                "path" : "date",
                                                "type" : "Property",
                                                "source" : {
                                                   "name" : "MostRecentHpvReport",
                                                   "libraryName" : "Collate",
                                                   "type" : "ExpressionRef"
                                                }
                                             }
                                          } ]
                                       }, {
                                          "type" : "Not",
                                          "operand" : {
                                             "type" : "IsNull",
                                             "operand" : {
                                                "path" : "date",
                                                "type" : "Property",
                                                "source" : {
                                                   "name" : "MostRecentHpvReport",
                                                   "libraryName" : "Collate",
                                                   "type" : "ExpressionRef"
                                                }
                                             }
                                          }
                                       } ]
                                    } ]
                                 }, {
                                    "type" : "And",
                                    "operand" : [ {
                                       "type" : "In",
                                       "operand" : [ {
                                          "path" : "date",
                                          "type" : "Property",
                                          "source" : {
                                             "name" : "FirstNegativeSurveillanceTestAfterMostRecentBiopsy",
                                             "type" : "ExpressionRef"
                                          }
                                       }, {
                                          "lowClosed" : false,
                                          "highClosed" : true,
                                          "type" : "Interval",
                                          "low" : {
                                             "path" : "date",
                                             "type" : "Property",
                                             "source" : {
                                                "name" : "MostRecentBiopsyReport",
                                                "libraryName" : "Collate",
                                                "type" : "ExpressionRef"
                                             }
                                          },
                                          "high" : {
                                             "type" : "Add",
                                             "operand" : [ {
                                                "path" : "date",
                                                "type" : "Property",
                                                "source" : {
                                                   "name" : "MostRecentBiopsyReport",
                                                   "libraryName" : "Collate",
                                                   "type" : "ExpressionRef"
                                                }
                                             }, {
                                                "value" : 18,
                                                "unit" : "months",
                                                "type" : "Quantity"
                                             } ]
                                          }
                                       } ]
                                    }, {
                                       "type" : "Not",
                                       "operand" : {
                                          "type" : "IsNull",
                                          "operand" : {
                                             "path" : "date",
                                             "type" : "Property",
                                             "source" : {
                                                "name" : "MostRecentBiopsyReport",
                                                "libraryName" : "Collate",
                                                "type" : "ExpressionRef"
                                             }
                                          }
                                       }
                                    } ]
                                 } ]
                              }, {
                                 "type" : "And",
                                 "operand" : [ {
                                    "name" : "HistologyInterpretedAsCin1OrNormal",
                                    "type" : "ExpressionRef"
                                 }, {
                                    "name" : "PrecedingCytologyIsAscH",
                                    "type" : "ExpressionRef"
                                 } ]
                              } ]
                           }, {
                              "type" : "Or",
                              "operand" : [ {
                                 "type" : "Not",
                                 "operand" : {
                                    "type" : "And",
                                    "operand" : [ {
                                       "type" : "In",
                                       "operand" : [ {
                                          "name" : "MostRecentTreatmentDate",
                                          "type" : "ExpressionRef"
                                       }, {
                                          "lowClosed" : false,
                                          "highClosed" : true,
                                          "type" : "Interval",
                                          "low" : {
                                             "path" : "date",
                                             "type" : "Property",
                                             "source" : {
                                                "name" : "MostRecentBiopsyReport",
                                                "libraryName" : "Collate",
                                                "type" : "ExpressionRef"
                                             }
                                          },
                                          "high" : {
                                             "type" : "Add",
                                             "operand" : [ {
                                                "path" : "date",
                                                "type" : "Property",
                                                "source" : {
                                                   "name" : "MostRecentBiopsyReport",
                                                   "libraryName" : "Collate",
                                                   "type" : "ExpressionRef"
                                                }
                                             }, {
                                                "value" : 1,
                                                "unit" : "year",
                                                "type" : "Quantity"
                                             } ]
                                          }
                                       } ]
                                    }, {
                                       "type" : "Not",
                                       "operand" : {
                                          "type" : "IsNull",
                                          "operand" : {
                                             "path" : "date",
                                             "type" : "Property",
                                             "source" : {
                                                "name" : "MostRecentBiopsyReport",
                                                "libraryName" : "Collate",
                                                "type" : "ExpressionRef"
                                             }
                                          }
                                       }
                                    } ]
                                 }
                              }, {
                                 "type" : "IsNull",
                                 "operand" : {
                                    "name" : "MostRecentTreatment",
                                    "type" : "ExpressionRef"
                                 }
                              } ]
                           } ]
                        } ]
                     } ]
                  },
                  "then" : {
                     "type" : "Tuple",
                     "element" : [ {
                        "name" : "short",
                        "value" : {
                           "valueType" : "{urn:hl7-org:elm-types:r1}String",
                           "value" : "See Details",
                           "type" : "Literal"
                        }
                     }, {
                        "name" : "date",
                        "value" : {
                           "type" : "Today"
                        }
                     }, {
                        "name" : "group",
                        "value" : {
                           "valueType" : "{urn:hl7-org:elm-types:r1}String",
                           "value" : "Managing Histology (I.4.3.2)",
                           "type" : "Literal"
                        }
                     }, {
                        "name" : "details",
                        "value" : {
                           "type" : "List",
                           "element" : [ {
                              "valueType" : "{urn:hl7-org:elm-types:r1}String",
                              "value" : "Retest with HPV-based testing (i.e., cotesting or primary hrHPV testing) every 3 years after surveillance tests are negative during the 2-year observation period following histologic LSIL (CIN1) or less preceded by ASC-H or HSIL cytology. Proceed with long-term surveillance (i.e., HPV-based testing every 3 years for at least 25 years, even if this is beyond the age of 65 years (BII).",
                              "type" : "Literal"
                           } ]
                        }
                     } ]
                  }
               }, {
                  "when" : {
                     "type" : "And",
                     "operand" : [ {
                        "type" : "GreaterOrEqual",
                        "operand" : [ {
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
                        }, {
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "25",
                           "type" : "Literal"
                        } ]
                     }, {
                        "type" : "Or",
                        "operand" : [ {
                           "type" : "And",
                           "operand" : [ {
                              "type" : "And",
                              "operand" : [ {
                                 "type" : "And",
                                 "operand" : [ {
                                    "type" : "And",
                                    "operand" : [ {
                                       "type" : "And",
                                       "operand" : [ {
                                          "name" : "MostRecentBiopsyReportWasWithinPast18months",
                                          "type" : "ExpressionRef"
                                       }, {
                                          "name" : "HistologyInterpretedAsNormal",
                                          "type" : "ExpressionRef"
                                       } ]
                                    }, {
                                       "name" : "TwoMostRecentBiopsyReportsWithin18monthsApart",
                                       "type" : "ExpressionRef"
                                    } ]
                                 }, {
                                    "type" : "And",
                                    "operand" : [ {
                                       "type" : "And",
                                       "operand" : [ {
                                          "name" : "HasFirstNegativeSurveillanceTestAfterSecondMostRecentBiopsy",
                                          "type" : "ExpressionRef"
                                       }, {
                                          "type" : "Greater",
                                          "operand" : [ {
                                             "path" : "date",
                                             "type" : "Property",
                                             "source" : {
                                                "name" : "FirstNegativeSurveillanceTestAfterSecondMostRecentBiopsy",
                                                "type" : "ExpressionRef"
                                             }
                                          }, {
                                             "type" : "Subtract",
                                             "operand" : [ {
                                                "type" : "Now"
                                             }, {
                                                "value" : 18,
                                                "unit" : "months",
                                                "type" : "Quantity"
                                             } ]
                                          } ]
                                       } ]
                                    }, {
                                       "type" : "And",
                                       "operand" : [ {
                                          "type" : "In",
                                          "operand" : [ {
                                             "path" : "date",
                                             "type" : "Property",
                                             "source" : {
                                                "name" : "FirstNegativeSurveillanceTestAfterSecondMostRecentBiopsy",
                                                "type" : "ExpressionRef"
                                             }
                                          }, {
                                             "lowClosed" : false,
                                             "highClosed" : true,
                                             "type" : "Interval",
                                             "low" : {
                                                "path" : "date",
                                                "type" : "Property",
                                                "source" : {
                                                   "name" : "SecondMostRecentBiopsyReport",
                                                   "type" : "ExpressionRef"
                                                }
                                             },
                                             "high" : {
                                                "type" : "Add",
                                                "operand" : [ {
                                                   "path" : "date",
                                                   "type" : "Property",
                                                   "source" : {
                                                      "name" : "SecondMostRecentBiopsyReport",
                                                      "type" : "ExpressionRef"
                                                   }
                                                }, {
                                                   "value" : 18,
                                                   "unit" : "months",
                                                   "type" : "Quantity"
                                                } ]
                                             }
                                          } ]
                                       }, {
                                          "type" : "Not",
                                          "operand" : {
                                             "type" : "IsNull",
                                             "operand" : {
                                                "path" : "date",
                                                "type" : "Property",
                                                "source" : {
                                                   "name" : "SecondMostRecentBiopsyReport",
                                                   "type" : "ExpressionRef"
                                                }
                                             }
                                          }
                                       } ]
                                    } ]
                                 } ]
                              }, {
                                 "type" : "And",
                                 "operand" : [ {
                                    "name" : "SecondMostRecentHistologyInterpretedAsCin1OrNormal",
                                    "type" : "ExpressionRef"
                                 }, {
                                    "name" : "PrecedingCytologyBeforeSecondMostRecentBiopsyIsHsil",
                                    "type" : "ExpressionRef"
                                 } ]
                              } ]
                           }, {
                              "type" : "Or",
                              "operand" : [ {
                                 "type" : "Not",
                                 "operand" : {
                                    "type" : "And",
                                    "operand" : [ {
                                       "type" : "In",
                                       "operand" : [ {
                                          "name" : "MostRecentTreatmentDate",
                                          "type" : "ExpressionRef"
                                       }, {
                                          "lowClosed" : false,
                                          "highClosed" : true,
                                          "type" : "Interval",
                                          "low" : {
                                             "path" : "date",
                                             "type" : "Property",
                                             "source" : {
                                                "name" : "SecondMostRecentBiopsyReport",
                                                "type" : "ExpressionRef"
                                             }
                                          },
                                          "high" : {
                                             "type" : "Add",
                                             "operand" : [ {
                                                "path" : "date",
                                                "type" : "Property",
                                                "source" : {
                                                   "name" : "SecondMostRecentBiopsyReport",
                                                   "type" : "ExpressionRef"
                                                }
                                             }, {
                                                "value" : 1,
                                                "unit" : "year",
                                                "type" : "Quantity"
                                             } ]
                                          }
                                       } ]
                                    }, {
                                       "type" : "Not",
                                       "operand" : {
                                          "type" : "IsNull",
                                          "operand" : {
                                             "path" : "date",
                                             "type" : "Property",
                                             "source" : {
                                                "name" : "SecondMostRecentBiopsyReport",
                                                "type" : "ExpressionRef"
                                             }
                                          }
                                       }
                                    } ]
                                 }
                              }, {
                                 "type" : "IsNull",
                                 "operand" : {
                                    "name" : "MostRecentTreatment",
                                    "type" : "ExpressionRef"
                                 }
                              } ]
                           } ]
                        }, {
                           "type" : "And",
                           "operand" : [ {
                              "type" : "And",
                              "operand" : [ {
                                 "type" : "And",
                                 "operand" : [ {
                                    "type" : "And",
                                    "operand" : [ {
                                       "name" : "HasFirstNegativeSurveillanceTestAfterMostRecentBiopsy",
                                       "type" : "ExpressionRef"
                                    }, {
                                       "type" : "Greater",
                                       "operand" : [ {
                                          "path" : "date",
                                          "type" : "Property",
                                          "source" : {
                                             "name" : "FirstNegativeSurveillanceTestAfterMostRecentBiopsy",
                                             "type" : "ExpressionRef"
                                          }
                                       }, {
                                          "type" : "Subtract",
                                          "operand" : [ {
                                             "type" : "Now"
                                          }, {
                                             "value" : 18,
                                             "unit" : "months",
                                             "type" : "Quantity"
                                          } ]
                                       } ]
                                    } ]
                                 }, {
                                    "type" : "And",
                                    "operand" : [ {
                                       "type" : "In",
                                       "operand" : [ {
                                          "path" : "date",
                                          "type" : "Property",
                                          "source" : {
                                             "name" : "FirstNegativeSurveillanceTestAfterMostRecentBiopsy",
                                             "type" : "ExpressionRef"
                                          }
                                       }, {
                                          "lowClosed" : false,
                                          "highClosed" : true,
                                          "type" : "Interval",
                                          "low" : {
                                             "path" : "date",
                                             "type" : "Property",
                                             "source" : {
                                                "name" : "MostRecentBiopsyReport",
                                                "libraryName" : "Collate",
                                                "type" : "ExpressionRef"
                                             }
                                          },
                                          "high" : {
                                             "type" : "Add",
                                             "operand" : [ {
                                                "path" : "date",
                                                "type" : "Property",
                                                "source" : {
                                                   "name" : "MostRecentBiopsyReport",
                                                   "libraryName" : "Collate",
                                                   "type" : "ExpressionRef"
                                                }
                                             }, {
                                                "value" : 18,
                                                "unit" : "months",
                                                "type" : "Quantity"
                                             } ]
                                          }
                                       } ]
                                    }, {
                                       "type" : "Not",
                                       "operand" : {
                                          "type" : "IsNull",
                                          "operand" : {
                                             "path" : "date",
                                             "type" : "Property",
                                             "source" : {
                                                "name" : "MostRecentBiopsyReport",
                                                "libraryName" : "Collate",
                                                "type" : "ExpressionRef"
                                             }
                                          }
                                       }
                                    } ]
                                 } ]
                              }, {
                                 "type" : "And",
                                 "operand" : [ {
                                    "name" : "HistologyInterpretedAsCin1OrNormal",
                                    "type" : "ExpressionRef"
                                 }, {
                                    "name" : "PrecedingCytologyIsAscH",
                                    "type" : "ExpressionRef"
                                 } ]
                              } ]
                           }, {
                              "type" : "Or",
                              "operand" : [ {
                                 "type" : "Not",
                                 "operand" : {
                                    "type" : "And",
                                    "operand" : [ {
                                       "type" : "In",
                                       "operand" : [ {
                                          "name" : "MostRecentTreatmentDate",
                                          "type" : "ExpressionRef"
                                       }, {
                                          "lowClosed" : false,
                                          "highClosed" : true,
                                          "type" : "Interval",
                                          "low" : {
                                             "path" : "date",
                                             "type" : "Property",
                                             "source" : {
                                                "name" : "MostRecentBiopsyReport",
                                                "libraryName" : "Collate",
                                                "type" : "ExpressionRef"
                                             }
                                          },
                                          "high" : {
                                             "type" : "Add",
                                             "operand" : [ {
                                                "path" : "date",
                                                "type" : "Property",
                                                "source" : {
                                                   "name" : "MostRecentBiopsyReport",
                                                   "libraryName" : "Collate",
                                                   "type" : "ExpressionRef"
                                                }
                                             }, {
                                                "value" : 1,
                                                "unit" : "year",
                                                "type" : "Quantity"
                                             } ]
                                          }
                                       } ]
                                    }, {
                                       "type" : "Not",
                                       "operand" : {
                                          "type" : "IsNull",
                                          "operand" : {
                                             "path" : "date",
                                             "type" : "Property",
                                             "source" : {
                                                "name" : "MostRecentBiopsyReport",
                                                "libraryName" : "Collate",
                                                "type" : "ExpressionRef"
                                             }
                                          }
                                       }
                                    } ]
                                 }
                              }, {
                                 "type" : "IsNull",
                                 "operand" : {
                                    "name" : "MostRecentTreatment",
                                    "type" : "ExpressionRef"
                                 }
                              } ]
                           } ]
                        } ]
                     } ]
                  },
                  "then" : {
                     "type" : "Tuple",
                     "element" : [ {
                        "name" : "short",
                        "value" : {
                           "valueType" : "{urn:hl7-org:elm-types:r1}String",
                           "value" : "See Details",
                           "type" : "Literal"
                        }
                     }, {
                        "name" : "date",
                        "value" : {
                           "type" : "Today"
                        }
                     }, {
                        "name" : "group",
                        "value" : {
                           "valueType" : "{urn:hl7-org:elm-types:r1}String",
                           "value" : "Managing Histology (I.4.3.1)",
                           "type" : "Literal"
                        }
                     }, {
                        "name" : "details",
                        "value" : {
                           "type" : "List",
                           "element" : [ {
                              "valueType" : "{urn:hl7-org:elm-types:r1}String",
                              "value" : "HPV-based testing (i.e., cotesting or primary hrHPV testing) is recommended 1 year after the initial negative follow up result(s) when observation is elected after a histologic LSIL (CIN1) preceded by ASC-H or HSIL cytology.",
                              "type" : "Literal"
                           } ]
                        }
                     } ]
                  }
               }, {
                  "when" : {
                     "type" : "And",
                     "operand" : [ {
                        "type" : "And",
                        "operand" : [ {
                           "type" : "And",
                           "operand" : [ {
                              "type" : "And",
                              "operand" : [ {
                                 "type" : "GreaterOrEqual",
                                 "operand" : [ {
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
                                 }, {
                                    "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                                    "value" : "25",
                                    "type" : "Literal"
                                 } ]
                              }, {
                                 "name" : "HistologyInterpretedAsCin1OrNormal",
                                 "type" : "ExpressionRef"
                              } ]
                           }, {
                              "type" : "Or",
                              "operand" : [ {
                                 "name" : "PrecedingCytologyIsHsil",
                                 "type" : "ExpressionRef"
                              }, {
                                 "name" : "PrecedingCytologyIsAscH",
                                 "type" : "ExpressionRef"
                              } ]
                           } ]
                        }, {
                           "type" : "Or",
                           "operand" : [ {
                              "type" : "Not",
                              "operand" : {
                                 "type" : "And",
                                 "operand" : [ {
                                    "type" : "In",
                                    "operand" : [ {
                                       "name" : "MostRecentTreatmentDate",
                                       "type" : "ExpressionRef"
                                    }, {
                                       "lowClosed" : false,
                                       "highClosed" : true,
                                       "type" : "Interval",
                                       "low" : {
                                          "path" : "date",
                                          "type" : "Property",
                                          "source" : {
                                             "name" : "MostRecentBiopsyReport",
                                             "libraryName" : "Collate",
                                             "type" : "ExpressionRef"
                                          }
                                       },
                                       "high" : {
                                          "type" : "Add",
                                          "operand" : [ {
                                             "path" : "date",
                                             "type" : "Property",
                                             "source" : {
                                                "name" : "MostRecentBiopsyReport",
                                                "libraryName" : "Collate",
                                                "type" : "ExpressionRef"
                                             }
                                          }, {
                                             "value" : 1,
                                             "unit" : "year",
                                             "type" : "Quantity"
                                          } ]
                                       }
                                    } ]
                                 }, {
                                    "type" : "Not",
                                    "operand" : {
                                       "type" : "IsNull",
                                       "operand" : {
                                          "path" : "date",
                                          "type" : "Property",
                                          "source" : {
                                             "name" : "MostRecentBiopsyReport",
                                             "libraryName" : "Collate",
                                             "type" : "ExpressionRef"
                                          }
                                       }
                                    }
                                 } ]
                              }
                           }, {
                              "type" : "IsNull",
                              "operand" : {
                                 "name" : "MostRecentTreatment",
                                 "type" : "ExpressionRef"
                              }
                           } ]
                        } ]
                     }, {
                        "type" : "Or",
                        "operand" : [ {
                           "type" : "And",
                           "operand" : [ {
                              "type" : "And",
                              "operand" : [ {
                                 "name" : "CytologyInterpretedAsHsil",
                                 "type" : "ExpressionRef"
                              }, {
                                 "type" : "SameOrAfter",
                                 "operand" : [ {
                                    "path" : "date",
                                    "type" : "Property",
                                    "source" : {
                                       "name" : "MostRecentCytologyReport",
                                       "type" : "ExpressionRef"
                                    }
                                 }, {
                                    "type" : "Add",
                                    "operand" : [ {
                                       "path" : "date",
                                       "type" : "Property",
                                       "source" : {
                                          "name" : "MostRecentBiopsyReport",
                                          "libraryName" : "Collate",
                                          "type" : "ExpressionRef"
                                       }
                                    }, {
                                       "value" : 1,
                                       "unit" : "year",
                                       "type" : "Quantity"
                                    } ]
                                 } ]
                              } ]
                           }, {
                              "type" : "In",
                              "operand" : [ {
                                 "path" : "date",
                                 "type" : "Property",
                                 "source" : {
                                    "name" : "MostRecentCytologyReport",
                                    "type" : "ExpressionRef"
                                 }
                              }, {
                                 "lowClosed" : false,
                                 "highClosed" : false,
                                 "type" : "Interval",
                                 "low" : {
                                    "path" : "date",
                                    "type" : "Property",
                                    "source" : {
                                       "name" : "MostRecentBiopsyReport",
                                       "libraryName" : "Collate",
                                       "type" : "ExpressionRef"
                                    }
                                 },
                                 "high" : {
                                    "type" : "Add",
                                    "operand" : [ {
                                       "path" : "date",
                                       "type" : "Property",
                                       "source" : {
                                          "name" : "MostRecentBiopsyReport",
                                          "libraryName" : "Collate",
                                          "type" : "ExpressionRef"
                                       }
                                    }, {
                                       "value" : 3,
                                       "unit" : "years",
                                       "type" : "Quantity"
                                    } ]
                                 }
                              } ]
                           } ]
                        }, {
                           "type" : "And",
                           "operand" : [ {
                              "type" : "And",
                              "operand" : [ {
                                 "name" : "CytologyInterpretedAsAscH",
                                 "type" : "ExpressionRef"
                              }, {
                                 "type" : "SameOrAfter",
                                 "operand" : [ {
                                    "path" : "date",
                                    "type" : "Property",
                                    "source" : {
                                       "name" : "MostRecentCytologyReport",
                                       "type" : "ExpressionRef"
                                    }
                                 }, {
                                    "type" : "Add",
                                    "operand" : [ {
                                       "path" : "date",
                                       "type" : "Property",
                                       "source" : {
                                          "name" : "MostRecentBiopsyReport",
                                          "libraryName" : "Collate",
                                          "type" : "ExpressionRef"
                                       }
                                    }, {
                                       "value" : 2,
                                       "unit" : "years",
                                       "type" : "Quantity"
                                    } ]
                                 } ]
                              } ]
                           }, {
                              "type" : "In",
                              "operand" : [ {
                                 "path" : "date",
                                 "type" : "Property",
                                 "source" : {
                                    "name" : "MostRecentCytologyReport",
                                    "type" : "ExpressionRef"
                                 }
                              }, {
                                 "lowClosed" : false,
                                 "highClosed" : false,
                                 "type" : "Interval",
                                 "low" : {
                                    "path" : "date",
                                    "type" : "Property",
                                    "source" : {
                                       "name" : "MostRecentBiopsyReport",
                                       "libraryName" : "Collate",
                                       "type" : "ExpressionRef"
                                    }
                                 },
                                 "high" : {
                                    "type" : "Add",
                                    "operand" : [ {
                                       "path" : "date",
                                       "type" : "Property",
                                       "source" : {
                                          "name" : "MostRecentBiopsyReport",
                                          "libraryName" : "Collate",
                                          "type" : "ExpressionRef"
                                       }
                                    }, {
                                       "value" : 3,
                                       "unit" : "years",
                                       "type" : "Quantity"
                                    } ]
                                 }
                              } ]
                           } ]
                        } ]
                     } ]
                  },
                  "then" : {
                     "type" : "Tuple",
                     "element" : [ {
                        "name" : "short",
                        "value" : {
                           "valueType" : "{urn:hl7-org:elm-types:r1}String",
                           "value" : "See Details",
                           "type" : "Literal"
                        }
                     }, {
                        "name" : "date",
                        "value" : {
                           "type" : "Today"
                        }
                     }, {
                        "name" : "group",
                        "value" : {
                           "valueType" : "{urn:hl7-org:elm-types:r1}String",
                           "value" : "Managing Histology (I.4.5)",
                           "type" : "Literal"
                        }
                     }, {
                        "name" : "details",
                        "value" : {
                           "type" : "List",
                           "element" : [ {
                              "valueType" : "{urn:hl7-org:elm-types:r1}String",
                              "value" : "A diagnostic excisional procedure is recommended for patients with HSIL cytology results at either the 1- or 2-year visit, or ASC-H results that persist at the 2-year visit (CIII).",
                              "type" : "Literal"
                           } ]
                        }
                     } ]
                  }
               }, {
                  "when" : {
                     "type" : "And",
                     "operand" : [ {
                        "type" : "And",
                        "operand" : [ {
                           "type" : "And",
                           "operand" : [ {
                              "type" : "And",
                              "operand" : [ {
                                 "type" : "GreaterOrEqual",
                                 "operand" : [ {
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
                                 }, {
                                    "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                                    "value" : "25",
                                    "type" : "Literal"
                                 } ]
                              }, {
                                 "name" : "HistologyInterpretedAsCin1OrNormal",
                                 "type" : "ExpressionRef"
                              } ]
                           }, {
                              "type" : "Or",
                              "operand" : [ {
                                 "name" : "PrecedingCytologyIsHsil",
                                 "type" : "ExpressionRef"
                              }, {
                                 "name" : "PrecedingCytologyIsAscH",
                                 "type" : "ExpressionRef"
                              } ]
                           } ]
                        }, {
                           "type" : "Or",
                           "operand" : [ {
                              "type" : "Not",
                              "operand" : {
                                 "type" : "And",
                                 "operand" : [ {
                                    "type" : "In",
                                    "operand" : [ {
                                       "name" : "MostRecentTreatmentDate",
                                       "type" : "ExpressionRef"
                                    }, {
                                       "lowClosed" : false,
                                       "highClosed" : true,
                                       "type" : "Interval",
                                       "low" : {
                                          "path" : "date",
                                          "type" : "Property",
                                          "source" : {
                                             "name" : "MostRecentBiopsyReport",
                                             "libraryName" : "Collate",
                                             "type" : "ExpressionRef"
                                          }
                                       },
                                       "high" : {
                                          "type" : "Add",
                                          "operand" : [ {
                                             "path" : "date",
                                             "type" : "Property",
                                             "source" : {
                                                "name" : "MostRecentBiopsyReport",
                                                "libraryName" : "Collate",
                                                "type" : "ExpressionRef"
                                             }
                                          }, {
                                             "value" : 1,
                                             "unit" : "year",
                                             "type" : "Quantity"
                                          } ]
                                       }
                                    } ]
                                 }, {
                                    "type" : "Not",
                                    "operand" : {
                                       "type" : "IsNull",
                                       "operand" : {
                                          "path" : "date",
                                          "type" : "Property",
                                          "source" : {
                                             "name" : "MostRecentBiopsyReport",
                                             "libraryName" : "Collate",
                                             "type" : "ExpressionRef"
                                          }
                                       }
                                    }
                                 } ]
                              }
                           }, {
                              "type" : "IsNull",
                              "operand" : {
                                 "name" : "MostRecentTreatment",
                                 "type" : "ExpressionRef"
                              }
                           } ]
                        } ]
                     }, {
                        "type" : "Or",
                        "operand" : [ {
                           "type" : "Or",
                           "operand" : [ {
                              "type" : "And",
                              "operand" : [ {
                                 "type" : "And",
                                 "operand" : [ {
                                    "type" : "And",
                                    "operand" : [ {
                                       "type" : "And",
                                       "operand" : [ {
                                          "type" : "Not",
                                          "operand" : {
                                             "type" : "IsNull",
                                             "operand" : {
                                                "name" : "MostRecentCytologyReport",
                                                "type" : "ExpressionRef"
                                             }
                                          }
                                       }, {
                                          "type" : "Not",
                                          "operand" : {
                                             "name" : "CytologyInterpretedAsNilm",
                                             "type" : "ExpressionRef"
                                          }
                                       } ]
                                    }, {
                                       "type" : "Not",
                                       "operand" : {
                                          "name" : "CytologyInterpretedAsHsil",
                                          "type" : "ExpressionRef"
                                       }
                                    } ]
                                 }, {
                                    "type" : "SameOrAfter",
                                    "operand" : [ {
                                       "path" : "date",
                                       "type" : "Property",
                                       "source" : {
                                          "name" : "MostRecentCytologyReport",
                                          "type" : "ExpressionRef"
                                       }
                                    }, {
                                       "type" : "Add",
                                       "operand" : [ {
                                          "path" : "date",
                                          "type" : "Property",
                                          "source" : {
                                             "name" : "MostRecentBiopsyReport",
                                             "libraryName" : "Collate",
                                             "type" : "ExpressionRef"
                                          }
                                       }, {
                                          "value" : 1,
                                          "unit" : "year",
                                          "type" : "Quantity"
                                       } ]
                                    } ]
                                 } ]
                              }, {
                                 "type" : "In",
                                 "operand" : [ {
                                    "path" : "date",
                                    "type" : "Property",
                                    "source" : {
                                       "name" : "MostRecentCytologyReport",
                                       "type" : "ExpressionRef"
                                    }
                                 }, {
                                    "lowClosed" : false,
                                    "highClosed" : false,
                                    "type" : "Interval",
                                    "low" : {
                                       "path" : "date",
                                       "type" : "Property",
                                       "source" : {
                                          "name" : "MostRecentBiopsyReport",
                                          "libraryName" : "Collate",
                                          "type" : "ExpressionRef"
                                       }
                                    },
                                    "high" : {
                                       "type" : "Add",
                                       "operand" : [ {
                                          "path" : "date",
                                          "type" : "Property",
                                          "source" : {
                                             "name" : "MostRecentBiopsyReport",
                                             "libraryName" : "Collate",
                                             "type" : "ExpressionRef"
                                          }
                                       }, {
                                          "value" : 3,
                                          "unit" : "years",
                                          "type" : "Quantity"
                                       } ]
                                    }
                                 } ]
                              } ]
                           }, {
                              "type" : "And",
                              "operand" : [ {
                                 "type" : "And",
                                 "operand" : [ {
                                    "type" : "And",
                                    "operand" : [ {
                                       "type" : "Not",
                                       "operand" : {
                                          "type" : "IsNull",
                                          "operand" : {
                                             "name" : "MostRecentHpvReport",
                                             "libraryName" : "Collate",
                                             "type" : "ExpressionRef"
                                          }
                                       }
                                    }, {
                                       "type" : "Not",
                                       "operand" : {
                                          "type" : "Equal",
                                          "operand" : [ {
                                             "name" : "MostRecentHpvResult",
                                             "libraryName" : "Collate",
                                             "type" : "ExpressionRef"
                                          }, {
                                             "valueType" : "{urn:hl7-org:elm-types:r1}String",
                                             "value" : "HPV-negative",
                                             "type" : "Literal"
                                          } ]
                                       }
                                    } ]
                                 }, {
                                    "type" : "SameOrAfter",
                                    "operand" : [ {
                                       "path" : "date",
                                       "type" : "Property",
                                       "source" : {
                                          "name" : "MostRecentHpvReport",
                                          "libraryName" : "Collate",
                                          "type" : "ExpressionRef"
                                       }
                                    }, {
                                       "type" : "Add",
                                       "operand" : [ {
                                          "path" : "date",
                                          "type" : "Property",
                                          "source" : {
                                             "name" : "MostRecentBiopsyReport",
                                             "libraryName" : "Collate",
                                             "type" : "ExpressionRef"
                                          }
                                       }, {
                                          "value" : 1,
                                          "unit" : "year",
                                          "type" : "Quantity"
                                       } ]
                                    } ]
                                 } ]
                              }, {
                                 "type" : "In",
                                 "operand" : [ {
                                    "path" : "date",
                                    "type" : "Property",
                                    "source" : {
                                       "name" : "MostRecentHpvReport",
                                       "libraryName" : "Collate",
                                       "type" : "ExpressionRef"
                                    }
                                 }, {
                                    "lowClosed" : false,
                                    "highClosed" : false,
                                    "type" : "Interval",
                                    "low" : {
                                       "path" : "date",
                                       "type" : "Property",
                                       "source" : {
                                          "name" : "MostRecentBiopsyReport",
                                          "libraryName" : "Collate",
                                          "type" : "ExpressionRef"
                                       }
                                    },
                                    "high" : {
                                       "type" : "Add",
                                       "operand" : [ {
                                          "path" : "date",
                                          "type" : "Property",
                                          "source" : {
                                             "name" : "MostRecentBiopsyReport",
                                             "libraryName" : "Collate",
                                             "type" : "ExpressionRef"
                                          }
                                       }, {
                                          "value" : 3,
                                          "unit" : "years",
                                          "type" : "Quantity"
                                       } ]
                                    }
                                 } ]
                              } ]
                           } ]
                        }, {
                           "type" : "And",
                           "operand" : [ {
                              "type" : "And",
                              "operand" : [ {
                                 "type" : "And",
                                 "operand" : [ {
                                    "type" : "Not",
                                    "operand" : {
                                       "type" : "IsNull",
                                       "operand" : {
                                          "name" : "MostRecentBiopsyReport",
                                          "libraryName" : "Collate",
                                          "type" : "ExpressionRef"
                                       }
                                    }
                                 }, {
                                    "type" : "Not",
                                    "operand" : {
                                       "name" : "HistologyInterpretedAsNormal",
                                       "type" : "ExpressionRef"
                                    }
                                 } ]
                              }, {
                                 "type" : "SameOrAfter",
                                 "operand" : [ {
                                    "path" : "date",
                                    "type" : "Property",
                                    "source" : {
                                       "name" : "MostRecentBiopsyReport",
                                       "libraryName" : "Collate",
                                       "type" : "ExpressionRef"
                                    }
                                 }, {
                                    "type" : "Add",
                                    "operand" : [ {
                                       "path" : "date",
                                       "type" : "Property",
                                       "source" : {
                                          "name" : "MostRecentBiopsyReport",
                                          "libraryName" : "Collate",
                                          "type" : "ExpressionRef"
                                       }
                                    }, {
                                       "value" : 1,
                                       "unit" : "year",
                                       "type" : "Quantity"
                                    } ]
                                 } ]
                              } ]
                           }, {
                              "type" : "In",
                              "operand" : [ {
                                 "path" : "date",
                                 "type" : "Property",
                                 "source" : {
                                    "name" : "MostRecentBiopsyReport",
                                    "libraryName" : "Collate",
                                    "type" : "ExpressionRef"
                                 }
                              }, {
                                 "lowClosed" : false,
                                 "highClosed" : false,
                                 "type" : "Interval",
                                 "low" : {
                                    "path" : "date",
                                    "type" : "Property",
                                    "source" : {
                                       "name" : "MostRecentBiopsyReport",
                                       "libraryName" : "Collate",
                                       "type" : "ExpressionRef"
                                    }
                                 },
                                 "high" : {
                                    "type" : "Add",
                                    "operand" : [ {
                                       "path" : "date",
                                       "type" : "Property",
                                       "source" : {
                                          "name" : "MostRecentBiopsyReport",
                                          "libraryName" : "Collate",
                                          "type" : "ExpressionRef"
                                       }
                                    }, {
                                       "value" : 3,
                                       "unit" : "years",
                                       "type" : "Quantity"
                                    } ]
                                 }
                              } ]
                           } ]
                        } ]
                     } ]
                  },
                  "then" : {
                     "type" : "Tuple",
                     "element" : [ {
                        "name" : "short",
                        "value" : {
                           "valueType" : "{urn:hl7-org:elm-types:r1}String",
                           "value" : "Colposcopy",
                           "type" : "Literal"
                        }
                     }, {
                        "name" : "date",
                        "value" : {
                           "type" : "Today"
                        }
                     }, {
                        "name" : "group",
                        "value" : {
                           "valueType" : "{urn:hl7-org:elm-types:r1}String",
                           "value" : "Managing Histology (I.4.4)",
                           "type" : "Literal"
                        }
                     }, {
                        "name" : "details",
                        "value" : {
                           "type" : "List",
                           "element" : [ {
                              "valueType" : "{urn:hl7-org:elm-types:r1}String",
                              "value" : "If any test is abnormal during the observation period after a HSIL and ASC-H cytology, a repeat colposcopy is recommended, and management based on resulting biopsies is recommended.",
                              "type" : "Literal"
                           } ]
                        }
                     } ]
                  }
               }, {
                  "when" : {
                     "type" : "And",
                     "operand" : [ {
                        "type" : "And",
                        "operand" : [ {
                           "type" : "And",
                           "operand" : [ {
                              "type" : "And",
                              "operand" : [ {
                                 "type" : "GreaterOrEqual",
                                 "operand" : [ {
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
                                 }, {
                                    "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                                    "value" : "25",
                                    "type" : "Literal"
                                 } ]
                              }, {
                                 "name" : "MostRecentBiopsyReportWasWithinPast12months",
                                 "type" : "ExpressionRef"
                              } ]
                           }, {
                              "name" : "HistologyInterpretedAsCin1",
                              "type" : "ExpressionRef"
                           } ]
                        }, {
                           "name" : "SecondMostRecentHistologyInterpretedAsCin1",
                           "type" : "ExpressionRef"
                        } ]
                     }, {
                        "name" : "TwoMostRecentBiopsyReportsWithin15monthsApart",
                        "type" : "ExpressionRef"
                     } ]
                  },
                  "then" : {
                     "type" : "Tuple",
                     "element" : [ {
                        "name" : "short",
                        "value" : {
                           "valueType" : "{urn:hl7-org:elm-types:r1}String",
                           "value" : "See Details",
                           "type" : "Literal"
                        }
                     }, {
                        "name" : "date",
                        "value" : {
                           "type" : "Today"
                        }
                     }, {
                        "name" : "group",
                        "value" : {
                           "valueType" : "{urn:hl7-org:elm-types:r1}String",
                           "value" : "Managing Histology (I.5)",
                           "type" : "Literal"
                        }
                     }, {
                        "name" : "details",
                        "value" : {
                           "type" : "List",
                           "element" : [ {
                              "valueType" : "{urn:hl7-org:elm-types:r1}String",
                              "value" : "For patients 25 years or older with histologic LSIL (CIN 1) who is diagnosed at consecutive visits for at least 2 years, observation is preferred (BII) but treatment is acceptable (CIII). If treatment is selected and the entire squamocolumnar junction and all lesions were fully visualized during colposcopic examination, either excision or ablation treatments are acceptable (CII).",
                              "type" : "Literal"
                           } ]
                        }
                     } ]
                  }
               }, {
                  "when" : {
                     "type" : "And",
                     "operand" : [ {
                        "type" : "And",
                        "operand" : [ {
                           "type" : "GreaterOrEqual",
                           "operand" : [ {
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
                           }, {
                              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                              "value" : "25",
                              "type" : "Literal"
                           } ]
                        }, {
                           "name" : "MostRecentBiopsyReportWasWithinPastYear",
                           "type" : "ExpressionRef"
                        } ]
                     }, {
                        "name" : "HistologyInterpretedAsAis",
                        "type" : "ExpressionRef"
                     } ]
                  },
                  "then" : {
                     "type" : "Tuple",
                     "element" : [ {
                        "name" : "short",
                        "value" : {
                           "valueType" : "{urn:hl7-org:elm-types:r1}String",
                           "value" : "See Details",
                           "type" : "Literal"
                        }
                     }, {
                        "name" : "date",
                        "value" : {
                           "type" : "Today"
                        }
                     }, {
                        "name" : "group",
                        "value" : {
                           "valueType" : "{urn:hl7-org:elm-types:r1}String",
                           "value" : "Managing Histology (I.6)",
                           "type" : "Literal"
                        }
                     }, {
                        "name" : "details",
                        "value" : {
                           "type" : "List",
                           "element" : [ {
                              "valueType" : "{urn:hl7-org:elm-types:r1}String",
                              "value" : "A diagnostic excisional procedure is recommended for all patients with a diagnosis of AIS on cervical biopsy to rule out invasive adenocarcinoma, even when definitive hysterectomy is planned. Excisional procedures should optimally remove an intact specimen to facilitate accurate interpretation of margin status. Although there is no preference for cold knife conization versus LEEP, intentional disruption of the specimen by performance of a LEEP followed by a 'top hat' endocervical excision to achieve the desired specimen length is unacceptable. An excisional specimen length of at least 10 mm is preferred, and this can be increased to 18 to 20 mm for patients who are not concerned about the effect of treatment on future pregnancy. These dimensions are preferred regardless of whether hysterectomy is planned. After the initial diagnostic procedure, hysterectomy is the preferred management for all patients who have a histologic diagnosis of AIS, although fertility-sparing management for appropriately selected patients is acceptable. For patients with confirmed AIS with negative margins on the excisional specimen, simple hysterectomy is preferred. For patients with confirmed AIS with positive margins on the excisional specimen, re-excision to achieve negative margins is preferred, even if hysterectomy is planned. For patients with AIS and persistent positive margins for whom additional excisional procedures are not feasible, either a simple or modified radical hysterectomy is acceptable. After hysterectomy, surveillance per the ASCCP surveillance guidelines for treated CIN 2+ is recommended (Section J.3).\n\nFor patients of reproductive age who desire future pregnancy, fertility-sparing management with an excisional procedure is acceptable provided that negative margins have been achieved on the excisional specimen, and the patient is willing and able to adhere to surveillance recommendations. If negative margins cannot be achieved after maximal excisional attempts, fertility-sparing management is not recommended. For patients who undergo fertility-sparing management, surveillance with cotesting and endocervical sampling is recommended every 6 months for at least 3 years, then annually for at least 2 years, or until hysterectomy is performed. For patients who have consistently negative cotesting and endocervical sampling results for 5 years, extending the surveillance interval to every 3 years starting in the sixth year of surveillance is acceptable. Small retrospective studies have shown HPV test results to be the best predictor for recurrent disease. Therefore, for patients who have consistently negative cotesting and endocervical sampling results, continued surveillance is acceptable after completion of childbearing. For patients who have had positive HPV test results or abnormal cytology/histologic results during surveillance, hysterectomy at the completion of childbearing is preferred (see Figure 11).",
                              "type" : "Literal"
                           } ]
                        }
                     } ]
                  }
               } ],
               "else" : {
                  "type" : "As",
                  "operand" : {
                     "type" : "Null"
                  },
                  "asTypeSpecifier" : {
                     "type" : "TupleTypeSpecifier",
                     "element" : [ {
                        "name" : "short",
                        "type" : {
                           "name" : "{urn:hl7-org:elm-types:r1}String",
                           "type" : "NamedTypeSpecifier"
                        }
                     }, {
                        "name" : "date",
                        "type" : {
                           "name" : "{urn:hl7-org:elm-types:r1}Date",
                           "type" : "NamedTypeSpecifier"
                        }
                     }, {
                        "name" : "group",
                        "type" : {
                           "name" : "{urn:hl7-org:elm-types:r1}String",
                           "type" : "NamedTypeSpecifier"
                        }
                     }, {
                        "name" : "details",
                        "type" : {
                           "type" : "ListTypeSpecifier",
                           "elementType" : {
                              "name" : "{urn:hl7-org:elm-types:r1}String",
                              "type" : "NamedTypeSpecifier"
                           }
                        }
                     } ]
                  }
               }
            }
         }, {
            "name" : "TreatmentInLastYear",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "type" : "Query",
               "source" : [ {
                  "alias" : "P",
                  "expression" : {
                     "name" : "MostRecentTreatment",
                     "type" : "ExpressionRef"
                  }
               } ],
               "relationship" : [ ],
               "where" : {
                  "type" : "GreaterOrEqual",
                  "operand" : [ {
                     "name" : "ProcedureDate",
                     "libraryName" : "Common",
                     "type" : "FunctionRef",
                     "operand" : [ {
                        "name" : "P",
                        "type" : "AliasRef"
                     } ]
                  }, {
                     "type" : "Subtract",
                     "operand" : [ {
                        "type" : "Now"
                     }, {
                        "value" : 12,
                        "unit" : "months",
                        "type" : "Quantity"
                     } ]
                  } ]
               }
            }
         }, {
            "name" : "HasTreatmentInLastYear",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "type" : "Not",
               "operand" : {
                  "type" : "IsNull",
                  "operand" : {
                     "name" : "TreatmentInLastYear",
                     "type" : "ExpressionRef"
                  }
               }
            }
         }, {
            "name" : "AnyHistologicHsil",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "type" : "Query",
               "source" : [ {
                  "alias" : "B",
                  "expression" : {
                     "name" : "SortedBiopsyReports",
                     "libraryName" : "Collate",
                     "type" : "ExpressionRef"
                  }
               } ],
               "relationship" : [ ],
               "where" : {
                  "type" : "AnyTrue",
                  "source" : {
                     "type" : "Query",
                     "source" : [ {
                        "alias" : "aC",
                        "expression" : {
                           "path" : "allConclusions",
                           "scope" : "B",
                           "type" : "Property"
                        }
                     } ],
                     "relationship" : [ ],
                     "return" : {
                        "expression" : {
                           "type" : "Or",
                           "operand" : [ {
                              "type" : "Or",
                              "operand" : [ {
                                 "type" : "Equivalent",
                                 "operand" : [ {
                                    "name" : "ToConcept",
                                    "libraryName" : "FHIRHelpers",
                                    "type" : "FunctionRef",
                                    "operand" : [ {
                                       "name" : "aC",
                                       "type" : "AliasRef"
                                    } ]
                                 }, {
                                    "type" : "ToConcept",
                                    "operand" : {
                                       "name" : "CIN2",
                                       "libraryName" : "Dash",
                                       "type" : "CodeRef"
                                    }
                                 } ]
                              }, {
                                 "type" : "InValueSet",
                                 "code" : {
                                    "name" : "ToConcept",
                                    "libraryName" : "FHIRHelpers",
                                    "type" : "FunctionRef",
                                    "operand" : [ {
                                       "name" : "aC",
                                       "type" : "AliasRef"
                                    } ]
                                 },
                                 "valueset" : {
                                    "name" : "Histologic CIN3",
                                    "libraryName" : "Dash",
                                    "type" : "ValueSetRef"
                                 }
                              } ]
                           }, {
                              "type" : "Equivalent",
                              "operand" : [ {
                                 "name" : "ToConcept",
                                 "libraryName" : "FHIRHelpers",
                                 "type" : "FunctionRef",
                                 "operand" : [ {
                                    "name" : "aC",
                                    "type" : "AliasRef"
                                 } ]
                              }, {
                                 "type" : "ToConcept",
                                 "operand" : {
                                    "name" : "HSIL, Unspecified",
                                    "libraryName" : "Dash",
                                    "type" : "CodeRef"
                                 }
                              } ]
                           } ]
                        }
                     }
                  }
               }
            }
         }, {
            "name" : "HistologyInterpretedAsHistologicHsil",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "type" : "Or",
               "operand" : [ {
                  "type" : "Or",
                  "operand" : [ {
                     "name" : "HistologyInterpretedAsCin2",
                     "type" : "ExpressionRef"
                  }, {
                     "name" : "HistologyInterpretedAsCin3",
                     "type" : "ExpressionRef"
                  } ]
               }, {
                  "name" : "HistologyInterpretedAsUnspecifiedHsil",
                  "type" : "ExpressionRef"
               } ]
            }
         }, {
            "name" : "SecondMostRecentHistologyInterpretedAsCin2",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "type" : "AnyTrue",
               "source" : {
                  "type" : "Query",
                  "source" : [ {
                     "alias" : "aC",
                     "expression" : {
                        "path" : "allConclusions",
                        "type" : "Property",
                        "source" : {
                           "name" : "SecondMostRecentBiopsyReport",
                           "type" : "ExpressionRef"
                        }
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
                              "name" : "aC",
                              "type" : "AliasRef"
                           } ]
                        }, {
                           "type" : "ToConcept",
                           "operand" : {
                              "name" : "CIN2",
                              "libraryName" : "Dash",
                              "type" : "CodeRef"
                           }
                        } ]
                     }
                  }
               }
            }
         }, {
            "name" : "SecondMostRecentHistologyInterpretedAsCin3",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "type" : "AnyTrue",
               "source" : {
                  "type" : "Query",
                  "source" : [ {
                     "alias" : "aC",
                     "expression" : {
                        "path" : "allConclusions",
                        "type" : "Property",
                        "source" : {
                           "name" : "SecondMostRecentBiopsyReport",
                           "type" : "ExpressionRef"
                        }
                     }
                  } ],
                  "relationship" : [ ],
                  "return" : {
                     "expression" : {
                        "type" : "InValueSet",
                        "code" : {
                           "name" : "ToConcept",
                           "libraryName" : "FHIRHelpers",
                           "type" : "FunctionRef",
                           "operand" : [ {
                              "name" : "aC",
                              "type" : "AliasRef"
                           } ]
                        },
                        "valueset" : {
                           "name" : "Histologic CIN3",
                           "libraryName" : "Dash",
                           "type" : "ValueSetRef"
                        }
                     }
                  }
               }
            }
         }, {
            "name" : "SecondMostRecentHistologyInterpretedAsUnspecifiedHsil",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "type" : "AnyTrue",
               "source" : {
                  "type" : "Query",
                  "source" : [ {
                     "alias" : "aC",
                     "expression" : {
                        "path" : "allConclusions",
                        "type" : "Property",
                        "source" : {
                           "name" : "SecondMostRecentBiopsyReport",
                           "type" : "ExpressionRef"
                        }
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
                              "name" : "aC",
                              "type" : "AliasRef"
                           } ]
                        }, {
                           "type" : "ToConcept",
                           "operand" : {
                              "name" : "HSIL, Unspecified",
                              "libraryName" : "Dash",
                              "type" : "CodeRef"
                           }
                        } ]
                     }
                  }
               }
            }
         }, {
            "name" : "SecondMostRecentHistologyInterpretedAsHistologicHsil",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "type" : "Or",
               "operand" : [ {
                  "type" : "Or",
                  "operand" : [ {
                     "name" : "SecondMostRecentHistologyInterpretedAsCin2",
                     "type" : "ExpressionRef"
                  }, {
                     "name" : "SecondMostRecentHistologyInterpretedAsCin3",
                     "type" : "ExpressionRef"
                  } ]
               }, {
                  "name" : "SecondMostRecentHistologyInterpretedAsUnspecifiedHsil",
                  "type" : "ExpressionRef"
               } ]
            }
         }, {
            "name" : "HistologicHsilWithin12MonthsBeforeTreatment",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "type" : "Query",
               "source" : [ {
                  "alias" : "B",
                  "expression" : {
                     "name" : "AnyHistologicHsil",
                     "type" : "ExpressionRef"
                  }
               } ],
               "relationship" : [ ],
               "where" : {
                  "type" : "And",
                  "operand" : [ {
                     "type" : "In",
                     "operand" : [ {
                        "path" : "date",
                        "scope" : "B",
                        "type" : "Property"
                     }, {
                        "lowClosed" : true,
                        "highClosed" : false,
                        "type" : "Interval",
                        "low" : {
                           "type" : "Subtract",
                           "operand" : [ {
                              "name" : "MostRecentTreatmentDate",
                              "type" : "ExpressionRef"
                           }, {
                              "value" : 12,
                              "unit" : "months",
                              "type" : "Quantity"
                           } ]
                        },
                        "high" : {
                           "name" : "MostRecentTreatmentDate",
                           "type" : "ExpressionRef"
                        }
                     } ]
                  }, {
                     "type" : "Not",
                     "operand" : {
                        "type" : "IsNull",
                        "operand" : {
                           "name" : "MostRecentTreatmentDate",
                           "type" : "ExpressionRef"
                        }
                     }
                  } ]
               }
            }
         }, {
            "name" : "HasHistologicHsilWithin12MonthsBeforeTreatment",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "type" : "Exists",
               "operand" : {
                  "name" : "HistologicHsilWithin12MonthsBeforeTreatment",
                  "type" : "ExpressionRef"
               }
            }
         }, {
            "name" : "PositiveHrHpvTestAfterTreatment",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "type" : "And",
               "operand" : [ {
                  "type" : "And",
                  "operand" : [ {
                     "type" : "GreaterOrEqual",
                     "operand" : [ {
                        "path" : "date",
                        "type" : "Property",
                        "source" : {
                           "name" : "MostRecentHpvReport",
                           "libraryName" : "Collate",
                           "type" : "ExpressionRef"
                        }
                     }, {
                        "type" : "Subtract",
                        "operand" : [ {
                           "type" : "Now"
                        }, {
                           "value" : 12,
                           "unit" : "months",
                           "type" : "Quantity"
                        } ]
                     } ]
                  }, {
                     "type" : "And",
                     "operand" : [ {
                        "type" : "In",
                        "operand" : [ {
                           "path" : "date",
                           "type" : "Property",
                           "source" : {
                              "name" : "MostRecentHpvReport",
                              "libraryName" : "Collate",
                              "type" : "ExpressionRef"
                           }
                        }, {
                           "lowClosed" : false,
                           "highClosed" : true,
                           "type" : "Interval",
                           "low" : {
                              "name" : "MostRecentTreatmentDate",
                              "type" : "ExpressionRef"
                           },
                           "high" : {
                              "type" : "Add",
                              "operand" : [ {
                                 "name" : "MostRecentTreatmentDate",
                                 "type" : "ExpressionRef"
                              }, {
                                 "value" : 12,
                                 "unit" : "months",
                                 "type" : "Quantity"
                              } ]
                           }
                        } ]
                     }, {
                        "type" : "Not",
                        "operand" : {
                           "type" : "IsNull",
                           "operand" : {
                              "name" : "MostRecentTreatmentDate",
                              "type" : "ExpressionRef"
                           }
                        }
                     } ]
                  } ]
               }, {
                  "type" : "AnyTrue",
                  "source" : {
                     "type" : "Query",
                     "source" : [ {
                        "alias" : "aC",
                        "expression" : {
                           "path" : "allConclusions",
                           "type" : "Property",
                           "source" : {
                              "name" : "MostRecentHpvReport",
                              "libraryName" : "Collate",
                              "type" : "ExpressionRef"
                           }
                        }
                     } ],
                     "relationship" : [ ],
                     "return" : {
                        "expression" : {
                           "type" : "InValueSet",
                           "code" : {
                              "name" : "ToConcept",
                              "libraryName" : "FHIRHelpers",
                              "type" : "FunctionRef",
                              "operand" : [ {
                                 "name" : "aC",
                                 "type" : "AliasRef"
                              } ]
                           },
                           "valueset" : {
                              "name" : "High Risk HPV Positive Results",
                              "libraryName" : "Dash",
                              "type" : "ValueSetRef"
                           }
                        }
                     }
                  }
               } ]
            }
         }, {
            "name" : "RareAbnormalityHighGradeHistology",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "type" : "Query",
               "source" : [ {
                  "alias" : "B",
                  "expression" : {
                     "name" : "SortedBiopsyReports",
                     "libraryName" : "Collate",
                     "type" : "ExpressionRef"
                  }
               } ],
               "relationship" : [ ],
               "where" : {
                  "type" : "AnyTrue",
                  "source" : {
                     "type" : "Query",
                     "source" : [ {
                        "alias" : "aC",
                        "expression" : {
                           "path" : "allConclusions",
                           "scope" : "B",
                           "type" : "Property"
                        }
                     } ],
                     "relationship" : [ ],
                     "return" : {
                        "expression" : {
                           "type" : "Or",
                           "operand" : [ {
                              "type" : "Or",
                              "operand" : [ {
                                 "type" : "Or",
                                 "operand" : [ {
                                    "type" : "Equivalent",
                                    "operand" : [ {
                                       "name" : "ToConcept",
                                       "libraryName" : "FHIRHelpers",
                                       "type" : "FunctionRef",
                                       "operand" : [ {
                                          "name" : "aC",
                                          "type" : "AliasRef"
                                       } ]
                                    }, {
                                       "type" : "ToConcept",
                                       "operand" : {
                                          "name" : "CIN2",
                                          "libraryName" : "Dash",
                                          "type" : "CodeRef"
                                       }
                                    } ]
                                 }, {
                                    "type" : "InValueSet",
                                    "code" : {
                                       "name" : "ToConcept",
                                       "libraryName" : "FHIRHelpers",
                                       "type" : "FunctionRef",
                                       "operand" : [ {
                                          "name" : "aC",
                                          "type" : "AliasRef"
                                       } ]
                                    },
                                    "valueset" : {
                                       "name" : "Histologic CIN3",
                                       "libraryName" : "Dash",
                                       "type" : "ValueSetRef"
                                    }
                                 } ]
                              }, {
                                 "type" : "Equivalent",
                                 "operand" : [ {
                                    "name" : "ToConcept",
                                    "libraryName" : "FHIRHelpers",
                                    "type" : "FunctionRef",
                                    "operand" : [ {
                                       "name" : "aC",
                                       "type" : "AliasRef"
                                    } ]
                                 }, {
                                    "type" : "ToConcept",
                                    "operand" : {
                                       "name" : "HSIL, Unspecified",
                                       "libraryName" : "Dash",
                                       "type" : "CodeRef"
                                    }
                                 } ]
                              } ]
                           }, {
                              "type" : "InValueSet",
                              "code" : {
                                 "name" : "ToConcept",
                                 "libraryName" : "FHIRHelpers",
                                 "type" : "FunctionRef",
                                 "operand" : [ {
                                    "name" : "aC",
                                    "type" : "AliasRef"
                                 } ]
                              },
                              "valueset" : {
                                 "name" : "AIS",
                                 "libraryName" : "Dash",
                                 "type" : "ValueSetRef"
                              }
                           } ]
                        }
                     }
                  }
               }
            }
         }, {
            "name" : "RareAbnormalityHighGradeHistologyBeforeTreatment",
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
                           "name" : "MostRecentTreatment",
                           "type" : "ExpressionRef"
                        }
                     }
                  }
               },
               "then" : {
                  "type" : "Query",
                  "source" : [ {
                     "alias" : "C",
                     "expression" : {
                        "name" : "RareAbnormalityHighGradeHistology",
                        "type" : "ExpressionRef"
                     }
                  } ],
                  "relationship" : [ ],
                  "where" : {
                     "type" : "And",
                     "operand" : [ {
                        "type" : "In",
                        "operand" : [ {
                           "path" : "date",
                           "scope" : "C",
                           "type" : "Property"
                        }, {
                           "lowClosed" : true,
                           "highClosed" : false,
                           "type" : "Interval",
                           "low" : {
                              "type" : "Subtract",
                              "operand" : [ {
                                 "name" : "MostRecentTreatmentDate",
                                 "type" : "ExpressionRef"
                              }, {
                                 "value" : 12,
                                 "unit" : "months",
                                 "type" : "Quantity"
                              } ]
                           },
                           "high" : {
                              "name" : "MostRecentTreatmentDate",
                              "type" : "ExpressionRef"
                           }
                        } ]
                     }, {
                        "type" : "Not",
                        "operand" : {
                           "type" : "IsNull",
                           "operand" : {
                              "name" : "MostRecentTreatmentDate",
                              "type" : "ExpressionRef"
                           }
                        }
                     } ]
                  }
               },
               "else" : {
                  "type" : "As",
                  "operand" : {
                     "type" : "Null"
                  },
                  "asTypeSpecifier" : {
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "type" : "TupleTypeSpecifier",
                        "element" : [ {
                           "name" : "riskTableInput",
                           "type" : {
                              "name" : "{urn:hl7-org:elm-types:r1}String",
                              "type" : "NamedTypeSpecifier"
                           }
                        }, {
                           "name" : "allConclusions",
                           "type" : {
                              "type" : "ListTypeSpecifier",
                              "elementType" : {
                                 "name" : "{http://hl7.org/fhir}CodeableConcept",
                                 "type" : "NamedTypeSpecifier"
                              }
                           }
                        }, {
                           "name" : "date",
                           "type" : {
                              "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                              "type" : "NamedTypeSpecifier"
                           }
                        } ]
                     }
                  }
               }
            }
         }, {
            "name" : "CytologicHsilOrAgc",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "type" : "Query",
               "source" : [ {
                  "alias" : "C",
                  "expression" : {
                     "name" : "SortedCytologyReports",
                     "libraryName" : "Collate",
                     "type" : "ExpressionRef"
                  }
               } ],
               "relationship" : [ ],
               "where" : {
                  "type" : "AnyTrue",
                  "source" : {
                     "type" : "Query",
                     "source" : [ {
                        "alias" : "aC",
                        "expression" : {
                           "path" : "allConclusions",
                           "scope" : "C",
                           "type" : "Property"
                        }
                     } ],
                     "relationship" : [ ],
                     "return" : {
                        "expression" : {
                           "type" : "Or",
                           "operand" : [ {
                              "type" : "InValueSet",
                              "code" : {
                                 "name" : "ToConcept",
                                 "libraryName" : "FHIRHelpers",
                                 "type" : "FunctionRef",
                                 "operand" : [ {
                                    "name" : "aC",
                                    "type" : "AliasRef"
                                 } ]
                              },
                              "valueset" : {
                                 "name" : "HSIL",
                                 "type" : "ValueSetRef"
                              }
                           }, {
                              "type" : "Equivalent",
                              "operand" : [ {
                                 "name" : "ToConcept",
                                 "libraryName" : "FHIRHelpers",
                                 "type" : "FunctionRef",
                                 "operand" : [ {
                                    "name" : "aC",
                                    "type" : "AliasRef"
                                 } ]
                              }, {
                                 "type" : "ToConcept",
                                 "operand" : {
                                    "name" : "AGC",
                                    "type" : "CodeRef"
                                 }
                              } ]
                           } ]
                        }
                     }
                  }
               }
            }
         }, {
            "name" : "CytologicHsilOrAgcBeforeTreatment",
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
                           "name" : "MostRecentTreatment",
                           "type" : "ExpressionRef"
                        }
                     }
                  }
               },
               "then" : {
                  "type" : "Query",
                  "source" : [ {
                     "alias" : "C",
                     "expression" : {
                        "name" : "CytologicHsilOrAgc",
                        "type" : "ExpressionRef"
                     }
                  } ],
                  "relationship" : [ ],
                  "where" : {
                     "type" : "And",
                     "operand" : [ {
                        "type" : "In",
                        "operand" : [ {
                           "path" : "date",
                           "scope" : "C",
                           "type" : "Property"
                        }, {
                           "lowClosed" : true,
                           "highClosed" : false,
                           "type" : "Interval",
                           "low" : {
                              "type" : "Subtract",
                              "operand" : [ {
                                 "name" : "MostRecentTreatmentDate",
                                 "type" : "ExpressionRef"
                              }, {
                                 "value" : 12,
                                 "unit" : "months",
                                 "type" : "Quantity"
                              } ]
                           },
                           "high" : {
                              "name" : "MostRecentTreatmentDate",
                              "type" : "ExpressionRef"
                           }
                        } ]
                     }, {
                        "type" : "Not",
                        "operand" : {
                           "type" : "IsNull",
                           "operand" : {
                              "name" : "MostRecentTreatmentDate",
                              "type" : "ExpressionRef"
                           }
                        }
                     } ]
                  }
               },
               "else" : {
                  "type" : "As",
                  "operand" : {
                     "type" : "Null"
                  },
                  "asTypeSpecifier" : {
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "type" : "TupleTypeSpecifier",
                        "element" : [ {
                           "name" : "riskTableInput",
                           "type" : {
                              "name" : "{urn:hl7-org:elm-types:r1}String",
                              "type" : "NamedTypeSpecifier"
                           }
                        }, {
                           "name" : "allConclusions",
                           "type" : {
                              "type" : "ListTypeSpecifier",
                              "elementType" : {
                                 "name" : "{http://hl7.org/fhir}CodeableConcept",
                                 "type" : "NamedTypeSpecifier"
                              }
                           }
                        }, {
                           "name" : "date",
                           "type" : {
                              "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                              "type" : "NamedTypeSpecifier"
                           }
                        } ]
                     }
                  }
               }
            }
         }, {
            "name" : "CytologyResultsBeforeTreatment",
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
                           "name" : "MostRecentTreatment",
                           "type" : "ExpressionRef"
                        }
                     }
                  }
               },
               "then" : {
                  "type" : "Query",
                  "source" : [ {
                     "alias" : "C",
                     "expression" : {
                        "name" : "SortedCytologyReports",
                        "libraryName" : "Collate",
                        "type" : "ExpressionRef"
                     }
                  } ],
                  "relationship" : [ ],
                  "where" : {
                     "type" : "And",
                     "operand" : [ {
                        "type" : "In",
                        "operand" : [ {
                           "path" : "date",
                           "scope" : "C",
                           "type" : "Property"
                        }, {
                           "lowClosed" : true,
                           "highClosed" : false,
                           "type" : "Interval",
                           "low" : {
                              "type" : "Subtract",
                              "operand" : [ {
                                 "name" : "MostRecentTreatmentDate",
                                 "type" : "ExpressionRef"
                              }, {
                                 "value" : 12,
                                 "unit" : "months",
                                 "type" : "Quantity"
                              } ]
                           },
                           "high" : {
                              "name" : "MostRecentTreatmentDate",
                              "type" : "ExpressionRef"
                           }
                        } ]
                     }, {
                        "type" : "Not",
                        "operand" : {
                           "type" : "IsNull",
                           "operand" : {
                              "name" : "MostRecentTreatmentDate",
                              "type" : "ExpressionRef"
                           }
                        }
                     } ]
                  }
               },
               "else" : {
                  "type" : "As",
                  "operand" : {
                     "type" : "Null"
                  },
                  "asTypeSpecifier" : {
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "type" : "TupleTypeSpecifier",
                        "element" : [ {
                           "name" : "riskTableInput",
                           "type" : {
                              "name" : "{urn:hl7-org:elm-types:r1}String",
                              "type" : "NamedTypeSpecifier"
                           }
                        }, {
                           "name" : "allConclusions",
                           "type" : {
                              "type" : "ListTypeSpecifier",
                              "elementType" : {
                                 "name" : "{http://hl7.org/fhir}CodeableConcept",
                                 "type" : "NamedTypeSpecifier"
                              }
                           }
                        }, {
                           "name" : "date",
                           "type" : {
                              "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                              "type" : "NamedTypeSpecifier"
                           }
                        } ]
                     }
                  }
               }
            }
         }, {
            "name" : "HasPersistentAscHBeforeTreatment",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "type" : "If",
               "condition" : {
                  "asType" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "type" : "As",
                  "operand" : {
                     "type" : "GreaterOrEqual",
                     "operand" : [ {
                        "type" : "Count",
                        "source" : {
                           "name" : "CytologyResultsBeforeTreatment",
                           "type" : "ExpressionRef"
                        }
                     }, {
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "2",
                        "type" : "Literal"
                     } ]
                  }
               },
               "then" : {
                  "type" : "And",
                  "operand" : [ {
                     "type" : "AnyTrue",
                     "source" : {
                        "type" : "Query",
                        "source" : [ {
                           "alias" : "aC",
                           "expression" : {
                              "path" : "allConclusions",
                              "type" : "Property",
                              "source" : {
                                 "type" : "Indexer",
                                 "operand" : [ {
                                    "name" : "CytologyResultsBeforeTreatment",
                                    "type" : "ExpressionRef"
                                 }, {
                                    "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                                    "value" : "0",
                                    "type" : "Literal"
                                 } ]
                              }
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
                                    "name" : "aC",
                                    "type" : "AliasRef"
                                 } ]
                              }, {
                                 "type" : "ToConcept",
                                 "operand" : {
                                    "name" : "ASC-H",
                                    "type" : "CodeRef"
                                 }
                              } ]
                           }
                        }
                     }
                  }, {
                     "type" : "AnyTrue",
                     "source" : {
                        "type" : "Query",
                        "source" : [ {
                           "alias" : "aC",
                           "expression" : {
                              "path" : "allConclusions",
                              "type" : "Property",
                              "source" : {
                                 "type" : "Indexer",
                                 "operand" : [ {
                                    "name" : "CytologyResultsBeforeTreatment",
                                    "type" : "ExpressionRef"
                                 }, {
                                    "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                                    "value" : "1",
                                    "type" : "Literal"
                                 } ]
                              }
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
                                    "name" : "aC",
                                    "type" : "AliasRef"
                                 } ]
                              }, {
                                 "type" : "ToConcept",
                                 "operand" : {
                                    "name" : "ASC-H",
                                    "type" : "CodeRef"
                                 }
                              } ]
                           }
                        }
                     }
                  } ]
               },
               "else" : {
                  "valueType" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "value" : "false",
                  "type" : "Literal"
               }
            }
         }, {
            "name" : "TreatmentForHighGradeHistologyOrCytology",
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
                        "type" : "Not",
                        "operand" : {
                           "type" : "IsNull",
                           "operand" : {
                              "name" : "MostRecentTreatment",
                              "type" : "ExpressionRef"
                           }
                        }
                     }, {
                        "type" : "Or",
                        "operand" : [ {
                           "type" : "Or",
                           "operand" : [ {
                              "type" : "Exists",
                              "operand" : {
                                 "name" : "RareAbnormalityHighGradeHistologyBeforeTreatment",
                                 "type" : "ExpressionRef"
                              }
                           }, {
                              "type" : "Exists",
                              "operand" : {
                                 "name" : "CytologicHsilOrAgcBeforeTreatment",
                                 "type" : "ExpressionRef"
                              }
                           } ]
                        }, {
                           "name" : "HasPersistentAscHBeforeTreatment",
                           "type" : "ExpressionRef"
                        } ]
                     } ]
                  }
               },
               "then" : {
                  "name" : "MostRecentTreatment",
                  "type" : "ExpressionRef"
               },
               "else" : {
                  "asType" : "{http://hl7.org/fhir}Procedure",
                  "type" : "As",
                  "operand" : {
                     "type" : "Null"
                  }
               }
            }
         }, {
            "name" : "HasTreatmentForHighGradeHistologyOrCytology",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "type" : "Not",
               "operand" : {
                  "type" : "IsNull",
                  "operand" : {
                     "name" : "TreatmentForHighGradeHistologyOrCytology",
                     "type" : "ExpressionRef"
                  }
               }
            }
         }, {
            "name" : "TreatmentForHighGradeHistologyOrCytologyDate",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "name" : "ProcedureDate",
               "libraryName" : "Common",
               "type" : "FunctionRef",
               "operand" : [ {
                  "name" : "TreatmentForHighGradeHistologyOrCytology",
                  "type" : "ExpressionRef"
               } ]
            }
         }, {
            "name" : "NegativeSurveillanceTestsAfterTreatmentForHighGradeHistologyOrCytology",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "type" : "If",
               "condition" : {
                  "asType" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "type" : "As",
                  "operand" : {
                     "name" : "HasTreatmentForHighGradeHistologyOrCytology",
                     "type" : "ExpressionRef"
                  }
               },
               "then" : {
                  "type" : "Query",
                  "source" : [ {
                     "alias" : "T",
                     "expression" : {
                        "name" : "SortedNegativeSurveillanceTests",
                        "type" : "ExpressionRef"
                     }
                  } ],
                  "relationship" : [ ],
                  "where" : {
                     "type" : "Greater",
                     "operand" : [ {
                        "path" : "date",
                        "scope" : "T",
                        "type" : "Property"
                     }, {
                        "name" : "TreatmentForHighGradeHistologyOrCytologyDate",
                        "type" : "ExpressionRef"
                     } ]
                  }
               },
               "else" : {
                  "type" : "As",
                  "operand" : {
                     "type" : "Null"
                  },
                  "asTypeSpecifier" : {
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "type" : "TupleTypeSpecifier",
                        "element" : [ {
                           "name" : "date",
                           "type" : {
                              "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                              "type" : "NamedTypeSpecifier"
                           }
                        } ]
                     }
                  }
               }
            }
         }, {
            "name" : "InitialIntensiveSurveillancePeriod",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "type" : "If",
               "condition" : {
                  "asType" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "type" : "As",
                  "operand" : {
                     "type" : "GreaterOrEqual",
                     "operand" : [ {
                        "type" : "Count",
                        "source" : {
                           "name" : "NegativeSurveillanceTestsAfterTreatmentForHighGradeHistologyOrCytology",
                           "type" : "ExpressionRef"
                        }
                     }, {
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "4",
                        "type" : "Literal"
                     } ]
                  }
               },
               "then" : {
                  "type" : "Or",
                  "operand" : [ {
                     "type" : "And",
                     "operand" : [ {
                        "type" : "SameOrBefore",
                        "operand" : [ {
                           "path" : "date",
                           "type" : "Property",
                           "source" : {
                              "type" : "Indexer",
                              "operand" : [ {
                                 "name" : "NegativeSurveillanceTestsAfterTreatmentForHighGradeHistologyOrCytology",
                                 "type" : "ExpressionRef"
                              }, {
                                 "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                                 "value" : "0",
                                 "type" : "Literal"
                              } ]
                           }
                        }, {
                           "type" : "Subtract",
                           "operand" : [ {
                              "path" : "date",
                              "type" : "Property",
                              "source" : {
                                 "type" : "Indexer",
                                 "operand" : [ {
                                    "name" : "NegativeSurveillanceTestsAfterTreatmentForHighGradeHistologyOrCytology",
                                    "type" : "ExpressionRef"
                                 }, {
                                    "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                                    "value" : "2",
                                    "type" : "Literal"
                                 } ]
                              }
                           }, {
                              "value" : 2,
                              "unit" : "years",
                              "type" : "Quantity"
                           } ]
                        } ]
                     }, {
                        "type" : "And",
                        "operand" : [ {
                           "type" : "In",
                           "operand" : [ {
                              "path" : "date",
                              "type" : "Property",
                              "source" : {
                                 "type" : "Indexer",
                                 "operand" : [ {
                                    "name" : "NegativeSurveillanceTestsAfterTreatmentForHighGradeHistologyOrCytology",
                                    "type" : "ExpressionRef"
                                 }, {
                                    "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                                    "value" : "0",
                                    "type" : "Literal"
                                 } ]
                              }
                           }, {
                              "lowClosed" : true,
                              "highClosed" : false,
                              "type" : "Interval",
                              "low" : {
                                 "type" : "Subtract",
                                 "operand" : [ {
                                    "path" : "date",
                                    "type" : "Property",
                                    "source" : {
                                       "type" : "Indexer",
                                       "operand" : [ {
                                          "name" : "NegativeSurveillanceTestsAfterTreatmentForHighGradeHistologyOrCytology",
                                          "type" : "ExpressionRef"
                                       }, {
                                          "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                                          "value" : "2",
                                          "type" : "Literal"
                                       } ]
                                    }
                                 }, {
                                    "value" : 3,
                                    "unit" : "years",
                                    "type" : "Quantity"
                                 } ]
                              },
                              "high" : {
                                 "path" : "date",
                                 "type" : "Property",
                                 "source" : {
                                    "type" : "Indexer",
                                    "operand" : [ {
                                       "name" : "NegativeSurveillanceTestsAfterTreatmentForHighGradeHistologyOrCytology",
                                       "type" : "ExpressionRef"
                                    }, {
                                       "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                                       "value" : "2",
                                       "type" : "Literal"
                                    } ]
                                 }
                              }
                           } ]
                        }, {
                           "type" : "Not",
                           "operand" : {
                              "type" : "IsNull",
                              "operand" : {
                                 "path" : "date",
                                 "type" : "Property",
                                 "source" : {
                                    "type" : "Indexer",
                                    "operand" : [ {
                                       "name" : "NegativeSurveillanceTestsAfterTreatmentForHighGradeHistologyOrCytology",
                                       "type" : "ExpressionRef"
                                    }, {
                                       "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                                       "value" : "2",
                                       "type" : "Literal"
                                    } ]
                                 }
                              }
                           }
                        } ]
                     } ]
                  }, {
                     "type" : "And",
                     "operand" : [ {
                        "type" : "SameOrBefore",
                        "operand" : [ {
                           "path" : "date",
                           "type" : "Property",
                           "source" : {
                              "type" : "Indexer",
                              "operand" : [ {
                                 "name" : "NegativeSurveillanceTestsAfterTreatmentForHighGradeHistologyOrCytology",
                                 "type" : "ExpressionRef"
                              }, {
                                 "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                                 "value" : "1",
                                 "type" : "Literal"
                              } ]
                           }
                        }, {
                           "type" : "Subtract",
                           "operand" : [ {
                              "path" : "date",
                              "type" : "Property",
                              "source" : {
                                 "type" : "Indexer",
                                 "operand" : [ {
                                    "name" : "NegativeSurveillanceTestsAfterTreatmentForHighGradeHistologyOrCytology",
                                    "type" : "ExpressionRef"
                                 }, {
                                    "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                                    "value" : "3",
                                    "type" : "Literal"
                                 } ]
                              }
                           }, {
                              "value" : 2,
                              "unit" : "years",
                              "type" : "Quantity"
                           } ]
                        } ]
                     }, {
                        "type" : "And",
                        "operand" : [ {
                           "type" : "In",
                           "operand" : [ {
                              "path" : "date",
                              "type" : "Property",
                              "source" : {
                                 "type" : "Indexer",
                                 "operand" : [ {
                                    "name" : "NegativeSurveillanceTestsAfterTreatmentForHighGradeHistologyOrCytology",
                                    "type" : "ExpressionRef"
                                 }, {
                                    "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                                    "value" : "1",
                                    "type" : "Literal"
                                 } ]
                              }
                           }, {
                              "lowClosed" : true,
                              "highClosed" : false,
                              "type" : "Interval",
                              "low" : {
                                 "type" : "Subtract",
                                 "operand" : [ {
                                    "path" : "date",
                                    "type" : "Property",
                                    "source" : {
                                       "type" : "Indexer",
                                       "operand" : [ {
                                          "name" : "NegativeSurveillanceTestsAfterTreatmentForHighGradeHistologyOrCytology",
                                          "type" : "ExpressionRef"
                                       }, {
                                          "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                                          "value" : "3",
                                          "type" : "Literal"
                                       } ]
                                    }
                                 }, {
                                    "value" : 3,
                                    "unit" : "years",
                                    "type" : "Quantity"
                                 } ]
                              },
                              "high" : {
                                 "path" : "date",
                                 "type" : "Property",
                                 "source" : {
                                    "type" : "Indexer",
                                    "operand" : [ {
                                       "name" : "NegativeSurveillanceTestsAfterTreatmentForHighGradeHistologyOrCytology",
                                       "type" : "ExpressionRef"
                                    }, {
                                       "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                                       "value" : "3",
                                       "type" : "Literal"
                                    } ]
                                 }
                              }
                           } ]
                        }, {
                           "type" : "Not",
                           "operand" : {
                              "type" : "IsNull",
                              "operand" : {
                                 "path" : "date",
                                 "type" : "Property",
                                 "source" : {
                                    "type" : "Indexer",
                                    "operand" : [ {
                                       "name" : "NegativeSurveillanceTestsAfterTreatmentForHighGradeHistologyOrCytology",
                                       "type" : "ExpressionRef"
                                    }, {
                                       "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                                       "value" : "3",
                                       "type" : "Literal"
                                    } ]
                                 }
                              }
                           }
                        } ]
                     } ]
                  } ]
               },
               "else" : {
                  "valueType" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "value" : "false",
                  "type" : "Literal"
               }
            }
         }, {
            "name" : "RecommendationForSurveillanceAfterAbnormalities",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "type" : "Case",
               "caseItem" : [ {
                  "when" : {
                     "type" : "And",
                     "operand" : [ {
                        "type" : "And",
                        "operand" : [ {
                           "type" : "And",
                           "operand" : [ {
                              "name" : "HistologyInterpretedAsHistologicHsil",
                              "type" : "ExpressionRef"
                           }, {
                              "type" : "And",
                              "operand" : [ {
                                 "type" : "In",
                                 "operand" : [ {
                                    "path" : "date",
                                    "type" : "Property",
                                    "source" : {
                                       "name" : "MostRecentBiopsyReport",
                                       "libraryName" : "Collate",
                                       "type" : "ExpressionRef"
                                    }
                                 }, {
                                    "lowClosed" : false,
                                    "highClosed" : true,
                                    "type" : "Interval",
                                    "low" : {
                                       "name" : "MostRecentTreatmentDate",
                                       "type" : "ExpressionRef"
                                    },
                                    "high" : {
                                       "type" : "Add",
                                       "operand" : [ {
                                          "name" : "MostRecentTreatmentDate",
                                          "type" : "ExpressionRef"
                                       }, {
                                          "value" : 5,
                                          "unit" : "years",
                                          "type" : "Quantity"
                                       } ]
                                    }
                                 } ]
                              }, {
                                 "type" : "Not",
                                 "operand" : {
                                    "type" : "IsNull",
                                    "operand" : {
                                       "name" : "MostRecentTreatmentDate",
                                       "type" : "ExpressionRef"
                                    }
                                 }
                              } ]
                           } ]
                        }, {
                           "name" : "SecondMostRecentHistologyInterpretedAsHistologicHsil",
                           "type" : "ExpressionRef"
                        } ]
                     }, {
                        "type" : "And",
                        "operand" : [ {
                           "type" : "In",
                           "operand" : [ {
                              "path" : "date",
                              "type" : "Property",
                              "source" : {
                                 "name" : "SecondMostRecentBiopsyReport",
                                 "type" : "ExpressionRef"
                              }
                           }, {
                              "lowClosed" : true,
                              "highClosed" : false,
                              "type" : "Interval",
                              "low" : {
                                 "type" : "Subtract",
                                 "operand" : [ {
                                    "name" : "MostRecentTreatmentDate",
                                    "type" : "ExpressionRef"
                                 }, {
                                    "value" : 5,
                                    "unit" : "years",
                                    "type" : "Quantity"
                                 } ]
                              },
                              "high" : {
                                 "name" : "MostRecentTreatmentDate",
                                 "type" : "ExpressionRef"
                              }
                           } ]
                        }, {
                           "type" : "Not",
                           "operand" : {
                              "type" : "IsNull",
                              "operand" : {
                                 "name" : "MostRecentTreatmentDate",
                                 "type" : "ExpressionRef"
                              }
                           }
                        } ]
                     } ]
                  },
                  "then" : {
                     "type" : "Tuple",
                     "element" : [ {
                        "name" : "short",
                        "value" : {
                           "valueType" : "{urn:hl7-org:elm-types:r1}String",
                           "value" : "See Details",
                           "type" : "Literal"
                        }
                     }, {
                        "name" : "date",
                        "value" : {
                           "type" : "Today"
                        }
                     }, {
                        "name" : "group",
                        "value" : {
                           "valueType" : "{urn:hl7-org:elm-types:r1}String",
                           "value" : "Management Surveillance (J.2.3)",
                           "type" : "Literal"
                        }
                     }, {
                        "name" : "details",
                        "value" : {
                           "type" : "List",
                           "element" : [ {
                              "valueType" : "{urn:hl7-org:elm-types:r1}String",
                              "value" : "If recurrent histologic HSIL (CIN 2+) develops after excisional treatment, and repeat excision is not feasible or not desired, hysterectomy is recommended.",
                              "type" : "Literal"
                           } ]
                        }
                     } ]
                  }
               }, {
                  "when" : {
                     "type" : "And",
                     "operand" : [ {
                        "name" : "PositiveHrHpvTestAfterTreatment",
                        "type" : "ExpressionRef"
                     }, {
                        "name" : "HasHistologicHsilWithin12MonthsBeforeTreatment",
                        "type" : "ExpressionRef"
                     } ]
                  },
                  "then" : {
                     "type" : "Tuple",
                     "element" : [ {
                        "name" : "short",
                        "value" : {
                           "valueType" : "{urn:hl7-org:elm-types:r1}String",
                           "value" : "See Details",
                           "type" : "Literal"
                        }
                     }, {
                        "name" : "date",
                        "value" : {
                           "type" : "Today"
                        }
                     }, {
                        "name" : "group",
                        "value" : {
                           "valueType" : "{urn:hl7-org:elm-types:r1}String",
                           "value" : "Management Surveillance (J.2.2)",
                           "type" : "Literal"
                        }
                     }, {
                        "name" : "details",
                        "value" : {
                           "type" : "List",
                           "element" : [ {
                              "valueType" : "{urn:hl7-org:elm-types:r1}String",
                              "value" : "Colposcopy and appropriate biopsies should be performed if an hrHPV 'positive' result after treatment for histologic HSIL (AIII).",
                              "type" : "Literal"
                           } ]
                        }
                     } ]
                  }
               }, {
                  "when" : {
                     "type" : "And",
                     "operand" : [ {
                        "name" : "HasTreatmentInLastYear",
                        "type" : "ExpressionRef"
                     }, {
                        "name" : "HasHistologicHsilWithin12MonthsBeforeTreatment",
                        "type" : "ExpressionRef"
                     } ]
                  },
                  "then" : {
                     "type" : "Tuple",
                     "element" : [ {
                        "name" : "short",
                        "value" : {
                           "valueType" : "{urn:hl7-org:elm-types:r1}String",
                           "value" : "See Details",
                           "type" : "Literal"
                        }
                     }, {
                        "name" : "date",
                        "value" : {
                           "type" : "Today"
                        }
                     }, {
                        "name" : "group",
                        "value" : {
                           "valueType" : "{urn:hl7-org:elm-types:r1}String",
                           "value" : "Management Surveillance (J.2.1)",
                           "type" : "Literal"
                        }
                     }, {
                        "name" : "details",
                        "value" : {
                           "type" : "List",
                           "element" : [ {
                              "valueType" : "{urn:hl7-org:elm-types:r1}String",
                              "value" : "After treatment, hrHPV-based testing is preferred at 6 months regardless of the margin status of the excisional specimen (BII). hrHPV-based testing includes cotesting and primary hrHPV testing. Follow-up at 6 months with colposcopy and ECC is acceptable (BIII). When margins are positive for CIN 2+ or ECC performed at the time of the excisional procedure shows CIN 2+ in patients 25 years or older who are not concerned about the potential effect of treatment on future pregnancy outcomes, repeat excision or observation is acceptable. For observation, HPV-based testing in 6 months is preferred; it is also acceptable to perform a colposcopy and ECC at 6 months.",
                              "type" : "Literal"
                           } ]
                        }
                     } ]
                  }
               }, {
                  "when" : {
                     "type" : "And",
                     "operand" : [ {
                        "type" : "And",
                        "operand" : [ {
                           "name" : "HasTreatmentForHighGradeHistologyOrCytology",
                           "type" : "ExpressionRef"
                        }, {
                           "type" : "GreaterOrEqual",
                           "operand" : [ {
                              "name" : "TreatmentForHighGradeHistologyOrCytologyDate",
                              "type" : "ExpressionRef"
                           }, {
                              "type" : "Subtract",
                              "operand" : [ {
                                 "type" : "Now"
                              }, {
                                 "value" : 25,
                                 "unit" : "years",
                                 "type" : "Quantity"
                              } ]
                           } ]
                        } ]
                     }, {
                        "type" : "Not",
                        "operand" : {
                           "name" : "InitialIntensiveSurveillancePeriod",
                           "type" : "ExpressionRef"
                        }
                     } ]
                  },
                  "then" : {
                     "type" : "Tuple",
                     "element" : [ {
                        "name" : "short",
                        "value" : {
                           "valueType" : "{urn:hl7-org:elm-types:r1}String",
                           "value" : "See Details",
                           "type" : "Literal"
                        }
                     }, {
                        "name" : "date",
                        "value" : {
                           "type" : "Today"
                        }
                     }, {
                        "name" : "group",
                        "value" : {
                           "valueType" : "{urn:hl7-org:elm-types:r1}String",
                           "value" : "Management Surveillance (J.3.1)",
                           "type" : "Literal"
                        }
                     }, {
                        "name" : "details",
                        "value" : {
                           "type" : "List",
                           "element" : [ {
                              "valueType" : "{urn:hl7-org:elm-types:r1}String",
                              "value" : "In patients treated for histologic or cytologic HSIL, after the initial HPV-based test at 6 months, annual HPV or cotesting is preferred until 3 consecutive negative tests have been obtained (AII). Discontinuation of screening is recommended if a patient has a limited life expectancy. Management according to the highest-grade abnormality found on histology or cytology is recommended.",
                              "type" : "Literal"
                           } ]
                        }
                     } ]
                  }
               }, {
                  "when" : {
                     "type" : "And",
                     "operand" : [ {
                        "type" : "And",
                        "operand" : [ {
                           "name" : "HasTreatmentForHighGradeHistologyOrCytology",
                           "type" : "ExpressionRef"
                        }, {
                           "type" : "GreaterOrEqual",
                           "operand" : [ {
                              "name" : "TreatmentForHighGradeHistologyOrCytologyDate",
                              "type" : "ExpressionRef"
                           }, {
                              "type" : "Subtract",
                              "operand" : [ {
                                 "type" : "Now"
                              }, {
                                 "value" : 25,
                                 "unit" : "years",
                                 "type" : "Quantity"
                              } ]
                           } ]
                        } ]
                     }, {
                        "name" : "InitialIntensiveSurveillancePeriod",
                        "type" : "ExpressionRef"
                     } ]
                  },
                  "then" : {
                     "type" : "Tuple",
                     "element" : [ {
                        "name" : "short",
                        "value" : {
                           "valueType" : "{urn:hl7-org:elm-types:r1}String",
                           "value" : "See Details",
                           "type" : "Literal"
                        }
                     }, {
                        "name" : "date",
                        "value" : {
                           "type" : "Today"
                        }
                     }, {
                        "name" : "group",
                        "value" : {
                           "valueType" : "{urn:hl7-org:elm-types:r1}String",
                           "value" : "Management Surveillance (J.3.2)",
                           "type" : "Literal"
                        }
                     }, {
                        "name" : "details",
                        "value" : {
                           "type" : "List",
                           "element" : [ {
                              "valueType" : "{urn:hl7-org:elm-types:r1}String",
                              "value" : "In patients treated for histologic or cytologic HSIL, after the initial intensive surveillance period, continued surveillance at 3-year intervals is recommended for at least 25 years after treatment of high-grade histology (histologic HSIL, CIN 2, CIN 3, or AIS) or high-grade cytology (HSIL, AGC, or persistent ASC-H) even if this is beyond the age of 65 years (BII). When patients with a history of treated high-grade histology or cytology reach the age of 65 years, if they have completed the initial 25-year surveillance period, continued surveillance at 3-year intervals is acceptable and may continue as long as the patient is in reasonably good health (BIII). Discontinuation of screening is recommended if a patient has a limited life expectancy. Management according to the highest-grade abnormality found on histology or cytology is recommended.",
                              "type" : "Literal"
                           } ]
                        }
                     } ]
                  }
               }, {
                  "when" : {
                     "type" : "And",
                     "operand" : [ {
                        "type" : "And",
                        "operand" : [ {
                           "name" : "HasTreatmentForHighGradeHistologyOrCytology",
                           "type" : "ExpressionRef"
                        }, {
                           "type" : "Less",
                           "operand" : [ {
                              "name" : "TreatmentForHighGradeHistologyOrCytologyDate",
                              "type" : "ExpressionRef"
                           }, {
                              "type" : "Subtract",
                              "operand" : [ {
                                 "type" : "Now"
                              }, {
                                 "value" : 25,
                                 "unit" : "years",
                                 "type" : "Quantity"
                              } ]
                           } ]
                        } ]
                     }, {
                        "name" : "InitialIntensiveSurveillancePeriod",
                        "type" : "ExpressionRef"
                     } ]
                  },
                  "then" : {
                     "type" : "Tuple",
                     "element" : [ {
                        "name" : "short",
                        "value" : {
                           "valueType" : "{urn:hl7-org:elm-types:r1}String",
                           "value" : "See Details",
                           "type" : "Literal"
                        }
                     }, {
                        "name" : "date",
                        "value" : {
                           "type" : "Today"
                        }
                     }, {
                        "name" : "group",
                        "value" : {
                           "valueType" : "{urn:hl7-org:elm-types:r1}String",
                           "value" : "Management Surveillance (J.3.2)",
                           "type" : "Literal"
                        }
                     }, {
                        "name" : "details",
                        "value" : {
                           "type" : "List",
                           "element" : [ {
                              "valueType" : "{urn:hl7-org:elm-types:r1}String",
                              "value" : "Continued surveillance with HPV testing or cotesting at 3-year intervals for at least 25 years is recommended after treatment and initial post-treatment management of histologic HSIL, CIN 2, CIN 3, or AIS.",
                              "type" : "Literal"
                           } ]
                        }
                     } ]
                  }
               } ],
               "else" : {
                  "type" : "As",
                  "operand" : {
                     "type" : "Null"
                  },
                  "asTypeSpecifier" : {
                     "type" : "TupleTypeSpecifier",
                     "element" : [ {
                        "name" : "short",
                        "type" : {
                           "name" : "{urn:hl7-org:elm-types:r1}String",
                           "type" : "NamedTypeSpecifier"
                        }
                     }, {
                        "name" : "date",
                        "type" : {
                           "name" : "{urn:hl7-org:elm-types:r1}Date",
                           "type" : "NamedTypeSpecifier"
                        }
                     }, {
                        "name" : "group",
                        "type" : {
                           "name" : "{urn:hl7-org:elm-types:r1}String",
                           "type" : "NamedTypeSpecifier"
                        }
                     }, {
                        "name" : "details",
                        "type" : {
                           "type" : "ListTypeSpecifier",
                           "elementType" : {
                              "name" : "{urn:hl7-org:elm-types:r1}String",
                              "type" : "NamedTypeSpecifier"
                           }
                        }
                     } ]
                  }
               }
            }
         }, {
            "name" : "Recommendation",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "type" : "Coalesce",
               "operand" : [ {
                  "name" : "RecommendationForSurveillanceAfterAbnormalities",
                  "type" : "ExpressionRef"
               }, {
                  "name" : "RecommendationForHistologyResults",
                  "type" : "ExpressionRef"
               }, {
                  "name" : "RecommendationForExceptionsToColposcopyThreshold",
                  "type" : "ExpressionRef"
               }, {
                  "name" : "RecommendationForRareCytology",
                  "type" : "ExpressionRef"
               } ]
            }
         }, {
            "name" : "WhichRarityMadeTheRecommendation",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "type" : "Case",
               "caseItem" : [ {
                  "when" : {
                     "type" : "Not",
                     "operand" : {
                        "type" : "IsNull",
                        "operand" : {
                           "name" : "RecommendationForSurveillanceAfterAbnormalities",
                           "type" : "ExpressionRef"
                        }
                     }
                  },
                  "then" : {
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "4",
                     "type" : "Literal"
                  }
               }, {
                  "when" : {
                     "type" : "Not",
                     "operand" : {
                        "type" : "IsNull",
                        "operand" : {
                           "name" : "RecommendationForHistologyResults",
                           "type" : "ExpressionRef"
                        }
                     }
                  },
                  "then" : {
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  }
               }, {
                  "when" : {
                     "type" : "Not",
                     "operand" : {
                        "type" : "IsNull",
                        "operand" : {
                           "name" : "RecommendationForExceptionsToColposcopyThreshold",
                           "type" : "ExpressionRef"
                        }
                     }
                  },
                  "then" : {
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2",
                     "type" : "Literal"
                  }
               }, {
                  "when" : {
                     "type" : "Not",
                     "operand" : {
                        "type" : "IsNull",
                        "operand" : {
                           "name" : "RecommendationForRareCytology",
                           "type" : "ExpressionRef"
                        }
                     }
                  },
                  "then" : {
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "1",
                     "type" : "Literal"
                  }
               } ],
               "else" : {
                  "asType" : "{urn:hl7-org:elm-types:r1}Integer",
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
               "type" : "List"
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
         } ]
      }
   }
}

