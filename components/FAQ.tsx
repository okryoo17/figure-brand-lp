"use client";

import { useTranslations, useLocale } from "next-intl";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const FAQS = ["whenLaunch", "whereBuy", "license", "moq", "minicharm", "shipping"] as const;

export function FAQ() {
  const t = useTranslations("faq");
  const isJa = useLocale() === "ja";
  const [open, setOpen] = useState<string | null>(null);

  return (
    <section id="faq" className="relative py-28 lg:py-36 overflow-hidden">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-8 mb-16 lg:mb-20 items-end">
          <div className="lg:col-span-7">
            <div className="font-mono text-[11px] tracking-[0.3em] text-volt mb-6">
              ━━━ {t("label")}
            </div>
            <h2
              className={`leading-[1.04] tracking-[-0.025em] text-balance ${
                isJa
                  ? "font-jp font-extrabold text-[7vw] md:text-[4.5vw] lg:text-[3.4vw]"
                  : "font-display text-[10vw] md:text-[6vw] lg:text-[4.2vw] italic"
              }`}
            >
              {t("title")}
            </h2>
          </div>
          <div className="lg:col-span-5 lg:pl-10 lg:justify-self-end">
            <p className={`max-w-md text-[15px] leading-relaxed text-paper/70 ${isJa ? "font-jp" : ""}`}>
              {t("subtitle")}
            </p>
          </div>
        </div>

        <div className="max-w-5xl">
          {FAQS.map((slug, idx) => {
            const isOpen = open === slug;
            return (
              <div
                key={slug}
                className={`border-t border-paper/12 ${
                  idx === FAQS.length - 1 ? "border-b" : ""
                } ${isOpen ? "bg-paper/[0.02]" : ""} transition-colors`}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : slug)}
                  className="w-full grid grid-cols-[auto_1fr_auto] items-start gap-6 lg:gap-10 py-7 lg:py-8 text-left group"
                >
                  <span className="font-mono text-[11px] tracking-[0.3em] text-paper/35 pt-3 shrink-0 w-6">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <span
                    className={`leading-[1.2] tracking-tight transition-colors ${
                      isOpen ? "text-paper" : "text-paper/85 group-hover:text-paper"
                    } ${isJa ? "font-jp font-semibold text-xl lg:text-[26px]" : "font-display italic text-2xl lg:text-[30px]"}`}
                  >
                    {t(`items.${slug}.q`)}
                  </span>
                  <span
                    className={`shrink-0 size-9 rounded-full border flex items-center justify-center text-[18px] leading-none transition-all duration-300 ${
                      isOpen
                        ? "bg-volt text-ink border-volt rotate-45"
                        : "border-paper/25 text-paper/55 group-hover:border-volt group-hover:text-volt"
                    }`}
                  >
                    +
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.2, 0.8, 0.2, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="pl-12 lg:pl-16 pr-16 pb-9">
                        <p
                          className={`max-w-3xl text-[15px] lg:text-[16px] leading-relaxed text-paper/70 ${isJa ? "font-jp" : ""}`}
                        >
                          {t(`items.${slug}.a`)}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
