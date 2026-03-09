import { apiClient } from "@/lib/api-client";
import i18n from "@/lib/i18n/init";
import { useQuery } from "@tanstack/react-query";

const CATEGORY_IDS = [364764, 364777, 364774, 364771, 364768];

export function useGetRecitationCategories() {
  const locale = i18n.language.startsWith("ar") ? "ar" : "en";

  return useQuery({
    queryKey: ["quran-categories", locale],
    queryFn: async () => {
      const promises = CATEGORY_IDS.map((id) =>
        apiClient(`quran/get-category/${id}/${locale}/json`),
      );
      return Promise.all(promises);
    },
  });
}
