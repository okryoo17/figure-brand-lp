"use client";

import { useTranslations, useLocale } from "next-intl";
import { motion } from "framer-motion";

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

        {/* Snowboarder doll silhouette */}
        <div className={`relative ${ratio} flex items-end justify-center my-6`}>
          <svg
            viewBox="0 0 200 400"
            preserveAspectRatio="xMidYEnd meet"
            className="h-full w-auto"
            fill={accent === "volt" ? "var(--color-volt)" : "var(--color-flare)"}
            opacity="0.95"
          >
            {/* beanie pompom */}
            <circle cx="100" cy="42" r="6" />
            {/* beanie */}
            <path d="M76 80 Q76 50 100 50 Q124 50 124 80 L124 92 L76 92 Z" />
            {/* head */}
            <circle cx="100" cy="100" r="20" />
            {/* goggles cut-out band */}
            <rect x="76" y="93" width="48" height="9" rx="2" fill="#0A0A0A" />
            {/* puffer jacket */}
            <path d="M72 122 Q100 130 128 122 L138 188 Q100 198 62 188 Z" />
            {/* left arm — slightly out for riding balance, bent at elbow */}
            <path d="M70 138 Q44 154 38 188 Q34 210 50 214 Q60 200 60 184 Q72 168 80 158 Z" />
            {/* right arm */}
            <path d="M130 138 Q156 154 162 188 Q166 210 150 214 Q140 200 140 184 Q128 168 120 158 Z" />
            {/* cargo pants — wider hip, tapered to ankle */}
            <path d="M70 188 L130 188 L134 240 L122 240 L108 268 L92 268 L78 240 L66 240 Z" />
            {/* bent knees (riding stance) */}
            <path d="M76 252 Q70 286 76 314 L94 314 Q96 286 96 252 Z" />
            <path d="M104 252 Q104 286 106 314 L124 314 Q130 286 124 252 Z" />
            {/* boots */}
            <rect x="56" y="312" width="42" height="16" rx="4" />
            <rect x="102" y="312" width="42" height="16" rx="4" />
            {/* bindings (small mounts on board) */}
            <rect x="58" y="328" width="38" height="6" rx="2" />
            <rect x="104" y="328" width="38" height="6" rx="2" />
            {/* snowboard */}
            <ellipse cx="100" cy="346" rx="92" ry="9" />
          </svg>
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
