import { Header } from "@/components/Header";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { User, Mail, Send } from "lucide-react";
import { toast } from "sonner";

export function Companionship() {
  const { t } = useTranslation();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock sending invitation
    console.log("Sending invitation to:", email, "for:", name);
    toast.success(t("content.companionship.success_message"));
    setName("");
    setEmail("");
  };

  return (
    <div className="page-container">
      <div className="page-content">
        <Header headerTitleKey="page_title.companionship" backButton />

        <div className="mt-8 space-y-6">
          <div className="text-center space-y-2">
            <h2 className="text-xl font-bold text-foreground">
              {t("content.companionship.title")}
            </h2>
            <p className="text-sm text-muted-foreground">
              {t("content.companionship.description")}
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="space-y-4 bg-card p-6 rounded-xl shadow-card border border-border/50"
          >
            <div className="space-y-2">
              <label
                htmlFor="name"
                className="text-sm font-medium text-foreground flex items-center gap-2"
              >
                <User className="h-4 w-4" />
                {t("content.companionship.form.name_label")}
              </label>
              <input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder={t("content.companionship.form.name_placeholder")}
                required
                className="w-full px-4 py-2 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
            </div>

            <div className="space-y-2">
              <label
                htmlFor="email"
                className="text-sm font-medium text-foreground flex items-center gap-2"
              >
                <Mail className="h-4 w-4" />
                {t("content.companionship.form.email_label")}
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={t("content.companionship.form.email_placeholder")}
                required
                className="w-full px-4 py-2 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
            </div>

            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 rounded-lg bg-primary py-3 font-bold text-primary-foreground shadow-lg transition-transform active:scale-95 hover:bg-primary/90 mt-4"
            >
              <Send className="h-4 w-4" />
              {t("content.companionship.form.submit")}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
