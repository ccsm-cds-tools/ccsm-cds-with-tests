export const ScreeningImmunocompromisedLibrary = {
   "library" : {
      "annotation" : [ {
         "translatorOptions" : "",
         "type" : "CqlToElmInfo"
      } ],
      "identifier" : {
         "id" : "ScreeningImmunocompromisedLibrary",
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
            "localIdentifier" : "Common",
            "path" : "CCSMCommonFunctions",
            "version" : "1.0.0"
         } ]
      },
      "parameters" : {
         "def" : [ {
            "name" : "CytologyWindow",
            "accessLevel" : "Public",
            "default" : {
               "value" : 18,
               "unit" : "months",
               "type" : "Quantity"
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
            "name" : "Immunocompromised",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "name" : "Immunocompromised",
               "libraryName" : "Dash",
               "type" : "ExpressionRef"
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
                  "name" : "Immunocompromised",
                  "type" : "ExpressionRef"
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
            "name" : "HasRecentAbnormalScreening",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "name" : "HasRecentAbnormalScreening",
               "libraryName" : "Dash",
               "type" : "ExpressionRef"
            }
         }, {
            "name" : "HasRecentAbnormalHistology",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "name" : "HasRecentAbnormalHistology",
               "libraryName" : "Dash",
               "type" : "ExpressionRef"
            }
         }, {
            "name" : "Excluded",
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
                  }, {
                     "name" : "HasRecentAbnormalScreening",
                     "type" : "ExpressionRef"
                  } ]
               }, {
                  "name" : "HasRecentAbnormalHistology",
                  "type" : "ExpressionRef"
               } ]
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
            "name" : "DateOfImmunosuppressionOnset",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "name" : "MostRecentDistinctImmunocompromisedEventDate",
               "libraryName" : "Dash",
               "type" : "ExpressionRef"
            }
         }, {
            "name" : "RecentCytologyReports",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "name" : "SortedDiagnosticReports",
               "libraryName" : "Common",
               "type" : "FunctionRef",
               "operand" : [ {
                  "name" : "CervicalCytologyReports",
                  "libraryName" : "Dash",
                  "type" : "ExpressionRef"
               } ]
            }
         }, {
            "name" : "RecentCytologyReportsSinceImmunosuppressionOnset",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "type" : "Query",
               "source" : [ {
                  "alias" : "R",
                  "expression" : {
                     "name" : "RecentCytologyReports",
                     "type" : "ExpressionRef"
                  }
               } ],
               "relationship" : [ ],
               "where" : {
                  "type" : "After",
                  "operand" : [ {
                     "name" : "DiagnosticReportDate",
                     "libraryName" : "Common",
                     "type" : "FunctionRef",
                     "operand" : [ {
                        "name" : "R",
                        "type" : "AliasRef"
                     } ]
                  }, {
                     "name" : "DateOfImmunosuppressionOnset",
                     "type" : "ExpressionRef"
                  } ]
               }
            }
         }, {
            "name" : "OneNilmCytologySinceImmunosuppressionOnset",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "type" : "And",
               "operand" : [ {
                  "type" : "Greater",
                  "operand" : [ {
                     "type" : "Count",
                     "source" : {
                        "name" : "RecentCytologyReportsSinceImmunosuppressionOnset",
                        "type" : "ExpressionRef"
                     }
                  }, {
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "0",
                     "type" : "Literal"
                  } ]
               }, {
                  "type" : "AnyTrue",
                  "source" : {
                     "type" : "Query",
                     "source" : [ {
                        "alias" : "cC",
                        "expression" : {
                           "name" : "CollateConclusionCodes",
                           "libraryName" : "Dash",
                           "type" : "FunctionRef",
                           "operand" : [ {
                              "type" : "Indexer",
                              "operand" : [ {
                                 "name" : "RecentCytologyReportsSinceImmunosuppressionOnset",
                                 "type" : "ExpressionRef"
                              }, {
                                 "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                                 "value" : "0",
                                 "type" : "Literal"
                              } ]
                           }, {
                              "name" : "CytologyObservations",
                              "libraryName" : "Dash",
                              "type" : "ExpressionRef"
                           } ]
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
                                 "libraryName" : "Dash",
                                 "type" : "CodeRef"
                              }
                           } ]
                        }
                     }
                  }
               } ]
            }
         }, {
            "name" : "TwoNilmCytologiesSinceImmunosuppressionOnset",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "type" : "And",
               "operand" : [ {
                  "type" : "And",
                  "operand" : [ {
                     "type" : "Greater",
                     "operand" : [ {
                        "type" : "Count",
                        "source" : {
                           "name" : "RecentCytologyReportsSinceImmunosuppressionOnset",
                           "type" : "ExpressionRef"
                        }
                     }, {
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "1",
                        "type" : "Literal"
                     } ]
                  }, {
                     "name" : "OneNilmCytologySinceImmunosuppressionOnset",
                     "type" : "ExpressionRef"
                  } ]
               }, {
                  "type" : "AnyTrue",
                  "source" : {
                     "type" : "Query",
                     "source" : [ {
                        "alias" : "cC",
                        "expression" : {
                           "name" : "CollateConclusionCodes",
                           "libraryName" : "Dash",
                           "type" : "FunctionRef",
                           "operand" : [ {
                              "type" : "Indexer",
                              "operand" : [ {
                                 "name" : "RecentCytologyReportsSinceImmunosuppressionOnset",
                                 "type" : "ExpressionRef"
                              }, {
                                 "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                                 "value" : "1",
                                 "type" : "Literal"
                              } ]
                           }, {
                              "name" : "CytologyObservations",
                              "libraryName" : "Dash",
                              "type" : "ExpressionRef"
                           } ]
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
                                 "libraryName" : "Dash",
                                 "type" : "CodeRef"
                              }
                           } ]
                        }
                     }
                  }
               } ]
            }
         }, {
            "name" : "ThreeNilmCytologiesSinceImmunosuppressionOnset",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "type" : "And",
               "operand" : [ {
                  "type" : "And",
                  "operand" : [ {
                     "type" : "Greater",
                     "operand" : [ {
                        "type" : "Count",
                        "source" : {
                           "name" : "RecentCytologyReportsSinceImmunosuppressionOnset",
                           "type" : "ExpressionRef"
                        }
                     }, {
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "2",
                        "type" : "Literal"
                     } ]
                  }, {
                     "name" : "TwoNilmCytologiesSinceImmunosuppressionOnset",
                     "type" : "ExpressionRef"
                  } ]
               }, {
                  "type" : "AnyTrue",
                  "source" : {
                     "type" : "Query",
                     "source" : [ {
                        "alias" : "cC",
                        "expression" : {
                           "name" : "CollateConclusionCodes",
                           "libraryName" : "Dash",
                           "type" : "FunctionRef",
                           "operand" : [ {
                              "type" : "Indexer",
                              "operand" : [ {
                                 "name" : "RecentCytologyReportsSinceImmunosuppressionOnset",
                                 "type" : "ExpressionRef"
                              }, {
                                 "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                                 "value" : "2",
                                 "type" : "Literal"
                              } ]
                           }, {
                              "name" : "CytologyObservations",
                              "libraryName" : "Dash",
                              "type" : "ExpressionRef"
                           } ]
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
                                 "libraryName" : "Dash",
                                 "type" : "CodeRef"
                              }
                           } ]
                        }
                     }
                  }
               } ]
            }
         }, {
            "name" : "RecentCytologyReportsSinceImmunosuppressionOnsetFilterForNilm",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "type" : "Case",
               "caseItem" : [ {
                  "when" : {
                     "name" : "ThreeNilmCytologiesSinceImmunosuppressionOnset",
                     "type" : "ExpressionRef"
                  },
                  "then" : {
                     "type" : "List",
                     "element" : [ {
                        "type" : "Indexer",
                        "operand" : [ {
                           "name" : "RecentCytologyReportsSinceImmunosuppressionOnset",
                           "type" : "ExpressionRef"
                        }, {
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "0",
                           "type" : "Literal"
                        } ]
                     }, {
                        "type" : "Indexer",
                        "operand" : [ {
                           "name" : "RecentCytologyReportsSinceImmunosuppressionOnset",
                           "type" : "ExpressionRef"
                        }, {
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "1",
                           "type" : "Literal"
                        } ]
                     }, {
                        "type" : "Indexer",
                        "operand" : [ {
                           "name" : "RecentCytologyReportsSinceImmunosuppressionOnset",
                           "type" : "ExpressionRef"
                        }, {
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "2",
                           "type" : "Literal"
                        } ]
                     } ]
                  }
               }, {
                  "when" : {
                     "name" : "TwoNilmCytologiesSinceImmunosuppressionOnset",
                     "type" : "ExpressionRef"
                  },
                  "then" : {
                     "type" : "List",
                     "element" : [ {
                        "type" : "Indexer",
                        "operand" : [ {
                           "name" : "RecentCytologyReportsSinceImmunosuppressionOnset",
                           "type" : "ExpressionRef"
                        }, {
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "0",
                           "type" : "Literal"
                        } ]
                     }, {
                        "type" : "Indexer",
                        "operand" : [ {
                           "name" : "RecentCytologyReportsSinceImmunosuppressionOnset",
                           "type" : "ExpressionRef"
                        }, {
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "1",
                           "type" : "Literal"
                        } ]
                     } ]
                  }
               }, {
                  "when" : {
                     "name" : "OneNilmCytologySinceImmunosuppressionOnset",
                     "type" : "ExpressionRef"
                  },
                  "then" : {
                     "type" : "List",
                     "element" : [ {
                        "type" : "Indexer",
                        "operand" : [ {
                           "name" : "RecentCytologyReportsSinceImmunosuppressionOnset",
                           "type" : "ExpressionRef"
                        }, {
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "0",
                           "type" : "Literal"
                        } ]
                     } ]
                  }
               } ],
               "else" : {
                  "type" : "As",
                  "operand" : {
                     "type" : "Null"
                  },
                  "asTypeSpecifier" : {
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "name" : "{http://hl7.org/fhir}DiagnosticReport",
                        "type" : "NamedTypeSpecifier"
                     }
                  }
               }
            }
         }, {
            "name" : "NilmCytologyReportsSinceImmunosuppressionOnset",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "type" : "Query",
               "source" : [ {
                  "alias" : "R",
                  "expression" : {
                     "name" : "RecentCytologyReportsSinceImmunosuppressionOnsetFilterForNilm",
                     "type" : "ExpressionRef"
                  }
               } ],
               "relationship" : [ ],
               "return" : {
                  "expression" : {
                     "type" : "Tuple",
                     "element" : [ {
                        "name" : "type",
                        "value" : {
                           "valueType" : "{urn:hl7-org:elm-types:r1}String",
                           "value" : "DiagnosticReport",
                           "type" : "Literal"
                        }
                     }, {
                        "name" : "date",
                        "value" : {
                           "name" : "DiagnosticReportDate",
                           "libraryName" : "Common",
                           "type" : "FunctionRef",
                           "operand" : [ {
                              "name" : "R",
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
            "name" : "DateOfFirstNilmCytologyAfterImmunosuppressionOnset",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "type" : "If",
               "condition" : {
                  "asType" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "type" : "As",
                  "operand" : {
                     "name" : "OneNilmCytologySinceImmunosuppressionOnset",
                     "type" : "ExpressionRef"
                  }
               },
               "then" : {
                  "path" : "date",
                  "type" : "Property",
                  "source" : {
                     "type" : "Indexer",
                     "operand" : [ {
                        "name" : "NilmCytologyReportsSinceImmunosuppressionOnset",
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
            "name" : "DateOfSecondNilmCytologyAfterImmunosuppressionOnset",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "type" : "If",
               "condition" : {
                  "asType" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "type" : "As",
                  "operand" : {
                     "name" : "TwoNilmCytologiesSinceImmunosuppressionOnset",
                     "type" : "ExpressionRef"
                  }
               },
               "then" : {
                  "path" : "date",
                  "type" : "Property",
                  "source" : {
                     "type" : "Indexer",
                     "operand" : [ {
                        "name" : "NilmCytologyReportsSinceImmunosuppressionOnset",
                        "type" : "ExpressionRef"
                     }, {
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "1",
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
            "name" : "DateOfThirdNilmCytologyAfterImmunosuppressionOnset",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "type" : "If",
               "condition" : {
                  "asType" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "type" : "As",
                  "operand" : {
                     "name" : "ThreeNilmCytologiesSinceImmunosuppressionOnset",
                     "type" : "ExpressionRef"
                  }
               },
               "then" : {
                  "path" : "date",
                  "type" : "Property",
                  "source" : {
                     "type" : "Indexer",
                     "operand" : [ {
                        "name" : "NilmCytologyReportsSinceImmunosuppressionOnset",
                        "type" : "ExpressionRef"
                     }, {
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "2",
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
            "name" : "CytologySequenceIntact",
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
                           "name" : "DateOfFirstNilmCytologyAfterImmunosuppressionOnset",
                           "type" : "ExpressionRef"
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
                              "name" : "DateOfSecondNilmCytologyAfterImmunosuppressionOnset",
                              "type" : "ExpressionRef"
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
                                 "name" : "DateOfThirdNilmCytologyAfterImmunosuppressionOnset",
                                 "type" : "ExpressionRef"
                              }
                           }
                        }
                     },
                     "then" : {
                        "type" : "And",
                        "operand" : [ {
                           "type" : "Greater",
                           "operand" : [ {
                              "name" : "DateOfFirstNilmCytologyAfterImmunosuppressionOnset",
                              "type" : "ExpressionRef"
                           }, {
                              "type" : "Subtract",
                              "operand" : [ {
                                 "name" : "DateOfSecondNilmCytologyAfterImmunosuppressionOnset",
                                 "type" : "ExpressionRef"
                              }, {
                                 "name" : "CytologyWindow",
                                 "type" : "ParameterRef"
                              } ]
                           } ]
                        }, {
                           "type" : "Greater",
                           "operand" : [ {
                              "name" : "DateOfSecondNilmCytologyAfterImmunosuppressionOnset",
                              "type" : "ExpressionRef"
                           }, {
                              "type" : "Subtract",
                              "operand" : [ {
                                 "name" : "DateOfThirdNilmCytologyAfterImmunosuppressionOnset",
                                 "type" : "ExpressionRef"
                              }, {
                                 "name" : "CytologyWindow",
                                 "type" : "ParameterRef"
                              } ]
                           } ]
                        } ]
                     },
                     "else" : {
                        "type" : "And",
                        "operand" : [ {
                           "type" : "Greater",
                           "operand" : [ {
                              "name" : "DateOfFirstNilmCytologyAfterImmunosuppressionOnset",
                              "type" : "ExpressionRef"
                           }, {
                              "type" : "Subtract",
                              "operand" : [ {
                                 "name" : "DateOfSecondNilmCytologyAfterImmunosuppressionOnset",
                                 "type" : "ExpressionRef"
                              }, {
                                 "name" : "CytologyWindow",
                                 "type" : "ParameterRef"
                              } ]
                           } ]
                        }, {
                           "type" : "Greater",
                           "operand" : [ {
                              "name" : "DateOfSecondNilmCytologyAfterImmunosuppressionOnset",
                              "type" : "ExpressionRef"
                           }, {
                              "type" : "ToDateTime",
                              "operand" : {
                                 "type" : "Subtract",
                                 "operand" : [ {
                                    "type" : "Today"
                                 }, {
                                    "name" : "CytologyWindow",
                                    "type" : "ParameterRef"
                                 } ]
                              }
                           } ]
                        } ]
                     }
                  },
                  "else" : {
                     "type" : "If",
                     "condition" : {
                        "asType" : "{urn:hl7-org:elm-types:r1}Boolean",
                        "type" : "As",
                        "operand" : {
                           "type" : "Before",
                           "operand" : [ {
                              "name" : "DateOfFirstNilmCytologyAfterImmunosuppressionOnset",
                              "type" : "ExpressionRef"
                           }, {
                              "type" : "ToDateTime",
                              "operand" : {
                                 "type" : "Subtract",
                                 "operand" : [ {
                                    "type" : "Today"
                                 }, {
                                    "name" : "CytologyWindow",
                                    "type" : "ParameterRef"
                                 } ]
                              }
                           } ]
                        }
                     },
                     "then" : {
                        "valueType" : "{urn:hl7-org:elm-types:r1}Boolean",
                        "value" : "false",
                        "type" : "Literal"
                     },
                     "else" : {
                        "valueType" : "{urn:hl7-org:elm-types:r1}Boolean",
                        "value" : "true",
                        "type" : "Literal"
                     }
                  }
               },
               "else" : {
                  "valueType" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "value" : "false",
                  "type" : "Literal"
               }
            }
         }, {
            "name" : "Age21Through29",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
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
                     "value" : "29",
                     "type" : "Literal"
                  } ]
               } ]
            }
         }, {
            "name" : "Age30AndOlder",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
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
            }
         }, {
            "name" : "NeedFirstOfThreeAnnualCytologyTests",
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
                        "type" : "And",
                        "operand" : [ {
                           "name" : "IsIncludedAndNotExcluded",
                           "type" : "ExpressionRef"
                        }, {
                           "type" : "Or",
                           "operand" : [ {
                              "name" : "Age21Through29",
                              "type" : "ExpressionRef"
                           }, {
                              "name" : "Age30AndOlder",
                              "type" : "ExpressionRef"
                           } ]
                        } ]
                     }, {
                        "type" : "Or",
                        "operand" : [ {
                           "type" : "IsNull",
                           "operand" : {
                              "name" : "DateOfFirstNilmCytologyAfterImmunosuppressionOnset",
                              "type" : "ExpressionRef"
                           }
                        }, {
                           "type" : "Equal",
                           "operand" : [ {
                              "name" : "CytologySequenceIntact",
                              "type" : "ExpressionRef"
                           }, {
                              "valueType" : "{urn:hl7-org:elm-types:r1}Boolean",
                              "value" : "false",
                              "type" : "Literal"
                           } ]
                        } ]
                     } ]
                  }
               },
               "then" : {
                  "valueType" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "value" : "true",
                  "type" : "Literal"
               },
               "else" : {
                  "valueType" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "value" : "false",
                  "type" : "Literal"
               }
            }
         }, {
            "name" : "NeedSecondOfThreeAnnualCytologyTests",
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
                        "type" : "And",
                        "operand" : [ {
                           "type" : "Not",
                           "operand" : {
                              "type" : "IsNull",
                              "operand" : {
                                 "name" : "DateOfFirstNilmCytologyAfterImmunosuppressionOnset",
                                 "type" : "ExpressionRef"
                              }
                           }
                        }, {
                           "type" : "IsNull",
                           "operand" : {
                              "name" : "DateOfSecondNilmCytologyAfterImmunosuppressionOnset",
                              "type" : "ExpressionRef"
                           }
                        } ]
                     }, {
                        "name" : "CytologySequenceIntact",
                        "type" : "ExpressionRef"
                     } ]
                  }
               },
               "then" : {
                  "valueType" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "value" : "true",
                  "type" : "Literal"
               },
               "else" : {
                  "valueType" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "value" : "false",
                  "type" : "Literal"
               }
            }
         }, {
            "name" : "NeedThirdOfThreeAnnualCytologyTests",
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
                        "type" : "And",
                        "operand" : [ {
                           "type" : "And",
                           "operand" : [ {
                              "type" : "Not",
                              "operand" : {
                                 "type" : "IsNull",
                                 "operand" : {
                                    "name" : "DateOfFirstNilmCytologyAfterImmunosuppressionOnset",
                                    "type" : "ExpressionRef"
                                 }
                              }
                           }, {
                              "type" : "Not",
                              "operand" : {
                                 "type" : "IsNull",
                                 "operand" : {
                                    "name" : "DateOfSecondNilmCytologyAfterImmunosuppressionOnset",
                                    "type" : "ExpressionRef"
                                 }
                              }
                           } ]
                        }, {
                           "type" : "IsNull",
                           "operand" : {
                              "name" : "DateOfThirdNilmCytologyAfterImmunosuppressionOnset",
                              "type" : "ExpressionRef"
                           }
                        } ]
                     }, {
                        "name" : "CytologySequenceIntact",
                        "type" : "ExpressionRef"
                     } ]
                  }
               },
               "then" : {
                  "valueType" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "value" : "true",
                  "type" : "Literal"
               },
               "else" : {
                  "valueType" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "value" : "false",
                  "type" : "Literal"
               }
            }
         }, {
            "name" : "CompletedAnnualCytologyTestSequence",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
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
                              "name" : "DateOfFirstNilmCytologyAfterImmunosuppressionOnset",
                              "type" : "ExpressionRef"
                           }
                        }
                     }, {
                        "type" : "Not",
                        "operand" : {
                           "type" : "IsNull",
                           "operand" : {
                              "name" : "DateOfSecondNilmCytologyAfterImmunosuppressionOnset",
                              "type" : "ExpressionRef"
                           }
                        }
                     } ]
                  }, {
                     "type" : "Not",
                     "operand" : {
                        "type" : "IsNull",
                        "operand" : {
                           "name" : "DateOfThirdNilmCytologyAfterImmunosuppressionOnset",
                           "type" : "ExpressionRef"
                        }
                     }
                  } ]
               }, {
                  "name" : "CytologySequenceIntact",
                  "type" : "ExpressionRef"
               } ]
            }
         }, {
            "name" : "DateOfLastCytology",
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
                           "name" : "NilmCytologyReportsSinceImmunosuppressionOnset",
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
                     "type" : "Last",
                     "source" : {
                        "name" : "NilmCytologyReportsSinceImmunosuppressionOnset",
                        "type" : "ExpressionRef"
                     }
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
            "name" : "LastCytology",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "type" : "Query",
               "source" : [ {
                  "alias" : "C",
                  "expression" : {
                     "name" : "RecentCytologyReportsSinceImmunosuppressionOnset",
                     "type" : "ExpressionRef"
                  }
               } ],
               "relationship" : [ ],
               "where" : {
                  "type" : "Equivalent",
                  "operand" : [ {
                     "name" : "DiagnosticReportDate",
                     "libraryName" : "Common",
                     "type" : "FunctionRef",
                     "operand" : [ {
                        "name" : "C",
                        "type" : "AliasRef"
                     } ]
                  }, {
                     "name" : "DateOfLastCytology",
                     "type" : "ExpressionRef"
                  } ]
               }
            }
         }, {
            "name" : "CoincidentHpvTests",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "type" : "Query",
               "source" : [ {
                  "alias" : "R",
                  "expression" : {
                     "name" : "HpvDiagnosticReports",
                     "libraryName" : "Dash",
                     "type" : "ExpressionRef"
                  }
               }, {
                  "alias" : "C",
                  "expression" : {
                     "name" : "LastCytology",
                     "type" : "ExpressionRef"
                  }
               } ],
               "relationship" : [ ],
               "where" : {
                  "name" : "CoincidentDiagnosticReports",
                  "libraryName" : "Common",
                  "type" : "FunctionRef",
                  "operand" : [ {
                     "name" : "R",
                     "type" : "AliasRef"
                  }, {
                     "name" : "C",
                     "type" : "AliasRef"
                  } ]
               },
               "return" : {
                  "expression" : {
                     "name" : "R",
                     "type" : "AliasRef"
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
                  "alias" : "D",
                  "expression" : {
                     "name" : "CoincidentHpvTests",
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
                           "name" : "CollateConclusionCodes",
                           "libraryName" : "Dash",
                           "type" : "FunctionRef",
                           "operand" : [ {
                              "name" : "D",
                              "type" : "AliasRef"
                           }, {
                              "name" : "HpvObservations",
                              "libraryName" : "Dash",
                              "type" : "ExpressionRef"
                           } ]
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
                     "libraryName" : "Dash",
                     "type" : "ValueSetRef"
                  }
               },
               "return" : {
                  "expression" : {
                     "type" : "Tuple",
                     "element" : [ {
                        "name" : "type",
                        "value" : {
                           "valueType" : "{urn:hl7-org:elm-types:r1}String",
                           "value" : "DiagnosticReport",
                           "type" : "Literal"
                        }
                     }, {
                        "name" : "date",
                        "value" : {
                           "name" : "DiagnosticReportDate",
                           "libraryName" : "Common",
                           "type" : "FunctionRef",
                           "operand" : [ {
                              "name" : "D",
                              "type" : "AliasRef"
                           } ]
                        }
                     } ]
                  }
               }
            }
         }, {
            "name" : "LastCytologyWasCotest",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "type" : "Exists",
               "operand" : {
                  "name" : "NegativeCotests",
                  "type" : "ExpressionRef"
               }
            }
         }, {
            "name" : "TestingCadence",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "type" : "If",
               "condition" : {
                  "asType" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "type" : "As",
                  "operand" : {
                     "type" : "Or",
                     "operand" : [ {
                        "name" : "CompletedAnnualCytologyTestSequence",
                        "type" : "ExpressionRef"
                     }, {
                        "type" : "And",
                        "operand" : [ {
                           "name" : "LastCytologyWasCotest",
                           "type" : "ExpressionRef"
                        }, {
                           "name" : "Age30AndOlder",
                           "type" : "ExpressionRef"
                        } ]
                     } ]
                  }
               },
               "then" : {
                  "value" : 3,
                  "unit" : "years",
                  "type" : "Quantity"
               },
               "else" : {
                  "value" : 12,
                  "unit" : "months",
                  "type" : "Quantity"
               }
            }
         }, {
            "name" : "ProposedDateOfNextScreening",
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
                           "name" : "DateOfLastCytology",
                           "type" : "ExpressionRef"
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
                        "type" : "Greater",
                        "operand" : [ {
                           "type" : "Add",
                           "operand" : [ {
                              "name" : "DateOfLastCytology",
                              "type" : "ExpressionRef"
                           }, {
                              "name" : "TestingCadence",
                              "type" : "ExpressionRef"
                           } ]
                        }, {
                           "type" : "ToDateTime",
                           "operand" : {
                              "type" : "Today"
                           }
                        } ]
                     }
                  },
                  "then" : {
                     "type" : "Add",
                     "operand" : [ {
                        "name" : "DateOfLastCytology",
                        "type" : "ExpressionRef"
                     }, {
                        "name" : "TestingCadence",
                        "type" : "ExpressionRef"
                     } ]
                  },
                  "else" : {
                     "type" : "Now"
                  }
               },
               "else" : {
                  "type" : "Now"
               }
            }
         }, {
            "name" : "ProposeImmediateTesting",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "type" : "Or",
               "operand" : [ {
                  "type" : "Equal",
                  "operand" : [ {
                     "type" : "Count",
                     "source" : {
                        "name" : "NilmCytologyReportsSinceImmunosuppressionOnset",
                        "type" : "ExpressionRef"
                     }
                  }, {
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "0",
                     "type" : "Literal"
                  } ]
               }, {
                  "type" : "SameOrBefore",
                  "operand" : [ {
                     "name" : "ProposedDateOfNextScreening",
                     "type" : "ExpressionRef"
                  }, {
                     "type" : "Now"
                  } ]
               } ]
            }
         }, {
            "name" : "RecommendationText",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "type" : "If",
               "condition" : {
                  "asType" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "type" : "As",
                  "operand" : {
                     "name" : "ProposeImmediateTesting",
                     "type" : "ExpressionRef"
                  }
               },
               "then" : {
                  "type" : "Case",
                  "caseItem" : [ {
                     "when" : {
                        "name" : "Age21Through29",
                        "type" : "ExpressionRef"
                     },
                     "then" : {
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "Per CDC guidelines, Cervical Cytology screening is indicated.",
                        "type" : "Literal"
                     }
                  }, {
                     "when" : {
                        "name" : "Age30AndOlder",
                        "type" : "ExpressionRef"
                     },
                     "then" : {
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "Per CDC guidelines, cervical cancer screening is indicated using either 1) cotesting with cervical cytology and hrHPV tests, or 2) cervical cytology testing alone. Note: individuals tested with cervical cytology alone should be tested every 12 months for 3 years if cytology results are normal (i.e., NILM).",
                        "type" : "Literal"
                     }
                  } ],
                  "else" : {
                     "asType" : "{urn:hl7-org:elm-types:r1}String",
                     "type" : "As",
                     "operand" : {
                        "type" : "Null"
                     }
                  }
               },
               "else" : {
                  "type" : "Case",
                  "caseItem" : [ {
                     "when" : {
                        "name" : "Age21Through29",
                        "type" : "ExpressionRef"
                     },
                     "then" : {
                        "type" : "Concatenate",
                        "operand" : [ {
                           "type" : "Concatenate",
                           "operand" : [ {
                              "valueType" : "{urn:hl7-org:elm-types:r1}String",
                              "value" : "Cervical cytology screening is next due on ",
                              "type" : "Literal"
                           }, {
                              "type" : "ToString",
                              "operand" : {
                                 "type" : "ToDate",
                                 "operand" : {
                                    "name" : "ProposedDateOfNextScreening",
                                    "type" : "ExpressionRef"
                                 }
                              }
                           } ]
                        }, {
                           "valueType" : "{urn:hl7-org:elm-types:r1}String",
                           "value" : ".",
                           "type" : "Literal"
                        } ]
                     }
                  }, {
                     "when" : {
                        "name" : "Age30AndOlder",
                        "type" : "ExpressionRef"
                     },
                     "then" : {
                        "type" : "If",
                        "condition" : {
                           "asType" : "{urn:hl7-org:elm-types:r1}Boolean",
                           "type" : "As",
                           "operand" : {
                              "name" : "LastCytologyWasCotest",
                              "type" : "ExpressionRef"
                           }
                        },
                        "then" : {
                           "type" : "Concatenate",
                           "operand" : [ {
                              "type" : "Concatenate",
                              "operand" : [ {
                                 "valueType" : "{urn:hl7-org:elm-types:r1}String",
                                 "value" : "Cotesting with a cervical cytology test and a hrHPV test is next due on ",
                                 "type" : "Literal"
                              }, {
                                 "type" : "ToString",
                                 "operand" : {
                                    "type" : "ToDate",
                                    "operand" : {
                                       "name" : "ProposedDateOfNextScreening",
                                       "type" : "ExpressionRef"
                                    }
                                 }
                              } ]
                           }, {
                              "valueType" : "{urn:hl7-org:elm-types:r1}String",
                              "value" : ".",
                              "type" : "Literal"
                           } ]
                        },
                        "else" : {
                           "type" : "Concatenate",
                           "operand" : [ {
                              "type" : "Concatenate",
                              "operand" : [ {
                                 "valueType" : "{urn:hl7-org:elm-types:r1}String",
                                 "value" : "Per CDC guidelines, cervical cancer screening using either 1) cotesting with cervical cytology and hrHPV tests, or 2) cervical cytology testing alone is next due on ",
                                 "type" : "Literal"
                              }, {
                                 "type" : "ToString",
                                 "operand" : {
                                    "type" : "ToDate",
                                    "operand" : {
                                       "name" : "ProposedDateOfNextScreening",
                                       "type" : "ExpressionRef"
                                    }
                                 }
                              } ]
                           }, {
                              "valueType" : "{urn:hl7-org:elm-types:r1}String",
                              "value" : ".",
                              "type" : "Literal"
                           } ]
                        }
                     }
                  } ],
                  "else" : {
                     "asType" : "{urn:hl7-org:elm-types:r1}String",
                     "type" : "As",
                     "operand" : {
                        "type" : "Null"
                     }
                  }
               }
            }
         }, {
            "name" : "RecommendImmediateCervicalCytology",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "type" : "And",
               "operand" : [ {
                  "type" : "And",
                  "operand" : [ {
                     "name" : "IsIncludedAndNotExcluded",
                     "type" : "ExpressionRef"
                  }, {
                     "name" : "ProposeImmediateTesting",
                     "type" : "ExpressionRef"
                  } ]
               }, {
                  "type" : "Or",
                  "operand" : [ {
                     "name" : "Age21Through29",
                     "type" : "ExpressionRef"
                  }, {
                     "name" : "Age30AndOlder",
                     "type" : "ExpressionRef"
                  } ]
               } ]
            }
         }, {
            "name" : "RecommendImmediateCotesting",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "type" : "And",
               "operand" : [ {
                  "type" : "And",
                  "operand" : [ {
                     "name" : "IsIncludedAndNotExcluded",
                     "type" : "ExpressionRef"
                  }, {
                     "name" : "ProposeImmediateTesting",
                     "type" : "ExpressionRef"
                  } ]
               }, {
                  "name" : "Age30AndOlder",
                  "type" : "ExpressionRef"
               } ]
            }
         }, {
            "name" : "ActionShort",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "type" : "If",
               "condition" : {
                  "asType" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "type" : "As",
                  "operand" : {
                     "name" : "ProposeImmediateTesting",
                     "type" : "ExpressionRef"
                  }
               },
               "then" : {
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "Cervical Screening Due Now",
                  "type" : "Literal"
               },
               "else" : {
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "Cervical Screening Up To Date",
                  "type" : "Literal"
               }
            }
         }, {
            "name" : "Recommendation",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "type" : "If",
               "condition" : {
                  "asType" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "type" : "As",
                  "operand" : {
                     "name" : "IsIncludedAndNotExcluded",
                     "type" : "ExpressionRef"
                  }
               },
               "then" : {
                  "type" : "Tuple",
                  "element" : [ {
                     "name" : "short",
                     "value" : {
                        "name" : "ActionShort",
                        "type" : "ExpressionRef"
                     }
                  }, {
                     "name" : "date",
                     "value" : {
                        "type" : "ToDate",
                        "operand" : {
                           "name" : "ProposedDateOfNextScreening",
                           "type" : "ExpressionRef"
                        }
                     }
                  }, {
                     "name" : "details",
                     "value" : {
                        "type" : "List",
                        "element" : [ {
                           "name" : "RecommendationText",
                           "type" : "ExpressionRef"
                        } ]
                     }
                  }, {
                     "name" : "group",
                     "value" : {
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "Screening: Immunocompromised",
                        "type" : "Literal"
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
                        "name" : "details",
                        "type" : {
                           "type" : "ListTypeSpecifier",
                           "elementType" : {
                              "name" : "{urn:hl7-org:elm-types:r1}String",
                              "type" : "NamedTypeSpecifier"
                           }
                        }
                     }, {
                        "name" : "group",
                        "type" : {
                           "name" : "{urn:hl7-org:elm-types:r1}String",
                           "type" : "NamedTypeSpecifier"
                        }
                     } ]
                  }
               }
            }
         }, {
            "name" : "ErrorCotestWithMissingHpvResult",
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
                           "name" : "CoincidentHpvTests",
                           "type" : "ExpressionRef"
                        }
                     }, {
                        "type" : "Or",
                        "operand" : [ {
                           "type" : "AllTrue",
                           "source" : {
                              "type" : "Query",
                              "source" : [ {
                                 "alias" : "aC",
                                 "expression" : {
                                    "type" : "Flatten",
                                    "operand" : {
                                       "type" : "Query",
                                       "source" : [ {
                                          "alias" : "$this",
                                          "expression" : {
                                             "name" : "CoincidentHpvTests",
                                             "type" : "ExpressionRef"
                                          }
                                       } ],
                                       "where" : {
                                          "type" : "Not",
                                          "operand" : {
                                             "type" : "IsNull",
                                             "operand" : {
                                                "path" : "conclusionCode",
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
                                             "path" : "conclusionCode",
                                             "type" : "Property",
                                             "source" : {
                                                "name" : "$this",
                                                "type" : "AliasRef"
                                             }
                                          }
                                       }
                                    }
                                 }
                              } ],
                              "relationship" : [ ],
                              "return" : {
                                 "expression" : {
                                    "type" : "IsNull",
                                    "operand" : {
                                       "name" : "aC",
                                       "type" : "AliasRef"
                                    }
                                 }
                              }
                           }
                        }, {
                           "type" : "Equivalent",
                           "operand" : [ {
                              "type" : "Count",
                              "source" : {
                                 "type" : "Flatten",
                                 "operand" : {
                                    "type" : "Query",
                                    "source" : [ {
                                       "alias" : "$this",
                                       "expression" : {
                                          "name" : "CoincidentHpvTests",
                                          "type" : "ExpressionRef"
                                       }
                                    } ],
                                    "where" : {
                                       "type" : "Not",
                                       "operand" : {
                                          "type" : "IsNull",
                                          "operand" : {
                                             "path" : "conclusionCode",
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
                                          "path" : "conclusionCode",
                                          "type" : "Property",
                                          "source" : {
                                             "name" : "$this",
                                             "type" : "AliasRef"
                                          }
                                       }
                                    }
                                 }
                              }
                           }, {
                              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                              "value" : "0",
                              "type" : "Literal"
                           } ]
                        } ]
                     } ]
                  }
               },
               "then" : {
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "An hrHPV test found as part of a cotest contained no result. Please review patient record to resolve.",
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
            "name" : "ErrorCotestWithNonNegativeHpvResult",
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
                        "type" : "IsNull",
                        "operand" : {
                           "name" : "ErrorCotestWithMissingHpvResult",
                           "type" : "ExpressionRef"
                        }
                     }, {
                        "type" : "AnyTrue",
                        "source" : {
                           "type" : "Query",
                           "source" : [ {
                              "alias" : "aC",
                              "expression" : {
                                 "type" : "Flatten",
                                 "operand" : {
                                    "type" : "Query",
                                    "source" : [ {
                                       "alias" : "$this",
                                       "expression" : {
                                          "name" : "CoincidentHpvTests",
                                          "type" : "ExpressionRef"
                                       }
                                    } ],
                                    "where" : {
                                       "type" : "Not",
                                       "operand" : {
                                          "type" : "IsNull",
                                          "operand" : {
                                             "path" : "conclusionCode",
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
                                          "path" : "conclusionCode",
                                          "type" : "Property",
                                          "source" : {
                                             "name" : "$this",
                                             "type" : "AliasRef"
                                          }
                                       }
                                    }
                                 }
                              }
                           } ],
                           "relationship" : [ ],
                           "return" : {
                              "expression" : {
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
                                       "name" : "HPV Negative Results",
                                       "libraryName" : "Dash",
                                       "type" : "ValueSetRef"
                                    }
                                 }
                              }
                           }
                        }
                     } ]
                  }
               },
               "then" : {
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "An hrHPV test found as part of a cotest contained a non-negative result. Consider cervical cancer management.",
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
                     "name" : "ErrorCotestWithMissingHpvResult",
                     "type" : "ExpressionRef"
                  }, {
                     "name" : "ErrorCotestWithNonNegativeHpvResult",
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

