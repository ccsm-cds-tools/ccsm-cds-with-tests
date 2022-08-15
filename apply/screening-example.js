import { readFileSync, writeFileSync } from 'fs';
import { applyPlan, simpleResolver } from 'encender';

const CervicalCancerDecisionAids = JSON.parse(readFileSync('fsh-tank/fsh-generated/resources/ActivityDefinition-CervicalCancerDecisionAids.json'));
const CervicalCancerManagementActivity = JSON.parse(readFileSync('fsh-tank/fsh-generated/resources/ActivityDefinition-CervicalCancerManagementActivity.json'));
const CervicalCancerScreeningActivity = JSON.parse(readFileSync('fsh-tank/fsh-generated/resources/ActivityDefinition-CervicalCancerScreeningActivity.json'));
const CommunicateErrors = JSON.parse(readFileSync('fsh-tank/fsh-generated/resources/ActivityDefinition-CommunicateErrors.json'));
const DisplayCervicalCancerMedicalHistory = JSON.parse(readFileSync('fsh-tank/fsh-generated/resources/ActivityDefinition-DisplayCervicalCancerMedicalHistory.json'));
const DashboardLibrary = JSON.parse(readFileSync('fsh-tank/fsh-generated/resources/Library-DashboardLibrary.json'));
const ManagementLibrary = JSON.parse(readFileSync('fsh-tank/fsh-generated/resources/Library-ManagementLibrary.json'));
const OrderSetLibrary = JSON.parse(readFileSync('fsh-tank/fsh-generated/resources/Library-OrderSetLibrary.json'));
const ScreeningAverageRiskLibrary = JSON.parse(readFileSync('fsh-tank/fsh-generated/resources/Library-ScreeningAverageRiskLibrary.json'));
const ScreeningDesExposureLibrary = JSON.parse(readFileSync('fsh-tank/fsh-generated/resources/Library-ScreeningDesExposureLibrary.json'));
const ScreeningImmunocompromisedLibrary = JSON.parse(readFileSync('fsh-tank/fsh-generated/resources/Library-ScreeningImmunocompromisedLibrary.json'));
const ScreeningLibrary = JSON.parse(readFileSync('fsh-tank/fsh-generated/resources/Library-ScreeningLibrary.json'));
const ScreeningSymptomaticLibrary = JSON.parse(readFileSync('fsh-tank/fsh-generated/resources/Library-ScreeningSymptomaticLibrary.json'));
const CervicalCancerManagement = JSON.parse(readFileSync('fsh-tank/fsh-generated/resources/PlanDefinition-CervicalCancerManagement.json'));
const CervicalCancerManagementActions = JSON.parse(readFileSync('fsh-tank/fsh-generated/resources/PlanDefinition-CervicalCancerManagementActions.json'));
const CervicalCancerScreening = JSON.parse(readFileSync('fsh-tank/fsh-generated/resources/PlanDefinition-CervicalCancerScreening.json'));
const CervicalCancerScreeningActions = JSON.parse(readFileSync('fsh-tank/fsh-generated/resources/PlanDefinition-CervicalCancerScreeningActions.json'));
const CervicalCancerScreeningAndManagementClinicalDecisionSupport = JSON.parse(readFileSync('fsh-tank/fsh-generated/resources/PlanDefinition-CervicalCancerScreeningAndManagementClinicalDecisionSupport.json'));
const ProvideMoreInformation = JSON.parse(readFileSync('fsh-tank/fsh-generated/resources/Questionnaire-ProvideMoreInformation.json'));

// Bring in an example patient bundle from the test folder
const examplePatientBundle = JSON.parse(readFileSync('test/ScreeningAverageRisk/test_results/ScreeningAverageRiskLibrary_v1.0.0/bundles/Age_between_21_and_29_and_have_had_recent_cytology_test.json'));
const examplePatientResources = examplePatientBundle.entry.map(r => r.resource); // convert from bundle to flat array

// Read in ELM JSON representation of CDS logic
const elmJsonDependencyArray = [
  JSON.parse(readFileSync('cql/AutogeneratedRiskTables.json')),
  JSON.parse(readFileSync('cql/AutogeneratedTableLookup.json')),
  JSON.parse(readFileSync('cql/CCSMCommonFunctions.json')),
  JSON.parse(readFileSync('cql/CDSConnectCommonsforFHIRv401.json')),
  JSON.parse(readFileSync('cql/CollateManagementData.json')),
  JSON.parse(readFileSync('cql/DashboardLibrary.json')),
  JSON.parse(readFileSync('cql/FHIRHelpers-4.0.1.json')),
  JSON.parse(readFileSync('cql/ManageCommonAbnormality.json')),
  JSON.parse(readFileSync('cql/ManageRareAbnormality.json')),
  JSON.parse(readFileSync('cql/ManageSpecialPopulation.json')),
  JSON.parse(readFileSync('cql/ManagementLibrary.json')),
  JSON.parse(readFileSync('cql/OrderSetLibrary.json')),
  JSON.parse(readFileSync('cql/ScreeningAverageRiskLibrary.json')),
  JSON.parse(readFileSync('cql/ScreeningDesExposureLibrary.json')),
  JSON.parse(readFileSync('cql/ScreeningImmunocompromisedLibrary.json')),
  JSON.parse(readFileSync('cql/ScreeningLibrary.json')),
  JSON.parse(readFileSync('cql/ScreeningSymptomaticLibrary.json'))
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
  CervicalCancerDecisionAids,
  CervicalCancerManagementActivity,
  CervicalCancerScreeningActivity,
  CommunicateErrors,
  DisplayCervicalCancerMedicalHistory,
  DashboardLibrary,
  ManagementLibrary,
  OrderSetLibrary,
  ScreeningAverageRiskLibrary,
  ScreeningDesExposureLibrary,
  ScreeningImmunocompromisedLibrary,
  ScreeningLibrary,
  ScreeningSymptomaticLibrary,
  CervicalCancerManagement,
  CervicalCancerManagementActions,
  CervicalCancerScreening,
  CervicalCancerScreeningActions,
  CervicalCancerScreeningAndManagementClinicalDecisionSupport,
  ProvideMoreInformation,
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
const [CarePlan, RequestGroup, ...otherResources] = await applyPlan(CervicalCancerScreening, patientReference, resolver, aux);

// Concatenate all the resources created by $apply operation
let outputResources = [
  CarePlan,
  RequestGroup,
  otherResources
];

// Write them out to a file
writeFileSync('apply/screeningExampleOutput.json', JSON.stringify(outputResources));