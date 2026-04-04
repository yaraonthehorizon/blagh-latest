import { Header } from "@/components/Header";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import { useEnsureDocument } from "@/queries/read/use-ensure-document";
import { useGetDocumentChunks } from "@/queries/read/use-get-document-chunks";
import { DocumentProgressState } from "@/types/read/enums/document-state";
import { Button } from "@/components/ui/button";
import { Loader2, BookOpen } from "lucide-react";
import { BouncingDotsLoader } from "@/components/BouncingDotsLoader";

export function ReadInteractiveBook() {
  const { contentExternalSourceId } = useParams();

  const { t, i18n } = useTranslation();
  const sourceLanguage = i18n.language.startsWith("ar") ? "ar" : "en";

  const {
    isLoading: isEnsureLoading,
    isError: isEnsureError,
    data: currentReadingDocument,
  } = useEnsureDocument({
    contentExternalSourceId,
    sourceLanguage,
    sourceType: "knowledge",
  });
  const contentId = currentReadingDocument?.contentId;

  const {
    data: chunksData,
    isError: isChunksError,
    hasNextPage,
    isFetchingNextPage,
    fetchNextPage,
  } = useGetDocumentChunks(
    contentId!,
    5,

    currentReadingDocument?.status,
  );

  const isPageLoading = !currentReadingDocument || isEnsureLoading;
  const isError = isEnsureError || isChunksError;

  if (isPageLoading) {
    return (
      <div className="page-container">
        <div className="page-content">
          <Header
            headerTitleKey={
              currentReadingDocument?.contentTitle.length > 15
                ? currentReadingDocument?.contentTitle.slice(0, 15)
                : currentReadingDocument?.contentTitle
            }
            backButton
            className="text-2xl mt-2"
          />
          <div className="flex flex-col gap-4 mt-10 px-2">
            {[100, 92, 96, 85, 94, 78, 90, 88].map((width, i) => (
              <div
                key={i}
                className="h-4 rounded-full bg-muted/30 animate-pulse"
                style={{ width: `${width}%` }}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }

  switch (currentReadingDocument?.status) {
    case DocumentProgressState.Pending:
      return (
        <div className="page-container">
          <div className="page-content">
            <Header
              headerTitleKey={
                currentReadingDocument?.contentTitle.length > 12
                  ? currentReadingDocument?.contentTitle.slice(0, 12) + "..."
                  : currentReadingDocument?.contentTitle
              }
              backButton
              className="text-2xl mt-2"
            />

            <div className="flex flex-col items-center justify-center mt-32 space-y-6">
              <div className="relative">
                <BookOpen className="w-16 h-16 text-primary/40 animate-bounce" />
              </div>
              <div className="flex flex-col items-center space-y-2">
                <p className="text-lg font-medium text-muted-foreground animate-pulse">
                  {t("content.knowledge.reader_loading")}
                </p>
                <BouncingDotsLoader />
              </div>
            </div>
          </div>
        </div>
      );
    case DocumentProgressState.Processing:
    case DocumentProgressState.Ready:
      return (
        <div className="page-container">
          <div className="page-content">
            <Header
              headerTitleKey={
                currentReadingDocument?.contentTitle.length > 12
                  ? currentReadingDocument?.contentTitle.slice(0, 12) + "..."
                  : currentReadingDocument?.contentTitle
              }
              backButton
            />

            <div className="h-full  pe-5 mt-10 space-y-3 transition-opacity">
              {chunksData &&
                chunksData.pages
                  .flatMap((page) => page.chunks)
                  .map((chunk) => (
                    <span
                      key={chunk.id}
                      onClick={() => {}}
                      className="text-lg leading-10 py-1 px-1 text-center hover:bg-muted/50  rounded-lg transition-colors cursor-pointer"
                    >
                      {chunk.content}
                    </span>
                  ))}
              {isFetchingNextPage && (
                <div className="py-6 flex justify-center">
                  <p className="text-sm text-muted-foreground animate-pulse">
                    {t("content.knowledge.reader_loading")}
                  </p>
                </div>
              )}
            </div>

            {(currentReadingDocument?.status === DocumentProgressState.Ready ||
              currentReadingDocument?.status ===
                DocumentProgressState.Processing) &&
              chunksData && (
                <div className="flex flex-col items-center py-6">
                  {isFetchingNextPage && (
                    <Loader2 className="w-5 h-5 animate-spin text-primary mb-3" />
                  )}

                  {hasNextPage && (
                    <Button
                      variant="outline"
                      onClick={() => fetchNextPage()}
                      disabled={isFetchingNextPage}
                      className="rounded-full px-6"
                    >
                      {isFetchingNextPage
                        ? t("content.knowledge.reader_loading")
                        : t("content.knowledge.reader_continue")}
                    </Button>
                  )}
                </div>
              )}
          </div>
        </div>
      );
    case DocumentProgressState.Failed:
      return (
        <div className="page-container">
          <div className="page-content">
            <Header
              headerTitleKey={
                currentReadingDocument?.contentTitle.length > 12
                  ? currentReadingDocument?.contentTitle.slice(0, 12) + "..."
                  : currentReadingDocument?.contentTitle
              }
              backButton
              className="text-2xl mt-2"
            />

            <div className="grid grid-cols-1 gap-3 mt-10">
              <div className=" flex items-center justify-center h-full">
                <p className="text-destructive">
                  Error loading readable content
                </p>
              </div>
            </div>
          </div>
        </div>
      );
    default:
      break;
  }

  if (isError) {
    return (
      <div className="page-container">
        <div className="page-content">
          <Header
            headerTitleKey={
              currentReadingDocument?.contentTitle.length > 12
                ? currentReadingDocument?.contentTitle.slice(0, 12) + "..."
                : currentReadingDocument?.contentTitle
            }
            backButton
          />
          <div className=" flex items-center justify-center h-full">
            <p className="text-destructive">Error loading readable content</p>
          </div>
        </div>
      </div>
    );
  }
}
