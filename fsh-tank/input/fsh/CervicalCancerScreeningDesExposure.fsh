Instance:   CervicalCancerScreeningDesExposure
InstanceOf: http://hl7.org/fhir/uv/cpg/StructureDefinition/cpg-computableplandefinition
Title: "Cervical Cancer Screening for Individuals with In Utero DES Exposure"
Usage: #definition
* insert CPGKnowledgeExtensions
* insert CommonMetadata
* meta.profile[+] = "http://hl7.org/fhir/uv/cpg/StructureDefinition/cpg-computableplandefinition"
// * cpg-partOf = Canonical(TopLevelPlanDefinition) // TODO: Tie this into the entire pathway
* url = "http://OUR-PLACEHOLDER-URL.com/PlanDefinition/CervicalCancerScreeningDesExposure"
* name = "CervicalCancerScreeningDesExposure"
* title = "Cervical Cancer Screening for Individuals with In Utero DES Exposure"
* type = $PDTYPE#eca-rule "ECA Rule"
* description = "Natural language description of the plan definition"
* useContext[+].code = $UCTYPE#gender "Gender"
* useContext[=].valueCodeableConcept.coding = $V3AG#F "Female"
* purpose = "This CDS identifies individuals for whom cervical cancer screening is indicated. It delivers patient-specific evidence-based screening recommendations based on information in the patient’s health record. It also gathers relevant information in the patient record to display to the clinician as a dashboard in support of care decisions. The dashboard includes information such as evidence of previous pre-cancer or cancerous lesions, previous colposcopies and biopsy results, previous surgeries, etc. The CDS integrates tightly with a companion CDS component (i.e., “Management CDS”), which provides evidence-based care recommendations if screening results are “abnormal”."
* usage = "This artifact is intended for use by healthcare personnel working in primary healthcare settings who care for adolescent and adult patients (i.e., physicians, general practitioners, nurse practitioners, physician assistants, and obstetricians)."
* topic[+].text = "Preventive Medicine"
* topic[+].text = "Public Health"
* topic[+].text = "Cervical Cancer"
* topic[+].text = "Cancer Screening"
* relatedArtifact[+].type = $RATYPE#citation "Citation"
* relatedArtifact[=].label = "In utero DES exposure"
* relatedArtifact[=].display = "ACOG Cervical Cancer Screening and Prevention. Practice Bulletin No. 168 (2016)"
* relatedArtifact[+].type = $RATYPE#citation "Citation"
* relatedArtifact[=].label = "In utero DES exposure"
* relatedArtifact[=].display = "Rubin MM. Antenatal Exposure to DES: Lessons Learned…Future Concerns (August 2007)"
* relatedArtifact[+].type = $RATYPE#citation "Citation"
* relatedArtifact[=].label = "In utero DES exposure"
* relatedArtifact[=].display = "NCI DES and Cancer (May 2020)"
* library = Canonical(ScreeningDesExposureLibrary|1.0.0)
// -----------------------------------------------------------------------------
// Top-level action just includes inclusion and exclusion criteria
// -----------------------------------------------------------------------------
* action[+].title = "Cervical Cancer Screening Actions"
* action[=].description = "Brief description of the action"
* action[=].textEquivalent = "Static text equivalent of the action, used if the dynamic aspects cannot be interpreted by the receiving system"
* action[=].documentation[+].type = $RATYPE#citation "Citation"
* action[=].documentation[=].label = "In utero DES exposure"
* action[=].documentation[=].display = "ACOG Cervical Cancer Screening and Prevention. Practice Bulletin No. 168 (2016)"
* action[=].documentation[+].type = $RATYPE#citation "Citation"
* action[=].documentation[=].label = "In utero DES exposure"
* action[=].documentation[=].display = "Rubin MM. Antenatal Exposure to DES: Lessons Learned…Future Concerns (August 2007)"
* action[=].documentation[+].type = $RATYPE#citation "Citation"
* action[=].documentation[=].label = "In utero DES exposure"
* action[=].documentation[=].display = "NCI DES and Cancer (May 2020)"
* action[=].trigger[+].type = $TTYPE#named-event "Named Event"
* action[=].trigger[=].name = "encounter-start" // CDS Hook name
* action[=].condition[+].kind = $ACKIND#applicability "Applicability"
* action[=].condition[=].expression.language = $EXLANG|4.0.1#text/cql "CQL"
* action[=].condition[=].expression.expression = "IsIncludedAndNotExcluded"
* action[=].condition[=].expression.reference = "Library/ScreeningDesExposureLibrary|1.0"
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
* action[=].action[=].description = "Make screening recommendations for individuals exposed to DES"
* action[=].action[=].textEquivalent = "Static text equivalent of the action, used if the dynamic aspects cannot be interpreted by the receiving system"
* action[=].action[=].condition[+].kind = $ACKIND#applicability "Applicability"
* action[=].action[=].condition[=].expression.language = $EXLANG|4.0.1#text/cql "CQL"
* action[=].action[=].condition[=].expression.expression = "NoErrorsHaveOccurred"
* action[=].action[=].condition[=].expression.reference = "Library/ScreeningDesExposureLibrary|1.0"
* action[=].action[=].definitionCanonical = Canonical(CommunicateUnstructuredRecommendations|1.0.0)
* action[=].action[=].dynamicValue[+].path = "payload[0].contentString" // this is the CommunicationRequest.payload element
* action[=].action[=].dynamicValue[=].expression.language = $EXLANG|4.0.1#text/cql "CQL"
* action[=].action[=].dynamicValue[=].expression.expression = "RecommendationText"
* action[=].action[=].dynamicValue[=].expression.reference = "Library/ScreeningDesExposureLibrary|1.0"
// -----------------------------------------------------------------------------
// Action #3: Cervical cytology screening recommendation
// -----------------------------------------------------------------------------
* action[=].action[+].title = "Cervical cytology"
* action[=].action[=].description = "Brief description of the action"
* action[=].action[=].textEquivalent = "Static text equivalent of the action, used if the dynamic aspects cannot be interpreted by the receiving system"
* action[=].action[=].condition[+].kind = $ACKIND#applicability "Applicability"
* action[=].action[=].condition[=].expression.language = $EXLANG|4.0.1#text/cql "CQL"
* action[=].action[=].condition[=].expression.expression = "NoErrorsHaveOccurred"
* action[=].action[=].condition[=].expression.reference = "Library/ScreeningDesExposureLibrary|1.0"
* action[=].action[=].condition[+].kind = $ACKIND#applicability "Applicability"
* action[=].action[=].condition[=].expression.language = $EXLANG|4.0.1#text/cql "CQL"
* action[=].action[=].condition[=].expression.expression = "RecommendImmediateCervicalCytology"
* action[=].action[=].condition[=].expression.reference = "Library/ScreeningDesExposureLibrary|1.0"
* action[=].action[=].definitionCanonical = Canonical(CervicalCytologyScreeningRecommendation|1.0.0)
// -----------------------------------------------------------------------------
// Action #3: Handle Errors
// -----------------------------------------------------------------------------
* action[=].action[+].title = "Handle Errors"
* action[=].action[=].description = "Brief description of the action"
* action[=].action[=].textEquivalent = "Static text equivalent of the action, used if the dynamic aspects cannot be interpreted by the receiving system"
* action[=].action[=].condition[+].kind = $ACKIND#applicability "Applicability"
* action[=].action[=].condition[=].expression.language = $EXLANG|4.0.1#text/cql "CQL"
* action[=].action[=].condition[=].expression.expression = "ErrorsHaveOccurred"
* action[=].action[=].condition[=].expression.reference = "Library/ScreeningDesExposureLibrary|1.0"
* action[=].action[=].definitionCanonical = Canonical(HandleErrors|1.0.0)