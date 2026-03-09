import { Track } from "@/providers/AudioPlayerProvider";
import { createContext } from "react";

interface AudioPlayerContextType {
  isPlaying: boolean;
  currentTrack: Track | null;
  playTrack: (track: Track) => void;
  togglePlay: () => void;
  currentTime: number;
  duration: number;
  seek: (time: number) => void;
  closePlayer: () => void;
}
export const AudioPlayerContext = createContext<
  AudioPlayerContextType | undefined
>(undefined);
