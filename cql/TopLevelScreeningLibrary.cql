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

// ## Value sets

// ## Individual codes
code "Transgender Male Code": 'transgender-male' from "GENDER-IDENTITY" display 'transgender male'

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

define GenderIdentity:
  Patient.extension E
    where E.url = 'http://hl7.org/fhir/StructureDefinition/patient-genderIdentity'

define TransgenderMale:
  exists(
    GenderIdentity E
      where E.value as FHIR.CodeableConcept ~ "Transgender Male Code"
  )

define FemaleorTransgenderMale:
  Female or TransgenderMale

define IsIncluded:
  FemaleorTransgenderMale

// No exclusions at the top level
define Excluded:
  false

define IsIncludedAndNotExcluded:
  IsIncluded and not Excluded

// TODO: ServiceRequest code element
define "ServiceRequest Code":
  null

// TODO: ServiceRequest orderDetail element
define "ServiceRequest Order Detail":
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