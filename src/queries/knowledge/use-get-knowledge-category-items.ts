import { useQuery } from "@tanstack/react-query";
import { apiClient } from "@/lib/api-client";

export function useGetKnowledgeCategoryItems<T = unknown>(
  categoryId: string,
  sourceLanguage: string,
  translationLanguage: string,
  page: number = 1,
  pageSize: number = 25,
) {
  return useQuery({
    queryKey: [
      "knowledge-category-items",
      categoryId,
      page,
      pageSize,
      sourceLanguage,
      translationLanguage,
    ],
    queryFn: () => {
      return apiClient<T>(
        `knowledge/get-category-items/${categoryId}/${translationLanguage}/${sourceLanguage}/${page}/${pageSize}`,
      );
    },
    staleTime: 1000 * 60 * 60,
    refetchOnWindowFocus: false,
  });
}
