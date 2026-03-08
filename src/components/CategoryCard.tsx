import { ArrowRight } from "lucide-react";

interface CategoryCardProps {
  title: string;
  count?: number;
  onClick?: () => void;
}

export function CategoryCard({ title, count, onClick }: CategoryCardProps) {
  return (
    <div
      onClick={onClick}
      className="group flex items-center justify-between p-4 bg-surface border border-bdr-p rounded-[16px] cursor-pointer hover:border-primary2 transition-colors shadow-sm active:scale-[0.98] transition-transform"
    >
      <div className="flex flex-col gap-1">
        <h3 className="text-sm font-bold text-foreground group-hover:text-primary2 transition-colors">
          {title}
        </h3>
        {count !== undefined && (
          <span className="text-[10px] text-muted-foreground">
            {count} {count === 1 ? "Item" : "Items"}
          </span>
        )}
      </div>
      <div className="w-8 h-8 rounded-full bg-surface3 flex items-center justify-center group-hover:bg-primary2 group-hover:text-white transition-colors">
        <ArrowRight className="w-4 h-4 rtl:rotate-180" />
      </div>
    </div>
  );
}
