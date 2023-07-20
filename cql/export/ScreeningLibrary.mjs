export const ScreeningLibrary = {
   "library" : {
      "annotation" : [ {
         "translatorOptions" : "",
         "type" : "CqlToElmInfo"
      } ],
      "identifier" : {
         "id" : "ScreeningLibrary",
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
            "localIdentifier" : "Average",
            "path" : "ScreeningAverageRiskLibrary",
            "version" : "1.0.0"
         }, {
            "localIdentifier" : "Sympto",
            "path" : "ScreeningSymptomaticLibrary",
            "version" : "1.0.0"
         }, {
            "localIdentifier" : "DesExpo",
            "path" : "ScreeningDesExposureLibrary",
            "version" : "1.0.0"
         }, {
            "localIdentifier" : "Immuno",
            "path" : "ScreeningImmunocompromisedLibrary",
            "version" : "1.0.0"
         }, {
            "localIdentifier" : "Orders",
            "path" : "OrderSetLibrary",
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
               "name" : "BirthSex",
               "libraryName" : "Dash",
               "type" : "ExpressionRef"
            }
         }, {
            "name" : "BirthSexPresent",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "name" : "BirthSexPresent",
               "libraryName" : "Dash",
               "type" : "ExpressionRef"
            }
         }, {
            "name" : "FemaleBirthSex",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "name" : "FemaleBirthSex",
               "libraryName" : "Dash",
               "type" : "ExpressionRef"
            }
         }, {
            "name" : "UnknownBirthSex",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "name" : "UnknownBirthSex",
               "libraryName" : "Dash",
               "type" : "ExpressionRef"
            }
         }, {
            "name" : "BirthSexMissingOrUnknown",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "name" : "BirthSexMissingOrUnknown",
               "libraryName" : "Dash",
               "type" : "ExpressionRef"
            }
         }, {
            "name" : "FemaleGender",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "name" : "FemaleGender",
               "libraryName" : "Dash",
               "type" : "ExpressionRef"
            }
         }, {
            "name" : "Female",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "name" : "Female",
               "libraryName" : "Dash",
               "type" : "ExpressionRef"
            }
         }, {
            "name" : "GenderIdentityExtension",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "name" : "GenderIdentityExtension",
               "libraryName" : "Dash",
               "type" : "ExpressionRef"
            }
         }, {
            "name" : "GenderIdentityObservation",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "name" : "GenderIdentityObservation",
               "libraryName" : "Dash",
               "type" : "ExpressionRef"
            }
         }, {
            "name" : "TransgenderMaleExtension",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "name" : "TransgenderMaleExtension",
               "libraryName" : "Dash",
               "type" : "ExpressionRef"
            }
         }, {
            "name" : "TransgenderMaleObservation",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "name" : "TransgenderMaleObservation",
               "libraryName" : "Dash",
               "type" : "ExpressionRef"
            }
         }, {
            "name" : "TransgenderMale",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "name" : "TransgenderMale",
               "libraryName" : "Dash",
               "type" : "ExpressionRef"
            }
         }, {
            "name" : "FemaleorTransgenderMale",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "name" : "FemaleorTransgenderMale",
               "libraryName" : "Dash",
               "type" : "ExpressionRef"
            }
         }, {
            "name" : "IsIncluded",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "name" : "FemaleorTransgenderMale",
               "libraryName" : "Dash",
               "type" : "ExpressionRef"
            }
         }, {
            "name" : "Excluded",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "type" : "And",
               "operand" : [ {
                  "name" : "AbnormalResultInRecord",
                  "libraryName" : "Average",
                  "type" : "ExpressionRef"
               }, {
                  "type" : "Not",
                  "operand" : {
                     "name" : "IsSymptomatic",
                     "libraryName" : "Sympto",
                     "type" : "ExpressionRef"
                  }
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
            "name" : "Errors",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "type" : "Union",
               "operand" : [ {
                  "type" : "Union",
                  "operand" : [ {
                     "type" : "Union",
                     "operand" : [ {
                        "type" : "List"
                     }, {
                        "name" : "Errors",
                        "libraryName" : "Average",
                        "type" : "ExpressionRef"
                     } ]
                  }, {
                     "type" : "Union",
                     "operand" : [ {
                        "name" : "Errors",
                        "libraryName" : "Immuno",
                        "type" : "ExpressionRef"
                     }, {
                        "name" : "Errors",
                        "libraryName" : "Sympto",
                        "type" : "ExpressionRef"
                     } ]
                  } ]
               }, {
                  "type" : "Union",
                  "operand" : [ {
                     "name" : "Errors",
                     "libraryName" : "DesExpo",
                     "type" : "ExpressionRef"
                  }, {
                     "name" : "Errors",
                     "libraryName" : "Dash",
                     "type" : "ExpressionRef"
                  } ]
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
            "name" : "AverageRiskRecommendation",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "name" : "Recommendation",
               "libraryName" : "Average",
               "type" : "ExpressionRef"
            }
         }, {
            "name" : "ImmunocompromisedRecommendation",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "name" : "Recommendation",
               "libraryName" : "Immuno",
               "type" : "ExpressionRef"
            }
         }, {
            "name" : "DesExposedRecommendation",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "name" : "Recommendation",
               "libraryName" : "DesExpo",
               "type" : "ExpressionRef"
            }
         }, {
            "name" : "SymptomaticRecommendation",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "name" : "Recommendation",
               "libraryName" : "Sympto",
               "type" : "ExpressionRef"
            }
         }, {
            "name" : "ScreeningRecommendation",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "type" : "Coalesce",
               "operand" : [ {
                  "name" : "SymptomaticRecommendation",
                  "type" : "ExpressionRef"
               }, {
                  "name" : "DesExposedRecommendation",
                  "type" : "ExpressionRef"
               }, {
                  "name" : "ImmunocompromisedRecommendation",
                  "type" : "ExpressionRef"
               }, {
                  "name" : "AverageRiskRecommendation",
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
                           "name" : "ScreeningRecommendation",
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
            "name" : "RecommendPrimaryHpv",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "type" : "And",
               "operand" : [ {
                  "name" : "RecommendImmediateScreening",
                  "libraryName" : "Average",
                  "type" : "ExpressionRef"
               }, {
                  "name" : "Age30Through65",
                  "libraryName" : "Average",
                  "type" : "ExpressionRef"
               } ]
            }
         }, {
            "name" : "RecommendCytology",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "type" : "Or",
               "operand" : [ {
                  "name" : "RecommendImmediateScreening",
                  "libraryName" : "Average",
                  "type" : "ExpressionRef"
               }, {
                  "name" : "RecommendImmediateCervicalCytology",
                  "libraryName" : "Immuno",
                  "type" : "ExpressionRef"
               } ]
            }
         }, {
            "name" : "RecommendCotesting",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "type" : "Or",
               "operand" : [ {
                  "type" : "And",
                  "operand" : [ {
                     "name" : "RecommendImmediateScreening",
                     "libraryName" : "Average",
                     "type" : "ExpressionRef"
                  }, {
                     "name" : "Age30Through65",
                     "libraryName" : "Average",
                     "type" : "ExpressionRef"
                  } ]
               }, {
                  "name" : "RecommendImmediateCotesting",
                  "libraryName" : "Immuno",
                  "type" : "ExpressionRef"
               } ]
            }
         }, {
            "name" : "PrimaryHpvOrderCode",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "name" : "PrimaryHpvCodeableConcept",
               "libraryName" : "Orders",
               "type" : "ExpressionRef"
            }
         }, {
            "name" : "CytologyOrderCode",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "name" : "CytologyCodeableConcept",
               "libraryName" : "Orders",
               "type" : "ExpressionRef"
            }
         }, {
            "name" : "CotestingOrderCode",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "name" : "CotestCodeableConcept",
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
                        "name" : "ScreeningRecommendation",
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
            "name" : "SuggestedOrders",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "type" : "Except",
               "operand" : [ {
                  "type" : "List",
                  "element" : [ {
                     "type" : "If",
                     "condition" : {
                        "asType" : "{urn:hl7-org:elm-types:r1}Boolean",
                        "type" : "As",
                        "operand" : {
                           "name" : "RecommendPrimaryHpv",
                           "type" : "ExpressionRef"
                        }
                     },
                     "then" : {
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "Primary HPV",
                        "type" : "Literal"
                     },
                     "else" : {
                        "asType" : "{urn:hl7-org:elm-types:r1}String",
                        "type" : "As",
                        "operand" : {
                           "type" : "Null"
                        }
                     }
                  }, {
                     "type" : "If",
                     "condition" : {
                        "asType" : "{urn:hl7-org:elm-types:r1}Boolean",
                        "type" : "As",
                        "operand" : {
                           "name" : "RecommendCytology",
                           "type" : "ExpressionRef"
                        }
                     },
                     "then" : {
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "Cytology",
                        "type" : "Literal"
                     },
                     "else" : {
                        "asType" : "{urn:hl7-org:elm-types:r1}String",
                        "type" : "As",
                        "operand" : {
                           "type" : "Null"
                        }
                     }
                  }, {
                     "type" : "If",
                     "condition" : {
                        "asType" : "{urn:hl7-org:elm-types:r1}Boolean",
                        "type" : "As",
                        "operand" : {
                           "name" : "RecommendCotesting",
                           "type" : "ExpressionRef"
                        }
                     },
                     "then" : {
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "Cotest",
                        "type" : "Literal"
                     },
                     "else" : {
                        "asType" : "{urn:hl7-org:elm-types:r1}String",
                        "type" : "As",
                        "operand" : {
                           "type" : "Null"
                        }
                     }
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
            "name" : "OrderDate",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "type" : "ToString",
               "operand" : {
                  "path" : "date",
                  "type" : "Property",
                  "source" : {
                     "name" : "ScreeningRecommendation",
                     "type" : "ExpressionRef"
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
                        "name" : "ScreeningRecommendation",
                        "type" : "ExpressionRef"
                     }
                  }
               }, {
                  "name" : "recommendationGroup",
                  "value" : {
                     "path" : "group",
                     "type" : "Property",
                     "source" : {
                        "name" : "ScreeningRecommendation",
                        "type" : "ExpressionRef"
                     }
                  }
               }, {
                  "name" : "recommendationDetails",
                  "value" : {
                     "path" : "details",
                     "type" : "Property",
                     "source" : {
                        "name" : "ScreeningRecommendation",
                        "type" : "ExpressionRef"
                     }
                  }
               }, {
                  "name" : "recommendationDate",
                  "value" : {
                     "name" : "OrderDate",
                     "type" : "ExpressionRef"
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
                     "value" : "An evidence based recommendation is provided based on clinical data available in the patient's electronic medical record. Please validate with patient and document any additional relevant history and cervical cancer screening related procedures, and lab testing with documented written evidence.",
                     "type" : "Literal"
                  }
               }, {
                  "name" : "suggestedOrders",
                  "value" : {
                     "name" : "SuggestedOrders",
                     "type" : "ExpressionRef"
                  }
               } ]
            }
         } ]
      }
   }
}

