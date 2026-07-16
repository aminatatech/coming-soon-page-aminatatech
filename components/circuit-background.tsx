export function CircuitBackground() {
  return (
    <div className="fixed inset-0 h-full w-full bg-black" style={{ zIndex: 0 }}>
      {/* Grille avec une couleur très contrastée */}
      <div 
        className="absolute inset-0 opacity-[0.5]" 
        style={{
          backgroundImage: `linear-gradient(to right, white 2px, transparent 2px), 
                            linear-gradient(to bottom, white 2px, transparent 2px)`,
          backgroundSize: '100px 100px'
        }}
      />
    </div>
  )
}
