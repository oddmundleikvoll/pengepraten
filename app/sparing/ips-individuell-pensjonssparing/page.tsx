import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'IPS 2026: Alt du trenger å vite om Individuell Pensjonssparing',
  description: 'IPS (Individuell Pensjonssparing) gir deg skattefradrag + fond-avkastning. Lær alt om hvordan det fungerer, hvem det passer for, og hvordan du kommer i gang.',
}

export default function IPSGuide() {
  return (
    <>
      {/* HERO */}
      <section className="bg-gradient-to-br from-indigo-700 to-purple-800 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <nav className="text-indigo-200 text-sm mb-4">
            <Link href="/">Hjem</Link>
            <span className="mx-2">/</span>
            <Link href="/sparing">Sparing</Link>
            <span className="mx-2">/</span>
            <span>IPS</span>
          </nav>
          <h1 className="text-3xl md:text-5xl font-black mb-4">
            IPS 2026: Alt du trenger å vite om Individuell Pensjonssparing
          </h1>
          <p className="text-indigo-200 text-xl max-w-2xl">
            IPS er en av Norges mest underspilte spareformer. Med skattefradrag pluss fond-avkastning kan du få 26-40% av pengene tilbake fra staten — før du tjener en eneste krone.
          </p>
        </div>
      </section>

      {/* INNHOLD */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 py-12 article-content space-y-8">

        {/* INTRO */}
        <div className="bg-indigo-50 rounded-2xl p-6 border-l-4 border-indigo-600">
          <p className="text-lg text-gray-800 leading-relaxed">
            <span className="text-2xl mr-2">🎯</span>
            <strong>IPS</strong> (Individuell Pensjonssparing) er en spareordning der du får <strong>skattefradrag</strong> for pengene du setter inn. Det er som BSU for voksne — staten gir deg penger tilbake bare for å spare.
          </p>
        </div>

        {/* INFOBOX */}
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
          <h3 className="font-bold text-amber-800 mb-3 flex items-center gap-2">
            <span className="text-xl">→</span> Visste du?
          </h3>
          <p className="text-gray-800 text-lg">
            Spar <strong>2.000 kr/måned</strong> i IPS og få <strong>26-40% avkastning</strong> bare i skattefradrag. Det betyr at staten gir deg 6.000-9.600 kroner i året tilbake — før fondet ditt har vokst en eneste krone.
          </p>
        </div>

        {/* HVORDAN DET FUNGERER */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <span>📖</span> Hvordan fungerer IPS? Enkelt forklart
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            IPS fungerer slik: du setter inn penger på en IPS-konto (eller fondsparingskonto med IPS-status), og hvert innskudd gir deg <strong>26% skattefradrag</strong> (inntektsavhengig, se forklaring under).
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Pengene kan plasseres i fond — aksjefond, indeksfond, obligasjonsfond — akkurat som med vanlig fondsparing. Men i motsetning til vanlig sparing, trekkes skattefradraget fra skatten din.
          </p>

          <div className="bg-gradient-to-br from-indigo-600 to-purple-700 rounded-2xl p-6 text-white mb-6">
            <h3 className="font-bold text-indigo-200 mb-4 uppercase text-sm tracking-wide">Skattesystemet i IPS</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="text-center">
                <div className="text-3xl font-black mb-1">26%</div>
                <div className="text-indigo-200 text-sm">Grunnfradrag (skatt 22%)</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-black mb-1">28%</div>
                <div className="text-indigo-200 text-sm">Mellomtrinn (skatt 22%)</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-black mb-1">40%</div>
                <div className="text-indigo-200 text-sm">Øvre trinn (skatt 22%)</div>
              </div>
            </div>
            <p className="text-indigo-200 text-sm mt-4 text-center">
              Fradragene avhenger av inntekten din. Høy inntekt = høyere fradragssats.
            </p>
          </div>

          <p className="text-gray-700 leading-relaxed">
            Det geniale er at dette fradraget kommer <strong>i tillegg til</strong> fondavkastningen. Du får altså både skattefordel og markedsavkastning. Over 20-30 år kan dette utgjøre hundredtusenervis av kroner.
          </p>
        </section>

        {/* SKATTEFRADRAG */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <span>💰</span> Skattefradraget — regnestykket
          </h2>
          <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm mb-6">
            <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
              <span>🧮</span> Eksempel: Du sparer 2.000 kr/måned i IPS
            </h3>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between items-center py-2 border-b border-gray-100">
                <span className="text-gray-700">Årlig innskudd:</span>
                <span className="font-bold text-gray-900">24.000 kr</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-gray-100">
                <span className="text-gray-700">Skattefradrag (26-40%):</span>
                <span className="font-bold text-indigo-700">+ 6.240 - 9.600 kr</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-gray-100">
                <span className="text-gray-700">Fondavkastning (~7%):</span>
                <span className="font-bold text-green-700">+ ~7.000 kr ( år 1 )</span>
              </div>
              <div className="flex justify-between items-center py-2 bg-indigo-50 rounded-lg px-3 py-3">
                <span className="font-bold text-indigo-800">Din reelle kostnad etter skatt:</span>
                <span className="font-black text-indigo-800 text-lg">~8.400-13.200 kr</span>
              </div>
            </div>
          </div>

          <div className="bg-amber-50 rounded-xl p-5 border border-amber-200">
            <h3 className="font-bold text-amber-800 mb-2 flex items-center gap-2">
              <span>⚠️</span> Viktig: Skattefradraget er ikke gratis penger
            </h3>
            <p className="text-gray-700 text-sm">
              Skattefradraget reduserer skatten din — det betyr at du må ha en viss inntekt for at det skal lønne seg. Har du lite eller ingen inntekt, er IPS ikke like gunstig. BSU er bedre for unge med lav inntekt.
            </p>
          </div>
        </section>

        {/* HVEM PASSER DET FOR */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <span>👤</span> Hvem passer IPS for?
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            IPS er ikke for alle. Her er en enkel sjekkliste:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="bg-white rounded-xl p-5 border-2 border-green-200">
              <h3 className="font-bold text-green-800 mb-3 flex items-center gap-2">
                <span>✅</span> IPS passer for deg hvis:
              </h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold mt-0.5">✓</span>
                  <span>Du er over 18 år</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold mt-0.5">✓</span>
                  <span>Du har inntekt over 50.000 kr/år</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold mt-0.5">✓</span>
                  <span>Du har minst 5-10 år til pensjon</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold mt-0.5">✓</span>
                  <span>Du vil ha mer enn vanlig sparing</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold mt-0.5">✓</span>
                  <span>Du har fylt BSU-kvoten (27.500 kr)</span>
                </li>
              </ul>
            </div>
            <div className="bg-white rounded-xl p-5 border-2 border-red-200">
              <h3 className="font-bold text-red-800 mb-3 flex items-center gap-2">
                <span>❌</span> IPS passer ikke for deg hvis:
              </h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-red-600 font-bold mt-0.5">✗</span>
                  <span>Du er under 34 og kan spare i BSU (bedre)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 font-bold mt-0.5">✗</span>
                  <span>Du trenger pengene de nærmeste 5-10 årene</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 font-bold mt-0.5">✗</span>
                  <span>Du har svært lav inntekt (lite skattefordel)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 font-bold mt-0.5">✗</span>
                  <span>Du liker ikke å ha pengene bundet</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* IPS VS BSU VS VANLIG */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <span>⚖️</span> IPS vs. BSU vs. vanlig sparekonto — sammenligning
          </h2>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse rounded-xl overflow-hidden shadow-sm">
              <thead>
                <tr className="bg-gray-800 text-white">
                  <th className="text-left p-4 font-bold">Parameter</th>
                  <th className="text-left p-4 font-bold bg-indigo-600">IPS</th>
                  <th className="text-left p-4 font-bold bg-green-600">BSU</th>
                  <th className="text-left p-4 font-bold">Vanlig sparekonto</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white border-b border-gray-100">
                  <td className="p-4 font-semibold">Skattefradrag</td>
                  <td className="p-4 bg-indigo-50 font-bold text-indigo-700">26-40%</td>
                  <td className="p-4 bg-green-50 font-bold text-green-700">26% (10%)</td>
                  <td className="p-4 text-gray-500">Ingen</td>
                </tr>
                <tr className="bg-gray-50 border-b border-gray-100">
                  <td className="p-4 font-semibold">Maksimalt per år</td>
                  <td className="p-4 bg-indigo-50 font-semibold">40.000 kr</td>
                  <td className="p-4 bg-green-50 font-semibold">27.500 kr</td>
                  <td className="p-4">Ubegrenset</td>
                </tr>
                <tr className="bg-white border-b border-gray-100">
                  <td className="p-4 font-semibold">Investering i fond</td>
                  <td className="p-4 bg-indigo-50 text-indigo-700 font-bold">✓ Ja</td>
                  <td className="p-4 bg-green-50">Kun sparekonto</td>
                  <td className="p-4">Kun konto</td>
                </tr>
                <tr className="bg-gray-50 border-b border-gray-100">
                  <td className="p-4 font-semibold">Tilgjengelig fra</td>
                  <td className="p-4 bg-indigo-50">62-67 år (innestengt)</td>
                  <td className="p-4 bg-green-50">Ved boligkjøp</td>
                  <td className="p-4">Når som helst</td>
                </tr>
                <tr className="bg-white border-b border-gray-100">
                  <td className="p-4 font-semibold">Alderbegrensning</td>
                  <td className="p-4 bg-indigo-50">Ingen (men bundet)</td>
                  <td className="p-4 bg-green-50">Ja (under 34)</td>
                  <td className="p-4">Ingen</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="p-4 font-semibold">Passer for</td>
                  <td className="p-4 bg-indigo-50 text-sm">De over 34 som vil pensjonere seg tidlig</td>
                  <td className="p-4 bg-green-50 text-sm">Unge under 34 som skal kjøpe bolig</td>
                  <td className="p-4 text-sm">Alle som vil ha fleksibilitet</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-purple-50 rounded-xl p-5 border border-purple-200">
            <h3 className="font-bold text-purple-800 mb-2 flex items-center gap-2">
              <span>💡</span> Anbefalt strategi
            </h3>
            <p className="text-gray-700 text-sm">
              <strong>Fyll BSU først</strong> (hvis du er under 34), deretter <strong>vurder IPS</strong> hvis du har mer å spare. BSU har lavere maxibeløp, men ingen bindingstid når du først bruker det til bolig.
            </p>
          </div>
        </section>

        {/* ADVARSEL */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <span>⚠️</span> Den store advarselen: Innestengingsperioden
          </h2>
          <div className="bg-red-50 rounded-xl p-5 border border-red-200 mb-4">
            <h3 className="font-bold text-red-800 mb-3 flex items-center gap-2">
              <span>🔒</span> Pengene er bundet til du er 62-67 år
            </h3>
            <p className="text-gray-700 text-sm mb-3">
              IPS-pengene kan du ikke ta ut før du når <strong>62-67 års alderen</strong>. Dette er en lang tidshorisont — du må være komfortabel med at pengene er innelåst.
            </p>
            <p className="text-gray-700 text-sm">
              <strong>Konsekvensen:</strong> Hvis du setter inn 200.000 kr i IPS og deretter trenger pengene til noe annet, får du ikke tilgang til dem. Det er ingen vei ut — med mindre du vil betale straffeskatt.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white rounded-xl p-5 border border-gray-200">
              <h3 className="font-bold text-gray-900 mb-2">❌ Hvis du tar ut for tidlig:</h3>
              <ul className="space-y-1 text-gray-600 text-sm">
                <li>• 30% reduksjon av fondverdi som straff</li>
                <li>• Skatt på tapet (ikke fradrag på gevinst)</li>
                <li>• Du mister skattefradragene</li>
              </ul>
            </div>
            <div className="bg-green-50 rounded-xl p-5 border border-green-200">
              <h3 className="font-bold text-green-800 mb-2">✓ Slik unngår du problemet:</h3>
              <ul className="space-y-1 text-gray-700 text-sm">
                <li>• Bare sett inn det du virkelig kan unvære</li>
                <li>• Ha 3-6 måneders buffer på vanlig konto</li>
                <li>• Ikke sett inn mer enn 10-20% av sparekapasiteten</li>
              </ul>
            </div>
          </div>
        </section>

        {/* HVA KAN DU SPARE I */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <span>📊</span> Hva kan du spare i? Fondene du bør kjenne til
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            IPS fungerer som en beholder — inni den kan du velge fond. Her er de mest populære for IPS-sparere i Norge:
          </p>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse rounded-xl overflow-hidden shadow-sm">
              <thead>
                <tr className="bg-indigo-600 text-white">
                  <th className="text-left p-4 font-bold">Fond</th>
                  <th className="text-left p-4 font-bold">Type</th>
                  <th className="text-left p-4 font-bold">Kostnad</th>
                  <th className="text-left p-4 font-bold">Passer for</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white border-b border-gray-100">
                  <td className="p-4 font-semibold">KLP Aksjfond Global</td>
                  <td className="p-4 text-gray-600">Global indeks</td>
                  <td className="p-4 text-indigo-700 font-bold">0,20%</td>
                  <td className="p-4 text-sm text-gray-600">Lang tidshorisont</td>
                </tr>
                <tr className="bg-indigo-50 border-b border-gray-100">
                  <td className="p-4 font-semibold">DNB Global Indeks</td>
                  <td className="p-4 text-gray-600">Global indeks</td>
                  <td className="p-4 text-indigo-700 font-bold">0,25%</td>
                  <td className="p-4 text-sm text-gray-600">Lav kostnad</td>
                </tr>
                <tr className="bg-white border-b border-gray-100">
                  <td className="p-4 font-semibold"> Alfred Berg Index 100</td>
                  <td className="p-4 text-gray-600">100% aksje</td>
                  <td className="p-4 text-indigo-700 font-bold">0,30%</td>
                  <td className="p-4 text-sm text-gray-600">Agressive sparere</td>
                </tr>
                <tr className="bg-indigo-50">
                  <td className="p-4 font-semibold">KLP Obligasjonsfond</td>
                  <td className="p-4 text-gray-600">Obligasjoner</td>
                  <td className="p-4 text-indigo-700 font-bold">0,15%</td>
                  <td className="p-4 text-sm text-gray-600">Nærmere pensjon</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-500">
            Merk: Du kan bytte fond inne i IPS uten skattemessige konsekvenser. Velg aggressive fond tidlig, defensive fond nærmere pensjon.
          </p>
        </section>

        {/* REGNEKSTYKKE */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <span>🧮</span> Langsiktig eksempel: 20 års IPS-sparing
          </h2>
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 text-white mb-6">
            <h3 className="font-bold text-indigo-400 mb-4">10.000 kr/måned i IPSfond over 20 år</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between py-2 border-b border-gray-700">
                <span className="text-gray-300">Ditt totale innskudd:</span>
                <span className="font-semibold">2.400.000 kr</span>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-700">
                <span className="text-gray-300">Skattefradrag mottatt (30% snitt):</span>
                <span className="font-bold text-green-400">+ 720.000 kr</span>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-700">
                <span className="text-gray-300">Fondavkastning (~7%):</span>
                <span className="font-bold text-green-400">+ ~1.900.000 kr</span>
              </div>
              <div className="flex justify-between py-2 font-bold bg-green-600/20 rounded px-3 py-3">
                <span className="text-green-400">Total verdi ved pensjon:</span>
                <span className="font-black text-green-400 text-lg">~5.000.000 kr</span>
              </div>
            </div>
          </div>
          <div className="bg-amber-50 rounded-xl p-5 border border-amber-200">
            <p className="text-gray-700 text-sm">
              <strong>Poenget:</strong> Du satt inn 2.400.000 kr og fikk 720.000 kr tilbake i skattefradrag. I tillegg vokste fondet til 5 millioner. Det er mer enn dobling av det du selv investerte.
            </p>
          </div>
        </section>

        {/* HVORDAN KOMME I GANG */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <span>🚀</span> Slik kommer du i gang med IPS
          </h2>
          <div className="space-y-4">
            <div className="flex items-start gap-4 bg-white rounded-xl p-5 border border-gray-200 shadow-sm">
              <div className="w-10 h-10 rounded-full bg-indigo-600 text-white flex items-center justify-center font-bold text-lg flex-shrink-0">1</div>
              <div>
                <h3 className="font-bold text-gray-900 mb-1">Sjekk om du har fylt BSU-kvoten</h3>
                <p className="text-gray-600 text-sm">Er du under 34? Fyll BSU først — det er bedre enn IPS for unge.</p>
              </div>
            </div>
            <div className="flex items-start gap-4 bg-white rounded-xl p-5 border border-gray-200 shadow-sm">
              <div className="w-10 h-10 rounded-full bg-indigo-600 text-white flex items-center justify-center font-bold text-lg flex-shrink-0">2</div>
              <div>
                <h3 className="font-bold text-gray-900 mb-1">Velg en IPS-leverandør</h3>
                <p className="text-gray-600 text-sm">KLP, DNB, Nordea og flere tilbyr IPS. Sjekk gebyrer og fondutvalg. Noen tilbyr IPS direkte, andre via fondsparing.</p>
              </div>
            </div>
            <div className="flex items-start gap-4 bg-white rounded-xl p-5 border border-gray-200 shadow-sm">
              <div className="w-10 h-10 rounded-full bg-indigo-600 text-white flex items-center justify-center font-bold text-lg flex-shrink-0">3</div>
              <div>
                <h3 className="font-bold text-gray-900 mb-1">Velg fond</h3>
                <p className="text-gray-600 text-sm">For langsiktig sparing anbefales et globalt indeksfond (som KLP Aksjfond Global). Start aggressivt, flytt til mer defensive fond de siste 5-10 årene før pensjon.</p>
              </div>
            </div>
            <div className="flex items-start gap-4 bg-white rounded-xl p-5 border border-gray-200 shadow-sm">
              <div className="w-10 h-10 rounded-full bg-indigo-600 text-white flex items-center justify-center font-bold text-lg flex-shrink-0">4</div>
              <div>
                <h3 className="font-bold text-gray-900 mb-1">Sett opp månedlig sparing</h3>
                <p className="text-gray-600 text-sm">Start med et beløp du er komfortabel med. 1.000-2.000 kr/måned er et fint utgangspunkt. Automatiser det.</p>
              </div>
            </div>
            <div className="flex items-start gap-4 bg-white rounded-xl p-5 border border-gray-200 shadow-sm">
              <div className="w-10 h-10 rounded-full bg-indigo-600 text-white flex items-center justify-center font-bold text-lg flex-shrink-0">5</div>
              <div>
                <h3 className="font-bold text-gray-900 mb-1">Glem det i 20-30 år</h3>
                <p className="text-gray-600 text-sm">IPS krever tålmodighet. Pengene er bundet, så jo lengre tidshorisont, desto bedre. Fondet vil svinge — ikke selg i panikk.</p>
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
              <h3 className="font-bold text-gray-900 mb-2">Kan jeg ha IPS i tillegg til andre pensjonsordninger?</h3>
              <p className="text-gray-600 text-sm">Ja, det er ingen begrensning. IPS er en tilleggspensjon på toppen av folketrygden og arbeidsgivers pensjonsordning.</p>
            </div>
            <div className="bg-white rounded-xl p-5 border border-gray-200">
              <h3 className="font-bold text-gray-900 mb-2">Hva om jeg må pensjonere meg tidligere enn 62-67?</h3>
              <p className="text-gray-600 text-sm">Du kan starte uttak fra IPS fra 62 år. Det er ingen mulighet for å ta ut tidligere uten stor skattestraff. Velg derfor ikke for høy månedlig sparing i IPS — du må ha en buffer.</p>
            </div>
            <div className="bg-white rounded-xl p-5 border border-gray-200">
              <h3 className="font-bold text-gray-900 mb-2">Hva skjer hvis jeg dør før pensjonsalder?</h3>
              <p className="text-gray-600 text-sm">IPS-kontoen inngår i dødsboet. Normalt kan den overføres til ektefelle/samboer, eller utbetales til boet. Regler varierer.</p>
            </div>
            <div className="bg-white rounded-xl p-5 border border-gray-200">
              <h3 className="font-bold text-gray-900 mb-2">Er det bedre enn å spare i fond utenfor IPS?</h3>
              <p className="text-gray-600 text-sm">For høyinntektsskattytere kan IPS være svært gunstig på grunn av skattefradraget. Men bundetiden er en ulempe. Lag din egen vurdering basert på din situasjon.</p>
            </div>
          </div>
        </section>

        {/* INDEKSFOND-HOOK */}
        <div className="bg-blue-50 rounded-xl p-5 border border-blue-200">
          <h3 className="font-bold text-blue-800 mb-2 flex items-center gap-2">
            <span>💡</span> Kombiner IPS med indeksfond
          </h3>
          <p className="text-gray-700 text-sm">
            IPS er en skattefordel-boks, indeksfond er avkastningsmotoren. <strong>Den beste kombinasjonen</strong> er å spare i et globalt indeksfond via IPS-kontoen din. Da får du både skattefradraget og markedets langsiktige vekst.
          </p>
          <Link href="/sparing/indeksfond-nybegynnere" className="inline-block mt-3 text-blue-700 font-semibold text-sm hover:underline">
            → Les mer om indeksfond for nybegynnere
          </Link>
        </div>

        {/* CTA */}
        <section className="bg-gradient-to-br from-indigo-700 to-purple-800 rounded-2xl p-8 text-white text-center">
          <h2 className="text-2xl font-black mb-4">Klar til å bygge din pensjon smartere?</h2>
          <p className="text-indigo-200 mb-6 max-w-2xl mx-auto">
            IPS er ikke for alle, men for de som har råd til å binde pengene sine, er det en av de beste spareformene i Norge. Start med 1.000 kr/måned og øk gradvis.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/sparing/indeksfond-nybegynnere" className="inline-block bg-white text-indigo-700 font-bold px-6 py-3 rounded-lg hover:bg-indigo-50 transition-colors">
              📈 Les om indeksfond
            </Link>
            <Link href="/sparing" className="inline-block bg-indigo-500 text-white font-bold px-6 py-3 rounded-lg hover:bg-indigo-400 transition-colors border border-indigo-400">
              📚 Flere spareguider
            </Link>
          </div>
        </section>

        {/* RELATERTE ARTIKLER */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">📚 Relaterte artikler</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link href="/sparing/indeksfond-nybegynnere" className="block bg-white rounded-xl p-5 border border-gray-200 hover:border-indigo-400 transition-colors group">
              <div className="flex items-center gap-3">
                <span className="text-2xl">📈</span>
                <div>
                  <h3 className="font-bold text-gray-900 group-hover:text-indigo-700">Indeksfond for nybegynnere</h3>
                  <p className="text-gray-500 text-sm">Hvordan fond fungerer og hvorfor indeksfond vinner</p>
                </div>
              </div>
            </Link>
            <Link href="/sparing/bsu-guide" className="block bg-white rounded-xl p-5 border border-gray-200 hover:border-indigo-400 transition-colors group">
              <div className="flex items-center gap-3">
                <span className="text-2xl">🏠</span>
                <div>
                  <h3 className="font-bold text-gray-900 group-hover:text-indigo-700">BSU 2026: Full guide</h3>
                  <p className="text-gray-500 text-sm">Norges beste spareform for unge under 34 år</p>
                </div>
              </div>
            </Link>
          </div>
        </section>

        <p className="text-sm text-gray-400 pt-8 border-t">
          Sist oppdatert: 15. april 2026. IPS-regler og skattesatser kan endres. Sjekk med Skatteetaten eller en finansrådgiver for oppdatert informasjon. Investering i fond innebærer risiko.
        </p>
      </article>
    </>
  )
}