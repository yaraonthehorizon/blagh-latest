import { useAudioPlayer } from "@/hooks/use-audio-player";
import { Pause, Play } from "lucide-react";

interface AudioViewerProps {
  key: number;
  title: string;
  trackId: string;
  item: {
    order: number;
    size: string;
    extension_type: string;
    description: string;
    url: string;
  };
}
export function AudioViewer({ key, item, trackId, title }: AudioViewerProps) {
  const { playTrack, togglePlay, currentTrack, isPlaying } = useAudioPlayer();
  const isCurrent = currentTrack?.id === trackId;
  const isPlayingTrack = isCurrent && isPlaying;
  return (
    <div
      key={key}
      className="flex flex-col text-center items-center gap-4 rounded-lg border text-sm mt-5 bg-card p-5 text-card-foreground shadow-sm"
    >
      <button
        onClick={() => {
          if (isCurrent) {
            togglePlay();
          } else {
            playTrack({
              id: trackId,
              title: title,
              src: item.url,
            });
          }
        }}
        className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground"
      >
        {isPlayingTrack ? <Pause /> : <Play />}
      </button>
      <p className="flex-1 font-medium">{title}</p>
    </div>
  );
}
