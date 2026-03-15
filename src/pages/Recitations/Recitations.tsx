import { useTranslation } from "react-i18next";
import { useGetQuranRecitationCategories } from "@/queries/quran/recitations/use-get-quran-recitation-categories";
import { CategoryCard } from "@/components/CategoryCard";
import { useNavigate } from "react-router-dom";
import { Header } from "@/components/Header";
import { RecitationCategoryDetails } from "@/types/quran/recitation-category-details";

export function Recitations() {
  const { t, i18n } = useTranslation();
  const locale = i18n.language.startsWith("ar") ? "ar" : "en";
  const navigate = useNavigate();
  const { data, isLoading, isError } =
    useGetQuranRecitationCategories<RecitationCategoryDetails>(locale);

  if (isLoading) {
    return (
      <div className="page-content">
        <div className="pt-6 animate-fade-up">
          <div className="h-6 w-32 bg-surface3 rounded mb-4 animate-pulse" />
          <div className="grid grid-cols-1 gap-3">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="h-[72px] bg-surface border border-bdr-p rounded-[16px] animate-pulse"
              />
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="page-content">
        <div className="pt-6">
          <div className="p-4 text-sm text-center text-muted-foreground bg-surface border border-bdr-p rounded-[16px]">
            {t("common.error_loading", "Failed to load categories")}
          </div>
        </div>
      </div>
    );
  }

  if (data.length === 0) {
    return (
      <div className="page-content">
        <Header headerTitleKey="page_title.recitation_categories" backButton />
        <div className="mt-10 flex items-center justify-center p-8 text-muted-foreground bg-surface border border-bdr-p rounded-[16px]">
          {t("common.no_data", "No categories available")}
        </div>
      </div>
    );
  }

  return (
    <div className="page-container">
      <div className="page-content">
        <Header headerTitleKey="page_title.recitation_categories" backButton />
        <div className="mt-6 animate-fade-up">
          <div className="grid grid-cols-1  gap-3">
            {data.map((item) => (
              <CategoryCard
                key={item.data.id}
                title={item.data.title}
                onClick={() => {
                  navigate(`/recitations/${item.data.id}`);
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
