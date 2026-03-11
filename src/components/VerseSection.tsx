import { useTranslation } from "react-i18next";

export default function VerseSection() {
  const { t } = useTranslation();
  return (
    <div className="pt-[22px] animate-fadeUp [animation-delay:0.22s]">
      <div className="flex justify-between items-center mb-[12px]">
        <span className="text-base font-bold text-foreground">
          {t("content.home.verse_title")}
        </span>
        <svg
          className="cursor-pointer text-primary2"
          width="20"
          height="20"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
        </svg>
      </div>
      <div className="bg-surface border border-bdr-p rounded-[22px] p-6 px-[22px] relative overflow-hidden shadow">
        <div className="absolute -top-[50px] -left-[50px] w-[200px] h-[200px] bg-[radial-gradient(circle,color-mix(in_srgb,var(--primary)_8%,transparent)_0%,transparent_70%)] pointer-events-none"></div>
        <div className="absolute -bottom-[30px] -right-[30px] w-[140px] h-[140px] bg-[radial-gradient(circle,color-mix(in_srgb,var(--accent)_8%,transparent)_0%,transparent_70%)] pointer-events-none"></div>

        <div className="flex justify-between items-center mb-[18px]">
          <div className="text-[9px] font-bold tracking-[2px] uppercase text-tag-text bg-tag-bg py-[5px] px-3 rounded-[20px] border border-tag-bdr">
            {t("verse.surah_info")}
          </div>
        </div>
        <div className="flex items-center gap-4 mb-5 relative z-[1]">
          <button className="flex-shrink-0 w-[62px] h-[62px] rounded-full bg-play-grad border-none cursor-pointer flex items-center justify-center animate-playPulse transition-transform active:scale-90">
            <svg
              width="26"
              height="26"
              fill="var(--play-icon)"
              viewBox="0 0 24 24"
              className="mr-[-2px]"
            >
              <polygon points="5 3 19 12 5 21 5 3" />
            </svg>
          </button>
          <div>
            <div className="text-xs font-bold text-play-nm mb-[3px]">
              {t("verse.listen_full")}
            </div>
            <div className="text-[10px] text-muted-foreground font-light">
              {t("verse.reciter")}
            </div>
          </div>
        </div>
        <div className="font-quran text-[28px] leading-[2] text-right text-verse-ar mb-4 relative z-[1]">
          {t("verse.text_ar")}
        </div>
        <div className="h-px bg-verse-div mb-[14px]"></div>
        <div className="text-xs text-muted-foreground leading-[1.9] italic font-light mb-[10px]">
          {t("verse.text_trans")}
        </div>
        <div className="text-[10px] text-primary2 font-semibold tracking-[1px] opacity-75">
          {t("verse.ref")}
        </div>
      </div>
    </div>
  );
}
