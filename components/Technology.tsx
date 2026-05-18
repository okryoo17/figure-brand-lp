"use client";

import { useTranslations, useLocale } from "next-intl";
import { motion } from "framer-motion";

const SPEC_KEYS = ["joints", "poses", "scale", "height", "mini"] as const;

export function Technology() {
  const t = useTranslations("tech");
  const isJa = useLocale() === "ja";

  return (
    <section id="tech" className="relative py-28 lg:py-36 overflow-hidden">
      {/* Background grid */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(var(--color-paper) 1px, transparent 1px), linear-gradient(90deg, var(--color-paper) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      <div className="relative mx-auto max-w-[1400px] px-6 lg:px-10 grid lg:grid-cols-12 gap-8 lg:gap-12">
        <div className="lg:col-span-5">
          <div className="font-mono text-[11px] tracking-[0.3em] text-volt mb-6">
            ━━━ {t("label")}
          </div>
          <p className="font-mono text-[11px] tracking-[0.25em] uppercase text-paper/50 mb-4">
            {t("kicker")}
          </p>
          <h2
            className={`leading-[1.02] tracking-[-0.025em] text-balance ${
              isJa
                ? "font-jp font-extrabold text-[7vw] md:text-[4.5vw] lg:text-[3.2vw]"
                : "font-display text-[10vw] md:text-[6vw] lg:text-[4vw] italic"
            }`}
          >
            {t("title")}
          </h2>
          <p className={`mt-8 max-w-md text-[15px] leading-relaxed text-paper/70 ${isJa ? "font-jp" : ""}`}>
            {t("body")}
          </p>
        </div>

        {/* Schematic */}
        <div className="lg:col-span-7 relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: [0.2, 0.8, 0.2, 1] }}
            className="relative aspect-[4/5] max-w-md mx-auto"
          >
            {/* Stylized figure schematic */}
            <svg viewBox="0 0 400 500" className="w-full h-full">
              {/* Outer mark */}
              <text
                x="20"
                y="40"
                fontFamily="var(--font-mono)"
                fontSize="11"
                letterSpacing="3"
                fill="var(--color-volt)"
                opacity="0.8"
              >
                FLEX—JOINT MECH.
              </text>
              <text
                x="380"
                y="40"
                textAnchor="end"
                fontFamily="var(--font-mono)"
                fontSize="11"
                letterSpacing="3"
                fill="var(--color-paper)"
                opacity="0.4"
              >
                R-01
              </text>

              {/* Figure schematic */}
              <g stroke="var(--color-paper)" strokeWidth="1.4" fill="none" opacity="0.85">
                {/* Head */}
                <circle cx="200" cy="110" r="34" />
                {/* Neck */}
                <line x1="200" y1="144" x2="200" y2="170" />
                {/* Shoulders */}
                <line x1="142" y1="180" x2="258" y2="180" />
                {/* Torso */}
                <line x1="200" y1="170" x2="200" y2="290" />
                {/* Arms (bent for ride stance) */}
                <line x1="142" y1="180" x2="118" y2="240" />
                <line x1="118" y1="240" x2="146" y2="280" />
                <line x1="258" y1="180" x2="284" y2="240" />
                <line x1="284" y1="240" x2="252" y2="280" />
                {/* Hips */}
                <line x1="166" y1="290" x2="234" y2="290" />
                {/* Legs (knees bent) */}
                <line x1="166" y1="290" x2="156" y2="370" />
                <line x1="156" y1="370" x2="170" y2="450" />
                <line x1="234" y1="290" x2="244" y2="370" />
                <line x1="244" y1="370" x2="230" y2="450" />
                {/* Snowboard */}
                <rect x="120" y="455" width="170" height="14" rx="7" fill="var(--color-volt)" stroke="none" />
              </g>

              {/* Joint markers */}
              {[
                [200, 170],
                [142, 180],
                [258, 180],
                [118, 240],
                [284, 240],
                [146, 280],
                [252, 280],
                [166, 290],
                [234, 290],
                [156, 370],
                [244, 370],
                [170, 450],
                [230, 450],
                [200, 290],
              ].map(([x, y], i) => (
                <g key={i}>
                  <circle cx={x} cy={y} r="5" fill="var(--color-volt)" />
                  <circle cx={x} cy={y} r="11" fill="none" stroke="var(--color-volt)" strokeWidth="0.8" opacity="0.5" />
                </g>
              ))}

              {/* Annotations */}
              <line x1="220" y1="330" x2="320" y2="330" stroke="var(--color-flare)" strokeDasharray="2 4" />
              <text
                x="324"
                y="334"
                fontFamily="var(--font-mono)"
                fontSize="10"
                letterSpacing="2"
                fill="var(--color-flare)"
              >
                ELASTIC TENDON
              </text>

              <line x1="160" y1="180" x2="60" y2="180" stroke="var(--color-paper)" strokeOpacity="0.4" strokeDasharray="2 4" />
              <text
                x="58"
                y="184"
                textAnchor="end"
                fontFamily="var(--font-mono)"
                fontSize="10"
                letterSpacing="2"
                fill="var(--color-paper)"
                opacity="0.6"
              >
                SHOULDER
              </text>

              <line x1="270" y1="180" x2="350" y2="180" stroke="var(--color-paper)" strokeOpacity="0.4" strokeDasharray="2 4" />
              <text
                x="354"
                y="184"
                fontFamily="var(--font-mono)"
                fontSize="10"
                letterSpacing="2"
                fill="var(--color-paper)"
                opacity="0.6"
              >
                14 PTS
              </text>
            </svg>
          </motion.div>
        </div>
      </div>

      {/* Spec strip */}
      <div className="relative mx-auto max-w-[1400px] px-6 lg:px-10 mt-16 lg:mt-24">
        <div className="grid grid-cols-2 lg:grid-cols-5 border border-paper/15 rounded-2xl overflow-hidden">
          {SPEC_KEYS.map((key) => (
            <div
              key={key}
              className="p-6 lg:p-8 border-r last:border-r-0 border-b lg:border-b-0 border-paper/10 odd:bg-paper/[0.02]"
            >
              <div className="font-mono text-[10px] tracking-[0.3em] uppercase text-paper/50">
                {t(`specs.${key}`)}
              </div>
              <div className="mt-3 font-display italic text-3xl lg:text-4xl text-paper">
                {t(`values.${key}Val`)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
