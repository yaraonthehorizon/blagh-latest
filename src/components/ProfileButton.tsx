import { User } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

export function ProfileButton() {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <button
      onClick={() => navigate("/profile")}
      className="rounded-full bg-primary/80 p-2 text-white backdrop-blur-xs transition-colors hover:bg-primary/70"
      aria-label={t("profile")}
    >
      <User className="h-5 w-5" />
    </button>
  );
}
