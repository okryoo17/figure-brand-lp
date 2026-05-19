"use client";

import { useTranslations, useLocale } from "next-intl";
import { motion } from "framer-motion";
import Image from "next/image";

export function Sizes() {
  const t = useTranslations("sizes");
  const isJa = useLocale() === "ja";

  const Card = ({ slug, accent }: { slug: "main" | "mini"; accent: "volt" | "flare" }) => {
    const ratio = slug === "main" ? "h-72 lg:h-96" : "h-32 lg:h-44";
    const accentClass = accent === "volt" ? "bg-volt text-ink" : "bg-flare text-paper";
    return (
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.8, ease: [0.2, 0.8, 0.2, 1], delay: slug === "main" ? 0 : 0.15 }}
        className="relative bg-paper/[0.03] border border-paper/15 rounded-3xl p-8 lg:p-10 overflow-hidden lift"
      >
        <div className="flex items-start justify-between mb-10">
          <span className={`font-mono text-[10px] tracking-[0.3em] uppercase px-3 py-1 rounded-full ${accentClass}`}>
            {t(`${slug}.name`)}
          </span>
          <span className="font-display italic text-2xl text-paper/40">
            {slug === "main" ? "01" : "02"}
          </span>
        </div>

        {/* Same VIMO figure illustration as Characters section */}
        <div className={`relative ${ratio} my-6`}>
          <Image
            src={slug === "main" ? "/characters/pose_standing.png" : "/characters/pose_charm.png"}
            alt={t(`${slug}.name`)}
            fill
            sizes="(min-width: 1024px) 600px, 100vw"
            className="object-contain"
          />
        </div>

        <div className="mt-6 flex items-baseline justify-between">
          <div className={`font-display italic text-4xl lg:text-5xl ${isJa ? "font-jp not-italic font-extrabold text-3xl lg:text-4xl" : ""}`}>
            {t(`${slug}.height`)}
          </div>
          <div className="font-mono text-[11px] tracking-[0.2em] text-paper/60 uppercase text-right">
            {t(`${slug}.price`)}
          </div>
        </div>

        <p className={`mt-5 text-[14px] leading-relaxed text-paper/70 ${isJa ? "font-jp" : ""}`}>
          {t(`${slug}.for`)}
        </p>
      </motion.div>
    );
  };

  return (
    <section id="sizes" className="relative py-28 lg:py-36 overflow-hidden">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-8 mb-16">
          <div className="lg:col-span-5">
            <div className="font-mono text-[11px] tracking-[0.3em] text-flare mb-6">
              ━━━ {t("label")}
            </div>
            <p className="font-mono text-[11px] tracking-[0.25em] uppercase text-paper/50 mb-4">
              {t("kicker")}
            </p>
            <h2
              className={`leading-[1.04] tracking-[-0.025em] whitespace-pre-line ${
                isJa
                  ? "font-jp font-extrabold text-[7vw] md:text-[4.5vw] lg:text-[3.2vw]"
                  : "font-display text-[10vw] md:text-[6vw] lg:text-[4vw] italic"
              }`}
            >
              {t("title")}
            </h2>
          </div>
          <div className="lg:col-span-7 lg:pt-2">
            <div className="index-numeral text-paper/10 text-[28vw] lg:text-[14vw] leading-[0.8] select-none">
              {t("index")}
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-5 lg:gap-7">
          <Card slug="main" accent="volt" />
          <Card slug="mini" accent="flare" />
        </div>
      </div>
    </section>
  );
}
