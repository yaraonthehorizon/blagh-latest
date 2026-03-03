import { Header } from "@/components/Header";
import {
  BookOpen,
  Flame,
  Moon,
  Bookmark,
  Settings,
  Gift,
  CreditCard,
} from "lucide-react";
import { useTranslation } from "react-i18next";

const MySpace = () => {
  const { t } = useTranslation();

  const stats = [
    {
      label: t("content.profile.stats.reading_streak"),
      value: "7 days",
      icon: Flame,
    },
    {
      label: t("content.profile.stats.pages_read"),
      value: "142",
      icon: BookOpen,
    },
    {
      label: t("content.profile.stats.athkar_today"),
      value: "3/5",
      icon: Moon,
    },
    {
      label: t("content.profile.stats.saved_items"),
      value: "24",
      icon: Bookmark,
    },
  ];

  const services = [
    { label: t("content.profile.services.send_gift"), icon: Gift },
    { label: t("content.profile.services.gift_card"), icon: CreditCard },
    { label: t("content.profile.services.quran_card"), icon: BookOpen },
  ];

  return (
    <div className="min-h-screen bg-background px-5 pb-24 ">
      <div className="relative px-6 pb-8  max-w-lg mx-auto">
        <Header headerTitleKey="page_title.profile" className="text-primary" />
        <div className="grid grid-cols-2 gap-3 mb-6">
          {stats.map((s) => (
            <div key={s.label} className="rounded-xl bg-card p-4 shadow-card">
              <s.icon className="mb-2 h-5 w-5 text-secondary" />
              <p className=" text-xl font-bold text-foreground">{s.value}</p>
              <p className="text-xs text-muted-foreground">{s.label}</p>
            </div>
          ))}
        </div>

        <div className="mb-6">
          <h2 className=" text-lg font-bold text-foreground mb-3">
            {t("content.profile.services.title")}
          </h2>
          <div className="grid grid-cols-3 gap-3">
            {services.map((s) => (
              <button
                key={s.label}
                className="flex flex-col items-center justify-center rounded-xl bg-card p-3 shadow-card transition-transform hover:scale-[1.02] active:scale-[0.98]"
              >
                <div className="mb-2 rounded-full bg-primary/10 p-2.5 text-primary">
                  <s.icon className="h-5 w-5" />
                </div>
                <span className="text-xs font-medium text-foreground text-center leading-tight">
                  {s.label}
                </span>
              </button>
            ))}
          </div>
        </div>

        <div className="rounded-xl bg-card p-5 shadow-card mb-4">
          <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">
            {t("content.profile.khatmah_progress")}
          </p>
          <div className="mb-2 flex items-center justify-between">
            <span className="text-sm font-medium text-foreground">
              {t("content.profile.juz_progress")}
            </span>
            <span className="text-sm font-semibold text-secondary">17%</span>
          </div>
          <div className="h-2 rounded-full bg-muted overflow-hidden">
            <div
              className="h-full rounded-full gradient-spiritual"
              style={{ width: "17%" }}
            />
          </div>
        </div>

        <div className="rounded-xl bg-card p-5 shadow-card">
          <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">
            {t("content.profile.weekly_insight")}
          </p>
          <p className=" text-sm italic text-foreground leading-relaxed">
            {t("content.profile.insight_text")}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MySpace;
