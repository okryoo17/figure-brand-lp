"use client";

import { useTranslations, useLocale } from "next-intl";
import { motion } from "framer-motion";
import { useState } from "react";
import Link from "next/link";

export default function LaunchPage() {
  const t = useTranslations("launch");
  const isJa = useLocale() === "ja";
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
  };

  return (
    <main className="relative min-h-[100svh] overflow-hidden">
      {/* Background tape stripes */}
      <div aria-hidden className="absolute top-0 inset-x-0 h-2 stripe-tape" />
      <div aria-hidden className="absolute bottom-0 inset-x-0 h-2 stripe-tape" />

      {/* Orbital decoration */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-60 -bottom-40 w-[700px] h-[700px] rounded-full border border-volt/15 animate-orbit"
      >
        <div className="absolute top-1/2 right-0 size-2 rounded-full bg-flare shadow-[0_0_30px_var(--color-flare)]" />
      </div>

      <div className="relative mx-auto max-w-[1400px] px-6 lg:px-10 pt-12 pb-16">
        {/* Top bar */}
        <div className="flex items-center justify-between font-mono text-[10px] tracking-[0.25em] uppercase text-paper/55">
          <Link href="/" className="font-display italic text-[20px] tracking-tight normal-case lowercase text-paper">
            vimo <span className="text-volt">●</span>
          </Link>
          <div className="flex items-center gap-4">
            <span className="text-volt">{t("tagStatus")}</span>
            <span className="hidden md:inline">{t("tagSeason")}</span>
          </div>
        </div>

        {/* Hero block */}
        <div className="grid lg:grid-cols-12 gap-10 mt-20 lg:mt-32 items-start">
          <div className="lg:col-span-7">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: [0.2, 0.8, 0.2, 1] }}
              className={`leading-[0.9] tracking-[-0.035em] text-balance ${
                isJa
                  ? "font-jp font-extrabold text-[13vw] md:text-[9vw] lg:text-[7.5vw]"
                  : "font-display text-[16vw] md:text-[11vw] lg:text-[9vw]"
              }`}
            >
              <motion.span
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="block"
              >
                {t("title1")}
              </motion.span>
              <motion.span
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.35 }}
                className="block italic relative"
              >
                <span className="relative z-10">{t("title2")}</span>
                <span
                  aria-hidden
                  className="absolute -bottom-2 left-0 h-2 bg-volt -z-0 hidden lg:block"
                  style={{ width: "60%" }}
                />
              </motion.span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className={`mt-10 max-w-xl text-[16px] leading-relaxed text-paper/75 text-pretty ${isJa ? "font-jp" : ""}`}
            >
              {t("lede")}
            </motion.p>

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.75 }}
              className="mt-10 max-w-2xl"
            >
              {!submitted ? (
                <form onSubmit={onSubmit}>
                  <div className="flex flex-col sm:flex-row items-stretch gap-3 bg-paper/[0.03] border border-paper/20 p-2 rounded-full">
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder={t("placeholder")}
                      className={`flex-1 bg-transparent px-5 py-4 outline-none text-paper placeholder:text-paper/35 ${isJa ? "font-jp" : ""}`}
                    />
                    <button
                      type="submit"
                      className="bg-volt text-ink rounded-full px-6 py-4 font-mono text-[11px] tracking-[0.2em] uppercase hover:bg-paper transition-colors whitespace-nowrap"
                    >
                      {t("cta")} →
                    </button>
                  </div>
                  <p className={`mt-4 font-mono text-[11px] tracking-[0.15em] uppercase text-paper/45 pl-3 ${isJa ? "normal-case font-jp tracking-normal" : ""}`}>
                    {t("fine")}
                  </p>
                </form>
              ) : (
                <div className="bg-volt text-ink rounded-3xl p-8">
                  <div className="font-mono text-[11px] tracking-[0.3em] mb-3">━━━ CONFIRMED</div>
                  <p className={`font-display italic text-3xl leading-tight ${isJa ? "font-jp not-italic font-extrabold text-2xl" : ""}`}>
                    {t("confirmed")}
                  </p>
                  <p className={`mt-3 text-[14px] leading-relaxed text-ink/75 ${isJa ? "font-jp" : ""}`}>
                    {t("confirmedBody")}
                  </p>
                </div>
              )}
            </motion.div>
          </div>

          {/* Perks */}
          <motion.aside
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.5 }}
            className="lg:col-span-5 lg:pl-8 lg:border-l border-paper/15"
          >
            <ul className="space-y-7">
              {(["p1", "p2", "p3"] as const).map((p, i) => (
                <li key={p} className="flex items-start gap-5">
                  <span className="font-mono text-[10px] tracking-[0.3em] text-volt pt-2 shrink-0">
                    0{i + 1}
                  </span>
                  <div>
                    <div className="font-mono text-[10px] tracking-[0.3em] uppercase text-paper/45 mb-2">
                      {t(`perks.${p}Label`)}
                    </div>
                    <div
                      className={`leading-tight tracking-tight ${
                        isJa ? "font-jp font-bold text-xl" : "font-display italic text-2xl"
                      }`}
                    >
                      {t(`perks.${p}Title`)}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </motion.aside>
        </div>

        {/* Bottom links */}
        <div className="mt-24 lg:mt-32 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 font-mono text-[10px] tracking-[0.25em] uppercase text-paper/45">
          <Link href="/" className="hover:text-paper transition-colors">
            {t("backLink")}
          </Link>
          <span>BUILD No. 0001 / FIG. A-01 / SAITAMA ⇄ U.S.</span>
        </div>
      </div>
    </main>
  );
}
