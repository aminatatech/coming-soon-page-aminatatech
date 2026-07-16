export type Lang = 'fr' | 'en'

export interface ContentStructure {
  audioLabel: string
  langLabel: string
  message: { lead: string; highlight1: string; mid: string; highlight2: string; tail: string }
  countdown: { days: string; hours: string; minutes: string; seconds: string }
  form: { placeholder: string; button: string }
  badges: string[]
  moreBtn: string 
}

export const content: Record<Lang, ContentStructure> = {
  fr: {
    audioLabel: "Audio",
    langLabel: "Français",
    message: {
      lead: "En train de ",
      highlight1: "concevoir",
      mid: " une toute nouvelle ",
      highlight2: "expérience",
      tail: ". À très bientôt !"
    },
    countdown: { days: "Jours", hours: "Heures", minutes: "Min", seconds: "Sec" },
    form: { placeholder: "Votre e-mail...", button: "S'abonner" },
    badges: ["Dév Web & Mobile", "Marketing Digital", "Data Science"],
    moreBtn: "Et bien d'autres..."
  },
  en: {
    audioLabel: "Audio",
    langLabel: "English",
    message: {
      lead: "Crafting a ",
      highlight1: "brand new",
      mid: " ",
      highlight2: "experience",
      tail: ". Stay in the know!"
    },
    countdown: { days: "Days", hours: "Hours", minutes: "Min", seconds: "Sec" },
    form: { placeholder: "Your email...", button: "Notify me" },
    badges: ["Web & Mobile Dev", "Digital Marketing", "Data Science"],
    moreBtn: "And much more..."
  }
}
