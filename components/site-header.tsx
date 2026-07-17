'use client'

import type { Lang } from '@/lib/content'

type SiteHeaderProps = {
  lang: Lang
  langLabel: string
  onToggleLang: () => void
}

export function SiteHeader({
  lang,
  langLabel,
  onToggleLang,
}: SiteHeaderProps) {
  return (
    <header className="flex w-full items-center justify-between px-6 py-6 sm:px-10">
      {/* Strictly lowercase, no punctuation. */}
      <span className="font-mono text-lg font-medium lowercase tracking-tight text-foreground">
        aminata
      </span>

      <div className="flex items-center gap-2">
        <button
          type="button"
          onClick={onToggleLang}
          aria-label={langLabel}
          className="flex h-9 items-center rounded-full border border-border px-1 font-mono text-xs font-medium uppercase transition-colors hover:border-ember focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          <span
            className={`rounded-full px-2 py-1 transition-colors ${
              lang === 'en'
                ? 'bg-ember text-primary-foreground'
                : 'text-foreground/60'
            }`}
          >
            En
          </span>
          <span
            className={`rounded-full px-2 py-1 transition-colors ${
              lang === 'fr'
                ? 'bg-ember text-primary-foreground'
                : 'text-foreground/60'
            }`}
          >
            Fr
          </span>
        </button>
      </div>
    </header>
  )
}
