import Image from 'next/image'
import Link from 'next/link'
import LeadMagnet from '@/components/LeadMagnet'
import ArticleCard from '@/components/ArticleCard'
import { latestArticles } from '@/lib/articles'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Pengepraten — Få kontroll på pengene dine',
  description: 'Norges beste nettside for personlig økonomi. Lånekalkulator, budsjettmal, guider om kredittkort, lån og sparing. Helt gratis.',
}

const categoryLinks = [
  {
    href: '/kredittkort',
    label: 'Kredittkort',
    desc: 'Sammenlign beste kort',
    icon: '💳',
  },
  {
    href: '/lan',
    label: 'Forbrukslån',
    desc: 'Finn billigste lån',
    icon: '🏦',
  },
  {
    href: '/sparing',
    label: 'Sparing',
    desc: 'Beste sparekonto',
    icon: '💰',
  },
  {
    href: '/budsjett',
    label: 'Budsjett',
    desc: 'Maler og verktøy',
    icon: '📊',
  },
]

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-stone-900 text-white overflow-hidden">
        {/* Subtle texture */}
        <div className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          }}
        />

        {/* Hero background image */}
        <div className="absolute inset-0">
          <Image
            src="/hero-control.png"
            alt="Ta kontroll på økonomien din"
            fill
            className="object-cover object-center opacity-15"
            priority
          />
        </div>

        {/* Atmospheric gradients */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-teal-900/20 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-stone-700/20 rounded-full blur-[100px]" />
        </div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-20 md:py-28 lg:py-32">
          <div className="max-w-2xl reveal">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/8 backdrop-blur rounded-full text-sm mb-8 border border-white/10">
              <span className="w-1.5 h-1.5 bg-teal-400 rounded-full animate-pulse" />
              <span className="text-stone-300">Oppdatert for 2026</span>
            </div>

            <h1 className="font-display text-display mb-6 text-balance">
              Få kontroll på{' '}
              <span className="text-teal-400">pengene dine</span>
            </h1>

            <p className="text-lg md:text-xl text-stone-400 mb-10 leading-relaxed max-w-xl text-balance">
              Pengepraten er Norges mest nyttige nettside for personlig økonomi.
              Verktøy, guider og sammenligninger — helt gratis.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="#last-ned"
                className="inline-flex items-center justify-center gap-2 bg-white text-stone-900 font-semibold py-3.5 px-7 rounded-xl hover:bg-stone-50 transition-colors shadow-soft btn-press text-[15px] focus-ring"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Last ned gratis budsjettmal
              </a>
              <Link
                href="/verktøy/lånekalkulator"
                className="inline-flex items-center justify-center gap-2 border border-white/20 text-stone-300 font-medium py-3.5 px-7 rounded-xl hover:bg-white/5 hover:text-white transition-all text-[15px] focus-ring"
              >
                Prøv lånekalkulatoren
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="bg-white border-b border-stone-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {[
              { value: '50+', label: 'Artikler og guider' },
              { value: '2.000+', label: 'Nedlastede maler' },
              { value: 'Gratis', label: 'Alle verktøy' },
              { value: '2026', label: 'Oppdatert i år' },
            ].map((stat, i) => (
              <div key={stat.label} className={`text-center reveal reveal-delay-${i + 1}`}>
                <div className="text-2xl md:text-3xl font-semibold text-stone-900 tracking-tight">{stat.value}</div>
                <div className="text-sm text-stone-500 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lead Magnet */}
      <section id="last-ned" className="max-w-6xl mx-auto px-4 sm:px-6 py-16 md:py-20">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="reveal">
            <span className="inline-block px-3 py-1 text-xs font-semibold bg-teal-50 text-teal-700 rounded-md mb-5 tracking-tight">
              Populært verktøy
            </span>
            <h2 className="font-display text-display-sm mb-5 text-balance">
              Ta kontroll over økonomien med en gang
            </h2>
            <p className="text-stone-600 leading-[1.75] mb-8 text-[17px]">
              Last ned vår gratis budsjettmal og se hvor pengene dine faktisk går.
              Malen er ferdig satt opp med norske kategorier, automatiske beregninger,
              og et oppsett du kan bruke med en gang — i Google Sheets eller Excel.
            </p>
            <div className="space-y-3">
              {[
                'Ferdig kategorisert for norske forhold',
                'Automatiske summer og prosenter',
                'Ingen binding — last ned og bruk gratis',
                'Brukt av over 2.000 nordmenn',
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-teal-50 flex items-center justify-center flex-shrink-0">
                    <svg className="w-3 h-3 text-teal-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-stone-600 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="reveal reveal-delay-2">
            <LeadMagnet />
          </div>
        </div>
      </section>

      {/* Category links */}
      <section className="bg-stone-50 border-t border-stone-100 py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-display-sm mb-10 text-center text-balance reveal">
            Utforsk det du trenger hjelp med
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {categoryLinks.map((cat, i) => (
              <Link
                key={cat.href}
                href={cat.href}
                className={`group p-6 md:p-7 rounded-2xl bg-white border border-stone-200/60 shadow-soft hover:shadow-soft-lg hover:border-teal-200/60 transition-all duration-300 card-hover reveal reveal-delay-${i + 1} focus-ring`}
              >
                <div className="text-2xl mb-3">{cat.icon}</div>
                <h3 className="font-semibold text-stone-900 text-lg mb-1 tracking-tight">{cat.label}</h3>
                <p className="text-sm text-stone-500">{cat.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Articles */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16 md:py-20">
        <div className="flex items-end justify-between mb-10 reveal">
          <div>
            <h2 className="font-display text-display-sm text-balance">Siste artikler</h2>
            <p className="text-stone-500 mt-2 text-sm">Oppdatert januar 2026</p>
          </div>
          <Link
            href="/kredittkort"
            className="hidden md:inline-flex items-center gap-1.5 text-teal-700 font-medium hover:text-teal-900 transition-colors text-sm focus-ring rounded"
          >
            Se alle artikler
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {latestArticles.map((article, i) => (
            <div key={article.slug} className={`reveal reveal-delay-${i + 1}`}>
              <ArticleCard article={article} />
            </div>
          ))}
        </div>
        <div className="mt-8 text-center md:hidden reveal">
          <Link href="/kredittkort" className="text-teal-700 font-medium hover:text-teal-900 transition-colors focus-ring rounded">
            Se alle artikler →
          </Link>
        </div>
      </section>

      {/* Loan Calculator CTA */}
      <section className="bg-stone-900 py-16 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          }}
        />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            <div className="flex-1 text-white reveal">
              <h2 className="font-display text-display-sm mb-4 text-balance">
                Usikker på hvor mye lånet koster?
              </h2>
              <p className="text-stone-400 leading-[1.75] max-w-lg text-[17px]">
                Bruk vår lånekalkulator for å se nøyaktig hvor mye du vil betale
                i måneden — med alle renter og gebyrer. Helt gratis, uten registrering.
              </p>
            </div>
            <Link
              href="/verktøy/lånekalkulator"
              className="flex-shrink-0 inline-flex items-center gap-2 bg-white text-stone-900 font-semibold py-3.5 px-7 rounded-xl hover:bg-stone-50 transition-colors shadow-soft btn-press text-[15px] focus-ring reveal reveal-delay-1"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
              Åpne lånekalkulator
            </Link>
          </div>
        </div>
      </section>

      {/* About section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16 md:py-20">
        <div className="bg-stone-50 rounded-2xl p-8 md:p-12 text-center border border-stone-100 reveal">
          <h2 className="font-display text-display-sm mb-5 text-balance">Hva er Pengepraten?</h2>
          <p className="text-stone-600 leading-[1.75] max-w-2xl mx-auto text-[17px]">
            Pengepraten er en uavhengig norsk nettside som hjelper nordmenn med å ta
            bedre økonomiske beslutninger. Vi lager verktøy, guider og sammenligninger
            som er enkle å forstå — uten bankspråk eller skjulte agendaer. Alt vi lager
            er gratis, fordi vi tror god økonomisk hjelp bør være tilgjengelig for alle.
          </p>
        </div>
      </section>
    </>
  )
}
