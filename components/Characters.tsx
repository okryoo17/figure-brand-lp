"use client";

import { useTranslations, useLocale } from "next-intl";
import { motion } from "framer-motion";

const ARCHETYPES = ["powder", "park", "halfpipe", "purist"] as const;

type ArchetypeKey = (typeof ARCHETYPES)[number];

function Silhouette({ kind }: { kind: ArchetypeKey }) {
  const baseColor = "currentColor";
  const dark = "#0A0A0A";

  // Common building blocks for the snowboarder doll, drawn upright in a
  // 320×360 viewBox. Each archetype wraps the doll in a transform group so
  // we can pose it (carve, mid-air, method grab, touring) without re-drawing
  // every body part.
  const Doll = () => (
    <g fill={baseColor}>
      {/* beanie pompom */}
      <circle cx="160" cy="40" r="6" />
      {/* beanie */}
      <path d="M134 80 Q134 48 160 48 Q186 48 186 80 L186 92 L134 92 Z" />
      {/* head */}
      <circle cx="160" cy="102" r="22" />
      {/* goggle band — cut darker */}
      <rect x="136" y="96" width="48" height="9" rx="2" fill={dark} />
      {/* puffer jacket */}
      <path d="M130 124 Q160 132 190 124 L200 192 Q160 202 120 192 Z" />
      {/* left arm (relaxed at side, default) */}
      <path d="M128 140 Q108 168 110 200 Q108 218 122 220 Q128 198 132 178 Q138 156 142 144 Z" />
      {/* right arm */}
      <path d="M192 140 Q212 168 210 200 Q212 218 198 220 Q192 198 188 178 Q182 156 178 144 Z" />
      {/* cargo pants — wider hip, taper */}
      <path d="M130 192 L190 192 L196 246 L184 246 L170 274 L150 274 L136 246 L124 246 Z" />
      {/* legs — bent knees riding stance */}
      <path d="M136 258 Q130 292 138 320 L156 320 Q158 290 158 258 Z" />
      <path d="M162 258 Q162 290 164 320 L182 320 Q190 290 184 258 Z" />
      {/* boots */}
      <rect x="118" y="318" width="44" height="14" rx="3" />
      <rect x="158" y="318" width="44" height="14" rx="3" />
      {/* bindings */}
      <rect x="120" y="332" width="40" height="6" rx="2" />
      <rect x="160" y="332" width="40" height="6" rx="2" />
      {/* snowboard */}
      <ellipse cx="160" cy="345" rx="95" ry="9" />
    </g>
  );

  if (kind === "powder") {
    // POWDER HUNTER — deep heel-side carve, doll tilted ~25° into the slope
    return (
      <svg viewBox="0 0 320 360" className="w-full h-full">
        <g transform="rotate(-22 160 220) translate(0 12)">
          <Doll />
        </g>
        {/* snow spray under the trailing edge */}
        <g opacity="0.45" fill={baseColor}>
          <circle cx="46" cy="312" r="3" />
          <circle cx="62" cy="324" r="4.5" />
          <circle cx="84" cy="316" r="2.5" />
          <circle cx="104" cy="328" r="5" />
          <circle cx="36" cy="328" r="2.5" />
          <circle cx="124" cy="320" r="2" />
        </g>
      </svg>
    );
  }

  if (kind === "park") {
    // PARK RAT — mid-air, board angled, slight rotation. Show whole doll airborne.
    return (
      <svg viewBox="0 0 320 360" className="w-full h-full">
        <g transform="translate(0 -20) rotate(-15 160 200)">
          <Doll />
        </g>
        {/* takeoff lip dashes */}
        <g opacity="0.4" fill={baseColor}>
          <rect x="20" y="340" width="22" height="4" rx="2" />
          <rect x="52" y="340" width="22" height="4" rx="2" />
          <rect x="84" y="340" width="22" height="4" rx="2" />
        </g>
      </svg>
    );
  }

  if (kind === "halfpipe") {
    // HALFPIPE — method air, full rotation 65° so the board is overhead.
    return (
      <svg viewBox="0 0 320 360" className="w-full h-full">
        <g transform="translate(0 -10) rotate(60 160 200)">
          <Doll />
        </g>
        {/* halfpipe lip arc beneath */}
        <path
          d="M20 340 Q160 290 300 340"
          stroke={baseColor}
          strokeWidth="3"
          fill="none"
          opacity="0.45"
        />
      </svg>
    );
  }

  // PURIST — touring stance, board strapped on back (diagonal), doll standing tall.
  return (
    <svg viewBox="0 0 320 360" className="w-full h-full">
      {/* splitboard slung behind from shoulder to opposite hip */}
      <g fill={baseColor} opacity="0.9">
        <path
          d="M80 40 L240 30 L246 56 L86 66 Z"
          transform="rotate(28 160 50)"
        />
      </g>
      {/* doll standing with legs straight (override knee bends) */}
      <g fill={baseColor}>
        <circle cx="160" cy="40" r="6" />
        <path d="M134 80 Q134 48 160 48 Q186 48 186 80 L186 92 L134 92 Z" />
        <circle cx="160" cy="102" r="22" />
        <rect x="136" y="96" width="48" height="9" rx="2" fill={dark} />
        <path d="M130 124 Q160 132 190 124 L200 198 Q160 206 120 198 Z" />
        {/* left arm gripping pack strap on chest */}
        <path d="M132 138 Q120 160 128 188 L142 188 Q140 168 146 148 Z" />
        {/* right arm hanging down naturally */}
        <path d="M192 140 Q200 170 196 214 L184 214 Q180 178 178 144 Z" />
        {/* legs straight standing */}
        <path d="M134 198 L132 318 L156 318 L158 198 Z" />
        <path d="M162 198 L164 318 L188 318 L188 198 Z" />
        <rect x="124" y="316" width="38" height="14" rx="3" />
        <rect x="158" y="316" width="38" height="14" rx="3" />
      </g>
      {/* snow ground line */}
      <path d="M30 348 L290 348" stroke={baseColor} strokeWidth="2" fill="none" opacity="0.4" />
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
