"use client";

import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import { LangSwitcher } from "./LangSwitcher";
import { BrandMark } from "./BrandMark";

export function Nav() {
  const t = useTranslations("nav");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[var(--color-ink)]/85 backdrop-blur-md border-b border-paper/10"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10 h-16 flex items-center justify-between font-mono text-[11px] tracking-[0.2em] uppercase">
        <a
          href="#"
          className="flex items-center gap-2 normal-case text-paper hover:text-volt transition-colors"
          aria-label="VIMO"
        >
          <BrandMark variant="lockup" className="h-9 w-auto" />
        </a>

        <div className="hidden md:flex items-center gap-7">
          <a className="hover:text-volt transition-colors" href="#manifesto">01 {t("manifesto")}</a>
          <a className="hover:text-volt transition-colors" href="#characters">02 {t("characters")}</a>
          <a className="hover:text-volt transition-colors" href="#sports">03 {t("sports")}</a>
          <a className="hover:text-volt transition-colors" href="#tech">04 {t("tech")}</a>
          <a className="hover:text-volt transition-colors" href="#sizes">05 {t("sizes")}</a>
        </div>

        <div className="flex items-center gap-4">
          <LangSwitcher />
          <a
            href="#signup"
            className="hidden md:inline-flex items-center gap-2 bg-volt text-ink px-4 py-2 rounded-full hover:bg-paper transition-colors"
          >
            {t("signup")} <span aria-hidden>↗</span>
          </a>
        </div>
      </div>
    </nav>
  );
}
