"use client";

import { useTranslations, useLocale } from "next-intl";
import { motion } from "framer-motion";

const ARCHETYPES = ["powder", "park", "halfpipe", "purist"] as const;

type ArchetypeKey = (typeof ARCHETYPES)[number];

function Silhouette({ kind }: { kind: ArchetypeKey }) {
  const baseColor = "currentColor";
  const accent = "#0A0A0A";

  if (kind === "powder") {
    // Deep carve, backside, low body
    return (
      <svg viewBox="0 0 320 360" className="w-full h-full">
        <g fill={baseColor}>
          {/* Snowboard, tilted on edge */}
          <path d="M30 280 Q160 220 290 270 L296 290 Q160 245 26 298 Z" />
          {/* Body — low compressed carve */}
          {/* Head */}
          <circle cx="160" cy="100" r="28" />
          {/* Goggles strip */}
          <rect x="142" y="92" width="36" height="9" fill={accent} />
          {/* Torso bent forward */}
          <path d="M125 132 L195 132 L210 230 L150 245 L120 230 Z" />
          {/* Front arm reaching down toward board (grab) */}
          <path d="M198 152 Q235 200 220 250 L208 245 Q220 205 184 165 Z" />
          {/* Back arm trailing */}
          <path d="M122 152 Q90 178 100 215 L114 215 Q108 188 132 168 Z" />
          {/* Front leg bent */}
          <path d="M150 240 L162 285 L196 280 L184 232 Z" />
          {/* Back leg deep bend */}
          <path d="M118 230 L106 285 L138 286 L142 235 Z" />
          {/* Spray under board */}
        </g>
        <g opacity="0.4" fill={baseColor}>
          <circle cx="50" cy="295" r="2.5" />
          <circle cx="64" cy="305" r="3.5" />
          <circle cx="80" cy="298" r="2" />
          <circle cx="100" cy="310" r="4" />
          <circle cx="42" cy="310" r="2" />
        </g>
      </svg>
    );
  }

  if (kind === "park") {
    // Mid-air, nose grab, knees tucked
    return (
      <svg viewBox="0 0 320 360" className="w-full h-full">
        <g fill={baseColor}>
          {/* Floating board — angled */}
          <path d="M62 232 Q160 175 270 218 L272 240 Q160 200 60 252 Z" transform="rotate(-12 160 220)" />
          {/* Head */}
          <circle cx="155" cy="80" r="26" />
          {/* Goggles */}
          <rect x="139" y="73" width="34" height="8" fill={accent} />
          {/* Torso tucked */}
          <path d="M122 108 L195 108 L205 200 L145 215 L115 200 Z" />
          {/* Grab arm reaching down to board nose */}
          <path d="M195 128 Q240 185 215 232 L200 228 Q220 192 180 138 Z" />
          {/* Back arm out for balance */}
          <path d="M120 128 Q78 100 78 132 L88 138 Q92 124 130 144 Z" />
          {/* Legs tucked tight */}
          <path d="M150 212 L185 235 L210 222 L188 198 Z" />
          <path d="M125 208 L94 234 L82 222 L118 200 Z" />
        </g>
      </svg>
    );
  }

  if (kind === "halfpipe") {
    // Method air — sideways, board grab behind back
    return (
      <svg viewBox="0 0 320 360" className="w-full h-full">
        <g fill={baseColor}>
          {/* Board behind body, angled up */}
          <path d="M225 80 L298 65 L300 90 L228 105 Z" transform="rotate(35 264 85)" />
          {/* Head */}
          <circle cx="140" cy="120" r="26" />
          <rect x="124" y="113" width="34" height="8" fill={accent} />
          {/* Torso arched back */}
          <path d="M108 148 L172 148 L185 232 L130 248 L100 232 Z" />
          {/* Back arm gripping board */}
          <path d="M170 168 Q220 130 240 95 L228 88 Q210 124 156 178 Z" />
          {/* Front arm out for balance */}
          <path d="M105 168 Q60 200 50 232 L62 240 Q72 210 116 180 Z" />
          {/* Legs bent, board pulled up */}
          <path d="M135 240 L160 296 L200 286 L178 230 Z" />
          <path d="M105 232 L78 290 L116 296 L130 234 Z" />
        </g>
      </svg>
    );
  }

  // purist — standing, splitboard on shoulder, touring
  return (
    <svg viewBox="0 0 320 360" className="w-full h-full">
      <g fill={baseColor}>
        {/* Splitboard carried on shoulder, diagonal */}
        <path d="M68 70 L260 22 L266 50 L74 98 Z" />
        {/* Head */}
        <circle cx="160" cy="138" r="26" />
        {/* Beanie line */}
        <rect x="138" y="118" width="44" height="8" />
        {/* Torso straight standing */}
        <path d="M128 165 L196 165 L198 260 L122 260 Z" />
        {/* Holding-strap arm */}
        <path d="M192 178 Q210 130 200 88 L186 90 Q196 130 178 178 Z" />
        {/* Free arm down */}
        <path d="M126 180 L120 252 L138 252 L142 180 Z" />
        {/* Legs standing */}
        <path d="M134 258 L130 340 L155 340 L160 258 Z" />
        <path d="M164 258 L168 340 L194 340 L194 258 Z" />
        {/* Snow ground line */}
        <path d="M40 348 L290 348" stroke={baseColor} strokeWidth="2" fill="none" opacity="0.4" />
      </g>
    </svg>
  );
}

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
              <span className="absolute top-4 right-4 font-mono text-[9px] tracking-[0.25em] text-volt px-2 py-1 border border-volt/40 rounded-full">
                FIG. 0{i + 1} / WIP
              </span>

              <div className="relative h-64 mt-6 flex items-end justify-center" style={{ color: "var(--color-volt)" }}>
                <Silhouette kind={slug} />
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
