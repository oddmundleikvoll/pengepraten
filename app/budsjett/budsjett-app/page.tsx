import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Beste budsjettapper for Norge 2026 — vi har testet alle',
  description: 'Vi har testet de beste budsjettappene for norske forhold. Spiff, Moneypenny, Budsjett.no og flere. Finn den beste appen for din økonomi.',
}

export default function BudsjettApp() {
  return (
    <>
      {/* HERO */}
      <section className="bg-gradient-to-br from-amber-500 to-orange-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <nav className="text-amber-100 text-sm mb-4">
            <Link href="/">Hjem</Link>
            <span className="mx-2">/</span>
            <Link href="/budsjett">Budsjett</Link>
            <span className="mx-2">/</span>
            <span>Budsjettapper</span>
          </nav>
          <h1 className="text-3xl md:text-5xl font-black mb-4">
            Beste budsjettapper for Norge 2026 — vi har testet alle
          </h1>
          <p className="text-amber-100 text-xl max-w-2xl">
            En budsjettapp er bare så god som hvor ofte du faktisk bruker den. Vi har testet de mest populære appene — her er dommen.
          </p>
        </div>
      </section>

      {/* INNHOLD */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 py-12 article-content space-y-8">

        {/* INTRO */}
        <div className="bg-amber-50 rounded-2xl p-6 border-l-4 border-amber-500">
          <p className="text-lg text-gray-800 leading-relaxed">
            <span className="text-2xl mr-2">📱</span>
            <strong>Personlig økonomi handler ikke om å være gnier</strong> — det handler om å vite hvor pengene dine faktisk går. En budsjettapp gjør dette synlig på en måte som føles nesten magisk.
          </p>
        </div>

        {/* INFOBOX 50/30/20 */}
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
          <h3 className="font-bold text-amber-800 mb-3 flex items-center gap-2">
            <span className="text-xl">→</span> Den enkle regelen: 50/30/20
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
            <div className="bg-white rounded-lg p-4 text-center">
              <div className="text-2xl font-black text-amber-600 mb-1">50%</div>
              <div className="text-gray-700 text-sm font-semibold">Nødvendigheter</div>
              <div className="text-gray-500 text-xs mt-1">Husleie, mat, strøm, forsikring</div>
            </div>
            <div className="bg-white rounded-lg p-4 text-center">
              <div className="text-2xl font-black text-blue-600 mb-1">30%</div>
              <div className="text-gray-700 text-sm font-semibold">Ønsker</div>
              <div className="text-gray-500 text-xs mt-1">Restaurant, reiser, underholdning</div>
            </div>
            <div className="bg-white rounded-lg p-4 text-center">
              <div className="text-2xl font-black text-green-600 mb-1">20%</div>
              <div className="text-gray-700 text-sm font-semibold">Sparing og avdrag</div>
              <div className="text-gray-500 text-xs mt-1">BSU, fond, nedbetaling</div>
            </div>
          </div>
          <p className="text-gray-600 text-sm mt-4">
            Dette er et enkelt utgangspunkt. Mange synes det fungerer godt å starte her og justere etter egen livssituasjon.
          </p>
        </div>

        {/* OVERSIKT */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <span>🏆</span> De beste budsjettappene i Norge
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Vi har testet appene på funksjonalitet, brukervennlighet, norsk tilpasning og pris. Her er vår vurdering:
          </p>

          {/* SPIFF */}
          <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm mb-4">
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 bg-green-600 rounded-xl flex items-center justify-center text-white text-2xl flex-shrink-0">S</div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="font-bold text-xl text-gray-900">Spiff</h3>
                  <span className="bg-green-100 text-green-700 text-xs font-bold px-2 py-0.5 rounded">Toppvalg</span>
                </div>
                <p className="text-gray-500 text-sm mb-3">spiff.app</p>
                <p className="text-gray-700 text-sm mb-4">
                  Norskutviklet app som har tatt markedet med storm. Spiff leser transaksjonene dine automatisk og kategoriserer dem. Du trenger knapt å gjøre noe selv.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">Norskutviklet</span>
                  <span className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">BankID-pålogging</span>
                  <span className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">Automatisering</span>
                </div>
              </div>
              <div className="text-right">
                <div className="text-green-700 font-black text-2xl">Gratis</div>
                <div className="text-gray-500 text-xs">Grunnversjon</div>
              </div>
            </div>
          </div>

          {/* MONEYPENNY */}
          <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm mb-4">
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 bg-purple-600 rounded-xl flex items-center justify-center text-white text-2xl flex-shrink-0">M</div>
              <div className="flex-1">
                <h3 className="font-bold text-xl text-gray-900 mb-1">Moneypenny</h3>
                <p className="text-gray-500 text-sm mb-3">moneypenny.no</p>
                <p className="text-gray-700 text-sm mb-4">
                  Enkel og grei norsk app som fokuserer på det viktigste: å vise deg hvor mye du kan bruke hver måned. Grei for de som vil ha noe minimalistisk.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">Enkel</span>
                  <span className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">Norsk</span>
                  <span className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">Minimalistisk</span>
                </div>
              </div>
              <div className="text-right">
                <div className="text-gray-700 font-black text-2xl">99 kr</div>
                <div className="text-gray-500 text-xs">per måned</div>
              </div>
            </div>
          </div>

          {/* BUDSJETT.NO */}
          <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm mb-4">
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center text-white text-2xl flex-shrink-0">B</div>
              <div className="flex-1">
                <h3 className="font-bold text-xl text-gray-900 mb-1">Budsjett.no</h3>
                <p className="text-gray-500 text-sm mb-3">budsjett.no</p>
                <p className="text-gray-700 text-sm mb-4">
                  Gratis nettside med maler og verktøy for å sette opp budsjett. Ingen app, men fungerer godt på mobil via nettleser. Flott for de som liker regneark-stilen.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">Gratis</span>
                  <span className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">Nettside</span>
                  <span className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">Regneark-mal</span>
                </div>
              </div>
              <div className="text-right">
                <div className="text-green-700 font-black text-2xl">Gratis</div>
                <div className="text-gray-500 text-xs">100% gratis</div>
              </div>
            </div>
          </div>

          {/* G-SHEETS / MANUAL */}
          <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 bg-gray-600 rounded-xl flex items-center justify-center text-white text-2xl flex-shrink-0">📊</div>
              <div className="flex-1">
                <h3 className="font-bold text-xl text-gray-900 mb-1">Google Sheets / Excel</h3>
                <p className="text-gray-500 text-sm mb-3">Gjør-det-selv</p>
                <p className="text-gray-700 text-sm mb-4">
                  For de som vil ha full kontroll og ikke stoler på apper. Du laster ned transaksjonene fra banken din som CSV og setter opp egne formler. Krever litt innsats, men gir full frihet.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">Gratis</span>
                  <span className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">Full kontroll</span>
                  <span className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">Krever innsats</span>
                </div>
              </div>
              <div className="text-right">
                <div className="text-green-700 font-black text-2xl">Gratis</div>
                <div className="text-gray-500 text-xs">0 kr</div>
              </div>
            </div>
          </div>
        </section>

        {/* TABELL */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <span>📊</span> Sammenligningstabell
          </h2>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse rounded-xl overflow-hidden shadow-sm">
              <thead>
                <tr className="bg-gray-800 text-white">
                  <th className="text-left p-4 font-bold">App</th>
                  <th className="text-left p-4 font-bold">Pris</th>
                  <th className="text-left p-4 font-bold">Norsk</th>
                  <th className="text-left p-4 font-bold">Bank-integrasjon</th>
                  <th className="text-left p-4 font-bold">Budgeting</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white border-b border-gray-100">
                  <td className="p-4 font-semibold">Spiff</td>
                  <td className="p-4 text-green-700 font-bold">Gratis*</td>
                  <td className="p-4 text-center"><span className="text-green-600 font-bold">✓</span></td>
                  <td className="p-4 text-green-600 font-bold">✓✓</td>
                  <td className="p-4">God</td>
                </tr>
                <tr className="bg-gray-50 border-b border-gray-100">
                  <td className="p-4 font-semibold">Moneypenny</td>
                  <td className="p-4 font-bold">99 kr/mnd</td>
                  <td className="p-4 text-center"><span className="text-green-600 font-bold">✓</span></td>
                  <td className="p-4">Bra</td>
                  <td className="p-4">Bra</td>
                </tr>
                <tr className="bg-white border-b border-gray-100">
                  <td className="p-4 font-semibold">Budsjett.no</td>
                  <td className="p-4 text-green-700 font-bold">Gratis</td>
                  <td className="p-4 text-center"><span className="text-green-600 font-bold">✓</span></td>
                  <td className="p-4 text-gray-400">—</td>
                  <td className="p-4">Bra</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="p-4 font-semibold">Google Sheets</td>
                  <td className="p-4 text-green-700 font-bold">Gratis</td>
                  <td className="p-4 text-center">—</td>
                  <td className="p-4 text-gray-400">Manuell</td>
                  <td className="p-4 font-bold text-green-700">Ubegrenset</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-500">*Spiff har også en betalt versjon med flere funksjoner</p>
        </section>

        {/* FORDELER OG ULEMPER */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <span>⚖️</span> Fordeler og ulemper med budsjettapper
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-green-50 rounded-xl p-6 border border-green-200">
              <h3 className="font-bold text-green-800 mb-4 flex items-center gap-2">
                <span>✅</span> Fordeler
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="text-green-600 font-bold mt-0.5">✓</span>
                  <span><strong>Automatisk oversikt</strong> — appene henter transaksjoner for deg</span>
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="text-green-600 font-bold mt-0.5">✓</span>
                  <span><strong>Bedre bevissthet</strong> — du ser hvor pengene faktisk går</span>
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="text-green-600 font-bold mt-0.5">✓</span>
                  <span><strong>Målsetting</strong> — sett sparingmål og følg med på fremgang</span>
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="text-green-600 font-bold mt-0.5">✓</span>
                  <span><strong>Lagre tid</strong> — slipper å gjøre alt manuelt</span>
                </li>
              </ul>
            </div>
            <div className="bg-red-50 rounded-xl p-6 border border-red-200">
              <h3 className="font-bold text-red-800 mb-4 flex items-center gap-2">
                <span>❌</span> Ulemper
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="text-red-600 font-bold mt-0.5">✗</span>
                  <span><strong>Personvern</strong> — du gir appen tilgang til transaksjonene dine</span>
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="text-red-600 font-bold mt-0.5">✗</span>
                  <span><strong>Avhengighet</strong> — hvis appen legges ned, mister du data</span>
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="text-red-600 font-bold mt-0.5">✗</span>
                  <span><strong>Ikke magisk</strong> — du må faktisk bruke appen for at den skal hjelpe</span>
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="text-red-600 font-bold mt-0.5">✗</span>
                  <span><strong>Læringskurve</strong> — noen apper krever tid å sette opp</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* HOOK */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <span>🎯</span> Hvordan velge riktig app for deg?
          </h2>
          <div className="space-y-4">
            <div className="flex items-start gap-4 bg-white rounded-xl p-5 border border-gray-200 shadow-sm">
              <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-2xl flex-shrink-0">🎯</div>
              <div>
                <h3 className="font-bold text-gray-900 mb-1">For den som vil ha minst mulig jobb:</h3>
                <p className="text-gray-600 text-sm"><strong>Spiff</strong> — den leser transaksjonene dine automatisk og kategoriserer alt. Du trenger knapt å gjøre noe. Gratis.</p>
              </div>
            </div>
            <div className="flex items-start gap-4 bg-white rounded-xl p-5 border border-gray-200 shadow-sm">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-2xl flex-shrink-0">🔒</div>
              <div>
                <h3 className="font-bold text-gray-900 mb-1">For den som er skeptisk til apper:</h3>
                <p className="text-gray-600 text-sm"><strong>Google Sheets</strong> — last ned transaksjoner som CSV og bygg ditt eget budsjett. Ingen app, full kontroll, helt gratis.</p>
              </div>
            </div>
            <div className="flex items-start gap-4 bg-white rounded-xl p-5 border border-gray-200 shadow-sm">
              <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center text-2xl flex-shrink-0">🎨</div>
              <div>
                <h3 className="font-bold text-gray-900 mb-1">For den som liker visuell oppfølging:</h3>
                <p className="text-gray-600 text-sm"><strong>Moneypenny</strong> — pen og enkel, med fokus på månedlig forbruk. Betalt, men presisjonen er god.</p>
              </div>
            </div>
          </div>
        </section>

        {/* TIPS */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <span>💡</span> Slik får du mest ut av en budsjettapp
          </h2>
          <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-6 border border-amber-200">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-amber-500 text-white flex items-center justify-center font-bold text-sm flex-shrink-0">1</div>
                <p className="text-gray-700"><strong>Sett av 30 minutter</strong> den første helgen til å sette opp appen ordentlig. Kategorisering tar litt tid i starten, men lønner seg.</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-amber-500 text-white flex items-center justify-center font-bold text-sm flex-shrink-0">2</div>
                <p className="text-gray-700"><strong>Sjekk ukentlig</strong> — etter et par uker vet du hvor pengene dine går. Det er selve poenget.</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-amber-500 text-white flex items-center justify-center font-bold text-sm flex-shrink-0">3</div>
                <p className="text-gray-700"><strong>Sett et konkret månedsmål</strong> — for eksempel "ikke bruke mer enn 8.000 kr på mat denne måneden."</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-amber-500 text-white flex items-center justify-center font-bold text-sm flex-shrink-0">4</div>
                <p className="text-gray-700"><strong>Automatiser sparingen</strong> — sett opp fast månedlig overføring til høyrentekonto rett etter lønning. Du sparer lettere når du "ikke ser" pengene.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl p-8 text-white text-center">
          <h2 className="text-2xl font-black mb-4">Klar til å ta kontroll over forbruket ditt?</h2>
          <p className="text-amber-100 mb-6 max-w-2xl mx-auto">
            En budsjettapp er bare verktøyet — innsatsen er din. Men med rett app på rett måte, kan du spare titusenvis i året.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/budsjett/kom-i-gang-med-budsjett" className="inline-block bg-white text-amber-600 font-bold px-6 py-3 rounded-lg hover:bg-amber-50 transition-colors">
              📊 Kom i gang med budsjett
            </Link>
            <Link href="/sparing/hoyrentekonto" className="inline-block bg-amber-400 text-amber-900 font-bold px-6 py-3 rounded-lg hover:bg-amber-300 transition-colors">
              💰 Sett sparepengene på høyrentekonto
            </Link>
          </div>
        </section>

        {/* RELATERTE ARTIKLER */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">📚 Relaterte artikler</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link href="/budsjett/kom-i-gang-med-budsjett" className="block bg-white rounded-xl p-5 border border-gray-200 hover:border-amber-400 transition-colors group">
              <div className="flex items-center gap-3">
                <span className="text-2xl">📋</span>
                <div>
                  <h3 className="font-bold text-gray-900 group-hover:text-amber-600">Kom i gang med budsjett</h3>
                  <p className="text-gray-500 text-sm">Komplett guide med mal og 50/30/20-regelen</p>
                </div>
              </div>
            </Link>
            <Link href="/sparing/hoyrentekonto" className="block bg-white rounded-xl p-5 border border-gray-200 hover:border-amber-400 transition-colors group">
              <div className="flex items-center gap-3">
                <span className="text-2xl">💰</span>
                <div>
                  <h3 className="font-bold text-gray-900 group-hover:text-amber-600">Høyrentekonto 2026</h3>
                  <p className="text-gray-500 text-sm">Få 5,2% på sparepengene dine</p>
                </div>
              </div>
            </Link>
          </div>
        </section>

        <p className="text-sm text-gray-400 pt-8 border-t">
          Sist oppdatert: 15. april 2026. App-funksjoner og priser kan endres. Sjekk app-leverandørenes nettsider for oppdaterte opplysninger.
        </p>
      </article>
    </>
  )
}