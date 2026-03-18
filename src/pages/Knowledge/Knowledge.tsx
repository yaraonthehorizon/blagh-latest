import { Header } from "@/components/Header";
import { useTranslation } from "react-i18next";
import { AppCard } from "@/components/AppCard";
import { useGetKnowledgeCategories } from "@/queries/knowledge/use-get-knowledge-categories";
import { useNavigate } from "react-router-dom";
import { KnowledgeResponse } from "@/types/knowledge";
import { ArrowRight } from "lucide-react";

export function Knowledge() {
  const navigate = useNavigate();

  const { t, i18n } = useTranslation();
  const sourceLanguage = i18n.language.startsWith("ar") ? "ar" : "en";

  const { data, isLoading, error } = useGetKnowledgeCategories<{
    data: KnowledgeResponse;
  }>(sourceLanguage);

  if (isLoading) {
    return (
      <div className="page-container">
        <div className="page-content">
          <Header
            headerTitleKey="page_title.knowledge"
            backButton
            className="text-2xl mt-2"
          />
          <div className="grid grid-cols-2 gap-3 mt-10">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div
                key={i}
                className="h-32 rounded-xl bg-muted/20 animate-pulse"
              />
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="page-container">
        <div className="page-content">
          <Header headerTitleKey="page_title.knowledge" backButton />
          <div className=" flex items-center justify-center h-full">
            <p className="text-destructive">Error loading categories</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="page-container">
      <div className="page-content">
        <Header headerTitleKey="page_title.knowledge" backButton />
        <div className="grid grid-cols-2 gap-3 mt-10">
          {data.data &&
            data.data.sub_categories.map((category) => (
              <AppCard
                onClick={() => navigate(`/knowledge/${category.id}`)}
                key={category.id}
                className="flex flex-col w-full items-center justify-center transition-transform hover:scale-[1.01] active:scale-[0.99]"
              >
                <div className="text-center mt-2">
                  <h3 className="font-bold text-foreground text-sm leading-tight line-clamp-2">
                    {category.title}
                  </h3>
                  <p className="text-xs text-muted-foreground mt-1">
                    {category.description
                      ? category.description.slice(0, 25) + "..."
                      : ""}
                  </p>
                </div>
                <div className="mt-2 rounded-full bg-secondary/10 px-3 py-1 text-xs font-bold text-secondary">
                  {t("content.knowledge.items_count", {
                    count: category.items_count,
                  })}
                </div>

                <p className="flex items-center justify-center text-sm text-primary font-bold">
                  {t("content.knowledge.browse_topics")}
                  <ArrowRight className="w-4 h-4 rtl:rotate-180 mb-1 sm:mb-0" />
                </p>
              </AppCard>
            ))}
        </div>
      </div>
    </div>
  );
}
