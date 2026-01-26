import { Status } from "../status";
import { evalueSleepHours } from "../../rules/sleepRule";
import { evalueWaterIntake } from "../../rules/waterRule";
import { evalueStudyHours } from "../../rules/studyRule";
import { evalueReadingMinutes } from "../../rules/readingRule";
import { KpiType } from "../kpiType";

type RuleFunction = (value: number) => Status;

const ruleMap: Record<KpiType, RuleFunction> = {
  [KpiType.SLEEP_HOURS]: evalueSleepHours,
  [KpiType.WATER_INTAKE]: evalueWaterIntake,
  [KpiType.STUDY_HOURS]: evalueStudyHours,
  [KpiType.READING_MINUTES]: evalueReadingMinutes,
};

export function evalueKpi(type: KpiType, value: number): Status {
  const rule = ruleMap[type];

  if (!rule) {
    throw new Error(`Regra não encontrada para o KPI: ${type}`);
  }

  return rule(value);
}
