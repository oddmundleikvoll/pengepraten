import Link from 'next/link'

const footerLinks = {
  produkter: [
    { href: '/kredittkort', label: 'Kredittkort' },
    { href: '/lan', label: 'Forbrukslån' },
    { href: '/sparing', label: 'Sparekonto' },
    { href: '/budsjett', label: 'Budsjett' },
  ],
  verktøy: [
    { href: '/verktøy/lånekalkulator', label: 'Lånekalkulator' },
    { href: '/verktøy', label: 'Alle verktøy' },
  ],
  selskapet: [
    { href: '/om-oss', label: 'Om oss' },
    { href: '/kontakt', label: 'Kontakt' },
    { href: '/personvern', label: 'Personvern' },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-stone-900 text-stone-400">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-14 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 bg-teal-700 rounded-lg flex items-center justify-center shadow-soft">
                <span className="text-white font-bold text-sm tracking-tight">P</span>
              </div>
              <span className="font-semibold text-lg text-stone-100 tracking-tight">Pengepraten</span>
            </div>
            <p className="text-sm text-stone-500 leading-relaxed">
              Norges beste nettside for personlig økonomi. Vi hjelper deg å ta smartere økonomiske beslutninger.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-semibold text-stone-200 mb-4 text-sm tracking-tight">Produkter</h3>
            <ul className="space-y-2.5">
              {footerLinks.produkter.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-stone-500 hover:text-stone-200 transition-colors focus-ring rounded">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-stone-200 mb-4 text-sm tracking-tight">Verktøy</h3>
            <ul className="space-y-2.5">
              {footerLinks.verktøy.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-stone-500 hover:text-stone-200 transition-colors focus-ring rounded">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-stone-200 mb-4 text-sm tracking-tight">Selskapet</h3>
            <ul className="space-y-2.5">
              {footerLinks.selskapet.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-stone-500 hover:text-stone-200 transition-colors focus-ring rounded">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-stone-800 mt-10 pt-8 text-center">
          <p className="text-sm text-stone-600">© {new Date().getFullYear()} Pengepraten. Alle rettigheter reservert.</p>
          <p className="mt-2 text-xs text-stone-700 max-w-lg mx-auto leading-relaxed">
            Informasjonen på denne nettsiden er kun for generelle informative formål og utgjør ikke finansiell rådgivning.
          </p>
        </div>
      </div>
    </footer>
  )
}
