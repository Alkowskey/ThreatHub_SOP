import FileUtils from "./utils/file.utils";
import { Asset, Platform, Vulnerability } from "./interfaces/input.interface";

import { InputData } from "./interfaces/input-data.interface";

import processAssetVulnerabilityPairs from "./assetVulnerabilityProcessor";
import {
  INVALID_INPUT_DATA_ERROR,
  UNABLE_TO_PROCESS_FILES_ERROR,
} from "./constants/error-messages";

async function main(
  vulnerabilitiesFilePath: string,
  assetsFilePath: string,
  platformsFilePath: string
) {
  try {
    // Read input files
    const [vulnerabilities, assets, platforms] = await Promise.all([
      FileUtils.readJsonFile<Vulnerability[]>(vulnerabilitiesFilePath),
      FileUtils.readJsonFile<Asset[]>(assetsFilePath),
      FileUtils.readJsonFile<Platform[]>(platformsFilePath),
    ]);

    if (!vulnerabilities || !assets || !platforms) {
      throw new Error(INVALID_INPUT_DATA_ERROR);
    }

    // Write output file
    const inputData: InputData = { vulnerabilities, assets, platforms };
    const pairs = processAssetVulnerabilityPairs(inputData);
    await FileUtils.writeJsonFile("output.json", pairs);

    console.log("Processing completed successfully!");
  } catch (err) {
    console.error("An error occurred:", err);
  }
}

// Parse command line arguments
const [vulnerabilitiesFile, assetsFile, platformsFile] = process.argv.slice(-3);

// Run the main function with provided file paths
main(vulnerabilitiesFile, assetsFile, platformsFile).catch(() => {
  console.log(UNABLE_TO_PROCESS_FILES_ERROR);
});
