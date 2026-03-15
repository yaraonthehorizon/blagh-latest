import { useQuery } from "@tanstack/react-query";
import { apiClient } from "@/lib/api-client";

export function useGetKnowledgeItem<T = unknown>(
  itemId: string,
  sourceLanguage: string,
  translationLanguage: string,
) {
  return useQuery({
    queryKey: ["knowledge-item", itemId, sourceLanguage, translationLanguage],
    queryFn: () => {
      return apiClient<T>(
        `knowledge/get-item/${itemId}/${translationLanguage}/${sourceLanguage}`,
      );
    },
  });
}
