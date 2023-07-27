import FileUtils from "./utils/file.utils";
import { Asset, Platform, Vulnerability } from "./interfaces/input.interface";
import InputValidators from "./validators/input.validators";
import { InputData } from "./interfaces/input-data.interface";
import {
  AssetVulnerabilityPair,
  PlatformRelation,
} from "./interfaces/input-relations.interface";
import VersionValidators from "./validators/version.validators";

function getCommonPlatform(
  assetRelations: PlatformRelation[],
  vulnerabilityRelations: PlatformRelation[],
  platforms: Platform[]
): string | undefined {
  const intersection = assetRelations.find((assetRel) =>
    vulnerabilityRelations.find(
      (vulnerabilityRel) =>
        assetRel.platformId === vulnerabilityRel.platformId &&
        VersionValidators.isValidVersion(
          assetRel.minVersion,
          assetRel.maxVersion
        ) &&
        VersionValidators.isValidVersion(
          vulnerabilityRel.minVersion,
          vulnerabilityRel.maxVersion
        ) &&
        VersionValidators.isAffectedVersion(assetRel, vulnerabilityRel)
    )
  );
  if (!intersection) return;
  return platforms.find((platform) => platform.id === intersection.platformId)
    ?.name;
}

function processAssetVulnerabilityPairs(
  inputData: InputData
): AssetVulnerabilityPair[] {
  const { vulnerabilities, assets, platforms } = inputData;

  const pairs: AssetVulnerabilityPair[] = assets.flatMap((asset) =>
    vulnerabilities.flatMap((vulnerability) => {
      const isValidAssetPlatformRel = InputValidators.validatePlatformRelations(
        asset.platformRelations
      );
      const isValidVulnerabilityPlatformRel =
        InputValidators.validatePlatformRelations(
          vulnerability.platformRelations
        );

      if (!isValidAssetPlatformRel || !isValidVulnerabilityPlatformRel)
        return [];

      const platformName = getCommonPlatform(
        asset.platformRelations,
        vulnerability.platformRelations,
        platforms
      );

      if (!platformName) return [];

      return {
        assetId: asset.id,
        vulnerabilityId: vulnerability.id,
        platformName,
      };
    })
  );

  return pairs;
}

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
const [, , vulnerabilitiesFile, assetsFile, platformsFile] = process.argv;

// Run the main function with provided file paths
main(vulnerabilitiesFile, assetsFile, platformsFile).catch(() => {
  console.log("Unable to process the files");
});
