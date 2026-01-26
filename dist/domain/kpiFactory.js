"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createKpi = createKpi;
const uuid_1 = require("uuid");
const kpiEvaluator_1 = require("./evaluator/kpiEvaluator");
function createKpi(type, name, value, date = new Date()) {
    const status = (0, kpiEvaluator_1.evalueKpi)(type, value);
    return {
        id: (0, uuid_1.v4)(),
        name,
        value,
        date,
        status,
    };
}
//# sourceMappingURL=kpiFactory.js.map