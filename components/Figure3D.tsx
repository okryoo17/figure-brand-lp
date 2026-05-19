"use client";

import { useEffect, useRef } from "react";

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace JSX {
    interface IntrinsicElements {
      "model-viewer": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & {
          src?: string;
          alt?: string;
          "auto-rotate"?: boolean;
          "auto-rotate-delay"?: string | number;
          "camera-controls"?: boolean;
          "shadow-intensity"?: string | number;
          "shadow-softness"?: string | number;
          exposure?: string | number;
          "rotation-per-second"?: string;
          "interaction-prompt"?: string;
          "camera-orbit"?: string;
          "field-of-view"?: string;
          "min-camera-orbit"?: string;
          "max-camera-orbit"?: string;
          "environment-image"?: string;
          loading?: string;
          reveal?: string;
          poster?: string;
        },
        HTMLElement
      >;
    }
  }
}

type Props = {
  src: string;
  alt: string;
  height?: string;
  cameraOrbit?: string;
  autoRotate?: boolean;
};

let scriptLoaded = false;

export function Figure3D({
  src,
  alt,
  height = "100%",
  cameraOrbit = "auto auto auto",
  autoRotate = true,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scriptLoaded) return;
    if (typeof window === "undefined") return;
    if (customElements.get("model-viewer")) {
      scriptLoaded = true;
      return;
    }
    const s = document.createElement("script");
    s.type = "module";
    s.src = "https://unpkg.com/@google/model-viewer@4.0.0/dist/model-viewer.min.js";
    s.async = true;
    document.head.appendChild(s);
    scriptLoaded = true;
  }, []);

  return (
    <div ref={ref} style={{ width: "100%", height }}>
      {/* @ts-expect-error custom element */}
      <model-viewer
        src={src}
        alt={alt}
        camera-controls
        auto-rotate={autoRotate ? "" : undefined}
        auto-rotate-delay={autoRotate ? "1200" : undefined}
        rotation-per-second="18deg"
        interaction-prompt="none"
        camera-orbit={cameraOrbit}
        field-of-view="30deg"
        exposure="1.05"
        shadow-intensity="0.85"
        shadow-softness="0.85"
        loading="lazy"
        reveal="auto"
        style={{
          width: "100%",
          height: "100%",
          background: "transparent",
          ["--poster-color" as string]: "transparent",
        }}
      />
    </div>
  );
}
