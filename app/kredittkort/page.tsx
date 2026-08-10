import Link from 'next/link'
import ArticleCard from '@/components/ArticleCard'
import { getArticlesByPillar } from '@/lib/articles'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Kredittkort 2026 — Sammenlign 10+ Kredittkort (Cashback, Reise, Gratis) | Pengepraten',
  description: 'Sammenlign de beste kredittkortene i Norge 2026. Finn kort med cashback, reiseforsikring og uten årsavgift. Bank Norwegian, Trumf Visa, Komplett Bank, SAS EuroBonus og flere.',
  keywords: ['kredittkort', 'beste kredittkort', 'kredittkort 2026', 'cashback kredittkort', 'kredittkort uten årsavgift', 'Bank Norwegian', 'Trumf Visa', 'Komplett Bank'],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Hva er beste kredittkort 2026?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Det beste kredittkortet i 2026 avhenger av dine behov. Bank Norwegian er best for reiseforsikring og valutakjøp. Trumf Visa er best for daglig cashback. Komplett Bank er best for netthandel. SAS EuroBonus Premium er best for reisende. re:member Gold er best for maksimal cash-back. Les vår komplette guide for å finne det beste kredittkortet for deg.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hvilken kredittscore trenger jeg for kredittkort?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'De fleste banker krever en god kredittscore for å innvilge kredittkort. En score på 5 eller høyere gir deg gode sjanser. Med lavere score kan du fortsatt få kredittkort uten årsavgift. Les vår guide om kredittscore i Norge for å forbedre din score.',
      },
    },
    {
      '@type': 'Question',
      name: 'Kan jeg ha flere kredittkort samtidig?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja, du kan ha flere kredittkort samtidig. Mange bruker ett kort for daglig cashback og ett for reiser med forsikring. Vær oppmerksom på at årsavgiften kan bli høyere med flere kort, og at du må holde styr på betalingsfristene.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hva skjer hvis jeg ikke betaler hele regningen på kredittkort?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Hvis du ikke betaler hele regningen, begynner nominell rente å løpe på restbeløpet. Renter er typisk 15-25%. Dette er dyrt, så vi anbefaler alltid å betale hele regningen innen forfall. Rentefri periode gjelder bare hvis du betaler fullt.',
      },
    },
    {
      '@type': 'Question',
      name: 'Er kredittkort uten årsavgift virkelig gratis?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja, mange kredittkort uten årsavgift er helt gratis å eie. Du betaler kun renter hvis du bruker kreditten og ikke betaler innen rentefri periode. Noen kort har gebyrer ved uttak i utlandet, men i seg selv koster kortet ingenting.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hva er cashback på kredittkort?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Cashback betyr at du får tilbake en prosentandel av det du handler for. Typisk 0,5-2% på alle kjøp, og opptil 4% i utvalgte kategorier. Cashback kredittkort som Trumf Visa og re:member gir deg penger tilbake som reduserer det du faktisk betaler for varene.',
      },
    },
  ],
}

