import { useTranslation } from "react-i18next";

export default function ArticlesSection() {
  const { t } = useTranslation();
  return (
    <div className="pt-[22px] animate-fade-up [animation-delay:0.34s]">
      <div className="flex justify-between items-center  mb-[12px]">
        <span className="text-base font-bold text-text">
          {t("articles.title")}
        </span>
        <span className="text-[11px] text-primary2 cursor-pointer opacity-85">
          {t("articles.view_all")}
        </span>
      </div>
      <div className="flex gap-[14px] overflow-x-auto pb-3 snap-x snap-mandatory no-scrollbar">
        <ArticleCard
          title={t("articles.ramadan.title")}
          desc={t("articles.ramadan.desc")}
          cat={t("articles.ramadan.cat")}
          time={t("articles.ramadan.time")}
          img="https://picsum.photos/seed/mosque/500/260"
        />
        <ArticleCard
          title={t("articles.prayer.title")}
          desc={t("articles.prayer.desc")}
          cat={t("articles.prayer.cat")}
          time={t("articles.prayer.time")}
          img="https://picsum.photos/seed/nightsky/500/260"
        />
        <ArticleCard
          title={t("articles.tazkiyah.title")}
          desc={t("articles.tazkiyah.desc")}
          cat={t("articles.tazkiyah.cat")}
          time={t("articles.tazkiyah.time")}
          img="https://picsum.photos/seed/peaceful/500/260"
        />
      </div>
    </div>
  );
}

function ArticleCard({
  title,
  desc,
  cat,
  time,
  img,
}: {
  title: string;
  desc: string;
  cat: string;
  time: string;
  img: string;
}) {
  const { t } = useTranslation();
  return (
    <div className="flex-shrink-0 w-[230px] bg-surface border border-art-bdr rounded-[18px] overflow-hidden snap-start transition-transform cursor-pointer active:scale-[0.97] shadow-sm group">
      <div className="h-[130px] relative overflow-hidden bg-surface3">
        <img
          src={img}
          alt={title}
          className="w-full h-full object-cover filter brightness-90 saturate-90 transition-all duration-300 group-hover:brightness-95 group-hover:saturate-100"
        />
        <div className="absolute inset-0 bg-art-overlay"></div>
        <span className="absolute bottom-2 right-[10px] z-[1] text-[8px] font-extrabold tracking-[1.5px] uppercase text-white bg-art-cat-bg py-[3px] px-[9px] rounded-lg">
          {cat}
        </span>
      </div>
      <div className="p-[13px] px-[14px] pb-[15px]">
        <div className="text-[13px] font-bold text-text mb-[5px] leading-[1.4]">
          {title}
        </div>
        <div className="text-[11px] text-text2 leading-[1.6] font-light">
          {desc}
        </div>
        <div className="flex items-center justify-between mt-[10px]">
          <span className="text-[10px] text-text2">{time}</span>
          <span className="text-[10px] font-bold text-primary2 tracking-[0.5px]">
            {t("articles.read_more")}
          </span>
        </div>
      </div>
    </div>
  );
}
