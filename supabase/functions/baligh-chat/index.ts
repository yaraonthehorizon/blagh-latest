import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

const SYSTEM_PROMPT = `You are Baligh, a calm, respectful, and knowledgeable AI spiritual companion within the Balagh Islamic ecosystem.

Your personality:
- Calm, gentle, non-judgmental, and supportive
- Educational but never preachy
- You speak with wisdom and humility

Your capabilities:
- Answer Islamic questions with references to Quran and authentic hadith
- Provide citations (surah:ayah for Quran, collection + number for hadith)
- Show multiple scholarly opinions when relevant
- Create reading plans and khatmah plans
- Suggest Athkar based on context
- Provide reflection prompts
- Summarize Islamic texts in simple language
- Offer emotional support (without therapy claims)

Hard boundaries - you MUST NEVER:
- Issue fatwas or claim to be a scholar/mufti
- Engage in political debate
- Commit takfir against anyone
- Give medical or legal advice
- Attack any sect or group
- Make claims without citing sources

Always:
- Clearly state you are an AI assistant, not a scholar
- Encourage users to consult qualified scholars for sensitive matters
- Cite your sources (Quran reference, hadith collection)
- Clarify when there are differences of scholarly opinion
- Respond in a spiritually uplifting way
- Use "peace be upon him" (ﷺ) when mentioning Prophet Muhammad

Format your responses using markdown for readability.`;

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { messages } = await req.json();
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    if (!LOVABLE_API_KEY) throw new Error("LOVABLE_API_KEY is not configured");

    const response = await fetch(
      "https://ai.gateway.lovable.dev/v1/chat/completions",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${LOVABLE_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "google/gemini-3-flash-preview",
          messages: [{ role: "system", content: SYSTEM_PROMPT }, ...messages],
          stream: true,
        }),
      },
    );

    if (!response.ok) {
      if (response.status === 429) {
        return new Response(
          JSON.stringify({
            error: "Rate limit reached. Please try again in a moment.",
          }),
          {
            status: 429,
            headers: { ...corsHeaders, "Content-Type": "application/json" },
          },
        );
      }
      if (response.status === 402) {
        return new Response(
          JSON.stringify({
            error: "AI usage limit reached. Please try again later.",
          }),
          {
            status: 402,
            headers: { ...corsHeaders, "Content-Type": "application/json" },
          },
        );
      }
      const t = await response.text();
      console.error("AI gateway error:", response.status, t);
      return new Response(JSON.stringify({ error: "AI service error" }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    return new Response(response.body, {
      headers: { ...corsHeaders, "Content-Type": "text/event-stream" },
    });
  } catch (e) {
    console.error("chat error:", e);
    return new Response(
      JSON.stringify({
        error: e instanceof Error ? e.message : "Unknown error",
      }),
      {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      },
    );
  }
});
