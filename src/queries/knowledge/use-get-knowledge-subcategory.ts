import { useQuery } from "@tanstack/react-query";
import { apiClient } from "@/lib/api-client";

export function useGetKnowledgeSubcategory<T = unknown>(
  subCategoryId: string,
  sourceLanguage: string,
) {
  return useQuery({
    queryKey: ["knowledge-subcategory", subCategoryId, sourceLanguage],
    queryFn: () => {
      return apiClient<T>(
        "categories/viewitems/" +
          subCategoryId +
          "/showall/" +
          sourceLanguage +
          "/showall" +
          "/json",
      );
    },
  });
}
