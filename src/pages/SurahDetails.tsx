import { useParams, useNavigate } from "react-router-dom";
import { surahs } from "@/lib/data";
import { ArrowLeft } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function SurahDetail() {
  const { surahNumber } = useParams();
  const navigate = useNavigate();
  const { i18n } = useTranslation();

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

  return (
    <div className="min-h-screen bg-background px-4 pb-24 pt-12">
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
                <span
                  key={i}
                  className="inline hover:bg-primary/10 rounded px-1 transition-colors cursor-pointer select-none"
                  // Placeholder for interaction triggers (e.g., onHold)
                  onClick={() => console.log(`Clicked verse ${i + 1}`)}
                  onContextMenu={(e) => {
                    e.preventDefault();
                    console.log(`Long press on verse ${i + 1}`);
                  }}
                >
                  {verse}{" "}
                  <span className="inline-flex items-center justify-center h-8 w-8 text-sm border border-primary/40 rounded-full text-primary mx-1 align-middle bg-background">
                    {(i + 1).toLocaleString("ar-EG")}
                  </span>{" "}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
