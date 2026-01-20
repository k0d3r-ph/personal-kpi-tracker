"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.evalueKpi = evalueKpi;
const sleepRule_1 = require("../../rules/sleepRule");
const ruleMap = {
    sleep_hours: sleepRule_1.evalueSleepHours,
};
function evalueKpi(type, value) {
    const rule = ruleMap[type];
    if (!rule) {
        throw new Error(`Regra não encontrada para o KPI: ${type}`);
    }
    return rule(value);
}
//# sourceMappingURL=kpiEvaluator.js.map