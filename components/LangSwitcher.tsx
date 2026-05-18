"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "next/navigation";
import { useTransition } from "react";
import { routing } from "../i18n/routing";

export function LangSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [, startTransition] = useTransition();

  const switchTo = (next: string) => {
    if (next === locale) return;
    const segments = pathname.split("/").filter(Boolean);
    const isPrefixed = routing.locales.includes(segments[0] as (typeof routing.locales)[number]);
    if (isPrefixed) segments.shift();
    const rest = "/" + segments.join("/");
    const dest = next === routing.defaultLocale ? rest || "/" : `/${next}${rest}`;
    startTransition(() => router.replace(dest));
  };

  return (
    <div className="flex items-center gap-1 font-mono text-[11px] tracking-[0.2em]">
      {routing.locales.map((l, i) => (
        <span key={l} className="flex items-center gap-1">
          {i > 0 && <span className="text-paper/30">/</span>}
          <button
            onClick={() => switchTo(l)}
            className={`uppercase transition-colors ${
              l === locale ? "text-volt" : "text-paper/60 hover:text-paper"
            }`}
          >
            {l}
          </button>
        </span>
      ))}
    </div>
  );
}
