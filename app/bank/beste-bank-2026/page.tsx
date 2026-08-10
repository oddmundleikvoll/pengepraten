import Link from 'next/link'
import type { Metadata } from 'next'
import EmailCapture from '@/components/EmailCapture'
import RelatedContent from '@/components/RelatedContent'
import { getArticleBySlug, getRelatedArticles } from '@/lib/articles'

export const metadata: Metadata = {
  title: 'Beste Bank i Norge August 2026: Test og Sammenligning | Pengepraten',
  description: 'Få oversikt over beste banker i Norge august 2026. Sammenlign sparing, lån, gebyrer og brukskonto. Se hvilken bank som passer deg best.',
  keywords: ['beste bank 2026', 'bank sammenligning', 'beste bank i norge', 'bank test', 'bank valg'],
}

// Sortert synkende etter rente (per 2. august 2026). Kilder: bankenes egne sider
// (RENTEDATA-AUGUST-2026.md). Hygga, Front Finance, Milk Money, Salvest,
// Laksefjord Sparebank, Danske Bank og Sandnes Sparebank er fjernet —
// kort markedsendringer / ikke-verifisert per primærkilde.
const BANKS = [
  { name: 'Svea Bank', rate: 4.65, type: 'Svensk nettbank', guarantee: ' 100.000 €', minDeposit: 'Ingen', access: 'Umiddelbar', url: 'https://www.svea.com/nb-no/privat/sparing', cta: 'Åpne konto' },
  { name: 'Bank Norwegian Sparekonto 31', rate: 4.65, type: 'Nettbank (NOBA)', guarantee: ' 100.000 €', minDeposit: 'Ingen', access: '31 d varsel', url: 'https://www.banknorwegian.no/sparing/', cta: 'Åpne konto' },
  { name: 'OBOS Sparekonto Langsiktig', rate: 4.55, type: 'Medlemsbank', guarantee: ' 100.000 €', minDeposit: 'Ingen', access: 'Umiddelbar', url: 'https://www.obos.no/bank/sparing', cta: 'Åpne konto' },
  { name: 'Nordax Sparekonto Smart', rate: 4.50, type: 'Nettbank (NOBA)', guarantee: ' 100.000 €', minDeposit: 'Ingen', access: 'Umiddelbar', url: 'https://www.nordax.no/spare', cta: 'Åpne konto' },
  { name: 'BN Bank Høyrentekonto', rate: 4.49, type: 'Nettbank', guarantee: ' 100.000 €', minDeposit: 'Ingen', access: 'Begrenset', url: 'https://www.bnbank.no/sparing/', cta: 'Åpne konto' },
  { name: 'Nordea Sparekonto Ekstra', rate: 4.35, type: 'Nordisk storbank', guarantee: ' 100.000 €', minDeposit: 'Ingen', access: '4 frie uttak', url: 'https://www.nordea.no/privat/vare-produkter/sparing-og-investering/sparing-pa-konto/sparekonto-ekstra.html', cta: 'Åpne konto' },
  { name: 'Handelsbanken Sparekonto pluss', rate: 4.25, type: 'Svensk storbank', guarantee: ' 100.000 €', minDeposit: 'Ingen', access: '12 frie uttak', url: 'https://www.handelsbanken.no/no/privat/prislister/prisliste-innskuddsrenter', cta: 'Åpne konto' },
  { name: 'Bluestep Bank Sparekonto Flex', rate: 4.12, type: 'Nettbank (Enity)', guarantee: ' 100.000 €', minDeposit: '50k for topp', access: 'Umiddelbar', url: 'https://www.bluestep.no/spare/flytende-rente/', cta: 'Åpne konto' },
  { name: 'DNB Sparekonto Pluss', rate: 4.10, type: 'Norges største bank', guarantee: ' 100.000 €', minDeposit: '500k for topp', access: '12 frie uttak', url: 'https://www.dnb.no/sparing/sparing-pa-konto/sparekonto-pluss', cta: 'Åpne konto' },
  { name: 'Sbanken (over 500k)', rate: 4.09, type: 'Ren digital bank', guarantee: ' 100.000 €', minDeposit: 'Ingen', access: 'Umiddelbar', url: 'https://sbanken.no/spare/kontosparing/sparekonto', cta: 'Åpne konto' },
  { name: 'Nordnet (kvalifisert)', rate: 4.00, type: 'Investeringsplattform', guarantee: ' 100.000 €', minDeposit: 'Ingen', access: '1-2 dager', url: 'https://www.nordnet.no/tjenester/kontoer/sparekonto', cta: 'Åpne konto' },
  { name: 'Sbanken (under 500k)', rate: 3.65, type: 'Ren digital bank', guarantee: ' 100.000 €', minDeposit: 'Ingen', access: 'Umiddelbar', url: 'https://sbanken.no/spare/kontosparing/sparekonto', cta: 'Åpne konto' },
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

export default function BesteBank2026() {
  const article = getArticleBySlug('/bank/beste-bank-2026')
  const relatedArticles = article?.relatedArticles ? getRelatedArticles(article.relatedArticles) : []

  return (
    <>
      {/* HERO — Nordic Clarity editorial */}
      <section className="bg-paper text-ink py-16 md:py-20 border-b border-border">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <nav className="font-mono text-xs uppercase tracking-wider text-ink-muted mb-6">
            <Link href="/" className="hover:text-forest transition-colors">Hjem</Link>
            <span className="mx-2 text-border-strong">/</span>
            <Link href="/bank" className="hover:text-forest transition-colors">Bank</Link>
            <span className="mx-2 text-border-strong">/</span>
            <span className="text-ink">Beste bank 2026</span>
          </nav>
          <div className="flex flex-col lg:flex-row gap-10 items-center">
            <div className="flex-1">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-forest-soft text-forest rounded-full text-sm font-semibold mb-5">
                <span>Sist oppdatert: 2. august 2026</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium font-display mb-4 leading-[1.05]">
                Beste bank i Norge{' '}
                <span className="text-forest">2026</span>
              </h1>
              <p className="text-ink-muted text-lg md:text-xl max-w-2xl leading-relaxed">
                Hvilken bank er best for deg? Vi har testet og sammenlignet{' '}
                <strong className="text-ink">20+ norske banker</strong>{' '}
                på sparing, lån, gebyrer og digital opplevelse. Her er vinnerne.
              </p>
            </div>
            {/* Quick stats */}
            <div className="shrink-0 bg-paper-alt rounded-2xl border border-border p-6 min-w-[260px]">
              <div className="text-sm font-semibold text-ink-muted mb-3">Høyeste spare-rente</div>
              <div className="text-5xl font-display font-medium text-forest mb-1">4,65%</div>
              <div className="text-ink-muted text-sm mb-4">Svea Bank / Bank Norwegian — beste for sparing</div>
              <div className="space-y-2">
                {[
                  { label: 'Banker testet', value: '20+' },
                  { label: 'Kategorier', value: '7' },
                  { label: 'Innskuddsgaranti', value: '100.000 €' },
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
            <strong>Å velge riktig bank</strong> kan spare deg for tusenvis av kroner i året. Forskjellen mellom beste og verste bank på sparing, lån og gebyrer er enorm. Her er den komplette guiden til beste bank i Norge 2026 — uansett hva du trenger.
          </p>
        </div>

        {/* KATEGORIVINNERE */}
        <section>
          <h2 className="text-2xl md:text-3xl font-black text-ink mb-6 flex items-center gap-2">
            Vinnerne etter kategori
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { category: 'Beste bank for sparing', winner: 'Svea Bank', why: 'Høyeste rente på 4,65% med null gebyrer og umiddelbar tilgang. Svensk nettbank som fokuserer 100% på kundens avkastning.', rate: '4,65%', color: 'from-amber-400 to-amber-500', badge: 'Beste rente' },
              { category: 'Beste bank for boliglån', winner: 'SpareBank 1 SR-Bank', why: 'Konkurransedyktige boliglånsrenter og god lokal tjeneste i Rogaland. Også sterk digital plattform.', rate: 'Lav rente', color: 'from-blue-400 to-blue-500', badge: 'Boliglån' },
              { category: 'Beste bank for brukskonto/gebyrer', winner: 'Sbanken', why: 'Null gebyrer på brukskonto, kort og nettbank. Ingen skjulte kostnader — du betaler kun for det du bruker.', rate: '0 kr', color: 'from-emerald-400 to-emerald-500', badge: 'Null gebyrer' },
              { category: 'Beste bank for unge/studenter', winner: 'SpareBank 1 SMN', why: 'Gode studentpakker med gratis brukskonto, kredittkort og sparing. Sterk tilstedeværelse i Trøndelag med studentvennlige tjenester.', rate: 'Studentvennlig', color: 'from-purple-400 to-purple-500', badge: 'For unge' },
              { category: 'Beste bank for pensjonister', winner: 'SpareBank 1 Østlandet', why: 'Gode pensjonistpakker med rabatter, personlig rådgivning og trygge spareprodukter. Sterk lokal tilhørighet.', rate: 'Pensjonistvennlig', color: 'from-rose-400 to-rose-500', badge: 'For pensjonister' },
              { category: 'Beste digitale bank', winner: 'Sbanken', why: 'Markedsledende app og nettbank. Enkel, rask og intuitiv. Alt du trenger er tilgjengelig med noen få klikk.', rate: 'Topp app', color: 'from-cyan-400 to-cyan-500', badge: 'Digital' },
              { category: 'Beste tradisjonelle bank', winner: 'DNB', why: 'Norges største bank med filialer over hele landet. Beste for deg som vil ha personlig rådgivning og fysisk tilgjengelighet.', rate: 'Størst', color: 'from-gray-400 to-gray-500', badge: 'Tradisjonell' },
            ].map(card => (
              <div key={card.category} className="bg-paper border border-border rounded-2xl p-6 relative overflow-hidden">
                <div className="absolute top-3 right-3 bg-forest-soft text-forest text-xs font-bold px-2 py-1 rounded-full">{card.badge}</div>
                <div className="text-sm font-semibold text-ink-muted mb-1">{card.category}</div>
                <div className="text-2xl font-bold mb-1">{card.winner}</div>
                <div className="text-3xl font-display font-medium text-forest mb-3">{card.rate}</div>
                <p className="text-ink-muted text-sm leading-relaxed">{card.why}</p>
              </div>
            ))}
          </div>
        </section>

        {/* BANK COMPARISON TABLE */}
        <section>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-6">
            <div>
              <h2 className="text-2xl md:text-3xl font-black text-ink mb-2 flex items-center gap-2">
                Sammenligning: Spare-rente per bank
              </h2>
              <p className="text-ink-muted">Sist oppdatert: 2. august 2026 — klikk på banken for å åpne konto</p>
            </div>
            <div className="flex items-center gap-2 text-sm text-ink-subtle shrink-0">
              <svg className="w-4 h-4 text-forest" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Innskuddsgaranti på alle</span>
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
                    <div className="text-2xl font-display font-medium text-forest">{bank.rate.toFixed(2)}%</div>
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

        {/* HVORFOR BYTTE BANK */}
        <section>
          <h2 className="text-2xl font-bold text-ink mb-4 flex items-center gap-2">
            Hvorfor vurdere å bytte bank?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            {[
              { icon: '💰', title: 'Bedre rente', desc: 'Forskjellen mellom 0% og 5% på 100.000 kr er 5.000 kr i året. På 10 år blir det over 60.000 kr.' },
              { icon: '🏠', title: 'Lavere lånerente', desc: 'Selv 0,5% lavere rente på et boliglån på 3 millioner sparer deg 15.000 kr i året.' },
              { icon: '📱', title: 'Bedre digital opplevelse', desc: 'Moderne apper gjør det enklere å spare, betale og holde oversikt. Noen banker er 10 år foran andre.' },
            ].map(item => (
              <div key={item.title} className="bg-paper-surface rounded-xl p-5 border border-border shadow-sm hover:shadow-md hover:border-forest/30 transition-all">
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="font-bold text-ink mb-2">{item.title}</h3>
                <p className="text-ink-muted text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="bg-forest-soft rounded-xl p-6 border-l-4 border-forest">
            <p className="text-ink leading-relaxed">
              <strong>De fleste nordmenn bytter aldri bank.</strong> Det er synd — fordi konkurransen er hard og forskjellene er store. En time med research og et bytte kan spare deg for titusenvis av kroner over livet.
            </p>
          </div>
        </section>

        {/* CTA TIL BYTTE-BANK */}
        <section className="bg-paper-alt rounded-2xl p-8 border border-border">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="flex-1">
              <h3 className="text-xl font-display font-medium text-ink mb-2">Vurderer du å bytte bank?</h3>
              <p className="text-ink-muted leading-relaxed">
                Vi har laget en komplett guide til hvordan du bytter bank steg for steg. Fra research til overføring av lønnskonto og automatiske trekk.
              </p>
            </div>
            <Link href="/bank/bytte-bank" className="shrink-0 inline-flex items-center gap-2 bg-amber-warm hover:opacity-90 text-paper font-extrabold px-6 py-3 rounded-md shadow-md transition-all">
              Les guiden: Slik bytter du bank →
            </Link>
          </div>
        </section>

        {/* EMAIL CAPTURE */}
        <EmailCapture
          variant="card"
          title="Få e-postvarsel når rentene endres"
          description="Få ukentlig renteoppdatering rett i innboksen din. Vi sender deg beskjed med en gang noen av bankene endrer renten sin — slik at du alltid er på topp."
        />

        {/* DIGITAL VS TRADISJONELL */}
        <section>
          <h2 className="text-2xl font-bold text-ink mb-4 flex items-center gap-2">
            Digital bank vs. tradisjonell bank
          </h2>
          <p className="text-ink leading-relaxed mb-6">
            Skal du velge en ren digital bank som Sbanken, eller en tradisjonell storbank som DNB? Svaret avhenger av hva du verdsetter mest.
          </p>

          <div className="bg-paper-surface rounded-2xl border border-border shadow-sm overflow-hidden mb-6">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-paper text-ink border-b border-border">
                  <th className="text-left p-4 font-bold">Kriterie</th>
                  <th className="text-left p-4 font-bold bg-forest text-paper">Digital bank</th>
                  <th className="text-left p-4 font-bold bg-ink text-paper">Tradisjonell bank</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { label: 'Spare-rente', digital: '4–5,2%', trad: '1–3,5%' },
                  { label: 'Gebyrer', digital: '0–50 kr/mnd', trad: '0–200 kr/mnd' },
                  { label: 'App/nettbank', digital: 'Moderne og rask', trad: 'Ofte treg og gammeldags' },
                  { label: 'Fysisk filial', digital: 'Ingen', trad: 'Ja, over hele landet' },
                  { label: 'Personlig rådgivning', digital: 'Chat/e-post', trad: 'Fysisk møte tilgjengelig' },
                  { label: 'Boliglån', digital: 'Ofte ikke tilbudt', trad: 'Fullt lånetilbud' },
                  { label: 'Best for', digital: 'Sparing, brukskonto', trad: 'Lån, komplett økonomi' },
                ].map((row, i) => (
                  <tr key={i} className={`border-b border-border ${i % 2 === 0 ? 'bg-paper-surface' : 'bg-paper-alt/50'}`}>
                    <td className="p-4 font-semibold text-ink">{row.label}</td>
                    <td className="p-4 text-ink-muted">{row.digital}</td>
                    <td className="p-4 text-ink-muted">{row.trad}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-forest-soft rounded-xl p-5 border-l-4 border-forest">
              <h3 className="font-bold text-forest mb-2">Velg digital bank hvis:</h3>
              <ul className="space-y-1 text-sm text-ink">
                <li>• Du primært trenger sparekonto og brukskonto</li>
                <li>• Du vil ha høyest mulig rente</li>
                <li>• Du foretrekker app og nettbank</li>
                <li>• Du er komfortabel med selvbetjening</li>
              </ul>
            </div>
            <div className="bg-paper-alt rounded-xl p-5 border-l-4 border-border-strong">
              <h3 className="font-bold text-ink mb-2">Velg tradisjonell bank hvis:</h3>
              <ul className="space-y-1 text-sm text-ink">
                <li>• Du trenger boliglån eller andre lån</li>
                <li>• Du vil ha personlig rådgivning</li>
                <li>• Du verdsetter fysiske filialer</li>
                <li>• Du vil ha alt samlet på ett sted</li>
              </ul>
            </div>
          </div>
        </section>

        {/* VANLIGE SPØRSMÅL */}
        <section>
          <h2 className="text-2xl font-bold text-ink mb-4 flex items-center gap-2">
            Vanlige spørsmål
          </h2>
          <div className="space-y-4">
            {[
              { q: 'Kan jeg ha konto i flere banker samtidig?', a: 'Ja, absolutt. Mange har lønnskonto i DNB eller Nordea, men sparekonto i Sbanken eller Svea Bank for bedre rente. Det er helt normalt og smart å splitte økonomien din etter hvor du får best betingelser.' },
              { q: 'Er det trygt å ha penger i en digital bank?', a: 'Ja. Alle banker som opererer i Norge er med i Bankenes Sikringsfond, som gir statlig garanti på innskudd opp til 100.000 euro per person per bank. Digital eller tradisjonell — sikkerheten er den samme.' },
              { q: 'Hvor lang tid tar det å bytte bank?', a: 'Å åpne ny konto tar 10–15 minutter digitalt. Å flytte lønnskonto, automatiske trekk og avtaler tar 1–2 uker. De fleste banker hjelper deg med dette.' },
              { q: 'Hvilken bank er best for boliglån?', a: 'SpareBank 1 SR-Bank og DNB er ofte sterke på boliglån med konkurransedyktige renter. Men det varierer — be alltid om tilbud fra minst 3 banker når du skal ta opp boliglån. (Danske Bank er ikke lenger i privatmarkedet etter salget til Nordea.)' },
              { q: 'Hva med gebyrer på brukskonto?', a: 'Sbanken og flere digitale banker har null gebyrer. Tradisjonelle banker tar ofte 20–50 kr/mnd for brukskonto, kort og nettbank. På et år blir det 240–600 kr — mer enn du kanskje tror.' },
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
            <h2 className="text-3xl md:text-4xl font-display font-medium mb-4">Klar til å finne din beste bank?</h2>
            <p className="text-paper/80 text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
              Bruk tabellen over for å sammenligne, eller les vår guide om hvordan du bytter bank steg for steg.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/bank/bytte-bank" className="inline-flex items-center justify-center gap-2 bg-amber-warm hover:opacity-90 text-paper font-extrabold px-8 py-4 rounded-md text-lg shadow-lg transition-all">
                Slik bytter du bank →
              </Link>
              <Link href="/sparing/hoyrentekonto" className="inline-flex items-center justify-center gap-2 bg-paper/10 hover:bg-paper/20 text-paper font-bold px-6 py-4 rounded-md transition-colors border border-paper/30">
                Se beste høyrentekontoer
              </Link>
            </div>
          </div>
        </section>

        <RelatedContent tools={article?.relatedTools} articles={relatedArticles} />

        <p className="text-sm text-ink-subtle pt-8 border-t border-border">
          Sist oppdatert: 2. august 2026. Rentene og vilkår er veiledende og kan endres. Sjekk bankenes nettsider for oppdaterte betingelser. Kilder: bankenes egne sider, Finansportalen.
        </p>
      </article>
    </>
  )
}
