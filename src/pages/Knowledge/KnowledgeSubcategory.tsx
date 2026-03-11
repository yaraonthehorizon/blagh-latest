import { Header } from "@/components/Header";
import { AppCard } from "@/components/AppCard";
import { useNavigate, useParams } from "react-router-dom";
import { useGetKnowledgeCategory } from "@/queries/knowledge/use-get-knowledge-category";
import { KnowledgeDataItems, KnowledgeResponse } from "@/types/knowledge";
import { useQueryClient } from "@tanstack/react-query";
import { useGetKnowledgeCategories } from "@/queries/knowledge/use-get-knowledge-categories";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Badge } from "@/components/ui/badge";
import { isKnowledgeItems } from "@/gurads/isKnowledgeItems";
import { useGetKnowledgeSubcategory } from "@/queries/knowledge/use-get-knowledge-subcategory";
import type { KnowledgeSubcategory } from "@/types/knowledge";
export function KnowledgeSubcategory() {
  const { categoryId, subCategoryId } = useParams();
  const { t, i18n } = useTranslation();
  const sourceLanguage = i18n.language.startsWith("ar") ? "ar" : "en";

  const navigate = useNavigate();
  const queryClient = useQueryClient();

  // Try reading categories from cache
  const cachedCategoriesResponse = queryClient.getQueryData<KnowledgeResponse>([
    "knowledge-categories",
    sourceLanguage,
  ]);

  const cachedCategories = cachedCategoriesResponse?.sub_categories;
  const cachedCategory = cachedCategories?.find(
    (c) => c.id === Number(categoryId),
  );
  const cachedSubCategory = cachedCategory?.sub_categories?.find(
    (sc) => sc.id === Number(subCategoryId),
  );
  const cachedTitle = cachedSubCategory?.title;

  // If title is not in cache, fetch all categories to find it.
  // This will be fast if data is already in the query cache.
  const { data: fetchedCategoriesResponse, isLoading: isLoadingCategories } =
    useGetKnowledgeCategories<KnowledgeResponse>(sourceLanguage);

  const fetchedCategory = fetchedCategoriesResponse?.sub_categories?.find(
    (c) => c.id === Number(categoryId),
  );
  const fetchedSubCategory = fetchedCategory?.sub_categories?.find(
    (sc) => sc.id === Number(subCategoryId),
  );
  const fetchedTitle = fetchedSubCategory?.title;

  const title = cachedTitle || fetchedTitle || "";

  const { data, isLoading, isError } = useGetKnowledgeSubcategory<
    KnowledgeSubcategory[]
  >(subCategoryId, sourceLanguage);

  console.log("Knowledge subcategory data:", data);
  if (!data) return null;
  if ("error" in data || isError) {
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

  if (isLoading || (!title && isLoadingCategories)) {
    return (
      <div className="page-container">
        <div className="page-content">
          <Header headerTitleKey={title} backButton className="text-2xl mt-2" />
          <div className="grid grid-cols-1 gap-3 mt-10">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div
                key={i}
                className="h-32 rounded-xl bg-muted/40 animate-pulse"
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
        <Header headerTitleKey={title} backButton className="text-lg" />
        <div className="grid grid-cols-1 gap-3 mt-10">
          {data &&
            data.map((item) => (
              <AppCard
                onClick={() =>
                  navigate(
                    `/knowledge/${categoryId}/${subCategoryId}/${item.id}`,
                  )
                }
                key={item.id}
                className="flex flex-col w-full items-center justify-center transition-transform hover:scale-[1.01] active:scale-[0.99]"
              >
                <div className="text-center mt-2">
                  <h3 className="font-bold text-foreground text-base leading-tight line-clamp-2">
                    {item.title}
                  </h3>
                </div>

                <div className="flex items-center justify-center mt-2 gap-2 capitalize">
                  <Badge className="capitalize leading-none px-2 pt-1.5 sm:pt-0">
                    {t(
                      "content.knowledge.importance." +
                        item.importance_level.toLowerCase(),
                    )}
                  </Badge>
                </div>
              </AppCard>
            ))}
        </div>
      </div>
    </div>
  );
}
