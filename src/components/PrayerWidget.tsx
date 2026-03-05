import { Clock } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function PrayerWidget() {
  const { t } = useTranslation();
  return (
    <div className=" mt-[14px] bg-surface border border-bdr-p rounded-[22px] overflow-hidden animate-fadeUp [animation-delay:0.12s] shadow">
      <div className="flex items-center justify-between px-5 py-[18px] pb-4 bg-hero-grad relative overflow-hidden">
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-[radial-gradient(circle,rgba(255,255,255,0.07)_0%,transparent_70%)] pointer-events-none"></div>
        <div className="flex flex-col gap-1">
          <div className="text-[9px] font-bold tracking-[2.5px] uppercase text-hero-sub flex items-center gap-[5px]">
            <Clock className="h-4 w-4" />
            {t("prayer_widget.next_prayer")}
          </div>
          <div className="text-[28px] font-extrabold text-hero-text leading-[1.1] tracking-[-0.5px]">
            {t("prayers.dhuhr")}
          </div>
          <div className="text-[13px] font-medium text-hero-sub mt-px">
            {t("prayer_widget.time_location")}
          </div>
        </div>
        <div className="flex flex-col items-center gap-[2px] bg-cd-bg border border-cd-bdr rounded-2xl py-3 px-4 min-w-[86px]">
          <span className="text-[9px] font-bold tracking-[1.5px] uppercase text-hero-sub">
            {t("prayer_widget.starts_in")}
          </span>
          <span className="text-[26px] font-black text-cd-digit leading-none tracking-[1px] tabular-nums">
            {t("prayer_widget.countdown")}
          </span>
          <span className="text-[9px] text-hero-sub font-normal">
            {t("prayer_widget.h_m_s")}
          </span>
        </div>
      </div>
      <div className="h-[3px] bg-bdr relative overflow-hidden">
        <div className="absolute top-0 right-0 h-full w-[38%] bg-prog-fill"></div>
      </div>
      <div className="flex items-stretch border-t border-bdr p-[10px] pb-3 gap-[3px]">
        <PrayerItem name={t("prayers.fajr")} time="٤:٤٢" passed />
        <PrayerItem name={t("prayers.sunrise")} time="٦:١١" passed />
        <PrayerItem name={t("prayers.dhuhr")} time="١٢:١٨" active />
        <PrayerItem name={t("prayers.asr")} time="١٥:٣٩" />
        <PrayerItem name={t("prayers.maghrib")} time="١٨:٠٢" />
        <PrayerItem name={t("prayers.isha")} time="١٩:١٨" />
      </div>
    </div>
  );
}

function PrayerItem({
  name,
  time,
  active,
  passed,
}: {
  name: string;
  time: string;
  active?: boolean;
  passed?: boolean;
}) {
  return (
    <div
      className={`flex flex-col items-center gap-[3px] py-2 px-[2px] rounded-[11px] flex-1 transition-all cursor-pointer active:scale-90 ${active ? "bg-pi-active-bg border border-pi-active-bdr" : ""} ${passed ? "opacity-35" : ""}`}
    >
      <span
        className={`text-[9px] font-semibold whitespace-nowrap ${active ? "text-pi-active-nm font-bold" : "text-text2"}`}
      >
        {name}
      </span>
      <span
        className={`text-[10px] font-bold ${active ? "text-pi-active-tm" : "text-text"}`}
      >
        {time}
      </span>
      {active && <span className="w-1 h-1 rounded-full bg-pi-dot"></span>}
    </div>
  );
}
