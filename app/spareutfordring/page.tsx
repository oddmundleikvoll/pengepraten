import type { Metadata } from 'next'
import Link from 'next/link'
import SpareutfordringApp from '@/components/SpareutfordringApp'
import ChallengeDownload from '@/components/ChallengeDownload'
import { TOTAL_CHALLENGE, getWeekAmount, getTotalUpTo } from '@/lib/spareutfordringStore'

export const metadata: Metadata = {
  title: '52-ukers Spareutfordring — Spar 137 800 kr på ett år | Pengepraten',
  description: 'Bli med på 52-ukers spareutfordringen og spar 137 800 kr på ett år. Start på 100 kr i uka, øk med 100 kr hver uke. Du merker knapt at pengene forsvinner!',
}

export default function SpareutfordringPage() {
  const totalDisplay = TOTAL_CHALLENGE.toLocaleString('nb-NO')

  return (
    <>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-green-600 via-emerald-600 to-green-700 text-white overflow-hidden">
        {/* Decorative circles */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/3" />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-16 md:py-24">
          {/* Breadcrumb */}
          <nav className="text-green-200 text-sm mb-6">
            <Link href="/" className="hover:text-white transition-colors">Hjem</Link>
            <span className="mx-2">/</span>
            <Link href="/sparing" className="hover:text-white transition-colors">Sparing</Link>
            <span className="mx-2">/</span>
            <span className="text-white">52-ukers Spareutfordring</span>
          </nav>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/15 rounded-full text-sm font-semibold mb-6 backdrop-blur-sm">
                <span className="text-amber-300">🔥</span>
                <span>Norges morsomste spareutfordring</span>
              </div>

              {/* Headline */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight mb-6">
                Spar{' '}
                <span className="relative inline-block">
                  <span className="relative z-10 text-amber-300">{totalDisplay} kr</span>
                  <span className="absolute -bottom-1 left-0 right-0 h-3 bg-amber-400/40 rounded skew-x-[-2deg]" />
                </span>{' '}
                på 52 uker
              </h1>

              <p className="text-lg md:text-xl text-green-100 leading-relaxed mb-8 max-w-lg">
                Metoden er enkel: start på 100 kr i uka, øk med 100 kr hver uke.
                Etter 52 uker har du spart{' '}
                <strong className="text-white">{totalDisplay} kr</strong> — uten å
                tømme lommeboken.
              </p>

              {/* CTA buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#start"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-amber-400 hover:bg-amber-300 text-green-900 font-extrabold rounded-xl text-lg shadow-lg shadow-amber-400/30 transition-all hover:scale-105"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  Start utfordringen
                </a>
                <a
                  href="#slik-fungerer-det"
                  className="inline-flex items-center justify-center gap-2 px-6 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-semibold rounded-xl text-base transition-all border border-white/20"
                >
                  Les mer
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Hero visual — progress cards preview */}
            <div className="hidden lg:block">
              <div className="relative">
                {/* Floating week cards */}
                <div className="grid grid-cols-4 gap-3 p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
                  {[1, 2, 3, 4, 5, 6, 7, 8].map(w => {
                    const amt = getWeekAmount(w)
                    return (
                      <div key={w} className="bg-white/20 rounded-xl p-3 text-center backdrop-blur-sm">
                        <div className="text-[10px] font-bold text-green-200 mb-0.5">Uke {w}</div>
                        <div className="text-sm font-black text-white">{amt.toLocaleString('nb-NO')} kr</div>
                        <div className="text-[9px] text-green-200 mt-0.5">→ {getTotalUpTo(w).toLocaleString('nb-NO')} kr</div>
                      </div>
                    )
                  })}
                </div>
                {/* Total callout */}
                <div className="mt-3 text-center">
                  <div className="inline-flex items-center gap-2 px-5 py-2 bg-amber-400 text-green-900 font-black rounded-full text-sm shadow-lg">
                    <span>Totalt: {totalDisplay} kr</span>
                    <span>🎉</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="slik-fungerer-det" className="max-w-6xl mx-auto px-4 sm:px-6 py-16 scroll-mt-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
            Slik fungerer det
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Du trenger ikke et stort budsjett for å spare mye. 52-ukers utfordringen
            vokser sakte, men sikkert — og du merker knapt at pengene forsvinner.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {[
            {
              step: '01',
              emoji: '💰',
              title: 'Start på 100 kr',
              desc: 'Uke 1: Sett av 100 kr. Det er like mye som to kaffekopper. Knapt merkbar på budsjettet.',
            },
            {
              step: '02',
              emoji: '📈',
              title: 'Øk gradvis',
              desc: 'Hver uke øker du med 100 kr. Uke 2 = 200 kr, uke 4 = 400 kr, uke 13 = 1.300 kr.',
            },
            {
              step: '03',
              emoji: '🏆',
              title: 'Samle 137 800 kr',
              desc: 'Etter 52 uker har du spart totalt 137 800 kr — uten å ha kjent det særlig på forbruket.',
            },
          ].map(item => (
            <div key={item.step} className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm hover:shadow-md hover:border-green-200 transition-all">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center text-2xl">
                  {item.emoji}
                </div>
                <span className="text-4xl font-black text-green-100">{item.step}</span>
              </div>
              <h3 className="font-bold text-gray-900 text-lg mb-2">{item.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Amount preview table */}
        <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm mb-16">
          <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between">
            <h3 className="font-bold text-gray-900">Uke-fordeling (de første 13 ukene)</h3>
            <span className="text-xs text-gray-400 font-medium">Beløpene øker med 100 kr per uke</span>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-green-50">
                <tr>
                  <th className="px-6 py-3 text-left font-semibold text-gray-700">Uke</th>
                  <th className="px-6 py-3 text-right font-semibold text-gray-700">Beløp</th>
                  <th className="px-6 py-3 text-right font-semibold text-gray-700">Akkumulert</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {Array.from({ length: 13 }, (_, i) => i + 1).map(w => (
                  <tr key={w} className={w % 2 === 0 ? 'bg-gray-50/50' : ''}>
                    <td className="px-6 py-3 font-medium text-gray-700">Uke {w}</td>
                    <td className="px-6 py-3 text-right font-bold text-green-600">
                      {getWeekAmount(w).toLocaleString('nb-NO')} kr
                    </td>
                    <td className="px-6 py-3 text-right font-semibold text-gray-900">
                      {getTotalUpTo(w).toLocaleString('nb-NO')} kr
                    </td>
                  </tr>
                ))}
                <tr className="bg-green-50 border-t-2 border-green-200">
                  <td className="px-6 py-3 font-bold text-gray-800">... og 39 uker til</td>
                  <td className="px-6 py-3 text-right font-bold text-green-700">opptil 5 200 kr</td>
                  <td className="px-6 py-3 text-right font-black text-green-700">{totalDisplay} kr</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Social proof / testimonial */}
      <section className="bg-gradient-to-br from-green-50 to-emerald-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-green-100 text-center">
            <div className="text-5xl mb-6">💬</div>
            <blockquote className="text-xl md:text-2xl font-medium text-gray-800 leading-relaxed mb-8">
              &ldquo;Jeg trodde det var umulig å spare så mye. Men med 52-ukers
              utfordringen merket jeg knapt at pengene forsvant. Etter 6 måneder
              hadde jeg spart mer enn jeg hadde gjort på 3 år på vanlig vis.&rdquo;
            </blockquote>
            <div className="flex items-center justify-center gap-4">
              <div className="w-14 h-14 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center text-white text-xl font-bold">
                M
              </div>
              <div className="text-left">
                <div className="font-bold text-gray-900">Mari</div>
                <div className="text-gray-500 text-sm">34 år, Oslo</div>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-gray-100">
              {[
                { value: '137 800 kr', label: 'Mulig å spare', color: 'text-green-600' },
                { value: '100 kr', label: 'Start-beløp', color: 'text-gray-900' },
                { value: '52 uker', label: 'Tidsramme', color: 'text-gray-900' },
              ].map(stat => (
                <div key={stat.label} className="text-center">
                  <div className={`text-2xl md:text-3xl font-black ${stat.color} mb-1`}>{stat.value}</div>
                  <div className="text-xs text-gray-400 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Interactive App */}
      <section id="start" className="max-w-6xl mx-auto px-4 sm:px-6 py-16 scroll-mt-20">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
            Start utfordringen nå — <span className="text-green-600">i din browser</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Følg med på fremgangen din rett her. Klikk på ukene etter hvert som du
            fullfører dem — alt lagres lokalt i din browser.
          </p>
        </div>

        <SpareutfordringApp />
      </section>

      {/* Download section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-3">
              Vil du ha oversikten offline?
            </h2>
            <p className="text-gray-500">
              Last ned en PDF du kan skrive ut, eller en CSV til Excel og Google Sheets.
            </p>
          </div>
          <ChallengeDownload />
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 py-16">
        <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-8 text-center">
          Ofte stilte spørsmål
        </h2>
        <div className="space-y-4">
          {[
            {
              q: 'Hvorfor fungerer 52-ukers utfordringen så gode?',
              a: 'Hemmeligheten er at du venner deg til å spare før du riktig merker at beløpene øker. Starten er så lav som 100 kr at du ikke kjenner det på budsjettet. Når du har kommet til uke 26 (der du sparer 2.600 kr i uka), har du allerede dannet vanen — og halvparten av jobben er gjort.',
            },
            {
              q: 'Kan jeg bruke en annen valuta enn norske kroner?',
              a: 'Absolutt. 52-ukers utfordringen er et konsept, ikke en norsk spesifikk ting. Bytt bare ut 100 kr med et beløp som passer ditt budsjett. En vanlig internasjonal versjon bruker $1 i starten og øker med $1 per uke.',
            },
            {
              q: 'Hva om jeg hopper over en uke?',
              a: 'Ingen fare — utfordringen er fleksibel. Hvis du hopper over en uke, kan du enten ta den igjen senere eller bare fortsette videre. Poenget er å bygge en vane, ikke å være perfekt.',
            },
            {
              q: 'Hvor skal jeg sette pengene?',
              a: 'For best avkastning anbefaler vi en høyrentekonto. Pengepraten har en oppdatert oversikt over de beste sparekontoene i Norge.',
            },
            {
              q: 'Taper jeg kjøpekraft på grunn av inflasjon?',
              a: 'Med dagens rentenivå (rundt 4-5% på høyrentekonto) bør avkastningen være høyere enn inflasjonen. Pengene dine vokser altså i reelle termer — spesielt sammenlignet med å la de stå på en vanlig brukskonto med 0% rente.',
            },
          ].map((faq, i) => (
            <details key={i} className="group bg-white rounded-xl border border-gray-100 overflow-hidden">
              <summary className="flex items-center justify-between gap-4 px-6 py-4 cursor-pointer font-semibold text-gray-800 hover:text-green-600 transition-colors list-none">
                <span>{faq.q}</span>
                <svg className="w-5 h-5 text-gray-400 group-open:rotate-180 transition-transform shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-5 text-gray-500 text-sm leading-relaxed border-t border-gray-50 pt-4">
                {faq.a}
              </div>
            </details>
          ))}
        </div>
      </section>

      {/* CTA footer */}
      <section className="bg-gradient-to-br from-green-600 to-emerald-700 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-black mb-4">
            Klar til å spare {totalDisplay} kr?
          </h2>
          <p className="text-green-100 text-lg mb-8 max-w-2xl mx-auto">
            Om 52 uker vil du se tilbake og tenke: "Hvorfor startet jeg ikke i dag?"
            Start nå — det tar bare ett klikk.
          </p>
          <a
            href="#start"
            className="inline-flex items-center gap-2 px-8 py-4 bg-amber-400 hover:bg-amber-300 text-green-900 font-extrabold rounded-xl text-lg shadow-lg transition-all hover:scale-105"
          >
            Start 52-ukers Spareutfordring
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>
      </section>
    </>
  )
}
