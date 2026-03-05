import { Header } from "@/components/Header";
import {
  BookOpen,
  Flame,
  Moon,
  Bookmark,
  Gift,
  CreditCard,
  ChevronLeft,
  Users,
} from "lucide-react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { AppCard } from "@/components/AppCard";

export function Profile() {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();

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
    {
      label: t("content.profile.services.send_gift"),
      subtext: t("content.profile.services.send_gift_subtext"),
      icon: Gift,
      path: "/send-gift",
    },
    {
      label: t("content.profile.services.gift_card"),
      subtext: t("content.profile.services.gift_card_subtext"),
      icon: CreditCard,
      path: "/send-greeting",
    },
    {
      label: t("content.profile.services.quran_card"),
      subtext: t("content.profile.services.quran_card_subtext"),
      icon: BookOpen,
      path: "/send-quran-card",
    },
    {
      label: t("content.profile.services.companionship"),
      subtext: t("content.profile.services.companionship_subtext"),
      icon: Users,
      path: "/companionship",
    },
  ];

  return (
    <div className="page-container">
      <div className="page-content">
        <Header
          headerTitleKey="page_title.profile"
          className="text-3xl mt-2"
          backButton
        />
        <div className="grid grid-cols-2 gap-3 mb-6 mt-5">
          {stats.map((s) => (
            <AppCard key={s.label} className="">
              <s.icon className="mb-2 h-5 w-5 text-secondary" />
              <p className=" text-md font-bold text-foreground">{s.value}</p>
              <p className="text-xs text-muted-foreground">{s.label}</p>
            </AppCard>
          ))}
        </div>

        <div className="mb-6">
          <h2 className=" text-xl font-bold text-foreground mb-3">
            {t("content.profile.services.title")}
          </h2>
          <div className="flex sm:flex-col overflow-x-auto  gap-3 pb-4 -mx-6 px-6 no-scrollbar">
            {services.map((s) => (
              <AppCard
                key={s.label}
                onClick={() => navigate(s.path)}
                className="flex shrink-0 w-full items-center justify-between rounded-xl  transition-transform hover:scale-[1.01] active:scale-[0.99]"
              >
                <div className="flex items-center gap-4">
                  <div className="rounded-full bg-primary/10 p-3 text-primary">
                    <s.icon className="h-6 w-6" />
                  </div>
                  <div className="text-start">
                    <p className="text-lg font-bold text-foreground">
                      {s.label}
                    </p>
                    <p className="text-xs text-muted-foreground">{s.subtext}</p>
                  </div>
                </div>
                <ChevronLeft
                  className={`h-5 w-5 text-muted-foreground ${i18n.dir() === "rtl" ? "" : "rotate-180"}`}
                />
              </AppCard>
            ))}
          </div>
        </div>
        {/* 
        <AppCard className="flex flex-col rounded-xl p-5 smb-4">
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
        </AppCard> */}

        <AppCard className="flex flex-col items-start ">
          <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">
            {t("content.profile.weekly_insight")}
          </p>
          <p className=" text-sm italic text-foreground leading-relaxed">
            {t("content.profile.insight_text")}
          </p>
        </AppCard>
      </div>
    </div>
  );
}
