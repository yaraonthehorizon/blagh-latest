import { useNavigate, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Header } from "@/components/Header";
import { useGetQuranRecitationCategoryDetails } from "@/queries/quran/recitations/use-get-quran-recitation-category-details";
import { RecitationCategoryDetails } from "@/types/quran/recitation-category-details";
import { RecitationInfoCondensed } from "@/types/quran/recitation-info";
import { AppCard } from "@/components/AppCard";

export function RecitationsCategory() {
  // path="/recitations/:categoryId"
  const navigate = useNavigate();
  const { categoryId } = useParams<{ categoryId: string }>();
  const { t } = useTranslation();

  const { data, isLoading, isError } =
    useGetQuranRecitationCategoryDetails<RecitationCategoryDetails>(
      categoryId!,
    );

  if (isLoading) {
    return (
      <div className="page-container">
        <div className="page-content">
          <Header headerTitleKey={""} backButton />
          <div className="flex flex-col justify-items-center -gap-x-2 gap-y-4 mt-6">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div
                key={i}
                className=" w-full h-[100px] bg-surface border border-bdr-p rounded-[20px] animate-pulse"
              />
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="page-container">
        <div className="page-content">
          <Header headerTitleKey={""} backButton />

          <div className="grid grid-cols-2 justify-items-center -gap-x-2 gap-y-4 mt-6">
            <div className="mt-10 text-center text-muted-foreground">
              {t("reciters.error_loading")}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="page-container">
      <div className="page-content">
        <Header
          headerTitleKey={data.title}
          backButton
          className="text-base bg-am"
        />

        <div className="flex flex-col justify-items-center -gap-x-2 gap-y-4 mt-6">
          {data.recitations.length > 0 ? (
            data.recitations.map((item: RecitationInfoCondensed) => (
              <AppCard
                key={item.id}
                onClick={() =>
                  navigate(`/recitations/${categoryId}/${item.id}`)
                }
              >
                <div className="text-sm font-bold text-foreground">
                  {item.title}
                </div>
              </AppCard>
            ))
          ) : (
            <div className="col-span-2 flex items-center justify-center h-[200px] text-sm text-muted-foreground">
              {t("reciters.no_data")}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
