import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Norges Bank hever renten til 4,25% i mai 2026: Hva betyr det for deg?',
  description: 'Norges Bank hevet styringsrenten fra 4,00% til 4,25% 7. mai 2026. Les hva det betyr for boliglån, sparing og forbrukslån — med konkrete tall og eksperttips.',
}

export default function NorgesBankHeverRentenMai2026() {
  return (
    <>
      {/* Hero — Nordic Clarity editorial */}
      <section className="bg-paper text-ink py-12 border-b border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <nav className="font-mono text-xs uppercase tracking-wider text-ink-muted mb-6">
            <Link href="/" className="hover:text-forest transition-colors">Hjem</Link>
            <span className="mx-2 text-border-strong">/</span>
            <Link href="/boliglan" className="hover:text-forest transition-colors">Boliglån</Link>
            <span className="mx-2 text-border-strong">/</span>
            <span className="text-ink">Norges Bank hever renten mai 2026</span>
          </nav>
          <div className="inline-block bg-forest-soft text-forest text-xs font-bold px-3 py-1 rounded-full mb-4">
            NYHET 7. MAI 2026
          </div>
          <h1 className="text-3xl md:text-4xl font-medium font-display leading-[1.08] mb-4">
            Norges Bank hever styringsrenten til 4,25%
          </h1>
          <p className="text-ink-muted text-lg max-w-2xl leading-relaxed">
            Etter rentemøtet 7. mai 2026 heves styringsrenten fra 4,00 % til 4,25 %. 
            Dette er første renteheving på over ett år. Her er hva det betyr for din 
            økonomi — med konkrete tall.
          </p>
        </div>
      </section>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 py-12 article-content">
        
        {/* Hva skjedde */}
        <h2>Hva skjedde 7. mai 2026?</h2>
        <p className="text-xl text-gray-600 leading-relaxed mb-8">
          Norges Banks komité for pengepolitikk og finansiell stabilitet besluttet å 
          heve styringsrenten med 0,25 prosentpoeng — fra <strong>4,00 % til 4,25 %</strong>. 
          Dette kom som en overraskelse for mange, etter flere rentekutt gjennom 2025.
        </p>
        <p>
          Hovedbegrunnelsen er at inflasjonen har vist seg mer seiglivet enn ventet. 
          Selv om prisveksten har kommet ned fra toppnivåene i 2022-2023, ligger den 
          fortsatt litt over Norges Banks mål på 2 %. Banken vurderer at en litt strammere 
          pengepolitikk er nødvendig for å sikre at inflasjonen kommer ned og blir der.
        </p>
        <p>
          Neste rentebeslutning offentliggjøres <strong>13. august 2026</strong> kl. 10:00. 
          Det er åtte rentemøter i året, og komiteen består av fem medlemmer. 
          Rentemøtet 17. juni 2026 holdt renten uendret på 4,25 %, men strammet 
          samtidig signalene i rentebanen.
        </p>

        {/* Konkret effekt */}
        <h2>Hva betyr 0,25 prosentpoeng for deg?</h2>
        <p>
          En økning på 0,25 prosentpoeng høres kanskje ikke mye ut, men på et stort 
          boliglån blir det betydelige beløp. Her er konkrete tall:
        </p>

        <h3>Boliglån på 3 millioner kroner</h3>
        <div className="overflow-x-auto my-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-primary-50">
                <th className="text-left p-3 border border-gray-200 font-semibold">Før heving (4,00 %)</th>
                <th className="text-left p-3 border border-gray-200 font-semibold">Etter heving (4,25 %)</th>
                <th className="text-left p-3 border border-gray-200 font-semibold">Endring</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white">
                <td className="p-3 border border-gray-200">Månedlig termin: ca. 15.800 kr</td>
                <td className="p-3 border border-gray-200 font-bold">Månedlig termin: ca. 16.200 kr</td>
                <td className="p-3 border border-gray-200 text-red-600 font-bold">+400 kr/mnd</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="p-3 border border-gray-200">Total rentekostnad: ca. 1.740.000 kr</td>
                <td className="p-3 border border-gray-200 font-bold">Total rentekostnad: ca. 1.860.000 kr</td>
                <td className="p-3 border border-gray-200 text-red-600 font-bold">+120.000 kr</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-sm text-gray-500 mb-8">
          * Beregnet med 25 års nedbetalingstid og flytende rente. Faktisk terminbeløp 
          avhenger av bank, belåningsgrad og individuelle vilkår.
        </p>

        <h3>Boliglån på 5 millioner kroner</h3>
        <div className="overflow-x-auto my-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-primary-50">
                <th className="text-left p-3 border border-gray-200 font-semibold">Før heving (4,00 %)</th>
                <th className="text-left p-3 border border-gray-200 font-semibold">Etter heving (4,25 %)</th>
                <th className="text-left p-3 border border-gray-200 font-semibold">Endring</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white">
                <td className="p-3 border border-gray-200">Månedlig termin: ca. 26.400 kr</td>
                <td className="p-3 border border-gray-200 font-bold">Månedlig termin: ca. 27.000 kr</td>
                <td className="p-3 border border-gray-200 text-red-600 font-bold">+600 kr/mnd</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="p-3 border border-gray-200">Total rentekostnad: ca. 2.920.000 kr</td>
                <td className="p-3 border border-gray-200 font-bold">Total rentekostnad: ca. 3.100.000 kr</td>
                <td className="p-3 border border-gray-200 text-red-600 font-bold">+180.000 kr</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="bg-red-50 border-l-4 border-red-400 rounded-r-xl p-6 my-8">
          <h3 className="font-bold text-red-800 mb-2">⚠️ Viktig å merke seg</h3>
          <p className="text-sm text-red-700 leading-relaxed">
            Styringsrenten påvirker boliglånsrenten indirekte. Bankene justerer sine 
            utlånsrenter basert på egne funding-kostnader og konkurranse. Det tar 
            vanligvis 1-3 måneder før en styringsrenteendring fullt ut reflekteres i 
            boliglånsrentene. Noen banker har allerede varslet justeringer, mens andre 
            avventer.
          </p>
        </div>

        {/* Hva betyr det for ulike lånetyper */}
        <h2>Hva betyr rentehevingen for ulike lånetyper?</h2>

        <h3>Boliglån — størst påvirkning</h3>
        <p>
          Boliglån er den største gjelden de fleste har, og derfor der renteendringer 
          gjør mest utslag. Med styringsrente på 4,25 % ventes boliglånsrentene å ligge 
          i området <strong>4,8 % til 5,5 %</strong> for de fleste.
        </p>
        <p>
          De beste rentene finner du fortsatt hos <strong>OBOS</strong> (fra 4,71 % for 
          fleksible lån med god sikkerhet) og <strong>Sbanken</strong> (4,79 % ved 50 % 
          belåningsgrad). De tradisjonelle storbankene ligger nå rundt 4,95-5,00 %.
        </p>

        <h3>Forbrukslån og kredittkort — allerede høyt</h3>
        <p>
          Forbrukslån og kredittkortrenter er allerede svært høye i Norge. En renteheving 
          på 0,25 prosentpoeng vil kunne presse effektive renter på forbrukslån opp mot 
          <strong>15-25 %</strong>. Har du forbruksgjeld, bør du vurdere refinansiering til 
          et billigere lån så raskt som mulig.
        </p>

        <h3>Sparing — bedre innskuddsrente</h3>
        <p>
          På den positive siden: Høyere styringsrente betyr som regel bedre innskuddsrente. 
          Høyrentekontoer og sparekontoer kan få et lite løft. <strong>BN Bank</strong> tilbyr 
          allerede 4,40 % på høyrentekonto (saldo over 500.000 kr) og 5,60 % på BSU.
        </p>

        {/* Sammenligning med forrige rente */}
        <h2>Fra 4,00 % til 4,25 % — sammenligning</h2>
        <p>
          Dette er første renteheving siden 2023. Etter en periode med rentekutt gjennom 
          2024 og 2025, snudde altså Norges Bank kursen i mai 2026. Hva betyr det for 
          rentebanen fremover?
        </p>
        <ul>
          <li><strong>Juni 2026:</strong> Rentemøtet 17. juni holdt renten uendret på 4,25 %. 
            Komiteen strammet signalene i rentebanen — «i overkant av 4,5 %» ved utgangen av 2026.</li>
          <li><strong>August 2026:</strong> Nestse rentemøte 13. august. Markedet priser inn 
            omtrent 50 % sannsynlighet for heving til 4,50 % på dette møtet.</li>
          <li><strong>Høsten 2026:</strong> Hvis inflasjonen faller tilbake mot 2 %, kan 
            renten holdes stabil eller justeres nedover.</li>
          <li><strong>2027:</strong> De fleste analytikere venter styringsrente på 
            3,75-4,25 % ved utgangen av 2026, med mulig fall til 3,50-3,75 % i 2027.</li>
        </ul>

        {/* Hva bør du gjøre nå? */}
        <h2>Hva bør du gjøre nå? 5 konkrete tips</h2>

        <h3>1. Sjekk din nåværende boliglånsrente</h3>
        <p>
          Logg inn i nettbanken og sjekk hvilken rente du faktisk betaler. Mange har 
          «gammel» rente som ikke er justert etter siste rentekutt — eller som nå skal 
          justeres opp. Bruk vår kalkulator for å se hva du bør betale.
        </p>

        <h3>2. Forhandl med banken</h3>
        <p>
          Bankene har rom til å forhandle. Har du god betalingsevne, lav belåningsgrad 
          og et helhetlig kundeforhold? Be om bedre rente. Selv 0,10 prosentpoeng 
          forskjell betyr tusenvis av kroner på et stort lån.
        </p>

        <h3>3. Vurder fastrente hvis du vil ha forutsigbarhet</h3>
        <p>
          Med usikkerhet om fremtidig renteutvikling, kan fastrente være verdt å vurdere 
          for deg som verdsetter forutsigbarhet. 5-års fastrente ligger nå rundt 
          4,50-4,90 % — litt lavere enn flytende rente for de beste kundene.
        </p>

        <h3>4. Refinansier dyr gjeld</h3>
        <p>
          Har du forbrukslån med rente over 10 %? Vurder å refinansiere til et 
          samlelån eller boliglån med sikkerhet. Med boliglånsrenter rundt 5 %, 
          kan du spare enorme beløp.
        </p>

        <h3>5. Bygg opp buffer</h3>
        <p>
          Med høyere renter blir det viktigere enn noensinne å ha en solid økonomisk 
          buffer. Sørg for at du tåler renteøkninger på ytterligere 1-2 prosentpoeng 
          uten å få problemer med å betjene lånet.
        </p>

        {/* CTA til kalkulator */}
        <div className="bg-primary-50 rounded-xl p-6 my-8 border border-primary-100">
          <h3 className="font-bold text-norsk-dark mb-2">Beregn din nye månedlige kostnad</h3>
          <p className="text-sm text-gray-600 mb-4">
            Bruk vår boliglånskalkulator for å se nøyaktig hva rentehevingen betyr 
            for ditt lån. Justér renten fra 4,00 % til 4,25 % og se forskjellen.
          </p>
          <Link
            href="/verktoy/boliglanskalkulator"
            className="inline-flex items-center gap-2 bg-forest text-paper font-semibold py-3 px-6 rounded-md hover:bg-forest-mid transition-colors"
          >
            Boliglånskalkulator →
          </Link>
        </div>

        {/* Bankenes reaksjon */}
        <h2>Hvordan reagerer bankene?</h2>
        <p>
          De største bankene i Norge følger normalt Norges Banks renteendringer med 
          en viss forsinkelse. Her er status per mai 2026:
        </p>
        <ul>
          <li><strong>DNB:</strong> Har varslet at utlånsrentene vil bli vurdert i 
            lys av rentehevingen. Forventet justering: +0,15-0,25 prosentpoeng.</li>
          <li><strong>Nordea:</strong> Avventer, men indikerer at rentene kan justeres 
            oppover i løpet av sommeren.</li>
          <li><strong>SpareBank 1:</strong> Ingen umiddelbare endringer annonsert, 
            men årlig rentegjennomgang kan føre til justeringer.</li>
          <li><strong>Sbanken:</strong> Digital bank med lave kostnader — har 
            historisk justert raskere enn storbankene.</li>
          <li><strong>OBOS:</strong> OBOS-medlemmer får fortsatt blant de beste 
            rentene i markedet, med fleksible lån fra 4,71 %.</li>
        </ul>

        {/* Ofte stilte spørsmål */}
        <h2>Ofte stilte spørsmål</h2>

        <h3>Hvorfor hevet Norges Bank renten nå?</h3>
        <p>
          Hovedgrunnen er at inflasjonen har vist seg mer seiglivet enn ventet. 
          Selv om den har falt fra toppnivåene, ligger den fortsatt over 2 %-målet. 
          Banken vurderer at en strammere pengepolitikk er nødvendig for å få 
          inflasjonen helt under kontroll.
        </p>

        <h3>Hvor raskt påvirkes boliglånsrenten?</h3>
        <p>
          Det tar vanligvis 1-3 måneder før styringsrenteendringer fullt ut 
          reflekteres i boliglånsrentene. Noen banker justerer umiddelbart, 
          mens andre avventer. Sjekk din nettbank for eventuelle meldinger 
          om renteendringer.
        </p>

        <h3>Bør jå bytte til fastrente nå?</h3>
        <p>
          Det avhenger av din risikovillighet. Med usikkerhet om fremtidig 
          renteutvikling, kan fastrente gi forutsigbarhet. Men hvis renten 
          faller igjen, låser du deg til en høyere rente. De fleste økonomer 
          anbefaler fortsatt flytende rente for de fleste, spesielt med 
          forventning om stabil eller fallende rente på lengre sikt.
        </p>

        <h3>Hva betyr dette for førstegangskjøpere?</h3>
        <p>
          Høyere renter betyr høyere månedlige kostnader, men også lavere 
          boligpriser i mange områder. For førstegangskjøpere kan dette 
            være en fordel: Lavere kjøpspris kan oppveie høyere rente. 
          Bruk vår kalkulator for å sammenligne ulike scenarioer.
        </p>

        {/* Konklusjon */}
        <h2>Konklusjon</h2>
        <p>
          Norges Banks renteheving til 4,25 % i mai 2026 markerer et skifte 
          etter en periode med rentekutt. For boligeiere betyr det høyere 
          månedlige kostnader — men forskjellen er håndterbar for de fleste 
          med solid økonomi.
        </p>
        <p>
          Det viktigste du kan gjøre nå er å <strong>sjekke din egen rente</strong>, 
          <strong>forhandle med banken</strong>, og <strong>sikre at du har en økonomisk buffer</strong>. 
          På et boliglån på 3 millioner kroner betyr 0,25 prosentpoeng omtrent 
          <strong>400 kroner mer i måneden</strong> — eller <strong>120.000 kroner ekstra 
          over 25 år</strong>.
        </p>
        <p>
          Med riktig forhandling og eventuelt bankbytte, kan du fortsatt sikre 
          deg en konkurransedyktig rente — selv i et marked med stigende renter.
        </p>

        {/* Relaterte lenker */}
        <div className="bg-gray-50 rounded-xl p-6 mt-8">
          <h3 className="font-bold text-norsk-dark mb-4">Relaterte artikler</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/boliglan/boliglan-rente-2026" className="text-primary-600 hover:underline font-medium">
                Komplett oversikt over boliglånsrenter 2026 →
              </Link>
            </li>
            <li>
              <Link href="/verktoy/boliglanskalkulator" className="text-primary-600 hover:underline font-medium">
                Boliglånskalkulator →
              </Link>
            </li>
            <li>
              <Link href="/lan/nar-lonner-refinansiering" className="text-primary-600 hover:underline font-medium">
                Når lønner refinansiering seg? →
              </Link>
            </li>
            <li>
              <Link href="/bank/bytte-bank" className="text-primary-600 hover:underline font-medium">
                Guide til å bytte bank →
              </Link>
            </li>
          </ul>
        </div>

        {/* Disclaimer */}
        <div className="bg-amber-50 border-l-4 border-amber-400 rounded-r-xl p-6 mt-8">
          <h3 className="font-bold text-norsk-dark mb-2">Viktig å vite</h3>
          <p className="text-sm text-gray-700 leading-relaxed">
            Artikkelen er basert på offentlig informasjon fra Norges Bank og 
            bankenes nettsider per 7. mai 2026. Rentene er veiledende og kan 
            variere basert på din individuelle situasjon. Alltid sjekk den 
            effektive renten hos banken før du signerer låneavtaler. 
            Pengepraten.no er en uavhengig informasjonsside og ikke en bank 
            eller finansrådgiver.
          </p>
        </div>

        <p className="text-xs text-gray-400 mt-8">
          Publisert: 7. mai 2026 | Sist oppdatert: 7. mai 2026
        </p>
      </article>
    </>
  )
}
