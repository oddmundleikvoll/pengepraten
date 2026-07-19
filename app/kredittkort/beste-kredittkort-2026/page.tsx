import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Beste kredittkort juli 2026 — vår komplette guide',
  description: 'Vi har testet og sammenlignet de beste kredittkortene i Norge juli 2026. Oppdag hvilket kort som passer best for deg, med cashback, rentefrie dager og null årsavgift.',
  openGraph: {
    title: 'Beste kredittkort i Norge juli 2026',
    description: 'Komplett guide til de beste kredittkortene i Norge juli 2026. Sammenligning av cashback, renter og fordeler.',
  },
}

export default function BesteKredittkort2026() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-accent-600 to-accent-800 text-white py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <nav className="text-accent-200 text-sm mb-4">
            <Link href="/" className="hover:text-white">Hjem</Link>
            <span className="mx-2">/</span>
            <Link href="/kredittkort" className="hover:text-white">Kredittkort</Link>
            <span className="mx-2">/</span>
            <span>Beste kredittkort juli 2026</span>
          </nav>
          <span className="inline-block px-3 py-1 text-xs font-semibold bg-white/20 rounded-full mb-4">
            Oppdatert juli 2026
          </span>
          <h1 className="text-3xl md:text-4xl font-black mb-4">
            Beste kredittkort i Norge juli 2026
          </h1>
          <p className="text-accent-100 text-lg">
            Vår komplette guide til de beste kredittkortene. Sammenlign cashback, renter,
            og fordeler for å finne kortet som passer deg best.
          </p>
        </div>
      </section>

      {/* Article content */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 py-12 article-content">
        <p className="text-xl text-gray-600 leading-relaxed mb-8">
          Å velge riktig kredittkort kan spare deg for tusenvis av kroner i året.
          Enten du vil ha cashback på dagligvarer, lengst mulig rentefri periode eller
          bare et kort uten årsavgift — vi har sammenlignet de beste.
        </p>

        <h2>Hvordan velge riktig kredittkort?</h2>
        <p>
          Det finnes ingen «beste kredittkort» for alle. Det riktige kortet avhenger av
          hvordan du bruker det. Her er de viktigste faktorene å vurdere:
        </p>
        <ul>
          <li><strong>Årsavgift:</strong> Alle kort på vår toppliste er helt gratis (0 kr)</li>
          <li><strong>Cashback/bonuser:</strong> Coop Mastercard gir 1 % i Coop-butikker, Bank Norwegian 0,5 %</li>
          <li><strong>Nominell rente:</strong> Fra 18,9 % (Instabank) til 24,9 % (Morrow Bank)</li>
          <li><strong>Rentefrie dager:</strong> Fra 0 (Instabank) til 50 (Morrow Bank)</li>
          <li><strong>Forsikringer:</strong> Reise- og kjøpsforsikring på de fleste premium-kort</li>
        </ul>

        <h2>Topp 5 kredittkort i Norge juli 2026</h2>

        <h3>1. TF Bank Mastercard — best allround</h3>
        <p>
          TF Bank Mastercard topper listen i juli 2026. Ingen årsavgift, 22,65 % nominell rente (~26 % effektiv), og hele 43 rentefrie dager. Lave valutapåslag på 1,75 % gjør det godt egnet for reiser.
        </p>

        <h3>2. DNB Mastercard — lavest rente blant standardkort</h3>
        <p>
          DNB Mastercard tilbyr hele 19,2 % nominell rente — den laveste blant vanlige kredittkort uten medlemskap. 0 kr årsavgift og 45 rentefrie dager. Bonus: 1 % drivstoffrabatt og 6 % elbillading.
        </p>

        <h3>3. Bulder Kredittkort (Sparebanken Norge)</h3>
        <p>
          Bulder tilbyr 0 kr årsavgift, 21,95 % nominell rente, og 45 rentefrie dager. Et solid kort fra Sparebanken Norge uten å skille seg ut, men heller ikke skuffer.
        </p>

        <h3>4. Coop Mastercard — best for dagligvarer</h3>
        <p>
          For deg som handler i Coop er dette kortet gull verdt: 1 % ekstra bonus på alle kjøp i Coop-butikker (maks 2.500 kr/år). 0 kr årsavgift, 23 % nominell rente, 45 rentefrie dager.
        </p>

        <h3>5. Morrow Bank Mastercard — lengst rentefri</h3>
        <p>
          Morrow Bank (tidligere Komplett Bank) tilbyr hele 50 rentefrie dager — lengst i Norge. 0 kr årsavgift og gebyrfrie uttak. Rente er 24,9 %, men den lange rentefrie perioden oppveier for de fleste.
        </p>

        <h2>Sammenligningstabell</h2>
        <div className="overflow-x-auto my-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-gray-50">
                <th className="text-left p-3 border">Kort</th>
                <th className="text-left p-3 border">Årsavgift</th>
                <th className="text-left p-3 border">Nominell rente</th>
                <th className="text-left p-3 border">Rentefrie dager</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-3 border font-medium">TF Bank Mastercard</td>
                <td className="p-3 border">0 kr</td>
                <td className="p-3 border">22,65 %</td>
                <td className="p-3 border">43</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="p-3 border font-medium">DNB Mastercard</td>
                <td className="p-3 border">0 kr</td>
                <td className="p-3 border">19,2 %</td>
                <td className="p-3 border">45</td>
              </tr>
              <tr>
                <td className="p-3 border font-medium">Bulder Kredittkort</td>
                <td className="p-3 border">0 kr</td>
                <td className="p-3 border">21,95 %</td>
                <td className="p-3 border">45</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="p-3 border font-medium">Coop Mastercard</td>
                <td className="p-3 border">0 kr</td>
                <td className="p-3 border">23 %</td>
                <td className="p-3 border">45</td>
              </tr>
              <tr>
                <td className="p-3 border font-medium">Morrow Bank Mastercard</td>
                <td className="p-3 border">0 kr</td>
                <td className="p-3 border">24,9 %</td>
                <td className="p-3 border">⭐ 50</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="p-3 border font-medium">Bank Norwegian</td>
                <td className="p-3 border">0 kr</td>
                <td className="p-3 border">~21 %</td>
                <td className="p-3 border">45</td>
              </tr>
              <tr>
                <td className="p-3 border font-medium">Instabank</td>
                <td className="p-3 border">0 kr</td>
                <td className="p-3 border">⭐ 18,9 %</td>
                <td className="p-3 border">0</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2>Ofte stilte spørsmål</h2>

        <h3>Hvilken kredittscore trenger jeg?</h3>
        <p>
          De fleste kredittkort krever en kredittscore på minst 500–600. Premium-kort
          som SAS EuroBonus Premium kan kreve høyere score. Du kan sjekke din kredittscore
          gratis hos kredittopplysningsbyråer som Experian eller Bisnode.
        </p>

        <h3>Kan jeg ha flere kredittkort?</h3>
        <p>
          Ja, det er fullt mulig å ha flere kredittkort. Mange velger å ha ett kort for
          daglig bruk (f.eks. Coop Mastercard for dagligvarer) og ett for reiser (f.eks. Morrow Bank for reiseforsikring og lengst rentefri).
        </p>

        <h3>Hva skjer hvis jeg ikke betaler hele regningen?</h3>
        <p>
          Hvis du ikke betaler hele regningen innen forfallsdato, vil du begynne å
          betale renter. Disse er typisk 18,9–24,9 % per år, så det kan bli dyrt.
          Prøv alltid å betale fullt hvis du kan.
        </p>

        <div className="bg-primary-50 rounded-xl p-6 my-8">
          <h3 className="font-bold text-norsk-dark mb-2">Vår anbefaling</h3>
          <p className="text-gray-700">
            For de fleste nordmenn er <strong>TF Bank Mastercard</strong> det beste
            valget i juli 2026. Ingen årsavgift, god rente, og solid reiseforsikring gjør det til
            en allrounder som fungerer for de fleste. Handler du mye i Coop?
            Vurder å supplere med Coop Mastercard (1 % bonus).
          </p>
        </div>

        <p className="text-sm text-gray-500 mt-8">
          Sist oppdatert: 19. juli 2026. Informasjonen kan endres. Sjekk alltid
          bankenes egne nettsider for gjeldende vilkår før du søker.
        </p>
      </article>
    </>
  )
}
