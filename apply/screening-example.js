import { readFileSync, writeFileSync } from 'fs';
import { applyPlan, simpleResolver } from 'encender';

// PlanDefintion resources
const screeningPlan = JSON.parse(readFileSync('fsh-tank/fsh-generated/resources/PlanDefinition-CervicalCancerScreening.json'));
const symptomaticScreeningPlan = JSON.parse(readFileSync('fsh-tank/fsh-generated/resources/PlanDefinition-CervicalCancerScreeningSymptomaticIndividuals.json'));
const desExposureScreeningPlan = JSON.parse(readFileSync('fsh-tank/fsh-generated/resources/PlanDefinition-CervicalCancerScreeningDesExposure.json'));
const immunocompromisedScreeningPlan = JSON.parse(readFileSync('fsh-tank/fsh-generated/resources/PlanDefinition-CervicalCancerScreeningImmunocompromisedIndividuals.json'));
const averageRiskScreeningPlan = JSON.parse(readFileSync('fsh-tank/fsh-generated/resources/PlanDefinition-CervicalCancerScreeningAverageRisk.json'));

// ActivityDefinition resources
const cytologyActivity = JSON.parse(readFileSync('fsh-tank/fsh-generated/resources/ActivityDefinition-CervicalCytologyScreeningRecommendation.json'));
const colposcopyActivity = JSON.parse(readFileSync('fsh-tank/fsh-generated/resources/ActivityDefinition-ColposcopyActivityDefinition.json'));
const errorActivity = JSON.parse(readFileSync('fsh-tank/fsh-generated/resources/ActivityDefinition-CommunicateErrors.json'));
const communicateActivity = JSON.parse(readFileSync('fsh-tank/fsh-generated/resources/ActivityDefinition-CommunicateUnstructuredRecommendations.json'));
const cotestActivity = JSON.parse(readFileSync('fsh-tank/fsh-generated/resources/ActivityDefinition-CotestingScreeningRecommendation.json'));
const dashboardActivity = JSON.parse(readFileSync('fsh-tank/fsh-generated/resources/ActivityDefinition-DisplayCervicalCancerMedicalHistory.json'));
const hpvActivity = JSON.parse(readFileSync('fsh-tank/fsh-generated/resources/ActivityDefinition-PrimaryHpvScreeningRecommendation.json'));
const surveillanceActivity = JSON.parse(readFileSync('fsh-tank/fsh-generated/resources/ActivityDefinition-SurveillanceActivityDefinition.json'));
const treatmentActivity = JSON.parse(readFileSync('fsh-tank/fsh-generated/resources/ActivityDefinition-TreatmentActivityDefinition.json'));

// Questionnaire resources
const provideMoreInformationQuestionnaire = JSON.parse(readFileSync('fsh-tank/fsh-generated/resources/Questionnaire-ProvideMoreInformation.json'));

// Bring in an example patient bundle from the test folder
const examplePatientBundle = JSON.parse(readFileSync('test/ScreeningAverageRisk/test_results/ScreeningAverageRiskLibrary_v1.0.0/bundles/Under_30_and_have_had_recent_cytology_test.json'));
const examplePatientResources = examplePatientBundle.entry.map(r => r.resource); // convert from bundle to flat array

// Read in ELM JSON representation of CDS logic
const elmJsonDependencyArray = [
  JSON.parse(readFileSync('cql/TopLevelScreeningLibrary.json')),
  JSON.parse(readFileSync('cql/ScreeningSymptomaticLibrary.json')),
  JSON.parse(readFileSync('cql/ScreeningDesExposureLibrary.json')),
  JSON.parse(readFileSync('cql/ScreeningImmunocompromisedLibrary.json')),
  JSON.parse(readFileSync('cql/ScreeningAverageRiskLibrary.json')),
  JSON.parse(readFileSync('cql/DashboardLibrary.json')),
  JSON.parse(readFileSync('cql/CCSMCommonFunctions.json')),
  JSON.parse(readFileSync('cql/CDSConnectCommonsforFHIRv401.json')),
];

// Reformat ELM JSON value set references to match what is expected by the 
// code service built into the cql execution engine
const elmJsonDependencies = elmJsonDependencyArray.reduce((acc, elm) => {
  let refs = elm?.library?.valueSets?.def;
  if (refs) {
    refs = refs.map(r => {
      return {
        ...r,
        id: r.id.split('/').pop()
      }
    });
    elm.library.valueSets.def = refs;
  }
  return {
    ...acc,
    [elm.library.identifier.id]: elm
  }
}, {});

// Read in cached value set JSON
let valueSetJson = JSON.parse(readFileSync('test/ScreeningAverageRisk/.vscache/valueset-db.json'));

// Reformat value sets to match format expected by code service built into the 
// cql execution engine.
valueSetJson = Object.keys(valueSetJson).reduce((acc,vs) => {
  return {
    ...acc,
    [vs]: {
      Latest: valueSetJson[vs]['Latest']['codes']
    }
  }
}, {});

// Put all FHIR resources into a single flat array
let fhirJsonArray = [
  screeningPlan,
  symptomaticScreeningPlan,
  desExposureScreeningPlan,
  immunocompromisedScreeningPlan,
  averageRiskScreeningPlan,
  cytologyActivity,
  colposcopyActivity,
  errorActivity,
  communicateActivity,
  cotestActivity,
  dashboardActivity,
  hpvActivity,
  surveillanceActivity,
  treatmentActivity,
  provideMoreInformationQuestionnaire,
  ...examplePatientResources
];

// Create resolver() function
const resolver = simpleResolver(fhirJsonArray);

// Specify patient reference
const patientId = examplePatientResources.filter(r => r.resourceType == 'Patient').map(p => p.id)[0];
const patientReference = 'Patient/' + patientId;

// Define aux object containing ELM JSON and value sets
const aux = {
  elmJsonDependencies,
  valueSetJson
};

// Run the $apply operations
const [CarePlan, RequestGroup, ...otherResources] = await applyPlan(screeningPlan, patientReference, resolver, aux);

// Concatenate all the resources created by $apply operation
let outputResources = [
  CarePlan,
  RequestGroup,
  otherResources
];

// Write them out to a file
writeFileSync('apply/screeningExampleOutput.json', JSON.stringify(outputResources));