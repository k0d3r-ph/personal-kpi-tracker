import { KPI } from "../kpi";
import { KpiType } from "../kpiType";
export declare class KpiRepository {
    private registros;
    save(kpi: KPI): void;
    findAll(): KPI[];
    findByType(type: KpiType): KPI[];
    findByPeriod(start: Date, end: Date): KPI[];
}
//# sourceMappingURL=kpiRepository.d.ts.map