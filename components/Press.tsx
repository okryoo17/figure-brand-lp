"use client";

import { useTranslations, useLocale } from "next-intl";
import { motion } from "framer-motion";

export function Press() {
  const t = useTranslations("press");
  const isJa = useLocale() === "ja";

  return (
    <section id="press" className="relative py-24 lg:py-32 overflow-hidden border-t border-paper/15">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8 }}
          className="grid lg:grid-cols-12 gap-8 items-center"
        >
          <div className="lg:col-span-7">
            <div className="font-mono text-[11px] tracking-[0.3em] text-volt mb-5">
              ━━━ {t("label")}
            </div>
            <h2
              className={`leading-[1.1] tracking-[-0.025em] whitespace-pre-line ${
                isJa
                  ? "font-jp font-extrabold text-[7vw] md:text-[4.5vw] lg:text-[3.2vw]"
                  : "font-display text-[10vw] md:text-[6vw] lg:text-[3.8vw] italic"
              }`}
            >
              {t("title")}
            </h2>
            <p className={`mt-6 max-w-xl text-[15px] leading-relaxed text-paper/70 ${isJa ? "font-jp" : ""}`}>
              {t("body")}
            </p>
          </div>

          <div className="lg:col-span-5 lg:pl-10 flex flex-col gap-3">
            <a
              href="mailto:okryoo17@gmail.com?subject=VIMO%20Press%20%2F%20Partnerships"
              className="group flex items-center justify-between bg-volt text-ink rounded-full px-6 py-5 hover:bg-paper transition-colors"
            >
              <span className="font-mono text-[11px] tracking-[0.2em] uppercase">
                {t("ctaEmail")}
              </span>
              <span className="group-hover:translate-x-1 transition-transform text-lg">→</span>
            </a>
            <a
              href="mailto:okryoo17@gmail.com?subject=VIMO%20Press%20Kit%20Request"
              className="group flex items-center justify-between border border-paper/30 rounded-full px-6 py-5 hover:border-paper hover:bg-paper hover:text-ink transition-all"
            >
              <span className="font-mono text-[11px] tracking-[0.2em] uppercase">
                {t("ctaKit")}
              </span>
              <span className="group-hover:translate-x-1 transition-transform text-lg">↓</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
