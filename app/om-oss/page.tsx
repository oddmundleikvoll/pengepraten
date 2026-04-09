import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Om oss — Hvem er Pengepraten?',
  description: 'Pengepraten er en uavhengig norsk nettside som hjelper nordmenn med å ta bedre økonomiske beslutninger. Les mer om oss.',
}

export default function OmOssPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-norsk-dark via-norsk-blue to-accent-700 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <nav className="text-gray-300 text-sm mb-4">
            <Link href="/" className="hover:text-white">Hjem</Link>
            <span className="mx-2">/</span>
            <span>Om oss</span>
          </nav>
          <h1 className="text-3xl md:text-5xl font-black mb-4">Om Pengepraten</h1>
          <p className="text-xl text-gray-300">
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
          <li>Gratis verktøy som lånekalkulator og budsjettmaler</li>
          <li>Grundige guider om kredittkort, lån og sparing</li>
          <li>Sammenligninger av banker og finansprodukter</li>
          <li>Tips for personlig økonomi</li>
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
