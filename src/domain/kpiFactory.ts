import { v4 as uuid } from "uuid";
import { KPI } from "./kpi";
import { Status } from "./status";
import { KpiType } from "./kpiType";
import { evalueKpi } from "./evaluator/kpiEvaluator";

export function createKpi(
  type: KpiType,
  name: string,
  value: number,
  date: Date = new Date(),
): KPI {
  const status: Status = evalueKpi(type, value);

  return {
    id: uuid(),
    name,
    value,
    date,
    status,
  };
}
