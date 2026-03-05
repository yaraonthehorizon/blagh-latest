import { Bell, Calendar, MapPin } from "lucide-react";
import React from "react";
import { useTranslation } from "react-i18next";

export default function MegaCard() {
  const { t } = useTranslation();
  return (
    <div className=" mt-4 bg-surface border border-bdr-p rounded-[22px] overflow-hidden animate-fade-up [animation-delay:0.08s] shadow">
      <div className="grid grid-cols-[1fr_auto_1fr] items-center p-5 pb-[14px]">
        <div className="flex flex-col gap-1 text-right">
          <span className="text-[9px] font-bold tracking-[2px] uppercase text-primary2 opacity-75">
            {t("mega_card.hijri_date_label")}
          </span>
          <span className="text-[15px] font-bold text-text leading-[1.2]">
            {t("mega_card.hijri_date_value")}
          </span>
          <span className="text-[10px] text-text2 font-light">
            {t("mega_card.hijri_month")}
          </span>
        </div>
        <div className="w-px h-12 bg-gradient-to-b from-transparent via-bdr-p to-transparent mx-4"></div>
        <div className="flex flex-col gap-1 text-left">
          <span className="text-[9px] font-bold tracking-[2px] uppercase text-primary2 opacity-75">
            {t("mega_card.gregorian_date_label")}
          </span>
          <span className="text-[15px] font-bold text-text leading-[1.2]">
            {t("mega_card.gregorian_date_value")}
          </span>
          <span className="text-[10px] text-text2 font-light">
            {t("mega_card.day")}
          </span>
        </div>
      </div>
      <div className="flex items-center border-t border-bdr p-0">
        <QuickAction icon={<MapPin />} label={t("mega_card.location")} />
        <div className="w-px h-9 bg-bdr"></div>
        <QuickAction icon={<Bell />} label={t("mega_card.adhan")} />
        <div className="w-px h-9 bg-bdr"></div>
        <QuickAction icon={<Calendar />} label={t("mega_card.calendar")} />
      </div>
    </div>
  );
}

function QuickAction({
  icon,
  label,
}: {
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <div className="flex-1 flex flex-col items-center gap-[5px] py-3 px-2 cursor-pointer transition-colors active:bg-surface2">
      <div className="w-4 h-4 rounded-[10px] bg-qa-icon-bg border border-bdr-p flex items-center justify-center text-qa-icon-cl">
        {icon}
      </div>
      <span className="text-[10px] font-semibold text-text2 whitespace-nowrap">
        {label}
      </span>
    </div>
  );
}
