import { useTranslation } from "react-i18next";

export default function HadithSection() {
  const { t } = useTranslation();
  return (
    <div className=" pt-[22px] animate-fade-up [animation-delay:0.28s]">
      <div className="flex justify-between items-center mb-[12px]">
        <span className="text-base font-bold text-fore">
          {t("hadith_section.daily_title")}
        </span>
      </div>
      <div className="bg-hadith-bg border border-hadith-bdr rounded-[22px] p-6 px-[22px] relative overflow-hidden shadow-sm">
        <div className="absolute top-2 left-[18px] text-[110px] font-amiri text-hadith-q opacity-15 leading-none pointer-events-none">
          "
        </div>
        <div className="text-[9px] font-bold tracking-[2px] uppercase text-hadith-tm mb-[14px]">
          {t("hadith_section.source")}
        </div>
        <div className="text-sm leading-[1.95] text-foreground italic font-normal mb-[14px] relative z-[1]">
          {t("hadith_section.text")}
        </div>
        <div className="text-[10px] text-hadith-tm font-semibold">
          {t("hadith_section.narrator")}
        </div>
      </div>
    </div>
  );
}
