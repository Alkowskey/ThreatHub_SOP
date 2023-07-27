import { PlatformRelation } from "../interfaces/input-relations.interface";
import InputValidators from "./input.validators";

describe("Input Validators Tests", () => {
  test("Should return true if input is valid", () => {
    const input: PlatformRelation[] = [
      {
        platformId: "1",
        minVersion: "1.0.0",
        maxVersion: "2.0.0",
      },
      {
        platformId: "2",
        minVersion: "1.0.0",
        maxVersion: "2.0.0",
      },
    ];
    const resp = InputValidators.validatePlatformRelations(input);
    expect(resp).toBe(true);
  });
});
