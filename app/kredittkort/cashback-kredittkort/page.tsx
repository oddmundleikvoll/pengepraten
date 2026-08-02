import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Cashback Kredittkort: Få opptil 4% tilbake på alt du handler i 2026',
  description: 'Lær alt om cashback kredittkort i Norge. Hvordan de fungerer, hvilke som gir mest tilbake, og hvordan du maksimerer cashback i 2026.',
}

export default function CashbackKredittkort() {
  return (
    <>
      {/* HERO — Nordic Clarity editorial */}
      <section className="bg-paper text-ink py-16 border-b border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <nav className="font-mono text-xs uppercase tracking-wider text-ink-muted mb-6">
            <Link href="/" className="hover:text-forest transition-colors">Hjem</Link>
            <span className="mx-2 text-border-strong">/</span>
            <Link href="/kredittkort" className="hover:text-forest transition-colors">Kredittkort</Link>
            <span className="mx-2 text-border-strong">/</span>
            <span className="text-ink">Cashback Kredittkort</span>
          </nav>
          <h1 className="text-3xl md:text-5xl font-medium font-display leading-[1.08] mb-4">
            Cashback Kredittkort: Få opptil 4% tilbake på alt du handler i 2026
          </h1>
          <p className="text-ink-muted text-xl max-w-2xl leading-relaxed">
            Få penger tilbake på hvert kjøp. Vi viser deg hvordan cashback fungerer og hvilke norske kort som gir mest.
          </p>
        </div>
      </section>

      {/* INNHOLD */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 py-12 article-content space-y-8">

        {/* INTRO */}
        <div className="bg-blue-50 rounded-2xl p-6 border-l-4 border-accent-600">
          <p className="text-lg text-gray-800 leading-relaxed">
            <strong>Cashback-kredittkort</strong> gir deg en prosentandel tilbake av alt du bruker. Det er som å få rabatt på alt du kjøper — bare at pengene kommer tilbake på kontoen din. I 2026 tilbyr flere norske banker opptil 4% cashback på enkelte kategorier.
          </p>
        </div>

        {/* HVORDAN FUNGERER CASHBACK */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            Hvordan cashback fungerer (steg-for-steg)
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Cashback er enkel i prinsippet, men det er lurt å forstå mekanismen før du velger kort:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
            <div className="bg-white rounded-xl p-5 border border-gray-200 text-center">
              <div className="w-12 h-12 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-3 text-xl font-black text-accent-700">1</div>
              <h3 className="font-bold text-gray-900 mb-1 text-sm">Bruk kortet</h3>
              <p className="text-gray-600 text-xs">Du betaler med kredittkortet som vanlig</p>
            </div>
            <div className="bg-white rounded-xl p-5 border border-gray-200 text-center">
              <div className="w-12 h-12 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-3 text-xl font-black text-accent-700">2</div>
              <h3 className="font-bold text-gray-900 mb-1 text-sm">Kjøpet registreres</h3>
              <p className="text-gray-600 text-xs">Banken registrerer kjøpet og beregner cashback</p>
            </div>
            <div className="bg-white rounded-xl p-5 border border-gray-200 text-center">
              <div className="w-12 h-12 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-3 text-xl font-black text-accent-700">3</div>
              <h3 className="font-bold text-gray-900 mb-1 text-sm">Cashback akkumuleres</h3>
              <p className="text-gray-600 text-xs">En prosentandel legges til din cashback-pot</p>
            </div>
            <div className="bg-white rounded-xl p-5 border border-gray-200 text-center">
              <div className="w-12 h-12 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-3 text-xl font-black text-accent-700">4</div>
              <h3 className="font-bold text-gray-900 mb-1 text-sm">Du får tilbake</h3>
              <p className="text-gray-600 text-xs">Pengene utbetales månedlig eller årlig</p>
            </div>
          </div>
          <div className="bg-amber-50 rounded-xl p-5 border border-amber-200">
            <h3 className="font-bold text-amber-800 mb-2 flex items-center gap-2">
              <span></span> Viktig å vite
            </h3>
            <p className="text-gray-700 text-sm">
              Cashback krever at du <strong>betaler regningen i tide</strong> hver måned. Hvis du revolverer (tar opp ny gjeld på et eksisterende kort), forsvinner gevinsten fort i rentekostnader.
            </p>
          </div>
        </section>

        {/* OVERSIKT OVER NORSKE CASHBACK-KORT */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            Oversikt over norske cashback-kort
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Her er de mest populære cashback-kortene i Norge i 2026:
          </p>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse rounded-xl overflow-hidden shadow-sm">
              <thead>
                <tr className="bg-forest text-paper">
                  <th className="text-left p-4 font-bold">Kort</th>
                  <th className="text-left p-4 font-bold">Cashback</th>
                  <th className="text-left p-4 font-bold">Maks/category</th>
                  <th className="text-left p-4 font-bold">Årsavgift</th>
                  <th className="text-left p-4 font-bold">Bonus</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white border-b border-gray-100">
                  <td className="p-4 font-semibold">Apple Card (Nordea)</td>
                  <td className="p-4 text-accent-700 font-bold">1-3%</td>
                  <td className="p-4">Ingen</td>
                  <td className="p-4 text-red-600 font-bold">249 kr/år</td>
                  <td className="p-4 text-sm text-gray-600">Apple Pay bonus</td>
                </tr>
                <tr className="bg-blue-50 border-b border-gray-100">
                  <td className="p-4 font-semibold">Eurocard Corporate</td>
                  <td className="p-4 text-accent-700 font-bold">Opptil 2%</td>
                  <td className="p-4">Bedrift</td>
                  <td className="p-4 text-green-600 font-bold">0 kr</td>
                  <td className="p-4 text-sm text-gray-600">Reiseforsikring</td>
                </tr>
                <tr className="bg-white border-b border-gray-100">
                  <td className="p-4 font-semibold">SAS Mastercard</td>
                  <td className="p-4 text-accent-700 font-bold">1-2%</td>
                  <td className="p-4">EuroBonus-poeng</td>
                  <td className="p-4 text-red-600 font-bold">395 kr/år</td>
                  <td className="p-4 text-sm text-gray-600">EuroBonus-poeng</td>
                </tr>
                <tr className="bg-blue-50 border-b border-gray-100">
                  <td className="p-4 font-semibold">REITAN</td>
                  <td className="p-4 text-accent-700 font-bold">Opptil 2%</td>
                  <td className="p-4">Reise/handel</td>
                  <td className="p-4 text-green-600 font-bold">0 kr</td>
                  <td className="p-4 text-sm text-gray-600">Clibs-poeng</td>
                </tr>
                <tr className="bg-white">
                  <td className="p-4 font-semibold">Coop Mastercard</td>
                  <td className="p-4 text-accent-700 font-bold">Opptil 2%</td>
                  <td className="p-4">Coop</td>
                  <td className="p-4 text-green-600 font-bold">0 kr</td>
                  <td className="p-4 text-sm text-gray-600">Coop-poeng</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="bg-blue-50 rounded-xl p-4 text-sm text-gray-600 mb-6">
            <strong>Merk:</strong> Cashback-satser varierer ofte etter forbrukskategori. Noen kort gir høyere prosent på mat, reise eller drivstoff og lavere på andre kategorier.
          </div>
        </section>

        {/* REALISTISK CASHBACK */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            Hva er realistisk å få tilbake per år?
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Hvor mye du får tilbake avhenger av hvor mye du bruker kortet. Her er et par eksempler:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="bg-white rounded-xl p-5 border border-gray-200 text-center">
              <div className="text-3xl mb-3"></div>
              <h3 className="font-bold text-gray-900 mb-1">Lett bruk</h3>
              <div className="text-2xl font-black text-accent-700 mb-1">50 000 kr/år</div>
              <p className="text-gray-500 text-sm mb-3">Mat, hverdagskjøp, drivstoff</p>
              <div className="bg-green-50 rounded-lg p-3">
                <span className="text-green-700 font-bold text-lg">~1 000 kr</span>
                <span className="text-gray-500 text-xs block">i cashback (2%)</span>
              </div>
            </div>
            <div className="bg-white rounded-xl p-5 border border-gray-200 text-center">
              <div className="text-3xl mb-3"></div>
              <h3 className="font-bold text-gray-900 mb-1">Vanlig bruk</h3>
              <div className="text-2xl font-black text-accent-700 mb-1">100 000 kr/år</div>
              <p className="text-gray-500 text-sm mb-3">Reise, shopping, mat</p>
              <div className="bg-green-50 rounded-lg p-3">
                <span className="text-green-700 font-bold text-lg">~2 500 kr</span>
                <span className="text-gray-500 text-xs block">i cashback (2,5%)</span>
              </div>
            </div>
            <div className="bg-white rounded-xl p-5 border border-gray-200 text-center">
              <div className="text-3xl mb-3"></div>
              <h3 className="font-bold text-gray-900 mb-1">Mye bruk</h3>
              <div className="text-2xl font-black text-accent-700 mb-1">200 000 kr/år</div>
              <p className="text-gray-500 text-sm mb-3">Foretrukket betalingsmåte</p>
              <div className="bg-green-50 rounded-lg p-3">
                <span className="text-green-700 font-bold text-lg">~6 000 kr</span>
                <span className="text-gray-500 text-xs block">i cashback (3%)</span>
              </div>
            </div>
          </div>
        </section>

        {/* CASHBACK VS REISEKORT VS GEBYRFRI */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <span></span> Cashback vs. reisekort vs. gebyrfrie kort
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Det finnes ulike typer kredittkort med ulike fordeler. La oss sammenligne:
          </p>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse rounded-xl overflow-hidden shadow-sm">
              <thead>
                <tr className="bg-paper text-ink border-b border-border">
                  <th className="text-left p-4 font-bold">Type</th>
                  <th className="text-left p-4 font-bold">Passer for</th>
                  <th className="text-left p-4 font-bold">Fordeler</th>
                  <th className="text-left p-4 font-bold">Ulemper</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white border-b border-gray-100">
                  <td className="p-4 font-semibold">Cashback-kort</td>
                  <td className="p-4 text-sm">Alle som betaler ned hver måned</td>
                  <td className="p-4 text-sm">Penger tilbake, ingen kompliserte regler</td>
                  <td className="p-4 text-sm">Lavere rewards enn flyselskapskort</td>
                </tr>
                <tr className="bg-blue-50 border-b border-gray-100">
                  <td className="p-4 font-semibold">Reisekort (SAS/Eurobonus)</td>
                  <td className="p-4 text-sm">Mye reisende</td>
                  <td className="p-4 text-sm">Flypoeng, reiseforsikring, lounge-tilgang</td>
                  <td className="p-4 text-sm">Poengene kan bli verdifulle kun forreisende</td>
                </tr>
                <tr className="bg-white">
                  <td className="p-4 font-semibold"> Gebyrfrie kort</td>
                  <td className="p-4 text-sm">Kostnadsbevisste</td>
                  <td className="p-4 text-sm">Ingen årsavgift, god nok cashback</td>
                  <td className="p-4 text-sm">Lavere cashback enn spesialkort</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="invert-block rounded-xl p-6">
            <h3 className="font-display font-medium text-lg mb-3">Vårt råd: Kombiner to kort</h3>
            <p className="text-paper/80 leading-relaxed">
              De fleste bør ha <strong>ett cashback-kort</strong> for daglig bruk og <strong>ett reisekort</strong> (f.eks. SAS-kortet) hvis de reiser mye. Da får du best av begge verdener.
            </p>
          </div>
        </section>

        {/* VILKÅR OG BETINGELSER */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            Vilkår og betingelser — les det med liten skrift
          </h2>
          <div className="bg-white rounded-xl p-6 border border-gray-200 mb-6">
            <h3 className="font-bold text-gray-900 mb-4">Viktige vilkår å se opp for:</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                
                <div>
                  <strong className="text-gray-900">Minimum spending-krav</strong>
                  <p className="text-gray-600 text-sm">Noen kort krever at du bruker et minimum beløp per måned for å aktivere cashback.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                
                <div>
                  <strong className="text-gray-900">Maks cashback per år</strong>
                  <p className="text-gray-600 text-sm">Enkelte kort har et tak på hvor mye du kan tjene, f.eks. maks 2 000 kr i cashback per år.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                
                <div>
                  <strong className="text-gray-900">Kategoribegrensninger</strong>
                  <p className="text-gray-600 text-sm">Høy cashback gjelder kanskje bare på mat og drivstoff, ikke på alt.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                
                <div>
                  <strong className="text-gray-900">Utløpsdato på poeng</strong>
                  <p className="text-gray-600 text-sm">Cashback-poeng kan noen ganger utløpe hvis du ikke bruker kortet.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-red-50 rounded-xl p-5 border border-red-200">
            <h3 className="font-bold text-red-800 mb-2 flex items-center gap-2">
              Aldri gjør dette med cashback-kort
            </h3>
            <p className="text-gray-700">
              <strong>Betalingsfrist ute av syne?</strong> Hvis du ikke betaler hele regningen hver måned, tar rentene fort tilbake alt du fikk i cashback. 20% rente på et ubetalt beløp tørrer ingen cashback på 2%.
            </p>
          </div>
        </section>

        {/* BESTE CASHBACK-KORT FOR ULIKE BEHOV */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <span></span> Beste cashback-kort for ulike behov
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-paper-alt rounded-xl p-5 border border-border">
              <div className="flex items-center gap-3 mb-3">
                <h3 className="font-bold text-ink">Mat og dagligvare</h3>
              </div>
              <p className="text-ink-muted text-sm mb-3">Coop Mastercard og reisekort med bonus på matkjøp</p>
              <div className="text-sm">
                <span className="font-bold text-forest">Opptil 2% tilbake</span>
                <span className="text-ink-muted"> på matvarer</span>
              </div>
            </div>
            <div className="bg-paper-alt rounded-xl p-5 border border-border">
              <div className="flex items-center gap-3 mb-3">
                <h3 className="font-bold text-ink">Drivstoff</h3>
              </div>
              <p className="text-ink-muted text-sm mb-3">REITAN og Norwegian Bank har god cashback på drivstoff</p>
              <div className="text-sm">
                <span className="font-bold text-forest">Opptil 2-3% tilbake</span>
                <span className="text-ink-muted"> på drivstoff</span>
              </div>
            </div>
            <div className="bg-paper-alt rounded-xl p-5 border border-border">
              <div className="flex items-center gap-3 mb-3">
                
                <h3 className="font-bold text-ink">Reise og fly</h3>
              </div>
              <p className="text-ink-muted text-sm mb-3">SAS Mastercard og Eurocard gir bonuspoeng på reise</p>
              <div className="text-sm">
                <span className="font-bold text-amber-warm">Opptil 4% tilbake</span>
                <span className="text-ink-muted"> på reisebestilling</span>
              </div>
            </div>
            <div className="bg-paper-alt rounded-xl p-5 border border-border">
              <div className="flex items-center gap-3 mb-3">
                
                <h3 className="font-bold text-ink">Shopping online</h3>
              </div>
              <p className="text-ink-muted text-sm mb-3">Apple Card og spesialtilbud fra norske banker</p>
              <div className="text-sm">
                <span className="font-bold text-amber-warm">Opptil 3% tilbake</span>
                <span className="text-ink-muted"> på netthandel</span>
              </div>
            </div>
          </div>
        </section>

        {/* REGNEKSTYKKE */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            Regnestykket: Hvor mye får du tilbake?
          </h2>
          <div className="invert-block rounded-xl p-6">
            <h3 className="font-display font-medium text-lg mb-6">Effektiv cashback basert på årlig forbruk</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <div className="bg-paper/10 rounded-xl p-4">
                <h4 className="font-bold text-paper/80 mb-3"> 50 000 kr/år</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between py-1 border-b border-paper/10">
                    <span className="text-paper/70">Cashback 2%</span>
                    <span className="font-semibold">1 000 kr</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-paper/10">
                    <span className="text-paper/70">Årsavgift (gjennomsnitt)</span>
                    <span className="font-semibold text-amber-warm">- 200 kr</span>
                  </div>
                  <div className="flex justify-between py-1 font-bold">
                    <span className="text-paper">Netto tilbake:</span>
                    <span className="text-amber-warm">800 kr</span>
                  </div>
                </div>
              </div>
              <div className="bg-paper/10 rounded-xl p-4">
                <h4 className="font-bold text-paper/80 mb-3"> 100 000 kr/år</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between py-1 border-b border-paper/10">
                    <span className="text-paper/70">Cashback 2.5%</span>
                    <span className="font-semibold">2 500 kr</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-paper/10">
                    <span className="text-paper/70">Årsavgift</span>
                    <span className="font-semibold text-amber-warm">- 200 kr</span>
                  </div>
                  <div className="flex justify-between py-1 font-bold">
                    <span className="text-paper">Netto tilbake:</span>
                    <span className="text-amber-warm">2 300 kr</span>
                  </div>
                </div>
              </div>
              <div className="bg-paper/10 rounded-xl p-4">
                <h4 className="font-bold text-paper/80 mb-3"> 200 000 kr/år</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between py-1 border-b border-paper/10">
                    <span className="text-paper/70">Cashback 3%</span>
                    <span className="font-semibold">6 000 kr</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-paper/10">
                    <span className="text-paper/70">Årsavgift</span>
                    <span className="font-semibold text-amber-warm">- 200 kr</span>
                  </div>
                  <div className="flex justify-between py-1 font-bold">
                    <span className="text-paper">Netto tilbake:</span>
                    <span className="text-amber-warm">5 800 kr</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-forest/30 rounded-lg p-4 text-center">
              <span className="font-bold text-amber-warm"> Med 200 000 kr i årlig forbruk kan du tjene opptil 5 800 kr i cashback!</span>
            </div>
          </div>
        </section>

        {/* TIPS FOR Å MAKSIMERE */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <span></span> Tips for å maksimere cashback
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="bg-white rounded-xl p-5 border-2 border-accent-200 shadow-sm">
              <div className="text-3xl mb-3"></div>
              <h3 className="font-bold text-gray-900 mb-2">Samle alt på ett kort</h3>
              <p className="text-gray-600 text-sm">Bruk cashback-kortet til så mye som mulig. Jo høyere totalforbruk, jo mer får du tilbake.</p>
            </div>
            <div className="bg-white rounded-xl p-5 border-2 border-accent-200 shadow-sm">
              <div className="text-3xl mb-3"></div>
              <h3 className="font-bold text-gray-900 mb-2">Betal hele regningen</h3>
              <p className="text-gray-600 text-sm">Dette er #1-regelen. Bare cashback på rentefri gjeld gir positiv avkastning.</p>
            </div>
            <div className="bg-white rounded-xl p-5 border-2 border-accent-200 shadow-sm">
              <div className="text-3xl mb-3"></div>
              <h3 className="font-bold text-gray-900 mb-2">Sjekk bonuskategorier</h3>
              <p className="text-gray-600 text-sm">Noen kort gir 3% på mat, 2% på drivstoff, 1% på alt annet. Planlegg kjøp der det lønner seg.</p>
            </div>
            <div className="bg-white rounded-xl p-5 border-2 border-accent-200 shadow-sm">
              <div className="text-3xl mb-3"></div>
              <h3 className="font-bold text-gray-900 mb-2">Kombiner med andre tilbud</h3>
              <p className="text-gray-600 text-sm">Sjekk om banken har kampanjer, ekstra cashback eller andre fordeler i perioder.</p>
            </div>
          </div>

          {/* SJEKKLISTE */}
          <div className="bg-paper-alt rounded-xl p-6 border border-border">
            <h3 className="font-display font-medium text-ink mb-4 flex items-center gap-2">
              Din cashback-sjekkliste
            </h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3 bg-paper-surface rounded-lg p-3">
                <div className="w-6 h-6 rounded-full bg-forest text-paper flex items-center justify-center text-xs font-bold"></div>
                <span className="text-ink">Velg et kort med cashback på dine viktigste kategorier</span>
              </div>
              <div className="flex items-center gap-3 bg-paper-surface rounded-lg p-3">
                <div className="w-6 h-6 rounded-full bg-forest text-paper flex items-center justify-center text-xs font-bold"></div>
                <span className="text-ink">Sett opp purring/påminnelse for betaling</span>
              </div>
              <div className="flex items-center gap-3 bg-paper-surface rounded-lg p-3">
                <div className="w-6 h-6 rounded-full bg-forest text-paper flex items-center justify-center text-xs font-bold"></div>
                <span className="text-ink">Aldri la saldoen være større enn du kan betale</span>
              </div>
              <div className="flex items-center gap-3 bg-paper-surface rounded-lg p-3">
                <div className="w-6 h-6 rounded-full bg-forest text-paper flex items-center justify-center text-xs font-bold"></div>
                <span className="text-ink">Sjekk årsavgift vs. cashback — det må lønne seg</span>
              </div>
              <div className="flex items-center gap-3 bg-paper-surface rounded-lg p-3">
                <div className="w-6 h-6 rounded-full bg-forest text-paper flex items-center justify-center text-xs font-bold"></div>
                <span className="text-ink">Bytt kort hvis bedre alternativ dukker opp</span>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="invert-block rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-display font-medium mb-4">Klar til å la cashback jobbe for deg?</h2>
          <p className="text-paper/80 mb-6 max-w-2xl mx-auto">
            Med riktig cashback-kort kan du få tusenvis av kroner tilbake hvert år — helt uten å endre forbruket ditt.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/kredittkort/beste-kredittkort-2026" className="inline-block bg-paper text-ink font-bold px-6 py-3 rounded-md hover:bg-paper-alt transition-colors">
              Sammenlign kredittkort
            </Link>
            <Link href="/kredittkort/kredittkort-uten-arsavgift" className="inline-block bg-amber-warm text-paper font-bold px-6 py-3 rounded-md hover:opacity-90 transition-opacity">
               Sjekk gebyrfrie kort
            </Link>
          </div>
        </section>

        {/* RELATERTE ARTIKLER */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4"> Relaterte artikler</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link href="/kredittkort/slik-fungerer-kredittscore-norge" className="block bg-white rounded-xl p-5 border border-gray-200 hover:border-accent-400 transition-colors group">
              <div className="flex items-center gap-3">
                <div>
                  <h3 className="font-bold text-gray-900 group-hover:text-accent-700">Kredittscore i Norge</h3>
                  <p className="text-gray-500 text-sm">Lær hvordan banker vurderer deg</p>
                </div>
              </div>
            </Link>
            <Link href="/lan/refinansiering-spar-paa-gjelden" className="block bg-white rounded-xl p-5 border border-gray-200 hover:border-accent-400 transition-colors group">
              <div className="flex items-center gap-3">
                <div>
                  <h3 className="font-bold text-gray-900 group-hover:text-accent-700">Refinansiering</h3>
                  <p className="text-gray-500 text-sm">Spar tusenvis på å samle gjelden</p>
                </div>
              </div>
            </Link>
          </div>
        </section>

        <p className="text-sm text-gray-400 pt-8 border-t">
          Sist oppdatert: 12. april 2026. Cashback-satser og vilkår kan endres. Sjekk alltid bankens nettsider for oppdaterte betingelser.
        </p>
      </article>
    </>
  )
}