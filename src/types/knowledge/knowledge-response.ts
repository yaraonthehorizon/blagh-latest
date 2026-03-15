import { KnowledgeCategory } from "./knowledge-category";

export interface KnowledgeResponse {
  id: number;
  source_id: number;
  title: string;
  description: string;
  translation_language: string;
  source_language: string;
  categories: KnowledgeCategory[];
  sub_categories: KnowledgeCategory[];
  all_sub_categories: KnowledgeCategory[];
}
