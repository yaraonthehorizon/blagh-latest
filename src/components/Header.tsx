import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { MoreVertical, User, Languages, Sun, Moon } from "lucide-react";
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
    <div className="flex justify-between mt-10 relative w-full">
      <div className="absolute end-0 flex gap-2">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="rounded-full bg-primary/80 p-2 text-white backdrop-blur-xs transition-colors hover:bg-primary/70">
              <MoreVertical className="h-5 w-5" />
            </button>
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
      <div className="flex gap-4">
        {backButton && <BackButton />}
        <h1 className={cn("text-primary text-3xl font-bold ", className)}>
          {t(headerTitleKey, {
            defaultValue: headerTitleKey,
            ...translationValues,
          })}
        </h1>
      </div>
    </div>
  );
}
