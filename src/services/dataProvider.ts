import fs from "fs";
import { Employee } from "../interfaces/iEmployee";

const getFilesInFolder = (folder: string): string[] => {
  try {
    const files = fs.readdirSync(`./${folder}`);
    return files;
  } catch (error) {
    console.error("Erreur : pas de dossier trouvé", error);
    return [];
  }
};

function getFilesContentInJson<T>(folder: string, files: string[]): T[] {
  const employeesData: T[] = [];

  files.forEach((file) => {
    const path = completeFilePath(folder, file);

    try {
      const content = fs.readFileSync(path, "utf8");
      const contentInJSON = JSON.parse(content);
      employeesData.push(contentInJSON);
    } catch (error) {
      console.error(`${path} : Problème avec le fichier`, error);
    }
  });
  return employeesData;
}

const completeFilePath = (folder: string, file: string) =>
  `./${folder}/${file}`;

export { getFilesInFolder, getFilesContentInJson };
