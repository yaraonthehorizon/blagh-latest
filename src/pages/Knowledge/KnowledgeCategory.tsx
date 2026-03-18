import { Header } from "@/components/Header";
import { AppCard } from "@/components/AppCard";
import { useNavigate, useParams } from "react-router-dom";
import { KnowledgeResponse } from "@/types/knowledge";
import { useQueryClient } from "@tanstack/react-query";
import { useGetKnowledgeCategories } from "@/queries/knowledge/use-get-knowledge-categories";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

export function KnowledgeCategory() {
  const { categoryId } = useParams();
  const { i18n } = useTranslation();
  const sourceLanguage = i18n.language.startsWith("ar") ? "ar" : "en";

  const navigate = useNavigate();
  const queryClient = useQueryClient();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  // Try reading categories from cache
  const cachedCategoriesResponse = queryClient.getQueryData<{
    data: KnowledgeResponse;
  }>(["knowledge-categories", sourceLanguage]);

  const cachedCategories = cachedCategoriesResponse?.data.sub_categories;
  const cachedCategory = cachedCategories?.find(
    (c) => c.id === Number(categoryId),
  );

  const cachedTitle = cachedCategory?.title;

  const cachedSubCategories = cachedCategory?.sub_categories || [];

  // If title is not in cache, fetch all categories to find it.
  const { data: fetchedCategoriesResponse, isLoading: isLoadingCategories } =
    useGetKnowledgeCategories<{ data: KnowledgeResponse }>(sourceLanguage);

  const fetchedCategory =
    fetchedCategoriesResponse?.data.all_sub_categories?.find(
      (c) => c.id === Number(categoryId),
    );

  const fetchedTitle = fetchedCategory?.title;
  const fetchedSubCategories = fetchedCategory?.sub_categories || [];

  const title = cachedTitle || fetchedTitle || "";
  const subCategories = cachedSubCategories.length
    ? cachedSubCategories
    : fetchedSubCategories;

  if (!isLoadingCategories && !cachedCategory) {
    return (
      <div className="page-container">
        <div className="page-content">
          <Header headerTitleKey=" " backButton className="text-lg mt-2" />
          <div className="absolute top-1 end-1/2 -me-3  mt-1 h-7 w-32 animate-pulse rounded-md bg-muted/40" />
          <div className="grid grid-cols-1 gap-3 mt-10">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div
                key={i}
                className="h-24 rounded-xl bg-muted/40 animate-pulse"
              />
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="page-container">
      <div className="page-content">
        <Header
          headerTitleKey={
            title.length > 12 ? title.slice(0, 12) + "..." : title || " "
          }
          backButton
          className="text-lg"
        />
        <div className="grid grid-cols-1 gap-3 mt-10">
          {subCategories.map((subCategory) => (
            <AppCard
              onClick={() =>
                navigate(`/knowledge/${categoryId}/${subCategory.id}`)
              }
              key={subCategory.id}
              className="flex flex-col w-full items-center justify-center transition-transform hover:scale-[1.01] active:scale-[0.99]"
            >
              <div className="text-center mt-2">
                <h3 className="font-bold text-foreground text-base leading-tight line-clamp-2">
                  {subCategory.title}
                </h3>
              </div>
            </AppCard>
          ))}
        </div>
      </div>
    </div>
  );
}
