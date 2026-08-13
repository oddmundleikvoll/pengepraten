import Link from 'next/link'
import type { Metadata } from 'next'
import EmailCapture from '@/components/EmailCapture'
import RelatedContent from '@/components/RelatedContent'
import { getArticleBySlug, getRelatedArticles } from '@/lib/articles'

export const metadata: Metadata = {
  title: 'Beste Høyrentekonto August 2026: 12 Banker Sammenlignet | Pengepraten',
  description: 'Sammenlign de beste høyrentekontoene i Norge august 2026. Svea Bank og Bank Norwegian leder med 4,65% rente — fulgt av OBOS (4,55%) og Nordax (4,50%). Vi rangerer 12 banker etter rente, uttaksvilkår og minimumsinnskudd.',
  keywords: ['beste høyrentekonto', 'beste høyrentekonto 2026', 'høyrentekonto august 2026', 'sparekonto med høy rente', 'beste sparekonto norge', 'høyrentekonto sammenligning', 'høyeste rente sparekonto'],
}

// Sortert synkende etter rente (per 2. august 2026). Kilder: bankenes egne sider
// (RENTEDATA-AUGUST-2026.md). Hygga, Front Finance, Milk Money, Salvest,
// Laksefjord Sparebank, Danske Bank og Sandnes Sparebank er fjernet —
// kort markedsendringer / ikke-verifisert per primærkilde.
const BANKS = [
  { name: 'Svea Bank', rate: 4.65, type: 'Svensk nettbank', guarantee: ' 100.000 €', minDeposit: 'Ingen', access: 'Umiddelbar', url: 'https://www.svea.com/nb-no/privat/sparing', cta: 'Åpne konto' },
  { name: 'Bank Norwegian Sparekonto 31', rate: 4.65, type: 'Nettbank (NOBA)', guarantee: ' 100.000 €', minDeposit: 'Ingen', access: '31 dager varsel', url: 'https://www.banknorwegian.no/sparing/', cta: 'Åpne konto' },
  { name: 'OBOS Sparekonto Langsiktig', rate: 4.55, type: 'Medlemsbank', guarantee: ' 100.000 €', minDeposit: 'Ingen', access: 'Umiddelbar', url: 'https://www.obos.no/bank/sparing', cta: 'Åpne konto' },
  { name: 'Nordax Sparekonto Smart', rate: 4.50, type: 'Nettbank (NOBA)', guarantee: ' 100.000 €', minDeposit: 'Ingen', access: 'Umiddelbar', url: 'https://www.nordax.no/spare', cta: 'Åpne konto' },
  { name: 'BN Bank Høyrentekonto', rate: 4.49, type: 'Nettbank', guarantee: ' 100.000 €', minDeposit: 'Ingen', access: 'Begrenset', url: 'https://www.bnbank.no/sparing/', cta: 'Åpne konto' },
  { name: 'Nordnet (kvalifisert)', rate: 4.00, type: 'Investeringsplattform', guarantee: ' 100.000 €', minDeposit: 'Ingen', access: '1-2 dager', url: 'https://www.nordnet.no/tjenester/kontoer/sparekonto', cta: 'Åpne konto' },
  { name: 'Nordea Sparekonto Ekstra', rate: 4.35, type: 'Nordisk storbank', guarantee: ' 100.000 €', minDeposit: 'Ingen', access: '4 frie uttak/år', url: 'https://www.nordea.no/privat/vare-produkter/sparing-og-investering/sparing-pa-konto/sparekonto-ekstra.html', cta: 'Åpne konto' },
  { name: 'Handelsbanken Sparekonto pluss', rate: 4.25, type: 'Svensk storbank', guarantee: ' 100.000 €', minDeposit: 'Ingen', access: '12 frie uttak/år', url: 'https://www.handelsbanken.no/no/privat/prislister/prisliste-innskuddsrenter', cta: 'Åpne konto' },
  { name: 'Bluestep Bank Sparekonto Flex', rate: 4.12, type: 'Nettbank (Enity)', guarantee: ' 100.000 €', minDeposit: '50.000 kr for topp rente', access: 'Umiddelbar', url: 'https://www.bluestep.no/spare/flytende-rente/', cta: 'Åpne konto' },
  { name: 'DNB Sparekonto Pluss', rate: 4.10, type: 'Norges største bank', guarantee: ' 100.000 €', minDeposit: '500.000 kr for topp rente', access: '12 frie uttak/år', url: 'https://www.dnb.no/sparing/sparing-pa-konto/sparekonto-pluss', cta: 'Åpne konto' },
  { name: 'Sbanken (over 500k)', rate: 4.09, type: 'Ren digital bank', guarantee: ' 100.000 €', minDeposit: 'Ingen', access: 'Umiddelbar', url: 'https://sbanken.no/spare/kontosparing/sparekonto', cta: 'Åpne konto' },
  { name: 'Sbanken Sparekonto (under 500k)', rate: 3.65, type: 'Ren digital bank', guarantee: ' 100.000 €', minDeposit: 'Ingen', access: 'Umiddelbar', url: 'https://sbanken.no/spare/kontosparing/sparekonto', cta: 'Åpne konto' },
]

