export default function generateCode(year: string, sentence: string) {
  const yearLastTwoDigits = Number(year) % 1000;

  const digit = Math.floor(yearLastTwoDigits / 10) + (yearLastTwoDigits % 10);

  const lastFourValidChars = [...sentence]
    .reverse()
    .filter(
      (char) =>
        /[b-zB-Z0-9\u00C0-\u017F]/.test(char) && char.toLowerCase() !== "a"
    )
    .slice(0, 4)
    .reverse()
    .join("")
    .toUpperCase();
  return `${digit}${lastFourValidChars}`;
}
