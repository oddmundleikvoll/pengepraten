import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Høyrentekonto sammenligning juli 2026: Beste renter på én oversikt',
  description: 'Sammenlign alle høyrentekontoer i Norge juli 2026. Se hvilken bank som gir best rente akkurat nå. Oppdatert månedlig med Morrow Bank, Instabank, Pareto Bank og flere.',
}

export default function HoyrentekontoSammenligning() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-green-600 to-green-800 text-white py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <nav className="text-green-200 text-sm mb-4">
            <Link href="/" className="hover:text-white">Hjem</Link>
            <span className="mx-2">/</span>
            <Link href="/sparing" className="hover:text-white">Sparing</Link>
            <span className="mx-2">/</span>
            <span>Høyrentekonto</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-black mb-4">
            Høyrentekonto Sammenligning: Finn beste rente i juli 2026
          </h1>
          <p className="text-green-100 text-lg max-w-2xl">
            Sammenlign alle høyrentekontoer i Norge. Oppdatert juli 2026 med renter fra Morrow Bank, Instabank, Pareto Bank og flere.
          </p>
        </div>
      </section>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 py-12 article-content">
        <p className="text-xl text-gray-600 leading-relaxed mb-8">
          Har du spart på vanlig brukskonto? I så fall lar du tusenvis av kroner ligge
          på bordet hvert eneste år. En høyrentekonto gir deg langt bedre rente enn
          det du får på en vanlig bankkonto — ofte 10–20 ganger mer. For et innskudd
          på 200.000 kroner kan forskjellen være over 4.000 kroner i året.
        </p>

        <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 mb-6">
          <p className="text-sm text-gray-800">
            <strong>🔄 Viktig endring juli 2026:</strong> Sbanken er kuttet fra 5,20 % til 3,46–3,90 %. Markedet ledes nå av Morrow Bank og Instabank (begge 4,80 %) og Pareto Bank (4,85 % med 12 mnd binding).
          </p>
        </div>

        <h2>Beste høyrentekontoer akkurat nå</h2>
        <p className="text-sm text-gray-500 mb-4">
          Tabellen under viser de ledende høyrentekontoene i Norge. Alle disse er
          ordinære bankkontoer med innskuddsgaranti — ingen digitale tokens eller
          kompliserte strukturer.
        </p>

        <div className="overflow-x-auto my-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-green-50">
                <th className="text-left p-3 border border-gray-200 font-semibold">Bank</th>
                <th className="text-left p-3 border border-gray-200 font-semibold">Rente (eff.)</th>
                <th className="text-left p-3 border border-gray-200 font-semibold">Innskuddsgaranti</th>
                <th className="text-left p-3 border border-gray-200 font-semibold">Minsteinnskudd</th>
                <th className="text-left p-3 border border-gray-200 font-semibold">Tilgang</th>
                <th className="text-left p-3 border border-gray-200 font-semibold"></th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white">
                <td className="p-3 border border-gray-200 font-medium">Morrow Bank</td>
                <td className="p-3 border border-gray-200 font-bold text-green-700">4,80 %</td>
                <td className="p-3 border border-gray-200">Ja (Norges Bank)</td>
                <td className="p-3 border border-gray-200">1 kr</td>
                <td className="p-3 border border-gray-200">Fritt uttak</td>
                <td className="p-3 border border-gray-200">
                  <a href="https://morrowbank.no" className="text-green-600 font-medium hover:underline">Åpne konto →</a>
                </td>
              </tr>
              <tr className="bg-gray-50">
                <td className="p-3 border border-gray-200 font-medium">Instabank</td>
                <td className="p-3 border border-gray-200 font-bold text-green-700">4,80 %</td>
                <td className="p-3 border border-gray-200">Ja</td>
                <td className="p-3 border border-gray-200">1 kr</td>
                <td className="p-3 border border-gray-200">31 dager varsel</td>
                <td className="p-3 border border-gray-200">
                  <a href="https://www.instabank.no" className="text-green-600 font-medium hover:underline">Åpne konto →</a>
                </td>
              </tr>
              <tr className="bg-white">
                <td className="p-3 border border-gray-200 font-medium">Pareto Bank</td>
                <td className="p-3 border border-gray-200 font-bold text-green-700">4,85 %</td>
                <td className="p-3 border border-gray-200">Ja</td>
                <td className="p-3 border border-gray-200">500 000 kr</td>
                <td className="p-3 border border-gray-200">12 mnd binding</td>
                <td className="p-3 border border-gray-200">
                  <a href="https://paretobank.no" className="text-green-600 font-medium hover:underline">Åpne konto →</a>
                </td>
              </tr>
              <tr className="bg-gray-50">
                <td className="p-3 border border-gray-200 font-medium">Collector / Norion Bank</td>
                <td className="p-3 border border-gray-200 font-bold text-green-700">4,70 %</td>
                <td className="p-3 border border-gray-200">Ja</td>
                <td className="p-3 border border-gray-200">1 kr</td>
                <td className="p-3 border border-gray-200">Fritt uttak</td>
                <td className="p-3 border border-gray-200">
                  <a href="https://www.collector.no" className="text-green-600 font-medium hover:underline">Åpne konto →</a>
                </td>
              </tr>
              <tr className="bg-white">
                <td className="p-3 border border-gray-200 font-medium">Bank2 / Aprila / Kraft</td>
                <td className="p-3 border border-gray-200 font-bold text-green-700">4,69 %</td>
                <td className="p-3 border border-gray-200">Ja</td>
                <td className="p-3 border border-gray-200">Lav</td>
                <td className="p-3 border border-gray-200">Fritt uttak</td>
                <td className="p-3 border border-gray-200">
                  <a href="https://bank2.no" className="text-green-600 font-medium hover:underline">Åpne konto →</a>
                </td>
              </tr>
              <tr className="bg-gray-50">
                <td className="p-3 border border-gray-200 font-medium">Lea Bank</td>
                <td className="p-3 border border-gray-200 font-bold text-green-700">4,66 %</td>
                <td className="p-3 border border-gray-200">Ja</td>
                <td className="p-3 border border-gray-200">Lav</td>
                <td className="p-3 border border-gray-200">2 frie uttak</td>
                <td className="p-3 border border-gray-200">
                  <a href="https://leabank.no" className="text-green-600 font-medium hover:underline">Åpne konto →</a>
                </td>
              </tr>
              <tr className="bg-white">
                <td className="p-3 border border-gray-200 font-medium">OBOS-banken</td>
                <td className="p-3 border border-gray-200 font-bold text-green-700">4,65 %</td>
                <td className="p-3 border border-gray-200">Ja</td>
                <td className="p-3 border border-gray-200">Lav</td>
                <td className="p-3 border border-gray-200">1 fritt uttak</td>
                <td className="p-3 border border-gray-200">
                  <a href="https://obosbanken.no" className="text-green-600 font-medium hover:underline">Åpne konto →</a>
                </td>
              </tr>
              <tr className="bg-gray-50">
                <td className="p-3 border border-gray-200 font-medium">Sbanken (DNB)</td>
                <td className="p-3 border border-gray-200 font-bold text-gray-500">3,90 %</td>
                <td className="p-3 border border-gray-200">Ja</td>
                <td className="p-3 border border-gray-200">0 kr</td>
                <td className="p-3 border border-gray-200">Fritt uttak</td>
                <td className="p-3 border border-gray-200">
                  <a href="https://sbanken.no" className="text-green-600 font-medium hover:underline">Åpne konto →</a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-xs text-gray-500 mb-8">
          * Oppdatert 19. juli 2026. Renter kan endres. Sjekk alltid bankenes nettsider for siste info.
        </p>

        <h3>Hva betyr kolonnene?</h3>
        <ul>
          <li><strong>Rente (eff.):</strong> Effektiv årlig prosentsats. Den renten du faktisk får på innskuddet ditt.</li>
          <li><strong>Innskuddsgaranti:</strong> Alle norske banker er omfattet av innskuddsgarantien — inntil 100.000 euro per innskyter per bank (tilsvarende cirka 1,15 millioner kroner).</li>
          <li><strong>Minsteinnskudd:</strong> Hvor lite du må sette inn for å få rente. De fleste krever ingenting.</li>
          <li><strong>Tilgang:</strong> Hvor raskt du kan ta ut pengene. &quot;Fritt uttak&quot; betyr at pengene er tilgjengelig med en gang via bankens app. &quot;31 dagers varsel&quot; betyr at du må varsle banken 31 dager før uttak.</li>
        </ul>

        <h2>Hva er forskjellen på høyrentekonto og sparekonto?</h2>
        <p>
          En vanlig sparekonto hos en tradisjonell bank (DNB, Nordea, Sparebank 1) gir
          deg gjerne 1–2 % rente. En høyrentekonto fra en av aktørene over gir deg
          3,90–4,85 % — altså to til fire ganger mer. Forskjellen ligger i
          forretningsmodellen. Digitale banker som Morrow Bank og Instabank har lavere
          kostnader enn tradisjonelle banker med filialer og stor administrasjon.
          De sender besparelsen videre til kundene i form av høyere rente.
        </p>

        <h3>Høyrentekonto: Fordeler og ulemper</h3>
        <p><strong>Fordeler:</strong></p>
        <ul>
          <li>Betydelig høyere rente — ofte 4–4,80 % mot 1–2 % på vanlig sparekonto</li>
          <li>Ingen gebyrer på innskudd eller uttak</li>
          <li>Helautomatisk og digitalt — alt fra mobil eller pc</li>
          <li>Ingen bindingstid for de fleste (kun Pareto Bank)</li>
        </ul>
        <p><strong>Ulemper:</strong></p>
        <ul>
          <li>Noen banker krever 31 dagers varsel ved uttak (Instabank)</li>
          <li>Ekstra konto å holde styr på (men det er et lite problem)</li>
          <li>Rentene svinger — en bank som topper listen i dag kan bli nummer fem om tre måneder</li>
        </ul>

        <h3>Vanlig sparekonto: Fordeler og ulemper</h3>
        <p><strong>Fordeler:</strong></p>
        <ul>
          <li>Pengene er tilgjengelig umiddelbart, alltid</li>
          <li>Du har kanskje allerede konto der — null ekstra arbeid</li>
          <li>Trygt og kjent</li>
        </ul>
        <p><strong>Ulemper:</strong></p>
        <ul>
          <li>Renten er ofte dramatisk lavere</li>
          <li>Bankene har liten incentivering til å gi deg bedre rente</li>
        </ul>
        <p>
          Konklusjonen er enkel: Hvis du har sparepenger som ligger mer enn et par
          uker, bør de stå på høyrentekonto, ikke på brukskonto eller vanlig sparekonto.
        </p>

        <h2>Slik velger du riktig høyrentekonto</h2>
        <p>Ikke bare blakk på renten. Her er fire ting du bør vurdere før du åpner konto.</p>

        <h3>Sjekk renten (men ikke bare renten)</h3>
        <p>
          En rente på 4,80 % versus 4,69 % høres ut som en liten forskjell, men på
          100.000 kroner er det bare 110 kroner i året. Ikke bruk timer på å velge
          mellom banker som ligger så nær hverandre. Velg heller én med god rente
          og bra brukeropplevelse.
        </p>

        <h3>Innskuddsgaranti</h3>
        <p>
          Alle banker vi har med i tabellen er norske banker med full
          innskuddsgaranti. Det betyr at staten garanterer for innskuddene dine
          opp til 100.000 euro hvis banken skulle gå konkurs.
        </p>

        <h3>Uttaksbetingelser</h3>
        <p>
          Skal du trenge pengene fort? Morrow Bank, Collector og de fleste andre lar deg ta ut
          umiddelbart. Instabank krever 31 dagers varsel, mens Pareto Bank krever 12 mnd binding.
        </p>

        <h3>Brukeropplevelse</h3>
        <p>
          Har du prøvd Morrow Bank-appen? Instabanks løsning? Noen oppleves som mer moderne og intuitive enn andre.
        </p>

        <h2>Hvor mye kan du tjene? Regnestykket</h2>

        <h3>Årlig avkastning på ulike beløp (4,80 %)</h3>
        <div className="overflow-x-auto my-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-gray-50">
                <th className="text-left p-3 border border-gray-200 font-semibold">Innskudd</th>
                <th className="text-left p-3 border border-gray-200 font-semibold">Høyrentekonto (4,80 %)</th>
                <th className="text-left p-3 border border-gray-200 font-semibold">Vanlig sparekonto (1,5 %)</th>
                <th className="text-left p-3 border border-gray-200 font-semibold">Din gevinst</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white">
                <td className="p-3 border border-gray-200">50 000 kr</td>
                <td className="p-3 border border-gray-200">2 400 kr</td>
                <td className="p-3 border border-gray-200">750 kr</td>
                <td className="p-3 border border-gray-200 font-bold text-green-700">1 650 kr</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="p-3 border border-gray-200">100 000 kr</td>
                <td className="p-3 border border-gray-200">4 800 kr</td>
                <td className="p-3 border border-gray-200">1 500 kr</td>
                <td className="p-3 border border-gray-200 font-bold text-green-700">3 300 kr</td>
              </tr>
              <tr className="bg-white">
                <td className="p-3 border border-gray-200">250 000 kr</td>
                <td className="p-3 border border-gray-200">12 000 kr</td>
                <td className="p-3 border border-gray-200">3 750 kr</td>
                <td className="p-3 border border-gray-200 font-bold text-green-700">8 250 kr</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="p-3 border border-gray-200">500 000 kr</td>
                <td className="p-3 border border-gray-200">24 000 kr</td>
                <td className="p-3 border border-gray-200">7 500 kr</td>
                <td className="p-3 border border-gray-200 font-bold text-green-700">16 500 kr</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3>Tiårsprojeksjon</h3>
        <p>
          Sett inn 200.000 kroner på høyrentekonto med 4,80 % gjennomsnittsrente, og
          la det stå i ti år. Du ender opp med <strong>cirka 320.000 kroner</strong> —
          uten å løfte en finger etter første innskudd. På vanlig sparekonto med
          1,5 %? Rundt 234.000 kroner. Forskjellen på 86.000 kroner er ikke ubetydelig.
        </p>

        <h2>Ofte stilte spørsmål</h2>

        <h3>Er høyrentekonto trygt?</h3>
        <p>
          Ja. Alle bankene i vår tabell er norske banker med innskuddsgaranti fra
          norske myndigheter. Pengene dine er beskyttet opp til 100.000 euro per
          bank — selv om banken går konkurs.
        </p>

        <h3>Må jeg betale skatt på renteinntekter?</h3>
        <p>
          Ja. Renteinntekter på bankinnskudd beskattes som kapitalinntekt med en
          sats på 22 % (for inntektsåret 2026). Så hvis du tjener 4.800 kroner i
          rente, betaler du cirka 1.056 kroner i skatt. Netto får du fortsatt beholde
          resten — og du kommer langt foran sammenlignet med å la pengene stå på
          brukskonto uten rente i det hele tatt.
        </p>

        <h3>Kan jeg ha flere høyrentekontoer?</h3>
        <p>
          Absolutt. Du kan spre pengene dine på flere kontoer hos ulike banker —
          det er faktisk en fornuftig strategi for å spre risiko og samtidig dra
          nytte av ulike renteendringer.
        </p>

        <h3>Hva skjer hvis banken går konkurs?</h3>
        <p>
          Innskuddsgarantien trer i kraft. Du får pengene tilbake — opp til 100.000
          euro — innen sju arbeidsdager. Dette er garantert av den norske staten.
        </p>

        <h2>Konklusjon</h2>
        <p>
          Morrow Bank og Instabank deler førsteplassen i juli 2026 med 4,80 % rente.
          Pareto Bank tilbyr 4,85 % for 12 måneders binding. Sbanken er falt
          fra toppen og tilbyr nå bare 3,90 %. Alle disse bankene er trygge, og alle
          har full innskuddsgaranti. Det viktigste er egentlig ikke hvilken du
          velger blant topp tre — det viktigste er at du faktisk flytter
          sparepengene dine fra brukskonto til høyrentekonto.
        </p>
        <p>
          Forskjellen mellom 1,5 % og 4,80 % rente på 250.000 kroner er over
          8.000 kroner i året før skatt. Den avgjørelsen tar fem minutter å fatte.
        </p>

        <div className="bg-green-50 rounded-xl p-6 my-8 border border-green-100">
          <p className="font-medium text-norsk-dark mb-3">
            📧 <strong>Få e-postvarsel når rentene endres</strong>
          </p>
          <p className="text-sm text-gray-600 mb-4">
            Registrer e-postadressen din under, så sender vi deg beskjed med en
            gang en av disse bankene justerer renten sin — slik at du alltid har topp rente.
          </p>
          <a
            href="/email-capture"
            className="inline-flex items-center gap-2 bg-green-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-green-700 transition-colors"
          >
            Registrér deg for gratis varsel →
          </a>
        </div>

        <div className="bg-gray-50 rounded-xl p-6 mt-8">
          <h3 className="font-bold text-norsk-dark mb-4">Relaterte artikler</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/sparing/hoyrentekonto" className="text-green-600 hover:underline font-medium">
                Høyrentekonto: Alt du trenger å vite →
              </Link>
            </li>
            <li>
              <Link href="/sparing/beste-sparekonto-2026" className="text-green-600 hover:underline font-medium">
                Beste sparekonto juli 2026 →
              </Link>
            </li>
            <li>
              <Link href="/sparing/bsu-guide" className="text-green-600 hover:underline font-medium">
                BSU-guide →
              </Link>
            </li>
            <li>
              <Link href="/verktøy/boliglånskalkulator" className="text-green-600 hover:underline font-medium">
                Boliglånskalkulator →
              </Link>
            </li>
          </ul>
        </div>

        <p className="text-xs text-gray-400 mt-8">
          Sist oppdatert: 19. juli 2026. Rentene er veiledende og kan endres.
        </p>
      </article>
    </>
  )
}
