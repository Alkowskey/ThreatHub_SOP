import * as fse from "fs-extra";
import { Asset, Platform, Vulnerability } from "../interfaces/input.interface";

export default class FileUtils {
  static async readJsonFile<T>(filePath: string): Promise<T> {
    const fileContent = await fse.readFile(filePath, "utf-8");
    return JSON.parse(fileContent) as T;
  }

  static async writeJsonFile(
    filePath: string,
    data: Vulnerability | Asset | Platform
  ): Promise<void> {
    await fse.writeFile(filePath, JSON.stringify(data, null, 2));
  }
}
