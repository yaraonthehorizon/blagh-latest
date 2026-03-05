import adab from "@/assets/icons/adab.svg";
import adeiah from "@/assets/icons/adab.svg";
import akhlaq from "@/assets/icons/akhlaq.svg";
import aqeeda from "@/assets/icons/aqeeda.svg";
import fiqh from "@/assets/icons/fiqh.svg";
import hadeeth from "@/assets/icons/hadeeth.svg";
import misc from "@/assets/icons/hadeeth.svg";
import seera from "@/assets/icons/akhlaq.svg";
import tafseer from "@/assets/icons/tafseer.svg";
import { useQna } from "@/hooks/use-qna";
import { useNavigate } from "react-router-dom";
import { Header } from "@/components/Header";
import SearchBar from "@/components/SearchBar";
import { AppCard } from "@/components/AppCard";

export function Children() {
  const categories = useQna();
  const navigate = useNavigate();

  const styles = [
    { icon: aqeeda, color: "bg-emerald-500 text-emerald-700" },
    { icon: fiqh, color: "bg-sky-500 text-sky-300" },
    { icon: seera, color: "bg-orange-600 text-amber-700" },
    { icon: tafseer, color: "bg-red-600 text-red-700" },
    { icon: hadeeth, color: "bg-purple-500 text-purple-700" },
    { icon: adab, color: "bg-indigo-500 text-indigo-700" },
    { icon: akhlaq, color: "bg-blue-500 text-blue-700" },
    { icon: adeiah, color: "bg-amber-500 text-orange-700" },
    { icon: misc, color: "bg-gray-500 text-gray-700" },
  ];

  return (
    <div className="page-container">
      <div className="page-content o">
        <Header
          headerTitleKey="page_title.children"
          backButton
          className="text-3xl mt-1"
        />
        <div className="grid grid-cols-3 gap-3 mt-10">
          {categories.map((category, index) => {
            const style = styles[index];
            return (
              <AppCard
                key={category.id}
                onClick={() => navigate(`/children/${category.id}`)}
                className="flex flex-col items-center gap-2 p-2 shadow-card transition-transform hover:scale-105 active:scale-95 rounded-xl"
              >
                <div className={`rounded-full p-2.5 ${style.color}`}>
                  <img
                    src={style.icon}
                    alt={category.title}
                    className="h-8 w-8 object-contain  mix-blend-screen"
                  />
                </div>
                <span className="text-xs font-medium text-primary text-center leading-tight">
                  {category.title}
                </span>
              </AppCard>
            );
          })}
        </div>
      </div>
    </div>
  );
}
