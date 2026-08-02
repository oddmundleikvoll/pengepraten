import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Høyrentekonto vs Aksjesparing: Hva bør du velge i 2026?',
  description: 'Skal du velge trygg høyrentekonto eller potensielt mer lønnsom aksjesparing? Vi sammenligner avkastning, risiko og når du bør velge hva.',
}

export default function HoyrenteVsAksjesparing() {
  return (
    <>
      <section className="bg-paper text-ink py-12 border-b border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <nav className="font-mono text-xs uppercase tracking-wider text-ink-muted mb-6">
            <Link href="/" className="hover:text-forest transition-colors">Hjem</Link>
            <span className="mx-2 text-border-strong">/</span>
            <Link href="/sparing" className="hover:text-forest transition-colors">Sparing</Link>
            <span className="mx-2 text-border-strong">/</span>
            <span className="text-ink">Høyrentekonto vs Aksjesparing</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-medium font-display leading-[1.08] mb-4">
            Høyrentekonto vs Aksjesparing
          </h1>
          <p className="text-ink-muted text-lg leading-relaxed">
            Hva bør du velge i 2026? Vi sammenligner avkastning, risiko og 
            gir deg en enkel regel for å vite hva som passer deg best.
          </p>
        </div>
      </section>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 py-12 article-content">
        <p className="text-xl text-gray-600 leading-relaxed mb-8">
          Du har penger å spare. Spørsmålet er: Skal du plassere dem trygt på en 
          høyrentekonto, eller ta sjansen på aksjemarkedet for potensielt høyere 
          avkastning? Svaret avhenger av tre ting: din tidshorisont, din risikotoleranse, 
          og om du allerede har et nødfond på plass.
        </p>

        <h2>Høyrentekonto: Trygghet med moderat avkastning</h2>
        <p>
          En høyrentekonto er det nærmeste du kommer en "sikker havn" for sparepenger 
          i Norge. Innskuddet er garantert av den norske innskuddsgarantien (opptil 
          2 millioner kroner), og du vet nøyaktig hva du får i rente.
        </p>

        <h3>Slik fungerer det</h3>
        <p>
          Du setter inn penger, banken betaler deg en fast årlig rente, og du kan 
          ta ut pengene når du vil (med noen unntak for de beste rentene). 
          Ingen overraskelser. Ingen svingninger.
        </p>

        <h3>Hva kan du forvente i 2026?</h3>
        <p>
          Per våren 2026 ligger de beste høyrentekontoene i Norge på rundt 3-4% i 
          årlig rente. Med inflasjon på omtrent samme nivå, betyr det at du i 
          praksis beholder kjøpekraften — men ikke vokser den.
        </p>
        <p>
          BSU-konto er et unntak: Her får du rundt 4,25% rente pluss 
          skattefradrag på 20% av årlig sparing (opptil 27.500 kroner). Det gir 
          en effektiv avkastning på godt over 5% — noe aksjemarkedet ikke garanterer.
        </p>

        <h3>Når er høyrentekonto riktig valg?</h3>
        <ul>
          <li><strong>Nødfond:</strong> 3-6 måneders utgifter bør alltid ligge på høyrentekonto</li>
          <li><strong>Kortsiktige mål:</strong> Skal du spare til noe innen 3 år?</li>
          <li><strong>Lav risikotoleranse:</strong> Du sover dårlig av tanken på at penger kan synke i verdi</li>
          <li><strong>Egenkapital til bolig:</strong> Pengene skal brukes innen få år</li>
        </ul>

        <h2>Aksjesparing: Høyere potensiell avkastning med risiko</h2>
        <p>
          Aksjemarkedet har historisk gitt en gjennomsnittlig årlig avkastning på 
          rundt 7-8% over tid. Men det er et gjennomsnitt over mange tiår — ikke 
          en garanti for neste år. I 2022 falt for eksempel Oslo Børs med over 15%.
        </p>

        <h3>Slik fungerer det</h3>
        <p>
          Du kjøper andeler i fond eller enkeltaksjer. Verdien følger selskapenes 
          utvikling og markedet generelt. På kort sikt (1-3 år) kan det gå begge 
          veier. På lang sikt (10+ år) har historien vist at markedet stiger mer 
          enn det faller.
        </p>

        <h3>Hva kan du forvente?</h3>
        <p>
          Det er umulig å garantere avkastning. Men hvis vi ser på historiske tall 
          for globale indeksfond:
        </p>
        <ul>
          <li><strong>1 år:</strong> Alt fra -20% til +30%</li>
          <li><strong>5 år:</strong> Gjennomsnittlig 5-10% per år (men med store variasjoner)</li>
          <li><strong>10 år:</strong> Gjennomsnittlig 7-9% per år</li>
        </ul>
        <p>
          Poenget: Jo lengre tidshorisont, jo mer sannsynlig er det at du slår 
          høyrentekonto — men det er aldri garantert.
        </p>

        <h3>Når er aksjesparing riktig valg?</h3>
        <ul>
          <li><strong>Lang tidshorisont:</strong> Du kan la pengene stå i 7-10 år eller mer</li>
          <li><strong>Toleranse for svingninger:</strong> Du klarer å se porteføljen synke 20% uten å selge i panikk</li>
          <li><strong>Nødfond på plass:</strong> Du har allerede 3-6 måneder med utgifter trygt plassert</li>
          <li><strong>Pensjonssparing:</strong> Penger du ikke trenger før om mange år</li>
        </ul>

        <h2>Den gyldne regelen: Nødfond først, deretter aksjer</h2>
        <p>
          Før du vurderer å sette penger i aksjemarkedet, sørg for at du har:
        </p>
        <ol>
          <li><strong>Et nødfond</strong> på høyrentekonto som dekker 3-6 måneders utgifter</li>
          <li><strong>Ingen høyrentegjeld</strong> (forbrukslån, kredittkortgjeld)</li>
          <li><strong>BSU-maksimum</strong> hvis du er under 34 år (beste risikofrie avkastning i Norge)</li>
        </ol>
        <p>
          Først når dette er på plass, bør du vurdere aksjemarkedet med penger 
          du ikke trenger de neste 7-10 årene.
        </p>

        <h2>Sammenligning: 100.000 kroner over 10 år</h2>
        <p>
          La oss si du setter inn 100.000 kroner i dag. Hva kan du forvente om 
          10 år?
        </p>

        <table className="w-full mt-4 mb-8">
          <thead>
            <tr className="bg-gray-100">
              <th className="text-left p-3">Alternativ</th>
              <th className="text-left p-3">Årlig avkastning</th>
              <th className="text-left p-3">Verdi etter 10 år</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b">
              <td className="p-3">Brukskonto (0% rente)</td>
              <td className="p-3">0%</td>
              <td className="p-3">100.000 kr (men 25% mindre kjøpekraft med 3% inflasjon)</td>
            </tr>
            <tr className="border-b">
              <td className="p-3">Høyrentekonto</td>
              <td className="p-3">3,5%</td>
              <td className="p-3">~141.000 kr</td>
            </tr>
            <tr className="border-b">
              <td className="p-3">BSU-konto</td>
              <td className="p-3">~5,5% (inkl. skattefradrag)</td>
              <td className="p-3">~171.000 kr</td>
            </tr>
            <tr>
              <td className="p-3">Globalt indeksfond (historisk snitt)</td>
              <td className="p-3">7,5%</td>
              <td className="p-3">~206.000 kr (men med svingninger underveis)</td>
            </tr>
          </tbody>
        </table>
        <p>
          <strong>Viktig:</strong> Tabellen viser gjennomsnitt. Aksjemarkedet kan 
          gi både mer og mindre. Høyrentekonto gir det som står der — garantert.
        </p>

        <h2>Ofte stilte spørsmål</h2>

        <h3>Kan jeg kombinere begge deler?</h3>
        <p>
          Ja, og det er det de fleste eksperter anbefaler. Et typisk oppsett:
        </p>
        <ul>
          <li><strong>Kortsiktig (0-3 år):</strong> Høyrentekonto — nødfond, ferie, bil</li>
          <li><strong>Mellomlang (3-7 år):</strong> BSU (hvis du har rett til det) eller obligasjoner</li>
          <li><strong>Langsiktig (7+ år):</strong> Aksjefond — pensjon, bolig nr. 2, formuebygging</li>
        </ul>

        <h3>Er det dumt å ha alt på høyrentekonto?</h3>
        <p>
          Ikke hvis du er i en fase der du bygger nødfond, sparer til egenkapital 
          innen få år, eller rett og slett ikke tåler tanken på å se sparepengene 
          synke i verdi. Trygghet har også en verdi.
        </p>
        <p>
          Men hvis du har solid nødfond, egen bolig, og penger du ikke trenger på 
          10 år — da er det sannsynligvis for konservativt å ha alt på høyrentekonto.
        </p>

        <h3>Hva med BSU — teller det som høyrente eller aksje?</h3>
        <p>
          BSU er en <Link href="/sparing/bsu-guide" className="text-green-700 hover:underline">egen kategori</Link>. 
          Den gir bedre avkastning enn de fleste høyrentekontoer (takket være skattefradraget), 
          men pengene er låst til boligkjøp. Hvis du er under 34 år og planlegger 
          å kjøpe bolig, er BSU det beste spareproduktet i Norge. Punktum.
        </p>

        <h2>Konklusjon</h2>
        <p>
          Valget mellom høyrentekonto og aksjesparing handler ikke om "riktig eller 
          galt" — det handler om tidshorisont og risikotoleranse.
        </p>
        <p>
          <strong>Velg høyrentekonto</strong> for penger du kan trenge innen 3 år, 
          og for nødfondet ditt. <strong>Velg aksjesparing</strong> for langsiktig 
          formuebygging der du kan tåle at verdien svinger underveis.
        </p>
        <p>
          De fleste nordmenn gjør det lurest med en kombinasjon: Trygghet på 
          kort sikt, vekst på lang sikt. Og husk: BSU først, hvis du har rett på det.
        </p>

        <div className="bg-green-50 border-l-4 border-green-600 p-6 mt-12">
          <h3 className="text-green-900 font-bold text-lg mb-2">Gå videre</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/sparing/beste-sparekonto-2026" className="text-green-700 hover:underline">
                Se vår oversikt over beste sparekontoer i Norge
              </Link>
            </li>
            <li>
              <Link href="/sparing/bsu-guide" className="text-green-700 hover:underline">
                Alt du trenger å vite om BSU
              </Link>
            </li>
            <li>
              <Link href="/sparing/indeksfond-nybegynnere" className="text-green-700 hover:underline">
                Indeksfond for nybegynnere — kom i gang med aksjesparing
              </Link>
            </li>
            <li>
              <Link href="/verktøy/sparekalkulator" className="text-green-700 hover:underline">
                Prøv vår sparekalkulator — se hvor mye du kan få i avkastning
              </Link>
            </li>
          </ul>
        </div>
      </article>
    </>
  )
}
