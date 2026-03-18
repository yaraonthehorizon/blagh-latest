import { useQuery } from "@tanstack/react-query";
import { apiClient } from "@/lib/api-client";

export function useGetKnowledgeItem<T = unknown>(
  itemId: string,
  sourceLanguage: string,
) {
  return useQuery({
    queryKey: ["knowledge-item", itemId, sourceLanguage],
    queryFn: () => {
      return apiClient<T>(`knowledge/get-item/${itemId}/${sourceLanguage}`);
    },
    staleTime: 1000 * 60 * 60,
    refetchOnWindowFocus: false,
  });
}
