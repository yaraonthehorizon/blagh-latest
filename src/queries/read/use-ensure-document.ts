import { useQuery } from "@tanstack/react-query";
import { apiClient } from "@/lib/api-client";
import { EnsureDocumentRequest } from "@/types/read/requests";
import { EnsureDocumentResponse } from "@/types/read/responses/ensure-document-response";

export function useEnsureDocument({
  contentExternalSourceId,
  sourceType,
  sourceLanguage,
}: EnsureDocumentRequest) {
  return useQuery({
    queryKey: ["document", contentExternalSourceId, sourceType, sourceLanguage],

    enabled: !!contentExternalSourceId,

    queryFn: async () => {
      return apiClient<EnsureDocumentRequest, EnsureDocumentResponse>(
        "content/ensure",
        {
          data: {
            contentExternalSourceId,
            sourceType,
            sourceLanguage,
          },
        },
      );
    },

    refetchInterval: (query) => {
      const response = query.state.data;

      if (!response) return 3000;

      if (response.status === "pending" || response.status === "processing") {
        return 3000;
      }

      return false;
    },

    refetchOnWindowFocus: false,
  });
}
