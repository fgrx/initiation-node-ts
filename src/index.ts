import {
  getFilesContentInJson,
  getFilesInFolder,
} from "./service/dataProvider";
import { displayCloseMessage, displayWelcomeMessage } from "./service/layout";

displayWelcomeMessage("Rapport sur les employés", "Ma petite entreprise");

// Affichage du rapport
const employeesFolder = "./employees";

const files = getFilesInFolder(employeesFolder);
const filesContent = getFilesContentInJson(employeesFolder, files);
console.log(filesContent);

displayCloseMessage("Fin du rapport");
