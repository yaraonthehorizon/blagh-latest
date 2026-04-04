import { useInfiniteQuery } from "@tanstack/react-query";
import { apiClient } from "@/lib/api-client";
import { DocumentChunkResponse } from "@/types/read";

export function useGetDocumentChunks(
  contentId: string,
  limit: number,
  documentStatus?: string,
) {
  return useInfiniteQuery<DocumentChunkResponse>({
    queryKey: ["document-chunks", contentId, limit],

    enabled: !!contentId,

    initialPageParam: null as number | null,

    queryFn: ({ pageParam }) => {
      const params = new URLSearchParams();

      if (pageParam !== null && pageParam !== undefined) {
        params.append("cursor", String(pageParam));
      }

      params.append("limit", String(limit));
      params.append("direction", "next");

      return apiClient<DocumentChunkResponse>(
        `content/${contentId}/chunks?${params.toString()}`,
      );
    },

    getNextPageParam: (lastPage) => {
      return lastPage.nextCursor ?? undefined;
    },

    refetchInterval: (query) => {
      const lastPage =
        query.state.data?.pages[query.state.data.pages.length - 1];

      if (!lastPage) return 1000;

      if (documentStatus === "pending" || documentStatus === "processing") {
        return 1000;
      }

      return false;
    },

    refetchOnWindowFocus: false,
    staleTime: 1000 * 60 * 60,
  });
}
