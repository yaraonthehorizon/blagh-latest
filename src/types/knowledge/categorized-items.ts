import { KnowledgeItem } from '.'

export interface CategorizedItems {
    video: KnowledgeItem[]
    audio: KnowledgeItem[]
    books: {
        'interactive-books': KnowledgeItem[]
        'study-books': KnowledgeItem[]
    }
    executable: KnowledgeItem[]
    other: KnowledgeItem[]
}
