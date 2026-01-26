"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.KpiRepository = void 0;
class KpiRepository {
    registros = [];
    save(kpi) {
        this.registros.push(kpi);
    }
    findAll() {
        return [...this.registros];
    }
    findByType(type) {
        return this.registros.filter((kpi) => kpi.name && type);
    }
    findByPeriod(start, end) {
        return this.registros.filter((kpi) => kpi.date >= start && kpi.date <= end);
    }
}
exports.KpiRepository = KpiRepository;
//# sourceMappingURL=kpiRepository.js.map