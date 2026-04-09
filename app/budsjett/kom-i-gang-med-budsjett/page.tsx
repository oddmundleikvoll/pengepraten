import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Kom i gang med budsjett: En komplett guide for nordmenn 2026',
  description: 'Lær hvordan du lager et budsjett som fungerer. Vi guider deg gjennom 50/30/20-regelen, faste vs variable utgifter, og gir deg en gratis mal å starte med.',
  keywords: ['budsjett', 'personlig økonomi', '50/30/20-regelen', 'budsjettering', 'sparepenger', 'budsjettmal'],
}

export default function KomIGangMedBudsjett() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-amber-500 to-orange-600 text-white py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <nav className="text-amber-100 text-sm mb-4">
            <Link href="/" className="hover:text-white">Hjem</Link>
            <span className="mx-2">/</span>
            <Link href="/budsjett" className="hover:text-white">Budsjett</Link>
            <span className="mx-2">/</span>
            <span>Kom i gang med budsjett</span>
          </nav>
          <span className="inline-block px-3 py-1 text-xs font-semibold bg-white/20 rounded-full mb-4">
            Oppdatert april 2026
          </span>
          <h1 className="text-3xl md:text-4xl font-black mb-4">
            Kom i gang med budsjett: En komplett guide for nordmenn
          </h1>
          <p className="text-amber-100 text-lg">
            Lær hvordan du lager et budsjett som faktisk fungerer. Fra 50/30/20-regelen 
            til praktiske tips — vi guider deg hele veien.
          </p>
        </div>
      </section>

      {/* Article content */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 py-12 article-content">
        <p className="text-xl text-gray-600 leading-relaxed mb-8">
          «Jeg vet ikke hvor pengene blir av.» Det er en setning vi hører ofte. 
          Og det er nettopp derfor et budsjett er så verdifullt. Et budsjett er ikke 
          en stram økonomisk tvangstrøye — det er et verktøy for å sikre at pengene 
          dine går til det som faktisk betyr noe for deg. I denne guiden viser vi deg 
          nøyaktig hvordan du kommer i gang.
        </p>

        <div className="bg-blue-50 border-l-4 border-blue-500 rounded-r-xl p-6 my-8">
          <h3 className="font-bold text-norsk-dark mb-2">💡 Visste du at...</h3>
          <p className="text-gray-700">
            Ifølge en undersøkelse fra Forbrukerrådet har <strong>6 av 10 nordmenn</strong> 
            enten ikke budsjett eller følger det ikke aktivt. Samtidig viser studier at 
            de som har et aktivt budsjett sparer i gjennomsnitt 20% mer enn de som ikke har det.
          </p>
        </div>

        <h2>Hvorfor budsjettere?</h2>
        <p>
          Før vi går inn på hvordan, la oss se på hvorfor budsjettering er verdt innsatsen:
        </p>
        <ul>
          <li><strong>Oversikt:</strong> Du vet nøyaktig hvor pengene går</li>
          <li><strong>Kontroll:</strong> Du bestemmer bevisst hva pengene skal brukes til</li>
          <li><strong>Ro:</strong> Ingen mer bekymring om det er penger igjen til regningene</li>
          <li><strong>Måloppnåelse:</strong> Lettere å spare til det som betyr noe for deg</li>
          <li><strong>Frihet:</strong> Ja, faktisk — et budsjett gir deg frihet til å bruke penger uten dårlig samvittighet</li>
        </ul>

        <h2>Steg 1: Kartlegg inntektene dine</h2>
        <p>
          Første steg i ethvert budsjett er å vite hva du har å rutte med. 
          List opp alle faste inntekter:
        </p>
        <ul>
          <li>Lønn (etter skatt)</li>
          <li>Barnetrygd</li>
          <li>Stønader (boligstøtte, kontantstøtte, etc.)</li>
          <li>Andre faste inntekter (leieinntekt, etc.)</li>
        </ul>

        <div className="bg-amber-50 border-l-4 border-amber-400 rounded-r-xl p-6 my-8">
          <h3 className="font-bold text-norsk-dark mb-2">⚠️ Viktig å huske på</h3>
          <p className="text-gray-700">
            Bruk <strong>netto inntekt</strong> — altså det som faktisk kommer inn på kontoen 
            etter skatt og andre trekk. Hvis inntekten varierer (f.eks. provisjonsbasert lønn), 
            bruk et gjennomsnitt av de siste 6-12 månedene.
          </p>
        </div>

        <h2>Steg 2: Kartlegg faste utgifter</h2>
        <p>
          Neste steg er å finne ut hva som går til faste, nødvendige utgifter. 
          Disse er stort sett umulige å kutte i:
        </p>
        <ul>
          <li>Husleie/boliglån</li>
          <li>Kommunal avgift</li>
          <li>Strøm</li>
          <li>Forsikringer</li>
          <li>Lån (forbrukslån, billån, studentlån)</li>
          <li>Mobilabonnement</li>
          <li>Internett/TV</li>
          <li>Barnehage/SFO</li>
          <li>Medlemskap (trening, fagforening)</li>
        </ul>

        <p>
          <strong>Tips:</strong> Gå gjennom kontoutskriftene for de siste 3 månedene 
          for å sikre at du ikke glemmer noe.
        </p>

        <h2>Steg 3: Kartlegg variable utgifter</h2>
        <p>
          Variable utgifter er de som varierer fra måned til måned, og som du 
          i større grad kan påvirke:
        </p>
        <ul>
          <li>Mat og dagligvarer</li>
          <li>Transport (bensin, kollektivt)</li>
          <li>Klær og sko</li>
          <li>Personlig pleie</li>
          <li>Hobbyer og fritid</li>
          <li>Underholdning (streaming, uteliv)</li>
          <li>Gaver</li>
          <li>Reiser</li>
        </ul>

        <p>
          Her er det ofte mulig å finne potensial for sparing. Spør deg selv: 
          «Hva gir meg virkelig verdi?» og «Hva bruker jeg penger på av gammel vane?»
        </p>

        <h2>[VIZ: Sirkeldiagram som viser 50/30/20-fordeling]</h2>
        <p>
          Et visuelt sirkeldiagram som illustrerer fordelingen:
        </p>
        <ul>
          <li>50% — Behov (bolig, mat, transport, forsikringer)</li>
          <li>30% — Ønsker (restauranter, underholdning, hobbyer)</li>
          <li>20% — Sparing og gjeld (buffer, BSU, ekstra nedbetaling)</li>
        </ul>

        <h2>Steg 4: Bruk 50/30/20-regelen</h2>
        <p>
          En av de enkleste måtene å strukturere budsjettet på er den såkalte 
          <strong> 50/30/20-regelen</strong>:
        </p>

        <div className="bg-gray-50 rounded-xl p-6 my-6">
          <h4 className="font-bold text-norsk-dark mb-3">50/30/20-regelen forklart</h4>
          <ul className="space-y-3">
            <li>
              <strong>50% til behov:</strong> Det du må ha for å leve — bolig, mat, 
              transport, forsikringer, minimumsbeløp på lån
            </li>
            <li>
              <strong>30% til ønsker:</strong> Det som gjør livet bedre — restauranter, 
              underholdning, hobbyer, klær
            </li>
            <li>
              <strong>20% til sparing og gjeld:</strong> Buffer, BSU, ekstra nedbetaling 
              på lån, langsiktig sparing
            </li>
          </ul>
        </div>

        <p>
          <strong>Eksempel:</strong> Med 30.000 kr i netto månedslønn:
        </p>
        <ul>
          <li>15.000 kr til behov</li>
          <li>9.000 kr til ønsker</li>
          <li>6.000 kr til sparing og gjeld</li>
        </ul>

        <div className="bg-green-50 border-l-4 border-green-500 rounded-r-xl p-6 my-8">
          <h3 className="font-bold text-norsk-dark mb-2">💡 Visste du at...</h3>
          <p className="text-gray-700">
            50/30/20-regelen ble populærisert av senator Elizabeth Warren i boken 
            «All Your Worth». Den er enkel å huske og fungerer for de fleste, men 
            den er ikke hugget i stein. I Norge, med høye boligkostnader, kan mange 
            trenge å justere til 60/20/20.
          </p>
        </div>

        <h2>Steg 5: Sett opp budsjettet ditt</h2>
        <p>
          Nå som du har oversikt over inntekter og utgifter, er det tid for å sette 
          opp selve budsjettet. Du kan bruke:
        </p>
        <ul>
          <li><strong>Excel/Google Sheets:</strong> Mest fleksibelt, men krever litt oppsett</li>
          <li><strong>Budsjettapper:</strong> Sparebank 1, DNB og andre banker har egne apper</li>
          <li><strong>Vår gratis budsjettmal:</strong> Ferdig oppsatt med norske kategorier</li>
        </ul>

        <h3>Struktur for et enkelt månedsbudsjett</h3>
        <div className="bg-gray-50 rounded-xl p-6 my-6">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b">
                <th className="text-left py-2">Kategori</th>
                <th className="text-right py-2">Budsjett</th>
                <th className="text-right py-2">Faktisk</th>
                <th className="text-right py-2">Differanse</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="py-2 font-medium" colSpan={4}>Inntekter</td>
              </tr>
              <tr className="border-b">
                <td className="py-2 pl-4">Lønn</td>
                <td className="text-right">30.000</td>
                <td className="text-right">30.000</td>
                <td className="text-right">0</td>
              </tr>
              <tr className="border-b font-medium">
                <td className="py-2">Totalt</td>
                <td className="text-right">30.000</td>
                <td className="text-right">30.000</td>
                <td className="text-right">0</td>
              </tr>
              <tr className="border-b">
                <td className="py-2 font-medium" colSpan={4}>Faste utgifter</td>
              </tr>
              <tr className="border-b">
                <td className="py-2 pl-4">Husleie</td>
                <td className="text-right">10.000</td>
                <td className="text-right">10.000</td>
                <td className="text-right">0</td>
              </tr>
              <tr className="border-b">
                <td className="py-2 pl-4">Strøm</td>
                <td className="text-right">1.500</td>
                <td className="text-right">1.200</td>
                <td className="text-right text-green-600">+300</td>
              </tr>
              <tr className="border-b">
                <td className="py-2 pl-4">Forsikringer</td>
                <td className="text-right">1.000</td>
                <td className="text-right">1.000</td>
                <td className="text-right">0</td>
              </tr>
              <tr className="border-b font-medium">
                <td className="py-2">Totalt faste</td>
                <td className="text-right">12.500</td>
                <td className="text-right">12.200</td>
                <td className="text-right text-green-600">+300</td>
              </tr>
              <tr className="border-b">
                <td className="py-2 font-medium" colSpan={4}>Variable utgifter</td>
              </tr>
              <tr className="border-b">
                <td className="py-2 pl-4">Mat</td>
                <td className="text-right">4.000</td>
                <td className="text-right">4.500</td>
                <td className="text-right text-red-600">-500</td>
              </tr>
              <tr className="border-b">
                <td className="py-2 pl-4">Transport</td>
                <td className="text-right">2.000</td>
                <td className="text-right">1.800</td>
                <td className="text-right text-green-600">+200</td>
              </tr>
              <tr className="border-b font-medium">
                <td className="py-2">Totalt variable</td>
                <td className="text-right">6.000</td>
                <td className="text-right">6.300</td>
                <td className="text-right text-red-600">-300</td>
              </tr>
              <tr className="border-b">
                <td className="py-2 font-medium" colSpan={4}>Sparing</td>
              </tr>
              <tr className="border-b">
                <td className="py-2 pl-4">Buffer</td>
                <td className="text-right">3.000</td>
                <td className="text-right">3.000</td>
                <td className="text-right">0</td>
              </tr>
              <tr className="border-b font-medium">
                <td className="py-2">Totalt sparing</td>
                <td className="text-right">3.000</td>
                <td className="text-right">3.000</td>
                <td className="text-right">0</td>
              </tr>
              <tr className="font-bold">
                <td className="py-2">Resultat</td>
                <td className="text-right">8.500</td>
                <td className="text-right">8.500</td>
                <td className="text-right">0</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2>Steg 6: Følg opp og juster</h2>
        <p>
          Et budsjett er ikke noe du setter opp én gang og glemmer. Det krever 
          løpende oppfølging:
        </p>

        <h3>Ukentlig sjekk (5 minutter)</h3>
        <ul>
          <li>Har jeg brukt mer enn planlagt på mat denne uken?</li>
          <li>Er det noen uforutsette utgifter på vei?</li>
          <li>Holder jeg meg innenfor rammene for «ønsker»?</li>
        </ul>

        <h3>Månedlig evaluering (30 minutter)</h3>
        <ul>
          <li>Sammenlign budsjetterte og faktiske utgifter</li>
          <li>Identifiser hvor du gikk over/under budsjettet</li>
          <li>Juster neste måneds budsjett basert på erfaringene</li>
          <li>Celebrer seire — klarte du å spare mer enn planlagt?</li>
        </ul>

        <h2>Praktiske tips for å holde budsjettet</h2>

        <h3>1. Bruk kontanter for problemkategorier</h3>
        <p>
          Hvis du alltid bruker for mye på «impulskjøp» eller «kaffe ute», prøv 
          å ta ut kontanter for disse kategoriene. Når kontantene er tomme, er 
          kategorien tom.
        </p>

        <h3>2. Automatiser sparingen</h3>
        <p>
          Sett opp automatisk trekk til sparekonto dagen etter lønning. 
          «Spar først, bruk resten» er et av de mest effektive prinsippene.
        </p>

        <h3>3. Ha en bufferpost</h3>
        <p>
          Legg inn en «bufferpost» på 5-10% av budsjettet til uforutsette utgifter. 
          Hvis du ikke bruker den, overfør til sparing.
        </p>

        <h3>4. Planlegg for irregulære utgifter</h3>
        <p>
          Julegaver, ferie og forsikringer kommer hvert år, men mange glemmer dem 
          i månedsbudsjettet. Sett av penger hver måned til en «årlige utgifter»-konto.
        </p>

        <div className="bg-amber-50 border-l-4 border-amber-400 rounded-r-xl p-6 my-8">
          <h3 className="font-bold text-norsk-dark mb-2">⚠️ Vanlige budsjett-feller</h3>
          <ul className="text-gray-700 space-y-2">
            <li>Å være for ambisiøs — budsjettet må være realistisk</li>
            <li>Å glemme irregulære utgifter (forsikringer, vedlikehold)</li>
            <li>Å ikke ha rom for moro — et for stramt budsjett fører til opprør</li>
            <li>Å gi opp etter én dårlig måned — det er en prosess, ikke en destinasjon</li>
          </ul>
        </div>

        <h2>Spesialtilfeller</h2>

        <h3>Budsjett for familie</h3>
        <p>
          Med barn i husstanden øker kompleksiteten. I tillegg til de faste utgiftene 
          må du ta høyde for:
        </p>
        <ul>
          <li>Barnehage/SFO (varierer ofte med 50% i sommerferien)</li>
          <li>Aktiviteter (fotball, svømming, musikk)</li>
          <li>Barneklær (vokser de ut av det hele tiden)</li>
          <li>Bursdager (både egne barn og venner)</li>
        </ul>

        <h3>Budsjett ved variable inntekter</h3>
        <p>
          Har du provisjonsbasert lønn eller er selvstendig næringsdrivende? 
          Bruk et gjennomsnitt av de siste 12 månedene, og legg inn en ekstra 
          stor buffer for måneder med lav inntekt.
        </p>

        <h3>Budsjett for å betale ned gjeld</h3>
        <p>
          Hvis du har kredittkortgjeld eller forbrukslån, bør du prioritere å 
          bli kvitt disse før du sparer (bortsett fra et minimumsnødfond). 
          Les mer i vår guide om <Link href="/lan/refinansiering-spar-paa-gjelden" className="text-primary-600 hover:underline">refinansiering</Link>.
        </p>

        <h2>Oppsummering: Kom i gang i dag</h2>
        <ol>
          <li><strong>Kartlegg inntekter:</strong> Hva har du å rutte med hver måned?</li>
          <li><strong>Kartlegg utgifter:</strong> Både faste og variable</li>
          <li><strong>Bruk 50/30/20:</strong> Fordel mellom behov, ønsker og sparing</li>
          <li><strong>Sett opp budsjett:</strong> Bruk Excel, en app eller vår mal</li>
          <li><strong>Følg opp:</strong> Evaluer og juster regelmessig</li>
        </ol>

        <p>
          Husk: Et budsjett er ikke et mål i seg selv — det er et verktøy for å 
          hjelpe deg å bruke pengene dine på det som betyr noe for deg. Det er 
          bedre med et «godt nok» budsjett du faktisk følger, enn et perfekt 
          budsjett som ligger i skuffen.
        </p>

        <div className="bg-primary-50 rounded-xl p-6 my-8">
          <h3 className="font-bold text-norsk-dark mb-2">Få hjelp til å komme i gang</h3>
          <p className="text-gray-700 mb-4">
            Å sette opp et budsjett for første gang kan virke overveldende. Derfor 
            har vi laget en gratis budsjettmal i Google Sheets — ferdig oppsatt med 
            norske kategorier og automatiske beregninger. Alt du trenger å gjøre er 
            å fylle inn dine tall.
          </p>
          <Link
            href="/budsjett"
            className="inline-flex items-center gap-2 bg-primary-600 text-white font-medium py-2 px-4 rounded-lg hover:bg-primary-700 transition-colors"
          >
            Last ned gratis budsjettmal →
          </Link>
        </div>

        <h2>Kilder og videre lesing</h2>
        <ul>
          <li>Forbrukerrådet: Guide til personlig budsjett</li>
          <li>Finans Norge: Økonomisk opplæring</li>
          <li>Warren, E. & Warren Tyagi, A.: «All Your Worth» (bok)</li>
        </ul>

        <p className="text-sm text-gray-500 mt-8">
          <strong>Forfatter:</strong> Pengepraten | <strong>Sist oppdatert:</strong> 9. april 2026
          <br />
          Artikkelen er ment som veiledning og utgjør ikke finansiell rådgivning. 
          Vurder din egen situasjon nøye før du tar økonomiske beslutninger.
        </p>
      </article>
    </>
  )
}
