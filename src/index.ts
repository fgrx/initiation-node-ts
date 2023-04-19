import Analytics from "./services/analytics";
import {
  getFilesContentInJson,
  getFilesInFolder,
} from "./services/dataProvider";
import { displayCloseMessage, displayWelcomeMessage } from "./services/layout";

displayWelcomeMessage("Rapport sur les employés", "Ma petite entreprise");

// Affichage du rapport
const employeesFolder = "./employees";

const files = getFilesInFolder(employeesFolder);
const filesContent = getFilesContentInJson(employeesFolder, files);

const analytics = new Analytics(filesContent);

console.log(`\n Nombre d'employés : ${analytics.getNumberOfEmployees()}`);
console.log(`\n Salaire total des employés : ${analytics.getTotalSalaries()}`);

const { inTrialPeriod, notInTrialPeriod } =
  analytics.getEmployeesInTrialPeriodOrNot();
console.log(
  `\n Nombre d'employés en période d'essai :  ${inTrialPeriod.length}`
);
console.log(`\n Nombre d'employés titulaires :  ${notInTrialPeriod.length}`);

displayCloseMessage("Fin du rapport");
