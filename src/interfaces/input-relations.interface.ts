export interface PlatformRelation {
  platformId: string;
  minVersion: string;
  maxVersion: string;
}

export interface AssetVulnerabilityPair {
  assetId: string;
  vulnerabilityId: string;
  platformName: string;
}
