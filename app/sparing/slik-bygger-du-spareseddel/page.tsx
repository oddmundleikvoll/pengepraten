import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Slik bygger du en spareseddel du faktisk følger | Pengepraten',
  description: 'Lær å lage en spareseddel som fungerer i praksis. Vi viser deg steg-for-steg hvordan du setter opp et sparemål, holder motivasjonen oppe, og faktisk når målet ditt.',
  keywords: ['spareseddel', 'spareplan', 'sparing', 'sparemål', 'buffer', 'BSU', 'fond', 'personlig økonomi'],
}

export default function SlikByggerDuSpareddel() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-green-600 to-emerald-700 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <nav className="text-green-100 text-sm mb-4">
            <Link href="/" className="hover:text-white">Hjem</Link>
            <span className="mx-2">/</span>
            <Link href="/sparing" className="hover:text-white">Sparing</Link>
            <span className="mx-2">/</span>
            <span>Spareseddel</span>
          </nav>
          <span className="inline-block px-3 py-1 text-xs font-semibold bg-white/20 rounded-full mb-4">
            Oppdatert april 2026
          </span>
          <h1 className="text-3xl md:text-5xl font-black mb-4">
            Slik bygger du en spareseddel du faktisk følger
          </h1>
          <p className="text-green-100 text-xl max-w-2xl">
            Flest nordmenn har et sparemål — men få når det. Her er oppskriften som faktisk fungerer, med konkrete verktøy du kan bruke i dag.
          </p>
        </div>
      </section>

      {/* Article content */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 py-12 article-content">

        <p className="text-xl text-gray-600 leading-relaxed mb-8">
          Ni av ti nordmenn har et sparemål. Bare fire av ti når det. 🤯 Grunnen er sjelden mangel på vilje — det er mangel på system. I denne guiden lærer du å bygge en spareseddel som er så presis og motiverende at du faktisk holder den.
        </p>

        {/* Visual: Spareillustrasjon */}
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8 my-8 text-center border border-green-100">
          <div className="text-5xl mb-3">🎯</div>
          <p className="text-green-800 font-bold text-lg">Et klart mål + et system = resultat</p>
          <p className="text-green-600 text-sm mt-1">Spareseddelen er ditt system. Målet er din destinasjon.</p>
        </div>

        <h2>Hvorfor mislykkes de fleste med sparing?</h2>
        <p>
          Før vi starter, la oss forstå hvorfor «spar mer» som mål sjelden fungerer:
        </p>
        <ul>
          <li><strong>For vagt:</strong> «Jeg vil spare mer» er ikke et mål — det er et ønske</li>
          <li><strong>For abstrakt:</strong> Hvor mye? Til hva? Når?</li>
          <li><strong>For kjedelig:</strong> Ingen følelsesmessig tilknytning til en prosentandel på en konto</li>
          <li><strong>For avhengig av viljestyrke:</strong> Viljestyrke er en ferskvare — systemer fungerer uansett humør</li>
        </ul>

        <p>
          En god spareseddel svarer på alle disse problemene. La oss bygge din.
        </p>

        {/* Steg 1 */}
        <h2>Steg 1: Definer målet ditt — skikkelig</h2>
        <p>
          Ikke start med «hvor mye kan jeg spare?» — start med «hvorfor sparer jeg?». 
          Målet ditt skal ha tre egenskaper:
        </p>

        <div className="bg-green-50 border-l-4 border-green-500 rounded-r-xl p-6 my-8">
          <h3 className="font-bold text-norsk-dark mb-3">✅ Et godt sparemål er:</h3>
          <ul className="space-y-2 text-gray-700">
            <li><strong>Spesifikt:</strong> Ikke «et nødfond» — men «3 måneders levekostnader på en bufferkonto»</li>
            <li><strong>Målbart:</strong> Ikke «nok til ferie» — men «60.000 kr til drømmeferien i Italia»</li>
            <li><strong>Forankret i en verdi:</strong> Hvorfor bryr du deg egentlig om dette målet?</li>
          </ul>
        </div>

        <h3>Praktiske eksempler på gode sparemål</h3>
        <div className="bg-gray-50 rounded-xl p-6 my-6">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b">
                <th className="text-left py-2 font-semibold text-norsk-dark">Mål</th>
                <th className="text-right py-2 font-semibold text-norsk-dark">Beløp</th>
                <th className="text-right py-2 font-semibold text-norsk-dark">Tidsramme</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="py-2">🛡️ Nødfond (3 måneders utgifter)</td>
                <td className="text-right">90.000 kr</td>
                <td className="text-right">12-18 mnd</td>
              </tr>
              <tr className="border-b">
                <td className="py-2">🏠 BSU — førstehjemsparing</td>
                <td className="text-right">27.500 kr/år</td>
                <td className="text-right">Årlig</td>
              </tr>
              <tr className="border-b">
                <td className="py-2">✈️ Drømmeferie</td>
                <td className="text-right">50.000 kr</td>
                <td className="text-right">18-24 mnd</td>
              </tr>
              <tr className="border-b">
                <td className="py-2">🚗 Bilkontant (uten lån)</td>
                <td className="text-right">150.000 kr</td>
                <td className="text-right">3-4 år</td>
              </tr>
              <tr>
                <td className="py-2">📚 Etterutdanning</td>
                <td className="text-right">30.000 kr</td>
                <td className="text-right">12 mnd</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Steg 2 */}
        <h2>Steg 2: Regn baklengs — finn din månedlige sparedel</h2>
        <p>
          Nå snur vi på det. I stedet for «hvor mye har jeg til overs?» spør du: 
          «Hvor mye trenger jeg å sette av hver måned for å nå dette målet?»
        </p>

        <div className="bg-amber-50 border-l-4 border-amber-400 rounded-r-xl p-6 my-8">
          <h3 className="font-bold text-norsk-dark mb-2">⚠️ Regnestykket</h3>
          <p className="text-gray-700 mb-2">
            <strong>Månedlig sparebeløp = (Målbeløp − Eksisterende sparing) ÷ Antall måneder</strong>
          </p>
          <p className="text-gray-600 text-sm">
            <strong>Eksempel:</strong> 60.000 kr på 18 måneder = <strong>3.333 kr/måned</strong>. 
            Med 0 kr spart fra før av.
          </p>
        </div>

        <p>
          Dette tallet er din «magiske sum» — altså hvor mye du må sette av 
          <em> hver måned </em> for å nå målet. Det er ikke et «hvis jeg har råd»-tall. 
          Det er et «slutt på historien»-tall.
        </p>

        <div className="bg-green-50 border-l-4 border-green-500 rounded-r-xl p-6 my-8">
          <h3 className="font-bold text-norsk-dark mb-2">💡 Visste du at...</h3>
          <p className="text-gray-700">
            Ifølge SSB har nordmenn i gjennomsnitt 128.000 kr i bankinnskudd 
            (2025). Men undersøkelser viser at mange av disse pengene er «sovende» 
            — de har ingen klar hensikt, ingen sparemål, ingen plan. 
            Det er som å trene uten en treningsplan: du drar på, men vet ikke 
            helt hvor du skal.
          </p>
        </div>

        {/* Steg 3 */}
        <h2>Steg 3: Finn pengene — trim budsjettet</h2>
        <p>
          Nå vet du hvor mye du trenger. Men hvor kommer pengene fra? 
          De fleste har allerede pengene — de bruker dem bare på feil ting.
        </p>

        <h3>De tre beste kildene til sparepenger</h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
          <div className="bg-white border border-green-200 rounded-xl p-5 text-center">
            <div className="text-3xl mb-2">⚡</div>
            <h4 className="font-bold text-norsk-dark mb-1">Automatisering</h4>
            <p className="text-sm text-gray-600">Sett opp fast trekk til sparing dagen etter lønning. «Ute av syne, ut av sinn.»</p>
          </div>
          <div className="bg-white border border-green-200 rounded-xl p-5 text-center">
            <div className="text-3xl mb-2">🔪</div>
            <h4 className="font-bold text-norsk-dark mb-1">Faste abonnementer</h4>
            <p className="text-sm text-gray-600">Gå gjennom alle dine abonnementer. Streaming, medlemskap, apper. Hva bruker du faktisk?</p>
          </div>
          <div className="bg-white border border-green-200 rounded-xl p-5 text-center">
            <div className="text-3xl mb-2">🍽️</div>
            <h4 className="font-bold text-norsk-dark mb-1">Matvaner</h4>
            <p className="text-sm text-gray-600">Enda et par take-away i uka? Det er fort 1.500-2.000 kr/måned som kan spares.</p>
          </div>
        </div>

        <div className="bg-gray-50 rounded-xl p-6 my-6">
          <h4 className="font-bold text-norsk-dark mb-3">📋 Sjekkliste: Trim matbudsjettet</h4>
          <ul className="space-y-1 text-gray-700 text-sm">
            <li>☐ Handleliste — og STICK til den</li>
            <li>☐ Lag mat fra bunnen flere netter i uka</li>
            <li>☐ Sett et fast matbudsjett og track det</li>
            <li>☐ Kutt take-away med 50% (spesialkveld = lov)</li>
            <li>☐ Kjøp nødvendigvis, men ikke dyreste</li>
          </ul>
        </div>

        {/* Steg 4 */}
        <h2>Steg 4: Velg riktig sparekonto</h2>
        <p>
          Pengene dine fortjener en bedre skjebne enn å ligge på brukskontoen 
          med 0,1% rente. Valg av konto har mer å si enn du kanskje tror.
        </p>

        <div className="bg-gray-50 rounded-xl p-6 my-6 overflow-x-auto">
          <h4 className="font-bold text-norsk-dark mb-3">📊 Oversikt: Sparekontoer 2026</h4>
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b">
                <th className="text-left py-2 font-semibold text-norsk-dark">Kontotype</th>
                <th className="text-right py-2 font-semibold text-norsk-dark">Typisk rente</th>
                <th className="text-left py-2 font-semibold text-norsk-dark">Best for</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="py-2">Vanlig brukskonto</td>
                <td className="text-right text-red-600">0,1–0,5%</td>
                <td className="text-gray-600 text-xs">Pengene du bruker daglig</td>
              </tr>
              <tr className="border-b">
                <td className="py-2">Høyrente sparekonto</td>
                <td className="text-right text-green-600">3,5–4,2%</td>
                <td className="text-gray-600 text-xs">Buffer, nødfond, mellomvarende mål</td>
              </tr>
              <tr className="border-b">
                <td className="py-2">BSU / Boligkonto</td>
                <td className="text-right text-green-600">3,5–5,0%</td>
                <td className="text-gray-600 text-xs">Førstehjemsparing (skattefradrag!)</td>
              </tr>
              <tr className="border-b">
                <td className="py-2">Aksjefond / ETF</td>
                <td className="text-right text-green-600">Variabel</td>
                <td className="text-gray-600 text-xs">Langsiktig sparing (5+ år)</td>
              </tr>
              <tr>
                <td className="py-2">Obligasjonsfond</td>
                <td className="text-right text-amber-600">2–4%</td>
                <td className="text-gray-600 text-xs">Mellomsiktig sparing, lavere risiko</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="bg-amber-50 border-l-4 border-amber-400 rounded-r-xl p-6 my-8">
          <h3 className="font-bold text-norsk-dark mb-2">💰 BSU-tips (viktig!)</h3>
          <p className="text-gray-700">
            BSU gir deg <strong>26% skattefradrag</strong> på innskudd opp til 27.500 kr/år. 
            Det betyr at staten i praksis betaler 26 øre for hver krone du sparer — 
            helt gratis. Hvis du kan, max ut BSU hvert eneste år før du sparer andre steder.
          </p>
        </div>

        {/* Steg 5 */}
        <h2>Steg 5: Sett opp systemet — automatisering er nøkkelen</h2>
        <p>
          Her er det viktigste tipset i hele guiden, og det tar to minutter å sette opp:
        </p>

        <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl p-8 my-8 text-white">
          <h3 className="font-black text-xl mb-3">🎯 Regelen: Spar først, aldri sist</h3>
          <p className="text-green-50 text-lg leading-relaxed">
            Sett opp en fast bankoverføring som går til sparekontoen <strong>dagen etter lønning</strong>. 
            Beløpet skal være lik din «magiske sum» fra Steg 2. 
            <br /><br />
            <strong>Ikke vent til måneden er omme med å se hva som er igjen.</strong> 
            Da er det ingenting igjen. Alltid.
          </p>
        </div>

        <h3>Slik setter du opp automatisk sparing:</h3>
        <ol>
          <li>Åpne nettbanken eller mobilbanken din</li>
          <li>Opprett en fast spareavtale / varig betalingsoppdrag</li>
          <li>Velg beløp = din magiske sum (f.eks. 3.333 kr)</li>
          <li>Velg dato = dagen etter lønning (f.eks. den 25.)</li>
          <li>Velg målkonto = høyrente sparekonto eller BSU</li>
          <li>Aktiver — og glem det</li>
        </ol>

        {/* Steg 6 */}
        <h2>Steg 6: Hold motivasjonen — og juster</h2>
        <p>
          Systemer fungerer bedre enn motivasjon, men det betyr ikke at 
          motivasjon er irrelevant. Slik holder du begge deler i gang:
        </p>

        <div className="bg-gray-50 rounded-xl p-6 my-6">
          <h4 className="font-bold text-norsk-dark mb-3">🔥 Motivator-taktikker</h4>
          <ul className="space-y-2 text-gray-700">
            <li><strong>Visuell fremgang:</strong> Last ned en spareapp (Somni eller lignende) 
              som viser fremgangen din grafisk</li>
            <li><strong>Feire delmål:</strong> Når du er 25%, 50%, 75% — gi deg selv en liten belønning 
              (ikke en som knekker spareplanen)</li>
            <li><strong>Skriv det ned:</strong> En synlig lapp på kjøleskapet eller en note på telefonen 
              som minner deg om hvorfor</li>
            <li><strong>Ingen skam i tilbakesteg:</strong> En dårlig måned ≠ fiasko. Juster og fortsett.</li>
          </ul>
        </div>

        <div className="bg-red-50 border-l-4 border-red-400 rounded-r-xl p-6 my-8">
          <h3 className="font-bold text-norsk-dark mb-2">🚨 Når du må stoppe opp</h3>
          <p className="text-gray-700">
            <strong>Ikke spar hvis du har kredittkortgjeld eller dyre forbrukslån.</strong> 
            Rentene på kredittkort (ofte 20-30%) spiser opp enhver spargevinst. 
            Følg denne prioriteringsrekkefølgen:
          </p>
          <ol className="mt-3 space-y-1 text-gray-700 text-sm">
            <li>1. Nødfond på 5.000–10.000 kr (minimum sikkerhet)</li>
            <li>2. Fjern dyr gjeld (kredittkort, forbrukslån)</li>
            <li>3. Fullt nødfond (3 måneders utgifter)</li>
            <li>4. Øvrige sparemål</li>
          </ol>
        </div>

        {/* Steg 7 */}
        <h2>Steg 7: Lag din egen spareseddel</h2>
        <p>
          Nå har du alle ingrediensene. Tiden er inne for å fylle ut din egen spareseddel:
        </p>

        <div className="bg-white border-2 border-green-200 rounded-2xl p-8 my-8 shadow-sm">
          <h3 className="font-black text-xl text-norsk-dark mb-6">📝 Min spareseddel 2026</h3>
          
          <div className="space-y-4">
            <div className="bg-green-50 rounded-xl p-4">
              <label className="block text-sm font-semibold text-green-800 mb-1">🎯 Mitt sparemål</label>
              <input type="text" placeholder="F.eks.: Drømmeferie til Japan" className="w-full p-2 border border-green-200 rounded-lg text-sm" />
              <p className="text-xs text-green-600 mt-1">Hvorfor er dette viktig for meg? ________________________________</p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-green-50 rounded-xl p-4">
                <label className="block text-sm font-semibold text-green-800 mb-1">💰 Målbeløp</label>
                <input type="text" placeholder="F.eks.: 80.000 kr" className="w-full p-2 border border-green-200 rounded-lg text-sm" />
              </div>
              <div className="bg-green-50 rounded-xl p-4">
                <label className="block text-sm font-semibold text-green-800 mb-1">📅 Tidsramme</label>
                <input type="text" placeholder="F.eks.: 24 måneder" className="w-full p-2 border border-green-200 rounded-lg text-sm" />
              </div>
            </div>

            <div className="bg-green-100 rounded-xl p-4">
              <label className="block text-sm font-bold text-green-900 mb-1">⚡ Min magiske sum (per måned)</label>
              <p className="text-green-800 text-2xl font-black">______ kr</p>
              <p className="text-xs text-green-700 mt-1">(Målbeløp ÷ Antall måneder)</p>
            </div>

            <div className="bg-gray-50 rounded-xl p-4">
              <label className="block text-sm font-semibold text-gray-700 mb-1">🏦 Sparekonto</label>
              <input type="text" placeholder="F.eks.: BSU hos Nordneo" className="w-full p-2 border border-gray-200 rounded-lg text-sm" />
            </div>

            <div className="bg-gray-50 rounded-xl p-4">
              <label className="block text-sm font-semibold text-gray-700 mb-1">📆 Trekkdato (dagen etter lønning)</label>
              <input type="text" placeholder="F.eks.: 25. hver måned" className="w-full p-2 border border-gray-200 rounded-lg text-sm" />
            </div>
          </div>
        </div>

        <div className="bg-primary-50 rounded-xl p-6 my-8">
          <h3 className="font-bold text-norsk-dark mb-2">💡 Verktøy som hjelper deg</h3>
          <p className="text-gray-700 mb-4">
            Vi har laget noen verktøy som gjør det enklere å holde spareseddelen:
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/sparing" className="inline-flex items-center gap-2 bg-primary-600 text-white font-medium py-2 px-4 rounded-lg hover:bg-primary-700 transition-colors text-sm">
              🔍 Finn beste sparekonto →
            </Link>
            <Link href="/budsjett" className="inline-flex items-center gap-2 border border-primary-600 text-primary-600 font-medium py-2 px-4 rounded-lg hover:bg-primary-50 transition-colors text-sm">
              📊 Budsjettramme →
            </Link>
          </div>
        </div>

        <h2>Oppsummering: Din 7-stegs spareseddel</h2>
        <ol>
          <li><strong>Definer målet:</strong> Spesifikt, målbart, verdifullt</li>
          <li><strong>Regn baklengs:</strong> Finn din magiske sum per måned</li>
          <li><strong>Finn pengene:</strong> Trim budsjettet med 3 kilder</li>
          <li><strong>Velg riktig konto:</strong> BSU &gt; høyrente &gt; brukskonto</li>
          <li><strong>Automatisér:</strong> Spar først, alltid</li>
          <li><strong>Hold motivasjonen:</strong> Visuell fremgang + feire delmål</li>
          <li><strong>Skriv ned:</strong> Fyll ut din egen spareseddel</li>
        </ol>

        <p>
          Det er lett å si «jeg starter neste måned». 
          Men det er ingen bedre tid enn nå. 
          Ta frem et ark, fyll ut din spareseddel, og sett opp den automatiske overføringen i dag. 
          Ikke i morgen — i dag.
        </p>

        <p className="text-sm text-gray-500 mt-8">
          <strong>Forfatter:</strong> Pengepraten | <strong>Sist oppdatert:</strong> 9. april 2026<br />
          Artikkelen er ment som veiledning og utgjør ikke finansiell rådgivning. 
          Vurder din egen situasjon nøye før du tar økonomiske beslutninger.
        </p>
      </article>
    </>
  )
}
