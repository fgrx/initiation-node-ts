import Analytics from "./analytics";

function displayWelcomeMessage(message: string, companyName: string): void {
  const dateObject = new Date();
  const todayDate = dateObject.toLocaleDateString();

  console.log(`\n\n`);

  console.log(
    `--------------------------Rapport du ${todayDate} de "${companyName}"--------------------------`
  );
}

const displayCloseMessage = function (message: string): void {
  console.log(
    `\n--------------------------${message}"--------------------------`
  );
};

const displayAnalytics = (analytics: Analytics): void => {
  console.log(`\n Nombre d'employés : ${analytics.getNumberOfEmployees()}`);
  console.log(
    `\n Salaire total des employés : ${analytics.getTotalSalaries()}`
  );

  const { inTrialPeriod, notInTrialPeriod } =
    analytics.getEmployeesInTrialPeriodOrNot();
  console.log(
    `\n Nombre d'employés en période d'essai :  ${inTrialPeriod.length}`
  );
  console.log(`\n Nombre d'employés titulaires :  ${notInTrialPeriod.length}`);
};

export { displayWelcomeMessage, displayCloseMessage, displayAnalytics };
