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


define function ToFhirCodeableConcept(c System.Code):
    FHIR.CodeableConcept {
      coding: {
        FHIR.Coding {
          system: FHIR.uri {value: c.system},
          code: FHIR.code {value: c.code},
          display: FHIR.string {value: c.display}
        }
      }
    }

define PrimaryHpvCodeableConcept:
  ToFhirCodeableConcept("Primary HPV")

define CytologyCodeableConcept:
  ToFhirCodeableConcept("Cytology")

define CotestCodeableConcept:
  ToFhirCodeableConcept("Cotest")

define ColposcopyCodeableConcept:
  ToFhirCodeableConcept("Colposcopy")

define SurveillanceCodeableConcept:
  ToFhirCodeableConcept("Surveillance")

define TreatmentCodeableConcept:
  ToFhirCodeableConcept("Treatment")