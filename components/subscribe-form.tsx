'use client'

import { useState } from 'react'
import { Mail, MessageCircle, ArrowRight, Check } from 'lucide-react'

type FormLabels = {
  emailTab: string
  whatsappTab: string
  emailPlaceholder: string
  whatsappPlaceholder: string
  notify: string
  success: string
}

type Channel = 'email' | 'whatsapp'

export function SubscribeForm({ labels }: { labels: FormLabels }) {
  const [channel, setChannel] = useState<Channel>('email')
  const [value, setValue] = useState('')
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!value.trim()) return
    setSubmitted(true)
  }

  return (
    <div className="w-full max-w-md">
      {/* Channel toggle avec texte visible */}
      <div
        role="tablist"
        aria-label="Notification channel"
        className="mx-auto mb-6 flex w-fit items-center gap-2 rounded-full border border-border p-1"
      >
        <button
          type="button"
          role="tab"
          aria-selected={channel === 'email'}
          onClick={() => { setChannel('email'); setSubmitted(false); setValue(''); }}
          className={`flex items-center gap-2 rounded-full px-5 py-2 text-sm font-medium transition-colors ${
            channel === 'email' ? 'bg-ember text-primary-foreground' : 'text-foreground/60 hover:text-foreground'
          }`}
        >
          <Mail className="h-4 w-4" aria-hidden="true" />
          Email
        </button>

        <button
          type="button"
          role="tab"
          aria-selected={channel === 'whatsapp'}
          onClick={() => { setChannel('whatsapp'); setSubmitted(false); setValue(''); }}
          className={`flex items-center gap-2 rounded-full px-5 py-2 text-sm font-medium transition-colors ${
            channel === 'whatsapp' ? 'bg-ember text-primary-foreground' : 'text-foreground/60 hover:text-foreground'
          }`}
        >
          <MessageCircle className="h-4 w-4" aria-hidden="true" />
          WhatsApp
        </button>
      </div>

      {submitted ? (
        <div className="flex items-center justify-center gap-2 rounded-full border border-ember/40 bg-ember-soft px-5 py-3 text-sm text-foreground">
          <Check className="h-4 w-4 text-ember" aria-hidden="true" />
          {labels.success}
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:flex-row">
          <div className="relative flex-1">
            <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground">
              {channel === 'email' ? <Mail className="h-4 w-4" /> : <MessageCircle className="h-4 w-4" />}
            </span>
            <input
              id="subscribe-input"
              type={channel === 'email' ? 'email' : 'tel'}
              required
              value={value}
              onChange={(e) => setValue(e.target.value)}
              placeholder={channel === 'email' ? labels.emailPlaceholder : labels.whatsappPlaceholder}
              className="h-12 w-full rounded-full border border-input bg-white/[0.03] pl-11 pr-4 text-sm text-foreground placeholder:text-muted-foreground focus:border-ember focus:outline-none"
            />
          </div>
          <button
            type="submit"
            className="flex h-12 items-center justify-center gap-2 rounded-full bg-ember px-6 text-sm font-semibold text-primary-foreground hover:scale-[1.02] transition-transform"
          >
            {labels.notify}
            <ArrowRight className="h-4 w-4" />
          </button>
        </form>
      )}
    </div>
  )
}