function StarRating() {
  return (
    <div className="flex gap-0.5">
      {[1,2,3,4,5].map(s => (
        <svg key={s} className="w-3.5 h-3.5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

export default function Hoyrentekonto() {
  const article = getArticleBySlug('/sparing/hoyrentekonto')
  const relatedArticles = article?.relatedArticles ? getRelatedArticles(article.relatedArticles) : []

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: [
              {
                '@type': 'Question',
                name: 'Hva er en høyrentekonto?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Høyrentekonto er rett og slett en sparekonto med bedre rente enn det du får på den vanlige brukskontoen din. I 2026 kan du få inntil 4,65% rente — rett og slett gratis avkastning uten noen risiko.',
                },
              },
              {
                '@type': 'Question',
                name: 'Hvilken bank har best høyrentekonto i 2026?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Svea Bank og Bank Norwegian Sparekonto 31 topper med 4,65% rente, fulgt av OBOS Sparekonto Langsiktig (4,55%) og Nordax Sparekonto Smart (4,50%). Sbanken tilbyr 4,09% over 500 000 kr og 3,65% under.',
                },
              },
              {
                '@type': 'Question',
                name: 'Er høyrentekonto trygt?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Ja, alle banker som opererer i Norge er med i Bankenes Sikringsfond. Du får tilbake pengene dine opp til 100.000 euro per person per bank. Det er nesten risikofritt.',
                },
              },
              {
                '@type': 'Question',
                name: 'Hva er innskuddsgaranti?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Innskuddsgaranti betyr at staten garanterer for pengene dine i banken opp til 100.000 euro per person per bank. Hvis banken går konkurs, får du tilbake pengene.',
                },
              },
              {
                '@type': 'Question',
                name: 'Hva er forskjellen på høyrentekonto og brukskonto?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'En brukskonto brukes til daglige utgifter og gir vanligvis 0% rente. En høyrentekonto gir 4-4,65% rente, men er ment for sparing. Forskjellen på 100.000 kr er 4.000–4.650 kr i året.',
                },
              },
              {
                '@type': 'Question',
                name: 'Hvor mye kan jeg tjene på høyrentekonto?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Med 4,65% rente på 100.000 kr tjener du 4.650 kr per år. Etter 10 år blir 100.000 kr til om lag 157.000 kr — rundt 57.000 kr mer enn på en brukskonto.',
                },
              },
              {
                '@type': 'Question',
                name: 'Kan jeg ta ut penger fra høyrentekonto når som helst?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Ja, de fleste høyrentekontoer har ingen bindingstid. Pengene er dine å flytte når som helst. Enkelte banker (f.eks. Bank Norwegian Sparekonto 31) krever 31 dagers varsel.',
                },
              },
              {
                '@type': 'Question',
                name: 'Hva er bindingstid på høyrentekonto?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'De fleste høyrentekontoer har ingen bindingstid. Enkelte kan ha korte bindingstider (f.eks. 31 dager), men dette er uvanlig. Sjekk bankens vilkår.',
                },
              },
              {
                '@type': 'Question',
                name: 'Hvilken rente er best akkurat nå?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Svea Bank og Bank Norwegian Sparekonto 31 tilbyr 4,65% rente — den høyeste på markedet akkurat nå. OBOS Sparekonto Langsiktig følger med 4,55%.',
                },
              },
              {
                '@type': 'Question',
                name: 'Skal jeg velge høyrentekonto eller BSU?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Hvis du er under 34 år og skal kjøpe bolig, er BSU det beste valget med 10% skattefradrag. Ellers er høyrentekonto fleksibelt og godt.',
                },
              },
            ],
          }),
        }}
      />

      {/* HERO — Nordic Clarity editorial */}
      <section className="bg-paper text-ink py-16 md:py-20 border-b border-border">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <nav className="font-mono text-xs uppercase tracking-wider text-ink-muted mb-6">
            <Link href="/" className="hover:text-forest transition-colors">Hjem</Link>
            <span className="mx-2 text-border-strong">/</span>
            <Link href="/sparing" className="hover:text-forest transition-colors">Sparing</Link>
            <span className="mx-2 text-border-strong">/</span>
            <span className="text-ink">Høyrentekonto</span>
          </nav>
          <div className="flex flex-col lg:flex-row gap-10 items-center">
            <div className="flex-1">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-forest-soft rounded-full text-sm font-medium mb-5 text-forest">
                Sist oppdatert: 13. august 2026 · kl. 09:00
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium font-display leading-[1.05] mb-4">
                Beste høyrentekonto{' '}
                <span className="text-amber-warm">akkurat nå</span>
              </h1>
              <p className="text-ink-muted text-lg leading-relaxed md:text-xl max-w-2xl">
                Svært få nordmenn bruker høyrentekonto. Det er synd — forskjellen mellom 0% og 4,65% rente på 100.000 kroner er{' '}
                <strong className="text-ink">4.650 kroner i året</strong>.
              </p>
            </div>
            {/* Quick stats */}
            <div className="shrink-0 bg-paper-surface rounded-2xl border border-border p-6 min-w-[260px]">
              <div className="font-mono text-xs uppercase tracking-wider text-ink-muted mb-3">Topp rente akkurat nå</div>
              <div className="text-5xl font-medium font-mono text-forest mb-1">4,65%</div>
              <div className="text-ink-muted text-sm mb-4">Svea Bank / Bank Norwegian Sparekonto 31 — august 2026</div>
              <div className="space-y-2">
                {[
                  { label: 'Innskuddsgaranti', value: '100.000 €' },
                  { label: 'Minsteinnskudd', value: 'Ingen' },
                  { label: 'Bindingstid', value: 'Ingen' },
                ].map(item => (
                  <div key={item.label} className="flex justify-between text-sm">
                    <span className="text-ink-muted">{item.label}</span>
                    <span className="font-semibold text-ink">{item.value}</span>
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
        <div className="bg-forest-soft rounded-2xl p-7 border-l-4 border-forest">
          <p className="text-lg text-ink leading-relaxed">
            <strong>Høyrentekonto</strong> er rett og slett den beste høyrentekontoen for deg som vil ha en sparekonto med høy rente. I august 2026 kan du få inntil 4,65% rente på en sparekonto med høy rente — rett og slett gratis avkastning uten noen risiko.
          </p>
        </div>

        {/* BANK COMPARISON TABLE */}
        <section>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-6">
            <div>
              <h2 className="text-2xl md:text-3xl font-black text-ink mb-2 flex items-center gap-2">
                Beste høyrentekontoer i Norge
              </h2>
              <p className="text-ink-muted">Sist oppdatert: 13. august 2026, kl. 09:00 — klikk på banken for å åpne konto</p>
            </div>
            <div className="flex items-center gap-2 text-sm text-ink-subtle shrink-0">
              <svg className="w-4 h-4 text-forest" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-ink">Innskuddsgaranti på alle</span>
            </div>
          </div>

          {/* Desktop table */}
          <div className="hidden md:block bg-paper-surface rounded-2xl border border-border shadow-sm overflow-hidden mb-4">
            <table className="w-full">
              <thead>
                <tr className="bg-paper text-ink text-sm border-b border-border">
                  <th className="text-left px-6 py-4 font-bold">Bank</th>
                  <th className="text-center px-4 py-4 font-bold">Rente</th>
                  <th className="text-center px-4 py-4 font-bold">Innskuddsgaranti</th>
                  <th className="text-center px-4 py-4 font-bold">Minsteinnskudd</th>
                  <th className="text-center px-4 py-4 font-bold">Tilgang</th>
                  <th className="text-center px-6 py-4 font-bold">Åpne konto</th>
                </tr>
              </thead>
              <tbody>
                {BANKS.map((bank, i) => (
                  <tr
                    key={bank.name}
                    className={`
                      border-b border-border last:border-0
                      hover:bg-forest-soft transition-colors group
                      ${i % 2 === 0 ? 'bg-paper-surface' : 'bg-paper-alt/50'}
                    `}
                  >
                    <td className="px-6 py-5">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-forest rounded-xl flex items-center justify-center text-paper font-black text-sm shadow-sm shrink-0">
                          {bank.name.charAt(0)}
                        </div>
                        <div>
                          <div className="font-bold text-ink">{bank.name}</div>
                          <div className="text-xs text-ink-subtle">{bank.type}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-5 text-center">
                      <div className="inline-flex items-center gap-1 bg-forest-soft text-forest font-black text-xl px-3 py-1.5 rounded-md">
                        {bank.rate.toFixed(2)}%
                      </div>
                    </td>
                    <td className="px-4 py-5 text-center">
                      <span className="text-sm text-ink-muted">{bank.guarantee}</span>
                    </td>
                    <td className="px-4 py-5 text-center">
                      <span className="text-sm text-ink-muted">{bank.minDeposit}</span>
                    </td>
                    <td className="px-4 py-5 text-center">
                      <div className="flex flex-col items-center gap-1">
                        <span className="text-sm font-medium text-ink">{bank.access}</span>
                        <StarRating />
                      </div>
                    </td>
                    <td className="px-6 py-5 text-center">
                      <a
                        href={bank.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 bg-forest hover:bg-forest-mid text-paper font-semibold text-sm px-4 py-2 rounded-md transition-colors shadow-sm hover:shadow-md"
                      >
                        {bank.cta}
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile cards */}
          <div className="md:hidden grid gap-3">
            {BANKS.map((bank, i) => (
              <div key={bank.name} className={`rounded-xl border p-5 ${i % 2 === 0 ? 'bg-paper-surface border-border' : 'bg-paper-alt border-border'}`}>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-forest rounded-xl flex items-center justify-center text-paper font-black text-sm shadow-sm">
                      {bank.name.charAt(0)}
                    </div>
                    <div>
                      <div className="font-bold text-ink">{bank.name}</div>
                      <div className="text-xs text-ink-subtle">{bank.type}</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-black text-forest">{bank.rate.toFixed(2)}%</div>
                    <div className="text-xs text-ink-subtle">effektiv rente</div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-2 mb-4 text-sm">
                  <div className="flex justify-between"><span className="text-ink-muted">Garanti:</span><span className="font-medium">{bank.guarantee}</span></div>
                  <div className="flex justify-between"><span className="text-ink-muted">Minst:</span><span className="font-medium">{bank.minDeposit}</span></div>
                  <div className="flex justify-between"><span className="text-ink-muted">Tilgang:</span><span className="font-medium">{bank.access}</span></div>
                </div>
                <a
                  href={bank.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full block text-center bg-forest hover:bg-forest-mid text-paper font-semibold text-sm py-2.5 rounded-md transition-colors"
                >
                  {bank.cta} →
                </a>
              </div>
            ))}
          </div>

          <div className="bg-paper-alt rounded-xl p-4 text-sm text-ink-muted flex items-center gap-2 mt-4 border border-border">
            <svg className="w-4 h-4 shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
            </svg>
            <span>Rentene er flytende og kan endres. Sjekk bankens nettsider for oppdaterte tall. Alle kontoer er dekket av norsk innskuddsgaranti (100.000 euro per person per bank).</span>
          </div>
        </section>

        {/* SLIK RANGERER VI */}
        <section>
          <h2 className="text-2xl md:text-3xl font-black text-ink mb-3 flex items-center gap-2">
            Slik rangerer vi bankene
          </h2>
          <p className="text-ink leading-relaxed mb-5">
            Vi sjekker rentene på hver enkelt banks nettside manuelt hver uke. Når du ser «4,65 %» i tabellen vår, er det fordi banken selv oppgir det på sine sider nå — ikke et estimat eller innhentet tall fra en tredjepart.
          </p>
          <div className="bg-paper-surface rounded-2xl border border-border p-6 mb-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8">
              {[
                { label: 'Nominell rente (den du faktisk får)', pct: '70 %' },
                { label: 'Uttaksvilkår (binding, ventetid)', pct: '15 %' },
                { label: 'Minsteinnskudd (hvor lett å åpne)', pct: '10 %' },
                { label: 'Tilgjengelighet for nye kunder', pct: '5 %' },
              ].map((row, i) => (
                <div key={row.label} className={`flex justify-between items-center py-3 ${i < 3 ? 'border-b border-border sm:border-b' : ''} ${i === 1 ? 'sm:border-b-0' : ''}`}>
                  <span className="text-ink font-medium text-sm md:text-base">{row.label}</span>
                  <span className="font-black text-forest text-lg">{row.pct}</span>
                </div>
              ))}
            </div>
          </div>
          <p className="text-ink-muted text-sm leading-relaxed">
            Rentene som vises er de beste tilgjengelige for <strong>nye kunder</strong>. Hvis en bank har ulik rente for ulike beløp (f.eks. DNB over 500 000 kr), viser vi den høyeste. Vi er ikke eid av noen bank og tar ikke betalt for å løfte noen opp i tabellen.
          </p>
        </section>

        {/* BELØP-SEGMENTERTE TABELLER */}
        <section>
          <h2 className="text-2xl md:text-3xl font-black text-ink mb-3 flex items-center gap-2">
            Beste konto for ditt beløp
          </h2>
          <p className="text-ink-muted mb-6 leading-relaxed">
            Ulike banker belønner ulike innskuddsbeløp. Her er vår anbefaling basert på hvor mye du vil spare — fra en liten buffer til et stort innskudd.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {[
              {
                amount: '50 000 kr',
                desc: 'Liten buffer eller første sparing',
                top3: [
                  { name: 'Svea Bank', rate: '4,65 %', note: 'Ingen krav' },
                  { name: 'Bank Norwegian', rate: '4,65 %', note: '31 d uttak' },
                  { name: 'OBOS Langsiktig', rate: '4,55 %', note: 'Medlemsbank' },
                ],
              },
              {
                amount: '250 000 kr',
                desc: 'Større buffer eller et års sparing',
                top3: [
                  { name: 'Svea Bank', rate: '4,65 %', note: 'Best totalt' },
                  { name: 'Bank Norwegian', rate: '4,65 %', note: '31 d uttak' },
                  { name: 'Nordax Smart', rate: '4,50 %', note: 'Umiddelbar' },
                ],
              },
              {
                amount: '500 000 kr',
                desc: 'Solid langsiktig sparing',
                top3: [
                  { name: 'Svea Bank', rate: '4,65 %', note: 'Best rente' },
                  { name: 'OBOS Langsiktig', rate: '4,55 %', note: 'Ingen binding' },
                  { name: 'DNB Sparekonto Pluss', rate: '4,10 %', note: 'Krev 500k+' },
                ],
              },
              {
                amount: '1 000 000 kr+',
                desc: 'Stort innskudd — pass på innskuddsgarantien',
                top3: [
                  { name: 'Svea Bank', rate: '4,65 %', note: 'Best rente' },
                  { name: 'OBOS Langsiktig', rate: '4,55 %', note: 'Norsk bank' },
                  { name: 'Sbanken over 500k', rate: '4,09 %', note: 'Krev 500k+' },
                ],
              },
            ].map(box => (
              <div key={box.amount} className="bg-paper-surface rounded-2xl border border-border p-6">
                <div className="mb-4">
                  <div className="text-2xl font-black text-forest">{box.amount}</div>
                  <div className="text-sm text-ink-muted">{box.desc}</div>
                </div>
                <ol className="space-y-3">
                  {box.top3.map((b, i) => (
                    <li key={b.name} className="flex items-start gap-3">
                      <span className="w-7 h-7 rounded-full bg-forest text-paper text-xs font-black flex items-center justify-center shrink-0 mt-0.5">{i + 1}</span>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-baseline justify-between gap-2">
                          <span className="font-bold text-ink truncate">{b.name}</span>
                          <span className="font-black text-forest shrink-0">{b.rate}</span>
                        </div>
                        <div className="text-xs text-ink-muted">{b.note}</div>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            ))}
          </div>
          <div className="bg-forest-soft rounded-xl p-5 mt-5 border border-forest/20">
            <p className="text-sm text-ink leading-relaxed">
              <strong>Tips:</strong> Fordel sparingen mellom to eller tre banker hvis du har over 100 000 euro (ca. 1,1 millioner kroner). Da er hele beløpet dekket av innskuddsgarantien — selv om én bank skulle få problemer.
            </p>
          </div>
        </section>

        {/* EMAIL CAPTURE */}
        <EmailCapture
          variant="card"
          title="Få e-postvarsel når rentene endres"
          description="Få ukentlig renteoppdatering rett i innboksen din. Vi sender deg beskjed med en gang noen av bankene endrer renten sin — slik at du alltid er på topp."
        />

        {/* INFOBOX */}
        <div className="bg-amber-warm-soft border border-amber-warm/30 rounded-xl p-6">
          <h3 className="font-bold text-amber-warm mb-3 flex items-center gap-2">
            <span className="text-xl">→</span> Visste du?
          </h3>
          <p className="text-ink text-lg leading-relaxed">
            <strong>100.000 kr på en vanlig brukskonto med 0% rente</strong> taper rundt{' '}
            <span className="text-amber-warm font-black text-xl">4.000 kr</span> i året i reell verdi — bare på grunn av inflasjon. Pengene dine blir stadig mindre verdt.
          </p>
        </div>

        {/* HVORFOR HØYERE RENTE */}
        <section>
          <h2 className="text-2xl font-bold text-ink mb-4 flex items-center gap-2">
            Hvorfor kan noen banker tilby så høy rente?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            {[
              { icon: 'Monitor', title: 'Ingen filialer', desc: 'Digitale banker har ikke kostnader til lokaler, ansatte i fysiske banker og annet. De sparer, og deler besparelsen med deg.' },
              { icon: 'Smartphone', title: 'Kun app og nettside', desc: 'Alt skjer digitalt. Du har tilgang til kontoen din 24/7, og kan overføre penger umiddelbart når du trenger det.' },
              { icon: 'TrendingUp', title: 'Konkurranse om kundene', desc: 'Bankene kjemper om sparingen din. Høy rente er et markedsmessig verktøy for å tiltrekke seg nye kunder.' },
            ].map(item => (
              <div key={item.title} className="bg-paper-surface rounded-xl p-5 border border-border shadow-sm hover:shadow-md hover:border-forest/30 transition-all">
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="font-bold text-ink mb-2">{item.title}</h3>
                <p className="text-ink-muted text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-ink leading-relaxed">
            En vanlig norsk storbank som DnB eller Nordea har mange tusen ansatte og dyre kontorer over hele landet. De trenger ikke å tilby høy rente fordi kundene likevel har sin lønnskonto der. Digitale banker har ingen slik fordel — så de må konkurrere på pris.
          </p>
        </section>

        {/* TOP 3 ANBEFALINGER */}
        <section>
          <h2 className="text-2xl md:text-3xl font-black text-ink mb-6 flex items-center gap-2">
            Våre top 3 anbefalinger
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { rank: '1', name: 'Svea Bank', rate: '4,65%', why: 'Svensk nettbank med høy rente, ingen bindingstid og ubegrenset uttak. Ny rente for eksisterende kunder 27.08.26.', bestFor: 'Deg som vil ha maks avkastning uten binding', color: 'from-amber-400 to-amber-500', badge: 'Beste rente' },
              { rank: '2', name: 'OBOS Sparekonto Langsiktig', rate: '4,55%', why: 'Medlemsbank med god rente fra første krone. Ingen krav om å binde pengene. OBOS-medlemskap kan gi ytterligere fordeler.', bestFor: 'Deg som vil ha høy rente og norsk medlemsbank', color: 'from-gray-300 to-gray-400', badge: 'Medlemsbank' },
              { rank: '3', name: 'Nordnet (kvalifisert)', rate: '4,0%', why: 'Perfekt for deg som både vil spare trygt og investere. Kvalifisert sparekonto krever at man aktivt melder ifra — men da får du en god rente.', bestFor: 'Deg som vil spare smart og investere videre', color: 'from-orange-300 to-orange-400', badge: 'Sparing + investering' },
            ].map(card => (
              <div key={card.rank} className={`${card.rank === '1' ? 'invert-block' : 'bg-paper border border-border'} rounded-2xl p-6 relative overflow-hidden`}>
                <div className={`absolute top-3 right-3 ${card.rank === '1' ? 'bg-paper/20 text-paper' : 'bg-forest-soft text-forest'} text-xs font-bold px-2 py-1 rounded-full`}>{card.badge}</div>
                <div className="text-4xl font-black mb-2">#{card.rank}</div>
                <div className="text-2xl font-bold mb-1">{card.name}</div>
                <div className="text-3xl font-black mb-3">{card.rate}</div>
                <p className={`${card.rank === '1' ? 'text-paper/90' : 'text-ink-muted'} text-sm leading-relaxed mb-3`}>{card.why}</p>
                <div className={`${card.rank === '1' ? 'bg-paper/10' : 'bg-paper-alt'} rounded-lg p-2 text-xs ${card.rank === '1' ? 'text-paper/80' : 'text-ink-muted'}`}>
                  <strong>Best for:</strong> {card.bestFor}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* DETALJERT: HVORFOR VI VALGTE DISSE BANKENE */}
        <section>
          <h2 className="text-2xl md:text-3xl font-black text-ink mb-3 flex items-center gap-2">
            Detaljert: Hvorfor vi valgte disse bankene
          </h2>
          <p className="text-ink-muted mb-6 leading-relaxed">
            Under er en grundigere vurdering av de fem beste bankene i august 2026 — ikke bare tall, men hva de er gode på, hva de ikke er gode på, og hvem de passer for.
          </p>
          <div className="space-y-5">
            {[
              {
                name: 'Svea Bank',
                rate: '4,65 %',
                type: 'Svensk nettbank',
                pros: ['Ingen krav til minsteinnskudd', 'Ubegrenset antall uttak', 'Svensk nettbank med norsk kundeservice', 'Best rente akkurat nå'],
                cons: ['Ny rente for eksisterende kunder fra 27.08.26 — kan gå ned', 'Svensk bank — kan oppleves mindre «norsk»'],
                bestFor: 'Deg som vil ha maks avkastning uten binding, og som er komfortabel med en svensk aktør.',
              },
              {
                name: 'Bank Norwegian Sparekonto 31',
                rate: '4,65 %',
                type: 'Nettbank (NOBA)',
                pros: ['Samme topprente som Svea', 'Norsk tilknytning gjennom NOBA', 'Ingen krav til minsteinnskudd', 'Godt valg hvis du flyr med Norwegian'],
                cons: ['Krever 31 dagers varsel ved uttak — ikke for deg med rask likviditetsbehov', 'Uten flybonus-kunde er det lite «ekstra» å hente'],
                bestFor: 'Deg som vet at pengene skal stå urørt i minst én måned, og som vil ha best rente.',
              },
              {
                name: 'OBOS Sparekonto Langsiktig',
                rate: '4,55 %',
                type: 'Medlemsbank (OBOS)',
                pros: ['Umiddelbar uttak — full fleksibilitet', 'Medlemsbank med norsk forankring', 'Ingen krav om OBOS-medlemskap for å åpne konto', 'Medlemskap gir ekstra fordeler (lånebetingelser, fordelsprogram)'],
                cons: ['0,10 prosentpoeng under topp-renten', 'Litt mindre kjent merkevare enn de største bankene'],
                bestFor: 'Deg som vil ha høy rente og norsk bank, med full frihet til å ta ut pengene når som helst.',
              },
              {
                name: 'Nordax Sparekonto Smart',
                rate: '4,50 %',
                type: 'Nettbank (NOBA)',
                pros: ['Umiddelbar uttak', 'Ingen krav til minsteinnskudd', 'Svensk nettbank med norsk kundeservice', 'Pålitelig aktør — eid av NOBA-gruppen'],
                cons: ['0,15 prosentpoeng under topp-renten', 'Relativt ny i Norge — mindre kjent enn Svea'],
                bestFor: 'Deg som vil ha en pålitelig høyrentekonto uten binding, og som liker tanken på en liten rentebuffer i forhold til toppen.',
              },
              {
                name: 'BN Bank Høyrentekonto',
                rate: '4,49 %',
                type: 'Norsk nettbank (Sparebank 1)',
                pros: ['Norsk nettbank — eid av Sparebank 1-alliansen', 'Ingen krav til minsteinnskudd', 'Solid norsk merkevare'],
                cons: ['Begrenset tilgang — ikke alltid åpen for nye kunder', '0,16 prosentpoeng under topp-renten'],
                bestFor: 'Deg som foretrekker en bank med norsk sparebankeierskap, og som er villig til å vente hvis BN Bank akkurat nå er stengt for nye kunder.',
              },
            ].map(bank => (
              <div key={bank.name} className="bg-paper-surface rounded-2xl border border-border p-6">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-5 pb-5 border-b border-border">
                  <div>
                    <h3 className="text-xl font-bold text-ink">{bank.name}</h3>
                    <div className="text-sm text-ink-muted">{bank.type}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-black text-forest">{bank.rate}</div>
                    <div className="text-xs text-ink-muted">effektiv rente</div>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-4">
                  <div>
                    <div className="text-sm font-bold text-forest mb-2">+ Fordeler</div>
                    <ul className="space-y-1.5 text-sm text-ink">
                      {bank.pros.map((p, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-forest shrink-0 mt-0.5">✓</span>
                          <span>{p}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <div className="text-sm font-bold text-amber-warm mb-2">− Ulemper</div>
                    <ul className="space-y-1.5 text-sm text-ink">
                      {bank.cons.map((p, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-amber-warm shrink-0 mt-0.5">−</span>
                          <span>{p}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="bg-forest-soft rounded-lg p-3 text-sm text-ink">
                  <strong className="text-forest">Best for:</strong> {bank.bestFor}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* TRYGT ELLER IKKE */}
        <section>
          <h2 className="text-2xl font-bold text-ink mb-4 flex items-center gap-2">
            Er det trygt? Ja — og her er hvorfor
          </h2>
          <div className="invert-block rounded-2xl p-7 mb-6">
            <h3 className="font-bold text-paper/80 mb-5 uppercase text-sm tracking-wide">Innskuddsgaranti i Norge</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-paper/10 rounded-xl p-6 text-center">
                <div className="text-5xl font-black mb-2">100.000 €</div>
                <div className="text-paper/80 text-sm font-medium">per person per bank</div>
              </div>
              <div className="bg-paper/10 rounded-xl p-6 text-center">
                <div className="text-5xl font-black mb-2">Statlig</div>
                <div className="text-paper/80 text-sm font-medium">Bankenes Sikringsfond</div>
              </div>
            </div>
          </div>
          <p className="text-ink leading-relaxed mb-4">
            Alle banker som opererer i Norge er med i <strong>Bankenes Sikringsfond</strong>. Det betyr at hvis noe går galt — banken går konkurs — får du tilbake pengene dine opp til 100.000 euro.
          </p>
          <p className="text-ink leading-relaxed mb-4">
            For de aller fleste sparere er ikke dette noe du trenger å bekymre deg for. Men det er godt å vite at staten har din rygg.
          </p>

          <div className="bg-forest-soft rounded-xl p-6 border border-forest/20">
            <h3 className="font-bold text-forest mb-4 flex items-center gap-2">
              Høyrentekonto = trygt + høy avkastning
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                'Ingen aksjemarkedrisiko — pengene er der alltid',
                'Ingen bindingstid — du kan ta ut pengene når som helst',
                'Statlig garanti på innskudd',
                'Renteinntekter beskattes (22% skatt på renteinntekt)',
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-2">
                  <span className="text-ink">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* REGNEKSTYKKE */}
        <section>
          <h2 className="text-2xl font-bold text-ink mb-4 flex items-center gap-2">
            Regnestykket: Høyrentekonto vs. brukskonto
          </h2>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse rounded-xl overflow-hidden shadow-sm">
              <thead>
                <tr className="bg-paper text-ink border-b border-border">
                  <th className="text-left p-4 font-bold">Beløp</th>
                  <th className="text-left p-4 font-bold bg-forest text-paper">Høyrentekonto (4,65%)</th>
                  <th className="text-left p-4 font-bold">Brukskonto (0%)</th>
                  <th className="text-left p-4 font-bold">Differanse</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { amount: '50.000 kr', diff: '+ 2.325 kr/år' },
                  { amount: '100.000 kr', diff: '+ 4.650 kr/år' },
                  { amount: '250.000 kr', diff: '+ 11.625 kr/år' },
                  { amount: '500.000 kr', diff: '+ 23.250 kr/år' },
                ].map((row, i) => (
                  <tr key={row.amount} className={i % 2 === 0 ? 'bg-paper-surface border-b border-border' : 'bg-paper-alt border-b border-border'}>
                    <td className="p-4 font-semibold text-ink">{row.amount}</td>
                    <td className="p-4 bg-forest-soft text-forest font-bold">{row.diff}</td>
                    <td className="p-4 text-ink-subtle">+ 0 kr</td>
                    <td className="p-4 font-bold text-forest">{row.diff}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="invert-block rounded-xl p-7">
            <h3 className="font-bold text-paper mb-5 flex items-center gap-2">
              Etter 10 år med 100.000 kr på høyrentekonto:
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
              <div className="text-center p-5 bg-forest/20 rounded-xl border border-forest/30">
                <div className="text-4xl font-black text-forest-soft">157.000 kr</div>
                <div className="text-sm text-paper/80 mt-2">Med 4,65% rente (årlig kapitalisering)</div>
              </div>
              <div className="text-center p-5 bg-paper/5 rounded-xl border border-paper/10">
                <div className="text-4xl font-black text-paper/60">100.000 kr</div>
                <div className="text-sm text-paper/60 mt-2">På brukskonto med 0%</div>
              </div>
            </div>
            <p className="text-center text-forest-soft font-bold text-lg">
              + 57.000 kr bare på renteinntekter — uten å løfte en finger
            </p>
          </div>
        </section>

        {/* INFLASJON */}
        <section>
          <h2 className="text-2xl font-bold text-ink mb-4 flex items-center gap-2">
            Det skjulte problemet: inflasjon
          </h2>
          <p className="text-ink leading-relaxed mb-4">
            Norges Bank holder inflasjonen rundt 2-3% på lang sikt. Det betyr at 100.000 kroner i dag kun er verdt rundt 97.000 kroner om et år — fordi prisene stiger.
          </p>
          <p className="text-ink leading-relaxed mb-4">
            En høyrentekonto på 4,65% beskytter ikke bare pengene dine — den <strong>øker</strong> faktisk kjøpekraften din i reelle termer (inflasjon justert).
          </p>

          <div className="bg-amber-warm-soft rounded-xl p-6 border border-amber-warm/30">
            <h3 className="font-bold text-amber-warm mb-4 flex items-center gap-2">
              <span></span> Regnestykket som bør bekymre deg
            </h3>
            <div className="space-y-2.5 text-ink">
              <div className="flex justify-between py-2 border-b border-amber-warm/20">
                <span>Penger på brukskonto:</span>
                <span className="font-bold text-ink">100.000 kr</span>
              </div>
              <div className="flex justify-between py-2 border-b border-amber-warm/20">
                <span>Inflasjon (3%):</span>
                <span className="font-bold text-amber-warm">- 3.000 kr i verdi</span>
              </div>
              <div className="flex justify-between py-2 border-b border-amber-warm/20">
                <span>Renteinntekt (0%):</span>
                <span className="font-bold">+ 0 kr</span>
              </div>
              <div className="flex justify-between bg-amber-warm/10 rounded-lg px-4 py-3 mt-2">
                <span className="font-bold text-amber-warm">Reell verdi etter 1 år:</span>
                <span className="font-black text-amber-warm text-lg">~97.000 kr</span>
              </div>
            </div>
          </div>
        </section>

        {/* SLIK KOMMER DU I GANG */}
        <section>
          <h2 className="text-2xl font-bold text-ink mb-6 flex items-center gap-2">
            Slik kommer du i gang — steg for steg
          </h2>
          <div className="space-y-4">
            {[
              { n: '1', title: 'Velg en høyrentekonto', desc: 'Sammenlign bankene i tabellen over. Svea Bank og Bank Norwegian Sparekonto 31 topper listen i august 2026 med 4,65%. Velg den som passer deg best.' },
              { n: '2', title: 'Åpne konto digitalt', desc: 'De fleste digitale banker lar deg åpne konto direkte i app eller på nettsiden. Du trenger BankID og en norsk folkeregistrert adresse.' },
              { n: '3', title: 'Overfør sparepengene dine', desc: 'Flytt pengene du vil spare fra din vanlige bank til den nye høyrentekontoen. BankID gjør dette kjapt og sikkert.' },
              { n: '4', title: 'Sett opp spareavtale', desc: 'Mange banker tilbyr muligheten til å sette opp en fast månedlig overføring. På den måten bygger du sparingen din automatisk.' },
            ].map(item => (
              <div key={item.n} className="flex items-start gap-5 bg-paper-surface rounded-xl p-5 border border-border shadow-sm hover:shadow-md transition-all">
                <div className="w-11 h-11 rounded-full bg-forest text-paper flex items-center justify-center font-bold text-lg flex-shrink-0 shadow-sm">{item.n}</div>
                <div>
                  <h3 className="font-bold text-ink mb-1">{item.title}</h3>
                  <p className="text-ink-muted text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* BSU VS HØYRENTEKONTO */}
        <section>
          <h2 className="text-2xl md:text-3xl font-black text-ink mb-6 flex items-center gap-2">
            <span></span> BSU vs høyrentekonto — hva skal du velge?
          </h2>
          <p className="text-ink leading-relaxed mb-6">
            Mange lurer på om de skal velge BSU eller høyrentekonto. Svaret er enkelt: <strong>Hvis du er under 34 år og skal kjøpe bolig, er BSU det beste valget.</strong> Ellers er høyrentekonto fleksibelt og godt.
          </p>

          <div className="bg-paper-surface rounded-2xl border border-border shadow-sm overflow-hidden mb-6">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-paper text-ink border-b border-border">
                  <th className="text-left p-4 font-bold">Kriterie</th>
                  <th className="text-left p-4 font-bold bg-forest text-paper">BSU</th>
                  <th className="text-left p-4 font-bold bg-amber-warm text-paper">Høyrentekonto</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { label: 'Skattefradrag', bsu: '10% på innskudd', hoyrente: 'Ingen' },
                  { label: 'Aldersgrense', bsu: '18–33 år', hoyrente: 'Ingen' },
                  { label: 'Maks innskudd/år', bsu: '27 500 kr', hoyrente: 'Ingen grense' },
                  { label: 'Binding', bsu: 'Til boligkjøp (strengt)', hoyrente: 'Ingen — ta ut når som helst' },
                  { label: 'Rente', bsu: '3,5–6,10% (varierer)', hoyrente: '3,65–4,65% (varierer)' },
                  { label: 'Mål', bsu: 'Egenkapital til bolig', hoyrente: 'Generell sparing' },
                ].map((row, i) => (
                  <tr key={i} className={`border-b border-border ${i % 2 === 0 ? 'bg-paper-surface' : 'bg-paper-alt/50'}`}>
                    <td className="p-4 font-semibold text-ink">{row.label}</td>
                    <td className="p-4 text-ink-muted">{row.bsu}</td>
                    <td className="p-4 text-ink-muted">{row.hoyrente}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-forest-soft rounded-xl p-5 border-l-4 border-forest">
              <h3 className="font-bold text-forest mb-2">Velg BSU hvis:</h3>
              <ul className="space-y-1 text-sm text-ink">
                <li>• Du er under 34 år</li>
                <li>• Du planlegger å kjøpe bolig</li>
                <li>• Du vil ha 10% skattefradrag</li>
                <li>• Du tåler litt binding</li>
              </ul>
              <div className="mt-3">
                <Link href="/sparing/bsu-guide" className="inline-flex items-center gap-1 text-forest font-bold text-sm hover:underline">
                  Les full BSU-guide →
                </Link>
              </div>
            </div>
            <div className="bg-forest-soft rounded-xl p-5 border-l-4 border-forest-mid">
              <h3 className="font-bold text-forest mb-2"> Velg høyrentekonto hvis:</h3>
              <ul className="space-y-1 text-sm text-ink">
                <li>• Du er 34+ år (eller yngre uten boligplan)</li>
                <li>• Du vil ha fleksibel tilgang til pengene</li>
                <li>• Du sparer til andre mål (bil, reise, buffer)</li>
                <li>• Du vil kunne flytte penger når som helst</li>
              </ul>
            </div>
          </div>
        </section>

        {/* HVEM PASSER DETTE FOR? */}
        <section>
          <h2 className="text-2xl md:text-3xl font-black text-ink mb-3 flex items-center gap-2">
            Hvem passer en høyrentekonto for?
          </h2>
          <p className="text-ink leading-relaxed mb-6">
            Høyrentekonto passer for de fleste nordmenn som har en buffer eller et sparemål på 2–5 år. Men det er noen tilfeller der det er spesielt viktig — og noen der du bør vurdere alternativer.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { emoji: '✓', title: 'Du bygger buffer', desc: '3–6 måneders utgifter bør aldri stå på brukskonto med 0 % rente. På høyrentekonto vokser bufferen din mens du sover.', tone: 'positive' },
              { emoji: '✓', title: 'Du sparer til noe på 2–5 år', desc: 'Bil, bryllup, renovering, ferie — alt som er for kort til å investere i fond, men for langt unna til å holde på brukskonto.', tone: 'positive' },
              { emoji: '✓', title: 'Du er over 34 år (eller skal ikke kjøpe bolig)', desc: 'Da er BSU uaktuelt, og høyrentekonto er det beste sparealternativet uten risiko.', tone: 'positive' },
              { emoji: '✓', title: 'Du har over 1,7 millioner kroner', desc: 'Da begynner formuesskatt å spise avkastningen. Du bør likevel ha en buffer på høyrentekonto før du vurderer investering i fond eller aksjer.', tone: 'positive' },
              { emoji: '✗', title: 'Du sparer til noe om 10+ år', desc: 'Da bør du vurdere fond eller aksjer. Forventet avkastning er høyere over tid, og du har tid til å ri ut markedssvingninger.', tone: 'negative' },
              { emoji: '✗', title: 'Du er under 34 og skal kjøpe bolig', desc: 'BSU gir 10 % skattefradrag på innskuddene dine — det er 10 % «gratis» avkastning, bedre enn noen høyrentekonto kan gi.', tone: 'negative' },
            ].map(card => (
              <div key={card.title} className={`rounded-xl p-5 border ${card.tone === 'positive' ? 'bg-forest-soft border-forest/20' : 'bg-amber-warm-soft border-amber-warm/20'}`}>
                <div className="flex items-start gap-3">
                  <div className={`w-8 h-8 rounded-full ${card.tone === 'positive' ? 'bg-forest text-paper' : 'bg-amber-warm text-paper'} flex items-center justify-center font-bold shrink-0 text-base`}>{card.emoji}</div>
                  <div>
                    <h3 className="font-bold text-ink mb-1">{card.title}</h3>
                    <p className="text-sm text-ink-muted leading-relaxed">{card.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* VANLIGE SPØRSMÅL */}
        <section>
          <h2 className="text-2xl font-bold text-ink mb-4 flex items-center gap-2">
            Vanlige spørsmål
          </h2>
          <div className="space-y-4">
            {[
              { q: 'Må jeg betale skatt på renteinntekter?', a: 'Ja, renteinntekter er skattepliktig. For 2026 er skattesatsen på renteinntekter 22%. Men med 4,65% rente på 100.000 kr gir dette 4.650 kr i brutto rente, hvorav du betaler rundt 1.023 kr i skatt — altså fortsatt 3.627 kr netto. Langt bedre enn 0 kr på brukskonto.' },
              { q: 'Kan jeg ta ut pengene når jeg vil?', a: 'Ja, de fleste høyrentekontoer har ingen bindingstid. Pengene er dine å flytte når som helst. Enkelte banker kan ha litt ventetid på uttak (1-2 dager), men ingen reell binding.' },
              { q: 'Er høyrentekonto bedre enn fond?', a: 'Det avhenger av tidshorisonten din. Høyrentekonto gir garantert avkastning med null risiko. Fond kan gi høyere avkastning over tid, men du kan tape penger. For kortsiktig sparing (under 2-3 år) er høyrentekonto det beste valget.' },
              { q: 'Hva med formuesskatt på innskudd?', a: 'Formuesskatt på bankinnskudd er en spesiell norsk skatt som legges på innskudd over 1.700.000 kr (2026). For de fleste sparere er ikke dette relevant. Sjekk med din situasjon hvis du har veldig store innskudd.' },
            ].map((faq, i) => (
              <details key={i} className="group bg-paper-surface rounded-xl border border-border overflow-hidden">
                <summary className="flex items-center justify-between gap-4 px-6 py-5 cursor-pointer font-bold text-ink hover:text-forest transition-colors list-none">
                  <span className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-forest-soft text-forest text-xs font-bold flex items-center justify-center shrink-0">{i + 1}</span>
                    {faq.q}
                  </span>
                  <svg className="w-5 h-5 text-ink-subtle group-open:rotate-180 transition-transform shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-6 pb-5 text-ink-muted text-sm leading-relaxed border-t border-border pt-4">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="invert-block rounded-2xl p-10 text-center relative overflow-hidden">
          <div className="relative">
            <h2 className="text-3xl md:text-4xl font-display font-medium mb-4">Klar til å la pengene jobbe for deg?</h2>
            <p className="text-paper/80 text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
              En høyrentekonto tar 15 minutter å sette opp og kan gi deg tusenvis av kroner mer i året — helt uten risiko.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/verktøy/sparekalkulator" className="inline-flex items-center justify-center gap-2 bg-amber-warm hover:opacity-90 text-paper font-extrabold px-8 py-4 rounded-md text-lg shadow-lg transition-all">
                Bruk sparekalkulatoren
              </Link>
              <Link href="/sparing/beste-sparekonto-2026" className="inline-flex items-center justify-center gap-2 bg-paper/10 hover:bg-paper/20 text-paper font-bold px-6 py-4 rounded-md transition-colors border border-paper/30">
                Sammenlign alle sparekontoer
              </Link>
            </div>
          </div>
        </section>

        <RelatedContent tools={article?.relatedTools} articles={relatedArticles} />

        <p className="text-sm text-ink-subtle pt-8 border-t border-border">
          Sist oppdatert: 13. august 2026, kl. 09:00. Rentene er veiledende og kan endres. Vi sjekker hver banks nettside manuelt. Kilder: bankenes egne sider (per oppdateringstidspunkt).
        </p>
      </article>
    </>
  )
}