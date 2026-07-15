'use client'

import { Volume2, VolumeX } from 'lucide-react'
import type { Lang } from '@/lib/content'

type SiteHeaderProps = {
  lang: Lang
  audioLabel: string
  langLabel: string
  isSpeaking: boolean
  onToggleLang: () => void
  onToggleAudio: () => void
}

export function SiteHeader({
  lang,
  audioLabel,
  langLabel,
  isSpeaking,
  onToggleLang,
  onToggleAudio,
}: SiteHeaderProps) {
  return (
    <header className="flex w-full items-center justify-between px-6 py-6 sm:px-10">
      <span className="font-mono text-lg font-medium lowercase tracking-tight text-foreground">
        aminata
      </span>

      <div className="flex items-center gap-2">
        {/* Bouton Audio avec synchronisation immédiate */}
        <button
          type="button"
          onClick={onToggleAudio}
          aria-label={audioLabel}
          aria-pressed={isSpeaking}
          className={`flex h-9 w-9 items-center justify-center rounded-full border transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-ring ${
            isSpeaking 
              ? 'border-ember text-ember bg-ember/10' 
              : 'border-border text-foreground/80 hover:border-ember hover:text-ember'
          }`}
        >
          {isSpeaking ? (
            <VolumeX className="h-4 w-4" aria-hidden="true" />
          ) : (
            <Volume2 className="h-4 w-4" aria-hidden="true" />
          )}
        </button>

        {/* Sélecteur contenant En, Fr et Wo */}
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
          <span
            className={`rounded-full px-2 py-1 transition-colors ${
              lang === 'wo'
                ? 'bg-ember text-primary-foreground'
                : 'text-foreground/60'
            }`}
          >
            Wo
          </span>
        </button>
      </div>
    </header>
  )
}
