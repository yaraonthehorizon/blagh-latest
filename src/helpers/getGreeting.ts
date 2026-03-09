export function getGreetingKey(date: Date = new Date()): string | null {
  // We use 'en-u-ca-islamic-umalqura-nu-latn' to ensure we get:
  // 1. The Umalqura calendar (standard for Saudi/most apps)
  // 2. Western Arabic numerals (0-9) for parsing
  // 3. Consistent numeric output regardless of the user's browser locale
  const h = new Date().getHours();
  if (h < 6) return "greeting.peace";
  if (h < 12) return "greeting.morning";
  if (h < 17) return "greeting.afternoon";
  if (h < 21) return "greeting.evening";
  return "greeting.peace";
}

export function getSpecialGreetingKey(date: Date = new Date()): string | null {
  const formatter = new Intl.DateTimeFormat(
    "en-u-ca-islamic-umalqura-nu-latn",
    {
      day: "numeric",
      month: "numeric",
    },
  );

  const parts = formatter.formatToParts(date);
  const monthPart = parts.find((p) => p.type === "month")?.value;
  const dayPart = parts.find((p) => p.type === "day")?.value;

  if (!monthPart || !dayPart) return null;

  const month = parseInt(monthPart, 10);
  const day = parseInt(dayPart, 10);

  if (month === 9) return "special_greeting.ramadan";
  if (month === 10 && day >= 1 && day <= 3) return "special_greeting.eid";
  if (month === 12 && day >= 10 && day <= 13) return "special_greeting.eid";

  return null;
}
