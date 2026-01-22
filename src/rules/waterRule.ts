import { Status } from "../domain/status";

export function evalueWaterIntake(liters: number): Status {
  if (liters >= 2.5) {
    return Status.GREEN;
  }

  if (liters > 2) {
    return Status.YELLOW;
  }

  return Status.RED;
}
