'use client'

import { useCallback, useEffect, useState } from 'react'
import { content, type Lang } from '@/lib/content'
import { SiteHeader } from '@/components/site-header'
import { CountdownTimer } from '@/components/countdown-timer'
import { SubscribeForm } from '@/components/subscribe-form'
import { DisciplineBadges } from '@/components/discipline-badges'
import { CircuitBackground } from '@/components/circuit-background'

export function ComingSoon() {
  const [lang, setLang] = useState<Lang>('fr')
  const [isSpeaking, setIsSpeaking] = useState(false) // Désactivé par défaut
  const t = content[lang]

  // Fonction pour arrêter la synthèse vocale
  const stopSpeech = useCallback(() => {
    if (typeof window !== 'undefined' && window.speechSynthesis) {
      window.speechSynthesis.cancel()
    }
    setIsSpeaking(false)
  }, [])

  // Fonction pour démarrer la synthèse avec ciblage de voix claire/féminine
  const startSpeech = useCallback((text: string, l: Lang) => {
    if (typeof window === 'undefined' || !window.speechSynthesis) return

    window.speechSynthesis.cancel() // On nettoie les anciennes lectures
    
    const utterance = new SpeechSynthesisUtterance(text)
    utterance.lang = l === 'fr' ? 'fr-FR' : 'en-US'
    utterance.rate = 0.95 // Vitesse naturelle et posée
    utterance.pitch = 1.05 // Pitch légèrement ajusté pour un timbre féminin naturel

    // Recherche et filtrage d'une voix de haute qualité (Neural / Google / Microsoft)
    const voices = window.speechSynthesis.getVoices()
    const targetVoice = voices.find(v => 
      v.lang.startsWith(l) && 
      (v.name.toLowerCase().includes('female') || 
       v.name.toLowerCase().includes('google') || 
       v.name.toLowerCase().includes('natural') || 
       v.name.toLowerCase().includes('neural')) &&
      !v.name.toLowerCase().includes('male')
    )

    if (targetVoice) {
      utterance.voice = targetVoice
    }

    utterance.onstart = () => setIsSpeaking(true)
    utterance.onend = () => setIsSpeaking(false)
    utterance.onerror = () => setIsSpeaking(false)

    window.speechSynthesis.speak(utterance)
  }, [])

  // Gestion du clic sur le bouton Audio
  const toggleAudio = useCallback(() => {
    if (isSpeaking) {
      stopSpeech()
    } else {
      startSpeech(t.speech, lang)
    }
  }, [isSpeaking, lang, stopSpeech, startSpeech, t.speech])

  // Changement de langue (coupe le son en cours)
  const toggleLang = useCallback(() => {
    stopSpeech()
    setLang(p => (p === 'fr' ? 'en' : 'fr'))
  }, [stopSpeech])

  // Charge les voix du navigateur dès le départ (obligatoire pour Chrome/Safari)
  useEffect(() => {
    if (typeof window !== 'undefined' && window.speechSynthesis) {
      window.speechSynthesis.getVoices()
    }
    return () => {
      stopSpeech()
    }
  }, [stopSpeech])

  return (
    <main className="relative flex min-h-svh flex-col bg-background overflow-hidden">
      {/* Ton fond graphique */}
      <CircuitBackground />
      
      <div className="relative z-10 flex min-h-svh flex-col">
        {/* En-tête */}
        <SiteHeader 
          lang={lang} 
          audioLabel="Audio" 
          isSpeaking={isSpeaking} 
          onToggleLang={toggleLang} 
          onToggleAudio={toggleAudio} 
        />
        
        {/* Contenu principal */}
        <div className="flex flex-1 flex-col items-center justify-center gap-10 px-6 py-12 text-center">
          <h1 className="max-w-3xl text-2xl font-medium tracking-tight sm:text-5xl">
            {t.message.lead}
            <span className="font-semibold text-ember">{t.message.highlight1}</span>
            {t.message.mid}
            <span className="font-semibold text-ember">{t.message.highlight2}</span>
            {t.message.tail}
          </h1>

          {/* Chronomètre */}
          <CountdownTimer labels={t.countdown} />

          {/* Formulaire d'inscription */}
          <SubscribeForm labels={t.form} />

          {/* Badges de disciplines */}
          <DisciplineBadges badges={t.badges} />
        </div>
      </div>
    </main>
  )
}
