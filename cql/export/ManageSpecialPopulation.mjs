export const ManageSpecialPopulation = {
   "library" : {
      "annotation" : [ {
         "translatorOptions" : "",
         "type" : "CqlToElmInfo"
      } ],
      "identifier" : {
         "id" : "ManageSpecialPopulation",
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
            "localIdentifier" : "Rare",
            "path" : "ManageRareAbnormality",
            "version" : "1.1.0"
         }, {
            "localIdentifier" : "CCF",
            "path" : "CCSMCommonFunctions",
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
            "name" : "Under25And2YearsAgoCytologyResults",
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
                  "type" : "And",
                  "operand" : [ {
                     "type" : "SameOrBefore",
                     "operand" : [ {
                        "path" : "date",
                        "scope" : "C",
                        "type" : "Property"
                     }, {
                        "type" : "Subtract",
                        "operand" : [ {
                           "path" : "date",
                           "type" : "Property",
                           "source" : {
                              "name" : "MostRecentCytologyReport",
                              "libraryName" : "Rare",
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
                           "scope" : "C",
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
                                    "name" : "MostRecentCytologyReport",
                                    "libraryName" : "Rare",
                                    "type" : "ExpressionRef"
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
                                 "name" : "MostRecentCytologyReport",
                                 "libraryName" : "Rare",
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
                                 "name" : "MostRecentCytologyReport",
                                 "libraryName" : "Rare",
                                 "type" : "ExpressionRef"
                              }
                           }
                        }
                     } ]
                  } ]
               }
            }
         }, {
            "name" : "Under25And2YearsAgoCytologyReport",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "type" : "Indexer",
               "operand" : [ {
                  "name" : "Under25And2YearsAgoCytologyResults",
                  "type" : "ExpressionRef"
               }, {
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "0",
                  "type" : "Literal"
               } ]
            }
         }, {
            "name" : "AssociatedHpvCotest",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "type" : "Coalesce",
               "operand" : [ {
                  "type" : "Query",
                  "source" : [ {
                     "alias" : "H",
                     "expression" : {
                        "name" : "SortedHpvReports",
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
                                 "type" : "Property",
                                 "source" : {
                                    "name" : "Under25And2YearsAgoCytologyReport",
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
                                    "name" : "Under25And2YearsAgoCytologyReport",
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
                                 "name" : "Under25And2YearsAgoCytologyReport",
                                 "type" : "ExpressionRef"
                              }
                           }
                        }
                     } ]
                  }
               } ]
            }
         }, {
            "name" : "ColposcopySinceMostRecentCytology",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "type" : "Exists",
               "operand" : {
                  "type" : "Query",
                  "source" : [ {
                     "alias" : "P",
                     "expression" : {
                        "name" : "ColposcopyProcedures",
                        "libraryName" : "Dash",
                        "type" : "ExpressionRef"
                     }
                  } ],
                  "relationship" : [ ],
                  "where" : {
                     "type" : "GreaterOrEqual",
                     "operand" : [ {
                        "name" : "ProcedureDate",
                        "libraryName" : "CCF",
                        "type" : "FunctionRef",
                        "operand" : [ {
                           "name" : "P",
                           "type" : "AliasRef"
                        } ]
                     }, {
                        "path" : "date",
                        "type" : "Property",
                        "source" : {
                           "name" : "MostRecentCytologyReport",
                           "libraryName" : "Rare",
                           "type" : "ExpressionRef"
                        }
                     } ]
                  }
               }
            }
         }, {
            "name" : "HistologicHsilCin2OrUnspecified",
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
                                       "name" : "CIN2",
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
            }
         }, {
            "name" : "SubsequentLowGradeHistologyReportsSinceMostRecentHsilHistology",
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
                     "type" : "In",
                     "operand" : [ {
                        "path" : "date",
                        "scope" : "B",
                        "type" : "Property"
                     }, {
                        "lowClosed" : false,
                        "highClosed" : false,
                        "type" : "Interval",
                        "low" : {
                           "path" : "date",
                           "type" : "Property",
                           "source" : {
                              "name" : "HistologicHsilCin2OrUnspecified",
                              "type" : "ExpressionRef"
                           }
                        },
                        "high" : {
                           "type" : "Add",
                           "operand" : [ {
                              "path" : "date",
                              "type" : "Property",
                              "source" : {
                                 "name" : "HistologicHsilCin2OrUnspecified",
                                 "type" : "ExpressionRef"
                              }
                           }, {
                              "value" : 2,
                              "unit" : "years",
                              "type" : "Quantity"
                           } ]
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
            }
         }, {
            "name" : "SubsequentLowGradeCytologyReportsSinceMostRecentHsilHistology",
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
                  "type" : "And",
                  "operand" : [ {
                     "type" : "In",
                     "operand" : [ {
                        "path" : "date",
                        "scope" : "C",
                        "type" : "Property"
                     }, {
                        "lowClosed" : false,
                        "highClosed" : false,
                        "type" : "Interval",
                        "low" : {
                           "path" : "date",
                           "type" : "Property",
                           "source" : {
                              "name" : "HistologicHsilCin2OrUnspecified",
                              "type" : "ExpressionRef"
                           }
                        },
                        "high" : {
                           "type" : "Add",
                           "operand" : [ {
                              "path" : "date",
                              "type" : "Property",
                              "source" : {
                                 "name" : "HistologicHsilCin2OrUnspecified",
                                 "type" : "ExpressionRef"
                              }
                           }, {
                              "value" : 2,
                              "unit" : "years",
                              "type" : "Quantity"
                           } ]
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
                              "scope" : "C",
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
            }
         }, {
            "name" : "Under25AndLowGradeCytologyResults",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
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
                     "value" : "25",
                     "type" : "Literal"
                  } ]
               }, {
                  "type" : "Or",
                  "operand" : [ {
                     "type" : "Or",
                     "operand" : [ {
                        "name" : "CytologyInterpretedAsLsil",
                        "libraryName" : "Rare",
                        "type" : "ExpressionRef"
                     }, {
                        "type" : "And",
                        "operand" : [ {
                           "type" : "Equal",
                           "operand" : [ {
                              "name" : "MostRecentCytologyCotestResult",
                              "libraryName" : "Collate",
                              "type" : "ExpressionRef"
                           }, {
                              "valueType" : "{urn:hl7-org:elm-types:r1}String",
                              "value" : "ASC-US",
                              "type" : "Literal"
                           } ]
                        }, {
                           "type" : "Equal",
                           "operand" : [ {
                              "name" : "MostRecentHpvResult",
                              "libraryName" : "Collate",
                              "type" : "ExpressionRef"
                           }, {
                              "valueType" : "{urn:hl7-org:elm-types:r1}String",
                              "value" : "HPV-positive",
                              "type" : "Literal"
                           } ]
                        } ]
                     } ]
                  }, {
                     "type" : "And",
                     "operand" : [ {
                        "name" : "CytologyInterpretedAsAscus",
                        "libraryName" : "Rare",
                        "type" : "ExpressionRef"
                     }, {
                        "type" : "IsNull",
                        "operand" : {
                           "name" : "MostRecentCytologyCotestResult",
                           "libraryName" : "Collate",
                           "type" : "ExpressionRef"
                        }
                     } ]
                  } ]
               } ]
            }
         }, {
            "name" : "Under25And2YearsAgoCytologyReportInterpretedAsLsil",
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
                           "name" : "Under25And2YearsAgoCytologyReport",
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
            "name" : "Under25And2YearsAgoCytologyReportInterpretedAsAscus",
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
                           "name" : "Under25And2YearsAgoCytologyReport",
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
            "name" : "Under25And2YearsAgoLowGradeCytologyResults",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
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
                     "value" : "25",
                     "type" : "Literal"
                  } ]
               }, {
                  "type" : "And",
                  "operand" : [ {
                     "type" : "Exists",
                     "operand" : {
                        "name" : "Under25And2YearsAgoCytologyResults",
                        "type" : "ExpressionRef"
                     }
                  }, {
                     "type" : "Or",
                     "operand" : [ {
                        "type" : "Or",
                        "operand" : [ {
                           "name" : "Under25And2YearsAgoCytologyReportInterpretedAsLsil",
                           "type" : "ExpressionRef"
                        }, {
                           "type" : "And",
                           "operand" : [ {
                              "name" : "Under25And2YearsAgoCytologyReportInterpretedAsAscus",
                              "type" : "ExpressionRef"
                           }, {
                              "type" : "Equal",
                              "operand" : [ {
                                 "path" : "riskTableInput",
                                 "type" : "Property",
                                 "source" : {
                                    "name" : "AssociatedHpvCotest",
                                    "type" : "ExpressionRef"
                                 }
                              }, {
                                 "valueType" : "{urn:hl7-org:elm-types:r1}String",
                                 "value" : "HPV-positive",
                                 "type" : "Literal"
                              } ]
                           } ]
                        } ]
                     }, {
                        "type" : "And",
                        "operand" : [ {
                           "name" : "Under25And2YearsAgoCytologyReportInterpretedAsAscus",
                           "type" : "ExpressionRef"
                        }, {
                           "type" : "IsNull",
                           "operand" : {
                              "name" : "AssociatedHpvCotest",
                              "type" : "ExpressionRef"
                           }
                        } ]
                     } ]
                  } ]
               } ]
            }
         }, {
            "name" : "Under25AndSecondMostRecentLowGradeCytologyResults",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
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
                     "value" : "25",
                     "type" : "Literal"
                  } ]
               }, {
                  "type" : "Or",
                  "operand" : [ {
                     "type" : "Or",
                     "operand" : [ {
                        "name" : "SecondMostRecentCytologyInterpretedAsLsil",
                        "libraryName" : "Rare",
                        "type" : "ExpressionRef"
                     }, {
                        "type" : "And",
                        "operand" : [ {
                           "name" : "SecondMostRecentCytologyInterpretedAsAscus",
                           "libraryName" : "Rare",
                           "type" : "ExpressionRef"
                        }, {
                           "type" : "Equal",
                           "operand" : [ {
                              "path" : "riskTableInput",
                              "type" : "Property",
                              "source" : {
                                 "name" : "AssociatedHpvCotest",
                                 "type" : "ExpressionRef"
                              }
                           }, {
                              "valueType" : "{urn:hl7-org:elm-types:r1}String",
                              "value" : "HPV-positive",
                              "type" : "Literal"
                           } ]
                        } ]
                     } ]
                  }, {
                     "type" : "And",
                     "operand" : [ {
                        "name" : "SecondMostRecentCytologyInterpretedAsAscus",
                        "libraryName" : "Rare",
                        "type" : "ExpressionRef"
                     }, {
                        "type" : "IsNull",
                        "operand" : {
                           "name" : "AssociatedHpvCotest",
                           "type" : "ExpressionRef"
                        }
                     } ]
                  } ]
               } ]
            }
         }, {
            "name" : "HistologyInterpretedAsLessThanCin2AfterAbnormalCytologyScreening",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "type" : "And",
               "operand" : [ {
                  "type" : "And",
                  "operand" : [ {
                     "type" : "And",
                     "operand" : [ {
                        "name" : "HistologyInterpretedAsCin1OrNormal",
                        "libraryName" : "Rare",
                        "type" : "ExpressionRef"
                     }, {
                        "name" : "Under25AndLowGradeCytologyResults",
                        "type" : "ExpressionRef"
                     } ]
                  }, {
                     "name" : "Under25AndSecondMostRecentLowGradeCytologyResults",
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
                              "libraryName" : "Rare",
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
                                 "libraryName" : "Rare",
                                 "type" : "ExpressionRef"
                              }
                           }, {
                              "value" : 3,
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
                              "libraryName" : "Rare",
                              "type" : "ExpressionRef"
                           }
                        }
                     }
                  } ]
               } ]
            }
         }, {
            "name" : "CytologyInterpretedAsAscusOrAbove",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "type" : "In",
               "operand" : [ {
                  "path" : "riskTableInput",
                  "type" : "Property",
                  "source" : {
                     "name" : "MostRecentCytologyReport",
                     "libraryName" : "Rare",
                     "type" : "ExpressionRef"
                  }
               }, {
                  "type" : "List",
                  "element" : [ {
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "ASC-US",
                     "type" : "Literal"
                  }, {
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "LSIL",
                     "type" : "Literal"
                  }, {
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "ASC-H",
                     "type" : "Literal"
                  }, {
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "AGC",
                     "type" : "Literal"
                  }, {
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "HSIL+",
                     "type" : "Literal"
                  } ]
               } ]
            }
         }, {
            "name" : "SecondMostRecentCytologyInterpretedAsAscHOrHsil",
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
                           "libraryName" : "Rare",
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
                                 "name" : "ASC-H",
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
                              "name" : "HSIL",
                              "type" : "ValueSetRef"
                           }
                        } ]
                     }
                  }
               }
            }
         }, {
            "name" : "BiopsySinceMostRecentCytology",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "type" : "Exists",
               "operand" : {
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
                     "type" : "Greater",
                     "operand" : [ {
                        "path" : "date",
                        "scope" : "B",
                        "type" : "Property"
                     }, {
                        "path" : "date",
                        "type" : "Property",
                        "source" : {
                           "name" : "MostRecentCytologyReport",
                           "libraryName" : "Rare",
                           "type" : "ExpressionRef"
                        }
                     } ]
                  }
               }
            }
         }, {
            "name" : "ShouldSwitchToRiskAt25Text",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "valueType" : "{urn:hl7-org:elm-types:r1}String",
               "value" : "Clinicians should switch to using risk estimates when patients reach the age of 25 years.",
               "type" : "Literal"
            }
         }, {
            "name" : "RecommendationForPatientsYoungerThan25",
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
                                 "name" : "HistologyInterpretedAsCin1OrNormal",
                                 "libraryName" : "Rare",
                                 "type" : "ExpressionRef"
                              } ]
                           }, {
                              "type" : "Or",
                              "operand" : [ {
                                 "name" : "CytologyInterpretedAsHsil",
                                 "libraryName" : "Rare",
                                 "type" : "ExpressionRef"
                              }, {
                                 "name" : "CytologyInterpretedAsAscH",
                                 "libraryName" : "Rare",
                                 "type" : "ExpressionRef"
                              } ]
                           } ]
                        }, {
                           "type" : "After",
                           "operand" : [ {
                              "path" : "date",
                              "type" : "Property",
                              "source" : {
                                 "name" : "MostRecentCytologyReport",
                                 "libraryName" : "Rare",
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
                                 "value" : 18,
                                 "unit" : "months",
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
                              "libraryName" : "Rare",
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
                           "value" : "Younger Than 25 (K.1.3)",
                           "type" : "Literal"
                        }
                     }, {
                        "name" : "details",
                        "value" : {
                           "type" : "List",
                           "element" : [ {
                              "valueType" : "{urn:hl7-org:elm-types:r1}String",
                              "value" : "If a high-grade cytologic abnormality (HSIL, ASC-H) without histologic HSIL persists for 2 years, a diagnostic excisional procedure is recommended (unless the patient is pregnant). A diagnostic excisional procedure is recommended in patients when the squamocolumnar junction or the upper limit of all lesions are not fully visualized.",
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
                                          "value" : "21",
                                          "type" : "Literal"
                                       } ]
                                    }, {
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
                                          "value" : "25",
                                          "type" : "Literal"
                                       } ]
                                    } ]
                                 }, {
                                    "name" : "HistologyInterpretedAsCin1OrNormal",
                                    "libraryName" : "Rare",
                                    "type" : "ExpressionRef"
                                 } ]
                              }, {
                                 "type" : "Or",
                                 "operand" : [ {
                                    "name" : "CytologyInterpretedAsAscusOrAbove",
                                    "type" : "ExpressionRef"
                                 }, {
                                    "name" : "CytologyInterpretedAsAis",
                                    "libraryName" : "Rare",
                                    "type" : "ExpressionRef"
                                 } ]
                              } ]
                           }, {
                              "type" : "In",
                              "operand" : [ {
                                 "path" : "date",
                                 "type" : "Property",
                                 "source" : {
                                    "name" : "MostRecentCytologyReport",
                                    "libraryName" : "Rare",
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
                           "name" : "SecondMostRecentCytologyInterpretedAsAscHOrHsil",
                           "type" : "ExpressionRef"
                        } ]
                     }, {
                        "type" : "In",
                        "operand" : [ {
                           "path" : "date",
                           "type" : "Property",
                           "source" : {
                              "name" : "SecondMostRecentCytologyReport",
                              "libraryName" : "Rare",
                              "type" : "ExpressionRef"
                           }
                        }, {
                           "lowClosed" : false,
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
                                 "value" : 6,
                                 "unit" : "months",
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
                           "value" : "Younger Than 25 (K.1.3)",
                           "type" : "Literal"
                        }
                     }, {
                        "name" : "details",
                        "value" : {
                           "type" : "List",
                           "element" : [ {
                              "valueType" : "{urn:hl7-org:elm-types:r1}String",
                              "value" : "Colposcopy is recommended for cytologic ASC-US or above on repeat testing following a CIN1 or < CIN1 result that is preceded by a cytologic ASC-H, AGC, AIS, or HSIL result.",
                              "type" : "Literal"
                           }, {
                              "name" : "ShouldSwitchToRiskAt25Text",
                              "type" : "ExpressionRef"
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
                                 "value" : "25",
                                 "type" : "Literal"
                              } ]
                           }, {
                              "name" : "HistologyInterpretedAsCin1OrNormal",
                              "libraryName" : "Rare",
                              "type" : "ExpressionRef"
                           } ]
                        }, {
                           "name" : "CytologyInterpretedAsHsil",
                           "libraryName" : "Rare",
                           "type" : "ExpressionRef"
                        } ]
                     }, {
                        "type" : "In",
                        "operand" : [ {
                           "path" : "date",
                           "type" : "Property",
                           "source" : {
                              "name" : "MostRecentCytologyReport",
                              "libraryName" : "Rare",
                              "type" : "ExpressionRef"
                           }
                        }, {
                           "lowClosed" : false,
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
                                 "value" : 12,
                                 "unit" : "months",
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
                     } ]
                  },
                  "then" : {
                     "type" : "Tuple",
                     "element" : [ {
                        "name" : "short",
                        "value" : {
                           "valueType" : "{urn:hl7-org:elm-types:r1}String",
                           "value" : "Colposcopy and Cytology",
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
                           "value" : "Younger Than 25 (K.1.3)",
                           "type" : "Literal"
                        }
                     }, {
                        "name" : "details",
                        "value" : {
                           "type" : "List",
                           "element" : [ {
                              "valueType" : "{urn:hl7-org:elm-types:r1}String",
                              "value" : "Observation is recommended with colposcopy and cytology at 1 and 2 years following a cervical histology result of CIN1 or <CIN1 preceded by a HSIL cytology. Diagnostic excisional procedures are not recommended for patients younger than 25 years with these results as long as the squamocolumnar junction and the upper limit of all lesions are fully visualized, the endocervical sampling is less than CIN 2, and review of histology/cytology does not change the diagnosis.",
                              "type" : "Literal"
                           }, {
                              "name" : "ShouldSwitchToRiskAt25Text",
                              "type" : "ExpressionRef"
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
                                 "value" : "25",
                                 "type" : "Literal"
                              } ]
                           }, {
                              "name" : "HistologyInterpretedAsCin1OrNormal",
                              "libraryName" : "Rare",
                              "type" : "ExpressionRef"
                           } ]
                        }, {
                           "name" : "CytologyInterpretedAsAscH",
                           "libraryName" : "Rare",
                           "type" : "ExpressionRef"
                        } ]
                     }, {
                        "type" : "In",
                        "operand" : [ {
                           "path" : "date",
                           "type" : "Property",
                           "source" : {
                              "name" : "MostRecentCytologyReport",
                              "libraryName" : "Rare",
                              "type" : "ExpressionRef"
                           }
                        }, {
                           "lowClosed" : false,
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
                                 "value" : 12,
                                 "unit" : "months",
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
                     } ]
                  },
                  "then" : {
                     "type" : "Tuple",
                     "element" : [ {
                        "name" : "short",
                        "value" : {
                           "valueType" : "{urn:hl7-org:elm-types:r1}String",
                           "value" : "Cytology",
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
                           "value" : "Younger Than 25 (K.1.3)",
                           "type" : "Literal"
                        }
                     }, {
                        "name" : "details",
                        "value" : {
                           "type" : "List",
                           "element" : [ {
                              "valueType" : "{urn:hl7-org:elm-types:r1}String",
                              "value" : "Observation is recommended with cytology at 1 and 2 years following a cervical histology result of CIN1 or <CIN1 preceded by a ASC-H, AGC or AIS cytology. Diagnostic excisional procedures are not recommended for patients younger than 25 years with these results as long as the squamocolumnar junction and the upper limit of all lesions are fully visualized, the endocervical sampling is less than CIN 2, and review of histology/cytology does not change the diagnosis.",
                              "type" : "Literal"
                           }, {
                              "name" : "ShouldSwitchToRiskAt25Text",
                              "type" : "ExpressionRef"
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
                                 "value" : "25",
                                 "type" : "Literal"
                              } ]
                           }, {
                              "type" : "Or",
                              "operand" : [ {
                                 "name" : "HistologyInterpretedAsCin2",
                                 "libraryName" : "Rare",
                                 "type" : "ExpressionRef"
                              }, {
                                 "name" : "HistologyInterpretedAsUnspecifiedHsil",
                                 "libraryName" : "Rare",
                                 "type" : "ExpressionRef"
                              } ]
                           } ]
                        }, {
                           "type" : "Or",
                           "operand" : [ {
                              "name" : "SecondMostRecentHistologyInterpretedAsCin2",
                              "libraryName" : "Rare",
                              "type" : "ExpressionRef"
                           }, {
                              "name" : "SecondMostRecentHistologyInterpretedAsUnspecifiedHsil",
                              "libraryName" : "Rare",
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
                                 "name" : "SecondMostRecentBiopsyReport",
                                 "libraryName" : "Rare",
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
                                    "value" : 2,
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
                                       "name" : "MostRecentBiopsyReport",
                                       "libraryName" : "Collate",
                                       "type" : "ExpressionRef"
                                    }
                                 }, {
                                    "value" : 2,
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
                                    "name" : "MostRecentBiopsyReport",
                                    "libraryName" : "Collate",
                                    "type" : "ExpressionRef"
                                 }
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
                           "value" : "Treatment",
                           "type" : "Literal"
                        }
                     }, {
                        "name" : "group",
                        "value" : {
                           "valueType" : "{urn:hl7-org:elm-types:r1}String",
                           "value" : "Younger Than 25 (K.1.4)",
                           "type" : "Literal"
                        }
                     }, {
                        "name" : "date",
                        "value" : {
                           "type" : "Today"
                        }
                     }, {
                        "name" : "details",
                        "value" : {
                           "type" : "List",
                           "element" : [ {
                              "valueType" : "{urn:hl7-org:elm-types:r1}String",
                              "value" : "Treatment is recommended. Excisional treatment is recommended when the squamocolumnar junction or the lesions(s) are not fully visualized.",
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
                                 "value" : "25",
                                 "type" : "Literal"
                              } ]
                           }, {
                              "type" : "Not",
                              "operand" : {
                                 "type" : "IsNull",
                                 "operand" : {
                                    "name" : "HistologicHsilCin2OrUnspecified",
                                    "type" : "ExpressionRef"
                                 }
                              }
                           } ]
                        }, {
                           "type" : "GreaterOrEqual",
                           "operand" : [ {
                              "type" : "Count",
                              "source" : {
                                 "name" : "SubsequentLowGradeHistologyReportsSinceMostRecentHsilHistology",
                                 "type" : "ExpressionRef"
                              }
                           }, {
                              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                              "value" : "2",
                              "type" : "Literal"
                           } ]
                        } ]
                     }, {
                        "type" : "GreaterOrEqual",
                        "operand" : [ {
                           "type" : "Count",
                           "source" : {
                              "name" : "SubsequentLowGradeCytologyReportsSinceMostRecentHsilHistology",
                              "type" : "ExpressionRef"
                           }
                        }, {
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "2",
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
                           "value" : "Colposcopy and Cytology",
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
                           "value" : "Younger Than 25 (K.1.4)",
                           "type" : "Literal"
                        }
                     }, {
                        "name" : "details",
                        "value" : {
                           "type" : "List",
                           "element" : [ {
                              "valueType" : "{urn:hl7-org:elm-types:r1}String",
                              "value" : "Surveillance with colposcopy and cervical cytology should be performed at 1 year after the most recent cervical histology and cytology tests following an earlier histology HSIL (CIN2) or histologic HSIL, unspecified result.",
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
                              "value" : "25",
                              "type" : "Literal"
                           } ]
                        }, {
                           "name" : "MostRecentBiopsyReportWasWithinPastYear",
                           "libraryName" : "Rare",
                           "type" : "ExpressionRef"
                        } ]
                     }, {
                        "name" : "HistologyInterpretedAsCin3",
                        "libraryName" : "Rare",
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
                           "value" : "Younger Than 25 (K.1.4)",
                           "type" : "Literal"
                        }
                     }, {
                        "name" : "details",
                        "value" : {
                           "type" : "List",
                           "element" : [ {
                              "valueType" : "{urn:hl7-org:elm-types:r1}String",
                              "value" : "Treatment is recommended, and observation is unacceptable (EII).",
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
                              "value" : "25",
                              "type" : "Literal"
                           } ]
                        }, {
                           "name" : "MostRecentBiopsyReportWasWithinPastYear",
                           "libraryName" : "Rare",
                           "type" : "ExpressionRef"
                        } ]
                     }, {
                        "name" : "HistologyInterpretedAsCin2",
                        "libraryName" : "Rare",
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
                           "value" : "Younger Than 25 (K.1.4)",
                           "type" : "Literal"
                        }
                     }, {
                        "name" : "details",
                        "value" : {
                           "type" : "List",
                           "element" : [ {
                              "valueType" : "{urn:hl7-org:elm-types:r1}String",
                              "value" : "Observation is preferred, and treatment is acceptable (BII). Observation includes colposcopy and cytology at 6-month intervals.",
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
                              "value" : "25",
                              "type" : "Literal"
                           } ]
                        }, {
                           "name" : "MostRecentBiopsyReportWasWithinPastYear",
                           "libraryName" : "Rare",
                           "type" : "ExpressionRef"
                        } ]
                     }, {
                        "name" : "HistologyInterpretedAsUnspecifiedHsil",
                        "libraryName" : "Rare",
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
                           "value" : "Younger Than 25 (K.1.4)",
                           "type" : "Literal"
                        }
                     }, {
                        "name" : "details",
                        "value" : {
                           "type" : "List",
                           "element" : [ {
                              "valueType" : "{urn:hl7-org:elm-types:r1}String",
                              "value" : "Observation or treatment is acceptable after an unspecified histologic HSIL result. Observation includes colposcopy and cytology at 6-month intervals.",
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
                                 "value" : "25",
                                 "type" : "Literal"
                              } ]
                           }, {
                              "name" : "MostRecentCytologyReportWasWithinPastFiveYears",
                              "libraryName" : "Rare",
                              "type" : "ExpressionRef"
                           } ]
                        }, {
                           "type" : "Or",
                           "operand" : [ {
                              "type" : "Or",
                              "operand" : [ {
                                 "type" : "Or",
                                 "operand" : [ {
                                    "name" : "CytologyInterpretedAsHsil",
                                    "libraryName" : "Rare",
                                    "type" : "ExpressionRef"
                                 }, {
                                    "name" : "CytologyInterpretedAsAscH",
                                    "libraryName" : "Rare",
                                    "type" : "ExpressionRef"
                                 } ]
                              }, {
                                 "name" : "CytologyInterpretedAsAgc",
                                 "libraryName" : "Rare",
                                 "type" : "ExpressionRef"
                              } ]
                           }, {
                              "name" : "CytologyInterpretedAsAis",
                              "libraryName" : "Rare",
                              "type" : "ExpressionRef"
                           } ]
                        } ]
                     }, {
                        "type" : "Not",
                        "operand" : {
                           "name" : "BiopsySinceMostRecentCytology",
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
                           "value" : "Younger Than 25 (K.1.1)",
                           "type" : "Literal"
                        }
                     }, {
                        "name" : "details",
                        "value" : {
                           "type" : "List",
                           "element" : [ {
                              "valueType" : "{urn:hl7-org:elm-types:r1}String",
                              "value" : "Colposcopy is recommended for individuals under 25 years old with cytologic HSIL, ASC-H, AGC or AIS (BII). Immediate treatment without histologic confirmation is not recommended for cytology HSIL or ASC-H.",
                              "type" : "Literal"
                           }, {
                              "name" : "ShouldSwitchToRiskAt25Text",
                              "type" : "ExpressionRef"
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
                                 "value" : "25",
                                 "type" : "Literal"
                              } ]
                           }, {
                              "name" : "MostRecentCytologyReportWasWithinPastFiveYears",
                              "libraryName" : "Rare",
                              "type" : "ExpressionRef"
                           } ]
                        }, {
                           "type" : "Equal",
                           "operand" : [ {
                              "name" : "MostRecentCytologyCotestResult",
                              "libraryName" : "Collate",
                              "type" : "ExpressionRef"
                           }, {
                              "valueType" : "{urn:hl7-org:elm-types:r1}String",
                              "value" : "ASC-US",
                              "type" : "Literal"
                           } ]
                        } ]
                     }, {
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
                     } ]
                  },
                  "then" : {
                     "type" : "Tuple",
                     "element" : [ {
                        "name" : "short",
                        "value" : {
                           "valueType" : "{urn:hl7-org:elm-types:r1}String",
                           "value" : "Cytology",
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
                              "value" : 3,
                              "unit" : "years",
                              "type" : "Quantity"
                           } ]
                        }
                     }, {
                        "name" : "group",
                        "value" : {
                           "valueType" : "{urn:hl7-org:elm-types:r1}String",
                           "value" : "Younger Than 25 (K.1.1)",
                           "type" : "Literal"
                        }
                     }, {
                        "name" : "details",
                        "value" : {
                           "type" : "List",
                           "element" : [ {
                              "valueType" : "{urn:hl7-org:elm-types:r1}String",
                              "value" : "Cervical Cytology test (alone) is indicated 3 years after an ASC-US/HPV-Negative result.",
                              "type" : "Literal"
                           }, {
                              "name" : "ShouldSwitchToRiskAt25Text",
                              "type" : "ExpressionRef"
                           } ]
                        }
                     } ]
                  }
               }, {
                  "when" : {
                     "type" : "And",
                     "operand" : [ {
                        "name" : "HistologyInterpretedAsLessThanCin2AfterAbnormalCytologyScreening",
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
                           "type" : "Subtract",
                           "operand" : [ {
                              "type" : "Now"
                           }, {
                              "value" : 12,
                              "unit" : "months",
                              "type" : "Quantity"
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
                           "value" : "Cytology",
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
                           "value" : "Younger Than 25 (K.1.1)",
                           "type" : "Literal"
                        }
                     }, {
                        "name" : "details",
                        "value" : {
                           "type" : "List",
                           "element" : [ {
                              "valueType" : "{urn:hl7-org:elm-types:r1}String",
                              "value" : "For patients under 25 years old perform cervical cytology one year following cervical histologic LSIL(CIN1) or <CIN1 result (BIII).",
                              "type" : "Literal"
                           }, {
                              "name" : "ShouldSwitchToRiskAt25Text",
                              "type" : "ExpressionRef"
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
                           "name" : "HistologyInterpretedAsLessThanCin2AfterAbnormalCytologyScreening",
                           "type" : "ExpressionRef"
                        }, {
                           "type" : "LessOrEqual",
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
                        } ]
                     }, {
                        "type" : "Not",
                        "operand" : {
                           "type" : "Greater",
                           "operand" : [ {
                              "path" : "date",
                              "type" : "Property",
                              "source" : {
                                 "name" : "MostRecentCytologyReport",
                                 "libraryName" : "Rare",
                                 "type" : "ExpressionRef"
                              }
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
                     } ]
                  },
                  "then" : {
                     "type" : "Tuple",
                     "element" : [ {
                        "name" : "short",
                        "value" : {
                           "valueType" : "{urn:hl7-org:elm-types:r1}String",
                           "value" : "Cytology",
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
                           "value" : "Younger Than 25 (K.1.1)",
                           "type" : "Literal"
                        }
                     }, {
                        "name" : "details",
                        "value" : {
                           "type" : "List",
                           "element" : [ {
                              "valueType" : "{urn:hl7-org:elm-types:r1}String",
                              "value" : "This patient is due now for cervical cytology screening. For patients under 25 years old, cervical cytology should be performed one year after a cervical histologic LSIL(CIN1) or <CIN1 result. (BIII).",
                              "type" : "Literal"
                           }, {
                              "name" : "ShouldSwitchToRiskAt25Text",
                              "type" : "ExpressionRef"
                           } ]
                        }
                     } ]
                  }
               }, {
                  "when" : {
                     "type" : "And",
                     "operand" : [ {
                        "name" : "Under25AndLowGradeCytologyResults",
                        "type" : "ExpressionRef"
                     }, {
                        "name" : "Under25And2YearsAgoLowGradeCytologyResults",
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
                           "value" : "Younger Than 25 (K.1.1)",
                           "type" : "Literal"
                        }
                     }, {
                        "name" : "details",
                        "value" : {
                           "type" : "List",
                           "element" : [ {
                              "valueType" : "{urn:hl7-org:elm-types:r1}String",
                              "value" : "Colposcopy is recommended if low-grade cytology persists at the 2-year follow up visit after low-grade cytology results (BII).",
                              "type" : "Literal"
                           }, {
                              "name" : "ShouldSwitchToRiskAt25Text",
                              "type" : "ExpressionRef"
                           } ]
                        }
                     } ]
                  }
               }, {
                  "when" : {
                     "name" : "Under25AndLowGradeCytologyResults",
                     "type" : "ExpressionRef"
                  },
                  "then" : {
                     "type" : "Tuple",
                     "element" : [ {
                        "name" : "short",
                        "value" : {
                           "valueType" : "{urn:hl7-org:elm-types:r1}String",
                           "value" : "Cytology",
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
                           "value" : "Younger Than 25 (K.1.1)",
                           "type" : "Literal"
                        }
                     }, {
                        "name" : "details",
                        "value" : {
                           "type" : "List",
                           "element" : [ {
                              "valueType" : "{urn:hl7-org:elm-types:r1}String",
                              "value" : "Repeat cytology alone at one and two years is recommended after an initial low-grade cytology screening result of LSIL, ASC-US HPV-positive, or ASC-US result without HPV testing (BII).",
                              "type" : "Literal"
                           }, {
                              "name" : "ShouldSwitchToRiskAt25Text",
                              "type" : "ExpressionRef"
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
            "name" : "PregnancyOnset",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "type" : "Coalesce",
               "operand" : [ {
                  "name" : "ConditionDate",
                  "libraryName" : "CCF",
                  "type" : "FunctionRef",
                  "operand" : [ {
                     "name" : "MostRecentCondition",
                     "libraryName" : "C3F",
                     "type" : "FunctionRef",
                     "operand" : [ {
                        "name" : "PregnancyDiagnoses",
                        "libraryName" : "Dash",
                        "type" : "ExpressionRef"
                     } ]
                  } ]
               }, {
                  "name" : "ObservationDate",
                  "libraryName" : "CCF",
                  "type" : "FunctionRef",
                  "operand" : [ {
                     "name" : "MostRecent",
                     "libraryName" : "C3F",
                     "type" : "FunctionRef",
                     "operand" : [ {
                        "name" : "PregnancyObservations",
                        "libraryName" : "Dash",
                        "type" : "ExpressionRef"
                     } ]
                  } ]
               } ]
            }
         }, {
            "name" : "FirstHistologyAfterPregnancyOnset",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "type" : "Last",
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
                     "type" : "GreaterOrEqual",
                     "operand" : [ {
                        "path" : "date",
                        "scope" : "B",
                        "type" : "Property"
                     }, {
                        "name" : "PregnancyOnset",
                        "type" : "ExpressionRef"
                     } ]
                  }
               }
            }
         }, {
            "name" : "HistologicAisDuringPregnancy",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "type" : "Exists",
               "operand" : {
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
                           "type" : "GreaterOrEqual",
                           "operand" : [ {
                              "path" : "date",
                              "scope" : "B",
                              "type" : "Property"
                           }, {
                              "name" : "PregnancyOnset",
                              "type" : "ExpressionRef"
                           } ]
                        }, {
                           "type" : "LessOrEqual",
                           "operand" : [ {
                              "path" : "date",
                              "scope" : "B",
                              "type" : "Property"
                           }, {
                              "type" : "Add",
                              "operand" : [ {
                                 "name" : "PregnancyOnset",
                                 "type" : "ExpressionRef"
                              }, {
                                 "value" : 42,
                                 "unit" : "weeks",
                                 "type" : "Quantity"
                              } ]
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
                     } ]
                  }
               }
            }
         }, {
            "name" : "RecommendationForPregnantPatients",
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
                              "name" : "Pregnant",
                              "libraryName" : "Dash",
                              "type" : "ExpressionRef"
                           } ]
                        }, {
                           "type" : "Greater",
                           "operand" : [ {
                              "path" : "date",
                              "type" : "Property",
                              "source" : {
                                 "name" : "FirstHistologyAfterPregnancyOnset",
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
                        } ]
                     }, {
                        "type" : "In",
                        "operand" : [ {
                           "path" : "riskTableInput",
                           "type" : "Property",
                           "source" : {
                              "name" : "FirstHistologyAfterPregnancyOnset",
                              "type" : "ExpressionRef"
                           }
                        }, {
                           "type" : "List",
                           "element" : [ {
                              "valueType" : "{urn:hl7-org:elm-types:r1}String",
                              "value" : "CIN2",
                              "type" : "Literal"
                           }, {
                              "valueType" : "{urn:hl7-org:elm-types:r1}String",
                              "value" : "CIN3",
                              "type" : "Literal"
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
                           "value" : "Pregnant (K.2)",
                           "type" : "Literal"
                        }
                     }, {
                        "name" : "details",
                        "value" : {
                           "type" : "List",
                           "element" : [ {
                              "valueType" : "{urn:hl7-org:elm-types:r1}String",
                              "value" : "Surveillance colposcopy and testing (with diagnostic cytology or HPV depending on age) is preferred every 12 to 24 weeks but deferring colposcopy to the postpartum period is acceptable (BII). In postpartum period, colposcopy is recommended no earlier than 4 weeks after delivery (BII). In patients diagnosed with histologic HSIL (CIN2 or CIN3) during pregnancy, if a lesion is detected at postpartum colposcopy, an excisional treatment procedure or full diagnostic evaluation (cervical cytology, HPV, and biopsy) is acceptable (BII). In the absence of a lesion on colposcopy, a full diagnostic evaluation is recommended/ expedited treatment is not recommended (BII). For patients with a diagnosis of histologic HSIL (CIN 2) whose concerns about the effects of treatment on a future pregnancy outweigh their concerns about cancer, either observation or treatment is acceptable provided the squamocolumnar junction is visible and CIN 2+ or ungraded CIN is not identified on endocervical sampling (CII). If the histologic HSIL cannot be specified as CIN 2, treatment is preferred, but observation is acceptable if there are concerns related to future pregnancies (CIII). For patients 25 years or older, observation includes colposcopy and HPV-based testing with cotest or primary hrHPV testing at 6-month intervals for up to 2 years.",
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
                           "name" : "Pregnant",
                           "libraryName" : "Dash",
                           "type" : "ExpressionRef"
                        } ]
                     }, {
                        "name" : "HistologicAisDuringPregnancy",
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
                           "value" : "Pregnant (K.2)",
                           "type" : "Literal"
                        }
                     }, {
                        "name" : "details",
                        "value" : {
                           "type" : "List",
                           "element" : [ {
                              "valueType" : "{urn:hl7-org:elm-types:r1}String",
                              "value" : "Referral to a gynecologic oncologist is preferred if AIS is diagnosed during pregnancy, but management by a gynecologist skilled in the colposcopic diagnosis and treatment of AIS is acceptable (CIII).",
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
            "name" : "Immunocompromised",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "name" : "Immunocompromised",
               "libraryName" : "Dash",
               "type" : "ExpressionRef"
            }
         }, {
            "name" : "MostRecentHpvReportWasWithinPastFiveYears",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "type" : "Greater",
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
                     "value" : 5,
                     "unit" : "years",
                     "type" : "Quantity"
                  } ]
               } ]
            }
         }, {
            "name" : "TwoMostRecentCytologyReportsWithin18MonthsApart",
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
                        "libraryName" : "Rare",
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
                              "libraryName" : "Rare",
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
                              "name" : "MostRecentCytologyReport",
                              "libraryName" : "Rare",
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
                           "name" : "MostRecentCytologyReport",
                           "libraryName" : "Rare",
                           "type" : "ExpressionRef"
                        }
                     }
                  }
               } ]
            }
         }, {
            "name" : "RecommendationForImmunosuppressedPatients",
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
                              "type" : "And",
                              "operand" : [ {
                                 "name" : "Immunocompromised",
                                 "type" : "ExpressionRef"
                              }, {
                                 "name" : "MostRecentCytologyReportWasWithinPastFiveYears",
                                 "libraryName" : "Rare",
                                 "type" : "ExpressionRef"
                              } ]
                           }, {
                              "type" : "Or",
                              "operand" : [ {
                                 "name" : "CytologyInterpretedAsAscusOrAbove",
                                 "type" : "ExpressionRef"
                              }, {
                                 "name" : "CytologyInterpretedAsAis",
                                 "libraryName" : "Rare",
                                 "type" : "ExpressionRef"
                              } ]
                           } ]
                        }, {
                           "type" : "Equal",
                           "operand" : [ {
                              "path" : "riskTableInput",
                              "type" : "Property",
                              "source" : {
                                 "name" : "SecondMostRecentCytologyReport",
                                 "libraryName" : "Rare",
                                 "type" : "ExpressionRef"
                              }
                           }, {
                              "valueType" : "{urn:hl7-org:elm-types:r1}String",
                              "value" : "ASC-US",
                              "type" : "Literal"
                           } ]
                        } ]
                     }, {
                        "name" : "TwoMostRecentCytologyReportsWithin18MonthsApart",
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
                           "value" : "Immunosuppressed (K.3)",
                           "type" : "Literal"
                        }
                     }, {
                        "name" : "details",
                        "value" : {
                           "type" : "List",
                           "element" : [ {
                              "valueType" : "{urn:hl7-org:elm-types:r1}String",
                              "value" : "Colposcopy is recommended when the patient is immunocompromised and is found to have cytologic ASC-US or higher or HPV positive after a cytologic ASC-US result.",
                              "type" : "Literal"
                           } ]
                        }
                     } ]
                  }
               }, {
                  "when" : {
                     "type" : "And",
                     "operand" : [ {
                        "name" : "Immunocompromised",
                        "type" : "ExpressionRef"
                     }, {
                        "type" : "Or",
                        "operand" : [ {
                           "type" : "Or",
                           "operand" : [ {
                              "type" : "And",
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
                                       "value" : "HPV-positive",
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
                                       "value" : "ASC-US",
                                       "type" : "Literal"
                                    } ]
                                 } ]
                              }, {
                                 "name" : "MostRecentCytologyReportWasWithinPastFiveYears",
                                 "libraryName" : "Rare",
                                 "type" : "ExpressionRef"
                              } ]
                           }, {
                              "type" : "And",
                              "operand" : [ {
                                 "name" : "MostRecentCytologyReportWasWithinPastFiveYears",
                                 "libraryName" : "Rare",
                                 "type" : "ExpressionRef"
                              }, {
                                 "type" : "Or",
                                 "operand" : [ {
                                    "type" : "In",
                                    "operand" : [ {
                                       "path" : "riskTableInput",
                                       "type" : "Property",
                                       "source" : {
                                          "name" : "MostRecentCytologyReport",
                                          "libraryName" : "Rare",
                                          "type" : "ExpressionRef"
                                       }
                                    }, {
                                       "type" : "List",
                                       "element" : [ {
                                          "valueType" : "{urn:hl7-org:elm-types:r1}String",
                                          "value" : "LSIL",
                                          "type" : "Literal"
                                       }, {
                                          "valueType" : "{urn:hl7-org:elm-types:r1}String",
                                          "value" : "ASC-H",
                                          "type" : "Literal"
                                       }, {
                                          "valueType" : "{urn:hl7-org:elm-types:r1}String",
                                          "value" : "AGC",
                                          "type" : "Literal"
                                       }, {
                                          "valueType" : "{urn:hl7-org:elm-types:r1}String",
                                          "value" : "HSIL+",
                                          "type" : "Literal"
                                       } ]
                                    } ]
                                 }, {
                                    "name" : "CytologyInterpretedAsAis",
                                    "libraryName" : "Rare",
                                    "type" : "ExpressionRef"
                                 } ]
                              } ]
                           } ]
                        }, {
                           "type" : "And",
                           "operand" : [ {
                              "type" : "In",
                              "operand" : [ {
                                 "name" : "MostRecentHpvResult",
                                 "libraryName" : "Collate",
                                 "type" : "ExpressionRef"
                              }, {
                                 "type" : "List",
                                 "element" : [ {
                                    "valueType" : "{urn:hl7-org:elm-types:r1}String",
                                    "value" : "HPV16+",
                                    "type" : "Literal"
                                 }, {
                                    "valueType" : "{urn:hl7-org:elm-types:r1}String",
                                    "value" : "HPV16-, HPV18+",
                                    "type" : "Literal"
                                 } ]
                              } ]
                           }, {
                              "name" : "MostRecentHpvReportWasWithinPastFiveYears",
                              "type" : "ExpressionRef"
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
                           "value" : "Immunosuppressed (K.3)",
                           "type" : "Literal"
                        }
                     }, {
                        "name" : "details",
                        "value" : {
                           "type" : "List",
                           "element" : [ {
                              "valueType" : "{urn:hl7-org:elm-types:r1}String",
                              "value" : "Colposcopy referral is recommended for immunocompromised patients of any age with cytology results of HPV-positive ASC-US or higher and for any cytology results of LSIL or worse.",
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
                           "name" : "Immunocompromised",
                           "type" : "ExpressionRef"
                        }, {
                           "name" : "MostRecentCytologyReportWasWithinPastFiveYears",
                           "libraryName" : "Rare",
                           "type" : "ExpressionRef"
                        } ]
                     }, {
                        "type" : "Equal",
                        "operand" : [ {
                           "path" : "riskTableInput",
                           "type" : "Property",
                           "source" : {
                              "name" : "MostRecentCytologyReport",
                              "libraryName" : "Rare",
                              "type" : "ExpressionRef"
                           }
                        }, {
                           "valueType" : "{urn:hl7-org:elm-types:r1}String",
                           "value" : "ASC-US",
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
                           "value" : "Cytology",
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
                              "value" : 6,
                              "unit" : "months",
                              "type" : "Quantity"
                           } ]
                        }
                     }, {
                        "name" : "group",
                        "value" : {
                           "valueType" : "{urn:hl7-org:elm-types:r1}String",
                           "value" : "Immunosuppressed (K.3)",
                           "type" : "Literal"
                        }
                     }, {
                        "name" : "details",
                        "value" : {
                           "type" : "List",
                           "element" : [ {
                              "valueType" : "{urn:hl7-org:elm-types:r1}String",
                              "value" : "Repeat cytology in 6 to 12 months when the patient is immunocompromised and is found to have cytologic ASC-US.",
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
            "name" : "MostRecentCervixRemovalProcedureDate",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "name" : "ProcedureDate",
               "libraryName" : "CCF",
               "type" : "FunctionRef",
               "operand" : [ {
                  "name" : "MostRecentProcedure",
                  "libraryName" : "C3F",
                  "type" : "FunctionRef",
                  "operand" : [ {
                     "name" : "RemovalOfCervixProcedures",
                     "libraryName" : "Dash",
                     "type" : "ExpressionRef"
                  } ]
               } ]
            }
         }, {
            "name" : "CervixRemovalWithHighGradePrecancerOrCancerReasonCode",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "type" : "Query",
               "source" : [ {
                  "alias" : "P",
                  "expression" : {
                     "name" : "RemovalOfCervixProcedures",
                     "libraryName" : "Dash",
                     "type" : "ExpressionRef"
                  }
               } ],
               "relationship" : [ ],
               "where" : {
                  "type" : "AnyTrue",
                  "source" : {
                     "type" : "Query",
                     "source" : [ {
                        "alias" : "rC",
                        "expression" : {
                           "path" : "reasonCode",
                           "scope" : "P",
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
                                    "type" : "Or",
                                    "operand" : [ {
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
                                                   "name" : "rC",
                                                   "type" : "AliasRef"
                                                } ]
                                             },
                                             "valueset" : {
                                                "name" : "Cervical Precancer Disorders",
                                                "libraryName" : "Dash",
                                                "type" : "ValueSetRef"
                                             }
                                          }, {
                                             "type" : "InValueSet",
                                             "code" : {
                                                "name" : "ToConcept",
                                                "libraryName" : "FHIRHelpers",
                                                "type" : "FunctionRef",
                                                "operand" : [ {
                                                   "name" : "rC",
                                                   "type" : "AliasRef"
                                                } ]
                                             },
                                             "valueset" : {
                                                "name" : "Diagnosis of Cervical cancer",
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
                                                "name" : "rC",
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
                                    }, {
                                       "type" : "InValueSet",
                                       "code" : {
                                          "name" : "ToConcept",
                                          "libraryName" : "FHIRHelpers",
                                          "type" : "FunctionRef",
                                          "operand" : [ {
                                             "name" : "rC",
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
                                          "name" : "rC",
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
                                       "name" : "rC",
                                       "type" : "AliasRef"
                                    } ]
                                 },
                                 "valueset" : {
                                    "name" : "AIS",
                                    "libraryName" : "Dash",
                                    "type" : "ValueSetRef"
                                 }
                              } ]
                           }, {
                              "type" : "InValueSet",
                              "code" : {
                                 "name" : "ToConcept",
                                 "libraryName" : "FHIRHelpers",
                                 "type" : "FunctionRef",
                                 "operand" : [ {
                                    "name" : "rC",
                                    "type" : "AliasRef"
                                 } ]
                              },
                              "valueset" : {
                                 "name" : "Histologic cancer",
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
            "name" : "MostRecentCervixRemovalObservationDate",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "name" : "ObservationDate",
               "libraryName" : "CCF",
               "type" : "FunctionRef",
               "operand" : [ {
                  "name" : "MostRecent",
                  "libraryName" : "C3F",
                  "type" : "FunctionRef",
                  "operand" : [ {
                     "name" : "AbsenceOfCervixObservations",
                     "libraryName" : "Dash",
                     "type" : "ExpressionRef"
                  } ]
               } ]
            }
         }, {
            "name" : "MostRecentCervixRemovalDiagnosisDate",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "name" : "Onset",
               "libraryName" : "CCF",
               "type" : "FunctionRef",
               "operand" : [ {
                  "name" : "MostRecentCondition",
                  "libraryName" : "C3F",
                  "type" : "FunctionRef",
                  "operand" : [ {
                     "name" : "AbsenceOfCervixDiagnoses",
                     "libraryName" : "Dash",
                     "type" : "ExpressionRef"
                  } ]
               } ]
            }
         }, {
            "name" : "CervixRemovalDate",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "type" : "Coalesce",
               "operand" : [ {
                  "name" : "MostRecentCervixRemovalProcedureDate",
                  "type" : "ExpressionRef"
               }, {
                  "name" : "MostRecentCervixRemovalObservationDate",
                  "type" : "ExpressionRef"
               }, {
                  "asType" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "As",
                  "operand" : {
                     "name" : "MostRecentCervixRemovalDiagnosisDate",
                     "type" : "ExpressionRef"
                  }
               } ]
            }
         }, {
            "name" : "HighGradePreCancerCervicalLesionDate",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "type" : "If",
               "condition" : {
                  "asType" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "type" : "As",
                  "operand" : {
                     "type" : "Exists",
                     "operand" : {
                        "name" : "CervicalPrecancerDisorders",
                        "libraryName" : "Dash",
                        "type" : "ExpressionRef"
                     }
                  }
               },
               "then" : {
                  "type" : "Tuple",
                  "element" : [ {
                     "name" : "date",
                     "value" : {
                        "name" : "ConditionDate",
                        "libraryName" : "CCF",
                        "type" : "FunctionRef",
                        "operand" : [ {
                           "name" : "MostRecentCondition",
                           "libraryName" : "C3F",
                           "type" : "FunctionRef",
                           "operand" : [ {
                              "name" : "CervicalPrecancerDisorders",
                              "libraryName" : "Dash",
                              "type" : "ExpressionRef"
                           } ]
                        } ]
                     }
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
            "name" : "CervicalCancerDiagnosisDate",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "type" : "If",
               "condition" : {
                  "asType" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "type" : "As",
                  "operand" : {
                     "type" : "Exists",
                     "operand" : {
                        "name" : "CervicalCancerDiagnoses",
                        "libraryName" : "Dash",
                        "type" : "ExpressionRef"
                     }
                  }
               },
               "then" : {
                  "type" : "Tuple",
                  "element" : [ {
                     "name" : "date",
                     "value" : {
                        "name" : "ConditionDate",
                        "libraryName" : "CCF",
                        "type" : "FunctionRef",
                        "operand" : [ {
                           "name" : "MostRecentCondition",
                           "libraryName" : "C3F",
                           "type" : "FunctionRef",
                           "operand" : [ {
                              "name" : "CervicalCancerDiagnoses",
                              "libraryName" : "Dash",
                              "type" : "ExpressionRef"
                           } ]
                        } ]
                     }
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
            "name" : "HighGradeOrCancerHistologyResultsDate",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "type" : "If",
               "condition" : {
                  "asType" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "type" : "As",
                  "operand" : {
                     "type" : "Exists",
                     "operand" : {
                        "name" : "HighGradeOrCancerHistologyResults",
                        "libraryName" : "Dash",
                        "type" : "ExpressionRef"
                     }
                  }
               },
               "then" : {
                  "type" : "Tuple",
                  "element" : [ {
                     "name" : "date",
                     "value" : {
                        "name" : "DiagnosticReportDate",
                        "libraryName" : "CCF",
                        "type" : "FunctionRef",
                        "operand" : [ {
                           "name" : "MostRecentDiagnosticReport",
                           "libraryName" : "CCF",
                           "type" : "FunctionRef",
                           "operand" : [ {
                              "name" : "HighGradeOrCancerHistologyResults",
                              "libraryName" : "Dash",
                              "type" : "ExpressionRef"
                           } ]
                        } ]
                     }
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
            "name" : "CauseForHysterectomyDates",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "type" : "Except",
               "operand" : [ {
                  "type" : "List",
                  "element" : [ {
                     "name" : "HighGradePreCancerCervicalLesionDate",
                     "type" : "ExpressionRef"
                  }, {
                     "name" : "CervicalCancerDiagnosisDate",
                     "type" : "ExpressionRef"
                  }, {
                     "name" : "HighGradeOrCancerHistologyResultsDate",
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
                        "type" : "As",
                        "operand" : {
                           "name" : "X",
                           "type" : "AliasRef"
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
               } ]
            }
         }, {
            "name" : "SortedCauseForHysterectomyDates",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "type" : "Query",
               "source" : [ {
                  "alias" : "D",
                  "expression" : {
                     "name" : "CauseForHysterectomyDates",
                     "type" : "ExpressionRef"
                  }
               } ],
               "relationship" : [ ],
               "return" : {
                  "expression" : {
                     "name" : "D",
                     "type" : "AliasRef"
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
            "name" : "MostRecentCauseForHysterectomyDate",
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
                           "name" : "SortedCauseForHysterectomyDates",
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
                  "path" : "date",
                  "type" : "Property",
                  "source" : {
                     "type" : "Indexer",
                     "operand" : [ {
                        "name" : "SortedCauseForHysterectomyDates",
                        "type" : "ExpressionRef"
                     }, {
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "0",
                        "type" : "Literal"
                     } ]
                  }
               },
               "else" : {
                  "asType" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "As",
                  "operand" : {
                     "type" : "Null"
                  }
               }
            }
         }, {
            "name" : "HysterectomyPerformedForTreatment",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "type" : "Or",
               "operand" : [ {
                  "type" : "And",
                  "operand" : [ {
                     "type" : "In",
                     "operand" : [ {
                        "name" : "CervixRemovalDate",
                        "type" : "ExpressionRef"
                     }, {
                        "lowClosed" : false,
                        "highClosed" : true,
                        "type" : "Interval",
                        "low" : {
                           "name" : "MostRecentCauseForHysterectomyDate",
                           "type" : "ExpressionRef"
                        },
                        "high" : {
                           "type" : "Add",
                           "operand" : [ {
                              "name" : "MostRecentCauseForHysterectomyDate",
                              "type" : "ExpressionRef"
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
                           "name" : "MostRecentCauseForHysterectomyDate",
                           "type" : "ExpressionRef"
                        }
                     }
                  } ]
               }, {
                  "type" : "Exists",
                  "operand" : {
                     "name" : "CervixRemovalWithHighGradePrecancerOrCancerReasonCode",
                     "type" : "ExpressionRef"
                  }
               } ]
            }
         }, {
            "name" : "NegativeSurveillanceTestsAfterHysterectomy",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "type" : "Query",
               "source" : [ {
                  "alias" : "T",
                  "expression" : {
                     "name" : "SortedNegativeSurveillanceTests",
                     "libraryName" : "Rare",
                     "type" : "ExpressionRef"
                  }
               } ],
               "relationship" : [ ],
               "where" : {
                  "type" : "GreaterOrEqual",
                  "operand" : [ {
                     "path" : "date",
                     "scope" : "T",
                     "type" : "Property"
                  }, {
                     "name" : "CervixRemovalDate",
                     "type" : "ExpressionRef"
                  } ]
               }
            }
         }, {
            "name" : "InitialIntensiveSurveillancePeriodPostHysterectomy",
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
                           "name" : "NegativeSurveillanceTestsAfterHysterectomy",
                           "type" : "ExpressionRef"
                        }
                     }, {
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "3",
                        "type" : "Literal"
                     } ]
                  }
               },
               "then" : {
                  "type" : "In",
                  "operand" : [ {
                     "path" : "date",
                     "type" : "Property",
                     "source" : {
                        "type" : "Indexer",
                        "operand" : [ {
                           "name" : "NegativeSurveillanceTestsAfterHysterectomy",
                           "type" : "ExpressionRef"
                        }, {
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "2",
                           "type" : "Literal"
                        } ]
                     }
                  }, {
                     "lowClosed" : false,
                     "highClosed" : false,
                     "type" : "Interval",
                     "low" : {
                        "name" : "CervixRemovalDate",
                        "type" : "ExpressionRef"
                     },
                     "high" : {
                        "type" : "Add",
                        "operand" : [ {
                           "name" : "CervixRemovalDate",
                           "type" : "ExpressionRef"
                        }, {
                           "value" : 5,
                           "unit" : "years",
                           "type" : "Quantity"
                        } ]
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
            "name" : "DateK41",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "type" : "If",
               "condition" : {
                  "asType" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "type" : "As",
                  "operand" : {
                     "type" : "Equal",
                     "operand" : [ {
                        "type" : "Count",
                        "source" : {
                           "name" : "NegativeSurveillanceTestsAfterHysterectomy",
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
                  "type" : "Add",
                  "operand" : [ {
                     "name" : "CervixRemovalDate",
                     "type" : "ExpressionRef"
                  }, {
                     "value" : 1,
                     "unit" : "year",
                     "type" : "Quantity"
                  } ]
               },
               "else" : {
                  "type" : "Add",
                  "operand" : [ {
                     "path" : "date",
                     "type" : "Property",
                     "source" : {
                        "type" : "Last",
                        "source" : {
                           "name" : "NegativeSurveillanceTestsAfterHysterectomy",
                           "type" : "ExpressionRef"
                        }
                     }
                  }, {
                     "value" : 1,
                     "unit" : "year",
                     "type" : "Quantity"
                  } ]
               }
            }
         }, {
            "name" : "RecommendationForManagingPatientsAfterHysterectomy",
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
                           "type" : "GreaterOrEqual",
                           "operand" : [ {
                              "name" : "CervixRemovalDate",
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
                        }, {
                           "name" : "HysterectomyPerformedForTreatment",
                           "type" : "ExpressionRef"
                        } ]
                     }, {
                        "type" : "Not",
                        "operand" : {
                           "name" : "InitialIntensiveSurveillancePeriodPostHysterectomy",
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
                           "value" : "Primary HPV or Cotest",
                           "type" : "Literal"
                        }
                     }, {
                        "name" : "date",
                        "value" : {
                           "type" : "ToDate",
                           "operand" : {
                              "name" : "DateK41",
                              "type" : "ExpressionRef"
                           }
                        }
                     }, {
                        "name" : "group",
                        "value" : {
                           "valueType" : "{urn:hl7-org:elm-types:r1}String",
                           "value" : "Hysterectomy (K.4)",
                           "type" : "Literal"
                        }
                     }, {
                        "name" : "details",
                        "value" : {
                           "type" : "List",
                           "element" : [ {
                              "valueType" : "{urn:hl7-org:elm-types:r1}String",
                              "value" : "Three annual hrHPV-based tests with cotest or primary hrHPV test are recommended after a hysterectomy is performed for treatment of a high-grade precancer or cancer.",
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
                              "name" : "CervixRemovalDate",
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
                        }, {
                           "name" : "HysterectomyPerformedForTreatment",
                           "type" : "ExpressionRef"
                        } ]
                     }, {
                        "name" : "InitialIntensiveSurveillancePeriodPostHysterectomy",
                        "type" : "ExpressionRef"
                     } ]
                  },
                  "then" : {
                     "type" : "Tuple",
                     "element" : [ {
                        "name" : "short",
                        "value" : {
                           "valueType" : "{urn:hl7-org:elm-types:r1}String",
                           "value" : "Primary HPV or Cotest",
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
                              "value" : 3,
                              "unit" : "years",
                              "type" : "Quantity"
                           } ]
                        }
                     }, {
                        "name" : "group",
                        "value" : {
                           "valueType" : "{urn:hl7-org:elm-types:r1}String",
                           "value" : "Hysterectomy (K.4)",
                           "type" : "Literal"
                        }
                     }, {
                        "name" : "details",
                        "value" : {
                           "type" : "List",
                           "element" : [ {
                              "valueType" : "{urn:hl7-org:elm-types:r1}String",
                              "value" : "HPV-based testing with cotest or primary hrHPV test is recommended every 3 years after a histologic HSIL (CIN2 or CIN3) or AIS results for 25 years, regardless of whether the patient has had a hysterectomy either for treatment or at any point during the surveillance period (CIII).",
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
            "name" : "Over65RecommendationText",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "valueType" : "{urn:hl7-org:elm-types:r1}String",
               "value" : "If patients over age 65 years undergo HPV testing, cotesting, or cytology, management according to guidelines for patients aged 25 to 65 years is recommended (CII). If surveillance testing is recommended for either a history of abnormal screening results or treatment for precancer, discontinuing surveillance is unacceptable if the patient is in reasonably good health and testing is feasible (DII). Discontinuation of surveillance is recommended for patients with a limited life expectancy (EIII). This population will be managed based on logic defined for rare abnormalities and common abnormalities.",
               "type" : "Literal"
            }
         }, {
            "name" : "Recommendation",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "type" : "Coalesce",
               "operand" : [ {
                  "name" : "RecommendationForPatientsYoungerThan25",
                  "type" : "ExpressionRef"
               }, {
                  "name" : "RecommendationForPregnantPatients",
                  "type" : "ExpressionRef"
               }, {
                  "name" : "RecommendationForImmunosuppressedPatients",
                  "type" : "ExpressionRef"
               }, {
                  "name" : "RecommendationForManagingPatientsAfterHysterectomy",
                  "type" : "ExpressionRef"
               } ]
            }
         }, {
            "name" : "WhichPopulationMadeTheRecommendation",
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
                           "name" : "RecommendationForPatientsYoungerThan25",
                           "type" : "ExpressionRef"
                        }
                     }
                  },
                  "then" : {
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "5",
                     "type" : "Literal"
                  }
               }, {
                  "when" : {
                     "type" : "Not",
                     "operand" : {
                        "type" : "IsNull",
                        "operand" : {
                           "name" : "RecommendationForPregnantPatients",
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
                           "name" : "RecommendationForImmunosuppressedPatients",
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
                           "name" : "RecommendationForManagingPatientsAfterHysterectomy",
                           "type" : "ExpressionRef"
                        }
                     }
                  },
                  "then" : {
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2",
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

