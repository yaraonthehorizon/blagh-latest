import { useQuery } from "@tanstack/react-query";
import { apiClient } from "@/lib/api-client";

export function useGetKnowledgeSubcategoryItems<T = unknown>(
  subCategoryId: string,
  sourceLanguage: string,
  translationLanguage: string,
  page: number,
  pageSize: number,
) {
  return useQuery({
    queryKey: [
      "knowledge-subcategory",
      subCategoryId,
      sourceLanguage,
      translationLanguage,
      page,
      pageSize,
    ],
    queryFn: () => {
      return apiClient<T>(
        `knowledge/get-subcategory-items/${subCategoryId}/${sourceLanguage}/${translationLanguage}/${page}/${pageSize}`,
      );
    },
  });
}
