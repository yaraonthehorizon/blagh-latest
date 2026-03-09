import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Sunrise, Sun, CloudSun, Sunset, Moon } from "lucide-react";

export function usePrayerTimes() {
  const { t } = useTranslation();
  // State lives here, separated from the UI
  const [nextPrayerIndex, setNextPrayerIndex] = useState(3); // Mocking Maghrib (Index 3)
  const [timeRemaining, setTimeRemaining] = useState("15");

  const prayers = [
    { name: t("prayers.fajr"), time: "05:12 AM", icon: Sunrise },
    { name: t("prayers.dhuhr"), time: "12:30 PM", icon: Sun },
    { name: t("prayers.asr"), time: "03:45 PM", icon: CloudSun },
    { name: t("prayers.maghrib"), time: "06:15 PM", icon: Sunset },
    { name: t("prayers.isha"), time: "07:45 PM", icon: Moon },
  ];

  const nextPrayer = prayers[nextPrayerIndex];

  useEffect(() => {
    // DESIGN NOTE: This is where you will later integrate the 'adhan' library.
    // The logic will be:
    // 1. Get current time (new Date())
    // 2. Compare against prayer times array
    // 3. Determine which index is next
    // 4. Calculate diff = nextPrayerTime - now
    // 5. Format diff as "Xh Ym" and setTimeRemaining(diff)

    // Mocking a simple countdown for now to prove the design works
    const timer = setInterval(() => {
      // In a real app, recalculate the diff here every minute
      console.log("Tick: Recalculating next prayer...");
    }, 60000);

    return () => clearInterval(timer);
  }, []);

  return {
    nextPrayerIndex,
    timeRemaining: "" + timeRemaining + " " + t("content.home.minutes"),
    prayers,
    nextPrayer,
  };
}
