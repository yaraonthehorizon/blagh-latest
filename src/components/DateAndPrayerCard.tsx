import { useMemo } from "react";
import { useTranslation } from "react-i18next";
import { usePrayerTimes } from "@/hooks/use-prayer-times";
import adab from "@/assets/categories/adab.png";

export function DateAndPrayerCard() {
  const { t, i18n } = useTranslation();
  const locale = i18n.language;
  const { nextPrayer } = usePrayerTimes();

  const { dayOfWeek, greg, hijri } = useMemo(() => {
    const date = new Date();
    const format = (options: Intl.DateTimeFormatOptions, calendar?: string) =>
      new Intl.DateTimeFormat(locale, { ...options, calendar }).format(date);

    return {
      dayOfWeek: format({ weekday: "long" }),
      greg: {
        month: format({ month: "long" }),
        day: format({ day: "numeric" }),
        year: format({ year: "numeric" }),
      },
      hijri: {
        month: format({ month: "long" }, "islamic-umalqura"),
        day: format({ day: "numeric" }, "islamic-umalqura"),
        year: format({ year: "numeric" }, "islamic-umalqura")
          .replace(/AH|هـ|ه/g, "")
          .trim(),
      },
    };
  }, [locale]);

  return (
    <div className="flex items-center justify-between rounded-xl bg-card px-4 py-4 shadow-card ">
      <div className="flex flex-col gap-2 justify-between ">
        <div className="flex flex-1 flex-col  justify-center gap-1">
          <span className="text-lg font-bold text-foreground">
            {dayOfWeek}, {greg.day} {greg.month}
          </span>
          <span className="text-xs font-semibold text-muted-foreground">
            {hijri.day} {hijri.month} {hijri.year}
          </span>
        </div>

        <div className="flex flex-1 flex-col  justify-center gap-1">
          <span className="text-lg font-bold text-foreground">
            {nextPrayer.time}
          </span>
          <span className="text-xs font-semibold text-muted-foreground">
            {nextPrayer.name}
          </span>
        </div>
      </div>
      <div className="px-4">
        <nextPrayer.icon className="h-20 w-20 text-primary" />
      </div>
    </div>
  );
}
