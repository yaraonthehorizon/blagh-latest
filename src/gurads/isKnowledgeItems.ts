import { KnowledgeItem } from "@/types/knowledge";
import { KnowledgeItemResponse } from "@/types/knowledge/knowledge-item";

export function isKnowledgeItemResponse(
  item: KnowledgeItemResponse,
): item is Extract<KnowledgeItemResponse, { data: KnowledgeItem }> {
  return "data" in item && !!item.data;
}
