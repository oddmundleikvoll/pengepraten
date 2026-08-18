import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Personvern',
  description: 'Personvernerklæring for Pengepraten. Les om hvordan vi håndterer dine data.',
}

export default function PersonvernPage() {
  return (
    <>
      {/* Hero — Nordic Clarity editorial */}
      <section className="bg-paper text-ink py-16 border-b border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <nav className="font-mono text-xs uppercase tracking-wider text-ink-muted mb-6">
            <Link href="/" className="hover:text-forest transition-colors">Hjem</Link>
            <span className="mx-2 text-border-strong">/</span>
            <span className="text-ink">Personvern</span>
          </nav>
          <h1 className="text-3xl md:text-5xl font-medium font-display leading-[1.08] mb-4">Personvern</h1>
          <p className="text-xl text-ink-muted">
            Din personlige informasjon er viktig for oss.
          </p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 py-12 article-content">
        <h2>Personvernerklæring</h2>
        <p>
          Pengepraten er opptatt av å beskytte ditt personvern. Denne erklæringen 
          forklarer hvordan vi samler inn, bruker og beskytter din informasjon.
        </p>

        <h2>Hvilken informasjon samler vi inn?</h2>
        <p>
          Vi samler kun inn informasjon som er nødvendig for å tilby våre tjenester:
        </p>
        <ul>
          <li><strong>E-postadresse:</strong> Når du ber om en mal, ukeplan eller melder deg på rentevarsling</li>
          <li><strong>Bruksdata:</strong> Dersom du samtykker til analyse, måler vi sidevisninger og bruk av verktøy</li>
        </ul>

        <h2>Hvordan bruker vi informasjonen?</h2>
        <p>
          Vi bruker din informasjon til:
        </p>
        <ul>
          <li>Å sende deg nedlastingslenker og relevante oppdateringer</li>
          <li>Å forbedre våre tjenester og nettside</li>
          <li>Å svare på henvendelser</li>
        </ul>

        <h2>Dine rettigheter</h2>
        <p>
          Du har rett til å:
        </p>
        <ul>
          <li>Få innsyn i hvilke data vi har om deg</li>
          <li>Be om retting av feilaktige data</li>
          <li>Be om sletting av dine data</li>
          <li>Avslutte abonnement på e-poster når som helst</li>
        </ul>

        <h2>Cookies</h2>
        <p>
          Analyse er avslått som standard. Google Analytics aktiveres først når du
          velger «Tillat analyse» i samtykkebanneret. Valget lagres lokalt i nettleseren din.
          Fremgang i spareutfordringen og opplysninger i enkelte kalkulatorer lagres også
          lokalt på enheten din og sendes ikke til Pengepraten.
        </p>

        <h2>Tredjeparter</h2>
        <p>
          Vi selger ikke informasjonen din. Resend brukes til å registrere e-postadresser
          og sende e-postene du ber om. Google Analytics brukes til samtykkebasert analyse.
        </p>

        <h2>Kontakt oss</h2>
        <p>
          Har du spørsmål om personvern? Kontakt oss på{' '}
          <a href="mailto:kontakt@pengepraten.no">kontakt@pengepraten.no</a>.
        </p>
        <p>
          Du kan også <Link href="/avslutt">avslutte e-postabonnementet her</Link>.
        </p>

        <p className="text-sm text-gray-500 mt-8">
          Sist oppdatert: 18. august 2026
        </p>
      </section>
    </>
  )
}
