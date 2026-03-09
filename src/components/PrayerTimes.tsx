import { useTranslation } from "react-i18next";
import { usePrayerTimes } from "@/hooks/use-prayer-times";

export function PrayerTimes() {
  const { t } = useTranslation();
  const { nextPrayerIndex, timeRemaining, prayers } = usePrayerTimes();

  return (
    <div className="w-full overflow-x-hidden pb-4 pt-2">
      <div className="flex gap-3 px-1">
        {prayers.map((prayer, index) => {
          const isNext = index === nextPrayerIndex;
          const [time, period] = prayer.time.split(" ");
          const Icon = prayer.icon;
          return (
            <div
              key={prayer.name}
              className={`
                relative flex min-w-[100px] flex-1 flex-col items-center justify-center rounded-2xl py-4 px-3 transition-all duration-300
                ${
                  isNext
                    ? "bg-primary text-primary-foreground shadow-[0_0_20px_hsl(var(--primary)/0.5)] scale-105 ring-1 ring-primary-foreground/20"
                    : "bg-card text-foreground shadow-sm border border-border/50 opacity-80"
                }
              `}
            >
              <Icon
                className={`mb-1 h-6 w-6 ${
                  isNext ? "text-primary-foreground" : "text-primary"
                }`}
              />
              <p
                className={`text-xs font-medium uppercase tracking-wider ${isNext ? "opacity-90" : "text-muted-foreground"}`}
              >
                {prayer.name}
              </p>
              <p className="mt-1 font-display text-xl font-bold tracking-tight leading-none">
                {time}
              </p>
              <p
                className={`text-[10px] font-medium ${isNext ? "opacity-80" : "text-muted-foreground"}`}
              >
                {isNext ? (
                  <span className="animate-pulse">- {timeRemaining}</span>
                ) : (
                  period
                )}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
