"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.evalueKpi = evalueKpi;
const sleepRule_1 = require("../../rules/sleepRule");
const waterRule_1 = require("../../rules/waterRule");
const studyRule_1 = require("../../rules/studyRule");
const readingRule_1 = require("../../rules/readingRule");
const kpiType_1 = require("../kpiType");
const ruleMap = {
    [kpiType_1.KpiType.SLEEP_HOURS]: sleepRule_1.evalueSleepHours,
    [kpiType_1.KpiType.WATER_INTAKE]: waterRule_1.evalueWaterIntake,
    [kpiType_1.KpiType.STUDY_HOURS]: studyRule_1.evalueStudyHours,
    [kpiType_1.KpiType.READING_MINUTES]: readingRule_1.evalueReadingMinutes,
};
function evalueKpi(type, value) {
    const rule = ruleMap[type];
    if (!rule) {
        throw new Error(`Regra não encontrada para o KPI: ${type}`);
    }
    return rule(value);
}
//# sourceMappingURL=kpiEvaluator.js.map