import { Header } from "@/components/Header";
import { Share } from "lucide-react";
import { useTranslation } from "react-i18next";

export function SendQuranCard() {
  const { t } = useTranslation();

  function handleShare() {}

  return (
    <div className="page-container">
      <div className="page-content">
        <Header
          headerTitleKey="page_title.send_quran_card"
          backButton
          className="text-lg mt-2"
        />

        <div className="mt-8 relative overflow-hidden rounded-xl bg-[#fffbf2] shadow-xl border-[6px] border-double border-[#e4dccb]">
          <div className="relative z-10 p-6 sm:p-8 flex flex-col items-center text-center">
            <div className="mb-6 text-[#5c4b37] w-full border-b border-[#e4dccb] pb-4">
              <p className="font-arabic text-xl">بسم الله الرحمن الرحيم</p>
            </div>

            <div className="mb-8" dir="rtl">
              <p className="font-arabic text-2xl leading-[2.8] text-[#2c241b] text-justify">
                ٱللَّهُ لَآ إِلَـٰهَ إِلَّا هُوَ ٱلْحَىُّ ٱلْقَيُّومُ ۚ لَا
                تَأْخُذُهُۥ سِنَةٌۭ وَلَا نَوْمٌۭ ۚ لَّهُۥ مَا فِى
                ٱلسَّمَـٰوَٰتِ وَمَا فِى ٱلْأَرْضِ ۗ مَن ذَا ٱلَّذِى يَشْفَعُ
                عِندَهُۥٓ إِلَّا بِإِذْنِهِۦ ۚ يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ
                وَمَا خَلْفَهُمْ ۖ وَلَا يُحِيطُونَ بِشَىْءٍۢ مِّنْ عِلْمِهِۦٓ
                إِلَّا بِمَا شَآءَ ۚ وَسِعَ كُرْسِيُّهُ ٱلسَّمَـٰوَٰتِ
                وَٱلْأَرْضَ ۖ وَلَا يَـُٔودُهُۥ حِفْظُهُمَا ۚ وَهُوَ ٱلْعَلِىُّ
                ٱلْعَظِيمُ
              </p>
            </div>

            <div className="w-full border-t border-[#e4dccb] pt-4 mt-2 flex justify-between items-center text-[#8c7b66]">
              <span className="font-display text-xs font-bold">
                Surah Al-Baqarah
              </span>
              <div className="h-6 w-6 rounded-full border border-[#8c7b66] flex items-center justify-center text-[10px]">
                255
              </div>
            </div>
          </div>
        </div>

        <button
          onClick={handleShare}
          className="mt-8 w-full flex items-center justify-center gap-2 rounded-xl bg-primary py-4 font-bold text-primary-foreground shadow-lg transition-transform active:scale-95 hover:bg-primary/90"
        >
          <Share className="h-5 w-5" />
          {t("content.send_quran_card.share_button")}
        </button>
      </div>
    </div>
  );
}
