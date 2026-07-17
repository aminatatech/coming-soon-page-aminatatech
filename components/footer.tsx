export function Footer() {
  const links = [
    { name: 'Mentions Légales', href: '/mentions-legales' },
    { name: 'Confidentialité', href: '/confidentialite' },
    { name: 'CGV', href: '/cgv' },
    { name: 'Contact', href: '/contact' },
  ]

  return (
    <footer className="mt-auto w-full py-8 text-center">
      <div className="mx-auto flex max-w-2xl flex-wrap justify-center gap-6">
        {links.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className="text-xs font-medium text-foreground/60 transition-colors hover:text-ember"
          >
            {link.name}
          </a>
        ))}
      </div>
      <p className="mt-6 text-[10px] text-foreground/40">
        © {new Date().getFullYear()} Aminata. Tous droits réservés.
      </p>
    </footer>
  )
}
