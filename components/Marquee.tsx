"use client";

import { useTranslations } from "next-intl";

export function Marquee() {
  const t = useTranslations("marquee");
  const text = t("items");
  return (
    <section className="relative border-y border-paper/15 bg-ink overflow-hidden">
      <div className="flex whitespace-nowrap animate-marquee py-5 font-display italic text-[clamp(2.5rem,7vw,6rem)] leading-none tracking-[-0.02em]">
        <span className="px-8">{text.repeat(6)}</span>
        <span className="px-8" aria-hidden>{text.repeat(6)}</span>
      </div>
    </section>
  );
}
