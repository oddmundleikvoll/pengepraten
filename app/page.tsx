import Image from 'next/image'
import Link from 'next/link'
import LeadMagnet from '@/components/LeadMagnet'
import ArticleCard from '@/components/ArticleCard'
import { latestArticles } from '@/lib/articles'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Pengepraten — Få kontroll på pengene dine',
  description: 'Norges beste nettside for personlig økonomi. Forbrukslånskalkulator, boliglånskalkulator, budsjettmal, guider om kredittkort, lån og sparing. Helt gratis.',
}

import { CreditCard, Landmark, PiggyBank, BarChart3 } from 'lucide-react'

const categoryLinks = [
  {
    href: '/kredittkort',
    label: 'Kredittkort',
    desc: 'Sammenlign beste kort',
    icon: <CreditCard className="w-8 h-8" />,
    color: 'bg-forest-soft text-forest',
  },
  {
    href: '/lan',
    label: 'Forbrukslån',
    desc: 'Finn billigste lån',
    icon: <Landmark className="w-8 h-8" />,
    color: 'bg-paper-alt text-ink',
  },
  {
    href: '/sparing',
    label: 'Sparing',
    desc: 'Beste sparekonto',
    icon: <PiggyBank className="w-8 h-8" />,
    color: 'bg-forest-soft text-forest',
  },
  {
    href: '/budsjett',
    label: 'Budsjett',
    desc: 'Maler og verktøy',
    icon: <BarChart3 className="w-8 h-8" />,
    color: 'bg-amber-warm-soft text-amber-warm',
  },
]

