"use client";

import { useTranslations, useLocale } from "next-intl";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Message = { role: "bot" | "user"; text: string };

const PROMPT_KEYS = ["launch", "price", "ship", "real"] as const;
type PromptKey = (typeof PROMPT_KEYS)[number];

// Lightweight keyword matcher (multilingual). Returns matching answer key or null.
function matchAnswer(input: string): PromptKey | "fallback" {
  const t = input.toLowerCase();
  const has = (...words: string[]) => words.some((w) => t.includes(w));

  if (has("when", "launch", "release", "drop", "date", "発売", "いつ", "ローンチ"))
    return "launch";
  if (has("price", "cost", "how much", "yen", "usd", "jpy", "value", "値段", "価格", "いくら", "コスト"))
    return "price";
  if (has("ship", "delivery", "deliver", "international", "country", "配送", "発送", "海外", "国"))
    return "ship";
  if (
    has(
      "real",
      "athlete",
      "terje",
      "signature",
      "license",
      "celebrity",
      "実在",
      "アスリート",
      "選手",
      "シグネチャー",
      "本物",
      "ライセンス"
    )
  )
    return "real";
  return "fallback";
}

export function ChatBot() {
  const t = useTranslations("chat");
  const isJa = useLocale() === "ja";
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Seed greeting once
  useEffect(() => {
    if (messages.length === 0) {
      setMessages([{ role: "bot", text: t("greeting") }]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, open]);

  const send = (raw: string) => {
    const text = raw.trim();
    if (!text) return;
    const userMsg: Message = { role: "user", text };
    const key = matchAnswer(text);
    const botMsg: Message = { role: "bot", text: t(`answers.${key}`) };
    setMessages((m) => [...m, userMsg, botMsg]);
    setInput("");
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    send(input);
  };

  return (
    <>
      {/* Toggle button (bottom-left, fixed) */}
      <button
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? t("closeLabel") : t("openLabel")}
        className="fixed bottom-5 left-5 z-[60] group"
      >
        <span className="absolute inset-0 rounded-full bg-volt blur-lg opacity-40 group-hover:opacity-70 transition-opacity" />
        <span className="relative flex items-center gap-2 bg-volt text-ink rounded-full pl-4 pr-5 py-3 font-mono text-[11px] tracking-[0.2em] uppercase hover:bg-paper transition-colors">
          <span
            className="size-2 rounded-full bg-ink"
            style={{ boxShadow: open ? "none" : "0 0 0 3px rgba(10,10,10,0.15)" }}
          />
          {open ? t("closeLabel") : t("openLabel")}
        </span>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.96 }}
            transition={{ duration: 0.3, ease: [0.2, 0.8, 0.2, 1] }}
            className="fixed bottom-20 left-5 z-[60] w-[min(380px,calc(100vw-2.5rem))] max-h-[70vh] flex flex-col rounded-3xl border border-paper/15 bg-ink text-paper shadow-2xl overflow-hidden"
            style={{
              boxShadow:
                "0 30px 80px -10px rgba(0,0,0,0.6), 0 0 0 1px rgba(200,255,0,0.08)",
            }}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-paper/10 bg-paper/[0.03]">
              <div className="flex items-center gap-3">
                <div className="size-2 rounded-full bg-volt animate-pulse" />
                <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-paper/70">
                  VIMO / CONCIERGE
                </span>
              </div>
              <button
                onClick={() => setOpen(false)}
                aria-label={t("closeLabel")}
                className="size-7 rounded-full text-paper/60 hover:text-paper hover:bg-paper/10 flex items-center justify-center transition-colors"
              >
                ✕
              </button>
            </div>

            {/* Messages */}
            <div
              ref={scrollRef}
              className="flex-1 overflow-y-auto px-5 py-5 space-y-3 text-[14px] leading-relaxed"
            >
              {messages.map((m, i) => (
                <div
                  key={i}
                  className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <span
                    className={`inline-block px-4 py-2.5 rounded-2xl max-w-[88%] ${
                      m.role === "user"
                        ? "bg-volt text-ink rounded-br-md"
                        : "bg-paper/[0.06] text-paper rounded-bl-md"
                    } ${isJa ? "font-jp" : ""}`}
                  >
                    {m.text}
                  </span>
                </div>
              ))}
            </div>

            {/* Quick prompts */}
            <div className="px-5 pb-3 flex flex-wrap gap-2 border-t border-paper/10 pt-3">
              {PROMPT_KEYS.map((k) => (
                <button
                  key={k}
                  onClick={() => send(t(`quickPrompts.${k}`))}
                  className={`text-[12px] px-3 py-1.5 rounded-full bg-paper/5 text-paper/75 border border-paper/15 hover:border-volt hover:text-volt transition-colors ${isJa ? "font-jp" : ""}`}
                >
                  {t(`quickPrompts.${k}`)}
                </button>
              ))}
            </div>

            {/* Input */}
            <form onSubmit={onSubmit} className="flex items-center gap-2 px-3 pb-3">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder={t("placeholder")}
                className={`flex-1 bg-paper/5 border border-paper/15 rounded-full px-4 py-3 text-[14px] outline-none focus:border-volt placeholder:text-paper/35 ${isJa ? "font-jp" : ""}`}
              />
              <button
                type="submit"
                className="size-11 rounded-full bg-volt text-ink hover:bg-paper transition-colors flex items-center justify-center"
                aria-label={t("send")}
              >
                →
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
