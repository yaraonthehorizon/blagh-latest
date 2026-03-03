import { Header } from "@/components/Header";
import { useTranslation } from "react-i18next";

export function Quran() {
  const surahs = [
    {
      number: 1,
      name: "Al-Fatiha",
      englishName: "The Opening",
      ayahs: 7,
      page: 1,
    },
    {
      number: 2,
      name: "Al-Baqarah",
      englishName: "The Cow",
      ayahs: 286,
      page: 2,
    },
    {
      number: 3,
      name: "Al-Imran",
      englishName: "Family of Imran",
      ayahs: 200,
      page: 50,
    },
    {
      number: 4,
      name: "An-Nisa",
      englishName: "The Women",
      ayahs: 176,
      page: 77,
    },
    {
      number: 5,
      name: "Al-Ma'idah",
      englishName: "The Table Spread",
      ayahs: 120,
      page: 106,
    },
    {
      number: 6,
      name: "Al-An'am",
      englishName: "The Cattle",
      ayahs: 165,
      page: 128,
    },
    {
      number: 7,
      name: "Al-A'raf",
      englishName: "The Heights",
      ayahs: 206,
      page: 151,
    },
  ];

  const scrollToSurah = (id: number) => {
    const element = document.getElementById(`surah-${id}`);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <div className="min-h-screen bg-background px-4 pb-24">
      <div className="fixed end-1 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-0.5 items-center py-2 px-0.5 rounded-full bg-card/30 backdrop-blur-md border border-border/20 shadow-sm max-h-[60vh] overflow-y-auto no-scrollbar w-5">
        {surahs.map((s) => (
          <button
            key={s.number}
            onClick={() => scrollToSurah(s.number)}
            className="text-xxxs font-bold text-muted-foreground/70 hover:text-primary hover:scale-150 transition-all w-full text-center h-3 flex items-center justify-center"
          >
            {s.number}
          </button>
        ))}
      </div>
      <div className="relative px-2 pb-8  max-w-lg mx-auto">
        <Header headerTitleKey="page_title.quran" className="text-primary" />
        <div className="space-y-3">
          {surahs.map((surah) => (
            <button
              key={surah.number}
              id={`surah-${surah.number}`}
              className="flex w-full items-center justify-between rounded-xl bg-card p-4 shadow-card transition-transform hover:scale-[1.01] active:scale-[0.99]"
            >
              <div className="flex items-center gap-5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 font-bold text-primary">
                  {surah.number}
                </div>
                <div className="text-left">
                  <h3 className="text-xl font-bold text-foreground">
                    {surah.name}
                  </h3>
                  <p className="text-xs text-muted-foreground">
                    {surah.englishName}
                  </p>
                </div>
              </div>
              <div className="flex gap-2 flex-row items-center">
                <div className="rounded-full bg-primary/10 px-2 py-1 text-xxxs font-medium text-primary">
                  {surah.page} Pages
                </div>
                <div className="rounded-full bg-secondary/10 px-3 py-1 text-xxxs font-medium text-secondary">
                  {surah.ayahs} Ayas
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
