"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const kpiEvaluator_1 = require("./domain/evaluator/kpiEvaluator");
const sleepValue = 6.5;
const status = (0, kpiEvaluator_1.evalueKpi)("sleep_hours", sleepValue);
console.log("Horas de sono:", sleepValue);
console.log("Status:", status);
//# sourceMappingURL=index.js.map