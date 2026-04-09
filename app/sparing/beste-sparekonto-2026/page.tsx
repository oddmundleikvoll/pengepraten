import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Beste sparekonto i Norge 2026 — de beste rentene nå',
  description: 'Med inflasjonen som spiser av sparepengene dine, er det viktigere enn noensinne å plassere pengene der de faktisk vokser. Her er vår oppdaterte oversikt.',
}

export default function BesteSparekonto2026() {
  return (
    <>
      <section className="bg-gradient-to-br from-green-600 to-green-800 text-white py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <nav className="text-green-200 text-sm mb-4">
            <Link href="/" className="hover:text-white">Hjem</Link>
            <span className="mx-2">/</span>
            <Link href="/sparing" className="hover:text-white">Sparing</Link>
            <span className="mx-2">/</span>
            <span>Beste sparekonto 2026</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-black mb-4">
            Beste sparekonto i Norge 2026
          </h1>
          <p className="text-green-100 text-lg">
            De beste rentene akkurat nå. Med inflasjon på rundt 3% er det 
            kritisk å velge riktig sparekonto.
          </p>
        </div>
      </section>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 py-12 article-content">
        <p className="text-xl text-gray-600 leading-relaxed mb-8">
          Pengene dine mister verdi hver eneste dag de står på en vanlig brukskonto 
          med 0% rente. Med inflasjon på rundt 3% betyr det at 100.000 kroner i dag 
          bare er verdt 97.000 kroner om ett år — i kjøpekraft. Løsningen? Finn en 
          sparekonto som i det minste holder tritt med inflasjonen.
        </p>

        <h2>Hvorfor sparekonto er viktig</h2>
        <p>
          En sparekonto er ikke noe man bare «bør ha». I dagens økonomi er det 
          en nødvendighet for å bevare kjøpekraften. Her er hovedfordelene:
        </p>
        <ul>
          <li><strong>Beskyttelse mot inflasjon:</strong> Renteinntekter motvirker prisvekst</li>
          <li><strong>Sikkerhet:</strong> Innskuddsgaranti opptil 2 millioner kroner</li>
          <li><strong>Tilgjengelighet:</strong> Rask tilgang til pengene ved behov</li>
          <li><strong>Ingen risiko:</strong> I motsetning til aksjer, er innskudd garantert</li>
        </ul>

        <h2>Beste sparekontoer i Norge 2026</h2>

        <h3>Sbanken Sparekonto</h3>
        <p>
          Sbanken (tidligere Skandiabanken) har lenge vært blant de beste på renter. 
          Deres sparekonto gir god rente uten bindingstid eller gebyrer.
        </p>
        <p>
          <strong>Styrker:</strong> Konkurransedyktig rente, ingen binding, ingen gebyrer, 
          god digital bank.
        </p>

        <h3>Bluestep Sparekonto</h3>
        <p>
          Bluestep er en utfordrer på det norske markedet som ofte byr på blant de 
          høyeste rentene. Verdt å sjekke for de som vil maksimere renteinntektene.
        </p>

        <h3>Sparebank 1 Østlandet</h3>
        <p>
          Mange Sparebank 1-banker tilbyr gode sparekontoer, spesielt for eksisterende 
          kunder. Sjekk din lokale Sparebank 1 for aktuelle renter.
        </p>

        <h3>BN Bank Sparekonto</h3>
        <p>
          BN Bank er en nettbank som ofte ligger i teten når det gjelder renter. 
          Enkel å bruke og god kundeservice.
        </p>

        <h2>Sammenligning av renter</h2>
        <div className="overflow-x-auto my-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-gray-50">
                <th className="text-left p-3 border">Bank</th>
                <th className="text-left p-3 border">Rente</th>
                <th className="text-left p-3 border">Bindingstid</th>
                <th className="text-left p-3 border">Minsteinnskudd</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-3 border font-medium">Sbanken</td>
                <td className="p-3 border">3,50%</td>
                <td className="p-3 border">Ingen</td>
                <td className="p-3 border">0 kr</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="p-3 border font-medium">Bluestep</td>
                <td className="p-3 border">3,75%</td>
                <td className="p-3 border">Ingen</td>
                <td className="p-3 border">0 kr</td>
              </tr>
              <tr>
                <td className="p-3 border font-medium">BN Bank</td>
                <td className="p-3 border">3,40%</td>
                <td className="p-3 border">Ingen</td>
                <td className="p-3 border">0 kr</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="p-3 border font-medium">Sparebank 1</td>
                <td className="p-3 border">3,25%</td>
                <td className="p-3 border">Ingen</td>
                <td className="p-3 border">0 kr</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-sm text-gray-500">
          Merk: Rentene er veiledende per januar 2026 og kan endres. Sjekk bankens 
          nettside for oppdaterte renter.
        </p>

        <h2>BSU — ekstra gunstig for deg under 34</h2>
        <p>
          Hvis du er under 34 år og sparer til bolig, er BSU (Boligsparing for unge) 
          et soleklart førstevalg. Her får du:
        </p>
        <ul>
          <li><strong>Skattefradrag:</strong> 10% av innskuddet (maks 2.500 kr/år)</li>
          <li><strong>Høy rente:</strong> Ofte bedre enn vanlig sparekonto</li>
          <li><strong>Begrenset innskudd:</strong> Maks 27.500 kr/år</li>
        </ul>
        <p>
          Med skattefradraget blir den effektive avkastningen ofte 8-10% — langt bedre 
          enn noen sparekonto kan tilby.
        </p>

        <h2>Høyrentekonto vs. vanlig sparekonto</h2>
        <p>
          En høyrentekonto gir høyere rente, men krever at du binder pengene i en 
          periode (ofte 3-12 måneder). Fordeler og ulemper:
        </p>
        <ul>
          <li><strong>Høyrentekonto:</strong> Bedre rente, men mindre fleksibel</li>
          <li><strong>Vanlig sparekonto:</strong> Lavere rente, men full fleksibilitet</li>
        </ul>
        <p>
          Hvis du vet at du ikke trenger pengene på en stund, kan høyrentekonto være 
          verdt det. For nødfond og kortsiktig sparing, velg vanlig sparekonto.
        </p>

        <h2>Tips for smart sparing</h2>
        <ul>
          <li><strong>Automatiser:</strong> Sett opp fast trekk fra lønnskontoen</li>
          <li><strong>Start tidlig:</strong> Jo lengre tid pengene står, jo mer vokser de</li>
          <li><strong>BSU først:</strong> Bruk BSU-kvoten din før du sparer annet sted</li>
          <li><strong>Sammenlign:</strong> Renter endres — sjekk markedet jevnlig</li>
          <li><strong>Nødfond:</strong> Ha 3-6 måneders utgifter på en fleksibel sparekonto</li>
        </ul>

        <div className="bg-green-50 rounded-xl p-6 my-8">
          <h3 className="font-bold text-norsk-dark mb-2">Vår anbefaling</h3>
          <p className="text-gray-700">
            For de fleste er <strong>Sbanken</strong> eller <strong>Bluestep</strong> gode 
            valg med konkurransedyktige renter og ingen bindingstid. Er du under 34 år, 
            prioriter <strong>BSU</strong> først — skattefradraget gjør det til den beste 
            spareformen for unge boligkjøpere.
          </p>
        </div>

        <p className="text-sm text-gray-500 mt-8">
          Sist oppdatert: 1. mars 2026. Rentene er veiledende og kan endres. 
          Sjekk alltid bankens egne nettsider for gjeldende renter og vilkår.
        </p>
      </article>
    </>
  )
}
