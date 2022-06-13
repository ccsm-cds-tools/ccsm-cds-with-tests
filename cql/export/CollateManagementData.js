export const CollateManagementData = {
   "library" : {
      "annotation" : [ {
         "translatorOptions" : "",
         "type" : "CqlToElmInfo"
      } ],
      "identifier" : {
         "id" : "CollateManagementData",
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
            "localIdentifier" : "Dash",
            "path" : "DisplayCervicalCancerMedicalHistory",
            "version" : "1.0.0"
         }, {
            "localIdentifier" : "Common",
            "path" : "CCSMCommonFunctions",
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
            "name" : "SNOMED-CT",
            "id" : "http://snomed.info/sct",
            "accessLevel" : "Public"
         } ]
      },
      "valueSets" : {
         "def" : [ {
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
            "name" : "HpvTestingInterval",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "type" : "Add",
               "operand" : [ {
                  "value" : 5,
                  "unit" : "years",
                  "type" : "Quantity"
               }, {
                  "name" : "HpvTestingGracePeriod",
                  "type" : "ParameterRef"
               } ]
            }
         }, {
            "name" : "HPVTestingIntervalLookBack",
            "context" : "Patient",
            "accessLevel" : "Public",
            "type" : "FunctionDef",
            "expression" : {
               "lowClosed" : true,
               "highClosed" : false,
               "type" : "Interval",
               "low" : {
                  "type" : "Subtract",
                  "operand" : [ {
                     "name" : "LookBackDate",
                     "type" : "OperandRef"
                  }, {
                     "name" : "HpvTestingInterval",
                     "type" : "ExpressionRef"
                  } ]
               },
               "high" : {
                  "name" : "LookBackDate",
                  "type" : "OperandRef"
               }
            },
            "operand" : [ {
               "name" : "LookBackDate",
               "operandTypeSpecifier" : {
                  "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "NamedTypeSpecifier"
               }
            } ]
         }, {
            "name" : "GetEarlierDate",
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
                           "name" : "d1",
                           "type" : "OperandRef"
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
                              "name" : "d2",
                              "type" : "OperandRef"
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
                           "type" : "SameOrBefore",
                           "operand" : [ {
                              "name" : "d1",
                              "type" : "OperandRef"
                           }, {
                              "name" : "d2",
                              "type" : "OperandRef"
                           } ]
                        }
                     },
                     "then" : {
                        "name" : "d1",
                        "type" : "OperandRef"
                     },
                     "else" : {
                        "name" : "d2",
                        "type" : "OperandRef"
                     }
                  },
                  "else" : {
                     "name" : "d1",
                     "type" : "OperandRef"
                  }
               },
               "else" : {
                  "type" : "If",
                  "condition" : {
                     "asType" : "{urn:hl7-org:elm-types:r1}Boolean",
                     "type" : "As",
                     "operand" : {
                        "type" : "Not",
                        "operand" : {
                           "type" : "IsNull",
                           "operand" : {
                              "name" : "d2",
                              "type" : "OperandRef"
                           }
                        }
                     }
                  },
                  "then" : {
                     "name" : "d2",
                     "type" : "OperandRef"
                  },
                  "else" : {
                     "asType" : "{urn:hl7-org:elm-types:r1}DateTime",
                     "type" : "As",
                     "operand" : {
                        "type" : "Null"
                     }
                  }
               }
            },
            "operand" : [ {
               "name" : "d1",
               "operandTypeSpecifier" : {
                  "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "NamedTypeSpecifier"
               }
            }, {
               "name" : "d2",
               "operandTypeSpecifier" : {
                  "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "NamedTypeSpecifier"
               }
            } ]
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
                                    "libraryName" : "Dash",
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
                              "libraryName" : "Dash",
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
                              "libraryName" : "Dash",
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
                                 "libraryName" : "Dash",
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
                              "libraryName" : "Dash",
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
                              "libraryName" : "Dash",
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
                              "libraryName" : "Dash",
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
            "name" : "HpvReports",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "name" : "HpvDiagnosticReports",
               "libraryName" : "Dash",
               "type" : "ExpressionRef"
            }
         }, {
            "name" : "SortedHpvReports",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "type" : "Query",
               "source" : [ {
                  "alias" : "H",
                  "expression" : {
                     "name" : "HpvReports",
                     "type" : "ExpressionRef"
                  }
               } ],
               "relationship" : [ ],
               "return" : {
                  "expression" : {
                     "type" : "Tuple",
                     "element" : [ {
                        "name" : "riskTableInput",
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
                              } ]
                           } ]
                        }
                     }, {
                        "name" : "allConclusions",
                        "value" : {
                           "path" : "conclusionCode",
                           "scope" : "H",
                           "type" : "Property"
                        }
                     }, {
                        "name" : "date",
                        "value" : {
                           "name" : "DiagnosticReportDate",
                           "libraryName" : "Common",
                           "type" : "FunctionRef",
                           "operand" : [ {
                              "name" : "H",
                              "type" : "AliasRef"
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
            "name" : "MostRecentHpvReport",
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
                           "name" : "SortedHpvReports",
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
                  "type" : "If",
                  "condition" : {
                     "asType" : "{urn:hl7-org:elm-types:r1}Boolean",
                     "type" : "As",
                     "operand" : {
                        "type" : "In",
                        "operand" : [ {
                           "path" : "date",
                           "type" : "Property",
                           "source" : {
                              "type" : "Indexer",
                              "operand" : [ {
                                 "name" : "SortedHpvReports",
                                 "type" : "ExpressionRef"
                              }, {
                                 "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                                 "value" : "0",
                                 "type" : "Literal"
                              } ]
                           }
                        }, {
                           "name" : "HPVTestingIntervalLookBack",
                           "type" : "FunctionRef",
                           "operand" : [ {
                              "type" : "ToDateTime",
                              "operand" : {
                                 "type" : "Today"
                              }
                           } ]
                        } ]
                     }
                  },
                  "then" : {
                     "type" : "Indexer",
                     "operand" : [ {
                        "name" : "SortedHpvReports",
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
            "name" : "SecondMostRecentHpvReport",
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
                           "name" : "SortedHpvReports",
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
                  "type" : "If",
                  "condition" : {
                     "asType" : "{urn:hl7-org:elm-types:r1}Boolean",
                     "type" : "As",
                     "operand" : {
                        "type" : "In",
                        "operand" : [ {
                           "path" : "date",
                           "type" : "Property",
                           "source" : {
                              "type" : "Indexer",
                              "operand" : [ {
                                 "name" : "SortedHpvReports",
                                 "type" : "ExpressionRef"
                              }, {
                                 "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                                 "value" : "1",
                                 "type" : "Literal"
                              } ]
                           }
                        }, {
                           "name" : "HPVTestingIntervalLookBack",
                           "type" : "FunctionRef",
                           "operand" : [ {
                              "path" : "date",
                              "type" : "Property",
                              "source" : {
                                 "name" : "MostRecentHpvReport",
                                 "type" : "ExpressionRef"
                              }
                           } ]
                        } ]
                     }
                  },
                  "then" : {
                     "type" : "Indexer",
                     "operand" : [ {
                        "name" : "SortedHpvReports",
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
            "name" : "ThirdMostRecentHpvReport",
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
                           "name" : "SortedHpvReports",
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
                  "type" : "If",
                  "condition" : {
                     "asType" : "{urn:hl7-org:elm-types:r1}Boolean",
                     "type" : "As",
                     "operand" : {
                        "type" : "In",
                        "operand" : [ {
                           "path" : "date",
                           "type" : "Property",
                           "source" : {
                              "type" : "Indexer",
                              "operand" : [ {
                                 "name" : "SortedHpvReports",
                                 "type" : "ExpressionRef"
                              }, {
                                 "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                                 "value" : "2",
                                 "type" : "Literal"
                              } ]
                           }
                        }, {
                           "name" : "HPVTestingIntervalLookBack",
                           "type" : "FunctionRef",
                           "operand" : [ {
                              "path" : "date",
                              "type" : "Property",
                              "source" : {
                                 "name" : "SecondMostRecentHpvReport",
                                 "type" : "ExpressionRef"
                              }
                           } ]
                        } ]
                     }
                  },
                  "then" : {
                     "type" : "Indexer",
                     "operand" : [ {
                        "name" : "SortedHpvReports",
                        "type" : "ExpressionRef"
                     }, {
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "2",
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
            "name" : "FourthMostRecentHpvReport",
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
                           "name" : "SortedHpvReports",
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
                  "type" : "If",
                  "condition" : {
                     "asType" : "{urn:hl7-org:elm-types:r1}Boolean",
                     "type" : "As",
                     "operand" : {
                        "type" : "In",
                        "operand" : [ {
                           "path" : "date",
                           "type" : "Property",
                           "source" : {
                              "type" : "Indexer",
                              "operand" : [ {
                                 "name" : "SortedHpvReports",
                                 "type" : "ExpressionRef"
                              }, {
                                 "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                                 "value" : "3",
                                 "type" : "Literal"
                              } ]
                           }
                        }, {
                           "name" : "HPVTestingIntervalLookBack",
                           "type" : "FunctionRef",
                           "operand" : [ {
                              "path" : "date",
                              "type" : "Property",
                              "source" : {
                                 "name" : "ThirdMostRecentHpvReport",
                                 "type" : "ExpressionRef"
                              }
                           } ]
                        } ]
                     }
                  },
                  "then" : {
                     "type" : "Indexer",
                     "operand" : [ {
                        "name" : "SortedHpvReports",
                        "type" : "ExpressionRef"
                     }, {
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "3",
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
            "name" : "MostRecentHpvResult",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "path" : "riskTableInput",
               "type" : "Property",
               "source" : {
                  "name" : "MostRecentHpvReport",
                  "type" : "ExpressionRef"
               }
            }
         }, {
            "name" : "SecondMostRecentHpvResult",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "path" : "riskTableInput",
               "type" : "Property",
               "source" : {
                  "name" : "SecondMostRecentHpvReport",
                  "type" : "ExpressionRef"
               }
            }
         }, {
            "name" : "ThirdMostRecentHpvResult",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "path" : "riskTableInput",
               "type" : "Property",
               "source" : {
                  "name" : "ThirdMostRecentHpvReport",
                  "type" : "ExpressionRef"
               }
            }
         }, {
            "name" : "FourthMostRecentHpvResult",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "path" : "riskTableInput",
               "type" : "Property",
               "source" : {
                  "name" : "FourthMostRecentHpvReport",
                  "type" : "ExpressionRef"
               }
            }
         }, {
            "name" : "CervicalCytologyReports",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "name" : "CervicalCytologyReports",
               "libraryName" : "Dash",
               "type" : "ExpressionRef"
            }
         }, {
            "name" : "SortedCytologyReports",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "type" : "Query",
               "source" : [ {
                  "alias" : "C",
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
                        "name" : "riskTableInput",
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
                              } ]
                           } ]
                        }
                     }, {
                        "name" : "allConclusions",
                        "value" : {
                           "path" : "conclusionCode",
                           "scope" : "C",
                           "type" : "Property"
                        }
                     }, {
                        "name" : "date",
                        "value" : {
                           "name" : "DiagnosticReportDate",
                           "libraryName" : "Common",
                           "type" : "FunctionRef",
                           "operand" : [ {
                              "name" : "C",
                              "type" : "AliasRef"
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
            "name" : "MostRecentCytologyCotest",
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
                           "scope" : "S",
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
                                    "name" : "MostRecentHpvReport",
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
                                    "name" : "MostRecentHpvReport",
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
                                 "name" : "MostRecentHpvReport",
                                 "type" : "ExpressionRef"
                              }
                           }
                        }
                     } ]
                  }
               } ]
            }
         }, {
            "name" : "SecondMostRecentCytologyCotest",
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
                           "scope" : "S",
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
                                    "name" : "SecondMostRecentHpvReport",
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
                                    "name" : "SecondMostRecentHpvReport",
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
                                 "name" : "SecondMostRecentHpvReport",
                                 "type" : "ExpressionRef"
                              }
                           }
                        }
                     } ]
                  }
               } ]
            }
         }, {
            "name" : "ThirdMostRecentCytologyCotest",
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
                           "scope" : "S",
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
                                    "name" : "ThirdMostRecentHpvReport",
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
                                    "name" : "ThirdMostRecentHpvReport",
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
                                 "name" : "ThirdMostRecentHpvReport",
                                 "type" : "ExpressionRef"
                              }
                           }
                        }
                     } ]
                  }
               } ]
            }
         }, {
            "name" : "FourthMostRecentCytologyCotest",
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
                           "scope" : "S",
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
                                    "name" : "FourthMostRecentHpvReport",
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
                                    "name" : "FourthMostRecentHpvReport",
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
                                 "name" : "FourthMostRecentHpvReport",
                                 "type" : "ExpressionRef"
                              }
                           }
                        }
                     } ]
                  }
               } ]
            }
         }, {
            "name" : "MostRecentCytologyCotestResult",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "type" : "If",
               "condition" : {
                  "asType" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "type" : "As",
                  "operand" : {
                     "type" : "IsNull",
                     "operand" : {
                        "name" : "MostRecentHpvReport",
                        "type" : "ExpressionRef"
                     }
                  }
               },
               "then" : {
                  "asType" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "As",
                  "operand" : {
                     "type" : "Null"
                  }
               },
               "else" : {
                  "type" : "If",
                  "condition" : {
                     "asType" : "{urn:hl7-org:elm-types:r1}Boolean",
                     "type" : "As",
                     "operand" : {
                        "type" : "IsNull",
                        "operand" : {
                           "name" : "MostRecentCytologyCotest",
                           "type" : "ExpressionRef"
                        }
                     }
                  },
                  "then" : {
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "ALL",
                     "type" : "Literal"
                  },
                  "else" : {
                     "path" : "riskTableInput",
                     "type" : "Property",
                     "source" : {
                        "name" : "MostRecentCytologyCotest",
                        "type" : "ExpressionRef"
                     }
                  }
               }
            }
         }, {
            "name" : "SecondMostRecentCytologyCotestResult",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "type" : "If",
               "condition" : {
                  "asType" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "type" : "As",
                  "operand" : {
                     "type" : "IsNull",
                     "operand" : {
                        "name" : "SecondMostRecentHpvReport",
                        "type" : "ExpressionRef"
                     }
                  }
               },
               "then" : {
                  "asType" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "As",
                  "operand" : {
                     "type" : "Null"
                  }
               },
               "else" : {
                  "type" : "If",
                  "condition" : {
                     "asType" : "{urn:hl7-org:elm-types:r1}Boolean",
                     "type" : "As",
                     "operand" : {
                        "type" : "IsNull",
                        "operand" : {
                           "name" : "SecondMostRecentCytologyCotest",
                           "type" : "ExpressionRef"
                        }
                     }
                  },
                  "then" : {
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "ALL",
                     "type" : "Literal"
                  },
                  "else" : {
                     "path" : "riskTableInput",
                     "type" : "Property",
                     "source" : {
                        "name" : "SecondMostRecentCytologyCotest",
                        "type" : "ExpressionRef"
                     }
                  }
               }
            }
         }, {
            "name" : "ThirdMostRecentCytologyCotestResult",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "type" : "If",
               "condition" : {
                  "asType" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "type" : "As",
                  "operand" : {
                     "type" : "IsNull",
                     "operand" : {
                        "name" : "ThirdMostRecentHpvReport",
                        "type" : "ExpressionRef"
                     }
                  }
               },
               "then" : {
                  "asType" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "As",
                  "operand" : {
                     "type" : "Null"
                  }
               },
               "else" : {
                  "type" : "If",
                  "condition" : {
                     "asType" : "{urn:hl7-org:elm-types:r1}Boolean",
                     "type" : "As",
                     "operand" : {
                        "type" : "IsNull",
                        "operand" : {
                           "name" : "ThirdMostRecentCytologyCotest",
                           "type" : "ExpressionRef"
                        }
                     }
                  },
                  "then" : {
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "ALL",
                     "type" : "Literal"
                  },
                  "else" : {
                     "path" : "riskTableInput",
                     "type" : "Property",
                     "source" : {
                        "name" : "ThirdMostRecentCytologyCotest",
                        "type" : "ExpressionRef"
                     }
                  }
               }
            }
         }, {
            "name" : "FourthMostRecentCytologyCotestResult",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "type" : "If",
               "condition" : {
                  "asType" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "type" : "As",
                  "operand" : {
                     "type" : "IsNull",
                     "operand" : {
                        "name" : "FourthMostRecentHpvReport",
                        "type" : "ExpressionRef"
                     }
                  }
               },
               "then" : {
                  "asType" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "As",
                  "operand" : {
                     "type" : "Null"
                  }
               },
               "else" : {
                  "type" : "If",
                  "condition" : {
                     "asType" : "{urn:hl7-org:elm-types:r1}Boolean",
                     "type" : "As",
                     "operand" : {
                        "type" : "IsNull",
                        "operand" : {
                           "name" : "FourthMostRecentCytologyCotest",
                           "type" : "ExpressionRef"
                        }
                     }
                  },
                  "then" : {
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "ALL",
                     "type" : "Literal"
                  },
                  "else" : {
                     "path" : "riskTableInput",
                     "type" : "Property",
                     "source" : {
                        "name" : "FourthMostRecentCytologyCotest",
                        "type" : "ExpressionRef"
                     }
                  }
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
            "name" : "BiopsyReports",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "name" : "LookBack",
               "libraryName" : "Common",
               "type" : "FunctionRef",
               "operand" : [ {
                  "name" : "HistologyDiagnosticReports",
                  "libraryName" : "Dash",
                  "type" : "ExpressionRef"
               }, {
                  "name" : "BiopsyLookbackPeriod",
                  "type" : "ParameterRef"
               } ]
            }
         }, {
            "name" : "SortedBiopsyReports",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "type" : "Query",
               "source" : [ {
                  "alias" : "B",
                  "expression" : {
                     "name" : "BiopsyReports",
                     "type" : "ExpressionRef"
                  }
               } ],
               "relationship" : [ ],
               "return" : {
                  "expression" : {
                     "type" : "Tuple",
                     "element" : [ {
                        "name" : "riskTableInput",
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
                                       "scope" : "B",
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
                        "name" : "allConclusions",
                        "value" : {
                           "path" : "conclusionCode",
                           "scope" : "B",
                           "type" : "Property"
                        }
                     }, {
                        "name" : "date",
                        "value" : {
                           "name" : "DiagnosticReportDate",
                           "libraryName" : "Common",
                           "type" : "FunctionRef",
                           "operand" : [ {
                              "name" : "B",
                              "type" : "AliasRef"
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
            "name" : "MostRecentBiopsyReport",
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
                     "name" : "SortedBiopsyReports",
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
            "name" : "MostRecentBiopsyResult",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "path" : "riskTableInput",
               "type" : "Property",
               "source" : {
                  "name" : "MostRecentBiopsyReport",
                  "type" : "ExpressionRef"
               }
            }
         }, {
            "name" : "MostRecentBiopsyReferralPeriod",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
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
                        "type" : "ExpressionRef"
                     }
                  }, {
                     "name" : "BiopsyReferralPeriod",
                     "type" : "ParameterRef"
                  } ]
               },
               "high" : {
                  "path" : "date",
                  "type" : "Property",
                  "source" : {
                     "name" : "MostRecentBiopsyReport",
                     "type" : "ExpressionRef"
                  }
               }
            }
         }, {
            "name" : "ReferringHpvResult",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "type" : "If",
               "condition" : {
                  "asType" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "type" : "As",
                  "operand" : {
                     "type" : "In",
                     "operand" : [ {
                        "path" : "date",
                        "type" : "Property",
                        "source" : {
                           "name" : "MostRecentHpvReport",
                           "type" : "ExpressionRef"
                        }
                     }, {
                        "name" : "MostRecentBiopsyReferralPeriod",
                        "type" : "ExpressionRef"
                     } ]
                  }
               },
               "then" : {
                  "name" : "MostRecentHpvResult",
                  "type" : "ExpressionRef"
               },
               "else" : {
                  "type" : "If",
                  "condition" : {
                     "asType" : "{urn:hl7-org:elm-types:r1}Boolean",
                     "type" : "As",
                     "operand" : {
                        "type" : "In",
                        "operand" : [ {
                           "path" : "date",
                           "type" : "Property",
                           "source" : {
                              "name" : "SecondMostRecentHpvReport",
                              "type" : "ExpressionRef"
                           }
                        }, {
                           "name" : "MostRecentBiopsyReferralPeriod",
                           "type" : "ExpressionRef"
                        } ]
                     }
                  },
                  "then" : {
                     "name" : "SecondMostRecentHpvResult",
                     "type" : "ExpressionRef"
                  },
                  "else" : {
                     "type" : "If",
                     "condition" : {
                        "asType" : "{urn:hl7-org:elm-types:r1}Boolean",
                        "type" : "As",
                        "operand" : {
                           "type" : "In",
                           "operand" : [ {
                              "path" : "date",
                              "type" : "Property",
                              "source" : {
                                 "name" : "ThirdMostRecentHpvReport",
                                 "type" : "ExpressionRef"
                              }
                           }, {
                              "name" : "MostRecentBiopsyReferralPeriod",
                              "type" : "ExpressionRef"
                           } ]
                        }
                     },
                     "then" : {
                        "name" : "ThirdMostRecentHpvResult",
                        "type" : "ExpressionRef"
                     },
                     "else" : {
                        "type" : "If",
                        "condition" : {
                           "asType" : "{urn:hl7-org:elm-types:r1}Boolean",
                           "type" : "As",
                           "operand" : {
                              "type" : "In",
                              "operand" : [ {
                                 "path" : "date",
                                 "type" : "Property",
                                 "source" : {
                                    "name" : "FourthMostRecentHpvReport",
                                    "type" : "ExpressionRef"
                                 }
                              }, {
                                 "name" : "MostRecentBiopsyReferralPeriod",
                                 "type" : "ExpressionRef"
                              } ]
                           }
                        },
                        "then" : {
                           "name" : "FourthMostRecentHpvResult",
                           "type" : "ExpressionRef"
                        },
                        "else" : {
                           "valueType" : "{urn:hl7-org:elm-types:r1}String",
                           "value" : "ALL",
                           "type" : "Literal"
                        }
                     }
                  }
               }
            }
         }, {
            "name" : "MostRecentCytologyBeforeBiopsy",
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
                        "type" : "ExpressionRef"
                     }
                  } ],
                  "relationship" : [ ],
                  "where" : {
                     "type" : "In",
                     "operand" : [ {
                        "path" : "date",
                        "scope" : "S",
                        "type" : "Property"
                     }, {
                        "name" : "MostRecentBiopsyReferralPeriod",
                        "type" : "ExpressionRef"
                     } ]
                  }
               } ]
            }
         }, {
            "name" : "MostRecentCytologyResultBeforeBiopsy",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "path" : "riskTableInput",
               "type" : "Property",
               "source" : {
                  "name" : "MostRecentCytologyBeforeBiopsy",
                  "type" : "ExpressionRef"
               }
            }
         }, {
            "name" : "ReferringCytologyResult",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "type" : "If",
               "condition" : {
                  "asType" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "type" : "As",
                  "operand" : {
                     "type" : "In",
                     "operand" : [ {
                        "path" : "date",
                        "type" : "Property",
                        "source" : {
                           "name" : "MostRecentCytologyCotest",
                           "type" : "ExpressionRef"
                        }
                     }, {
                        "name" : "MostRecentBiopsyReferralPeriod",
                        "type" : "ExpressionRef"
                     } ]
                  }
               },
               "then" : {
                  "name" : "MostRecentCytologyCotestResult",
                  "type" : "ExpressionRef"
               },
               "else" : {
                  "type" : "If",
                  "condition" : {
                     "asType" : "{urn:hl7-org:elm-types:r1}Boolean",
                     "type" : "As",
                     "operand" : {
                        "type" : "In",
                        "operand" : [ {
                           "path" : "date",
                           "type" : "Property",
                           "source" : {
                              "name" : "SecondMostRecentCytologyCotest",
                              "type" : "ExpressionRef"
                           }
                        }, {
                           "name" : "MostRecentBiopsyReferralPeriod",
                           "type" : "ExpressionRef"
                        } ]
                     }
                  },
                  "then" : {
                     "name" : "SecondMostRecentCytologyCotestResult",
                     "type" : "ExpressionRef"
                  },
                  "else" : {
                     "type" : "If",
                     "condition" : {
                        "asType" : "{urn:hl7-org:elm-types:r1}Boolean",
                        "type" : "As",
                        "operand" : {
                           "type" : "In",
                           "operand" : [ {
                              "path" : "date",
                              "type" : "Property",
                              "source" : {
                                 "name" : "ThirdMostRecentCytologyCotest",
                                 "type" : "ExpressionRef"
                              }
                           }, {
                              "name" : "MostRecentBiopsyReferralPeriod",
                              "type" : "ExpressionRef"
                           } ]
                        }
                     },
                     "then" : {
                        "name" : "ThirdMostRecentCytologyCotestResult",
                        "type" : "ExpressionRef"
                     },
                     "else" : {
                        "type" : "If",
                        "condition" : {
                           "asType" : "{urn:hl7-org:elm-types:r1}Boolean",
                           "type" : "As",
                           "operand" : {
                              "type" : "In",
                              "operand" : [ {
                                 "path" : "date",
                                 "type" : "Property",
                                 "source" : {
                                    "name" : "FourthMostRecentCytologyCotest",
                                    "type" : "ExpressionRef"
                                 }
                              }, {
                                 "name" : "MostRecentBiopsyReferralPeriod",
                                 "type" : "ExpressionRef"
                              } ]
                           }
                        },
                        "then" : {
                           "name" : "FourthMostRecentCytologyCotestResult",
                           "type" : "ExpressionRef"
                        },
                        "else" : {
                           "type" : "If",
                           "condition" : {
                              "asType" : "{urn:hl7-org:elm-types:r1}Boolean",
                              "type" : "As",
                              "operand" : {
                                 "type" : "Not",
                                 "operand" : {
                                    "type" : "IsNull",
                                    "operand" : {
                                       "name" : "MostRecentCytologyBeforeBiopsy",
                                       "type" : "ExpressionRef"
                                    }
                                 }
                              }
                           },
                           "then" : {
                              "name" : "MostRecentCytologyResultBeforeBiopsy",
                              "type" : "ExpressionRef"
                           },
                           "else" : {
                              "valueType" : "{urn:hl7-org:elm-types:r1}String",
                              "value" : "ALL",
                              "type" : "Literal"
                           }
                        }
                     }
                  }
               }
            }
         }, {
            "name" : "MostRecentHpvResultPostBiopsy",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "type" : "If",
               "condition" : {
                  "asType" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "type" : "As",
                  "operand" : {
                     "type" : "After",
                     "operand" : [ {
                        "path" : "date",
                        "type" : "Property",
                        "source" : {
                           "name" : "MostRecentHpvReport",
                           "type" : "ExpressionRef"
                        }
                     }, {
                        "path" : "date",
                        "type" : "Property",
                        "source" : {
                           "name" : "MostRecentBiopsyReport",
                           "type" : "ExpressionRef"
                        }
                     } ]
                  }
               },
               "then" : {
                  "name" : "MostRecentHpvResult",
                  "type" : "ExpressionRef"
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
            "name" : "MostRecentCytologyResultPostBiopsy",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "type" : "If",
               "condition" : {
                  "asType" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "type" : "As",
                  "operand" : {
                     "type" : "After",
                     "operand" : [ {
                        "path" : "date",
                        "type" : "Property",
                        "source" : {
                           "name" : "MostRecentCytologyCotest",
                           "type" : "ExpressionRef"
                        }
                     }, {
                        "path" : "date",
                        "type" : "Property",
                        "source" : {
                           "name" : "MostRecentBiopsyReport",
                           "type" : "ExpressionRef"
                        }
                     } ]
                  }
               },
               "then" : {
                  "name" : "MostRecentCytologyCotestResult",
                  "type" : "ExpressionRef"
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
            "name" : "SecondMostRecentHpvResultPostBiopsy",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "type" : "If",
               "condition" : {
                  "asType" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "type" : "As",
                  "operand" : {
                     "type" : "After",
                     "operand" : [ {
                        "path" : "date",
                        "type" : "Property",
                        "source" : {
                           "name" : "SecondMostRecentHpvReport",
                           "type" : "ExpressionRef"
                        }
                     }, {
                        "path" : "date",
                        "type" : "Property",
                        "source" : {
                           "name" : "MostRecentBiopsyReport",
                           "type" : "ExpressionRef"
                        }
                     } ]
                  }
               },
               "then" : {
                  "name" : "SecondMostRecentHpvResult",
                  "type" : "ExpressionRef"
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
            "name" : "SecondMostRecentCytologyResultPostBiopsy",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "type" : "If",
               "condition" : {
                  "asType" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "type" : "As",
                  "operand" : {
                     "type" : "After",
                     "operand" : [ {
                        "path" : "date",
                        "type" : "Property",
                        "source" : {
                           "name" : "SecondMostRecentCytologyCotest",
                           "type" : "ExpressionRef"
                        }
                     }, {
                        "path" : "date",
                        "type" : "Property",
                        "source" : {
                           "name" : "MostRecentBiopsyReport",
                           "type" : "ExpressionRef"
                        }
                     } ]
                  }
               },
               "then" : {
                  "name" : "SecondMostRecentCytologyCotestResult",
                  "type" : "ExpressionRef"
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
            "name" : "ThirdMostRecentHpvResultPostBiopsy",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "type" : "If",
               "condition" : {
                  "asType" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "type" : "As",
                  "operand" : {
                     "type" : "After",
                     "operand" : [ {
                        "path" : "date",
                        "type" : "Property",
                        "source" : {
                           "name" : "ThirdMostRecentHpvReport",
                           "type" : "ExpressionRef"
                        }
                     }, {
                        "path" : "date",
                        "type" : "Property",
                        "source" : {
                           "name" : "MostRecentBiopsyReport",
                           "type" : "ExpressionRef"
                        }
                     } ]
                  }
               },
               "then" : {
                  "name" : "ThirdMostRecentHpvResult",
                  "type" : "ExpressionRef"
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
            "name" : "ThirdMostRecentCytologyResultPostBiopsy",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "type" : "If",
               "condition" : {
                  "asType" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "type" : "As",
                  "operand" : {
                     "type" : "After",
                     "operand" : [ {
                        "path" : "date",
                        "type" : "Property",
                        "source" : {
                           "name" : "ThirdMostRecentCytologyCotest",
                           "type" : "ExpressionRef"
                        }
                     }, {
                        "path" : "date",
                        "type" : "Property",
                        "source" : {
                           "name" : "MostRecentBiopsyReport",
                           "type" : "ExpressionRef"
                        }
                     } ]
                  }
               },
               "then" : {
                  "name" : "ThirdMostRecentCytologyCotestResult",
                  "type" : "ExpressionRef"
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
            "name" : "Cin2orCin3Biopsies",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "type" : "Query",
               "source" : [ {
                  "alias" : "S",
                  "expression" : {
                     "name" : "SortedBiopsyReports",
                     "type" : "ExpressionRef"
                  }
               } ],
               "relationship" : [ ],
               "where" : {
                  "type" : "In",
                  "operand" : [ {
                     "path" : "riskTableInput",
                     "scope" : "S",
                     "type" : "Property"
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
               }
            }
         }, {
            "name" : "MostRecentCin2orCin3Biopsy",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "type" : "First",
               "source" : {
                  "name" : "Cin2orCin3Biopsies",
                  "type" : "ExpressionRef"
               }
            }
         }, {
            "name" : "CervicalPrecancerTreatments",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "type" : "Union",
               "operand" : [ {
                  "name" : "CervicalExcisionProcedures",
                  "libraryName" : "Dash",
                  "type" : "ExpressionRef"
               }, {
                  "name" : "CervicalAblationProcedures",
                  "libraryName" : "Dash",
                  "type" : "ExpressionRef"
               } ]
            }
         }, {
            "name" : "CervicalPrecancerTreatmentsAfterBiopsy",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "type" : "Query",
               "source" : [ {
                  "alias" : "T",
                  "expression" : {
                     "name" : "CervicalPrecancerTreatments",
                     "type" : "ExpressionRef"
                  }
               } ],
               "relationship" : [ ],
               "where" : {
                  "type" : "After",
                  "operand" : [ {
                     "name" : "ProcedureDate",
                     "libraryName" : "Common",
                     "type" : "FunctionRef",
                     "operand" : [ {
                        "name" : "T",
                        "type" : "AliasRef"
                     } ]
                  }, {
                     "path" : "date",
                     "type" : "Property",
                     "source" : {
                        "name" : "MostRecentCin2orCin3Biopsy",
                        "type" : "ExpressionRef"
                     }
                  } ]
               },
               "return" : {
                  "expression" : {
                     "type" : "Tuple",
                     "element" : [ {
                        "name" : "date",
                        "value" : {
                           "name" : "ProcedureDate",
                           "libraryName" : "Common",
                           "type" : "FunctionRef",
                           "operand" : [ {
                              "name" : "T",
                              "type" : "AliasRef"
                           } ]
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
            "name" : "DateOfLastCervicalPrecancerTreatment",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "path" : "date",
               "type" : "Property",
               "source" : {
                  "type" : "Last",
                  "source" : {
                     "name" : "CervicalPrecancerTreatmentsAfterBiopsy",
                     "type" : "ExpressionRef"
                  }
               }
            }
         }, {
            "name" : "MostRecentHpvResultAfterTreatment",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "type" : "If",
               "condition" : {
                  "asType" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "type" : "As",
                  "operand" : {
                     "type" : "After",
                     "operand" : [ {
                        "path" : "date",
                        "type" : "Property",
                        "source" : {
                           "name" : "MostRecentHpvReport",
                           "type" : "ExpressionRef"
                        }
                     }, {
                        "name" : "DateOfLastCervicalPrecancerTreatment",
                        "type" : "ExpressionRef"
                     } ]
                  }
               },
               "then" : {
                  "name" : "MostRecentHpvResult",
                  "type" : "ExpressionRef"
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
            "name" : "SecondMostRecentHpvResultAfterTreatment",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "type" : "If",
               "condition" : {
                  "asType" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "type" : "As",
                  "operand" : {
                     "type" : "After",
                     "operand" : [ {
                        "path" : "date",
                        "type" : "Property",
                        "source" : {
                           "name" : "SecondMostRecentHpvReport",
                           "type" : "ExpressionRef"
                        }
                     }, {
                        "name" : "DateOfLastCervicalPrecancerTreatment",
                        "type" : "ExpressionRef"
                     } ]
                  }
               },
               "then" : {
                  "name" : "SecondMostRecentHpvResult",
                  "type" : "ExpressionRef"
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
            "name" : "ThirdMostRecentHpvResultAfterTreatment",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "type" : "If",
               "condition" : {
                  "asType" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "type" : "As",
                  "operand" : {
                     "type" : "After",
                     "operand" : [ {
                        "path" : "date",
                        "type" : "Property",
                        "source" : {
                           "name" : "ThirdMostRecentHpvReport",
                           "type" : "ExpressionRef"
                        }
                     }, {
                        "name" : "DateOfLastCervicalPrecancerTreatment",
                        "type" : "ExpressionRef"
                     } ]
                  }
               },
               "then" : {
                  "name" : "ThirdMostRecentHpvResult",
                  "type" : "ExpressionRef"
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
            "name" : "MostRecentCytologyResultAfterTreatment",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "type" : "If",
               "condition" : {
                  "asType" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "type" : "As",
                  "operand" : {
                     "type" : "IsNull",
                     "operand" : {
                        "name" : "MostRecentHpvResultAfterTreatment",
                        "type" : "ExpressionRef"
                     }
                  }
               },
               "then" : {
                  "asType" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "As",
                  "operand" : {
                     "type" : "Null"
                  }
               },
               "else" : {
                  "name" : "MostRecentCytologyCotestResult",
                  "type" : "ExpressionRef"
               }
            }
         }, {
            "name" : "SecondMostRecentCytologyResultAfterTreatment",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "type" : "If",
               "condition" : {
                  "asType" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "type" : "As",
                  "operand" : {
                     "type" : "IsNull",
                     "operand" : {
                        "name" : "SecondMostRecentHpvResultAfterTreatment",
                        "type" : "ExpressionRef"
                     }
                  }
               },
               "then" : {
                  "asType" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "As",
                  "operand" : {
                     "type" : "Null"
                  }
               },
               "else" : {
                  "name" : "SecondMostRecentCytologyCotestResult",
                  "type" : "ExpressionRef"
               }
            }
         }, {
            "name" : "ThirdMostRecentCytologyResultAfterTreatment",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "type" : "If",
               "condition" : {
                  "asType" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "type" : "As",
                  "operand" : {
                     "type" : "IsNull",
                     "operand" : {
                        "name" : "ThirdMostRecentHpvResultAfterTreatment",
                        "type" : "ExpressionRef"
                     }
                  }
               },
               "then" : {
                  "asType" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "As",
                  "operand" : {
                     "type" : "Null"
                  }
               },
               "else" : {
                  "name" : "ThirdMostRecentCytologyCotestResult",
                  "type" : "ExpressionRef"
               }
            }
         } ]
      }
   }
}

