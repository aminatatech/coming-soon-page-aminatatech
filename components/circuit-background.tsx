'use client'

import { useEffect, useRef } from 'react'

export default function CircuitBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationFrameId: number
    
    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    const draw = () => {
      // Fond semi-transparent pour limiter le redessin total
      ctx.fillStyle = 'rgba(0, 0, 0, 0.1)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Nombre réduit de points pour limiter la charge GPU
      const time = Date.now() * 0.0005
      const numLights = 20 

      for (let i = 0; i < numLights; i++) {
        const x = (Math.sin(time + i) + 1) * canvas.width / 2
        const y = (Math.cos(time * 0.5 + i) + 1) * canvas.height / 2
        
        ctx.fillStyle = 'rgba(59, 130, 246, 0.5)'
        ctx.beginPath()
        ctx.arc(x, y, 1, 0, Math.PI * 2)
        ctx.fill()
      }

      animationFrameId = requestAnimationFrame(draw)
    }

    window.addEventListener('resize', resize)
    resize()
    draw()

    // C'EST CETTE LIGNE QUI EMPÊCHE LA CHAUFFE APRES AVOIR QUITTÉ LA PAGE
    return () => {
      window.removeEventListener('resize', resize)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return <canvas ref={canvasRef} className="fixed inset-0 w-full h-full z-0" />
}
