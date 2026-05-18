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
    <section id="faq" className="relative py-28 lg:py-36 overflow-hidden bg-paper text-ink">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-8 mb-12 lg:mb-16">
          <div className="lg:col-span-4">
            <div className="font-mono text-[11px] tracking-[0.3em] text-flare mb-6">
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
          <div className="lg:col-span-8 lg:pt-2">
            <p className={`max-w-2xl text-[15px] leading-relaxed text-ink/70 ${isJa ? "font-jp" : ""}`}>
              {t("subtitle")}
            </p>
          </div>
        </div>

        <div className="lg:col-span-8 max-w-4xl mx-auto border-t border-ink/15">
          {FAQS.map((slug) => {
            const isOpen = open === slug;
            return (
              <div key={slug} className="border-b border-ink/15">
                <button
                  onClick={() => setOpen(isOpen ? null : slug)}
                  className="w-full flex items-start gap-6 py-7 lg:py-9 text-left group"
                >
                  <span className="font-mono text-[10px] tracking-[0.3em] text-flare pt-2 shrink-0">
                    {String(FAQS.indexOf(slug) + 1).padStart(2, "0")}
                  </span>
                  <span
                    className={`flex-1 leading-tight tracking-tight group-hover:text-flare transition-colors ${
                      isJa
                        ? "font-jp font-bold text-xl lg:text-2xl"
                        : "font-display italic text-2xl lg:text-[28px]"
                    }`}
                  >
                    {t(`items.${slug}.q`)}
                  </span>
                  <span
                    className={`shrink-0 text-3xl leading-none transition-transform duration-300 ${
                      isOpen ? "rotate-45" : ""
                    }`}
                    style={{ color: "#FF5C00" }}
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
                      <p
                        className={`pl-[60px] pr-12 pb-7 max-w-3xl text-[15px] leading-relaxed text-ink/75 ${isJa ? "font-jp" : ""}`}
                      >
                        {t(`items.${slug}.a`)}
                      </p>
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
