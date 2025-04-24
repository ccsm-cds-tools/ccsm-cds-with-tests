import { log } from "console";
import {
  readdirSync,
  readFileSync,
  writeFileSync,
  existsSync,
  mkdirSync,
} from "fs";
import { sep, join } from "path";
console.log("Running packager");

// Loop over the translated CQL ELM JSON files, encode them as base64, and
// overwrite the content strings in the corresponding Library resources.
// At the same time, save the unencoded ELM JSON off into .js files so it is
// easier for the dashboard to import them.
const inputPath = "cql";
const fshPath = join("fsh-tank", "input", "fsh");
const fhirPath = join("fsh-tank", "fsh-generated", "resources");
let exportBase = join("dist", "cql");
if (!existsSync(exportBase)) mkdirSync(exportBase, { recursive: true });
let files = readdirSync(inputPath);
for (const file of files) {
  if (/(\.json)$/.test(file)) {
    const contentString = readFileSync(inputPath + sep + file);
    // read the cql data for the elm
    const cql = readFileSync(inputPath + sep + file.replace(".json", ".cql"));
    // Create a .js version of the ELM .json file
    try {
      const varName = file.slice(0, -5).replace(/-/g, "v").replace(/\./g, "");
      const updatedContents = "export const " + varName + " = " + contentString;
      const jsFile = file.replace(".json", ".mjs");
      writeFileSync(join(exportBase, jsFile), updatedContents);
    } catch (e) {
      console.log(e);

      continue;
    }
    // Replace the base64 string in the corresponding library .fsh file
    const contentBase64 = Buffer.from(contentString).toString("base64");
    const fshFile = file.replace(".json", ".fsh");
    try {
      let outputContents = readFileSync(fshPath + sep + fshFile).toString();
      let lines = outputContents.split("\n");

      // Find the index of the line starting with '* description'
      const descriptionIndex = lines.findIndex((line) =>
        line.trim().startsWith("* description")
      );
      if (descriptionIndex !== -1) {
        lines = lines.slice(0, descriptionIndex + 1);
      }

      const updatedContents = `${lines.join('\n')}
* content[cqlContent].contentType = urn:ietf:bcp:13#text/cql "text/cql"
* content[cqlContent].data = "${cql.toString("base64")}"
* content[1].contentType = urn:ietf:bcp:13#application/elm+json "application/elm+json"
* content[1].data = "${contentBase64}"

`;

      writeFileSync(fshPath + sep + fshFile, updatedContents);
    } catch (e) {
      continue;
    }
    // Replace the base64 string in the corresponding library .json file
    const jsonFile = "Library-" + file;
    try {
      const outputContents = JSON.parse(
        readFileSync(fhirPath + sep + jsonFile).toString()
      );
      outputContents.content = [
        {
          contentType: "text/cql",
          data: cql.toString("base64"),
        },
        {
          contentType: "application/elm+json",
          data: contentBase64,
        },
      ];

      writeFileSync(
        fhirPath + sep + jsonFile,
        JSON.stringify(outputContents, null, 2)
      );
    } catch (e) {
      continue;
    }
  }
}

// Loop over all generated FHIR resources and convert them to js files.
files = readdirSync(fhirPath);
exportBase = join("dist", "fhir");
if (!existsSync(exportBase)) mkdirSync(exportBase, { recursive: true });
for (const file of files) {
  if (/(\.json)$/.test(file)) {
    const contentString = readFileSync(fhirPath + sep + file);
    // Create a .js version of the ELM .json file
    try {
      // Organize files by their resource type
      const resource = JSON.parse(contentString);
      const resourceType = resource.resourceType;
      const exportPath = join(exportBase, resourceType);
      if (!existsSync(exportPath)) mkdirSync(exportPath, { recursive: true });
      const varName = file.slice(0, -5).split("-")[1];
      const updatedContents = "export const " + varName + " = " + contentString;
      const jsFile = varName + ".js";
      writeFileSync(join(exportPath, jsFile), updatedContents);
    } catch (e) {
      continue;
    }
  }
}