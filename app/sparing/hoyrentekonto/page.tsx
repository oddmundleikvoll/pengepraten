import Link from 'next/link'
import type { Metadata } from 'next'
import EmailCapture from '@/components/EmailCapture'

export const metadata: Metadata = {
  title: 'Beste Høyrentekonto Akkurat Nå (Mai 2026) | Pengepraten',
  description: 'Sammenlign de beste høyrentekontoene i Norge akkurat nå. Oppdatert mai 2026 med Sbanken (5,20%), Hygga (5,10%), Nordnet og flere. Få 5%+ rente uten risiko.',
  keywords: ['beste høyrentekonto akkurat nå', 'høyrentekonto sammenligning', 'sparekonto med høyest rente', 'høyrentekonto 2026'],
}

const BANKS = [
  { name: 'Sbanken', rate: 5.20, type: 'Ren digital bank', guarantee: '✓ 100.000 €', minDeposit: 'Ingen', access: 'Umiddelbar', url: 'https://www.sbanken.no', cta: 'Åpne konto' },
  { name: 'Hygga', rate: 5.10, type: 'Digital, norsk', guarantee: '✓ 100.000 €', minDeposit: 'Ingen', access: 'Umiddelbar', url: 'https://www.hygga.no', cta: 'Åpne konto' },
  { name: 'Nordnet', rate: 4.95, type: 'Investeringsplattform', guarantee: '✓ 100.000 €', minDeposit: 'Ingen', access: '1-2 dager', url: 'https://www.nordnet.no', cta: 'Åpne konto' },
  { name: 'Front Finance', rate: 4.85, type: 'Digital bank', guarantee: '✓ 100.000 €', minDeposit: 'Ingen', access: 'Umiddelbar', url: 'https://frontfinance.no', cta: 'Åpne konto' },
  { name: 'Milk Money', rate: 4.80, type: 'Digital sparekonto', guarantee: '✓ 100.000 €', minDeposit: 'Ingen', access: 'Umiddelbar', url: 'https://www.milkmoney.no', cta: 'Åpne konto' },
  { name: 'Bluestep', rate: 4.70, type: 'Digitale lån og sparing', guarantee: '✓ 100.000 €', minDeposit: 'Ingen', access: '1-2 dager', url: 'https://www.bluestep.no', cta: 'Åpne konto' },
  { name: 'BN Bank', rate: 4.60, type: 'Nettbank', guarantee: '✓ 100.000 €', minDeposit: 'Ingen', access: '1-3 dager', url: 'https://www.bnbank.no', cta: 'Åpne konto' },
  { name: 'Skandiabanken', rate: 4.55, type: 'Digital bank', guarantee: '✓ 100.000 €', minDeposit: 'Ingen', access: 'Umiddelbar', url: 'https://www.skandia.no', cta: 'Åpne konto' },
  { name: 'Obos', rate: 4.50, type: 'Medlemsbank', guarantee: '✓ 100.000 €', minDeposit: 'Ingen', access: '1-2 dager', url: 'https://www.obos.no', cta: 'Åpne konto' },
  { name: 'Laksefjord Sparebank', rate: 4.45, type: 'Lokalbank Finnmark', guarantee: '✓ 100.000 €', minDeposit: 'Ingen', access: '1-3 dager', url: 'https://www.laksefjord.no', cta: 'Åpne konto' },
  { name: 'SpareBank 1 Østlandet', rate: 4.35, type: 'SpareBank 1-bank', guarantee: '✓ 100.000 €', minDeposit: 'Ingen', access: '1-2 dager', url: 'https://www.sparebank1.no/ostlandet', cta: 'Åpne konto' },
  { name: 'SpareBank 1 SMN', rate: 4.30, type: 'SpareBank 1-bank Trøndelag', guarantee: '✓ 100.000 €', minDeposit: 'Ingen', access: '1-2 dager', url: 'https://www.sparebank1.no/smn', cta: 'Åpne konto' },
  { name: 'SpareBank 1 SR-Bank', rate: 4.28, type: 'SpareBank 1-bank Rogaland', guarantee: '✓ 100.000 €', minDeposit: 'Ingen', access: '1-2 dager', url: 'https://www.sparebank1.no/sr-bank', cta: 'Åpne konto' },
  { name: 'SpareBank 1 Nord-Norge', rate: 4.25, type: 'SpareBank 1 Nord-Norge', guarantee: '✓ 100.000 €', minDeposit: 'Ingen', access: '1-2 dager', url: 'https://www.sparebank1.no/nn', cta: 'Åpne konto' },
  { name: 'Sandnes Sparebank', rate: 4.20, type: 'Lokalbank Rogaland', guarantee: '✓ 100.000 €', minDeposit: 'Ingen', access: '1-3 dager', url: 'https://www.sandnes-sparebank.no', cta: 'Åpne konto' },
  { name: 'Helgeland Sparebank', rate: 4.18, type: 'Lokalbank Nordland', guarantee: '✓ 100.000 €', minDeposit: 'Ingen', access: '1-3 dager', url: 'https://www.helgeland-sparebank.no', cta: 'Åpne konto' },
  { name: 'Handelsbanken', rate: 4.15, type: 'Svensk storbank', guarantee: '✓ 100.000 €', minDeposit: 'Ingen', access: '1-2 dager', url: 'https://www.handelsbanken.no', cta: 'Åpne konto' },
  { name: 'Danske Bank', rate: 4.05, type: 'Nordisk storbank', guarantee: '✓ 100.000 €', minDeposit: 'Ingen', access: '1-2 dager', url: 'https://www.danskebank.no', cta: 'Åpne konto' },
  { name: 'Nordea', rate: 3.90, type: 'Nordisk storbank', guarantee: '✓ 100.000 €', minDeposit: 'Ingen', access: '1-3 dager', url: 'https://www.nordea.no', cta: 'Åpne konto' },
  { name: 'DNB', rate: 3.75, type: 'Norges største bank', guarantee: '✓ 100.000 €', minDeposit: 'Ingen', access: '1-3 dager', url: 'https://www.dnb.no', cta: 'Åpne konto' },
  { name: 'Nordax', rate: 4.65, type: 'Digital bank (Sverige)', guarantee: '✓ 100.000 €', minDeposit: 'Ingen', access: '1-3 dager', url: 'https://www.nordax.no', cta: 'Åpne konto' },
  { name: 'Salvest', rate: 4.55, type: 'Digital sparebank', guarantee: '✓ 100.000 €', minDeposit: 'Ingen', access: 'Umiddelbar', url: 'https://www.salvest.no', cta: 'Åpne konto' },
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
            <Link href="/sparing">Sparing</Link>
            <span className="mx-2">/</span>
            <span className="text-white">Høyrentekonto</span>
          </nav>
          <div className="flex flex-col lg:flex-row gap-10 items-center">
            <div className="flex-1">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/15 rounded-full text-sm font-semibold mb-5 backdrop-blur-sm">
                <span className="text-amber-300">📈</span>
                <span>Oppdatert april 2026</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-4 leading-tight">
                Beste høyrentekonto{' '}
                <span className="text-amber-300">akkurat nå</span>
              </h1>
              <p className="text-green-100 text-lg md:text-xl max-w-2xl leading-relaxed">
                Svært få nordmenn bruker høyrentekonto. Det er synd — forskjellen mellom 0% og 5% rente på 100.000 kroner er{' '}
                <strong className="text-white">5.000 kroner i året</strong>.
              </p>
            </div>
            {/* Quick stats */}
            <div className="shrink-0 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 p-6 min-w-[260px]">
              <div className="text-sm font-semibold text-green-200 mb-3">Topp rente akkurat nå</div>
              <div className="text-5xl font-black text-amber-300 mb-1">5,20%</div>
              <div className="text-green-200 text-sm mb-4">Sbanken — beste valg i april 2026</div>
              <div className="space-y-2">
                {[
                  { label: 'Innskuddsgaranti', value: '100.000 €' },
                  { label: 'Minsteinnskudd', value: 'Ingen' },
                  { label: 'Bindingstid', value: 'Ingen' },
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
            <span className="text-2xl mr-2">💸</span>
            <strong>Høyrentekonto</strong> er rett og slett en sparekonto med bedre rente enn det du får på den vanlige brukskontoen din. I 2026 kan du få over 5% rente — rett og slett gratis avkastning uten noen risiko.
          </p>
        </div>

        {/* BANK COMPARISON TABLE */}
        <section>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-6">
            <div>
              <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-2 flex items-center gap-2">
                <span>📊</span> Beste høyrentekontoer i Norge
              </h2>
              <p className="text-gray-500">Oppdatert april 2026 — klikk på banken for å åpne konto</p>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-400 shrink-0">
              <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Innskuddsgaranti på alle</span>
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
            <span>Rentene er flytende og kan endres. Sjekk bankens nettsider for oppdaterte tall. Alle kontoer er dekket av norsk innskuddsgaranti (100.000 euro per person per bank).</span>
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
            <span>🏦</span> Hvorfor kan noen banker tilby så høy rente?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            {[
              { emoji: '💻', title: 'Ingen filialer', desc: 'Digitale banker har ikke kostnader til lokaler, ansatte i fysiske banker og annet. De sparer, og deler besparelsen med deg.' },
              { emoji: '📱', title: 'Kun app og nettside', desc: 'Alt skjer digitalt. Du har tilgang til kontoen din 24/7, og kan overføre penger umiddelbart når du trenger det.' },
              { emoji: '📈', title: 'Konkurranse om kundene', desc: 'Bankene kjemper om sparingen din. Høy rente er et markedsmessig verktøy for å tiltrekke seg nye kunder.' },
            ].map(item => (
              <div key={item.title} className="bg-white rounded-xl p-5 border border-gray-200 shadow-sm hover:shadow-md hover:border-green-200 transition-all">
                <div className="text-3xl mb-3">{item.emoji}</div>
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
            <span>🏆</span> Våre top 3 anbefalinger
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { rank: '1', name: 'Sbanken', rate: '5,20%', why: 'Beste rente i Norge akkurat nå. Ren digital bank med null gebyrer og umiddelbar tilgang til pengene.', bestFor: 'Deg som vil ha maks avkastning uten stress', color: 'from-amber-400 to-amber-500', badge: 'Beste rente' },
              { rank: '2', name: 'Hygga', rate: '5,10%', why: 'Neste beste rente, og en ren norsk digital bank. God app og rask kundeservice.', bestFor: 'Deg som vil ha høy rente med norsk lokal tilhørighet', color: 'from-gray-300 to-gray-400', badge: 'Norsk' },
              { rank: '3', name: 'Nordnet', rate: '4,95%', why: 'Perfekt for deg som både vil spare trygt og investere. En plattform for alt — høyrentekonto, fond og aksjer.', bestFor: 'Deg som vil spare smart og investere videre', color: 'from-orange-300 to-orange-400', badge: 'Sparing + investering' },
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
            <span>🔒</span> Er det trygt? Ja — og her er hvorfor
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
              <span>✅</span> Høyrentekonto = trygt + høy avkastning
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                'Ingen aksjemarkedrisiko — pengene er der alltid',
                'Ingen bindingstid — du kan ta ut pengene når som helst',
                'Statlig garanti på innskudd',
                'Renteinntekter beskattes (25% skatt på renteinntekt)',
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-2">
                  <span className="text-green-600 font-bold mt-0.5">✓</span>
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* REGNEKSTYKKE */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <span>🧮</span> Regnestykket: Høyrentekonto vs. brukskonto
          </h2>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse rounded-xl overflow-hidden shadow-sm">
              <thead>
                <tr className="bg-gray-800 text-white">
                  <th className="text-left p-4 font-bold">Beløp</th>
                  <th className="text-left p-4 font-bold bg-green-600">Høyrentekonto (5%)</th>
                  <th className="text-left p-4 font-bold">Brukskonto (0%)</th>
                  <th className="text-left p-4 font-bold">Differanse</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { amount: '50.000 kr', diff: '+ 2.500 kr/år' },
                  { amount: '100.000 kr', diff: '+ 5.000 kr/år' },
                  { amount: '250.000 kr', diff: '+ 12.500 kr/år' },
                  { amount: '500.000 kr', diff: '+ 25.000 kr/år' },
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
              <span>💡</span> Etter 10 år med 100.000 kr på høyrentekonto:
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
              <div className="text-center p-5 bg-green-600/20 rounded-xl border border-green-500/20">
                <div className="text-4xl font-black text-green-400">162.889 kr</div>
                <div className="text-sm text-gray-300 mt-2">Med 5% rente (årlig kapitalisering)</div>
              </div>
              <div className="text-center p-5 bg-white/5 rounded-xl border border-white/10">
                <div className="text-4xl font-black text-gray-400">100.000 kr</div>
                <div className="text-sm text-gray-400 mt-2">På brukskonto med 0%</div>
              </div>
            </div>
            <p className="text-center text-green-400 font-bold text-lg">
              + 62.889 kr bare på renteinntekter — uten å løfte en finger
            </p>
          </div>
        </section>

        {/* INFLASJON */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <span>📉</span> Det skjulte problemet: inflasjon
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Norges Bank holder inflasjonen rundt 2-3% på lang sikt. Det betyr at 100.000 kroner i dag kun er verdt rundt 97.000 kroner om et år — fordi prisene stiger.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            En høyrentekonto på 5% beskytter ikke bare pengene dine — den <strong>øker</strong> faktisk kjøpekraften din i reelle termer (inflasjon justert).
          </p>

          <div className="bg-red-50 rounded-xl p-6 border border-red-200">
            <h3 className="font-bold text-red-800 mb-4 flex items-center gap-2">
              <span>⚠️</span> Regnestykket som bør bekymre deg
            </h3>
            <div className="space-y-2.5 text-gray-700">
              <div className="flex justify-between py-2 border-b border-red-100">
                <span>Penger på brukskonto:</span>
                <span className="font-bold text-gray-900">100.000 kr</span>
              </div>
              <div className="flex justify-between py-2 border-b border-red-100">
                <span>Inflasjon (3%):</span>
                <span className="font-bold text-red-700">- 3.000 kr i verdi</span>
              </div>
              <div className="flex justify-between py-2 border-b border-red-100">
                <span>Renteinntekt (0%):</span>
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
            <span>🚀</span> Slik kommer du i gang — steg for steg
          </h2>
          <div className="space-y-4">
            {[
              { n: '1', title: 'Velg en høyrentekonto', desc: 'Sammenlign bankene i tabellen over. Sbanken og Hygga topper listen i april 2026. Velg den som passer deg best.' },
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
            <span>⚖️</span> BSU vs høyrentekonto — hva skal du velge?
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
                  { label: 'Rente', bsu: '3,5–4,5% (varierer)', hoyrente: '4–5,2% (varierer)' },
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
              <h3 className="font-bold text-green-800 mb-2">🎯 Velg BSU hvis:</h3>
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
              <h3 className="font-bold text-emerald-800 mb-2">💡 Velg høyrentekonto hvis:</h3>
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
            <span>❓</span> Vanlige spørsmål
          </h2>
          <div className="space-y-4">
            {[
              { q: 'Må jeg betale skatt på renteinntekter?', a: 'Ja, renteinntekter er skattepliktig. For 2026 er skattesatsen på renteinntekter 25%. Men med 5% rente på 100.000 kr gir dette 5.000 kr i brutto rente, hvorav du betaler 1.250 kr i skatt — altså fortsatt 3.750 kr netto. Langt bedre enn 0 kr på brukskonto.' },
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
            <p className="text-green-100 text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
              En høyrentekonto tar 15 minutter å sette opp og kan gi deg tusenvis av kroner mer i året — helt uten risiko.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/verktøy/sparekalkulator" className="inline-flex items-center justify-center gap-2 bg-amber-400 hover:bg-amber-300 text-green-900 font-extrabold px-8 py-4 rounded-xl text-lg shadow-lg transition-all hover:scale-105">
                <span>🧮</span> Bruk sparekalkulatoren
              </Link>
              <Link href="/sparing/beste-sparekonto-2026" className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-bold px-6 py-4 rounded-xl transition-colors border border-white/30">
                📊 Sammenlign alle sparekontoer
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
              { href: '/sparing/indeksfond-nybegynnere', emoji: '📈', title: 'Indeksfond for nybegynnere', desc: 'Lær hvordan fond kan gi deg høyere avkastning over tid' },
              { href: '/sparing/bsu-guide', emoji: '🏠', title: 'BSU 2026: Full guide', desc: "Norges beste spareform for unge under 34 år" },
              { href: '/verktøy/sparekalkulator', emoji: '🧮', title: 'Sparekalkulator med mål', desc: 'Beregn hvor lenge det tar å nå sparemålet ditt' },
              { href: '/sparing/spareplan-guide', emoji: '📋', title: 'Spareplan-guide', desc: 'Bygg en solid spareplan som faktisk fungerer' },
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
          Sist oppdatert: april 2026. Rentene er veiledende og kan endres. Sjekk bankens nettsider for oppdaterte vilkår.
        </p>
      </article>
    </>
  )
}