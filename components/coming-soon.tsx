'use client'

import { useCallback, useEffect, useState, useRef } from 'react'
import { content, wolofSpeech, type Lang } from '@/lib/content'
import { CircuitBackground } from '@/components/circuit-background'
import { SiteHeader } from '@/components/site-header'
import { CountdownTimer } from '@/components/countdown-timer'
import { SubscribeForm } from '@/components/subscribe-form'
import { DisciplineBadges } from '@/components/discipline-badges'

export function ComingSoon() {
  const [lang, setLang] = useState<Lang>('fr') // Français par défaut à l'écrit
  const [isSpeaking, setIsSpeaking] = useState(false)
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null)
  const t = content[lang]

  const stopSpeech = useCallback(() => {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel()
    }
    setIsSpeaking(false)
  }, [])

  const startSpeech = useCallback((textToSpeak: string, textLang: Lang) => {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) return

    window.speechSynthesis.cancel()

    const utterance = new SpeechSynthesisUtterance(textToSpeak)
    utteranceRef.current = utterance

    // Sélection dynamique d'une voix féminine douce et naturelle
    const voices = window.speechSynthesis.getVoices()
    
    if (textLang === 'en') {
      utterance.lang = 'en-US'
      const englishFemale = voices.find(v => v.lang.startsWith('en') && (v.name.includes('Google') || v.name.includes('Zira') || v.name.includes('Samantha') || v.name.includes('female')))
      if (englishFemale) utterance.voice = englishFemale
      utterance.rate = 0.95
    } else {
      utterance.lang = 'fr-FR'
      const frenchFemale = voices.find(v => v.lang.startsWith('fr') && (v.name.includes('Amélie') || v.name.includes('Google') || v.name.includes('Hortense') || v.name.includes('Cécile') || v.name.includes('female')))
      if (frenchFemale) utterance.voice = frenchFemale
      
      // Vitesse ralentie pour le Wolof afin de donner une prononciation majestueuse, posée et un accent naturel
      utterance.rate = textLang === 'wo' ? 0.78 : 0.95
    }

    // Synchronisation stricte de l'icône dès le début de la voix
    utterance.onstart = () => setIsSpeaking(true)
    utterance.onend = () => setIsSpeaking(false)
    utterance.onerror = () => setIsSpeaking(false)

    window.speechSynthesis.speak(utterance)
  }, [])

  const toggleAudio = useCallback(() => {
    if (isSpeaking) {
      stopSpeech()
    } else {
      const textToSpeak = lang === 'wo' ? wolofSpeech : t.speech
      startSpeech(textToSpeak, lang)
    }
  }, [isSpeaking, stopSpeech, startSpeech, lang, t.speech])

  const toggleLang = useCallback(() => {
    stopSpeech()
    setLang((prev) => {
      if (prev === 'fr') return 'en'
      if (prev === 'en') return 'wo'
      return 'fr'
    })
  }, [stopSpeech])

  // Déclenchement automatique de l'audio Wolof dès l'arrivée sur le site
  useEffect(() => {
    const timer = setTimeout(() => {
      startSpeech(wolofSpeech, 'wo')
    }, 1200) // Laisse le temps au navigateur de charger les voix système

    return () => {
      clearTimeout(timer)
      stopSpeech()
    }
  }, [startSpeech, stopSpeech])

  return (
    <main className="relative flex min-h-svh flex-col overflow-hidden bg-background">
      <CircuitBackground />

      <div className="relative z-10 flex min-h-svh flex-col">
        <SiteHeader
          lang={lang}
          audioLabel="Wolof"
          langLabel={t.langLabel}
          isSpeaking={isSpeaking}
          onToggleLang={toggleLang}
          onToggleAudio={toggleAudio}
        />

        <div className="flex flex-1 flex-col items-center justify-center gap-10 px-6 py-12 text-center sm:gap-12 sm:px-10">
          <h1 className="max-w-3xl text-balance text-2xl font-medium leading-relaxed tracking-tight sm:text-4xl md:text-5xl">
            {t.message.lead}
            <span
              className="animate-text-breathe font-semibold text-ember"
              style={{ willChange: 'opacity' }}
            >
              {t.message.highlight1}
            </span>
            {t.message.mid}
            <span
              className="animate-text-breathe font-semibold text-ember [animation-delay:2s]"
              style={{ willChange: 'opacity' }}
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
