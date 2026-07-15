'use client'

import { useCallback, useEffect, useState } from 'react'
import { content, type Lang } from '@/lib/content'
import { CircuitBackground } from '@/components/circuit-background'
import { SiteHeader } from '@/components/site-header'
import { CountdownTimer } from '@/components/countdown-timer'
import { SubscribeForm } from '@/components/subscribe-form'
import { DisciplineBadges } from '@/components/discipline-badges'

export function ComingSoon() {
  const [lang, setLang] = useState<Lang>('wo') // Wolof par défaut
  const [isSpeaking, setIsSpeaking] = useState(false) // Audio désactivé (mute) par défaut pour éviter les blocages de navigateur
  const t = content[lang]

  const stopSpeech = useCallback(() => {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel()
    }
    setIsSpeaking(false)
  }, [])

  const startSpeech = useCallback((text: string, currentLang: Lang) => {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) return

    window.speechSynthesis.cancel()
    const utterance = new SpeechSynthesisUtterance(text)

    // Configuration optimale de la langue de synthèse
    if (currentLang === 'wo') {
      utterance.lang = 'fr-FR' // Utilisation d'une base FR pour que la lecture du wolof ait l'accentuation naturelle locale
      utterance.rate = 0.85   // Légèrement ralenti pour donner un ton posé et naturel
    } else if (currentLang === 'fr') {
      utterance.lang = 'fr-FR'
      utterance.rate = 0.95
    } else {
      utterance.lang = 'en-US'
      utterance.rate = 0.95
    }

    utterance.onend = () => setIsSpeaking(false)
    utterance.onerror = () => setIsSpeaking(false)

    window.speechSynthesis.speak(utterance)
    setIsSpeaking(true)
  }, [])

  const toggleAudio = useCallback(() => {
    if (isSpeaking) {
      stopSpeech()
    } else {
      startSpeech(t.speech, lang)
    }
  }, [isSpeaking, lang, stopSpeech, startSpeech, t.speech])

  // Cycle de changement de langue : Wolof -> Français -> Anglais -> Wolof
  const toggleLang = useCallback(() => {
    stopSpeech()
    setLang((prev) => {
      if (prev === 'wo') return 'fr'
      if (prev === 'fr') return 'en'
      return 'wo'
    })
  }, [stopSpeech])

  // Si l'audio tourne et qu'on change de langue, on enchaîne directement l'audio dans la nouvelle langue
  useEffect(() => {
    if (isSpeaking) {
      startSpeech(t.speech, lang)
    }
  }, [lang])

  useEffect(() => {
    return () => stopSpeech()
  }, [stopSpeech])

  return (
    <main className="relative flex min-h-svh flex-col overflow-hidden bg-background">
      <CircuitBackground />

      <div className="relative z-10 flex min-h-svh flex-col">
        <SiteHeader
          lang={lang}
          audioLabel={t.audioLabel}
          langLabel={t.langLabel}
          isSpeaking={isSpeaking}
          onToggleLang={toggleLang}
          onToggleAudio={toggleAudio}
        />

        <div className="flex flex-1 flex-col items-center justify-center gap-10 px-6 py-12 text-center sm:gap-12 sm:px-10">
          <h1 className="max-w-3xl text-balance text-2xl font-medium leading-relaxed tracking-tight sm:text-4xl md:text-5xl">
            {t.message.lead}
            <span
              className="animate-text-breathe font-semibold text-ember inline-block transition-transform duration-500"
              style={{ willChange: 'opacity, transform' }}
            >
              {t.message.highlight1}
            </span> 
            {t.message.mid}
            <span
              className="animate-text-breathe font-semibold text-ember inline-block transition-transform duration-500 [animation-delay:2s]"
              style={{ willChange: 'opacity, transform' }}
            >
              {t.message.highlight2}
            </span>
            {t.message.tail}
          </h1>

          <CountdownTimer labels={t.countdown} />

          <SubscribeForm labels={t.form} />

          <DisciplineBadges badges={t.badges} />
        </div>
      </div>
    </main>
  )
}
