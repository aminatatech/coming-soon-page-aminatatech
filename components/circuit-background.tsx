export function CircuitBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 h-full w-full bg-[#000000]">
      <div 
        className="absolute inset-0 opacity-[0.2]" 
        style={{
          backgroundImage: `linear-gradient(to right, #d1310a 1px, transparent 1px), 
                            linear-gradient(to bottom, #d1310a 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#d1310a]/10 blur-[120px] rounded-full" />
    </div>
  )
}
