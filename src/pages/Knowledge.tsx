import { Header } from "@/components/Header";
import SearchBar from "@/components/SearchBar";
import { useTranslation } from "react-i18next";
import {
  BookOpen,
  Scroll,
  Shield,
  Scale,
  HeartHandshake,
  Library,
  Footprints,
} from "lucide-react";

const Knowledge = () => {
  const { t } = useTranslation();

  const categories = [
    {
      id: "1",
      title: t("content.knowledge.categories.quran"),
      count: "114",
      icon: BookOpen,
      color: "text-emerald-600 bg-emerald-50",
    },
    {
      id: "2",
      title: t("content.knowledge.categories.tafsir"),
      count: "30",
      icon: Library,
      color: "text-blue-600 bg-blue-50",
    },
    {
      id: "3",
      title: t("content.knowledge.categories.sunnah"),
      count: "6",
      icon: Scroll,
      color: "text-amber-600 bg-amber-50",
    },
    {
      id: "4",
      title: t("content.knowledge.categories.creed"),
      count: "12",
      icon: Shield,
      color: "text-indigo-600 bg-indigo-50",
    },
    {
      id: "5",
      title: t("content.knowledge.categories.fiqh"),
      count: "4",
      icon: Scale,
      color: "text-rose-600 bg-rose-50",
    },
    {
      id: "6",
      title: t("content.knowledge.categories.seerah"),
      count: "25",
      icon: Footprints,
      color: "text-cyan-600 bg-cyan-50",
    },
    {
      id: "7",
      title: t("content.knowledge.categories.tazkiyah"),
      count: "10",
      icon: HeartHandshake,
      color: "text-stone-600 bg-stone-50",
    },
  ];

  return (
    <div className="min-h-screen bg-background px-4 pb-24">
      <div className="relative px-2 pb-8 max-w-lg mx-auto">
        <Header headerTitleKey="page_title.knowledge" />
        <SearchBar />
        <div className="grid grid-cols-2 gap-3">
          {categories.map((category) => (
            <button
              key={category.id}
              className="flex flex-col w-full items-center justify-center gap-4 rounded-xl bg-card p-4 shadow-card transition-transform hover:scale-[1.01] active:scale-[0.99]"
            >
              <div
                className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full ${category.color}`}
              >
                <category.icon className="h-6 w-6" />
              </div>
              <div className="text-center">
                <h3 className="font-bold text-foreground text-base leading-tight">
                  {category.title}
                </h3>
                <p className="text-xs text-muted-foreground mt-1">
                  {t("content.knowledge.browse_topics")}
                </p>
              </div>
              <div className="rounded-full bg-secondary/10 px-3 py-1 text-xs font-bold text-secondary">
                {category.count}
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Knowledge;
