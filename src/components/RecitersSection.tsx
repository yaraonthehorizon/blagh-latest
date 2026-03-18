import { useTranslation } from "react-i18next";
import { ReciterInfo } from "@/types/quran/reciter-info";
import { ReciterCard } from "@/components/ReciterCard";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useGetQuranRecitersAndAssociatedRecitations } from "@/queries/quran/recitations/use-get-quran-reciters-and-associated-recitations";

export default function RecitersSection() {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const locale = i18n.language.startsWith("ar") ? "ar" : "en";

  const { data, isLoading, isError } =
    useGetQuranRecitersAndAssociatedRecitations<{ data: ReciterInfo[] }>(
      locale,
    );

  if (isLoading) {
    return (
      <div className="pt-[20px] animate-fade-up [animation-delay:0.31s]">
        <div className="flex justify-between items-center  mb-[12px]">
          <div className="flex justify-between items-center w-full">
            <span className="text-sm text-foreground font-bold">
              {t("content.home.reciters_title")}
            </span>
            <button
              className="flex items-center text-xs text-primary font-bold"
              onClick={() => {
                navigate("/recitations/");
              }}
            >
              {t("reciters.view_all")}
              <ArrowRight className="w-4 h-4 rtl:rotate-180" />
            </button>
          </div>
        </div>
        <div className="flex gap-3 overflow-x-auto  pb-3 snap-x snap-mandatory no-scrollbar mt-5">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="flex-shrink-0  overflow-x-auto  pb-3  no-scrollbar  w-[160px] h-[180px] bg-surface border border-bdr-p rounded-[20px] animate-pulse"
            ></div>
          ))}
        </div>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="pt-[20px] animate-fade-up [animation-delay:0.31s]">
        <div className="flex justify-between items-center ">
          <div className="flex justify-between items-center w-full">
            <span className="text-sm text-foreground font-bold">
              {t("content.home.reciters_title")}
            </span>
            <button
              className="flex items-center text-xs text-primary font-bold"
              onClick={() => {
                navigate("/recitations/");
              }}
            >
              {t("reciters.view_all")}
              <ArrowRight className="w-4 h-4 rtl:rotate-180" />
            </button>
          </div>
        </div>
        <div className="flex items-center mt-4 justify-center w-full h-[180px] text-xs text-muted-foreground bg-surface border border-bdr-p rounded-[20px]">
          {t("reciters.error_loading")}
        </div>
      </div>
    );
  }
  return (
    <div className="pt-[22px] animate-fade-up [animation-delay:0.31s]">
      <div className="flex justify-between items-center  mb-[12px]">
        <div className="flex justify-between items-center w-full">
          <span className="text-sm text-foreground font-bold">
            {t("content.home.reciters_title")}
          </span>
          <button
            className="flex items-center text-xs text-primary font-bold"
            onClick={() => {
              navigate("/recitations/");
            }}
          >
            {t("reciters.view_all")}
            <ArrowRight className="w-4 h-4 rtl:rotate-180" />
          </button>
        </div>
      </div>
      <div className="flex gap-3 overflow-x-auto  pb-3 snap-x snap-mandatory no-scrollbar">
        {data.data && data.data.length > 0 ? (
          data.data.map((item: ReciterInfo) => (
            <ReciterCard
              key={item.id}
              id={item.id}
              name={item.title}
              recitationId={item.recitations_info?.recitations_ids?.[0]}
              location={t("reciters.types.murattal")}
              types={[t("reciters.types.murattal")]}
            />
          ))
        ) : (
          <div className="flex items-center justify-center w-full h-[180px] text-sm text-muted-foreground bg-surface border border-bdr-p rounded-[20px]">
            {t("reciters.no_data", "No reciters available")}
          </div>
        )}
      </div>
    </div>
  );
}
