import type { Status } from "./status";

export interface KPI {
  id: string;
  name: string;
  value: number;
  date: Date;
  status: Status;
}
