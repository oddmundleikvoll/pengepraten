import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Samle Lån: Slik Sparer Du Tusenvis i 2026 | Pengepraten',
  description: 'Har du flere lån? Se hvor mye du kan spare med samlelån. Eksempel: 200.000 kr i gjeld — spar 12.000 kr/år. Full guide til refinansiering i 2026.',
  keywords: ['samle lån', 'samlelån', 'refinansiering', 'samle gjeld', 'spare på lån'],
}

export default function SamleLanPage() {
  return (
    <>
      {/* HERO */}
      <section className="bg-gradient-to-br from-green-600 to-emerald-700 text-white py-16 md:py-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-1/3 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/3" />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6">
          <nav className="text-green-200 text-sm mb-6">
            <Link href="/">Hjem</Link>
            <span className="mx-2">/</span>
            <Link href="/lan">Lån</Link>
            <span className="mx-2">/</span>
            <span className="text-white">Samle lån</span>
          </nav>
          <div className="flex flex-col lg:flex-row gap-10 items-center">
            <div className="flex-1">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/15 rounded-full text-sm font-semibold mb-5 backdrop-blur-sm">
                <span className="text-amber-300">💰</span>
                <span>Oppdatert mai 2026</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-4 leading-tight">
                Samle lån:{' '}
                <span className="text-amber-300">Sparer du tusenvis?</span>
              </h1>
              <p className="text-green-100 text-lg md:text-xl max-w-2xl leading-relaxed">
                Har du flere lån og kredittkortgjeld? Å samle alt til ett lån med lavere rente kan spare deg for{' '}
                <strong className="text-white">10.000+ kroner i året</strong>.
              </p>
            </div>
            {/* Quick stats */}
            <div className="shrink-0 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 p-6 min-w-[260px]">
              <div className="text-sm font-semibold text-green-200 mb-3">Typisk sparing</div>
              <div className="text-5xl font-black text-amber-300 mb-1">12.000</div>
              <div className="text-green-200 text-sm mb-4">kr/år ved 200.000 kr gjeld</div>
              <div className="space-y-2">
                {[
                  { label: 'Før', value: '14–22% rente' },
                  { label: 'Etter', value: '7–10% rente' },
                  { label: 'Tidsbruk', value: '15 minutter' },
                ].map(item => (
                  <div key={item.label} className="flex justify-between text-sm">
                    <span className="text-green-200">{item.label}</span>
                    <span className="font-semibold text-white">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INNHOLD */}
      <article className="max-w-5xl mx-auto px-4 sm:px-6 py-12 article-content space-y-10">

        {/* INTRO */}
        <div className="bg-green-50 rounded-2xl p-7 border-l-4 border-green-600">
          <p className="text-lg text-gray-800 leading-relaxed">
            <span className="text-2xl mr-2">💡</span>
            <strong>Samlelån</strong> (også kalt refinansiering eller gjeldskonsolidering) betyr at du tar opp ett nytt lån for å betale ut alle eksisterende smålån, kredittkort og dyre forbrukslån. Resultat: Én faktura, lavere rente, og tusenvis spart.
          </p>
        </div>

        {/* HVA ER SAMLELÅN */}
        <section>
          <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-4 flex items-center gap-2">
            <span>📦</span> Hva er et samlelån?
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Et samlelån er rett og slett ett større lån som erstatter flere mindre lån. I stedet for å betale på 3–4 ulike lån med ulik rente, får du én samlet nedbetaling — ofte med mye lavere rente enn gjennomsnittet av de gamle lånene dine.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            {[
              { emoji: '📉', title: 'Lavere rente', desc: 'Erstatt dyre smålån med ett billigere lån' },
              { emoji: '📋', title: 'Bedre oversikt', desc: 'Én faktura i stedet for mange — ingen surr' },
              { emoji: '⏱️', title: 'Raskere nedbetalt', desc: 'Med lavere rente går mer til nedbetaling' },
            ].map(item => (
              <div key={item.title} className="bg-white rounded-xl p-5 border border-gray-200 shadow-sm hover:shadow-md transition-all">
                <div className="text-3xl mb-3">{item.emoji}</div>
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* REGNESTYKKE */}
        <section>
          <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-6 flex items-center gap-2">
            <span>🧮</span> Regnestykket: Hvor mye kan du spare?
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            La oss si du har følgende gjeld i dag. Dette er et ganske vanlig mønster for mange nordmenn:
          </p>

          {/* FØR */}
          <div className="bg-red-50 rounded-2xl p-6 border border-red-200 mb-6">
            <h3 className="font-bold text-red-800 mb-4 flex items-center gap-2">
              <span>❌</span> Før: Fragmentert gjeld med høy rente
            </h3>
            <div className="space-y-3">
              {[
                { name: 'Kredittkortgjeld', amount: '50.000 kr', rate: '22%', yearly: '11.000 kr/år i renter' },
                { name: 'Forbrukslån 1', amount: '100.000 kr', rate: '15%', yearly: '15.000 kr/år i renter' },
                { name: 'Forbrukslån 2', amount: '75.000 kr', rate: '18%', yearly: '13.500 kr/år i renter' },
              ].map((item, i) => (
                <div key={i} className="flex justify-between items-center py-3 border-b border-red-100 last:border-0">
                  <div>
                    <div className="font-semibold text-gray-800">{item.name}</div>
                    <div className="text-sm text-gray-500">{item.amount} med {item.rate} rente</div>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-red-700">{item.yearly}</div>
                  </div>
                </div>
              ))}
              <div className="bg-red-100 rounded-lg p-4 flex justify-between items-center">
                <div className="font-bold text-red-800">Totalt i renter per år:</div>
                <div className="font-black text-red-800 text-xl">39.500 kr</div>
              </div>
            </div>
          </div>

          {/* ETTER */}
          <div className="bg-green-50 rounded-2xl p-6 border border-green-200 mb-6">
            <h3 className="font-bold text-green-800 mb-4 flex items-center gap-2">
              <span>✅</span> Etter: Samlet lån med lavere rente
            </h3>
            <div className="space-y-3">
              {[
                { name: 'Samlelån', amount: '225.000 kr', rate: '9%', yearly: '20.250 kr/år i renter' },
              ].map((item, i) => (
                <div key={i} className="flex justify-between items-center py-3 border-b border-green-100 last:border-0">
                  <div>
                    <div className="font-semibold text-gray-800">{item.name}</div>
                    <div className="text-sm text-gray-500">{item.amount} med {item.rate} rente</div>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-green-700">{item.yearly}</div>
                  </div>
                </div>
              ))}
              <div className="bg-green-100 rounded-lg p-4 flex justify-between items-center">
                <div className="font-bold text-green-800">Totalt i renter per år:</div>
                <div className="font-black text-green-800 text-xl">20.250 kr</div>
              </div>
            </div>
          </div>

          {/* SPARING */}
          <div className="bg-gradient-to-br from-green-600 to-emerald-700 rounded-2xl p-8 text-white text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/4" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/4" />
            <div className="relative">
              <div className="text-sm font-semibold text-green-200 mb-2">Din årlige sparing</div>
              <div className="text-5xl md:text-6xl font-black text-amber-300 mb-2">19.250 kr</div>
              <div className="text-green-100 mb-4">per år med samlelån</div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-lg mx-auto text-sm">
                <div className="bg-white/10 rounded-lg p-3">
                  <div className="font-bold text-white">5 år</div>
                  <div className="text-green-200">≈ 96.000 kr spart</div>
                </div>
                <div className="bg-white/10 rounded-lg p-3">
                  <div className="font-bold text-white">10 år</div>
                  <div className="text-green-200">≈ 193.000 kr spart</div>
                </div>
                <div className="bg-white/10 rounded-lg p-3">
                  <div className="font-bold text-white">Per måned</div>
                  <div className="text-green-200">≈ 1.600 kr mindre</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SPARETABELL */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <span>📊</span> Hvor mye kan du spare? Sjekk tabellen
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Her ser du besparelsen ved å samle lån, basert på ulike gjeldsbeløp og rente-forskjeller:
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse rounded-xl overflow-hidden shadow-sm">
              <thead>
                <tr className="bg-gray-800 text-white">
                  <th className="text-left p-4 font-bold">Gjeld</th>
                  <th className="text-left p-4 font-bold">Før (snittrente)</th>
                  <th className="text-left p-4 font-bold">Etter (samlelån)</th>
                  <th className="text-left p-4 font-bold bg-green-600">Årlig sparing</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { amount: '100.000 kr', before: '18%', after: '9%', save: '9.000 kr/år' },
                  { amount: '200.000 kr', before: '17%', after: '8,5%', save: '17.000 kr/år' },
                  { amount: '300.000 kr', before: '16%', after: '8%', save: '24.000 kr/år' },
                  { amount: '400.000 kr', before: '15%', after: '7,5%', save: '30.000 kr/år' },
                ].map((row, i) => (
                  <tr key={i} className={`border-b border-gray-100 ${i % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'}`}>
                    <td className="p-4 font-semibold text-gray-900">{row.amount}</td>
                    <td className="p-4 text-gray-700">{row.before}</td>
                    <td className="p-4 text-green-700 font-bold">{row.after}</td>
                    <td className="p-4 text-green-700 font-black">{row.save}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-3">
            * Beregningene er veiledende. Din faktiske sparing avhenger av din kredittscore, lånehistorikk og hvilke tilbud du får fra bankene.
          </p>
        </section>

        {/* SLIK SØKER DU */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <span>📝</span> Slik søker du om samlelån — 4 enkle steg
          </h2>
          <div className="space-y-4">
            {[
              { n: '1', title: 'Kartlegg gjelden din', desc: 'Noter alle lån, renter og restbeløp. Sjekk nettbanken eller kontakt bankene. Du trenger totalbilde for å vite hva du skal refinansiere.' },
              { n: '2', title: 'Sjekk din kredittscore', desc: 'God kredittscore gir bedre rente. Sjekk om du har betalingsanmerkninger eller forsinkelser som kan påvirke søknaden. Jo bedre score, desto bedre tilbud.' },
              { n: '3', title: 'Søk hos flere banker', desc: 'Bruk låneformidlere som Axo Finans eller Arcadia Finans for å få tilbud fra flere banker samtidig. Du velger det beste tilbudet — helt uforpliktende.' },
              { n: '4', title: 'Betal ut gammel gjeld', desc: 'Når samlelånet er godkjent, bruk pengene til å betale ut alle gamle lån og kredittkort. Husk å si opp kredittkortene så du ikke bygger opp ny gjeld.' },
            ].map(item => (
              <div key={item.n} className="flex items-start gap-5 bg-white rounded-xl p-5 border border-gray-200 shadow-sm hover:shadow-md transition-all">
                <div className="w-11 h-11 rounded-full bg-green-600 text-white flex items-center justify-center font-bold text-lg flex-shrink-0 shadow-sm">{item.n}</div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* VANLIGE SPØRSMÅL */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <span>❓</span> Vanlige spørsmål om samlelån
          </h2>
          <div className="space-y-4">
            {[
              { q: 'Påvirker samlelån kredittscoren min?', a: 'Søknaden gir en midlertidig liten nedgang i kredittscore (som alle lånesøknader). Men når gamle lån er nedbetalt og du får bedre betalingshistorikk, vil scoren din som regel forbedres betydelig over tid.' },
              { q: 'Kan jeg samle lån med betalingsanmerkning?', a: 'Det er vanskeligere, men ikke umulig. Noen spesialiserte banker og låneformidlere tilbyr refinansiering også for deg med betalingsanmerkning. Rente blir høyere, men du kan fortsatt spare penger.' },
              { q: 'Hva koster det å samle lån?', a: 'Ingen direkte kostnad hos de fleste banker. Men pass på etableringsgebyr og eventuelle termingebyrer. Sammenlign ÅOP (årlig effektiv rente) — den inkluderer alle gebyrer.' },
              { q: 'Bør jeg si opp gamle kredittkort?', a: 'Ja, absolutt. Det nytter ikke å samle lån hvis du bygger opp ny kredittkortgjeld. Si opp kortene eller reduser kredittgrensen kraftig. Dette er viktig for å ikke ende i samme situasjon igjen.' },
            ].map((faq, i) => (
              <details key={i} className="group bg-white rounded-xl border border-gray-200 overflow-hidden">
                <summary className="flex items-center justify-between gap-4 px-6 py-5 cursor-pointer font-bold text-gray-800 hover:text-green-600 transition-colors list-none">
                  <span className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-green-100 text-green-700 text-xs font-bold flex items-center justify-center shrink-0">{i + 1}</span>
                    {faq.q}
                  </span>
                  <svg className="w-5 h-5 text-gray-400 group-open:rotate-180 transition-transform shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-6 pb-5 text-gray-600 text-sm leading-relaxed border-t border-gray-100 pt-4">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-br from-green-600 to-emerald-700 rounded-2xl p-10 text-white text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/4" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/4" />
          <div className="relative">
            <h2 className="text-3xl md:text-4xl font-black mb-4">Klar til å spare tusenvis?</h2>
            <p className="text-green-100 text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
              Et samlelån tar 15 minutter å søke om, men kan spare deg for hundretusener over lånets levetid. Start i dag.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/verktøy/lånekalkulator" className="inline-flex items-center justify-center gap-2 bg-amber-400 hover:bg-amber-300 text-green-900 font-extrabold px-8 py-4 rounded-xl text-lg shadow-lg transition-all hover:scale-105">
                <span>🧮</span> Prøv lånekalkulatoren
              </Link>
              <Link href="/lan/refinansiering-spar-paa-gjelden" className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-bold px-6 py-4 rounded-xl transition-colors border border-white/30">
                📚 Alt om refinansiering
              </Link>
            </div>
          </div>
        </section>

        {/* RELATERTE ARTIKLER */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-5 flex items-center gap-2">
            <span>📚</span> Relaterte artikler
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { href: '/lan/refinansiering-spar-paa-gjelden', emoji: '🔄', title: 'Refinansiering: Spar på gjelden', desc: 'Alt du trenger å vite om refinansiering i 2026' },
              { href: '/lan/nar-lonner-refinansiering', emoji: '🤔', title: 'Når lønner refinansiering seg?', desc: 'Finn ut om refinansiering er riktig for deg' },
              { href: '/verktøy/lånekalkulator', emoji: '🧮', title: 'Lånekalkulator', desc: 'Beregn månedskostnad og total rente for ditt lån' },
              { href: '/lan/beste-forbrukslan-2026', emoji: '🏦', title: 'Beste forbrukslån 2026', desc: 'Sammenlign renter og vilkår fra norske banker' },
            ].map(item => (
              <Link key={item.href} href={item.href} className="block bg-white rounded-xl p-5 border border-gray-200 hover:border-green-400 hover:shadow-md transition-all group">
                <div className="flex items-center gap-4">
                  <span className="text-3xl">{item.emoji}</span>
                  <div>
                    <h3 className="font-bold text-gray-900 group-hover:text-green-700 transition-colors">{item.title}</h3>
                    <p className="text-gray-500 text-sm">{item.desc}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <p className="text-sm text-gray-400 pt-8 border-t">
          Sist oppdatert: mai 2026. Rentene og vilkår er veiledende. Sjekk alltid bankens nettsider for oppdaterte priser før du søker.
        </p>
      </article>
    </>
  )
}
