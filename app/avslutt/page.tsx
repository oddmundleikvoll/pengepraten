import type { Metadata } from 'next'
import Link from 'next/link'
import UnsubscribeForm from '@/components/UnsubscribeForm'

export const metadata: Metadata = {
  title: 'Avslutt e-postabonnement',
  description: 'Meld deg av e-postoppdateringer fra Pengepraten.',
  robots: { index: false, follow: false },
}

export default function AvsluttPage() {
  return (
    <section className="max-w-xl mx-auto px-4 sm:px-6 py-16 md:py-24">
      <nav className="font-mono text-xs uppercase tracking-wider text-ink-muted mb-6">
        <Link href="/" className="hover:text-forest">Hjem</Link>
        <span className="mx-2">/</span>
        <span>Avslutt abonnement</span>
      </nav>
      <div className="bg-paper-surface border border-border rounded-2xl p-7 md:p-9">
        <h1 className="font-display text-3xl font-medium text-ink mb-3">Avslutt e-postabonnement</h1>
        <p className="text-ink-muted leading-relaxed mb-7">
          Skriv inn e-postadressen din. Vi sender deg en bekreftelseslenke før abonnementet avsluttes.
        </p>
        <UnsubscribeForm />
      </div>
    </section>
  )
}
