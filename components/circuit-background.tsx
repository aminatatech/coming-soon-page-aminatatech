export function CircuitBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 bg-background overflow-hidden">
      {/* Grille fixe avec une opacité de base pour qu'elle ne soit jamais totalement invisible */}
      <div 
        className="absolute inset-0 opacity-[0.15]" 
        style={{
          backgroundImage: `linear-gradient(var(--ember) 1px, transparent 1px), 
                            linear-gradient(90deg, var(--ember) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}
      />

      {/* Animation de gradient focalisé (Data spotlight) qui se déplace doucement */}
      <div className="absolute inset-0 animate-spotlight opacity-[0.08]" 
           style={{
             background: 'radial-gradient(circle at 50% 50%, var(--ember), transparent 70%)'
           }}
      />

      <style jsx>{`
        /* Animation très lente sur l'opacité pour la rendre "vivante" sans calcul lourd */
        @keyframes spotlight {
          0%, 100% { opacity: 0.05; transform: scale(1); }
          50% { opacity: 0.15; transform: scale(1.1); }
        }
        .animate-spotlight {
          animation: spotlight 15s ease-in-out infinite;
        }
      `}</style>
    </div>
  )
}
