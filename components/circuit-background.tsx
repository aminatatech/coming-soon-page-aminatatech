export function CircuitBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 overflow-hidden bg-background"
    >
      {/* Grille de fond très légère (rappel des fichiers de code/data) */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:40px_40px]" />

      <svg className="absolute inset-0 h-full w-full opacity-30" viewBox="0 0 1440 900" preserveAspectRatio="xMidYMid slice">
        {/* Flux de données horizontaux qui défilent */}
        <g className="animate-data-flow">
          <path d="M0 200 H1440" stroke="var(--ember)" strokeWidth="0.5" strokeDasharray="4 4" />
          <path d="M0 450 H1440" stroke="var(--ember)" strokeWidth="0.5" strokeDasharray="4 4" />
          <path d="M0 700 H1440" stroke="var(--ember)" strokeWidth="0.5" strokeDasharray="4 4" />
        </g>
        
        {/* Cercles de données "pulsants" (Data nodes) */}
        <circle cx="200" cy="200" r="2" fill="var(--ember)" className="animate-pulse" />
        <circle cx="1200" cy="450" r="2" fill="var(--ember)" className="animate-pulse [animation-delay:1s]" />
        <circle cx="600" cy="700" r="2" fill="var(--ember)" className="animate-pulse [animation-delay:2s]" />
      </svg>

      {/* Vignette pour garder le focus */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,#000000_90%)]" />

      <style jsx>{`
        @keyframes data-flow {
          0% { transform: translateX(-100px); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: translateX(100px); opacity: 0; }
        }
        .animate-data-flow { animation: data-flow 10s linear infinite; }
      `}</style>
    </div>
  )
}
