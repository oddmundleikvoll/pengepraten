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
    color: 'bg-accent-50 text-accent-700',
  },
  {
    href: '/lan',
    label: 'Forbrukslån',
    desc: 'Finn billigste lån',
    icon: '🏦',
    color: 'bg-primary-50 text-primary-700',
  },
  {
    href: '/sparing',
    label: 'Sparing',
    desc: 'Beste sparekonto',
    icon: '💰',
    color: 'bg-green-50 text-green-700',
  },
  {
    href: '/budsjett',
    label: 'Budsjett',
    desc: 'Maler og verktøy',
    icon: '📊',
    color: 'bg-amber-50 text-amber-700',
  },
]

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-norsk-dark via-norsk-blue to-accent-700 text-white overflow-hidden">
        {/* Hero background image */}
        <div className="absolute inset-0">
          <Image
            src="/hero-control.png"
            alt="Ta kontroll på økonomien din"
            fill
            className="object-cover object-center opacity-20"
            priority
          />
        </div>

        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-20 w-96 h-96 bg-primary-300 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-20 md:py-28">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur rounded-full text-sm mb-6">
              <span className="w-2 h-2 bg-primary-400 rounded-full animate-pulse" />
              <span>Oppdatert for 2026</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-black leading-tight mb-6">
              Få kontroll på{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-300 to-accent-300">
                pengene dine
              </span>
            </h1>

            <p className="text-xl text-gray-200 mb-8 leading-relaxed max-w-2xl">
              Pengepraten er Norges mest nyttige nettside for personlig økonomi. 
              Vi gir deg verktøyene, guidene og sammenligningene du trenger for å ta 
              smartere økonomiske beslutninger — helt gratis.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#last-ned"
                className="inline-flex items-center justify-center gap-2 bg-white text-norsk-blue font-bold py-4 px-8 rounded-xl hover:bg-gray-100 transition-colors shadow-lg"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Last ned gratis budsjettmal
              </a>
              <Link
                href="/verktøy/lånekalkulator"
                className="inline-flex items-center justify-center gap-2 border-2 border-white/30 text-white font-semibold py-4 px-8 rounded-xl hover:bg-white/10 transition-colors"
              >
                Prøv lånekalkulatoren →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { value: '50+', label: 'Artikler og guider' },
              { value: '2.000+', label: 'Nedlastede maler' },
              { value: 'Gratis', label: 'Alle verktøy' },
              { value: '2026', label: 'Oppdatert for 2026' },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-2xl md:text-3xl font-black text-primary-600">{stat.value}</div>
                <div className="text-sm text-gray-500 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lead Magnet */}
      <section id="last-ned" className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block px-3 py-1 text-xs font-semibold bg-primary-100 text-primary-700 rounded-full mb-4">
              Populært verktøy
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-norsk-dark mb-4">
              Ta kontroll over økonomien med en gang
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
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
                  <div className="w-5 h-5 rounded-full bg-primary-100 flex items-center justify-center flex-shrink-0">
                    <svg className="w-3 h-3 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700 text-sm">{item}</span>
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
      <section className="bg-gray-50 border-t border-b border-gray-100 py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-norsk-dark mb-8 text-center">
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
            <h2 className="text-2xl md:text-3xl font-bold text-norsk-dark">Siste artikler</h2>
            <p className="text-gray-500 mt-1">Oppdatert januar 2026</p>
          </div>
          <Link
            href="/kredittkort"
            className="hidden md:inline-flex items-center gap-1 text-primary-600 font-medium hover:text-primary-700"
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
          <Link href="/kredittkort" className="text-primary-600 font-medium">
            Se alle artikler →
          </Link>
        </div>
      </section>

      {/* Loan Calculator CTA */}
      <section className="bg-gradient-to-br from-norsk-dark to-norsk-blue py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1 text-white">
              <h2 className="text-3xl font-bold mb-4">Usikker på hvor mye lånet koster?</h2>
              <p className="text-gray-300 leading-relaxed">
                Bruk vår lånekalkulator for å se nøyaktig hvor mye du vil betale 
                i måneden — med alle renter og gebyrer. Helt gratis, uten registrering.
              </p>
            </div>
            <Link
              href="/verktøy/lånekalkulator"
              className="flex-shrink-0 inline-flex items-center gap-2 bg-white text-norsk-blue font-bold py-4 px-8 rounded-xl hover:bg-gray-100 transition-colors shadow-lg"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
              Åpne lånekalkulator
            </Link>
          </div>
        </div>
      </section>

      {/* About section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
        <div className="bg-gray-50 rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-norsk-dark mb-4">Hva er Pengepraten?</h2>
          <p className="text-gray-600 leading-relaxed max-w-2xl mx-auto">
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
