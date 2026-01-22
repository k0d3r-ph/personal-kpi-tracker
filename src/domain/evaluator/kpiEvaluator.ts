import { Status } from "../status";
import { evalueSleepHours } from "../../rules/sleepRule";
import { evalueWaterIntake } from "../../rules/waterRule";
import { evalueStudyHours } from "../../rules/studyRule";
import { evalueReadingMinutes } from "../../rules/readingRule";

type RuleFunction = (value: number) => Status;

const ruleMap: Record<string, RuleFunction> = {
  sleep_hours: evalueSleepHours,
  water_intake: evalueWaterIntake,
  study_hours: evalueStudyHours,
  reading_minutes: evalueReadingMinutes,
};

export function evalueKpi(type: string, value: number): Status {
  const rule = ruleMap[type];

  if (!rule) {
    throw new Error(`Regra não encontrada para o KPI: ${type}`);
  }

  return rule(value);
}
