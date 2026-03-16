import { Header } from "@/components/Header";
import { AppCard } from "@/components/AppCard";
import { useNavigate, useParams } from "react-router-dom";
import { KnowledgeResponse } from "@/types/knowledge";
import { useQueryClient } from "@tanstack/react-query";
import { useGetKnowledgeCategories } from "@/queries/knowledge/use-get-knowledge-categories";
import { useTranslation } from "react-i18next";
import { Badge } from "@/components/ui/badge";
import { useGetKnowledgeSubcategory } from "@/queries/knowledge/use-get-knowledge-subcategory";
import type { KnowledgeSubcategory } from "@/types/knowledge";
export function KnowledgeSubcategory() {
  const { categoryId, subCategoryId } = useParams();
  const { t, i18n } = useTranslation();
  const sourceLanguage = i18n.language.startsWith("ar") ? "ar" : "en";
  const translationLanguage = i18n.language.startsWith("ar") ? "ar" : "en";

  const navigate = useNavigate();
  const queryClient = useQueryClient();

  // Try reading categories from cache
  const cachedCategoriesResponse = queryClient.getQueryData<{
    data: KnowledgeResponse;
  }>(["knowledge-categories", sourceLanguage]);

  const cachedCategories = cachedCategoriesResponse?.data.sub_categories;
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

  const { data, isLoading, isError } = useGetKnowledgeSubcategory<{
    data: KnowledgeSubcategory[];
  }>(subCategoryId, sourceLanguage, translationLanguage);

  const isPageLoading =
    (isLoading && !data) || (isLoadingCategories && !cachedTitle);

  console.log("Knowledge category subcategories:", data);

  if (isError) {
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

  if (isPageLoading)
    return (
      <div className="page-container">
        <div className="page-content">
          <Header headerTitleKey=" " backButton className="text-lg mt-2" />
          <div className="mt-2 h-7 w-48 animate-pulse rounded-md bg-muted/40" />
        </div>
      </div>
    );

  if (isLoading)
    return (
      <div className="grid grid-cols-1 gap-3 mt-10">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div key={i} className="h-24 rounded-xl bg-muted/40 animate-pulse" />
        ))}
      </div>
    );

  if (isError || "error" in (data ?? {}))
    return (
      <div className="flex items-center justify-center h-[400px]">
        <p className=" text-foreground">No Subcategory Data to Display</p>
      </div>
    );

  return (
    <div className="page-container">
      <div className="page-content">
        <Header headerTitleKey={title || " "} backButton className="text-lg" />

        <div className="grid grid-cols-1 gap-3 mt-10">
          {data?.data.map((item) => (
            <AppCard
              key={item.id}
              onClick={() =>
                navigate(`/knowledge/${categoryId}/${subCategoryId}/${item.id}`)
              }
              className="flex flex-col w-full items-center justify-center transition-transform hover:scale-[1.01] active:scale-[0.99]"
            >
              <div className="text-center mt-2">
                <h3 className="font-bold text-foreground text-base leading-tight line-clamp-2">
                  {item.title}
                </h3>
              </div>

              <div className="flex items-center justify-center mt-2 gap-2 capitalize">
                <Badge className="capitalize leading-none px-2 pt-1.5 sm:pt-0">
                  {item.type &&
                    t(
                      "content.knowledge.categories." + item.type.toLowerCase(),
                    )}
                  {item.importance_level &&
                    t(
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
