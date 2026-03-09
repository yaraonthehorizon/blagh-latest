import { BookOpen } from "lucide-react";
import { useTranslation } from "react-i18next";

const DailyVerse = () => {
  const { t } = useTranslation();
  return (
    <div className="rounded-xl bg-card p-5 shadow-card">
      <div className="mb-3 flex items-center gap-2">
        <BookOpen className="h-4 w-4 text-secondary" />
        <span className="text-xs font-semibold uppercase tracking-wider text-secondary">
          {t("content.home.daily_verse")}
        </span>
      </div>
      <p className="mb-3 text-right font-arabic text-2xl leading-loose text-foreground">
        إِنَّ مَعَ الْعُسْرِ يُسْرًا
      </p>
      <p className="font-display text-sm italic text-muted-foreground">
        "Indeed, with hardship comes ease."
      </p>
      <p className="mt-1 text-xs text-muted-foreground">
        — Surah Ash-Sharh (94:6)
      </p>
    </div>
  );
};

export default DailyVerse;
