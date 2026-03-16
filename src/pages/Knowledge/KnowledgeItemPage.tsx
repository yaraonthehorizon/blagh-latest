import { useGetKnowledgeItem } from "@/queries/knowledge/use-get-knowledge-item";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import { KnowledgeItem } from "@/types/knowledge";
import { Header } from "@/components/Header";
import { Badge } from "@/components/ui/badge";
import { ReadableFilesViewer } from "@/components/ReadableFilesViewer";
import { AudioViewer } from "@/components/AudioViewer";
import { VideoViewer } from "@/components/VideoViewer";
import { ApplicationViewer } from "@/components/ApplicationViewer";
import { ShareButton } from "@/components/ShareButton";

export function KnowledgeItemPage() {
  const { itemId } = useParams();
  const { t, i18n } = useTranslation();
  const sourceLanguage = i18n.language.startsWith("ar") ? "ar" : "en";
  const { data, isLoading, error } = useGetKnowledgeItem<{
    data: KnowledgeItem;
  }>(itemId, sourceLanguage, sourceLanguage);

  if (isLoading) {
    return (
      <div className="page-container">
        <div className="relative page-content">
          <Header headerTitleKey=" " backButton className="text-lg mt-2" />
          <div className="absolute top-1 end-2/4  mt-1 h-7 w-32 animate-pulse rounded-md bg-muted/40" />
          <div className="grid grid-cols-1 gap-3 mt-10">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div
                key={i}
                className="h-24 rounded-xl bg-muted/40 animate-pulse"
              />
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="page-container">
        <div className="page-content">
          <Header
            headerTitleKey="page_title.knowledge"
            backButton
            className="text-xl"
          />
          <div className=" flex items-center justify-center h-[400px]">
            <p className="text-foreground text-lg">Error loading item</p>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="page-container">
      <div className="page-content">
        <Header
          headerTitleKey={
            data.data.title.length > 20
              ? data.data.title.slice(0, 20) + "..."
              : data.data.title
          }
          backButton
          className="line-clamp-2 text-sm"
        />
        <div className="grid grid-cols-1 gap-3 mt-10">
          <div
            key={data.data.id}
            className="relative flex flex-col w-full items-center justify-center rounded-xl bg-muted/20 py-8 px-7"
          >
            <div className="absolute top-2 end-5 w-10 "></div>
            <div className="text-center mt-2">
              <h3 className="font-bold text-foreground text-lg leading-tight line-clamp-2">
                {data.data.title}
              </h3>
              <p className="text-sm text-muted-foreground mt-1 leading-7">
                {data.data.description ? data.data.description : ""}
              </p>
            </div>
            <div className="flex items-center justify-center gap-2 mt-2">
              <Badge className="capitalize leading-none px-2 pt-1.5 sm:pt-0">
                {t(
                  "content.knowledge.categories." +
                    data.data.type.toLowerCase(),
                )}
              </Badge>
              <Badge className="capitalize leading-none px-2 pt-1.5 sm:pt-0">
                {t(
                  "content.knowledge.importance." +
                    data.data.importance_level.toLowerCase(),
                )}
              </Badge>
            </div>

            <div className="flex items-center justify-center mt-2 gap-5 ">
              <div className="w-full ">
                {data.data.attachments?.map((attachment, idx) => {
                  const extension =
                    attachment.extension_type?.toLowerCase() || "";
                  const type = data.data.type.toLowerCase();

                  if (
                    ["mp4", "mov", "avi", "mkv", "webm"].includes(extension)
                  ) {
                    return (
                      <VideoViewer
                        key={idx}
                        title={data.data.title}
                        item={attachment}
                      />
                    );
                  }

                  if (
                    ["mp3", "wav", "m4a", "aac", "ogg", "wma"].includes(
                      extension,
                    )
                  ) {
                    const trackId = `${data.data.id}-${idx}`;

                    return (
                      <AudioViewer
                        key={idx}
                        title={data.data.title}
                        trackId={trackId}
                        item={attachment}
                      />
                    );
                  }

                  if (
                    ["link", "zip", "rar", "7z", "apk", "exe"].includes(
                      extension,
                    )
                  ) {
                    return (
                      <ApplicationViewer
                        key={idx}
                        image={data.data.image}
                        title={data.data.title}
                        item={attachment}
                      />
                    );
                  }

                  if (
                    [
                      "pdf",
                      "docx",
                      "doc",
                      "txt",
                      "jpg",
                      "jpeg",
                      "png",
                    ].includes(extension)
                  ) {
                    return (
                      <ReadableFilesViewer
                        key={idx}
                        title={data.data.title}
                        item={attachment}
                      />
                    );
                  }
                })}
                <ShareButton
                  url={
                    import.meta.env.VITE_BASE_WEB_URL +
                    `knowledge-gift/${data.data.id}`
                  }
                  buttonText={t("content.category_items.share")}
                  title={data.data.title}
                  description={data.data.description}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
