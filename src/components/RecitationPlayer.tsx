import { Pause, Play } from "lucide-react";

interface RecitationPlayerProps {
  isPlaying?: boolean;
  onToggle?: () => void;
}

export function RecitationPlayer({
  isPlaying,
  onToggle,
}: RecitationPlayerProps) {
  const togglePlay = (e: React.MouseEvent) => {
    e.stopPropagation();
    onToggle?.();
  };

  return (
    <>
      <button
        onClick={togglePlay}
        className="flex items-center justify-center w-full h-full bg-transparent border-none p-0 cursor-pointer outline-none"
      >
        {isPlaying ? (
          <Pause className="h-3 w-3 text-white fill-current" />
        ) : (
          <Play className="h-3 w-3 text-white fill-current ml-0.5" />
        )}
      </button>
    </>
  );
}
