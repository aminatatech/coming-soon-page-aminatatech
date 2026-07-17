'use client'

import { useCallback, useEffect, useState } from 'react'
import { content, type Lang } from '@/lib/content'
import { CircuitBackground } from '@/components/circuit-background'
import { SiteHeader } from '@/components/site-header'
import { CountdownTimer } from '@/components/countdown-timer'
import { SubscribeForm } from '@/components/subscribe-form'
import { DisciplineBadges } from '@/components/discipline-badges'
import { Footer } from '@/components/footer'

export function ComingSoon() {
  const [lang, setLang] = useState<Lang>('en')
  const [isSpeaking, setIsSpeaking] = useState(false)
  const t = content[lang]

  const stopSpeech = useCallback(() => {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel()
    }
    setIsSpeaking(false)
  }, [])

  const toggleAudio = useCallback(() => {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) return
    if (isSpeaking) {
      stopSpeech()
      return
    }
    const utterance = new SpeechSynthesisUtterance(t.speech)
    utterance.lang = lang === 'en' ? 'en-US' : 'fr-FR'
    utterance.onend = () => setIsSpeaking(false)
    utterance.onerror = () => setIsSpeaking(false)
    window.speechSynthesis.cancel()
    window.speechSynthesis.speak(utterance)
    setIsSpeaking(true)
  }, [isSpeaking, lang, stopSpeech, t.speech])

  useEffect(() => {
    return () => stopSpeech()
  }, [stopSpeech])

  const toggleLang = useCallback(() => {
    stopSpeech()
    setLang((prev) => (prev === 'en' ? 'fr' : 'en'))
  }, [stopSpeech])

  return (
    <main className="relative flex min-h-svh flex-col overflow-hidden bg-background">
      <CircuitBackground />
      <div className="relative z-10 flex flex-1 flex-col">
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
            <span className="animate-text-breathe font-semibold text-ember" style={{ willChange: 'opacity' }}>
              {t.message.highlight1}
            </span>
            {t.message.mid}
            <span className="animate-text-breathe font-semibold text-ember [animation-delay:2s]" style={{ willChange: 'opacity' }}>
              {t.message.highlight2}
            </span>
            {t.message.tail}
          </h1>
          <CountdownTimer labels={t.countdown} />
          <SubscribeForm labels={t.form} />
          <DisciplineBadges badges={t.badges} />
        </div>
        <Footer labels={t.footer} />
      </div>
    </main>
  )
}
