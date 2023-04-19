import { Employee } from "../interfaces/iEmployee";

class Analytics {
  constructor(public employees: Employee[]) {}

  getNumberOfEmployees(): number {
    return this.employees.length;
  }

  getTotalSalaries(): number {
    return this.employees.reduce(
      (salary: number, employee) => salary + employee.salary,
      0
    );
  }

  getEmployeesInTrialPeriodOrNot(): {
    inTrialPeriod: Employee[];
    notInTrialPeriod: Employee[];
  } {
    const getByTrialPeriod = (isInTrialPeriod: boolean) =>
      this.employees.filter(
        (employee) => employee.trialPeriod === isInTrialPeriod
      );

    const inTrialPeriod = getByTrialPeriod(true);
    const notInTrialPeriod = getByTrialPeriod(false);
    return { inTrialPeriod, notInTrialPeriod };
  }
}

export default Analytics;
