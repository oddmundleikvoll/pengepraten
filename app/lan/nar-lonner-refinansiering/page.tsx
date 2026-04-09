import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Når lønner det seg å refinansiere? Komplett guide 2026',
  description: 'Lær når refinansiering er lønnsomt og når det ikke er det. Vi forklarer regnestykket og viser deg hvor mye du kan spare på å samle gjelden.',
  keywords: ['refinansiering', 'samle lån', 'kredittkortgjeld', 'forbrukslån', 'gjeldskonsolidering', 'spare penger'],
}

export default function NarLonnerRefinansiering() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <nav className="text-primary-200 text-sm mb-4">
            <Link href="/" className="hover:text-white">Hjem</Link>
            <span className="mx-2">/</span>
            <Link href="/lan" className="hover:text-white">Lån</Link>
            <span className="mx-2">/</span>
            <span>Når lønner refinansiering seg</span>
          </nav>
          <span className="inline-block px-3 py-1 text-xs font-semibold bg-white/20 rounded-full mb-4">
            Oppdatert april 2026
          </span>
          <h1 className="text-3xl md:text-4xl font-black mb-4">
            Når lønner det seg å refinansiere?
          </h1>
          <p className="text-primary-100 text-lg">
            En komplett guide til når refinansiering er smart — og når det ikke er det. 
            Se hvor mye DU kan spare med våre regneeksempler.
          </p>
        </div>
      </section>

      {/* Article content */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 py-12 article-content">
        <p className="text-xl text-gray-600 leading-relaxed mb-8">
          Har du flere smålån, kredittkortgjeld eller et gammelt forbrukslån med høy rente? 
          Da har du sannsynligvis hørt om refinansiering. Men når lønner det seg egentlig? 
          Og hvor mye kan du spare? I denne guiden går vi gjennom alt du trenger å vite 
          for å ta en informert beslutning.
        </p>

        <div className="bg-blue-50 border-l-4 border-blue-500 rounded-r-xl p-6 my-8">
          <h3 className="font-bold text-norsk-dark mb-2">💡 Visste du at...</h3>
          <p className="text-gray-700">
            Nordmenn har over <strong>100 milliarder kroner</strong> i kredittkortgjeld 
            med gjennomsnittlig rente på over 20%. Ved å refinansiere til et forbrukslån 
            med 10% rente kan man spare titusenvis av kroner.
          </p>
        </div>

        <h2>Hva er refinansiering?</h2>
        <p>
          Refinansiering betyr at du tar opp et nytt lån for å betale ned eksisterende 
          gjeld. Målet er å få:
        </p>
        <ul>
          <li><strong>Lavere rente:</strong> Erstatt dyre lån med billigere alternativer</li>
          <li><strong>Lavere månedlige utgifter:</strong> Mer å rutte med hver måned</li>
          <li><strong>Bedre oversikt:</strong> Én faktura i stedet for mange</li>
          <li><strong>Raskere nedbetaling:</strong> Med lavere rente går mer av innbetalingen til å nedbetale lånet</li>
        </ul>

        <h2>Når lønner refinansiering seg?</h2>
        <p>
          Refinansiering er spesielt verdt å vurdere i disse situasjonene:
        </p>

        <h3>1. Du har kredittkortgjeld</h3>
        <p>
          Kredittkort har ofte renter på 20-25%. Dette er blant den dyreste gjelden 
          du kan ha. Selv et forbrukslån med «høy» rente på 12-15% er langt billigere.
        </p>

        <div className="bg-gray-50 rounded-xl p-6 my-6">
          <h4 className="font-bold text-norsk-dark mb-3">Eksempel: Kredittkortgjeld</h4>
          <ul className="space-y-2">
            <li><strong>Gjeld:</strong> 50.000 kr på kredittkort med 22% rente</li>
            <li><strong>Nåværende kostnad:</strong> 11.000 kr i årlige renter</li>
            <li><strong>Etter refinansiering (10% rente):</strong> 5.000 kr i årlige renter</li>
            <li><strong>Årlig sparing:</strong> 6.000 kr</li>
          </ul>
        </div>

        <h3>2. Du har flere smålån</h3>
        <p>
          Mange ender opp med flere smålån over tid — kanskje en delbetaling på elektronikk, 
          et smålån fra ferien, og kanskje et gammelt billån. Hver for seg ser de kanskje 
          ikke så ille ut, men samlet kan de utgjøre en betydelig belastning.
        </p>

        <h3>3. Rentenivået har falt siden du tok lånet</h3>
        <p>
          Hvis du tok opp forbrukslån for 3-4 år siden, kan rentenivået ha endret seg 
          betydelig. Selv en forskjell på 2-3 prosentpoeng kan utgjøre store beløp over 
          lånets levetid.
        </p>

        <h3>4. Du vil ha bedre oversikt</h3>
        <p>
          Å holde styr på mange smålån med ulike forfallsdatoer kan være slitsomt. 
          Med refinansiering får du én faktura, én forfallsdato og én kontakt — banken.
        </p>

        <h2>[VIZ: Kalkulator for refinansiering — se hvor mye du kan spare]</h2>
        <p>
          En interaktiv kalkulator hvor brukeren kan taste inn:
        </p>
        <ul>
          <li>Eksisterende lån 1: Beløp og rente</li>
          <li>Eksisterende lån 2: Beløp og rente</li>
          <li>Eksisterende lån 3: Beløp og rente</li>
          <li>Nytt lån: Rente (f.eks. 8-12%)</li>
          <li>Output: Månedlig besparelse, total besparelse over låneperioden</li>
        </ul>

        <h2>Regneeksempel: Hvor mye kan du spare?</h2>
        <p>
          La oss se på et realistisk eksempel. Maren (34) har følgende gjeld:
        </p>

        <div className="bg-gray-50 rounded-xl p-6 my-6">
          <h4 className="font-bold text-norsk-dark mb-3">Marens gjeld før refinansiering</h4>
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b">
                <th className="text-left py-2">Lån</th>
                <th className="text-right py-2">Beløp</th>
                <th className="text-right py-2">Rente</th>
                <th className="text-right py-2">Årlig rente</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="py-2">Kredittkortgjeld</td>
                <td className="text-right">40.000 kr</td>
                <td className="text-right">22%</td>
                <td className="text-right">8.800 kr</td>
              </tr>
              <tr className="border-b">
                <td className="py-2">Forbrukslån (gammelt)</td>
                <td className="text-right">80.000 kr</td>
                <td className="text-right">16%</td>
                <td className="text-right">12.800 kr</td>
              </tr>
              <tr className="border-b">
                <td className="py-2">Delbetaling TV</td>
                <td className="text-right">25.000 kr</td>
                <td className="text-right">18%</td>
                <td className="text-right">4.500 kr</td>
              </tr>
              <tr className="font-bold">
                <td className="py-2">Totalt</td>
                <td className="text-right">145.000 kr</td>
                <td className="text-right">~18%</td>
                <td className="text-right">26.100 kr</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p>
          Maren refinansierer til ett lån på 145.000 kr med 9% rente:
        </p>

        <div className="bg-gray-50 rounded-xl p-6 my-6">
          <h4 className="font-bold text-norsk-dark mb-3">Etter refinansiering</h4>
          <ul className="space-y-2">
            <li><strong>Nytt lån:</strong> 145.000 kr med 9% rente</li>
            <li><strong>Ny årlig rente:</strong> 13.050 kr</li>
            <li><strong>Årlig sparing:</strong> 13.050 kr</li>
            <li><strong>Sparing over 5 år:</strong> 65.250 kr</li>
          </ul>
        </div>

        <p>
          I tillegg får Maren én faktura i stedet for tre, og bedre oversikt over økonomien.
        </p>

        <h2>Når lønner det seg IKKE å refinansiere?</h2>
        <p>
          Refinansiering er ikke alltid løsningen. Her er situasjoner hvor du bør tenke deg om:
        </p>

        <h3>1. Gebyrene er for høye</h3>
        <p>
          Noen banker tar etableringsgebyr på 500-1.000 kr. Hvis du skal refinansiere 
          et relativt lite beløp, kan gebyrene spise opp besparelsen.
        </p>

        <div className="bg-amber-50 border-l-4 border-amber-400 rounded-r-xl p-6 my-8">
          <h3 className="font-bold text-norsk-dark mb-2">⚠️ Viktig å huske på</h3>
          <p className="text-gray-700">
            Se alltid på den <strong>effektive renten</strong>, ikke bare den nominelle. 
            Den effektive renten inkluderer alle gebyrer og gir deg det sanne bildet av 
            hva lånet koster.
          </p>
        </div>

        <h3>2. Du forlenger løpetiden for mye</h3>
        <p>
          Lavere månedlig kostnad kan være fristende, men hvis du forlenger løpetiden 
          betydelig, kan du ende opp med å betale mer totalt — selv med lavere rente.
        </p>

        <h3>3. Du har betalingsanmerkninger</h3>
        <p>
          Med betalingsanmerkninger vil du sannsynligvis få tilbud om svært høy rente 
          — kanskje like høy som den du allerede har. I slike tilfeller kan det være 
          bedre å kontakte kreditorer direkte for å forhandle om betalingsplaner.
        </p>

        <h3>4. Du ikke har endret forbruksvanene</h3>
        <p>
          Dette er kanskje den viktigste årsaken: Hvis du refinansierer uten å endre 
          de underliggende forbruksvanene, risikerer du å bygge opp ny gjeld mens du 
          betaler på det refinansierte lånet.
        </p>

        <h2>Slik refinansierer du steg-for-steg</h2>

        <h3>Steg 1: Kartlegg gjelden din</h3>
        <p>
          Lag en liste over all gjeld du vil refinansiere:
        </p>
        <ul>
          <li>Restbeløp på hvert lån</li>
          <li>Nominell og effektiv rente</li>
          <li>Månedlig kostnad</li>
          <li>Gjenstående løpetid</li>
          <li>Eventuelle gebyrer for tidlig innfrielse</li>
        </ul>

        <h3>Steg 2: Sjekk din kredittscore</h3>
        <p>
          Din kredittscore påvirker renten du får tilbud om. Sjekk den gratis hos 
          Experian eller Bisnode. Hvis scoren er lav, kan det lønne seg å vente 
          noen måneder og forbedre den først.
        </p>

        <h3>Steg 3: Sammenlign tilbud fra flere banker</h3>
        <p>
          Ikke godta første og beste tilbud. Bruk låneformidlere som Arcadia Finans 
          eller Axo Finans for å få tilbud fra flere banker samtidig. Dette øker 
          sjansen for å finne den beste renten.
        </p>

        <h3>Steg 4: Sammenlign effektiv rente</h3>
        <p>
          Når du har tilbudene, sammenlign den effektive renten — ikke bare den nominelle. 
          Den effektive renten tar hensyn til alle gebyrer og er det eneste tallet du 
          bør bry deg om.
        </p>

        <h3>Steg 5: Les vilkårene nøye</h3>
        <p>
          Sjekk spesielt:
        </p>
        <ul>
          <li>Mulighet for ekstra innbetalinger uten gebyr</li>
          <li>Mulighet for å fryse betalinger ved behov</li>
          <li>Hva som skjer ved for sen betaling</li>
          <li>Eventuelle bindingstider</li>
        </ul>

        <h3>Steg 6: Betal ut gammel gjeld</h3>
        <p>
          Når det nye lånet er godkjent, bruk pengene til å betale ut all gammel gjeld 
          umiddelbart. Ikke la pengene stå på konto — fristelsen til å bruke dem kan bli for stor.
        </p>

        <h2>Beste banker for refinansiering i 2026</h2>
        <p>
          De fleste banker som tilbyr forbrukslån tilbyr også refinansiering. 
          Her er noen populære valg:
        </p>

        <div className="overflow-x-auto my-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-gray-50">
                <th className="text-left p-3 border">Bank</th>
                <th className="text-left p-3 border">Nominell rente</th>
                <th className="text-left p-3 border">Etableringsgebyr</th>
                <th className="text-left p-3 border">Styrker</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-3 border font-medium">Bank Norwegian</td>
                <td className="p-3 border">7,90% - 19,90%</td>
                <td className="p-3 border">0 kr</td>
                <td className="p-3 border">Ingen gebyrer, fleksibel</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="p-3 border font-medium">Arcadia Finans</td>
                <td className="p-3 border">Varierer</td>
                <td className="p-3 border">0 kr</td>
                <td className="p-3 border">Formidler til flere banker</td>
              </tr>
              <tr>
                <td className="p-3 border font-medium">Santander</td>
                <td className="p-3 border">7,90% - 19,90%</td>
                <td className="p-3 border">950 kr</td>
                <td className="p-3 border">Erfaren aktør, fleksibel</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="p-3 border font-medium">Komplett Bank</td>
                <td className="p-3 border">8,90% - 21,90%</td>
                <td className="p-3 border">0 kr</td>
                <td className="p-3 border">Rask saksbehandling</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-sm text-gray-500">
          Merk: Rentene er veiledende per april 2026. Din faktiske rente avhenger av din økonomiske situasjon.
        </p>

        <h2>Oppsummering: Skal du refinansiere?</h2>
        <p>
          Refinansiering lønner seg hvis:
        </p>
        <ul>
          <li>Du har kredittkortgjeld med høy rente (over 20%)</li>
          <li>Du har flere smålån du kan samle</li>
          <li>Du kan få rente som er minst 3-4 prosentpoeng lavere enn i dag</li>
          <li>Gebyrene ikke spiser opp besparelsen</li>
          <li>Du er motivert for å endre forbruksvanene</li>
        </ul>

        <p>
          Refinansiering lønner seg IKKE hvis:
        </p>
        <ul>
          <li>Gebyrene er for høye i forhold til besparelsen</li>
          <li>Du må forlenge løpetiden betydelig</li>
          <li>Du har betalingsanmerkninger som gir svært høy rente</li>
          <li>Du ikke har endret de underliggende forbruksvanene</li>
        </ul>

        <div className="bg-primary-50 rounded-xl p-6 my-8">
          <h3 className="font-bold text-norsk-dark mb-2">Få hjelp til å vurdere refinansiering</h3>
          <p className="text-gray-700 mb-4">
            Usikker på om refinansiering lønner seg for deg? Med vår lånekalkulator 
            kan du enkelt sammenligne kostnader og se hvor mye du kan spare. Og med 
            vår budsjettmal får du full oversikt over økonomien din.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/verktøy/lånekalkulator"
              className="inline-flex items-center gap-2 bg-primary-600 text-white font-medium py-2 px-4 rounded-lg hover:bg-primary-700 transition-colors"
            >
              Prøv lånekalkulatoren →
            </Link>
            <Link
              href="/budsjett"
              className="inline-flex items-center gap-2 bg-white text-primary-600 border border-primary-600 font-medium py-2 px-4 rounded-lg hover:bg-primary-50 transition-colors"
            >
              Last ned budsjettmal
            </Link>
          </div>
        </div>

        <h2>Kilder og videre lesing</h2>
        <ul>
          <li>Forbrukerrådet: Guide til refinansiering</li>
          <li>Finanstilsynet: Retningslinjer for lån og kreditt</li>
          <li>Bankenes egne nettsider (oppdatert april 2026)</li>
        </ul>

        <p className="text-sm text-gray-500 mt-8">
          <strong>Forfatter:</strong> Pengepraten | <strong>Sist oppdatert:</strong> 9. april 2026
          <br />
          Informasjonen er generell og utgjør ikke finansiell rådgivning. Vurder din 
          egen situasjon nøye før du refinansierer. Artikkelen inneholder annonselenker.
        </p>
      </article>
    </>
  )
}
