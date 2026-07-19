import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Beste sparekonto i Norge juli 2026 — de beste rentene nå',
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
            Beste sparekonto i Norge juli 2026
          </h1>
          <p className="text-green-100 text-lg">
            De beste rentene akkurat nå. Med KPI på 2,7 % er det
            kritisk å velge riktig sparekonto.
          </p>
        </div>
      </section>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 py-12 article-content">
        <p className="text-xl text-gray-600 leading-relaxed mb-8">
          Pengene dine mister verdi hver eneste dag de står på en vanlig brukskonto
          med 0% rente. Med inflasjon på 2,7 % betyr det at 100.000 kroner i dag
          bare er verdt 97.300 kroner om ett år — i kjøpekraft. Løsningen? Finn en
          sparekonto som i det minste holder tritt med inflasjonen.
        </p>

        <h2>Hvorfor sparekonto er viktig</h2>
        <p>
          En sparekonto er ikke noe man bare «bør ha». I dagens økonomi er det
          en nødvendighet for å bevare kjøpekraften. Her er hovedfordelene:
        </p>
        <ul>
          <li><strong>Beskyttelse mot inflasjon:</strong> Renteinntekter motvirker prisvekst</li>
          <li><strong>Sikkerhet:</strong> Innskuddsgaranti opptil 100.000 euro (ca. 1,15 mill. kr)</li>
          <li><strong>Tilgjengelighet:</strong> Rask tilgang til pengene ved behov</li>
          <li><strong>Ingen risiko:</strong> I motsetning til aksjer, er innskudd garantert</li>
        </ul>

        <h2>Beste sparekontoer i Norge juli 2026</h2>
        <p className="text-sm text-gray-500 mb-4">
          <strong>Viktig endring:</strong> Sbanken er ikke lenger markedsleder — de er kuttet til 3,46–3,90 %. Morrow Bank og Instabank deler førsteplassen med 4,80 %, mens Pareto Bank tilbyr 4,85 % for 12 mnd binding.
        </p>

        <h3>Morrow Bank — Beste med fritt uttak</h3>
        <p>
          Morrow Bank er nå markedsleder på høyrentekonto med 4,80 % effektiv rente og fritt uttak uten varsel. En hel-digital bank med sterk kundevekst.
        </p>
        <p>
          <strong>Styrker:</strong> 4,80 % rente, fritt uttak, ingen minstekrav, god app.
        </p>

        <h3>Instabank — Samme rente, 31 dagers varsel</h3>
        <p>
          Instabank tilbyr også 4,80 % effektiv rente, men krever 31 dagers varsel før uttak. Perfekt for langsiktig sparing du ikke trenger å røre.
        </p>

        <h3>Pareto Bank — Høyest rente med binding</h3>
        <p>
          Pareto Bank tilbyr 4,85 % for 12 måneders binding — men krever 500.000 kr i innskudd. Best for deg som kan binde mye kapital.
        </p>

        <h3>Collector / Norion Bank</h3>
        <p>
          Norion Bank gir 4,70 % med fritt uttak og minsteinnskudd på bare 1 kr. En populær digital sparebank.
        </p>

        <h3>Bank2 / Aprila / Kraft Bank</h3>
        <p>
          Alle tre tilbyr 4,69 % med fritt uttak. Digitale nisjebanker med god rente og enkelt oppsett.
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
                <td className="p-3 border font-medium">Morrow Bank</td>
                <td className="p-3 border">4,80%</td>
                <td className="p-3 border">Fritt uttak</td>
                <td className="p-3 border">1 kr</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="p-3 border font-medium">Instabank</td>
                <td className="p-3 border">4,80%</td>
                <td className="p-3 border">31 dagers varsel</td>
                <td className="p-3 border">1 kr</td>
              </tr>
              <tr>
                <td className="p-3 border font-medium">Pareto Bank</td>
                <td className="p-3 border">4,85%</td>
                <td className="p-3 border">12 mnd binding</td>
                <td className="p-3 border">500 000 kr</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="p-3 border font-medium">Collector / Norion</td>
                <td className="p-3 border">4,70%</td>
                <td className="p-3 border">Fritt uttak</td>
                <td className="p-3 border">1 kr</td>
              </tr>
              <tr>
                <td className="p-3 border font-medium">Bank2 / Aprila / Kraft</td>
                <td className="p-3 border">4,69%</td>
                <td className="p-3 border">Fritt uttak</td>
                <td className="p-3 border">Lav</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="p-3 border font-medium">Lea Bank</td>
                <td className="p-3 border">4,66%</td>
                <td className="p-3 border">2 frie uttak</td>
                <td className="p-3 border">Lav</td>
              </tr>
              <tr>
                <td className="p-3 border font-medium">OBOS-banken</td>
                <td className="p-3 border">4,65%</td>
                <td className="p-3 border">1 fritt uttak</td>
                <td className="p-3 border">Lav</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="p-3 border font-medium">Sbanken (DNB)</td>
                <td className="p-3 border">3,90%</td>
                <td className="p-3 border">Fritt uttak</td>
                <td className="p-3 border">0 kr</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-sm text-gray-500">
          Merk: Rentene er veiledende per 19. juli 2026 og kan endres. Sjekk bankens
          nettside for oppdaterte renter.
        </p>

        <h2>BSU — ekstra gunstig for deg under 34</h2>
        <p>
          Hvis du er under 34 år og sparer til bolig, er BSU (Boligsparing for unge)
          et soleklart førstevalg. Her får du:
        </p>
        <ul>
          <li><strong>Skattefradrag:</strong> 10% av innskuddet (maks 2.750 kr/år)</li>
          <li><strong>Høy rente:</strong> Typisk 6,0–6,40 % (Handelsbanken Fordel 6,40 %)</li>
          <li><strong>Begrenset innskudd:</strong> Maks 27.500 kr/år</li>
        </ul>
        <p>
          Med skattefradraget blir den effektive avkastningen ofte 8–10 % — langt bedre
          enn noen sparekonto kan tilby.
        </p>

        <h2>Høyrentekonto vs. vanlig sparekonto</h2>
        <p>
          En høyrentekonto gir høyere rente, men noen krever binding eller varsel før uttak. Fordeler og ulemper:
        </p>
        <ul>
          <li><strong>Høyrentekonto med fritt uttak (Morrow, Collector):</strong> Best av begge verdener — best rente + full fleksibilitet</li>
          <li><strong>Høyrentekonto med varsel (Instabank):</strong> Best for sparing du ikke trenger røre</li>
          <li><strong>Vanlig sparekonto:</strong> Lavere rente, men full fleksibilitet</li>
        </ul>
        <p>
          Hvis du vet at du ikke trenger pengene på en stund, kan høyrentekonto med binding være
          verdt det. For nødfond og kortsiktig sparing, velg høyrentekonto med fritt uttak.
        </p>

        <h2>Tips for smart sparing</h2>
        <ul>
          <li><strong>Automatiser:</strong> Sett opp fast trekk fra lønnskontoen</li>
          <li><strong>Start tidlig:</strong> Jo lengre tid pengene står, jo mer vokser de</li>
          <li><strong>BSU først:</strong> Bruk BSU-kvoten din før du sparer annet sted</li>
          <li><strong>Sammenlign:</strong> Renter endres — sjekk markedet jevnlig</li>
          <li><strong>Nødfond:</strong> Ha 3–6 måneders utgifter på en fleksibel sparekonto</li>
        </ul>

        <div className="bg-green-50 rounded-xl p-6 my-8">
          <h3 className="font-bold text-norsk-dark mb-2">Vår anbefaling</h3>
          <p className="text-gray-700">
            For de fleste er <strong>Morrow Bank</strong> eller <strong>Collector/Norion Bank</strong> gode
            valg med 4,70–4,80 % rente, fritt uttak og ingen binding. Er du under 34 år,
            prioriter <strong>BSU</strong> først — skattefradraget gjør det til den beste
            spareformen for unge boligkjøpere.
          </p>
        </div>

        <p className="text-sm text-gray-500 mt-8">
          Sist oppdatert: 19. juli 2026. Rentene er veiledende og kan endres.
          Sjekk alltid bankenes egne nettsider for gjeldende renter og vilkår.
        </p>
      </article>
    </>
  )
}
