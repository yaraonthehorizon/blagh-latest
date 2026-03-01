import { useTranslation } from "react-i18next";

export function CurrentDateCard() {
  const { i18n } = useTranslation();
  const date = new Date();
  const locale = i18n.language;

  const dayOfWeek = new Intl.DateTimeFormat(locale, { weekday: "long" }).format(
    date,
  );

  // Gregorian
  const gregMonth = new Intl.DateTimeFormat(locale, { month: "long" }).format(
    date,
  );
  const gregDay = new Intl.DateTimeFormat(locale, { day: "numeric" }).format(
    date,
  );
  const gregYear = new Intl.DateTimeFormat(locale, { year: "numeric" }).format(
    date,
  );

  // Hijri
  const hijriMonth = new Intl.DateTimeFormat(locale, {
    calendar: "islamic-umalqura",
    month: "long",
  }).format(date);
  const hijriDay = new Intl.DateTimeFormat(locale, {
    calendar: "islamic-umalqura",
    day: "numeric",
  }).format(date);
  const hijriYear = new Intl.DateTimeFormat(locale, {
    calendar: "islamic-umalqura",
    year: "numeric",
  })
    .format(date)
    .replace(/AH|هـ|ه/g, "")
    .trim(); // Remove "AH and ه" suffix

  return (
    <div className="flex flex-col rounded-xl bg-card p-5 shadow-card text-center">
      <h2 className="text-2xl text-primary mb-4 border-b border-border pb-2">
        {dayOfWeek}
      </h2>

      <div className="flex items-stretch justify-center divide-x divide-border rtl:divide-x-reverse">
        <div className="flex flex-1 flex-col items-center justify-center space-y-1 px-2">
          <span className="text-sm font-medium text-primary">{hijriMonth}</span>
          <span className="text-3xl font-bold text-foreground ">
            {hijriDay}
          </span>

          <span className="text-sm text-muted-foreground border-t border-border">
            {hijriYear}
          </span>
        </div>

        <div className="flex flex-1 flex-col items-center justify-center space-y-1 px-2">
          <span className="text-sm font-medium text-primary">{gregMonth}</span>
          <span className="text-3xl font-bold text-foreground">{gregDay}</span>
          <span className="text-sm text-muted-foreground border-t border-border">
            {gregYear}
          </span>
        </div>
      </div>
    </div>
  );
}
