"use client";

import { useTranslations, useLocale } from "next-intl";
import { motion } from "framer-motion";

export function Founders() {
  const t = useTranslations("founders");
  const isJa = useLocale() === "ja";

  const Card = ({ slug }: { slug: "japan" | "us" }) => (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
      className="relative border border-paper/15 rounded-3xl p-8 lg:p-10 bg-paper/[0.02]"
    >
      <div className="flex items-start justify-between mb-8">
        <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-paper/50">
          ━━━ {t(`${slug}.label`)}
        </span>
        <span className="font-display italic text-2xl text-paper/30">
          {slug === "japan" ? "JP" : "US"}
        </span>
      </div>

      <h3
        className={`leading-tight tracking-tight ${
          isJa
            ? "font-jp font-extrabold text-3xl lg:text-4xl"
            : "font-display italic text-4xl lg:text-5xl"
        }`}
      >
        {t(`${slug}.name`)}
      </h3>
      <div className="mt-2 font-mono text-[11px] tracking-[0.2em] uppercase text-volt">
        {t(`${slug}.role`)}
      </div>

      <p className={`mt-6 text-[15px] leading-relaxed text-paper/75 text-pretty ${isJa ? "font-jp" : ""}`}>
        {t(`${slug}.bio`)}
      </p>

      <div className="mt-8 pt-6 border-t border-paper/10 grid grid-cols-2 gap-4">
        <div>
          <div className="font-mono text-[10px] tracking-[0.25em] uppercase text-paper/40">
            {t(`${slug}.bringsLabel`)}
          </div>
          <div className={`mt-2 text-[14px] text-paper/85 ${isJa ? "font-jp" : ""}`}>
            {t(`${slug}.brings`)}
          </div>
        </div>
        <div>
          <div className="font-mono text-[10px] tracking-[0.25em] uppercase text-paper/40">
            {t(`${slug}.basedLabel`)}
          </div>
          <div className={`mt-2 text-[14px] text-paper/85 ${isJa ? "font-jp" : ""}`}>
            {t(`${slug}.based`)}
          </div>
        </div>
      </div>
    </motion.div>
  );

  return (
    <section id="founders" className="relative py-28 lg:py-36 overflow-hidden">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-8 mb-16 lg:mb-20">
          <div className="lg:col-span-4">
            <div className="index-numeral text-[28vw] lg:text-[16vw] text-paper/10 select-none -mt-6">
              {t("index")}
            </div>
            <div className="font-mono text-[11px] tracking-[0.3em] text-volt -mt-4">
              ━━━ {t("label")}
            </div>
          </div>
          <div className="lg:col-span-8 lg:pt-10">
            <p className="font-mono text-[11px] tracking-[0.25em] uppercase text-paper/50 mb-4">
              {t("kicker")}
            </p>
            <h2
              className={`leading-[1.05] tracking-[-0.025em] text-balance ${
                isJa
                  ? "font-jp font-extrabold text-[7vw] md:text-[4.5vw] lg:text-[3.4vw]"
                  : "font-display text-[10vw] md:text-[6vw] lg:text-[4.4vw] italic"
              }`}
            >
              {t("title")}
            </h2>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-5 lg:gap-7">
          <Card slug="japan" />
          <Card slug="us" />
        </div>
      </div>
    </section>
  );
}
