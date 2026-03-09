import { useQuery } from "@tanstack/react-query";
import { apiClient } from "@/lib/api-client";
import i18n from "@/lib/i18n/init";

// You can define a specific interface for the response data here if known
export function useGetQuranReciterDetails<T = unknown>() {
  const locale = i18n.language.startsWith("ar") ? "ar" : "en";

  return useQuery({
    queryKey: [
      "quran-reciter-details",
      `quran/get-category/364794/${locale}/json`,
    ],
    queryFn: () => {
      return apiClient<T>(`quran/get-category/364794/${locale}/json`);
    },
  });
}
