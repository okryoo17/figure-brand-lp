"use client";

import { useTranslations, useLocale } from "next-intl";
import { useState } from "react";
import { motion } from "framer-motion";

export function Signup() {
  const t = useTranslations("signup");
  const isJa = useLocale() === "ja";
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
  };

  return (
    <section id="signup" className="relative py-28 lg:py-40 overflow-hidden bg-volt text-ink">
      {/* Diagonal stripes decoration */}
      <div
        aria-hidden
        className="absolute top-0 inset-x-0 h-3 stripe-tape opacity-90"
      />
      <div
        aria-hidden
        className="absolute bottom-0 inset-x-0 h-3 stripe-tape opacity-90"
      />

      <div className="relative mx-auto max-w-[1400px] px-6 lg:px-10 grid lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-6">
          <div className="font-mono text-[11px] tracking-[0.3em] text-ink/60 mb-6">
            ━━━ {t("label")} / {t("index")}
          </div>
          <p className="font-mono text-[11px] tracking-[0.25em] uppercase text-ink/70 mb-4">
            {t("kicker")}
          </p>
          <h2
            className={`leading-[1.04] tracking-[-0.03em] text-balance ${
              isJa
                ? "font-jp font-extrabold text-[8vw] md:text-[5.5vw] lg:text-[4.2vw]"
                : "font-display text-[11vw] md:text-[7vw] lg:text-[5.2vw] italic"
            }`}
          >
            {t("title")}
          </h2>
          <p className={`mt-6 max-w-lg text-[15px] leading-relaxed text-ink/80 text-pretty ${isJa ? "font-jp" : ""}`}>
            {t("subtitle")}
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="lg:col-span-6 lg:pl-10"
        >
          {!submitted ? (
            <form onSubmit={onSubmit} className="space-y-4">
              <div className="flex flex-col sm:flex-row items-stretch gap-3 bg-ink text-paper p-2 rounded-full">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={t("placeholder")}
                  className={`flex-1 bg-transparent px-5 py-4 outline-none placeholder:text-paper/40 ${isJa ? "font-jp" : ""}`}
                />
                <button
                  type="submit"
                  className="bg-paper text-ink rounded-full px-6 py-4 font-mono text-[11px] tracking-[0.2em] uppercase hover:bg-volt transition-colors whitespace-nowrap"
                >
                  {t("cta")} →
                </button>
              </div>
              <p className={`font-mono text-[11px] tracking-[0.15em] uppercase text-ink/60 pl-3 ${isJa ? "normal-case font-jp tracking-normal" : ""}`}>
                {t("fine")}
              </p>
            </form>
          ) : (
            <div className="bg-ink text-paper rounded-2xl p-8">
              <div className="font-mono text-[11px] tracking-[0.3em] text-volt mb-3">
                ━━━ CONFIRMED
              </div>
              <p className={`font-display italic text-3xl leading-tight ${isJa ? "font-jp not-italic font-extrabold text-2xl" : ""}`}>
                {isJa ? "登録完了。発売の数日前にメールします。" : "You're in. We'll write a few days before drop."}
              </p>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
