import Link from 'next/link'
import type { Metadata } from 'next'
import EmailCapture from '@/components/EmailCapture'
import RelatedContent from '@/components/RelatedContent'
import { getArticleBySlug, getRelatedArticles } from '@/lib/articles'

export const metadata: Metadata = {
  title: 'Beste Høyrentekonto August 2026: Sammenlign 20+ Bankers Renter | Pengepraten',
  description: 'Sammenlign de beste høyrentekontoene i Norge akkurat nå. Oppdatert august 2026 med Sbanken (4,09%), Nordea (4,35%), DNB (4,10%) og flere. Få 4%+ rente uten risiko.',
  keywords: ['beste høyrentekonto', 'høyrentekonto 2026', 'sparekonto med høy rente', 'beste sparekonto norge', 'høyrentekonto sammenligning'],
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
                Sist oppdatert: 2. august 2026
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
        <div className="bg-green-50 rounded-2xl p-7 border-l-4 border-green-600">
          <p className="text-lg text-gray-800 leading-relaxed">
            <strong>Høyrentekonto</strong> er rett og slett den beste høyrentekontoen for deg som vil ha en sparekonto med høy rente. I august 2026 kan du få inntil 4,65% rente på en sparekonto med høy rente — rett og slett gratis avkastning uten noen risiko.
          </p>
        </div>

        {/* BANK COMPARISON TABLE */}
        <section>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-6">
            <div>
              <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-2 flex items-center gap-2">
                Beste høyrentekontoer i Norge
              </h2>
              <p className="text-gray-500">Sist oppdatert: 2. august 2026 — klikk på banken for å åpne konto</p>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-400 shrink-0">
              <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-ink">Innskuddsgaranti på alle</span>
            </div>
          </div>

          {/* Desktop table */}
          <div className="hidden md:block bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden mb-4">
            <table className="w-full">
              <thead>
                <tr className="bg-gradient-to-r from-gray-800 to-gray-900 text-white text-sm">
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
                      border-b border-gray-100 last:border-0
                      hover:bg-green-50 transition-colors group
                      ${i % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'}
                    `}
                  >
                    <td className="px-6 py-5">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center text-white font-black text-sm shadow-sm shrink-0">
                          {bank.name.charAt(0)}
                        </div>
                        <div>
                          <div className="font-bold text-gray-900">{bank.name}</div>
                          <div className="text-xs text-gray-400">{bank.type}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-5 text-center">
                      <div className="inline-flex items-center gap-1 bg-green-100 text-green-700 font-black text-xl px-3 py-1.5 rounded-lg">
                        {bank.rate.toFixed(2)}%
                      </div>
                    </td>
                    <td className="px-4 py-5 text-center">
                      <span className="text-sm text-gray-600">{bank.guarantee}</span>
                    </td>
                    <td className="px-4 py-5 text-center">
                      <span className="text-sm text-gray-600">{bank.minDeposit}</span>
                    </td>
                    <td className="px-4 py-5 text-center">
                      <div className="flex flex-col items-center gap-1">
                        <span className="text-sm font-medium text-gray-700">{bank.access}</span>
                        <StarRating />
                      </div>
                    </td>
                    <td className="px-6 py-5 text-center">
                      <a
                        href={bank.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 bg-green-600 hover:bg-green-700 text-white font-semibold text-sm px-4 py-2 rounded-lg transition-colors shadow-sm hover:shadow-md"
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
              <div key={bank.name} className={`rounded-xl border p-5 ${i % 2 === 0 ? 'bg-white border-gray-200' : 'bg-gray-50 border-gray-100'}`}>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center text-white font-black text-sm shadow-sm">
                      {bank.name.charAt(0)}
                    </div>
                    <div>
                      <div className="font-bold text-gray-900">{bank.name}</div>
                      <div className="text-xs text-gray-400">{bank.type}</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-black text-green-700">{bank.rate.toFixed(2)}%</div>
                    <div className="text-xs text-gray-400">effektiv rente</div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-2 mb-4 text-sm">
                  <div className="flex justify-between"><span className="text-gray-500">Garanti:</span><span className="font-medium">{bank.guarantee}</span></div>
                  <div className="flex justify-between"><span className="text-gray-500">Minst:</span><span className="font-medium">{bank.minDeposit}</span></div>
                  <div className="flex justify-between"><span className="text-gray-500">Tilgang:</span><span className="font-medium">{bank.access}</span></div>
                </div>
                <a
                  href={bank.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full block text-center bg-green-600 hover:bg-green-700 text-white font-semibold text-sm py-2.5 rounded-lg transition-colors"
                >
                  {bank.cta} →
                </a>
              </div>
            ))}
          </div>

          <div className="bg-gray-100 rounded-xl p-4 text-sm text-gray-500 flex items-center gap-2 mt-4">
            <svg className="w-4 h-4 shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
            </svg>
            <span className="text-ink">Rentene er flytende og kan endres. Sjekk bankens nettsider for oppdaterte tall. Alle kontoer er dekket av norsk innskuddsgaranti (100.000 euro per person per bank).</span>
          </div>
        </section>

        {/* EMAIL CAPTURE */}
        <EmailCapture
          variant="card"
          title="Få e-postvarsel når rentene endres"
          description="Få ukentlig renteoppdatering rett i innboksen din. Vi sender deg beskjed med en gang noen av bankene endrer renten sin — slik at du alltid er på topp."
        />

        {/* INFOBOX */}
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
          <h3 className="font-bold text-amber-800 mb-3 flex items-center gap-2">
            <span className="text-xl">→</span> Visste du?
          </h3>
          <p className="text-gray-800 text-lg leading-relaxed">
            <strong>100.000 kr på en vanlig brukskonto med 0% rente</strong> taper rundt{' '}
            <span className="text-amber-700 font-black text-xl">4.000 kr</span> i året i reell verdi — bare på grunn av inflasjon. Pengene dine blir stadig mindre verdt.
          </p>
        </div>

        {/* HVORFOR HØYERE RENTE */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            Hvorfor kan noen banker tilby så høy rente?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            {[
              { icon: 'Monitor', title: 'Ingen filialer', desc: 'Digitale banker har ikke kostnader til lokaler, ansatte i fysiske banker og annet. De sparer, og deler besparelsen med deg.' },
              { icon: 'Smartphone', title: 'Kun app og nettside', desc: 'Alt skjer digitalt. Du har tilgang til kontoen din 24/7, og kan overføre penger umiddelbart når du trenger det.' },
              { icon: 'TrendingUp', title: 'Konkurranse om kundene', desc: 'Bankene kjemper om sparingen din. Høy rente er et markedsmessig verktøy for å tiltrekke seg nye kunder.' },
            ].map(item => (
              <div key={item.title} className="bg-white rounded-xl p-5 border border-gray-200 shadow-sm hover:shadow-md hover:border-green-200 transition-all">
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-gray-700 leading-relaxed">
            En vanlig norsk storbank som DnB eller Nordea har mange tusen ansatte og dyre kontorer over hele landet. De trenger ikke å tilby høy rente fordi kundene likevel har sin lønnskonto der. Digitale banker har ingen slik fordel — så de må konkurrere på pris.
          </p>
        </section>

        {/* TOP 3 ANBEFALINGER */}
        <section>
          <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-6 flex items-center gap-2">
            Våre top 3 anbefalinger
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { rank: '1', name: 'Svea Bank', rate: '4,65%', why: 'Svensk nettbank med høy rente, ingen bindingstid og ubegrenset uttak. Ny rente for eksisterende kunder 27.08.26.', bestFor: 'Deg som vil ha maks avkastning uten binding', color: 'from-amber-400 to-amber-500', badge: 'Beste rente' },
              { rank: '2', name: 'OBOS Sparekonto Langsiktig', rate: '4,55%', why: 'Medlemsbank med god rente fra første krone. Ingen krav om å binde pengene. OBOS-medlemskap kan gi ytterligere fordeler.', bestFor: 'Deg som vil ha høy rente og norsk medlemsbank', color: 'from-gray-300 to-gray-400', badge: 'Medlemsbank' },
              { rank: '3', name: 'Nordnet (kvalifisert)', rate: '4,0%', why: 'Perfekt for deg som både vil spare trygt og investere. Kvalifisert sparekonto krever at man aktivt melder ifra — men da får du en god rente.', bestFor: 'Deg som vil spare smart og investere videre', color: 'from-orange-300 to-orange-400', badge: 'Sparing + investering' },
            ].map(card => (
              <div key={card.rank} className={`bg-gradient-to-br ${card.color} rounded-2xl p-6 text-white relative overflow-hidden`}>
                <div className="absolute top-3 right-3 bg-white/20 backdrop-blur-sm text-white text-xs font-bold px-2 py-1 rounded-full">{card.badge}</div>
                <div className="text-4xl font-black mb-2">#{card.rank}</div>
                <div className="text-2xl font-bold mb-1">{card.name}</div>
                <div className="text-3xl font-black mb-3">{card.rate}</div>
                <p className="text-white/90 text-sm leading-relaxed mb-3">{card.why}</p>
                <div className="bg-white/10 rounded-lg p-2 text-xs text-white/80">
                  <strong>Best for:</strong> {card.bestFor}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* TRYGT ELLER IKKE */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            Er det trygt? Ja — og her er hvorfor
          </h2>
          <div className="bg-gradient-to-br from-green-600 to-emerald-700 rounded-2xl p-7 text-white mb-6">
            <h3 className="font-bold text-green-100 mb-5 uppercase text-sm tracking-wide">Innskuddsgaranti i Norge</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                <div className="text-5xl font-black mb-2">100.000 €</div>
                <div className="text-green-100 text-sm font-medium">per person per bank</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                <div className="text-5xl font-black mb-2">Statlig</div>
                <div className="text-green-100 text-sm font-medium">Bankenes Sikringsfond</div>
              </div>
            </div>
          </div>
          <p className="text-gray-700 leading-relaxed mb-4">
            Alle banker som opererer i Norge er med i <strong>Bankenes Sikringsfond</strong>. Det betyr at hvis noe går galt — banken går konkurs — får du tilbake pengene dine opp til 100.000 euro.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            For de aller fleste sparere er ikke dette noe du trenger å bekymre deg for. Men det er godt å vite at staten har din rygg.
          </p>

          <div className="bg-green-50 rounded-xl p-6 border border-green-200">
            <h3 className="font-bold text-green-800 mb-4 flex items-center gap-2">
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
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* REGNEKSTYKKE */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            Regnestykket: Høyrentekonto vs. brukskonto
          </h2>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse rounded-xl overflow-hidden shadow-sm">
              <thead>
                <tr className="bg-gray-800 text-white">
                  <th className="text-left p-4 font-bold">Beløp</th>
                  <th className="text-left p-4 font-bold bg-green-600">Høyrentekonto (4,65%)</th>
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
                  <tr key={row.amount} className={i % 2 === 0 ? 'bg-white border-b border-gray-100' : 'bg-gray-50 border-b border-gray-100'}>
                    <td className="p-4 font-semibold text-gray-700">{row.amount}</td>
                    <td className="p-4 bg-green-50 text-green-700 font-bold">{row.diff}</td>
                    <td className="p-4 text-gray-400">+ 0 kr</td>
                    <td className="p-4 font-bold text-green-700">{row.diff}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-7 text-white">
            <h3 className="font-bold text-green-400 mb-5 flex items-center gap-2">
              Etter 10 år med 100.000 kr på høyrentekonto:
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
              <div className="text-center p-5 bg-green-600/20 rounded-xl border border-green-500/20">
                <div className="text-4xl font-black text-green-400">157.000 kr</div>
                <div className="text-sm text-gray-300 mt-2">Med 4,65% rente (årlig kapitalisering)</div>
              </div>
              <div className="text-center p-5 bg-white/5 rounded-xl border border-white/10">
                <div className="text-4xl font-black text-gray-400">100.000 kr</div>
                <div className="text-sm text-gray-400 mt-2">På brukskonto med 0%</div>
              </div>
            </div>
            <p className="text-center text-green-400 font-bold text-lg">
              + 57.000 kr bare på renteinntekter — uten å løfte en finger
            </p>
          </div>
        </section>

        {/* INFLASJON */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            Det skjulte problemet: inflasjon
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Norges Bank holder inflasjonen rundt 2-3% på lang sikt. Det betyr at 100.000 kroner i dag kun er verdt rundt 97.000 kroner om et år — fordi prisene stiger.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            En høyrentekonto på 4,65% beskytter ikke bare pengene dine — den <strong>øker</strong> faktisk kjøpekraften din i reelle termer (inflasjon justert).
          </p>

          <div className="bg-red-50 rounded-xl p-6 border border-red-200">
            <h3 className="font-bold text-red-800 mb-4 flex items-center gap-2">
              <span></span> Regnestykket som bør bekymre deg
            </h3>
            <div className="space-y-2.5 text-gray-700">
              <div className="flex justify-between py-2 border-b border-red-100">
                <span className="text-ink">Penger på brukskonto:</span>
                <span className="font-bold text-gray-900">100.000 kr</span>
              </div>
              <div className="flex justify-between py-2 border-b border-red-100">
                <span className="text-ink">Inflasjon (3%):</span>
                <span className="font-bold text-red-700">- 3.000 kr i verdi</span>
              </div>
              <div className="flex justify-between py-2 border-b border-red-100">
                <span className="text-ink">Renteinntekt (0%):</span>
                <span className="font-bold">+ 0 kr</span>
              </div>
              <div className="flex justify-between bg-red-100 rounded-lg px-4 py-3 mt-2">
                <span className="font-bold text-red-800">Reell verdi etter 1 år:</span>
                <span className="font-black text-red-800 text-lg">~97.000 kr</span>
              </div>
            </div>
          </div>
        </section>

        {/* SLIK KOMMER DU I GANG */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            Slik kommer du i gang — steg for steg
          </h2>
          <div className="space-y-4">
            {[
              { n: '1', title: 'Velg en høyrentekonto', desc: 'Sammenlign bankene i tabellen over. Svea Bank og Bank Norwegian Sparekonto 31 topper listen i august 2026 med 4,65%. Velg den som passer deg best.' },
              { n: '2', title: 'Åpne konto digitalt', desc: 'De fleste digitale banker lar deg åpne konto direkte i app eller på nettsiden. Du trenger BankID og en norsk folkeregistrert adresse.' },
              { n: '3', title: 'Overfør sparepengene dine', desc: 'Flytt pengene du vil spare fra din vanlige bank til den nye høyrentekontoen. BankID gjør dette kjapt og sikkert.' },
              { n: '4', title: 'Sett opp spareavtale', desc: 'Mange banker tilbyr muligheten til å sette opp en fast månedlig overføring. På den måten bygger du sparingen din automatisk.' },
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

        {/* BSU VS HØYRENTEKONTO */}
        <section>
          <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-6 flex items-center gap-2">
            <span></span> BSU vs høyrentekonto — hva skal du velge?
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Mange lurer på om de skal velge BSU eller høyrentekonto. Svaret er enkelt: <strong>Hvis du er under 34 år og skal kjøpe bolig, er BSU det beste valget.</strong> Ellers er høyrentekonto fleksibelt og godt.
          </p>

          <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden mb-6">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-800 text-white">
                  <th className="text-left p-4 font-bold">Kriterie</th>
                  <th className="text-left p-4 font-bold bg-green-600">BSU</th>
                  <th className="text-left p-4 font-bold bg-emerald-600">Høyrentekonto</th>
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
                  <tr key={i} className={`border-b border-gray-100 ${i % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'}`}>
                    <td className="p-4 font-semibold text-gray-800">{row.label}</td>
                    <td className="p-4 text-gray-700">{row.bsu}</td>
                    <td className="p-4 text-gray-700">{row.hoyrente}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-green-50 rounded-xl p-5 border-l-4 border-green-600">
              <h3 className="font-bold text-green-800 mb-2">Velg BSU hvis:</h3>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• Du er under 34 år</li>
                <li>• Du planlegger å kjøpe bolig</li>
                <li>• Du vil ha 10% skattefradrag</li>
                <li>• Du tåler litt binding</li>
              </ul>
              <div className="mt-3">
                <Link href="/sparing/bsu-guide" className="inline-flex items-center gap-1 text-green-700 font-bold text-sm hover:underline">
                  Les full BSU-guide →
                </Link>
              </div>
            </div>
            <div className="bg-emerald-50 rounded-xl p-5 border-l-4 border-emerald-600">
              <h3 className="font-bold text-emerald-800 mb-2"> Velg høyrentekonto hvis:</h3>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• Du er 34+ år (eller yngre uten boligplan)</li>
                <li>• Du vil ha fleksibel tilgang til pengene</li>
                <li>• Du sparer til andre mål (bil, reise, buffer)</li>
                <li>• Du vil kunne flytte penger når som helst</li>
              </ul>
            </div>
          </div>
        </section>

        {/* VANLIGE SPØRSMÅL */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            Vanlige spørsmål
          </h2>
          <div className="space-y-4">
            {[
              { q: 'Må jeg betale skatt på renteinntekter?', a: 'Ja, renteinntekter er skattepliktig. For 2026 er skattesatsen på renteinntekter 22%. Men med 4,65% rente på 100.000 kr gir dette 4.650 kr i brutto rente, hvorav du betaler rundt 1.023 kr i skatt — altså fortsatt 3.627 kr netto. Langt bedre enn 0 kr på brukskonto.' },
              { q: 'Kan jeg ta ut pengene når jeg vil?', a: 'Ja, de fleste høyrentekontoer har ingen bindingstid. Pengene er dine å flytte når som helst. Enkelte banker kan ha litt ventetid på uttak (1-2 dager), men ingen reell binding.' },
              { q: 'Er høyrentekonto bedre enn fond?', a: 'Det avhenger av tidshorisonten din. Høyrentekonto gir garantert avkastning med null risiko. Fond kan gi høyere avkastning over tid, men du kan tape penger. For kortsiktig sparing (under 2-3 år) er høyrentekonto det beste valget.' },
              { q: 'Hva med formuesskatt på innskudd?', a: 'Formuesskatt på bankinnskudd er en spesiell norsk skatt som legges på innskudd over 1.700.000 kr (2026). For de fleste sparere er ikke dette relevant. Sjekk med din situasjon hvis du har veldig store innskudd.' },
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
            <h2 className="text-3xl md:text-4xl font-black mb-4">Klar til å la pengene jobbe for deg?</h2>
            <p className="text-ink-muted text-lg leading-relaxed mb-8 max-w-2xl mx-auto leading-relaxed">
              En høyrentekonto tar 15 minutter å sette opp og kan gi deg tusenvis av kroner mer i året — helt uten risiko.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/verktøy/sparekalkulator" className="inline-flex items-center justify-center gap-2 bg-amber-400 hover:bg-amber-300 text-green-900 font-extrabold px-8 py-4 rounded-xl text-lg shadow-lg transition-all hover:scale-105">
                Bruk sparekalkulatoren
              </Link>
              <Link href="/sparing/beste-sparekonto-2026" className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-bold px-6 py-4 rounded-xl transition-colors border border-white/30">
                Sammenlign alle sparekontoer
              </Link>
            </div>
          </div>
        </section>

        <RelatedContent tools={article?.relatedTools} articles={relatedArticles} />

        <p className="text-sm text-gray-400 pt-8 border-t">
          Sist oppdatert: 2. august 2026. Rentene er veiledende og kan endres. Sjekk bankens nettsider for oppdaterte vilkår. Kilder: bankenes egne sider og Finansportalen.
        </p>
      </article>
    </>
  )
}