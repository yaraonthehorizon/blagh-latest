import { apiClient } from "@/lib/api-client";
import { useQuery } from "@tanstack/react-query";

const CATEGORY_IDS = [364764, 364777, 364774, 364771, 364768];

export function useGetQuranRecitationCategories<T = unknown>(locale: string) {
  return useQuery({
    queryKey: ["quran-category", locale],
    queryFn: async () => {
      const promises = CATEGORY_IDS.map((id) =>
        apiClient<T>(`quran/recitation/get-category/${id}/${locale}`),
      );
      return Promise.all(promises);
    },
    staleTime: 1000 * 60 * 60,
    refetchOnWindowFocus: false,
  });
}
