"use client";

import { useTranslations, useLocale } from "next-intl";

export function Footer() {
  const t = useTranslations("footer");
  const isJa = useLocale() === "ja";

  return (
    <footer className="relative bg-ink text-paper border-t border-paper/15">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10 py-20 lg:py-28">
        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-7">
            <p
              className={`leading-[0.9] tracking-[-0.03em] ${
                isJa
                  ? "font-jp font-extrabold text-[12vw] md:text-[8vw] lg:text-[6vw]"
                  : "font-display italic text-[16vw] md:text-[10vw] lg:text-[7.5vw]"
              }`}
            >
              {t("tagline")}
            </p>
          </div>
          <div className="lg:col-span-5 grid grid-cols-2 gap-8 lg:pt-8">
            <div>
              <div className="font-mono text-[10px] tracking-[0.3em] uppercase text-paper/50 mb-3">
                ━━━ STUDIO
              </div>
              <div className={`text-[15px] leading-relaxed ${isJa ? "font-jp" : ""}`}>
                {t("company")}
              </div>
              <div className={`text-[15px] text-paper/60 ${isJa ? "font-jp" : ""}`}>
                {t("address")}
              </div>
            </div>
            <div>
              <div className="font-mono text-[10px] tracking-[0.3em] uppercase text-paper/50 mb-3">
                ━━━ FOLLOW
              </div>
              <ul className="space-y-1">
                <li>
                  <a className="hover:text-volt transition-colors" href="#">
                    {t("instagram")} ↗
                  </a>
                </li>
                <li>
                  <a className="hover:text-volt transition-colors" href="#">
                    {t("tiktok")} ↗
                  </a>
                </li>
                <li>
                  <a className="hover:text-volt transition-colors" href="#">
                    {t("press")} ↗
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-16 lg:mt-24 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pt-6 border-t border-paper/10 font-mono text-[10px] tracking-[0.25em] uppercase text-paper/45">
          <span>{t("legal")}</span>
          <span>BUILD No. 0001 / FIG. A-01 / TOKYO ⇄ BERGEN</span>
        </div>
      </div>
    </footer>
  );
}
