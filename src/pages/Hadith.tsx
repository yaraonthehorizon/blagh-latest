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

export default function Hadith() {
  const { t } = useTranslation();

  const categories = [
    {
      id: "1",
      title: t("content.hadith.categories.quran"),
      count: "59",
      icon: Book,
      color: "text-emerald-600 bg-emerald-50",
    },
    {
      id: "2",
      title: t("content.hadith.categories.hadith"),
      count: "5",
      icon: Scroll,
      color: "text-blue-600 bg-blue-50",
    },
    {
      id: "3",
      title: t("content.hadith.categories.creed"),
      count: "441",
      icon: Shield,
      color: "text-indigo-600 bg-indigo-50",
    },
    {
      id: "4",
      title: t("content.hadith.categories.fiqh"),
      count: "1347",
      icon: Scale,
      color: "text-amber-600 bg-amber-50",
    },
    {
      id: "5",
      title: t("content.hadith.categories.virtues"),
      count: "822",
      icon: HeartHandshake,
      color: "text-rose-600 bg-rose-50",
    },
    {
      id: "6",
      title: t("content.hadith.categories.dawah"),
      count: "98",
      icon: Users,
      color: "text-cyan-600 bg-cyan-50",
    },
    {
      id: "7",
      title: t("content.hadith.categories.seerah"),
      count: "228",
      icon: Footprints,
      color: "text-stone-600 bg-stone-50",
    },
  ];

  return (
    <div className="min-h-screen bg-background px-4 pb-24">
      <div className="relative px-2 pb-8  max-w-lg mx-auto">
        <Header headerTitleKey="page_title.hadith" className="text-primary" />
        <div className="grid gap-3">
          {categories.map((category) => (
            <button
              key={category.id}
              className="flex w-full items-center justify-between rounded-xl bg-card p-4 shadow-card transition-transform hover:scale-[1.01] active:scale-[0.99]"
            >
              <div className="flex items-center gap-4">
                <div
                  className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full ${category.color}`}
                >
                  <category.icon className="h-6 w-6" />
                </div>
                <div className="text-left">
                  <h3 className="font-display font-bold text-foreground text-base leading-tight">
                    {category.title}
                  </h3>
                  <p className="text-xs text-muted-foreground mt-1">
                    {t("content.hadith.browse_collection")}
                  </p>
                </div>
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
}
