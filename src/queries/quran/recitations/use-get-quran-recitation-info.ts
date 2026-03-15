import { useQuery } from "@tanstack/react-query";
import { apiClient } from "@/lib/api-client";

export function useGetRecitationInfo<T = unknown>(
  recitationId: string | number,
  locale: string,
) {
  return useQuery({
    queryKey: ["recitation-info", recitationId],
    queryFn: () => {
      if (!recitationId) throw new Error("Recitation ID is required");
      //recitations are only in arabic so we can hardcode the language to arabic
      return apiClient<T>(
        `quran/recitation/get-recitation/${recitationId}/${locale}`,
      );
    },
    enabled: !!recitationId,
  });
}
