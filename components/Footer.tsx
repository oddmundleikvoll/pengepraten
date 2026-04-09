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
    <footer className="bg-norsk-dark text-gray-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-accent-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">P</span>
              </div>
              <span className="font-bold text-xl text-white">Pengepraten</span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              Norges beste nettside for personlig økonomi. Vi hjelper deg å ta smartere økonomiske beslutninger.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-semibold text-white mb-4 text-sm uppercase tracking-wide">Produkter</h3>
            <ul className="space-y-2">
              {footerLinks.produkter.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm hover:text-primary-400 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4 text-sm uppercase tracking-wide">Verktøy</h3>
            <ul className="space-y-2">
              {footerLinks.verktøy.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm hover:text-primary-400 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4 text-sm uppercase tracking-wide">Selskapet</h3>
            <ul className="space-y-2">
              {footerLinks.selskapet.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm hover:text-primary-400 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Pengepraten. Alle rettigheter reservert.</p>
          <p className="mt-1 text-xs">
            Informasjonen på denne nettsiden er kun for generelle informative formål og utgjør ikke finansiell rådgivning.
          </p>
        </div>
      </div>
    </footer>
  )
}
