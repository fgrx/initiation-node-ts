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

export { displayWelcomeMessage, displayCloseMessage };
