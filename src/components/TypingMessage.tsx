import { useTypingEffect } from "@/hooks/use-typing-effect";
import { useEffect } from "react";

export function TypingMessage({
  text,
  speed = 25,
  onUpdate,
}: {
  text: string;
  speed?: number;
  onUpdate?: () => void;
}) {
  const typed = useTypingEffect(text, speed);
  useEffect(() => {
    onUpdate();
  }, [typed, onUpdate]);

  return <>{typed}</>;
}
