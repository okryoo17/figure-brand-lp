"use client";

import { useTranslations, useLocale } from "next-intl";
import { motion } from "framer-motion";

const ITEMS = ["pre1", "pre2", "pre3"] as const;

export function News() {
  const t = useTranslations("news");
  const isJa = useLocale() === "ja";

  return (
    <section id="news" className="relative py-28 lg:py-36 overflow-hidden">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-8 mb-12 lg:mb-16 items-end">
          <div className="lg:col-span-7">
            <div className="font-mono text-[11px] tracking-[0.3em] text-flare mb-6">
              ━━━ {t("label")}
            </div>
            <h2
              className={`leading-[1.05] tracking-[-0.025em] text-balance ${
                isJa
                  ? "font-jp font-extrabold text-[7vw] md:text-[4.5vw] lg:text-[3.2vw]"
                  : "font-display text-[10vw] md:text-[6vw] lg:text-[4vw] italic"
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

        <div className="border-t border-paper/15">
          {ITEMS.map((slug, i) => (
            <motion.a
              key={slug}
              href="#"
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: 0.07 * i }}
              className="group grid lg:grid-cols-12 gap-6 border-b border-paper/15 py-8 lg:py-10 hover:bg-paper/[0.03] transition-colors items-center"
            >
              <div className="lg:col-span-2 font-mono text-[11px] tracking-[0.25em] uppercase text-paper/45">
                {t(`items.${slug}.date`)}
              </div>
              <div className="lg:col-span-1 font-mono text-[10px] tracking-[0.3em] text-volt px-3 py-1 border border-volt/40 rounded-full self-start lg:self-center w-fit">
                {t(`items.${slug}.tag`)}
              </div>
              <div className="lg:col-span-8">
                <h3
                  className={`leading-tight tracking-tight group-hover:text-volt transition-colors ${
                    isJa
                      ? "font-jp font-bold text-xl lg:text-2xl"
                      : "font-display italic text-2xl lg:text-3xl"
                  }`}
                >
                  {t(`items.${slug}.title`)}
                </h3>
                <p className={`mt-2 text-[14px] text-paper/65 max-w-2xl ${isJa ? "font-jp" : ""}`}>
                  {t(`items.${slug}.excerpt`)}
                </p>
              </div>
              <div className="lg:col-span-1 lg:justify-self-end text-paper/50 group-hover:text-volt transition-colors text-xl">
                ↗
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
