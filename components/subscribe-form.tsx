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
      {/* Channel toggle - Icônes uniquement */}
      <div
        role="tablist"
        aria-label="Notification channel"
        className="mx-auto mb-4 flex w-fit items-center gap-1 rounded-full border border-border p-1"
      >
        {[
          { id: 'email' as const, label: labels.emailTab, Icon: Mail },
          { id: 'whatsapp' as const, label: labels.whatsappTab, Icon: MessageCircle },
        ].map(({ id, label, Icon }) => (
          <button
            key={id}
            type="button"
            role="tab"
            aria-selected={channel === id}
            aria-label={label}
            onClick={() => {
              setChannel(id)
              setSubmitted(false)
              setValue('')
            }}
            className={`flex h-9 w-9 items-center justify-center rounded-full transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-ring ${
              channel === id
                ? 'bg-ember text-primary-foreground'
                : 'text-foreground/60 hover:text-foreground'
            }`}
          >
            <Icon className="h-4 w-4" aria-hidden="true" />
          </button>
        ))}
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
              {channel === 'email' ? (
                <Mail className="h-4 w-4" aria-hidden="true" />
              ) : (
                <MessageCircle className="h-4 w-4" aria-hidden="true" />
              )}
            </span>
            <input
              id="subscribe-input"
              type={channel === 'email' ? 'email' : 'tel'}
              inputMode={channel === 'email' ? 'email' : 'tel'}
              required
              value={value}
              onChange={(e) => setValue(e.target.value)}
              placeholder={
                channel === 'email'
                  ? labels.emailPlaceholder
                  : labels.whatsappPlaceholder
              }
              className="h-12 w-full rounded-full border border-input bg-white/[0.03] pl-11 pr-4 text-sm text-foreground placeholder:text-muted-foreground focus:border-ember focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            />
          </div>
          <button
            type="submit"
            className="flex h-12 items-center justify-center gap-2 rounded-full bg-ember px-6 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.02] focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            {labels.notify}
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </button>
        </form>
      )}
    </div>
  )
}
