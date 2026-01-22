import { Status } from "../domain/status";

export function evalueStudyHours(hours: number): Status {
  if (hours >= 7) {
    return Status.GREEN;
  }

  if (hours > 6) {
    return Status.YELLOW;
  }

  return Status.RED;
}
