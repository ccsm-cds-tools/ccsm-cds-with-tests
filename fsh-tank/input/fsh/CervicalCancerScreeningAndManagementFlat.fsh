Instance: CervicalCancerScreeningAndManagementFlat
InstanceOf: PlanDefinition
Usage: #example
* meta.profile = "http://hl7.org/fhir/uv/cpg/StructureDefinition/cpg-computableplandefinition"
* url = "http://OUR-PLACEHOLDER-URL.com/PlanDefinition/CervicalCancerScreeningAndManagementClinicalDecisionSupport"
* extension[0].url = "http://hl7.org/fhir/uv/cpg/StructureDefinition/cpg-knowledgeCapability"
* extension[=].valueCode = #executable
* extension[+].url = "http://hl7.org/fhir/uv/cpg/StructureDefinition/cpg-knowledgeRepresentationLevel"
* extension[=].valueCode = #structured
* version = "1.0.0"
* date = "2021-09-14"
* status = #draft
* experimental = true
* publisher = "The Health FFRDC, operated by The MITRE Corporation, in support of the Division of Cancer Prevention and Control, Centers for Disease Control and Prevention."
* copyright = "(C) 2021 The MITRE Corporation. All Rights Reserved. Approved for Public Release: 21-1556. Distribution Unlimited. Unless otherwise noted, this work is available under an Apache 2.0 license. It was produced by the MITRE Corporation for the Division of Cancer Prevention and Control, Centers for Disease Control and Prevention in accordance with the Statement of Work, contract number 75FCMC18D0047, task order number 75D30120F09743."
* approvalDate = "2021-09-14"
* lastReviewDate = "2021-09-14"
* author.name = "The Health FFRDC, operated by The MITRE Corporation, in support of the Division of Cancer Prevention and Control, Centers for Disease Control and Prevention."
* editor.name = "Division of Cancer Prevention and Control, Centers for Disease Control and Prevention"
* reviewer.name = "Division of Cancer Prevention and Control, Centers for Disease Control and Prevention"
* endorser.name = "Division of Cancer Prevention and Control, Centers for Disease Control and Prevention"
* name = "CervicalCancerScreeningAndManagementClinicalDecisionSupport"
* title = "Cervical Cancer Screening And Management Clinical Decision Support"
* type = $PDTYPE#eca-rule "ECA Rule"
* description = "This CDS tool provides care cervical cancer screening recommendations to a diverse population of individuals (i.e., those experiencing abnormal uterine or vaginal bleeding, have in utero exposure to diethylstilbestrol [DES], are immunocompromised, or are at “average risk” for cervical cancer). The evidence sources that inspired this tool are listed in the relatedArtifact metadata field."
* useContext.code = $UCTYPE#gender "Gender"
* useContext.valueCodeableConcept = $V3AG#F "Female"
* purpose = "This CDS identifies individuals for whom cervical cancer screening is indicated. It delivers patient-specific evidence-based screening recommendations based on information in the patient’s health record. It also gathers relevant information in the patient record to display to the clinician as a dashboard in support of care decisions. The dashboard includes information such as evidence of previous pre-cancer or cancerous lesions, previous colposcopies and biopsy results, previous surgeries, etc. The CDS integrates tightly with a companion CDS component (i.e., “Management CDS”), which provides evidence-based care recommendations if screening results are “abnormal”."
* usage = "This artifact is intended for use by healthcare personnel working in primary healthcare settings who care for adolescent and adult patients (i.e., physicians, general practitioners, nurse practitioners, physician assistants, and obstetricians)."
* topic[0].text = "Preventive Medicine"
* topic[+].text = "Public Health"
* topic[+].text = "Cervical Cancer"
* topic[+].text = "Cancer Screening"
* library[0] = "http://OUR-PLACEHOLDER-URL.com/Library/ScreeningLibrary|1.0.0"
* library[+] = "http://OUR-PLACEHOLDER-URL.com/Library/ManagementLibrary|1.0.0"
* action[0].title = "Screening"
* action[=].description = "Top level action that defines trigger and criteria for inclusion and exclusion."
* action[=].textEquivalent = "Static text equivalent of the action, used if the dynamic aspects cannot be interpreted by the receiving system"
* action[=].documentation.type = #documentation
* action[=].documentation.label = "Inclusions"
* action[=].documentation.display = "Appropriate for individuals whose sex at birth is recorded as Female or whose gender identity is recorded as Transgender Male."
* action[=].trigger.type = #named-event
* action[=].trigger.name = "encounter-start"
* action[=].condition.kind = #applicability
* action[=].condition.expression.language = #text/cql.identifier
* action[=].condition.expression.expression = "IsIncludedAndNotExcluded"
* action[=].condition.expression.reference = "Library/ScreeningLibrary|1.0"
* action[=].action.title = "Cervical Cancer Screening Actions"
* action[=].action.description = "Top level action that defines trigger and criteria for inclusion and exclusion."
* action[=].action.textEquivalent = "Static text equivalent of the action, used if the dynamic aspects cannot be interpreted by the receiving system"
* action[=].action.documentation.type = #documentation
* action[=].action.documentation.label = "Inclusions"
* action[=].action.documentation.display = "Appropriate for individuals whose sex at birth is recorded as Female or whose gender identity is recorded as Transgender Male."
* action[=].action.trigger.type = #named-event
* action[=].action.trigger.name = "encounter-start"
* action[=].action.condition.kind = #applicability
* action[=].action.condition.expression.language = #text/cql.identifier
* action[=].action.condition.expression.expression = "IsIncludedAndNotExcluded"
* action[=].action.condition.expression.reference = "Library/ScreeningLibrary|1.0"
* action[=].action.action[0].title = "Display pertinent medical history"
* action[=].action.action[=].description = "DISPLAY data elements used in the Cervical Cancer Screening and Management Dashboard"
* action[=].action.action[=].textEquivalent = "Static text equivalent of the action, used if the dynamic aspects cannot be interpreted by the receiving system"
* action[=].action.action[=].definitionCanonical = "http://OUR-PLACEHOLDER-URL.com/ActivityDefinition/DisplayCervicalCancerMedicalHistory|1.0.0"
* action[=].action.action[+].title = "Screening Recommendations"
* action[=].action.action[=].description = "Brief description of the action"
* action[=].action.action[=].textEquivalent = "Static text equivalent of the action, used if the dynamic aspects cannot be interpreted by the receiving system"
* action[=].action.action[=].condition.kind = #applicability
* action[=].action.action[=].condition.expression.language = #text/cql.identifier
* action[=].action.action[=].condition.expression.expression = "HasRecommendation"
* action[=].action.action[=].condition.expression.reference = "Library/ScreeningLibrary|1.0"
* action[=].action.action[=].action[0].title = "Screening Decision Aids"
* action[=].action.action[=].action[=].description = "Screening Decision Aids"
* action[=].action.action[=].action[=].textEquivalent = "Screening Decision Aids"
* action[=].action.action[=].action[=].definitionCanonical = "http://OUR-PLACEHOLDER-URL.com/ActivityDefinition/CervicalCancerDecisionAids|1.0.0"
* action[=].action.action[=].action[=].dynamicValue.path = "payload[0].contentString"
* action[=].action.action[=].action[=].dynamicValue.expression.language = #text/cql.identifier
* action[=].action.action[=].action[=].dynamicValue.expression.expression = "DecisionAidsString"
* action[=].action.action[=].action[=].dynamicValue.expression.reference = "Library/ScreeningLibrary|1.0"
* action[=].action.action[=].action[=].documentation[0].type = #citation
* action[=].action.action[=].action[=].documentation[=].label = "Screening: Average Risk"
* action[=].action.action[=].action[=].documentation[=].display = "2018 USPSTF Cervical Cancer Screening Recommendations"
* action[=].action.action[=].action[=].documentation[=].citation = "United States Preventive Services Task Force, \"Final Recommendation Statement: Cervical Cancer Screening,\" 21 August 2018."
* action[=].action.action[=].action[=].documentation[=].url = "https://www.uspreventiveservicestaskforce.org/uspstf/recommendation/cervical-cancer-screening"
* action[=].action.action[=].action[=].documentation[+].type = #citation
* action[=].action.action[=].action[=].documentation[=].label = "Screening: Symptomatic"
* action[=].action.action[=].action[=].documentation[=].display = "Evaluation of the Cervix in Patients with Abnormal Vaginal Bleeding"
* action[=].action.action[=].action[=].documentation[=].citation = "ASCCP Clinical Practice Statement, \"Evaluation of the Cervix in Patients with Abnormal Vaginal Bleeding,\" 7 February 2017."
* action[=].action.action[=].action[=].documentation[=].url = "https://www.asccp.org/Assets/9d92e617-858f-43f3-af62-44adf76cfc67/636220616039000000/vaginal-bleeding-statement-final-02-06-17-pdf"
* action[=].action.action[=].action[=].documentation[+].type = #citation
* action[=].action.action[=].action[=].documentation[=].label = "Screening: DES Exposure"
* action[=].action.action[=].action[=].documentation[=].display = "Practice Bulletin No. 168: Cervical Cancer Screening and Prevention"
* action[=].action.action[=].action[=].documentation[=].citation = "\"Practice Bulletin No. 168: Cervical Cancer Screening and Prevention,\" Obstetrics and Gynecology, vol. 1284, no. 4, pp. e111-e130, 2016."
* action[=].action.action[=].action[=].documentation[=].url = "https://pubmed.ncbi.nlm.nih.gov/27661651/"
* action[=].action.action[=].action[=].documentation[+].type = #citation
* action[=].action.action[=].action[=].documentation[=].label = "Screening: DES Exposure"
* action[=].action.action[=].action[=].documentation[=].display = "Antenatal exposure to DES: Lessons Learned...Future Concerns"
* action[=].action.action[=].action[=].documentation[=].citation = "M. Rubin, \"Antenatal exposure to DES: Lessons Learned...Future Concerns,\" Obstetrical & Gynecological Survey, vol. 62, no. 8, pp. 548-555, 2007."
* action[=].action.action[=].action[=].documentation[=].url = "https://pubmed.ncbi.nlm.nih.gov/17634156/"
* action[=].action.action[=].action[=].documentation[+].type = #citation
* action[=].action.action[=].action[=].documentation[=].label = "Screening: Immunocompromised"
* action[=].action.action[=].action[=].documentation[=].display = "Guidelines for the prevention and treatment of opportunistic infections in adults and adolescents with HIV"
* action[=].action.action[=].action[=].documentation[=].citation = "Panel on Opportunistic Infections in Adults and Adolescents with HIV, \"Guidelines for the prevention and treatment of opportunistic infections in adults and adolescents with HIV: Recommendations from the CDC, the NIH, and the HIV Medicine Association of the Infectious Diseases Society of America,\" 29 November 2018."
* action[=].action.action[=].action[=].documentation[=].url = "https://clinicalinfo.hiv.gov/en/guidelines/adult-and-adolescent-opportunistic-infection/human-papillomavirus-disease"
* action[=].action.action[=].action[=].documentation[+].type = #citation
* action[=].action.action[=].action[=].documentation[=].label = "Screening: Immunocompromised"
* action[=].action.action[=].action[=].documentation[=].display = "Guidelines for Cervical Cancer Screening in Immunosuppressed Women Without HIV Infection"
* action[=].action.action[=].action[=].documentation[=].citation = "A.-B. Moscicki, L. Flowers, M. J. Huchko, M. E. Long, K. L. MacLaughlin, J. Murphy, L. B. Spiryda and M. A. Gold, \"Guidelines for Cervical Cancer Screening in Immunosuppressed Women Without HIV Infection,\" Journal of Lower Genital Tract Disease, vol. 23, no. 2, pp. 87-101, 2019."
* action[=].action.action[=].action[=].documentation[=].url = "https://pubmed.ncbi.nlm.nih.gov/30907775/"
* action[=].action.action[=].action[+].title = "Recommended Screening Activities"
* action[=].action.action[=].action[=].description = "Recommended Screening Activities"
* action[=].action.action[=].action[=].textEquivalent = "Recommended Screening Activities"
* action[=].action.action[=].action[=].groupingBehavior = #visual-group
* action[=].action.action[=].action[=].selectionBehavior = #at-most-one
* action[=].action.action[=].action[=].action[0].title = "Primary HPV"
* action[=].action.action[=].action[=].action[=].condition.kind = #applicability
* action[=].action.action[=].action[=].action[=].condition.expression.language = #text/cql.identifier
* action[=].action.action[=].action[=].action[=].condition.expression.expression = "RecommendPrimaryHpv"
* action[=].action.action[=].action[=].action[=].condition.expression.reference = "Library/ScreeningLibrary|1.0"
* action[=].action.action[=].action[=].action[=].dynamicValue.path = "code"
* action[=].action.action[=].action[=].action[=].dynamicValue.expression.language = #text/cql.identifier
* action[=].action.action[=].action[=].action[=].dynamicValue.expression.expression = "PrimaryHpvOrderCode"
* action[=].action.action[=].action[=].action[=].dynamicValue.expression.reference = "Library/ScreeningLibrary|1.0"
* action[=].action.action[=].action[=].action[=].definitionCanonical = "http://OUR-PLACEHOLDER-URL.com/ActivityDefinition/CervicalCancerScreeningActivity|1.0.0"
* action[=].action.action[=].action[=].action[=].documentation[0].type = #citation
* action[=].action.action[=].action[=].action[=].documentation[=].label = "Screening: Average Risk"
* action[=].action.action[=].action[=].action[=].documentation[=].display = "2018 USPSTF Cervical Cancer Screening Recommendations"
* action[=].action.action[=].action[=].action[=].documentation[=].citation = "United States Preventive Services Task Force, \"Final Recommendation Statement: Cervical Cancer Screening,\" 21 August 2018."
* action[=].action.action[=].action[=].action[=].documentation[=].url = "https://www.uspreventiveservicestaskforce.org/uspstf/recommendation/cervical-cancer-screening"
* action[=].action.action[=].action[=].action[=].documentation[+].type = #citation
* action[=].action.action[=].action[=].action[=].documentation[=].label = "Screening: Symptomatic"
* action[=].action.action[=].action[=].action[=].documentation[=].display = "Evaluation of the Cervix in Patients with Abnormal Vaginal Bleeding"
* action[=].action.action[=].action[=].action[=].documentation[=].citation = "ASCCP Clinical Practice Statement, \"Evaluation of the Cervix in Patients with Abnormal Vaginal Bleeding,\" 7 February 2017."
* action[=].action.action[=].action[=].action[=].documentation[=].url = "https://www.asccp.org/Assets/9d92e617-858f-43f3-af62-44adf76cfc67/636220616039000000/vaginal-bleeding-statement-final-02-06-17-pdf"
* action[=].action.action[=].action[=].action[=].documentation[+].type = #citation
* action[=].action.action[=].action[=].action[=].documentation[=].label = "Screening: DES Exposure"
* action[=].action.action[=].action[=].action[=].documentation[=].display = "Practice Bulletin No. 168: Cervical Cancer Screening and Prevention"
* action[=].action.action[=].action[=].action[=].documentation[=].citation = "\"Practice Bulletin No. 168: Cervical Cancer Screening and Prevention,\" Obstetrics and Gynecology, vol. 1284, no. 4, pp. e111-e130, 2016."
* action[=].action.action[=].action[=].action[=].documentation[=].url = "https://pubmed.ncbi.nlm.nih.gov/27661651/"
* action[=].action.action[=].action[=].action[=].documentation[+].type = #citation
* action[=].action.action[=].action[=].action[=].documentation[=].label = "Screening: DES Exposure"
* action[=].action.action[=].action[=].action[=].documentation[=].display = "Antenatal exposure to DES: Lessons Learned...Future Concerns"
* action[=].action.action[=].action[=].action[=].documentation[=].citation = "M. Rubin, \"Antenatal exposure to DES: Lessons Learned...Future Concerns,\" Obstetrical & Gynecological Survey, vol. 62, no. 8, pp. 548-555, 2007."
* action[=].action.action[=].action[=].action[=].documentation[=].url = "https://pubmed.ncbi.nlm.nih.gov/17634156/"
* action[=].action.action[=].action[=].action[=].documentation[+].type = #citation
* action[=].action.action[=].action[=].action[=].documentation[=].label = "Screening: Immunocompromised"
* action[=].action.action[=].action[=].action[=].documentation[=].display = "Guidelines for the prevention and treatment of opportunistic infections in adults and adolescents with HIV"
* action[=].action.action[=].action[=].action[=].documentation[=].citation = "Panel on Opportunistic Infections in Adults and Adolescents with HIV, \"Guidelines for the prevention and treatment of opportunistic infections in adults and adolescents with HIV: Recommendations from the CDC, the NIH, and the HIV Medicine Association of the Infectious Diseases Society of America,\" 29 November 2018."
* action[=].action.action[=].action[=].action[=].documentation[=].url = "https://clinicalinfo.hiv.gov/en/guidelines/adult-and-adolescent-opportunistic-infection/human-papillomavirus-disease"
* action[=].action.action[=].action[=].action[=].documentation[+].type = #citation
* action[=].action.action[=].action[=].action[=].documentation[=].label = "Screening: Immunocompromised"
* action[=].action.action[=].action[=].action[=].documentation[=].display = "Guidelines for Cervical Cancer Screening in Immunosuppressed Women Without HIV Infection"
* action[=].action.action[=].action[=].action[=].documentation[=].citation = "A.-B. Moscicki, L. Flowers, M. J. Huchko, M. E. Long, K. L. MacLaughlin, J. Murphy, L. B. Spiryda and M. A. Gold, \"Guidelines for Cervical Cancer Screening in Immunosuppressed Women Without HIV Infection,\" Journal of Lower Genital Tract Disease, vol. 23, no. 2, pp. 87-101, 2019."
* action[=].action.action[=].action[=].action[=].documentation[=].url = "https://pubmed.ncbi.nlm.nih.gov/30907775/"
* action[=].action.action[=].action[=].action[+].title = "Cytology"
* action[=].action.action[=].action[=].action[=].condition.kind = #applicability
* action[=].action.action[=].action[=].action[=].condition.expression.language = #text/cql.identifier
* action[=].action.action[=].action[=].action[=].condition.expression.expression = "RecommendCytology"
* action[=].action.action[=].action[=].action[=].condition.expression.reference = "Library/ScreeningLibrary|1.0"
* action[=].action.action[=].action[=].action[=].dynamicValue.path = "code"
* action[=].action.action[=].action[=].action[=].dynamicValue.expression.language = #text/cql.identifier
* action[=].action.action[=].action[=].action[=].dynamicValue.expression.expression = "CytologyOrderCode"
* action[=].action.action[=].action[=].action[=].dynamicValue.expression.reference = "Library/ScreeningLibrary|1.0"
* action[=].action.action[=].action[=].action[=].definitionCanonical = "http://OUR-PLACEHOLDER-URL.com/ActivityDefinition/CervicalCancerScreeningActivity|1.0.0"
* action[=].action.action[=].action[=].action[=].documentation[0].type = #citation
* action[=].action.action[=].action[=].action[=].documentation[=].label = "Screening: Average Risk"
* action[=].action.action[=].action[=].action[=].documentation[=].display = "2018 USPSTF Cervical Cancer Screening Recommendations"
* action[=].action.action[=].action[=].action[=].documentation[=].citation = "United States Preventive Services Task Force, \"Final Recommendation Statement: Cervical Cancer Screening,\" 21 August 2018."
* action[=].action.action[=].action[=].action[=].documentation[=].url = "https://www.uspreventiveservicestaskforce.org/uspstf/recommendation/cervical-cancer-screening"
* action[=].action.action[=].action[=].action[=].documentation[+].type = #citation
* action[=].action.action[=].action[=].action[=].documentation[=].label = "Screening: Symptomatic"
* action[=].action.action[=].action[=].action[=].documentation[=].display = "Evaluation of the Cervix in Patients with Abnormal Vaginal Bleeding"
* action[=].action.action[=].action[=].action[=].documentation[=].citation = "ASCCP Clinical Practice Statement, \"Evaluation of the Cervix in Patients with Abnormal Vaginal Bleeding,\" 7 February 2017."
* action[=].action.action[=].action[=].action[=].documentation[=].url = "https://www.asccp.org/Assets/9d92e617-858f-43f3-af62-44adf76cfc67/636220616039000000/vaginal-bleeding-statement-final-02-06-17-pdf"
* action[=].action.action[=].action[=].action[=].documentation[+].type = #citation
* action[=].action.action[=].action[=].action[=].documentation[=].label = "Screening: DES Exposure"
* action[=].action.action[=].action[=].action[=].documentation[=].display = "Practice Bulletin No. 168: Cervical Cancer Screening and Prevention"
* action[=].action.action[=].action[=].action[=].documentation[=].citation = "\"Practice Bulletin No. 168: Cervical Cancer Screening and Prevention,\" Obstetrics and Gynecology, vol. 1284, no. 4, pp. e111-e130, 2016."
* action[=].action.action[=].action[=].action[=].documentation[=].url = "https://pubmed.ncbi.nlm.nih.gov/27661651/"
* action[=].action.action[=].action[=].action[=].documentation[+].type = #citation
* action[=].action.action[=].action[=].action[=].documentation[=].label = "Screening: DES Exposure"
* action[=].action.action[=].action[=].action[=].documentation[=].display = "Antenatal exposure to DES: Lessons Learned...Future Concerns"
* action[=].action.action[=].action[=].action[=].documentation[=].citation = "M. Rubin, \"Antenatal exposure to DES: Lessons Learned...Future Concerns,\" Obstetrical & Gynecological Survey, vol. 62, no. 8, pp. 548-555, 2007."
* action[=].action.action[=].action[=].action[=].documentation[=].url = "https://pubmed.ncbi.nlm.nih.gov/17634156/"
* action[=].action.action[=].action[=].action[=].documentation[+].type = #citation
* action[=].action.action[=].action[=].action[=].documentation[=].label = "Screening: Immunocompromised"
* action[=].action.action[=].action[=].action[=].documentation[=].display = "Guidelines for the prevention and treatment of opportunistic infections in adults and adolescents with HIV"
* action[=].action.action[=].action[=].action[=].documentation[=].citation = "Panel on Opportunistic Infections in Adults and Adolescents with HIV, \"Guidelines for the prevention and treatment of opportunistic infections in adults and adolescents with HIV: Recommendations from the CDC, the NIH, and the HIV Medicine Association of the Infectious Diseases Society of America,\" 29 November 2018."
* action[=].action.action[=].action[=].action[=].documentation[=].url = "https://clinicalinfo.hiv.gov/en/guidelines/adult-and-adolescent-opportunistic-infection/human-papillomavirus-disease"
* action[=].action.action[=].action[=].action[=].documentation[+].type = #citation
* action[=].action.action[=].action[=].action[=].documentation[=].label = "Screening: Immunocompromised"
* action[=].action.action[=].action[=].action[=].documentation[=].display = "Guidelines for Cervical Cancer Screening in Immunosuppressed Women Without HIV Infection"
* action[=].action.action[=].action[=].action[=].documentation[=].citation = "A.-B. Moscicki, L. Flowers, M. J. Huchko, M. E. Long, K. L. MacLaughlin, J. Murphy, L. B. Spiryda and M. A. Gold, \"Guidelines for Cervical Cancer Screening in Immunosuppressed Women Without HIV Infection,\" Journal of Lower Genital Tract Disease, vol. 23, no. 2, pp. 87-101, 2019."
* action[=].action.action[=].action[=].action[=].documentation[=].url = "https://pubmed.ncbi.nlm.nih.gov/30907775/"
* action[=].action.action[=].action[=].action[+].title = "Cotesting"
* action[=].action.action[=].action[=].action[=].condition.kind = #applicability
* action[=].action.action[=].action[=].action[=].condition.expression.language = #text/cql.identifier
* action[=].action.action[=].action[=].action[=].condition.expression.expression = "RecommendCotesting"
* action[=].action.action[=].action[=].action[=].condition.expression.reference = "Library/ScreeningLibrary|1.0"
* action[=].action.action[=].action[=].action[=].dynamicValue.path = "code"
* action[=].action.action[=].action[=].action[=].dynamicValue.expression.language = #text/cql.identifier
* action[=].action.action[=].action[=].action[=].dynamicValue.expression.expression = "CotestingOrderCode"
* action[=].action.action[=].action[=].action[=].dynamicValue.expression.reference = "Library/ScreeningLibrary|1.0"
* action[=].action.action[=].action[=].action[=].definitionCanonical = "http://OUR-PLACEHOLDER-URL.com/ActivityDefinition/CervicalCancerScreeningActivity|1.0.0"
* action[=].action.action[=].action[=].action[=].documentation[0].type = #citation
* action[=].action.action[=].action[=].action[=].documentation[=].label = "Screening: Average Risk"
* action[=].action.action[=].action[=].action[=].documentation[=].display = "2018 USPSTF Cervical Cancer Screening Recommendations"
* action[=].action.action[=].action[=].action[=].documentation[=].citation = "United States Preventive Services Task Force, \"Final Recommendation Statement: Cervical Cancer Screening,\" 21 August 2018."
* action[=].action.action[=].action[=].action[=].documentation[=].url = "https://www.uspreventiveservicestaskforce.org/uspstf/recommendation/cervical-cancer-screening"
* action[=].action.action[=].action[=].action[=].documentation[+].type = #citation
* action[=].action.action[=].action[=].action[=].documentation[=].label = "Screening: Symptomatic"
* action[=].action.action[=].action[=].action[=].documentation[=].display = "Evaluation of the Cervix in Patients with Abnormal Vaginal Bleeding"
* action[=].action.action[=].action[=].action[=].documentation[=].citation = "ASCCP Clinical Practice Statement, \"Evaluation of the Cervix in Patients with Abnormal Vaginal Bleeding,\" 7 February 2017."
* action[=].action.action[=].action[=].action[=].documentation[=].url = "https://www.asccp.org/Assets/9d92e617-858f-43f3-af62-44adf76cfc67/636220616039000000/vaginal-bleeding-statement-final-02-06-17-pdf"
* action[=].action.action[=].action[=].action[=].documentation[+].type = #citation
* action[=].action.action[=].action[=].action[=].documentation[=].label = "Screening: DES Exposure"
* action[=].action.action[=].action[=].action[=].documentation[=].display = "Practice Bulletin No. 168: Cervical Cancer Screening and Prevention"
* action[=].action.action[=].action[=].action[=].documentation[=].citation = "\"Practice Bulletin No. 168: Cervical Cancer Screening and Prevention,\" Obstetrics and Gynecology, vol. 1284, no. 4, pp. e111-e130, 2016."
* action[=].action.action[=].action[=].action[=].documentation[=].url = "https://pubmed.ncbi.nlm.nih.gov/27661651/"
* action[=].action.action[=].action[=].action[=].documentation[+].type = #citation
* action[=].action.action[=].action[=].action[=].documentation[=].label = "Screening: DES Exposure"
* action[=].action.action[=].action[=].action[=].documentation[=].display = "Antenatal exposure to DES: Lessons Learned...Future Concerns"
* action[=].action.action[=].action[=].action[=].documentation[=].citation = "M. Rubin, \"Antenatal exposure to DES: Lessons Learned...Future Concerns,\" Obstetrical & Gynecological Survey, vol. 62, no. 8, pp. 548-555, 2007."
* action[=].action.action[=].action[=].action[=].documentation[=].url = "https://pubmed.ncbi.nlm.nih.gov/17634156/"
* action[=].action.action[=].action[=].action[=].documentation[+].type = #citation
* action[=].action.action[=].action[=].action[=].documentation[=].label = "Screening: Immunocompromised"
* action[=].action.action[=].action[=].action[=].documentation[=].display = "Guidelines for the prevention and treatment of opportunistic infections in adults and adolescents with HIV"
* action[=].action.action[=].action[=].action[=].documentation[=].citation = "Panel on Opportunistic Infections in Adults and Adolescents with HIV, \"Guidelines for the prevention and treatment of opportunistic infections in adults and adolescents with HIV: Recommendations from the CDC, the NIH, and the HIV Medicine Association of the Infectious Diseases Society of America,\" 29 November 2018."
* action[=].action.action[=].action[=].action[=].documentation[=].url = "https://clinicalinfo.hiv.gov/en/guidelines/adult-and-adolescent-opportunistic-infection/human-papillomavirus-disease"
* action[=].action.action[=].action[=].action[=].documentation[+].type = #citation
* action[=].action.action[=].action[=].action[=].documentation[=].label = "Screening: Immunocompromised"
* action[=].action.action[=].action[=].action[=].documentation[=].display = "Guidelines for Cervical Cancer Screening in Immunosuppressed Women Without HIV Infection"
* action[=].action.action[=].action[=].action[=].documentation[=].citation = "A.-B. Moscicki, L. Flowers, M. J. Huchko, M. E. Long, K. L. MacLaughlin, J. Murphy, L. B. Spiryda and M. A. Gold, \"Guidelines for Cervical Cancer Screening in Immunosuppressed Women Without HIV Infection,\" Journal of Lower Genital Tract Disease, vol. 23, no. 2, pp. 87-101, 2019."
* action[=].action.action[=].action[=].action[=].documentation[=].url = "https://pubmed.ncbi.nlm.nih.gov/30907775/"
* action[=].action.action[+].title = "Handle Errors"
* action[=].action.action[=].description = "Brief description of the action"
* action[=].action.action[=].textEquivalent = "Static text equivalent of the action, used if the dynamic aspects cannot be interpreted by the receiving system"
* action[=].action.action[=].condition.kind = #applicability
* action[=].action.action[=].condition.expression.language = #text/cql.identifier
* action[=].action.action[=].condition.expression.expression = "ErrorsHaveOccurred"
* action[=].action.action[=].condition.expression.reference = "Library/ScreeningLibrary|1.0"
* action[=].action.action[=].action[0].title = "Communicate Errors"
* action[=].action.action[=].action[=].description = "Description"
* action[=].action.action[=].action[=].textEquivalent = "Static text equivalent of the action, used if the dynamic aspects cannot be interpreted by the receiving system"
* action[=].action.action[=].action[=].definitionCanonical = "http://OUR-PLACEHOLDER-URL.com/ActivityDefinition/CommunicateErrors|1.0.0"
* action[=].action.action[=].action[=].dynamicValue.path = "payload[0].contentString"
* action[=].action.action[=].action[=].dynamicValue.expression.language = #text/cql.identifier
* action[=].action.action[=].action[=].dynamicValue.expression.expression = "Errors"
* action[=].action.action[=].action[=].dynamicValue.expression.reference = "Library/ScreeningLibrary|1.0"
* action[=].action.action[=].action[+].title = "Prompt for More Information"
* action[=].action.action[=].action[=].description = "Description"
* action[=].action.action[=].action[=].textEquivalent = "Static text equivalent of the action, used if the dynamic aspects cannot be interpreted by the receiving system"
* action[=].action.action[=].action[=].groupingBehavior = #visual-group
* action[=].action.action[=].action[=].selectionBehavior = #at-most-one
* action[=].action.action[=].action[=].action[0].definitionCanonical = "http://OUR-PLACEHOLDER-URL.com/Questionnaire/PertinentConditionQuestionnaire|1.0.0"
* action[=].action.action[=].action[=].action[+].definitionCanonical = "http://OUR-PLACEHOLDER-URL.com/Questionnaire/PertinentObservationQuestionnaire|1.0.0"
* action[=].action.action[=].action[=].action[+].definitionCanonical = "http://OUR-PLACEHOLDER-URL.com/Questionnaire/PertinentProcedureQuestionnaire|1.0.0"
* action[=].action.action[=].action[=].action[+].definitionCanonical = "http://OUR-PLACEHOLDER-URL.com/Questionnaire/ScreeningAndManagementHistoryQuestionnaire|1.0.0"
* action[=].action.action[=].action[=].action[+].definitionCanonical = "http://OUR-PLACEHOLDER-URL.com/Questionnaire/PertinentVaccinationQuestionnaire|1.0.0"
* action[+].title = "Cervical Cancer Management Actions"
* action[=].description = "Brief description of the action"
* action[=].textEquivalent = "Static text equivalent of the action, used if the dynamic aspects cannot be interpreted by the receiving system"
* action[=].documentation.type = #citation
* action[=].documentation.label = "ASCCP Recommendation"
* action[=].documentation.display = "ASCCP recommendation statement on cervical management (TODO: INSERT DATE HERE)"
* action[=].trigger.type = #named-event
* action[=].trigger.name = "encounter-start"
* action[=].condition.kind = #applicability
* action[=].condition.expression.language = #text/cql.identifier
* action[=].condition.expression.expression = "IsIncludedAndNotExcluded"
* action[=].condition.expression.reference = "Library/ManagementLibrary|1.0"
* action[=].action[0].title = "Display pertinent medical history"
* action[=].action[=].description = "DISPLAY data elements used in the Cervical Cancer Screening and Management Dashboard"
* action[=].action[=].textEquivalent = "Static text equivalent of the action, used if the dynamic aspects cannot be interpreted by the receiving system"
* action[=].action[=].definitionCanonical = "http://OUR-PLACEHOLDER-URL.com/ActivityDefinition/DisplayCervicalCancerMedicalHistory|1.0.0"
* action[=].action[+].title = "Management Recommendations"
* action[=].action[=].description = "Brief description of the action"
* action[=].action[=].textEquivalent = "Static text equivalent of the action, used if the dynamic aspects cannot be interpreted by the receiving system"
* action[=].action[=].condition.kind = #applicability
* action[=].action[=].condition.expression.language = #text/cql.identifier
* action[=].action[=].condition.expression.expression = "HasRecommendation"
* action[=].action[=].condition.expression.reference = "Library/ManagementLibrary|1.0"
* action[=].action[=].action[0].title = "Management Decision Aids"
* action[=].action[=].action[=].description = "Management Decision Aids"
* action[=].action[=].action[=].textEquivalent = "Management Decision Aids"
* action[=].action[=].action[=].definitionCanonical = "http://OUR-PLACEHOLDER-URL.com/ActivityDefinition/CervicalCancerDecisionAids|1.0.0"
* action[=].action[=].action[=].dynamicValue.path = "payload[0].contentString"
* action[=].action[=].action[=].dynamicValue.expression.language = #text/cql.identifier
* action[=].action[=].action[=].dynamicValue.expression.expression = "DecisionAidsString"
* action[=].action[=].action[=].dynamicValue.expression.reference = "Library/ManagementLibrary|1.0"
* action[=].action[=].action[=].documentation.type = #citation
* action[=].action[=].action[=].documentation.label = "Management"
* action[=].action[=].action[=].documentation.display = "2019 ASCCP Risk-Based Management Consensus Guidelines for Abnormal Cervical Cancer Screening Tests and Cancer Precursors"
* action[=].action[=].action[=].documentation.citation = "Perkins, Rebecca B. MD, MSc; Guido, Richard S. MD; Castle, Philip E. PhD; Chelmow, David MD; Einstein, Mark H. MD, MS; Garcia, Francisco MD, MPH; Huh, Warner K. MD; Kim, Jane J. PhD, MSc; Moscicki, Anna-Barbara MD; Nayar, Ritu MD; Saraiya, Mona MD, MPH; Sawaya, George F. MD; Wentzensen, Nicolas MD, PhD, MS; Schiffman, Mark MD, MPH; for the 2019 ASCCP Risk-Based Management Consensus Guidelines Committee. 2019 ASCCP Risk-Based Management Consensus Guidelines for Abnormal Cervical Cancer Screening Tests and Cancer Precursors. Journal of Lower Genital Tract Disease 24(2):p 102-131, April 2020. | DOI: 10.1097/LGT.0000000000000525"
* action[=].action[=].action[=].documentation.url = "https://www.asccp.org/management-guidelines"
* action[=].action[=].action[+].title = "Recommended Management Activities"
* action[=].action[=].action[=].description = "Recommended Management Activities"
* action[=].action[=].action[=].textEquivalent = "Recommended Management Activities"
* action[=].action[=].action[=].groupingBehavior = #visual-group
* action[=].action[=].action[=].selectionBehavior = #at-most-one
* action[=].action[=].action[=].action[0].title = "Colposcopy"
* action[=].action[=].action[=].action[=].condition.kind = #applicability
* action[=].action[=].action[=].action[=].condition.expression.language = #text/cql.identifier
* action[=].action[=].action[=].action[=].condition.expression.expression = "RecommendColposcopy"
* action[=].action[=].action[=].action[=].condition.expression.reference = "Library/ManagementLibrary|1.0"
* action[=].action[=].action[=].action[=].dynamicValue.path = "code"
* action[=].action[=].action[=].action[=].dynamicValue.expression.language = #text/cql.identifier
* action[=].action[=].action[=].action[=].dynamicValue.expression.expression = "ColposcopyOrderCode"
* action[=].action[=].action[=].action[=].dynamicValue.expression.reference = "Library/ManagementLibrary|1.0"
* action[=].action[=].action[=].action[=].definitionCanonical = "http://OUR-PLACEHOLDER-URL.com/ActivityDefinition/CervicalCancerManagementActivity|1.0.0"
* action[=].action[=].action[=].action[=].documentation.type = #citation
* action[=].action[=].action[=].action[=].documentation.label = "Management"
* action[=].action[=].action[=].action[=].documentation.display = "2019 ASCCP Risk-Based Management Consensus Guidelines for Abnormal Cervical Cancer Screening Tests and Cancer Precursors"
* action[=].action[=].action[=].action[=].documentation.citation = "Perkins, Rebecca B. MD, MSc; Guido, Richard S. MD; Castle, Philip E. PhD; Chelmow, David MD; Einstein, Mark H. MD, MS; Garcia, Francisco MD, MPH; Huh, Warner K. MD; Kim, Jane J. PhD, MSc; Moscicki, Anna-Barbara MD; Nayar, Ritu MD; Saraiya, Mona MD, MPH; Sawaya, George F. MD; Wentzensen, Nicolas MD, PhD, MS; Schiffman, Mark MD, MPH; for the 2019 ASCCP Risk-Based Management Consensus Guidelines Committee. 2019 ASCCP Risk-Based Management Consensus Guidelines for Abnormal Cervical Cancer Screening Tests and Cancer Precursors. Journal of Lower Genital Tract Disease 24(2):p 102-131, April 2020. | DOI: 10.1097/LGT.0000000000000525"
* action[=].action[=].action[=].action[=].documentation.url = "https://www.asccp.org/management-guidelines"
* action[=].action[=].action[=].action[+].title = "Surveillance"
* action[=].action[=].action[=].action[=].condition.kind = #applicability
* action[=].action[=].action[=].action[=].condition.expression.language = #text/cql.identifier
* action[=].action[=].action[=].action[=].condition.expression.expression = "RecommendSurveillance"
* action[=].action[=].action[=].action[=].condition.expression.reference = "Library/ManagementLibrary|1.0"
* action[=].action[=].action[=].action[=].dynamicValue.path = "code"
* action[=].action[=].action[=].action[=].dynamicValue.expression.language = #text/cql.identifier
* action[=].action[=].action[=].action[=].dynamicValue.expression.expression = "SurveillanceOrderCode"
* action[=].action[=].action[=].action[=].dynamicValue.expression.reference = "Library/ManagementLibrary|1.0"
* action[=].action[=].action[=].action[=].definitionCanonical = "http://OUR-PLACEHOLDER-URL.com/ActivityDefinition/CervicalCancerManagementActivity|1.0.0"
* action[=].action[=].action[=].action[=].documentation.type = #citation
* action[=].action[=].action[=].action[=].documentation.label = "Management"
* action[=].action[=].action[=].action[=].documentation.display = "2019 ASCCP Risk-Based Management Consensus Guidelines for Abnormal Cervical Cancer Screening Tests and Cancer Precursors"
* action[=].action[=].action[=].action[=].documentation.citation = "Perkins, Rebecca B. MD, MSc; Guido, Richard S. MD; Castle, Philip E. PhD; Chelmow, David MD; Einstein, Mark H. MD, MS; Garcia, Francisco MD, MPH; Huh, Warner K. MD; Kim, Jane J. PhD, MSc; Moscicki, Anna-Barbara MD; Nayar, Ritu MD; Saraiya, Mona MD, MPH; Sawaya, George F. MD; Wentzensen, Nicolas MD, PhD, MS; Schiffman, Mark MD, MPH; for the 2019 ASCCP Risk-Based Management Consensus Guidelines Committee. 2019 ASCCP Risk-Based Management Consensus Guidelines for Abnormal Cervical Cancer Screening Tests and Cancer Precursors. Journal of Lower Genital Tract Disease 24(2):p 102-131, April 2020. | DOI: 10.1097/LGT.0000000000000525"
* action[=].action[=].action[=].action[=].documentation.url = "https://www.asccp.org/management-guidelines"
* action[=].action[=].action[=].action[+].title = "Treatment"
* action[=].action[=].action[=].action[=].condition.kind = #applicability
* action[=].action[=].action[=].action[=].condition.expression.language = #text/cql.identifier
* action[=].action[=].action[=].action[=].condition.expression.expression = "RecommendTreatment"
* action[=].action[=].action[=].action[=].condition.expression.reference = "Library/ManagementLibrary|1.0"
* action[=].action[=].action[=].action[=].dynamicValue.path = "code"
* action[=].action[=].action[=].action[=].dynamicValue.expression.language = #text/cql.identifier
* action[=].action[=].action[=].action[=].dynamicValue.expression.expression = "TreatmentOrderCode"
* action[=].action[=].action[=].action[=].dynamicValue.expression.reference = "Library/ManagementLibrary|1.0"
* action[=].action[=].action[=].action[=].definitionCanonical = "http://OUR-PLACEHOLDER-URL.com/ActivityDefinition/CervicalCancerManagementActivity|1.0.0"
* action[=].action[=].action[=].action[=].documentation.type = #citation
* action[=].action[=].action[=].action[=].documentation.label = "Management"
* action[=].action[=].action[=].action[=].documentation.display = "2019 ASCCP Risk-Based Management Consensus Guidelines for Abnormal Cervical Cancer Screening Tests and Cancer Precursors"
* action[=].action[=].action[=].action[=].documentation.citation = "Perkins, Rebecca B. MD, MSc; Guido, Richard S. MD; Castle, Philip E. PhD; Chelmow, David MD; Einstein, Mark H. MD, MS; Garcia, Francisco MD, MPH; Huh, Warner K. MD; Kim, Jane J. PhD, MSc; Moscicki, Anna-Barbara MD; Nayar, Ritu MD; Saraiya, Mona MD, MPH; Sawaya, George F. MD; Wentzensen, Nicolas MD, PhD, MS; Schiffman, Mark MD, MPH; for the 2019 ASCCP Risk-Based Management Consensus Guidelines Committee. 2019 ASCCP Risk-Based Management Consensus Guidelines for Abnormal Cervical Cancer Screening Tests and Cancer Precursors. Journal of Lower Genital Tract Disease 24(2):p 102-131, April 2020. | DOI: 10.1097/LGT.0000000000000525"
* action[=].action[=].action[=].action[=].documentation.url = "https://www.asccp.org/management-guidelines"
* action[=].action[+].title = "Handle Errors"
* action[=].action[=].description = "Brief description of the action"
* action[=].action[=].textEquivalent = "Static text equivalent of the action, used if the dynamic aspects cannot be interpreted by the receiving system"
* action[=].action[=].condition.kind = #applicability
* action[=].action[=].condition.expression.language = #text/cql.identifier
* action[=].action[=].condition.expression.expression = "ErrorsHaveOccurred"
* action[=].action[=].condition.expression.reference = "Library/ManagementLibrary|1.0"
* action[=].action[=].action[0].title = "Communicate Errors"
* action[=].action[=].action[=].description = "Description"
* action[=].action[=].action[=].textEquivalent = "Static text equivalent of the action, used if the dynamic aspects cannot be interpreted by the receiving system"
* action[=].action[=].action[=].definitionCanonical = "http://OUR-PLACEHOLDER-URL.com/ActivityDefinition/CommunicateErrors|1.0.0"
* action[=].action[=].action[=].dynamicValue.path = "payload[0].contentString"
* action[=].action[=].action[=].dynamicValue.expression.language = #text/cql.identifier
* action[=].action[=].action[=].dynamicValue.expression.expression = "Errors"
* action[=].action[=].action[=].dynamicValue.expression.reference = "Library/ManagementLibrary|1.0"
* action[=].action[=].action[+].title = "Prompt for More Information"
* action[=].action[=].action[=].description = "Description"
* action[=].action[=].action[=].textEquivalent = "Static text equivalent of the action, used if the dynamic aspects cannot be interpreted by the receiving system"
* action[=].action[=].action[=].groupingBehavior = #visual-group
* action[=].action[=].action[=].selectionBehavior = #at-most-one
* action[=].action[=].action[=].action[0].definitionCanonical = "http://OUR-PLACEHOLDER-URL.com/Questionnaire/PertinentConditionQuestionnaire|1.0.0"
* action[=].action[=].action[=].action[+].definitionCanonical = "http://OUR-PLACEHOLDER-URL.com/Questionnaire/PertinentObservationQuestionnaire|1.0.0"
* action[=].action[=].action[=].action[+].definitionCanonical = "http://OUR-PLACEHOLDER-URL.com/Questionnaire/PertinentProcedureQuestionnaire|1.0.0"
* action[=].action[=].action[=].action[+].definitionCanonical = "http://OUR-PLACEHOLDER-URL.com/Questionnaire/ScreeningAndManagementHistoryQuestionnaire|1.0.0"
* action[=].action[=].action[=].action[+].definitionCanonical = "http://OUR-PLACEHOLDER-URL.com/Questionnaire/PertinentVaccinationQuestionnaire|1.0.0"