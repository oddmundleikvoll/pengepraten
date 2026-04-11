import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Kredittscore i Norge 2026: Slik fungerer det og slik forbedrer du den | Pengepraten',
  description: 'Kredittscore påvirker hvilken rente du får på lån og kredittkort. Lær hvordan kredittscore beregnes i Norge, hvordan du får tak i din egen score, og 7 konkrete tiltak for å forbedre den.',
  keywords: ['kredittscore', 'kredittvurdering', 'kredittsjekk', 'gjeldsregisteret', 'lånesøknad', 'rente', 'personlig økonomi Norge'],
}

export default function KredittscoreNorge() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-accent-600 to-blue-700 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <nav className="text-blue-100 text-sm mb-4">
            <Link href="/" className="hover:text-white">Hjem</Link>
            <span className="mx-2">/</span>
            <Link href="/kredittkort" className="hover:text-white">Kredittkort</Link>
            <span className="mx-2">/</span>
            <span>Kredittscore i Norge</span>
          </nav>
          <span className="inline-block px-3 py-1 text-xs font-semibold bg-white/20 rounded-full mb-4">
            Oppdatert april 2026
          </span>
          <h1 className="text-3xl md:text-5xl font-black mb-4">
            Kredittscore i Norge
          </h1>
          <p className="text-blue-100 text-xl max-w-2xl">
            Hvordan det fungerer — og hvordan du forbedrer din egen. Alt du trenger å vite for 2026.
          </p>
        </div>
      </section>

      {/* Article content */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 py-12 article-content">

        <p className="text-xl text-gray-600 leading-relaxed mb-8">
          Tenk deg at du søker om et forbrukslån. Banken åpner en magisk fil 
          om deg, og i den står det ett tall — et tall som avgjør hvor mye 
          du får låne, til hvilken rente, og om du i det hele tatt får låne. 
          Det tallet er kredittscoren din. Og i motsetning til hva mange tror, 
          er det noe du kan påvirke — sterkt.
        </p>

        {/* Visual intro */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 my-8 border border-blue-100">
          <div className="flex items-center gap-4 mb-4">
            <div className="text-5xl">📊</div>
            <div>
              <p className="text-blue-800 font-bold text-lg">Kredittscore forklarert</p>
              <p className="text-blue-600 text-sm">
                En vurdering av din økonomiske pålitelighet basert på betalingshistorikk, 
                gjeld, inntekt og andre faktorer. Jo høyere score, jo bedre lånevilkår får du.
              </p>
            </div>
          </div>
        </div>

        <h2>Hva er kredittscore — egentlig?</h2>
        <p>
          En kredittscore er et <strong>tall mellom 1 og 100</strong> (eller 
          200-1000 avhengig av system) som oppsummerer din økonomiske pålitelighet. 
          Banker og långivere bruker denne scoren til å vurdere hvor stor risiko 
          det er å låne deg penger.
        </p>

        <div className="bg-blue-50 border-l-4 border-blue-500 rounded-r-xl p-6 my-8">
          <h3 className="font-bold text-norsk-dark mb-2">💡 Slik tenker bankene:</h3>
          <p className="text-gray-700">
            «En person med høy kredittscore har historisk betalt regninger til rett tid, 
            har moderat gjeld i forhold til inntekt, og har lang og stabil økonomisk historikk. 
            Det er en god kunde å låne til.»
          </p>
        </div>

        <p>
          Kredittscore brukes ikke bare ved lån. Den kan også påvirke:
        </p>
        <ul>
          <li>Hvilken rente du får på kredittkortet ditt</li>
          <li>Om du får leasing på bil</li>
          <li>Leie av bolig (enkelte utleiere sjekker)</li>
          <li>Bestemte mobilabonnementer med kredittvurdering</li>
          <li>Strømavtaler med depositum</li>
        </ul>

        <h2>Hvordan beregnes kredittscore i Norge?</h2>
        <p>
          I Norge finnes det ikke én offisiell kredittscore slik som i USA 
          (der FICO-skalaen er dominerende). I stedet opererer norske banker 
          og kredittbyråer med ulike modeller. De viktigste aktørene er:
        </p>

        <div className="bg-gray-50 rounded-xl p-6 my-6">
          <h4 className="font-bold text-norsk-dark mb-3">🏦 Aktører som innhenter kredittinformasjon</h4>
          <ul className="space-y-2 text-gray-700">
            <li><strong>Experian:</strong> Et av verdens største kredittbyråer, aktivt i Norge</li>
            <li><strong>Bisnode / Dun & Bradstreet:</strong> Næringslivs- og personkredittvurdering</li>
            <li><strong>Creditsafe:</strong> Internasjonal aktør med norsk virksomhet</li>
            <li><strong>Gjeldsregisteret:</strong> Innført i 2020 — banker må sjekke registeret før nye lån</li>
            <li><strong>Bankenes egne modeller:</strong> Hver bank har i tillegg sine interne scorekort</li>
          </ul>
        </div>

        <h3>Hva som påvirker DIN kredittscore:</h3>

        <div className="space-y-4 my-6">
          {[
            {
              icon: '💳',
              factor: 'Betalingshistorikk',
              weight: '35-40%',
              desc: 'Har du betalt regninger og regelmessige avdrag til rett tid? Dette er den desidert viktigste faktoren. Én sen betaling kan koste deg poeng.'
            },
            {
              icon: '💰',
              factor: 'Gjeldsbelastning',
              weight: '25-30%',
              desc: 'Hvor mye gjeld har du i forhold til inntekt? «Gjeldsgraden» er kritisk. Bankene ser på gjeld-to-income ratio (DTI). Under 40% er bra.'
            },
            {
              icon: '📈',
              factor: 'Kredittbenyttelse',
              weight: '15-20%',
              desc: 'Hvor mye av din tilgjengelige kreditt bruker du? Bruker du 80% av kredittkortlimiten er det et rødt flagg. Under 30% er optimalt.'
            },
            {
              icon: '⏱️',
              factor: 'Kreditt historikk-lengde',
              weight: '10-15%',
              desc: 'Jo eldre kredittkontoene dine er, desto bedre. En lang historikk med ansvarlig bruk viser stabilitet.'
            },
            {
              icon: '🔄',
              factor: 'Kredittyper',
              weight: '5-10%',
              desc: 'Har du en god miks av kreditt (boliglån, kredittkort, avbetalingsløsninger)? Det kan være positivt — så lenge du håndterer dem bra.'
            },
            {
              icon: '🔍',
              factor: 'Antall kredittforespørsler',
              weight: '5-10%',
              desc: 'Mange lånesøknader på kort tid sender et advarselssignal. Flere søknader utover 14 dager teller separat, men mange treffer på rad kan skade scoren.'
            }
          ].map((item) => (
            <div key={item.factor} className="flex gap-4 bg-white border border-gray-200 rounded-xl p-5">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center text-2xl">{item.icon}</div>
              <div>
                <div className="flex items-baseline gap-2 mb-1">
                  <h4 className="font-bold text-norsk-dark">{item.factor}</h4>
                  <span className="text-xs bg-blue-100 text-blue-700 font-semibold px-2 py-0.5 rounded-full">{item.weight}</span>
                </div>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <h2>Gjeldsregisteret: Spilleregler som endret alt i 2020</h2>
        <p>
          I 2020 lanserte Gjeldsregisteret (gjeldsregisteret.no) seg som en 
          milepæl i norsk personlig økonomi. Registeret inneholder informasjon 
          om all usikret gjeld du har — og bankene er <strong>pålagt å sjekke 
          det før de gir deg ny usikret kreditt</strong>.
        </p>

        <div className="bg-accent-50 border-l-4 border-accent-500 rounded-r-xl p-6 my-8">
          <h3 className="font-bold text-norsk-dark mb-2">📋 Hva betyr Gjeldsregisteret for deg?</h3>
          <ul className="space-y-2 text-gray-700">
            <li>Bankene kan <strong>ikke lenger glemme</strong> at du har annen usikret gjeld</li>
            <li>Det hindrer «gjeldstutting» — å ta opp flere lån samtidig uten at bankene vet om det</li>
            <li>Du har <strong>rett til innsyn</strong> i registeret én gang i året gratis</li>
            <li>Feil informasjon kan meldes og rettes opp</li>
          </ul>
        </div>

        <p>
          Det positive? En god kredittscore og registrert lav gjeld i Gjeldsregisteret 
          er et konkurransefortrinn. Bankene ser at du er ansvarlig — og belønner det.
        </p>

        <h2>Slik sjekker du din egen kredittscore</h2>
        <p>
          I Norge har du rett til innsyn i din egen kredittinformasjon. 
          Her er de vanligste måtene:
        </p>

        <div className="bg-gray-50 rounded-xl p-6 my-6">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b">
                <th className="text-left py-2 font-semibold text-norsk-dark">Tjeneste</th>
                <th className="text-left py-2 font-semibold text-norsk-dark">Kostnad</th>
                <th className="text-left py-2 font-semibold text-norsk-dark">Mer info</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="py-2">Gjeldsregisteret.no</td>
                <td className="text-green-600">Gratis 1x/år</td>
                <td className="text-gray-600 text-xs">Oversikt over registrert usikret gjeld</td>
              </tr>
              <tr className="border-b">
                <td className="py-2">Experian</td>
                <td className="text-gray-600">Ca. 99 kr/mnd eller gratis prøve</td>
                <td className="text-gray-600 text-xs">Detaljert score + faktoranalyse</td>
              </tr>
              <tr className="border-b">
                <td className="py-2">Bisnode</td>
                <td className="text-gray-600">Varierer</td>
                <td className="text-gray-600 text-xs">Kredittscore + næringslivsinfo</td>
              </tr>
              <tr>
                <td className="py-2">Creditsafe</td>
                <td className="text-gray-600">Varierer</td>
                <td className="text-gray-600 text-xs">Gratis testversjon tilgjengelig</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="bg-amber-50 border-l-4 border-amber-400 rounded-r-xl p-6 my-8">
          <h3 className="font-bold text-norsk-dark mb-2">⚠️ Viktig å vite</h3>
          <ul className="space-y-2 text-gray-700 text-sm">
            <li>Kredittscore fra private byråer er <strong>ikke nøyaktig lik</strong> 
              den banken bruker — men den gir en god indikasjon</li>
            <li>Bankene har <em>egne</em> scorekort i tillegg til eksterne data — 
              så din bank-score kan avvike</li>
            <li><strong>Gratis innsyn påvirker IKKE scoren din</strong> — kun 
              långiveres forespørsler (og kun når du søker lån)</li>
          </ul>
        </div>

        <h2>7 konkrete tiltak for å forbedre kredittscoren din</h2>

        <div className="space-y-3 my-6">
          {[
            {
              num: 1,
              title: 'Betal regninger til rett tid — ALLTID',
              desc: 'Dette er alfa og omega. Sett på autogiro/påminnelse for alle faste regninger. Én sen betaling kan stå registrert i opptil 3-5 år. Automatiser alt du kan.',
              tip: 'Sett betalingsfrist til 3-5 dager FØR forfall. Posten er treg.'
            },
            {
              num: 2,
              title: 'Reduser kredittbenyttelsen på kortene',
              desc: 'Hvis du har 20.000 kr i kredittkortgjeld på en 25.000 kr-limit, er du på 80% — et stort rødt flagg. Mål: Under 30% til enhver tid.',
              tip: 'Betal ned kredittkortet minst én gang midt i måneden (ikke bare på forfallsdato).'
            },
            {
              num: 3,
              title: 'Reduser gjeldsgraden',
              desc: 'DTI (debt-to-income) er kritisk. Har du 500.000 kr i usikret gjeld på en inntekt på 600.000 kr, er det 83% — svært høyt. Under 40% er sunt.',
              tip: 'Prioriter å betale ned dyreste gjest (kredittkort først) — men ikke la andre lån vokse i mellomtiden.'
            },
            {
              num: 4,
              title: 'Ha en lang kredithistorikk',
              desc: 'Alderen på dine eldste kredittkonti teller. Har du hatt kredittkort i 15 år med grei bruk, er det bedre enn et nytt kort med perfekt historikk.',
              tip: 'Ikke avslutte gamle kredittkort — det korter ned gjennomsnittlig kredittalder.'
            },
            {
              num: 5,
              title: 'Unngå å søke om mye kreditt på kort tid',
              desc: 'Hver søknad gir en «hard inquiry» som kan redusere scoren midlertidig. Flere på rad = større fall. Spres de over 3-6 måneder er det mindre skadelig.',
              tip: 'Bruk finansportalen.no til å sammenligne uten å søke hos alle. Forhåndsgodkjenning gir som regel ikke tre treff.'
            },
            {
              num: 6,
              title: 'Sjekk registeret og rapporter feil',
              desc: 'Feil i Gjeldsregisteret eller hos kredittbyråer er ikke uvanlig. Gamle, feilregistrerte anmerkninger kan ødelegge scoren din uten grunn.',
              tip: 'Sjekk gjeldsregisteret.no én gang i året og sjekk med Experian/Bisnode. Er det noe feil — meld fra umiddelbart.'
            },
            {
              num: 7,
              title: 'Ha en buffer på konto',
              desc: 'Bankene ser på betalingskapasitet. Har du 3 måneders utgifter i buffer, tåler du en uventet utgift uten å misligholde en betaling.',
              tip: 'Selv 10.000 kr i buffer er bedre enn null. Bygg den opp som del av din spareplan.'
            }
          ].map((item) => (
            <div key={item.num} className="flex gap-4 bg-white border border-gray-200 rounded-xl p-5">
              <div className="flex-shrink-0 w-10 h-10 bg-accent-600 rounded-full flex items-center justify-center text-white font-black text-lg">{item.num}</div>
              <div>
                <h4 className="font-bold text-norsk-dark">{item.title}</h4>
                <p className="text-gray-600 text-sm mt-1 mb-2">{item.desc}</p>
                <p className="text-xs bg-blue-50 text-blue-700 rounded-lg px-3 py-1.5 font-medium">💡 {item.tip}</p>
              </div>
            </div>
          ))}
        </div>

        <h2>Kredittscore-skala: Hva betyr tallene?</h2>
        <p>
          Det finnes ingen offisiell norsk skala, men her er en omtrentlig 
          veiledning basert på vanlige modeller:
        </p>

        <div className="bg-gray-50 rounded-xl p-6 my-6">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b">
                <th className="text-left py-2 font-semibold text-norsk-dark">Score-range</th>
                <th className="text-left py-2 font-semibold text-norsk-dark">Vurdering</th>
                <th className="text-left py-2 font-semibold text-norsk-dark">Typisk rente (forbrukslån)</th>
                <th className="text-left py-2 font-semibold text-norsk-dark">Sjanse for godkjenning</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b bg-green-50">
                <td className="py-2 font-bold text-green-700">75–100 (høy)</td>
                <td className="py-2">Utmerket kredittverdighet</td>
                <td className="py-2 text-green-600">6–10%</td>
                <td className="py-2 text-green-600">Svært høy</td>
              </tr>
              <tr className="border-b bg-blue-50">
                <td className="py-2 font-bold text-blue-700">50–74 (god)</td>
                <td className="py-2">God kredittverdighet</td>
                <td className="py-2 text-blue-600">10–14%</td>
                <td className="py-2 text-blue-600">Høy</td>
              </tr>
              <tr className="border-b bg-yellow-50">
                <td className="py-2 font-bold text-yellow-700">25–49 (moderat)</td>
                <td className="py-2">Akseptabel kredittverdighet</td>
                <td className="py-2 text-yellow-600">14–18%</td>
                <td className="py-2 text-yellow-600">Moderat</td>
              </tr>
              <tr className="border-b bg-orange-50">
                <td className="py-2 font-bold text-orange-700">10–24 (lav)</td>
                <td className="py-2">Begrenset kredittverdighet</td>
                <td className="py-2 text-orange-600">18–25%</td>
                <td className="py-2 text-orange-600">Lav</td>
              </tr>
              <tr className="bg-red-50">
                <td className="py-2 font-bold text-red-700">0–9 (svært lav)</td>
                <td className="py-2">Høy risiko</td>
                <td className="py-2 text-red-600">25%+ eller avslag</td>
                <td className="py-2 text-red-600">Veldig lav / avslag</td>
              </tr>
            </tbody>
          </table>
          <p className="text-xs text-gray-500 mt-3">
            * Tabellen er veiledende. Ulike kredittbyråer og banker bruker ulike skalaer. 
            Det viktige er <em>relativ</em> plassering — altså hvor du er sammenlignet 
            med andre søkere.
          </p>
        </div>

        <h2>Vanlige myter om kredittscore i Norge</h2>

        <div className="space-y-3 my-6">
          {[
            {
              myth: '«Å sjekke egen kredittscore skader scoren»',
              fact: 'Nei! Kun «hard inquiries» fra långivere påvirker. Din egen sjekk er «myk» og påvirker ikke tallet.'
            },
            {
              myth: '«Inntekt påvirker ikke kredittscoren»',
              fact: 'Feil. Din inntekt og gjeldsgrad (DTI) er en sentral del av vurderingen. Høy inntekt + lav gjeld = høyere score.'
            },
            {
              myth: '«Kredittscore er hemmelig i Norge»',
              fact: 'Nei, du har full rett til innsyn. Bruk Experian, Bisnode eller Gjeldsregisteret.'
            },
            {
              myth: '«Det tar år å forbedre kredittscoren»',
              fact: 'Feil. De fleste negative factorer (f.eks. sen betaling) faller av etter 1-3 år. Og du kan forbedre poengsummen raskt ved å betale ned kredittkortbruk.'
            },
            {
              myth: '«Du trenger kredittkortgjeld for å ha god score»',
              fact: 'Feil. Kredittscoren handler om å håndtere kreditt ansvarlig — ikke om å skylde. Å ha et kredittkort du bruker men alltid betaler ned, er bedre enn å ha gjeld.'
            }
          ].map((item) => (
            <div key={item.myth} className="flex gap-3 bg-white border border-gray-200 rounded-xl p-4">
              <div className="text-red-400 text-xl">❌</div>
              <div>
                <p className="font-semibold text-norsk-dark text-sm">{item.myth}</p>
                <p className="text-green-700 text-sm mt-1"><strong>Faktisk:</strong> {item.fact}</p>
              </div>
            </div>
          ))}
        </div>

        <h2>Hva med kredittscore og boliglån?</h2>
        <p>
          For boliglån spiller kredittscore en rolle, men sikkerheten i boligen 
          veier tungt. Banken kan ta pant i boligen, så risikoen er lavere for 
          dem — og dermed er boliglånsrenten mer avhengig av:
        </p>
        <ul>
          <li><strong>LTV (loan-to-value):</strong> Hvor mye du låner i forhold til boligens verdi</li>
          <li><strong>Egenkapital:</strong> Jo mer, desto bedre rente</li>
          <li><strong>Inntekt og jobbsikkerhet:</strong> Fast inntekt veier tungt</li>
        </ul>

        <div className="bg-accent-50 border-l-4 border-accent-500 rounded-r-xl p-6 my-8">
          <h3 className="font-bold text-norsk-dark mb-2">🏠 God nyhet</h3>
          <p className="text-gray-700">
            For boliglån er det viktigste verktøyet ditt <strong>egenkapital</strong> — 
            ikke nødvendigvis perfekt kredittscore. Med 25-40% egenkapital får de 
            fleste boliglån uansett. Men god kredittscore kan fortsatt gi 0,2-0,5% 
            lavere rente — som over 25 år utgjør titusenvis av kroner.
          </p>
        </div>

        <div className="bg-primary-50 rounded-xl p-6 my-8">
          <h3 className="font-bold text-norsk-dark mb-2">💡 Neste steg</h3>
          <p className="text-gray-700 mb-4">
            Kredittscore er et dynamisk verktøy — det endres hele tiden basert 
            på din økonomiske atferd. Start i dag med én av disse handlingene:
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/lan" className="inline-flex items-center gap-2 bg-primary-600 text-white font-medium py-2 px-4 rounded-lg hover:bg-primary-700 transition-colors text-sm">
              Sjekk beste forbrukslån →
            </Link>
            <Link href="/kredittkort" className="inline-flex items-center gap-2 border border-primary-600 text-primary-600 font-medium py-2 px-4 rounded-lg hover:bg-primary-50 transition-colors text-sm">
              Sammenlign kredittkort →
            </Link>
            <a href="https://gjeldsregisteret.no" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-white border border-gray-300 text-gray-700 font-medium py-2 px-4 rounded-lg hover:bg-gray-50 transition-colors text-sm">
              Gjeldsregisteret.no →
            </a>
          </div>
        </div>

        <h2>Oppsummering: Din kredittscore-sjekkliste</h2>
        <ol>
          <li><strong>Sjekk scoren din:</strong> Gjeldsregisteret + minst én privat tjeneste (Experian el.)</li>
          <li><strong>Få oversikt over gjelden din:</strong> Alt på ett sted — inkluderer alle kredittkort</li>
          <li><strong>Reduser kredittbenyttelsen:</strong> Mål: under 30% av limit</li>
          <li><strong>Automatiser betalinger:</strong> Ingen flere sene betalinger</li>
          <li><strong>Rapporter feil:</strong> Hvis noe er feil i registeret — meld fra umiddelbart</li>
          <li><strong>Vent 3-6 måneder:</strong> Deretter sjekk scoren igjen — og feir fremgangen</li>
        </ol>

        <p>
          Kredittscore er ikke en dom — det er et øyeblikksbilde av din 
          økonomiske historikk. Den gode nyheten? Du har kontrollen. 
          Hver regning du betaler, hver kreditt du bruker ansvarlig, 
          hver gang du sier nei til ny gjeld du ikke trenger — 
          det bygger scoren din. Steg for steg.
        </p>

        <p className="text-sm text-gray-500 mt-8">
          <strong>Forfatter:</strong> Pengepraten | <strong>Sist oppdatert:</strong> 9. april 2026<br />
          Artikkelen er ment som veiledning og utgjør ikke finansiell rådgivning. 
          Vurder din egen situasjon nøye før du tar økonomiske beslutninger.
        </p>
      </article>
    </>
  )
}