export default function KredittkortPage() {
  const articles = getArticlesByPillar('kredittkort')

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
            <span className="text-ink">Kredittkort</span>
          </nav>
          <h1 className="text-3xl md:text-5xl font-medium font-display leading-[1.08] mb-4">Kredittkort 2026</h1>
          <p className="text-xl text-ink-muted max-w-2xl leading-relaxed">
            Sammenlign de beste kredittkortene i Norge. Finn kortet som passer din økonomi —
            med cashback, reiseforsikring eller helt uten årsavgift.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main content */}
          <div className="lg:col-span-2 space-y-12">

            {/* Intro section: Hva er kredittkort */}
            <div className="bg-white rounded-xl border border-gray-100 p-8">
              <h2 className="text-2xl font-bold text-norsk-dark mb-4">Hva er kredittkort og hvorfor bruke det?</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Et kredittkort er et betalingskort som gir deg mulighet til å handle nå og betale senere. De fleste kredittkort i Norge gir deg inntil 45 dager rentefri periode, noe som betyr at du kan bruke pengene dine før du faktisk betaler for varene. Dette gir deg økt fleksibilitet i hverdagen og kan være en stor fordel for de som bruker kredittkortet klokt.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                I tillegg til den praktiske betalingsutsettelsen kommer kredittkort med en rekke fordeler som gjør dem attraktive for norske forbrukere. De mest populære fordelene er cashback — der du får tilbake en prosentandel av alt du handler for — samt reiseforsikring, avbestillingsforsikring og kjøpsforsikring. For den reiseglade nordmannen kan reiseforsikringen alene være verdt mange tusen kroner i året.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                I Norge finnes kredittkort både med og uten årsavgift. Kort med årsavgift har oftest de beste forsikringene og høyest cashback, mens kredittkort uten årsavgift er et godt valg for deg som vil ha fleksibilitet uten faste kostnader. Uansett hvilket kredittkort du velger, er det viktig å betale hele regningen innen forfall for å unngå renter på 15-25%.
              </p>
              <p className="text-gray-600 leading-relaxed">
                For å få de beste kredittkortene med lavest rente og best cashback, er det lurt å ha en god <Link href="/kredittkort/slik-fungerer-kredittscore-norge" className="text-accent-600 hover:text-accent-700 font-medium">kredittscore</Link>. Bankene bruker denne til å vurdere om du er kredittverdig. Les mer om hvordan <Link href="/kredittkort/kredittkort-uten-arsavgift" className="text-accent-600 hover:text-accent-700 font-medium">kredittkort uten årsavgift</Link> fungerer og hvilke fallgruber du bør unngå.
              </p>
            </div>

            {/* Beste kredittkort 2026 — topp 5 oversikt */}
            <div>
              <h2 className="text-2xl font-bold text-norsk-dark mb-4">Beste kredittkort 2026 — topp 5 oversikt</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Vi har sammenlignet alle de mest populære kredittkortene i Norge for 2026. Tabellen under gir deg en rask oversikt over årsavgift, cashback, forsikringer og rente. For en full guide med detaljerte tester, se vår artikkel om <Link href="/kredittkort/beste-kredittkort-2026" className="text-accent-600 hover:text-accent-700 font-medium">beste kredittkort 2026</Link>.
              </p>

              <div className="overflow-x-auto mb-6">
                <table className="w-full text-sm border border-gray-200 rounded-xl overflow-hidden">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="text-left px-4 py-3 font-semibold text-gray-700">Kort</th>
                      <th className="text-left px-4 py-3 font-semibold text-gray-700">Årsavgift</th>
                      <th className="text-left px-4 py-3 font-semibold text-gray-700">Cashback</th>
                      <th className="text-left px-4 py-3 font-semibold text-gray-700">Reiseforsikring</th>
                      <th className="text-left px-4 py-3 font-semibold text-gray-700">Nominell rente</th>
                      <th className="text-left px-4 py-3 font-semibold text-gray-700">Beste for</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    <tr className="bg-white hover:bg-gray-50">
                      <td className="px-4 py-3 font-medium text-norsk-dark">Bank Norwegian</td>
                      <td className="px-4 py-3 text-gray-600">0 kr</td>
                      <td className="px-4 py-3 text-gray-600">Opptil 2%</td>
                      <td className="px-4 py-3 text-green-600 font-medium">Ja</td>
                      <td className="px-4 py-3 text-gray-600">~17,9%</td>
                      <td className="px-4 py-3 text-gray-600">Reisende som handler i utenlandsk valuta — null valutapåslag</td>
                    </tr>
                    <tr className="bg-white hover:bg-gray-50">
                      <td className="px-4 py-3 font-medium text-norsk-dark">Trumf Visa</td>
                      <td className="px-4 py-3 text-gray-600">0 kr</td>
                      <td className="px-4 py-3 text-green-600 font-medium">Opptil 4%</td>
                      <td className="px-4 py-3 text-gray-600">Nei</td>
                      <td className="px-4 py-3 text-gray-600">~21,9%</td>
                      <td className="px-4 py-3 text-gray-600">Daglig handel hos NorgesGruppen-butikker — høyest cashback</td>
                    </tr>
                    <tr className="bg-white hover:bg-gray-50">
                      <td className="px-4 py-3 font-medium text-norsk-dark">Komplett Bank</td>
                      <td className="px-4 py-3 text-gray-600">0 kr</td>
                      <td className="px-4 py-3 text-gray-600">0,5%</td>
                      <td className="px-4 py-3 text-green-600 font-medium">Ja</td>
                      <td className="px-4 py-3 text-gray-600">~19,9%</td>
                      <td className="px-4 py-3 text-gray-600">Netthandel — spesielt bra forsikring på elektronikk</td>
                    </tr>
                    <tr className="bg-white hover:bg-gray-50">
                      <td className="px-4 py-3 font-medium text-norsk-dark">SAS EuroBonus Premium</td>
                      <td className="px-4 py-3 text-gray-600">1.195 kr</td>
                      <td className="px-4 py-3 text-gray-600">Poeng</td>
                      <td className="px-4 py-3 text-green-600 font-medium">Ja</td>
                      <td className="px-4 py-3 text-gray-600">~19,9%</td>
                      <td className="px-4 py-3 text-gray-600">Frequent flyers — opptjener EuroBonus-poeng på alle kjøp</td>
                    </tr>
                    <tr className="bg-white hover:bg-gray-50">
                      <td className="px-4 py-3 font-medium text-norsk-dark">re:member Gold</td>
                      <td className="px-4 py-3 text-gray-600">495 kr</td>
                      <td className="px-4 py-3 text-green-600 font-medium">Opptil 3%</td>
                      <td className="px-4 py-3 text-green-600 font-medium">Ja</td>
                      <td className="px-4 py-3 text-gray-600">~18,9%</td>
                      <td className="px-4 py-3 text-gray-600">Deg som vil ha maksimal cashback + forsikring i ett kort</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-sm text-gray-500 italic">* Renter og betingelser kan endres. Sjekk alltid bankens nettsider for oppdaterte priser. Oppdatert juni 2026.</p>
              <p className="text-gray-600 leading-relaxed mt-4">
                <strong>Bank Norwegian</strong> er fortsatt vinneren for reisende i 2026 med null valutapåslag og solid reiseforsikring inkludert helt gratis. <strong>Trumf Visa</strong> gir den høyeste cashbacken og er perfekt for dagligdagse kjøp hos Meny, Kiwi, Joker og andre NorgesGruppen-butikker. <strong>re:member Gold</strong> er et premiumkort som kombinerer god cashback med utmerkede forsikringer, men krever en årsavgift på 495 kr. For en dypere analyse av hvert kort, les vår <Link href="/kredittkort/beste-kredittkort-2026" className="text-accent-600 hover:text-accent-700 font-medium">komplette guide til beste kredittkort 2026</Link>.
              </p>
            </div>

            {/* Hvilket kredittkort passer deg? */}
            <div className="bg-white rounded-xl border border-gray-100 p-8">
              <h2 className="text-2xl font-bold text-norsk-dark mb-4">Hvilket kredittkort passer deg?</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Ikke alle kredittkort passer alle. Det beste kredittkortet for deg avhenger av hvordan du bruker kortet, hvor mye du handler, og om du reiser mye. Her er våre anbefalinger basert på de tre vanligste brukerprofilene i Norge:
              </p>

              <div className="grid md:grid-cols-3 gap-6 mb-6">
                <div className="bg-green-50 rounded-xl p-6">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="font-bold text-norsk-dark mb-2">Daglig bruk (cashback)</h3>
                  <p className="text-sm text-gray-600 leading-relaxed mb-3">
                    Du handler mye i dagligvarebutikker og vil ha maksimal tilbakebetaling. Fokuser på kredittkort med høy cashback på daglige kjøp.
                  </p>
                  <p className="text-sm font-medium text-green-700">Anbefaling: Trumf Visa, re:member Gold</p>
                </div>

                <div className="bg-accent-50 rounded-xl p-6">
                  <div className="w-10 h-10 bg-accent-100 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-5 h-5 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="font-bold text-norsk-dark mb-2">Reise (forsikring)</h3>
                  <p className="text-sm text-gray-600 leading-relaxed mb-3">
                    Du reiser flere ganger i året og trenger reiseforsikring, avbestillingsforsikring og null valutapåslag. Årsavgiften betaler seg raskt tilbake.
                  </p>
                  <p className="text-sm font-medium text-accent-700">Anbefaling: Bank Norwegian, SAS EuroBonus Premium</p>
                </div>

                <div className="bg-primary-50 rounded-xl p-6">
                  <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="font-bold text-norsk-dark mb-2">Lavest kostnad (gratis)</h3>
                  <p className="text-sm text-gray-600 leading-relaxed mb-3">
                    Du vil ha et kredittkort uten faste kostnader, men med grunnleggende forsikring og god rentefri periode. Ingen årsavgift er viktigst.
                  </p>
                  <p className="text-sm font-medium text-primary-700">Anbefaling: Bank Norwegian, Komplett Bank</p>
                </div>
              </div>

              <p className="text-gray-600 leading-relaxed">
                Les mer om <Link href="/kredittkort/cashback-kredittkort" className="text-accent-600 hover:text-accent-700 font-medium">cashback kredittkort</Link> og hvordan du maksimerer tilbakebetalingen, eller sjekk vår guide til <Link href="/kredittkort/kredittkort-uten-arsavgift" className="text-accent-600 hover:text-accent-700 font-medium">kredittkort uten årsavgift</Link> for å finne de beste gratisalternativene. Artikkelen inneholder annonselenker.
              </p>
            </div>

            {/* Slik velger du riktig kredittkort */}
            <div className="bg-white rounded-xl border border-gray-100 p-8">
              <h2 className="text-2xl font-bold text-norsk-dark mb-4">Slik velger du riktig kredittkort</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Å velge riktig kredittkort handler om å forstå dine egne behov og sammenligne dem mot hva hvert kort tilbyr. Her er seks steg som hjelper deg å ta det beste valget i 2026:
              </p>
              <ol className="space-y-4 text-gray-600 leading-relaxed list-decimal list-inside mb-4">
                <li>
                  <strong className="text-norsk-dark">Sjekk årsavgiften:</strong> Mange kredittkort er helt gratis, men premiumkort koster 495-1.195 kr/år. Regn ut om fordelene er verdt prisen.
                </li>
                <li>
                  <strong className="text-norsk-dark">Vurder cashback:</strong> Cashback kredittkort gir deg 0,5-4% tilbake på kjøp. Jo mer du handler, desto mer tjener du. En familie som handler for 50.000 kr i måneden kan få 6.000-12.000 kr tilbake i året med riktig kort.
                </li>
                <li>
                  <strong className="text-norsk-dark">Se på renten:</strong> Nominell rente på kredittkort ligger typisk mellom 15-25%. Selv om du planlegger å betale fullt hver måned, er lav rente en god forsikring.
                </li>
                <li>
                  <strong className="text-norsk-dark">Undersøk forsikringene:</strong> Reiseforsikring, avbestillingsforsikring og kjøpsforsikring kan spare deg for tusenvis. Bank Norwegian og Komplett Bank har blant de beste.
                </li>
                <li>
                  <strong className="text-norsk-dark">Sjekk din kredittscore:</strong> Bankene bruker kredittscore for å avgjøre om du får kortet. En god <Link href="/kredittkort/slik-fungerer-kredittscore-norge" className="text-accent-600 hover:text-accent-700 font-medium">kredittscore</Link> gir deg tilgang til de beste kortene med lavest rente.
                </li>
                <li>
                  <strong className="text-norsk-dark">Se etter valutapåslag:</strong> Handler du i utlandet eller på utenlandske nettbutikker, er null valutapåslag viktig. Bank Norwegian er best med 0% påslag.
                </li>
              </ol>
              <p className="text-gray-600 leading-relaxed">
                Ved å gå gjennom disse stegene finner du raskt ut hvilket kredittkort som gir deg mest verdi. Husk at det beste kredittkortet er det du bruker riktig — betal alltid hele regningen og unngå renter.
              </p>
            </div>

            {/* FAQ */}
            <div className="bg-white rounded-xl border border-gray-100 p-8">
              <h2 className="text-2xl font-bold text-norsk-dark mb-6">Ofte stilte spørsmål om kredittkort</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-norsk-dark mb-2">Hva er beste kredittkort 2026?</h3>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    Bank Norwegian er best for reisende, Trumf Visa for cashback, og Komplett Bank for netthandel. Det beste kredittkortet avhenger av dine behov. Se vår <Link href="/kredittkort/beste-kredittkort-2026" className="text-accent-600 hover:text-accent-700 font-medium">komplette guide</Link> for detaljer.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-norsk-dark mb-2">Hvilken kredittscore trenger jeg?</h3>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    De fleste banker foretrekker en kredittscore på 5 eller høyere. Med lavere score kan du fortsatt få kredittkort uten årsavgift. Les vår guide om <Link href="/kredittkort/slik-fungerer-kredittscore-norge" className="text-accent-600 hover:text-accent-700 font-medium">kredittscore i Norge</Link>.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-norsk-dark mb-2">Kan jeg ha flere kredittkort?</h3>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    Ja, mange har flere kort — ett for daglig bruk med cashback og ett for reiser med forsikring. Pass på å holde styr på fristene og årsavgiftene.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-norsk-dark mb-2">Hva skjer hvis jeg ikke betaler hele regningen?</h3>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    Nominell rente (15-25%) begynner å løpe på restbeløpet. Rentefri periode gjelder kun når du betaler hele regningen. Betal derfor alltid fullt beløp.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-norsk-dark mb-2">Er kredittkort uten årsavgift virkelig gratis?</h3>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    Ja, de er gratis å eie. Du betaler kun hvis du bruker kreditten og ikke betaler innen rentefri periode. Noen har gebyrer ved uttak i utlandet. <Link href="/kredittkort/kredittkort-uten-arsavgift" className="text-accent-600 hover:text-accent-700 font-medium">Les mer her</Link>.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-norsk-dark mb-2">Hva er cashback på kredittkort?</h3>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    Cashback betyr at du får tilbake 0,5-4% av det du handler for. Det er en populær fordel som reduserer din faktiske handlekostnad. <Link href="/kredittkort/cashback-kredittkort" className="text-accent-600 hover:text-accent-700 font-medium">Se beste cashback-kort</Link>.
                  </p>
                </div>
              </div>
            </div>

            {/* Relaterte artikler */}
            <div>
              <h2 className="text-2xl font-bold text-norsk-dark mb-6">Artikler om kredittkort</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {articles.map((article) => (
                  <ArticleCard key={article.slug} article={article} />
                ))}
              </div>

              <div className="mt-8 p-6 bg-accent-50 rounded-xl">
                <h3 className="font-bold text-norsk-dark mb-3">Relaterte guider</h3>
                <ul className="space-y-2 text-sm">
                  <li>
                    <Link href="/kredittkort/beste-kredittkort-2026" className="text-accent-600 hover:text-accent-700 font-medium">→ Beste kredittkort 2026 — komplett guide</Link>
                  </li>
                  <li>
                    <Link href="/kredittkort/cashback-kredittkort" className="text-accent-600 hover:text-accent-700 font-medium">→ Cashback kredittkort: Få opptil 4% tilbake</Link>
                  </li>
                  <li>
                    <Link href="/kredittkort/kredittkort-uten-arsavgift" className="text-accent-600 hover:text-accent-700 font-medium">→ Kredittkort uten årsavgift — er de bra?</Link>
                  </li>
                  <li>
                    <Link href="/kredittkort/slik-fungerer-kredittscore-norge" className="text-accent-600 hover:text-accent-700 font-medium">→ Slik fungerer kredittscore i Norge</Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* CTA */}
            <div className="bg-gradient-to-br from-accent-600 to-accent-800 text-white rounded-xl p-8 text-center">
              <h2 className="text-2xl font-bold mb-3">Finn ditt beste kredittkort</h2>
              <p className="text-accent-100 max-w-xl mx-auto mb-6">
                Vi har testet og sammenlignet alle populære kredittkort i Norge. Svar på noen enkle spørsmål og få en personlig anbefaling basert på dine behov. Artikkelen inneholder annonselenker.
              </p>
              <Link
                href="/kredittkort/beste-kredittkort-2026"
                className="inline-flex items-center gap-2 bg-white text-accent-700 font-bold py-3 px-6 rounded-lg hover:bg-accent-50 transition-colors"
              >
                Se full guide
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="space-y-6">
            <div className="bg-primary-50 rounded-xl p-6">
              <h3 className="font-bold text-norsk-dark mb-4">Populære kredittkort</h3>
              <ul className="space-y-3 text-sm">
                {[
                  'Bank Norwegian kredittkort',
                  'Komplett Bank Mastercard',
                  'SAS EuroBonus Premium',
                  'Trumf Visa',
                ].map((card) => (
                  <li key={card} className="flex items-center gap-2 text-gray-700">
                    <span className="w-1.5 h-1.5 bg-primary-500 rounded-full" />
                    {card}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-accent-50 rounded-xl p-6">
              <h3 className="font-bold text-norsk-dark mb-4">Rask fakta</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Rentefri periode</span>
                  <span className="font-medium">Opptil 45 dager</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Årsavgift</span>
                  <span className="font-medium">0-2.000 kr</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Nominell rente</span>
                  <span className="font-medium">15-25%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Cashback</span>
                  <span className="font-medium">0,5-4%</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <h3 className="font-bold text-norsk-dark mb-3">Oppdatert</h3>
              <p className="text-sm text-gray-600">Sist oppdatert: <span className="font-medium">juni 2026</span></p>
              <p className="text-xs text-gray-400 mt-2">Priser og betingelser kan endres. Sjekk bankens nettsider for nøyaktige tall.</p>
            </div>
          </aside>
        </div>
      </section>
    </>
  )
}
