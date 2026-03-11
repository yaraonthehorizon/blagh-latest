import { useQuery } from "@tanstack/react-query";
import { apiClient } from "@/lib/api-client";
import { KnowledgeItem } from "@/types/knowledge";

export function useGetKnowledgeCategory<T = unknown>(
  categoryId: string,
  sourceLanguage: string,
  translationLanguage: string,
  page: number = 1,
  pageSize: number = 25,
) {
  return useQuery({
    queryKey: [
      "knowledge-category",
      categoryId,
      page,
      pageSize,
      sourceLanguage,
      translationLanguage,
    ],
    queryFn: () => {
      return apiClient<T>(
        "main/get-category-items/" +
          categoryId +
          "/showall/" +
          translationLanguage +
          "/" +
          sourceLanguage +
          "/" +
          page +
          "/" +
          pageSize +
          "/json",
      );
    },
  });
}
