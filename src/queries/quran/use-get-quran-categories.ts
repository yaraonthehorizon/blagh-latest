import { useQuery } from "@tanstack/react-query";
import { apiClient } from "@/lib/api-client";
import i18n from "@/lib/i18n/init";

interface QuranCategory {
  id: string;
  text: string;
  narrator: string;
}

export function useGetQuranCategories(locale: string) {
  return useQuery({
    queryKey: ["quran-categories"],
    queryFn: () => {
      return apiClient<QuranCategory[]>("quran/get-categories/" + locale);
    },
    staleTime: 1000 * 60 * 60,
    refetchOnWindowFocus: false,
  });
}
