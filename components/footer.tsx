type FooterLabels = {
  legal: string
  privacy: string
  rights: string
}

export function Footer({ labels }: { labels: FooterLabels }) {
  return (
    <footer className="w-full py-8 text-center text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
      <div className="flex justify-center gap-6">
        <a href="/mentions-legales" className="hover:text-ember transition-colors">
          {labels.legal}
        </a>
        <a href="/confidentialite" className="hover:text-ember transition-colors">
          {labels.privacy}
        </a>
      </div>
      <p className="mt-6">{labels.rights}</p>
    </footer>
  )
}
