// c:\Users\YaraK\balagh-your-islamic-compass\src\pages\ChildrenCategory.tsx
import { useParams, useNavigate } from "react-router-dom";
import { useQna } from "@/hooks/use-qna";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ArrowLeft } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function ChildrenCategory() {
  const { categoryId } = useParams();
  const navigate = useNavigate();
  const { i18n } = useTranslation();
  const data = useQna();
  const category = data.find((c) => c.id === categoryId);

  if (!category) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        Category not found
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background px-5 pb-24 pt-12">
      <div className="relative max-w-lg mx-auto">
        <div className="mb-6 flex items-center gap-4">
          <button
            onClick={() => navigate(-1)}
            className="rounded-full bg-card p-2 text-foreground shadow-sm transition-colors hover:bg-muted"
          >
            <ArrowLeft
              className={`h-5 w-5 ${i18n.dir() === "rtl" ? "rotate-180" : ""}`}
            />
          </button>
          <h1 className=" text-2xl font-bold text-primary">{category.title}</h1>
        </div>

        <div className="rounded-xl bg-card p-4 shadow-card">
          <p className="mb-6  text-sm text-muted-foreground">
            {category.description}
          </p>

          <Accordion type="single" collapsible className="w-full">
            {category.items.map((item) => (
              <AccordionItem key={item.id} value={item.id}>
                <AccordionTrigger className=" text-primary text-left text-xl font-semibold hover:no-underline hover:text-foreground">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className=" text-sm leading-relaxed text-foreground/90">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
}
