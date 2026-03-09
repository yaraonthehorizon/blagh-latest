import { ArrowRight, Bot, Feather, Lightbulb } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

export default function AppsSection() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const apps = [
    {
      label: t("apps.quran"),
      path: "/quran",
      icon: (
        <svg
          width="30"
          height="30"
          viewBox="0 0 48 48"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          className="text-white"
        >
          <path
            d="M24 10C24 10 14 7 6 10L6 40C14 37 24 40 24 40C24 40 34 37 42 40L42 10C34 7 24 10 24 10Z"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      label: t("apps.prayer"),
      path: "/prayer",
      icon: (
        <svg
          width="30"
          height="30"
          viewBox="0 0 48 48"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          className="text-white"
        >
          <path
            fill="#222221"
            d="M34.345,42.61l-9.473-5.523V34.861l7.756-4.575a.5.5,0,0,0,.206-.627l-.451-1.06,1.207-.929A3.453,3.453,0,0,0,34.834,25.8l.582-2.273a4.033,4.033,0,0,0,0-1.944l-.161-.63a.465.465,0,0,0-.061-.143.629.629,0,0,0-.545-.293.636.636,0,0,0-.545.345l-1.158,2.3c-.007.016-.016.031-.024.046.053-.2.094-.347.111-.4a.8.8,0,0,0-.424-.952.825.825,0,0,0-1.046.3c-.161.232-1.114,1.527-1.124,1.541a1.591,1.591,0,0,0-.288.913v.959l-3.91,3.305-1.049-5.2a.509.509,0,0,0-.131-.25L23.7,22.015v-.832l.84.292a1,1,0,0,0,1.322-.939V18.875l.257-.079a.5.5,0,0,0,.308-.27.5.5,0,0,0,0-.41l-.85-1.924V14.9a2.92,2.92,0,0,0-1.129-2.345,4.485,4.485,0,0,0-2.754-.849,4.54,4.54,0,0,0-2.889,1.174A2.309,2.309,0,0,0,18,14.647v3.107a4.981,4.981,0,0,0,1.127,2.524v.472l-1.718,1.812a6.377,6.377,0,0,0-1.759,4.407V37.8a.5.5,0,1,0,1,0V26.969a5.38,5.38,0,0,1,1.484-3.719l1.856-1.957a.5.5,0,0,0,.137-.344V20.1a.5.5,0,0,0-.114-.319A4.487,4.487,0,0,1,19,17.754v-2.1l3.67-1.576a.5.5,0,1,0-.394-.919l-3.267,1.4a1.3,1.3,0,0,1,.446-.915,3.558,3.558,0,0,1,2.24-.935,3.517,3.517,0,0,1,2.155.649,1.92,1.92,0,0,1,.728,1.545V16.3a.5.5,0,0,0,.042.2l.666,1.506-.073.022a.5.5,0,0,0-.353.478l.007,2.025-1.5-.524a.5.5,0,0,0-.664.472V21.5l-1.526-.559a.5.5,0,1,0-.344.938l2.09.766,1.323,1.364L25.427,29.9a.5.5,0,0,0,.813.283l4.729-4c.007-.006.01-.014.016-.02a.537.537,0,0,0,.067-.084.561.561,0,0,0,.045-.067.469.469,0,0,0,.033-.118.363.363,0,0,0,.013-.064c0-.012.007-.022.007-.033V24.61a.589.589,0,0,1,.1-.334s.271-.368.55-.75L31.517,24.6a.5.5,0,0,0,.764.542l.522-.354a3.042,3.042,0,0,0,1.034-1.166l.684-1.362a3,3,0,0,1-.075,1.024l-.579,2.264a2.445,2.445,0,0,1-.882,1.324l-1.008.775-.291-.683a.5.5,0,0,0-.92.393l.976,2.288L24.516,33.91l-2.725-3.894a.5.5,0,0,0-.82.573l2.9,4.144v2.641a.5.5,0,0,0,.248.432l9.721,5.668A1.892,1.892,0,0,1,32.889,47H20.162l2.065-2.438h3.825a.5.5,0,1,0,0-1H20.968a4.323,4.323,0,0,1-4.319-4.318.5.5,0,0,0-1,0,5.315,5.315,0,0,0,2.381,4.427,2.236,2.236,0,0,0-.763.408l-.954.792L13.473,46.2a.945.945,0,0,0,.4,1.8H32.889a2.892,2.892,0,0,0,1.456-5.39ZM16.8,45.75a.551.551,0,0,0,.108-.069l1-.832a1.246,1.246,0,0,1,.794-.287h2.218L18.851,47H14.122Z"
          ></path>
          <path
            fill="#222221"
            d="M17.041 6.832a24.514 24.514 0 0 0 3.265-1.567A9.073 9.073 0 0 0 24 1.682a9.08 9.08 0 0 0 3.694 3.584c.452.253.944.52 1.487.787a.5.5 0 0 0 .441-.9c-.526-.258-1-.517-1.439-.762C25.027 2.625 24.51.333 24.49.24a.5.5 0 0 0-.98 0c-.02.1-.537 2.388-3.693 4.156A23.3 23.3 0 0 1 16.682 5.9C8.644 8.99 4.568 13.313 4.568 18.749a8.218 8.218 0 0 0 .816 3.49A3.618 3.618 0 0 0 4.249 23.98a4.244 4.244 0 0 0 1.076 1.978A8 8 0 0 0 3.938 30.5v17a.5.5 0 0 0 1 0v-17a6.9 6.9 0 0 1 1.4-4.229.5.5 0 0 0 0-.653 7.451 7.451 0 0 1-1.1-1.583 5.135 5.135 0 0 1 1.1-1.342.5.5 0 0 0 .084-.619 7.214 7.214 0 0 1-.86-3.329C5.568 13.769 9.428 9.759 17.041 6.832zM30.67 6.719l.1.041a.456.456 0 0 0 .166.032.483.483 0 0 0 .437-.333.543.543 0 0 0-.327-.666.5.5 0 0 0-.379.926zM42.675 25.958a4.244 4.244 0 0 0 1.076-1.978 3.618 3.618 0 0 0-1.135-1.741 8.218 8.218 0 0 0 .816-3.49c0-5.139-3.657-9.293-10.868-12.347a.5.5 0 0 0-.39.921c6.806 2.883 10.258 6.727 10.258 11.426a7.214 7.214 0 0 1-.86 3.329.5.5 0 0 0 .084.619 6.07 6.07 0 0 1 1.1 1.3 6.387 6.387 0 0 1-1.1 1.625.5.5 0 0 0 .006.654 6.83 6.83 0 0 1 1.4 4.228v17a.5.5 0 0 0 1 0v-17A8 8 0 0 0 42.675 25.958z"
          ></path>
        </svg>
      ),
    },
    {
      label: t("apps.hadith"),
      path: "/hadith",
      icon: (
        <svg
          width="30"
          height="30"
          viewBox="0 0 48 48"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          className="text-white"
        >
          <rect x="10" y="8" width="28" height="34" rx="3" />
          <path d="M10 13C10 13 6 13 6 17C6 21 10 21 10 21" />
          <path d="M38 13C38 13 42 13 42 17C42 21 38 21 38 21" />
        </svg>
      ),
    },
    {
      label: t("apps.knowledge"),
      path: "/knowledge",
      icon: <Lightbulb size={30} className="text-white" strokeWidth={1.5} />,
      description: t("content.knowledge.browse_topics"),
    },
    {
      label: t("apps.baligh"),
      path: "/baligh",
      icon: <Bot size={30} className="text-white" strokeWidth={1.5} />,
      description: t("cta.read_bleegh"),
    },
    {
      label: t("apps.children"),
      path: "/children",
      icon: (
        <svg
          width="30"
          height="30"
          viewBox="0 0 32 32"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="text-white"
        >
          <path d="M11.2,21c0.4,1.2,1.5,2,2.8,2" />
          <line x1="13" y1="17" x2="13" y2="19" />
          <line x1="19" y1="17" x2="19" y2="19" />
          <path d="M17.9,3.3c2.3,1.9,3.1,5.2,1.7,7.9c-1.3,2.5-4.4,3.4-6.8,2.1c-2-1-2.7-3.5-1.7-5.5c0.8-1.6,2.8-2.2,4.4-1.4 c1.3,0.7,1.8,2.2,1.1,3.5" />
          <path d="M11.9,6.8c-3.2,1.3-5.6,4-6.5,7.3C4,14.3,3,15.5,3,17c0,1.5,1,2.7,2.4,2.9C6.7,24.6,10.9,28,16,28 s9.3-3.4,10.6-8.1C28,19.7,29,18.5,29,17c0-1.5-1-2.7-2.4-2.9c-0.9-3.3-3.3-6-6.5-7.3" />
        </svg>
      ),
      description: t("content.children.title"),
    },

    {
      label: t("apps.athkar"),
      path: "/athkar",
      icon: (
        <svg
          width="30"
          height="30"
          viewBox="0 0 48 48"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          className="text-white"
        >
          <circle cx="24" cy="24" r="17" />
          <circle cx="24" cy="24" r="12" />
          <path d="M20 28L20 20L24 18L28 20L28 28" />
        </svg>
      ),
    },
    {
      label: t("apps.more"),
      path: "/more-apps",
      icon: (
        <svg
          width="30"
          height="30"
          viewBox="0 0 48 48 "
          stroke="currentColor"
          strokeWidth="2"
          className="text-white"
        >
          <circle cx="14" cy="24" r="3.5" fill="#888" />
          <circle cx="24" cy="24" r="3.5" fill="#888" />
          <circle cx="34" cy="24" r="3.5" fill="#888" />
        </svg>
      ),
    },
  ];

  return (
    <div className=" pt-[26px] animate-fade-up [animation-delay:0.16s]">
      <div className="flex justify-between items-center mb-[14px]">
        <span className="text-base font-bold text-foreground">
          {t("apps.title")}
        </span>
        <button
          className="flex items-center text-xs text-primary font-bold"
          onClick={() => navigate("/more-apps")}
        >
          {t("apps.more_link")}
          <ArrowRight className="w-4 h-4 rtl:rotate-180" />
        </button>
      </div>
      <div className="grid grid-cols-4 gap-[10px]">
        {apps.map((app, i) => (
          <div
            key={i}
            className="flex flex-col items-center gap-[7px] cursor-pointer group"
            onClick={() => app.path && navigate(app.path)}
          >
            <div
              className={`w-full aspect-square rounded-[20px] flex items-center justify-center transition-transform group-active:scale-90 overflow-hidden shadow-sm bg-play-grad`}
            >
              <div className="w-12 h-12 rounded-md flex items-center justify-center bg-transparent backdrop-blur-3xl">
                {app.icon}
              </div>
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
