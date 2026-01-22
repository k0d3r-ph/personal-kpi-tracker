import { Status } from "../domain/status";

export function evalueReadingMinutes(minutes: number): Status {
  if (minutes >= 30) {
    return Status.GREEN;
  }

  if (minutes >= 15) {
    return Status.YELLOW;
  }

  return Status.RED;
}
