import VersionValidators from "./version.validators";

describe("Version Validators Tests", () => {
  describe("isValidVersion Tests", () => {
    it("Should return true if minVersion is lesser than maxVersion", () => {
      const resp = VersionValidators.isValidVersion("1.0.0", "2.0.0");
      expect(resp).toBe(true);
    });

    it("Should return false if minVersion is greater than maxVersion", () => {
      const resp = VersionValidators.isValidVersion("3.0.0", "2.0.0");
      expect(resp).toBe(false);
    });
  });

  describe("isAffectedVersion Tests", () => {
    it("Should return true if asset minVersion is in between vulnerability min and max version", () => {
      const resp = VersionValidators.isAffectedVersion(
        {
          platformId: "1",
          minVersion: "1.7.0",
          maxVersion: "3.0.0",
        },
        {
          platformId: "2",
          minVersion: "1.5.0",
          maxVersion: "2.5.0",
        }
      );
      expect(resp).toBe(true);
    });

    it("Should return false if asset minVersion is not in-between vulnerability min and max version", () => {
      const resp = VersionValidators.isAffectedVersion(
        {
          platformId: "1",
          minVersion: "1.1.0",
          maxVersion: "3.0.0",
        },
        {
          platformId: "2",
          minVersion: "1.5.0",
          maxVersion: "2.5.0",
        }
      );
      expect(resp).toBe(false);
    });

    it("Should return true if asset maxVersion is in between vulnerability min and max version", () => {
      const resp = VersionValidators.isAffectedVersion(
        {
          platformId: "1",
          minVersion: "1.1.0",
          maxVersion: "2.4.0",
        },
        {
          platformId: "2",
          minVersion: "1.5.0",
          maxVersion: "2.5.0",
        }
      );
      expect(resp).toBe(true);
    });

    it("Should return true if asset both versions are in between vulnerability min and max version", () => {
      const resp = VersionValidators.isAffectedVersion(
        {
          platformId: "1",
          minVersion: "1.6.0",
          maxVersion: "2.4.0",
        },
        {
          platformId: "2",
          minVersion: "1.5.0",
          maxVersion: "2.5.0",
        }
      );
      expect(resp).toBe(true);
    });

    it("Should return false if none of the versions are in between vulnerability min and max version", () => {
      const resp = VersionValidators.isAffectedVersion(
        {
          platformId: "1",
          minVersion: "1.0.0",
          maxVersion: "1.1.0",
        },
        {
          platformId: "2",
          minVersion: "1.5.0",
          maxVersion: "2.5.0",
        }
      );
      expect(resp).toBe(false);
    });
  });
});
