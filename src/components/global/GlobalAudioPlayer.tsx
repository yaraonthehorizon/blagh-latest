import { useAudioPlayer } from "@/hooks/use-audio-player";
import { Pause, Play, X } from "lucide-react";

export function GlobalAudioPlayer() {
  const {
    currentTrack,
    isPlaying,
    togglePlay,
    currentTime,
    duration,
    seek,
    closePlayer,
  } = useAudioPlayer();

  if (!currentTrack) return null;

  const formatTime = (time: number) => {
    if (isNaN(time)) return "0:00";
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  return (
    <div
      className="gap-1 cursor-pointer py-2 px-4 
    fixed bottom-2 left-1/2 -translate-x-1/2 w-full max-w-lg bg-surface border-t border-bdr-p p-3 flex  justify-between z-50 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] animate-in slide-in-from-bottom-0 duration-300"
    >
      <div className="fixed bottom-[90px] left-1/2 -translate-x-1/2 w-full max-w-lg z-50">
        <div
          className="gap-1 cursor-pointer py-2 px-4 
      w-full bg-surface border border-bdr-p rounded-[22px] p-3 flex justify-between shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] animate-in slide-in-from-bottom duration-300"
        >
          <div className="flex items-center gap-3 w-1/3 min-w-0">
            {currentTrack.image && (
              <img
                src={currentTrack.image}
                alt={currentTrack.title}
                className="w-10 h-10 rounded-md object-cover bg-surface3"
              />
            )}
            <div className="flex flex-col overflow-hidden">
              <span className="text-sm font-bold truncate text-foreground">
                {currentTrack.title}
              </span>
              <span className="text-xs text-muted-foreground truncate">
                {currentTrack.reciterName}
              </span>
            </div>
          </div>

          <div className="flex flex-col items-center w-1/3">
            <div className="flex items-start gap-4 mb-1">
              <button
                onClick={togglePlay}
                className="w-8 h-8 rounded-full bg-primary2 flex items-center justify-center text-white hover:opacity-90 transition-opacity shadow-sm"
              >
                {isPlaying ? (
                  <Pause className="w-4 h-4 fill-current" />
                ) : (
                  <Play className="w-4 h-4 fill-current ml-0.5" />
                )}
              </button>
            </div>
            <div className="flex items-center gap-2 w-full max-w-md">
              <span className="text-[10px] text-muted-foreground w-8 text-right tabular-nums">
                {formatTime(currentTime)}
              </span>
              <input
                type="range"
                min={0}
                max={duration || 100}
                value={currentTime}
                onChange={(e) => seek(Number(e.target.value))}
                className="flex-1 h-1 bg-bdr-p rounded-lg appearance-none cursor-pointer accent-primary2"
              />
              <span className="text-[10px] text-muted-foreground w-8 tabular-nums">
                {formatTime(duration)}
              </span>
            </div>
          </div>

          <div className="w-1/3 flex justify-end items-center">
            <button
              onClick={(e) => {
                e.stopPropagation();
                closePlayer();
              }}
            >
              <div className="text-muted-foreground hover:text-foreground p-1">
                <X className="w-5 h-5" />
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
