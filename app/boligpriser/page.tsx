import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Boligpriser mai 2026: Opp 1% i april — men Oslo bremser opp',
  description: 'Boligprisene steg 1% nasjonalt i april 2026, men Oslo ligger langt etter med kun 2,5% hittil i år. Norges Banks renteheving til 4,25% kan endre alt. Les hele analysen.',
}

export default function BoligpriserPage() {
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
            <span className="text-ink">Boligpriser</span>
          </nav>
          <div className="inline-block bg-amber-warm-soft text-amber-warm text-xs font-bold px-3 py-1 rounded-full mb-4">
            OPPDATERT MAI 2026
          </div>
          <h1 className="text-3xl md:text-5xl font-medium font-display leading-[1.08] mb-4">
            Boligpriser mai 2026: Opp 1% i april — men Oslo bremser opp
          </h1>
          <p className="text-ink-muted text-lg max-w-2xl leading-relaxed">
            Boligprisene steg 1% nasjonalt i april og er nå opp 5,6% hittil i år. 
            Samtidig advarer Eiendom Norge-sjef Henning Lauridsen om at Oslo kan 
            falle. Her er alt du trenger å vite før du kjøper eller selger.
          </p>
        </div>
      </section>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 py-12 article-content">

        {/* Ingress med nøkkeltall */}
        <div className="bg-primary-50 rounded-xl p-6 mb-10 border border-primary-100">
          <h2 className="text-xl font-bold text-norsk-dark mb-4">Nøkkeltall april 2026</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-white rounded-lg p-4 text-center">
              <div className="text-2xl font-black text-primary-600">+1,0%</div>
              <div className="text-xs text-gray-500 mt-1">Nasjonal prisvekst april</div>
            </div>
            <div className="bg-white rounded-lg p-4 text-center">
              <div className="text-2xl font-black text-primary-600">+5,6%</div>
              <div className="text-xs text-gray-500 mt-1">Hittil i år (nasjonalt)</div>
            </div>
            <div className="bg-white rounded-lg p-4 text-center">
              <div className="text-2xl font-black text-amber-600">+2,5%</div>
              <div className="text-xs text-gray-500 mt-1">Oslo hittil i år</div>
            </div>
            <div className="bg-white rounded-lg p-4 text-center">
              <div className="text-2xl font-black text-red-600">4,25%</div>
              <div className="text-xs text-gray-500 mt-1">Norges Bank styringsrente</div>
            </div>
          </div>
        </div>

        {/* Hva skjedde i april */}
        <h2>Hva skjedde i april 2026?</h2>
        <p className="text-xl text-gray-600 leading-relaxed mb-8">
          Eiendom Norge publiserte boligprisstatistikken for april den 6. mai 2026, 
          og tallene viser en <strong>nasjonal prisvekst på 1,0%</strong> fra mars til april. 
          Sammenlignet med samme måned i fjor er prisene opp <strong>6,2%</strong> — et solid 
          tegn på at boligmarkedet holder seg varmt til tross for høye renter.
        </p>
        <p>
          Sesongjustert steg prisene med 0,8%, noe som indikerer at den underliggende 
          trenden er sterkere enn det råtallet antyder. Når vi ser på året som helhet, 
          ligger boligprisene nå <strong>5,6% høyere enn ved årsskiftet</strong> — et tempo 
          som, om det fortsetter, kan gi dobbeltsifret vekst for hele 2026.
        </p>
        <p>
          Men bak de nasjonale tallene skjuler det seg store regionale forskjeller. 
          Mens noen byer opplever en ekte oppgangsdriv, sliter andre med å holde tritt.
        </p>

        {/* Regionale forskjeller */}
        <h2>Regionale forskjeller: Oslo henger etter</h2>
        <p>
          Den mest iøynefallende utviklingen finner vi i hovedstaden. <strong>Oslo ligger 
          langt under landsgjennomsnittet</strong> med en prisvekst på kun 2,5% hittil i år — 
          under halvparten av det nasjonale snittet på 5,6%.
        </p>

        <div className="overflow-x-auto my-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-primary-50">
                <th className="text-left p-3 border border-gray-200 font-semibold">By/region</th>
                <th className="text-left p-3 border border-gray-200 font-semibold">April 2026</th>
                <th className="text-left p-3 border border-gray-200 font-semibold">Hittil i år</th>
                <th className="text-left p-3 border border-gray-200 font-semibold">Siste 12 mnd</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white">
                <td className="p-3 border border-gray-200 font-medium">Nasjonalt</td>
                <td className="p-3 border border-gray-200">+1,0%</td>
                <td className="p-3 border border-gray-200 font-bold text-primary-600">+5,6%</td>
                <td className="p-3 border border-gray-200">+6,2%</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="p-3 border border-gray-200 font-medium">Oslo</td>
                <td className="p-3 border border-gray-200">+0,4%</td>
                <td className="p-3 border border-gray-200 font-bold text-amber-600">+2,5%</td>
                <td className="p-3 border border-gray-200">+3,8%</td>
              </tr>
              <tr className="bg-white">
                <td className="p-3 border border-gray-200 font-medium">Bergen</td>
                <td className="p-3 border border-gray-200">+1,2%</td>
                <td className="p-3 border border-gray-200 font-bold text-primary-600">+6,1%</td>
                <td className="p-3 border border-gray-200">+7,5%</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="p-3 border border-gray-200 font-medium">Stavanger</td>
                <td className="p-3 border border-gray-200">+1,1%</td>
                <td className="p-3 border border-gray-200 font-bold text-primary-600">+5,9%</td>
                <td className="p-3 border border-gray-200">+6,8%</td>
              </tr>
              <tr className="bg-white">
                <td className="p-3 border border-gray-200 font-medium">Trondheim</td>
                <td className="p-3 border border-gray-200">+1,3%</td>
                <td className="p-3 border border-gray-200 font-bold text-primary-600">+6,4%</td>
                <td className="p-3 border border-gray-200">+7,2%</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="p-3 border border-gray-200 font-medium">Kristiansand</td>
                <td className="p-3 border border-gray-200">+1,5%</td>
                <td className="p-3 border border-gray-200 font-bold text-primary-600">+7,2%</td>
                <td className="p-3 border border-gray-200">+8,1%</td>
              </tr>
              <tr className="bg-white">
                <td className="p-3 border border-gray-200 font-medium">Tromsø</td>
                <td className="p-3 border border-gray-200">+1,4%</td>
                <td className="p-3 border border-gray-200 font-bold text-primary-600">+6,8%</td>
                <td className="p-3 border border-gray-200">+7,9%</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-sm text-gray-500 mb-8">
          * Tall fra Eiendom Norge, publisert 6. mai 2026. Endring måned-til-måned og 
          hittil i år er ikke sesongjustert. Siste 12 måneder viser årlig vekst.
        </p>

        <h3>Hvorfor henger Oslo etter?</h3>
        <p>
          Det er flere faktorer som forklarer Oslos svakere utvikling:
        </p>
        <ul>
          <li><strong>Høyere prisnivå:</strong> Oslo har allerede landets høyeste kvadratmeterpriser, 
            noe som gjør at prisveksten naturlig bremser opp først.</li>
          <li><strong>Større renteømfintlighet:</strong> Med høyere lånebeløp i snitt, slår 
            renteendringer hardere ut i Oslo enn i resten av landet.</li>
          <li><strong>Tilbudsvekst:</strong> Det har kommet flere nye boliger på markedet i Oslo, 
            noe som demper prispresset.</li>
          <li><strong>Kjøpekraft:</strong> Høye renter kombinert med stagnert reallønn har 
            svekket kjøpekraften for mange førstegangskjøpere.</li>
        </ul>

        <div className="bg-amber-50 border-l-4 border-amber-400 rounded-r-xl p-6 my-8">
          <h3 className="font-bold text-amber-800 mb-2">⚠️ Advarsel fra Eiendom Norge</h3>
          <p className="text-sm text-amber-700 leading-relaxed">
            Eiendom Norge-sjef <strong>Henning Lauridsen</strong> advarer om at Oslo kan 
            falle i månedene fremover. «Vi ser tegn til at markedet i Oslo er i ferd med 
            å snu. Kombinasjonen av høye renter, økt tilbud og svekket kjøpekraft kan 
            føre til prisfall i andre halvår 2026», sa Lauridsen da tallene ble lagt frem.
          </p>
        </div>

        {/* Rentehevingens påvirkning */}
        <h2>Rentehevingen til 4,25% — hva betyr det for boligmarkedet?</h2>
        <p>
          Bare én dag etter at Eiendom Norge publiserte boligprisstatistikken, 
          <strong>hevet Norges Bank styringsrenten fra 4,00% til 4,25%</strong>. Dette er 
          første renteheving siden desember 2023, og den kommer i en periode der 
          boligmarkedet allerede viser tegn til å kjøle ned — spesielt i Oslo.
        </p>
        <p>
          Renten påvirker boligmarkedet på flere måter:
        </p>

        <h3>1. Høyere månedlige kostnader</h3>
        <p>
          På et boliglån på 3 millioner kroner betyr 0,25 prosentpoeng omtrent 
          <strong>400 kroner mer i måneden</strong>. For et lån på 5 millioner blir det 
          rundt <strong>650 kroner ekstra per måned</strong>. For familier som allerede 
          har stram økonomi, kan dette være merkbart.
        </p>

        <h3>2. Lavere kjøpekraft</h3>
        <p>
          Bankene vurderer lånesøknader basert på betjeningsevne. Med høyere renter 
          reduseres maksimalt lånebeløp, noe som betyr at færre har råd til dyre 
          boliger. Dette demper etterspørselen og legger press på prisene.
        </p>

        <h3>3. Usikkerhet demper aktivitet</h3>
        <p>
          Når renten går opp, blir både kjøpere og selgere mer forsiktige. Mange 
          velger å vente og se hva som skjer, noe som reduserer omsetningen. Lavere 
          omsetning gir mindre prispress og kan føre til at prisene flater ut eller faller.
        </p>

        <div className="bg-red-50 border-l-4 border-red-400 rounded-r-xl p-6 my-8">
          <h3 className="font-bold text-red-800 mb-2">📉 Kan boligprisene falle?</h3>
          <p className="text-sm text-red-700 leading-relaxed">
            Historisk sett har boligprisene i Norge vært motstandsdyktige, men vi har 
            sett betydelige fall før — blant annet i 2008 (-7%) og 2023 (-1,3% nasjonalt, 
            -5,5% i Oslo). Med styringsrente på 4,25% og mulighet for ytterligere hevinger, 
            er risikoen for prisfall i andre halvår 2026 reell — særlig i Oslo.
          </p>
        </div>

        {/* Hva betyr dette for deg? */}
        <h2>Hva betyr dette for deg? Kjøpe, selge eller vente?</h2>
        <p>
          Det er umulig å spå fremtiden, men basert på dataene fra april og 
          rentehevingen i mai, kan vi gi noen scenarioer:
        </p>

        <h3>🟢 Du skal kjøpe bolig</h3>
        <p>
          <strong>God timing i Oslo:</strong> Hvis du har solid økonomi og planlegger 
          å bo lenge, kan de kommende månedene bli en god kjøpsmulighet i Oslo. 
          Prisene kan falle, og med lavere konkurranse om boligene har du bedre 
          forhandlingsposisjon.
        </p>
        <p>
          <strong>I resten av landet:</strong> I byer som Bergen, Trondheim og Kristiansand 
          er markedet fortsatt sterkt. Her kan det lønne seg å slå til relativt raskt 
          hvis du finner drømmeboligen, da prisveksten kan fortsette en stund til.
        </p>

        <h3>🟡 Du skal selge bolig</h3>
        <p>
          <strong>I Oslo:</strong> Vurder å selge nå hvis du har tenkt å gjøre det i 2026. 
          Med advarsler om mulig prisfall i andre halvår, kan det være lurt å komme seg 
          ut før markedet potensielt snur. Men husk: du skal kanskje kjøpe nytt også, 
          så det er nettoeffekten som teller.
        </p>
        <p>
          <strong>Utenfor Oslo:</strong> Markedet er fortsatt varmt, og du har gode 
          muligheter for å få en god pris. Men hold øye med renteutviklingen — hvis 
          Norges Bank hever ytterligere, kan effekten spre seg.
        </p>

        <h3>🔵 Du skal refinansiere eller bytte bank</h3>
        <p>
          Uavhengig av om du skal kjøpe eller selge, bør du <strong>sjekke din nåværende 
          boliglånsrente</strong>. Med stigende renter blir det enda viktigere å sikre seg 
          en konkurransedyktig rente. Bankene har rom til å forhandle, og selv små 
          forskjeller betyr tusenvis av kroner over lånets levetid.
        </p>

        {/* CTA til kalkulator */}
        <div className="bg-primary-50 rounded-xl p-6 my-8 border border-primary-100">
          <h3 className="font-bold text-norsk-dark mb-2">Beregn hva du har råd til</h3>
          <p className="text-sm text-gray-600 mb-4">
            Med rente på 4,25% og boligpriser i endring, er det viktig å vite nøyaktig 
            hva du har råd til. Bruk vår boliglånskalkulator for å se hvor mye du kan 
            låne og hva det vil koste deg per måned.
          </p>
          <Link
            href="/verktøy/boliglånskalkulator"
            className="inline-flex items-center gap-2 bg-forest text-paper font-semibold py-3 px-6 rounded-md hover:bg-forest-mid transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
            </svg>
            Prøv boliglånskalkulatoren →
          </Link>
        </div>

        {/* Hva skjer fremover? */}
        <h2>Hva skjer fremover? Prognoser for 2026</h2>
        <p>
          Eiendom Norge legger frem sin halvårsprognose i juni, men basert på 
          tilgjengelig data kan vi allerede peke på noen trender:
        </p>
        <ul>
          <li><strong>Oslo:</strong> Størst sannsynlighet for prisfall i andre halvår. 
            En nedgang på 2-5% fra dagens nivå er ikke usannsynlig hvis renten holder 
            seg høy eller stiger ytterligere.</li>
          <li><strong>Resten av landet:</strong> Kan fortsette å stige, men i et 
            langsommere tempo. Prisveksten på 5-7% for hele 2026 er realistisk for 
            mange regioner utenfor Oslo.</li>
          <li><strong>Renten:</strong> Neste rentemøte er 18. juni 2026. Markedet 
            priser inn omtrent 50/50 sjanse for ytterligere heving. Hvis inflasjonen 
            faller tilbake mot 2%, kan renten holdes stabil resten av året.</li>
        </ul>

        <h3>Historisk perspektiv</h3>
        <p>
          Boligprisene i Norge har steget jevnt og trutt i flere tiår, med noen få 
          unntak. Selv under finanskrisen i 2008 falt prisene «bare» 7% før de 
          snudde opp igjen. For de fleste boligeiere er det viktigste å huske at 
          bolig er en langsiktig investering — kortsiktige svingninger har liten 
          betydning hvis du planlegger å bo i mange år.
        </p>

        {/* Konklusjon */}
        <h2>Konklusjon</h2>
        <p>
          Boligmarkedet i mai 2026 er preget av to motstridende krefter: en sterk 
          nasjonal prisvekst på 5,6% hittil i år, og en varslet kjøling i Oslo 
          kombinert med Norges Banks renteheving til 4,25%.
        </p>
        <p>
          For deg som skal kjøpe, kan det kommende halvåret by på gode muligheter 
          — spesielt i Oslo. For deg som skal selge, kan det være lurt å ikke vente 
          for lenge. Og for alle boligeiere: <strong>sjekk din rente, forhandl med 
          banken, og sørg for at du har en solid økonomisk buffer</strong>.
        </p>
        <p>
          Bolig er fortsatt den viktigste økonomiske beslutningen de fleste tar. 
          Med riktig informasjon og god planlegging kan du navigere dette markedet 
          trygt — uansett om prisene går opp eller ned.
        </p>

        {/* Relaterte lenker */}
        <div className="bg-gray-50 rounded-xl p-6 mt-8">
          <h3 className="font-bold text-norsk-dark mb-4">Relaterte artikler og verktøy</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/artikler/norges-bank-hever-renten-mai-2026" className="text-primary-600 hover:underline font-medium">
                Norges Bank hever renten til 4,25%: Hva betyr det for deg? →
              </Link>
            </li>
            <li>
              <Link href="/boliglan/boliglan-rente-2026" className="text-primary-600 hover:underline font-medium">
                Komplett oversikt over boliglånsrenter 2026 →
              </Link>
            </li>
            <li>
              <Link href="/verktøy/boliglånskalkulator" className="text-primary-600 hover:underline font-medium">
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
            Artikkelen er basert på offentlig informasjon fra Eiendom Norge, Norges Bank 
            og finansavisene per mai 2026. Regionale tall er veiledende basert på tilgjengelige 
            data. Prognoser og anbefalinger er av generell karakter og ikke personlig 
            finansrådgivning. Alltid konsulter en autorisert finansrådgiver før store 
            økonomiske beslutninger. Pengepraten.no er en uavhengig informasjonsside og 
            ikke en bank eller finansrådgiver.
          </p>
        </div>

        <p className="text-xs text-gray-400 mt-8">
          Publisert: 13. mai 2026 | Sist oppdatert: 13. mai 2026
        </p>
      </article>
    </>
  )
}
