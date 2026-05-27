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
              VIMO Classic — Patent-based Construction
            </h1>
          </div>
          <div className="font-mono text-[10px] tracking-[0.2em] uppercase text-paper/50">
            v0.3 · 2026-05-27 · 1:12 · 125 mm
          </div>
        </div>
      </header>

      <section className="mx-auto max-w-[1280px] px-6 lg:px-10 py-10">
        <p className="text-paper/80 max-w-3xl">
          VIMO <strong>Classic</strong> is the new main SKU — built on the
          expired <strong>US6893318B2</strong> &ldquo;Flexible Figure&rdquo;
          construction (Tech Rider FLEXDOLL, NO, 2001 / lapsed 2017-05-17 US
          maintenance-fee non-payment), with <strong>four deliberate additions</strong>
          in rigid plastic: a <strong>swivel neck joint</strong>, <strong>two
          wrist swivels</strong>, <strong>two elbow ball joints</strong>, and{" "}
          <strong>two knee ball joints</strong>. Shoulders, hips and ankles are{" "}
          <em>pre-formed</em> in the riding stance and held rigid — they do not
          articulate. Total active articulation: <strong>7 points</strong>.
          Decision per Franz × Okamura 2026-05-27 (revised from v0.2 3-joint
          spec based on Weijun structural feedback 2026-05-26).
        </p>
        <div className="mt-6 max-w-3xl border-l-4 border-volt pl-5 py-3 bg-volt/[0.04]">
          <div className="font-mono text-[10px] tracking-[0.3em] uppercase text-volt mb-2">
            CONSTRUCTION SPEC — VIMO CLASSIC
          </div>
          <ul className="text-paper/85 text-[14px] leading-relaxed space-y-1.5">
            <li>· <strong>Torso</strong>: resilient elastomer (silicone or TPE), integrated shoulder + thigh sections — per patent Fig.2 / 3</li>
            <li>· <strong>Upper / lower limbs</strong>: rigid plastic (PA / POM / PVC), connected through ball joints at elbow and knee — patent peg-and-socket family upgraded to ball articulation per Fig.6 / 7 / 8-12</li>
            <li>· <strong>Pre-formed sections</strong>: shoulders, hips and ankles fixed in riding stance — figure self-stands on snowboard without metal armature</li>
            <li>· <strong>NEW · Neck joint</strong>: plastic swivel between head and torso — full head rotation, mild tilt</li>
            <li>· <strong>NEW · Wrist joint (×2)</strong>: plastic swivel between forearm and hand piece — hand rotation for grab / brace</li>
            <li>· <strong>NEW · Elbow joint (×2)</strong>: plastic ball joint between upper and lower arm — multi-axis rotation for grab / brace poses</li>
            <li>· <strong>NEW · Knee joint (×2)</strong>: plastic ball joint between upper and lower leg — multi-axis rotation for stance variation</li>
            <li>· <strong>Surface finish</strong>: silicone face + hands exposed for tactile feel; per-sport fabric uniform covers the body (snowboard puffer for SS26)</li>
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-[1280px] px-6 lg:px-10 grid lg:grid-cols-2 gap-8">
        <div className="bg-paper/[0.03] border border-paper/15 rounded-3xl p-6 lg:p-8">
          <div className="font-mono text-[10px] tracking-[0.3em] uppercase text-volt mb-4">
            01 · INTERACTIVE 3D — COSTUMED & SKELETON
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <div className="h-[440px]">
                <Figure3D src="/models/vimo_main.glb" alt="VIMO Main figure costumed" cameraOrbit="20deg 78deg auto" />
              </div>
              <div className="font-mono text-[10px] tracking-[0.2em] uppercase text-paper/60 mt-2">
                COSTUMED — final look
              </div>
            </div>
            <div>
              <div className="h-[440px]">
                <Figure3D src="/models/vimo_main_skeleton.glb" alt="VIMO Classic internal construction" cameraOrbit="20deg 78deg auto" />
              </div>
              <div className="font-mono text-[10px] tracking-[0.2em] uppercase text-paper/60 mt-2">
                CONSTRUCTION — elastomer torso + rigid limbs + 7 plastic joints
              </div>
              <div className="font-mono text-[9px] tracking-[0.2em] uppercase text-paper/40 mt-1">
                ⚠ skeleton GLB still showing v0.1 14-joint blockout · 7-joint regen pending
              </div>
            </div>
          </div>
          <div className="font-mono text-[9px] tracking-[0.25em] uppercase text-paper/40 mt-3">
            drag · pinch · scroll-zoom · both viewers independent
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
              <Spec k="Articulation" v="7 active (neck + 2 wrists + 2 elbows + 2 knees)" />
              <Spec k="Shoulders / hips / ankles" v="pre-formed, riding stance" />
              <Spec k="Torso material" v="elastomer (silicone / TPE)" />
              <Spec k="Limb material" v="rigid plastic (PA / POM / PVC)" />
              <Spec k="Costume fabric" v="per-sport (snowboard: puffer)" />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1280px] px-6 lg:px-10 py-10">
        <div className="font-mono text-[10px] tracking-[0.3em] uppercase text-volt mb-4">
          03 · DOWNLOAD PACKET
        </div>

        <div className="font-mono text-[9px] tracking-[0.25em] uppercase text-paper/50 mt-2 mb-3">
          COSTUMED — final look
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-6">
          <DL href="/models/vimo_main_figure.stl"  label="COSTUMED · STL" sub="binary mesh · ~15 MB · sculpting input" />
          <DL href="/models/vimo_main_figure.obj"  label="COSTUMED · OBJ" sub="wavefront · ~22 MB · sculpting input" />
          <DL href="/models/vimo_main.glb"         label="COSTUMED · GLB" sub="web 3D · ~9 MB · viewer asset" />
        </div>

        <div className="font-mono text-[9px] tracking-[0.25em] uppercase text-paper/50 mt-2 mb-3">
          CONSTRUCTION — elastomer torso + rigid limbs + 7 plastic joints (legacy v0.1 skeleton GLB shown — 7-joint regen pending)
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-6">
          <DL href="/models/vimo_main_skeleton.stl" label="SKELETON · STL" sub="v0.1 14-pt blockout · regen pending" />
          <DL href="/models/vimo_main_skeleton.obj" label="SKELETON · OBJ" sub="v0.1 14-pt blockout · regen pending" />
          <DL href="/models/vimo_main_skeleton.glb" label="SKELETON · GLB" sub="v0.1 14-pt blockout · regen pending" />
        </div>

        <div className="font-mono text-[9px] tracking-[0.25em] uppercase text-paper/50 mt-2 mb-3">
          SPEC + REFERENCE DATA
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
          <DL href="/models/vimo_main_dimensions.pdf" label="DIMENSIONS PDF" sub="front + side · all mm" />
          <DL href="/models/vimo_main_dimensions.png" label="DIMENSIONS PNG" sub="raster version" />
          <DL href="/models/vimo_main_joints.csv"   label="JOINTS CSV"     sub="legacy v0.1 — 14-point blockout reference" />
          <DL href="/models/dimensions_extracted.md" label="SPEC SHEET"     sub="full body proportion notes" />
          <DL href="/models/vimo_mini.glb"          label="MINI CHARM GLB" sub="1:24 · 62 mm · charm version" />
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
          03.5 · PATENT STRUCTURE — US6893318B2 (Søviknes / Sætveit, 2001 · lapsed 2017)
        </div>
        <p className="text-paper/80 max-w-3xl mb-6">
          VIMO Classic uses the patent&apos;s figure geometry as a base — the
          patent is freely usable as of 2017-05-17 (US maintenance-fee lapse).
          All 10 sheets of the patent are reproduced below at 288 DPI (rendered
          from the official PDF). Our additions in
          <span className="text-volt"> electric green</span> are the neck swivel,
          the two wrist swivels, and the upgrade of the knee and elbow
          pin-and-socket joints into ball-joint articulation.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {[
            { n: "00", label: "COVER",         sub: "title sheet · abstract · representative figure" },
            { n: "01", label: "FIG.1",         sub: "figure standing on snowboard (riding stance)" },
            { n: "02", label: "FIG.2",         sub: "figure with limbs spread · body / shoulder integration" },
            { n: "03", label: "FIG.3",         sub: "body exploded · elastic torso interior" },
            { n: "04", label: "FIG.4 / FIG.5", sub: "torso pieces · integrated shoulder + thigh" },
            { n: "05", label: "FIG.6 / FIG.7", sub: "knee · pin 42 / socket 44 → VIMO ball-joint upgrade" },
            { n: "06", label: "FIG.8 – 12",    sub: "snap-fit joint assembly sequence" },
            { n: "07", label: "FIG.13 – 15",   sub: "elbow joint detail → VIMO ball-joint upgrade" },
            { n: "08", label: "FIG.16",        sub: "snowboard with both bindings" },
            { n: "09", label: "FIG.17",        sub: "hand inserting into binding" },
          ].map((f) => (
            <a
              key={f.n}
              href={`/models/patent/fig_d${f.n}.png`}
              target="_blank"
              rel="noopener"
              className="block"
            >
              <img
                src={`/models/patent/fig_d${f.n}.png`}
                alt={`US6893318B2 ${f.label} — ${f.sub}`}
                className="w-full rounded-xl bg-paper p-2"
                loading="lazy"
              />
              <div className="mt-2 font-mono text-[10px] tracking-[0.25em] uppercase text-paper/60">
                {f.label}
              </div>
              <div className="font-mono text-[9px] tracking-[0.2em] uppercase text-paper/40">
                {f.sub}
              </div>
            </a>
          ))}
        </div>

        <div className="mt-8 grid lg:grid-cols-2 gap-8">
          <div className="bg-paper/[0.03] border border-volt/40 rounded-2xl p-6">
            <div className="font-mono text-[10px] tracking-[0.3em] uppercase text-volt mb-3">
              VIMO additions over the patent
            </div>
            <ul className="text-paper/85 leading-relaxed text-[14px] space-y-2 list-disc pl-5">
              <li><strong>Neck swivel</strong>: rigid plastic peg from torso top into head socket. Free 360° rotation, ±10° tilt. Looks toward the line of travel.</li>
              <li><strong>Wrist swivel (×2)</strong>: rigid plastic peg between forearm-end and hand piece. Free rotation so the hand can grab the board (Fig.17) or brace against the slope.</li>
              <li><strong>Elbow ball joint (×2)</strong>: the patent&apos;s peg-and-socket at the elbow (Fig.13-15) upgraded to a ball joint — multi-axis rotation for grab and brace poses. The dorsal elastic tendon is no longer required at the elbow.</li>
              <li><strong>Knee ball joint (×2)</strong>: the patent&apos;s peg-and-socket at the knee (Fig.6-12) upgraded to a ball joint — multi-axis rotation for stance variation. The dorsal elastic tendon is no longer required at the knee.</li>
              <li>All four additions use the same moulding tooling family used at knee / elbow in the patent — the assembly step is structurally compatible; the elbow and knee upgrades convert pre-bent peg joints into freely articulating ball joints.</li>
            </ul>
          </div>
          <div className="bg-paper/[0.03] border border-paper/15 rounded-2xl p-6">
            <div className="font-mono text-[10px] tracking-[0.3em] uppercase text-flare mb-3">
              Why this build (vs. 14-joint Dummy-13)
            </div>
            <ul className="text-paper/80 leading-relaxed text-[13px] space-y-2 list-disc pl-5">
              <li>Half the joint count of Dummy-13 (7 vs 14) → significantly lower QC failure rate while keeping play-pose flexibility.</li>
              <li>Patent-derived geometry — Tech Rider shipped this base for ~15 years.</li>
              <li>Riding-stance default — shoulders / hips / ankles pre-formed, figure self-stands without buyer skill.</li>
              <li>Lower BOM (single elastomer body + 4 rigid limbs + 7 plastic joints) → competitive vs full 14-joint builds at our FOB target.</li>
              <li>Patent expired (2017-05-17, US) — usable without licensing or royalty; ball-joint upgrade at elbow / knee is the VIMO-original layer for new IP filing.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1280px] px-6 lg:px-10 py-10">
        <div className="font-mono text-[10px] tracking-[0.3em] uppercase text-flare mb-4">
          04 · REFERENCE — Tech Rider FLEXDOLL (predecessor in hand)
        </div>
        <p className="text-paper/70 max-w-3xl mb-6">
          Physical Tech Rider FLEXDOLL sample (Norway, c. 2010-2011) used as the
          dimensional reference. The FLEXDOLL self-standing knee mechanism patent
          (US6893318B2 / EP1417010B1 / JP4116538B2) lapsed 2017-05-17 (US,
          maintenance-fee non-payment). The character sculpt is original; the
          Terje likeness is not licensed.
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
