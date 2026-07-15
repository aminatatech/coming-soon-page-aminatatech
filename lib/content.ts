export type Lang = 'fr' | 'en'

export interface ContentStructure {
  audioLabel: string
  langLabel: string
  message: { lead: string; highlight1: string; mid: string; highlight2: string; tail: string }
  speech: string
  countdown: { days: string; hours: string; minutes: string; seconds: string }
  form: { placeholder: string; button: string }
  badges: string[]
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
    speech: "Enchantée, je suis Aminata. Merci d'être là. Je suis actuellement en train de concevoir une toute nouvelle expérience. Pour être au courant du lancement, laissez votre email ou votre numéro de téléphone. Merci !",
    countdown: { days: "Jours", hours: "Heures", minutes: "Min", seconds: "Sec" },
    form: { placeholder: "Votre e-mail...", button: "S'abonner" },
    badges: ["Dév Web", "Dév Mobile", "Design", "Data Science", "Business Intelligence"]
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
    speech: "Nice to meet you, I am Aminata. Thank you for being here. I am currently crafting a brand new experience. To stay updated on the launch, please leave your email or phone number. Thank you!",
    countdown: { days: "Days", hours: "Hours", minutes: "Min", seconds: "Sec" },
    form: { placeholder: "Your email...", button: "Notify me" },
    badges: ["Web Dev", "Mobile Dev", "Design", "Data Science", "Business Intelligence"]
  }
}
