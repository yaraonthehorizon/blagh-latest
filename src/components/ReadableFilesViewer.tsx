import { ArrowRight, File } from "lucide-react";
import { useState } from "react";
import { useTranslation } from "react-i18next";

interface ReadableFilesViewerProps {
  key: number;
  title: string;
  item: {
    order: number;
    size: string;
    extension_type: string;
    description: string;
    url: string;
  };
}
export function ReadableFilesViewer(props: ReadableFilesViewerProps) {
  const [loading, setLoading] = useState(true);
  const isDocx = props.item.extension_type.toLowerCase() === "docx";
  const { t } = useTranslation();

  return (
    <div key={props.key} className="flex flex-col items-center mt-5 w-full">
      {isDocx ? (
        <div className="flex flex-col items-center justify-center w-full h-48 bg-muted/20 rounded-lg mb-2 border">
          <File className="w-12 h-12 text-muted-foreground" />
          <p className="mt-2 text-sm text-muted-foreground">
            {t("content.category_items.no_preview")}
          </p>
        </div>
      ) : (
        <div
          className="relative w-full h-[500px] rounded-lg mb-2 border overflow-auto"
          style={{ WebkitOverflowScrolling: "touch" }}
        >
          {loading && (
            <div className="absolute inset-0 flex items-center justify-center bg-muted/70 backdrop-blur-sm">
              <span className="text-md text-foreground font-bold animate-pulse">
                Loading...
              </span>
            </div>
          )}

          <iframe
            src={`${props.item.url}#view=FitH`}
            title={props.title}
            className="w-full h-full"
            allowFullScreen
            onLoad={() => setLoading(false)}
          />
        </div>
      )}
      <div className="flex rtl:flex-row-reverse items-center justify-center gap-2 w-full h-10 mt-5 rounded-lg bg-primary text-primary-foreground text-sm font-semibold hover:bg-primary/90 transition-colors">
        <a
          href={props.item.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-center pt-1 capitalize  flex items-center gap-1 text-lg 
"
        >
          {isDocx ? "Download Document" : "View file"}
        </a>
        <ArrowRight size={20} className="inline-block -mt-0.5 sm:mt-0 " />
      </div>
    </div>
  );
}
