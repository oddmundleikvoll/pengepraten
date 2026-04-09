import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Refinansiering: Slik sparer du tusenvis på gjelden din',
  description: 'Med dagens rentebetingelser kan refinansiering av eksisterende gjeld gi deg lavere månedlige kostnader. Her er alt du trenger å vite.',
}

export default function RefinansieringPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <nav className="text-primary-200 text-sm mb-4">
            <Link href="/" className="hover:text-white">Hjem</Link>
            <span className="mx-2">/</span>
            <Link href="/lan" className="hover:text-white">Lån</Link>
            <span className="mx-2">/</span>
            <span>Refinansiering</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-black mb-4">
            Refinansiering: Spar på gjelden
          </h1>
          <p className="text-primary-100 text-lg">
            Slik sparer du tusenvis på gjelden din. Med riktig refinansiering 
            kan du kutte månedlige utgifter og betale ned raskere.
          </p>
        </div>
      </section>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 py-12 article-content">
        <p className="text-xl text-gray-600 leading-relaxed mb-8">
          Har du flere smålån, kredittkortgjeld eller et dyrt forbrukslån? Da kan 
          refinansiering være en av de smarteste økonomiske beslutningene du tar. 
          Mange nordmenn sparer flere tusen kroner i måneden ved å samle gjelden 
          til ett lån med lavere rente.
        </p>

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
          Refinansiering er spesielt verdt å vurdere hvis du har:
        </p>
        <ul>
          <li>Kredittkortgjeld med høy rente (ofte 20-25%)</li>
          <li>Smålån med høye effektive renter</li>
          <li>Forbrukslån fra flere år tilbake med høyere rente enn dagens marked</li>
          <li>Flere lån som er tungvint å holde styr på</li>
        </ul>

        <h2>Eksempel: Hvor mye kan du spare?</h2>
        <p>
          La oss si du har følgende gjeld:
        </p>
        <ul>
          <li>Kredittkortgjeld: 50.000 kr med 22% rente</li>
          <li>Forbrukslån 1: 100.000 kr med 15% rente</li>
          <li>Forbrukslån 2: 75.000 kr med 18% rente</li>
        </ul>
        <p>
          <strong>Totalt:</strong> 225.000 kr i gjeld med vektet rente på ca. 17%.
        </p>
        <p>
          Hvis du refinansierer til ett lån med 9% rente:
        </p>
        <ul>
          <li><strong>Før:</strong> Ca. 38.000 kr i årlige renter</li>
          <li><strong>Etter:</strong> Ca. 20.000 kr i årlige renter</li>
          <li><strong>Årlig sparing:</strong> 18.000 kr</li>
        </ul>
        <p>
          Over 5 år sparer du altså rundt <strong>90.000 kroner</strong> — penger 
          som heller kan gå til nedbetaling eller andre formål.
        </p>

        <h2>Slik refinansierer du</h2>
        <ol>
          <li><strong>Kartlegg gjelden din:</strong> Noter alle lån, renter og restbeløp</li>
          <li><strong>Sjekk din kredittscore:</strong> God kredittscore gir bedre rente</li>
          <li><strong>Søk hos flere banker:</strong> Bruk låneformidlere for å få flere tilbud</li>
          <li><strong>Sammenlign effektiv rente:</strong> Se på total kostnad, ikke bare nominell rente</li>
          <li><strong>Les vilkårene:</strong> Sjekk om det er gebyrer for tidlig innfrielse</li>
          <li><strong>Betal ut gammel gjeld:</strong> Bruk det nye lånet til å kvitte deg med den dyre gjelden</li>
        </ol>

        <h2>Vanlige fallgruber</h2>
        <p>
          Refinansiering er ikke alltid løsningen. Pass på disse fellene:
        </p>
        <ul>
          <li><strong>Forlenger løpetiden:</strong> Lavere månedlig kostnad, men du betaler renter lenger</li>
          <li><strong>Tar opp mer gjeld:</strong> Noen bruker refinansiering som unnskyldning til å låne mer</li>
          <li><strong>Ignorerer rotårsaken:</strong> Hvis du refinansierer uten å endre forbruket, havner du i samme situasjon igjen</li>
          <li><strong>Ser bare på månedlig kostnad:</strong> Total kostnad er det viktigste</li>
        </ul>

        <div className="bg-amber-50 border-l-4 border-amber-400 rounded-r-xl p-6 my-8">
          <h3 className="font-bold text-norsk-dark mb-2">⚠️ Viktig å huske</h3>
          <p className="text-gray-700">
            Refinansiering er ikke magi — det flytter bare gjelden din. For å virkelig 
            komme på rett kjøl, må du kombinere det med en plan for å leve innenfor 
            budsjettet ditt. Ellers risikerer du å bygge opp ny gjeld mens du betaler 
            på det refinansierte lånet.
          </p>
        </div>

        <h2>Beste banker for refinansiering</h2>
        <p>
          De fleste banker som tilbyr forbrukslån tilbyr også refinansiering. 
          Populære valg inkluderer:
        </p>
        <ul>
          <li><strong>Bank Norwegian:</strong> Konkurransedyktige renter, ingen gebyrer</li>
          <li><strong>Arcadia Finans:</strong> Formidler til flere banker, god for sammenligning</li>
          <li><strong>Santander:</strong> Erfaren aktør, fleksible løsninger</li>
          <li><strong>Komplett Bank:</strong> Rask saksbehandling, god digital løsning</li>
        </ul>

        <h2>Oppsummering</h2>
        <p>
          Refinansiering kan være en genial måte å spare penger på, spesielt hvis 
          du har dyr kredittkortgjeld eller gamle forbrukslån med høy rente. Men 
          husk: Det er bare første steget. For å virkelig mestre økonomien din, 
          trenger du også et godt budsjett og en plan for fremtiden.
        </p>

        <div className="bg-primary-50 rounded-xl p-6 my-8">
          <h3 className="font-bold text-norsk-dark mb-2">Neste steg</h3>
          <p className="text-gray-700 mb-4">
            Usikker på om refinansiering lønner seg for deg? Prøv vår lånekalkulator 
            for å se hvor mye du kan spare.
          </p>
          <Link
            href="/verktøy/lånekalkulator"
            className="inline-flex items-center gap-2 bg-primary-600 text-white font-medium py-2 px-4 rounded-lg hover:bg-primary-700 transition-colors"
          >
            Prøv lånekalkulatoren →
          </Link>
        </div>

        <p className="text-sm text-gray-500 mt-8">
          Sist oppdatert: 10. februar 2026. Informasjonen er generell og utgjør 
          ikke finansiell rådgivning. Vurder din egen situasjon nøye før du 
          refinansierer.
        </p>
      </article>
    </>
  )
}
