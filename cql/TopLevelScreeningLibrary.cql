// # Introduction
// Criteria for Entering Cervical Cancer Screening and Management CDS
// All Logic Paths require either:
  // Sex at birth = Female
  // OR Gender identity = Transgender Male
// Therefore, logic for this entry criteria is abstracted to this library
library TopLevelScreeningLibrary version '1.0.0'
using FHIR version '4.0.1'

// # Referenced libraries

// The CDS Connect Commons for FHIRv401 library provides functions representing commonly used CDS logic and patterns.
include CDSConnectCommonsforFHIRv401 version '1.0.0' called C3F
// The FHIRHelpers library provides common functions for simplifying interaction w/ the FHIR R4 data model.
include FHIRHelpers version '4.0.1' called FHIRHelpers

// # Value sets and codesystem

// ## Code Systems
codesystem "GENDER-IDENTITY": 'http://hl7.org/fhir/gender-identity'
codesystem "LOINC": 'http://loinc.org'
codesystem "SNOMED-CT": 'http://snomed.info/sct'

// ## Value sets

// ## Individual codes
code "Gender Identity": '76691-5' from "LOINC" display 'Gender identity'
code "Transgender Male Code": 'transgender-male' from "GENDER-IDENTITY" display 'transgender male'
code "Female-to-male Transsexual": '407377005' from "SNOMED-CT" display 'Female-to-male transsexual (finding)'

// # Parameters

// Defines the age at which a patient should begin regular screening. The default
// age is 21 years old, and comes from the U.S. Preventive Services Taskfore
parameter MinimumScreeningAge default 21 // Age in years

// # CDS Logic
context Patient

// # Target population

// INCLUSIONS
/* Sex at birth = Female
OR Gender identity = Transgender Male */

// Patient Gender
define FemaleGender:
  Patient.gender.value = 'female'

// Sex assigned at birth
define FemaleBirthSex:
  exists(
    Patient.extension E
      where E.url = 'http://hl7.org/fhir/us/core/StructureDefinition/us-core-birthsex'
      and E.value = 'F'
  )

define Female:
  FemaleGender or FemaleBirthSex

define GenderIdentityExtension:
  Patient.extension E
    where E.url = 'http://hl7.org/fhir/StructureDefinition/patient-genderIdentity'
    or E.url = 'http://hl7.org/fhir/us/core/StructureDefinition/us-core-genderIdentity'

define TransgenderMaleExtension:
  GenderIdentityExtension E
    where E.value as FHIR.CodeableConcept ~ "Transgender Male Code"
    or E.value as FHIR.CodeableConcept ~ "Female-to-male Transsexual"

define GenderIdentityObservation:
  [Observation: "Gender Identity"]

define TransgenderMaleObservation:
  GenderIdentityObservation O
  where O.value as FHIR.CodeableConcept ~ "Transgender Male Code"
  or O.value as FHIR.CodeableConcept ~ "Female-to-male Transsexual"

define TransgenderMale:
  exists(TransgenderMaleExtension) or exists(TransgenderMaleObservation)

define FemaleorTransgenderMale:
  Female or TransgenderMale

define IsIncluded:
  FemaleorTransgenderMale

// No exclusions at the top level
define Excluded:
  false

define IsIncludedAndNotExcluded:
  IsIncluded and not Excluded

// TODO: ServiceRequestCode element
define "ServiceRequestCode":
  null

// TODO: ServiceRequest orderDetail element
define "ServiceRequestOrderDetail":
  null

// TODO: Report errors
define NoErrorsHaveOccurred:
  true

// TODO: Report errors
define ErrorsHaveOccurred:
  false

// TODO: Report errors
define "Errors To Communicate":
  null