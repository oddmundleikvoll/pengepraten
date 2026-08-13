import Link from 'next/link'
import { ShieldCheck } from 'lucide-react'

/**
 * Nordic Clarity footer (Server Component — uses CSS hover, no event handlers).
 *
 * Three-column layout above the fold (Verktøy / Seksjoner / Kontakt) plus an
 * editorial colophon at the bottom: copy, the "uavhengig / ikke bank"
 * reassurance badge, and last-updated stamp.
 */

const footerLinks = {
  verktøy: [
    { href: '/verktøy', label: 'Alle verktøy' },
    { href: '/verktøy/lånekalkulator', label: 'Forbrukslånskalkulator' },
    { href: '/verktøy/boliglånskalkulator', label: 'Boliglånskalkulator' },
    { href: '/min-boliglån', label: 'Min boliglånsrente' },
    { href: '/budsjett', label: 'Budsjettmal 2026' },
    { href: '/spareutfordring', label: '52-ukers utfordring' },
  ],
  seksjoner: [
    { href: '/kredittkort', label: 'Kredittkort' },
    { href: '/lan', label: 'Forbrukslån' },
    { href: '/boliglan', label: 'Boliglån' },
    { href: '/sparing', label: 'Sparekonto' },
    { href: '/budsjett', label: 'Budsjett' },
    { href: '/bank', label: 'Bank' },
  ],
  kontakt: [
    { href: '/om-oss', label: 'Om Pengepraten' },
    { href: '/kontakt', label: 'Kontakt' },
    { href: '/personvern', label: 'Personvern' },
  ],
}

// Reusable hover style for nav links — CSS-only so it works in Server Components.
const navLinkStyle: React.CSSProperties = {
  color: 'var(--fg)',
  transition: 'color 0.15s ease',
}
const navLinkClass = 'hover:text-[color:var(--accent)]'

export default function Footer() {
  return (
    <footer
      className="mt-24"
      style={{
        background: 'var(--bg)',
        borderTop: '2px solid var(--fg)',
      }}
    >
      <div className="max-w-editorial mx-auto px-5 md:px-10 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link
              href="/"
              className="flex items-baseline gap-0 mb-6"
              aria-label="Pengepraten — forside"
            >
              <span
                className="font-display text-3xl leading-none"
                style={{ color: 'var(--fg)', letterSpacing: '-0.012em' }}
              >
                Penge
              </span>
              <span
                className="font-display italic text-3xl leading-none"
                style={{ color: 'var(--accent)', letterSpacing: '-0.012em' }}
              >
                praten
              </span>
            </Link>
            <p
              className="font-display italic text-lg leading-relaxed max-w-sm"
              style={{ color: 'var(--fg-muted)' }}
            >
              Uavhengig norsk privatøkonomi. Vi tester, sammenligner og forklarer —
              uten bankspråk og uten skjulte agendaer.
            </p>

            {/* Independence badge */}
            <div
              className="inline-flex items-center gap-2 mt-6 px-3 py-2 rounded-md"
              style={{
                background: 'var(--accent-soft)',
                border: '1px solid var(--accent)',
                color: 'var(--accent)',
              }}
            >
              <ShieldCheck className="w-4 h-4" />
              <span className="font-mono text-[10px] uppercase tracking-[0.12em]">
                Uavhengig · Ingen banktilknytning
              </span>
            </div>
          </div>

          {/* Verktøy */}
          <FooterColumn title="Verktøy" links={footerLinks.verktøy} />

          {/* Seksjoner */}
          <FooterColumn title="Seksjoner" links={footerLinks.seksjoner} />

          {/* Kontakt / Om */}
          <FooterColumn title="Kontakt" links={footerLinks.kontakt} />
        </div>

        {/* Colophon */}
        <div
          className="pt-6 flex flex-col md:flex-row md:items-center md:justify-between gap-3"
          style={{ borderTop: '1px solid var(--border)' }}
        >
          <span
            className="font-mono text-[11px] uppercase tracking-[0.10em]"
            style={{ color: 'var(--fg-muted)' }}
          >
            © {new Date().getFullYear()} Pengepraten · Utgitt i Oslo
          </span>
          <span
            className="font-mono text-[11px] uppercase tracking-[0.10em]"
            style={{ color: 'var(--fg-muted)' }}
          >
            Redaksjonen mottar ikke betaling fra banker eller kredittkortutstedere.
          </span>
          <span
            className="font-mono text-[11px] uppercase tracking-[0.10em]"
            style={{ color: 'var(--fg-muted)' }}
          >
            Sist oppdatert 13. august 2026
          </span>
        </div>
      </div>
    </footer>
  )
}

interface FooterColumnProps {
  title: string
  links: { href: string; label: string }[]
}

function FooterColumn({ title, links }: FooterColumnProps) {
  return (
    <div>
      <h4
        className="font-mono text-[11px] uppercase tracking-[0.14em] mb-5 font-normal"
        style={{ color: 'var(--fg-muted)' }}
      >
        {title}
      </h4>
      <ul className="space-y-3">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className={`text-[15px] ${navLinkClass}`}
              style={navLinkStyle}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}