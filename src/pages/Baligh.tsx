import { Bot, Send, Loader2 } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import balaghIcon from "@/assets/balagh-icon.png";
import ReactMarkdown from "react-markdown";
import { useTranslation } from "react-i18next";
import { Header } from "@/components/Header";

type Msg = { role: "user" | "assistant"; content: string };

const CHAT_URL = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/baligh-chat`;

const Baligh = () => {
  const { t } = useTranslation();
  const [messages, setMessages] = useState<Msg[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const suggestions = [
    t("baligh.suggestions.fatiha"),
    t("baligh.suggestions.plan"),
    t("baligh.suggestions.athkar"),
    t("baligh.suggestions.kursi"),
  ];

  const sendMessage = async (text: string) => {
    if (!user) {
      navigate("/auth");
      return;
    }
    if (!text.trim() || isLoading) return;

    const userMsg: Msg = { role: "user", content: text.trim() };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setIsLoading(true);

    let assistantSoFar = "";
    const allMessages = [...messages, userMsg];

    try {
      const resp = await fetch(CHAT_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY}`,
        },
        body: JSON.stringify({ messages: allMessages }),
      });

      if (!resp.ok) {
        const errData = await resp.json().catch(() => ({}));
        throw new Error(errData.error || `Error ${resp.status}`);
      }

      if (!resp.body) throw new Error("No response body");

      const reader = resp.body.getReader();
      const decoder = new TextDecoder();
      let textBuffer = "";

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        textBuffer += decoder.decode(value, { stream: true });

        let newlineIndex: number;
        while ((newlineIndex = textBuffer.indexOf("\n")) !== -1) {
          let line = textBuffer.slice(0, newlineIndex);
          textBuffer = textBuffer.slice(newlineIndex + 1);
          if (line.endsWith("\r")) line = line.slice(0, -1);
          if (line.startsWith(":") || line.trim() === "") continue;
          if (!line.startsWith("data: ")) continue;
          const jsonStr = line.slice(6).trim();
          if (jsonStr === "[DONE]") break;
          try {
            const parsed = JSON.parse(jsonStr);
            const content = parsed.choices?.[0]?.delta?.content as
              | string
              | undefined;
            if (content) {
              assistantSoFar += content;
              setMessages((prev) => {
                const last = prev[prev.length - 1];
                if (last?.role === "assistant") {
                  return prev.map((m, i) =>
                    i === prev.length - 1
                      ? { ...m, content: assistantSoFar }
                      : m,
                  );
                }
                return [
                  ...prev,
                  { role: "assistant", content: assistantSoFar },
                ];
              });
            }
          } catch {
            textBuffer = line + "\n" + textBuffer;
            break;
          }
        }
      }
    } catch (e: unknown) {
      console.error(e);
      if (e instanceof Error)
        toast.error(e.message || "Failed to get response");
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendMessage(input);
  };

  const hasMessages = messages.length > 0;

  return (
    <div className="page-container ">
      <div className="page-content">
        <Header
          headerTitleKey="page_title.baligh"
          backButton
          className="text-3xl mt-1"
        />
      </div>

      {!hasMessages ? (
        <div className="flex-1 flex flex-col items-center justify-center  page-content">
          <img
            src={balaghIcon}
            alt="Baligh"
            className="mb-4 h-16 w-16 opacity-60"
          />
          <p className=" text-lg font-semibold text-foreground text-center">
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
              <button
                key={s}
                onClick={() => sendMessage(s)}
                className="w-full rounded-lg border border-border bg-card px-4 py-2.5 text-left text-sm text-foreground transition-colors hover:bg-muted"
              >
                {s}
              </button>
            ))}
          </div>
        </div>
      ) : (
        <div className="flex-1 overflow-y-auto px-5 space-y-4 page-content">
          {messages.map((m, i) => (
            <div
              key={i}
              className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm ${
                  m.role === "user"
                    ? "gradient-spiritual text-primary-foreground rounded-br-md"
                    : "bg-card shadow-card text-foreground rounded-bl-md"
                }`}
              >
                {m.role === "assistant" ? (
                  <div className="prose prose-sm max-w-none text-foreground prose-headings:text-foreground prose-strong:text-foreground prose-a:text-secondary">
                    <ReactMarkdown>{m.content}</ReactMarkdown>
                  </div>
                ) : (
                  m.content
                )}
              </div>
            </div>
          ))}
          {isLoading && messages[messages.length - 1]?.role === "user" && (
            <div className="flex justify-start">
              <div className="rounded-2xl rounded-bl-md bg-card px-4 py-3 shadow-card">
                <Loader2 className="h-4 w-4 animate-spin text-muted-foreground" />
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>
      )}

      <div className="px-5 pb-2 pt-3 page-content">
        <form
          onSubmit={handleSubmit}
          className="flex items-center gap-2 rounded-xl bg-card px-4 py-3 shadow-card"
        >
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={
              user
                ? t("baligh.input_placeholder")
                : t("baligh.signin_placeholder")
            }
            disabled={!user}
            className="flex-1 bg-transparent text-sm text-foreground placeholder:text-muted-foreground outline-none"
          />
          <button
            type="submit"
            disabled={isLoading || !input.trim() || !user}
            className="rounded-full bg-background p-2  transition-transform hover:scale-105 active:scale-95 disabled:opacity-50"
          >
            {isLoading ? (
              <Loader2 className="h-4 w-4 text-foreground animate-spin" />
            ) : (
              <Send className="h-4 w-4 text-foreground" />
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Baligh;
