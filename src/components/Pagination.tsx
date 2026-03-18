import { ChevronLeft, ChevronRight } from "lucide-react";

interface PaginationControlsProps {
  page: number;
  totalPages?: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  className?: string;
}

export function PaginationControls({
  page,
  totalPages = 1,
  setPage,
  className = "",
}: PaginationControlsProps) {
  return (
    <div
      className={`flex items-center justify-between mt-8 mb-4 mx-20 ${className}`}
    >
      <button
        disabled={page === 1}
        onClick={() => setPage((p) => Math.max(1, p - 1))}
        className="p-3 text-sm font-bold border border-bdr-p rounded-full bg-surface disabled:opacity-50 transition-transform active:scale-95 text-foreground shadow-sm"
      >
        <ChevronRight className="h-4 w-4" />
      </button>

      <span className="text-sm font-bold text-muted-foreground">
        {page} / {totalPages}
      </span>

      <button
        disabled={page >= totalPages}
        onClick={() => setPage((p) => p + 1)}
        className="p-3 text-sm font-bold border border-bdr-p rounded-full bg-surface disabled:opacity-50 transition-transform active:scale-95 text-foreground shadow-sm"
      >
        <ChevronLeft className="h-4 w-4" />
      </button>
    </div>
  );
}
