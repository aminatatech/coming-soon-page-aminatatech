export function CircuitBackground() {
  return (
    <div className="fixed inset-0 -z-50 h-full w-full bg-black">
      {/* Grille explicite - visible en blanc avec 10% d'opacité */}
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), 
                            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}
      />
      
      {/* Un cercle de couleur pour être sûr qu'on voit quelque chose */}
      <div className="absolute top-[20%] left-[20%] w-[400px] h-[400px] bg-orange-500/20 blur-[100px] rounded-full" />
    </div>
  )
}
