import { BookOpen, Scroll, Shield, Share } from "lucide-react";
import { Header } from "@/components/Header";
import { useTranslation } from "react-i18next";

export function SendGift() {
  const { t } = useTranslation();

  function handleShare(e: React.MouseEvent, title: string, subtitle: string) {}

  const giftItems = [
    {
      id: "quran",
      title: "Surah Al-Mulk",
      subtitle: "The Sovereignty • 30 Ayahs",
      icon: BookOpen,
      color: "text-emerald-600 bg-emerald-50",
    },
    {
      id: "hadith",
      title: "Virtues of Charity",
      subtitle: "Riyad as-Salihin",
      icon: Scroll,
      color: "text-amber-600 bg-amber-50",
    },
    {
      id: "knowledge",
      title: "Understanding Tawheed",
      subtitle: "Islamic Creed",
      icon: Shield,
      color: "text-indigo-600 bg-indigo-50",
    },
  ];

  return (
    <div className="page-container">
      <div className="relative max-w-lg mx-auto">
        <Header
          headerTitleKey="content.profile.services.send_gift"
          backButton
        />
        {/* <p className="text-sm text-muted-foreground mb-6 -mt-2">
          {t("content.profile.services.send_gift_subtext")}
        </p> */}

        <div className="space-y-3">
          {giftItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between rounded-xl bg-card p-4 shadow-card transition-transform hover:scale-[1.01] active:scale-[0.99]"
            >
              <div className="flex items-center gap-4">
                <div
                  className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full ${item.color}`}
                >
                  <item.icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className=" font-bold text-foreground text-base leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-xs text-muted-foreground mt-1">
                    {item.subtitle}
                  </p>
                </div>
              </div>
              <button
                onClick={(e) => handleShare(e, item.title, item.subtitle)}
                className="rounded-full bg-secondary/10 p-2.5 text-secondary hover:bg-secondary/20 transition-colors"
                aria-label="Share"
              >
                <Share className="h-5 w-5" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
