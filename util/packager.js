import { readdirSync, readFileSync, writeFileSync, existsSync, mkdirSync } from 'fs';
import { sep, join } from 'path';

// Loop over the translated CQL ELM JSON files, encode them as base64, and 
// overwrite the content strings in the corresponding Library resources.
// At the same time, save the unencoded ELM JSON off into .js files so it is 
// easier for the dashboard to import them.
const inputPath = 'cql';
const fshPath = join('fsh-tank','input','fsh');
const fhirPath = join('fsh-tank','fsh-generated','resources');
let exportBase = join('dist','cql');
if (!existsSync(exportBase)) mkdirSync(exportBase, {recursive: true});
let files = readdirSync(inputPath);
for (const file of files) {
  if (/(\.json)$/.test(file)) {
    const contentString = readFileSync(inputPath + sep + file);
    // Create a .js version of the ELM .json file
    try {
      const varName = file.slice(0,-5).replace(/-/g,'v').replace(/\./g,'');
      const updatedContents = 'export const ' + 
        varName + 
        ' = ' +
        contentString;
      const jsFile = file.replace('.json','.mjs');
      writeFileSync(join(exportBase,jsFile), updatedContents);
    } catch(e) {
      continue;
    }
    // Replace the base64 string in the corresponding library .fsh file
    const contentBase64 = Buffer.from(contentString).toString('base64');
    const fshFile = file.replace('.json','.fsh');
    try {
      const outputContents = readFileSync(fshPath + sep + fshFile).toString();
      const updatedContents = outputContents.replace(
        /\* content\[\=\]\.data \= \".+\"/,
        '* content[=].data = \"' + contentBase64 + '\"'
      );
      writeFileSync(fshPath + sep + fshFile, updatedContents);
    } catch(e) {
      continue;
    }
    // Replace the base64 string in the corresponding library .json file
    const jsonFile = 'Library-' + file;
    try {
      const outputContents = readFileSync(fhirPath + sep + jsonFile).toString();
      const updatedContents = outputContents.replace(
        /\"data\": \".+\"/,
        '\"data\": \"' + contentBase64 + '\"'
      );
      writeFileSync(fhirPath + sep + jsonFile, updatedContents);
    } catch(e) {
      continue;
    }
  }
}

// Loop over all generated FHIR resources and convert them to js files.
files = readdirSync(fhirPath);
exportBase = join('dist','fhir');
if (!existsSync(exportBase)) mkdirSync(exportBase, {recursive: true});
for (const file of files) {
  if (/(\.json)$/.test(file)) {
    const contentString = readFileSync(fhirPath + sep + file);
    // Create a .js version of the ELM .json file
    try {
      // Organize files by their resource type
      const resource = JSON.parse(contentString);
      const resourceType = resource.resourceType;
      const exportPath = join(exportBase,resourceType);
      if (!existsSync(exportPath)) mkdirSync(exportPath, {recursive: true});
      const varName = file.slice(0,-5).split('-')[1];
      const updatedContents = 'export const ' + 
        varName + 
        ' = ' +
        contentString;
      const jsFile = varName + '.js';
      writeFileSync(join(exportPath,jsFile), updatedContents);
    } catch(e) {
      continue;
    }
  }
}
