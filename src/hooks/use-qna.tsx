import { useTranslation } from "react-i18next";
import enData from "@/content/en/qna.json";
import arData from "@/content/ar/qna.json";

export const useQna = () => {
  const { i18n } = useTranslation();
  const isAr = i18n.language === "ar";
  return isAr ? arData : enData;
};
