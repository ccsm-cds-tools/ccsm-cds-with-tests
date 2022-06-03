import { readdirSync, readFileSync, writeFileSync, existsSync, mkdirSync } from 'fs';

// Loop over the translated CQL ELM JSON files, encode them as base64, and 
// overwrite the content strings in the corresponding Library resources.
// At the same time, save the unencoded ELM JSON off into .js files so it is 
// easier for the dashboard to import them.
const inputPath = 'cql';
const outputPath = 'fsh-tank/input/fsh';
const exportPath = inputPath + '/export';
const files = readdirSync(inputPath);
for (const file of files) {
  if (/(\.json)$/.test(file)) {
    const contentString = readFileSync(inputPath + '/' + file);
    // Create a .js version of the .json file
    if (!existsSync(exportPath)) mkdirSync(exportPath);
    try {
      const varName = file.slice(0,-5).replace(/-/g,'v').replace(/\./g,'');
      const updatedContents = 'export const ' + 
      varName + 
        ' = ' +
        contentString;
      const jsFile = file.replace('.json','.js');
      writeFileSync(inputPath + '/export/' + jsFile, updatedContents);
    } catch(e) {
      continue;
    }
    // Replace the base64 string in the corresponding library file
    const contentBase64 = Buffer.from(contentString).toString('base64');
    const fshFile = file.replace('.json','.fsh');
    try {
      const outputContents = readFileSync(outputPath + '/' + fshFile).toString();
      const updatedContents = outputContents.replace(
        /\* content\[\=\]\.data \= \".+\"/,
        '* content[=].data = \"' + contentBase64 + '\"'
      );
      writeFileSync(outputPath + '/' + fshFile, updatedContents);
    } catch(e) {
      continue;
    }
  }
}