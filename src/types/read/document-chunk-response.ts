import { Chunk } from ".";

export interface DocumentChunkResponse {
  chunks: Chunk[];
  hasMore: boolean;
  nextCursor: number;
  prevCursor: number;
}
