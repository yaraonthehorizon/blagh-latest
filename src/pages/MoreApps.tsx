import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { BookOpen, Gift, Send, Users, Baby, Book, Feather } from "lucide-react";
import { Header } from "@/components/Header";
import { Card } from "@/components/ui/card";
import { AppCard } from "@/components/AppCard";

export function MoreApps() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const items = [
    {
      title: t("page_title.qibla"),
      path: "/qibla",
      icon: (
        <svg
          width="32"
          height="32"
          viewBox="0 0 48 48"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <circle cx="24" cy="24" r="18" />
          <circle cx="24" cy="24" r="2.5" fill="currentColor" stroke="none" />
        </svg>
      ),
      description: t("content.more_apps.qibla_subtext"),
    },
    {
      title: t("page_title.duaa"),
      path: "/duaa",
      icon: (
        <svg
          width="32"
          height="32"
          viewBox="0 0 48 48"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M15 34L15 20Q15 16 18 16Q21 16 21 20L21 29" />
          <path d="M21 25Q21 19 24 19Q27 19 27 25L27 29" />
        </svg>
      ),
      description: t("content.more_apps.duaa_subtext"),
    },
    {
      title: t("page_title.tsbeeh"),
      path: "/tsbeeh",
      icon: (
        <svg
          width="32"
          height="32"
          viewBox="0 0 48 48"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <circle cx="24" cy="16" r="4" />
          <circle cx="36" cy="22" r="3.5" />
          <circle cx="38" cy="34" r="3.5" />
        </svg>
      ),
      description: t("content.more_apps.tsbeeh_subtext"),
    },
    {
      title: t("page_title.calendar"),
      path: "/calendar",
      icon: (
        <svg
          width="32"
          height="32"
          viewBox="0 0 48 48"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <rect x="7" y="26" width="34" height="16" rx="1" />
          <path d="M7 26Q7 18 15 18Q15 11 24 9Q33 11 33 18Q41 18 41 26" />
        </svg>
      ),
      description: t("content.more_apps.calendar_subtext"),
    },
    {
      title: t("page_title.athkar"),
      path: "/athkar",
      icon: (
        <svg
          width="32"
          height="32"
          viewBox="0 0 48 48"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <circle cx="24" cy="24" r="17" />
          <circle cx="24" cy="24" r="12" />
          <path d="M20 28L20 20L24 18L28 20L28 28" />
        </svg>
      ),
      description: t("content.more_apps.athkar_subtext"),
    },
  ];

  return (
    <div className="page-container">
      <div className="page-content">
        <Header
          headerTitleKey="page_title.more_apps"
          backButton
          className="text-lg mt-1"
        />
        <div className="grid gap-4 mt-6 ">
          {items.map((item, index) => (
            <AppCard
              key={index}
              onClick={() => navigate(item.path)}
              className="bg-surface text-background border border-bdr-p rounded-[22px] p-5 shadow flex items-center gap-4 cursor-pointer transition-transform active:scale-95 animate-fade-up"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="w-12 h-12 rounded-full bg-surface2 flex items-center justify-center shrink-0 text-primary2">
                {item.icon}
              </div>
              <div className="flex flex-col justify-center ">
                <h3 className="text-md font-bold text-foreground">
                  {item.title}
                </h3>
                <p className="text-xs text-muted-foreground">
                  {item.description}
                </p>
              </div>
            </AppCard>
          ))}
        </div>
      </div>
    </div>
  );
}
