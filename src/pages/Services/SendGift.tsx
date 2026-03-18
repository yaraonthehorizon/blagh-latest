import { Header } from "@/components/Header";
import { useTranslation } from "react-i18next";
import { AppCard } from "@/components/AppCard";
import { useGetKnowledgeGiftItems } from "@/queries/knowledge/use-get-knowledge-gift-items";
import ShareButton from "@/components/ShareButton";
import {
  KnowledgeItem,
  KnowledgeItemResponse,
} from "@/types/knowledge/knowledge-item";
export function SendGift() {
  const { t, i18n } = useTranslation();
  const sourceLanguage = i18n.language.startsWith("ar") ? "ar" : "en";

  const { data, isLoading, isError } = useGetKnowledgeGiftItems<{
    data: KnowledgeItemResponse;
  }>(sourceLanguage);

  if (isLoading) {
    return (
      <div className="page-container">
        <div className="page-content">
          <Header headerTitleKey="" backButton className="text-2xl mt-2" />
          <div className="grid grid-cols-1 gap-3 mt-10">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div
                key={i}
                className="h-32 rounded-xl bg-muted/20 animate-pulse"
              />
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="page-container">
        <div className="page-content">
          <Header
            headerTitleKey="page_title.knowledge"
            backButton
            className="text-xl"
          />
          <div className=" flex items-center justify-center h-[400px]">
            <p className="text-foreground text-lg">Error loading items.</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="page-container">
      <div className="page-content">
        <Header
          headerTitleKey="content.profile.services.send_gift"
          backButton
          className="text-2xl mt-2"
        />
        <p className="text-md text-muted-foreground mb-6 -mt-2">
          {t("content.profile.services.send_gift_subtext")}
        </p>

        <div className="space-y-3">
          {data &&
            data
              .filter(
                (item): item is { data: KnowledgeItem } =>
                  !("error" in item.data),
              )
              .map((item) => (
                <AppCard
                  key={item.data.id}
                  className="flex items-center justify-between rounded-xl bg-card p-4 shadow-card transition-transform hover:scale-[1.01] active:scale-[0.99]"
                >
                  <div className="flex items-center gap-4">
                    <div>
                      <h3 className=" font-bold text-foreground text-base leading-tight">
                        {item.data.title}
                      </h3>
                      <p className="text-xs text-muted-foreground mt-1">
                        {item.data.description ? item.data.description : ""}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center justify-center shrink-0">
                    <ShareButton
                      url={
                        import.meta.env.VITE_BASE_WEB_URL +
                        `knowledge-gift/${item.data.id}`
                      }
                      title={item.data.title}
                      description={item.data.description}
                    />
                  </div>
                </AppCard>
              ))}
        </div>
      </div>
    </div>
  );
}
