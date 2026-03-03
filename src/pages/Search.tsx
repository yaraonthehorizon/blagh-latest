import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Search as SearchIcon, BookOpen, Scroll } from "lucide-react";
import { Header } from "@/components/Header";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";

export default function Search() {
  const { t, i18n } = useTranslation();
  const [query, setQuery] = useState("");

  return (
    <div className="flex h-screen flex-col bg-background pb-20 pt-12">
      <div className="flex flex-1 flex-col overflow-hidden px-4">
        <div className="mx-auto flex h-full w-full max-w-lg flex-col">
          {/* <Header headerTitleKey="page_title.search" className="text-primary" /> */}

          {/* Search Types Tabs */}
          <Tabs
            defaultValue="quran"
            className="flex flex-1 flex-col"
            dir={i18n.language === "ar" ? "rtl" : "ltr"}
          >
            <TabsList className="w-full">
              <TabsTrigger value="quran" className="flex-1">
                {t("content.search.tabs.quran")}
              </TabsTrigger>
              <TabsTrigger value="hadith" className="flex-1">
                {t("content.search.tabs.hadith")}
              </TabsTrigger>
            </TabsList>
            <TabsContent
              value="quran"
              className="flex-1 overflow-y-auto text-sm text-muted-foreground mt-5"
            >
              {t("content.search.tab_content.quran")}
            </TabsContent>
            <TabsContent
              value="hadith"
              className="flex-1 overflow-y-auto text-sm text-muted-foreground mt-5"
            >
              {t("content.search.tab_content.hadith")}
            </TabsContent>
          </Tabs>
        </div>
      </div>

      {/* Bottom Search Bar */}
      <div className="w-full px-5 pb-4 pt-2">
        <div className="mx-auto flex max-w-lg items-center gap-2 rounded-xl bg-card px-4 py-3 shadow-card border border-border/50">
          <SearchIcon className="h-5 w-5 text-muted-foreground" />
          <Input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={t("content.search.input_placeholder")}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                // Add your search submission logic here
              }
            }}
            className="flex-1 bg-transparent text-sm text-foreground placeholder:text-muted-foreground outline-none"
          />
        </div>
      </div>
    </div>
  );
}
