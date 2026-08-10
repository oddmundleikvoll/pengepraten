import Link from 'next/link'
import ArticleCard from '@/components/ArticleCard'
import MortgageWidgetCTA from '@/components/MortgageWidgetCTA'
import { getArticlesByPillar } from '@/lib/articles'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Forbrukslån 2026 — Sammenlign Renter, Søk Billigste Lån | Pengepraten',
  description: 'Finn det billigste forbrukslånet i Norge 2026. Sammenlign renter, gebyrer og betingelser. Lær om refinansiering, lån uten sikkerhet og hvordan du sparer penger på gjelden.',
  keywords: ['forbrukslån', 'beste forbrukslån', 'billigste lån', 'refinansiering', 'lån uten sikkerhet', 'lån 2026', 'sammenligne lån'],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Hva er effektiv rente på forbrukslån?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Effektiv rente er den totale kostnaden du betaler for lånet, inkludert alle gebyrer og renter, uttrykt som en årlig prosentsats. Den gir det mest korrekte bildet av hva lånet faktisk koster, og er derfor det viktigste tallet å sammenligne når du skal finne det billigste lånet.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hva er nominell rente?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Nominell rente er den oppgitte renten på lånet før gebyrer legges til. Den viser ikke den faktiske kostnaden. For å se hva lånet virkelig koster, må du se på effektiv rente som inkluderer alle gebyrer og termingebyrer.',
      },
    },
    {
      '@type': 'Question',
      name: 'Kan jeg få forbrukslån med betalingsanmerkning?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'De fleste banker avslår søknader fra personer med betalingsanmerkninger. Noen spesialiserte långivere tilbyr lån, men med svært høye renter. Vi anbefaler å vente til anmerkningen er slettet, eller søke refinansiering gjennom en låneformidler som kan vurdere din situasjon.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hva er refinansiering?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Refinansiering betyr at du tar opp et nytt lån for å betale ned eksisterende dyr gjeld. Ved å samle flere smålån til ett større lån med lavere rente kan du spare tusenvis av kroner i året. Refinansiering er spesielt lønnsomt hvis du har kredittkortgjeld med renter på 15-25%.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hvor mye kan jeg låne med forbrukslån?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Med forbrukslån uten sikkerhet kan du vanligvis låne mellom 10.000 og 500.000 kroner. Hvor mye du faktisk får innvilget avhenger av din inntekt, kredittscore og eksisterende gjeld. Bankene bruker en gjeldsgradsregel for å sikre at du ikke låner mer enn du klarer å betjene.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hva koster et forbrukslån?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Et forbrukslån har effektiv rente på 8-20% avhengig av bank, lånebeløp, løpetid og din kredittscore. I tillegg kommer etabl.gebyr (0-1.500 kr) og termingebyr (0-50 kr/mnd). Et lån på 200.000 kr over 5 år kan koste 30.000-80.000 kr i renter og gebyrer totalt.',
      },
    },
  ],
}

