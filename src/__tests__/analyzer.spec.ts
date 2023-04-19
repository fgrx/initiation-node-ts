import { describe, expect, beforeEach, it } from "vitest";

import { Employee } from "../interfaces/iEmployee";
import Analytics from "../services/analytics";

const datas: Employee[] = [
  {
    id: "ALf96FV",
    firstname: "Léa",
    lastname: "Dumond",
    salary: 58000,
    job: "CEO",
    trialPeriod: true,
  },
  {
    id: "PO5fdII",
    firstname: "Romain",
    lastname: "Santos",
    salary: 48000,
    job: "commercial",
    trialPeriod: false,
  },
];

describe(">>>>>>>>>>analyzer class", () => {
  let analyzer: Analytics;

  beforeEach(() => {
    analyzer = new Analytics(datas);
  });

  it("should return total salaries", () => {
    const expected = 106000;

    const result = analyzer.getTotalSalaries();

    expect(result).toBe(expected);
  });

  it("should return employee in trial period or not", () => {
    const { inTrialPeriod, notInTrialPeriod } =
      analyzer.getEmployeesInTrialPeriodOrNot();

    expect(inTrialPeriod[0]).toStrictEqual(datas[0]); //pour les objets
    expect(notInTrialPeriod[0]).toStrictEqual(datas[1]); //pour les objets
  });
});
