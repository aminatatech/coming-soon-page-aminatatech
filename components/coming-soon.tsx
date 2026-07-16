'use client'

import { useState } from 'react'
import { content, type Lang } from '@/lib/content'
import { SiteHeader } from '@/components/site-header'
import { CountdownTimer } from '@/components/countdown-timer'
import { SubscribeForm } from '@/components/subscribe-form'
import { DisciplineBadges } from '@/components/discipline-badges'
import { CircuitBackground } from '@/components/circuit-background'

export function ComingSoon() {
  const [lang, setLang] = useState<Lang>('fr')
  const t = content[lang]

  return (
    // Suppression de bg-background ici pour laisser CircuitBackground gérer le fond
    <main className="relative flex min-h-svh flex-col overflow-hidden">
      <CircuitBackground />
      
      <div className="relative z-10 flex min-h-svh flex-col">
        <header className="flex w-full items-center justify-between px-10 py-8">
          <span className="font-mono text-lg font-medium lowercase">aminata</span>
          <button 
            onClick={() => setLang(p => (p === 'fr' ? 'en' : 'fr'))} 
            className="rounded-full border border-border px-4 py-1 font-mono text-xs uppercase hover:bg-border/20 transition-colors"
          >
            {lang === 'fr' ? 'Français' : 'English'}
          </button>
        </header>
        
        <div className="flex flex-1 flex-col items-center justify-center gap-16 px-6 py-12 text-center">
          <h1 className="max-w-3xl text-2xl font-medium tracking-tight sm:text-5xl">
            {t.message.lead}
            <span className="text-ember">{t.message.highlight1}</span>
            {t.message.mid}
            <span className="text-ember">{t.message.highlight2}</span>
            {t.message.tail}
          </h1>

          <CountdownTimer labels={t.countdown} />
          
          <div className="flex w-full max-w-sm flex-col gap-4">
            <SubscribeForm labels={t.form} />
            {/* Ajout des infos de contact */}
            <div className="mt-2 flex flex-col gap-1 font-mono text-[10px] uppercase tracking-widest opacity-60">
              <p>Email: contact@aminata.com</p>
              <p>WhatsApp: +221 77 000 00 00</p>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            <DisciplineBadges badges={t.badges} />
            <button className="rounded-full border border-dashed border-ember/50 px-4 py-1.5 text-xs font-medium text-ember hover:bg-ember/10 transition-colors">
              {t.moreBtn}
            </button>
          </div>
        </div>
      </div>
    </main>
  )
}
