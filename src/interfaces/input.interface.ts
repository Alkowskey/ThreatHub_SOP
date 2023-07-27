import { PlatformRelation } from "./input-relations.interface";

export interface Vulnerability {
  id: string;
  name: string;
  platformRelations: PlatformRelation[];
}

export interface Asset {
  id: string;
  name: string;
  platformRelations: PlatformRelation[];
}

export interface Platform {
  id: string;
  name: string;
}
