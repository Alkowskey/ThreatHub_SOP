import { Asset, Platform, Vulnerability } from "./input.interface";

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

export interface InputData {
  vulnerabilities: Vulnerability[];
  assets: Asset[];
  platforms: Platform[];
}
