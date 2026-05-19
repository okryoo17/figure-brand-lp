"use client";

/**
 * VIMO brand mark — minimal snowboarder doll silhouette + wordmark.
 *
 * Design intent (matches house style: editorial brutalist sport):
 *   - One tiny snowboarder doll glyph (beanie, goggle band, puffer, board)
 *   - "vimo" italic wordmark to the right
 *   - Volt accent on the snowboard so the brand color reads instantly
 *
 * Use `variant="mark"` for just the figure (favicon / icon spots),
 *      `variant="lockup"` for figure + wordmark (header / footer).
 */

type Props = {
  variant?: "lockup" | "mark";
  className?: string;
  wordColor?: string;
  figureColor?: string;
  accentColor?: string;
};

export function BrandMark({
  variant = "lockup",
  className,
  wordColor = "currentColor",
  figureColor = "currentColor",
  accentColor = "var(--color-volt)",
}: Props) {
  const Doll = (
    <g fill={figureColor}>
      {/* beanie pompom */}
      <circle cx="16" cy="6" r="2" />
      {/* beanie */}
      <path d="M9 16 Q9 9 16 9 Q23 9 23 16 L23 19 L9 19 Z" />
      {/* head */}
      <circle cx="16" cy="22" r="5.5" />
      {/* goggle band — accent volt */}
      <rect x="10.5" y="20" width="11" height="2.4" rx="0.6" fill={accentColor} />
      {/* puffer jacket */}
      <path d="M8 28 Q16 30 24 28 L25 41 Q16 43 7 41 Z" />
      {/* arms (slight out for riding stance) */}
      <path d="M7.5 30 Q4 35 4.5 42 L7 42.4 Q7.4 36 9.4 32 Z" />
      <path d="M24.5 30 Q28 35 27.5 42 L25 42.4 Q24.6 36 22.6 32 Z" />
      {/* legs bent */}
      <path d="M10 42 Q9 50 11 56 L14 56 Q15 50 14.5 42 Z" />
      <path d="M17.5 42 Q17.5 50 18 56 L21 56 Q23 50 22 42 Z" />
      {/* boots */}
      <rect x="6.5" y="55" width="9" height="3" rx="0.8" />
      <rect x="16.5" y="55" width="9" height="3" rx="0.8" />
      {/* snowboard — volt accent */}
      <ellipse cx="16" cy="60" rx="15" ry="1.8" fill={accentColor} />
    </g>
  );

  if (variant === "mark") {
    return (
      <svg
        viewBox="0 0 32 64"
        className={className}
        role="img"
        aria-label="VIMO snowboarder mark"
      >
        {Doll}
      </svg>
    );
  }

  // lockup: doll + "vimo" wordmark
  return (
    <svg
      viewBox="0 0 130 64"
      className={className}
      role="img"
      aria-label="VIMO"
    >
      {Doll}
      <text
        x="42"
        y="48"
        fill={wordColor}
        fontFamily="'Instrument Serif', serif"
        fontStyle="italic"
        fontWeight="400"
        fontSize="48"
        letterSpacing="-2"
      >
        vimo
      </text>
    </svg>
  );
}
