import { useTranslation } from "react-i18next";

export default function RecitersSection() {
  const { t } = useTranslation();

  return (
    <div className="pt-[22px] animate-fade-up [animation-delay:0.31s]">
      <div className="flex justify-between items-center  mb-[12px]">
        <span className="text-base font-bold text-foreground">
          {t("reciters.title")}
        </span>
        <span className="text-[11px] text-primary2 cursor-pointer opacity-85">
          {t("reciters.view_all")}
        </span>
      </div>
      <div className="flex gap-3 overflow-x-auto  pb-3 snap-x snap-mandatory no-scrollbar">
        <ReciterCard
          name={t("reciters.mishari.name")}
          location={t("reciters.mishari.location")}
          types={[
            t("reciters.types.murattal"),
            t("reciters.types.mujawwad"),
            t("reciters.types.educational"),
          ]}
          img="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Mishari_Rashid_Alafasy.jpg/240px-Mishari_Rashid_Alafasy.jpg"
        />
        <ReciterCard
          name={t("reciters.abdulbasit.name")}
          location={t("reciters.abdulbasit.location")}
          types={[t("reciters.types.mujawwad"), t("reciters.types.murattal")]}
          img="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Abdul_Basit_Abd_us-Samad.jpg/240px-Abdul_Basit_Abd_us-Samad.jpg"
        />
        <ReciterCard
          name={t("reciters.sudais.name")}
          location={t("reciters.sudais.location")}
          types={[
            t("reciters.types.haram_makki"),
            t("reciters.types.murattal"),
          ]}
          img="https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Abdul_Rahman_Al-Sudais.jpg/240px-Abdul_Rahman_Al-Sudais.jpg"
        />
      </div>
    </div>
  );
}

function ReciterCard({
  name,
  location,
  types,
  img,
}: {
  name: string;
  location: string;
  types: string[];
  img: string;
}) {
  const { t } = useTranslation();
  return (
    <div className="flex-shrink-0 w-[160px] bg-surface border border-bdr-p rounded-[20px] overflow-hidden snap-start cursor-pointer transition-transform active:scale-95 shadow-sm flex flex-col">
      <div className="h-[60px] relative bg-hero-grad overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_30%,rgba(0,0,0,.25))]"></div>
        <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml,%3Csvg%20xmlns=\'http://www.w3.org/2000/svg\'%20width=\'40\'%20height=\'40\'%3E%3Cg%20fill=\'none\'%20stroke=\'%23fff\'%20stroke-width=\'.5\'%3E%3Cpolygon%20points=\'20,2%2038,11%2038,29%2020,38%202,29%202,11\'/%3E%3Cpolygon%20points=\'20,8%2032,14%2032,26%2020,32%208,26%208,14\'/%3E%3C/g%3E%3C/svg%3E')] bg-[length:40px_40px]"></div>
        <div className="absolute -bottom-[22px] right-1/2 translate-x-1/2 w-[44px] h-[44px] rounded-full border-[2.5px] border-surface overflow-hidden bg-surface3 shadow-md z-[2]">
          <img src={img} alt={name} className="w-full h-full object-cover" />
        </div>
      </div>
      <div className="p-3 pt-7 pb-[14px] flex flex-col items-center gap-[6px] flex-1">
        <div className="text-xs font-bold text-foreground text-center leading-[1.3]">
          {name}
        </div>
        <div className="flex items-center gap-1 text-[10px] text-muted-foreground font-normal">
          <svg
            width="10"
            height="10"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            viewBox="0 0 24 24"
            className="text-primary2 flex-shrink-0"
          >
            <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z" />
            <circle cx="12" cy="10" r="3" />
          </svg>
          {location}
        </div>
        <div className="flex flex-wrap gap-1 justify-center mt-[2px]">
          {types.map((t) => (
            <span
              key={t}
              className="text-[9px] font-bold tracking-[0.5px] py-[3px] px-2 rounded-[10px] bg-tag-bg border border-tag-bdr text-tag-text whitespace-nowrap"
            >
              {t}
            </span>
          ))}
        </div>
        <button className="mt-auto pt-2 w-full flex items-center justify-center gap-[5px] bg-none border-none cursor-pointer font-tajawal text-[10px] font-bold text-primary2 transition-opacity active:opacity-70">
          <div className="w-6 h-6 rounded-full bg-play-grad flex items-center justify-center shadow-[0_2px_6px_var(--play-glow)]">
            <svg
              width="9"
              height="9"
              fill="white"
              viewBox="0 0 24 24"
              className="mr-[-1px]"
            >
              <polygon points="5 3 19 12 5 21 5 3" />
            </svg>
          </div>
          {t("reciters.listen_now")}
        </button>
      </div>
    </div>
  );
}
