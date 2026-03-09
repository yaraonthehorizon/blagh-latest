import { Header } from "@/components/Header";
import SearchBar from "@/components/SearchBar";
import {
  BookOpen,
  Compass,
  Moon,
  HandHeart,
  Clock,
  Calendar,
  Star,
} from "lucide-react";
import { useTranslation } from "react-i18next";
import { AppCard } from "@/components/AppCard";

export function Athkar() {
  const { t } = useTranslation();
  const tools = [
    {
      id: "quran_reader",
      icon: BookOpen,
      color: "text-emerald-600 bg-emerald-50",
    },
    {
      id: "prayer_times",
      icon: Clock,
      color: "text-blue-600 bg-blue-50",
    },
    {
      id: "qibla_compass",
      icon: Compass,
      color: "text-indigo-600 bg-indigo-50",
    },
    {
      id: "athkar",
      icon: Moon,
      color: "text-amber-600 bg-amber-50",
    },
    {
      id: "duaa_collection",
      icon: HandHeart,
      color: "text-rose-600 bg-rose-50",
    },
    {
      id: "hijri_calendar",
      icon: Calendar,
      color: "text-cyan-600 bg-cyan-50",
    },
    {
      id: "tasbih_counter",
      icon: Star,
      color: "text-stone-600 bg-stone-50",
    },
  ];
  return (
    <div className="page-container">
      <div className="page-content ">
        <Header headerTitleKey="page_title.athkar" backButton />
        <div className="grid grid-cols-2 gap-3 mt-10">
          {tools.map((tool) => (
            <AppCard
              key={tool.id}
              className="flex flex-col w-full items-center justify-center gap-4 rounded-xl bg-card p-4 shadow-card transition-transform hover:scale-[1.01] active:scale-[0.99]"
            >
              <div
                className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full ${tool.color}`}
              >
                <tool.icon className="h-6 w-6" />
              </div>
              <div className="text-center">
                <h3 className="font-bold text-foreground text-base leading-tight">
                  {t(`content.athkar.tools.${tool.id}.name`)}
                </h3>
                <p className="text-xs text-muted-foreground mt-1">
                  {t(`content.athkar.tools.${tool.id}.desc`)}
                </p>
              </div>
            </AppCard>
          ))}
        </div>
      </div>
    </div>
  );
}
