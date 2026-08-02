import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Høyrentekonto sammenligning August 2026: Beste renter på én oversikt',
  description: 'Sammenlign alle høyrentekontoer i Norge august 2026. Se hvilken bank som gir best rente akkurat nå. Oppdatert månedlig med Sbanken, Svea Bank, OBOS, Nordea og flere.',
}

export default function HoyrentekontoSammenligning() {
  return (
    <>
      {/* Hero */}
      <section className="bg-paper text-ink py-12 border-b border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <nav className="font-mono text-xs uppercase tracking-wider text-ink-muted mb-6">
            <Link href="/" className="hover:text-forest transition-colors">Hjem</Link>
            <span className="mx-2 text-border-strong">/</span>
            <Link href="/sparing" className="hover:text-forest transition-colors">Sparing</Link>
            <span className="mx-2 text-border-strong">/</span>
            <span className="text-ink">Høyrentekonto</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-medium font-display leading-[1.08] mb-4">
            Høyrentekonto Sammenligning: Finn beste rente i 2026
          </h1>
          <p className="text-ink-muted text-lg leading-relaxed max-w-2xl">
            Sammenlign alle høyrentekontoer i Norge. Sist oppdatert 2. august 2026 med renter fra Svea Bank, OBOS, Nordax, Sbanken og flere.
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
                <td className="p-3 border border-gray-200 font-medium">Svea Bank</td>
                <td className="p-3 border border-gray-200 font-bold text-green-700">4,65 %</td>
                <td className="p-3 border border-gray-200">Ja</td>
                <td className="p-3 border border-gray-200">0 kr</td>
                <td className="p-3 border border-gray-200">Umiddelbar</td>
                <td className="p-3 border border-gray-200">
                  <a href="https://www.svea.com/nb-no/privat/sparing" className="text-green-600 font-medium hover:underline">Åpne konto →</a>
                </td>
              </tr>
              <tr className="bg-gray-50">
                <td className="p-3 border border-gray-200 font-medium">Bank Norwegian Sparekonto 31</td>
                <td className="p-3 border border-gray-200 font-bold text-green-700">4,65 %</td>
                <td className="p-3 border border-gray-200">Ja</td>
                <td className="p-3 border border-gray-200">0 kr</td>
                <td className="p-3 border border-gray-200">31 d varsel</td>
                <td className="p-3 border border-gray-200">
                  <a href="https://www.banknorwegian.no/sparing/" className="text-green-600 font-medium hover:underline">Åpne konto →</a>
                </td>
              </tr>
              <tr className="bg-white">
                <td className="p-3 border border-gray-200 font-medium">OBOS Sparekonto Langsiktig</td>
                <td className="p-3 border border-gray-200 font-bold text-green-700">4,55 %</td>
                <td className="p-3 border border-gray-200">Ja</td>
                <td className="p-3 border border-gray-200">0 kr</td>
                <td className="p-3 border border-gray-200">Umiddelbar</td>
                <td className="p-3 border border-gray-200">
                  <a href="https://www.obos.no/bank/sparing" className="text-green-600 font-medium hover:underline">Åpne konto →</a>
                </td>
              </tr>
              <tr className="bg-gray-50">
                <td className="p-3 border border-gray-200 font-medium">Nordax Sparekonto Smart</td>
                <td className="p-3 border border-gray-200 font-bold text-green-700">4,50 %</td>
                <td className="p-3 border border-gray-200">Ja</td>
                <td className="p-3 border border-gray-200">0 kr</td>
                <td className="p-3 border border-gray-200">Umiddelbar</td>
                <td className="p-3 border border-gray-200">
                  <a href="https://www.nordax.no/spare" className="text-green-600 font-medium hover:underline">Åpne konto →</a>
                </td>
              </tr>
              <tr className="bg-white">
                <td className="p-3 border border-gray-200 font-medium">BN Bank Høyrentekonto</td>
                <td className="p-3 border border-gray-200 font-bold text-green-700">4,49 %</td>
                <td className="p-3 border border-gray-200">Ja</td>
                <td className="p-3 border border-gray-200">0 kr</td>
                <td className="p-3 border border-gray-200">Begrenset</td>
                <td className="p-3 border border-gray-200">
                  <a href="https://www.bnbank.no/sparing/" className="text-green-600 font-medium hover:underline">Åpne konto →</a>
                </td>
              </tr>
              <tr className="bg-gray-50">
                <td className="p-3 border border-gray-200 font-medium">Nordea Sparekonto Ekstra</td>
                <td className="p-3 border border-gray-200 font-bold text-green-700">4,35 %</td>
                <td className="p-3 border border-gray-200">Ja</td>
                <td className="p-3 border border-gray-200">500 000 kr</td>
                <td className="p-3 border border-gray-200">4 frie uttak</td>
                <td className="p-3 border border-gray-200">
                  <a href="https://www.nordea.no/privat/vare-produkter/sparing-og-investering/sparing-pa-konto/sparekonto-ekstra.html" className="text-green-600 font-medium hover:underline">Åpne konto →</a>
                </td>
              </tr>
              <tr className="bg-white">
                <td className="p-3 border border-gray-200 font-medium">Handelsbanken Sparekonto pluss</td>
                <td className="p-3 border border-gray-200 font-bold text-green-700">4,25 %</td>
                <td className="p-3 border border-gray-200">Ja</td>
                <td className="p-3 border border-gray-200">100 000 kr</td>
                <td className="p-3 border border-gray-200">12 frie uttak</td>
                <td className="p-3 border border-gray-200">
                  <a href="https://www.handelsbanken.no/no/privat/prislister/prisliste-innskuddsrenter" className="text-green-600 font-medium hover:underline">Åpne konto →</a>
                </td>
              </tr>
              <tr className="bg-gray-50">
                <td className="p-3 border border-gray-200 font-medium">Bluestep Sparekonto Flex</td>
                <td className="p-3 border border-gray-200 font-bold text-green-700">4,12 %</td>
                <td className="p-3 border border-gray-200">Ja</td>
                <td className="p-3 border border-gray-200">50 000 kr</td>
                <td className="p-3 border border-gray-200">Umiddelbar</td>
                <td className="p-3 border border-gray-200">
                  <a href="https://www.bluestep.no/spare/flytende-rente/" className="text-green-600 font-medium hover:underline">Åpne konto →</a>
                </td>
              </tr>
              <tr className="bg-white">
                <td className="p-3 border border-gray-200 font-medium">DNB Sparekonto Pluss</td>
                <td className="p-3 border border-gray-200 font-bold text-green-700">4,10 %</td>
                <td className="p-3 border border-gray-200">Ja</td>
                <td className="p-3 border border-gray-200">500 000 kr</td>
                <td className="p-3 border border-gray-200">12 frie uttak</td>
                <td className="p-3 border border-gray-200">
                  <a href="https://www.dnb.no/sparing/sparing-pa-konto/sparekonto-pluss" className="text-green-600 font-medium hover:underline">Åpne konto →</a>
                </td>
              </tr>
              <tr className="bg-gray-50">
                <td className="p-3 border border-gray-200 font-medium">Sbanken (over 500k)</td>
                <td className="p-3 border border-gray-200 font-bold text-green-700">4,09 %</td>
                <td className="p-3 border border-gray-200">Ja</td>
                <td className="p-3 border border-gray-200">0 kr</td>
                <td className="p-3 border border-gray-200">Umiddelbar</td>
                <td className="p-3 border border-gray-200">
                  <a href="https://sbanken.no/spare/kontosparing/sparekonto" className="text-green-600 font-medium hover:underline">Åpne konto →</a>
                </td>
              </tr>
              <tr className="bg-white">
                <td className="p-3 border border-gray-200 font-medium">Nordnet (kvalifisert)</td>
                <td className="p-3 border border-gray-200 font-bold text-green-700">4,0 %</td>
                <td className="p-3 border border-gray-200">Ja</td>
                <td className="p-3 border border-gray-200">0 kr</td>
                <td className="p-3 border border-gray-200">1-2 dager</td>
                <td className="p-3 border border-gray-200">
                  <a href="https://www.nordnet.no/tjenester/kontoer/sparekonto" className="text-green-600 font-medium hover:underline">Åpne konto →</a>
                </td>
              </tr>
              <tr className="bg-gray-50">
                <td className="p-3 border border-gray-200 font-medium">Sbanken (under 500k)</td>
                <td className="p-3 border border-gray-200 font-bold text-green-700">3,65 %</td>
                <td className="p-3 border border-gray-200">Ja</td>
                <td className="p-3 border border-gray-200">0 kr</td>
                <td className="p-3 border border-gray-200">Umiddelbar</td>
                <td className="p-3 border border-gray-200">
                  <a href="https://sbanken.no/spare/kontosparing/sparekonto" className="text-green-600 font-medium hover:underline">Åpne konto →</a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-xs text-gray-500 mb-8">
          * Sist oppdatert 2. august 2026. Renter kan endres. Sjekk alltid bankens nettside for siste info. Kilder: bankenes egne sider, Finansportalen.
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
          forretningsmodellen. Digitale banker som Sbanken og Svea Bank har lavere 
          kostnader enn tradisjonelle banker med filialer og stor administrasjon. 
          De sender besparelsen videre til kundene i form av høyere rente.
        </p>

        <h3>Høyrentekonto: Fordeler og ulemper</h3>
        <p><strong>Fordeler:</strong></p>
        <ul>
          <li>Betydelig høyere rente — ofte 4-4,65 % mot 1-2 % på vanlig sparekonto</li>
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
          En rente på 4,65 % versus 4,55 % høres ut som en liten forskjell, men på 
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
          Skal du trenge pengene fort? Sbanken, OBOS, Svea Bank og Nordax lar deg ta ut 
          umiddelbart. Bank Norwegian Sparekonto 31 krever 31 dagers varsel.
        </p>

        <h3>Brukeropplevelse</h3>
        <p>
          Har du prøvd Sbanken-appen? OBOS-bankens nettside? Nordnets plattform? Noen 
          oppleves som mer moderne og intuitive enn andre.
        </p>

        <h2>Hvor mye kan du tjene? Regnestykket</h2>

        <h3>Årlig avkastning på ulike beløp</h3>
        <div className="overflow-x-auto my-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-gray-50">
                <th className="text-left p-3 border border-gray-200 font-semibold">Innskudd</th>
                <th className="text-left p-3 border border-gray-200 font-semibold">Høyrentekonto (4,65 %)</th>
                <th className="text-left p-3 border border-gray-200 font-semibold">Vanlig sparekonto (1,5 %)</th>
                <th className="text-left p-3 border border-gray-200 font-semibold">Din gevinst</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white">
                <td className="p-3 border border-gray-200">50 000 kr</td>
                <td className="p-3 border border-gray-200">2 325 kr</td>
                <td className="p-3 border border-gray-200">750 kr</td>
                <td className="p-3 border border-gray-200 font-bold text-green-700">1 575 kr</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="p-3 border border-gray-200">100 000 kr</td>
                <td className="p-3 border border-gray-200">4 650 kr</td>
                <td className="p-3 border border-gray-200">1 500 kr</td>
                <td className="p-3 border border-gray-200 font-bold text-green-700">3 150 kr</td>
              </tr>
              <tr className="bg-white">
                <td className="p-3 border border-gray-200">250 000 kr</td>
                <td className="p-3 border border-gray-200">11 625 kr</td>
                <td className="p-3 border border-gray-200">3 750 kr</td>
                <td className="p-3 border border-gray-200 font-bold text-green-700">7 875 kr</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="p-3 border border-gray-200">500 000 kr</td>
                <td className="p-3 border border-gray-200">23 250 kr</td>
                <td className="p-3 border border-gray-200">7 500 kr</td>
                <td className="p-3 border border-gray-200 font-bold text-green-700">15 750 kr</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3>Tiårsprojeksjon</h3>
        <p>
          Sett inn 200.000 kroner på høyrentekonto med 4,65 % gjennomsnittsrente, og 
          la det stå i ti år. Du ender opp med <strong>cirka 314.000 kroner</strong> — 
          uten å løfte en finger etter første innskudd. På vanlig sparekonto med 
          1,5 %? Rundt 234.000 kroner. Forskjellen på rundt 80.000 kroner er ikke ubetydelig.
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
          Svea Bank og Bank Norwegian Sparekonto 31 topper listen i august 2026 med 4,65 % rente, tett fulgt av OBOS Sparekonto Langsiktig (4,55 %) og Nordax Sparekonto Smart (4,50 %). Alle disse bankene er trygge, og alle har full 
          innskuddsgaranti. Det viktigste er egentlig ikke hvilken du velger blant 
          topp tre — det viktigste er at du faktisk flytter sparepengene dine fra 
          brukskonto til høyrentekonto.
        </p>
        <p>
          Forskjellen mellom 0 % og 4,65 % rente på 250.000 kroner er rundt 11.625 
          kroner i året før skatt. Den avgjørelsen tar fem minutter å fatte.
        </p>

        <div className="bg-green-50 rounded-xl p-6 my-8 border border-green-100">
          <p className="font-medium text-norsk-dark mb-3">
             <strong>Få e-postvarsel når rentene endres</strong>
          </p>
          <p className="text-sm text-gray-600 mb-4">
            Registrer e-postadressen din under, så sender vi deg beskjed med en 
            gang en av disse bankene justerer renten sin — slik at du alltid har topp rente.
          </p>
          <a
            href="/email-capture"
            className="inline-flex items-center gap-2 bg-forest text-paper font-semibold py-3 px-6 rounded-md hover:bg-forest-mid transition-colors"
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
          Sist oppdatert: 2. august 2026. Rentene er veiledende og kan endres.
        </p>
      </article>
    </>
  )
}