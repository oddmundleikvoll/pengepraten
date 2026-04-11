import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Refinansiering for folk flest: Når det lønner seg og når det ikke gjør det | Pengepraten',
  description: 'Refinansiering kan spare deg for titusenvis av kroner — men ikke alltid. Her får du en ærlig gjennomgang av når det lønner seg, og når du heller bør la være.',
  keywords: ['refinansiering', 'refinansiere', 'forbrukslån', 'gjeld', 'rente', 'nedbetaling', 'samle gjeld'],
}

export default function RefinansieringForFolkFlest() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-green-600 to-blue-700 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <nav className="text-green-100 text-sm mb-4">
            <Link href="/" className="hover:text-white">Hjem</Link>
            <span className="mx-2">/</span>
            <Link href="/lan" className="hover:text-white">Lån</Link>
            <span className="mx-2">/</span>
            <span>Når lønner refinansiering seg</span>
          </nav>
          <span className="inline-block px-3 py-1 text-xs font-semibold bg-white/20 rounded-full mb-4">
            Oppdatert april 2026
          </span>
          <h1 className="text-3xl md:text-5xl font-black mb-4">
            Refinansiering for folk flest
          </h1>
          <p className="text-green-100 text-xl max-w-2xl">
            Når det lønner seg — og når du heller bør la det være. En ærlig gjennomgang.
          </p>
        </div>
      </section>

      {/* Article content */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 py-12 article-content">

        <p className="text-xl text-gray-600 leading-relaxed mb-8">
         annonseinstituttannonse «Refinansiering — spar 200.000 kr!» er et av de mest 
          utskjelte reklamebudsjene i Norge. Og ikke uten grunn. For det er 
          <em> noen ganger </em> helt reelt — og andre ganger ren markedsføring 
          uten substans. Slik vet du hvilken det er for deg.
        </p>

        {/* Visual intro */}
        <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-8 my-8 border border-green-100">
          <div className="flex items-center gap-4 mb-4">
            <div className="text-5xl">⚖️</div>
            <div>
              <p className="text-green-800 font-bold text-lg">Kjernen i refinansiering</p>
              <p className="text-green-600 text-sm">Bytt ett dyrt lån med ett billigere — eller samle mange dyre lån til ett mindre dyrt.</p>
            </div>
          </div>
        </div>

        <h2>Hva er egentlig refinansiering?</h2>
        <p>
          Refinansiering betyr rett og slett at du bytter et lån (eller flere lån) 
          med et nytt — gjerne med bedre vilkår. Det finnes to hovedtyper:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
          <div className="bg-green-50 border border-green-200 rounded-xl p-5">
            <h3 className="font-bold text-norsk-dark mb-2">🔄 Ordinær refinansiering</h3>
            <p className="text-gray-700 text-sm">
              Du har ett lån med høy rente (f.eks. forbrukslån) og bytter det 
              til ett med lavere rente (f.eks. boliglån eller bedre forbrukslån).
            </p>
          </div>
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-5">
            <h3 className="font-bold text-norsk-dark mb-2">📦 Samlefinansiering</h3>
            <p className="text-gray-700 text-sm">
              Du slår sammen flere smålån og kredittkortgjeld til ett nytt lån — 
              ofte med lavere samlet rentekostnad og kun én faktura.
            </p>
          </div>
        </div>

        <h2>Når det faktisk lønner seg</h2>
        <p>
          Refinansiering er ikke bare et salgsargument fra bankene. I disse 
          situasjonene kan det gi deg tusenvis av kroner i reell besparelse:
        </p>

        <div className="bg-green-50 border-l-4 border-green-500 rounded-r-xl p-6 my-8">
          <h3 className="font-bold text-norsk-dark mb-3">✅ Tydelige tegn på at det lønner seg</h3>
          <ul className="space-y-2 text-gray-700">
            <li><strong>Du har kredittkortgjeld:</strong> Kredittkortrenter på 20-30% 
              er blant de høyeste du kan ha. Bytt til et forbrukslån på 10-15% 
              og spar enormt.</li>
            <li><strong>Du har flere smålån:</strong> Tre småforbrukslån på 20.000 kr 
              hver med 18% rente = tre separate gebyrer, tre fakturaer, unødvendig 
              kompleksitet. Ett lån på 60.000 kr til 12% = tusenvis spart.</li>
            <li><strong>Rentene har falt:</strong> Sentralbankens styringsrente har 
              betydning for lånetilbudet ditt. Har den falt siden du tok lånet? 
              Sjekk om du kan forhandle ned renten.</li>
            <li><strong>Din kredittscore har blitt bedre:</strong> Har du betalt ned 
              annen gjeld, fått høyere inntekt eller bedre betalingshistorikk? 
              Du kan være kvalifisert for bedre vilkår nå.</li>
            <li><strong>Du har høy rente på boliglånet:</strong> Selv 0,5% lavere 
              rente på et 2 millioner boliglån = 10.000 kr spart per år.</li>
          </ul>
        </div>

        <h3>Regneeksempel: Før og etter samlefinansiering</h3>
        <div className="bg-gray-50 rounded-xl p-6 my-6">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b">
                <th className="text-left py-2 font-semibold text-norsk-dark">Lån</th>
                <th className="text-right py-2 font-semibold text-norsk-dark">Beløp</th>
                <th className="text-right py-2 font-semibold text-norsk-dark">Rente</th>
                <th className="text-right py-2 font-semibold text-norsk-dark">Årlig kostnad</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b bg-red-50">
                <td className="py-2">Kredittkort A</td>
                <td className="text-right">25.000 kr</td>
                <td className="text-right text-red-600">22%</td>
                <td className="text-right text-red-600">5.500 kr</td>
              </tr>
              <tr className="border-b bg-red-50">
                <td className="py-2">Forbrukslån liten</td>
                <td className="text-right">40.000 kr</td>
                <td className="text-right text-red-600">16%</td>
                <td className="text-right text-red-600">6.400 kr</td>
              </tr>
              <tr className="border-b bg-red-50">
                <td className="py-2">Forbrukslån liten 2</td>
                <td className="text-right">15.000 kr</td>
                <td className="text-right text-red-600">18%</td>
                <td className="text-right text-red-600">2.700 kr</td>
              </tr>
              <tr className="border-b font-bold">
                <td className="py-2">Sum før</td>
                <td className="text-right">80.000 kr</td>
                <td className="text-right">~18%</td>
                <td className="text-right text-red-600">14.600 kr</td>
              </tr>
              <tr className="border-b font-bold bg-green-50">
                <td className="py-2">Samlet nytt lån</td>
                <td className="text-right">80.000 kr</td>
                <td className="text-right text-green-600">11%</td>
                <td className="text-right text-green-600">8.800 kr</td>
              </tr>
              <tr className="font-bold text-green-700">
                <td className="py-2">Besparelse per år</td>
                <td className="text-right"></td>
                <td className="text-right"></td>
                <td className="text-right">5.800 kr</td>
              </tr>
            </tbody>
          </table>
          <p className="text-xs text-gray-500 mt-3">
            * Eksempel basert på nominelle renter. Faktisk besparelse avhenger av 
            gebyrer, etableringskostnader og nedbetalingsplan.
          </p>
        </div>

        <h2>Når det <em>ikke</em> lønner seg</h2>
        <p>
          Og her er den ærlige delen. Refinansiering er ikke alltid løsningen — 
          i noen tilfeller kan det faktisk koste deg mer:
        </p>

        <div className="bg-red-50 border-l-4 border-red-400 rounded-r-xl p-6 my-8">
          <h3 className="font-bold text-norsk-dark mb-3">🚨 Advarselstegn: Kanskje bør du la være</h3>
          <ul className="space-y-2 text-gray-700">
            <li><strong>Etableringsgebyrer spiser gevinsten:</strong> Noen banker 
              tar 2-4% i etableringsgebyr + 500-1.000 kr i administrative kostnader. 
              Sjekk alltid <strong>effektiv rente</strong> — ikke bare nominell.</li>
            <li><strong>Du forlenger lånetiden:</strong> Hvis du hadde 3 år igjen 
              på et forbrukslån, men tar nytt lån med 5 års løpetid, kan du betale 
              <em> mer </em> totalt — selv med lavere rente.</li>
            <li><strong>Du bruker det som en «quick fix»:</strong> Refinansiering 
              løser ikke atferdsproblemer. Hvis du slår sammen kredittkortgjeld 
              og deretter bruker kortene igjen, sitter du med dobbel gjeld.</li>
            <li><strong>Du har veldig lite gjeld:</strong> Er det bare 10.000 kr 
              på et kredittkort med 20% rente? Det koster deg 2.000 kr i året. 
              Refinansieringsgebyrer kan fort være høyere enn det.</li>
            <li><strong>Rentene er allerede lave:</strong> Har du allerede 
              boliglånsrente under 4%? Det er vanskelig å refinance til noe 
              vesentlig bedre.</li>
          </ul>
        </div>

        <h3>Hvordan sjekke om gebyrene spiser gevinsten?</h3>
        <p>
          Bruk <strong>Finansportalen</strong> (finansportalen.no) til å sammenligne 
          tilbud. Se alltid på:
        </p>
        <ul>
          <li><strong>Nominell rente:</strong> Grunnsatsen på lånet</li>
          <li><strong>Effektiv rente:</strong> Inkluderer alle gebyrer — dette er 
            det reelle tallet du skal sammenligne</li>
          <li><strong>Månedlig kostnad:</strong> Hva betaler du per måned?</li>
          <li><strong>Total kostnad:</strong> Hva betaler du totalt over hele løpetiden?</li>
        </ul>

        <h2>Steg-for-steg: Slik refinansierer du</h2>

        <div className="space-y-4 my-8">
          {[
            {
              step: 1,
              icon: '📋',
              title: 'Samle all informasjon om din nåværende gjeld',
              desc: 'Hvilke lån har du? Hva er restbeløpet, renten og månedsbeløpet på hvert? Du finner dette i nettbanken eller på Fakturaoversikter.'
            },
            {
              step: 2,
              icon: '🔍',
              title: 'Sammenlign tilbud på Finansportalen',
              desc: 'Gå til finansportalen.no og søk etter refinansieringslån som passer ditt beløp. Noter de beste effektive rentene.'
            },
            {
              step: 3,
              icon: '📞',
              title: 'Sjekk med din nåværende bank først',
              desc: 'Gi dem beskjed om at du vurderer å refinansiere. Banken din vil ofte matche eller gi bedre vilkår for å beholde deg som kunde — spesielt hvis du har sikkerhet i bolig.'
            },
            {
              step: 4,
              icon: '🏦',
              title: 'Søk om refinansiering hos 2-3 banker',
              desc: 'Send inn søknader (bankene gjør kredittvurdering, men flere søknader på kort tid teller som én hvis de er innen 14 dager).'
            },
            {
              step: 5,
              icon: '✅',
              title: 'Les avtalen nøye før du signerer',
              desc: 'Sjekk etableringsgebyr, termingebyr, forsinkelsesrente og eventuelle bonusordninger. Er det bindingstid?'
            },
            {
              step: 6,
              icon: '💸',
              title: 'Få gjelden din overført og sett opp nedbetaling',
              desc: 'Den nye banken overfører direkte til gamle kreditorer. Sett deretter opp avtale om rett beløp til rett tid — og ikke stå på minimumsbetaling.'
            }
          ].map((item) => (
            <div key={item.step} className="flex gap-4 bg-white border border-gray-200 rounded-xl p-5">
              <div className="flex-shrink-0 w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-lg"> {item.icon} </div>
              <div>
                <h4 className="font-bold text-norsk-dark">
                  <span className="text-green-600 mr-1">Steg {item.step}:</span> {item.title}
                </h4>
                <p className="text-gray-600 text-sm mt-1">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-amber-50 border-l-4 border-amber-400 rounded-r-xl p-6 my-8">
          <h3 className="font-bold text-norsk-dark mb-2">⚠️ Viktig: Sjekk gebyrer FØRST</h3>
          <p className="text-gray-700">
            Den vanligste feilen er å kun se på renten og glemme gebyrene. 
            Et lån med 8% rente + 4% etableringsgebyr kan fort ha høyere 
            <strong> effektiv rente </strong> enn et lån med 12% rente og null gebyrer. 
            Bruk alltid effektiv rente som sammenligningsgrunnlag.
          </p>
        </div>

        <h2>Refinansiering og boliglån: En spesiell situasjon</h2>
        <p>
          Har du boliglån? Da har du faktisk et kraftig verktøy som 
          forbrukslånsgjeldere ikke har: <strong>sikkerhet</strong>. 
          Fordi boligen din er pantet i lånet, kan du få langt lavere renter 
          enn på usikrede lån.
        </p>

        <div className="bg-blue-50 border-l-4 border-blue-500 rounded-r-xl p-6 my-8">
          <h3 className="font-bold text-norsk-dark mb-2">🏠 Boliglånsrenter i Norge 2026</h3>
          <p className="text-gray-700 mb-3">
            Per april 2026 ligger boliglånsrentene i Norge typisk mellom 
            <strong> 3,5% og 5,5%</strong> avhengig av bank, egenkapital og 
            kredittverdighet. Til sammenligning er usikrede forbrukslån 
            ofte på 10-20%.
          </p>
          <p className="text-gray-600 text-sm">
            <strong>Konklusjon:</strong> Hvis du har usikret gjeld, er det 
            nesten alltid verdt å undersøke om du kan betale ned den dyre 
            gjelden med boliglånet (som kalles «innløsning» eller «tilbakebetaling» 
            av usikret gjeld).
          </p>
        </div>

        <h2>Alternativet: Forhandle med din nåværende bank</h2>
        <p>
          Før du bruker tid og energi på refinansiering, prøv dette: 
          ring banken din og be om bedre rente. Det er enklere enn du tror, 
          og banken din vil ofte gi deg et bedre tilbud for å unngå 
          at du bytter.
        </p>

        <div className="bg-gray-50 rounded-xl p-6 my-6">
          <h4 className="font-bold text-norsk-dark mb-3">📞 Script: Slik forhandler du med banken</h4>
          <p className="text-gray-700 text-sm mb-3 italic">
            «Hei, jeg sitter med [låntype] på [beløp] hos dere til [rente]%. 
            Jeg har sett at andre banker tilbyr [bedre rente] for tilsvarende 
            lån. Jeg ønsker å diskutere om dere kan tilby meg bedre vilkår, 
            ettersom jeg er en trofast kunde og vurderer å flytte lånet.»
          </p>
          <p className="text-gray-500 text-xs">
            Enkelt, høflig, ikketruende — men tydelig på at du har alternativer. 
            Dette fungerer ofte bedre enn man tror.
          </p>
        </div>

        <h2>Vanlige spørsmål om refinansiering</h2>

        <div className="bg-gray-50 rounded-xl p-6 my-6">
          <div className="space-y-4">
            <div>
              <p className="font-semibold text-norsk-dark">❓ Påvirker refinansiering kredittscore?</p>
              <p className="text-gray-700 text-sm mt-1">Midlertidig — ja, en søknad gir en liten negativ registrering. Men flere søknader innen 14 dager regnes som én hendelse. På lang sikt er lavere gjeld bedre for score.</p>
            </div>
            <div>
              <p className="font-semibold text-norsk-dark">❓ Kan jeg refinansiere hvis jeg har betalingsanmerkning?</p>
              <p className="text-gray-700 text-sm mt-1">Det er vanskeligere, men ikke umulig. Noen banker og långivere tilbyr lån til personer med anmerkninger, ofte til høyere rente. Prioriter å bli kvitt anmerkningen først.</p>
            </div>
            <div>
              <p className="font-semibold text-norsk-dark">❓ Hvor ofte bør jeg vurdere refinansiering?</p>
              <p className="text-gray-700 text-sm mt-1">Sjekk markedet minst én gang i året eller når rentenivået endrer seg. Det er gratis å sjekke — og kan spare deg for tusenvis.</p>
            </div>
            <div>
              <p className="font-semibold text-norsk-dark">❓ Er det gratis å refinansiere?</p>
              <p className="text-gray-700 text-sm mt-1">Selve refinansieringen kan ha kostnader (etableringsgebyr, tinglysningsgebyr ved boliglån). Men ofte tilbyr banker å dekke disse kostnadene for å vinne deg som kunde. Spør alltid.</p>
            </div>
          </div>
        </div>

        <div className="bg-primary-50 rounded-xl p-6 my-8">
          <h3 className="font-bold text-norsk-dark mb-2">Få oversikt over dine lån</h3>
          <p className="text-gray-700 mb-4">
            Vår refinansieringsveileder og sammenligning av forbrukslån kan hjelpe 
            deg med å finne det beste tilbudet for din situasjon.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/lan" className="inline-flex items-center gap-2 bg-primary-600 text-white font-medium py-2 px-4 rounded-lg hover:bg-primary-700 transition-colors text-sm">
              Se alle lånetyper →
            </Link>
            <Link href="/lan/refinansiering-spar-paa-gjelden" className="inline-flex items-center gap-2 border border-primary-600 text-primary-600 font-medium py-2 px-4 rounded-lg hover:bg-primary-50 transition-colors text-sm">
              Refinansieringsguide →
            </Link>
          </div>
        </div>

        <h2>Oppsummering: Sjekkliste før du refinansierer</h2>
        <ol>
          <li><strong>Beregn total gevinst:</strong> Hva sparer du i rente vs hva koster det i gebyrer?</li>
          <li><strong>Sjekk effektiv rente:</strong> Aldri bare nominell rente</li>
          <li><strong>Se på løpetid:</strong> Forlenger du gjelden? Da kan det koste deg mer totalt</li>
          <li><strong>Forhandle med din egen bank først:</strong> Enklest og billigst</li>
          <li><strong>Sammenlign minimum 3 tilbud:</strong> Bruk Finansportalen</li>
          <li><strong>Ha en plan for gjelden:</strong> Refinansiering løser ikke bakenforliggende årsak</li>
        </ol>

        <p>
          Refinansiering er et av de mest kraftfulle verktøyene i personlig 
          økonomi — men bare hvis det gjøres riktig. Ikke la 
          salgstalene lure deg. Sett deg ned med tallene, regn ut gevinsten, 
          og ta en informert beslutning.
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
