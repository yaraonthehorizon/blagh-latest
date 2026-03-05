import { Header } from "@/components/Header";
import { BackButton } from "@/components/ui/back-button";
import { Share2, Moon, Star } from "lucide-react";
import { useTranslation } from "react-i18next";
import { toast } from "sonner";

export function SendGreetingCard() {
  const { t } = useTranslation();

  function handleShare(e: React.MouseEvent, title: string, subtitle: string) {}

  return (
    <div className="page-container">
      <div className="page-content">
        <div className="flex items-center gap-4 mb-4">
          <Header headerTitleKey="page_title.send_greeting" backButton />
        </div>

        <div className="mt-8 relative overflow-hidden rounded-2xl bg-gradient-to-br from-indigo-900  to-slate-600 p-8 text-center text-white shadow-xl border border-white/10">
          <div className="absolute top-0 right-0 p-4 opacity-10">
            <Moon className="h-32 w-32 -mr-8 -mt-8" />
          </div>
          <div className="absolute bottom-10 left-10 opacity-20">
            <Star className="h-4 w-4 animate-pulse" />
          </div>
          <div className="absolute top-20 left-20 opacity-20">
            <Star className="h-3 w-3 animate-pulse delay-75" />
          </div>

          <div className="relative z-10 flex flex-col items-center gap-6 py-10">
            <div className="rounded-full bg-white/10 p-4 backdrop-blur-sm">
              <Moon className="h-12 w-12 text-amber-300" />
            </div>
            <div className="space-y-2">
              <h2 className="font-display text-4xl font-bold tracking-wide text-amber-100">
                {t("content.send_greeting.greeting_card.title")}
              </h2>
              <p className="text-sm text-indigo-100/80 font-medium leading-relaxed max-w-[260px] mx-auto">
                {t("content.send_greeting.greeting_card.subtitle")}
              </p>
            </div>
          </div>
        </div>

        <button
          onClick={(e) =>
            handleShare(
              e,
              t("content.send_greeting.title"),
              t("content.send_greeting.subtitle"),
            )
          }
          className="mt-8 w-full flex items-center justify-center gap-2 rounded-xl bg-primary py-4 font-bold text-primary-foreground shadow-lg transition-transform active:scale-95 hover:bg-primary/90"
        >
          <Share2 className="h-5 w-5" />
          {t("content.send_greeting.share_button")}
        </button>
      </div>
    </div>
  );
}
