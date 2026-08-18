import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Om oss — Hvem er Pengepraten?',
  description: 'Pengepraten er en uavhengig norsk nettside som hjelper nordmenn med å ta bedre økonomiske beslutninger. Les mer om oss.',
}

export default function OmOssPage() {
  return (
    <>
      {/* Hero — Nordic Clarity editorial */}
      <section className="bg-paper text-ink py-16 border-b border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <nav className="font-mono text-xs uppercase tracking-wider text-ink-muted mb-6">
            <Link href="/" className="hover:text-forest transition-colors">Hjem</Link>
            <span className="mx-2 text-border-strong">/</span>
            <span className="text-ink">Om oss</span>
          </nav>
          <h1 className="text-3xl md:text-5xl font-medium font-display leading-[1.08] mb-4">Om Pengepraten</h1>
          <p className="text-xl text-ink-muted">
            Vi hjelper nordmenn å ta bedre økonomiske beslutninger.
          </p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 py-12 article-content">
        <h2>Hva er Pengepraten?</h2>
        <p>
          Pengepraten er en uavhengig norsk nettside som hjelper nordmenn med å ta 
          bedre økonomiske beslutninger. Vi lager verktøy, guider og sammenligninger 
          som er enkle å forstå — uten bankspråk eller skjulte agendaer.
        </p>
        <p>
          Alt vi lager er gratis, fordi vi tror god økonomisk hjelp bør være 
          tilgjengelig for alle.
        </p>

        <h2>Vår filosofi</h2>
        <p>
          Vi tror på:
        </p>
        <ul>
          <li><strong>Uavhengighet:</strong> Vi er ikke eid av noen bank eller finansinstitusjon</li>
          <li><strong>Ærlighet:</strong> Vi forteller deg både fordeler og ulemper</li>
          <li><strong>Tilgjengelighet:</strong> Økonomi skal ikke være komplisert</li>
          <li><strong>Gratis:</strong> Våre verktøy og guider er alltid gratis</li>
        </ul>

        <h2>Hva vi gjør</h2>
        <p>
          Pengepraten tilbyr:
        </p>
        <ul>
          <li>Gratis verktøy som forbrukslånskalkulator, boliglånskalkulator og budsjettmaler</li>
          <li>Grundige guider om kredittkort, lån og sparing</li>
          <li>Sammenligninger av banker og finansprodukter</li>
          <li>Tips for personlig økonomi</li>
        </ul>

        <h2>Slik arbeider vi redaksjonelt</h2>
        <p>
          Artikler og sammenligninger bygger på offentlige kilder, bankenes egne
          prislister og vilkår, samt beregninger vi beskriver på den aktuelle siden.
          Renter og produktvilkår datostemples fordi de kan endre seg raskt.
        </p>
        <ul>
          <li><strong>Kilder:</strong> Vi prioriterer primærkilder som banker, offentlige myndigheter og Finansportalen.</li>
          <li><strong>Oppdateringer:</strong> Sider med renter og vilkår viser når tallene sist ble kontrollert.</li>
          <li><strong>Annonselenker:</strong> Enkelte lenker kan gi oss provisjon. Det skal merkes tydelig og påvirker ikke rangeringen vår.</li>
          <li><strong>Rettelser:</strong> Dokumenterte feil rettes så raskt som mulig og kan meldes til kontakt@pengepraten.no.</li>
        </ul>

        <h2>Kontakt oss</h2>
        <p>
          Har du spørsmål, tilbakemeldinger eller forslag? Vi vil gjerne høre fra deg!
        </p>
        <p>
          <strong>E-post:</strong> kontakt@pengepraten.no
        </p>

        <div className="bg-gray-50 rounded-xl p-6 my-8">
          <h3 className="font-bold text-norsk-dark mb-2">Viktig merknad</h3>
          <p className="text-sm text-gray-600">
            Informasjonen på Pengepraten er kun for generelle informative formål og 
            utgjør ikke finansiell rådgivning. Alltid gjør dine egne vurderinger og 
            konsulter med en finansiell rådgiver før du tar viktige økonomiske beslutninger.
          </p>
        </div>
      </section>
    </>
  )
}
