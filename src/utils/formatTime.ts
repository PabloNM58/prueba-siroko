export default function formatTime(time: number) {
  const minutes = Math.floor(time / 60);
  const secondsLeft = time % 60;
  return `${String(minutes).padStart(2, "0")}:${String(secondsLeft).padStart(
    2,
    "0"
  )}`;
}
