import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import {
  MoreVertical,
  User,
  Languages,
  Sun,
  Moon,
  Search,
  Bell,
} from "lucide-react";
import { useTheme } from "@/hooks/use-theme";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import { BackButton } from "./ui/back-button";

export function Header({
  headerTitleKey,
  translationValues,
  className,
  backButton = false,
}: {
  headerTitleKey: string;
  translationValues?: Record<string, string | number>;
  className?: string;
  backButton?: boolean;
}) {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const { theme, setTheme } = useTheme();

  const toggleLanguage = () => {
    const newLang = i18n.language === "en" ? "ar" : "en";
    i18n.changeLanguage(newLang);
    localStorage.setItem("i18nextLng", newLang);
  };

  return (
    <header className="flex  justify-between w-full mt-10">
      <div className="flex  gap-2 ">
        {backButton && (
          <div className="flex justify-center ">
            <BackButton />
          </div>
        )}
        <h1
          className={cn(
            "text-primary text-2xl font-bold mt-2 md:mt-0 ",
            className,
          )}
        >
          {t(headerTitleKey, {
            defaultValue: headerTitleKey,
            ...translationValues,
          })}
        </h1>
      </div>
      <div className="flex gap-[9px] ">
        <button className="w-[38px] h-[38px] rounded-full bg-icn-bg border border-icn-bdr flex items-center justify-center cursor-pointer transition-transform active:scale-90 text-icn-cl shadow-sm">
          <Search className="h-4 w-4" />
        </button>
        <button className="w-[38px] h-[38px] rounded-full bg-icn-bg border border-icn-bdr flex items-center justify-center cursor-pointer transition-transform active:scale-90 text-icn-cl shadow-sm">
          <Bell className="h-4 w-4" />
        </button>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <div className="w-[42px] h-[42px] rounded-full border-2 border-primary2 overflow-hidden bg-surface3">
              <img
                src="https://api.dicebear.com/7.x/avataaars/svg?seed=Ahmed&backgroundColor=13131a"
                alt="Ahmed"
                className="w-full h-full object-cover"
              />
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem onClick={() => navigate("/profile")}>
              <User className="mr-2 h-4 w-4" />
              <span>{t("page_title.profile")}</span>
            </DropdownMenuItem>
            <DropdownMenuItem onClick={toggleLanguage}>
              <Languages className="mr-2 h-4 w-4" />
              <span>{i18n.language === "en" ? "العربية" : "English"}</span>
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              <div className="relative mr-2 h-4 w-4">
                <Sun className="absolute h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              </div>
              <span>
                {i18n.language === "en"
                  ? theme === "dark"
                    ? "Light Mode"
                    : "Dark Mode"
                  : theme === "dark"
                    ? "الوضع النهاري"
                    : "الوضع الليلي"}
              </span>
            </DropdownMenuItem>
            {/* <DropdownMenuItem onClick={() => navigate("/auth/signup")}>
              <User className="mr-2 h-4 w-4" />
              <span>{t("content.auth.signup.title")}</span>
            </DropdownMenuItem> */}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}
