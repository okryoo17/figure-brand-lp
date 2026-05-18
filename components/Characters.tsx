"use client";

import { useTranslations, useLocale } from "next-intl";
import { motion } from "framer-motion";

const ARCHETYPES = ["powder", "park", "halfpipe", "purist"] as const;

const SILHOUETTES: Record<(typeof ARCHETYPES)[number], string> = {
  powder:
    "M120 40c-14 0-22 10-22 22 0 14 9 22 22 22s22-8 22-22-8-22-22-22zm0 60c-28 0-46 18-50 38l-16 86 30 6 20-78c4-2 10-2 16 0 16 6 28 18 28 36v100h32v-110c0-30-24-58-60-58zm-46 130L46 320l28 8 22-78-22-2zm106 0l24 80 30-8-26-92-28 20z",
  park:
    "M120 36c-14 0-22 10-22 22 0 14 9 22 22 22s22-8 22-22-8-22-22-22zm-2 60c-26 4-44 22-44 50v40l-16 8-10 26 26 12 24-12v90h40v-150l30 60 30-12-30-66c-10-20-30-46-50-46z",
  halfpipe:
    "M120 38c-14 0-22 10-22 22 0 14 9 22 22 22s22-8 22-22-8-22-22-22zm-30 56c-20 0-36 16-36 36v80h32v-50l16 14v80h36v-100l24-30c10-12 4-30-12-30h-60z",
  purist:
    "M120 40c-14 0-22 10-22 22 0 14 9 22 22 22s22-8 22-22-8-22-22-22zm-6 60c-22 0-40 18-40 40v40h22v100h48v-100h22v-40c0-22-18-40-40-40h-12z",
};

export function Characters() {
  const t = useTranslations("characters");
  const isJa = useLocale() === "ja";

  return (
    <section id="characters" className="relative py-28 lg:py-36 bg-paper text-ink">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        {/* Header */}
        <div className="grid lg:grid-cols-12 gap-8 mb-16 lg:mb-24">
          <div className="lg:col-span-4 flex items-start gap-6">
            <div className="font-mono text-[11px] tracking-[0.3em] text-flare">━━━ {t("label")}</div>
          </div>
          <div className="lg:col-span-8">
            <p className={`font-mono text-[11px] tracking-[0.25em] uppercase text-ink/50 mb-4 ${isJa ? "" : ""}`}>
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
            <p className={`mt-6 max-w-2xl text-[15px] leading-relaxed text-ink/70 text-pretty ${isJa ? "font-jp" : ""}`}>
              {t("subtitle")}
            </p>
          </div>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {ARCHETYPES.map((slug, i) => (
            <motion.div
              key={slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: 0.08 * i, ease: [0.2, 0.8, 0.2, 1] }}
              className="lift relative bg-ink text-paper rounded-2xl p-6 pb-7 overflow-hidden group"
            >
              {/* Coming soon stamp */}
              <span className="absolute top-4 right-4 font-mono text-[9px] tracking-[0.25em] text-volt px-2 py-1 border border-volt/40 rounded-full">
                FIG. 0{i + 1} / WIP
              </span>

              {/* Silhouette */}
              <div className="relative h-56 mt-6 flex items-end justify-center">
                <svg
                  viewBox="0 0 240 360"
                  className="h-full w-auto opacity-90 group-hover:opacity-100 transition-opacity"
                  fill="currentColor"
                  style={{ color: "var(--color-volt)" }}
                >
                  <path d={SILHOUETTES[slug]} />
                </svg>
                {/* Index numeral behind */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <span className="index-numeral text-paper/5 text-[200px] leading-none">
                    0{i + 1}
                  </span>
                </div>
              </div>

              <div className="mt-8">
                <div className="font-mono text-[10px] tracking-[0.25em] uppercase text-paper/40 mb-2">
                  {t(`cards.${slug}.discipline`)}
                </div>
                <h3
                  className={`leading-tight tracking-tight ${
                    isJa ? "font-jp font-bold text-xl" : "font-display italic text-2xl"
                  }`}
                >
                  {t(`cards.${slug}.name`)}
                </h3>
                <p className={`mt-3 text-[13px] text-paper/65 leading-snug ${isJa ? "font-jp" : ""}`}>
                  {t(`cards.${slug}.tagline`)}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
