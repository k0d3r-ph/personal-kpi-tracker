"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const kpiEvaluator_1 = require("./domain/evaluator/kpiEvaluator");
const sleepValue = 6.5;
const waterValue = 3;
const status = (0, kpiEvaluator_1.evalueKpi)("sleep_hours", sleepValue);
const waterStatus = (0, kpiEvaluator_1.evalueKpi)("water_intake", waterValue);
console.log("Horas de sono:", sleepValue);
console.log("Status:", status);
console.log("Litros bebidos:", waterValue);
console.log("Status:", waterStatus);
//# sourceMappingURL=index.js.map