import { useQuery } from "@tanstack/react-query";
import { apiClient } from "@/lib/api-client";

export function useGetKnowledgeCategories<T = unknown>(sourceLanguage: string) {
  return useQuery({
    queryKey: ["knowledge-categories", sourceLanguage],
    queryFn: () => {
      return apiClient<T>(
        "main/get-object-category-tree/" + sourceLanguage + "/json",
      );
    },
  });
}
