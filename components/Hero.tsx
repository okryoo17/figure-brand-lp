"use client";

import { useTranslations, useLocale } from "next-intl";
import { motion } from "framer-motion";

export function Hero() {
  const t = useTranslations("hero");
  const locale = useLocale();
  const isJa = locale === "ja";

  return (
    <section className="relative min-h-[100svh] pt-24 pb-16 overflow-hidden">
      {/* Vertical labels on the sides */}
      <div className="absolute left-6 top-1/2 -translate-y-1/2 vert-label font-mono text-[10px] text-paper/40 hidden lg:block">
        {t("label")}
      </div>
      <div className="absolute right-6 top-1/2 -translate-y-1/2 vert-label font-mono text-[10px] text-paper/40 hidden lg:block">
        FIG. A-01 / TOKYO ⇄ BERGEN
      </div>

      {/* Orbital decoration */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-40 top-20 w-[600px] h-[600px] rounded-full border border-volt/15 animate-orbit"
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 size-2 rounded-full bg-volt shadow-[0_0_30px_var(--color-volt)]" />
        <div className="absolute inset-12 rounded-full border border-paper/5" />
      </div>

      <div className="relative mx-auto max-w-[1400px] px-6 lg:px-10 grid lg:grid-cols-12 gap-8 items-end min-h-[80svh]">
        {/* Top-left: build tag */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="lg:col-span-12 flex items-start justify-between font-mono text-[10px] tracking-[0.25em] uppercase text-paper/50 pt-4"
        >
          <span>↳ {t("tagBuild")}</span>
          <span className="hidden md:inline">{t("tagMech")} —</span>
        </motion.div>

        {/* Title */}
        <div className="lg:col-span-12 mt-10 lg:mt-20">
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className={`leading-[0.84] tracking-[-0.04em] ${
              isJa
                ? "font-jp font-extrabold text-[14vw] md:text-[12vw] lg:text-[11vw]"
                : "font-display text-[18vw] md:text-[16vw] lg:text-[15vw]"
            }`}
          >
            <motion.span
              initial={{ y: 60, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: [0.2, 0.8, 0.2, 1], delay: 0.25 }}
              className="block"
            >
              {t("title1")}
            </motion.span>
            <motion.span
              initial={{ y: 60, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: [0.2, 0.8, 0.2, 1], delay: 0.4 }}
              className="block italic relative"
            >
              <span className="relative z-10">{t("title2")}</span>
              <span
                aria-hidden
                className="absolute -bottom-2 left-0 right-0 h-3 bg-volt -z-0 hidden lg:block"
                style={{ width: isJa ? "55%" : "62%" }}
              />
            </motion.span>
          </motion.h1>
        </div>

        {/* Lede + CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="lg:col-span-5 lg:col-start-1 mt-10 lg:mt-12"
        >
          <p className={`max-w-md text-[15px] leading-relaxed text-paper/75 text-pretty ${isJa ? "font-jp" : ""}`}>
            {t("lede")}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.85 }}
          className="lg:col-span-5 lg:col-start-8 lg:justify-self-end flex flex-col sm:flex-row gap-3"
        >
          <a
            href="#signup"
            className="group inline-flex items-center justify-between gap-6 bg-volt text-ink px-6 py-4 rounded-full hover:bg-paper transition-colors min-w-[260px]"
          >
            <span className="font-mono text-[11px] tracking-[0.2em] uppercase">
              {t("ctaPrimary")}
            </span>
            <span className="text-lg group-hover:translate-x-1 transition-transform">→</span>
          </a>
          <a
            href="#manifesto"
            className="group inline-flex items-center justify-between gap-6 border border-paper/30 px-6 py-4 rounded-full hover:border-paper hover:bg-paper hover:text-ink transition-all min-w-[220px]"
          >
            <span className="font-mono text-[11px] tracking-[0.2em] uppercase">
              {t("ctaSecondary")}
            </span>
            <span className="text-lg group-hover:translate-x-1 transition-transform">↓</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
