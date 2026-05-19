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
          Reference spec sheet for the VIMO Main figure — 1:12 scale, 125 mm
          total height, 14 articulated joints. Dimensions taken from a physical
          measurement of the predecessor Tech Rider FLEXDOLL (Norway, c. 2010-2011)
          on 2026-05-19. The 3D below is a procedural blockout carrying the
          <em> correct dimensions, proportions, and joint positions</em>; the final
          character sculpt and surface detailing are to be developed by the
          factory&apos;s sculpting team from this reference plus the character art
          (delivered separately).
        </p>
        <div className="mt-6 max-w-3xl border-l-4 border-volt pl-5 py-3 bg-volt/[0.04]">
          <div className="font-mono text-[10px] tracking-[0.3em] uppercase text-volt mb-2">
            CONSTRUCTION SPEC
          </div>
          <ul className="text-paper/85 text-[14px] leading-relaxed space-y-1.5">
            <li>· <strong>Skeleton</strong>: Dummy 13 / T-13 style ball joints, 14 articulation points (image in §03.5)</li>
            <li>· <strong>Body surface</strong>: silicone; face and hands exposed for grip/tactile feel</li>
            <li>· <strong>Costume</strong>: real fabric uniforms varying by sport — snowboard puffer, baseball mesh, golf polo, soccer dry-mesh, surf rashguard. Uniform covers most joints during display, full articulation underneath.</li>
            <li>· <strong>Self-standing</strong>: knees-bent riding stance (snowboard SKU), FLEXDOLL-style knee mechanism — US6893318B2 patent expired 2022-07-03</li>
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
        <div className="font-mono text-[10px] tracking-[0.3em] uppercase text-volt mb-4">
          03.4 · CHARACTER SCULPT REFERENCE — what the figure should look like
        </div>
        <p className="text-paper/80 max-w-3xl mb-6">
          Five illustrated views of the same VIMO figure — one neutral standing
          pose plus the four discipline poses from the main brand page. Use
          these as the visual brief for head sculpt direction, jacket pattern,
          glove shape, board graphic styling, and overall proportion. The
          character is intentionally not photorealistic: stylized but anatomically
          correct, with a Mezco One:12 / Hot Toys mid-tier finish quality
          target.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
          {[
            { src: "/characters/pose_standing.png", label: "STANDING", sub: "neutral reveal" },
            { src: "/characters/pose_powder.png",   label: "POWDER",   sub: "heel-side carve" },
            { src: "/characters/pose_park.png",     label: "PARK",     sub: "indy grab air" },
            { src: "/characters/pose_halfpipe.png", label: "HALFPIPE", sub: "method grab" },
            { src: "/characters/pose_carver.png",   label: "ALPINE",   sub: "eurocarve" },
          ].map((p) => (
            <a key={p.src} href={p.src} target="_blank" rel="noopener" className="block">
              <img
                src={p.src}
                alt={`VIMO character ${p.label}`}
                className="w-full aspect-square object-contain bg-ink rounded-xl border border-paper/10"
                loading="lazy"
              />
              <div className="mt-2 font-mono text-[10px] tracking-[0.25em] uppercase text-paper/60">
                {p.label}
              </div>
              <div className="font-mono text-[9px] tracking-[0.2em] uppercase text-paper/40">
                {p.sub}
              </div>
            </a>
          ))}
        </div>
        <p className="mt-6 text-[13px] text-paper/60 max-w-3xl">
          The character art is final enough for the sculpting team to start
          immediately. Treat the outfit, beanie + pompom, electric-green goggles,
          jacket + cargo silhouette, and glove shape as locked. Minor details
          (face features, exact jacket panel lines) will be refined together
          with co-founder Franz during sample review.
        </p>
      </section>

      <section className="mx-auto max-w-[1280px] px-6 lg:px-10 py-10">
        <div className="font-mono text-[10px] tracking-[0.3em] uppercase text-volt mb-4">
          03.5 · JOINT REFERENCE — sent by Franz 2026-05-19
        </div>
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          <a href="/models/joint_reference.jpeg" target="_blank" rel="noopener">
            <img
              src="/models/joint_reference.jpeg"
              alt="Joint reference - Dummy 13 / T-13 style articulated figure"
              className="w-full rounded-2xl bg-paper/5"
            />
          </a>
          <div>
            <p className="text-paper/85 leading-relaxed mb-4">
              The reference Franz shared is a <strong>&ldquo;Dummy 13 / T-13&rdquo;</strong> style
              3D-printable articulated figure — exposed black ball joints at every
              articulation point (neck, shoulder, elbow, wrist, waist, hip, knee,
              ankle), with segmented body panels and interchangeable hand pieces.
            </p>
            <p className="text-paper/85 leading-relaxed mb-4">
              <strong>Working assumption</strong>: this Dummy 13 joint mechanism is
              the <em>structural skeleton</em>, and the per-sport real-fabric uniform
              (snowboard puffer, baseball mesh, etc.) sits on top — covering most of
              the joints during display, but allowing full articulation underneath.
              Face and hands stay exposed in silicone for the tactile face/grip feel.
            </p>
            <p className="text-paper/85 leading-relaxed mb-4 text-[13px] text-paper/70">
              Will confirm with Weijun &amp; Demeng whether this hybrid build is
              mechanically feasible at our $15 FOB target. If silicone + fabric +
              ball joints together blows the cost, options are:
            </p>
            <ul className="text-paper/85 leading-relaxed text-[13px] space-y-1.5 list-disc pl-5">
              <li>simpler joint mechanism (fewer ball joints, hidden flexible joints inside fabric)</li>
              <li>silicone face/hands only, hard plastic body under fabric</li>
              <li>fabric on premium SKUs only, painted-on uniform on entry SKUs</li>
            </ul>
          </div>
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

      <footer className="border-t border-paper/15 mt-10">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-10 py-6 font-mono text-[10px] tracking-[0.2em] uppercase text-paper/40">
          VIMO TOYS · Circular House Inc · Tokyo · vimo-co.vercel.app
        </div>
      </footer>
    </main>
  );
}
