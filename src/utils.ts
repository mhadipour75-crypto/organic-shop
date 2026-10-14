const persianDigits = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];

export function toPersianNumber(value: number | string): string {
  return String(value).replace(/[0-9]/g, (d) => persianDigits[parseInt(d)]);
}

export function formatPrice(value: number): string {
  const formatted = value.toLocaleString("en-US");
  return toPersianNumber(formatted);
}

export function generateOrderId(): string {
  const num = Math.floor(10000 + Math.random() * 90000);
  return `ORD-${toPersianNumber(num)}`;
}

export function toEnglishDigits(value: string): string {
  const persianMap: Record<string, string> = {
    "۰": "0", "۱": "1", "۲": "2", "۳": "3", "۴": "4",
    "۵": "5", "۶": "6", "۷": "7", "۸": "8", "۹": "9",
  };
  return value.replace(/[۰-۹]/g, (d) => persianMap[d] ?? d);
}
