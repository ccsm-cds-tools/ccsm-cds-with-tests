import fs from 'fs';
import path from 'path';
import axios from 'axios';
import { fileURLToPath } from 'url';

// Get the __dirname equivalent in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const inputDir = path.join(__dirname, '../cql');
const outputDir = path.join(__dirname, '../cql/libraries');

// Ensure the output directory exists
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir);
}

// Read all files in the input directory
const files = fs.readdirSync(inputDir);

// Group `.cql` and `.json` files into pairs
const filePairs = files.reduce((acc, file) => {
  const ext = path.extname(file);
  const baseName = path.basename(file, ext);

  if (ext === '.cql' || ext === '.json') {
    if (!acc[baseName]) {
      acc[baseName] = {};
    }
    acc[baseName][ext] = path.join(inputDir, file);
  }
  return acc;
}, {});

// Process each file pair
Object.entries(filePairs).forEach(([baseName, filePaths]) => {
  const { '.cql': cqlFile, '.json': jsonFile } = filePaths;

  if (cqlFile && jsonFile) {
    try {
      // Read and base64 encode the content of both files
      const cqlContent = fs.readFileSync(cqlFile, 'utf8');
      const jsonContent = fs.readFileSync(jsonFile, 'utf8');

      const newContent = [
        {
          contentType: "text/cql",
          data: Buffer.from(cqlContent).toString('base64'),
        },
        {
          contentType: "application/elm+json",
          data: Buffer.from(jsonContent).toString('base64'),
        },
      ];

      // Read the existing library JSON file
      const libraryFilePath = path.join(outputDir, `Library-${baseName}.json`);
      let libraryData = {};

      if (fs.existsSync(libraryFilePath)) {
        libraryData = JSON.parse(fs.readFileSync(libraryFilePath, 'utf8'));
      }

      // Update the content element
      libraryData.content = newContent;

      // Write the updated JSON back to the file
      fs.writeFileSync(libraryFilePath, JSON.stringify(libraryData, null, 2));
      console.log(`Updated library JSON: ${libraryFilePath}`);
    } catch (err) {
      console.error(`Error processing files for base name "${baseName}":`, err);
    }
  } else {
    console.warn(`Skipping unmatched files for base name "${baseName}"`);
  }
});


// Directory containing JSON files
const directoryPath = path.join(__dirname, '../cql/libraries');

// Endpoint to which JSON files will be POSTed
const endpoint = 'http://localhost:8080/fhir';

// Function to iterate through the directory and POST JSON files
async function postJsonFiles(directory, url) {
    try {
        // Read the directory
        const files = fs.readdirSync(directory);

        // Iterate over each file
        for (const file of files) {
            const filePath = path.join(directory, file);

            // Check if the file is a JSON file
            if (path.extname(file).toLowerCase() === '.json') {
                console.log(`Processing file: ${file}`);

                // Read the file contents
                const data = fs.readFileSync(filePath, 'utf-8');

                // Parse JSON and POST to the endpoint
                try {
                    const jsonData = JSON.parse(data);
                    if(jsonData.entry) {
                        jsonData.entry.forEach(async (entry) => {
                            const resource = entry.resource
                            putUrl = url + '/' + resource.resourceType + '/' + resource.id;
                            const response = await axios.put(putUrl, resource);
                            console.log(`Successfully posted ${file}:`, response.statusText);
                        })
                    } else {
                        const putUrl = url + '/' + jsonData.resourceType + '/' + jsonData.id;
                        const response = await axios.put(putUrl, jsonData);
                        console.log(`Successfully posted ${file}:`, response.statusText);
                    }
                } catch (error) {
                    console.error(`Error posting ${file}:`, error.message);
                }
            } else {
                console.log(`Skipping non-JSON file: ${file}`);
            }
        }
    } catch (error) {
        console.error('Error reading directory or processing files:', error.message);
    }
}

// Run the function
postJsonFiles(directoryPath, endpoint);
