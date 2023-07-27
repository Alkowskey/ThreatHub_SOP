import FileUtils from "./utils/file.utils";
import { Asset, Platform, Vulnerability } from "./interfaces/input.interface";

async function main(
  vulnerabilitiesFilePath: string,
  assetsFilePath: string,
  platformsFilePath: string
) {
  try {
    // Read input files
    const [vulnerabilities, assets, platforms] = await Promise.all([
      FileUtils.readJsonFile<Vulnerability>(vulnerabilitiesFilePath),
      FileUtils.readJsonFile<Asset>(assetsFilePath),
      FileUtils.readJsonFile<Platform>(platformsFilePath),
    ]);

    console.log([vulnerabilities, assets, platforms]);

    // Write output file
    await FileUtils.writeJsonFile("output.json", vulnerabilities); // vulnerabilities just for testing

    console.log("Processing completed successfully!");
  } catch (err) {
    console.error("An error occurred:", err);
  }
}

// Parse command line arguments
const [, , vulnerabilitiesFile, assetsFile, platformsFile] = process.argv;

// Run the main function with provided file paths

console.log([vulnerabilitiesFile, assetsFile, platformsFile]);
main(vulnerabilitiesFile, assetsFile, platformsFile).catch(() => {
  console.log("Unable to process the files");
});
