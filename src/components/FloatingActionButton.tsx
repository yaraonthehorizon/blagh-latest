import { Bot } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

export function FloatingActionButton() {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <button
      onClick={() => navigate("/baligh")}
      className="fixed bottom-24 right-4 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-foreground text-primary-foreground shadow-lg transition-transform hover:scale-110 active:scale-95"
      aria-label={t("routes.bleegh")}
    >
      <Bot className="h-8 w-8" />
    </button>
  );
}
