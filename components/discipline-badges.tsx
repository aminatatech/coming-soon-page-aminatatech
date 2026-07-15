'use client'

interface DisciplineBadgesProps {
  badges: string[]
}

export function DisciplineBadges({ badges }: DisciplineBadgesProps) {
  return (
    <div className="flex flex-wrap justify-center gap-2 max-w-2xl">
      {badges.map((badge, index) => (
        <span
          key={index}
          className="rounded-full border border-muted-foreground/20 bg-muted/30 px-3 py-1 text-xs font-medium text-muted-foreground backdrop-blur-sm transition-all duration-300 hover:border-ember/40 hover:text-ember"
        >
          {badge}
        </span>
      ))}
    </div>
  )
}
