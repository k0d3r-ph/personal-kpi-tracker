import { createKpi } from "./domain/kpiFactory";
import { KpiType } from "./domain/kpiType";
import { KpiRepository } from "./domain/repository/kpiRepository";

const repository = new KpiRepository();

const sleepKpi = createKpi(KpiType.SLEEP_HOURS, "Horas de sono", 6.5);
const waterKpi = createKpi(KpiType.WATER_INTAKE, "Consumo de água", 3);

repository.save(sleepKpi);
repository.save(waterKpi);

console.log(repository.findAll());
