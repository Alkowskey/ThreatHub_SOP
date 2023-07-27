import { Asset, Platform, Vulnerability } from "./input.interface";

export interface InputData {
  vulnerabilities: Vulnerability[];
  assets: Asset[];
  platforms: Platform[];
}
