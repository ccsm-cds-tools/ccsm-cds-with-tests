export const ScreeningDesExposureLibrary = {
   "library" : {
      "annotation" : [ {
         "translatorOptions" : "",
         "type" : "CqlToElmInfo"
      } ],
      "identifier" : {
         "id" : "ScreeningDesExposureLibrary",
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
            "name" : "BirthdayThreshold",
            "accessLevel" : "Public",
            "default" : {
               "type" : "Date",
               "year" : {
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "1980",
                  "type" : "Literal"
               },
               "month" : {
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "1",
                  "type" : "Literal"
               },
               "day" : {
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "1",
                  "type" : "Literal"
               }
            }
         } ]
      },
      "codeSystems" : {
         "def" : [ {
            "name" : "SNOMED-CT",
            "id" : "http://snomed.info/sct",
            "accessLevel" : "Public"
         }, {
            "name" : "LOINC",
            "id" : "http://loinc.org",
            "accessLevel" : "Public"
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
            "name" : "BornOnOrBeforeBirthdayThreshold",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "type" : "SameOrBefore",
               "operand" : [ {
                  "name" : "ToDate",
                  "libraryName" : "FHIRHelpers",
                  "type" : "FunctionRef",
                  "operand" : [ {
                     "path" : "birthDate",
                     "type" : "Property",
                     "source" : {
                        "name" : "Patient",
                        "type" : "ExpressionRef"
                     }
                  } ]
               }, {
                  "name" : "BirthdayThreshold",
                  "type" : "ParameterRef"
               } ]
            }
         }, {
            "name" : "HasDesExposureDiagnoses",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "type" : "Exists",
               "operand" : {
                  "name" : "DesExposureDiagnoses",
                  "libraryName" : "Dash",
                  "type" : "ExpressionRef"
               }
            }
         }, {
            "name" : "HasDesExposureObservations",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "type" : "Exists",
               "operand" : {
                  "name" : "DesExposureObservations",
                  "libraryName" : "Dash",
                  "type" : "ExpressionRef"
               }
            }
         }, {
            "name" : "RecentlyRespondedYesToDesExposureQuestion",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "type" : "Exists",
               "operand" : {
                  "type" : "Query",
                  "source" : [ {
                     "alias" : "R",
                     "expression" : {
                        "name" : "ResponsesToDesExposureQuestion",
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
               }
            }
         }, {
            "name" : "WasExposedToDesInUtero",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "type" : "Or",
               "operand" : [ {
                  "type" : "Or",
                  "operand" : [ {
                     "name" : "HasDesExposureDiagnoses",
                     "type" : "ExpressionRef"
                  }, {
                     "name" : "HasDesExposureObservations",
                     "type" : "ExpressionRef"
                  } ]
               }, {
                  "name" : "RecentlyRespondedYesToDesExposureQuestion",
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
                  "type" : "And",
                  "operand" : [ {
                     "name" : "FemaleorTransgenderMale",
                     "libraryName" : "Dash",
                     "type" : "ExpressionRef"
                  }, {
                     "name" : "BornOnOrBeforeBirthdayThreshold",
                     "type" : "ExpressionRef"
                  } ]
               }, {
                  "name" : "WasExposedToDesInUtero",
                  "type" : "ExpressionRef"
               } ]
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
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "Consider individualized care for this patient due to a gap in evidence-based care recommendations for individuals with DES exposure in utero. Previous guidelines (i.e., \"Antenatal Exposure to DES: Lessons Learned...Future Concerns\" CME Review Article and the ACOG Practice Bulletin #168 \"Cervical Cancer Screening and Prevention\") recommended annual cervical cytology screening for individuals with DES exposure in utero, with tissue sampling that includes collection of endocervical and ectocervical cells, as well as cells from vaginal fornices.",
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
                  "value" : "Antenatal Exposure to DES: Lessons Learned...Future Concerns",
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
                        "value" : "Screening: DES Exposure",
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

