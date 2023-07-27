import { PlatformRelation } from "../interfaces/input-relations.interface";

export default class InputValidators {
  static validatePlatformRelations(relations: PlatformRelation[]): boolean {
    return relations.every(
      (rel) => rel.platformId && rel.minVersion && rel.maxVersion
    );
  }
}
