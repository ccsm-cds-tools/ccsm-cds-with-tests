export const OrderSetLibrary = {
   "library" : {
      "annotation" : [ {
         "translatorOptions" : "",
         "type" : "CqlToElmInfo"
      } ],
      "identifier" : {
         "id" : "OrderSetLibrary",
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
         } ]
      },
      "codeSystems" : {
         "def" : [ {
            "name" : "LOCAL",
            "id" : "http://OUR-PLACEHOLDER-URL.com",
            "accessLevel" : "Public"
         } ]
      },
      "codes" : {
         "def" : [ {
            "name" : "Primary HPV",
            "id" : "hpv",
            "display" : "Primary HPV",
            "accessLevel" : "Public",
            "codeSystem" : {
               "name" : "LOCAL"
            }
         }, {
            "name" : "Cytology",
            "id" : "cytology",
            "display" : "Cytology",
            "accessLevel" : "Public",
            "codeSystem" : {
               "name" : "LOCAL"
            }
         }, {
            "name" : "Cotest",
            "id" : "cotest",
            "display" : "Cotest",
            "accessLevel" : "Public",
            "codeSystem" : {
               "name" : "LOCAL"
            }
         }, {
            "name" : "Colposcopy",
            "id" : "colposcopy",
            "display" : "Colposcopy",
            "accessLevel" : "Public",
            "codeSystem" : {
               "name" : "LOCAL"
            }
         }, {
            "name" : "Surveillance",
            "id" : "surveillance",
            "display" : "Surveillance",
            "accessLevel" : "Public",
            "codeSystem" : {
               "name" : "LOCAL"
            }
         }, {
            "name" : "Treatment",
            "id" : "treatment",
            "display" : "Treatment",
            "accessLevel" : "Public",
            "codeSystem" : {
               "name" : "LOCAL"
            }
         } ]
      },
      "statements" : {
         "def" : [ {
            "name" : "ToCodeableConcept",
            "context" : "Patient",
            "accessLevel" : "Public",
            "type" : "FunctionDef",
            "expression" : {
               "type" : "Tuple",
               "element" : [ {
                  "name" : "coding",
                  "value" : {
                     "type" : "List",
                     "element" : [ {
                        "type" : "Tuple",
                        "element" : [ {
                           "name" : "system",
                           "value" : {
                              "path" : "system",
                              "type" : "Property",
                              "source" : {
                                 "name" : "code",
                                 "type" : "OperandRef"
                              }
                           }
                        }, {
                           "name" : "code",
                           "value" : {
                              "path" : "code",
                              "type" : "Property",
                              "source" : {
                                 "name" : "code",
                                 "type" : "OperandRef"
                              }
                           }
                        }, {
                           "name" : "display",
                           "value" : {
                              "path" : "display",
                              "type" : "Property",
                              "source" : {
                                 "name" : "code",
                                 "type" : "OperandRef"
                              }
                           }
                        } ]
                     } ]
                  }
               }, {
                  "name" : "display",
                  "value" : {
                     "path" : "display",
                     "type" : "Property",
                     "source" : {
                        "name" : "code",
                        "type" : "OperandRef"
                     }
                  }
               } ]
            },
            "operand" : [ {
               "name" : "code",
               "operandTypeSpecifier" : {
                  "name" : "{urn:hl7-org:elm-types:r1}Code",
                  "type" : "NamedTypeSpecifier"
               }
            } ]
         }, {
            "name" : "PrimaryHpvCodeableConcept",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "name" : "ToCodeableConcept",
               "type" : "FunctionRef",
               "operand" : [ {
                  "name" : "Primary HPV",
                  "type" : "CodeRef"
               } ]
            }
         }, {
            "name" : "CytologyCodeableConcept",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "name" : "ToCodeableConcept",
               "type" : "FunctionRef",
               "operand" : [ {
                  "name" : "Cytology",
                  "type" : "CodeRef"
               } ]
            }
         }, {
            "name" : "CotestCodeableConcept",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "name" : "ToCodeableConcept",
               "type" : "FunctionRef",
               "operand" : [ {
                  "name" : "Cotest",
                  "type" : "CodeRef"
               } ]
            }
         }, {
            "name" : "ColposcopyCodeableConcept",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "name" : "ToCodeableConcept",
               "type" : "FunctionRef",
               "operand" : [ {
                  "name" : "Colposcopy",
                  "type" : "CodeRef"
               } ]
            }
         }, {
            "name" : "SurveillanceCodeableConcept",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "name" : "ToCodeableConcept",
               "type" : "FunctionRef",
               "operand" : [ {
                  "name" : "Surveillance",
                  "type" : "CodeRef"
               } ]
            }
         }, {
            "name" : "TreatmentCodeableConcept",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "name" : "ToCodeableConcept",
               "type" : "FunctionRef",
               "operand" : [ {
                  "name" : "Treatment",
                  "type" : "CodeRef"
               } ]
            }
         } ]
      }
   }
}

