Instance:   CervicalCancerScreening
InstanceOf: http://hl7.org/fhir/uv/cpg/StructureDefinition/cpg-computableplandefinition
Title: "Cervical Cancer Screening"
Usage: #definition
* insert CPGKnowledgeExtensions
* insert CommonMetadata
* meta.profile[+] = "http://hl7.org/fhir/uv/cpg/StructureDefinition/cpg-computableplandefinition"
// * cpg-partOf = Canonical(TopLevelPlanDefinition) // TODO: Tie this into the entire pathway
* url = "http://OUR-PLACEHOLDER-URL.com/PlanDefinition/CervicalCancerScreening"
* name = "CervicalCancerScreening"
* title = "Cervical Cancer Screening"
* type = $PDTYPE#eca-rule "ECA Rule"
* description = "This CDS tool provides care cervical cancer screening recommendations to a diverse population of individuals (i.e., those experiencing abnormal uterine or vaginal bleeding, have in utero exposure to diethylstilbestrol [DES], are immunocompromised, or are at “average risk” for cervical cancer). The evidence sources that inspired this tool are listed in the relatedArtifact metadata field."
* useContext[+].code = $UCTYPE#gender "Gender"
* useContext[=].valueCodeableConcept.coding = $V3AG#F "Female"
* purpose = "This CDS identifies individuals for whom cervical cancer screening is indicated. It delivers patient-specific evidence-based screening recommendations based on information in the patient’s health record. It also gathers relevant information in the patient record to display to the clinician as a dashboard in support of care decisions. The dashboard includes information such as evidence of previous pre-cancer or cancerous lesions, previous colposcopies and biopsy results, previous surgeries, etc. The CDS integrates tightly with a companion CDS component (i.e., “Management CDS”), which provides evidence-based care recommendations if screening results are “abnormal”."
* usage = "This artifact is intended for use by healthcare personnel working in primary healthcare settings who care for adolescent and adult patients (i.e., physicians, general practitioners, nurse practitioners, physician assistants, and obstetricians)."
* topic[+].text = "Preventive Medicine"
* topic[+].text = "Public Health"
* topic[+].text = "Cervical Cancer"
* topic[+].text = "Cancer Screening"
* relatedArtifact[+].type = $RATYPE#citation "Citation"
* relatedArtifact[=].label = "Symptomatic"
* relatedArtifact[=].display = "ASCCP Clinical Practice Statement: Evaluation of the Cervix in Patient with Abnormal Vaginal Bleeding (2017)"
* relatedArtifact[+].type = $RATYPE#citation "Citation"
* relatedArtifact[=].label = "In utero DES exposure"
* relatedArtifact[=].display = "ACOG Cervical Cancer Screening and Prevention. Practice Bulletin No. 168 (2016)"
* relatedArtifact[+].type = $RATYPE#citation "Citation"
* relatedArtifact[=].label = "In utero DES exposure"
* relatedArtifact[=].display = "Rubin MM. Antenatal Exposure to DES: Lessons Learned…Future Concerns (August 2007)"
* relatedArtifact[+].type = $RATYPE#citation "Citation"
* relatedArtifact[=].label = "In utero DES exposure"
* relatedArtifact[=].display = "NCI DES and Cancer (May 2020)"
* relatedArtifact[+].type = $RATYPE#citation "Citation"
* relatedArtifact[=].label = "Immunocompromised"
* relatedArtifact[=].display = "Guidelines for Prevention and Treatment of Opportunistic Infections in Adults and Adolescents with HIV (2020)"
* relatedArtifact[+].type = $RATYPE#citation "Citation"
* relatedArtifact[=].label = "Immunocompromised"
* relatedArtifact[=].display = "Moscicki, A.B., et al. Guidelines for Cervical Cancer Screening Immunosuppressed Women without HIV Infection (2019)"
* relatedArtifact[+].type = $RATYPE#citation "Citation"
* relatedArtifact[=].label = "USPSTF Recommendation"
* relatedArtifact[=].display = "U.S. Preventive Services Task Force's final recommendation statement on cervical cancer screening (August 21, 2018)"
* library = Canonical(TopLevelScreeningLibrary|1.0)
// -----------------------------------------------------------------------------
// Top-level action just includes inclusion and exclusion criteria
// -----------------------------------------------------------------------------
* action[+].title = "Cervical Cancer Screening Actions"
* action[=].description = "Top level action that defines trigger and criteria for inclusion and exclusion."
* action[=].documentation[+].type = $RATYPE#documentation "Documentation"
* action[=].documentation[=].display = "Appropriate for individuals whose sex at birth is recorded as Female or whose gender identity is recorded as Transgender Male."
* action[=].trigger[+].type = $TTYPE#named-event "Named Event"
* action[=].trigger[=].name = "encounter-start" // CDS Hook name
* action[=].condition[+].kind = $ACKIND#applicability "Applicability"
* action[=].condition[=].expression.language = $EXLANG|4.0.1#text/cql "CQL"
* action[=].condition[=].expression.expression = "IsIncludedAndNotExcluded"
* action[=].condition[=].expression.reference = "Library/TopLevelScreeningLibrary|1.0"
// -----------------------------------------------------------------------------
// Sub-action #1: Symptomatic Individuals
// -----------------------------------------------------------------------------
* action[=].action[+].title = "Cervical Cancer Screening Actions (Symptomatic Individuals)"
* action[=].action[=].description = "Top level action for screening of symptomatic individuals that defines trigger and criteria for inclusion and exclusion."
* action[=].action[=].documentation[+].type = $RATYPE#citation "Citation"
* action[=].action[=].documentation[=].label = "Symptomatic"
* action[=].action[=].documentation[=].display = "ASCCP Clinical Practice Statement: Evaluation of the Cervix in Patient with Abnormal Vaginal Bleeding (2017)"
* action[=].action[=].condition[+].kind = $ACKIND#applicability "Applicability"
* action[=].action[=].condition[=].expression.language = $EXLANG|4.0.1#text/cql "CQL"
* action[=].action[=].condition[=].expression.expression = "NoErrorsHaveOccurred"
* action[=].action[=].condition[=].expression.reference = "Library/TopLevelScreeningLibrary|1.0"
* action[=].action[=].definitionCanonical = Canonical(CervicalCancerScreeningSymptomaticIndividuals|1.0)
// -----------------------------------------------------------------------------
// Sub-action #2: Individuals with Exposure to DES
// -----------------------------------------------------------------------------
* action[=].action[+].title = "Cervical Cancer Screening Actions (In Utero DES Exposure)"
* action[=].action[=].description = "Top level action for screening of individuals exposed to DES in utero that defines trigger and criteria for inclusion and exclusion."
* action[=].action[=].documentation[+].type = $RATYPE#citation "Citation"
* action[=].action[=].documentation[=].label = "In utero DES exposure"
* action[=].action[=].documentation[=].display = "ACOG Cervical Cancer Screening and Prevention. Practice Bulletin No. 168 (2016)"
* action[=].action[=].documentation[+].type = $RATYPE#citation "Citation"
* action[=].action[=].documentation[=].label = "In utero DES exposure"
* action[=].action[=].documentation[=].display = "Rubin MM. Antenatal Exposure to DES: Lessons Learned…Future Concerns (August 2007)"
* action[=].action[=].documentation[+].type = $RATYPE#citation "Citation"
* action[=].action[=].documentation[=].label = "In utero DES exposure"
* action[=].action[=].documentation[=].display = "NCI DES and Cancer (May 2020)"
* action[=].action[=].condition[+].kind = $ACKIND#applicability "Applicability"
* action[=].action[=].condition[=].expression.language = $EXLANG|4.0.1#text/cql "CQL"
* action[=].action[=].condition[=].expression.expression = "NoErrorsHaveOccurred"
* action[=].action[=].condition[=].expression.reference = "Library/TopLevelScreeningLibrary|1.0"
* action[=].action[=].definitionCanonical = Canonical(CervicalCancerScreeningDesExposure|1.0)
// -----------------------------------------------------------------------------
// Sub-action #3: Immunocompromised Individuals
// -----------------------------------------------------------------------------
* action[=].action[+].title = "Cervical Cancer Screening Actions (Immunocompromised Individuals)"
* action[=].action[=].description = "Top level action for screening of immunocompromised individuals that defines trigger and criteria for inclusion and exclusion."
* action[=].action[=].documentation[+].type = $RATYPE#citation "Citation"
* action[=].action[=].documentation[=].label = "Immunocompromised"
* action[=].action[=].documentation[=].display = "Guidelines for Prevention and Treatment of Opportunistic Infections in Adults and Adolescents with HIV (2020)"
* action[=].action[=].documentation[+].type = $RATYPE#citation "Citation"
* action[=].action[=].documentation[=].label = "Immunocompromised"
* action[=].action[=].documentation[=].display = "Moscicki, A.B., et al. Guidelines for Cervical Cancer Screening Immunosuppressed Women without HIV Infection (2019)"
* action[=].action[=].condition[+].kind = $ACKIND#applicability "Applicability"
* action[=].action[=].condition[=].expression.language = $EXLANG|4.0.1#text/cql "CQL"
* action[=].action[=].condition[=].expression.expression = "NoErrorsHaveOccurred"
* action[=].action[=].condition[=].expression.reference = "Library/TopLevelScreeningLibrary|1.0"
* action[=].action[=].definitionCanonical = Canonical(CervicalCancerScreeningImmunocompromisedIndividuals|1.0)
// -----------------------------------------------------------------------------
// Sub-action #4: Average Risk Individuals
// -----------------------------------------------------------------------------
* action[=].action[+].title = "Cervical Cancer Screening Actions (Average Risk)"
* action[=].action[=].description = "Top level action for average risk screening that defines trigger and criteria for inclusion and exclusion."
* action[=].action[=].documentation[+].type = $RATYPE#citation "Citation"
* action[=].action[=].documentation[=].label = "USPSTF Recommendation"
* action[=].action[=].documentation[=].display = "U.S. Preventive Services Task Force's final recommendation statement on cervical cancer screening (August 21, 2018)"
* action[=].action[=].condition[+].kind = $ACKIND#applicability "Applicability"
* action[=].action[=].condition[=].expression.language = $EXLANG|4.0.1#text/cql "CQL"
* action[=].action[=].condition[=].expression.expression = "NoErrorsHaveOccurred"
* action[=].action[=].condition[=].expression.reference = "Library/TopLevelScreeningLibrary|1.0"
* action[=].action[=].definitionCanonical = Canonical(CervicalCancerScreeningAverageRisk|1.0)
// -----------------------------------------------------------------------------
// Sub-action #5: 
// -----------------------------------------------------------------------------
* action[=].action[+].title = "Handle Errors"
* action[=].action[=].description = "Brief description of the action"
* action[=].action[=].textEquivalent = "Static text equivalent of the action, used if the dynamic aspects cannot be interpreted by the receiving system"
* action[=].action[=].condition[+].kind = $ACKIND#applicability "Applicability"
* action[=].action[=].condition[=].expression.language = $EXLANG|4.0.1#text/cql "CQL"
* action[=].action[=].condition[=].expression.expression = "ErrorsHaveOccurred"
* action[=].action[=].condition[=].expression.reference = "Library/TopLevelScreeningLibrary|1.0"
* action[=].action[=].definitionCanonical = Canonical(HandleErrors|1.0)
// TODO: Add dynamic value for error message