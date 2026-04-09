import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Personvern — Pengepraten',
  description: 'Personvernerklæring for Pengepraten. Les om hvordan vi håndterer dine data.',
}

export default function PersonvernPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-norsk-dark via-norsk-blue to-accent-700 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <nav className="text-gray-300 text-sm mb-4">
            <Link href="/" className="hover:text-white">Hjem</Link>
            <span className="mx-2">/</span>
            <span>Personvern</span>
          </nav>
          <h1 className="text-3xl md:text-5xl font-black mb-4">Personvern</h1>
          <p className="text-xl text-gray-300">
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
          <li><strong>E-postadresse:</strong> Når du registrerer deg for å laste ned våre maler</li>
          <li><strong>Anonymiserte bruksdata:</strong> For å forbedre nettsiden (via analytics)</li>
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
          Vi bruker cookies for å forbedre brukeropplevelsen og analysere trafikk. 
          Du kan når som helst endre cookie-innstillingene i nettleseren din.
        </p>

        <h2>Tredjeparter</h2>
        <p>
          Vi selger ikke din informasjon til tredjeparter. Vi kan dele anonymiserte 
          data med våre analytics-leverandører for å forbedre nettsiden.
        </p>

        <h2>Kontakt oss</h2>
        <p>
          Har du spørsmål om personvern? Kontakt oss på{' '}
          <a href="mailto:kontakt@pengepraten.no">kontakt@pengepraten.no</a>.
        </p>

        <p className="text-sm text-gray-500 mt-8">
          Sist oppdatert: 9. april 2026
        </p>
      </section>
    </>
  )
}
