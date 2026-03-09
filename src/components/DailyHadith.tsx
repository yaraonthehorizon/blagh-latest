import { Quote } from "lucide-react";
import { useTranslation } from "react-i18next";

const DailyHadith = () => {
  const { t } = useTranslation();

  return (
    <div className="rounded-xl bg-card p-5 shadow-card">
      <div className="mb-3 flex items-center gap-2">
        <Quote className="h-4 w-4 text-accent" />
        <span className="text-xs font-semibold uppercase tracking-wider text-accent-foreground">
          {t("content.home.daily_hadith")}
        </span>
      </div>
      <p className="font-display text-sm leading-relaxed text-foreground">
        "The best of you are those who learn the Quran and teach it."
      </p>
      <p className="mt-2 text-xs text-muted-foreground">
        — Sahih al-Bukhari 5027
      </p>
    </div>
  );
};

export default DailyHadith;
