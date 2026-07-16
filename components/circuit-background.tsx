export function CircuitBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-background">
      <svg className="h-full w-full opacity-20" viewBox="0 0 100 100" preserveAspectRatio="none">
        {/* Grille technique */}
        <defs>
          <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
            <path d="M 10 0 L 0 0 0 10" fill="none" stroke="var(--ember)" strokeWidth="0.1" />
          </pattern>
        </defs>
        <rect width="100" height="100" fill="url(#grid)" />
        
        {/* Nœuds de données qui flottent */}
        <g className="animate-nodes">
          <circle cx="20" cy="20" r="0.5" fill="var(--ember)" />
          <circle cx="80" cy="30" r="0.5" fill="var(--ember)" />
          <circle cx="50" cy="80" r="0.5" fill="var(--ember)" />
          <circle cx="10" cy="70" r="0.5" fill="var(--ember)" />
          <circle cx="90" cy="80" r="0.5" fill="var(--ember)" />
        </g>
      </svg>

      {/* Animation CSS simple (déplacement lent) */}
      <style jsx>{`
        .animate-nodes {
          animation: float 20s ease-in-out infinite alternate;
        }
        @keyframes float {
          0% { transform: translateY(0); }
          100% { transform: translateY(5px); }
        }
      `}</style>

      {/* Vignette pour centrer le regard */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#000000_100%)]" />
    </div>
  )
}
