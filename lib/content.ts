export type Lang = 'fr' | 'en' | 'wo'

export interface ContentStructure {
  audioLabel: string
  langLabel: string
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
  fr: {
    audioLabel: "Wolof",
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
    audioLabel: "Wolof",
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
  },
  wo: {
    audioLabel: "Wolof",
    langLabel: "Wolof",
    message: {
      lead: "Aminata laa toudou. Jërejëf ci li nga fi tew. Dama nekk di ",
      highlight1: "défarat",
      mid: " sama ",
      highlight2: "site internet",
      tail: " bou yess."
    },
    speech: "Dalal ak diam ! Aminata la toudou. Diere dieuf ci li nga fi téw. Dama nek di défarat sama sit intérnet ngir yessal ko. Sou niou sagnone, nga bok ci gni koy dieuka yeug bou paré. Sou dé beug nga ko, mén nga fi bayi sa émail wala sa téléphon. Bouton yi mén na tah nga def lolou, mou ngui ci souf. Na la diam sonal.",
    countdown: { days: "Fan", hours: "Waxtu", minutes: "Min", seconds: "Saas" },
    form: { placeholder: "Sa emayil...", button: "Bindeel" },
    badges: ["Défat Web", "Défat Mobile", "Nataal", "Xam-Xamu Joxe", "BI"]
  }
}

// Version phonétique pour la voix automatique d'accueil
export const wolofSpeech = "Dalal ak diam ! Aminata la toudou. Diere dieuf ci li nga fi téw. Dama nek di défarat sama sit intérnet ngir yessal ko. Sou niou sagnone, nga bok ci gni koy dieuka yeug bou paré. Sou dé beug nga ko, mén nga fi bayi sa émail wala sa téléphon. Bouton yi mén na tah nga def lolou, mou ngui ci souf. Na la diam sonal."
