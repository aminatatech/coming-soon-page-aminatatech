type CountdownLabels = {
  days: string
  hours: string
  minutes: string
  seconds: string
}

// Fixed at exactly 60 Days — pure CSS text, no timers, no JS cost.
export function CountdownTimer({ labels }: { labels: CountdownLabels }) {
  const units = [
    { value: '60', label: labels.days },
    { value: '00', label: labels.hours },
    { value: '00', label: labels.minutes },
    { value: '00', label: labels.seconds },
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
