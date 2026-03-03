import { useTranslation } from "react-i18next";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { ProfileButton } from "./ProfileButton";
import { SearchButton } from "./SearchButton";
import { ThemeToggle } from "./ThemeToggle";
import { cn } from "@/lib/utils";

export function Header({
  headerTitleKey,
  className,
}: {
  headerTitleKey: string;
  className?: string;
}) {
  const { t } = useTranslation();
  return (
    <div className="flex items-center justify-between mb-6 mt-10">
      <div className="absolute end-0 flex gap-2">
        <SearchButton />
        <ProfileButton />
        <LanguageSwitcher />
        <ThemeToggle />
      </div>
      <h1
        className={cn("text-4xl font-bold text-primary-foreground", className)}
      >
        {t(headerTitleKey)}
      </h1>
    </div>
  );
}
