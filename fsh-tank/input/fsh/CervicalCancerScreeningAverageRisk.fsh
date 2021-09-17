Instance:   CervicalCancerScreeningAverageRisk
InstanceOf: http://hl7.org/fhir/uv/cpg/StructureDefinition/cpg-computableplandefinition
Title: "USPSTF Recommendations for Cervical Cancer Screening of Individuals with Average Risk"
Usage: #definition
* insert CPGKnowledgeExtensions
* insert CommonMetadata
* meta.profile[+] = "http://hl7.org/fhir/uv/cpg/StructureDefinition/cpg-computableplandefinition"
// * cpg-partOf = Canonical(TopLevelPlanDefinition) // TODO: Tie this into the entire pathway
* url = "http://OUR-PLACEHOLDER-URL.com/PlanDefinition/CervicalCancerScreeningAverageRisk"
* version = "1.0.0"
* name = "CervicalCancerScreeningAverageRisk"
* title = "USPSTF Recommendations for Cervical Cancer Screening of Individuals with Average Risk"
* type = $PDTYPE#eca-rule "ECA Rule"
* description = "Natural language description of the plan definition"
* useContext[+].code = $UCTYPE#gender "Gender"
* useContext[=].valueCodeableConcept.coding = $V3AG#F "Female"
* useContext[+].code = http://terminology.hl7.org/CodeSystem/usage-context-type#age "Age Range"
* useContext[=].valueRange.low = 21 'a' "year"
* purpose = "Evaluates the patient record for evidence that the patient is 21 years old or older, their sex at birth is Female or their gender identity is Transgender Male, and they do not have: 1) abnormal uterine/vaginal bleeding, 2) in utero exposure to DES, or 3) evidence of being immunocompromised. The logic also removes individuals who are without a cervix but does not have a history of high-grade cervical precancer or cancer (which aligns with a USPSTF Grade D recommendation)."
* usage = "This artifact is intended for use by healthcare personnel working in primary healthcare settings who care for adolescent and adult patients (i.e., physicians, general practitioners, nurse practitioners, physician assistants, and obstetricians)."
* topic[+].text = "Preventive Medicine"
* topic[+].text = "Public Health"
* topic[+].text = "Cervical Cancer"
* topic[+].text = "Cancer Screening"
* relatedArtifact[+].type = $RATYPE#citation "Citation"
* relatedArtifact[=].label = "USPSTF Recommendation"
* relatedArtifact[=].display = "U.S. Preventive Services Task Force's final recommendation statement on cervical cancer screening (August 21, 2018)"
* library = Canonical(ScreeningAverageRiskLibrary|1.0)
// -----------------------------------------------------------------------------
// Top-level action just includes inclusion and exclusion criteria
// -----------------------------------------------------------------------------
* action[+].title = "Cervical Cancer Screening Actions"
* action[=].description = "Brief description of the action"
* action[=].textEquivalent = "Static text equivalent of the action, used if the dynamic aspects cannot be interpreted by the receiving system"
* action[=].documentation[+].type = $RATYPE#citation "Citation"
* action[=].documentation[=].label = "USPSTF Recommendation"
* action[=].documentation[=].display = "U.S. Preventive Services Task Force's final recommendation statement on cervical cancer screening (August 21, 2018)"
* action[=].trigger[+].type = $TTYPE#named-event "Named Event"
* action[=].trigger[=].name = "encounter-start" // CDS Hook name
* action[=].condition[+].kind = $ACKIND#applicability "Applicability"
* action[=].condition[=].expression.language = $EXLANG|4.0.1#text/cql "CQL"
* action[=].condition[=].expression.expression = "IsIncludedAndNotExcluded"
* action[=].condition[=].expression.reference = "Library/ScreeningAverageRiskLibrary|1.0"
// -----------------------------------------------------------------------------
// Action #1: Display pertinent medical and screening history
// -----------------------------------------------------------------------------
* action[=].action[+].title = "Display pertinent medical history"
* action[=].action[=].description = "DISPLAY data elements used in the Cervical Cancer Screening and Management Dashboard"
* action[=].action[=].textEquivalent = "Static text equivalent of the action, used if the dynamic aspects cannot be interpreted by the receiving system"
* action[=].action[=].definitionCanonical = Canonical(DisplayCervicalCancerMedicalHistory|1.0)
// -----------------------------------------------------------------------------
// Action #2: Screening recommendation text
// -----------------------------------------------------------------------------
* action[=].action[+].title = "Screening recommendations"
* action[=].action[=].description = "Make screening recommendations for average risk individuals"
* action[=].action[=].textEquivalent = "Static text equivalent of the action, used if the dynamic aspects cannot be interpreted by the receiving system"
* action[=].action[=].condition[+].kind = $ACKIND#applicability "Applicability"
* action[=].action[=].condition[=].expression.language = $EXLANG|4.0.1#text/cql "CQL"
* action[=].action[=].condition[=].expression.expression = "NoErrorsHaveOccurred"
* action[=].action[=].condition[=].expression.reference = "Library/ScreeningImmunocompromisedLibrary|1.0"
* action[=].action[=].definitionCanonical = Canonical(CommunicateUnstructuredRecommendations|1.0)
* action[=].action[=].dynamicValue[+].path = "payload" // this is the CommunicationRequest.payload element
* action[=].action[=].dynamicValue[=].expression.language = $EXLANG|4.0.1#text/cql "CQL"
* action[=].action[=].dynamicValue[=].expression.expression = "RecommendationText"
* action[=].action[=].dynamicValue[=].expression.reference = "Library/ScreeningAverageRiskLibrary|1.0"
// -----------------------------------------------------------------------------
// Action #2: Make screening recommendations
// -----------------------------------------------------------------------------
* action[=].action[+].title = "Screening recommendations"
* action[=].action[=].description = "Provide recommendation options for the patient's next screening"
* action[=].action[=].textEquivalent = "Static text equivalent of the action, used if the dynamic aspects cannot be interpreted by the receiving system"
* action[=].action[=].documentation[+].type = $RATYPE#citation "Citation"
* action[=].action[=].documentation[=].label = "USPSTF Recommendation"
* action[=].action[=].documentation[=].display = "U.S. Preventive Services Task Force's final recommendation statement on cervical cancer screening (August 21, 2018)"
* action[=].action[=].condition[+].kind = $ACKIND#applicability "Applicability"
* action[=].action[=].condition[=].expression.language = $EXLANG|4.0.1#text/cql "CQL"
* action[=].action[=].condition[=].expression.expression = "NoErrorsHaveOccurred"
* action[=].action[=].condition[=].expression.reference = "Library/ScreeningAverageRiskLibrary|1.0"
* action[=].action[=].groupingBehavior = http://hl7.org/fhir/action-grouping-behavior#visual-group "Visual Group" // TODO: Discuss whether action-grouping-behavior code should be "visual-group" or "logical-group"
* action[=].action[=].selectionBehavior = http://hl7.org/fhir/action-selection-behavior#at-most-one "At Most One"
// -----------------------------------------------------------------------------
// Sub-action #2.1: Cervical cytology screening
// -----------------------------------------------------------------------------
* action[=].action[=].action[+].title = "Cervical cytology"
* action[=].action[=].action[=].description = "Brief description of the action"
* action[=].action[=].action[=].textEquivalent = "Static text equivalent of the action, used if the dynamic aspects cannot be interpreted by the receiving system"
* action[=].action[=].action[=].documentation[+].type = $RATYPE#citation "Citation"
* action[=].action[=].action[=].documentation[=].label = "USPSTF Recommendation"
* action[=].action[=].action[=].documentation[=].display = "U.S. Preventive Services Task Force's final recommendation statement on cervical cancer screening (August 21, 2018)"
* action[=].action[=].action[=].condition[+].kind = $ACKIND#applicability "Applicability"
* action[=].action[=].action[=].condition[=].expression.language = $EXLANG|4.0.1#text/cql "CQL"
* action[=].action[=].action[=].condition[=].expression.expression = "RecommendImmediateCervicalCytology"
* action[=].action[=].action[=].condition[=].expression.reference = "Library/ScreeningAverageRiskLibrary|1.0"
* action[=].action[=].action[=].definitionCanonical = Canonical(CervicalCytologyScreeningRecommendation|1.0)
// -----------------------------------------------------------------------------
// Sub-action #2.2: Primary HPV screening
// -----------------------------------------------------------------------------
* action[=].action[=].action[+].title = "Primary HPV"
* action[=].action[=].action[=].description = "Brief description of the action"
* action[=].action[=].action[=].textEquivalent = "Static text equivalent of the action, used if the dynamic aspects cannot be interpreted by the receiving system"
* action[=].action[=].action[=].documentation[+].type = $RATYPE#citation "Citation"
* action[=].action[=].action[=].documentation[=].label = "USPSTF Recommendation"
* action[=].action[=].action[=].documentation[=].display = "U.S. Preventive Services Task Force's final recommendation statement on cervical cancer screening (August 21, 2018)"
* action[=].action[=].action[=].condition[+].kind = $ACKIND#applicability "Applicability"
* action[=].action[=].action[=].condition[=].expression.language = $EXLANG|4.0.1#text/cql "CQL"
* action[=].action[=].action[=].condition[=].expression.expression = "RecommendImmediatePrimaryHpv"
* action[=].action[=].action[=].condition[=].expression.reference = "Library/ScreeningAverageRiskLibrary|1.0"
* action[=].action[=].action[=].definitionCanonical = Canonical(PrimaryHpvScreeningRecommendation|1.0)
// -----------------------------------------------------------------------------
// Sub-action #2.3: Cotesting (cytology + HPV)
// -----------------------------------------------------------------------------
* action[=].action[=].action[+].title = "Cotesting (cytology + HPV)"
* action[=].action[=].action[=].description = "Brief description of the action"
* action[=].action[=].action[=].textEquivalent = "Static text equivalent of the action, used if the dynamic aspects cannot be interpreted by the receiving system"
* action[=].action[=].action[=].documentation[+].type = $RATYPE#citation "Citation"
* action[=].action[=].action[=].documentation[=].label = "USPSTF Recommendation"
* action[=].action[=].action[=].documentation[=].display = "U.S. Preventive Services Task Force's final recommendation statement on cervical cancer screening (August 21, 2018)"
* action[=].action[=].action[=].condition[+].kind = $ACKIND#applicability "Applicability"
* action[=].action[=].action[=].condition[=].expression.language = $EXLANG|4.0.1#text/cql "CQL"
* action[=].action[=].action[=].condition[=].expression.expression = "RecommendImmediateCotesting"
* action[=].action[=].action[=].condition[=].expression.reference = "Library/ScreeningAverageRiskLibrary|1.0"
* action[=].action[=].action[=].definitionCanonical = Canonical(CotestingScreeningRecommendation|1.0)
// -----------------------------------------------------------------------------
// Sub-action #2.4: Ask for more information
// -----------------------------------------------------------------------------
* action[=].action[=].action[+].title = "Provide more information"
* action[=].action[=].action[=].description = "Brief description of the action"
* action[=].action[=].action[=].textEquivalent = "Static text equivalent of the action, used if the dynamic aspects cannot be interpreted by the receiving system"
* action[=].action[=].action[=].definitionCanonical = Canonical(ProvideMoreInformation|1.0)
// -----------------------------------------------------------------------------
// Action #3: Handle Errors
// -----------------------------------------------------------------------------
* action[=].action[+].title = "Handle Errors"
* action[=].action[=].description = "Brief description of the action"
* action[=].action[=].textEquivalent = "Static text equivalent of the action, used if the dynamic aspects cannot be interpreted by the receiving system"
* action[=].action[=].condition[+].kind = $ACKIND#applicability "Applicability"
* action[=].action[=].condition[=].expression.language = $EXLANG|4.0.1#text/cql "CQL"
* action[=].action[=].condition[=].expression.expression = "ErrorsHaveOccurred"
* action[=].action[=].condition[=].expression.reference = "Library/ScreeningAverageRiskLibrary|1.0"
* action[=].action[=].definitionCanonical = Canonical(HandleErrors|1.0)