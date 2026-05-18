import type { Metadata } from "next";
import { Instrument_Serif, Bricolage_Grotesque, Geist_Mono, Shippori_Mincho_B1 } from "next/font/google";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "../../i18n/routing";
import "../globals.css";

const display = Instrument_Serif({
  weight: ["400"],
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-display-loaded",
  display: "swap",
});

const sans = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-sans-loaded",
  display: "swap",
});

const mono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono-loaded",
  display: "swap",
});

const jp = Shippori_Mincho_B1({
  weight: ["400", "600", "800"],
  subsets: ["latin"],
  variable: "--font-jp-loaded",
  display: "swap",
});

export const metadata: Metadata = {
  title: "BRAND_NAME — Athletes, Articulated.",
  description:
    "A new collectible for the riders, runners, and dreamers. Posable practice tools that live in your bag, on your desk, and in your kit. Snowboard first. Every sport next.",
  metadataBase: new URL("https://brand-name.com"),
  openGraph: {
    title: "BRAND_NAME — Athletes, Articulated.",
    description:
      "Carryable, posable, collectible. A new athlete-figure brand built for the movement.",
    type: "website",
  },
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <html
      lang={locale}
      className={`${display.variable} ${sans.variable} ${mono.variable} ${jp.variable}`}
      style={{ background: "#0A0A0A", color: "#F2EEE5" }}
    >
      <body className="bg-ink text-paper antialiased" style={{ background: "#0A0A0A", color: "#F2EEE5" }}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
