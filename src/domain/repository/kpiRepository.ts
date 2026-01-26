import { KPI } from "../kpi";
import { KpiType } from "../kpiType";

export class KpiRepository {
  private registros: KPI[] = [];

  save(kpi: KPI): void {
    this.registros.push(kpi);
  }

  findAll(): KPI[] {
    return [...this.registros];
  }

  findByType(type: KpiType): KPI[] {
    return this.registros.filter((kpi) => kpi.name && type);
  }

  findByPeriod(start: Date, end: Date): KPI[] {
    return this.registros.filter((kpi) => kpi.date >= start && kpi.date <= end);
  }
}
