import { useState, useEffect, useLayoutEffect } from "react";
import { Header } from "@/components/Header";
import { AppCard } from "@/components/AppCard";
import { useNavigate, useParams } from "react-router-dom";
import { KnowledgeResponse } from "@/types/knowledge";
import { useQueryClient } from "@tanstack/react-query";
import { useGetKnowledgeCategories } from "@/queries/knowledge/use-get-knowledge-categories";
import { useTranslation } from "react-i18next";
import { Badge } from "@/components/ui/badge";
import type { KnowledgeItem, KnowledgePagination } from "@/types/knowledge";
import { ChevronDown } from "lucide-react";
import { PaginationControls } from "@/components/Pagination";
import { useGetKnowledgeCategoryItems } from "@/queries/knowledge/use-get-knowledge-category-items";
import { CategorizedItems } from "@/types/knowledge/categorized-items";
import {
  KNOWLEDGE_CATEGORY_ITEMS_PAGE_SIZE,
  SHOW_LESS_ITEMS_SCROLL_OFFSET,
} from "@/constants";
export function KnowledgeCategory() {
  const { categoryId } = useParams();
  const { t, i18n } = useTranslation();
  const [page, setPage] = useState(1);
  const [expandedSections, setExpandedSections] = useState<
    Record<string, boolean>
  >({});
  const [lastCollapsedSection, setLastCollapsedSection] = useState<
    string | null
  >(null);
  const pageSize = KNOWLEDGE_CATEGORY_ITEMS_PAGE_SIZE;

  const sourceLanguage = i18n.language.startsWith("ar") ? "ar" : "en";
  const translationLanguage = i18n.language.startsWith("ar") ? "ar" : "en";

  const navigate = useNavigate();
  const queryClient = useQueryClient();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [page]);

  useLayoutEffect(() => {
    if (lastCollapsedSection === null) return;

    const element = document.getElementById(`section-${lastCollapsedSection}`);
    if (element) {
      const y =
        element.getBoundingClientRect().top +
        window.scrollY -
        SHOW_LESS_ITEMS_SCROLL_OFFSET; // 100px offset for header
      window.scrollTo({ top: y, behavior: "auto" });
    }
    setLastCollapsedSection(null); // Reset after scrolling
  }, [lastCollapsedSection]);

  const toggleSection = (key: string) => {
    const isExpanded = expandedSections[key];

    setExpandedSections((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
    if (isExpanded) setLastCollapsedSection(key);
  };

  // Try reading categories from cache
  const cachedCategoriesResponse = queryClient.getQueryData<KnowledgeResponse>([
    "knowledge-categories",
    sourceLanguage,
  ]);

  const cachedCategories = cachedCategoriesResponse?.sub_categories;
  const cachedCategory = cachedCategories?.find(
    (c) => c.id === Number(categoryId),
  );

  const cachedTitle = cachedCategory?.title;

  // If title is not in cache, fetch all categories to find it.
  // This will be fast if data is already in the query cache.
  const { data: fetchedCategoriesResponse, isLoading: isLoadingCategories } =
    useGetKnowledgeCategories<KnowledgeResponse>(sourceLanguage);

  const fetchedCategory = fetchedCategoriesResponse?.sub_categories?.find(
    (c) => c.id === Number(categoryId),
  );

  const fetchedTitle = fetchedCategory?.title;

  const title = cachedTitle || fetchedTitle || "";

  const { data, isLoading, isError } = useGetKnowledgeCategoryItems<{
    data: CategorizedItems;
    links: KnowledgePagination;
  }>(categoryId, sourceLanguage, translationLanguage, page, pageSize);

  const isPageLoading =
    (isLoading && !data) || (isLoadingCategories && !cachedTitle);

  if (isError || "error" in (data ?? {})) {
    return (
      <div className="page-container">
        <div className="page-content">
          <Header headerTitleKey="page_title.knowledge" backButton />
          <div className=" flex items-center justify-center h-[400px]">
            <p className="text-foreground text-lg">Error loading categories</p>
          </div>
        </div>
      </div>
    );
  }

  if (isPageLoading)
    return (
      <div className="page-container">
        <div className="relative page-content">
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

  return (
    <div className="page-container">
      <div className="page-content">
        <Header
          headerTitleKey={
            title.length > 15 ? title.slice(0, 15) + "..." : title || " "
          }
          backButton
          className="text-lg"
        />
        <div className="flex flex-col w-full mt-10">
          {[
            { key: "audios", items: data?.data?.audio },
            { key: "videos", items: data?.data?.video },
            {
              key: "interactive-books",
              items: data?.data?.books?.["interactive-books"],
            },
            { key: "study-books", items: data?.data?.books?.["study-books"] },
          ].map(
            (section) =>
              section.items &&
              section.items.length > 0 && (
                <div
                  key={section.key}
                  id={`section-${section.key}`}
                  className="mb-8 w-full"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <h2 className="text-lg font-bold text-primary">
                      {t(`content.knowledge.categories.${section.key}`)}
                    </h2>
                    <div className="flex-1 h-px bg-border"></div>
                  </div>

                  <div className="grid grid-cols-1 gap-3">
                    {section.items
                      .slice(0, expandedSections[section.key] ? undefined : 2)
                      .map((item: KnowledgeItem) => (
                        <AppCard
                          key={item.id}
                          onClick={() => navigate(`/knowledge/item/${item.id}`)}
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
                                  "content.knowledge.categories." +
                                    item.type.toLowerCase(),
                                )}
                            </Badge>
                            <Badge className="capitalize leading-none px-2 pt-1.5 sm:pt-0">
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
                  {section.items.length > 2 && (
                    <button
                      onClick={() => toggleSection(section.key)}
                      className="w-full mt-3 py-2 flex items-center justify-center gap-2 text-sm font-bold text-primary bg-primary/5 rounded-lg hover:bg-primary/10 transition-colors"
                    >
                      {expandedSections[section.key]
                        ? t("content.knowledge.show_less")
                        : t("content.knowledge.show_more")}
                      <ChevronDown
                        className={`w-4 h-4 transition-transform ${
                          expandedSections[section.key] ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                  )}
                </div>
              ),
          )}
        </div>
        <PaginationControls
          page={page}
          totalPages={data?.links?.pages_number}
          setPage={setPage}
        />
      </div>
    </div>
  );
}
