import { setRequestLocale } from "next-intl/server";
import { Nav } from "../../components/Nav";
import { Hero } from "../../components/Hero";
import { Marquee } from "../../components/Marquee";
import { Manifesto } from "../../components/Manifesto";
import { Characters } from "../../components/Characters";
import { Sports } from "../../components/Sports";
import { Technology } from "../../components/Technology";
import { Sizes } from "../../components/Sizes";
import { Signup } from "../../components/Signup";
import { Footer } from "../../components/Footer";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <main className="relative">
      <Nav />
      <Hero />
      <Marquee />
      <Manifesto />
      <Characters />
      <Sports />
      <Technology />
      <Sizes />
      <Signup />
      <Footer />
    </main>
  );
}
