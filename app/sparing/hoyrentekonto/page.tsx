import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Høyrentekonto 2026: Få 5,2% på sparepengene dine',
  description: 'Sammenlign de beste høyrentekontoene i Norge i 2026. Sbanken, Hygga, Nordnet og flere. Slik får du 5%+ avkastning på sparepengene uten risiko.',
}

export default function Hoyrentekonto() {
  return (
    <>
      {/* HERO */}
      <section className="bg-gradient-to-br from-green-600 to-emerald-700 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <nav className="text-green-100 text-sm mb-4">
            <Link href="/">Hjem</Link>
            <span className="mx-2">/</span>
            <Link href="/sparing">Sparing</Link>
            <span className="mx-2">/</span>
            <span>Høyrentekonto</span>
          </nav>
          <h1 className="text-3xl md:text-5xl font-black mb-4">
            Høyrentekonto 2026: Få 5,2% på sparepengene dine
          </h1>
          <p className="text-green-100 text-xl max-w-2xl">
            Svært få nordmenn bruker høyrentekonto. Det er synd — forskjellen mellom 0% og 5% rente på 100.000 kroner er 5.000 kroner i året.
          </p>
        </div>
      </section>

      {/* INNHOLD */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 py-12 article-content space-y-8">

        {/* INTRO */}
        <div className="bg-green-50 rounded-2xl p-6 border-l-4 border-green-600">
          <p className="text-lg text-gray-800 leading-relaxed">
            <span className="text-2xl mr-2">💸</span>
            <strong>Høyrentekonto</strong> er rett og slett en sparekonto med bedre rente enn det du får på den vanlige brukskontoen din. I 2026 kan du få over 5% rente — rett og slett gratis avkastning uten noen risiko.
          </p>
        </div>

        {/* INFOBOX */}
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
          <h3 className="font-bold text-amber-800 mb-3 flex items-center gap-2">
            <span className="text-xl">→</span> Visste du?
          </h3>
          <p className="text-gray-800 text-lg">
            <strong>100.000 kr på en vanlig brukskonto med 0% rente</strong> taper rundt <span className="text-amber-700 font-black text-xl">4.000 kr</span> i året i reell verdi — bare på grunn av inflasjon. Pengene dine blir stadig mindre verdt.
          </p>
        </div>

        {/* HVA ER HØYRENTEKONTO */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <span>📖</span> Hva er en høyrentekonto — og hvorfor bry seg?
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            En høyrentekonto er rett og slett en sparekonto der banken tilbyr deg bedre rente. Forskjellen mot en vanlig sparekonto kan være enorm: der en vanlig sparekonto kanskje gir 1-2%, kan du på en høyrentekonto få 4-5% i 2026.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Konseptet er enkelt: banker som bare driver digitalt (ingen dyre filialer) har lavere kostnader og kan dele mer av overskuddet med deg gjennom høyere renter.
          </p>

          {/* TABELL */}
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse rounded-xl overflow-hidden shadow-sm">
              <thead>
                <tr className="bg-green-600 text-white">
                  <th className="text-left p-4 font-bold">Bank</th>
                  <th className="text-left p-4 font-bold">Rente (april 2026)</th>
                  <th className="text-left p-4 font-bold">Type</th>
                  <th className="text-left p-4 font-bold">Innskuddsgaranti</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white border-b border-gray-100">
                  <td className="p-4 font-semibold">Sbanken</td>
                  <td className="p-4 text-green-700 font-black text-lg">5,20%</td>
                  <td className="p-4 text-sm text-gray-600">Ren digital bank</td>
                  <td className="p-4 text-sm text-gray-600">✓ 100.000 €</td>
                </tr>
                <tr className="bg-green-50 border-b border-gray-100">
                  <td className="p-4 font-semibold">Hygga</td>
                  <td className="p-4 text-green-700 font-black text-lg">5,10%</td>
                  <td className="p-4 text-sm text-gray-600">Digital, norsk</td>
                  <td className="p-4 text-sm text-gray-600">✓ 100.000 €</td>
                </tr>
                <tr className="bg-white border-b border-gray-100">
                  <td className="p-4 font-semibold">Nordnet</td>
                  <td className="p-4 text-green-700 font-black text-lg">4,95%</td>
                  <td className="p-4 text-sm text-gray-600">Investeringsplattform</td>
                  <td className="p-4 text-sm text-gray-600">✓ 100.000 €</td>
                </tr>
                <tr className="bg-green-50 border-b border-gray-100">
                  <td className="p-4 font-semibold">Milk Money (MB)</td>
                  <td className="p-4 text-green-700 font-black text-lg">4,85%</td>
                  <td className="p-4 text-sm text-gray-600">Digital sparekonto</td>
                  <td className="p-4 text-sm text-gray-600">✓ 100.000 €</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-gray-100 rounded-xl p-4 text-sm text-gray-600">
            <strong>Merk:</strong> Rentene er flytende og kan endres. Sjekk bankens nettsider for oppdaterte tall. Alle kontoer er dekket av norsk innskuddsgaranti (100.000 euro per person per bank).
          </div>
        </section>

        {/* HVORFOR HØYERE RENTE */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <span>🏦</span> Hvorfor kan noen banker tilby så høy rente?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="bg-white rounded-xl p-5 border border-gray-200">
              <div className="text-3xl mb-3">💻</div>
              <h3 className="font-bold text-gray-900 mb-2">Ingen filialer</h3>
              <p className="text-gray-600 text-sm">Digitale banker har ikke kostnader til lokaler, ansatte i fysiske banker og annet. De sparer, og deler besparelsen med deg.</p>
            </div>
            <div className="bg-white rounded-xl p-5 border border-gray-200">
              <div className="text-3xl mb-3">📱</div>
              <h3 className="font-bold text-gray-900 mb-2">Kun app og nettside</h3>
              <p className="text-gray-600 text-sm">Alt skjer digitalt. Du har tilgang til kontoen din 24/7, og kan overføre penger umiddelbart når du trenger det.</p>
            </div>
            <div className="bg-white rounded-xl p-5 border border-gray-200">
              <div className="text-3xl mb-3">📈</div>
              <h3 className="font-bold text-gray-900 mb-2">Konkurranse om kundene</h3>
              <p className="text-gray-600 text-sm">Bankene kjemper om sparingen din. Høy rente er et markedsmessig verktøy for å tiltrekke seg nye kunder.</p>
            </div>
          </div>
          <p className="text-gray-700 leading-relaxed">
            En vanlig norsk storbank som DnB eller Nordea har mange tusen ansatte og dyre kontorer over hele landet. De trenger ikke å tilby høy rente fordi kundene likevel har sin lønnskonto der. Digitale banker har ingen slik fordel — så de må konkurrere på pris.
          </p>
        </section>

        {/* TRYGT ELLER IKKE */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <span>🔒</span> Er det trygt? Ja — og her er hvorfor
          </h2>
          <div className="bg-gradient-to-br from-green-600 to-emerald-700 rounded-2xl p-6 text-white mb-6">
            <h3 className="font-bold text-green-100 mb-4 uppercase text-sm tracking-wide">Innskuddsgaranti i Norge</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <div className="text-4xl font-black mb-2">100.000 €</div>
                <div className="text-green-100">per person per bank</div>
              </div>
              <div>
                <div className="text-4xl font-black mb-2">Statlig</div>
                <div className="text-green-100">Bankenes Sikringsfond</div>
              </div>
            </div>
          </div>
          <p className="text-gray-700 leading-relaxed mb-4">
            Alle banker som opererer i Norge er med i <strong>Bankenes Sikringsfond</strong>. Det betyr at hvis noe går galt — banken går konkurs — får du tilbake pengene dine opp til 100.000 euro.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            For de aller fleste sparere er ikke dette noe du trenger å bekymre deg for. Men det er godt å vite at staten har din rygg.
          </p>

          <div className="bg-green-50 rounded-xl p-5 border border-green-200">
            <h3 className="font-bold text-green-800 mb-3 flex items-center gap-2">
              <span>✅</span> Høyrentekonto = trygt + høy avkastning
            </h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-green-600 font-bold mt-0.5">✓</span>
                <span>Ingen aksjemarkedrisiko — pengene er der alltid</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 font-bold mt-0.5">✓</span>
                <span>Ingen bindingstid — du kan ta ut pengene når som helst</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 font-bold mt-0.5">✓</span>
                <span>Statlig garanti på innskudd</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 font-bold mt-0.5">✓</span>
                <span>Renteinntekter beskattes (formueskat på innskudd)</span>
              </li>
            </ul>
          </div>
        </section>

        {/* REGNEKSTYKKE */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <span>🧮</span> Regnestykket: Høyrentekonto vs. brukskonto
          </h2>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse rounded-xl overflow-hidden shadow-sm">
              <thead>
                <tr className="bg-gray-800 text-white">
                  <th className="text-left p-4 font-bold">Beløp</th>
                  <th className="text-left p-4 font-bold bg-green-600">Høyrentekonto (5%)</th>
                  <th className="text-left p-4 font-bold">Brukskonto (0%)</th>
                  <th className="text-left p-4 font-bold">Differanse</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white border-b border-gray-100">
                  <td className="p-4 font-semibold">50.000 kr</td>
                  <td className="p-4 bg-green-50 text-green-700 font-bold">+ 2.500 kr/år</td>
                  <td className="p-4 text-gray-500">+ 0 kr</td>
                  <td className="p-4 font-bold text-green-700">+ 2.500 kr</td>
                </tr>
                <tr className="bg-gray-50 border-b border-gray-100">
                  <td className="p-4 font-semibold">100.000 kr</td>
                  <td className="p-4 bg-green-50 text-green-700 font-bold">+ 5.000 kr/år</td>
                  <td className="p-4 text-gray-500">+ 0 kr</td>
                  <td className="p-4 font-bold text-green-700">+ 5.000 kr</td>
                </tr>
                <tr className="bg-white border-b border-gray-100">
                  <td className="p-4 font-semibold">250.000 kr</td>
                  <td className="p-4 bg-green-50 text-green-700 font-bold">+ 12.500 kr/år</td>
                  <td className="p-4 text-gray-500">+ 0 kr</td>
                  <td className="p-4 font-bold text-green-700">+ 12.500 kr</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="p-4 font-semibold">500.000 kr</td>
                  <td className="p-4 bg-green-50 text-green-700 font-bold">+ 25.000 kr/år</td>
                  <td className="p-4 text-gray-500">+ 0 kr</td>
                  <td className="p-4 font-bold text-green-700">+ 25.000 kr</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 text-white">
            <h3 className="font-bold text-green-400 mb-3 flex items-center gap-2">
              <span>💡</span> Etter 10 år med 100.000 kr på høyrentekonto:
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="text-center p-4 bg-green-600/20 rounded-lg">
                <div className="text-3xl font-black text-green-400">162.889 kr</div>
                <div className="text-sm text-gray-300 mt-1">Med 5% rente ( årlig kapitalisering )</div>
              </div>
              <div className="text-center p-4 bg-gray-700/50 rounded-lg">
                <div className="text-3xl font-black text-gray-400">100.000 kr</div>
                <div className="text-sm text-gray-400 mt-1">På brukskonto med 0%</div>
              </div>
            </div>
            <p className="text-center text-green-400 font-bold mt-4">
              + 62.889 kr bare på renteinntekter — uten å løfte en finger
            </p>
          </div>
        </section>

        {/* INFLASJON */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <span>📉</span> Det skjulte problemet: inflasjon
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Norges Bank holder inflasjonen rundt 2-3% på lang sikt. Det betyr at 100.000 kroner i dag kun er verdt rundt 97.000 kroner om et år — fordi prisene stiger.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            En høyrentekonto på 5% beskytter ikke bare pengene dine — den <strong>øker</strong> faktisk kjøpekraften din i reelle termer (inflasjon justert).
          </p>

          <div className="bg-red-50 rounded-xl p-5 border border-red-200">
            <h3 className="font-bold text-red-800 mb-3 flex items-center gap-2">
              <span>⚠️</span> Regnestykket som bør bekymre deg
            </h3>
            <div className="space-y-2 text-gray-700">
              <div className="flex justify-between py-2 border-b border-red-100">
                <span>Penger på brukskonto:</span>
                <span className="font-bold text-gray-900">100.000 kr</span>
              </div>
              <div className="flex justify-between py-2 border-b border-red-100">
                <span>Inflasjon (3%):</span>
                <span className="font-bold text-red-700">- 3.000 kr i verdi</span>
              </div>
              <div className="flex justify-between py-2 border-b border-red-100">
                <span>Renteinntekt (0%):</span>
                <span className="font-bold">+ 0 kr</span>
              </div>
              <div className="flex justify-between py-2 bg-red-100 rounded-lg px-3 py-2">
                <span className="font-bold text-red-800">Reell verdi etter 1 år:</span>
                <span className="font-black text-red-800 text-lg">~97.000 kr</span>
              </div>
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
              <div className="w-10 h-10 rounded-full bg-green-600 text-white flex items-center justify-center font-bold text-lg flex-shrink-0">1</div>
              <div>
                <h3 className="font-bold text-gray-900 mb-1">Velg en høyrentekonto</h3>
                <p className="text-gray-600 text-sm">Sammenlign bankene i tabellen over. Sbanken og Hygga topper listen i april 2026. Velg den som passer deg best.</p>
              </div>
            </div>
            <div className="flex items-start gap-4 bg-white rounded-xl p-5 border border-gray-200 shadow-sm">
              <div className="w-10 h-10 rounded-full bg-green-600 text-white flex items-center justify-center font-bold text-lg flex-shrink-0">2</div>
              <div>
                <h3 className="font-bold text-gray-900 mb-1">Åpne konto digitalt</h3>
                <p className="text-gray-600 text-sm">De fleste digitale banker lar deg åpne konto direkte i app eller på nettsiden. Du trenger BankID og en norsk folkeregistrert adresse.</p>
              </div>
            </div>
            <div className="flex items-start gap-4 bg-white rounded-xl p-5 border border-gray-200 shadow-sm">
              <div className="w-10 h-10 rounded-full bg-green-600 text-white flex items-center justify-center font-bold text-lg flex-shrink-0">3</div>
              <div>
                <h3 className="font-bold text-gray-900 mb-1">Overfør sparepengene dine</h3>
                <p className="text-gray-600 text-sm">Flytt pengene du vil spare fra din vanlige bank til den nye høyrentekontoen. BankID gjør dette kjapt og sikkert.</p>
              </div>
            </div>
            <div className="flex items-start gap-4 bg-white rounded-xl p-5 border border-gray-200 shadow-sm">
              <div className="w-10 h-10 rounded-full bg-green-600 text-white flex items-center justify-center font-bold text-lg flex-shrink-0">4</div>
              <div>
                <h3 className="font-bold text-gray-900 mb-1">Sett opp spareavtale</h3>
                <p className="text-gray-600 text-sm">Mange banker tilbyr muligheten til å sette opp en fast månedlig overføring. På den måten bygger du sparingen din automatisk.</p>
              </div>
            </div>
          </div>
        </section>

        {/* VANLIGE SPØRSMÅL */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <span>❓</span> Vanlige spørsmål
          </h2>
          <div className="space-y-4">
            <div className="bg-white rounded-xl p-5 border border-gray-200">
              <h3 className="font-bold text-gray-900 mb-2">Må jeg betale skatt på renteinntekter?</h3>
              <p className="text-gray-600 text-sm">Ja, renteinntekter er skattepliktig. For 2026 er skattesatsen på renteinntekter 25%. Men med 5% rente på 100.000 kr gir dette 5.000 kr i brutto rente, hvorav du betaler 1.250 kr i skatt — altså fortsatt 3.750 kr netto. Langt bedre enn 0 kr på brukskonto.</p>
            </div>
            <div className="bg-white rounded-xl p-5 border border-gray-200">
              <h3 className="font-bold text-gray-900 mb-2">Kan jeg ta ut pengene når jeg vil?</h3>
              <p className="text-gray-600 text-sm">Ja, de fleste høyrentekontoer har ingen bindingstid. Pengene er dine å flytte når som helst. Enkelte banker kan ha litt ventetid på uttak (1-2 dager), men ingen reell binding.</p>
            </div>
            <div className="bg-white rounded-xl p-5 border border-gray-200">
              <h3 className="font-bold text-gray-900 mb-2">Er høyrentekonto bedre enn fond?</h3>
              <p className="text-gray-600 text-sm">Det avhenger av tidshorisonten din. Høyrentekonto gir garantert avkastning med null risiko. Fond kan gi høyere avkastning over tid, men du kan tape penger. For kortsiktig sparing (under 2-3 år) er høyrentekonto det beste valget.</p>
            </div>
            <div className="bg-white rounded-xl p-5 border border-gray-200">
              <h3 className="font-bold text-gray-900 mb-2">Hva med formuesskatt på innskudd?</h3>
              <p className="text-gray-600 text-sm">Formuesskatt på bankinnskudd er en spesiell norsk skatt som legges på innskudd over 1.700.000 kr (2026). For de fleste sparere er ikke dette relevant. Sjekk med din situasjon hvis du har veldig store innskudd.</p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-br from-green-600 to-emerald-700 rounded-2xl p-8 text-white text-center">
          <h2 className="text-2xl font-black mb-4">Klar til å la pengene jobbe for deg?</h2>
          <p className="text-green-100 mb-6 max-w-2xl mx-auto">
            En høyrentekonto tar 15 minutter å sette opp og kan gi deg tusenvis av kroner mer i året — helt uten risiko.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/sparing/beste-sparekonto-2026" className="inline-block bg-white text-green-700 font-bold px-6 py-3 rounded-lg hover:bg-green-50 transition-colors">
              📊 Sammenlign alle sparekontoer
            </Link>
            <Link href="/sparing" className="inline-block bg-green-500 text-white font-bold px-6 py-3 rounded-lg hover:bg-green-400 transition-colors border border-green-400">
              📚 Flere spareguider
            </Link>
          </div>
        </section>

        {/* RELATERTE ARTIKLER */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">📚 Relaterte artikler</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link href="/sparing/indeksfond-nybegynnere" className="block bg-white rounded-xl p-5 border border-gray-200 hover:border-green-400 transition-colors group">
              <div className="flex items-center gap-3">
                <span className="text-2xl">📈</span>
                <div>
                  <h3 className="font-bold text-gray-900 group-hover:text-green-700">Indeksfond for nybegynnere</h3>
                  <p className="text-gray-500 text-sm">Lær hvordan fond kan gi deg høyere avkastning over tid</p>
                </div>
              </div>
            </Link>
            <Link href="/sparing/bsu-guide" className="block bg-white rounded-xl p-5 border border-gray-200 hover:border-green-400 transition-colors group">
              <div className="flex items-center gap-3">
                <span className="text-2xl">🏠</span>
                <div>
                  <h3 className="font-bold text-gray-900 group-hover:text-green-700">BSU 2026: Full guide</h3>
                  <p className="text-gray-500 text-sm">Norges beste spareform for unge under 34 år</p>
                </div>
              </div>
            </Link>
          </div>
        </section>

        <p className="text-sm text-gray-400 pt-8 border-t">
          Sist oppdatert: 15. april 2026. Rentene er veiledende og kan endres. Sjekk bankens nettsider for oppdaterte vilkår.
        </p>
      </article>
    </>
  )
}