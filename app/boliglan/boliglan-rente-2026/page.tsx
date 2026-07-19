import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Boliglånsrente juli 2026: Sjekk gjeldende renter og få best mulig vilkår',
  description: 'Se gjeldende boliglånsrenter i Norge juli 2026. Sammenligning av Landkreditt, Nybygger, Penni, Sbanken og flere. Få tips om hvordan du får beste rente.',
}

export default function Boliglansrente2026() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-600 to-accent-700 text-white py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <nav className="text-primary-200 text-sm mb-4">
            <Link href="/" className="hover:text-white">Hjem</Link>
            <span className="mx-2">/</span>
            <Link href="/boliglan" className="hover:text-white">Boliglån</Link>
            <span className="mx-2">/</span>
            <span>Boliglånsrente juli 2026</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-black mb-4">
            Boliglånsrente juli 2026: Komplett guide til dagens renter
          </h1>
          <p className="text-primary-100 text-lg max-w-2xl">
            Oppdatert oversikt over boliglånsrentene i Norge per juli 2026. Sammenlign banker,
            forstå Norges Bank-politikken, og lær hvordan du forhandler deg til
            bedre vilkår.
          </p>
        </div>
      </section>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 py-12 article-content">
        <p className="text-xl text-gray-600 leading-relaxed mb-8">
          Boliglånsrenten er blant de viktigste økonomiske beslutningene du tar i
          livet. Et par tideler i renteforskjell kan bety titusener av kroner — årlig.
          På et lån på 3 millioner over 25 år kan du fort tape 150.000-200.000 kroner
          på å velge feil bank.
        </p>
        <p className="text-gray-600 mb-8">
          Per juli 2026 holder Norges Bank styringsrenten på 4,25 % (sist vedtak 18.06.2026). Snitt for utestående boliglån er 5,08 % og nye lån 5,13 % (SSB mai 2026). Beste tilbud er 4,78 % effektiv (Landkreditt Bank, 50 % belåning). Neste rentebeslutning kommer 13.08.2026.
        </p>

        <h2>Gjeldende boliglånsrenter (juli 2026)</h2>
        <p className="text-sm text-gray-500 mb-4">
          Tabellen under viser effektive boliglånsrenter fra utvalgte norske banker
          (50 % belåningsgrad der ikke annet er oppgitt). Effektiv rente inkluderer alle gebyrer.
        </p>

        <div className="overflow-x-auto my-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-primary-50">
                <th className="text-left p-3 border border-gray-200 font-semibold">Bank</th>
                <th className="text-left p-3 border border-gray-200 font-semibold">Nominell rente</th>
                <th className="text-left p-3 border border-gray-200 font-semibold">Effektiv rente</th>
                <th className="text-left p-3 border border-gray-200 font-semibold">Vilkår / Merknad</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white">
                <td className="p-3 border border-gray-200 font-medium text-green-700">Landkreditt Bank</td>
                <td className="p-3 border border-gray-200 font-bold">~4,55 %</td>
                <td className="p-3 border border-gray-200 font-bold text-green-700">4,78 %</td>
                <td className="p-3 border border-gray-200">⭐ Beste i juli 2026 (inntil 50 % belåning)</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="p-3 border border-gray-200 font-medium">Nybygger (Spb. Øst)</td>
                <td className="p-3 border border-gray-200 font-bold">~4,60 %</td>
                <td className="p-3 border border-gray-200 font-bold text-green-700">4,81 %</td>
                <td className="p-3 border border-gray-200">Inntil 60 % belåning, ingen krav</td>
              </tr>
              <tr className="bg-white">
                <td className="p-3 border border-gray-200 font-medium">Penni (Eika)</td>
                <td className="p-3 border border-gray-200 font-bold">~4,60 %</td>
                <td className="p-3 border border-gray-200 font-bold text-green-700">4,85 %</td>
                <td className="p-3 border border-gray-200">Inntil 50 % belåning, digital</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="p-3 border border-gray-200 font-medium">DinBANK (Spb. Øst)</td>
                <td className="p-3 border border-gray-200 font-bold">~4,60 %</td>
                <td className="p-3 border border-gray-200 font-bold text-green-700">4,85 %</td>
                <td className="p-3 border border-gray-200">Inntil 50 % belåning</td>
              </tr>
              <tr className="bg-white">
                <td className="p-3 border border-gray-200 font-medium">Landkreditt Bank</td>
                <td className="p-3 border border-gray-200 font-bold">~4,65 %</td>
                <td className="p-3 border border-gray-200">4,90 %</td>
                <td className="p-3 border border-gray-200">Inntil 75 % belåning</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="p-3 border border-gray-200 font-medium">Sbanken (DNB)</td>
                <td className="p-3 border border-gray-200 font-bold">~4,75 %</td>
                <td className="p-3 border border-gray-200">5,00 %</td>
                <td className="p-3 border border-gray-200">Inntil 75 % belåning, ingen gebyrer</td>
              </tr>
              <tr className="bg-white">
                <td className="p-3 border border-gray-200 font-medium">Himla (Fana Spb.)</td>
                <td className="p-3 border border-gray-200 font-bold">~4,75 %</td>
                <td className="p-3 border border-gray-200">5,00 %</td>
                <td className="p-3 border border-gray-200">Inntil 75 % belåning</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="p-3 border border-gray-200 font-medium">DNB</td>
                <td className="p-3 border border-gray-200 font-bold">~4,85 %</td>
                <td className="p-3 border border-gray-200">5,10 %</td>
                <td className="p-3 border border-gray-200">Storbank — kundeforhold og bonus</td>
              </tr>
              <tr className="bg-white">
                <td className="p-3 border border-gray-200 font-medium">Nordea</td>
                <td className="p-3 border border-gray-200 font-bold">~4,90 %</td>
                <td className="p-3 border border-gray-200">5,15 %</td>
                <td className="p-3 border border-gray-200">Bonus ved helkundeforhold</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-xs text-gray-500 mb-8">
          * Oppdatert juli 2026 etter styringsrente på 4,25 %. Snitt på utestående boliglån: 5,08 % (SSB). Snitt nye: 5,13 %. Snitt nye fastrente: 5,33 %. Rentene er veiledende og kan variere basert på
          din økonomiske situasjon, belåningsgrad og lånebeløp. Kontakt banken direkte for et personlig tilbud.
        </p>

        <h3>Hva betyr dette for din lommebok?</h3>
        <p>
          For et boliglån på <strong>3 millioner kroner</strong> med 25 års løpetid og 4,78 % rente:
        </p>
        <ul>
          <li>Månedlig termin: <strong>ca. 17.250 kr</strong></li>
          <li>Total rentekostnad over lånets løpetid: <strong>ca. 2.175.000 kr</strong></li>
        </ul>
        <p>
          Hvis du istedenfor får 5,33 % rente (som på det høyeste i tabellen / snitt fastrente):
        </p>
        <ul>
          <li>Månedlig termin: <strong>ca. 18.100 kr</strong></li>
          <li>Total rentekostnad over lånets løpetid: <strong>ca. 2.430.000 kr</strong></li>
        </ul>
        <p>
          <strong>Forskjellen: Cirka 255.000 kroner over 25 år.</strong>
        </p>

        <h2>Hva påvirker din boliglånsrente?</h2>
        <p>
          Banken setter ikke én fast rente for alle. Din individuelle rente avhenger
          av en rekke faktorer.
        </p>

        <h3>Egenkapital</h3>
        <p>Dette er kanskje den viktigste enkeltfaktoren. Bankene vurderer risiko basert på hvor mye egenkapital du har.</p>
        <ul>
          <li><strong>15 % egenkapital:</strong> Minimumskrav, standard vilkår</li>
          <li><strong>25-40 % egenkapital:</strong> Bedre rente, lavere risiko for banken</li>
          <li><strong>Over 40 % egenkapital:</strong> Ofte de beste vilkårene</li>
        </ul>
        <p>
          Har du mindre enn 15 % egenkapital, krever bankene som regel kausjonist
          eller forsikring, og det kan påvirke renten negativt.
        </p>

        <h3>Inntekt og betalingsevne</h3>
        <p>
          Banken beregner en gjeldsgrad basert på inntekt. I Norge er det vanlig
          med en gjeldsgrad på inntil 5 ganger inntekt. Høyere inntekt = lavere
          risiko = bedre rente.
        </p>

        <h3>Lånets størrelse</h3>
        <p>
          Store lån med høy egenkapital kan gi bedre vilkår fordi banken tjener
          mer på å beholde deg. Mindre lån med lav egenkapital er mindre attraktive
          og kan prise seg opp.
        </p>

        <h3>Kundeforhold</h3>
        <p>
          Har du plassert lønnskonto, bilforsikring, innboforsikring og fondsparinger
          i samme bank? Da har du forhandlingsmakt. Banker elsker helhetlige
          kundeforhold og belønner det ofte med lavere rente.
        </p>

        <h2>Norges Bank og rentebeslutninger juli 2026</h2>
        <p>
          Norges Bank setter styringsrenten, og denne påvirker alle andre renter
          i Norge — inkludert boliglånsrenten din.
        </p>

        <h3>Siste rentebeslutninger</h3>
        <p>
          Styringsrenten ble hevet fra 4,00 % til 4,25 % ved rentemøtet 7. mai 2026,
          og holdt uendret på 4,25 % ved møtet 18. juni 2026.
          Norges Bank begrunner dette med at inflasjonen fortsatt ligger noe over målet (KPI 2,7 % i juni 2026).
        </p>
        <p>
          Neste rentebeslutning offentliggjøres <strong>13. august 2026</strong>. Markedet
          priser inn en viss sannsynlighet for ytterligere heving til 4,5 % på et av de nærmeste møtene, basert på Norges Banks PPR 2/2026.
        </p>

        <h3>Hva ekspertene tror om fremtiden</h3>
        <p>
          Norges Banks egen prognose (PPR 2/2026) ligger i overkant av <strong>4,5 % styringsrente ved utgangen av 2026</strong>.
          Inflasjonen ventes tilbake til målet (2 %) i 2029. Første rentekutt ventes ikke før midten av 2027 ifølge SSB.
        </p>

        <h3>Hvordan påvirker dette boliglånsrenten?</h3>
        <p>
          Det tar tid før styringsrenteendringer reflekteres i boliglånsrenten.
          Bankene justerer sine utlånsrenter basert på sine egne funding-kostnader
          og konkurransesituasjon. Typisk: når styringsrenten endres med 0,25
          prosentpoeng, tar det 1-3 måneder før boliglånsrentene følger.
        </p>

        <h2>Fastrente vs flytende rente 2026</h2>
        <p>
          Valget mellom fast og flytende rente er en av de mest diskuterte
          debattene blant norske boligeiere.
        </p>

        <h3>Flytende rente</h3>
        <p>
          De fleste nordmenn har flytende rente på boliglånet. Det betyr at renten
          justeres med markedet — vanligvis hver tredje måned når banken setter ny rente.
        </p>
        <p><strong>Fordeler:</strong></p>
        <ul>
          <li>Følger renten nedover hvis Norges Bank senker</li>
          <li>Lavere startrente enn fastrente</li>
          <li>Fleksibilitet til å si opp eller reforhandle</li>
        </ul>
        <p><strong>Ulemper:</strong></p>
        <ul>
          <li>Usikkerhet — renten kan gå opp like gjerne som ned</li>
          <li>Budsjettvansker hvis renten stiger kraftig</li>
        </ul>

        <h3>Fastrente</h3>
        <p>
          Fastrente betyr at du låser renten for en avtalt periode — typisk 3, 5
          eller 10 år. Banken garanterer samme rente uansett hva som skjer i markedet.
        </p>
        <p><strong>Fordeler:</strong></p>
        <ul>
          <li>Forutsigbarhet — du vet nøyaktig hva du betaler hver måned</li>
          <li>Beskyttelse hvis rentene stiger</li>
          <li>Fred i sindet for de som liker å planlegge</li>
        </ul>
        <p><strong>Ulemper:</strong></p>
        <ul>
          <li>Høyere startrente enn flytende</li>
          <li>Ekstra gebyr hvis du vil bryte avtalen før tid</li>
          <li>Du får ikke glede av rentenedgang</li>
        </ul>

        <h3>Hva lønner seg akkurat nå?</h3>
        <p>
          Med styringsrenten på 4,25 % og prognoser om ~4,5 % ved utgangen av 2026, er flytende rente fortsatt det vanligste valget.
          Du betaler en premie for fastrente (gjerne 0,5-1,0 prosentpoeng høyere),
          og den premien er vanskelig å forsvare hvis rentene kan gå begge veier.
        </p>

        <h2>Slik får du beste boliglånsrente</h2>
        <p>Her er seks konkrete tips som kan spare deg for titusener av kroner hvert år.</p>

        <h3>1. Forhandel med din nåværende bank</h3>
        <p>
          Dette er det mest underspilte tipset i Norge. Bankene har room to maneuver
          på renten, og de gir ikke alltid det beste tilbudet til folk som ikke spør.
          Ring banken, si at du har fått et bedre tilbud fra en konkurrent, og spør
          hva de kan gjøre for å beholde deg. Overraskende ofte får du noe.
        </p>

        <h3>2. Bruk en låneagent</h3>
        <p>
          Låneagenter (også kalt boliglånsagenter) jobber for deg, ikke for banken.
          De sammenligner tilbud fra 10-15 banker og forhandler på dine vegne.
          De tar ofte et gebyr, men gebyret er som regel langt lavere enn det du
          sparer på en bedre rente.
        </p>

        <h3>3. Samle all bankvirksomhet</h3>
        <p>
          Hvis du har flere produkter hos samme bank — innboforsikring, bilforsikring,
          fondsparinger, kredittkort — er det verdt å bruke det som forhandlingskort.
          Banken ser deg som mer verdifull og belønner det ofte med lavere rente.
        </p>

        <h3>4. Bytt bank hvis nødvendig</h3>
        <p>
          Har du forhandlet, fått et tilbud fra en annen bank, og din egen bank
          nekter å matche? Bytt. Det er ingen store kostnader ved å bytte
          boliglånsbank (bare pant og noen gebyrer som ofte kan forhandles bort),
          og den langsiktige gevinsten kan være betydelig.
        </p>

        <h3>5. Oppdater panten ved verdiøkning</h3>
        <p>
          Hvis boligen din har steget i verdi, kan du be om omvurdering og dermed
          bedre lånevilkår. Lavere belåningsgrad = lavere risiko = lavere rente.
        </p>

        <h3>6. Refinansier hvis renten har falt</h3>
        <p>
          Har du et gammelt boliglån med høyere rente? Det er kanskje på tide å
          refinansiere. Selv en reduksjon fra 5,1 % til 4,8 % på et lån på 2,5
          millioner kroner sparer deg for rundt 7.500 kroner i året.
        </p>

        <h2>Beregn din månedlige kostnad</h2>
        <p>
          Bruk vår kalkulator for å se nøyaktig hva lånet vil koste deg per måned
          og totalt over hele låneperioden.
        </p>
        <div className="my-6">
          <Link
            href="/verktøy/boliglånskalkulator"
            className="inline-flex items-center gap-2 bg-primary-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-primary-700 transition-colors"
          >
            Boliglånskalkulator →
          </Link>
        </div>

        <h3>Eksempel: 3 millioner over 25 år</h3>
        <div className="overflow-x-auto my-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-gray-50">
                <th className="text-left p-3 border border-gray-200 font-semibold">Rente</th>
                <th className="text-left p-3 border border-gray-200 font-semibold">Månedlig termin</th>
                <th className="text-left p-3 border border-gray-200 font-semibold">Total rentekostnad</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white">
                <td className="p-3 border border-gray-200 font-medium">4,78 % (beste)</td>
                <td className="p-3 border border-gray-200">17.250 kr</td>
                <td className="p-3 border border-gray-200">2.175.000 kr</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="p-3 border border-gray-200 font-medium">5,08 % (snitt utestående)</td>
                <td className="p-3 border border-gray-200">17.700 kr</td>
                <td className="p-3 border border-gray-200">2.310.000 kr</td>
              </tr>
              <tr className="bg-white">
                <td className="p-3 border border-gray-200 font-medium">5,33 % (snitt fastrente)</td>
                <td className="p-3 border border-gray-200">18.100 kr</td>
                <td className="p-3 border border-gray-200">2.430.000 kr</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          Selv en halv prosentpoeng forskjell betyr over 250.000 kroner ekstra i
          renter over 25 år.
        </p>

        <h2>Ofte stilte spørsmål</h2>

        <h3>Hvorfor er det så stor forskjell mellom bankene?</h3>
        <p>
          Bankene har ulike kostnader, ulik risikopolicy, og ulikt behov for å
          tiltrekke seg nye kunder. Nye digitale banker som Landkreditt, Nybygger og Penni har lavere kostnader
          og kan tilby lavere rente. Andre, som DNB og Nordea, har høyere kostnader
          men kan kompensere med fordeler for helkundeforhold.
        </p>

        <h3>Kan jeg forhandle om renten på eksisterende lån?</h3>
        <p>
          Ja. Banken er pålagt å vurdere renten din ved årlig gjennomgang. Be om
          en gjennomgang, og ha konkurrenttilbud klart. Banken vil ofte gi deg et
          bedre tilbud hvis du signaliserer at du vurderer å bytte.
        </p>

        <h3>Er 5 års fastrente verdt det i dagens marked?</h3>
        <p>
          Avhengig av din risikovillighet og budsjettsituasjon. I juli 2026 med
          styringsrente på 4,25 % og prognoser opp mot 4,5 %, er flytende rente trolig
          smartere for de fleste. Men hvis du verdsetter forutsigbarhet høyt, er 5 års
          fastrente et akseptabelt kompromiss.
        </p>

        <h3>Hva betyr effektiv rente versus nominell rente?</h3>
        <p>
          Nominell rente er selve renten på lånet. Effektiv rente inkluderer også
          gebyrer, etableringsomkostninger og andre kostnader — og gir dermed et
          mer realistisk bilde av den sanne kostnaden. Bruk alltid effektiv rente
          når du sammenligner.
        </p>

        <h3>Hvor ofte bør jeg sjekke om jeg har best rente?</h3>
        <p>
          Minimum én gang i året, gjerne oftere. Rentebildet endrer seg, og banker
          justerer tilbudene sine. Sett en påminnelse i kalenderen hver januar —
          da er det tid for gjennomgang.
        </p>

        <h2>Konklusjon</h2>
        <p>
          Boliglånsrenten din er sannsynligvis den største enkeltposten i din
          private økonomi. En forskjell på 0,5 prosentpoeng på et lån på 3 millioner
          kroner betyr over 130.000 kroner over 10 år.
        </p>
        <p>
          I juli 2026 er Landkreditt Bank best med 4,78 % effektiv (50 % belåning), mens snitt ligger på 5,08-5,13 % (SSB mai 2026).
          Nybygger og Penni følger tett etter. De tradisjonelle storbankene ligger litt høyere.
        </p>
        <p>
          Det viktigste du kan gjøre? <strong>Ikke aksepter første tilbud.</strong>
          Sjekk konkurrentene, bruk en låneagent hvis du er usikker, og forhandl
          hardt. Du trenger ikke å være profesjonell forhandler — du trenger bare
          å signalisere at du har alternativer.
        </p>

        <div className="bg-primary-50 rounded-xl p-6 my-8 border border-primary-100">
          <h3 className="font-bold text-norsk-dark mb-2">Har du boliglån?</h3>
          <p className="text-sm text-gray-600 mb-4">
            Sjekk vår boliglånskalkulator og se hvor mye du potensielt kan spare
            ved å forhandle eller bytte bank.
          </p>
          <Link
            href="/verktøy/boliglånskalkulator"
            className="inline-flex items-center gap-2 bg-primary-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-primary-700 transition-colors"
          >
            Beregn din beste rente →
          </Link>
        </div>

        <div className="bg-gray-50 rounded-xl p-6 mt-8">
          <h3 className="font-bold text-norsk-dark mb-4">Relaterte artikler</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/verktøy/boliglånskalkulator" className="text-primary-600 hover:underline font-medium">
                Boliglånskalkulator →
              </Link>
            </li>
            <li>
              <Link href="/boliglan" className="text-primary-600 hover:underline font-medium">
                Boliglån — Hovedside →
              </Link>
            </li>
            <li>
              <Link href="/bank/bytte-bank" className="text-primary-600 hover:underline font-medium">
                Bytte bank guide →
              </Link>
            </li>
            <li>
              <Link href="/lan/nar-lonner-refinansiering" className="text-primary-600 hover:underline font-medium">
                Når lønner refinansiering seg? →
              </Link>
            </li>
          </ul>
        </div>

        <p className="text-xs text-gray-400 mt-8">
          Sist oppdatert: 19. juli 2026. Rentene er veiledende og kan endres.
        </p>
      </article>
    </>
  )
}
