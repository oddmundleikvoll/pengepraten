import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Høyrentekonto sammenligning 2026: Beste renter på én oversikt',
  description: 'Sammenlign alle høyrentekontoer i Norge 2026. Se hvilken bank som gir best rente akkurat nå. Oppdatert månedlig med Sbanken, Hygga, Nordnet og flere.',
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
            Høyrentekonto Sammenligning: Finn beste rente i 2026
          </h1>
          <p className="text-green-100 text-lg max-w-2xl">
            Sammenlign alle høyrentekontoer i Norge. Oppdatert april 2026 med renter fra Sbanken, Hygga, Nordnet og flere.
          </p>
        </div>
      </section>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 py-12 article-content">
        <p className="text-xl text-gray-600 leading-relaxed mb-8">
          Har du spart på vanlig brukskonto? I så fall lar du tusenvis av kroner ligge 
          på bordet hvert eneste år. En høyrentekonto gir deg langt bedre rente enn 
          det du får på en vanlig bankkonto — ofte 10-20 ganger mer. For et innskudd 
          på 200.000 kroner kan forskjellen være over 5.000 kroner i året.
        </p>

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
                <th className="text-left p-3 border border-gray-200 font-semibold">Rente (APR)</th>
                <th className="text-left p-3 border border-gray-200 font-semibold">Innskuddsgaranti</th>
                <th className="text-left p-3 border border-gray-200 font-semibold">Minsteinnskudd</th>
                <th className="text-left p-3 border border-gray-200 font-semibold">Tilgang</th>
                <th className="text-left p-3 border border-gray-200 font-semibold"></th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white">
                <td className="p-3 border border-gray-200 font-medium">Sbanken</td>
                <td className="p-3 border border-gray-200 font-bold text-green-700">4,25 %</td>
                <td className="p-3 border border-gray-200">Ja (Norges Bank)</td>
                <td className="p-3 border border-gray-200">0 kr</td>
                <td className="p-3 border border-gray-200">Umiddelbar</td>
                <td className="p-3 border border-gray-200">
                  <a href="https://example.com/sbanken" className="text-green-600 font-medium hover:underline">Åpne konto →</a>
                </td>
              </tr>
              <tr className="bg-gray-50">
                <td className="p-3 border border-gray-200 font-medium">Hygga</td>
                <td className="p-3 border border-gray-200 font-bold text-green-700">4,15 %</td>
                <td className="p-3 border border-gray-200">Ja</td>
                <td className="p-3 border border-gray-200">0 kr</td>
                <td className="p-3 border border-gray-200">1-2 dager</td>
                <td className="p-3 border border-gray-200">
                  <a href="https://example.com/hygga" className="text-green-600 font-medium hover:underline">Åpne konto →</a>
                </td>
              </tr>
              <tr className="bg-white">
                <td className="p-3 border border-gray-200 font-medium">Nordnet</td>
                <td className="p-3 border border-gray-200 font-bold text-green-700">4,05 %</td>
                <td className="p-3 border border-gray-200">Ja</td>
                <td className="p-3 border border-gray-200">0 kr</td>
                <td className="p-3 border border-gray-200">Umiddelbar</td>
                <td className="p-3 border border-gray-200">
                  <a href="https://example.com/nordnet" className="text-green-600 font-medium hover:underline">Åpne konto →</a>
                </td>
              </tr>
              <tr className="bg-gray-50">
                <td className="p-3 border border-gray-200 font-medium">Milk Money</td>
                <td className="p-3 border border-gray-200 font-bold text-green-700">3,95 %</td>
                <td className="p-3 border border-gray-200">Ja</td>
                <td className="p-3 border border-gray-200">0 kr</td>
                <td className="p-3 border border-gray-200">Umiddelbar</td>
                <td className="p-3 border border-gray-200">
                  <a href="https://example.com/milkmoney" className="text-green-600 font-medium hover:underline">Åpne konto →</a>
                </td>
              </tr>
              <tr className="bg-white">
                <td className="p-3 border border-gray-200 font-medium">BN Bank</td>
                <td className="p-3 border border-gray-200 font-bold text-green-700">3,85 %</td>
                <td className="p-3 border border-gray-200">Ja</td>
                <td className="p-3 border border-gray-200">10 000 kr</td>
                <td className="p-3 border border-gray-200">2-3 dager</td>
                <td className="p-3 border border-gray-200">
                  <a href="https://example.com/bnbank" className="text-green-600 font-medium hover:underline">Åpne konto →</a>
                </td>
              </tr>
              <tr className="bg-gray-50">
                <td className="p-3 border border-gray-200 font-medium">Bluestep</td>
                <td className="p-3 border border-gray-200 font-bold text-green-700">3,70 %</td>
                <td className="p-3 border border-gray-200">Ja</td>
                <td className="p-3 border border-gray-200">0 kr</td>
                <td className="p-3 border border-gray-200">Umiddelbar</td>
                <td className="p-3 border border-gray-200">
                  <a href="https://example.com/bluestep" className="text-green-600 font-medium hover:underline">Åpne konto →</a>
                </td>
              </tr>
              <tr className="bg-white">
                <td className="p-3 border border-gray-200 font-medium">Skandiabanken</td>
                <td className="p-3 border border-gray-200 font-bold text-green-700">3,60 %</td>
                <td className="p-3 border border-gray-200">Ja</td>
                <td className="p-3 border border-gray-200">0 kr</td>
                <td className="p-3 border border-gray-200">Umiddelbar</td>
                <td className="p-3 border border-gray-200">
                  <a href="https://example.com/skandiabanken" className="text-green-600 font-medium hover:underline">Åpne konto →</a>
                </td>
              </tr>
              <tr className="bg-gray-50">
                <td className="p-3 border border-gray-200 font-medium">Komplett Bank</td>
                <td className="p-3 border border-gray-200 font-bold text-green-700">3,45 %</td>
                <td className="p-3 border border-gray-200">Ja</td>
                <td className="p-3 border border-gray-200">0 kr</td>
                <td className="p-3 border border-gray-200">Umiddelbar</td>
                <td className="p-3 border border-gray-200">
                  <a href="https://example.com/komplettbank" className="text-green-600 font-medium hover:underline">Åpne konto →</a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-xs text-gray-500 mb-8">
          * Oppdatert april 2026. Renter kan endres. Sjekk alltid bankens nettside for siste info.
        </p>

        <h3>Hva betyr kolonnene?</h3>
        <ul>
          <li><strong>Rente (APR):</strong> Årlig prosentsats. Den renten du faktisk får på innskuddet ditt.</li>
          <li><strong>Innskuddsgaranti:</strong> Alle norske banker er omfattet av innskuddsgarantien — inntil 100.000 euro per innskyter per bank (tilsvarende cirka 1,1 millioner kroner).</li>
          <li><strong>Minsteinnskudd:</strong> Hvor lite du må sette inn for å få rente. De fleste krever ingenting.</li>
          <li><strong>Tilgang:</strong> Hvor raskt du kan ta ut pengene. &quot;Umiddelbar&quot; betyr at pengene er tilgjengelig med en gang via bankens app eller nettside. &quot;1-3 dager&quot; betyr at uttaket tar noen bankdager.</li>
        </ul>

        <h2>Hva er forskjellen på høyrentekonto og sparekonto?</h2>
        <p>
          En vanlig sparekonto hos en tradisjonell bank (DNB, Nordea, Sparebank 1) gir 
          deg gjerne 1-2 % rente. En høyrentekonto fra en av aktørene over gir deg 
          3-4+ % — altså to til fire ganger mer. Forskjellen ligger i 
          forretningsmodellen. Digitale banker som Sbanken og Hygga har lavere 
          kostnader enn tradisjonelle banker med filialer og stor administrasjon. 
          De sender besparelsen videre til kundene i form av høyere rente.
        </p>

        <h3>Høyrentekonto: Fordeler og ulemper</h3>
        <p><strong>Fordeler:</strong></p>
        <ul>
          <li>Betydelig høyere rente — ofte 3-4 % mot 1-2 % på vanlig sparekonto</li>
          <li>Ingen gebyrer på innskudd eller uttak</li>
          <li>Helautomatisk og digitalt — alt fra mobil eller pc</li>
          <li>Ingen bindingstid, selv om noen har uttaksvarsel</li>
        </ul>
        <p><strong>Ulemper:</strong></p>
        <ul>
          <li>Noen banker krever 1-3 dagers varsel ved uttak</li>
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
          En rente på 4,25 % versus 4,15 % høres ut som en stor forskjell, men på 
          100.000 kroner er det bare 100 kroner i året. Ikke bruk timer på å velge 
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
          Skal du trenge pengene fort? Sbanken, Nordnet og Milk Money lar deg ta ut 
          umiddelbart. Hygga og BN Bank krever 1-3 dagers varsel.
        </p>

        <h3>Brukeropplevelse</h3>
        <p>
          Har du prøvd Sbanken-appen? Hyggas nettside? Nordnets plattform? Noen 
          oppleves som mer moderne og intuitive enn andre.
        </p>

        <h2>Hvor mye kan du tjene? Regnestykket</h2>

        <h3>Årlig avkastning på ulike beløp</h3>
        <div className="overflow-x-auto my-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-gray-50">
                <th className="text-left p-3 border border-gray-200 font-semibold">Innskudd</th>
                <th className="text-left p-3 border border-gray-200 font-semibold">Høyrentekonto (4,25 %)</th>
                <th className="text-left p-3 border border-gray-200 font-semibold">Vanlig sparekonto (1,5 %)</th>
                <th className="text-left p-3 border border-gray-200 font-semibold">Din gevinst</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white">
                <td className="p-3 border border-gray-200">50 000 kr</td>
                <td className="p-3 border border-gray-200">2 125 kr</td>
                <td className="p-3 border border-gray-200">750 kr</td>
                <td className="p-3 border border-gray-200 font-bold text-green-700">1 375 kr</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="p-3 border border-gray-200">100 000 kr</td>
                <td className="p-3 border border-gray-200">4 250 kr</td>
                <td className="p-3 border border-gray-200">1 500 kr</td>
                <td className="p-3 border border-gray-200 font-bold text-green-700">2 750 kr</td>
              </tr>
              <tr className="bg-white">
                <td className="p-3 border border-gray-200">250 000 kr</td>
                <td className="p-3 border border-gray-200">10 625 kr</td>
                <td className="p-3 border border-gray-200">3 750 kr</td>
                <td className="p-3 border border-gray-200 font-bold text-green-700">6 875 kr</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="p-3 border border-gray-200">500 000 kr</td>
                <td className="p-3 border border-gray-200">21 250 kr</td>
                <td className="p-3 border border-gray-200">7 500 kr</td>
                <td className="p-3 border border-gray-200 font-bold text-green-700">13 750 kr</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3>Tiårsprojeksjon</h3>
        <p>
          Sett inn 200.000 kroner på høyrentekonto med 4 % gjennomsnittsrente, og 
          la det stå i ti år. Du ender opp med <strong>cirka 296.000 kroner</strong> — 
          uten å løfte en finger etter første innskudd. På vanlig sparekonto med 
          1,5 %? Rundt 234.000 kroner. Forskjellen på 62.000 kroner er ikke ubetydelig.
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
          sats på 22 % (for inntektsåret 2026). Så hvis du tjener 4.000 kroner i 
          rente, betaler du cirka 880 kroner i skatt. Netto får du fortsatt beholde 
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
          Sbanken topper listen i april 2026 med 4,25 % rente, tett fulgt av Hygga 
          og Nordnet. Alle disse bankene er trygge, og alle har full 
          innskuddsgaranti. Det viktigste er egentlig ikke hvilken du velger blant 
          topp tre — det viktigste er at du faktisk flytter sparepengene dine fra 
          brukskonto til høyrentekonto.
        </p>
        <p>
          Forskjellen mellom 0,5 % og 4 % rente på 250.000 kroner er over 8.500 
          kroner i året før skatt. Den avgjørelsen tar fem minutter å fatte.
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
                Beste sparekonto 2026 →
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
          Sist oppdatert: april 2026. Rentene er veiledende og kan endres.
        </p>
      </article>
    </>
  )
}