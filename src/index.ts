import { getFilesInFolder } from "./service/dataProvider";
import { displayCloseMessage, displayWelcomeMessage } from "./service/layout";

displayWelcomeMessage("Rapport sur les employés", "Ma petite entreprise");

// Affichage du rapport
getFilesInFolder("./employees");

displayCloseMessage("Fin du rapport");
