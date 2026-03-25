import { Send, Loader2, Link, Dot } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import balaghIcon from "@/assets/balagh-icon.png";
import { useTranslation } from "react-i18next";
import { Header } from "@/components/Header";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useMutateChatMessage } from "@/mutations/chat/use-mutate-chat-message";
import { ChatMessage } from "@/types/chat";
import { ChatApiResponse } from "@/types/chat/chat-api-response";
import { toast } from "sonner";
import { TypingMessage } from "@/components/TypingMessage";
import { cn } from "@/lib/utils";

export function Baligh() {
  const { t, i18n } = useTranslation();
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const { isPending, mutate: chatMutation } = useMutateChatMessage();

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "auto" });
  }, [messages]);

  const suggestions = [
    t("baligh.suggestions.fatiha"),
    t("baligh.suggestions.plan"),
    t("baligh.suggestions.athkar"),
  ];

  function sendMessage(text: string) {
    if (!text.trim() || isPending) return;
    const userMsg: ChatMessage = {
      id: crypto.randomUUID(),
      role: "user",
      content: text.trim(),
    };

    setMessages((prevMessages) => [...prevMessages, userMsg]);
    setInput("");

    chatMutation(
      { messages: [userMsg], locale: i18n.language },
      {
        onSuccess: async (response: ChatApiResponse) => {
          setMessages((prev) => [
            ...prev,
            {
              id: response.requestIdentifier,
              role: "assistant",
              content: {
                message: response?.data?.response?.message || "No message",
                redirectUrl: response?.data?.response?.redirectUrl,
              },
            },
          ]);
        },
        onError: (error) => {
          toast.error(error.message || t("baligh.error_response"));
        },
      },
    );
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    sendMessage(input);
  }

  const hasMessages = messages.length > 0;

  return (
    <div className="h-[100dvh] page-container overflow-hidden flex flex-col gap-10 ">
      {/* Header */}
      <div className="page-content w-full">
        <Header
          headerTitleKey="page_title.baligh"
          backButton
          className="text-3xl mt-1"
        />
      </div>

      {/* Messages */}
      {hasMessages ? (
        <div className="flex-grow min-h-0 overflow-y-auto overscroll-contain space-y-5 page-content mt-10  w-full ">
          {messages.map((m, i) => {
            const isLastMessage = i === messages.length - 1;
            return (
              <div
                key={`${m.role}-${m.id}`}
                className={cn(
                  "flex w-full items-start ",
                  `${m.role === "user" ? "justify-start" : "justify-end"}`,
                )}
              >
                <div
                  className={cn("flex", "flex-col", "space-y-2", {
                    "items-start": m.role === "user",
                    "items-end": m.role !== "user",
                  })}
                >
                  {/* Message Bubble */}
                  <div
                    className={cn(
                      "max-w-[85%] rounded-2xl px-4 py-3 text-sm flex justify-center",
                      {
                        "bg-card-foreground shadow-card text-primary-foreground rounded-br-md":
                          m.role === "user",
                        "bg-card shadow-card text-foreground rounded-bl-md":
                          m.role !== "user",
                      },
                    )}
                  >
                    {m.role === "assistant" && typeof m.content === "object" ? (
                      <div className=" max-w-none text-foreground">
                        {m.content.message &&
                          (isLastMessage ? (
                            <TypingMessage
                              text={m.content.message}
                              onUpdate={() =>
                                messagesEndRef.current?.scrollIntoView({
                                  behavior: "smooth",
                                })
                              }
                            />
                          ) : (
                            m.content.message
                          ))}
                      </div>
                    ) : (
                      m.content.toString()
                    )}
                  </div>

                  {/* Redirect Chip */}
                  {m.role === "assistant" &&
                    typeof m.content === "object" &&
                    m.content.redirectUrl && (
                      <a
                        href={m.content.redirectUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1.5 text-xs font-medium text-primary hover:bg-primary/20"
                      >
                        {t("baligh.redirect")}
                        <Link className="h-3 w-3" />
                      </a>
                    )}
                </div>
              </div>
            );
          })}

          {/* Loading Indicator */}
          {isPending && messages[messages.length - 1]?.role === "user" && (
            <div
              className={cn(
                "flex w-full justify-start",
                `${messages[messages.length - 1]?.role === "assistant" ? "justify-start" : "justify-end"}`,
              )}
            >
              <div className="rounded-2xl rounded-bl-md bg-card px-4 py-3 shadow-card">
                <Loader2 className="h-4 w-4 animate-spin text-muted-foreground" />
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>
      ) : (
        /* Empty State */
        <div className="flex-1 min-h-0 flex flex-col items-center justify-center page-content space-y-5 mt-10">
          <img
            src={balaghIcon}
            alt="Baligh"
            className="mb-4 h-16 w-16 opacity-60"
          />

          <p className="text-lg font-semibold text-center">
            {t("baligh.welcome")}
          </p>

          <p className="mt-2 max-w-xs text-center text-sm text-muted-foreground">
            {t("baligh.intro")}
          </p>

          <p className="mt-4 rounded-lg bg-muted px-3 py-1.5 text-xs text-muted-foreground">
            {t("baligh.disclaimer")}
          </p>

          <div className="mt-6 w-full max-w-sm space-y-2">
            {suggestions.map((s) => (
              <Button
                key={s}
                onClick={() => sendMessage(s)}
                className="w-full rounded-lg text-primary items-start justify-start border border-border bg-card  text-sm hover:bg-muted"
              >
                {s}
              </Button>
            ))}
          </div>
        </div>
      )}

      {/* Input */}
      <div className="flex-shrink-0 border-t bg-background page-content mt-10 -mb-12 w-full ">
        <form
          onSubmit={handleSubmit}
          className="flex gap-3 rounded-xl bg-card px-3 py-3 shadow-card my-2  border"
        >
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={t("baligh.input_placeholder")}
            className="flex-1 bg-transparent text-base outline-none "
          />

          <Button
            type="submit"
            disabled={isPending || !input.trim()}
            className="rounded-full bg-background text-foreground p-3 hover:scale-105 active:scale-95 disabled:opacity-50"
          >
            <Send className="h-4 w-4" />
          </Button>
        </form>
      </div>
    </div>
  );
}
