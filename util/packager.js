import { readdirSync, readFileSync, writeFileSync } from 'fs';

const inputPath = 'cql';
const outputPath = 'fsh-tank/input/fsh';

// Read the input path and find all the json files
const files = readdirSync(inputPath);
for (const file of files) {
  if (/(\.json)$/.test(file)) {
    const contentString = readFileSync(inputPath + '/' + file);
    const contentBase64 = Buffer.from(contentString).toString('base64');
    const fshFile = file.replace('.json','.fsh');
    try {
      const outputContents = readFileSync(outputPath + '/' + fshFile).toString();
      try {
        const updatedContents = outputContents.replace(
          /\* content\[\=\]\.data \= \".+\"/,
          '* content[=].data = \"' + contentBase64 + '\"'
        );
        writeFileSync(outputPath + '/' + fshFile, updatedContents);
      } catch(e) {
        console.log(e);
      }
    } catch(e) {
      console.log('No corresponding Library file for:', fshFile);
    }
  }
}