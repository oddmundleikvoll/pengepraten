import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Kredittkort uten årsavgift — er det like bra som det høres ut?',
  description: 'Mange tror kredittkort uten årsavgift er for godt til å være sant. Vi forklarer hva du faktisk får, og hvilke fallgruber du bør unngå.',
}

export default function KredittkortUtenArsavgift() {
  return (
    <>
      <section className="bg-gradient-to-br from-accent-600 to-accent-800 text-white py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <nav className="text-accent-200 text-sm mb-4">
            <Link href="/" className="hover:text-white">Hjem</Link>
            <span className="mx-2">/</span>
            <Link href="/kredittkort" className="hover:text-white">Kredittkort</Link>
            <span className="mx-2">/</span>
            <span>Kredittkort uten årsavgift</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-black mb-4">
            Kredittkort uten årsavgift
          </h1>
          <p className="text-accent-100 text-lg">
            Er det like bra som det høres ut? Vi forklarer hva du faktisk får, 
            og hvilke fallgruber du bør unngå.
          </p>
        </div>
      </section>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 py-12 article-content">
        <p className="text-xl text-gray-600 leading-relaxed mb-8">
          «Ingen årsavgift» høres nesten for godt ut til å være sant. Men det er faktisk 
          flere kredittkort i Norge som er helt gratis å ha — uten skjulte gebyrer eller 
          begrensninger. Her er hva du trenger å vite.
        </p>

        <h2>Hvorfor er noen kredittkort gratis?</h2>
        <p>
          Bankene tjener penger på kredittkort på flere måter. Selv om de ikke tar årsavgift, 
          tjener de på:
        </p>
        <ul>
          <li><strong>Transaksjonsgebyrer:</strong> Butikkene betaler en liten prosent til banken hver gang du bruker kortet</li>
          <li><strong>Renter:</strong> De som ikke betaler hele regningen betaler renter (ofte 15-25%)</li>
          <li><strong>Kryssalg:</strong> Gratis kredittkort kan føre til at du også bruker bankens andre produkter</li>
        </ul>
        <p>
          For banken er et gratis kredittkort en måte å bygge kundeforhold på. For deg 
          er det en mulighet til å få fordeler uten kostnad — så lenge du bruker kortet 
          fornuftig.
        </p>

        <h2>Beste kredittkort uten årsavgift 2026</h2>

        <h3>Bank Norwegian kredittkort</h3>
        <p>
          Bank Norwegians kredittkort er kanskje det mest populære gratis kortet i Norge. 
          Du får opptil 1% cashback på alle kjøp, gebyrfrie uttak i utlandet, og solid 
          reiseforsikring.
        </p>

        <h3>Komplett Bank Mastercard</h3>
        <p>
          Komplett Bank tilbyr også et gratis kredittkort med cashback og reiseforsikring. 
          Spesielt bra for deg som handler mye på nettet.
        </p>

        <h3>Trumf Visa</h3>
        <p>
          Trumf Visa er gratis og gir deg 1% Trumf-bonus på alle kjøp, og 2% i Trumf-butikker 
          (Kiwi, Meny, Spar, Joker). Perfekt for dagligvarehandel.
        </p>

        <h3>DNB Mastercard</h3>
        <p>
          DNBs standard kredittkort har ingen årsavgift og er et trygt valg for DNB-kunder. 
          Enkelt og greit uten altfor mange fiksfakserier.
        </p>

        <h2>Hva må du passe på?</h2>
        <p>
          Selv om kortet er gratis å ha, kan det likevel koste deg penger hvis du ikke 
          er obs på følgende:
        </p>
        <ul>
          <li><strong>Betal hele regningen:</strong> Hvis du bare betaler minimumsbeløpet, begynner rentene å løpe</li>
          <li><strong>Unngå kontantuttak:</strong> De fleste kredittkort har gebyr på kontantuttak, selv i Norge</li>
          <li><strong>Sjekk valutapåslag:</strong> Noen kort har høyt påslag på utenlandske kjøp</li>
          <li><strong>Lese vilkårene:</strong> Noen «gratis» kort har betingelser som gjør at du må bruke kortet aktivt</li>
        </ul>

        <h2>Er gratis kredittkort verdt det?</h2>
        <p>
          For de fleste er svaret ja — hvis du bruker kortet riktig. Med et gratis 
          kredittkort kan du:
        </p>
        <ul>
          <li>Få opptil 45 dagers rentefri betalingsutsettelse</li>
          <li>Tjene cashback på kjøpene dine</li>
          <li>Få reiseforsikring og kjøpsforsikring</li>
          <li>Bygge kredittscore uten å betale årsavgift</li>
        </ul>
        <p>
          Men hvis du vet at du har problemer med å betale regningen i tide, kan et 
          kredittkort bli dyrt uansett om det er gratis å ha. I slike tilfeller kan 
          det være bedre med et debetkort.
        </p>

        <div className="bg-amber-50 border-l-4 border-amber-400 rounded-r-xl p-6 my-8">
          <h3 className="font-bold text-norsk-dark mb-2">⚠️ Viktig å huske</h3>
          <p className="text-gray-700">
            «Ingen årsavgift» betyr ikke «gratis å bruke». Hvis du ikke betaler hele 
            regningen innen forfallsdato, vil du betale renter som fort kan overstige 
            hva du sparer på årsavgiften. Bruk kredittkortet som et betalingsverktøy, 
            ikke som en lånekilde.
          </p>
        </div>

        <h2>Oppsummering</h2>
        <p>
          Kredittkort uten årsavgift er et godt valg for de fleste. Bank Norwegian, 
          Komplett Bank og Trumf Visa er alle solide alternativer som gir deg fordeler 
          uten kostnad. Husk bare å betale hele regningen hver måned, så unngår du 
          dyre renter.
        </p>

        <p className="text-sm text-gray-500 mt-8">
          Sist oppdatert: 20. januar 2026. Informasjonen kan endres. Sjekk alltid 
          bankens egne nettsider for gjeldende vilkår før du søker.
        </p>
      </article>
    </>
  )
}
