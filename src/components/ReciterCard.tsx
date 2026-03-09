import { useTranslation } from "react-i18next";
import { RecitationInfo } from "@/types/quran/recitation-info";
import { RecitationPlayer } from "./RecitationPlayer";
import { useAudioPlayer } from "@/hooks/use-audio-player";
import { useGetRecitationInfo } from "@/queries/quran/recitations/use-get-quran-recitation-info";

export interface ReciterCardProps {
  id: number;
  name: string;
  location?: string;
  types?: string[];
  img?: string;
  recitationId?: number;
}

export function ReciterCard({
  id,
  name,
  location,
  types = [],
  img,
  recitationId,
}: ReciterCardProps) {
  const { t } = useTranslation();
  const { playTrack, currentTrack, isPlaying, togglePlay } = useAudioPlayer();

  // Fetch additional info if an ID is provided
  const { data, isLoading, isError } =
    useGetRecitationInfo<RecitationInfo>(recitationId);

  // Logic to determine which types to display.
  // will have to be aggregated from the recitation info if available. For now, we will just use the provided types prop.
  const displayTypes =
    types.length > 0 ? types : [t("reciters.types.murattal")];

  const isCurrentTrack = currentTrack?.id === id;
  const isCardPlaying = isCurrentTrack && isPlaying;

  const imageSrc =
    img ||
    `https://api.dicebear.com/7.x/initials/svg?seed=${name}&backgroundColor=0f2a20`;

  const handlePlay = () => {
    if (isCurrentTrack) {
      togglePlay();
    } else if (data?.attachments?.[0]?.url) {
      playTrack({
        id: id!,
        title: name,
        reciterName: name,
        src: data.attachments[0].url,
        image: imageSrc,
      });
    }
  };

  if (isLoading)
    return (
      <div className="flex-shrink-0 w-[160px] h-[180px] bg-surface border border-bdr-p rounded-[20px] animate-pulse"></div>
    );
  if (isError) {
    return (
      <div className="flex-shrink-0 w-[160px] h-[180px] bg-surface border border-bdr-p rounded-[20px] flex items-center justify-center text-sm text-muted-foreground">
        {t("reciters.error_loading")}
      </div>
    );
  }
  if (data) {
    return (
      <div className="flex-shrink-0 w-[160px] bg-surface border border-bdr-p rounded-[20px] overflow-hidden snap-start cursor-pointer transition-transform active:scale-95 shadow-sm flex flex-col">
        <div className="h-[60px] relative bg-hero-grad overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_30%,rgba(0,0,0,.25))]"></div>
          <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml,svgxmlns=\'http://www.w3.org/2000/svg\'%20width=\'40\'%20height=\'40\'%3E%3Cg%20fill=\'none\'%20stroke=\'%23fff\'%20stroke-width=\'.5\'%3E%3Cpolygon%20points=\'20,2%2038,11%2038,29%2020,38%202,29%202,11\'/%3E%3Cpolygon%20points=\'20,8%2032,14%2032,26%2020,32%208,26%208,14\'/%3E%3C/g%3E%3C/svg%3E')] bg-[length:40px_40px]"></div>
          <div className="absolute -bottom-[10px] right-1/2 translate-x-1/2 w-[44px] h-[44px] rounded-full border-[2.5px] border-surface overflow-hidden bg-surface3 shadow-md z-[2]">
            <img
              src={imageSrc}
              alt={name}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="p-3 pt-7 pb-[14px] flex flex-col items-center gap-[6px] flex-1">
          <div className="text-xs font-bold text-foreground text-center leading-[1.3]">
            {name}
          </div>

          <div className="flex flex-wrap gap-1 justify-center mt-[2px]">
            {/* {displayTypes.map((t) => (
              <span
                key={t}
                className="text-[9px] font-bold tracking-[0.5px] py-[3px] px-2 rounded-[10px] bg-tag-bg border border-tag-bdr text-tag-text whitespace-nowrap"
              >
                {t}
              </span>
            ))}  */}
          </div>
          {data.attachments.length > 0 && (
            <div className="mt-auto pt-2 w-full flex items-center justify-center gap-[5px] bg-none border-none cursor-pointer font-tajawal text-[10px] font-bold text-primary2 transition-opacity active:opacity-70">
              <div className="w-6 h-6 rounded-full bg-play-grad flex items-center justify-center shadow-[0_2px_6px_var(--play-glow)]">
                <RecitationPlayer
                  isPlaying={isCardPlaying}
                  onToggle={handlePlay}
                />
              </div>
              {t("reciters.listen_now")}
            </div>
          )}
        </div>
      </div>
    );
  }
}
