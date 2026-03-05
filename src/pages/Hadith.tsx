// c:\Users\YaraK\balagh-your-islamic-compass\src\pages\Hadith.tsx
import { Header } from "@/components/Header";
import { useTranslation } from "react-i18next";
import {
  Book,
  Scroll,
  Shield,
  Scale,
  HeartHandshake,
  Users,
  Footprints,
} from "lucide-react";
import { AppCard } from "@/components/AppCard";

export default function Hadith() {
  const { t } = useTranslation();

  const categories = [
    {
      id: "1",
      title: t("content.hadith.categories.quran"),
      count: "59",
    },
    {
      id: "2",
      title: t("content.hadith.categories.hadith"),
      count: "5",
    },
    {
      id: "3",
      title: t("content.hadith.categories.creed"),
      count: "441",
    },
    {
      id: "4",
      title: t("content.hadith.categories.fiqh"),
      count: "1347",
    },
    {
      id: "5",
      title: t("content.hadith.categories.virtues"),
      count: "822",
    },
    {
      id: "6",
      title: t("content.hadith.categories.dawah"),
      count: "98",
    },
    {
      id: "7",
      title: t("content.hadith.categories.seerah"),
      count: "228",
    },
  ];

  return (
    <div className="page-container">
      <div className="page-content">
        <Header
          headerTitleKey="page_title.hadith"
          backButton
          className="text-3xl mt-1"
        />
        <div className="grid grid-cols-2 gap-3 mt-10">
          {categories.map((category) => (
            <AppCard
              key={category.id}
              className="flex flex-col w-full items-center justify-center gap-4 rounded-xl  transition-transform hover:scale-[1.01] active:scale-[0.99]"
            >
              <div
                className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full `}
              >
                <Scroll className="h-10 w-10" />
              </div>
              <div className="text-center">
                <h3 className=" font-bold text-foreground text-base leading-tight">
                  {category.title}
                </h3>
                <p className="text-xs text-muted-foreground mt-1">
                  {t("content.hadith.browse_collection")}
                </p>
              </div>
              <div className="rounded-full bg-secondary/10 px-3 py-1 text-xs font-bold text-secondary">
                {category.count}
              </div>
            </AppCard>
          ))}
        </div>
      </div>
    </div>
  );
}
