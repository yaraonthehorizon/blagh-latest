import { useQuery } from "@tanstack/react-query";
import { apiClient } from "@/lib/api-client";
import i18n from "@/lib/i18n/init";

// You can define a specific interface for the response data here if known
export function useGetQuranRecitationCategoryDetails<T = unknown>(
  recitationId?: string | number,
) {
  const locale = i18n.language.startsWith("ar") ? "ar" : "en";

  return useQuery({
    queryKey: ["quran-recitation-category", recitationId, locale],
    queryFn: () => {
      return apiClient<T>(`quran/get-category/${recitationId}/${locale}/json`);
    },
  });
}
