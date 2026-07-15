'use client'

import { useCallback, useState } from 'react'
import { content, wolofSpeech, type Lang } from '@/lib/content'
import { SiteHeader } from '@/components/site-header'

export function ComingSoon() {
  const [lang, setLang] = useState<Lang>('wo')
  const [isSpeaking, setIsSpeaking] = useState(false) // Initialisé à false (silencieux)
  const t = content[lang]

  const stopSpeech = useCallback(() => {
    window.speechSynthesis.cancel()
    setIsSpeaking(false)
  }, [])

  const startSpeech = useCallback((text: string, l: Lang) => {
    window.speechSynthesis.cancel()
    const utterance = new SpeechSynthesisUtterance(text)
    const voices = window.speechSynthesis.getVoices()
    utterance.lang = l === 'en' ? 'en-US' : 'fr-FR'
    
    // Sélection forcée voix féminine
    const targetVoice = voices.find(v => 
      v.lang.startsWith(l === 'en' ? 'en' : 'fr') && 
      (v.name.toLowerCase().includes('female') || v.name.toLowerCase().includes('google')) &&
      !v.name.toLowerCase().includes('male')
    )
    if (targetVoice) utterance.voice = targetVoice
    
    utterance.rate = l === 'wo' ? 0.74 : 0.95
    utterance.pitch = 1.05
    utterance.onstart = () => setIsSpeaking(true)
    utterance.onend = () => setIsSpeaking(false)
    window.speechSynthesis.speak(utterance)
  }, [])

  const toggleAudio = useCallback(() => {
    if (isSpeaking) {
      stopSpeech()
    } else {
      startSpeech(lang === 'wo' ? wolofSpeech : t.speech, lang)
    }
  }, [isSpeaking, lang, stopSpeech, startSpeech, t.speech])

  const toggleLang = useCallback(() => {
    stopSpeech()
    setLang(p => (p === 'wo' ? 'fr' : p === 'fr' ? 'en' : 'wo'))
  }, [stopSpeech])

  return (
    <main className="relative flex min-h-svh flex-col bg-background">
      <SiteHeader lang={lang} audioLabel="Audio" isSpeaking={isSpeaking} onToggleLang={toggleLang} onToggleAudio={toggleAudio} />
      <div className="flex flex-1 flex-col items-center justify-center px-6 text-center">
        <h1 className="max-w-3xl text-2xl font-medium tracking-tight sm:text-5xl">
          {t.message.lead}
          <span className="font-semibold text-ember">{t.message.highlight1}</span>
          {t.message.mid}
          <span className="font-semibold text-ember">{t.message.highlight2}</span>
          {t.message.tail}
        </h1>
      </div>
    </main>
  )
}
