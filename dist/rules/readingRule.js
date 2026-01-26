"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.evalueReadingMinutes = evalueReadingMinutes;
const status_1 = require("../domain/status");
function evalueReadingMinutes(minutes) {
    if (minutes >= 30) {
        return status_1.Status.GREEN;
    }
    if (minutes >= 15) {
        return status_1.Status.YELLOW;
    }
    return status_1.Status.RED;
}
//# sourceMappingURL=readingRule.js.map