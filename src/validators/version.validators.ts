import { PlatformRelation } from "../interfaces/input-relations.interface";

export default class VersionValidators {
  static isValidVersion(minVersion: string, maxVersion: string): boolean {
    //just really basic validation
    return this.isLesserOrEqualVersion(minVersion, maxVersion);
  }

  static isAffectedVersion(
    assetRelation: PlatformRelation,
    vulnerabilittyRelation: PlatformRelation
  ): boolean {
    //check if the asset min version is in between the vulnerability min and max version
    if (
      this.isGreaterOrEqualVersion(
        assetRelation.minVersion,
        vulnerabilittyRelation.minVersion
      ) &&
      this.isLesserOrEqualVersion(
        assetRelation.minVersion,
        vulnerabilittyRelation.maxVersion
      )
    )
      return true;

    //check if the asset max version is in between the vulnerability min and max version
    if (
      this.isGreaterOrEqualVersion(
        assetRelation.maxVersion,
        vulnerabilittyRelation.minVersion
      ) &&
      this.isLesserOrEqualVersion(
        assetRelation.maxVersion,
        vulnerabilittyRelation.maxVersion
      )
    )
      return true;

    return false;
  }

  private static isGreaterOrEqualVersion(
    assetVersion: string,
    vulnerabilityVersion: string
  ): boolean {
    const {
      major: assetMajor,
      minor: assetMinor,
      patch: assetPatch,
    } = this.getVersionParts(assetVersion);
    const {
      major: vulnMajor,
      minor: vulnMinor,
      patch: vulnPatch,
    } = this.getVersionParts(vulnerabilityVersion);

    if (assetMajor < vulnMajor) return false;
    if (assetMajor === vulnMajor && assetMinor < vulnMinor) return false;
    if (
      assetMajor === vulnMajor &&
      assetMinor === vulnMinor &&
      assetPatch < vulnPatch
    )
      return false;

    return true;
  }

  private static isLesserOrEqualVersion(
    assetVersion: string,
    vulnerabilityVersion: string
  ): boolean {
    const {
      major: assetMajor,
      minor: assetMinor,
      patch: assetPatch,
    } = this.getVersionParts(assetVersion);
    const {
      major: vulnMajor,
      minor: vulnMinor,
      patch: vulnPatch,
    } = this.getVersionParts(vulnerabilityVersion);

    if (assetMajor > vulnMajor) return false;
    if (assetMajor === vulnMajor && assetMinor > vulnMinor) return false;
    if (
      assetMajor === vulnMajor &&
      assetMinor === vulnMinor &&
      assetPatch > vulnPatch
    )
      return false;

    return true;
  }

  private static getVersionParts(version: string): {
    major: number;
    minor: number;
    patch: number;
  } {
    const [major, minor, patch] = version
      .split(".")
      .map(parseInt)
      .map((n) => (isNaN(n) ? 0 : n));
    return {
      major: major,
      minor: minor,
      patch: patch,
    };
  }
}
