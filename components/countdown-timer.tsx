'use client'

import { useEffect, useState } from 'react'

interface CountdownTimerProps {
  labels: {
    days: string
    hours: string
    minutes: string
    seconds: string
  }
}

export function CountdownTimer({ labels }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState({ days: 60, hours: 0, minutes: 0, seconds: 0 })

  useEffect(() => {
    const STORAGE_KEY = 'aminata_portfolio_target_date'
    let targetTime = localStorage.getItem(STORAGE_KEY)

    if (!targetTime) {
      const targetDate = new Date()
      targetDate.setDate(targetDate.getDate() + 60)
      targetTime = targetDate.getTime().toString()
      localStorage.setItem(STORAGE_KEY, targetTime)
    }

    const targetTimestamp = parseInt(targetTime, 10)

    const updateTimer = () => {
      const now = new Date().getTime()
      const difference = targetTimestamp - now

      if (difference <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
        clearInterval(interval)
        return
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24))
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((difference % (1000 * 60)) / 1000)

      setTimeLeft({ days, hours, minutes, seconds })
    }

    updateTimer()
    const interval = setInterval(updateTimer, 1000)

    return () => clearInterval(interval)
  }, [])

  const timeBlocks = [
    { value: timeLeft.days, label: labels.days },
    { value: timeLeft.hours, label: labels.hours },
    { value: timeLeft.minutes, label: labels.minutes },
    { value: timeLeft.seconds, label: labels.seconds },
  ]

  return (
    <div className="flex gap-4 justify-center items-center font-mono text-xl md:text-3xl text-ember">
      {timeBlocks.map((block, i) => (
        <div key={i} className="flex items-center gap-4">
          <div className="flex flex-col items-center">
            <span className="tabular-nums font-bold min-w-[2ch] text-center">
              {String(block.value).padStart(2, '0')}
            </span>
            <span className="text-[10px] uppercase tracking-wider text-muted-foreground mt-1">
              {block.label}
            </span>
          </div>
          {i < timeBlocks.length - 1 && (
            <span className="text-muted-foreground/30 self-start mt-1">:</span>
          )}
        </div>
      ))}
    </div>
  )
}
