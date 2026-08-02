import Link from 'next/link'
import ArticleCard from '@/components/ArticleCard'
import { getArticlesByPillar } from '@/lib/articles'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Sparing August 2026 — Beste Sparekonto, Høyrente, BSU & Sparetips | Pengepraten',
  description: 'Finn den beste sparekontoen og høyrentekontoen i Norge august 2026. Sammenlign BSU, IPS og høyrentekonto. Få opptil 4,65% rente og 10% skattefradrag med våre sparetips.',
  keywords: ['sparing', 'beste sparekonto', 'høyrentekonto', 'BSU', 'sparetips', 'sparekonto 2026', 'høyrente 2026'],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Hva er beste sparekonto 2026?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Den beste sparekontoen i august 2026 er en høyrentekonto med god rente og ingen bindingstid. Svea Bank og Bank Norwegian Sparekonto 31 tilbyr 4,65%, OBOS Sparekonto Langsiktig 4,55%, og Nordax Sparekonto Smart 4,50%. Velg den banken som kombinerer høy rente med lav risiko og god innskuddsgaranti. En vanlig brukskonto gir i dag kun 0,5-1% rente, som langt under inflasjonen.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hva er BSU?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'BSU (Boligsparing for Ungdom) er Norges beste spareform for personer under 34 år. Du får 10% skattefradrag på inntil 27.500 kr i årlig innskudd, pluss sparekonto-rente. Med renter på 3-5% og skattefradraget blir effektiv avkastning rundt 14%. BSU er den mest lønnsomme spareformen for unge i Norge.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hva er høyrentekonto?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'En høyrentekonto er en sparekonto med høyere rente enn en vanlig brukskonto. I 2026 tilbyr flere banker 4-4,65% rente på høyrentekontoer, mot 0,5-1% på brukskonto. De fleste høyrentekontoer har ingen bindingstid, men noen krever at du setter inn et minstebeløp. Innskuddsgarantien dekker opptil 2 millioner kroner.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hvor mye kan jeg tjene på sparing?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Med 4,65% rente på 100.000 kr tjener du 4.650 kr i året. Med 4,65% rente på 500.000 kr tjener du 23.250 kr i året. BSU gir enda mer: med 10% skattefradrag og 4% rente blir effektiv avkastning rundt 14% på 27.500 kr — det vil si 3.850 kr per år i ren gevinst. Bruker du vår sparekalkulator kan du se nøyaktig hvor mye du kan tjene.',
      },
    },
    {
      '@type': 'Question',
      name: 'Skal jeg spare eller betale ned lån?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Det avhenger av renten på lånet ditt. Har du boliglån med 4-5% rente, lønner det seg ofte å betale ned lån først. Har du forbrukslån med 10-20% rente, bør du nesten alltid prioritere å betale ned lånet før sparing. Unntaket er BSU, som gir så god avkastning (14%) at den lønner seg uansett.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hva er innskuddsgaranti?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Innskuddsgarantien er en ordning som sikrer at du får tilbake inntil 2 millioner kroner dersom banken går konkurs. Alle banker med tillatelse fra Finanstilsynet er omfattet. Dette gjør sparing i norske banker trygt — du risikerer ikke å miste pengene dine selv om banken skulle gå dårlig.',
      },
    },
  ],
}

