import heroPattern from "@/assets/hero-pattern.jpg";
import { PrayerTimes } from "@/components/PrayerTimes";
import DailyVerse from "@/components/DailyVerse";
import DailyHadith from "@/components/DailyHadith";
import QuickActions from "@/components/QuickActions";
import { useTranslation } from "react-i18next";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { ThemeToggle } from "@/components/ThemeToggle";
import "@/lib/i18n/init";
import { CurrentDateCard } from "@/components/CurrentDateCard";
import { getGreetingKey, getSpecialGreetingKey } from "@/helpers/getGreeting";
import { usePrayerTimes } from "@/hooks/use-prayer-times";
import { ProfileButton } from "@/components/ProfileButton";
import { Heart, Book, Footprints, MessageCircle } from "lucide-react";
import { Head } from "react-day-picker";
import { Header } from "@/components/Header";

export default function Index() {
  const { t } = useTranslation();
  const { nextPrayer, timeRemaining } = usePrayerTimes();

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Hero */}
      <div className="relative overflow-hidden rounded-b-3xl">
        <img
          src={heroPattern}
          alt=""
          className="absolute inset-3 h-full w-full object-cover opacity-10"
        />
        <div className="gradient-hero absolute inset-0 opacity-90" />
        <div className="relative px-6 pb-8 max-w-lg mx-auto">
          <Header headerTitleKey="page_title.home" />
          <div className="flex items-center gap-5 justify-between w-full ">
            <CurrentDateCard />
            <div className="flex flex-col gap-5">
              <p className="text-4xl font-medium text-primary-foreground">
                {t(getSpecialGreetingKey() || getGreetingKey())}
              </p>
              <button className=" w-full rounded-full bg-background p-3 font-bold">
                {t("cta.read_quran")}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="mx-auto max-w-lg space-y-5 px-5 mt-4 relative z-10">
        <div className="flex items-center gap-2 text-sm font-medium text-primary drop-shadow-md capitalize  ">
          {t("content.home.prayer")} {nextPrayer.name} {t("content.home.in")}
          <span className="font-bold text-primary ml-1 rounded-full bg-accent px-2 py-0.5">
            {timeRemaining}
          </span>
        </div>
        <div>
          <h1 className=" text-2xl font-bold text-primary mb-1">
            {t("headers.home.prayer_times")}
          </h1>

          <PrayerTimes />
        </div>
        <div>
          <h1 className=" text-2xl font-bold text-primary mb-1">
            {t("headers.home.daily_apps")}
          </h1>

          <QuickActions />
        </div>

        <div className="space-y-4">
          <DailyVerse />
          <DailyHadith />
        </div>

        {/* Reflection prompt */}
        <div className="rounded-xl border border-border bg-card/50 p-5">
          <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
            {t("content.home.daily_reflection")}
          </p>
          <p className=" text-sm italic text-foreground leading-relaxed">
            "{t("content.home.daily_reflection_prompt")}"
          </p>
        </div>
      </div>
    </div>
  );
}
