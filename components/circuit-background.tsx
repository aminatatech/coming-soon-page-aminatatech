// Static, lightweight SVG circuit lines. No JS, no canvas, no particles.
// Only 3 paths carry avery slow CSS opacity glow via `will-change: opacity`.
export function CircuitBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 1440 900"
        preserveAspectRatio="xMidYMid slice"
        fill="none"
      >
        {/* Base static traces (dim, no animation) */}
        <g stroke="var(--ember)" strokeOpacity="0.1" strokeWidth="1">
          <path d="M0 160 H320 L360 200 H620" />
          <path d="M1440 240 H1120 L1080 200 H900" />
          <path d="M0 740 H260 L300 700 H540" />
          <path d="M1440 660 H1160 L1120 700 H860" />
          <path d="M720 0 V120 L760 160 V300" />
          <path d="M720 900 V780 L680 740 V600" />
          <path d="M120 320 V520 L160 560 H360" />
          <path d="M1320 360 V560 L1280 600 H1080" />
        </g>

        {/* Node dots */}
        <g fill="var(--ember)" fillOpacity="0.18">
          <circle cx="620" cy="200" r="3" />
          <circle cx="900" cy="200" r="3" />
          <circle cx="540" cy="700" r="3" />
          <circle cx="860" cy="700" r="3" />
          <circle cx="360" cy="560" r="3" />
          <circle cx="1080" cy="600" r="3" />
          <circle cx="760" cy="300" r="3" />
        </g>

        {/* 3 glowing paths (slow CSS opacity fade only) */}
        <g
          stroke="var(--ember)"
          strokeWidth="1.5"
          fill="none"
          style={{ willChange: 'opacity' }}
        >
          <path
            className="animate-circuit-glow"
            d="M0 160 H320 L360 200 H620"
          />
          <path
            className="animate-circuit-glow [animation-delay:2s]"
            d="M1440 660 H1160 L1120 700 H860"
          />
          <path
            className="animate-circuit-glow [animation-delay:4s]"
            d="M720 0 V120 L760 160 V300"
          />
        </g>
      </svg>

      {/* Subtle vignette to keep focus on the center content */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_35%,#000000_92%)]" />
    </div>
  )
}
