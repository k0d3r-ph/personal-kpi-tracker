import { evalueKpi } from "./domain/evaluator/kpiEvaluator";
import { Status } from "./domain/status";

const sleepValue = 6.5;
const waterValue = 3;

const status = evalueKpi("sleep_hours", sleepValue);
const waterStatus = evalueKpi("water_intake", waterValue);

console.log("Horas de sono:", sleepValue);
console.log("Status:", status);

console.log("Litros bebidos:", waterValue);
console.log("Status:", waterStatus);
