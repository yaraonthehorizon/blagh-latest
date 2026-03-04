import { useParams, useNavigate } from "react-router-dom";
import { surahs } from "@/lib/data";
import { ArrowLeft, Play, Share2, Bookmark } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { toast } from "sonner";
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from "@/components/ui/context-menu";

export function SurahDetail() {
  const { surahNumber } = useParams();
  const navigate = useNavigate();
  const { i18n } = useTranslation();
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const surah = surahs.find((s) => s.number === Number(surahNumber));

  if (!surah) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        Surah not found
      </div>
    );
  }

  // Mock text for demonstration.
  // In a real implementation, you would fetch the specific verses for the surah.
  const mockVerseText = "ٱلْحَمْدُ لِلَّهِ رَبِّ ٱلْعَـٰلَمِينَ";
  const fatihaVerses = [
    "بِسْمِ ٱللَّهِ ٱلرَّحْمَـٰنِ ٱلرَّحِيمِ",
    "ٱلْحَمْدُ لِلَّهِ رَبِّ ٱلْعَـٰلَمِينَ",
    "ٱلرَّحْمَـٰنِ ٱلرَّحِيمِ",
    "مَـٰلِكِ يَوْمِ ٱلدِّينِ",
    "إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ",
    "ٱهْدِنَا ٱلصِّرَٰطَ ٱلْمُسْتَقِيمَ",
    "صِرَٰطَ ٱلَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ ٱلْمَغْضُوبِ عَلَيْهِمْ وَلَا ٱلضَّآلِّينَ",
  ];

  const verses =
    surah.number === 1
      ? fatihaVerses
      : Array.from({ length: surah.ayahs }).map(() => mockVerseText);

  function handleShare(text: string) {
    if (navigator.share) {
      navigator.share({
        title: `Surah ${surah.name}`,
        text: text,
        url: window.location.href,
      });
    } else {
      toast.error("Sharing not supported on this device");
    }
  }

  return (
    <div className="page-container">
      <div className="relative max-w-3xl mx-auto">
        <div className="mb-6 flex items-center gap-4">
          <button
            onClick={() => navigate(-1)}
            className="rounded-full bg-card p-2 text-foreground shadow-sm transition-colors hover:bg-muted"
          >
            <ArrowLeft
              className={`h-5 w-5 ${i18n.dir() === "rtl" ? "rotate-180" : ""}`}
            />
          </button>
          <div>
            <h1 className="text-2xl font-bold text-primary">{surah.name}</h1>
            <p className="text-xs text-muted-foreground">{surah.englishName}</p>
          </div>
        </div>

        <div className="rounded-xl bg-card shadow-card border border-border/50 overflow-hidden">
          {/* Basmala Header */}
          <div className="bg-primary/5 p-6 text-center border-b border-border/50">
            <p className="font-arabic text-3xl text-primary">
              بِسْمِ ٱللَّهِ ٱلرَّحْمَـٰنِ ٱلرَّحِيمِ
            </p>
          </div>

          {/* Verses Container */}
          <div className="p-6 sm:p-8" dir="rtl">
            <div className="font-arabic text-2xl  leading-[2.3] text-justify text-foreground">
              {verses.map((verse, i) => (
                <ContextMenu key={i}>
                  <ContextMenuTrigger asChild>
                    <span
                      className={` rounded px-1 transition-colors cursor-pointer select-none ${selectedIndex === i ? "bg-primary/20" : "hover:bg-primary/10"}`}
                      onClick={() =>
                        setSelectedIndex(selectedIndex === i ? null : i)
                      }
                    >
                      {verse}{" "}
                      <span className="inline-flex items-center justify-center h-8 w-8 text-sm border border-primary/40 rounded-full text-primary mx-1 align-middle bg-background">
                        {(i + 1).toLocaleString("ar-EG")}
                      </span>{" "}
                    </span>
                  </ContextMenuTrigger>
                  <ContextMenuContent className="flex flex-row w-auto min-w-0 p-1">
                    <ContextMenuItem
                      onClick={() => toast.info("Playing audio...")}
                      className="justify-center flex-1"
                    >
                      <Play className="h-6 w-6" />
                    </ContextMenuItem>
                    <ContextMenuItem
                      onClick={() => handleShare(verse)}
                      className="justify-center flex-1"
                    >
                      <Share2 className="h-6 w-6" />
                    </ContextMenuItem>
                    <ContextMenuItem
                      onClick={() => toast.success("Verse saved to bookmarks")}
                      className="justify-center flex-1"
                    >
                      <Bookmark className="h-6 w-6" />
                    </ContextMenuItem>
                  </ContextMenuContent>
                </ContextMenu>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
