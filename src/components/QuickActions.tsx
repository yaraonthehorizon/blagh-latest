import { Compass, BookOpen, HandHeart, Scroll } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { PrayerBeads } from "./ui/icons/prayer-beads";
import { Prayer } from "./ui/icons/prayer";

export function QuickActions() {
  const { t } = useTranslation();
  const actions = [
    {
      label: t("quick_action.quran"),
      icon: BookOpen,
      path: "/quran",
      color: "bg-secondary/10 text-primary",
    },
    {
      label: t("quick_action.athkar"),
      icon: BookOpen,
      path: "/athkar",
      color: "bg-accent/20 text-accent-foreground",
    },
    {
      label: t("quick_action.prayer"),
      icon: Prayer,
      path: "/prayer",
      color: "bg-secondary/10 text-primary",
    },
    {
      label: t("quick_action.qibla"),
      icon: Compass,
      path: "/qibla",
      color: "bg-secondary/10 text-secondary",
    },
    {
      label: t("quick_action.duaa"),
      icon: HandHeart,
      path: "/duaa",
      color: "bg-primary/10 text-primary",
    },
    {
      label: t("quick_action.tsbeeh"),
      icon: PrayerBeads,
      path: "/tsbeeh",
      color: "bg-primary/10 text-primary",
    },

    {
      label: t("quick_action.calander"),
      icon: Compass,
      path: "/calander",
      color: "bg-secondary/10 text-primary",
    },

    {
      label: t("quick_action.hadith"),
      icon: Scroll,
      path: "/hadith",
      color: "bg-primary/10 text-primary",
    },
  ];
  const navigate = useNavigate();

  return (
    <div className="grid grid-cols-4 gap-3">
      {actions.map((a) => (
        <button
          key={a.label}
          onClick={() => navigate(a.path)}
          className={`flex flex-col items-center gap-2 p-2 shadow-card transition-transform hover:scale-105 active:scale-95 `}
        >
          <div className={`rounded-full p-2.5  ${a.color}`}>
            <a.icon className="h-5 w-5" />
          </div>
          <span className="text-xs font-medium text-primary">{a.label}</span>
        </button>
      ))}
    </div>
  );
}

export default QuickActions;
