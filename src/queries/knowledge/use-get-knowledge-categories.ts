import { useQuery } from "@tanstack/react-query";
import { apiClient } from "@/lib/api-client";

export function useGetKnowledgeCategories<T = unknown>(sourceLanguage: string) {
  return useQuery({
    queryKey: ["knowledge-categories", sourceLanguage],
    queryFn: () => {
      return apiClient<T>(`knowledge/get-category-tree/${sourceLanguage}`);
    },
  });
}
