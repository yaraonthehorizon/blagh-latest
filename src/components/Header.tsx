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
  Palette,
} from "lucide-react";
import { useTheme } from "@/hooks/use-theme";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuSubContent,
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
  const { setTheme } = useTheme();

  const toggleLanguage = () => {
    const newLang = i18n.language?.startsWith("en") ? "ar" : "en";
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
        <h1 className={cn("text-primary text-2xl font-bold ", className)}>
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
            <DropdownMenuSub>
              <DropdownMenuSubTrigger>
                <Palette className="mr-2 h-4 w-4" />
                <span>{i18n.language === "en" ? "Theme" : "المظهر"}</span>
              </DropdownMenuSubTrigger>
              <DropdownMenuSubContent>
                <DropdownMenuItem
                  onClick={() => setTheme({ mode: "light", accent: "green" })}
                >
                  <Sun className="mr-2 h-4 w-4" />
                  <span>
                    {i18n.language === "en" ? "Light (Green)" : "أخضر فاتح"}
                  </span>
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => setTheme({ mode: "dark", accent: "green" })}
                >
                  <Moon className="mr-2 h-4 w-4" />
                  <span>
                    {i18n.language === "en" ? "Dark (Green)" : "أخضر داكن"}
                  </span>
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => setTheme({ mode: "light", accent: "gold" })}
                >
                  <Sun className="mr-2 h-4 w-4 text-amber-500" />
                  <span>
                    {i18n.language === "en" ? "Light (Gold)" : "ذهبي فاتح"}
                  </span>
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => setTheme({ mode: "dark", accent: "gold" })}
                >
                  <Moon className="mr-2 h-4 w-4 text-amber-500" />
                  <span>
                    {i18n.language === "en" ? "Dark (Gold)" : "ذهبي داكن"}
                  </span>
                </DropdownMenuItem>
              </DropdownMenuSubContent>
            </DropdownMenuSub>
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
