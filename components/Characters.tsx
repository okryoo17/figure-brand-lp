"use client";

import { useTranslations, useLocale } from "next-intl";
import { motion } from "framer-motion";
import Image from "next/image";

const ARCHETYPES = ["powder", "park", "halfpipe", "carver"] as const;

type ArchetypeKey = (typeof ARCHETYPES)[number];

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
            <p className="font-mono text-[11px] tracking-[0.25em] uppercase text-ink/50 mb-4">
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
              <span className="absolute top-4 right-4 z-10 font-mono text-[9px] tracking-[0.25em] text-volt px-2 py-1 border border-volt/40 rounded-full bg-ink/60 backdrop-blur-sm">
                FIG. 0{i + 1} / WIP
              </span>

              <div className="relative aspect-square mt-2 overflow-hidden rounded-xl bg-ink">
                {/* Index numeral behind */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
                  <span className="index-numeral text-paper/[0.06] text-[200px] leading-none">
                    0{i + 1}
                  </span>
                </div>
                <Image
                  src={`/characters/pose_${slug}.png`}
                  alt={`VIMO figure pose: ${slug}`}
                  fill
                  sizes="(min-width: 1024px) 320px, (min-width: 640px) 50vw, 100vw"
                  className="object-contain relative z-10"
                  priority={i < 2}
                />
              </div>

              <div className="mt-7">
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
