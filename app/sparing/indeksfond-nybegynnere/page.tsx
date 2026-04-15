import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Indeksfond for nybegynnere: Slik kommer du i gang med fond i 2026',
  description: 'Lær hva indeksfond er, hvorfor det er bedre for de fleste enn aktivt forvaltede fond, og hvordan du kommer i gang. Enkelt forklart for norske nybegynnere.',
}

export default function IndeksfondNybegynnere() {
  return (
    <>
      {/* HERO */}
      <section className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <nav className="text-blue-100 text-sm mb-4">
            <Link href="/">Hjem</Link>
            <span className="mx-2">/</span>
            <Link href="/sparing">Sparing</Link>
            <span className="mx-2">/</span>
            <span>Indeksfond</span>
          </nav>
          <h1 className="text-3xl md:text-5xl font-black mb-4">
            Indeksfond for nybegynnere: Slik kommer du i gang med fond i 2026
          </h1>
          <p className="text-blue-100 text-xl max-w-2xl">
            Du trenger verken å være rik eller ha en finansutdannelse for å investere. Med et indeksfond kan du bygge formue over tid — trygt og rimelig.
          </p>
        </div>
      </section>

      {/* INNHOLD */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 py-12 article-content space-y-8">

        {/* INTRO */}
        <div className="bg-blue-50 rounded-2xl p-6 border-l-4 border-blue-600">
          <p className="text-lg text-gray-800 leading-relaxed">
            <span className="text-2xl mr-2">📈</span>
            <strong>Et indeksfond</strong> er en type verdipapirfond som følger en bestemt indeks — for eksempel den norske eller globale aksjemarkedet. Poenget er at du eier en bit av mange selskaper samtidig, uten å måtte velge dem selv.
          </p>
        </div>

        {/* INFOBOX */}
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
          <h3 className="font-bold text-amber-800 mb-3 flex items-center gap-2">
            <span className="text-xl">→</span> Forventet avkastning — historisk
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <div className="bg-white rounded-lg p-4 text-center">
              <div className="text-3xl font-black text-blue-600 mb-1">7-8%</div>
              <div className="text-gray-700 text-sm font-semibold">Aksjemarkedet (årlig snitt)</div>
              <div className="text-gray-500 text-xs mt-1">Over mange år</div>
            </div>
            <div className="bg-white rounded-lg p-4 text-center">
              <div className="text-3xl font-black text-green-600 mb-1">3-4%</div>
              <div className="text-gray-700 text-sm font-semibold">Obligasjonsfond</div>
              <div className="text-gray-500 text-xs mt-1">Mer stabilt, lavere avkastning</div>
            </div>
          </div>
          <p className="text-gray-600 text-sm mt-4">
            <strong>Merk:</strong> Historisk avkastning er ingen garanti for fremtidig avkastning. Aksjemarkedet kan også falle betydelig i perioder.
          </p>
        </div>

        {/* HVA ER INDEKSFOND */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <span>📖</span> Hva er et indeksfond — enkelt forklart
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Tenk deg at du vil eie en liten bit av alle de største selskapene i verden. Det er praktisk talt umulig å kjøpe aksjer i 500 ulike selskaper selv — det ville tatt timer og koste mye i transaksjonsgebyrer.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Et indeksfond løser dette problemet. Fondet eier aksjer i alle selskapene som inngår i en bestemt indeks (for eksempel <strong>OSEBX</strong> for norske selskaper eller <strong>MSCI World</strong> for globale). Når du kjøper en andel i fondet, eier du automatisk en bit av alle disse selskapene.
          </p>

          <div className="bg-blue-50 rounded-xl p-5 border border-blue-200 mb-6">
            <h3 className="font-bold text-blue-800 mb-3 flex items-center gap-2">
              <span>🏢</span> Et konkret eksempel: MSCI World
            </h3>
            <p className="text-gray-700 text-sm">
              MSCI World-indeksen inneholder rundt 1.500 store selskaper fra hele verden — Apple, Microsoft, NVIDIA, Novo Nordisk, og mange flere. Når du kjøper et fond som følger denne indeksen, eier du en bit av alle disse selskapene.
            </p>
          </div>

          <p className="text-gray-700 leading-relaxed">
            Det geniale med indeksfond er at du ikke trenger å spå hvilke selskaper som blir vinnerne. Du eier dem alle. Og over tid har aksjemarkedet historisk steget — fordi verden blir stadig rikere og selskapene produserer mer verdi.
          </p>
        </section>

        {/* HVORFOR INDEKSFOND */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <span>🎯</span> Hvorfor er indeksfond bedre for de fleste?
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            De fleste som prøver å slå markedet — profesjonelle fondforvaltere inkludert — klarer det ikke over tid. Her er hvorfor indeksfond vinner:
          </p>

          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse rounded-xl overflow-hidden shadow-sm">
              <thead>
                <tr className="bg-gray-800 text-white">
                  <th className="text-left p-4 font-bold">Faktor</th>
                  <th className="text-left p-4 font-bold bg-green-600">Indeksfond</th>
                  <th className="text-left p-4 font-bold">Aktivt forvaltet fond</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white border-b border-gray-100">
                  <td className="p-4 font-semibold">Forvaltningskostnad</td>
                  <td className="p-4 bg-green-50 text-green-700 font-bold">Lav (0,1-0,3%)</td>
                  <td className="p-4 text-red-600">Høy (1-2%)</td>
                </tr>
                <tr className="bg-gray-50 border-b border-gray-100">
                  <td className="p-4 font- semibold">Sjanse for å slå markedet</td>
                  <td className="p-4 bg-green-50 text-green-700 font-bold">Garantert markedsavkastning</td>
                  <td className="p-4">Liten (de fleste taper)</td>
                </tr>
                <tr className="bg-white border-b border-gray-100">
                  <td className="p-4 font-semibold">Risiko</td>
                  <td className="p-4 bg-green-50 text-green-700 font-bold">Spredt over mange selskaper</td>
                  <td className="p-4">Avhengig av forvalter</td>
                </tr>
                <tr className="bg-gray-50 border-b border-gray-100">
                  <td className="p-4 font-semibold">Tid du trenger å bruke</td>
                  <td className="p-4 bg-green-50 text-green-700 font-bold">Minimal (kjøp og glem)</td>
                  <td className="p-4">Mye (følg med)</td>
                </tr>
                <tr className="bg-white">
                  <td className="p-4 font-semibold">Skatt ved salg</td>
                  <td className="p-4 bg-green-50 text-green-700 font-bold">Utsatt til du selger</td>
                  <td className="p-4">Samme</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-gradient-to-br from-red-50 to-amber-50 rounded-xl p-5 border border-red-200 mb-6">
            <h3 className="font-bold text-red-800 mb-3 flex items-center gap-2">
              <span>⚠️</span> Aktiv forvaltning: Fakta som sjelden snakkes om
            </h3>
            <p className="text-gray-700 text-sm mb-3">
              Studier viser at <strong>over 80% av aktive fondforvaltere taper mot indeksfond over 10 år</strong>. Det er ikke fordi de er dumme — markedet er bare svært effektivt. Den informasjonen som kunne gitt en fordel, er allerede innarbeidet i prisene.
            </p>
            <p className="text-gray-700 text-sm">
              I tillegg tar aktive fond høye gebyrer som spiser av avkastningen din. Et fond med 1,5% årlig gebyr taper 1,5% av avkastningen hvert eneste år — og det kan utgjøre hundretusener over et liv.
            </p>
          </div>
        </section>

        {/* POPULÆRE INDEKSFOND */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <span>🏦</span> Populære indeksfond i Norge
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Her er noen av de mest populære indeksfondene blant norske investorer. Alle kan du kjøpe via norske nettmeglere:
          </p>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse rounded-xl overflow-hidden shadow-sm">
              <thead>
                <tr className="bg-blue-600 text-white">
                  <th className="text-left p-4 font-bold">Fond</th>
                  <th className="text-left p-4 font-bold">Type</th>
                  <th className="text-left p-4 font-bold">Kostnad (TER)</th>
                  <th className="text-left p-4 font-bold">Kjøp via</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white border-b border-gray-100">
                  <td className="p-4 font-semibold">KLP Aksjfond Global</td>
                  <td className="p-4 text-gray-600">Global indeks</td>
                  <td className="p-4 text-blue-700 font-bold">0,20%</td>
                  <td className="p-4 text-sm text-gray-600">KLP, Nordnet</td>
                </tr>
                <tr className="bg-blue-50 border-b border-gray-100">
                  <td className="p-4 font-semibold">DNB Global Indeks</td>
                  <td className="p-4 text-gray-600">Global indeks</td>
                  <td className="p-4 text-blue-700 font-bold">0,25%</td>
                  <td className="p-4 text-sm text-gray-600">DNB, Nordnet</td>
                </tr>
                <tr className="bg-white border-b border-gray-100">
                  <td className="p-4 font-semibold">Alfred Berg Index</td>
                  <td className="p-4 text-gray-600">Global indeks</td>
                  <td className="p-4 text-blue-700 font-bold">0,30%</td>
                  <td className="p-4 text-sm text-gray-600">Alfred Berg, Nordnet</td>
                </tr>
                <tr className="bg-blue-50 border-b border-gray-100">
                  <td className="p-4 font-semibold">iShares MSCI World</td>
                  <td className="p-4 text-gray-600">ETF, global</td>
                  <td className="p-4 text-blue-700 font-bold">0,20%</td>
                  <td className="p-4 text-sm text-gray-600">Nordnet, etc.</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-500">
            TER = Total Expense Ratio, årlig kostnad som prosent av fondets verdi.
          </p>
        </section>

        {/* EKSEMPEL */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <span>🧮</span> Eksempelet: 10.000 kr/mnd i indeksfond vs. sparekonto
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            La oss se på hva som skjer hvis du investerer 10.000 kroner hver måned i et indeksfond over 10 år — sammenlignet med å sette pengene på en sparekonto med 4% rente.
          </p>

          <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 text-white mb-6">
            <h3 className="font-bold text-green-400 mb-4">10 års sparing: 10.000 kr/mnd</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-blue-400 font-bold mb-2">Indeksfond (7% årlig)</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between py-1 border-b border-gray-700">
                    <span className="text-gray-300">Ditt innskudd:</span>
                    <span className="font-semibold">1.200.000 kr</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-gray-700">
                    <span className="text-gray-300">Verdiøkning:</span>
                    <span className="font-bold text-green-400">+ 520.000 kr</span>
                  </div>
                  <div className="flex justify-between py-1 font-bold bg-green-600/20 rounded px-2 py-1">
                    <span className="text-green-400">Total verdi:</span>
                    <span className="font-black text-green-400">1.720.000 kr</span>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="text-gray-300 font-bold mb-2">Sparekonto (4% rente)</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between py-1 border-b border-gray-700">
                    <span className="text-gray-300">Ditt innskudd:</span>
                    <span className="font-semibold">1.200.000 kr</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-gray-700">
                    <span className="text-gray-300">Renteinntekter:</span>
                    <span className="font-bold text-amber-400">+ 260.000 kr</span>
                  </div>
                  <div className="flex justify-between py-1 font-bold bg-gray-700/30 rounded px-2 py-1">
                    <span className="text-gray-400">Total verdi:</span>
                    <span className="font-black">1.460.000 kr</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-4 p-3 bg-green-600/20 rounded-lg text-center">
              <span className="font-bold text-green-400">Indeksfond ≈ 260.000 kr mer etter 10 år</span>
            </div>
          </div>

          <div className="bg-amber-50 rounded-xl p-5 border border-amber-200">
            <h3 className="font-bold text-amber-800 mb-2 flex items-center gap-2">
              <span>📈</span> Over 20 år blir forskjellen enorm
            </h3>
            <p className="text-gray-700 text-sm">
              Med samme månedlige sparing (10.000 kr) og 7% årlig avkastning: etter 20 år vil fondet være verdt ca. <strong>4.700.000 kr</strong> — mens sparekontoen ville vært ca. <strong>3.300.000 kr</strong>. Altså <strong>1.400.000 kr mer</strong> med fond.
            </p>
          </div>
        </section>

        {/* RISIKO */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <span>⚠️</span> Viktig: Risikoen du må forstå
          </h2>
          <div className="bg-red-50 rounded-xl p-5 border border-red-200 mb-6">
            <h3 className="font-bold text-red-800 mb-3 flex items-center gap-2">
              <span>🔴</span> Aksjemarkedet kan falle — mye
            </h3>
            <p className="text-gray-700 text-sm mb-4">
              I 2008 falt verdens aksjemarkeder med over 40%. Under koronakrisen i mars 2020 falt de med rundt 30% på bare én måned. Hvis du hadde solgt i panikk, ville du tapt store summer.
            </p>
            <p className="text-gray-700 text-sm font-semibold">
              Poenget med indeksfond er at du <strong>ikke selger i panikk</strong>. Historisk har markedet alltid tatt seg opp igjen — men det kan ta år.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="bg-white rounded-xl p-5 border border-gray-200">
              <h3 className="font-bold text-gray-900 mb-2">🎯 Tidshorisont</h3>
              <p className="text-gray-600 text-sm">
                <strong>Ikke invester i aksjer</strong> hvis du trenger pengene innen 3-5 år. For kortsiktige mål: bruk høyrentekonto. For langsiktige mål (10+ år): fond er perfekt.
              </p>
            </div>
            <div className="bg-white rounded-xl p-5 border border-gray-200">
              <h3 className="font-bold text-gray-900 mb-2">📊 Volatilitet er normalt</h3>
              <p className="text-gray-600 text-sm">
                At fondet svinger i verdi er <strong>normalt og forventet</strong>. Det er ikke et tap før du selger. Tenk på det som å eie enandel i en bedrift — verdien svinger, men eierskapet er der.
              </p>
            </div>
            <div className="bg-white rounded-xl p-5 border border-gray-200">
              <h3 className="font-bold text-gray-900 mb-2">🏦 Spred risiko</h3>
              <p className="text-gray-600 text-sm">
                Et globalt indeksfond sprer risiko over hundrevis av selskaper og land. Det er tryggere enn å satse på ett selskap eller én bransje.
              </p>
            </div>
            <div className="bg-white rounded-xl p-5 border border-gray-200">
              <h3 className="font-bold text-gray-900 mb-2">💸 Ikke invester alt</h3>
              <p className="text-gray-600 text-sm">
                Ha alltid en buffer på høyrentekonto (3-6 måneders utgifter). Ikke sett alle sparepengene i fond — da risikerer du å måtte selge i et dårlig tidspunkt.
              </p>
            </div>
          </div>
        </section>

        {/* SLIK KOMMER DU I GANG */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <span>🚀</span> Slik kommer du i gang — steg for steg
          </h2>
          <div className="space-y-4">
            <div className="flex items-start gap-4 bg-white rounded-xl p-5 border border-gray-200 shadow-sm">
              <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-lg flex-shrink-0">1</div>
              <div>
                <h3 className="font-bold text-gray-900 mb-1">Åpne konto hos en nettmegler</h3>
                <p className="text-gray-600 text-sm">Nordnet, AksjeNorge eller lignende. Du trenger BankID og en norsk konto. Det tar 10 minutter.</p>
              </div>
            </div>
            <div className="flex items-start gap-4 bg-white rounded-xl p-5 border border-gray-200 shadow-sm">
              <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-lg flex-shrink-0">2</div>
              <div>
                <h3 className="font-bold text-gray-900 mb-1">Velg et globalt indeksfond</h3>
                <p className="text-gray-600 text-sm">KLP Aksjfond Global eller iShares MSCI World er gode alternativer for norske investorer.</p>
              </div>
            </div>
            <div className="flex items-start gap-4 bg-white rounded-xl p-5 border border-gray-200 shadow-sm">
              <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-lg flex-shrink-0">3</div>
              <div>
                <h3 className="font-bold text-gray-900 mb-1">Sett opp månedlig sparing</h3>
                <p className="text-gray-600 text-sm">Velg et fast beløp og en fast dato hver måned. Automatisk sparing er nøkkelen til å bygge formue over tid.</p>
              </div>
            </div>
            <div className="flex items-start gap-4 bg-white rounded-xl p-5 border border-gray-200 shadow-sm">
              <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-lg flex-shrink-0">4</div>
              <div>
                <h3 className="font-bold text-gray-900 mb-1">Glem det — i 10-20 år</h3>
                <p className="text-gray-600 text-sm">Det beste du kan gjøre er å la pengene jobbe. Sjekk kontoen sjelden, aldri selg i panikk, og nyt resultatet.</p>
              </div>
            </div>
          </div>
        </section>

        {/* IPS-HOOK */}
        <div className="bg-indigo-50 rounded-xl p-5 border border-indigo-200">
          <h3 className="font-bold text-indigo-800 mb-2 flex items-center gap-2">
            <span>💡</span> Visste du? IPS + indeksfond = kraftfull kombinasjon
          </h3>
          <p className="text-gray-700 text-sm">
            Hvis du vil investere langsiktig (til pensjon), kan det være lurt å vurdere IPS (Individuell Pensjonssparing). Der kan du investere i indeksfond og få <strong>skattefradrag</strong> i tillegg til avkastningen. Les mer i vår IPS-guide.
          </p>
          <Link href="/sparing/ips-individuell-pensjonssparing" className="inline-block mt-3 text-indigo-700 font-semibold text-sm hover:underline">
            → Les mer om IPS 2026
          </Link>
        </div>

        {/* CTA */}
        <section className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl p-8 text-white text-center">
          <h2 className="text-2xl font-black mb-4">Klar til å la pengene vokse for deg?</h2>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Et indeksfond er den enkleste veien til langsiktig formue. Start med 1.000 kr i måneden — du trenger ikke mer for å komme i gang.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/sparing/ips-individuell-pensjonssparing" className="inline-block bg-white text-blue-700 font-bold px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors">
              📊 Les om IPS (skattefradrag!)
            </Link>
            <Link href="/sparing" className="inline-block bg-blue-500 text-white font-bold px-6 py-3 rounded-lg hover:bg-blue-400 transition-colors border border-blue-400">
              📚 Flere spareguider
            </Link>
          </div>
        </section>

        {/* RELATERTE ARTIKLER */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">📚 Relaterte artikler</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link href="/sparing/ips-individuell-pensjonssparing" className="block bg-white rounded-xl p-5 border border-gray-200 hover:border-blue-400 transition-colors group">
              <div className="flex items-center gap-3">
                <span className="text-2xl">🏦</span>
                <div>
                  <h3 className="font-bold text-gray-900 group-hover:text-blue-700">IPS 2026: Full guide</h3>
                  <p className="text-gray-500 text-sm">Skattefradrag + fond = kraftfull sparing</p>
                </div>
              </div>
            </Link>
            <Link href="/sparing/hoyrentekonto" className="block bg-white rounded-xl p-5 border border-gray-200 hover:border-blue-400 transition-colors group">
              <div className="flex items-center gap-3">
                <span className="text-2xl">💰</span>
                <div>
                  <h3 className="font-bold text-gray-900 group-hover:text-blue-700">Høyrentekonto 2026</h3>
                  <p className="text-gray-500 text-sm">Få 5,2% på sparepengene dine trygt</p>
                </div>
              </div>
            </Link>
          </div>
        </section>

        <p className="text-sm text-gray-400 pt-8 border-t">
          Sist oppdatert: 15. april 2026. Fond og markeder kan endre seg. Investering innebærer risiko, og du kan tape pengene dine. Søk profesjonell rådgivning ved usikkerhet.
        </p>
      </article>
    </>
  )
}