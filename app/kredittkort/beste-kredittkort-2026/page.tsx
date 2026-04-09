import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Beste kredittkort i Norge 2026 — vår komplette guide',
  description: 'Vi har testet og sammenlignet alle de mest populære kredittkortene i Norge. Oppdag hvilket kort som passer best for deg, med cashback, reiseforsikring og null årsavgift.',
  openGraph: {
    title: 'Beste kredittkort i Norge 2026',
    description: 'Komplett guide til alle populære kredittkort i Norge. Sammenligning av cashback, renter og fordeler.',
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
            <span>Beste kredittkort 2026</span>
          </nav>
          <span className="inline-block px-3 py-1 text-xs font-semibold bg-white/20 rounded-full mb-4">
            Oppdatert januar 2026
          </span>
          <h1 className="text-3xl md:text-4xl font-black mb-4">
            Beste kredittkort i Norge 2026
          </h1>
          <p className="text-accent-100 text-lg">
            Vår komplette guide til alle populære kredittkort. Sammenlign cashback, renter, 
            og fordeler for å finne kortet som passer deg best.
          </p>
        </div>
      </section>

      {/* Article content */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 py-12 article-content">
        <p className="text-xl text-gray-600 leading-relaxed mb-8">
          Å velge riktig kredittkort kan spare deg for tusenvis av kroner i året. 
          Enten du vil ha cashback på dagligvarer, reiseforsikring på ferien, eller 
          bare et kort uten årsavgift — vi har testet dem alle.
        </p>

        <h2>Hvordan velge riktig kredittkort?</h2>
        <p>
          Det finnes ingen «beste kredittkort» for alle. Det riktige kortet avhenger av 
          hvordan du bruker det. Her er de viktigste faktorene å vurdere:
        </p>
        <ul>
          <li><strong>Årsavgift:</strong> Noen kort er helt gratis, andre koster opptil 2.000 kr i året</li>
          <li><strong>Cashback/bonuser:</strong> Hvor mye får du tilbake på kjøpene dine?</li>
          <li><strong>Rente:</strong> Hva koster det hvis du ikke betaler hele regningen?</li>
          <li><strong>Forsikringer:</strong> Reiseforsikring, avbestillingsforsikring, kjøpsforsikring</li>
          <li><strong>Aksept:</strong> Fungerer kortet i utlandet? På nett?</li>
        </ul>

        <h2>Topp 5 kredittkort i Norge 2026</h2>
        
        <h3>1. Bank Norwegian kredittkort</h3>
        <p>
          Bank Norwegian har lenge vært en favoritt blant norske forbrukere, og det er 
          ikke vanskelig å forstå hvorfor. Med opptil 1% cashback på alle kjøp og ingen 
          årsavgift, er dette et solid valg for de fleste.
        </p>
        <p>
          <strong>Fordeler:</strong> Ingen årsavgift, opptil 1% cashback, reiseforsikring inkludert, 
          gebyrfrie uttak i utlandet.
        </p>
        <p>
          <strong>Ulemper:</strong> Krever god kredittscore, cashback begrenses til 3.000 kr/år.
        </p>

        <h3>2. Komplett Bank Mastercard</h3>
        <p>
          Komplett Bank tilbyr et konkurransedyktig kredittkort med god cashback og 
          fleksible betalingsmuligheter. Spesielt attraktivt hvis du handler mye på nett.
        </p>

        <h3>3. SAS EuroBonus Premium</h3>
        <p>
          For deg som reiser mye med SAS, kan dette kortet være gull verdt. Du tjener 
          EuroBonus-poeng på alle kjøp, og får tilgang til lounger og andre reisefordeler.
        </p>

        <h3>4. Trumf Visa</h3>
        <p>
          Handler du mye på Kiwi, Meny, Spar eller Joker? Da er Trumf Visa et opplagt valg. 
          Du får Trumf-bonus på alle kjøp, og ekstra bonus i Trumf-butikkene.
        </p>

        <h3>5. DNB Mastercard</h3>
        <p>
          DNBs kredittkort er et trygt valg for deg som allerede er DNB-kunde. Ingen årsavgift 
          og god integrasjon med DNBs nettbank og app.
        </p>

        <h2>Sammenligningstabell</h2>
        <div className="overflow-x-auto my-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-gray-50">
                <th className="text-left p-3 border">Kort</th>
                <th className="text-left p-3 border">Årsavgift</th>
                <th className="text-left p-3 border">Cashback</th>
                <th className="text-left p-3 border">Reiseforsikring</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-3 border font-medium">Bank Norwegian</td>
                <td className="p-3 border">0 kr</td>
                <td className="p-3 border">Opptil 1%</td>
                <td className="p-3 border">Ja</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="p-3 border font-medium">Komplett Bank</td>
                <td className="p-3 border">0 kr</td>
                <td className="p-3 border">Opptil 1%</td>
                <td className="p-3 border">Ja</td>
              </tr>
              <tr>
                <td className="p-3 border font-medium">SAS EuroBonus Premium</td>
                <td className="p-3 border">1.995 kr</td>
                <td className="p-3 border">EuroBonus-poeng</td>
                <td className="p-3 border">Ja</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="p-3 border font-medium">Trumf Visa</td>
                <td className="p-3 border">0 kr</td>
                <td className="p-3 border">1% (2% i Trumf-butikker)</td>
                <td className="p-3 border">Nei</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2>Ofte stilte spørsmål</h2>
        
        <h3>Hvilken kredittscore trenger jeg?</h3>
        <p>
          De fleste kredittkort krever en kredittscore på minst 500-600. Premium-kort 
          som SAS EuroBonus Premium kan kreve høyere score. Du kan sjekke din kredittscore 
          gratis hos kredittopplysningsbyråer som Experian eller Bisnode.
        </p>

        <h3>Kan jeg ha flere kredittkort?</h3>
        <p>
          Ja, det er fullt mulig å ha flere kredittkort. Mange velger å ha ett kort for 
          daglig bruk (f.eks. Trumf Visa for dagligvarer) og ett for reiser (f.eks. Bank 
          Norwegian for reiseforsikring).
        </p>

        <h3>Hva skjer hvis jeg ikke betaler hele regningen?</h3>
        <p>
          Hvis du ikke betaler hele regningen innen forfallsdato, vil du begynne å 
          betale renter. Disse er ofte mellom 15-25% per år, så det kan bli dyrt. 
          Prøv alltid å betale fullt hvis du kan.
        </p>

        <div className="bg-primary-50 rounded-xl p-6 my-8">
          <h3 className="font-bold text-norsk-dark mb-2">Vår anbefaling</h3>
          <p className="text-gray-700">
            For de fleste nordmenn er <strong>Bank Norwegian kredittkort</strong> det beste 
            valget. Ingen årsavgift, god cashback, og solid reiseforsikring gjør det til 
            en allrounder som fungerer for de fleste. Handler du mye på Kiwi/Meny? 
            Vurder å supplere med Trumf Visa.
          </p>
        </div>

        <p className="text-sm text-gray-500 mt-8">
          Sist oppdatert: 15. januar 2026. Informasjonen kan endres. Sjekk alltid 
          bankens egne nettsider for gjeldende vilkår før du søker.
        </p>
      </article>
    </>
  )
}
