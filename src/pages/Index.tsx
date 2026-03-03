import heroPattern from "@/assets/hero-pattern.jpg";
import { PrayerTimes } from "@/components/PrayerTimes";
import DailyVerse from "@/components/DailyVerse";
import DailyHadith from "@/components/DailyHadith";
import QuickActions from "@/components/QuickActions";
import { useTranslation } from "react-i18next";
import { DateAndPrayerCard } from "@/components/DateAndPrayerCard";
import { Header } from "@/components/Header";
import { MapPin } from "lucide-react";
import SearchBar from "@/components/SearchBar";

export default function Index() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Hero */}
      <div className="relative overflow-hidden rounded-b-3xl">
        <div className="gradient-hero absolute inset-0" />
        <div className="relative px-6 pb-8 max-w-lg mx-auto">
          <div className="flex flex-col justify-center items-start ">
            <Header
              headerTitleKey="content.home.welcome"
              translationValues={{ name: "Muslim" }}
              className="text-2xl font-bold text-white"
            />
            <p className="flex items-center justify-center text-background/70 text-base font-medium">
              <MapPin className="w-4 h-4 mr-0.5" />
              Riyadh
            </p>
          </div>

          <SearchBar />
          <DateAndPrayerCard />
        </div>
      </div>

      {/* Content */}
      <div className="mx-auto max-w-lg space-y-5 px-5 mt-4 relative z-10">
        <div>
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
