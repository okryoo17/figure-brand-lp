import { Figure3D } from "../../../../components/Figure3D";

export const dynamic = "force-static";

const DL = ({ href, label, sub }: { href: string; label: string; sub?: string }) => (
  <a
    href={href}
    download
    className="block border border-paper/15 hover:border-volt rounded-2xl p-4 transition-colors group"
  >
    <div className="font-mono text-[11px] tracking-[0.25em] uppercase text-volt group-hover:text-volt">
      DOWNLOAD →
    </div>
    <div className="font-display italic text-xl text-paper mt-1">{label}</div>
    {sub && <div className="font-mono text-[10px] text-paper/50 mt-1">{sub}</div>}
  </a>
);

const Spec = ({ k, v }: { k: string; v: string }) => (
  <div className="flex justify-between border-b border-paper/10 py-2">
    <span className="font-mono text-[11px] tracking-[0.15em] uppercase text-paper/60">{k}</span>
    <span className="font-mono text-[12px] text-paper">{v}</span>
  </div>
);

export default function InternalThreeDPage() {
  return (
    <main className="min-h-screen bg-ink text-paper">
      <header className="border-b border-paper/15">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-10 py-6 flex items-center justify-between flex-wrap gap-4">
          <div>
            <div className="font-mono text-[10px] tracking-[0.3em] uppercase text-flare">
              VIMO · INTERNAL · DESIGN REVIEW
            </div>
            <h1 className="font-display italic text-3xl lg:text-4xl text-paper mt-1">
              3D Blockout — Main Figure
            </h1>
          </div>
          <div className="font-mono text-[10px] tracking-[0.2em] uppercase text-paper/50">
            v0.1 · 2026-05-19 · 1:12 · 125 mm
          </div>
        </div>
      </header>

      <section className="mx-auto max-w-[1280px] px-6 lg:px-10 py-10">
        <p className="text-paper/80 max-w-3xl">
          This page is for design review with co-founder Franz and for sharing with
          shortlisted OEM factories. The 3D below is a procedural blockout — it
          carries the <em>correct dimensions, proportions, and joint positions</em> from
          the physical Tech Rider sample measured on 2026-05-19. The final character sculpt,
          surface details, and finishing are to be developed from Franz&apos;s sketch + the
          factory&apos;s sculptor team.
        </p>
        <div className="mt-6 max-w-3xl border-l-4 border-volt pl-5 py-3 bg-volt/[0.04]">
          <div className="font-mono text-[10px] tracking-[0.3em] uppercase text-volt mb-2">
            DIRECTION UPDATE — 2026-05-19 (Franz)
          </div>
          <ul className="text-paper/85 text-[14px] leading-relaxed space-y-1.5">
            <li>· Body material: <strong>SILICONE</strong> (was: PVC + ABS hybrid) — softer, LABUBU-like tactile feel</li>
            <li>· Joint construction: per Franz reference image (to be incorporated)</li>
            <li>· Costume fabric varies by sport — snowboard puffer, baseball mesh, golf polo, soccer dry-mesh, surf rashguard. Tactile differentiation is part of brand experience.</li>
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-[1280px] px-6 lg:px-10 grid lg:grid-cols-2 gap-8">
        <div className="bg-paper/[0.03] border border-paper/15 rounded-3xl p-6 lg:p-8">
          <div className="font-mono text-[10px] tracking-[0.3em] uppercase text-volt mb-4">
            01 · INTERACTIVE 3D — DRAG TO ROTATE
          </div>
          <div className="h-[560px]">
            <Figure3D src="/models/vimo_main.glb" alt="VIMO Main figure 1:12" cameraOrbit="20deg 78deg auto" />
          </div>
          <div className="font-mono text-[9px] tracking-[0.25em] uppercase text-paper/40 mt-3">
            drag · pinch · scroll-zoom
          </div>
        </div>

        <div className="bg-paper/[0.03] border border-paper/15 rounded-3xl p-6 lg:p-8">
          <div className="font-mono text-[10px] tracking-[0.3em] uppercase text-flare mb-4">
            02 · DIMENSIONS (all in mm)
          </div>
          <a href="/models/vimo_main_dimensions.png" target="_blank" rel="noopener">
            <img
              src="/models/vimo_main_dimensions.png"
              alt="VIMO main dimensions front + side"
              className="w-full rounded-xl bg-paper"
            />
          </a>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 mt-6">
            <div>
              <Spec k="Total height" v="125 mm" />
              <Spec k="Shoulder width" v="56 mm" />
              <Spec k="Arm span (joints)" v="150 mm" />
              <Spec k="Hip width" v="36 mm" />
              <Spec k="Torso (collar→crotch)" v="38 mm" />
              <Spec k="Foot length" v="14 mm" />
            </div>
            <div>
              <Spec k="Upper / lower arm" v="22 / 22 mm" />
              <Spec k="Upper / lower leg" v="26 / 26 mm" />
              <Spec k="Head Ø" v="22 mm" />
              <Spec k="Snowboard L × W × T" v="140 × 35 × 6 mm" />
              <Spec k="Goggles W × H" v="17 × 6 mm" />
              <Spec k="Articulation" v="14 joints, independent" />
              <Spec k="Body material" v="silicone (per Franz 2026-05-19)" />
              <Spec k="Costume fabric" v="per-sport tactile (snowboard: puffer)" />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1280px] px-6 lg:px-10 py-10">
        <div className="font-mono text-[10px] tracking-[0.3em] uppercase text-volt mb-4">
          03 · DOWNLOAD PACKET
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
          <DL href="/models/vimo_main_figure.stl"   label="STL"            sub="binary mesh · ~2 MB · sculpting input" />
          <DL href="/models/vimo_main_figure.obj"   label="OBJ"            sub="wavefront · ~3 MB · sculpting input" />
          <DL href="/models/vimo_main.glb"          label="GLB"            sub="web 3D · ~1 MB · viewer asset" />
          <DL href="/models/vimo_main_dimensions.pdf" label="DIMENSIONS PDF" sub="front + side · all mm" />
          <DL href="/models/vimo_main_dimensions.png" label="DIMENSIONS PNG" sub="raster version" />
          <DL href="/models/vimo_main_joints.csv"   label="JOINTS CSV"      sub="14 articulation points (x,y,z mm)" />
          <DL href="/models/dimensions_extracted.md" label="SPEC SHEET"      sub="full body proportion notes" />
          <DL href="/models/vimo_mini.glb"          label="MINI CHARM GLB"  sub="1:24 · 62 mm · charm version" />
        </div>
      </section>

      <section className="mx-auto max-w-[1280px] px-6 lg:px-10 py-10">
        <div className="font-mono text-[10px] tracking-[0.3em] uppercase text-flare mb-4">
          04 · REFERENCE — Tech Rider FLEXDOLL (predecessor)
        </div>
        <p className="text-paper/70 max-w-3xl mb-6">
          Source dimensions taken from a physical Tech Rider FLEXDOLL sample
          (Norway, c. 2010-2011). The FLEXDOLL self-standing knee mechanism patent
          (US6893318B2 / EP1417010B1 / JP4116538B2) expired on 2022-07-03 — the
          technique is now freely usable. The character sculpt is original; we are
          not licensing the Terje likeness.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
            <a key={n} href={`/models/ref_${n}.jpeg`} target="_blank" rel="noopener" className="block">
              <img
                src={`/models/ref_${n}.jpeg`}
                alt={`Tech Rider sample - measurement ${n}`}
                className="w-full aspect-square object-cover rounded-xl bg-paper/5"
                loading="lazy"
              />
            </a>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[1280px] px-6 lg:px-10 py-10">
        <div className="font-mono text-[10px] tracking-[0.3em] uppercase text-volt mb-4">
          05 · NOTE TO FRANZ
        </div>
        <div className="bg-paper/[0.03] border border-paper/15 rounded-3xl p-6 lg:p-8 max-w-3xl">
          <p className="text-paper/85 leading-relaxed">
            Hey Franz —
          </p>
          <p className="text-paper/85 leading-relaxed mt-4">
            The blockout above carries the full Tech Rider dimensions exactly. It is
            geometry + joint reference only — not the final character. Your sketch
            will replace the head sculpt, jacket detailing, glove fingers, and board
            graphics; the factory&apos;s sculptor will refine surface and joint
            mechanics from there.
          </p>
          <p className="text-paper/85 leading-relaxed mt-4">
            All files in section 03 are the same packet I am sending to Weijun /
            Demeng / IDEA Animation for quote refinement. The dimensions PDF is the
            authoritative reference — everyone works off that, the 3D is just for
            volume / proportion / joint position cross-check.
          </p>
          <p className="text-paper/85 leading-relaxed mt-4">
            Got your message on silicone body + LABUBU-style tactile / per-sport
            uniform fabric. Updated the direction box at the top of this page and
            the spec sheet (silicone body, per-sport fabric varying). The 3D
            blockout still represents the geometric volume only — the material
            shift will be communicated to factories before they finalize the
            quote.
          </p>
          <p className="text-paper/85 leading-relaxed mt-4">
            Please reply with: (a) feedback on overall stance and proportions, (b)
            target head sculpt direction (realistic / stylized / LABUBU-cute), (c)
            any binding angle or board profile changes vs Tech Rider, (d) the joint
            reference image you mentioned (&quot;basically these&quot;) — could not see it
            on this end yet, drop it into the WhatsApp thread again or DM me.
          </p>
          <p className="text-paper/85 leading-relaxed mt-4 font-mono text-[12px]">
            — Ryosuke · Tokyo · 2026-05-19
          </p>
        </div>
      </section>

      <footer className="border-t border-paper/15 mt-10">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-10 py-6 font-mono text-[10px] tracking-[0.2em] uppercase text-paper/40">
          VIMO TOYS · Circular House Inc · Tokyo · vimo-co.vercel.app
        </div>
      </footer>
    </main>
  );
}
