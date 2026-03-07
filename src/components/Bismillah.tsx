import { useTranslation } from "react-i18next";

export default function Bismillah() {
  const { t } = useTranslation();
  return (
    <div className="mt-1 bg-surface border border-bdr-p rounded-2xl py-4 px-2  text-center animate-fade-up shadow-sm w-full">
      <div className="font-quran text-[26px] text-bism-ar leading-[1.8]">
        {t("bismillah.arabic")}
      </div>
      <div className="text-[10px] text-muted-foreground font-light tracking-[1.5px] mt-4">
        {t("bismillah.text")}
      </div>
    </div>
  );
}
