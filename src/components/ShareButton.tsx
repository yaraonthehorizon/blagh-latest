import React from "react";
import { Share } from "@capacitor/share";
import { Share as ShareIcon, Copy as CopyIcon } from "lucide-react";
interface ShareButtonProps {
  buttonText?: string;
  title: string;
  description?: string;
  url: string;
}
export function ShareButton({ buttonText, title, url }: ShareButtonProps) {
  async function handleShare() {
    try {
      const { value: canShare } = await Share.canShare();

      // Ensure we don't accidentally get double slashes if the url prop has a leading slash
      const cleanUrl = url.startsWith("/") ? url.slice(1) : url;
      const fullUrl = `${window.location.origin}/blagh-latest/${cleanUrl}`;

      if (canShare) {
        await Share.share({
          title: title,
          url: fullUrl,
          dialogTitle: "Share with friends", // This property only applies to Android
        });
      } else {
        await navigator.clipboard.writeText(fullUrl);
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
      <div className="flex justify-center items-center gap-2 text-xl mt-2 sm:mt-0">
        {buttonText || ""}
        <ShareIcon size={20} className="inline-block mb-2.5  sm:mt-2 " />
      </div>
    </button>
  );
}

export default ShareButton;
