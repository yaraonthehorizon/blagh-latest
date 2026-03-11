import {
  KnowledgeDataItems,
  KnowledgeItem,
  KnowledgePagination,
} from "@/types/knowledge";

export function isKnowledgeItems(
  data: KnowledgeDataItems,
): data is { data: KnowledgeItem[]; links: KnowledgePagination } {
  return "data" in data;
}
