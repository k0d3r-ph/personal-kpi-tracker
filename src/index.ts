import { evalueKpi } from "./domain/evaluator/kpiEvaluator";
import { Status } from "./domain/status";

const sleepValue = 6.5;

const status = evalueKpi("sleep_hours", sleepValue);

console.log("Horas de sono:", sleepValue);
console.log("Status:", status);
