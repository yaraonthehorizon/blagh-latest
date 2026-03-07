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
      title: t("page_title.knowledge"),
      path: "/knowledge",
      icon: <BookOpen className="w-6 h-6" />,
      description: t("content.knowledge.browse_topics"),
    },
    {
      title: t("page_title.baligh"),
      path: "/baligh",
      icon: <Feather className="w-6 h-6" />,
      description: t("cta.read_bleegh"),
    },
    {
      title: t("page_title.children"),
      path: "/children",
      icon: <Baby className="w-6 h-6" />,
      description: t("content.children.title"),
    },
    {
      title: t("page_title.send_gift"),
      path: "/send-gift",
      icon: <Gift className="w-6 h-6" />,
      description: t("content.profile.services.send_gift_subtext"),
    },
    {
      title: t("page_title.send_greeting"),
      path: "/send-greeting",
      icon: <Send className="w-6 h-6" />,
      description: t("content.profile.services.gift_card_subtext"),
    },
    {
      title: t("page_title.send_quran_card"),
      path: "/send-quran-card",
      icon: <Book className="w-6 h-6" />,
      description: t("content.profile.services.quran_card_subtext"),
    },
    {
      title: t("page_title.companionship"),
      path: "/companionship",
      icon: <Users className="w-6 h-6" />,
      description: t("content.profile.services.companionship_subtext"),
    },
  ];

  return (
    <div className="page-container">
      <div className="page-content">
        <Header
          headerTitleKey="apps.more"
          backButton
          className="text-3xl mt-1"
        />
        <div className="grid gap-4 mt-6 ">
          {items.map((item, index) => (
            <AppCard
              key={index}
              onClick={() => navigate(item.path)}
              className="bg-surface text-background border border-bdr-p rounded-[22px] p-5 shadow flex items-center gap-4 cursor-pointer transition-transform active:scale-95 animate-fade-up"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="w-12 h-12 rounded-full bg-surface2 flex items-center justify-center shrink-0 text-primary">
                {item.icon}
              </div>
              <div>
                <h3 className="text-lg font-bold text-foreground">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground">
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
