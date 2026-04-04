import { useGetKnowledgeItem } from "@/queries/knowledge/use-get-knowledge-item";
import { useTranslation } from "react-i18next";
import {
  useLocation,
  useNavigate,
  useParams,
  useSearchParams,
} from "react-router-dom";
import { Header } from "@/components/Header";
import { Badge } from "@/components/ui/badge";
import { ReadableFilesViewer } from "@/components/ReadableFilesViewer";
import { AudioViewer } from "@/components/AudioViewer";
import { VideoViewer } from "@/components/VideoViewer";
import { ApplicationViewer } from "@/components/ApplicationViewer";
import { ShareButton } from "@/components/ShareButton";
import {
  KnowledgeItem,
  KnowledgeItemResponse,
} from "@/types/knowledge/knowledge-item";
import { KnowledgeItemsAttachmentTypes } from "@/types/knowledge/enums/knowledge-item-attachments";
import { Button } from "@/components/ui/button";

export function KnowledgeCategoryItem() {
  const { itemId } = useParams();
  const [searchParams] = useSearchParams();
  const section = searchParams.get("section");
  const { t, i18n } = useTranslation();
  const { state } = useLocation();
  const navigate = useNavigate();
  const item: KnowledgeItem = state?.item;
  const sectionKey = state?.sectionKey || section;
  const sourceLanguage = i18n.language.startsWith("ar") ? "ar" : "en";
  const { data, isLoading, isError } =
    useGetKnowledgeItem<KnowledgeItemResponse>(itemId, sourceLanguage);

  const resolvedItem =
    item ?? (data && !("error" in data) ? (data as KnowledgeItem) : null);

  console.log("KnowledgeCategoryItem data:", data);

  if (isLoading) {
    return (
      <div className="page-container">
        <div className="relative page-content">
          <Header headerTitleKey=" " backButton className="text-lg mt-2" />
          <div className="absolute top-1 end-1/2 -me-3  mt-1 h-7 w-32 animate-pulse rounded-md bg-muted/40" />
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

  const isDataError = isError || !resolvedItem;

  if (isDataError) {
    return (
      <div className="page-container">
        <div className="page-content">
          <Header
            headerTitleKey="page_title.knowledge"
            backButton
            className="text-xl"
          />
          <div className=" flex items-center justify-center h-[400px]">
            <p className="text-foreground text-lg">No item found</p>
          </div>
        </div>
      </div>
    );
  }

  // Safely extract our expected item shape after the error checks
  const attachmentsToRender =
    sectionKey &&
    (resolvedItem.attachments as unknown as KnowledgeItem)[sectionKey]
      ? (resolvedItem.attachments as unknown as KnowledgeItem)[sectionKey]
      : resolvedItem.attachments;

  return (
    <div className="page-container mb-12 ">
      <div className="page-content ">
        <Header
          headerTitleKey={
            resolvedItem.title.length > 15
              ? resolvedItem.title.slice(0, 15) + "..."
              : resolvedItem.title
          }
          backButton
          className="text-lg"
        />
        <div className="grid grid-cols-1 gap-3 mt-10  w-full">
          <div className="relative flex flex-col w-full items-center justify-center rounded-xl bg-muted/20 py-8 px-7">
            <div className="text-center mt-2">
              <h3 className="font-bold text-foreground text-lg leading-tight line-clamp-2">
                {resolvedItem.title}
              </h3>
              <p className="text-sm text-muted-foreground mt-1 leading-7">
                {resolvedItem.description ? resolvedItem.description : ""}
              </p>
            </div>
            <div className="flex items-center justify-center gap-2 mt-2">
              <Badge className="capitalize leading-none ">
                {t(
                  "content.knowledge.categories." +
                    resolvedItem.type.toLowerCase(),
                )}
              </Badge>
              <Badge className="capitalize leading-none ">
                {t(
                  "content.knowledge.importance." +
                    resolvedItem.importance_level.toLowerCase(),
                )}
              </Badge>
            </div>

            <div className="flex flex-col items-center justify-center mt-10 gap-5 ">
              {attachmentsToRender?.map((attachment, idx) => {
                const type: string = attachment.type.toLowerCase();

                if (type === KnowledgeItemsAttachmentTypes.video) {
                  return <VideoViewer key={idx} item={attachment} />;
                }

                if (type === KnowledgeItemsAttachmentTypes.audio) {
                  const trackId = `${resolvedItem.id}-${idx}`;

                  return (
                    <AudioViewer
                      key={`${resolvedItem.id}-${idx}`}
                      title={resolvedItem.title}
                      trackId={trackId}
                      item={attachment}
                    />
                  );
                }

                if (type === KnowledgeItemsAttachmentTypes.executable) {
                  return (
                    <ApplicationViewer
                      key={`${resolvedItem.id}-${idx}`}
                      title={resolvedItem.title}
                      item={attachment}
                    />
                  );
                }

                if (type === KnowledgeItemsAttachmentTypes.study_books) {
                  return (
                    <ReadableFilesViewer
                      key={`${resolvedItem.id}-${idx}`}
                      title={resolvedItem.title}
                      item={attachment}
                    />
                  );
                }

                if (type === KnowledgeItemsAttachmentTypes.interactive_books) {
                  return (
                    <div>
                      <Button
                        className="h-10 rounded-lg bg-primary text-primary-foreground text-lg font-semibold hover:bg-primary/90 transition-colors"
                        onClick={() =>
                          navigate(`/knowledge/read/${resolvedItem.id}`)
                        }
                      >
                        {t("content.knowledge.start_reading")}
                      </Button>
                    </div>
                  );
                }
              })}
              <ShareButton
                url={`knowledge-gift/${resolvedItem.id}`}
                buttonText={t("content.category_items.share")}
                title={resolvedItem.title}
                description={resolvedItem.description}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
