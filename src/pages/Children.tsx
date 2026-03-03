import { useTranslation } from "react-i18next";
import adab from "@/assets/children-categories/adab.png";
import adeiah from "@/assets/children-categories/adeiah.png";
import akhlaq from "@/assets/children-categories/akhlaq.png";
import aqeeda from "@/assets/children-categories/aqeeda.png";
import fiqh from "@/assets/children-categories/fiqh.png";
import hadeeth from "@/assets/children-categories/hadeeth.png";
import misc from "@/assets/children-categories/misc-small.png";
import seera from "@/assets/children-categories/seera-small.png";
import tafseer from "@/assets/children-categories/tafseer.png";

import { useQna } from "@/hooks/use-qna";
import { useNavigate } from "react-router-dom";
import { Header } from "@/components/Header";

export function Children() {
  const categories = useQna();
  const navigate = useNavigate();

  const styles = [
    { icon: aqeeda, color: "border-sky-200 bg-primary/80 text-background" },
    { icon: fiqh, color: "border-sky-200 bg-sky-600 text-background" },
    {
      icon: seera,
      color: "border-sky-200 bg-amber-500  text-background",
    },
    {
      icon: tafseer,
      color: "border-sky-200 bg-red-500/90 text-background",
    },
    {
      icon: hadeeth,
      color: "border-sky-200 bg-purple-500 text-background",
    },
    { icon: adab, color: "border-sky-200 bg-indigo-500 text-background" },
    { icon: akhlaq, color: "border-sky-200 bg-blue-500 text-background" },
    { icon: adeiah, color: "border-sky-200 bg-orange-500 text-background" },
    { icon: misc, color: "border-sky-200 bg-gray-500 text-background" },
  ];

  return (
    <div className="min-h-screen bg-background px-5 pb-24 ">
      <div className="relative max-w-lg mx-auto">
        <Header
          headerTitleKey="content.children.title"
          className="text-primary text-2xl"
        />
        <div className="grid grid-cols-2 gap-3">
          {categories.map((category, index) => {
            const lastIndex = categories.length - 1;
            const style = styles[index];
            return (
              <button
                key={category.id}
                onClick={() => navigate(`/children/${category.id}`)}
                className={`${
                  index === lastIndex ? "col-span-2" : ""
                } flex  items-center justify-between rounded-2xl border-2 p-4 shadow-sm transition-transform hover:scale-105 active:scale-95 ${style.color}`}
              >
                <span className="font-bold text-base text-center leading-tight">
                  {category.title}
                </span>
                <img
                  src={style.icon}
                  alt={category.title}
                  className="mb-3 h-16 w-16 object-contain"
                />
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
