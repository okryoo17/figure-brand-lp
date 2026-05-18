"use client";

import { useTranslations, useLocale } from "next-intl";
import { motion } from "framer-motion";

type Phase = "now" | "next" | "soon" | "later";

const ROADMAP: { phase: Phase; sports: ("snowboard" | "skate" | "surf" | "golf" | "baseball" | "soccer" | "tennis" | "ski")[] }[] = [
  { phase: "now", sports: ["snowboard"] },
  { phase: "next", sports: ["skate", "surf"] },
  { phase: "soon", sports: ["golf", "ski"] },
  { phase: "later", sports: ["baseball", "soccer", "tennis"] },
];

const PHASE_ACCENT: Record<Phase, string> = {
  now: "text-volt border-volt/40",
  next: "text-paper border-paper/40",
  soon: "text-flare border-flare/40",
  later: "text-paper/60 border-paper/20",
};

export function Sports() {
  const t = useTranslations("sports");
  const isJa = useLocale() === "ja";

  return (
    <section id="sports" className="relative py-28 lg:py-36 overflow-hidden">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-8 mb-16 lg:mb-20">
          <div className="lg:col-span-4">
            <div className="index-numeral text-[28vw] lg:text-[16vw] text-paper/10 select-none -mt-6">
              {t("index")}
            </div>
            <div className="font-mono text-[11px] tracking-[0.3em] text-flare -mt-4">
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
            <p className={`mt-6 max-w-2xl text-[15px] leading-relaxed text-paper/70 ${isJa ? "font-jp" : ""}`}>
              {t("subtitle")}
            </p>
          </div>
        </div>

        {/* Roadmap rows */}
        <div className="border-t border-paper/15">
          {ROADMAP.map((row, i) => (
            <motion.div
              key={row.phase}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: 0.08 * i }}
              className="grid lg:grid-cols-12 gap-8 border-b border-paper/15 py-10 lg:py-12 items-center group hover:bg-paper/[0.03] transition-colors"
            >
              <div className="lg:col-span-3">
                <span
                  className={`inline-flex items-center font-mono text-[11px] tracking-[0.3em] uppercase px-3 py-2 border rounded-full ${PHASE_ACCENT[row.phase]}`}
                >
                  {t(`phases.${row.phase}`)}
                </span>
              </div>
              <div className="lg:col-span-9 flex flex-wrap items-baseline gap-x-6 gap-y-3">
                {row.sports.map((sport) => (
                  <span
                    key={sport}
                    className={`leading-none tracking-[-0.03em] ${
                      isJa
                        ? "font-jp font-extrabold text-[7vw] md:text-[4vw] lg:text-[3vw]"
                        : "font-display italic text-[9vw] md:text-[5vw] lg:text-[3.6vw]"
                    } ${row.phase === "now" ? "text-paper" : row.phase === "later" ? "text-paper/40" : "text-paper/85"}`}
                  >
                    {t(`sports.${sport}`)}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
