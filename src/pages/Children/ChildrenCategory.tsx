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
import { BackButton } from "@/components/ui/back-button";
import { Header } from "@/components/Header";

export function ChildrenCategory() {
  const { categoryId } = useParams();
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
    <div className="page-container ">
      <div className="page-content">
        <Header headerTitleKey={category.title} backButton />

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
