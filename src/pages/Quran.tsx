import { Header } from "@/components/Header";
import SearchBar from "@/components/SearchBar";
import { surahs } from "@/lib/data";
import { useNavigate } from "react-router-dom";

export function Quran() {
  const navigate = useNavigate();
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
        <Header headerTitleKey="page_title.quran" />
        <SearchBar />
        <div className="space-y-3">
          {surahs.map((surah) => (
            <button
              key={surah.number}
              id={`surah-${surah.number}`}
              onClick={() => navigate(`/quran/${surah.number}`)}
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
