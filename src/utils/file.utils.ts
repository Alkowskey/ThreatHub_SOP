import * as fse from "fs-extra";
import { AssetVulnerabilityPair } from "../interfaces/input-relations.interface";
import { FILE_READ_ERROR } from "../constants/error-messages";

export default class FileUtils {
  static async readJsonFile<T>(filePath: string): Promise<T> {
    try {
      const fileContent = await fse.readFile(filePath, "utf-8");
      return JSON.parse(fileContent) as T;
    } catch (error) {
      throw new Error(FILE_READ_ERROR);
    }
  }

  static async writeJsonFile(
    filePath: string,
    data: AssetVulnerabilityPair[]
  ): Promise<void> {
    await fse.writeFile(filePath, JSON.stringify(data, null, 2));
  }
}
