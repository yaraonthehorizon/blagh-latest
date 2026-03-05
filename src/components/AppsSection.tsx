import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

export default function AppsSection() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const apps = [
    {
      label: t("apps.quran"),
      color: "ic-quran",
      path: "/quran",
      icon: (
        <path
          d="M24 10C24 10 14 7 6 10L6 40C14 37 24 40 24 40C24 40 34 37 42 40L42 10C34 7 24 10 24 10Z"
          strokeLinejoin="round"
        />
      ),
    },
    {
      label: t("apps.hadith"),
      color: "ic-hadith",
      path: "/hadith",
      icon: (
        <>
          <rect x="10" y="8" width="28" height="34" rx="3" />
          <path d="M10 13C10 13 6 13 6 17C6 21 10 21 10 21" />
          <path d="M38 13C38 13 42 13 42 17C42 21 38 21 38 21" />
        </>
      ),
    },
    {
      label: t("apps.qibla"),
      color: "ic-qibla",
      path: "/qibla",
      icon: (
        <>
          <circle cx="24" cy="24" r="18" />
          <circle cx="24" cy="24" r="2.5" fill="currentColor" stroke="none" />
        </>
      ),
    },
    {
      label: t("apps.tasbeeh"),
      color: "ic-tasbeeh",
      path: "/tsbeeh",
      icon: (
        <>
          <circle cx="24" cy="16" r="4" />
          <circle cx="36" cy="22" r="3.5" />
          <circle cx="38" cy="34" r="3.5" />
        </>
      ),
    },
    {
      label: t("apps.dua"),
      color: "ic-dua",
      path: "/duaa",
      icon: (
        <>
          <path d="M15 34L15 20Q15 16 18 16Q21 16 21 20L21 29" />
          <path d="M21 25Q21 19 24 19Q27 19 27 25L27 29" />
        </>
      ),
    },
    {
      label: t("apps.calandar"),
      color: "ic-calandar",
      path: "/calandar",

      icon: (
        <>
          <rect x="7" y="26" width="34" height="16" rx="1" />
          <path d="M7 26Q7 18 15 18Q15 11 24 9Q33 11 33 18Q41 18 41 26" />
        </>
      ),
    },
    {
      label: t("apps.athkar"),
      color: "ic-athkar",
      path: "/athkar",
      icon: (
        <>
          <circle cx="24" cy="24" r="17" />
          <circle cx="24" cy="24" r="12" />
          <path d="M20 28L20 20L24 18L28 20L28 28" />
        </>
      ),
    },
    {
      label: t("apps.more"),
      color: "ic-more",
      path: "/more-apps",
      icon: (
        <>
          <circle cx="14" cy="24" r="3.5" fill="#888" />
          <circle cx="24" cy="24" r="3.5" fill="#888" />
          <circle cx="34" cy="24" r="3.5" fill="#888" />
        </>
      ),
    },
  ];

  return (
    <div className=" pt-[26px] animate-fade-up [animation-delay:0.16s]">
      <div className="flex justify-between items-center mb-[14px]">
        <span className="text-base font-bold text-foreground">
          {t("apps.title")}
        </span>
        <span className="text-[11px] text-primary cursor-pointer opacity-85">
          {t("apps.more_link")}
        </span>
      </div>
      <div className="grid grid-cols-4 gap-[10px]">
        {apps.map((app, i) => (
          <div
            key={i}
            className="flex flex-col items-center gap-[7px] cursor-pointer group"
            onClick={() => app.path && navigate(app.path)}
          >
            <div
              className={`w-full aspect-square rounded-[20px] flex items-center justify-center transition-transform group-active:scale-90 overflow-hidden shadow-sm ${getAppColorClass(app.color)}`}
            >
              <svg
                width="32"
                height="32"
                viewBox="0 0 48 48"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className={getAppStrokeColor(app.color)}
              >
                {app.icon}
              </svg>
            </div>
            <span className="text-[10px] font-medium text-foreground text-center">
              {app.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function getAppColorClass(type: string) {
  const map: Record<string, string> = {
    "ic-quran":
      "bg-[linear-gradient(145deg,#0f2a20,#1e5040)] border border-[rgba(45,122,106,0.5)]",
    "ic-hadith":
      "bg-[linear-gradient(145deg,#231a0a,#4a3412)] border border-[rgba(201,168,76,0.35)]",
    "ic-qibla":
      "bg-[linear-gradient(145deg,#0e1830,#1a3060)] border border-[rgba(80,130,220,0.35)]",
    "ic-tasbeeh":
      "bg-[linear-gradient(145deg,#1a1228,#352048)] border border-[rgba(160,100,220,0.35)]",
    "ic-dua":
      "bg-[linear-gradient(145deg,#0e1e14,#183a28)] border border-[rgba(60,160,100,0.35)]",
    "ic-calandar":
      "bg-[linear-gradient(145deg,#141824,#20304a)] border border-[rgba(80,160,210,0.3)]",
    "ic-athkar":
      "bg-[linear-gradient(145deg,#1a1a10,#303020)] border border-[rgba(180,180,60,0.3)]",
    "ic-more": "bg-surface2 border border-bdr-p",
  };
  return map[type] || "";
}

function getAppStrokeColor(type: string) {
  const map: Record<string, string> = {
    "ic-quran": "text-[#3d9a84]",
    "ic-hadith": "text-[#c9a84c]",
    "ic-qibla": "text-[#6090e0]",
    "ic-tasbeeh": "text-[#b080e0]",
    "ic-dua": "text-[#50c080]",
    "ic-calandar": "text-[#60b0d0]",
    "ic-athkar": "text-[#c0c040]",
    "ic-more": "text-transparent",
  };
  return map[type] || "";
}
