import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Header } from "@/components/Header";
import { ReciterCard } from "@/components/ReciterCard";
import { ReciterInfo } from "@/types/quran/reciter-info";
import { useGetQuranRecitationCategoryDetails } from "@/queries/quran/recitations/use-get-quran-recitation-category-details";
import { RecitationCategoryDetails } from "@/types/quran/recitation-category-details";
import { RecitationInfoCondensed } from "@/types/quran/recitation-info";

export default function RecitationsCategory() {
  const { categoryId } = useParams<{ categoryId: string }>();
  const { t } = useTranslation();

  const { data, isLoading, isError } =
    useGetQuranRecitationCategoryDetails<RecitationCategoryDetails>(
      categoryId!,
    );

  if (isLoading) {
    return (
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
    );
  }

  if (isError) {
    return (
      <div className="page-content">
        <Header headerTitleKey={""} backButton />

        <div className="grid grid-cols-2 justify-items-center -gap-x-2 gap-y-4 mt-6">
          <div className="mt-10 text-center text-muted-foreground">
            {t("reciters.error_loading")}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="page-content">
      <Header headerTitleKey={data.title} backButton />

      <div className="grid grid-cols-2 justify-items-center -gap-x-2 gap-y-4 mt-6">
        {data.recitations.length > 0 ? (
          data.recitations.map((item: RecitationInfoCondensed) => (
            <ReciterCard
              key={item.id}
              id={item.id}
              name={item.title}
              recitationId={item.id}
            />
          ))
        ) : (
          <div className="col-span-2 flex items-center justify-center h-[200px] text-sm text-muted-foreground">
            {t("reciters.no_data")}
          </div>
        )}
      </div>
    </div>
  );
}
