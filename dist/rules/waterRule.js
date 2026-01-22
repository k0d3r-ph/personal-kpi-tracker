"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.evalueWaterIntake = evalueWaterIntake;
const status_1 = require("../domain/status");
function evalueWaterIntake(liters) {
    if (liters >= 2.5) {
        return status_1.Status.GREEN;
    }
    if (liters > 2) {
        return status_1.Status.YELLOW;
    }
    return status_1.Status.RED;
}
//# sourceMappingURL=waterRule.js.map