import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Header } from "@/components/Header";
import { ReciterCard } from "@/components/ReciterCard";
import { useGetRecitationInfo } from "@/queries/quran/recitations/use-get-quran-recitation-info";
import { RecitationInfo } from "@/types/quran/recitation-info";
import { RecitationAttachment } from "@/types/quran";

export function RecitationCategoryItem() {
  // path="/recitations/:categoryId/:recitationId"

  const { recitationId } = useParams<{ recitationId: string }>();
  const { t, i18n } = useTranslation();
  const locale = i18n.language.startsWith("ar") ? "ar" : "en";

  const { data, isLoading, isError } = useGetRecitationInfo<RecitationInfo>(
    Number(recitationId),
    locale,
  );

  if (isLoading) {
    return (
      <div className="page-container">
        <div className="page-content">
          <Header headerTitleKey={""} backButton />
          <div className="grid grid-cols-2 gap-4 mt-6 justify-items-center ">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div
                key={i}
                className=" w-[160px] h-[180px] bg-surface border border-bdr-p rounded-[20px] animate-pulse"
              />
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (isError || !data) {
    return (
      <div className="page-container">
        <div className="page-content">
          <Header headerTitleKey={""} backButton />

          <div className="grid grid-cols-2 justify-items-center -gap-x-2 gap-y-4 mt-6">
            <div className="col-span-2 mt-10 text-center text-muted-foreground">
              {t("reciters.error_loading")}
            </div>
          </div>
        </div>
      </div>
    );
  }

  let attachments: RecitationAttachment[] = [];
  if (Array.isArray(data?.attachments)) {
    attachments = data.attachments;
  } else if (data?.attachments) {
    attachments = [data.attachments];
  }

  return (
    <div className="page-container">
      <div className="page-content">
        <Header
          headerTitleKey={data?.title || "Attachments"}
          backButton
          className="text-sm"
        />

        <div className="grid grid-cols-2 justify-items-center -gap-x-2 gap-y-4 mt-6">
          {attachments.length > 0 ? (
            attachments.map((item: RecitationAttachment, index: number) => (
              <ReciterCard
                key={item.id || index}
                id={item.id}
                name={item.title || data.title}
                attachmentUrl={item.url}
              />
            ))
          ) : (
            <div className="col-span-2 flex items-center justify-center h-[200px] text-sm text-muted-foreground">
              {t("reciters.no_data", "No recitations available")}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
