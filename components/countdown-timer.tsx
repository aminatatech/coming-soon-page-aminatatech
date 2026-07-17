'use client'

import { useState, useEffect } from 'react'

type CountdownLabels = {
  days: string
  hours: string
  minutes: string
  seconds: string
}

export function CountdownTimer({ labels }: { labels: CountdownLabels }) {
  // On initialise avec tes valeurs par défaut
  const [timeLeft, setTimeLeft] = useState({
    days: 60,
    hours: 0,
    minutes: 0,
    seconds: 0
  })

  useEffect(() => {
    // Calcul de la fin pour garder la logique simple
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        let { days, hours, minutes, seconds } = prev
        
        seconds--
        if (seconds < 0) {
          seconds = 59
          minutes--
        }
        if (minutes < 0) {
          minutes = 59
          hours--
        }
        if (hours < 0) {
          hours = 23
          days--
        }
        return { days, hours, minutes, seconds }
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const units = [
    { value: String(timeLeft.days).padStart(2, '0'), label: labels.days },
    { value: String(timeLeft.hours).padStart(2, '0'), label: labels.hours },
    { value: String(timeLeft.minutes).padStart(2, '0'), label: labels.minutes },
    { value: String(timeLeft.seconds).padStart(2, '0'), label: labels.seconds },
  ]

  return (
    <ul className="flex items-stretch justify-center gap-2 sm:gap-4">
      {units.map((unit, i) => (
        <li key={unit.label} className="flex items-center gap-2 sm:gap-4">
          <div className="flex min-w-[64px] flex-col items-center rounded-lg border border-border bg-white/[0.02] px-3 py-3 sm:min-w-[84px] sm:px-5 sm:py-4">
            <span className="font-mono text-3xl font-semibold tabular-nums text-foreground sm:text-5xl">
              {unit.value}
            </span>
            <span className="mt-1 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground sm:text-xs">
              {unit.label}
            </span>
          </div>
          {i < units.length - 1 && (
            <span
              aria-hidden="true"
              className="font-mono text-2xl font-light text-ember/50 sm:text-4xl"
            >
              :
            </span>
          )}
        </li>
      ))}
    </ul>
  )
}