export default function SparingPage() {
  const articles = getArticlesByPillar('sparing')

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero — Nordic Clarity editorial */}
      <section className="bg-paper text-ink py-16 border-b border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <nav className="font-mono text-xs uppercase tracking-wider text-ink-muted mb-6">
            <Link href="/" className="hover:text-forest transition-colors">Hjem</Link>
            <span className="mx-2 text-border-strong">/</span>
            <span className="text-ink">Sparing</span>
          </nav>
          <h1 className="text-3xl md:text-5xl font-medium font-display leading-[1.08] mb-4">Sparing August 2026</h1>
          <p className="text-xl text-ink-muted max-w-2xl leading-relaxed">
            Finn den beste sparekontoen og få tips om BSU, IPS og smart sparing. 
            Opp til 4,65% rente — slik får du pengene dine til å vokse.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main content */}
          <div className="lg:col-span-2 space-y-12">

            {/* Intro: Hvorfor spare i 2026? */}
            <div className="bg-white rounded-xl border border-gray-100 p-8">
              <h2 className="text-2xl font-bold text-norsk-dark mb-4">Hvorfor spare i 2026?</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                I august 2026 er det viktigere enn noensinne å spare smart. Inflasjonen har spist av kjøpekraften til norske sparepenger i flere år, og pengene dine mister verdi hvis de står på en vanlig brukskonto med 0,5-1% rente. Samtidig har Norges Bank hevet styringsrenten til 4,25%, og bankene har fulgt etter med høyere sparekonto-renter.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Kronen er sterkere enn på lenge, noe som gjør sparing i norske kroner mer attraktivt. En sterk krone betyr lavere importpriser og mindre inflasjonspress fremover. For deg som sparer betyr dette at realrenten — renten minus inflasjon — er bedre enn på flere år. Det er derfor et utmerket tidspunkt å starte eller øke sparingen.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Hovedutfordringen for vanlige nordmenn er at de fleste brukskontoer fortsatt gir nesten null rente. Mens Norges Bank har hevet renten til 4,25%, gir de største bankene kun 0,5-1% på brukskontoer. Forskjellen mellom en brukskonto og en god høyrentekonto kan bety tusenvis av kroner i tapt avkastning hvert år. Penger som står på brukskonto tapes til inflasjon — og det er helt unødvendig.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Les mer om hvordan du kan utnytte den sterke kronen i vår artikkel om <Link href="/sparing/kronen-sterk-2026" className="text-green-600 hover:text-green-700 font-medium">kronen sterk 2026</Link>. Vi gir deg fem konkrete måter å dra nytte av situasjonen på.
              </p>
            </div>

            {/* Beste spareformer 2026 */}
            <div>
              <h2 className="text-2xl font-bold text-norsk-dark mb-4">Beste spareformer 2026 — sammenligning</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Det finnes mange måter å spare på i Norge. Her er en rask oversikt over de mest populære spareformene, med forventet avkastning, risiko og skattefordeler. Se våre detaljerte guider for hver spareform.
              </p>

              <div className="overflow-x-auto mb-6">
                <table className="w-full text-sm border border-gray-200 rounded-xl overflow-hidden">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="text-left px-4 py-3 font-semibold text-gray-700">Sparingsform</th>
                      <th className="text-left px-4 py-3 font-semibold text-gray-700">Forventet avkastning</th>
                      <th className="text-left px-4 py-3 font-semibold text-gray-700">Risiko</th>
                      <th className="text-left px-4 py-3 font-semibold text-gray-700">Skattefordeler</th>
                      <th className="text-left px-4 py-3 font-semibold text-gray-700">Beste for</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    <tr className="bg-white hover:bg-gray-50">
                      <td className="px-4 py-3 font-medium text-norsk-dark">Høyrentekonto</td>
                      <td className="px-4 py-3 text-green-600 font-medium">4-4,65%</td>
                      <td className="px-4 py-3 text-gray-600">Ingen (innskuddsgaranti)</td>
                      <td className="px-4 py-3 text-gray-600">Renteinntekt beskattes (22%)</td>
                      <td className="px-4 py-3 text-gray-600">Kortsiktig sparing, nødfond, fleksibilitet</td>
                    </tr>
                    <tr className="bg-white hover:bg-gray-50">
                      <td className="px-4 py-3 font-medium text-norsk-dark">BSU</td>
                      <td className="px-4 py-3 text-green-600 font-medium">~14% effektivt</td>
                      <td className="px-4 py-3 text-gray-600">Ingen</td>
                      <td className="px-4 py-3 text-green-600 font-medium">10% skattefradrag</td>
                      <td className="px-4 py-3 text-gray-600">Ungdom under 34, boligsparing</td>
                    </tr>
                    <tr className="bg-white hover:bg-gray-50">
                      <td className="px-4 py-3 font-medium text-norsk-dark">IPS</td>
                      <td className="px-4 py-3 text-gray-600">3-6% + fond</td>
                      <td className="px-4 py-3 text-gray-600">Lav-middels</td>
                      <td className="px-4 py-3 text-green-600 font-medium">Skattefradrag inntil 8%</td>
                      <td className="px-4 py-3 text-gray-600">Langsiktig pensjonssparing</td>
                    </tr>
                    <tr className="bg-white hover:bg-gray-50">
                      <td className="px-4 py-3 font-medium text-norsk-dark">Aksjesparing / Indeksfond</td>
                      <td className="px-4 py-3 text-gray-600">6-10% (langsiktig)</td>
                      <td className="px-4 py-3 text-amber-600 font-medium">Høy (svingninger)</td>
                      <td className="px-4 py-3 text-gray-600">Ingen direkte</td>
                      <td className="px-4 py-3 text-gray-600">Langsiktig sparing, 10+ år</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-sm text-gray-500 italic mb-4">* Avkastning er estimater basert på markedsforhold august 2026. Aksjemarkedet svinger, historisk avkastning er ikke garanti for fremtidig.</p>
              <p className="text-gray-600 leading-relaxed">
                For en dypere analyse av hver spareform, les våre guider om <Link href="/sparing/hoyrentekonto" className="text-green-600 hover:text-green-700 font-medium">høyrentekonto</Link>, <Link href="/sparing/bsu-guide" className="text-green-600 hover:text-green-700 font-medium">BSU</Link>, <Link href="/sparing/ips-individuell-pensjonssparing" className="text-green-600 hover:text-green-700 font-medium">IPS</Link>, og <Link href="/sparing/indeksfond-nybegynnere" className="text-green-600 hover:text-green-700 font-medium">indeksfond for nybegynnere</Link>.
              </p>
            </div>

            {/* Beste høyrentekonto akkurat nå */}
            <div className="bg-white rounded-xl border border-gray-100 p-8">
              <h2 className="text-2xl font-bold text-norsk-dark mb-4">Beste høyrentekonto akkurat nå</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Etter Norges Banks renteheving til 4,25% i mai 2026 har flere banker justert opp sparekonto-rentene. Her er de tre beste høyrentekontoene i august 2026:
              </p>

              <div className="grid md:grid-cols-3 gap-4 mb-6">
                <div className="bg-green-50 rounded-xl p-5 border border-green-100">
                  <div className="text-3xl font-black text-green-700 mb-1">4,65%</div>
                  <p className="font-semibold text-norsk-dark">Svea Bank</p>
                  <p className="text-sm text-gray-600 mt-2">Svensk nettbank som topper markedet med 4,65% rente. Ingen bindingstid, ubegrenset uttak.</p>
                </div>
                <div className="bg-green-50 rounded-xl p-5 border border-green-100">
                  <div className="text-3xl font-black text-green-700 mb-1">4,55%</div>
                  <p className="font-semibold text-norsk-dark">OBOS Sparekonto Langsiktig</p>
                  <p className="text-sm text-gray-600 mt-2">Norsk medlemsbank med 4,55% rente fra første krone. OBOS-medlemskap kan gi ytterligere fordeler.</p>
                </div>
                <div className="bg-green-50 rounded-xl p-5 border border-green-100">
                  <div className="text-3xl font-black text-green-700 mb-1">4,50%</div>
                  <p className="font-semibold text-norsk-dark">Nordax Sparekonto Smart</p>
                  <p className="text-sm text-gray-600 mt-2">NOBA Bank Group tilbyr 4,50% på Sparekonto Smart. Fri tilgang, fra første krone.</p>
                </div>
              </div>

              <p className="text-gray-600 leading-relaxed mb-4">
                Hva som er den <strong>beste høyrentekontoen</strong> for deg avhenger av dine behov. Vil du ha den høyest mulige rente, er Svea Bank og Bank Norwegian Sparekonto 31 best med 4,65%. Vil du ha en norsk medlemsbank med god rente, er OBOS Sparekonto Langsiktig et utmerket valg.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Husk at høyrente endrer seg raskt. Bankene justerer rentene opp og ned i takt med Norges Banks styringsrente. Derfor lønner det seg å holde seg oppdatert. Se vår <Link href="/sparing/hoyrentekonto" className="text-green-600 hover:text-green-700 font-medium">komplette høyrentekonto-guide</Link> for en oppdatert oversikt over alle banker og deres renter. Artikkelen inneholder annonselenker.
              </p>
            </div>

            {/* BSU */}
            <div className="bg-white rounded-xl border border-gray-100 p-8">
              <h2 className="text-2xl font-bold text-norsk-dark mb-4">BSU — Norges beste spareform for unge</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Hvis du er under 34 år, er BSU utvilsomt den beste spareformen i Norge. Du får 10% skattefradrag på inntil 27.500 kroner i årlig innskudd. Det betyr at staten gir deg 2.750 kr tilbake på skatten hvert år du sparer maksimalt.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                I tillegg til skattefradraget får du rente på BSU-kontoen, typisk 3-5%. Når du legger sammen skattefradraget og renten, blir effektiv avkastning rundt 14% per år. Ingen annen risikofri spareform i Norge kommer i nærheten av dette.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                BSU er bundet til boligkjøp — du kan kun bruke pengene til egenkapital eller boliglån. Dette er en fordel for deg som uansett planlegger å kjøpe bolig. Maksimalt innskudd over tid er 300.000 kr, og du kan spare i BSU frem til du fyller 34 år.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Lær alt om BSU i vår <Link href="/sparing/bsu-guide" className="text-green-600 hover:text-green-700 font-medium">komplette BSU-guide</Link>. Prøv også <Link href="/verktøy/sparekalkulator" className="text-green-600 hover:text-green-700 font-medium">sparekalkulatoren</Link> for å se hvor mye du kan tjene med BSU over tid.
              </p>
            </div>

            {/* 5 sparetips */}
            <div className="bg-white rounded-xl border border-gray-100 p-8">
              <h2 className="text-2xl font-bold text-norsk-dark mb-4">5 sparetips som fungerer</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Smart sparing handler ikke bare om å finne den beste sparekontoen med høy rente. Her er fem praktiske sparetips som fungerer for vanlige nordmenn i 2026:
              </p>

              <ol className="space-y-5 text-gray-600 leading-relaxed list-decimal list-inside mb-6">
                <li>
                  <strong className="text-norsk-dark">Sett opp automatisk sparing:</strong> Overfør et fast beløp til sparekonto umiddelbart etter lønning. Når sparingen er automatisk, merker du ikke at pengene er borte. Selv 1.000 kr i måneden blir 12.000 kr i året — pluss rente.
                </li>
                <li>
                  <strong className="text-norsk-dark">Skill sparekonto fra brukskonto:</strong> Penger på brukskonto med 0,5% rente tapes til inflasjon. Flytt alt du ikke trenger i dag til en høyrentekonto med 4-5% rente. Det er forskjellen på å tape og å tjene penger.
                </li>
                <li>
                  <strong className="text-norsk-dark">Prioriter BSU først:</strong> Hvis du er under 34, er BSU den mest lønnsomme spareformen. Maksimer BSU-innskuddet (27.500 kr/år) før du sparer andre steder. 14% effektiv avkastning er uslåelig.
                </li>
                <li>
                  <strong className="text-norsk-dark">Diversifiser sparingen:</strong> Ha et nødfond på høyrentekonto (3-6 måneders utgifter), bruk BSU til bolig, og vurder indeksfond for langsiktig sparing over 10 år. Ikke putt alle eggene i én kurv.
                </li>
                <li>
                  <strong className="text-norsk-dark">Hold deg oppdatert på renter:</strong> Bankene endrer renter raskt. Hver gang Norges Bank endrer styringsrenten, bør du sjekke om din høyrentekonto har fulgt med. Bytt bank hvis du finner bedre rente — det er gratis og enkelt.
                </li>
              </ol>

              <p className="text-gray-600 leading-relaxed">
                For mer detaljerte budsjetterings- og sparingstips, les vår guide om <Link href="/budsjett/kom-i-gang-med-budsjett" className="text-green-600 hover:text-green-700 font-medium">å komme i gang med budsjett</Link> og vår <Link href="/sparing/spareplan-guide" className="text-green-600 hover:text-green-700 font-medium">spareplan-guide</Link>.
              </p>
            </div>

            {/* FAQ */}
            <div className="bg-white rounded-xl border border-gray-100 p-8">
              <h2 className="text-2xl font-bold text-norsk-dark mb-6">Ofte stilte spørsmål om sparing</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-norsk-dark mb-2">Hva er beste sparekonto 2026?</h3>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    Svea Bank og Bank Norwegian Sparekonto 31 (4,65%), OBOS Sparekonto Langsiktig (4,55%) og Nordax Sparekonto Smart (4,50%) tilbyr de beste høyrentekontoene. En vanlig brukskonto gir kun 0,5-1% — langt under inflasjonen. Les vår <Link href="/sparing/hoyrentekonto" className="text-green-600 hover:text-green-700 font-medium">høyrentekonto-guide</Link>.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-norsk-dark mb-2">Hva er BSU?</h3>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    BSU (Boligsparing for Ungdom) gir deg 10% skattefradrag på inntil 27.500 kr per år. Med renter på 3-5% blir effektiv avkastning rundt 14%. <Link href="/sparing/bsu-guide" className="text-green-600 hover:text-green-700 font-medium">Les vår BSU-guide</Link>.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-norsk-dark mb-2">Hva er høyrentekonto?</h3>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    En sparekonto med høyere rente enn brukskonto. I 2026 finnes høyrentekontoer med 4-5% rente. De fleste har ingen bindingstid. <Link href="/sparing/hoyrentekonto" className="text-green-600 hover:text-green-700 font-medium">Se alle høyrentekontoer</Link>.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-norsk-dark mb-2">Hvor mye kan jeg tjene på sparing?</h3>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    Med 5% rente på 100.000 kr tjener du 5.000 kr i året. BSU gir opptil 14% effektiv avkastning. Bruk <Link href="/verktøy/sparekalkulator" className="text-green-600 hover:text-green-700 font-medium">sparekalkulatoren</Link> for å beregne din avkastning.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-norsk-dark mb-2">Skal jeg spare eller betale ned lån?</h3>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    Med boliglånrente på 4-5%, lønner nedbetaling seg ofte. Med forbrukslån på 10-20%, bør du nesten alltid betale ned først. BSU lønner seg uansett med ~14% avkastning.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-norsk-dark mb-2">Hva er innskuddsgaranti?</h3>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    Innskuddsgarantien dekker opptil 2 millioner kroner hvis banken går konkurs. Alle banker med Finanstilsyn-tillatelse er omfattet.
                  </p>
                </div>
              </div>
            </div>

            {/* Articles */}
            <div>
              <h2 className="text-2xl font-bold text-norsk-dark mb-6">Artikler om sparing</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {articles.map((article) => (
                  <ArticleCard key={article.slug} article={article} />
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="invert-block rounded-xl p-8 text-center">
              <h2 className="text-2xl font-display font-medium mb-3">Finn din beste sparekonto</h2>
              <p className="text-ink-muted max-w-xl mx-auto mb-6">
                Sammenlign alle høyrentekontoer i Norge og finn den som gir deg mest avkastning. 
                Opp til 4,65% rente med innskuddsgaranti. Artikkelen inneholder annonselenker.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/sparing/hoyrentekonto"
                  className="inline-flex items-center gap-2 bg-paper text-ink font-bold py-3 px-6 rounded-md hover:bg-paper-alt transition-colors"
                >
                  Se høyrentekontoer
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
                <Link
                  href="/verktøy/sparekalkulator"
                  className="inline-flex items-center gap-2 bg-forest text-paper font-bold py-3 px-6 rounded-md hover:bg-forest-mid transition-colors"
                >
                  Prøv sparekalkulator
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </Link>
              </div>
            </div>

            <p className="text-xs text-gray-400 text-center">Sist oppdatert: 2. august 2026. Renter og betingelser kan endres.</p>
          </div>

          {/* Sidebar */}
          <aside className="space-y-6">
            <div className="bg-green-50 rounded-xl p-6">
              <h3 className="font-bold text-norsk-dark mb-4">Sparingsformer</h3>
              <ul className="space-y-3 text-sm">
                {[
                  { label: 'Høyrentekonto', desc: 'Fleksibel sparing med 4-5,2% rente' },
                  { label: 'BSU', desc: 'Boligsparing for unge — 10% skattefradrag' },
                  { label: 'IPS', desc: 'Pensjonssparing med skattefradrag' },
                  { label: 'Indeksfond', desc: 'Langsiktig sparing 6-10% avkastning' },
                ].map((item) => (
                  <li key={item.label} className="flex flex-col">
                    <span className="font-medium text-gray-800">{item.label}</span>
                    <span className="text-gray-500 text-xs">{item.desc}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-accent-50 rounded-xl p-6">
              <h3 className="font-bold text-norsk-dark mb-4">Rask fakta</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Beste rente nå</span>
                  <span className="font-medium">4,65%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Innskuddsrente brukskonto</span>
                  <span className="font-medium">0,5-1%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">BSU-rente</span>
                  <span className="font-medium">3-5%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">BSU skattefradrag</span>
                  <span className="font-medium">10% (max 2.750 kr/år)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Innskuddsgaranti</span>
                  <span className="font-medium">2 millioner kr</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <h3 className="font-bold text-norsk-dark mb-3">Relaterte verktøy</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/verktøy/sparekalkulator" className="text-green-600 hover:text-green-700 font-medium">→ Sparekalkulator</Link>
                </li>
                <li>
                  <Link href="/verktøy/boliglånskalkulator" className="text-green-600 hover:text-green-700 font-medium">→ Boliglånskalkulator</Link>
                </li>
                <li>
                  <Link href="/budsjett/kom-i-gang-med-budsjett" className="text-green-600 hover:text-green-700 font-medium">→ Budsjettguide</Link>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <h3 className="font-bold text-norsk-dark mb-3">Oppdatert</h3>
              <p className="text-sm text-gray-600">Sist oppdatert: <span className="font-medium">2. august 2026</span></p>
              <p className="text-xs text-gray-400 mt-2">Renter og betingelser kan endres. Sjekk bankenes nettsider for nøyaktige priser.</p>
            </div>
          </aside>
        </div>
      </section>
    </>
  )
}
