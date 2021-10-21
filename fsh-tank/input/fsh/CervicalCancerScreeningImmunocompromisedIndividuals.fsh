Instance:   CervicalCancerScreeningImmunocompromisedIndividuals
InstanceOf: http://hl7.org/fhir/uv/cpg/StructureDefinition/cpg-computableplandefinition
Title: "USPSTF Recommendations for Cervical Cancer Screening of Immunocompromised Individuals"
Usage: #definition
* insert CPGKnowledgeExtensions
* insert CommonMetadata
* meta.profile[+] = "http://hl7.org/fhir/uv/cpg/StructureDefinition/cpg-computableplandefinition"
// * cpg-partOf = Canonical(TopLevelPlanDefinition) // TODO: Tie this into the entire pathway
* url = "http://OUR-PLACEHOLDER-URL.com/PlanDefinition/CervicalCancerScreeningImmunocompromisedIndividuals"
* name = "CervicalCancerScreeningImmunocompromisedIndividuals"
* title = "USPSTF Recommendations for Cervical Cancer Screening of Individuals with Average Risk"
* type = $PDTYPE#eca-rule "ECA Rule"
* description = "Natural language description of the plan definition"
* useContext[+].code = $UCTYPE#gender "Gender"
* useContext[=].valueCodeableConcept.coding = $V3AG#F "Female"
* useContext[+].code = http://terminology.hl7.org/CodeSystem/usage-context-type#age "Age Range"
* useContext[=].valueRange.low = 21 'a' "year"
* purpose = "This CDS identifies individuals for whom cervical cancer screening is indicated. It delivers patient-specific evidence-based screening recommendations based on information in the patient’s health record. It also gathers relevant information in the patient record to display to the clinician as a dashboard in support of care decisions. The dashboard includes information such as evidence of previous pre-cancer or cancerous lesions, previous colposcopies and biopsy results, previous surgeries, etc. The CDS integrates tightly with a companion CDS component (i.e., “Management CDS”), which provides evidence-based care recommendations if screening results are “abnormal”."
* usage = "This artifact is intended for use by healthcare personnel working in primary healthcare settings who care for adolescent and adult patients (i.e., physicians, general practitioners, nurse practitioners, physician assistants, and obstetricians)."
* topic[+].text = "Preventive Medicine"
* topic[+].text = "Public Health"
* topic[+].text = "Cervical Cancer"
* topic[+].text = "Cancer Screening"
* relatedArtifact[+].type = $RATYPE#citation "Citation"
* relatedArtifact[=].label = "Immunocompromised"
* relatedArtifact[=].display = "Guidelines for Prevention and Treatment of Opportunistic Infections in Adults and Adolescents with HIV (2020)"
* relatedArtifact[+].type = $RATYPE#citation "Citation"
* relatedArtifact[=].label = "Immunocompromised"
* relatedArtifact[=].display = "Moscicki, A.B., et al. Guidelines for Cervical Cancer Screening Immunosuppressed Women without HIV Infection (2019)"
* library = Canonical(ScreeningImmunocompromisedLibrary|1.0.0)
// -----------------------------------------------------------------------------
// Top-level action just includes inclusion and exclusion criteria
// -----------------------------------------------------------------------------
* action[+].title = "Cervical Cancer Screening Actions"
* action[=].description = "Brief description of the action"
* action[=].textEquivalent = "Static text equivalent of the action, used if the dynamic aspects cannot be interpreted by the receiving system"
* action[=].documentation[+].type = $RATYPE#citation "Citation"
* action[=].documentation[=].label = "Immunocompromised"
* action[=].documentation[=].display = "Guidelines for Prevention and Treatment of Opportunistic Infections in Adults and Adolescents with HIV (2020)"
* action[=].documentation[+].type = $RATYPE#citation "Citation"
* action[=].documentation[=].label = "Immunocompromised"
* action[=].documentation[=].display = "Moscicki, A.B., et al. Guidelines for Cervical Cancer Screening Immunosuppressed Women without HIV Infection (2019)"
* action[=].trigger[+].type = $TTYPE#named-event "Named Event"
* action[=].trigger[=].name = "encounter-start" // CDS Hook name
* action[=].condition[+].kind = $ACKIND#applicability "Applicability"
* action[=].condition[=].expression.language = $EXLANG|4.0.1#text/cql "CQL"
* action[=].condition[=].expression.expression = "IsIncludedAndNotExcluded"
* action[=].condition[=].expression.reference = "Library/ScreeningImmunocompromisedLibrary|1.0"
// -----------------------------------------------------------------------------
// Action #1: Display pertinent medical and screening history
// -----------------------------------------------------------------------------
* action[=].action[+].title = "Display pertinent medical history"
* action[=].action[=].description = "DISPLAY data elements used in the Cervical Cancer Screening and Management Dashboard"
* action[=].action[=].textEquivalent = "Static text equivalent of the action, used if the dynamic aspects cannot be interpreted by the receiving system"
* action[=].action[=].definitionCanonical = Canonical(DisplayCervicalCancerMedicalHistory|1.0.0)
// -----------------------------------------------------------------------------
// Action #2: Screening recommendation text
// -----------------------------------------------------------------------------
* action[=].action[+].title = "Screening recommendations"
* action[=].action[=].description = "Make screening recommendations for immunocompromised individuals"
* action[=].action[=].textEquivalent = "Static text equivalent of the action, used if the dynamic aspects cannot be interpreted by the receiving system"
* action[=].action[=].condition[+].kind = $ACKIND#applicability "Applicability"
* action[=].action[=].condition[=].expression.language = $EXLANG|4.0.1#text/cql "CQL"
* action[=].action[=].condition[=].expression.expression = "NoErrorsHaveOccurred"
* action[=].action[=].condition[=].expression.reference = "Library/ScreeningImmunocompromisedLibrary|1.0"
* action[=].action[=].definitionCanonical = Canonical(CommunicateUnstructuredRecommendations|1.0.0)
* action[=].action[=].dynamicValue[+].path = "payload[0].contentString" // this is the CommunicationRequest.payload element
* action[=].action[=].dynamicValue[=].expression.language = $EXLANG|4.0.1#text/cql "CQL"
* action[=].action[=].dynamicValue[=].expression.expression = "RecommendationText"
* action[=].action[=].dynamicValue[=].expression.reference = "Library/ScreeningImmunocompromisedLibrary|1.0"
// -----------------------------------------------------------------------------
// Action #3: Make screening recommendations
// -----------------------------------------------------------------------------
* action[=].action[+].title = "Screening recommendations"
* action[=].action[=].description = "Provide recommendation options for the patient's next screening"
* action[=].action[=].textEquivalent = "Static text equivalent of the action, used if the dynamic aspects cannot be interpreted by the receiving system"
* action[=].action[=].condition[+].kind = $ACKIND#applicability "Applicability"
* action[=].action[=].condition[=].expression.language = $EXLANG|4.0.1#text/cql "CQL"
* action[=].action[=].condition[=].expression.expression = "NoErrorsHaveOccurred"
* action[=].action[=].condition[=].expression.reference = "Library/ScreeningImmunocompromisedLibrary|1.0"
* action[=].action[=].groupingBehavior = http://hl7.org/fhir/action-grouping-behavior#visual-group "Visual Group" // TODO: Discuss whether action-grouping-behavior code should be "visual-group" or "logical-group"
* action[=].action[=].selectionBehavior = http://hl7.org/fhir/action-selection-behavior#at-most-one "At Most One"
// -----------------------------------------------------------------------------
// Sub-action #3.1: Cervical cytology screening
// -----------------------------------------------------------------------------
* action[=].action[=].action[+].title = "Cervical cytology"
* action[=].action[=].action[=].description = "Brief description of the action"
* action[=].action[=].action[=].textEquivalent = "Static text equivalent of the action, used if the dynamic aspects cannot be interpreted by the receiving system"
* action[=].action[=].action[=].condition[+].kind = $ACKIND#applicability "Applicability"
* action[=].action[=].action[=].condition[=].expression.language = $EXLANG|4.0.1#text/cql "CQL"
* action[=].action[=].action[=].condition[=].expression.expression = "RecommendImmediateCervicalCytology"
* action[=].action[=].action[=].condition[=].expression.reference = "Library/ScreeningImmunocompromisedLibrary|1.0"
* action[=].action[=].action[=].definitionCanonical = Canonical(CervicalCytologyScreeningRecommendation|1.0.0)
// -----------------------------------------------------------------------------
// Sub-action #3.2: Cotesting (cytology + HPV)
// -----------------------------------------------------------------------------
* action[=].action[=].action[+].title = "Cotesting (cytology + HPV)"
* action[=].action[=].action[=].description = "Brief description of the action"
* action[=].action[=].action[=].textEquivalent = "Static text equivalent of the action, used if the dynamic aspects cannot be interpreted by the receiving system"
* action[=].action[=].action[=].condition[+].kind = $ACKIND#applicability "Applicability"
* action[=].action[=].action[=].condition[=].expression.language = $EXLANG|4.0.1#text/cql "CQL"
* action[=].action[=].action[=].condition[=].expression.expression = "RecommendImmediateCotesting"
* action[=].action[=].action[=].condition[=].expression.reference = "Library/ScreeningImmunocompromisedLibrary|1.0"
* action[=].action[=].action[=].definitionCanonical = Canonical(CotestingScreeningRecommendation|1.0.0)
// -----------------------------------------------------------------------------
// Sub-action #3.3: Ask for more information
// -----------------------------------------------------------------------------
* action[=].action[=].action[+].title = "Provide more information"
* action[=].action[=].action[=].description = "Brief description of the action"
* action[=].action[=].action[=].textEquivalent = "Static text equivalent of the action, used if the dynamic aspects cannot be interpreted by the receiving system"
* action[=].action[=].action[=].definitionCanonical = Canonical(ProvideMoreInformation|1.0.0)
// -----------------------------------------------------------------------------
// Action #4: Handle Errors
// -----------------------------------------------------------------------------
* action[=].action[+].title = "Handle Errors"
* action[=].action[=].description = "Brief description of the action"
* action[=].action[=].textEquivalent = "Static text equivalent of the action, used if the dynamic aspects cannot be interpreted by the receiving system"
* action[=].action[=].condition[+].kind = $ACKIND#applicability "Applicability"
* action[=].action[=].condition[=].expression.language = $EXLANG|4.0.1#text/cql "CQL"
* action[=].action[=].condition[=].expression.expression = "ErrorsHaveOccurred"
* action[=].action[=].condition[=].expression.reference = "Library/ScreeningImmunocompromisedLibrary|1.0"
* action[=].action[=].definitionCanonical = Canonical(HandleErrors|1.0.0)