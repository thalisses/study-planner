export function timeToSeconds(time: string) {
  const [hours = "0", min = "0", seconds = "0"] = time.split(":");
  const hoursToSeconds = Number(hours) * 3600;
  const minToSeconds = Number(min) * 60;
  return hoursToSeconds + minToSeconds + Number(seconds);
}
