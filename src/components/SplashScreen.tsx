import { useEffect, useState } from "react";
import balaghIcon from "@/assets/balagh-icon.png";

interface SplashScreenProps {
  onComplete: () => void;
}

export function SplashScreen({ onComplete }: SplashScreenProps) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Start fading out after 2 seconds
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 2000);

    // Trigger onComplete after the fade-out transition (500ms) finishes
    const cleanup = setTimeout(() => {
      onComplete();
    }, 2500);

    return () => {
      clearTimeout(timer);
      clearTimeout(cleanup);
    };
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-background transition-opacity duration-500 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="flex flex-col items-center animate-pulse">
        <img
          src={balaghIcon}
          alt="Balagh"
          className="h-32 w-32 object-contain drop-shadow-lg"
        />
      </div>
    </div>
  );
}
