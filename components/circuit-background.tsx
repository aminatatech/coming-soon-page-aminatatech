export function CircuitBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-background">
      {/* Grille fixe nette */}
      <div 
        className="absolute inset-0 opacity-20" 
        style={{
          backgroundImage: `linear-gradient(to right, currentColor 1px, transparent 1px), 
                            linear-gradient(to bottom, currentColor 1px, transparent 1px)`,
          backgroundSize: '80px 80px',
          color: 'var(--ember)'
        }}
      />
      
      {/* Animation d'opacité uniquement (0% impact CPU) */}
      <div className="absolute inset-0 animate-pulse-slow opacity-10 bg-[radial-gradient(circle_at_50%_50%,var(--ember),transparent_70%)]" />

      <style jsx>{`
        .animate-pulse-slow {
          animation: pulse-slow 10s ease-in-out infinite;
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.05; }
          50% { opacity: 0.15; }
        }
      `}</style>
    </div>
  )
}
