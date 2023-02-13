library OrderSetLibrary version '1.0.0'

using FHIR version '4.0.1'

include FHIRHelpers version '4.0.1' called FHIRHelpers

codesystem "URN": 'urn:com.epic.cdshooks.action.code.system.preference-list-item'

code "Primary HPV": '82675-0' from "URN" display '82675-0'
code "Cytology": '82675-0' from "URN" display '82675-0'
code "Cotest": '82675-0' from "URN" display '82675-0'

code "Colposcopy": '82675-0' from "URN" display '82675-0'
code "Surveillance": '82675-0' from "URN" display '82675-0'
code "Treatment": '82675-0' from "URN" display '82675-0'


define function ToCodeableConcept(code System.Code):
  Tuple {
    coding: {
      {
        system: code.system,
        code: code.code,
        display: code.display
      }
    },
    display: code.display
  }

define PrimaryHpvCodeableConcept:
  ToCodeableConcept("Primary HPV")

define CytologyCodeableConcept:
  ToCodeableConcept("Cytology")

define CotestCodeableConcept:
  ToCodeableConcept("Cotest")

define ColposcopyCodeableConcept:
  ToCodeableConcept("Colposcopy")

define SurveillanceCodeableConcept:
  ToCodeableConcept("Surveillance")

define TreatmentCodeableConcept:
  ToCodeableConcept("Treatment")