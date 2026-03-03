import { Search } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

export function SearchButton() {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <button
      onClick={() => navigate("/search")}
      className="rounded-full bg-primary/80 p-2 text-white backdrop-blur-xs transition-colors hover:bg-primary/70"
      aria-label={t("page_title.search")}
    >
      <Search className="h-5 w-5" />
    </button>
  );
}
