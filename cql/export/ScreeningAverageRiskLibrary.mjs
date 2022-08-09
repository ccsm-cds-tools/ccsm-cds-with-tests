export const ScreeningAverageRiskLibrary = {
   "library" : {
      "annotation" : [ {
         "translatorOptions" : "",
         "type" : "CqlToElmInfo"
      } ],
      "identifier" : {
         "id" : "ScreeningAverageRiskLibrary",
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
            "localIdentifier" : "FHIRHelpers",
            "path" : "FHIRHelpers",
            "version" : "4.0.1"
         }, {
            "localIdentifier" : "C3F",
            "path" : "CDSConnectCommonsforFHIRv401",
            "version" : "1.0.0"
         }, {
            "localIdentifier" : "Common",
            "path" : "CCSMCommonFunctions",
            "version" : "1.0.0"
         }, {
            "localIdentifier" : "Dash",
            "path" : "DashboardLibrary",
            "version" : "1.0.0"
         }, {
            "localIdentifier" : "Symptomatic",
            "path" : "ScreeningSymptomaticLibrary",
            "version" : "1.0.0"
         }, {
            "localIdentifier" : "DesExposure",
            "path" : "ScreeningDesExposureLibrary",
            "version" : "1.0.0"
         }, {
            "localIdentifier" : "Immunocompromised",
            "path" : "ScreeningImmunocompromisedLibrary",
            "version" : "1.0.0"
         } ]
      },
      "parameters" : {
         "def" : [ {
            "name" : "MinimumScreeningAge",
            "accessLevel" : "Public",
            "default" : {
               "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
               "value" : "21",
               "type" : "Literal"
            }
         }, {
            "name" : "CytologyTestingCadence",
            "accessLevel" : "Public",
            "default" : {
               "value" : 3,
               "unit" : "years",
               "type" : "Quantity"
            }
         }, {
            "name" : "PrimaryHpvTestingCadence",
            "accessLevel" : "Public",
            "default" : {
               "value" : 5,
               "unit" : "years",
               "type" : "Quantity"
            }
         }, {
            "name" : "CotestingCadence",
            "accessLevel" : "Public",
            "default" : {
               "value" : 5,
               "unit" : "years",
               "type" : "Quantity"
            }
         }, {
            "name" : "AllowGradeDExclusion",
            "accessLevel" : "Public",
            "default" : {
               "valueType" : "{urn:hl7-org:elm-types:r1}Boolean",
               "value" : "true",
               "type" : "Literal"
            }
         }, {
            "name" : "AllowGradeDRecommendation",
            "accessLevel" : "Public",
            "default" : {
               "valueType" : "{urn:hl7-org:elm-types:r1}Boolean",
               "value" : "true",
               "type" : "Literal"
            }
         }, {
            "name" : "GradeDAdequatePriorScreeningLookback",
            "accessLevel" : "Public",
            "default" : {
               "value" : 10,
               "unit" : "years",
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
            "name" : "IsIncluded",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "type" : "And",
               "operand" : [ {
                  "type" : "Or",
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
                           "name" : "MinimumScreeningAge",
                           "type" : "ParameterRef"
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
                           "value" : "65",
                           "type" : "Literal"
                        } ]
                     } ]
                  }, {
                     "type" : "And",
                     "operand" : [ {
                        "name" : "AllowGradeDRecommendation",
                        "type" : "ParameterRef"
                     }, {
                        "type" : "Greater",
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
                           "value" : "65",
                           "type" : "Literal"
                        } ]
                     } ]
                  } ]
               }, {
                  "name" : "FemaleorTransgenderMale",
                  "libraryName" : "Dash",
                  "type" : "ExpressionRef"
               } ]
            }
         }, {
            "name" : "ExcludedBecauseSymptomatic",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "name" : "IsIncludedAndNotExcluded",
               "libraryName" : "Symptomatic",
               "type" : "ExpressionRef"
            }
         }, {
            "name" : "ExcludedBecauseDesExposure",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "name" : "IsIncludedAndNotExcluded",
               "libraryName" : "DesExposure",
               "type" : "ExpressionRef"
            }
         }, {
            "name" : "ExcludedBecauseImmunocompromised",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "name" : "IsIncludedAndNotExcluded",
               "libraryName" : "Immunocompromised",
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
                           "type" : "Or",
                           "operand" : [ {
                              "type" : "Or",
                              "operand" : [ {
                                 "type" : "Or",
                                 "operand" : [ {
                                    "name" : "ExcludedBecauseSymptomatic",
                                    "type" : "ExpressionRef"
                                 }, {
                                    "name" : "ExcludedBecauseDesExposure",
                                    "type" : "ExpressionRef"
                                 } ]
                              }, {
                                 "name" : "ExcludedBecauseImmunocompromised",
                                 "type" : "ExpressionRef"
                              } ]
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
            "name" : "Age30Through65",
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
                     "value" : "30",
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
                     "value" : "65",
                     "type" : "Literal"
                  } ]
               } ]
            }
         }, {
            "name" : "AgeOver65",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "type" : "Greater",
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
                  "value" : "65",
                  "type" : "Literal"
               } ]
            }
         }, {
            "name" : "MostRecentNilmCytology",
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
                           "name" : "MostRecentNilmCytology",
                           "libraryName" : "Dash",
                           "type" : "ExpressionRef"
                        }
                     }
                  }
               },
               "then" : {
                  "type" : "Tuple",
                  "element" : [ {
                     "name" : "type",
                     "value" : {
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "Cervical Cytology",
                        "type" : "Literal"
                     }
                  }, {
                     "name" : "date",
                     "value" : {
                        "name" : "DiagnosticReportDate",
                        "libraryName" : "Common",
                        "type" : "FunctionRef",
                        "operand" : [ {
                           "name" : "MostRecentNilmCytology",
                           "libraryName" : "Dash",
                           "type" : "ExpressionRef"
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
                        "name" : "type",
                        "type" : {
                           "name" : "{urn:hl7-org:elm-types:r1}String",
                           "type" : "NamedTypeSpecifier"
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
            "name" : "DateOfMostRecentNilmCytology",
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
                              "name" : "MostRecentNilmCytology",
                              "type" : "ExpressionRef"
                           }
                        }
                     }
                  }
               },
               "then" : {
                  "path" : "date",
                  "type" : "Property",
                  "source" : {
                     "name" : "MostRecentNilmCytology",
                     "type" : "ExpressionRef"
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
            "name" : "MostRecentNegativeHpvTest",
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
                           "name" : "MostRecentNegativeHpv",
                           "libraryName" : "Dash",
                           "type" : "ExpressionRef"
                        }
                     }
                  }
               },
               "then" : {
                  "type" : "Tuple",
                  "element" : [ {
                     "name" : "type",
                     "value" : {
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "hrHPV",
                        "type" : "Literal"
                     }
                  }, {
                     "name" : "date",
                     "value" : {
                        "name" : "DiagnosticReportDate",
                        "libraryName" : "Common",
                        "type" : "FunctionRef",
                        "operand" : [ {
                           "name" : "MostRecentNegativeHpv",
                           "libraryName" : "Dash",
                           "type" : "ExpressionRef"
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
                        "name" : "type",
                        "type" : {
                           "name" : "{urn:hl7-org:elm-types:r1}String",
                           "type" : "NamedTypeSpecifier"
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
            "name" : "DateOfMostRecentNegativeHpv",
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
                           "name" : "MostRecentNegativeHpvTest",
                           "type" : "ExpressionRef"
                        }
                     }
                  }
               },
               "then" : {
                  "path" : "date",
                  "type" : "Property",
                  "source" : {
                     "name" : "MostRecentNegativeHpvTest",
                     "type" : "ExpressionRef"
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
            "name" : "MostRecentNegativeCotest",
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
                              "name" : "MostRecentNilmCytology",
                              "type" : "ExpressionRef"
                           }
                        }
                     }, {
                        "type" : "Not",
                        "operand" : {
                           "type" : "IsNull",
                           "operand" : {
                              "name" : "MostRecentNegativeHpvTest",
                              "type" : "ExpressionRef"
                           }
                        }
                     } ]
                  }
               },
               "then" : {
                  "type" : "Query",
                  "source" : [ {
                     "alias" : "C",
                     "expression" : {
                        "name" : "MostRecentNilmCytology",
                        "libraryName" : "Dash",
                        "type" : "ExpressionRef"
                     }
                  }, {
                     "alias" : "H",
                     "expression" : {
                        "name" : "MostRecentNegativeHpv",
                        "libraryName" : "Dash",
                        "type" : "ExpressionRef"
                     }
                  } ],
                  "relationship" : [ ],
                  "where" : {
                     "name" : "CoincidentDiagnosticReports",
                     "libraryName" : "Common",
                     "type" : "FunctionRef",
                     "operand" : [ {
                        "name" : "C",
                        "type" : "AliasRef"
                     }, {
                        "name" : "H",
                        "type" : "AliasRef"
                     } ]
                  },
                  "return" : {
                     "expression" : {
                        "type" : "Tuple",
                        "element" : [ {
                           "name" : "type",
                           "value" : {
                              "valueType" : "{urn:hl7-org:elm-types:r1}String",
                              "value" : "Cotesting with hrHPV and Cervical Cytology",
                              "type" : "Literal"
                           }
                        }, {
                           "name" : "date",
                           "value" : {
                              "name" : "DiagnosticReportDate",
                              "libraryName" : "Common",
                              "type" : "FunctionRef",
                              "operand" : [ {
                                 "name" : "MostRecentDiagnosticReport",
                                 "libraryName" : "Common",
                                 "type" : "FunctionRef",
                                 "operand" : [ {
                                    "type" : "List",
                                    "element" : [ {
                                       "name" : "C",
                                       "type" : "AliasRef"
                                    }, {
                                       "name" : "H",
                                       "type" : "AliasRef"
                                    } ]
                                 } ]
                              } ]
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
                        "name" : "type",
                        "type" : {
                           "name" : "{urn:hl7-org:elm-types:r1}String",
                           "type" : "NamedTypeSpecifier"
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
            "name" : "DateOfMostRecentNegativeCotest",
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
                           "name" : "MostRecentNegativeCotest",
                           "type" : "ExpressionRef"
                        }
                     }
                  }
               },
               "then" : {
                  "path" : "date",
                  "type" : "Property",
                  "source" : {
                     "name" : "MostRecentNegativeCotest",
                     "type" : "ExpressionRef"
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
            "name" : "ProposedDateOfNextCytology",
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
                           "name" : "DateOfMostRecentNilmCytology",
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
                              "name" : "DateOfMostRecentNilmCytology",
                              "type" : "ExpressionRef"
                           }, {
                              "name" : "CytologyTestingCadence",
                              "type" : "ParameterRef"
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
                        "name" : "DateOfMostRecentNilmCytology",
                        "type" : "ExpressionRef"
                     }, {
                        "name" : "CytologyTestingCadence",
                        "type" : "ParameterRef"
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
            "name" : "ProposedDateOfNextHpvTest",
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
                           "name" : "DateOfMostRecentNegativeHpv",
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
                              "name" : "DateOfMostRecentNegativeHpv",
                              "type" : "ExpressionRef"
                           }, {
                              "name" : "PrimaryHpvTestingCadence",
                              "type" : "ParameterRef"
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
                        "name" : "DateOfMostRecentNegativeHpv",
                        "type" : "ExpressionRef"
                     }, {
                        "name" : "PrimaryHpvTestingCadence",
                        "type" : "ParameterRef"
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
            "name" : "ProposedDateOfNextCotest",
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
                           "name" : "DateOfMostRecentNegativeCotest",
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
                              "name" : "DateOfMostRecentNegativeCotest",
                              "type" : "ExpressionRef"
                           }, {
                              "name" : "CotestingCadence",
                              "type" : "ParameterRef"
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
                        "name" : "DateOfMostRecentNegativeCotest",
                        "type" : "ExpressionRef"
                     }, {
                        "name" : "CotestingCadence",
                        "type" : "ParameterRef"
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
            "name" : "LastScreeningType",
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
                           "name" : "DateOfMostRecentNegativeCotest",
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
                        "type" : "And",
                        "operand" : [ {
                           "type" : "SameOrAfter",
                           "operand" : [ {
                              "name" : "DateOfMostRecentNegativeCotest",
                              "type" : "ExpressionRef"
                           }, {
                              "name" : "DateOfMostRecentNilmCytology",
                              "type" : "ExpressionRef"
                           } ]
                        }, {
                           "type" : "SameOrAfter",
                           "operand" : [ {
                              "name" : "DateOfMostRecentNegativeCotest",
                              "type" : "ExpressionRef"
                           }, {
                              "name" : "DateOfMostRecentNegativeHpv",
                              "type" : "ExpressionRef"
                           } ]
                        } ]
                     }
                  },
                  "then" : {
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "Cotesting with hrHPV and Cervical Cytology",
                     "type" : "Literal"
                  },
                  "else" : {
                     "type" : "If",
                     "condition" : {
                        "asType" : "{urn:hl7-org:elm-types:r1}Boolean",
                        "type" : "As",
                        "operand" : {
                           "type" : "After",
                           "operand" : [ {
                              "name" : "DateOfMostRecentNilmCytology",
                              "type" : "ExpressionRef"
                           }, {
                              "name" : "DateOfMostRecentNegativeHpv",
                              "type" : "ExpressionRef"
                           } ]
                        }
                     },
                     "then" : {
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "Cervical Cytology",
                        "type" : "Literal"
                     },
                     "else" : {
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "hrHPV",
                        "type" : "Literal"
                     }
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
                              "name" : "DateOfMostRecentNilmCytology",
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
                                 "name" : "DateOfMostRecentNegativeHpv",
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
                              "type" : "After",
                              "operand" : [ {
                                 "name" : "DateOfMostRecentNilmCytology",
                                 "type" : "ExpressionRef"
                              }, {
                                 "name" : "DateOfMostRecentNegativeHpv",
                                 "type" : "ExpressionRef"
                              } ]
                           }
                        },
                        "then" : {
                           "valueType" : "{urn:hl7-org:elm-types:r1}String",
                           "value" : "Cervical Cytology",
                           "type" : "Literal"
                        },
                        "else" : {
                           "valueType" : "{urn:hl7-org:elm-types:r1}String",
                           "value" : "hrHPV",
                           "type" : "Literal"
                        }
                     },
                     "else" : {
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "Cervical Cytology",
                        "type" : "Literal"
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
                                 "name" : "DateOfMostRecentNegativeHpv",
                                 "type" : "ExpressionRef"
                              }
                           }
                        }
                     },
                     "then" : {
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "hrHPV",
                        "type" : "Literal"
                     },
                     "else" : {
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "n/a",
                        "type" : "Literal"
                     }
                  }
               }
            }
         }, {
            "name" : "ProposedScreeningDate",
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
                        "name" : "LastScreeningType",
                        "type" : "ExpressionRef"
                     }, {
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "Cervical Cytology",
                        "type" : "Literal"
                     } ]
                  }
               },
               "then" : {
                  "name" : "ProposedDateOfNextCytology",
                  "type" : "ExpressionRef"
               },
               "else" : {
                  "type" : "If",
                  "condition" : {
                     "asType" : "{urn:hl7-org:elm-types:r1}Boolean",
                     "type" : "As",
                     "operand" : {
                        "type" : "Equal",
                        "operand" : [ {
                           "name" : "LastScreeningType",
                           "type" : "ExpressionRef"
                        }, {
                           "valueType" : "{urn:hl7-org:elm-types:r1}String",
                           "value" : "hrHPV",
                           "type" : "Literal"
                        } ]
                     }
                  },
                  "then" : {
                     "name" : "ProposedDateOfNextHpvTest",
                     "type" : "ExpressionRef"
                  },
                  "else" : {
                     "type" : "If",
                     "condition" : {
                        "asType" : "{urn:hl7-org:elm-types:r1}Boolean",
                        "type" : "As",
                        "operand" : {
                           "type" : "Equal",
                           "operand" : [ {
                              "name" : "LastScreeningType",
                              "type" : "ExpressionRef"
                           }, {
                              "valueType" : "{urn:hl7-org:elm-types:r1}String",
                              "value" : "Cotesting with hrHPV and Cervical Cytology",
                              "type" : "Literal"
                           } ]
                        }
                     },
                     "then" : {
                        "name" : "ProposedDateOfNextCotest",
                        "type" : "ExpressionRef"
                     },
                     "else" : {
                        "type" : "ToDateTime",
                        "operand" : {
                           "type" : "Today"
                        }
                     }
                  }
               }
            }
         }, {
            "name" : "CervicalCytologyTestsForGradeDUnfiltered",
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
                        "libraryName" : "Dash",
                        "type" : "ValueSetRef"
                     }
                  }, {
                     "name" : "GradeDAdequatePriorScreeningLookback",
                     "type" : "ParameterRef"
                  } ]
               } ]
            }
         }, {
            "name" : "CervicalCytologyTestsForGradeD",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "type" : "If",
               "condition" : {
                  "asType" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "type" : "As",
                  "operand" : {
                     "name" : "AllowGradeDRecommendation",
                     "type" : "ParameterRef"
                  }
               },
               "then" : {
                  "type" : "Query",
                  "source" : [ {
                     "alias" : "C",
                     "expression" : {
                        "name" : "CervicalCytologyTestsForGradeDUnfiltered",
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
                              "scope" : "C",
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
                                    "libraryName" : "Dash",
                                    "type" : "CodeRef"
                                 }
                              } ]
                           }
                        }
                     }
                  },
                  "return" : {
                     "expression" : {
                        "type" : "Tuple",
                        "element" : [ {
                           "name" : "type",
                           "value" : {
                              "valueType" : "{urn:hl7-org:elm-types:r1}String",
                              "value" : "Cervical Cytology",
                              "type" : "Literal"
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
                        "direction" : "asc",
                        "path" : "date",
                        "type" : "ByColumn"
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
                           "name" : "type",
                           "type" : {
                              "name" : "{urn:hl7-org:elm-types:r1}String",
                              "type" : "NamedTypeSpecifier"
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
            "name" : "HasThreeNegativeCytologyTestsForGradeD",
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
                        "name" : "CervicalCytologyTestsForGradeD",
                        "type" : "ExpressionRef"
                     }
                  }
               },
               "then" : {
                  "type" : "And",
                  "operand" : [ {
                     "type" : "GreaterOrEqual",
                     "operand" : [ {
                        "type" : "Count",
                        "source" : {
                           "name" : "CervicalCytologyTestsForGradeD",
                           "type" : "ExpressionRef"
                        }
                     }, {
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "3",
                        "type" : "Literal"
                     } ]
                  }, {
                     "type" : "After",
                     "operand" : [ {
                        "path" : "date",
                        "type" : "Property",
                        "source" : {
                           "type" : "Last",
                           "source" : {
                              "name" : "CervicalCytologyTestsForGradeD",
                              "type" : "ExpressionRef"
                           }
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
                  } ]
               },
               "else" : {
                  "valueType" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "value" : "false",
                  "type" : "Literal"
               }
            }
         }, {
            "name" : "HpvTestsForGradeDUnfiltered",
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
                        "libraryName" : "Dash",
                        "type" : "ValueSetRef"
                     }
                  }, {
                     "name" : "GradeDAdequatePriorScreeningLookback",
                     "type" : "ParameterRef"
                  } ]
               } ]
            }
         }, {
            "name" : "HpvTestsForGradeD",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "type" : "If",
               "condition" : {
                  "asType" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "type" : "As",
                  "operand" : {
                     "name" : "AllowGradeDRecommendation",
                     "type" : "ParameterRef"
                  }
               },
               "then" : {
                  "type" : "Query",
                  "source" : [ {
                     "alias" : "H",
                     "expression" : {
                        "name" : "HpvTestsForGradeDUnfiltered",
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
                              "scope" : "H",
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
                                    "name" : "cC",
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
                  },
                  "return" : {
                     "expression" : {
                        "type" : "Tuple",
                        "element" : [ {
                           "name" : "type",
                           "value" : {
                              "valueType" : "{urn:hl7-org:elm-types:r1}String",
                              "value" : "hrHPV",
                              "type" : "Literal"
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
                        "direction" : "asc",
                        "path" : "date",
                        "type" : "ByColumn"
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
                           "name" : "type",
                           "type" : {
                              "name" : "{urn:hl7-org:elm-types:r1}String",
                              "type" : "NamedTypeSpecifier"
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
            "name" : "HasTwoNegativeHpvTestsForGradeD",
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
                        "name" : "HpvTestsForGradeD",
                        "type" : "ExpressionRef"
                     }
                  }
               },
               "then" : {
                  "type" : "And",
                  "operand" : [ {
                     "type" : "GreaterOrEqual",
                     "operand" : [ {
                        "type" : "Count",
                        "source" : {
                           "name" : "HpvTestsForGradeD",
                           "type" : "ExpressionRef"
                        }
                     }, {
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "2",
                        "type" : "Literal"
                     } ]
                  }, {
                     "type" : "After",
                     "operand" : [ {
                        "path" : "date",
                        "type" : "Property",
                        "source" : {
                           "type" : "Last",
                           "source" : {
                              "name" : "HpvTestsForGradeD",
                              "type" : "ExpressionRef"
                           }
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
                  } ]
               },
               "else" : {
                  "valueType" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "value" : "false",
                  "type" : "Literal"
               }
            }
         }, {
            "name" : "AdequatelyScreened",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "type" : "Or",
               "operand" : [ {
                  "name" : "HasThreeNegativeCytologyTestsForGradeD",
                  "type" : "ExpressionRef"
               }, {
                  "name" : "HasTwoNegativeHpvTestsForGradeD",
                  "type" : "ExpressionRef"
               } ]
            }
         }, {
            "name" : "NotAdequatelyScreened",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "type" : "Not",
               "operand" : {
                  "name" : "AdequatelyScreened",
                  "type" : "ExpressionRef"
               }
            }
         }, {
            "name" : "RecommendImmediateCervicalCytology",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "type" : "And",
               "operand" : [ {
                  "name" : "IsIncludedAndNotExcluded",
                  "type" : "ExpressionRef"
               }, {
                  "type" : "And",
                  "operand" : [ {
                     "type" : "And",
                     "operand" : [ {
                        "type" : "Equal",
                        "operand" : [ {
                           "name" : "ProposedDateOfNextCytology",
                           "type" : "ExpressionRef"
                        }, {
                           "type" : "Now"
                        } ]
                     }, {
                        "type" : "Or",
                        "operand" : [ {
                           "type" : "Equal",
                           "operand" : [ {
                              "name" : "LastScreeningType",
                              "type" : "ExpressionRef"
                           }, {
                              "valueType" : "{urn:hl7-org:elm-types:r1}String",
                              "value" : "Cervical Cytology",
                              "type" : "Literal"
                           } ]
                        }, {
                           "type" : "Equal",
                           "operand" : [ {
                              "name" : "LastScreeningType",
                              "type" : "ExpressionRef"
                           }, {
                              "valueType" : "{urn:hl7-org:elm-types:r1}String",
                              "value" : "n/a",
                              "type" : "Literal"
                           } ]
                        } ]
                     } ]
                  }, {
                     "type" : "Or",
                     "operand" : [ {
                        "type" : "Or",
                        "operand" : [ {
                           "name" : "Age21Through29",
                           "type" : "ExpressionRef"
                        }, {
                           "name" : "Age30Through65",
                           "type" : "ExpressionRef"
                        } ]
                     }, {
                        "type" : "And",
                        "operand" : [ {
                           "type" : "And",
                           "operand" : [ {
                              "name" : "AllowGradeDRecommendation",
                              "type" : "ParameterRef"
                           }, {
                              "name" : "AgeOver65",
                              "type" : "ExpressionRef"
                           } ]
                        }, {
                           "name" : "NotAdequatelyScreened",
                           "type" : "ExpressionRef"
                        } ]
                     } ]
                  } ]
               } ]
            }
         }, {
            "name" : "RecommendImmediatePrimaryHpv",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "type" : "And",
               "operand" : [ {
                  "name" : "IsIncludedAndNotExcluded",
                  "type" : "ExpressionRef"
               }, {
                  "type" : "And",
                  "operand" : [ {
                     "type" : "And",
                     "operand" : [ {
                        "type" : "Equal",
                        "operand" : [ {
                           "name" : "ProposedDateOfNextHpvTest",
                           "type" : "ExpressionRef"
                        }, {
                           "type" : "Now"
                        } ]
                     }, {
                        "type" : "Or",
                        "operand" : [ {
                           "type" : "Equal",
                           "operand" : [ {
                              "name" : "LastScreeningType",
                              "type" : "ExpressionRef"
                           }, {
                              "valueType" : "{urn:hl7-org:elm-types:r1}String",
                              "value" : "hrHPV",
                              "type" : "Literal"
                           } ]
                        }, {
                           "type" : "Equal",
                           "operand" : [ {
                              "name" : "LastScreeningType",
                              "type" : "ExpressionRef"
                           }, {
                              "valueType" : "{urn:hl7-org:elm-types:r1}String",
                              "value" : "n/a",
                              "type" : "Literal"
                           } ]
                        } ]
                     } ]
                  }, {
                     "type" : "Or",
                     "operand" : [ {
                        "name" : "Age30Through65",
                        "type" : "ExpressionRef"
                     }, {
                        "type" : "And",
                        "operand" : [ {
                           "type" : "And",
                           "operand" : [ {
                              "name" : "AllowGradeDRecommendation",
                              "type" : "ParameterRef"
                           }, {
                              "name" : "AgeOver65",
                              "type" : "ExpressionRef"
                           } ]
                        }, {
                           "name" : "NotAdequatelyScreened",
                           "type" : "ExpressionRef"
                        } ]
                     } ]
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
                  "name" : "IsIncludedAndNotExcluded",
                  "type" : "ExpressionRef"
               }, {
                  "type" : "And",
                  "operand" : [ {
                     "type" : "And",
                     "operand" : [ {
                        "type" : "Equal",
                        "operand" : [ {
                           "name" : "ProposedDateOfNextCotest",
                           "type" : "ExpressionRef"
                        }, {
                           "type" : "Now"
                        } ]
                     }, {
                        "type" : "Or",
                        "operand" : [ {
                           "type" : "Equal",
                           "operand" : [ {
                              "name" : "LastScreeningType",
                              "type" : "ExpressionRef"
                           }, {
                              "valueType" : "{urn:hl7-org:elm-types:r1}String",
                              "value" : "Cotesting with hrHPV and Cervical Cytology",
                              "type" : "Literal"
                           } ]
                        }, {
                           "type" : "Equal",
                           "operand" : [ {
                              "name" : "LastScreeningType",
                              "type" : "ExpressionRef"
                           }, {
                              "valueType" : "{urn:hl7-org:elm-types:r1}String",
                              "value" : "n/a",
                              "type" : "Literal"
                           } ]
                        } ]
                     } ]
                  }, {
                     "type" : "Or",
                     "operand" : [ {
                        "name" : "Age30Through65",
                        "type" : "ExpressionRef"
                     }, {
                        "type" : "And",
                        "operand" : [ {
                           "type" : "And",
                           "operand" : [ {
                              "name" : "AllowGradeDRecommendation",
                              "type" : "ParameterRef"
                           }, {
                              "name" : "AgeOver65",
                              "type" : "ExpressionRef"
                           } ]
                        }, {
                           "name" : "NotAdequatelyScreened",
                           "type" : "ExpressionRef"
                        } ]
                     } ]
                  } ]
               } ]
            }
         }, {
            "name" : "RecommendImmediateScreening",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "type" : "Or",
               "operand" : [ {
                  "type" : "Or",
                  "operand" : [ {
                     "name" : "RecommendImmediateCervicalCytology",
                     "type" : "ExpressionRef"
                  }, {
                     "name" : "RecommendImmediatePrimaryHpv",
                     "type" : "ExpressionRef"
                  } ]
               }, {
                  "name" : "RecommendImmediateCotesting",
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
            "name" : "AbsenceOrRemovalOfCervixWithoutHistoryOfHighGradePrecancerOrCancer",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "type" : "And",
               "operand" : [ {
                  "name" : "AbsenceOrRemovalOfCervix",
                  "type" : "ExpressionRef"
               }, {
                  "type" : "Not",
                  "operand" : {
                     "type" : "Or",
                     "operand" : [ {
                        "type" : "Or",
                        "operand" : [ {
                           "name" : "HasHighGradePreCancerCervicalLesion",
                           "type" : "ExpressionRef"
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
                  }
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
                     "name" : "IsIncludedAndNotExcluded",
                     "type" : "ExpressionRef"
                  }
               },
               "then" : {
                  "type" : "If",
                  "condition" : {
                     "asType" : "{urn:hl7-org:elm-types:r1}Boolean",
                     "type" : "As",
                     "operand" : {
                        "type" : "And",
                        "operand" : [ {
                           "name" : "AllowGradeDExclusion",
                           "type" : "ParameterRef"
                        }, {
                           "name" : "AbsenceOrRemovalOfCervixWithoutHistoryOfHighGradePrecancerOrCancer",
                           "type" : "ExpressionRef"
                        } ]
                     }
                  },
                  "then" : {
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "Per the USPSTF Grade D Recommendation, cervical cancer screening is not recommended for this patient because they do not have a cervix and there is no evidence of high grade precancer/cancer in their medical history.",
                     "type" : "Literal"
                  },
                  "else" : {
                     "type" : "If",
                     "condition" : {
                        "asType" : "{urn:hl7-org:elm-types:r1}Boolean",
                        "type" : "As",
                        "operand" : {
                           "name" : "AgeOver65",
                           "type" : "ExpressionRef"
                        }
                     },
                     "then" : {
                        "type" : "If",
                        "condition" : {
                           "asType" : "{urn:hl7-org:elm-types:r1}Boolean",
                           "type" : "As",
                           "operand" : {
                              "name" : "AllowGradeDRecommendation",
                              "type" : "ParameterRef"
                           }
                        },
                        "then" : {
                           "type" : "If",
                           "condition" : {
                              "asType" : "{urn:hl7-org:elm-types:r1}Boolean",
                              "type" : "As",
                              "operand" : {
                                 "name" : "RecommendImmediateScreening",
                                 "type" : "ExpressionRef"
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
                                       "type" : "Equal",
                                       "operand" : [ {
                                          "name" : "LastScreeningType",
                                          "type" : "ExpressionRef"
                                       }, {
                                          "valueType" : "{urn:hl7-org:elm-types:r1}String",
                                          "value" : "n/a",
                                          "type" : "Literal"
                                       } ]
                                    }
                                 }
                              },
                              "then" : {
                                 "type" : "Concatenate",
                                 "operand" : [ {
                                    "type" : "Concatenate",
                                    "operand" : [ {
                                       "type" : "Concatenate",
                                       "operand" : [ {
                                          "type" : "Concatenate",
                                          "operand" : [ {
                                             "type" : "Concatenate",
                                             "operand" : [ {
                                                "type" : "Concatenate",
                                                "operand" : [ {
                                                   "type" : "Concatenate",
                                                   "operand" : [ {
                                                      "type" : "Concatenate",
                                                      "operand" : [ {
                                                         "valueType" : "{urn:hl7-org:elm-types:r1}String",
                                                         "value" : "Per USPSTF guidelines, this patient is due for cervical cancer screening because they have not been adequately screened in the past. ",
                                                         "type" : "Literal"
                                                      }, {
                                                         "valueType" : "{urn:hl7-org:elm-types:r1}String",
                                                         "value" : "Adequate testing is defined as having: 1) three consecutive negative cytology results within 10 years prior to screening, ",
                                                         "type" : "Literal"
                                                      } ]
                                                   }, {
                                                      "valueType" : "{urn:hl7-org:elm-types:r1}String",
                                                      "value" : "2) two consecutive negative hrHPV results within 10 years prior to the end of screening, with the most recent test occurring within 5 years or ",
                                                      "type" : "Literal"
                                                   } ]
                                                }, {
                                                   "valueType" : "{urn:hl7-org:elm-types:r1}String",
                                                   "value" : "3) two consecutive negative cotesting results within 10 years prior to the end of screening, with the most recent test occurring within 5 years. ",
                                                   "type" : "Literal"
                                                } ]
                                             }, {
                                                "valueType" : "{urn:hl7-org:elm-types:r1}String",
                                                "value" : "It appears that this patient is on a screening regimen that includes ",
                                                "type" : "Literal"
                                             } ]
                                          }, {
                                             "name" : "LastScreeningType",
                                             "type" : "ExpressionRef"
                                          } ]
                                       }, {
                                          "valueType" : "{urn:hl7-org:elm-types:r1}String",
                                          "value" : ". To meet \"adequate testing criteria\", ",
                                          "type" : "Literal"
                                       } ]
                                    }, {
                                       "name" : "LastScreeningType",
                                       "type" : "ExpressionRef"
                                    } ]
                                 }, {
                                    "valueType" : "{urn:hl7-org:elm-types:r1}String",
                                    "value" : " is recommended.",
                                    "type" : "Literal"
                                 } ]
                              },
                              "else" : {
                                 "type" : "Concatenate",
                                 "operand" : [ {
                                    "type" : "Concatenate",
                                    "operand" : [ {
                                       "type" : "Concatenate",
                                       "operand" : [ {
                                          "type" : "Concatenate",
                                          "operand" : [ {
                                             "valueType" : "{urn:hl7-org:elm-types:r1}String",
                                             "value" : "Per USPSTF guidelines, this patient is due for cervical cancer screening because they have not been adequately screened in the past. ",
                                             "type" : "Literal"
                                          }, {
                                             "valueType" : "{urn:hl7-org:elm-types:r1}String",
                                             "value" : "Adequate testing is defined as having: 1) three consecutive negative cytology results within 10 years prior to screening, ",
                                             "type" : "Literal"
                                          } ]
                                       }, {
                                          "valueType" : "{urn:hl7-org:elm-types:r1}String",
                                          "value" : "2) two consecutive negative hrHPV results within 10 years prior to the end of screening, with the most recent test occurring within 5 years or ",
                                          "type" : "Literal"
                                       } ]
                                    }, {
                                       "valueType" : "{urn:hl7-org:elm-types:r1}String",
                                       "value" : "3) two consecutive negative cotesting results within 10 years prior to the end of screening, with the most recent test occurring within 5 years. ",
                                       "type" : "Literal"
                                    } ]
                                 }, {
                                    "valueType" : "{urn:hl7-org:elm-types:r1}String",
                                    "value" : "To meet \"adequate testing criteria\", a 1) cervical cytology test or, 2) hrHPV test, or 3) a cotest (which includes a cervical cytology test and a hrHPV test) is recommended.",
                                    "type" : "Literal"
                                 } ]
                              }
                           },
                           "else" : {
                              "type" : "If",
                              "condition" : {
                                 "asType" : "{urn:hl7-org:elm-types:r1}Boolean",
                                 "type" : "As",
                                 "operand" : {
                                    "name" : "NotAdequatelyScreened",
                                    "type" : "ExpressionRef"
                                 }
                              },
                              "then" : {
                                 "type" : "Concatenate",
                                 "operand" : [ {
                                    "type" : "Concatenate",
                                    "operand" : [ {
                                       "type" : "Concatenate",
                                       "operand" : [ {
                                          "type" : "Concatenate",
                                          "operand" : [ {
                                             "type" : "Concatenate",
                                             "operand" : [ {
                                                "name" : "LastScreeningType",
                                                "type" : "ExpressionRef"
                                             }, {
                                                "valueType" : "{urn:hl7-org:elm-types:r1}String",
                                                "value" : " is next due on ",
                                                "type" : "Literal"
                                             } ]
                                          }, {
                                             "type" : "ToString",
                                             "operand" : {
                                                "type" : "ToDate",
                                                "operand" : {
                                                   "name" : "ProposedScreeningDate",
                                                   "type" : "ExpressionRef"
                                                }
                                             }
                                          } ]
                                       }, {
                                          "valueType" : "{urn:hl7-org:elm-types:r1}String",
                                          "value" : ". Note: ",
                                          "type" : "Literal"
                                       } ]
                                    }, {
                                       "name" : "LastScreeningType",
                                       "type" : "ExpressionRef"
                                    } ]
                                 }, {
                                    "valueType" : "{urn:hl7-org:elm-types:r1}String",
                                    "value" : " seems to either 1) be the preferred screening approach, or 2) is most evident in the patient record. Per USPSTF guidelines, screening can be performed by using: 1) cervical cytology testing alone, 2) hrHPV testing alone, or 3) cotesting with cervical cytology testing and hrHPV testing.",
                                    "type" : "Literal"
                                 } ]
                              },
                              "else" : {
                                 "valueType" : "{urn:hl7-org:elm-types:r1}String",
                                 "value" : "Per USPSTF guidelines, this patient is over 65 years of age and has been adequately screened in the past. Therefore, they no longer require cervical cancer screening.",
                                 "type" : "Literal"
                              }
                           }
                        },
                        "else" : {
                           "asType" : "{urn:hl7-org:elm-types:r1}String",
                           "type" : "As",
                           "operand" : {
                              "type" : "Null"
                           }
                        }
                     },
                     "else" : {
                        "type" : "If",
                        "condition" : {
                           "asType" : "{urn:hl7-org:elm-types:r1}Boolean",
                           "type" : "As",
                           "operand" : {
                              "name" : "RecommendImmediateScreening",
                              "type" : "ExpressionRef"
                           }
                        },
                        "then" : {
                           "valueType" : "{urn:hl7-org:elm-types:r1}String",
                           "value" : "Per USPSTF guidelines, this patient is due for cervical cancer screening. The screening can be performed by using: 1) cervical cytology testing alone, 2) hrHPV testing alone, or 3) cotesting with cervical cytology testing and hrHPV testing.",
                           "type" : "Literal"
                        },
                        "else" : {
                           "type" : "Concatenate",
                           "operand" : [ {
                              "type" : "Concatenate",
                              "operand" : [ {
                                 "type" : "Concatenate",
                                 "operand" : [ {
                                    "type" : "Concatenate",
                                    "operand" : [ {
                                       "type" : "Concatenate",
                                       "operand" : [ {
                                          "name" : "LastScreeningType",
                                          "type" : "ExpressionRef"
                                       }, {
                                          "valueType" : "{urn:hl7-org:elm-types:r1}String",
                                          "value" : " is next due on ",
                                          "type" : "Literal"
                                       } ]
                                    }, {
                                       "type" : "ToString",
                                       "operand" : {
                                          "type" : "ToDate",
                                          "operand" : {
                                             "name" : "ProposedScreeningDate",
                                             "type" : "ExpressionRef"
                                          }
                                       }
                                    } ]
                                 }, {
                                    "valueType" : "{urn:hl7-org:elm-types:r1}String",
                                    "value" : ". Note: ",
                                    "type" : "Literal"
                                 } ]
                              }, {
                                 "name" : "LastScreeningType",
                                 "type" : "ExpressionRef"
                              } ]
                           }, {
                              "valueType" : "{urn:hl7-org:elm-types:r1}String",
                              "value" : " seems to either 1) be the preferred screening approach, or 2) is most evident in the patient record. Per USPSTF guidelines, screening can be performed by using: 1) cervical cytology testing alone, 2) hrHPV testing alone, or 3) cotesting with cervical cytology testing and hrHPV testing.",
                              "type" : "Literal"
                           } ]
                        }
                     }
                  }
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
            "name" : "ActionShort",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "type" : "If",
               "condition" : {
                  "asType" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "type" : "As",
                  "operand" : {
                     "name" : "RecommendImmediateScreening",
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
                           "name" : "ProposedScreeningDate",
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
                        "value" : "Screening: Average Risk",
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
            "name" : "ErrorNonNilmCytologyResult",
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
                        "type" : "Query",
                        "source" : [ {
                           "alias" : "D",
                           "expression" : {
                              "name" : "CervicalCytologyReports",
                              "libraryName" : "Dash",
                              "type" : "ExpressionRef"
                           }
                        } ],
                        "let" : [ {
                           "identifier" : "CCC",
                           "expression" : {
                              "name" : "CollateConclusionCodes",
                              "libraryName" : "Dash",
                              "type" : "FunctionRef",
                              "operand" : [ {
                                 "name" : "D",
                                 "type" : "AliasRef"
                              }, {
                                 "name" : "CytologyObservations",
                                 "libraryName" : "Dash",
                                 "type" : "ExpressionRef"
                              } ]
                           }
                        } ],
                        "relationship" : [ ],
                        "where" : {
                           "type" : "And",
                           "operand" : [ {
                              "type" : "Exists",
                              "operand" : {
                                 "name" : "CCC",
                                 "type" : "QueryLetRef"
                              }
                           }, {
                              "type" : "AnyTrue",
                              "source" : {
                                 "type" : "Query",
                                 "source" : [ {
                                    "alias" : "cC",
                                    "expression" : {
                                       "name" : "CCC",
                                       "type" : "QueryLetRef"
                                    }
                                 } ],
                                 "relationship" : [ ],
                                 "return" : {
                                    "expression" : {
                                       "type" : "Not",
                                       "operand" : {
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
                              }
                           } ]
                        }
                     }
                  }
               },
               "then" : {
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "A cytology test was found with a non-NILM result. Consider cervical cancer management.",
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
            "name" : "ErrorNonNegativeHpvResult",
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
                        "type" : "Query",
                        "source" : [ {
                           "alias" : "D",
                           "expression" : {
                              "name" : "HpvDiagnosticReports",
                              "libraryName" : "Dash",
                              "type" : "ExpressionRef"
                           }
                        } ],
                        "let" : [ {
                           "identifier" : "CCC",
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
                        "relationship" : [ ],
                        "where" : {
                           "type" : "And",
                           "operand" : [ {
                              "type" : "Exists",
                              "operand" : {
                                 "name" : "CCC",
                                 "type" : "QueryLetRef"
                              }
                           }, {
                              "type" : "AnyTrue",
                              "source" : {
                                 "type" : "Query",
                                 "source" : [ {
                                    "alias" : "cC",
                                    "expression" : {
                                       "name" : "CCC",
                                       "type" : "QueryLetRef"
                                    }
                                 } ],
                                 "relationship" : [ ],
                                 "return" : {
                                    "expression" : {
                                       "type" : "Equal",
                                       "operand" : [ {
                                          "type" : "InValueSet",
                                          "code" : {
                                             "name" : "ToConcept",
                                             "libraryName" : "FHIRHelpers",
                                             "type" : "FunctionRef",
                                             "operand" : [ {
                                                "name" : "cC",
                                                "type" : "AliasRef"
                                             } ]
                                          },
                                          "valueset" : {
                                             "name" : "HPV Negative Results",
                                             "libraryName" : "Dash",
                                             "type" : "ValueSetRef"
                                          }
                                       }, {
                                          "valueType" : "{urn:hl7-org:elm-types:r1}Boolean",
                                          "value" : "false",
                                          "type" : "Literal"
                                       } ]
                                    }
                                 }
                              }
                           } ]
                        }
                     }
                  }
               },
               "then" : {
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "An HPV test was found with a non-negative result. Consider cervical cancer management.",
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
            "name" : "AbnormalResultInRecord",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "type" : "Or",
               "operand" : [ {
                  "type" : "Not",
                  "operand" : {
                     "type" : "IsNull",
                     "operand" : {
                        "name" : "ErrorNonNilmCytologyResult",
                        "type" : "ExpressionRef"
                     }
                  }
               }, {
                  "type" : "Not",
                  "operand" : {
                     "type" : "IsNull",
                     "operand" : {
                        "name" : "ErrorNonNegativeHpvResult",
                        "type" : "ExpressionRef"
                     }
                  }
               } ]
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
                     "name" : "ErrorNonNilmCytologyResult",
                     "type" : "ExpressionRef"
                  }, {
                     "name" : "ErrorNonNegativeHpvResult",
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

