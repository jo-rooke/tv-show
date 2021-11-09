export default function formatNum(number: number): string {
  const formattedNum = number.toString().padStart(2, "0");
  return formattedNum;
}
