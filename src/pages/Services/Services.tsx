import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { BookOpen, Gift, Users } from "lucide-react";
import { Header } from "@/components/Header";
import { Card } from "@/components/ui/card";
import { AppCard } from "@/components/AppCard";

export function Services() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const items = [
    {
      title: t("page_title.companionship"),
      path: "/services/companionship",
      icon: <Users size={32} />,
      description: t("content.services.companionship_subtext"),
    },
    {
      title: t("page_title.send_gift"),
      path: "/services/send-gift",
      icon: <Gift size={32} />,
      description: t("content.services.send_gift_subtext"),
    },
    {
      title: t("page_title.send_greeting"),
      path: "/services/send-greeting",
      icon: <Users size={32} />,
      description: t("content.services.send_greeting_subtext"),
    },
    {
      title: t("page_title.send_quran_card"),
      path: "/services/send-quran-card",
      icon: <BookOpen size={32} />,
      description: t("content.services.send_quran_card_subtext"),
    },
  ];

  return (
    <div className="page-container">
      <div className="page-content">
        <Header
          headerTitleKey="page_title.services"
          backButton
          className=" mt-1"
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
