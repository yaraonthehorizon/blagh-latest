import DailyVerse from "@/components/DailyVerse";
import DailyHadith from "@/components/DailyHadith";
import QuickActions from "@/components/QuickActions";
import { useTranslation } from "react-i18next";
import { DateAndPrayerCard } from "@/components/DateAndPrayerCard";
import { Header } from "@/components/Header";
import Bismillah from "@/components/Bismillah";
import MegaCard from "@/components/MegaCard";
import PrayerWidget from "@/components/PrayerWidget";
import AppsSection from "@/components/AppsSection";
import VerseSection from "@/components/VerseSection";
import HadithSection from "@/components/HadithSection";
import RecitersSection from "@/components/RecitersSection";
import ArticlesSection from "@/components/ArticleSection";

export default function Index() {
  const { t } = useTranslation();

  return (
    <div className="page-container">
      <div className="relative overflow-hidden rounded-b-3xl ">
        <div className="page-content ">
          <div className="flex flex-col justify-center items-start">
            <Header
              headerTitleKey="content.home.welcome"
              className="text-sm font-medium text-primary"
            />
            <p className="text-foreground text-2xl font-bold -mt-5 mb-3">
              {t("content.home.name", { name: "Yara" })}
            </p>
          </div>
          <Bismillah />
          <MegaCard />
        </div>
      </div>

      {/* Content */}
      <div className="page-content">
        <PrayerWidget />
        <AppsSection />
        <VerseSection />
        <HadithSection />
        <RecitersSection />
        <ArticlesSection />
      </div>
    </div>
  );
}
