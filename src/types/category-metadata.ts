export interface CategoryMetadata {
  id: number;
  source_id: number;
  title: string;
  description?: string;
  type: string;
  locales: string[];
  authors: unknown[];
}
