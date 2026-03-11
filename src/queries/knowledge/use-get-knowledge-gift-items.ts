import { apiClient } from "@/lib/api-client";
import i18n from "@/lib/i18n/init";
import { useQuery } from "@tanstack/react-query";

const GIFT_ITEM_IDs = [393432, 2841126, 2833536, 2843440, 2843544];

export function useGetKnowledgeGiftItems<T = unknown>(sourceLanguage: string) {
  return useQuery({
    queryKey: ["knowledge-gift-items", sourceLanguage],
    queryFn: async () => {
      const promises = GIFT_ITEM_IDs.map((id) =>
        apiClient<T>("main/get-item/" + id + "/" + sourceLanguage + "/json"),
      );
      return Promise.all(promises);
    },
  });
}
