export type Lang = 'wo' | 'fr' | 'en'

export interface ContentStructure {
  audioLabel: string
  langLabel: string // Nom de la langue actuelle affiché sur le bouton
  message: {
    lead: string
    highlight1: string
    mid: string
    highlight2: string
    tail: string
  }
  speech: string
  countdown: {
    days: string
    hours: string
    minutes: string
    seconds: string
  }
  form: {
    placeholder: string
    button: string
  }
  badges: string[]
}

export const content: Record<Lang, ContentStructure> = {
  wo: {
    audioLabel: "Soni",
    langLabel: "Wolof", 
    message: {
      lead: "Dalal ak jamm ! Aminata laa toudou. Jërejëf ci li nga fi tew. Dama nekk di ",
      highlight1: "défarat",
      mid: " sama site internet ngir ",
      highlight2: "yessal ko",
      tail: ". Su ñu sàgnoone, nga bokk ci ñi koy jëkka yëg bu paree. Su dee bëgg nga ko, mën nga fi bàyyi sa emayil walla sa telefon. Butoŋ yi mën a tax nga def loolu, mu ngi ci suuf. Na la jamm sonal."
    },
    speech: "Dalal ak jamm! Aminata laa toudou. Jërejëf ci li nga fi tew. Dama nekk di défarat sama site internet ngir yessal ko. Su ñu sàgnoone, nga bokk ci ñi koy jëkka yëg bu paree. Su dee bëgg nga ko, mën nga fi bàyyi sa emayil walla sa telefon. Butoŋ yi mën a tax nga def loolu, mu ngi ci suuf. Na la jamm sonal.",
    countdown: { days: "Fan", hours: "Waxtu", minutes: "Simis", seconds: "Saas" },
    form: { placeholder: "Sa emayil...", button: "Bàyyi ko fi" },
    badges: ["Web Dev", "Mobile Dev", "Design", "Data Science", "Business Intelligence"]
  },
  fr: {
    audioLabel: "Audio",
    langLabel: "Français",
    message: {
      lead: "Enchantée, je suis Aminata. Merci d'être là. Actuellement en train de ",
      highlight1: "concevoir",
      mid: " une toute nouvelle ",
      highlight2: "expérience",
      tail: ". À très bientôt, je l'espère."
    },
    speech: "Enchantée, je suis Aminata. Merci d'être là. Actuellement en train de concevoir une toute nouvelle expérience. À très bientôt, je l'espère.",
    countdown: { days: "Jours", hours: "Heures", minutes: "Min", seconds: "Sec" },
    form: { placeholder: "Votre e-mail...", button: "S'abonner" },
    badges: ["Dév Web", "Dév Mobile", "Design", "Data Science", "Business Intelligence"]
  },
  en: {
    audioLabel: "Audio",
    langLabel: "English",
    message: {
      lead: "Nice to meet you, I am Aminata. Thank you for being here. Currently ",
      highlight1: "crafting",
      mid: " a brand new ",
      highlight2: "experience",
      tail: ". See you very soon, I hope."
    },
    speech: "Nice to meet you, I am Aminata. Thank you for being here. Currently crafting a brand new experience. See you very soon, I hope.",
    countdown: { days: "Days", hours: "Hours", minutes: "Min", seconds: "Sec" },
    form: { placeholder: "Your email...", button: "Notify me" },
    badges: ["Web Dev", "Mobile Dev", "Design", "Data Science", "Business Intelligence"]
  }
}
