import Analytics from "./services/analytics";
import {
  getFilesContentInJson,
  getFilesInFolder,
} from "./services/dataProvider";
import {
  displayAnalytics,
  displayCloseMessage,
  displayWelcomeMessage,
} from "./services/layout";

displayWelcomeMessage("Rapport sur les employés", "Ma petite entreprise");

// Affichage du rapport
const employeesFolder = "./employees";

const files = getFilesInFolder(employeesFolder);
const filesContent = getFilesContentInJson(employeesFolder, files);

const analytics = new Analytics(filesContent);

displayAnalytics(analytics);

displayCloseMessage("Fin du rapport");
