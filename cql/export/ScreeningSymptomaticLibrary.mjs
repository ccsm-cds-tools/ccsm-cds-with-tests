export const ScreeningSymptomaticLibrary = {
   "library" : {
      "annotation" : [ {
         "translatorOptions" : "",
         "type" : "CqlToElmInfo"
      } ],
      "identifier" : {
         "id" : "ScreeningSymptomaticLibrary",
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
            "name" : "SymptomaticLookBack",
            "accessLevel" : "Public",
            "default" : {
               "value" : 1,
               "unit" : "day",
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
            "name" : "IsAge21YearsOrYounger",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
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
                  "value" : "21",
                  "type" : "Literal"
               } ]
            }
         }, {
            "name" : "HasRecentAbnormalBleedingCondition",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "type" : "Exists",
               "operand" : {
                  "name" : "ConditionLookBack",
                  "libraryName" : "C3F",
                  "type" : "FunctionRef",
                  "operand" : [ {
                     "name" : "AbnormalUterineOrVaginalBleedingDiagnoses",
                     "libraryName" : "Dash",
                     "type" : "ExpressionRef"
                  }, {
                     "name" : "SymptomaticLookBack",
                     "type" : "ParameterRef"
                  } ]
               }
            }
         }, {
            "name" : "HasRecentAbnormalBleedingEncounter",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "type" : "Exists",
               "operand" : {
                  "name" : "EncounterLookBack",
                  "libraryName" : "C3F",
                  "type" : "FunctionRef",
                  "operand" : [ {
                     "name" : "AbnormalUterineOrVaginalBleedingEncounters",
                     "libraryName" : "Dash",
                     "type" : "ExpressionRef"
                  }, {
                     "name" : "SymptomaticLookBack",
                     "type" : "ParameterRef"
                  } ]
               }
            }
         }, {
            "name" : "HasRecentAbnormalBleedingObservation",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "type" : "Exists",
               "operand" : {
                  "name" : "ObservationLookBack",
                  "libraryName" : "C3F",
                  "type" : "FunctionRef",
                  "operand" : [ {
                     "name" : "AbnormalUterineOrVaginalBleedingObservations",
                     "libraryName" : "Dash",
                     "type" : "ExpressionRef"
                  }, {
                     "name" : "SymptomaticLookBack",
                     "type" : "ParameterRef"
                  } ]
               }
            }
         }, {
            "name" : "RecentlyRespondedYesToAbnormalBleedingQuestion",
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
                                 "name" : "ResponsesToAbnormalBleedingQuestion",
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
                           "name" : "SymptomaticLookBack",
                           "type" : "ParameterRef"
                        } ]
                     } ]
                  }
               }
            }
         }, {
            "name" : "IsSymptomatic",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "type" : "Or",
               "operand" : [ {
                  "type" : "Or",
                  "operand" : [ {
                     "type" : "Or",
                     "operand" : [ {
                        "name" : "HasRecentAbnormalBleedingCondition",
                        "type" : "ExpressionRef"
                     }, {
                        "name" : "HasRecentAbnormalBleedingEncounter",
                        "type" : "ExpressionRef"
                     } ]
                  }, {
                     "name" : "HasRecentAbnormalBleedingObservation",
                     "type" : "ExpressionRef"
                  } ]
               }, {
                  "name" : "RecentlyRespondedYesToAbnormalBleedingQuestion",
                  "type" : "ExpressionRef"
               } ]
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
                  "name" : "IsSymptomatic",
                  "type" : "ExpressionRef"
               } ]
            }
         }, {
            "name" : "Excluded",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "valueType" : "{urn:hl7-org:elm-types:r1}Boolean",
               "value" : "false",
               "type" : "Literal"
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
            "name" : "MostRecentNilmCytology",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "name" : "MostRecentNilmCytology",
               "libraryName" : "Dash",
               "type" : "ExpressionRef"
            }
         }, {
            "name" : "HasNilmCytologyWithinLast12Months",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "type" : "GreaterOrEqual",
               "operand" : [ {
                  "name" : "DiagnosticReportDate",
                  "libraryName" : "Common",
                  "type" : "FunctionRef",
                  "operand" : [ {
                     "name" : "MostRecentNilmCytology",
                     "type" : "ExpressionRef"
                  } ]
               }, {
                  "type" : "ToDateTime",
                  "operand" : {
                     "type" : "Subtract",
                     "operand" : [ {
                        "type" : "Today"
                     }, {
                        "value" : 12,
                        "unit" : "months",
                        "type" : "Quantity"
                     } ]
                  }
               } ]
            }
         }, {
            "name" : "MostRecentNegativeHpv",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "name" : "MostRecentNegativeHpv",
               "libraryName" : "Dash",
               "type" : "ExpressionRef"
            }
         }, {
            "name" : "MostRecentCoincidentNilmCytologyAndNegativeHpvReport",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "type" : "Query",
               "source" : [ {
                  "alias" : "C",
                  "expression" : {
                     "name" : "MostRecentNilmCytology",
                     "type" : "ExpressionRef"
                  }
               }, {
                  "alias" : "H",
                  "expression" : {
                     "name" : "MostRecentNegativeHpv",
                     "type" : "ExpressionRef"
                  }
               } ],
               "relationship" : [ ],
               "where" : {
                  "type" : "And",
                  "operand" : [ {
                     "type" : "And",
                     "operand" : [ {
                        "type" : "And",
                        "operand" : [ {
                           "type" : "In",
                           "operand" : [ {
                              "name" : "DiagnosticReportDate",
                              "libraryName" : "Common",
                              "type" : "FunctionRef",
                              "operand" : [ {
                                 "name" : "C",
                                 "type" : "AliasRef"
                              } ]
                           }, {
                              "type" : "Interval",
                              "low" : {
                                 "type" : "ToDateTime",
                                 "operand" : {
                                    "path" : "low",
                                    "type" : "Property",
                                    "source" : {
                                       "lowClosed" : true,
                                       "highClosed" : true,
                                       "type" : "Interval",
                                       "low" : {
                                          "type" : "Subtract",
                                          "operand" : [ {
                                             "type" : "Today"
                                          }, {
                                             "value" : 3,
                                             "unit" : "years",
                                             "type" : "Quantity"
                                          } ]
                                       },
                                       "high" : {
                                          "type" : "Add",
                                          "operand" : [ {
                                             "type" : "Today"
                                          }, {
                                             "value" : 3,
                                             "unit" : "years",
                                             "type" : "Quantity"
                                          } ]
                                       }
                                    }
                                 }
                              },
                              "lowClosedExpression" : {
                                 "path" : "lowClosed",
                                 "type" : "Property",
                                 "source" : {
                                    "lowClosed" : true,
                                    "highClosed" : true,
                                    "type" : "Interval",
                                    "low" : {
                                       "type" : "Subtract",
                                       "operand" : [ {
                                          "type" : "Today"
                                       }, {
                                          "value" : 3,
                                          "unit" : "years",
                                          "type" : "Quantity"
                                       } ]
                                    },
                                    "high" : {
                                       "type" : "Add",
                                       "operand" : [ {
                                          "type" : "Today"
                                       }, {
                                          "value" : 3,
                                          "unit" : "years",
                                          "type" : "Quantity"
                                       } ]
                                    }
                                 }
                              },
                              "high" : {
                                 "type" : "ToDateTime",
                                 "operand" : {
                                    "path" : "high",
                                    "type" : "Property",
                                    "source" : {
                                       "lowClosed" : true,
                                       "highClosed" : true,
                                       "type" : "Interval",
                                       "low" : {
                                          "type" : "Subtract",
                                          "operand" : [ {
                                             "type" : "Today"
                                          }, {
                                             "value" : 3,
                                             "unit" : "years",
                                             "type" : "Quantity"
                                          } ]
                                       },
                                       "high" : {
                                          "type" : "Add",
                                          "operand" : [ {
                                             "type" : "Today"
                                          }, {
                                             "value" : 3,
                                             "unit" : "years",
                                             "type" : "Quantity"
                                          } ]
                                       }
                                    }
                                 }
                              },
                              "highClosedExpression" : {
                                 "path" : "highClosed",
                                 "type" : "Property",
                                 "source" : {
                                    "lowClosed" : true,
                                    "highClosed" : true,
                                    "type" : "Interval",
                                    "low" : {
                                       "type" : "Subtract",
                                       "operand" : [ {
                                          "type" : "Today"
                                       }, {
                                          "value" : 3,
                                          "unit" : "years",
                                          "type" : "Quantity"
                                       } ]
                                    },
                                    "high" : {
                                       "type" : "Add",
                                       "operand" : [ {
                                          "type" : "Today"
                                       }, {
                                          "value" : 3,
                                          "unit" : "years",
                                          "type" : "Quantity"
                                       } ]
                                    }
                                 }
                              }
                           } ]
                        }, {
                           "type" : "Not",
                           "operand" : {
                              "type" : "IsNull",
                              "operand" : {
                                 "type" : "Today"
                              }
                           }
                        } ]
                     }, {
                        "type" : "And",
                        "operand" : [ {
                           "type" : "In",
                           "operand" : [ {
                              "name" : "DiagnosticReportDate",
                              "libraryName" : "Common",
                              "type" : "FunctionRef",
                              "operand" : [ {
                                 "name" : "H",
                                 "type" : "AliasRef"
                              } ]
                           }, {
                              "type" : "Interval",
                              "low" : {
                                 "type" : "ToDateTime",
                                 "operand" : {
                                    "path" : "low",
                                    "type" : "Property",
                                    "source" : {
                                       "lowClosed" : true,
                                       "highClosed" : true,
                                       "type" : "Interval",
                                       "low" : {
                                          "type" : "Subtract",
                                          "operand" : [ {
                                             "type" : "Today"
                                          }, {
                                             "value" : 3,
                                             "unit" : "years",
                                             "type" : "Quantity"
                                          } ]
                                       },
                                       "high" : {
                                          "type" : "Add",
                                          "operand" : [ {
                                             "type" : "Today"
                                          }, {
                                             "value" : 3,
                                             "unit" : "years",
                                             "type" : "Quantity"
                                          } ]
                                       }
                                    }
                                 }
                              },
                              "lowClosedExpression" : {
                                 "path" : "lowClosed",
                                 "type" : "Property",
                                 "source" : {
                                    "lowClosed" : true,
                                    "highClosed" : true,
                                    "type" : "Interval",
                                    "low" : {
                                       "type" : "Subtract",
                                       "operand" : [ {
                                          "type" : "Today"
                                       }, {
                                          "value" : 3,
                                          "unit" : "years",
                                          "type" : "Quantity"
                                       } ]
                                    },
                                    "high" : {
                                       "type" : "Add",
                                       "operand" : [ {
                                          "type" : "Today"
                                       }, {
                                          "value" : 3,
                                          "unit" : "years",
                                          "type" : "Quantity"
                                       } ]
                                    }
                                 }
                              },
                              "high" : {
                                 "type" : "ToDateTime",
                                 "operand" : {
                                    "path" : "high",
                                    "type" : "Property",
                                    "source" : {
                                       "lowClosed" : true,
                                       "highClosed" : true,
                                       "type" : "Interval",
                                       "low" : {
                                          "type" : "Subtract",
                                          "operand" : [ {
                                             "type" : "Today"
                                          }, {
                                             "value" : 3,
                                             "unit" : "years",
                                             "type" : "Quantity"
                                          } ]
                                       },
                                       "high" : {
                                          "type" : "Add",
                                          "operand" : [ {
                                             "type" : "Today"
                                          }, {
                                             "value" : 3,
                                             "unit" : "years",
                                             "type" : "Quantity"
                                          } ]
                                       }
                                    }
                                 }
                              },
                              "highClosedExpression" : {
                                 "path" : "highClosed",
                                 "type" : "Property",
                                 "source" : {
                                    "lowClosed" : true,
                                    "highClosed" : true,
                                    "type" : "Interval",
                                    "low" : {
                                       "type" : "Subtract",
                                       "operand" : [ {
                                          "type" : "Today"
                                       }, {
                                          "value" : 3,
                                          "unit" : "years",
                                          "type" : "Quantity"
                                       } ]
                                    },
                                    "high" : {
                                       "type" : "Add",
                                       "operand" : [ {
                                          "type" : "Today"
                                       }, {
                                          "value" : 3,
                                          "unit" : "years",
                                          "type" : "Quantity"
                                       } ]
                                    }
                                 }
                              }
                           } ]
                        }, {
                           "type" : "Not",
                           "operand" : {
                              "type" : "IsNull",
                              "operand" : {
                                 "type" : "Today"
                              }
                           }
                        } ]
                     } ]
                  }, {
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
                  } ]
               },
               "return" : {
                  "distinct" : true,
                  "expression" : {
                     "type" : "Tuple",
                     "element" : [ {
                        "name" : "C",
                        "value" : {
                           "name" : "C",
                           "type" : "AliasRef"
                        }
                     }, {
                        "name" : "H",
                        "value" : {
                           "name" : "H",
                           "type" : "AliasRef"
                        }
                     } ]
                  }
               }
            }
         }, {
            "name" : "HasCoincidentNilmCytologyAndNegativeHpvWitinLast3Years",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "type" : "Query",
               "source" : [ {
                  "alias" : "M",
                  "expression" : {
                     "name" : "MostRecentCoincidentNilmCytologyAndNegativeHpvReport",
                     "type" : "ExpressionRef"
                  }
               } ],
               "relationship" : [ ],
               "return" : {
                  "expression" : {
                     "type" : "And",
                     "operand" : [ {
                        "type" : "Not",
                        "operand" : {
                           "type" : "IsNull",
                           "operand" : {
                              "path" : "C",
                              "scope" : "M",
                              "type" : "Property"
                           }
                        }
                     }, {
                        "type" : "Not",
                        "operand" : {
                           "type" : "IsNull",
                           "operand" : {
                              "path" : "H",
                              "scope" : "M",
                              "type" : "Property"
                           }
                        }
                     } ]
                  }
               }
            }
         }, {
            "name" : "RecentVisibleLesionDiagnoses",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "name" : "ConditionLookBack",
               "libraryName" : "C3F",
               "type" : "FunctionRef",
               "operand" : [ {
                  "name" : "CervicalOrVaginalLesionDiagnoses",
                  "libraryName" : "Dash",
                  "type" : "ExpressionRef"
               }, {
                  "name" : "SymptomaticLookBack",
                  "type" : "ParameterRef"
               } ]
            }
         }, {
            "name" : "RecentVisibleLesionObservations",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "name" : "ObservationLookBack",
               "libraryName" : "C3F",
               "type" : "FunctionRef",
               "operand" : [ {
                  "name" : "CervicalOrVaginalLesionObservations",
                  "libraryName" : "Dash",
                  "type" : "ExpressionRef"
               }, {
                  "name" : "SymptomaticLookBack",
                  "type" : "ParameterRef"
               } ]
            }
         }, {
            "name" : "RecentYesResponsesToVisibleLesionQuestion",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "name" : "ObservationLookBack",
               "libraryName" : "C3F",
               "type" : "FunctionRef",
               "operand" : [ {
                  "type" : "Query",
                  "source" : [ {
                     "alias" : "R",
                     "expression" : {
                        "name" : "ResponsesToVisibleLesionQuestion",
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
                  "name" : "SymptomaticLookBack",
                  "type" : "ParameterRef"
               } ]
            }
         }, {
            "name" : "HasVisibleCervicalOrVaginalLesion",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "type" : "Or",
               "operand" : [ {
                  "type" : "Or",
                  "operand" : [ {
                     "type" : "Exists",
                     "operand" : {
                        "name" : "RecentVisibleLesionDiagnoses",
                        "type" : "ExpressionRef"
                     }
                  }, {
                     "type" : "Exists",
                     "operand" : {
                        "name" : "RecentVisibleLesionObservations",
                        "type" : "ExpressionRef"
                     }
                  } ]
               }, {
                  "type" : "Exists",
                  "operand" : {
                     "name" : "RecentYesResponsesToVisibleLesionQuestion",
                     "type" : "ExpressionRef"
                  }
               } ]
            }
         }, {
            "name" : "Age21YearsAndYoungerRecommendation",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "valueType" : "{urn:hl7-org:elm-types:r1}String",
               "value" : "Per the ASCCP Clinical Practice Statement titled \"Evaluation of the Cervix in Patients with Abnormal Vaginal Bleeding\" a diagnostic exam is indicated. Cervical cancer is unlikely in women under the age of 21, therefore pap testing may be deferred unless the exam is highly suspicious for cervical cancer.",
               "type" : "Literal"
            }
         }, {
            "name" : "NilmCytologyWithinLast12MonthsRecommendation",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "valueType" : "{urn:hl7-org:elm-types:r1}String",
               "value" : "Per the ASCCP Clinical Practice Statement titled \"Evaluation of the Cervix in Patients with Abnormal Vaginal Bleeding\" a diagnostic exam is indicated. Cervical cancer is unlikely in women with negative cervical cytology in the past year, therefore pap testing may be deferred unless the exam is highly suspicious for cervical cancer.",
               "type" : "Literal"
            }
         }, {
            "name" : "NilmCytologyAndNegativeHpvWitinLast3YearsRecommendation",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "valueType" : "{urn:hl7-org:elm-types:r1}String",
               "value" : "Per the ASCCP Clinical Practice Statement titled \"Evaluation of the Cervix in Patients with Abnormal Vaginal Bleeding\" a diagnostic exam is indicated. Cervical cancer is unlikely in women with negative cervical cytology/HPV cotesting in the past 3 years, therefore pap testing may be deferred unless the exam is highly suspicious for cervical cancer.",
               "type" : "Literal"
            }
         }, {
            "name" : "VisibleLesionRecommendation",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "valueType" : "{urn:hl7-org:elm-types:r1}String",
               "value" : "Per the ASCCP Clinical Practice Statement titled \"Evaluation of the Cervix in Patients with Abnormal Vaginal Bleeding\" a diagnostic exam with appropriate tissue sampling is indicated (e.g., cervical cytology and/or biopsy).",
               "type" : "Literal"
            }
         }, {
            "name" : "ElseRecommendation",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "valueType" : "{urn:hl7-org:elm-types:r1}String",
               "value" : "Per the ASCCP Clinical Practice Statement titled \"Evaluation of the Cervix in Patients with Abnormal Vaginal Bleeding\" a diagnostic exam and is indicated. Consider cervical cytology testing as a component of the diagnostic work up.",
               "type" : "Literal"
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
                  "type" : "Case",
                  "caseItem" : [ {
                     "when" : {
                        "name" : "IsAge21YearsOrYounger",
                        "type" : "ExpressionRef"
                     },
                     "then" : {
                        "name" : "Age21YearsAndYoungerRecommendation",
                        "type" : "ExpressionRef"
                     }
                  }, {
                     "when" : {
                        "name" : "HasNilmCytologyWithinLast12Months",
                        "type" : "ExpressionRef"
                     },
                     "then" : {
                        "name" : "NilmCytologyWithinLast12MonthsRecommendation",
                        "type" : "ExpressionRef"
                     }
                  }, {
                     "when" : {
                        "name" : "HasCoincidentNilmCytologyAndNegativeHpvWitinLast3Years",
                        "type" : "ExpressionRef"
                     },
                     "then" : {
                        "name" : "NilmCytologyAndNegativeHpvWitinLast3YearsRecommendation",
                        "type" : "ExpressionRef"
                     }
                  }, {
                     "when" : {
                        "name" : "HasVisibleCervicalOrVaginalLesion",
                        "type" : "ExpressionRef"
                     },
                     "then" : {
                        "name" : "VisibleLesionRecommendation",
                        "type" : "ExpressionRef"
                     }
                  } ],
                  "else" : {
                     "name" : "ElseRecommendation",
                     "type" : "ExpressionRef"
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
            "name" : "Citation",
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
                           "name" : "RecommendationText",
                           "type" : "ExpressionRef"
                        }
                     }
                  }
               },
               "then" : {
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "ASCCP Clinical Practice Statement, \"Evaluation of the Cervix in Patients with Abnormal Vaginal Bleeding,\" Published: February 7, 2017",
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
            "name" : "ActionShort",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "valueType" : "{urn:hl7-org:elm-types:r1}String",
               "value" : "See Details",
               "type" : "Literal"
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
                        "type" : "Today"
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
                        "value" : "Screening: Symptomatic",
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

