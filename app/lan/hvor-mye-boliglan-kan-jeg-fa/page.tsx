import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Hvor mye boliglån kan jeg få? Sånn regner du ut det i 2026',
  description: 'Lær hvor mye boliglån du kan få basert på inntekt, gjeld og egenkapital. Vi forklarer finanstilsynets regler og gir deg en enkel formel for å regne ut ditt maksimale lånebeløp.',
  keywords: ['boliglån', 'hvor mye kan jeg låne', 'boliglånskalkulator', 'egenkapital', 'låneevne', 'finanstilsynet'],
}

export default function HvorMyeBoliglanKanJegFa() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <nav className="text-primary-200 text-sm mb-4">
            <Link href="/" className="hover:text-white">Hjem</Link>
            <span className="mx-2">/</span>
            <Link href="/lan" className="hover:text-white">Lån</Link>
            <span className="mx-2">/</span>
            <span>Hvor mye boliglån kan jeg få</span>
          </nav>
          <span className="inline-block px-3 py-1 text-xs font-semibold bg-white/20 rounded-full mb-4">
            Oppdatert april 2026
          </span>
          <h1 className="text-3xl md:text-4xl font-black mb-4">
            Hvor mye boliglån kan jeg få?
          </h1>
          <p className="text-primary-100 text-lg">
            Sånn regner du ut ditt maksimale lånebeløp basert på inntekt, 
            gjeld og Finanstilsynets regler. Inkluderer enkel kalkulator.
          </p>
        </div>
      </section>

      {/* Article content */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 py-12 article-content">
        <p className="text-xl text-gray-600 leading-relaxed mb-8">
          Å kjøpe bolig er for de fleste den største økonomiske beslutningen i livet. 
          Men før du begynner å drømme om det perfekte hjemmet, må du vite hva du faktisk 
          har råd til. I denne guiden forklarer vi nøyaktig hvor mye boliglån du kan få, 
          hvilke regler som gjelder, og hvordan du kan maksimere låneevnen din.
        </p>

        <div className="bg-blue-50 border-l-4 border-blue-500 rounded-r-xl p-6 my-8">
          <h3 className="font-bold text-norsk-dark mb-2">💡 Visste du at...</h3>
          <p className="text-gray-700">
            Finanstilsynets retningslinjer sier at den totale gjelden din ikke bør overstige 
            <strong> 5 ganger brutto årsinntekt</strong>. Dette er ikke en lov, men de aller 
            fleste banker følger denne grensen.
          </p>
        </div>

        <h2>De tre viktigste faktorene for boliglån</h2>
        <p>
          Bankene vurderer mange faktorer når de skal godkjenne et boliglån, men tre står 
          frem som avgjørende:
        </p>

        <h3>1. Egenkapital (minimum 15%)</h3>
        <p>
          I Norge må du ha minst <strong>15% egenkapital</strong> av kjøpesummen for å få 
          boliglån. For en bolig til 4 millioner kroner betyr det at du må ha 600.000 kroner 
          i egenkapital. Resten — 3,4 millioner — kan du låne.
        </p>
        <p>
          Egenkapital kan komme fra:
        </p>
        <ul>
          <li>Oppsparte midler på konto</li>
          <li>BSU (Boligsparing for unge)</li>
          <li>Gave fra familie (ofte foreldre)</li>
          <li>Arv</li>
          <li>Verdien på en eventuell eksisterende bolig</li>
        </ul>

        <div className="bg-amber-50 border-l-4 border-amber-400 rounded-r-xl p-6 my-8">
          <h3 className="font-bold text-norsk-dark mb-2">⚠️ Viktig å huske på</h3>
          <p className="text-gray-700">
            Egenkapitalen må være «ekte» penger — altså ikke fra et forbrukslån. Bankene 
            sjekker nøye hvor pengene kommer fra, og et lån som egenkapital vil som regel 
            bli avslått.
          </p>
        </div>

        <h3>2. Inntekt (maks 5x årsinntekt)</h3>
        <p>
          Finanstilsynets retningslinjer sier at total gjeld ikke bør overstige 
          <strong> 5 ganger brutto årsinntekt</strong>. Dette inkluderer:
        </p>
        <ul>
          <li>Studentlån</li>
          <li>Forbrukslån</li>
          <li>Kredittkortgjeld (selv om du betaler den ned hver måned)</li>
          <li>Eventuell gjeld på hytte eller bil</li>
          <li>Det nye boliglånet du søker om</li>
        </ul>

        <p>
          <strong>Eksempel:</strong> Hvis du tjener 600.000 kroner i året, bør total 
          gjeld ikke overstige 3 millioner kroner. Har du allerede 200.000 i studentlån, 
          sitter du igjen med 2,8 millioner i lånerom for bolig.
        </p>

        <h3>3. Betjeningsevne (maks 5% rente)</h3>
        <p>
          Bankene må også sjekke at du har råd til å betale lånet selv om renten går opp. 
          De bruker derfor en <strong>stresstest med 5% rente</strong> (eller renten pluss 
          3 prosentpoeng, avhengig av hva som er høyest).
        </p>
        <p>
          I tillegg skal du ha nok penger til å leve et «normalt liv» etter alle regninger 
          er betalt. Dette kalles <strong>restgjeldsevne</strong>.
        </p>

        <h2>[VIZ: Boliglånskalkulator med sliders for inntekt, gjeld og egenkapital]</h2>
        <p>
          En interaktiv kalkulator hvor brukeren kan justere:
        </p>
        <ul>
          <li>Årsinntekt (slider: 300.000 – 1.500.000 kr)</li>
          <li>Eksisterende gjeld (slider: 0 – 1.000.000 kr)</li>
          <li>Egenkapital (slider: 100.000 – 2.000.000 kr)</li>
          <li>Output: Maks boligpris, maks lånebeløp, månedlig kostnad ved 5% rente</li>
        </ul>

        <h2>Hvordan regne ut ditt maksimale lånebeløp</h2>
        <p>
          Her er en enkel formel du kan bruke for å få et omtrentlig tall:
        </p>

        <div className="bg-gray-50 rounded-xl p-6 my-6">
          <h3 className="font-bold text-norsk-dark mb-4">Trinn-for-trinn beregning</h3>
          <ol className="space-y-3">
            <li><strong>Steg 1:</strong> Ta brutto årsinntekt × 5 = Maks total gjeld</li>
            <li><strong>Steg 2:</strong> Trekk fra eksisterende gjeld (studentlån, forbrukslån, etc.)</li>
            <li><strong>Steg 3:</strong> Resultatet er maksimalt boliglån</li>
            <li><strong>Steg 4:</strong> Del lånebeløpet på 0,85 for å finne maks boligpris</li>
          </ol>
        </div>

        <p>
          <strong>Eksempel — Maria (28 år):</strong>
        </p>
        <ul>
          <li>Årsinntekt: 550.000 kr</li>
          <li>Studentlån: 250.000 kr</li>
          <li>Egenkapital: 400.000 kr</li>
        </ul>
        <p>
          <strong>Beregning:</strong>
        </p>
        <ul>
          <li>550.000 × 5 = 2.750.000 kr (maks total gjeld)</li>
          <li>2.750.000 − 250.000 = 2.500.000 kr (maks boliglån)</li>
          <li>2.500.000 ÷ 0,85 = 2.941.000 kr (maks boligpris)</li>
        </ul>
        <p>
          Med 400.000 i egenkapital har Maria nok til en bolig til rundt 2,9 millioner kroner.
        </p>

        <h2>Slik maksimerer du låneevnen din</h2>
        <p>
          Hvis du føler at lånerommen er for trangt, finnes det flere grep du kan ta:
        </p>

        <h3>Betal ned eksisterende gjeld</h3>
        <p>
          Hver krone du betaler ned på studentlån eller forbrukslån frigjør fem kroner 
          i låneevne. Prioriter å bli kvitt forbrukslån og kredittkortgjeld først — dette 
          har ofte høyere rente og teller fullt ut i gjeldsberegningen.
        </p>

        <h3>Søk sammen med partner</h3>
        <p>
          Å søke sammen med en partner dobler i praksis låneevnen deres. To inntekter 
          gir langt større lånerom enn én. Selv om dere ikke er gift, kan dere søke 
          om felles lån — men vær klar over at dere da blir solidarisk ansvarlige.
        </p>

        <h3>Bruk BSU-muligheten fullt ut</h3>
        <p>
          Hvis du er under 34 år, er BSU den beste måten å bygge egenkapital på. Du får:
        </p>
        <ul>
          <li>10% skattefradrag på inntil 27.500 kr i året (maks 2.750 kr i skattefradrag)</li>
          <li>Ofte bedre rente enn vanlig sparekonto</li>
          <li>En strukturert spareplan</li>
        </ul>

        <h3>Få hjelp fra familien</h3>
        <p>
          Mange førstegangskjøpere får hjelp fra foreldre til egenkapital. Dette kan 
          være i form av:
        </p>
        <ul>
          <li>Gave (skattefritt inntil 100.000 kr per år fra hver forelder)</li>
          <li>Lån fra foreldre (men dette må deklareres til banken)</li>
          <li>Kausion (foreldrene stiller sikkerhet for deler av lånet)</li>
        </ul>

        <h2>Vanlige spørsmål om boliglån</h2>

        <h3>Kan jeg få boliglån med betalingsanmerkning?</h3>
        <p>
          Det er svært vanskelig. De fleste banker avslår søknader fra personer med 
          betalingsanmerkninger. Noen spesialbanker kan vurdere det, men da med 
          betydelig høyere rente og strengere krav til egenkapital.
        </p>

        <h3>Hva med fastlønn vs. provisjon?</h3>
        <p>
          Bankene foretrekker fastlønn, men provisjonsbasert inntekt teller også — 
          ofte basert på et gjennomsnitt av de siste 2-3 årene. Har du variabel inntekt, 
          kan det være lurt å søke i en måned hvor du har høy inntekt.
        </p>

        <h3>Teller barnetrygd som inntekt?</h3>
        <p>
          Ja, barnetrygd og andre faste stønader fra det offentlige kan telle med i 
          inntektsberegningen. Dette kan være spesielt relevant for enslige forsørgere.
        </p>

        <h3>Hvor lang nedbetalingstid kan jeg få?</h3>
        <p>
          Standard nedbetalingstid på boliglån i Norge er <strong>25-30 år</strong>. 
          Du kan velge kortere tid, men det gir høyere månedlige kostnader. Maksimal 
          nedbetalingstid er vanligvis 30 år.
        </p>

        <div className="bg-green-50 border-l-4 border-green-500 rounded-r-xl p-6 my-8">
          <h3 className="font-bold text-norsk-dark mb-2">💡 Visste du at...</h3>
          <p className="text-gray-700">
            Du kan ha opptil <strong>10% av lånet som «flexilån»</strong> — altså en 
            rammekreditt som du kan bruke til oppussing eller andre formål. Dette gir 
            deg fleksibilitet uten å søke om nytt lån senere.
          </p>
        </div>

        <h2>Oppsummering: Hvor mye kan DU låne?</h2>
        <p>
          For å finne ut nøyaktig hvor mye du kan låne:
        </p>
        <ol>
          <li>Gå gjennom inntekten din (siste 2-3 år)</li>
          <li>Regn ut all eksisterende gjeld</li>
          <li>Beregn tilgjengelig egenkapital</li>
          <li>Bruk formelen: (Inntekt × 5 − Gjeld) = Maks lån</li>
          <li>Kontakt flere banker for å få et reelt tilbud</li>
        </ol>
        <p>
          Husk at bankenes kalkulatorer og regler er retningslinjer — ikke absolutte 
          sannheter. Har du en god betalingshistorikk, stabil jobb og solid økonomi, 
          kan du ofte få litt mer fleksibilitet.
        </p>

        <div className="bg-primary-50 rounded-xl p-6 my-8">
          <h3 className="font-bold text-norsk-dark mb-2">Få hjelp til å planlegge boligkjøpet</h3>
          <p className="text-gray-700 mb-4">
            Å kjøpe bolig er en stor beslutning. Med vår gratis budsjettmal kan du 
            enkelt se hvor mye du har råd til å bruke på bolig hver måned — og hvor 
            mye du bør spare til egenkapital.
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
          <li>Finanstilsynet: Retningslinjer for boliglån (april 2026)</li>
          <li>Finans Norge: Veiledning om låneevne og gjeldsgrad</li>
          <li>Skatteetaten: Regler for gaver og skattefradrag</li>
        </ul>

        <p className="text-sm text-gray-500 mt-8">
          <strong>Forfatter:</strong> Pengepraten | <strong>Sist oppdatert:</strong> 9. april 2026
          <br />
          Artikkelen er ment som veiledning og utgjør ikke finansiell rådgivning. 
          Kontakt alltid banken din for konkrete tilbud og vurderinger.
        </p>
      </article>
    </>
  )
}
