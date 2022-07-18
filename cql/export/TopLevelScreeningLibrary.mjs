export const TopLevelScreeningLibrary = {
   "library" : {
      "annotation" : [ {
         "translatorOptions" : "",
         "type" : "CqlToElmInfo"
      } ],
      "identifier" : {
         "id" : "TopLevelScreeningLibrary",
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
      "parameters" : {
         "def" : [ {
            "name" : "MinimumScreeningAge",
            "accessLevel" : "Public",
            "default" : {
               "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
               "value" : "21",
               "type" : "Literal"
            }
         } ]
      },
      "codeSystems" : {
         "def" : [ {
            "name" : "GENDER-IDENTITY",
            "id" : "http://hl7.org/fhir/gender-identity",
            "accessLevel" : "Public"
         } ]
      },
      "codes" : {
         "def" : [ {
            "name" : "Transgender Male Code",
            "id" : "transgender-male",
            "display" : "transgender male",
            "accessLevel" : "Public",
            "codeSystem" : {
               "name" : "GENDER-IDENTITY"
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
            "name" : "BirthSex",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "type" : "Query",
               "source" : [ {
                  "alias" : "E",
                  "expression" : {
                     "path" : "extension",
                     "type" : "Property",
                     "source" : {
                        "name" : "Patient",
                        "type" : "ExpressionRef"
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
                        "path" : "url",
                        "scope" : "E",
                        "type" : "Property"
                     } ]
                  }, {
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "http://hl7.org/fhir/us/core/StructureDefinition/us-core-birthsex",
                     "type" : "Literal"
                  } ]
               }
            }
         }, {
            "name" : "BirthSexPresent",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "type" : "Exists",
               "operand" : {
                  "name" : "BirthSex",
                  "type" : "ExpressionRef"
               }
            }
         }, {
            "name" : "FemaleBirthSex",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "type" : "Exists",
               "operand" : {
                  "type" : "Query",
                  "source" : [ {
                     "alias" : "E",
                     "expression" : {
                        "name" : "BirthSex",
                        "type" : "ExpressionRef"
                     }
                  } ],
                  "relationship" : [ ],
                  "where" : {
                     "type" : "Equal",
                     "operand" : [ {
                        "type" : "Case",
                        "caseItem" : [ {
                           "when" : {
                              "isType" : "{http://hl7.org/fhir}base64Binary",
                              "type" : "Is",
                              "operand" : {
                                 "path" : "value",
                                 "scope" : "E",
                                 "type" : "Property"
                              }
                           },
                           "then" : {
                              "name" : "ToString",
                              "libraryName" : "FHIRHelpers",
                              "type" : "FunctionRef",
                              "operand" : [ {
                                 "asType" : "{http://hl7.org/fhir}base64Binary",
                                 "type" : "As",
                                 "operand" : {
                                    "path" : "value",
                                    "scope" : "E",
                                    "type" : "Property"
                                 }
                              } ]
                           }
                        }, {
                           "when" : {
                              "isType" : "{http://hl7.org/fhir}uri",
                              "type" : "Is",
                              "operand" : {
                                 "path" : "value",
                                 "scope" : "E",
                                 "type" : "Property"
                              }
                           },
                           "then" : {
                              "name" : "ToString",
                              "libraryName" : "FHIRHelpers",
                              "type" : "FunctionRef",
                              "operand" : [ {
                                 "asType" : "{http://hl7.org/fhir}uri",
                                 "type" : "As",
                                 "operand" : {
                                    "path" : "value",
                                    "scope" : "E",
                                    "type" : "Property"
                                 }
                              } ]
                           }
                        }, {
                           "when" : {
                              "isType" : "{http://hl7.org/fhir}string",
                              "type" : "Is",
                              "operand" : {
                                 "path" : "value",
                                 "scope" : "E",
                                 "type" : "Property"
                              }
                           },
                           "then" : {
                              "name" : "ToString",
                              "libraryName" : "FHIRHelpers",
                              "type" : "FunctionRef",
                              "operand" : [ {
                                 "asType" : "{http://hl7.org/fhir}string",
                                 "type" : "As",
                                 "operand" : {
                                    "path" : "value",
                                    "scope" : "E",
                                    "type" : "Property"
                                 }
                              } ]
                           }
                        }, {
                           "when" : {
                              "isType" : "{http://hl7.org/fhir}string",
                              "type" : "Is",
                              "operand" : {
                                 "path" : "value",
                                 "scope" : "E",
                                 "type" : "Property"
                              }
                           },
                           "then" : {
                              "name" : "ToString",
                              "libraryName" : "FHIRHelpers",
                              "type" : "FunctionRef",
                              "operand" : [ {
                                 "asType" : "{http://hl7.org/fhir}string",
                                 "type" : "As",
                                 "operand" : {
                                    "path" : "value",
                                    "scope" : "E",
                                    "type" : "Property"
                                 }
                              } ]
                           }
                        }, {
                           "when" : {
                              "isType" : "{http://hl7.org/fhir}string",
                              "type" : "Is",
                              "operand" : {
                                 "path" : "value",
                                 "scope" : "E",
                                 "type" : "Property"
                              }
                           },
                           "then" : {
                              "name" : "ToString",
                              "libraryName" : "FHIRHelpers",
                              "type" : "FunctionRef",
                              "operand" : [ {
                                 "asType" : "{http://hl7.org/fhir}string",
                                 "type" : "As",
                                 "operand" : {
                                    "path" : "value",
                                    "scope" : "E",
                                    "type" : "Property"
                                 }
                              } ]
                           }
                        }, {
                           "when" : {
                              "isType" : "{http://hl7.org/fhir}uri",
                              "type" : "Is",
                              "operand" : {
                                 "path" : "value",
                                 "scope" : "E",
                                 "type" : "Property"
                              }
                           },
                           "then" : {
                              "name" : "ToString",
                              "libraryName" : "FHIRHelpers",
                              "type" : "FunctionRef",
                              "operand" : [ {
                                 "asType" : "{http://hl7.org/fhir}uri",
                                 "type" : "As",
                                 "operand" : {
                                    "path" : "value",
                                    "scope" : "E",
                                    "type" : "Property"
                                 }
                              } ]
                           }
                        }, {
                           "when" : {
                              "isType" : "{http://hl7.org/fhir}string",
                              "type" : "Is",
                              "operand" : {
                                 "path" : "value",
                                 "scope" : "E",
                                 "type" : "Property"
                              }
                           },
                           "then" : {
                              "name" : "ToString",
                              "libraryName" : "FHIRHelpers",
                              "type" : "FunctionRef",
                              "operand" : [ {
                                 "asType" : "{http://hl7.org/fhir}string",
                                 "type" : "As",
                                 "operand" : {
                                    "path" : "value",
                                    "scope" : "E",
                                    "type" : "Property"
                                 }
                              } ]
                           }
                        }, {
                           "when" : {
                              "isType" : "{http://hl7.org/fhir}uri",
                              "type" : "Is",
                              "operand" : {
                                 "path" : "value",
                                 "scope" : "E",
                                 "type" : "Property"
                              }
                           },
                           "then" : {
                              "name" : "ToString",
                              "libraryName" : "FHIRHelpers",
                              "type" : "FunctionRef",
                              "operand" : [ {
                                 "asType" : "{http://hl7.org/fhir}uri",
                                 "type" : "As",
                                 "operand" : {
                                    "path" : "value",
                                    "scope" : "E",
                                    "type" : "Property"
                                 }
                              } ]
                           }
                        }, {
                           "when" : {
                              "isType" : "{http://hl7.org/fhir}uri",
                              "type" : "Is",
                              "operand" : {
                                 "path" : "value",
                                 "scope" : "E",
                                 "type" : "Property"
                              }
                           },
                           "then" : {
                              "name" : "ToString",
                              "libraryName" : "FHIRHelpers",
                              "type" : "FunctionRef",
                              "operand" : [ {
                                 "asType" : "{http://hl7.org/fhir}uri",
                                 "type" : "As",
                                 "operand" : {
                                    "path" : "value",
                                    "scope" : "E",
                                    "type" : "Property"
                                 }
                              } ]
                           }
                        }, {
                           "when" : {
                              "isType" : "{http://hl7.org/fhir}uri",
                              "type" : "Is",
                              "operand" : {
                                 "path" : "value",
                                 "scope" : "E",
                                 "type" : "Property"
                              }
                           },
                           "then" : {
                              "name" : "ToString",
                              "libraryName" : "FHIRHelpers",
                              "type" : "FunctionRef",
                              "operand" : [ {
                                 "asType" : "{http://hl7.org/fhir}uri",
                                 "type" : "As",
                                 "operand" : {
                                    "path" : "value",
                                    "scope" : "E",
                                    "type" : "Property"
                                 }
                              } ]
                           }
                        } ],
                        "else" : {
                           "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                           "type" : "Null"
                        }
                     }, {
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "F",
                        "type" : "Literal"
                     } ]
                  }
               }
            }
         }, {
            "name" : "UnknownBirthSex",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "type" : "Exists",
               "operand" : {
                  "type" : "Query",
                  "source" : [ {
                     "alias" : "E",
                     "expression" : {
                        "name" : "BirthSex",
                        "type" : "ExpressionRef"
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
                              "type" : "Case",
                              "caseItem" : [ {
                                 "when" : {
                                    "isType" : "{http://hl7.org/fhir}base64Binary",
                                    "type" : "Is",
                                    "operand" : {
                                       "path" : "value",
                                       "scope" : "E",
                                       "type" : "Property"
                                    }
                                 },
                                 "then" : {
                                    "name" : "ToString",
                                    "libraryName" : "FHIRHelpers",
                                    "type" : "FunctionRef",
                                    "operand" : [ {
                                       "asType" : "{http://hl7.org/fhir}base64Binary",
                                       "type" : "As",
                                       "operand" : {
                                          "path" : "value",
                                          "scope" : "E",
                                          "type" : "Property"
                                       }
                                    } ]
                                 }
                              }, {
                                 "when" : {
                                    "isType" : "{http://hl7.org/fhir}uri",
                                    "type" : "Is",
                                    "operand" : {
                                       "path" : "value",
                                       "scope" : "E",
                                       "type" : "Property"
                                    }
                                 },
                                 "then" : {
                                    "name" : "ToString",
                                    "libraryName" : "FHIRHelpers",
                                    "type" : "FunctionRef",
                                    "operand" : [ {
                                       "asType" : "{http://hl7.org/fhir}uri",
                                       "type" : "As",
                                       "operand" : {
                                          "path" : "value",
                                          "scope" : "E",
                                          "type" : "Property"
                                       }
                                    } ]
                                 }
                              }, {
                                 "when" : {
                                    "isType" : "{http://hl7.org/fhir}string",
                                    "type" : "Is",
                                    "operand" : {
                                       "path" : "value",
                                       "scope" : "E",
                                       "type" : "Property"
                                    }
                                 },
                                 "then" : {
                                    "name" : "ToString",
                                    "libraryName" : "FHIRHelpers",
                                    "type" : "FunctionRef",
                                    "operand" : [ {
                                       "asType" : "{http://hl7.org/fhir}string",
                                       "type" : "As",
                                       "operand" : {
                                          "path" : "value",
                                          "scope" : "E",
                                          "type" : "Property"
                                       }
                                    } ]
                                 }
                              }, {
                                 "when" : {
                                    "isType" : "{http://hl7.org/fhir}string",
                                    "type" : "Is",
                                    "operand" : {
                                       "path" : "value",
                                       "scope" : "E",
                                       "type" : "Property"
                                    }
                                 },
                                 "then" : {
                                    "name" : "ToString",
                                    "libraryName" : "FHIRHelpers",
                                    "type" : "FunctionRef",
                                    "operand" : [ {
                                       "asType" : "{http://hl7.org/fhir}string",
                                       "type" : "As",
                                       "operand" : {
                                          "path" : "value",
                                          "scope" : "E",
                                          "type" : "Property"
                                       }
                                    } ]
                                 }
                              }, {
                                 "when" : {
                                    "isType" : "{http://hl7.org/fhir}string",
                                    "type" : "Is",
                                    "operand" : {
                                       "path" : "value",
                                       "scope" : "E",
                                       "type" : "Property"
                                    }
                                 },
                                 "then" : {
                                    "name" : "ToString",
                                    "libraryName" : "FHIRHelpers",
                                    "type" : "FunctionRef",
                                    "operand" : [ {
                                       "asType" : "{http://hl7.org/fhir}string",
                                       "type" : "As",
                                       "operand" : {
                                          "path" : "value",
                                          "scope" : "E",
                                          "type" : "Property"
                                       }
                                    } ]
                                 }
                              }, {
                                 "when" : {
                                    "isType" : "{http://hl7.org/fhir}uri",
                                    "type" : "Is",
                                    "operand" : {
                                       "path" : "value",
                                       "scope" : "E",
                                       "type" : "Property"
                                    }
                                 },
                                 "then" : {
                                    "name" : "ToString",
                                    "libraryName" : "FHIRHelpers",
                                    "type" : "FunctionRef",
                                    "operand" : [ {
                                       "asType" : "{http://hl7.org/fhir}uri",
                                       "type" : "As",
                                       "operand" : {
                                          "path" : "value",
                                          "scope" : "E",
                                          "type" : "Property"
                                       }
                                    } ]
                                 }
                              }, {
                                 "when" : {
                                    "isType" : "{http://hl7.org/fhir}string",
                                    "type" : "Is",
                                    "operand" : {
                                       "path" : "value",
                                       "scope" : "E",
                                       "type" : "Property"
                                    }
                                 },
                                 "then" : {
                                    "name" : "ToString",
                                    "libraryName" : "FHIRHelpers",
                                    "type" : "FunctionRef",
                                    "operand" : [ {
                                       "asType" : "{http://hl7.org/fhir}string",
                                       "type" : "As",
                                       "operand" : {
                                          "path" : "value",
                                          "scope" : "E",
                                          "type" : "Property"
                                       }
                                    } ]
                                 }
                              }, {
                                 "when" : {
                                    "isType" : "{http://hl7.org/fhir}uri",
                                    "type" : "Is",
                                    "operand" : {
                                       "path" : "value",
                                       "scope" : "E",
                                       "type" : "Property"
                                    }
                                 },
                                 "then" : {
                                    "name" : "ToString",
                                    "libraryName" : "FHIRHelpers",
                                    "type" : "FunctionRef",
                                    "operand" : [ {
                                       "asType" : "{http://hl7.org/fhir}uri",
                                       "type" : "As",
                                       "operand" : {
                                          "path" : "value",
                                          "scope" : "E",
                                          "type" : "Property"
                                       }
                                    } ]
                                 }
                              }, {
                                 "when" : {
                                    "isType" : "{http://hl7.org/fhir}uri",
                                    "type" : "Is",
                                    "operand" : {
                                       "path" : "value",
                                       "scope" : "E",
                                       "type" : "Property"
                                    }
                                 },
                                 "then" : {
                                    "name" : "ToString",
                                    "libraryName" : "FHIRHelpers",
                                    "type" : "FunctionRef",
                                    "operand" : [ {
                                       "asType" : "{http://hl7.org/fhir}uri",
                                       "type" : "As",
                                       "operand" : {
                                          "path" : "value",
                                          "scope" : "E",
                                          "type" : "Property"
                                       }
                                    } ]
                                 }
                              }, {
                                 "when" : {
                                    "isType" : "{http://hl7.org/fhir}uri",
                                    "type" : "Is",
                                    "operand" : {
                                       "path" : "value",
                                       "scope" : "E",
                                       "type" : "Property"
                                    }
                                 },
                                 "then" : {
                                    "name" : "ToString",
                                    "libraryName" : "FHIRHelpers",
                                    "type" : "FunctionRef",
                                    "operand" : [ {
                                       "asType" : "{http://hl7.org/fhir}uri",
                                       "type" : "As",
                                       "operand" : {
                                          "path" : "value",
                                          "scope" : "E",
                                          "type" : "Property"
                                       }
                                    } ]
                                 }
                              } ],
                              "else" : {
                                 "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                                 "type" : "Null"
                              }
                           }, {
                              "valueType" : "{urn:hl7-org:elm-types:r1}String",
                              "value" : "ASKU",
                              "type" : "Literal"
                           } ]
                        }, {
                           "type" : "Equal",
                           "operand" : [ {
                              "type" : "Case",
                              "caseItem" : [ {
                                 "when" : {
                                    "isType" : "{http://hl7.org/fhir}base64Binary",
                                    "type" : "Is",
                                    "operand" : {
                                       "path" : "value",
                                       "scope" : "E",
                                       "type" : "Property"
                                    }
                                 },
                                 "then" : {
                                    "name" : "ToString",
                                    "libraryName" : "FHIRHelpers",
                                    "type" : "FunctionRef",
                                    "operand" : [ {
                                       "asType" : "{http://hl7.org/fhir}base64Binary",
                                       "type" : "As",
                                       "operand" : {
                                          "path" : "value",
                                          "scope" : "E",
                                          "type" : "Property"
                                       }
                                    } ]
                                 }
                              }, {
                                 "when" : {
                                    "isType" : "{http://hl7.org/fhir}uri",
                                    "type" : "Is",
                                    "operand" : {
                                       "path" : "value",
                                       "scope" : "E",
                                       "type" : "Property"
                                    }
                                 },
                                 "then" : {
                                    "name" : "ToString",
                                    "libraryName" : "FHIRHelpers",
                                    "type" : "FunctionRef",
                                    "operand" : [ {
                                       "asType" : "{http://hl7.org/fhir}uri",
                                       "type" : "As",
                                       "operand" : {
                                          "path" : "value",
                                          "scope" : "E",
                                          "type" : "Property"
                                       }
                                    } ]
                                 }
                              }, {
                                 "when" : {
                                    "isType" : "{http://hl7.org/fhir}string",
                                    "type" : "Is",
                                    "operand" : {
                                       "path" : "value",
                                       "scope" : "E",
                                       "type" : "Property"
                                    }
                                 },
                                 "then" : {
                                    "name" : "ToString",
                                    "libraryName" : "FHIRHelpers",
                                    "type" : "FunctionRef",
                                    "operand" : [ {
                                       "asType" : "{http://hl7.org/fhir}string",
                                       "type" : "As",
                                       "operand" : {
                                          "path" : "value",
                                          "scope" : "E",
                                          "type" : "Property"
                                       }
                                    } ]
                                 }
                              }, {
                                 "when" : {
                                    "isType" : "{http://hl7.org/fhir}string",
                                    "type" : "Is",
                                    "operand" : {
                                       "path" : "value",
                                       "scope" : "E",
                                       "type" : "Property"
                                    }
                                 },
                                 "then" : {
                                    "name" : "ToString",
                                    "libraryName" : "FHIRHelpers",
                                    "type" : "FunctionRef",
                                    "operand" : [ {
                                       "asType" : "{http://hl7.org/fhir}string",
                                       "type" : "As",
                                       "operand" : {
                                          "path" : "value",
                                          "scope" : "E",
                                          "type" : "Property"
                                       }
                                    } ]
                                 }
                              }, {
                                 "when" : {
                                    "isType" : "{http://hl7.org/fhir}string",
                                    "type" : "Is",
                                    "operand" : {
                                       "path" : "value",
                                       "scope" : "E",
                                       "type" : "Property"
                                    }
                                 },
                                 "then" : {
                                    "name" : "ToString",
                                    "libraryName" : "FHIRHelpers",
                                    "type" : "FunctionRef",
                                    "operand" : [ {
                                       "asType" : "{http://hl7.org/fhir}string",
                                       "type" : "As",
                                       "operand" : {
                                          "path" : "value",
                                          "scope" : "E",
                                          "type" : "Property"
                                       }
                                    } ]
                                 }
                              }, {
                                 "when" : {
                                    "isType" : "{http://hl7.org/fhir}uri",
                                    "type" : "Is",
                                    "operand" : {
                                       "path" : "value",
                                       "scope" : "E",
                                       "type" : "Property"
                                    }
                                 },
                                 "then" : {
                                    "name" : "ToString",
                                    "libraryName" : "FHIRHelpers",
                                    "type" : "FunctionRef",
                                    "operand" : [ {
                                       "asType" : "{http://hl7.org/fhir}uri",
                                       "type" : "As",
                                       "operand" : {
                                          "path" : "value",
                                          "scope" : "E",
                                          "type" : "Property"
                                       }
                                    } ]
                                 }
                              }, {
                                 "when" : {
                                    "isType" : "{http://hl7.org/fhir}string",
                                    "type" : "Is",
                                    "operand" : {
                                       "path" : "value",
                                       "scope" : "E",
                                       "type" : "Property"
                                    }
                                 },
                                 "then" : {
                                    "name" : "ToString",
                                    "libraryName" : "FHIRHelpers",
                                    "type" : "FunctionRef",
                                    "operand" : [ {
                                       "asType" : "{http://hl7.org/fhir}string",
                                       "type" : "As",
                                       "operand" : {
                                          "path" : "value",
                                          "scope" : "E",
                                          "type" : "Property"
                                       }
                                    } ]
                                 }
                              }, {
                                 "when" : {
                                    "isType" : "{http://hl7.org/fhir}uri",
                                    "type" : "Is",
                                    "operand" : {
                                       "path" : "value",
                                       "scope" : "E",
                                       "type" : "Property"
                                    }
                                 },
                                 "then" : {
                                    "name" : "ToString",
                                    "libraryName" : "FHIRHelpers",
                                    "type" : "FunctionRef",
                                    "operand" : [ {
                                       "asType" : "{http://hl7.org/fhir}uri",
                                       "type" : "As",
                                       "operand" : {
                                          "path" : "value",
                                          "scope" : "E",
                                          "type" : "Property"
                                       }
                                    } ]
                                 }
                              }, {
                                 "when" : {
                                    "isType" : "{http://hl7.org/fhir}uri",
                                    "type" : "Is",
                                    "operand" : {
                                       "path" : "value",
                                       "scope" : "E",
                                       "type" : "Property"
                                    }
                                 },
                                 "then" : {
                                    "name" : "ToString",
                                    "libraryName" : "FHIRHelpers",
                                    "type" : "FunctionRef",
                                    "operand" : [ {
                                       "asType" : "{http://hl7.org/fhir}uri",
                                       "type" : "As",
                                       "operand" : {
                                          "path" : "value",
                                          "scope" : "E",
                                          "type" : "Property"
                                       }
                                    } ]
                                 }
                              }, {
                                 "when" : {
                                    "isType" : "{http://hl7.org/fhir}uri",
                                    "type" : "Is",
                                    "operand" : {
                                       "path" : "value",
                                       "scope" : "E",
                                       "type" : "Property"
                                    }
                                 },
                                 "then" : {
                                    "name" : "ToString",
                                    "libraryName" : "FHIRHelpers",
                                    "type" : "FunctionRef",
                                    "operand" : [ {
                                       "asType" : "{http://hl7.org/fhir}uri",
                                       "type" : "As",
                                       "operand" : {
                                          "path" : "value",
                                          "scope" : "E",
                                          "type" : "Property"
                                       }
                                    } ]
                                 }
                              } ],
                              "else" : {
                                 "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                                 "type" : "Null"
                              }
                           }, {
                              "valueType" : "{urn:hl7-org:elm-types:r1}String",
                              "value" : "OTH",
                              "type" : "Literal"
                           } ]
                        } ]
                     }, {
                        "type" : "Equal",
                        "operand" : [ {
                           "type" : "Case",
                           "caseItem" : [ {
                              "when" : {
                                 "isType" : "{http://hl7.org/fhir}base64Binary",
                                 "type" : "Is",
                                 "operand" : {
                                    "path" : "value",
                                    "scope" : "E",
                                    "type" : "Property"
                                 }
                              },
                              "then" : {
                                 "name" : "ToString",
                                 "libraryName" : "FHIRHelpers",
                                 "type" : "FunctionRef",
                                 "operand" : [ {
                                    "asType" : "{http://hl7.org/fhir}base64Binary",
                                    "type" : "As",
                                    "operand" : {
                                       "path" : "value",
                                       "scope" : "E",
                                       "type" : "Property"
                                    }
                                 } ]
                              }
                           }, {
                              "when" : {
                                 "isType" : "{http://hl7.org/fhir}uri",
                                 "type" : "Is",
                                 "operand" : {
                                    "path" : "value",
                                    "scope" : "E",
                                    "type" : "Property"
                                 }
                              },
                              "then" : {
                                 "name" : "ToString",
                                 "libraryName" : "FHIRHelpers",
                                 "type" : "FunctionRef",
                                 "operand" : [ {
                                    "asType" : "{http://hl7.org/fhir}uri",
                                    "type" : "As",
                                    "operand" : {
                                       "path" : "value",
                                       "scope" : "E",
                                       "type" : "Property"
                                    }
                                 } ]
                              }
                           }, {
                              "when" : {
                                 "isType" : "{http://hl7.org/fhir}string",
                                 "type" : "Is",
                                 "operand" : {
                                    "path" : "value",
                                    "scope" : "E",
                                    "type" : "Property"
                                 }
                              },
                              "then" : {
                                 "name" : "ToString",
                                 "libraryName" : "FHIRHelpers",
                                 "type" : "FunctionRef",
                                 "operand" : [ {
                                    "asType" : "{http://hl7.org/fhir}string",
                                    "type" : "As",
                                    "operand" : {
                                       "path" : "value",
                                       "scope" : "E",
                                       "type" : "Property"
                                    }
                                 } ]
                              }
                           }, {
                              "when" : {
                                 "isType" : "{http://hl7.org/fhir}string",
                                 "type" : "Is",
                                 "operand" : {
                                    "path" : "value",
                                    "scope" : "E",
                                    "type" : "Property"
                                 }
                              },
                              "then" : {
                                 "name" : "ToString",
                                 "libraryName" : "FHIRHelpers",
                                 "type" : "FunctionRef",
                                 "operand" : [ {
                                    "asType" : "{http://hl7.org/fhir}string",
                                    "type" : "As",
                                    "operand" : {
                                       "path" : "value",
                                       "scope" : "E",
                                       "type" : "Property"
                                    }
                                 } ]
                              }
                           }, {
                              "when" : {
                                 "isType" : "{http://hl7.org/fhir}string",
                                 "type" : "Is",
                                 "operand" : {
                                    "path" : "value",
                                    "scope" : "E",
                                    "type" : "Property"
                                 }
                              },
                              "then" : {
                                 "name" : "ToString",
                                 "libraryName" : "FHIRHelpers",
                                 "type" : "FunctionRef",
                                 "operand" : [ {
                                    "asType" : "{http://hl7.org/fhir}string",
                                    "type" : "As",
                                    "operand" : {
                                       "path" : "value",
                                       "scope" : "E",
                                       "type" : "Property"
                                    }
                                 } ]
                              }
                           }, {
                              "when" : {
                                 "isType" : "{http://hl7.org/fhir}uri",
                                 "type" : "Is",
                                 "operand" : {
                                    "path" : "value",
                                    "scope" : "E",
                                    "type" : "Property"
                                 }
                              },
                              "then" : {
                                 "name" : "ToString",
                                 "libraryName" : "FHIRHelpers",
                                 "type" : "FunctionRef",
                                 "operand" : [ {
                                    "asType" : "{http://hl7.org/fhir}uri",
                                    "type" : "As",
                                    "operand" : {
                                       "path" : "value",
                                       "scope" : "E",
                                       "type" : "Property"
                                    }
                                 } ]
                              }
                           }, {
                              "when" : {
                                 "isType" : "{http://hl7.org/fhir}string",
                                 "type" : "Is",
                                 "operand" : {
                                    "path" : "value",
                                    "scope" : "E",
                                    "type" : "Property"
                                 }
                              },
                              "then" : {
                                 "name" : "ToString",
                                 "libraryName" : "FHIRHelpers",
                                 "type" : "FunctionRef",
                                 "operand" : [ {
                                    "asType" : "{http://hl7.org/fhir}string",
                                    "type" : "As",
                                    "operand" : {
                                       "path" : "value",
                                       "scope" : "E",
                                       "type" : "Property"
                                    }
                                 } ]
                              }
                           }, {
                              "when" : {
                                 "isType" : "{http://hl7.org/fhir}uri",
                                 "type" : "Is",
                                 "operand" : {
                                    "path" : "value",
                                    "scope" : "E",
                                    "type" : "Property"
                                 }
                              },
                              "then" : {
                                 "name" : "ToString",
                                 "libraryName" : "FHIRHelpers",
                                 "type" : "FunctionRef",
                                 "operand" : [ {
                                    "asType" : "{http://hl7.org/fhir}uri",
                                    "type" : "As",
                                    "operand" : {
                                       "path" : "value",
                                       "scope" : "E",
                                       "type" : "Property"
                                    }
                                 } ]
                              }
                           }, {
                              "when" : {
                                 "isType" : "{http://hl7.org/fhir}uri",
                                 "type" : "Is",
                                 "operand" : {
                                    "path" : "value",
                                    "scope" : "E",
                                    "type" : "Property"
                                 }
                              },
                              "then" : {
                                 "name" : "ToString",
                                 "libraryName" : "FHIRHelpers",
                                 "type" : "FunctionRef",
                                 "operand" : [ {
                                    "asType" : "{http://hl7.org/fhir}uri",
                                    "type" : "As",
                                    "operand" : {
                                       "path" : "value",
                                       "scope" : "E",
                                       "type" : "Property"
                                    }
                                 } ]
                              }
                           }, {
                              "when" : {
                                 "isType" : "{http://hl7.org/fhir}uri",
                                 "type" : "Is",
                                 "operand" : {
                                    "path" : "value",
                                    "scope" : "E",
                                    "type" : "Property"
                                 }
                              },
                              "then" : {
                                 "name" : "ToString",
                                 "libraryName" : "FHIRHelpers",
                                 "type" : "FunctionRef",
                                 "operand" : [ {
                                    "asType" : "{http://hl7.org/fhir}uri",
                                    "type" : "As",
                                    "operand" : {
                                       "path" : "value",
                                       "scope" : "E",
                                       "type" : "Property"
                                    }
                                 } ]
                              }
                           } ],
                           "else" : {
                              "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                              "type" : "Null"
                           }
                        }, {
                           "valueType" : "{urn:hl7-org:elm-types:r1}String",
                           "value" : "UNK",
                           "type" : "Literal"
                        } ]
                     } ]
                  }
               }
            }
         }, {
            "name" : "BirthSexMissingOrUnknown",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "type" : "Or",
               "operand" : [ {
                  "type" : "Not",
                  "operand" : {
                     "name" : "BirthSexPresent",
                     "type" : "ExpressionRef"
                  }
               }, {
                  "name" : "UnknownBirthSex",
                  "type" : "ExpressionRef"
               } ]
            }
         }, {
            "name" : "FemaleGender",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "type" : "Equal",
               "operand" : [ {
                  "path" : "value",
                  "type" : "Property",
                  "source" : {
                     "path" : "gender",
                     "type" : "Property",
                     "source" : {
                        "name" : "Patient",
                        "type" : "ExpressionRef"
                     }
                  }
               }, {
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "female",
                  "type" : "Literal"
               } ]
            }
         }, {
            "name" : "Female",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "type" : "Or",
               "operand" : [ {
                  "name" : "FemaleBirthSex",
                  "type" : "ExpressionRef"
               }, {
                  "type" : "And",
                  "operand" : [ {
                     "name" : "BirthSexMissingOrUnknown",
                     "type" : "ExpressionRef"
                  }, {
                     "name" : "FemaleGender",
                     "type" : "ExpressionRef"
                  } ]
               } ]
            }
         }, {
            "name" : "GenderIdentity",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "type" : "Query",
               "source" : [ {
                  "alias" : "E",
                  "expression" : {
                     "path" : "extension",
                     "type" : "Property",
                     "source" : {
                        "name" : "Patient",
                        "type" : "ExpressionRef"
                     }
                  }
               } ],
               "relationship" : [ ],
               "where" : {
                  "type" : "Or",
                  "operand" : [ {
                     "type" : "Equal",
                     "operand" : [ {
                        "name" : "ToString",
                        "libraryName" : "FHIRHelpers",
                        "type" : "FunctionRef",
                        "operand" : [ {
                           "path" : "url",
                           "scope" : "E",
                           "type" : "Property"
                        } ]
                     }, {
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "http://hl7.org/fhir/StructureDefinition/patient-genderIdentity",
                        "type" : "Literal"
                     } ]
                  }, {
                     "type" : "Equal",
                     "operand" : [ {
                        "name" : "ToString",
                        "libraryName" : "FHIRHelpers",
                        "type" : "FunctionRef",
                        "operand" : [ {
                           "path" : "url",
                           "scope" : "E",
                           "type" : "Property"
                        } ]
                     }, {
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "http://hl7.org/fhir/us/core/StructureDefinition/us-core-genderIdentity",
                        "type" : "Literal"
                     } ]
                  } ]
               }
            }
         }, {
            "name" : "TransgenderMale",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "type" : "Exists",
               "operand" : {
                  "type" : "Query",
                  "source" : [ {
                     "alias" : "E",
                     "expression" : {
                        "name" : "GenderIdentity",
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
                           "strict" : false,
                           "type" : "As",
                           "operand" : {
                              "path" : "value",
                              "scope" : "E",
                              "type" : "Property"
                           },
                           "asTypeSpecifier" : {
                              "name" : "{http://hl7.org/fhir}CodeableConcept",
                              "type" : "NamedTypeSpecifier"
                           }
                        } ]
                     }, {
                        "type" : "ToConcept",
                        "operand" : {
                           "name" : "Transgender Male Code",
                           "type" : "CodeRef"
                        }
                     } ]
                  }
               }
            }
         }, {
            "name" : "FemaleorTransgenderMale",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "type" : "Or",
               "operand" : [ {
                  "name" : "Female",
                  "type" : "ExpressionRef"
               }, {
                  "name" : "TransgenderMale",
                  "type" : "ExpressionRef"
               } ]
            }
         }, {
            "name" : "IsIncluded",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "name" : "FemaleorTransgenderMale",
               "type" : "ExpressionRef"
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
            "name" : "ServiceRequestCode",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "type" : "Null"
            }
         }, {
            "name" : "ServiceRequestOrderDetail",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "type" : "Null"
            }
         }, {
            "name" : "NoErrorsHaveOccurred",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "valueType" : "{urn:hl7-org:elm-types:r1}Boolean",
               "value" : "true",
               "type" : "Literal"
            }
         }, {
            "name" : "ErrorsHaveOccurred",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "valueType" : "{urn:hl7-org:elm-types:r1}Boolean",
               "value" : "false",
               "type" : "Literal"
            }
         }, {
            "name" : "Errors To Communicate",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "type" : "Null"
            }
         } ]
      }
   }
}

