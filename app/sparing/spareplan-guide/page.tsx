import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Slik setter du opp en spareplan som faktisk fungerer i 2026',
  description: 'Lær hvordan du bygger en spareplan som holder seg over tid. Vi guider deg gjennom målsetting, automatisk sparing og de beste sparekontoene.',
  keywords: ['spareplan', 'sparing', 'sparekonto', 'BSU', 'nødfond', 'automatisk sparing', 'sparemål'],
}

export default function SpareplanGuide() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-green-600 to-green-800 text-white py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <nav className="text-green-200 text-sm mb-4">
            <Link href="/" className="hover:text-white">Hjem</Link>
            <span className="mx-2">/</span>
            <Link href="/sparing" className="hover:text-white">Sparing</Link>
            <span className="mx-2">/</span>
            <span>Spareplan guide</span>
          </nav>
          <span className="inline-block px-3 py-1 text-xs font-semibold bg-white/20 rounded-full mb-4">
            Oppdatert april 2026
          </span>
          <h1 className="text-3xl md:text-4xl font-black mb-4">
            Slik setter du opp en spareplan som faktisk fungerer
          </h1>
          <p className="text-green-100 text-lg">
            En steg-for-steg guide til å bygge en spareplan som holder seg. 
            Fra nødfond til langsiktig sparing — vi viser deg hvordan.
          </p>
        </div>
      </section>

      {/* Article content */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 py-12 article-content">
        <p className="text-xl text-gray-600 leading-relaxed mb-8">
          «Jeg skal begynne å spare» — det har de fleste av oss sagt mange ganger. 
          Likevel står sparekontoen tom måned etter måned. Hva er det som skiller 
          de som faktisk klarer å bygge opp en solid sparebuffer fra de som ikke gjør det? 
          Svaret er enkel: De har en plan. I denne guiden viser vi deg nøyaktig hvordan 
          du setter opp en spareplan som fungerer — og som du faktisk klarer å følge.
        </p>

        <div className="bg-blue-50 border-l-4 border-blue-500 rounded-r-xl p-6 my-8">
          <h3 className="font-bold text-norsk-dark mb-2">💡 Visste du at...</h3>
          <p className="text-gray-700">
            Nordmenn har i gjennomsnitt <strong>245.000 kroner</strong> på sparekonto, 
            men 40% har mindre enn 50.000 kroner i buffer. En god spareplan kan være 
            forskjellen på økonomisk trygghet og søvnløse netter.
          </p>
        </div>

        <h2>Hvorfor de fleste spareplaner feiler</h2>
        <p>
          Før vi går gjennom hvordan du lager en spareplan som fungerer, la oss se 
          på hvorfor så mange feiler:
        </p>
        <ul>
          <li><strong>For ambisiøse mål:</strong> «Jeg skal spare 5.000 i måneden» når budsjettet knapt tillater 500</li>
          <li><strong>Manglende automatisering:</strong> Sparepengene blir igjen på brukskontoen — og brukt opp</li>
          <li><strong>Uklare mål:</strong> «Jeg skal spare» er ikke et mål. «Jeg skal spare 30.000 til ferie» er det</li>
          <li><strong>All-or-nothing-tenkning:</strong> Én dårlig måned fører til at hele planen legges på hylla</li>
        </ul>

        <p>
          Den gode nyheten? Alle disse problemene kan løses med en strukturert tilnærming.
        </p>

        <h2>Steg 1: Start med nødfondet</h2>
        <p>
          Før du sparer til ferie, bolig eller pensjon, må du ha et nødfond. 
          Dette er sparepenger som skal brukes kun i nødstilfeller — ved sykdom, 
          arbeidsledighet eller uforutsette utgifter.
        </p>

        <h3>Hvor stort bør nødfondet være?</h3>
        <p>
          Som tommelfingerregel bør nødfondet dekke <strong>3-6 måneders utgifter</strong>. 
          Har du familie og barn, bør du ligge mot 6 måneder. Er du ung og singel, 
          kan 3 måneder være tilstrekkelig.
        </p>

        <div className="bg-gray-50 rounded-xl p-6 my-6">
          <h4 className="font-bold text-norsk-dark mb-3">Eksempel: Nødfond for en familie</h4>
          <ul className="space-y-2">
            <li>Månedlige faste utgifter: 25.000 kr</li>
            <li>Ønsket buffer: 6 måneder</li>
            <li><strong>Mål for nødfond: 150.000 kr</strong></li>
          </ul>
        </div>

        <div className="bg-amber-50 border-l-4 border-amber-400 rounded-r-xl p-6 my-8">
          <h3 className="font-bold text-norsk-dark mb-2">⚠️ Viktig å huske på</h3>
          <p className="text-gray-700">
            Nødfondet skal være lett tilgjengelig — men ikke FOR lett. Plasser det på 
            en sparekonto uten brukskort, slik at du ikke fristes til å bruke det på 
            impulskjøp. Samtidig må du kunne få tak i pengene raskt hvis krisen inntreffer.
          </p>
        </div>

        <h2>Steg 2: Sett konkrete sparemål</h2>
        <p>
          Når nødfondet er på plass, er det tid for å sette sparemål. Gode sparemål 
          følger SMART-prinsippet:
        </p>
        <ul>
          <li><strong>S</strong>pesifikt — nøyaktig hva skal du spare til?</li>
          <li><strong>M</strong>ålbart — hvor mye penger trenger du?</li>
          <li><strong>A</strong>ktuelt — er målet realistisk?</li>
          <li><strong>R</strong>elevant — betyr dette noe for deg?</li>
          <li><strong>T</strong>idsavgrenset — når skal du ha spart beløpet?</li>
        </ul>

        <h3>Eksempel på SMART sparemål</h3>
        <p>
          <strong>Dårlig mål:</strong> «Jeg skal spare til ferie."
        </p>
        <p>
          <strong>SMART mål:</strong> «Jeg skal spare 25.000 kroner til en ukes ferie 
          i Spania i juli 2027. Det betyr 1.040 kroner i måneden de neste 24 månedene."
        </p>

        <h2>[VIZ: Flytskjema for spareplan — fra nødfond til langsiktig sparing]</h2>
        <p>
          Et visuelt flytskjema som viser:
        </p>
        <ul>
          <li>Start: Har du nødfond (3-6 måneder)?</li>
          <li>Hvis nei → Prioriter nødfond først</li>
          <li>Hvis ja → Gå til neste spørsmål: Er du under 34 år?</li>
          <li>Hvis ja → Prioriter BSU (maks 27.500 kr/år)</li>
          <li>Hvis nei → Vurder langsiktig sparing (IPS, fond, aksjer)</li>
        </ul>

        <h2>Steg 3: Velg riktig spareform</h2>
        <p>
          Ikke all sparing er like. Avhengig av målet ditt, bør du velge ulik spareform:
        </p>

        <h3>Nødfond: Høyrentekonto uten binding</h3>
        <p>
          For nødfondet trenger du en konto som er:
        </p>
        <ul>
          <li>Raskt tilgjengelig (uttak innen 1-3 dager)</li>
          <li>Uten bindingstid</li>
          <li>Med konkurransedyktig rente</li>
        </ul>
        <p>
          <strong>Anbefaling:</strong> Sbanken, Bluestep eller BN Bank — alle tilbyr 
          god rente uten binding. Sjekk vår guide om <Link href="/sparing/beste-sparekonto-2026" className="text-primary-600 hover:underline">beste sparekonto 2026</Link>.
        </p>

        <h3>Kortsiktig sparing (1-3 år): Høyrentekonto med binding</h3>
        <p>
          Skal du spare til ferie, bil eller oppussing om 1-3 år? Da kan du tåle 
          litt bindingstid i bytte mot høyere rente.
        </p>
        <p>
          <strong>Anbefaling:</strong> Høyrentekonto med 3-12 måneders binding. 
          Rente: 3,5-4,5% (per april 2026).
        </p>

        <h3>Langsiktig sparing (5+ år): BSU, IPS eller fond</h3>
        <p>
          For langsiktig sparing bør du vurdere alternativer med høyere forventet avkastning:
        </p>
        <ul>
          <li><strong>BSU (under 34 år):</strong> 10% skattefradrag + god rente. Dette er den beste spareformen for unge.</li>
          <li><strong>IPS:</strong> Pensjonssparing med skattefradrag. Pengene er bundet til pensjonsalder.</li>
          <li><strong>Fond/aksjer:</strong> Høyere risiko, men også høyere forventet avkastning over tid.</li>
        </ul>

        <div className="bg-green-50 border-l-4 border-green-500 rounded-r-xl p-6 my-8">
          <h3 className="font-bold text-norsk-dark mb-2">💡 Visste du at...</h3>
          <p className="text-gray-700">
            Med BSU får du ikke bare skattefradrag — du får også ofte bedre rente enn 
            på vanlig sparekonto. Kombinert kan dette gi en effektiv avkastning på 
            8-12% per år, avhengig av rentenivået.
          </p>
        </div>

        <h2>Steg 4: Automatiser sparingen</h2>
        <p>
          Hemmeligheten bak alle vellykkede spareplaner er én ting: <strong>automatisering</strong>. 
          Når sparingen skjer automatisk, krever det ikke viljestyrke.
        </p>

        <h3>Slik setter du opp automatisk sparing</h3>
        <ol>
          <li><strong>Fast trekk fra lønn:</strong> Be arbeidsgiver sette av en prosentandel til sparekonto</li>
          <li><strong>Automatisk overføring:</strong> Sett opp fast trekk fra brukskonto til sparekonto dagen etter lønn</li>
          <li><strong>Rund opp:</strong> Noen banker tilbyr «spare-på-runden» — kjøp for 97 kr, spar 3 kr</li>
        </ol>

        <p>
          <strong>Det viktigste prinsippet:</strong> Spar først, bruk resten. 
          Ikke spar det som er igjen etter forbruk — bruk det som er igjen etter sparing.
        </p>

        <h2>Steg 5: Følg opp og juster</h2>
        <p>
          En spareplan er ikke skrevet i stein. Du bør evaluere den regelmessig:
        </p>

        <h3>Månedlig gjennomgang (5 minutter)</h3>
        <ul>
          <li>Har sparetrekket gått som det skal?</li>
          <li>Er det uforutsette utgifter som må tas fra sparekontoen?</li>
          <li>Holder jeg meg innenfor budsjettet?</li>
        </ul>

        <h3>Kvartalsvis evaluering (30 minutter)</h3>
        <ul>
          <li>Er jeg på rett spor mot sparemålene?</li>
          <li>Har inntekten eller utgiftene endret seg?</li>
          <li>Bør jeg justere sparebeløpet?</li>
          <li>Er renten på sparekontoen fortsatt konkurransedyktig?</li>
        </ul>

        <h2>Eksempel: En komplett spareplan</h2>
        <p>
          La oss sette sammen alt i en konkret plan for en ung familie:
        </p>

        <div className="bg-gray-50 rounded-xl p-6 my-6">
          <h4 className="font-bold text-norsk-dark mb-3">Familien Hansen: Månedlig spareplan</h4>
          <ul className="space-y-3">
            <li><strong>Inntekt:</strong> 55.000 kr i måneden (etter skatt)</li>
            <li><strong>Faste utgifter:</strong> 35.000 kr</li>
            <li><strong>Tilgjengelig for sparing:</strong> 20.000 kr</li>
          </ul>
          
          <div className="mt-4 space-y-2">
            <p><strong>Sparing:</strong></p>
            <ul className="ml-4 space-y-1 text-sm">
              <li>• Nødfond (til mål nådd): 5.000 kr → deretter 0 kr</li>
              <li>• BSU (mor, 32 år): 2.300 kr (maks kvote)</li>
              <li>• BSU (far, 33 år): 2.300 kr (maks kvote)</li>
              <li>• Feriefond: 2.000 kr</li>
              <li>• Langsiktig sparing (fond): 3.000 kr</li>
              <li><strong>Totalt spart: 14.600 kr/mnd</strong></li>
            </ul>
          </div>
        </div>

        <h2>Vanlige feil å unngå</h2>

        <h3>Feil 1: Spare for mye, for fort</h3>
        <p>
          Det er fristende å sette ambisiøse sparemål, men hvis du sparer så mye at 
          du føler deg fattig, er sannsynligheten stor for at du gir opp. Start moderat 
          og øk gradvis.
        </p>

        <h3>Feil 2: Ha alle eggene i samme kurv</h3>
        <p>
          Ikke plasser alt på én sparekonto. Ha nødfondet ett sted, BSU et annet, 
          og langsiktig sparing et tredje sted. Dette reduserer fristelsen til å 
          «låne» fra langsiktig sparing til kortsiktige behov.
        </p>

        <h3>Feil 3: Glemme å feire milepæler</h3>
        <p>
          Når du når et sparemål — feir det! Nødfondet på plass? Ta familien ut på 
          middag. Feriekontoen full? Bestill reisen. Å feire suksess gjør det lettere 
          å fortsette.
        </p>

        <h2>Oppsummering: Din spareplan på 5 steg</h2>
        <ol>
          <li><strong>Start med nødfond:</strong> 3-6 måneders utgifter på en fleksibel sparekonto</li>
          <li><strong>Sett SMART-mål:</strong> Spesifikke, målbare og tidsavgrensede sparemål</li>
          <li><strong>Velg riktig spareform:</strong> BSU, høyrentekonto, fond — avhengig av mål og tidshorisont</li>
          <li><strong>Automatiser:</strong> Sett opp faste trekk slik at sparingen skjer uten at du tenker på det</li>
          <li><strong>Følg opp:</strong> Evaluer månedlig og kvartalsvis, juster etter behov</li>
        </ol>

        <div className="bg-primary-50 rounded-xl p-6 my-8">
          <h3 className="font-bold text-norsk-dark mb-2">Få hjelp til å komme i gang</h3>
          <p className="text-gray-700 mb-4">
            Å sette opp en spareplan kan virke overveldende, men det trenger ikke være det. 
            Med vår gratis budsjettmal får du full oversikt over inntekter og utgifter — 
            og ser nøyaktig hvor mye du kan spare hver måned.
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
          <li>Finanstilsynet: Anbefalinger om sparing og plassering</li>
          <li>Forbrukerrådet: Guide til personlig økonomi</li>
          <li>Skatteetaten: Regler for BSU og IPS</li>
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
