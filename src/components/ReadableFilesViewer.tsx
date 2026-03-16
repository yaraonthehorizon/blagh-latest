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
export function ReadableFilesViewer({
  key,
  item,
  title,
}: ReadableFilesViewerProps) {
  const isDocx = item.extension_type.toLowerCase() === "docx";
  const { t } = useTranslation();
  const [showIframe, setShowIframe] = useState(false);

  return (
    <div key={key} className="flex flex-col items-center mt-5 w-full">
      {isDocx ? (
        <div className="flex flex-col items-center justify-center w-full h-48 bg-muted/20 rounded-lg mb-2 border">
          <File className="w-12 h-12 text-muted-foreground" />
          <p className="mt-2 text-xs text-muted-foreground">
            {t("content.category_items.no_preview")}
          </p>
        </div>
      ) : (
        <div>
          {!showIframe ? (
            <div className="flex flex-col items-center  justify-center w-full h-48 bg-muted/20 rounded-lg mb-2 border px-10">
              <File className="w-12 h-12 text-muted-foreground" />

              <button
                className="mt-2 px-12 py-2 bg-primary text-white rounded"
                onClick={() => setShowIframe(true)}
              >
                {t("content.category_items.view_file")}
              </button>
              <p className="mt-2 text-sm text-muted-foreground">{item.size}</p>
            </div>
          ) : (
            <iframe
              src={`${item.url}#view=FitH`}
              title={title}
              className="w-full h-[500px] rounded-lg mb-2 border overflow-auto"
            />
          )}
        </div>
      )}
      <div className="flex rtl:flex-row-reverse items-center justify-center gap-2 w-full h-10 mt-5 rounded-lg bg-primary text-primary-foreground text-sm font-semibold hover:bg-primary/90 transition-colors">
        <a
          href={item.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-center -pt-1  flex items-center gap-1 text-lg 
"
        >
          {isDocx
            ? `${t("content.category_items.download_file")} (${item.order + 1})`
            : `${t("content.category_items.view_file")} (${item.order + 1})`}
        </a>
        <ArrowRight size={20} className="inline-block -mt-0.5 sm:mt-0 " />
      </div>
    </div>
  );
}
