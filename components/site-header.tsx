'use client'

import { Volume2, VolumeX } from 'lucide-react'

export function SiteHeader({ lang, audioLabel, isSpeaking, onToggleLang, onToggleAudio }: any) {
  return (
    <header className="flex w-full items-center justify-between px-6 py-6 sm:px-10">
      <span className="font-mono text-lg font-medium lowercase tracking-tight text-foreground">aminata</span>
      <div className="flex items-center gap-2">
        <button 
          onClick={onToggleAudio} 
          aria-label={audioLabel} 
          className={`flex h-9 w-9 items-center justify-center rounded-full border transition-colors ${
            isSpeaking ? 'border-ember text-ember bg-ember/10' : 'border-border text-foreground/80 hover:border-ember hover:text-ember'
          }`}
        >
          {isSpeaking ? <Volume2 className="h-4 w-4" /> : <VolumeX className="h-4 w-4" />}
        </button>
        <button onClick={onToggleLang} className="flex h-9 items-center rounded-full border border-border px-1 font-mono text-xs font-medium uppercase transition-colors hover:border-ember">
          <span className={`rounded-full px-2 py-1 ${lang === 'wo' ? 'bg-ember text-primary-foreground' : 'text-foreground/60'}`}>Wo</span>
          <span className={`rounded-full px-2 py-1 ${lang === 'fr' ? 'bg-ember text-primary-foreground' : 'text-foreground/60'}`}>Fr</span>
          <span className={`rounded-full px-2 py-1 ${lang === 'en' ? 'bg-ember text-primary-foreground' : 'text-foreground/60'}`}>En</span>
        </button>
      </div>
    </header>
  )
}
