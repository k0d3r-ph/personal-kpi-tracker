import { Status } from "../status";
import { evalueSleepHours } from "../../rules/sleepRule";

type RuleFunction = (value: number) => Status;

const ruleMap: Record<string, RuleFunction> = {
  sleep_hours: evalueSleepHours,
};

export function evalueKpi(type: string, value: number): Status {
  const rule = ruleMap[type];

  if (!rule) {
    throw new Error(`Regra não encontrada para o KPI: ${type}`);
  }

  return rule(value);
}
