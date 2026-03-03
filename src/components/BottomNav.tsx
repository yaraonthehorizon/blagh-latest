import {
  Home,
  BookOpen,
  GraduationCap,
  Bot,
  BarChart3,
  Gift,
  Monitor,
  MonitorStopIcon,
} from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import { cn } from "@/lib/utils";
import { useTranslation } from "react-i18next";

const BottomNav = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { t } = useTranslation();

  const tabs = [
    { path: "/", label: t("routes.home"), icon: Home },
    { path: "/quran", label: t("routes.quran"), icon: BookOpen },
    { path: "/hadith", label: t("routes.hadith"), icon: GraduationCap },
    { path: "/knowledge", label: t("routes.knowledge"), icon: GraduationCap },
    { path: "/children", label: t("routes.children"), icon: Gift },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50  border-border bg-transparent ">
      <div className="mx-auto flex max-w-lg items-center justify-around py-2 backdrop-blur-lg rounded-full">
        {tabs.map((tab) => {
          const isActive = location.pathname === tab.path;
          return (
            <button
              key={tab.path}
              onClick={() => navigate(tab.path)}
              className={cn(
                "flex flex-col items-center gap-0.5 px-3 py-1.5 text-xs transition-colors",
                isActive
                  ? "text-primary"
                  : "text-muted-foreground hover:text-foreground",
              )}
            >
              <tab.icon
                className={cn("h-5 w-5", isActive && "animate-pulse-gentle")}
                strokeWidth={isActive ? 2.5 : 1.5}
              />
              <span className={cn("font-medium", isActive && "font-semibold")}>
                {tab.label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};

export default BottomNav;
