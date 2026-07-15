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

    // Chargement et sélection stricte d'une voix féminine avec une intonation naturelle
    const voices = window.speechSynthesis.getVoices()
    
    if (textLang === 'en') {
      utterance.lang = 'en-US'
      const englishFemale = voices.find(v => 
        v.lang.startsWith('en') && 
        (v.name.includes('Google') || v.name.includes('Zira') || v.name.includes('Samantha') || v.name.toLowerCase().includes('female'))
      )
      if (englishFemale) utterance.voice = englishFemale
      utterance.rate = 0.95
    } else {
      // Pour le français ou le Wolof, on cherche impérativement une voix féminine douce
      utterance.lang = 'fr-FR'
      
      // On classe les voix féminines françaises par ordre de qualité de diction naturelle
      const frenchFemale = voices.find(v => 
        v.lang.startsWith('fr') && 
        (
          v.name.includes('Amélie') || 
          v.name.includes('Google français') || 
          v.name.includes('Cécile') || 
          v.name.includes('Hortense') || 
          v.name.toLowerCase().includes('female')
        )
      )
      if (frenchFemale) utterance.voice = frenchFemale
      
      // Vitesse ralentie à 0.75 pour le Wolof afin de donner cet accent posé, majestueux et naturel propre à la diction locale
      utterance.rate = textLang === 'wo' ? 0.75 : 0.95
    }

    // Changement d'état immédiat dès le début pour éliminer tout lag visuel
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

  // Déclenchement de l'audio au chargement avec synchronisation immédiate de l'état
  useEffect(() => {
    // On met l'icône en mode actif "Désactiver le son" immédiatement pour correspondre au démarrage audio
    setIsSpeaking(true)

    const timer = setTimeout(() => {
      startSpeech(wolofSpeech, 'wo')
    }, 1000)

    // Si l'utilisateur clique ou change de page avant la fin, on nettoie proprement
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
