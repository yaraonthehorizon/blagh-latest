import { useQuery } from "@tanstack/react-query";
import { apiClient } from "@/lib/api-client";

// You can define a specific interface for the response data here if known
export function useGetQuranRecitersAndAssociatedRecitations<T = unknown>(
  locale: string,
) {
  // /quran/get-category/364794/ar/json
  return useQuery({
    queryKey: [
      "quran-get-reciters-and-associated-recitations",
      `quran/recitation/get-reciters-and-associated-recitations/364794/${locale}`,
    ],
    queryFn: () => {
      return apiClient<T>(
        `quran/recitation/get-reciters-and-associated-recitations/364794/${locale}`,
      );
    },
  });
}
