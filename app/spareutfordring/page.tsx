import type { Metadata } from 'next'
import Link from 'next/link'
import SpareutfordringApp from '@/components/SpareutfordringApp'
import ChallengeDownload from '@/components/ChallengeDownload'
import EmailCapture from '@/components/EmailCapture'
import { TOTAL_CHALLENGE, getWeekAmount, getTotalUpTo } from '@/lib/spareutfordringStore'

import { Flame, PartyPopper, PiggyBank, TrendingUp, Trophy } from 'lucide-react'

export const metadata: Metadata = {
  title: '52-ukers Spareutfordring — Spar 68 900 kr på ett år | Pengepraten',
  description: 'Bli med på 52-ukers spareutfordringen og spar 68 900 kr på ett år. Start på 50 kr i uka, øk med 50 kr hver uke. Du merker knapt at pengene forsvinner!',
}

export default function SpareutfordringPage() {
  const totalDisplay = TOTAL_CHALLENGE.toLocaleString('nb-NO')

  return (
    <>
      {/* Hero — Nordic Clarity editorial */}
      <section className="relative bg-paper text-ink overflow-hidden border-b border-border">
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-16 md:py-24">
          {/* Breadcrumb */}
          <nav className="font-mono text-xs uppercase tracking-wider text-ink-muted mb-6">
            <Link href="/" className="hover:text-forest transition-colors">Hjem</Link>
            <span className="mx-2 text-border-strong">/</span>
            <Link href="/sparing" className="hover:text-forest transition-colors">Sparing</Link>
            <span className="mx-2 text-border-strong">/</span>
            <span className="text-ink">52-ukers Spareutfordring</span>
          </nav>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-amber-warm-soft text-amber-warm rounded-full text-sm font-semibold mb-6">
                <Flame className="w-6 h-6" />
                <span>Norges morsomste spareutfordring</span>
              </div>

              {/* Headline */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium font-display leading-[1.05] mb-6">
                Spar{' '}
                <span className="relative inline-block">
                  <span className="relative z-10 text-forest">{totalDisplay} kr</span>
                  <span className="absolute -bottom-1 left-0 right-0 h-3 bg-amber-warm/40 rounded skew-x-[-2deg]" />
                </span>{' '}
                på 52 uker
              </h1>

              <p className="text-lg md:text-xl text-ink-muted leading-relaxed mb-8 max-w-lg">
                Metoden er enkel: start på 50 kr i uka, øk med 50 kr hver uke.
                Etter 52 uker har du spart{' '}
                <strong className="text-ink">{totalDisplay} kr</strong> — uten å
                tømme lommeboken.
              </p>

              {/* CTA buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#start"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-amber-warm hover:opacity-90 text-paper font-extrabold rounded-md text-lg shadow-lg transition-all"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  Start utfordringen
                </a>
                <a
                  href="#slik-fungerer-det"
                  className="inline-flex items-center justify-center gap-2 px-6 py-4 bg-paper-alt hover:bg-forest-soft text-ink font-semibold rounded-md text-base transition-all border border-border"
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
                <div className="grid grid-cols-4 gap-3 p-6 bg-paper-alt rounded-2xl border border-border">
                  {[1, 2, 3, 4, 5, 6, 7, 8].map(w => {
                    const amt = getWeekAmount(w)
                    return (
                      <div key={w} className="bg-paper rounded-xl p-3 text-center border border-border">
                        <div className="text-[10px] font-bold text-ink-muted mb-0.5">Uke {w}</div>
                        <div className="text-sm font-display font-medium text-ink">{amt.toLocaleString('nb-NO')} kr</div>
                        <div className="text-[9px] text-ink-muted mt-0.5">→ {getTotalUpTo(w).toLocaleString('nb-NO')} kr</div>
                      </div>
                    )
                  })}
                </div>
                {/* Total callout */}
                <div className="mt-3 text-center">
                  <div className="inline-flex items-center gap-2 px-5 py-2 bg-amber-warm text-paper font-black rounded-full text-sm shadow-lg">
                    <span>Totalt: {totalDisplay} kr</span>
                    <PartyPopper className="w-5 h-5" />
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
          <h2 className="text-3xl md:text-4xl font-black text-ink mb-4">
            Slik fungerer det
          </h2>
          <p className="text-ink-muted text-lg max-w-2xl mx-auto">
            Du trenger ikke et stort budsjett for å spare mye. 52-ukers utfordringen
            vokser sakte, men sikkert — og du merker knapt at pengene forsvinner.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {[
            {
              step: '01',
              icon: <PiggyBank className="w-5 h-5" />,
              title: 'Start på 50 kr',
              desc: 'Uke 1: Sett av 50 kr. Det er like mye som én kaffekopp. Knapt merkbar på budsjettet.',
            },
            {
              step: '02',
              icon: <TrendingUp className="w-5 h-5" />,
              title: 'Øk gradvis',
              desc: 'Hver uke øker du med 50 kr. Uke 2 = 100 kr, uke 4 = 200 kr, uke 13 = 650 kr.',
            },
            {
              step: '03',
              icon: <Trophy className="w-5 h-5" />,
              title: 'Samle 68 900 kr',
              desc: 'Etter 52 uker har du spart totalt 68 900 kr — uten å ha kjent det særlig på forbruket.',
            },
          ].map(item => (
            <div key={item.step} className="bg-paper-surface rounded-2xl border border-border p-6 shadow-sm hover:shadow-md hover:border-forest/30 transition-all">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-forest-soft rounded-xl flex items-center justify-center text-2xl text-forest">
                  {item.icon}
                </div>
                <span className="text-4xl font-black text-forest-soft">{item.step}</span>
              </div>
              <h3 className="font-bold text-ink text-lg mb-2">{item.title}</h3>
              <p className="text-ink-muted text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Amount preview table */}
        <div className="bg-paper-surface rounded-2xl border border-border overflow-hidden shadow-sm mb-16">
          <div className="px-6 py-4 border-b border-border flex items-center justify-between">
            <h3 className="font-bold text-ink">Uke-fordeling (de første 13 ukene)</h3>
            <span className="text-xs text-ink-subtle font-medium">Beløpene øker med 50 kr per uke</span>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-paper-alt">
                <tr>
                  <th className="px-6 py-3 text-left font-semibold text-ink">Uke</th>
                  <th className="px-6 py-3 text-right font-semibold text-ink">Beløp</th>
                  <th className="px-6 py-3 text-right font-semibold text-ink">Akkumulert</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {Array.from({ length: 13 }, (_, i) => i + 1).map(w => (
                  <tr key={w} className={w % 2 === 0 ? 'bg-paper-alt/50' : ''}>
                    <td className="px-6 py-3 font-medium text-ink">Uke {w}</td>
                    <td className="px-6 py-3 text-right font-bold text-forest">
                      {getWeekAmount(w).toLocaleString('nb-NO')} kr
                    </td>
                    <td className="px-6 py-3 text-right font-semibold text-ink">
                      {getTotalUpTo(w).toLocaleString('nb-NO')} kr
                    </td>
                  </tr>
                ))}
                <tr className="bg-forest-soft border-t-2 border-forest/20">
                  <td className="px-6 py-3 font-bold text-ink">... og 39 uker til</td>
                  <td className="px-6 py-3 text-right font-bold text-forest">opptil 2 600 kr</td>
                  <td className="px-6 py-3 text-right font-black text-forest">{totalDisplay} kr</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Social proof / testimonial */}
      <section className="bg-paper-alt py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="bg-paper rounded-3xl p-8 md:p-12 shadow-sm border border-border text-center">
            <div className="text-5xl mb-6"></div>
            <blockquote className="text-xl md:text-2xl font-medium text-ink leading-relaxed mb-8">
              &ldquo;Jeg trodde det var umulig å spare så mye. Men med 52-ukers
              utfordringen merket jeg knapt at pengene forsvant. Etter 6 måneder
              hadde jeg spart mer enn jeg hadde gjort på 3 år på vanlig vis.&rdquo;
            </blockquote>
            <div className="flex items-center justify-center gap-4">
              <div className="w-14 h-14 bg-forest rounded-full flex items-center justify-center text-paper text-xl font-bold">
                M
              </div>
              <div className="text-left">
                <div className="font-bold text-ink">Mari</div>
                <div className="text-ink-muted text-sm">34 år, Oslo</div>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-border">
              {[
                { value: '68 900 kr', label: 'Mulig å spare', color: 'text-forest' },
                { value: '50 kr', label: 'Start-beløp', color: 'text-ink' },
                { value: '52 uker', label: 'Tidsramme', color: 'text-ink' },
              ].map(stat => (
                <div key={stat.label} className="text-center">
                  <div className={`text-2xl md:text-3xl font-black ${stat.color} mb-1`}>{stat.value}</div>
                  <div className="text-xs text-ink-subtle font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Interactive App */}
      <section id="start" className="max-w-6xl mx-auto px-4 sm:px-6 py-16 scroll-mt-20">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-black text-ink mb-4">
            Start utfordringen nå — <span className="text-forest">i din browser</span>
          </h2>
          <p className="text-ink-muted text-lg max-w-2xl mx-auto">
            Følg med på fremgangen din rett her. Klikk på ukene etter hvert som du
            fullfører dem — alt lagres lokalt i din browser.
          </p>
        </div>

        <SpareutfordringApp />
      </section>

      {/* Download section */}
      <section className="bg-paper-alt py-16 border-y border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-black text-ink mb-3">
              Vil du ha oversikten offline?
            </h2>
            <p className="text-ink-muted">
              Last ned en PDF du kan skrive ut, eller en CSV til Excel og Google Sheets.
            </p>
          </div>
          <ChallengeDownload />
        </div>
      </section>

      {/* Email capture */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 py-10">
        <EmailCapture
          variant="card"
          title="Få ukentlig renteoppdatering rett i innboksen din"
          description="Melde deg på vårt nyhetsbrev og få beskjed når rentene på høyrentekontoer endrer seg — slik at du alltid får best avkastning på sparingen din."
        />
      </section>

      {/* FAQ */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 py-16">
        <h2 className="text-2xl md:text-3xl font-black text-ink mb-8 text-center">
          Ofte stilte spørsmål
        </h2>
        <div className="space-y-4">
          {[
            {
              q: 'Hvorfor fungerer 52-ukers utfordringen så gode?',
              a: 'Hemmeligheten er at du venner deg til å spare før du riktig merker at beløpene øker. Starten er så lav som 50 kr at du ikke kjenner det på budsjettet. Når du har kommet til uke 26 (der du sparer 1.300 kr i uka), har du allerede dannet vanen — og halvparten av jobben er gjort.',
            },
            {
              q: 'Kan jeg bruke en annen valuta enn norske kroner?',
              a: 'Absolutt. 52-ukers utfordringen er et konsept, ikke en norsk spesifikk ting. Bytt bare ut 50 kr med et beløp som passer ditt budsjett. En vanlig internasjonal versjon bruker $1 i starten og øker med $1 per uke.',
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
            <details key={i} className="group bg-paper-surface rounded-xl border border-border overflow-hidden">
              <summary className="flex items-center justify-between gap-4 px-6 py-4 cursor-pointer font-semibold text-ink hover:text-forest transition-colors list-none">
                <span>{faq.q}</span>
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

      {/* CTA footer */}
      <section className="invert-block py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-display font-medium mb-4">
            Klar til å spare {totalDisplay} kr?
          </h2>
          <p className="text-paper/80 text-lg mb-8 max-w-2xl mx-auto">
            Om 52 uker vil du se tilbake og tenke: "Hvorfor startet jeg ikke i dag?"
            Start nå — det tar bare ett klikk.
          </p>
          <a
            href="#start"
            className="inline-flex items-center gap-2 px-8 py-4 bg-amber-warm hover:opacity-90 text-paper font-extrabold rounded-md text-lg shadow-lg transition-all"
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
