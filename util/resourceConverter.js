import { ScreeningAndManagementTestType } from "./ValueSet/ScreeningAndManagementTestType";
import { ScreeningAndManagementHistoryQuestionnaire } from "./Questionnaire/ScreeningAndManagementHistoryQuestionnaire";
import { PertinentProcedureShortList } from "./ValueSet/PertinentProcedureShortList";
import { PertinentConditionShortList } from "./ValueSet/PertinentConditionShortList";
import { PertinentObservationShortList } from "./ValueSet/PertinentObservationShortList";
import { QualifierValuesShortList } from "./ValueSet/QualifierValuesShortList";
import { PertinentVaccinationShortList } from "./ValueSet/PertinentVaccinationShortList";

export function resourceConverter(questionnaireResponse, patientReference, getIncrementalId) {

  let resources = [];

  const linkIds = questionnaireResponse.item.map(itm => itm.linkId);

  if (linkIds.includes('test-date')) {

    const testDate = questionnaireResponse.item
      .filter(itm => itm.linkId === 'test-date')
      .flatMap(itm => itm.answer)
      [0].valueDate;

    let existingId = questionnaireResponse.item
      .filter(itm => itm.linkId === 'diagnostic-report-to-amend')
      .flatMap(itm => itm.answer);
    
    if (existingId.length > 0) existingId = existingId[0]?.valueString;
    else existingId = null;

    let codeConclusionPair = [];
    const testTypes = questionnaireResponse.item.filter(itm => itm.linkId === 'test-type').map(itm => itm.answer)[0];
    testTypes.forEach(tt => {

      const coding = tt.valueCoding;

      const shortHandDisplay = ScreeningAndManagementTestType.compose.include[0].concept
        .filter(cpt => cpt.code === coding.code)
        .map(cpt => cpt.display)[0];
      
      const linkId = ScreeningAndManagementHistoryQuestionnaire.item
        .filter(itm => itm?.enableWhen?.filter(ew => ew?.answerString === shortHandDisplay)?.length > 0)
        .map(itm => itm?.linkId)[0];

      const conclusion = questionnaireResponse.item
        .filter(itm => itm.linkId === linkId)
        .flatMap(itm => itm.answer)[0].valueCoding;
      
      codeConclusionPair.push({code: coding, conclusion: conclusion});

    });

    codeConclusionPair.forEach(ccp => {
      let id = getIncrementalId();
      resources.push({
        resourceType: 'DiagnosticReport',
        id: existingId ?? id,
        identifier: [
          {
            use: ["secondary"],
            system: "http://OUR-PLACEHOLDER-URL.com",
            value: id
          }
        ],
        status: "amended",
        subject: {
          reference: patientReference
        },
        effectiveDateTime: testDate + 'T00:00:00.000Z',
        code: {
          coding: [
            ccp.code
          ]
        },
        conclusionCode: [{
          coding: [ccp.conclusion]
        }]
      })
    });
  
  } else if (linkIds.includes('procedure-date')) {

    const procedureDate = questionnaireResponse.item
      .filter(itm => itm.linkId === 'procedure-date')
      .flatMap(itm => itm.answer)
      [0].valueDate;

    let coding = questionnaireResponse.item
      .filter(itm => itm.linkId === 'procedure-type')
      .flatMap(itm => itm.answer)
      [0].valueCoding;

    const display = PertinentProcedureShortList.compose.include[0].concept
      .filter(cpt => cpt.code === coding.code)
      .map(cpt => cpt.designation[0].value)[0];

    coding.display = display;

    let existingId = questionnaireResponse.item
      .filter(itm => itm.linkId === 'procedure-to-amend')
      .flatMap(itm => itm.answer);
    
    if (existingId.length > 0) existingId = existingId[0]?.valueString;
    else existingId = null;
    let id = getIncrementalId();

    resources.push({
      resourceType: 'Procedure',
      id: existingId ?? id,
      identifier: [
        {
          use: ["secondary"],
          system: "http://OUR-PLACEHOLDER-URL.com",
          value: id
        }
      ],
      status: "completed",
      subject: {
        reference: patientReference
      },
      performedDateTime: procedureDate + 'T00:00:00.000Z',
      code: {
        coding: [coding],
        text: coding.display
      }
    });

  } else if (linkIds.includes('condition-date')) {

    const conditionDate = questionnaireResponse.item
      .filter(itm => itm.linkId === 'condition-date')
      .flatMap(itm => itm.answer)
      [0].valueDate;

    let coding = questionnaireResponse.item
      .filter(itm => itm.linkId === 'condition-type')
      .flatMap(itm => itm.answer)
      [0].valueCoding;

    const concepts = [
      PertinentConditionShortList.compose.include[0].concept,
      PertinentConditionShortList.compose.include[1].concept
    ].flat();

    const display = concepts
      .filter(cpt => cpt.code === coding.code)
      .map(cpt => cpt.designation[0].value)[0];

    coding.display = display;

    let existingId = questionnaireResponse.item
      .filter(itm => itm.linkId === 'condition-to-amend')
      .flatMap(itm => itm.answer);
    
    if (existingId.length > 0) existingId = existingId[0]?.valueString;
    else existingId = null;
    let id = getIncrementalId();

    resources.push({
      resourceType: 'Condition',
      id: existingId ?? id,
      identifier: [
        {
          use: ["secondary"],
          system: "http://OUR-PLACEHOLDER-URL.com",
          value: id
        }
      ],
      clinicalStatus: {
        coding: [{
          code: "active",
          system: "http://terminology.hl7.org/CodeSystem/condition-clinical"
        }]
      },
      verificationStatus: {
        coding: [{
          code: "confirmed",
          system: "http://terminology.hl7.org/CodeSystem/condition-ver-status"
        }]
      },
      subject: {
        reference: patientReference
      },
      onsetDateTime: conditionDate + 'T00:00:00.000Z',
      code: {
        coding: [coding],
        text: coding.display
      }
    });

  } else if (linkIds.includes('observation-date')) {

    const observationDate = questionnaireResponse.item
      .filter(itm => itm.linkId === 'observation-date')
      .flatMap(itm => itm.answer)
      [0].valueDate;

    let coding = questionnaireResponse.item
      .filter(itm => itm.linkId === 'observation-type')
      .flatMap(itm => itm.answer)
      [0].valueCoding;

    const display = PertinentObservationShortList.compose.include[0].concept
      .filter(cpt => cpt.code === coding.code)
      .map(cpt => cpt.designation[0].value)[0];

    let valueCoding = questionnaireResponse.item
      .filter(itm => itm.linkId === 'observation-value')
      .flatMap(itm => itm.answer)
      [0].valueCoding;

    const concepts = QualifierValuesShortList.compose.include[0].concept;

    const valueDisplay = concepts
      .filter(cpt => cpt.code === valueCoding.code)
      .map(cpt => cpt.designation[0].value)[0];

    valueCoding.display = valueDisplay;

    coding.display = display;

    let existingId = questionnaireResponse.item
      .filter(itm => itm.linkId === 'observation-to-amend')
      .flatMap(itm => itm.answer);
    
    if (existingId.length > 0) existingId = existingId[0]?.valueString;
    else existingId = null;
    let id = getIncrementalId();

    resources.push({
      resourceType: 'Observation',
      id: existingId ?? id,
      identifier: [
        {
          use: ["secondary"],
          system: "http://OUR-PLACEHOLDER-URL.com",
          value: id
        }
      ],
      status: "final",
      subject: {
        reference: patientReference
      },
      effectiveDateTime: observationDate + 'T00:00:00.000Z',
      code: {
        coding: [coding],
        text: coding.display
      },
      valueCodeableConcept: {
        coding: [valueCoding],
        text: valueCoding.display
      },
    });

  } else if (linkIds.includes('immunization-date')) {

    const immunizationDate = questionnaireResponse.item
      .filter(itm => itm.linkId === 'immunization-date')
      .flatMap(itm => itm.answer)
      [0].valueDate;

    let coding = questionnaireResponse.item
      .filter(itm => itm.linkId === 'immunization-type')
      .flatMap(itm => itm.answer)
      [0].valueCoding;

    const display = PertinentVaccinationShortList.compose.include[0].concept
      .filter(cpt => cpt.code === coding.code)
      .map(cpt => cpt.designation[0].value)[0];

    coding.display = display;

    let existingId = questionnaireResponse.item
      .filter(itm => itm.linkId === 'immunization-to-amend')
      .flatMap(itm => itm.answer);
    
    if (existingId.length > 0) existingId = existingId[0]?.valueString;
    else existingId = null;
    let id = getIncrementalId();

    resources.push({
      resourceType: 'Immunization',
      id: existingId ?? id,
      identifier: [
        {
          use: ["secondary"],
          system: "http://OUR-PLACEHOLDER-URL.com",
          value: id
        }
      ],
      status: "completed",
      subject: {
        reference: patientReference
      },
      occurrenceDateTime: immunizationDate + 'T00:00:00.000Z',
      vaccineCode: {
        coding: [coding],
        text: coding.display
      }
    });

  }

  return resources;

}

