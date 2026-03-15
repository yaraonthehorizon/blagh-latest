import { useQuery } from "@tanstack/react-query";
import { apiClient } from "@/lib/api-client";

export function useGetKnowledgeSubcategory<T = unknown>(
  subCategoryId: string,
  sourceLanguage: string,
  translationLanguage: string,
) {
  return useQuery({
    queryKey: [
      "knowledge-subcategory",
      subCategoryId,
      sourceLanguage,
      translationLanguage,
    ],
    queryFn: () => {
      return apiClient<T>(
        `knowledge/get-subcategory-items/${subCategoryId}/${sourceLanguage}/${translationLanguage}`,
      );
    },
  });
}
