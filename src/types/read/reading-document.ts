import { DocumentProgressState } from "./enums/document-state";

export interface ReadingDocument {
  contentTitle: string;
  contentDescription: string;
  contentId: string;
  contentType: "interactive_book" | "quran" | "hadeeth";
  status: DocumentProgressState;
}
