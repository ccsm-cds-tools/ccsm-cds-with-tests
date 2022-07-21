library OrderSetLibrary version '1.0.0'

using FHIR version '4.0.1'

include FHIRHelpers version '4.0.1' called FHIRHelpers

codesystem "LOCAL": 'http://OUR-PLACEHOLDER-URL.com'

code "Primary HPV": 'hpv' from "LOCAL" display 'Primary HPV'
code "Cytology": 'cytology' from "LOCAL" display 'Cytology'
code "Cotest": 'cotest' from "LOCAL" display 'Cotest'

code "Colposcopy": 'colposcopy' from "LOCAL" display 'Colposcopy'
code "Surveillance": 'surveillance' from "LOCAL" display 'Surveillance'
code "Treatment": 'treatment' from "LOCAL" display 'Treatment'


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