"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const kpiFactory_1 = require("./domain/kpiFactory");
const kpiType_1 = require("./domain/kpiType");
const kpiRepository_1 = require("./domain/repository/kpiRepository");
const repository = new kpiRepository_1.KpiRepository();
const sleepKpi = (0, kpiFactory_1.createKpi)(kpiType_1.KpiType.SLEEP_HOURS, "Horas de sono", 6.5);
const waterKpi = (0, kpiFactory_1.createKpi)(kpiType_1.KpiType.WATER_INTAKE, "Consumo de água", 3);
repository.save(sleepKpi);
repository.save(waterKpi);
console.log(repository.findAll());
//# sourceMappingURL=index.js.map