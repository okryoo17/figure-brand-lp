"use client";

import { useTranslations, useLocale } from "next-intl";
import { motion } from "framer-motion";

export function Manifesto() {
  const t = useTranslations("manifesto");
  const isJa = useLocale() === "ja";

  return (
    <section id="manifesto" className="relative py-28 lg:py-40 overflow-hidden">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10 grid lg:grid-cols-12 gap-8 lg:gap-16">
        {/* Giant index numeral */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, ease: [0.2, 0.8, 0.2, 1] }}
          className="lg:col-span-4 relative"
        >
          <div className="index-numeral text-[28vw] lg:text-[16vw] text-paper/10 select-none -mt-6">
            {t("index")}
          </div>
          <div className="absolute top-6 left-0 font-mono text-[10px] tracking-[0.3em] text-volt">
            ━━━ {t("label")}
          </div>
        </motion.div>

        {/* Body */}
        <div className="lg:col-span-8 lg:pt-10">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className={`font-mono text-[11px] tracking-[0.25em] uppercase text-paper/50 mb-6 ${
              isJa ? "" : ""
            }`}
          >
            {t("kicker")}
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.9, delay: 0.15 }}
            className={`leading-[1.05] tracking-[-0.025em] text-balance ${
              isJa
                ? "font-jp font-extrabold text-[7vw] md:text-[4.5vw] lg:text-[3.4vw]"
                : "font-display text-[10vw] md:text-[6vw] lg:text-[4.4vw] italic"
            }`}
          >
            {t("title")}
          </motion.h2>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.9, delay: 0.3 }}
            className="mt-12 grid md:grid-cols-2 gap-8 lg:gap-12"
          >
            <p className={`text-[15px] leading-relaxed text-paper/80 text-pretty ${isJa ? "font-jp" : ""}`}>
              {t("body1")}
            </p>
            <p className={`text-[15px] leading-relaxed text-paper/80 text-pretty ${isJa ? "font-jp" : ""}`}>
              {t("body2")}
            </p>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.9, delay: 0.5 }}
            className={`mt-12 max-w-2xl text-[17px] lg:text-[19px] leading-snug text-paper text-balance border-l-2 border-volt pl-6 ${
              isJa ? "font-jp" : "font-display italic"
            }`}
          >
            "{t("body3")}"
          </motion.p>
        </div>
      </div>
    </section>
  );
}
