"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.evalueStudyHours = evalueStudyHours;
const status_1 = require("../domain/status");
function evalueStudyHours(hours) {
    if (hours >= 7) {
        return status_1.Status.GREEN;
    }
    if (hours > 6) {
        return status_1.Status.YELLOW;
    }
    return status_1.Status.RED;
}
//# sourceMappingURL=studyRule.js.map