export default function LanPage() {
  const articles = getArticlesByPillar('lan')

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
            <span className="text-ink">Forbrukslån</span>
          </nav>
          <h1 className="text-3xl md:text-5xl font-medium font-display leading-[1.08] mb-4">Forbrukslån 2026</h1>
          <p className="text-xl text-ink-muted max-w-2xl leading-relaxed">
            Sammenlign forbrukslån og lær hvordan du kan spare tusenvis av kroner med riktig lånevalg — eller gjennom refinansiering.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main content */}
          <div className="lg:col-span-2 space-y-12">

            {/* Intro: Hva er forbrukslån? */}
            <div className="bg-white rounded-xl border border-gray-100 p-8">
              <h2 className="text-2xl font-bold text-norsk-dark mb-4">Hva er forbrukslån?</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Et forbrukslån er et lån uten sikkerhet som du kan bruke til det du vil — ferie, oppussing, bil, eller å betale ned dyr gjeld. Fordi banken ikke har sikkerhet i eiendeler som bolig eller bil, er rentene høyere enn på boliglån. Likevel er forbrukslån en fleksibel finansieringsløsning når du trenger penger raskt.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Den viktigste faktoren når du sammenligner lån er forskjellen mellom effektiv rente og nominell rente. Nominell rente er den oppgitte renten, mens effektiv rente inkluderer alle gebyrer og gir deg den faktiske årlige kostnaden. Når du sammenligner lån for å finne det billigste, er det alltid effektiv rente du skal se på.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Forbrukslån i Norge har effektiv rente fra rundt 8% til over 20%, avhengig av din kredittscore, inntekt og hvor mye du låner. Jo bedre kredittverdighet, jo lavere rente får du. Å bruke en låneformidler som søker hos flere banker samtidig øker sjansene for å få det beste tilbudet.
              </p>
              <p className="text-gray-600 leading-relaxed">
                I 2026 er markedet for forbrukslån preget av økte renter fra Norges Bank, men også av økt konkurranse mellom bankene. Dette gir forbrukere mulighet til å forhandle seg frem til bedre betingelser. Les mer i vår guide om <Link href="/lan/beste-forbrukslan-2026" className="text-primary-600 hover:text-primary-700 font-medium">beste forbrukslån 2026</Link>. Artikkelen inneholder annonselenker.
              </p>
            </div>

            {/* Beste forbrukslån 2026 — sammenligning */}
            <div>
              <h2 className="text-2xl font-bold text-norsk-dark mb-4">Beste forbrukslån 2026 — sammenligning</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Vi har sammenlignet de mest populære låneformidlerne og bankene i Norge. Tabellen under viser effektiv rente, lånebeløp, løpetid og fordeler. Vær oppmerksom på at effektiv rente avhenger sterkt av din personlige kredittscore og økonomi. Se vår <Link href="/lan/beste-forbrukslan-2026" className="text-primary-600 hover:text-primary-700 font-medium">komplette guide til beste forbrukslån</Link> for detaljer.
              </p>

              <div className="overflow-x-auto mb-6">
                <table className="w-full text-sm border border-gray-200 rounded-xl overflow-hidden">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="text-left px-4 py-3 font-semibold text-gray-700">Bank / Formidler</th>
                      <th className="text-left px-4 py-3 font-semibold text-gray-700">Estimert eff. rente</th>
                      <th className="text-left px-4 py-3 font-semibold text-gray-700">Lånebeløp</th>
                      <th className="text-left px-4 py-3 font-semibold text-gray-700">Løpetid</th>
                      <th className="text-left px-4 py-3 font-semibold text-gray-700">Fordeler</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    <tr className="bg-white hover:bg-gray-50">
                      <td className="px-4 py-3 font-medium text-norsk-dark">Lendo</td>
                      <td className="px-4 py-3 text-gray-600">8-16%</td>
                      <td className="px-4 py-3 text-gray-600">5.000 – 500.000 kr</td>
                      <td className="px-4 py-3 text-gray-600">1-15 år</td>
                      <td className="px-4 py-3 text-gray-600">Søker hos 15+ banker med én søknad, få tilbud på dagen</td>
                    </tr>
                    <tr className="bg-white hover:bg-gray-50">
                      <td className="px-4 py-3 font-medium text-norsk-dark">Sambla</td>
                      <td className="px-4 py-3 text-gray-600">9-17%</td>
                      <td className="px-4 py-3 text-gray-600">10.000 – 500.000 kr</td>
                      <td className="px-4 py-3 text-gray-600">1-15 år</td>
                      <td className="px-4 py-3 text-gray-600">Enkel sammenligning, god kundeservice, rask behandling</td>
                    </tr>
                    <tr className="bg-white hover:bg-gray-50">
                      <td className="px-4 py-3 font-medium text-norsk-dark">Uno Finans</td>
                      <td className="px-4 py-3 text-gray-600">9-18%</td>
                      <td className="px-4 py-3 text-gray-600">5.000 – 500.000 kr</td>
                      <td className="px-4 py-3 text-gray-600">1-15 år</td>
                      <td className="px-4 py-3 text-gray-600">God på refinansiering, hjelper deg å samle smålån</td>
                    </tr>
                    <tr className="bg-white hover:bg-gray-50">
                      <td className="px-4 py-3 font-medium text-norsk-dark">Arcadia Finans</td>
                      <td className="px-4 py-3 text-gray-600">10-19%</td>
                      <td className="px-4 py-3 text-gray-600">10.000 – 500.000 kr</td>
                      <td className="px-4 py-3 text-gray-600">1-15 år</td>
                      <td className="px-4 py-3 text-gray-600">Spesialisert på refinansiering, konkurransedyktige renter</td>
                    </tr>
                    <tr className="bg-white hover:bg-gray-50">
                      <td className="px-4 py-3 font-medium text-norsk-dark">Bank Norwegian</td>
                      <td className="px-4 py-3 text-gray-600">8-20%</td>
                      <td className="px-4 py-3 text-gray-600">5.000 – 500.000 kr</td>
                      <td className="px-4 py-3 text-gray-600">1-15 år</td>
                      <td className="px-4 py-3 text-gray-600">Direkte fra bank, god rente for kredittverdige, rask utbetaling</td>
                    </tr>
                    <tr className="bg-white hover:bg-gray-50">
                      <td className="px-4 py-3 font-medium text-norsk-dark">Komplett Bank</td>
                      <td className="px-4 py-3 text-gray-600">9-19%</td>
                      <td className="px-4 py-3 text-gray-600">10.000 – 500.000 kr</td>
                      <td className="px-4 py-3 text-gray-600">1-15 år</td>
                      <td className="px-4 py-3 text-gray-600">God rente, fleksibel nedbetaling, etablert aktør</td>
                    </tr>
                    <tr className="bg-white hover:bg-gray-50">
                      <td className="px-4 py-3 font-medium text-norsk-dark">re:member</td>
                      <td className="px-4 py-3 text-gray-600">10-20%</td>
                      <td className="px-4 py-3 text-gray-600">10.000 – 500.000 kr</td>
                      <td className="px-4 py-3 text-gray-600">1-15 år</td>
                      <td className="px-4 py-3 text-gray-600">Kombinasjon med kredittkort, god for lojale kunder</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-sm text-gray-500 italic mb-4">
                * Effektiv rente er estimert og avhenger av din kredittscore, inntekt og lånebeløp. Sjekk alltid individuelt tilbud fra banken. Oppdatert juni 2026.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Den beste strategien for å finne det billigste forbrukslånet er å søke gjennom en låneformidler som <strong>Lendo</strong> eller <strong>Sambla</strong>. De sender din søknad til flere banker samtidig, og du får tilbudene samlet slik at du enkelt kan sammenligne effektiv rente. En søknad hos en låneformidler påvirker ikke din kredittscore mer enn én søknad. Artikkelen inneholder annonselenker.
              </p>
            </div>

            {/* Refinansiering */}
            <div className="bg-white rounded-xl border border-gray-100 p-8">
              <h2 className="text-2xl font-bold text-norsk-dark mb-4">Refinansiering — slik sparer du penger</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Refinansiering betyr at du tar opp et nytt lån med lavere rente for å betale ned eksisterende dyr gjeld. Dette er spesielt lønnsomt hvis du har kredittkortgjeld med renter på 15-25%, gamle forbrukslån med høye renter, eller flere smålån med gebyrer.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Når du refinansierer, samler du typisk flere lån til ett større lån. Dette reduserer ikke bare rentekostnaden, men også antallet termingebyrer du betaler. Et eksempel: Har du tre lån på til sammen 300.000 kr med effektiv rente på 18%, og du refinansierer til ett lån med 10% effektiv rente, sparer du over 25.000 kr i løpet av lånets løpetid.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                I 2026 er refinansiering spesielt aktuelt etter Norges Banks rentehevinger. Mange har lån fra tiden med lavere renter som nå har blitt dyrere. Ved å samle lån og refinansiere kan du utnytte konkurransen mellom bankene og forhandle deg frem til bedre betingelser.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Lær mer om når <Link href="/lan/nar-lonner-refinansiering" className="text-primary-600 hover:text-primary-700 font-medium">refinansiering lønner seg</Link>, les vår guide om <Link href="/lan/refinansiering-spar-paa-gjelden" className="text-primary-600 hover:text-primary-700 font-medium">hvordan du sparer på gjelden</Link>, og se <Link href="/lan/samle-lan-spar-tusenvis" className="text-primary-600 hover:text-primary-700 font-medium">hvor mye du kan spare ved å samle lån</Link>. Artikkelen inneholder annonselenker.
              </p>
            </div>

            {/* Hvor mye boliglån kan jeg få? */}
            <div className="bg-white rounded-xl border border-gray-100 p-8">
              <h2 className="text-2xl font-bold text-norsk-dark mb-4">Hvor mye boliglån kan jeg få?</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Finanstilsynets regler begrenser hvor mye du kan låne til bolig. Ifølge den såkalte 5x-regelen kan du maksimalt låne fem ganger din brutto årsinntekt til bolig. Har du en årsinntekt på 600.000 kr, er ditt maksimale boliglån 3 millioner kroner.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                I tillegg krever bankene minst 15% egenkapital for boligkjøp. Skal du kjøpe en bolig til 4 millioner kroner, må du ha minst 600.000 kr i egenkapital. Resten kan du låne med pant i boligen.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Husk at denne beregningen gjelder boliglån, ikke forbrukslån. Forbrukslån er lån uten sikkerhet og påvirkes av din totale gjeldsgrad. Vil du beregne nøyaktig hva du kan få? Prøv vår <Link href="/verktøy/boliglånskalkulator" className="text-primary-600 hover:text-primary-700 font-medium">boliglånskalkulator</Link>. Les også <Link href="/lan/hvor-mye-boliglan-kan-jeg-fa" className="text-primary-600 hover:text-primary-700 font-medium">Hvor mye boliglån kan jeg få?</Link> for en dypere guide.
              </p>
            </div>

            {/* Slik søker du om lån */}
            <div className="bg-white rounded-xl border border-gray-100 p-8">
              <h2 className="text-2xl font-bold text-norsk-dark mb-4">Slik søker du om forbrukslån</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Å søke om lån er enklere enn noensinne i 2026, men det lønner seg å gjøre det riktig. Her er våre fem steg for å sikre deg det billigste lånet:
              </p>
              <ol className="space-y-4 text-gray-600 leading-relaxed list-decimal list-inside mb-6">
                <li>
                  <strong className="text-norsk-dark">Sammenlign først:</strong> Bruk en låneformidler for å se hvilken effektiv rente du kan få. Én søknad hos Lendo eller Sambla gir deg tilbud fra flere banker.
                </li>
                <li>
                  <strong className="text-norsk-dark">Søk hos låneformidler:</strong> Fyll ut én søknad med personnummer, inntekt og ønsket lånebeløp. Søknaden er uforpliktende.
                </li>
                <li>
                  <strong className="text-norsk-dark">Få tilbud:</strong> Du mottar personlige tilbud fra banker som vil låne deg penger. Sammenlign effektiv rente, ikke bare nominell rente.
                </li>
                <li>
                  <strong className="text-norsk-dark">Velg beste tilbud:</strong> Velg banken med lavest effektiv rente og best vilkår. Sjekk også termingebyr og etableringsgebyr.
                </li>
                <li>
                  <strong className="text-norsk-dark">Signér elektronisk:</strong> Når du har valgt bank, signerer du lånedokumentene med BankID. Pengene utbetales vanligvis innen 1-3 virkedager.
                </li>
              </ol>

              <div className="bg-primary-50 rounded-lg p-6">
                <p className="text-primary-800 font-medium mb-2">💡 Tips: Sammenlign lån hos Lendo</p>
                <p className="text-sm text-gray-600">
                  Lendo er Norges største låneformidler og søker hos 15+ banker med én søknad. Du får tilbudene samlet og kan enkelt velge det billigste. <Link href="https://lendo.no" className="text-primary-600 hover:text-primary-700 font-medium underline" target="_blank" rel="noopener noreferrer">Sammenlign lån hos Lendo →</Link>
                </p>
                <p className="text-xs text-gray-500 mt-2">Artikkelen inneholder annonselenker.</p>
              </div>
            </div>

            {/* FAQ */}
            <div className="bg-white rounded-xl border border-gray-100 p-8">
              <h2 className="text-2xl font-bold text-norsk-dark mb-6">Ofte stilte spørsmål om lån</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-norsk-dark mb-2">Hva er effektiv rente?</h3>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    Effektiv rente er den totale årlige kostnaden inkludert alle gebyrer. Det er dette tallet du skal sammenligne når du skal finne det billigste forbrukslånet.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-norsk-dark mb-2">Hva er nominell rente?</h3>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    Nominell rente er den oppgitte renten uten gebyrer. Den viser ikke den faktiske kostnaden. Se alltid på effektiv rente for å vite hva lånet virkelig koster.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-norsk-dark mb-2">Kan jeg få lån med betalingsanmerkning?</h3>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    De fleste banker avslår søknader med betalingsanmerkninger. Noen spesialiserte långivere tilbyr lån, men med svært høye renter. Vi anbefaler å vente til anmerkningen er slettet.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-norsk-dark mb-2">Hva er refinansiering?</h3>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    Refinansiering er å ta opp et nytt lån for å betale ned gammel dyr gjeld. Det kan spare deg for tusenvis. Les vår guide om <Link href="/lan/nar-lonner-refinansiering" className="text-primary-600 hover:text-primary-700 font-medium">når refinansiering lønner seg</Link>.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-norsk-dark mb-2">Hvor mye kan jeg låne?</h3>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    Forbrukslån uten sikkerhet: 10.000 – 500.000 kr. Hvor mye du får innvilget avhenger av inntekt, kredittscore og eksisterende gjeld.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-norsk-dark mb-2">Hva koster et forbrukslån?</h3>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    Effektiv rente 8-20% + etabl.gebyr og termingebyr. Et lån på 200.000 kr over 5 år kan koste 30.000-80.000 kr i renter totalt. Sammenlign alltid effektiv rente.
                  </p>
                </div>
              </div>
            </div>

            {/* Articles */}
            <div>
              <h2 className="text-2xl font-bold text-norsk-dark mb-6">Artikler om lån og refinansiering</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {articles.map((article) => (
                  <ArticleCard key={article.slug} article={article} />
                ))}
              </div>
            </div>

            {/* Mortgage CTA */}
            <div className="mt-10">
              <MortgageWidgetCTA variant="inline" />
            </div>

            {/* Affiliate Disclaimer */}
            <p className="text-xs text-gray-400 text-center mt-8">Artikkelen inneholder annonselenker. Sist oppdatert: juni 2026.</p>
          </div>

          {/* Sidebar */}
          <aside className="space-y-6">
            <div className="bg-primary-50 rounded-xl p-6">
              <h3 className="font-bold text-norsk-dark mb-4">Prøv vår kalkulator</h3>
              <p className="text-sm text-gray-600 mb-4">
                Se nøyaktig hvor mye et forbrukslån vil koste deg — med alle renter og gebyrer.
              </p>
              <Link
                href="/verktøy/lånekalkulator"
                className="inline-flex items-center gap-2 bg-primary-600 text-white font-medium py-2 px-4 rounded-lg hover:bg-primary-700 transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
                Forbrukslånskalkulator
              </Link>
            </div>

            <div className="bg-accent-50 rounded-xl p-6">
              <h3 className="font-bold text-norsk-dark mb-4">Rask fakta</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Nominell rente</span>
                  <span className="font-medium">7-20%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Effektiv rente</span>
                  <span className="font-medium">8-25%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Løpetid</span>
                  <span className="font-medium">1-15 år</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Lånebeløp</span>
                  <span className="font-medium">10.000 – 500.000 kr</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <h3 className="font-bold text-norsk-dark mb-3">Refinansieringsguider</h3>
              <ul className="space-y-2 text-sm">
                <li><Link href="/lan/nar-lonner-refinansiering-seg" className="text-primary-600 hover:text-primary-700 font-medium">→ Når lønner refinansiering seg?</Link></li>
                <li><Link href="/lan/refinansiering-spar-paa-gjelden" className="text-primary-600 hover:text-primary-700 font-medium">→ Refinansiering: Spar på gjelden</Link></li>
                <li><Link href="/lan/samle-lan-spar-tusenvis" className="text-primary-600 hover:text-primary-700 font-medium">→ Samle lån: Spar tusenvis</Link></li>
                <li><Link href="/lan/beste-forbrukslan-2026" className="text-primary-600 hover:text-primary-700 font-medium">→ Beste forbrukslån 2026</Link></li>
              </ul>
            </div>

            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <h3 className="font-bold text-norsk-dark mb-3">Oppdatert</h3>
              <p className="text-sm text-gray-600">Sist oppdatert: <span className="font-medium">juni 2026</span></p>
              <p className="text-xs text-gray-400 mt-2">Renter og betingelser kan endres. Sjekk bankenes nettsider for nøyaktige priser.</p>
            </div>
          </aside>
        </div>
      </section>
    </>
  )
}
