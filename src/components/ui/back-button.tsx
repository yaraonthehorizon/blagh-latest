import { ArrowLeft } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

export function BackButton() {
  const navigate = useNavigate();
  const { i18n } = useTranslation();
  return (
    <div className="mb-6 flex items-center gap-4">
      <button
        onClick={() => navigate(-1)}
        className="rounded-full bg-card p-2 text-foreground shadow-sm transition-colors hover:bg-muted"
      >
        <ArrowLeft
          className={`h-5 w-5 ${i18n.dir() === "rtl" ? "rotate-180" : ""}`}
        />
      </button>
    </div>
  );
}
