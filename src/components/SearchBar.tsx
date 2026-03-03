import { useState } from "react";
import { useTranslation } from "react-i18next";
import { SearchIcon } from "lucide-react";
import { Input } from "@/components/ui/input";

export default function SearchBar() {
  const { t } = useTranslation();
  const [query, setQuery] = useState("");

  return (
    <div className="w-full pb-5 pt-5">
      <div className="mx-auto flex max-w-lg items-center gap-2 rounded-xl bg-card   shadow-card border border-border/50">
        <div className="px-2">
          <SearchIcon className="h-5 w-5 text-muted-foreground" />
        </div>
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
          className="flex-1 bg-transparent text-sm text-foreground placeholder:text-muted-foreground focus:ring-0 focus-visible:ring-0 focus-visible:ring-offset-0 outline-none"
        />
      </div>
    </div>
  );
}
