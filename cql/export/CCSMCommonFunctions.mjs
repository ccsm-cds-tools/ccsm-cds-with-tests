export const CCSMCommonFunctions = {
   "library" : {
      "annotation" : [ {
         "translatorOptions" : "",
         "type" : "CqlToElmInfo"
      } ],
      "identifier" : {
         "id" : "CCSMCommonFunctions",
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
         } ]
      },
      "codeSystems" : {
         "def" : [ {
            "name" : "CONDVERSTATUS",
            "id" : "http://terminology.hl7.org/CodeSystem/condition-ver-status",
            "accessLevel" : "Public"
         } ]
      },
      "codes" : {
         "def" : [ {
            "name" : "Condition Refuted code",
            "id" : "refuted",
            "display" : "Refuted",
            "accessLevel" : "Public",
            "codeSystem" : {
               "name" : "CONDVERSTATUS"
            }
         }, {
            "name" : "Condition Entered in Error code",
            "id" : "entered-in-error",
            "display" : "Entered in Error",
            "accessLevel" : "Public",
            "codeSystem" : {
               "name" : "CONDVERSTATUS"
            }
         } ]
      },
      "concepts" : {
         "def" : [ {
            "name" : "Condition Refuted",
            "display" : "Refuted",
            "accessLevel" : "Public",
            "code" : [ {
               "name" : "Condition Refuted code"
            } ]
         }, {
            "name" : "Condition Entered in Error",
            "display" : "Entered in Error",
            "accessLevel" : "Public",
            "code" : [ {
               "name" : "Condition Entered in Error code"
            } ]
         } ]
      },
      "statements" : {
         "def" : [ {
            "name" : "ConceptText",
            "context" : "Patient",
            "accessLevel" : "Public",
            "type" : "FunctionDef",
            "expression" : {
               "type" : "Coalesce",
               "operand" : [ {
                  "path" : "value",
                  "type" : "Property",
                  "source" : {
                     "path" : "text",
                     "type" : "Property",
                     "source" : {
                        "name" : "c",
                        "type" : "OperandRef"
                     }
                  }
               }, {
                  "type" : "Coalesce",
                  "operand" : [ {
                     "type" : "Query",
                     "source" : [ {
                        "alias" : "c2",
                        "expression" : {
                           "path" : "coding",
                           "type" : "Property",
                           "source" : {
                              "name" : "c",
                              "type" : "OperandRef"
                           }
                        }
                     } ],
                     "relationship" : [ ],
                     "return" : {
                        "expression" : {
                           "path" : "value",
                           "type" : "Property",
                           "source" : {
                              "path" : "display",
                              "scope" : "c2",
                              "type" : "Property"
                           }
                        }
                     }
                  } ]
               } ]
            },
            "operand" : [ {
               "name" : "c",
               "operandTypeSpecifier" : {
                  "name" : "{http://hl7.org/fhir}CodeableConcept",
                  "type" : "NamedTypeSpecifier"
               }
            } ]
         }, {
            "name" : "DateText",
            "context" : "Patient",
            "accessLevel" : "Public",
            "type" : "FunctionDef",
            "expression" : {
               "type" : "ToString",
               "operand" : {
                  "path" : "value",
                  "type" : "Property",
                  "source" : {
                     "name" : "d",
                     "type" : "OperandRef"
                  }
               }
            },
            "operand" : [ {
               "name" : "d",
               "operandTypeSpecifier" : {
                  "name" : "{http://hl7.org/fhir}date",
                  "type" : "NamedTypeSpecifier"
               }
            } ]
         }, {
            "name" : "DateTimeText",
            "context" : "Patient",
            "accessLevel" : "Public",
            "type" : "FunctionDef",
            "expression" : {
               "type" : "First",
               "source" : {
                  "type" : "SplitOnMatches",
                  "stringToSplit" : {
                     "type" : "ToString",
                     "operand" : {
                        "path" : "value",
                        "type" : "Property",
                        "source" : {
                           "name" : "d",
                           "type" : "OperandRef"
                        }
                     }
                  },
                  "separatorPattern" : {
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "T",
                     "type" : "Literal"
                  }
               }
            },
            "operand" : [ {
               "name" : "d",
               "operandTypeSpecifier" : {
                  "name" : "{http://hl7.org/fhir}dateTime",
                  "type" : "NamedTypeSpecifier"
               }
            } ]
         }, {
            "name" : "InstantText",
            "context" : "Patient",
            "accessLevel" : "Public",
            "type" : "FunctionDef",
            "expression" : {
               "type" : "ToString",
               "operand" : {
                  "path" : "value",
                  "type" : "Property",
                  "source" : {
                     "name" : "i",
                     "type" : "OperandRef"
                  }
               }
            },
            "operand" : [ {
               "name" : "i",
               "operandTypeSpecifier" : {
                  "name" : "{http://hl7.org/fhir}instant",
                  "type" : "NamedTypeSpecifier"
               }
            } ]
         }, {
            "name" : "QuantityText",
            "context" : "Patient",
            "accessLevel" : "Public",
            "type" : "FunctionDef",
            "expression" : {
               "type" : "If",
               "condition" : {
                  "asType" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "type" : "As",
                  "operand" : {
                     "type" : "IsNull",
                     "operand" : {
                        "name" : "q",
                        "type" : "OperandRef"
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
                        "type" : "Not",
                        "operand" : {
                           "type" : "IsNull",
                           "operand" : {
                              "path" : "unit",
                              "type" : "Property",
                              "source" : {
                                 "name" : "q",
                                 "type" : "OperandRef"
                              }
                           }
                        }
                     }
                  },
                  "then" : {
                     "type" : "Concatenate",
                     "operand" : [ {
                        "type" : "Concatenate",
                        "operand" : [ {
                           "type" : "ToString",
                           "operand" : {
                              "path" : "value",
                              "type" : "Property",
                              "source" : {
                                 "path" : "value",
                                 "type" : "Property",
                                 "source" : {
                                    "name" : "q",
                                    "type" : "OperandRef"
                                 }
                              }
                           }
                        }, {
                           "valueType" : "{urn:hl7-org:elm-types:r1}String",
                           "value" : " ",
                           "type" : "Literal"
                        } ]
                     }, {
                        "path" : "value",
                        "type" : "Property",
                        "source" : {
                           "path" : "unit",
                           "type" : "Property",
                           "source" : {
                              "name" : "q",
                              "type" : "OperandRef"
                           }
                        }
                     } ]
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
                                 "path" : "code",
                                 "type" : "Property",
                                 "source" : {
                                    "name" : "q",
                                    "type" : "OperandRef"
                                 }
                              }
                           }
                        }
                     },
                     "then" : {
                        "type" : "Concatenate",
                        "operand" : [ {
                           "type" : "Concatenate",
                           "operand" : [ {
                              "type" : "ToString",
                              "operand" : {
                                 "path" : "value",
                                 "type" : "Property",
                                 "source" : {
                                    "path" : "value",
                                    "type" : "Property",
                                    "source" : {
                                       "name" : "q",
                                       "type" : "OperandRef"
                                    }
                                 }
                              }
                           }, {
                              "valueType" : "{urn:hl7-org:elm-types:r1}String",
                              "value" : " ",
                              "type" : "Literal"
                           } ]
                        }, {
                           "path" : "value",
                           "type" : "Property",
                           "source" : {
                              "path" : "code",
                              "type" : "Property",
                              "source" : {
                                 "name" : "q",
                                 "type" : "OperandRef"
                              }
                           }
                        } ]
                     },
                     "else" : {
                        "type" : "ToString",
                        "operand" : {
                           "path" : "value",
                           "type" : "Property",
                           "source" : {
                              "path" : "value",
                              "type" : "Property",
                              "source" : {
                                 "name" : "q",
                                 "type" : "OperandRef"
                              }
                           }
                        }
                     }
                  }
               }
            },
            "operand" : [ {
               "name" : "q",
               "operandTypeSpecifier" : {
                  "name" : "{http://hl7.org/fhir}Quantity",
                  "type" : "NamedTypeSpecifier"
               }
            } ]
         }, {
            "name" : "PeriodObject",
            "context" : "Patient",
            "accessLevel" : "Public",
            "type" : "FunctionDef",
            "expression" : {
               "type" : "If",
               "condition" : {
                  "asType" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "type" : "As",
                  "operand" : {
                     "type" : "IsNull",
                     "operand" : {
                        "name" : "p",
                        "type" : "OperandRef"
                     }
                  }
               },
               "then" : {
                  "type" : "As",
                  "operand" : {
                     "type" : "Null"
                  },
                  "asTypeSpecifier" : {
                     "type" : "TupleTypeSpecifier",
                     "element" : [ {
                        "name" : "Start",
                        "type" : {
                           "name" : "{urn:hl7-org:elm-types:r1}String",
                           "type" : "NamedTypeSpecifier"
                        }
                     }, {
                        "name" : "End",
                        "type" : {
                           "name" : "{urn:hl7-org:elm-types:r1}String",
                           "type" : "NamedTypeSpecifier"
                        }
                     } ]
                  }
               },
               "else" : {
                  "type" : "Tuple",
                  "element" : [ {
                     "name" : "Start",
                     "value" : {
                        "name" : "DateTimeText",
                        "type" : "FunctionRef",
                        "operand" : [ {
                           "path" : "start",
                           "type" : "Property",
                           "source" : {
                              "name" : "p",
                              "type" : "OperandRef"
                           }
                        } ]
                     }
                  }, {
                     "name" : "End",
                     "value" : {
                        "name" : "DateTimeText",
                        "type" : "FunctionRef",
                        "operand" : [ {
                           "path" : "end",
                           "type" : "Property",
                           "source" : {
                              "name" : "p",
                              "type" : "OperandRef"
                           }
                        } ]
                     }
                  } ]
               }
            },
            "operand" : [ {
               "name" : "p",
               "operandTypeSpecifier" : {
                  "name" : "{http://hl7.org/fhir}Period",
                  "type" : "NamedTypeSpecifier"
               }
            } ]
         }, {
            "name" : "RangeObject",
            "context" : "Patient",
            "accessLevel" : "Public",
            "type" : "FunctionDef",
            "expression" : {
               "type" : "If",
               "condition" : {
                  "asType" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "type" : "As",
                  "operand" : {
                     "type" : "IsNull",
                     "operand" : {
                        "name" : "r",
                        "type" : "OperandRef"
                     }
                  }
               },
               "then" : {
                  "type" : "As",
                  "operand" : {
                     "type" : "Null"
                  },
                  "asTypeSpecifier" : {
                     "type" : "TupleTypeSpecifier",
                     "element" : [ {
                        "name" : "Low",
                        "type" : {
                           "name" : "{urn:hl7-org:elm-types:r1}String",
                           "type" : "NamedTypeSpecifier"
                        }
                     }, {
                        "name" : "High",
                        "type" : {
                           "name" : "{urn:hl7-org:elm-types:r1}String",
                           "type" : "NamedTypeSpecifier"
                        }
                     } ]
                  }
               },
               "else" : {
                  "type" : "Tuple",
                  "element" : [ {
                     "name" : "Low",
                     "value" : {
                        "name" : "QuantityText",
                        "type" : "FunctionRef",
                        "operand" : [ {
                           "path" : "low",
                           "type" : "Property",
                           "source" : {
                              "name" : "r",
                              "type" : "OperandRef"
                           }
                        } ]
                     }
                  }, {
                     "name" : "High",
                     "value" : {
                        "name" : "QuantityText",
                        "type" : "FunctionRef",
                        "operand" : [ {
                           "path" : "high",
                           "type" : "Property",
                           "source" : {
                              "name" : "r",
                              "type" : "OperandRef"
                           }
                        } ]
                     }
                  } ]
               }
            },
            "operand" : [ {
               "name" : "r",
               "operandTypeSpecifier" : {
                  "name" : "{http://hl7.org/fhir}Range",
                  "type" : "NamedTypeSpecifier"
               }
            } ]
         }, {
            "name" : "ObservationDate",
            "context" : "Patient",
            "accessLevel" : "Public",
            "type" : "FunctionDef",
            "expression" : {
               "type" : "Coalesce",
               "operand" : [ {
                  "path" : "value",
                  "type" : "Property",
                  "source" : {
                     "strict" : false,
                     "type" : "As",
                     "operand" : {
                        "path" : "effective",
                        "type" : "Property",
                        "source" : {
                           "name" : "o",
                           "type" : "OperandRef"
                        }
                     },
                     "asTypeSpecifier" : {
                        "name" : "{http://hl7.org/fhir}dateTime",
                        "type" : "NamedTypeSpecifier"
                     }
                  }
               }, {
                  "path" : "value",
                  "type" : "Property",
                  "source" : {
                     "strict" : false,
                     "type" : "As",
                     "operand" : {
                        "path" : "effective",
                        "type" : "Property",
                        "source" : {
                           "name" : "o",
                           "type" : "OperandRef"
                        }
                     },
                     "asTypeSpecifier" : {
                        "name" : "{http://hl7.org/fhir}instant",
                        "type" : "NamedTypeSpecifier"
                     }
                  }
               }, {
                  "path" : "value",
                  "type" : "Property",
                  "source" : {
                     "path" : "end",
                     "type" : "Property",
                     "source" : {
                        "strict" : false,
                        "type" : "As",
                        "operand" : {
                           "path" : "effective",
                           "type" : "Property",
                           "source" : {
                              "name" : "o",
                              "type" : "OperandRef"
                           }
                        },
                        "asTypeSpecifier" : {
                           "name" : "{http://hl7.org/fhir}Period",
                           "type" : "NamedTypeSpecifier"
                        }
                     }
                  }
               }, {
                  "path" : "value",
                  "type" : "Property",
                  "source" : {
                     "path" : "start",
                     "type" : "Property",
                     "source" : {
                        "strict" : false,
                        "type" : "As",
                        "operand" : {
                           "path" : "effective",
                           "type" : "Property",
                           "source" : {
                              "name" : "o",
                              "type" : "OperandRef"
                           }
                        },
                        "asTypeSpecifier" : {
                           "name" : "{http://hl7.org/fhir}Period",
                           "type" : "NamedTypeSpecifier"
                        }
                     }
                  }
               }, {
                  "path" : "value",
                  "type" : "Property",
                  "source" : {
                     "strict" : false,
                     "type" : "As",
                     "operand" : {
                        "path" : "issued",
                        "type" : "Property",
                        "source" : {
                           "name" : "o",
                           "type" : "OperandRef"
                        }
                     },
                     "asTypeSpecifier" : {
                        "name" : "{http://hl7.org/fhir}instant",
                        "type" : "NamedTypeSpecifier"
                     }
                  }
               } ]
            },
            "operand" : [ {
               "name" : "o",
               "operandTypeSpecifier" : {
                  "name" : "{http://hl7.org/fhir}Observation",
                  "type" : "NamedTypeSpecifier"
               }
            } ]
         }, {
            "name" : "ObservationDateString",
            "context" : "Patient",
            "accessLevel" : "Public",
            "type" : "FunctionDef",
            "expression" : {
               "type" : "Coalesce",
               "operand" : [ {
                  "name" : "DateTimeText",
                  "type" : "FunctionRef",
                  "operand" : [ {
                     "strict" : false,
                     "type" : "As",
                     "operand" : {
                        "path" : "effective",
                        "type" : "Property",
                        "source" : {
                           "name" : "o",
                           "type" : "OperandRef"
                        }
                     },
                     "asTypeSpecifier" : {
                        "name" : "{http://hl7.org/fhir}dateTime",
                        "type" : "NamedTypeSpecifier"
                     }
                  } ]
               }, {
                  "name" : "InstantText",
                  "type" : "FunctionRef",
                  "operand" : [ {
                     "strict" : false,
                     "type" : "As",
                     "operand" : {
                        "path" : "effective",
                        "type" : "Property",
                        "source" : {
                           "name" : "o",
                           "type" : "OperandRef"
                        }
                     },
                     "asTypeSpecifier" : {
                        "name" : "{http://hl7.org/fhir}instant",
                        "type" : "NamedTypeSpecifier"
                     }
                  } ]
               }, {
                  "name" : "DateTimeText",
                  "type" : "FunctionRef",
                  "operand" : [ {
                     "path" : "end",
                     "type" : "Property",
                     "source" : {
                        "strict" : false,
                        "type" : "As",
                        "operand" : {
                           "path" : "effective",
                           "type" : "Property",
                           "source" : {
                              "name" : "o",
                              "type" : "OperandRef"
                           }
                        },
                        "asTypeSpecifier" : {
                           "name" : "{http://hl7.org/fhir}Period",
                           "type" : "NamedTypeSpecifier"
                        }
                     }
                  } ]
               }, {
                  "name" : "DateTimeText",
                  "type" : "FunctionRef",
                  "operand" : [ {
                     "path" : "start",
                     "type" : "Property",
                     "source" : {
                        "strict" : false,
                        "type" : "As",
                        "operand" : {
                           "path" : "effective",
                           "type" : "Property",
                           "source" : {
                              "name" : "o",
                              "type" : "OperandRef"
                           }
                        },
                        "asTypeSpecifier" : {
                           "name" : "{http://hl7.org/fhir}Period",
                           "type" : "NamedTypeSpecifier"
                        }
                     }
                  } ]
               }, {
                  "name" : "InstantText",
                  "type" : "FunctionRef",
                  "operand" : [ {
                     "path" : "issued",
                     "type" : "Property",
                     "source" : {
                        "name" : "o",
                        "type" : "OperandRef"
                     }
                  } ]
               } ]
            },
            "operand" : [ {
               "name" : "o",
               "operandTypeSpecifier" : {
                  "name" : "{http://hl7.org/fhir}Observation",
                  "type" : "NamedTypeSpecifier"
               }
            } ]
         }, {
            "name" : "MedicationStatementDate",
            "context" : "Patient",
            "accessLevel" : "Public",
            "type" : "FunctionDef",
            "expression" : {
               "type" : "Coalesce",
               "operand" : [ {
                  "name" : "DateTimeText",
                  "type" : "FunctionRef",
                  "operand" : [ {
                     "strict" : false,
                     "type" : "As",
                     "operand" : {
                        "path" : "effective",
                        "type" : "Property",
                        "source" : {
                           "name" : "s",
                           "type" : "OperandRef"
                        }
                     },
                     "asTypeSpecifier" : {
                        "name" : "{http://hl7.org/fhir}dateTime",
                        "type" : "NamedTypeSpecifier"
                     }
                  } ]
               }, {
                  "name" : "DateTimeText",
                  "type" : "FunctionRef",
                  "operand" : [ {
                     "path" : "end",
                     "type" : "Property",
                     "source" : {
                        "strict" : false,
                        "type" : "As",
                        "operand" : {
                           "path" : "effective",
                           "type" : "Property",
                           "source" : {
                              "name" : "s",
                              "type" : "OperandRef"
                           }
                        },
                        "asTypeSpecifier" : {
                           "name" : "{http://hl7.org/fhir}Period",
                           "type" : "NamedTypeSpecifier"
                        }
                     }
                  } ]
               }, {
                  "name" : "DateTimeText",
                  "type" : "FunctionRef",
                  "operand" : [ {
                     "path" : "start",
                     "type" : "Property",
                     "source" : {
                        "strict" : false,
                        "type" : "As",
                        "operand" : {
                           "path" : "effective",
                           "type" : "Property",
                           "source" : {
                              "name" : "s",
                              "type" : "OperandRef"
                           }
                        },
                        "asTypeSpecifier" : {
                           "name" : "{http://hl7.org/fhir}Period",
                           "type" : "NamedTypeSpecifier"
                        }
                     }
                  } ]
               } ]
            },
            "operand" : [ {
               "name" : "s",
               "operandTypeSpecifier" : {
                  "name" : "{http://hl7.org/fhir}MedicationStatement",
                  "type" : "NamedTypeSpecifier"
               }
            } ]
         }, {
            "name" : "Onset",
            "context" : "Patient",
            "accessLevel" : "Public",
            "type" : "FunctionDef",
            "expression" : {
               "type" : "Coalesce",
               "operand" : [ {
                  "type" : "List",
                  "element" : [ {
                     "name" : "DateTimeText",
                     "type" : "FunctionRef",
                     "operand" : [ {
                        "strict" : false,
                        "type" : "As",
                        "operand" : {
                           "path" : "onset",
                           "type" : "Property",
                           "source" : {
                              "name" : "c",
                              "type" : "OperandRef"
                           }
                        },
                        "asTypeSpecifier" : {
                           "name" : "{http://hl7.org/fhir}dateTime",
                           "type" : "NamedTypeSpecifier"
                        }
                     } ]
                  }, {
                     "name" : "QuantityText",
                     "type" : "FunctionRef",
                     "operand" : [ {
                        "strict" : false,
                        "type" : "As",
                        "operand" : {
                           "path" : "onset",
                           "type" : "Property",
                           "source" : {
                              "name" : "c",
                              "type" : "OperandRef"
                           }
                        },
                        "asTypeSpecifier" : {
                           "name" : "{http://hl7.org/fhir}Age",
                           "type" : "NamedTypeSpecifier"
                        }
                     } ]
                  }, {
                     "name" : "PeriodObject",
                     "type" : "FunctionRef",
                     "operand" : [ {
                        "strict" : false,
                        "type" : "As",
                        "operand" : {
                           "path" : "onset",
                           "type" : "Property",
                           "source" : {
                              "name" : "c",
                              "type" : "OperandRef"
                           }
                        },
                        "asTypeSpecifier" : {
                           "name" : "{http://hl7.org/fhir}Period",
                           "type" : "NamedTypeSpecifier"
                        }
                     } ]
                  }, {
                     "name" : "RangeObject",
                     "type" : "FunctionRef",
                     "operand" : [ {
                        "strict" : false,
                        "type" : "As",
                        "operand" : {
                           "path" : "onset",
                           "type" : "Property",
                           "source" : {
                              "name" : "c",
                              "type" : "OperandRef"
                           }
                        },
                        "asTypeSpecifier" : {
                           "name" : "{http://hl7.org/fhir}Range",
                           "type" : "NamedTypeSpecifier"
                        }
                     } ]
                  }, {
                     "path" : "value",
                     "type" : "Property",
                     "source" : {
                        "strict" : false,
                        "type" : "As",
                        "operand" : {
                           "path" : "onset",
                           "type" : "Property",
                           "source" : {
                              "name" : "c",
                              "type" : "OperandRef"
                           }
                        },
                        "asTypeSpecifier" : {
                           "name" : "{http://hl7.org/fhir}string",
                           "type" : "NamedTypeSpecifier"
                        }
                     }
                  } ]
               } ]
            },
            "operand" : [ {
               "name" : "c",
               "operandTypeSpecifier" : {
                  "name" : "{http://hl7.org/fhir}Condition",
                  "type" : "NamedTypeSpecifier"
               }
            } ]
         }, {
            "name" : "Abatement",
            "context" : "Patient",
            "accessLevel" : "Public",
            "type" : "FunctionDef",
            "expression" : {
               "type" : "Coalesce",
               "operand" : [ {
                  "type" : "List",
                  "element" : [ {
                     "name" : "DateTimeText",
                     "type" : "FunctionRef",
                     "operand" : [ {
                        "strict" : false,
                        "type" : "As",
                        "operand" : {
                           "path" : "abatement",
                           "type" : "Property",
                           "source" : {
                              "name" : "c",
                              "type" : "OperandRef"
                           }
                        },
                        "asTypeSpecifier" : {
                           "name" : "{http://hl7.org/fhir}dateTime",
                           "type" : "NamedTypeSpecifier"
                        }
                     } ]
                  }, {
                     "name" : "PeriodObject",
                     "type" : "FunctionRef",
                     "operand" : [ {
                        "strict" : false,
                        "type" : "As",
                        "operand" : {
                           "path" : "abatement",
                           "type" : "Property",
                           "source" : {
                              "name" : "c",
                              "type" : "OperandRef"
                           }
                        },
                        "asTypeSpecifier" : {
                           "name" : "{http://hl7.org/fhir}Period",
                           "type" : "NamedTypeSpecifier"
                        }
                     } ]
                  }, {
                     "name" : "RangeObject",
                     "type" : "FunctionRef",
                     "operand" : [ {
                        "strict" : false,
                        "type" : "As",
                        "operand" : {
                           "path" : "abatement",
                           "type" : "Property",
                           "source" : {
                              "name" : "c",
                              "type" : "OperandRef"
                           }
                        },
                        "asTypeSpecifier" : {
                           "name" : "{http://hl7.org/fhir}Range",
                           "type" : "NamedTypeSpecifier"
                        }
                     } ]
                  }, {
                     "path" : "value",
                     "type" : "Property",
                     "source" : {
                        "strict" : false,
                        "type" : "As",
                        "operand" : {
                           "path" : "abatement",
                           "type" : "Property",
                           "source" : {
                              "name" : "c",
                              "type" : "OperandRef"
                           }
                        },
                        "asTypeSpecifier" : {
                           "name" : "{http://hl7.org/fhir}string",
                           "type" : "NamedTypeSpecifier"
                        }
                     }
                  } ]
               } ]
            },
            "operand" : [ {
               "name" : "c",
               "operandTypeSpecifier" : {
                  "name" : "{http://hl7.org/fhir}Condition",
                  "type" : "NamedTypeSpecifier"
               }
            } ]
         }, {
            "name" : "ConditionDate",
            "context" : "Patient",
            "accessLevel" : "Public",
            "type" : "FunctionDef",
            "expression" : {
               "type" : "Coalesce",
               "operand" : [ {
                  "path" : "value",
                  "type" : "Property",
                  "source" : {
                     "strict" : false,
                     "type" : "As",
                     "operand" : {
                        "path" : "onset",
                        "type" : "Property",
                        "source" : {
                           "name" : "C",
                           "type" : "OperandRef"
                        }
                     },
                     "asTypeSpecifier" : {
                        "name" : "{http://hl7.org/fhir}dateTime",
                        "type" : "NamedTypeSpecifier"
                     }
                  }
               }, {
                  "path" : "value",
                  "type" : "Property",
                  "source" : {
                     "path" : "end",
                     "type" : "Property",
                     "source" : {
                        "strict" : false,
                        "type" : "As",
                        "operand" : {
                           "path" : "onset",
                           "type" : "Property",
                           "source" : {
                              "name" : "C",
                              "type" : "OperandRef"
                           }
                        },
                        "asTypeSpecifier" : {
                           "name" : "{http://hl7.org/fhir}Period",
                           "type" : "NamedTypeSpecifier"
                        }
                     }
                  }
               }, {
                  "path" : "value",
                  "type" : "Property",
                  "source" : {
                     "path" : "start",
                     "type" : "Property",
                     "source" : {
                        "strict" : false,
                        "type" : "As",
                        "operand" : {
                           "path" : "onset",
                           "type" : "Property",
                           "source" : {
                              "name" : "C",
                              "type" : "OperandRef"
                           }
                        },
                        "asTypeSpecifier" : {
                           "name" : "{http://hl7.org/fhir}Period",
                           "type" : "NamedTypeSpecifier"
                        }
                     }
                  }
               }, {
                  "path" : "value",
                  "type" : "Property",
                  "source" : {
                     "path" : "recordedDate",
                     "type" : "Property",
                     "source" : {
                        "name" : "C",
                        "type" : "OperandRef"
                     }
                  }
               } ]
            },
            "operand" : [ {
               "name" : "C",
               "operandTypeSpecifier" : {
                  "name" : "{http://hl7.org/fhir}Condition",
                  "type" : "NamedTypeSpecifier"
               }
            } ]
         }, {
            "name" : "OldestCondition",
            "context" : "Patient",
            "accessLevel" : "Public",
            "type" : "FunctionDef",
            "expression" : {
               "type" : "First",
               "source" : {
                  "type" : "Query",
                  "source" : [ {
                     "alias" : "C",
                     "expression" : {
                        "name" : "CondList",
                        "type" : "OperandRef"
                     }
                  } ],
                  "relationship" : [ ],
                  "sort" : {
                     "by" : [ {
                        "direction" : "asc",
                        "type" : "ByExpression",
                        "expression" : {
                           "type" : "Coalesce",
                           "operand" : [ {
                              "path" : "value",
                              "type" : "Property",
                              "source" : {
                                 "strict" : false,
                                 "type" : "As",
                                 "operand" : {
                                    "name" : "onset",
                                    "type" : "IdentifierRef"
                                 },
                                 "asTypeSpecifier" : {
                                    "name" : "{http://hl7.org/fhir}dateTime",
                                    "type" : "NamedTypeSpecifier"
                                 }
                              }
                           }, {
                              "path" : "value",
                              "type" : "Property",
                              "source" : {
                                 "path" : "start",
                                 "type" : "Property",
                                 "source" : {
                                    "strict" : false,
                                    "type" : "As",
                                    "operand" : {
                                       "name" : "onset",
                                       "type" : "IdentifierRef"
                                    },
                                    "asTypeSpecifier" : {
                                       "name" : "{http://hl7.org/fhir}Period",
                                       "type" : "NamedTypeSpecifier"
                                    }
                                 }
                              }
                           }, {
                              "path" : "value",
                              "type" : "Property",
                              "source" : {
                                 "name" : "recordedDate",
                                 "type" : "IdentifierRef"
                              }
                           }, {
                              "path" : "value",
                              "type" : "Property",
                              "source" : {
                                 "path" : "end",
                                 "type" : "Property",
                                 "source" : {
                                    "strict" : false,
                                    "type" : "As",
                                    "operand" : {
                                       "name" : "onset",
                                       "type" : "IdentifierRef"
                                    },
                                    "asTypeSpecifier" : {
                                       "name" : "{http://hl7.org/fhir}Period",
                                       "type" : "NamedTypeSpecifier"
                                    }
                                 }
                              }
                           } ]
                        }
                     } ]
                  }
               }
            },
            "operand" : [ {
               "name" : "CondList",
               "operandTypeSpecifier" : {
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "name" : "{http://hl7.org/fhir}Condition",
                     "type" : "NamedTypeSpecifier"
                  }
               }
            } ]
         }, {
            "name" : "DateOfFirstCondition",
            "context" : "Patient",
            "accessLevel" : "Public",
            "type" : "FunctionDef",
            "expression" : {
               "name" : "ConditionDate",
               "type" : "FunctionRef",
               "operand" : [ {
                  "name" : "OldestCondition",
                  "type" : "FunctionRef",
                  "operand" : [ {
                     "name" : "CondList",
                     "type" : "OperandRef"
                  } ]
               } ]
            },
            "operand" : [ {
               "name" : "CondList",
               "operandTypeSpecifier" : {
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "name" : "{http://hl7.org/fhir}Condition",
                     "type" : "NamedTypeSpecifier"
                  }
               }
            } ]
         }, {
            "name" : "ValidCondition",
            "context" : "Patient",
            "accessLevel" : "Public",
            "type" : "FunctionDef",
            "expression" : {
               "type" : "Query",
               "source" : [ {
                  "alias" : "C",
                  "expression" : {
                     "name" : "CondList",
                     "type" : "OperandRef"
                  }
               } ],
               "relationship" : [ ],
               "where" : {
                  "type" : "And",
                  "operand" : [ {
                     "type" : "Not",
                     "operand" : {
                        "type" : "Equivalent",
                        "operand" : [ {
                           "name" : "ToConcept",
                           "libraryName" : "FHIRHelpers",
                           "type" : "FunctionRef",
                           "operand" : [ {
                              "path" : "verificationStatus",
                              "scope" : "C",
                              "type" : "Property"
                           } ]
                        }, {
                           "name" : "Condition Refuted",
                           "type" : "ConceptRef"
                        } ]
                     }
                  }, {
                     "type" : "Not",
                     "operand" : {
                        "type" : "Equivalent",
                        "operand" : [ {
                           "name" : "ToConcept",
                           "libraryName" : "FHIRHelpers",
                           "type" : "FunctionRef",
                           "operand" : [ {
                              "path" : "verificationStatus",
                              "scope" : "C",
                              "type" : "Property"
                           } ]
                        }, {
                           "name" : "Condition Entered in Error",
                           "type" : "ConceptRef"
                        } ]
                     }
                  } ]
               }
            },
            "operand" : [ {
               "name" : "CondList",
               "operandTypeSpecifier" : {
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "name" : "{http://hl7.org/fhir}Condition",
                     "type" : "NamedTypeSpecifier"
                  }
               }
            } ]
         }, {
            "name" : "DiagnosticReportDateString",
            "context" : "Patient",
            "accessLevel" : "Public",
            "type" : "FunctionDef",
            "expression" : {
               "type" : "Coalesce",
               "operand" : [ {
                  "name" : "DateTimeText",
                  "type" : "FunctionRef",
                  "operand" : [ {
                     "strict" : false,
                     "type" : "As",
                     "operand" : {
                        "path" : "end",
                        "type" : "Property",
                        "source" : {
                           "strict" : false,
                           "type" : "As",
                           "operand" : {
                              "path" : "effective",
                              "type" : "Property",
                              "source" : {
                                 "name" : "d",
                                 "type" : "OperandRef"
                              }
                           },
                           "asTypeSpecifier" : {
                              "name" : "{http://hl7.org/fhir}Period",
                              "type" : "NamedTypeSpecifier"
                           }
                        }
                     },
                     "asTypeSpecifier" : {
                        "name" : "{http://hl7.org/fhir}dateTime",
                        "type" : "NamedTypeSpecifier"
                     }
                  } ]
               }, {
                  "name" : "DateTimeText",
                  "type" : "FunctionRef",
                  "operand" : [ {
                     "strict" : false,
                     "type" : "As",
                     "operand" : {
                        "path" : "effective",
                        "type" : "Property",
                        "source" : {
                           "name" : "d",
                           "type" : "OperandRef"
                        }
                     },
                     "asTypeSpecifier" : {
                        "name" : "{http://hl7.org/fhir}dateTime",
                        "type" : "NamedTypeSpecifier"
                     }
                  } ]
               }, {
                  "name" : "DateTimeText",
                  "type" : "FunctionRef",
                  "operand" : [ {
                     "strict" : false,
                     "type" : "As",
                     "operand" : {
                        "path" : "start",
                        "type" : "Property",
                        "source" : {
                           "strict" : false,
                           "type" : "As",
                           "operand" : {
                              "path" : "effective",
                              "type" : "Property",
                              "source" : {
                                 "name" : "d",
                                 "type" : "OperandRef"
                              }
                           },
                           "asTypeSpecifier" : {
                              "name" : "{http://hl7.org/fhir}Period",
                              "type" : "NamedTypeSpecifier"
                           }
                        }
                     },
                     "asTypeSpecifier" : {
                        "name" : "{http://hl7.org/fhir}dateTime",
                        "type" : "NamedTypeSpecifier"
                     }
                  } ]
               } ]
            },
            "operand" : [ {
               "name" : "d",
               "operandTypeSpecifier" : {
                  "name" : "{http://hl7.org/fhir}DiagnosticReport",
                  "type" : "NamedTypeSpecifier"
               }
            } ]
         }, {
            "name" : "DiagnosticReportDate",
            "context" : "Patient",
            "accessLevel" : "Public",
            "type" : "FunctionDef",
            "expression" : {
               "type" : "Coalesce",
               "operand" : [ {
                  "path" : "value",
                  "type" : "Property",
                  "source" : {
                     "path" : "end",
                     "type" : "Property",
                     "source" : {
                        "strict" : false,
                        "type" : "As",
                        "operand" : {
                           "path" : "effective",
                           "type" : "Property",
                           "source" : {
                              "name" : "d",
                              "type" : "OperandRef"
                           }
                        },
                        "asTypeSpecifier" : {
                           "name" : "{http://hl7.org/fhir}Period",
                           "type" : "NamedTypeSpecifier"
                        }
                     }
                  }
               }, {
                  "path" : "value",
                  "type" : "Property",
                  "source" : {
                     "strict" : false,
                     "type" : "As",
                     "operand" : {
                        "path" : "effective",
                        "type" : "Property",
                        "source" : {
                           "name" : "d",
                           "type" : "OperandRef"
                        }
                     },
                     "asTypeSpecifier" : {
                        "name" : "{http://hl7.org/fhir}dateTime",
                        "type" : "NamedTypeSpecifier"
                     }
                  }
               }, {
                  "path" : "value",
                  "type" : "Property",
                  "source" : {
                     "path" : "start",
                     "type" : "Property",
                     "source" : {
                        "strict" : false,
                        "type" : "As",
                        "operand" : {
                           "path" : "effective",
                           "type" : "Property",
                           "source" : {
                              "name" : "d",
                              "type" : "OperandRef"
                           }
                        },
                        "asTypeSpecifier" : {
                           "name" : "{http://hl7.org/fhir}Period",
                           "type" : "NamedTypeSpecifier"
                        }
                     }
                  }
               } ]
            },
            "operand" : [ {
               "name" : "d",
               "operandTypeSpecifier" : {
                  "name" : "{http://hl7.org/fhir}DiagnosticReport",
                  "type" : "NamedTypeSpecifier"
               }
            } ]
         }, {
            "name" : "SortedDiagnosticReports",
            "context" : "Patient",
            "accessLevel" : "Public",
            "type" : "FunctionDef",
            "expression" : {
               "type" : "Query",
               "source" : [ {
                  "alias" : "R",
                  "expression" : {
                     "name" : "ReportList",
                     "type" : "OperandRef"
                  }
               } ],
               "relationship" : [ ],
               "sort" : {
                  "by" : [ {
                     "direction" : "asc",
                     "type" : "ByExpression",
                     "expression" : {
                        "type" : "Coalesce",
                        "operand" : [ {
                           "path" : "value",
                           "type" : "Property",
                           "source" : {
                              "path" : "end",
                              "type" : "Property",
                              "source" : {
                                 "strict" : false,
                                 "type" : "As",
                                 "operand" : {
                                    "name" : "effective",
                                    "type" : "IdentifierRef"
                                 },
                                 "asTypeSpecifier" : {
                                    "name" : "{http://hl7.org/fhir}Period",
                                    "type" : "NamedTypeSpecifier"
                                 }
                              }
                           }
                        }, {
                           "path" : "value",
                           "type" : "Property",
                           "source" : {
                              "strict" : false,
                              "type" : "As",
                              "operand" : {
                                 "name" : "effective",
                                 "type" : "IdentifierRef"
                              },
                              "asTypeSpecifier" : {
                                 "name" : "{http://hl7.org/fhir}dateTime",
                                 "type" : "NamedTypeSpecifier"
                              }
                           }
                        }, {
                           "path" : "value",
                           "type" : "Property",
                           "source" : {
                              "path" : "start",
                              "type" : "Property",
                              "source" : {
                                 "strict" : false,
                                 "type" : "As",
                                 "operand" : {
                                    "name" : "effective",
                                    "type" : "IdentifierRef"
                                 },
                                 "asTypeSpecifier" : {
                                    "name" : "{http://hl7.org/fhir}Period",
                                    "type" : "NamedTypeSpecifier"
                                 }
                              }
                           }
                        } ]
                     }
                  } ]
               }
            },
            "operand" : [ {
               "name" : "ReportList",
               "operandTypeSpecifier" : {
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "name" : "{http://hl7.org/fhir}DiagnosticReport",
                     "type" : "NamedTypeSpecifier"
                  }
               }
            } ]
         }, {
            "name" : "MostRecentDiagnosticReport",
            "context" : "Patient",
            "accessLevel" : "Public",
            "type" : "FunctionDef",
            "expression" : {
               "type" : "Last",
               "source" : {
                  "name" : "SortedDiagnosticReports",
                  "type" : "FunctionRef",
                  "operand" : [ {
                     "name" : "ReportList",
                     "type" : "OperandRef"
                  } ]
               }
            },
            "operand" : [ {
               "name" : "ReportList",
               "operandTypeSpecifier" : {
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "name" : "{http://hl7.org/fhir}DiagnosticReport",
                     "type" : "NamedTypeSpecifier"
                  }
               }
            } ]
         }, {
            "name" : "LookBack",
            "context" : "Patient",
            "accessLevel" : "Public",
            "type" : "FunctionDef",
            "expression" : {
               "type" : "Query",
               "source" : [ {
                  "alias" : "D",
                  "expression" : {
                     "name" : "DiagnosticReportList",
                     "type" : "OperandRef"
                  }
               } ],
               "let" : [ {
                  "identifier" : "LookBackInterval",
                  "expression" : {
                     "lowClosed" : true,
                     "highClosed" : true,
                     "type" : "Interval",
                     "low" : {
                        "type" : "Subtract",
                        "operand" : [ {
                           "type" : "Now"
                        }, {
                           "name" : "LookBack",
                           "type" : "OperandRef"
                        } ]
                     },
                     "high" : {
                        "type" : "Now"
                     }
                  }
               } ],
               "relationship" : [ ],
               "where" : {
                  "type" : "Or",
                  "operand" : [ {
                     "type" : "In",
                     "operand" : [ {
                        "path" : "value",
                        "type" : "Property",
                        "source" : {
                           "strict" : false,
                           "type" : "As",
                           "operand" : {
                              "path" : "effective",
                              "scope" : "D",
                              "type" : "Property"
                           },
                           "asTypeSpecifier" : {
                              "name" : "{http://hl7.org/fhir}dateTime",
                              "type" : "NamedTypeSpecifier"
                           }
                        }
                     }, {
                        "name" : "LookBackInterval",
                        "type" : "QueryLetRef"
                     } ]
                  }, {
                     "type" : "Overlaps",
                     "operand" : [ {
                        "name" : "PeriodToInterval",
                        "libraryName" : "C3F",
                        "type" : "FunctionRef",
                        "operand" : [ {
                           "strict" : false,
                           "type" : "As",
                           "operand" : {
                              "path" : "effective",
                              "scope" : "D",
                              "type" : "Property"
                           },
                           "asTypeSpecifier" : {
                              "name" : "{http://hl7.org/fhir}Period",
                              "type" : "NamedTypeSpecifier"
                           }
                        } ]
                     }, {
                        "name" : "LookBackInterval",
                        "type" : "QueryLetRef"
                     } ]
                  } ]
               }
            },
            "operand" : [ {
               "name" : "DiagnosticReportList",
               "operandTypeSpecifier" : {
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "name" : "{http://hl7.org/fhir}DiagnosticReport",
                     "type" : "NamedTypeSpecifier"
                  }
               }
            }, {
               "name" : "LookBack",
               "operandTypeSpecifier" : {
                  "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "type" : "NamedTypeSpecifier"
               }
            } ]
         }, {
            "name" : "AssociateDiagnosticReports",
            "context" : "Patient",
            "accessLevel" : "Public",
            "type" : "FunctionDef",
            "expression" : {
               "type" : "If",
               "condition" : {
                  "asType" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "type" : "As",
                  "operand" : {
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
                                    "type" : "And",
                                    "operand" : [ {
                                       "type" : "In",
                                       "operand" : [ {
                                          "path" : "value",
                                          "type" : "Property",
                                          "source" : {
                                             "strict" : false,
                                             "type" : "As",
                                             "operand" : {
                                                "path" : "effective",
                                                "type" : "Property",
                                                "source" : {
                                                   "name" : "d1",
                                                   "type" : "OperandRef"
                                                }
                                             },
                                             "asTypeSpecifier" : {
                                                "name" : "{http://hl7.org/fhir}dateTime",
                                                "type" : "NamedTypeSpecifier"
                                             }
                                          }
                                       }, {
                                          "lowClosed" : true,
                                          "highClosed" : true,
                                          "type" : "Interval",
                                          "low" : {
                                             "type" : "Subtract",
                                             "operand" : [ {
                                                "path" : "value",
                                                "type" : "Property",
                                                "source" : {
                                                   "strict" : false,
                                                   "type" : "As",
                                                   "operand" : {
                                                      "path" : "effective",
                                                      "type" : "Property",
                                                      "source" : {
                                                         "name" : "d2",
                                                         "type" : "OperandRef"
                                                      }
                                                   },
                                                   "asTypeSpecifier" : {
                                                      "name" : "{http://hl7.org/fhir}dateTime",
                                                      "type" : "NamedTypeSpecifier"
                                                   }
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
                                                "path" : "value",
                                                "type" : "Property",
                                                "source" : {
                                                   "strict" : false,
                                                   "type" : "As",
                                                   "operand" : {
                                                      "path" : "effective",
                                                      "type" : "Property",
                                                      "source" : {
                                                         "name" : "d2",
                                                         "type" : "OperandRef"
                                                      }
                                                   },
                                                   "asTypeSpecifier" : {
                                                      "name" : "{http://hl7.org/fhir}dateTime",
                                                      "type" : "NamedTypeSpecifier"
                                                   }
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
                                             "path" : "value",
                                             "type" : "Property",
                                             "source" : {
                                                "strict" : false,
                                                "type" : "As",
                                                "operand" : {
                                                   "path" : "effective",
                                                   "type" : "Property",
                                                   "source" : {
                                                      "name" : "d2",
                                                      "type" : "OperandRef"
                                                   }
                                                },
                                                "asTypeSpecifier" : {
                                                   "name" : "{http://hl7.org/fhir}dateTime",
                                                   "type" : "NamedTypeSpecifier"
                                                }
                                             }
                                          }
                                       }
                                    } ]
                                 }, {
                                    "type" : "And",
                                    "operand" : [ {
                                       "type" : "In",
                                       "operand" : [ {
                                          "path" : "value",
                                          "type" : "Property",
                                          "source" : {
                                             "strict" : false,
                                             "type" : "As",
                                             "operand" : {
                                                "path" : "effective",
                                                "type" : "Property",
                                                "source" : {
                                                   "name" : "d1",
                                                   "type" : "OperandRef"
                                                }
                                             },
                                             "asTypeSpecifier" : {
                                                "name" : "{http://hl7.org/fhir}dateTime",
                                                "type" : "NamedTypeSpecifier"
                                             }
                                          }
                                       }, {
                                          "lowClosed" : true,
                                          "highClosed" : true,
                                          "type" : "Interval",
                                          "low" : {
                                             "type" : "Subtract",
                                             "operand" : [ {
                                                "path" : "value",
                                                "type" : "Property",
                                                "source" : {
                                                   "path" : "start",
                                                   "type" : "Property",
                                                   "source" : {
                                                      "strict" : false,
                                                      "type" : "As",
                                                      "operand" : {
                                                         "path" : "effective",
                                                         "type" : "Property",
                                                         "source" : {
                                                            "name" : "d2",
                                                            "type" : "OperandRef"
                                                         }
                                                      },
                                                      "asTypeSpecifier" : {
                                                         "name" : "{http://hl7.org/fhir}Period",
                                                         "type" : "NamedTypeSpecifier"
                                                      }
                                                   }
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
                                                "path" : "value",
                                                "type" : "Property",
                                                "source" : {
                                                   "path" : "start",
                                                   "type" : "Property",
                                                   "source" : {
                                                      "strict" : false,
                                                      "type" : "As",
                                                      "operand" : {
                                                         "path" : "effective",
                                                         "type" : "Property",
                                                         "source" : {
                                                            "name" : "d2",
                                                            "type" : "OperandRef"
                                                         }
                                                      },
                                                      "asTypeSpecifier" : {
                                                         "name" : "{http://hl7.org/fhir}Period",
                                                         "type" : "NamedTypeSpecifier"
                                                      }
                                                   }
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
                                             "path" : "value",
                                             "type" : "Property",
                                             "source" : {
                                                "path" : "start",
                                                "type" : "Property",
                                                "source" : {
                                                   "strict" : false,
                                                   "type" : "As",
                                                   "operand" : {
                                                      "path" : "effective",
                                                      "type" : "Property",
                                                      "source" : {
                                                         "name" : "d2",
                                                         "type" : "OperandRef"
                                                      }
                                                   },
                                                   "asTypeSpecifier" : {
                                                      "name" : "{http://hl7.org/fhir}Period",
                                                      "type" : "NamedTypeSpecifier"
                                                   }
                                                }
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
                                       "path" : "value",
                                       "type" : "Property",
                                       "source" : {
                                          "strict" : false,
                                          "type" : "As",
                                          "operand" : {
                                             "path" : "effective",
                                             "type" : "Property",
                                             "source" : {
                                                "name" : "d1",
                                                "type" : "OperandRef"
                                             }
                                          },
                                          "asTypeSpecifier" : {
                                             "name" : "{http://hl7.org/fhir}dateTime",
                                             "type" : "NamedTypeSpecifier"
                                          }
                                       }
                                    }, {
                                       "lowClosed" : true,
                                       "highClosed" : true,
                                       "type" : "Interval",
                                       "low" : {
                                          "type" : "Subtract",
                                          "operand" : [ {
                                             "path" : "value",
                                             "type" : "Property",
                                             "source" : {
                                                "path" : "end",
                                                "type" : "Property",
                                                "source" : {
                                                   "strict" : false,
                                                   "type" : "As",
                                                   "operand" : {
                                                      "path" : "effective",
                                                      "type" : "Property",
                                                      "source" : {
                                                         "name" : "d2",
                                                         "type" : "OperandRef"
                                                      }
                                                   },
                                                   "asTypeSpecifier" : {
                                                      "name" : "{http://hl7.org/fhir}Period",
                                                      "type" : "NamedTypeSpecifier"
                                                   }
                                                }
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
                                             "path" : "value",
                                             "type" : "Property",
                                             "source" : {
                                                "path" : "end",
                                                "type" : "Property",
                                                "source" : {
                                                   "strict" : false,
                                                   "type" : "As",
                                                   "operand" : {
                                                      "path" : "effective",
                                                      "type" : "Property",
                                                      "source" : {
                                                         "name" : "d2",
                                                         "type" : "OperandRef"
                                                      }
                                                   },
                                                   "asTypeSpecifier" : {
                                                      "name" : "{http://hl7.org/fhir}Period",
                                                      "type" : "NamedTypeSpecifier"
                                                   }
                                                }
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
                                          "path" : "value",
                                          "type" : "Property",
                                          "source" : {
                                             "path" : "end",
                                             "type" : "Property",
                                             "source" : {
                                                "strict" : false,
                                                "type" : "As",
                                                "operand" : {
                                                   "path" : "effective",
                                                   "type" : "Property",
                                                   "source" : {
                                                      "name" : "d2",
                                                      "type" : "OperandRef"
                                                   }
                                                },
                                                "asTypeSpecifier" : {
                                                   "name" : "{http://hl7.org/fhir}Period",
                                                   "type" : "NamedTypeSpecifier"
                                                }
                                             }
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
                                    "path" : "value",
                                    "type" : "Property",
                                    "source" : {
                                       "strict" : false,
                                       "type" : "As",
                                       "operand" : {
                                          "path" : "effective",
                                          "type" : "Property",
                                          "source" : {
                                             "name" : "d2",
                                             "type" : "OperandRef"
                                          }
                                       },
                                       "asTypeSpecifier" : {
                                          "name" : "{http://hl7.org/fhir}dateTime",
                                          "type" : "NamedTypeSpecifier"
                                       }
                                    }
                                 }, {
                                    "lowClosed" : true,
                                    "highClosed" : true,
                                    "type" : "Interval",
                                    "low" : {
                                       "type" : "Subtract",
                                       "operand" : [ {
                                          "path" : "value",
                                          "type" : "Property",
                                          "source" : {
                                             "path" : "start",
                                             "type" : "Property",
                                             "source" : {
                                                "strict" : false,
                                                "type" : "As",
                                                "operand" : {
                                                   "path" : "effective",
                                                   "type" : "Property",
                                                   "source" : {
                                                      "name" : "d1",
                                                      "type" : "OperandRef"
                                                   }
                                                },
                                                "asTypeSpecifier" : {
                                                   "name" : "{http://hl7.org/fhir}Period",
                                                   "type" : "NamedTypeSpecifier"
                                                }
                                             }
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
                                          "path" : "value",
                                          "type" : "Property",
                                          "source" : {
                                             "path" : "start",
                                             "type" : "Property",
                                             "source" : {
                                                "strict" : false,
                                                "type" : "As",
                                                "operand" : {
                                                   "path" : "effective",
                                                   "type" : "Property",
                                                   "source" : {
                                                      "name" : "d1",
                                                      "type" : "OperandRef"
                                                   }
                                                },
                                                "asTypeSpecifier" : {
                                                   "name" : "{http://hl7.org/fhir}Period",
                                                   "type" : "NamedTypeSpecifier"
                                                }
                                             }
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
                                       "path" : "value",
                                       "type" : "Property",
                                       "source" : {
                                          "path" : "start",
                                          "type" : "Property",
                                          "source" : {
                                             "strict" : false,
                                             "type" : "As",
                                             "operand" : {
                                                "path" : "effective",
                                                "type" : "Property",
                                                "source" : {
                                                   "name" : "d1",
                                                   "type" : "OperandRef"
                                                }
                                             },
                                             "asTypeSpecifier" : {
                                                "name" : "{http://hl7.org/fhir}Period",
                                                "type" : "NamedTypeSpecifier"
                                             }
                                          }
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
                                 "path" : "value",
                                 "type" : "Property",
                                 "source" : {
                                    "strict" : false,
                                    "type" : "As",
                                    "operand" : {
                                       "path" : "effective",
                                       "type" : "Property",
                                       "source" : {
                                          "name" : "d2",
                                          "type" : "OperandRef"
                                       }
                                    },
                                    "asTypeSpecifier" : {
                                       "name" : "{http://hl7.org/fhir}dateTime",
                                       "type" : "NamedTypeSpecifier"
                                    }
                                 }
                              }, {
                                 "lowClosed" : true,
                                 "highClosed" : true,
                                 "type" : "Interval",
                                 "low" : {
                                    "type" : "Subtract",
                                    "operand" : [ {
                                       "path" : "value",
                                       "type" : "Property",
                                       "source" : {
                                          "path" : "end",
                                          "type" : "Property",
                                          "source" : {
                                             "strict" : false,
                                             "type" : "As",
                                             "operand" : {
                                                "path" : "effective",
                                                "type" : "Property",
                                                "source" : {
                                                   "name" : "d1",
                                                   "type" : "OperandRef"
                                                }
                                             },
                                             "asTypeSpecifier" : {
                                                "name" : "{http://hl7.org/fhir}Period",
                                                "type" : "NamedTypeSpecifier"
                                             }
                                          }
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
                                       "path" : "value",
                                       "type" : "Property",
                                       "source" : {
                                          "path" : "end",
                                          "type" : "Property",
                                          "source" : {
                                             "strict" : false,
                                             "type" : "As",
                                             "operand" : {
                                                "path" : "effective",
                                                "type" : "Property",
                                                "source" : {
                                                   "name" : "d1",
                                                   "type" : "OperandRef"
                                                }
                                             },
                                             "asTypeSpecifier" : {
                                                "name" : "{http://hl7.org/fhir}Period",
                                                "type" : "NamedTypeSpecifier"
                                             }
                                          }
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
                                    "path" : "value",
                                    "type" : "Property",
                                    "source" : {
                                       "path" : "end",
                                       "type" : "Property",
                                       "source" : {
                                          "strict" : false,
                                          "type" : "As",
                                          "operand" : {
                                             "path" : "effective",
                                             "type" : "Property",
                                             "source" : {
                                                "name" : "d1",
                                                "type" : "OperandRef"
                                             }
                                          },
                                          "asTypeSpecifier" : {
                                             "name" : "{http://hl7.org/fhir}Period",
                                             "type" : "NamedTypeSpecifier"
                                          }
                                       }
                                    }
                                 }
                              }
                           } ]
                        } ]
                     }, {
                        "type" : "Overlaps",
                        "operand" : [ {
                           "name" : "ToInterval",
                           "libraryName" : "FHIRHelpers",
                           "type" : "FunctionRef",
                           "operand" : [ {
                              "strict" : false,
                              "type" : "As",
                              "operand" : {
                                 "path" : "effective",
                                 "type" : "Property",
                                 "source" : {
                                    "name" : "d1",
                                    "type" : "OperandRef"
                                 }
                              },
                              "asTypeSpecifier" : {
                                 "name" : "{http://hl7.org/fhir}Period",
                                 "type" : "NamedTypeSpecifier"
                              }
                           } ]
                        }, {
                           "name" : "ToInterval",
                           "libraryName" : "FHIRHelpers",
                           "type" : "FunctionRef",
                           "operand" : [ {
                              "strict" : false,
                              "type" : "As",
                              "operand" : {
                                 "path" : "effective",
                                 "type" : "Property",
                                 "source" : {
                                    "name" : "d2",
                                    "type" : "OperandRef"
                                 }
                              },
                              "asTypeSpecifier" : {
                                 "name" : "{http://hl7.org/fhir}Period",
                                 "type" : "NamedTypeSpecifier"
                              }
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
            },
            "operand" : [ {
               "name" : "d1",
               "operandTypeSpecifier" : {
                  "name" : "{http://hl7.org/fhir}DiagnosticReport",
                  "type" : "NamedTypeSpecifier"
               }
            }, {
               "name" : "d2",
               "operandTypeSpecifier" : {
                  "name" : "{http://hl7.org/fhir}DiagnosticReport",
                  "type" : "NamedTypeSpecifier"
               }
            } ]
         }, {
            "name" : "CoincidentDiagnosticReports",
            "context" : "Patient",
            "accessLevel" : "Public",
            "type" : "FunctionDef",
            "expression" : {
               "type" : "If",
               "condition" : {
                  "asType" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "type" : "As",
                  "operand" : {
                     "type" : "Or",
                     "operand" : [ {
                        "type" : "Or",
                        "operand" : [ {
                           "name" : "AssociateDiagnosticReports",
                           "type" : "FunctionRef",
                           "operand" : [ {
                              "name" : "d1",
                              "type" : "OperandRef"
                           }, {
                              "name" : "d2",
                              "type" : "OperandRef"
                           } ]
                        }, {
                           "type" : "Equal",
                           "operand" : [ {
                              "path" : "encounter",
                              "type" : "Property",
                              "source" : {
                                 "name" : "d1",
                                 "type" : "OperandRef"
                              }
                           }, {
                              "path" : "encounter",
                              "type" : "Property",
                              "source" : {
                                 "name" : "d2",
                                 "type" : "OperandRef"
                              }
                           } ]
                        } ]
                     }, {
                        "type" : "Equal",
                        "operand" : [ {
                           "type" : "Coalesce",
                           "operand" : [ {
                              "type" : "Query",
                              "source" : [ {
                                 "alias" : "R",
                                 "expression" : {
                                    "path" : "basedOn",
                                    "type" : "Property",
                                    "source" : {
                                       "name" : "d1",
                                       "type" : "OperandRef"
                                    }
                                 }
                              } ],
                              "relationship" : [ ],
                              "where" : {
                                 "type" : "Equal",
                                 "operand" : [ {
                                    "name" : "ToString",
                                    "libraryName" : "FHIRHelpers",
                                    "type" : "FunctionRef",
                                    "operand" : [ {
                                       "path" : "type",
                                       "scope" : "R",
                                       "type" : "Property"
                                    } ]
                                 }, {
                                    "valueType" : "{urn:hl7-org:elm-types:r1}String",
                                    "value" : "ServiceRequest",
                                    "type" : "Literal"
                                 } ]
                              },
                              "return" : {
                                 "expression" : {
                                    "path" : "reference",
                                    "scope" : "R",
                                    "type" : "Property"
                                 }
                              }
                           } ]
                        }, {
                           "type" : "Coalesce",
                           "operand" : [ {
                              "type" : "Query",
                              "source" : [ {
                                 "alias" : "R",
                                 "expression" : {
                                    "path" : "basedOn",
                                    "type" : "Property",
                                    "source" : {
                                       "name" : "d2",
                                       "type" : "OperandRef"
                                    }
                                 }
                              } ],
                              "relationship" : [ ],
                              "where" : {
                                 "type" : "Equal",
                                 "operand" : [ {
                                    "name" : "ToString",
                                    "libraryName" : "FHIRHelpers",
                                    "type" : "FunctionRef",
                                    "operand" : [ {
                                       "path" : "type",
                                       "scope" : "R",
                                       "type" : "Property"
                                    } ]
                                 }, {
                                    "valueType" : "{urn:hl7-org:elm-types:r1}String",
                                    "value" : "ServiceRequest",
                                    "type" : "Literal"
                                 } ]
                              },
                              "return" : {
                                 "expression" : {
                                    "path" : "reference",
                                    "scope" : "R",
                                    "type" : "Property"
                                 }
                              }
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
            },
            "operand" : [ {
               "name" : "d1",
               "operandTypeSpecifier" : {
                  "name" : "{http://hl7.org/fhir}DiagnosticReport",
                  "type" : "NamedTypeSpecifier"
               }
            }, {
               "name" : "d2",
               "operandTypeSpecifier" : {
                  "name" : "{http://hl7.org/fhir}DiagnosticReport",
                  "type" : "NamedTypeSpecifier"
               }
            } ]
         }, {
            "name" : "RelevantEncounterStatus",
            "context" : "Patient",
            "accessLevel" : "Public",
            "type" : "FunctionDef",
            "expression" : {
               "type" : "Query",
               "source" : [ {
                  "alias" : "E",
                  "expression" : {
                     "name" : "EncList",
                     "type" : "OperandRef"
                  }
               } ],
               "relationship" : [ ],
               "where" : {
                  "type" : "Or",
                  "operand" : [ {
                     "type" : "Or",
                     "operand" : [ {
                        "type" : "Equal",
                        "operand" : [ {
                           "path" : "value",
                           "type" : "Property",
                           "source" : {
                              "path" : "status",
                              "scope" : "E",
                              "type" : "Property"
                           }
                        }, {
                           "valueType" : "{urn:hl7-org:elm-types:r1}String",
                           "value" : "triaged",
                           "type" : "Literal"
                        } ]
                     }, {
                        "type" : "Equal",
                        "operand" : [ {
                           "path" : "value",
                           "type" : "Property",
                           "source" : {
                              "path" : "status",
                              "scope" : "E",
                              "type" : "Property"
                           }
                        }, {
                           "valueType" : "{urn:hl7-org:elm-types:r1}String",
                           "value" : "in-progress",
                           "type" : "Literal"
                        } ]
                     } ]
                  }, {
                     "type" : "Equal",
                     "operand" : [ {
                        "path" : "value",
                        "type" : "Property",
                        "source" : {
                           "path" : "status",
                           "scope" : "E",
                           "type" : "Property"
                        }
                     }, {
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "finished",
                        "type" : "Literal"
                     } ]
                  } ]
               }
            },
            "operand" : [ {
               "name" : "EncList",
               "operandTypeSpecifier" : {
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "name" : "{http://hl7.org/fhir}Encounter",
                     "type" : "NamedTypeSpecifier"
                  }
               }
            } ]
         }, {
            "name" : "MedicationAdministrationDate",
            "context" : "Patient",
            "accessLevel" : "Public",
            "type" : "FunctionDef",
            "expression" : {
               "type" : "Coalesce",
               "operand" : [ {
                  "name" : "DateTimeText",
                  "type" : "FunctionRef",
                  "operand" : [ {
                     "strict" : false,
                     "type" : "As",
                     "operand" : {
                        "path" : "effective",
                        "type" : "Property",
                        "source" : {
                           "name" : "a",
                           "type" : "OperandRef"
                        }
                     },
                     "asTypeSpecifier" : {
                        "name" : "{http://hl7.org/fhir}dateTime",
                        "type" : "NamedTypeSpecifier"
                     }
                  } ]
               }, {
                  "name" : "DateTimeText",
                  "type" : "FunctionRef",
                  "operand" : [ {
                     "path" : "end",
                     "type" : "Property",
                     "source" : {
                        "strict" : false,
                        "type" : "As",
                        "operand" : {
                           "path" : "effective",
                           "type" : "Property",
                           "source" : {
                              "name" : "a",
                              "type" : "OperandRef"
                           }
                        },
                        "asTypeSpecifier" : {
                           "name" : "{http://hl7.org/fhir}Period",
                           "type" : "NamedTypeSpecifier"
                        }
                     }
                  } ]
               }, {
                  "name" : "DateTimeText",
                  "type" : "FunctionRef",
                  "operand" : [ {
                     "path" : "start",
                     "type" : "Property",
                     "source" : {
                        "strict" : false,
                        "type" : "As",
                        "operand" : {
                           "path" : "effective",
                           "type" : "Property",
                           "source" : {
                              "name" : "a",
                              "type" : "OperandRef"
                           }
                        },
                        "asTypeSpecifier" : {
                           "name" : "{http://hl7.org/fhir}Period",
                           "type" : "NamedTypeSpecifier"
                        }
                     }
                  } ]
               } ]
            },
            "operand" : [ {
               "name" : "a",
               "operandTypeSpecifier" : {
                  "name" : "{http://hl7.org/fhir}MedicationAdministration",
                  "type" : "NamedTypeSpecifier"
               }
            } ]
         }, {
            "name" : "CompletedMedicationAdministration",
            "context" : "Patient",
            "accessLevel" : "Public",
            "type" : "FunctionDef",
            "expression" : {
               "type" : "Query",
               "source" : [ {
                  "alias" : "M",
                  "expression" : {
                     "name" : "MedList",
                     "type" : "OperandRef"
                  }
               } ],
               "relationship" : [ ],
               "where" : {
                  "type" : "Equal",
                  "operand" : [ {
                     "path" : "value",
                     "type" : "Property",
                     "source" : {
                        "path" : "status",
                        "scope" : "M",
                        "type" : "Property"
                     }
                  }, {
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "completed",
                     "type" : "Literal"
                  } ]
               }
            },
            "operand" : [ {
               "name" : "MedList",
               "operandTypeSpecifier" : {
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "name" : "{http://hl7.org/fhir}MedicationAdministration",
                     "type" : "NamedTypeSpecifier"
                  }
               }
            } ]
         }, {
            "name" : "CompletedMedicationDispense",
            "context" : "Patient",
            "accessLevel" : "Public",
            "type" : "FunctionDef",
            "expression" : {
               "type" : "Query",
               "source" : [ {
                  "alias" : "M",
                  "expression" : {
                     "name" : "MedList",
                     "type" : "OperandRef"
                  }
               } ],
               "relationship" : [ ],
               "where" : {
                  "type" : "Equal",
                  "operand" : [ {
                     "path" : "value",
                     "type" : "Property",
                     "source" : {
                        "path" : "status",
                        "scope" : "M",
                        "type" : "Property"
                     }
                  }, {
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "completed",
                     "type" : "Literal"
                  } ]
               }
            },
            "operand" : [ {
               "name" : "MedList",
               "operandTypeSpecifier" : {
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "name" : "{http://hl7.org/fhir}MedicationDispense",
                     "type" : "NamedTypeSpecifier"
                  }
               }
            } ]
         }, {
            "name" : "CompletedDiagnosticReport",
            "context" : "Patient",
            "accessLevel" : "Public",
            "type" : "FunctionDef",
            "expression" : {
               "type" : "Query",
               "source" : [ {
                  "alias" : "D",
                  "expression" : {
                     "name" : "DiagnosticReportList",
                     "type" : "OperandRef"
                  }
               } ],
               "relationship" : [ ],
               "where" : {
                  "type" : "In",
                  "operand" : [ {
                     "path" : "value",
                     "type" : "Property",
                     "source" : {
                        "path" : "status",
                        "scope" : "D",
                        "type" : "Property"
                     }
                  }, {
                     "type" : "List",
                     "element" : [ {
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "final",
                        "type" : "Literal"
                     }, {
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "amended",
                        "type" : "Literal"
                     }, {
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "corrected",
                        "type" : "Literal"
                     }, {
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "appended",
                        "type" : "Literal"
                     } ]
                  } ]
               }
            },
            "operand" : [ {
               "name" : "DiagnosticReportList",
               "operandTypeSpecifier" : {
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "name" : "{http://hl7.org/fhir}DiagnosticReport",
                     "type" : "NamedTypeSpecifier"
                  }
               }
            } ]
         }, {
            "name" : "LookBack",
            "context" : "Patient",
            "accessLevel" : "Public",
            "type" : "FunctionDef",
            "expression" : {
               "type" : "Query",
               "source" : [ {
                  "alias" : "M",
                  "expression" : {
                     "name" : "MedList",
                     "type" : "OperandRef"
                  }
               } ],
               "let" : [ {
                  "identifier" : "LookBackInterval",
                  "expression" : {
                     "lowClosed" : true,
                     "highClosed" : true,
                     "type" : "Interval",
                     "low" : {
                        "type" : "Subtract",
                        "operand" : [ {
                           "type" : "Now"
                        }, {
                           "name" : "LookBack",
                           "type" : "OperandRef"
                        } ]
                     },
                     "high" : {
                        "type" : "Now"
                     }
                  }
               } ],
               "relationship" : [ ],
               "where" : {
                  "type" : "Or",
                  "operand" : [ {
                     "type" : "In",
                     "operand" : [ {
                        "path" : "value",
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
                              "name" : "{http://hl7.org/fhir}dateTime",
                              "type" : "NamedTypeSpecifier"
                           }
                        }
                     }, {
                        "name" : "LookBackInterval",
                        "type" : "QueryLetRef"
                     } ]
                  }, {
                     "type" : "Overlaps",
                     "operand" : [ {
                        "name" : "PeriodToInterval",
                        "libraryName" : "C3F",
                        "type" : "FunctionRef",
                        "operand" : [ {
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
                        } ]
                     }, {
                        "name" : "LookBackInterval",
                        "type" : "QueryLetRef"
                     } ]
                  } ]
               }
            },
            "operand" : [ {
               "name" : "MedList",
               "operandTypeSpecifier" : {
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "name" : "{http://hl7.org/fhir}MedicationAdministration",
                     "type" : "NamedTypeSpecifier"
                  }
               }
            }, {
               "name" : "LookBack",
               "operandTypeSpecifier" : {
                  "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "type" : "NamedTypeSpecifier"
               }
            } ]
         }, {
            "name" : "CompletedMedicationRequest",
            "context" : "Patient",
            "accessLevel" : "Public",
            "type" : "FunctionDef",
            "expression" : {
               "type" : "Query",
               "source" : [ {
                  "alias" : "M",
                  "expression" : {
                     "name" : "MedList",
                     "type" : "OperandRef"
                  }
               } ],
               "relationship" : [ ],
               "where" : {
                  "type" : "Equal",
                  "operand" : [ {
                     "path" : "value",
                     "type" : "Property",
                     "source" : {
                        "path" : "status",
                        "scope" : "M",
                        "type" : "Property"
                     }
                  }, {
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "completed",
                     "type" : "Literal"
                  } ]
               }
            },
            "operand" : [ {
               "name" : "MedList",
               "operandTypeSpecifier" : {
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "name" : "{http://hl7.org/fhir}MedicationRequest",
                     "type" : "NamedTypeSpecifier"
                  }
               }
            } ]
         }, {
            "name" : "MedicationRequestsWithOrderIntent",
            "context" : "Patient",
            "accessLevel" : "Public",
            "type" : "FunctionDef",
            "expression" : {
               "type" : "Query",
               "source" : [ {
                  "alias" : "M",
                  "expression" : {
                     "name" : "MedList",
                     "type" : "OperandRef"
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
                              "type" : "Equal",
                              "operand" : [ {
                                 "path" : "value",
                                 "type" : "Property",
                                 "source" : {
                                    "path" : "intent",
                                    "scope" : "M",
                                    "type" : "Property"
                                 }
                              }, {
                                 "valueType" : "{urn:hl7-org:elm-types:r1}String",
                                 "value" : "order",
                                 "type" : "Literal"
                              } ]
                           }, {
                              "type" : "Equal",
                              "operand" : [ {
                                 "path" : "value",
                                 "type" : "Property",
                                 "source" : {
                                    "path" : "intent",
                                    "scope" : "M",
                                    "type" : "Property"
                                 }
                              }, {
                                 "valueType" : "{urn:hl7-org:elm-types:r1}String",
                                 "value" : "original-order",
                                 "type" : "Literal"
                              } ]
                           } ]
                        }, {
                           "type" : "Equal",
                           "operand" : [ {
                              "path" : "value",
                              "type" : "Property",
                              "source" : {
                                 "path" : "intent",
                                 "scope" : "M",
                                 "type" : "Property"
                              }
                           }, {
                              "valueType" : "{urn:hl7-org:elm-types:r1}String",
                              "value" : "reflex-order",
                              "type" : "Literal"
                           } ]
                        } ]
                     }, {
                        "type" : "Equal",
                        "operand" : [ {
                           "path" : "value",
                           "type" : "Property",
                           "source" : {
                              "path" : "intent",
                              "scope" : "M",
                              "type" : "Property"
                           }
                        }, {
                           "valueType" : "{urn:hl7-org:elm-types:r1}String",
                           "value" : "filler-order",
                           "type" : "Literal"
                        } ]
                     } ]
                  }, {
                     "type" : "Equal",
                     "operand" : [ {
                        "path" : "value",
                        "type" : "Property",
                        "source" : {
                           "path" : "intent",
                           "scope" : "M",
                           "type" : "Property"
                        }
                     }, {
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "instance-order",
                        "type" : "Literal"
                     } ]
                  } ]
               }
            },
            "operand" : [ {
               "name" : "MedList",
               "operandTypeSpecifier" : {
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "name" : "{http://hl7.org/fhir}MedicationRequest",
                     "type" : "NamedTypeSpecifier"
                  }
               }
            } ]
         }, {
            "name" : "ProcedureDate",
            "context" : "Patient",
            "accessLevel" : "Public",
            "type" : "FunctionDef",
            "expression" : {
               "type" : "Coalesce",
               "operand" : [ {
                  "path" : "value",
                  "type" : "Property",
                  "source" : {
                     "strict" : false,
                     "type" : "As",
                     "operand" : {
                        "path" : "performed",
                        "type" : "Property",
                        "source" : {
                           "name" : "p",
                           "type" : "OperandRef"
                        }
                     },
                     "asTypeSpecifier" : {
                        "name" : "{http://hl7.org/fhir}dateTime",
                        "type" : "NamedTypeSpecifier"
                     }
                  }
               }, {
                  "path" : "value",
                  "type" : "Property",
                  "source" : {
                     "path" : "end",
                     "type" : "Property",
                     "source" : {
                        "strict" : false,
                        "type" : "As",
                        "operand" : {
                           "path" : "performed",
                           "type" : "Property",
                           "source" : {
                              "name" : "p",
                              "type" : "OperandRef"
                           }
                        },
                        "asTypeSpecifier" : {
                           "name" : "{http://hl7.org/fhir}Period",
                           "type" : "NamedTypeSpecifier"
                        }
                     }
                  }
               }, {
                  "path" : "value",
                  "type" : "Property",
                  "source" : {
                     "path" : "start",
                     "type" : "Property",
                     "source" : {
                        "strict" : false,
                        "type" : "As",
                        "operand" : {
                           "path" : "performed",
                           "type" : "Property",
                           "source" : {
                              "name" : "p",
                              "type" : "OperandRef"
                           }
                        },
                        "asTypeSpecifier" : {
                           "name" : "{http://hl7.org/fhir}Period",
                           "type" : "NamedTypeSpecifier"
                        }
                     }
                  }
               } ]
            },
            "operand" : [ {
               "name" : "p",
               "operandTypeSpecifier" : {
                  "name" : "{http://hl7.org/fhir}Procedure",
                  "type" : "NamedTypeSpecifier"
               }
            } ]
         }, {
            "name" : "ProcedureDateString",
            "context" : "Patient",
            "accessLevel" : "Public",
            "type" : "FunctionDef",
            "expression" : {
               "type" : "Coalesce",
               "operand" : [ {
                  "name" : "DateTimeText",
                  "type" : "FunctionRef",
                  "operand" : [ {
                     "strict" : false,
                     "type" : "As",
                     "operand" : {
                        "path" : "performed",
                        "type" : "Property",
                        "source" : {
                           "name" : "p",
                           "type" : "OperandRef"
                        }
                     },
                     "asTypeSpecifier" : {
                        "name" : "{http://hl7.org/fhir}dateTime",
                        "type" : "NamedTypeSpecifier"
                     }
                  } ]
               }, {
                  "name" : "DateTimeText",
                  "type" : "FunctionRef",
                  "operand" : [ {
                     "path" : "end",
                     "type" : "Property",
                     "source" : {
                        "strict" : false,
                        "type" : "As",
                        "operand" : {
                           "path" : "performed",
                           "type" : "Property",
                           "source" : {
                              "name" : "p",
                              "type" : "OperandRef"
                           }
                        },
                        "asTypeSpecifier" : {
                           "name" : "{http://hl7.org/fhir}Period",
                           "type" : "NamedTypeSpecifier"
                        }
                     }
                  } ]
               }, {
                  "name" : "DateTimeText",
                  "type" : "FunctionRef",
                  "operand" : [ {
                     "path" : "start",
                     "type" : "Property",
                     "source" : {
                        "strict" : false,
                        "type" : "As",
                        "operand" : {
                           "path" : "performed",
                           "type" : "Property",
                           "source" : {
                              "name" : "p",
                              "type" : "OperandRef"
                           }
                        },
                        "asTypeSpecifier" : {
                           "name" : "{http://hl7.org/fhir}Period",
                           "type" : "NamedTypeSpecifier"
                        }
                     }
                  } ]
               } ]
            },
            "operand" : [ {
               "name" : "p",
               "operandTypeSpecifier" : {
                  "name" : "{http://hl7.org/fhir}Procedure",
                  "type" : "NamedTypeSpecifier"
               }
            } ]
         }, {
            "name" : "OldestProcedure",
            "context" : "Patient",
            "accessLevel" : "Public",
            "type" : "FunctionDef",
            "expression" : {
               "type" : "First",
               "source" : {
                  "type" : "Query",
                  "source" : [ {
                     "alias" : "P",
                     "expression" : {
                        "name" : "ProcList",
                        "type" : "OperandRef"
                     }
                  } ],
                  "relationship" : [ ],
                  "sort" : {
                     "by" : [ {
                        "direction" : "asc",
                        "type" : "ByExpression",
                        "expression" : {
                           "type" : "Coalesce",
                           "operand" : [ {
                              "path" : "value",
                              "type" : "Property",
                              "source" : {
                                 "strict" : false,
                                 "type" : "As",
                                 "operand" : {
                                    "name" : "performed",
                                    "type" : "IdentifierRef"
                                 },
                                 "asTypeSpecifier" : {
                                    "name" : "{http://hl7.org/fhir}dateTime",
                                    "type" : "NamedTypeSpecifier"
                                 }
                              }
                           }, {
                              "path" : "value",
                              "type" : "Property",
                              "source" : {
                                 "path" : "start",
                                 "type" : "Property",
                                 "source" : {
                                    "strict" : false,
                                    "type" : "As",
                                    "operand" : {
                                       "name" : "performed",
                                       "type" : "IdentifierRef"
                                    },
                                    "asTypeSpecifier" : {
                                       "name" : "{http://hl7.org/fhir}Period",
                                       "type" : "NamedTypeSpecifier"
                                    }
                                 }
                              }
                           }, {
                              "path" : "value",
                              "type" : "Property",
                              "source" : {
                                 "path" : "end",
                                 "type" : "Property",
                                 "source" : {
                                    "strict" : false,
                                    "type" : "As",
                                    "operand" : {
                                       "name" : "performed",
                                       "type" : "IdentifierRef"
                                    },
                                    "asTypeSpecifier" : {
                                       "name" : "{http://hl7.org/fhir}Period",
                                       "type" : "NamedTypeSpecifier"
                                    }
                                 }
                              }
                           } ]
                        }
                     } ]
                  }
               }
            },
            "operand" : [ {
               "name" : "ProcList",
               "operandTypeSpecifier" : {
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "name" : "{http://hl7.org/fhir}Procedure",
                     "type" : "NamedTypeSpecifier"
                  }
               }
            } ]
         }, {
            "name" : "DateOfFirstProcedure",
            "context" : "Patient",
            "accessLevel" : "Public",
            "type" : "FunctionDef",
            "expression" : {
               "name" : "ProcedureDate",
               "type" : "FunctionRef",
               "operand" : [ {
                  "name" : "OldestProcedure",
                  "type" : "FunctionRef",
                  "operand" : [ {
                     "name" : "ProcList",
                     "type" : "OperandRef"
                  } ]
               } ]
            },
            "operand" : [ {
               "name" : "ProcList",
               "operandTypeSpecifier" : {
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "name" : "{http://hl7.org/fhir}Procedure",
                     "type" : "NamedTypeSpecifier"
                  }
               }
            } ]
         }, {
            "name" : "CompletedImmunization",
            "context" : "Patient",
            "accessLevel" : "Public",
            "type" : "FunctionDef",
            "expression" : {
               "type" : "Query",
               "source" : [ {
                  "alias" : "I",
                  "expression" : {
                     "name" : "ImmunizationList",
                     "type" : "OperandRef"
                  }
               } ],
               "relationship" : [ ],
               "where" : {
                  "type" : "Equal",
                  "operand" : [ {
                     "path" : "value",
                     "type" : "Property",
                     "source" : {
                        "path" : "status",
                        "scope" : "I",
                        "type" : "Property"
                     }
                  }, {
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "completed",
                     "type" : "Literal"
                  } ]
               }
            },
            "operand" : [ {
               "name" : "ImmunizationList",
               "operandTypeSpecifier" : {
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "name" : "{http://hl7.org/fhir}Immunization",
                     "type" : "NamedTypeSpecifier"
                  }
               }
            } ]
         } ]
      }
   }
}

