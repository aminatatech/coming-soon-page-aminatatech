export function DisciplineBadges({ badges }: { badges: string[] }) {
  return (
    <ul className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
      {badges.map((badge, i) => (
        <li key={badge}>
          <span
            className="animate-badge-pulse block rounded-full border border-border px-4 py-2 font-mono text-xs tracking-wide text-foreground/80 sm:text-sm"
            style={{ animationDelay: `${i * 0.8}s`, willChange: 'opacity' }}
          >
            {badge}
          </span>
        </li>
      ))}
    </ul>
  )
}export function DisciplineBadges({ badges }: { badges: string[] }) {
  return (
    <ul className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
      {badges.map((badge, i) => (
        <li key={badge}>
          <span
            className="animate-badge-pulse block rounded-full border border-border px-4 py-2 font-mono text-xs tracking-wide text-foreground/80 sm:text-sm"
            style={{ animationDelay: `${i * 0.8}s`, willChange: 'opacity' }}
          >
            {badge}
          </span>
        </li>
      ))}
    </ul>
  )
}
