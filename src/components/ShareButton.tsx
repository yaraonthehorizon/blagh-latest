import React from "react";
import { Share } from "@capacitor/share";
import { Share as ShareIcon } from "lucide-react";
interface ShareButtonProps {
  buttonText?: string;
  title: string;
  description?: string;
  url: string;
}
export function ShareButton({
  buttonText,
  title,
  description,
  url,
}: ShareButtonProps) {
  async function handleShare() {
    // const baseWebUrl =
    //   import.meta.env.VITE_BASE_WEB_URL || "http://localhost:5173";
    // const currentPath = window.location.pathname;

    // const urlToShare = Capacitor.isNativePlatform()
    //   ? `${baseWebUrl}${currentPath}`
    //   : window.location.href;

    try {
      const { value: canShare } = await Share.canShare();

      if (canShare) {
        await Share.share({
          title: title,
          text:
            description || "I just found this and thought you might like it.",
          url: url,
          dialogTitle: "Share with friends", // This property only applies to Android
        });
      } else {
        await navigator.clipboard.writeText(url);
        alert("Link copied to clipboard!");
      }
    } catch (error) {
      console.error("Error sharing:", error);
    }
  }

  return (
    <button
      className="flex rtl:flex-row-reverse items-center justify-center gap-2 w-full h-10 mt-5 rounded-lg bg-primary text-primary-foreground text-sm font-semibold hover:bg-primary/90 transition-colors"
      onClick={handleShare}
      style={{ padding: "10px 20px", fontSize: "16px" }}
    >
      <div className="flex items-center gap-2 text-lg -mt-0.5">
        {buttonText || ""}
        <ShareIcon size={20} className="inline-block -pt-1.5 sm:-mt-1 " />
      </div>
    </button>
  );
}

export default ShareButton;