export default function HomePage() {
  return (
    <>
      {/* Hero Section — Nordic Clarity editorial (image kept, overlay lifted to warm paper wash) */}
      <section className="relative bg-paper text-ink overflow-hidden">
        {/* Hero background image - full bleed (kept as content) */}
        <div className="absolute inset-0">
          <Image
            src="/hero-control.png"
            alt="Ta kontroll på økonomien din"
            fill
            className="object-cover object-center"
            priority
          />
        </div>

        {/* Paper-tinted overlay (replaces dark-blue wash, keeps image visible behind ink text) */}
        <div className="absolute inset-0 bg-gradient-to-r from-paper/85 via-paper/55 to-paper/20" />


        {/* Subtle forest glow accents (editorial warmth, not bank-blue) */}
        <div className="absolute inset-0 opacity-[0.06] pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-forest rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-20 w-96 h-96 bg-amber-warm rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-16 md:py-24">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-medium font-display leading-[1.05] mb-6">
              Få kontroll på{' '}
              <span className="text-forest">
                pengene dine
              </span>
            </h1>

            <p className="text-xl text-ink-muted mb-8 leading-relaxed max-w-2xl">
              Pengepraten er Norges mest nyttige nettside for personlig økonomi. 
              Vi gir deg verktøyene, guidene og sammenligningene du trenger for å ta 
              smartere økonomiske beslutninger — helt gratis.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#last-ned"
                className="inline-flex items-center justify-center gap-2 bg-forest text-white font-bold py-4 px-8 rounded-md hover:bg-forest-mid transition-colors shadow-lg"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Last ned gratis budsjettmal
              </a>
              <Link
                href="/verktøy/lånekalkulator"
                className="inline-flex items-center justify-center gap-2 bg-white text-forest border border-forest font-semibold py-4 px-6 rounded-md hover:bg-forest-soft transition-colors text-sm"
              >
                Forbrukslånskalkulator →
              </Link>
              <Link
                href="/verktøy/boliglånskalkulator"
                className="inline-flex items-center justify-center gap-2 border-2 border-ink/20 text-ink font-semibold py-4 px-6 rounded-md hover:bg-ink/5 transition-colors text-sm"
              >
                Boliglånskalkulator →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="bg-paper-surface border-b border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { value: '50+', label: 'Artikler og guider' },
              { value: '2.000+', label: 'Nedlastede maler' },
              { value: 'Gratis', label: 'Alle verktøy' },
              { value: '2026', label: 'Oppdatert for 2026' },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-2xl md:text-3xl font-black text-forest">{stat.value}</div>
                <div className="text-sm text-ink-muted mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lead Magnet */}
      <section id="last-ned" className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block px-3 py-1 text-xs font-semibold bg-forest-soft text-forest rounded-full mb-4">
              Populært verktøy
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-ink mb-4">
              Ta kontroll over økonomien med en gang
            </h2>
            <p className="text-ink-muted leading-relaxed mb-6">
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
                  <div className="w-5 h-5 rounded-full bg-forest-soft flex items-center justify-center flex-shrink-0">
                    <svg className="w-3 h-3 text-forest" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-ink-muted text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <LeadMagnet />
          </div>
        </div>
      </section>

      {/* Category links */}
      <section className="bg-paper-alt border-t border-b border-border py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-ink mb-8 text-center">
            Utforsk det du trenger hjelp med
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {categoryLinks.map((cat) => (
              <Link
                key={cat.href}
                href={cat.href}
                className={`group p-6 rounded-xl ${cat.color} hover:shadow-md transition-all`}
              >
                <div className="text-3xl mb-3">{cat.icon}</div>
                <h3 className="font-bold text-lg mb-1">{cat.label}</h3>
                <p className="text-sm opacity-80">{cat.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Articles */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-ink">Siste artikler</h2>
          </div>
          <Link
            href="/kredittkort"
            className="hidden md:inline-flex items-center gap-1 text-forest font-medium hover:text-forest-mid"
          >
            Se alle artikler
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {latestArticles.map((article) => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </div>
        <div className="mt-8 text-center md:hidden">
          <Link href="/kredittkort" className="text-forest font-medium">
            Se alle artikler →
          </Link>
        </div>
      </section>

      {/* Loan Calculator CTA — Nordic Clarity editorial (paper bg, surface cards, forest CTA) */}
      <section className="bg-paper py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Forbrukslån */}
            <div className="flex flex-col sm:flex-row items-center gap-6 bg-paper-surface rounded-xl p-6 border border-border">
              <div className="flex-1">
                <h2 className="font-display text-2xl font-medium text-ink mb-2">Forbrukslån</h2>
                <p className="text-ink-muted text-sm leading-relaxed">
                  Beregn månedlig kostnad for usikret lån — med alle renter og gebyrer.
                </p>
              </div>
              <Link
                href="/verktøy/lånekalkulator"
                className="flex-shrink-0 inline-flex items-center gap-2 bg-forest text-white font-bold py-3 px-6 rounded-md hover:bg-forest-mid transition-colors shadow-sm text-sm"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
                Forbrukslånskalkulator
              </Link>
            </div>

            {/* Boliglån */}
            <div className="flex flex-col sm:flex-row items-center gap-6 bg-paper-surface rounded-xl p-6 border border-border">
              <div className="flex-1">
                <h2 className="font-display text-2xl font-medium text-ink mb-2">Boliglån</h2>
                <p className="text-ink-muted text-sm leading-relaxed">
                  Beregn månedlig kostnad og effektiv rente for boliglån med nedbetalingsplan.
                </p>
              </div>
              <Link
                href="/verktøy/boliglånskalkulator"
                className="flex-shrink-0 inline-flex items-center gap-2 bg-white text-forest border border-forest font-bold py-3 px-6 rounded-md hover:bg-forest-soft transition-colors shadow-sm text-sm"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
                Boliglånskalkulator
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
        <div className="bg-paper-alt rounded-2xl p-8 md:p-12 text-center border border-border">
          <h2 className="text-2xl md:text-3xl font-bold text-ink mb-4">Hva er Pengepraten?</h2>
          <p className="text-ink-muted leading-relaxed max-w-2xl mx-auto">
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
