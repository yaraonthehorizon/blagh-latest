import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { useTranslation } from "react-i18next";
import { ChatMessage } from "@/types/chat";
import { ChatApiResponse } from "@/types/chat/chat-api-response";
import { apiClient } from "@/lib/api-client";

export function useMutateChatMessage() {
  const { t } = useTranslation();

  return useMutation({
    mutationFn: async ({
      messages,
      locale,
    }: {
      messages: ChatMessage[];
      locale: string;
    }): Promise<ChatApiResponse> => {
      return apiClient<ChatApiResponse>("chat", { data: { messages, locale } });
    },
  });
}
