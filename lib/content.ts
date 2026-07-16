export type Lang = 'en' | 'fr'

export const content = {
  en: {
    audioLabel: 'Listen to this page',
    langLabel: 'Switch to French',
    // Split so we can highlight the key technical words.
    message: {
      lead: 'Thank you for being here. Currently ',
      highlight1: 'crafting',
      mid: ' a brand new ',
      highlight2: 'experience',
      tail: '. See you very soon, I hope.',
    },
    speech:
      'Thank you for being here. Currently crafting a brand new experience. See you very soon, I hope.',
    countdown: {
      days: 'Days',
      hours: 'Hours',
      minutes: 'Minutes',
      seconds: 'Seconds',
    },
    form: {
      emailTab: 'Email',
      whatsappTab: 'WhatsApp',
      emailPlaceholder: 'you@example.com',
      whatsappPlaceholder: '+1 555 000 0000',
      notify: 'Notify Me',
      success: 'You are on the list. Talk soon.',
    },
    badges: [
      'Business Intelligence',
      'Web & Mobile Engineering',
      'Digital Marketing Architectures',
      'And Much More...',
    ],
  },
  fr: {
    audioLabel: 'Écouter cette page',
    langLabel: "Passer à l'anglais",
    message: {
      lead: "Merci d'être ici. Je suis en train de ",
      highlight1: 'concevoir',
      mid: ' une toute nouvelle ',
      highlight2: 'expérience',
      tail: '. À très bientôt, je l’espère.',
    },
    speech:
      "Merci d'être ici. Je suis en train de concevoir une toute nouvelle expérience. À très bientôt, je l'espère.",
    countdown: {
      days: 'Jours',
      hours: 'Heures',
      minutes: 'Minutes',
      seconds: 'Secondes',
    },
    form: {
      emailTab: 'Email',
      whatsappTab: 'WhatsApp',
      emailPlaceholder: 'vous@exemple.com',
      whatsappPlaceholder: '+33 6 00 00 00 00',
      notify: 'Me Prévenir',
      success: 'Vous êtes sur la liste. À très vite.',
    },
    badges: [
      'Business Intelligence',
      'Ingénierie Web & Mobile',
      'Architectures Marketing Digital',
      'Et Bien Plus...',
    ],
  },
} satisfies Record<Lang, unknown>
