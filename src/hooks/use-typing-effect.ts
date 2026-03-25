import { useEffect, useState } from "react";

export function useTypingEffect(text: string, speed = 20) {
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    if (!text) return;

    setDisplayed("");
    let i = 0;

    const intervalId = setInterval(() => {
      setDisplayed(text.slice(0, i + 1));
      i++;

      if (i >= text.length) {
        clearInterval(intervalId);
      }
    }, speed);

    return () => clearInterval(intervalId);
  }, [text, speed]);

  return displayed;
}
