import {
  AlertTriangle,
  Download,
  ExternalLink,
  FileArchive,
  Smartphone,
} from "lucide-react";
import { useTranslation } from "react-i18next";

interface ApplicationViewerProps {
  title: string;
  image?: string;
  item: {
    order?: number;
    size: string;
    extension_type: string;
    description: string;
    url: string;
  };
}

export function ApplicationViewer({
  item,
  image,
  title,
}: ApplicationViewerProps) {
  const isLink = item.extension_type === "LINK";
  const isArchive = ["rar", "zip", "7z"].includes(
    item.extension_type.toLowerCase(),
  );

  const { t } = useTranslation();

  return (
    <div className="flex flex-col gap-4 mt-5 w-full bg-card border rounded-xl p-4 shadow-sm">
      <div className="flex gap-4 items-start">
        <div className="shrink-0">
          {image ? (
            <img
              src={image}
              alt={title}
              className="w-16 h-16 rounded-xl object-cover border bg-muted"
            />
          ) : (
            <div className="w-16 h-16 rounded-xl border bg-muted/50 flex items-center justify-center">
              {isArchive ? (
                <FileArchive className="w-8 h-8 text-muted-foreground" />
              ) : (
                <Smartphone className="w-8 h-8 text-muted-foreground" />
              )}
            </div>
          )}
        </div>
        <div className="flex flex-col flex-1 min-w-0">
          <h3 className="font-semibold text-base leading-tight text-foreground">
            {title}
          </h3>
          <p className="text-sm text-muted-foreground mt-1 line-clamp-2">
            {item.description || "No description available"}
          </p>
          <div className="flex items-center gap-2 mt-2">
            <span className="text-[10px] font-bold px-2 py-0.5 bg-secondary/20 text-secondary rounded uppercase">
              {item.extension_type}
            </span>
            {item.size && item.size !== "0 B" && (
              <span className="text-[10px] text-muted-foreground font-medium">
                {item.size}
              </span>
            )}
          </div>
        </div>
      </div>

      <a
        href={item.url}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-2 w-full h-10 rounded-lg bg-primary text-primary-foreground text-sm font-semibold hover:bg-primary/90 transition-colors"
      >
        {isLink ? (
          <>
            {t("content.category_items.view_file")}{" "}
            <ExternalLink className="w-4 h-4" />
          </>
        ) : (
          <>
            {t("content.category_items.download_file")}{" "}
            <Download className="w-4 h-4" />
          </>
        )}
      </a>

      <div className="flex gap-2 items-start p-3 bg-muted/30 rounded-lg border border-muted/50">
        <AlertTriangle className="w-4 h-4 text-muted-foreground shrink-0 mt-0.5" />
        <p className="text-[10px] text-muted-foreground leading-relaxed">
          {t("content.category_items.disclaimer")}
        </p>
      </div>
    </div>
  );
}
