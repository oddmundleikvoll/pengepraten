import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Skolestart 2026: Hva koster det egentlig for familien? | Pengepraten',
  description:
    'Skolestart 2026/2027 er rett rundt hjørnet (uke 33). Her er hva skolen faktisk dekker, hva du må betale selv, og konkrete budsjetttips for familien — med SFO-priser, utstyrsstipend og foreldrefradrag.',
  keywords: [
    'skolestart 2026',
    'skolestart 2026/2027',
    'familieøkonomi skolestart',
    'skoleutgifter 2026',
    'SFO priser 2026',
    'gratisprinsippet skolen',
    'utstyrsstipend Lånekassen',
    'foreldrefradrag 2026',
    'barnetrygd 2026',
  ],
  openGraph: {
    title: 'Skolestart 2026: Hva koster det egentlig for familien?',
    description:
      'Skolestart 2026/2027 er rett rundt hjørnet. Her er hva skolen faktisk dekker, hva du må betale selv, og konkrete budsjetttips for familien.',
    type: 'article',
    publishedTime: '2026-08-11T00:00:00+02:00',
    modifiedTime: '2026-08-11T00:00:00+02:00',
  },
}

export default function Skolestart2026Article() {
  const faqLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Når begynner skolen igjen 2026?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Skolestart for grunnskolen 2026/2027 er i uke 33 — det vil si mellom 17. og 21. august 2026 i de fleste kommuner. Noen kommuner, som Bergen, starter allerede fredag 14. august. Sjekk med din lokale skole for eksakt dato.',
        },
      },
      {
        '@type': 'Question',
        name: 'Må foreldre betale for skolebøker?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Nei. Lærebøker, digitale læremidler (PC/nettbrett), skrivesaker og annet undervisningsmateriell er gratis i grunnskolen — det er det såkalte gratisprinsippet i opplæringsloven § 2-5. Skolen skal dekke alt som er nødvendig for undervisningen. Dersom skolen krever betaling for noe som er en del av opplæringen, kan du klage til Statsforvalteren.',
        },
      },
      {
        '@type': 'Question',
        name: 'Hva koster SFO i 2026?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Fra 1. august 2026 har elever på 1.–3. trinn lovfestet rett på 12 timer gratis SFO i uka. Utover det varierer prisen mellom kommuner. Eksempel fra Bergen: Hel plass 1.–3. trinn koster 845 kr/mnd, 4. trinn 3 551 kr/mnd, pluss 375 kr/mnd i mat. Mange kommuner har inntektsgradert foreldrebetaling og søskenmoderasjon.',
        },
      },
      {
        '@type': 'Question',
        name: 'Hva er utstyrsstipend fra Lånekassen?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Alle elever i videregående skole får utstyrsstipend fra Lånekassen, men du må søke for å få det. Søknadsfristen er 15. november. I 2026 er utstyrsstipendet inntil 3 595 kr for elever på yrkesfag og inntil 2 793 kr for elever på studieforberedende. Stipendet går til nødvendig utstyr som PC, bøker og yrkesspesifikt utstyr.',
        },
      },
      {
        '@type': 'Question',
        name: 'Hva kan jeg trekke fra i skattemeldingen for barnepass?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Foreldrefradraget i 2026 er inntil 15 000 kr for ett barn og 10 000 kr per ekstra barn, forutsatt at barnet er 11 år eller yngre ved uttektsårets utgang. For barn 12+ med særskilt behov for omsorg er grensene henholdsvis 25 000 kr og 15 000 kr per ekstra barn. Utgifter over 10 000 kr i året må betales via bank eller lønnstrekk for å være fradragsberettiget.',
        },
      },
      {
        '@type': 'Question',
        name: 'Hvor mye koster skolestarten i 2026?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'For de fleste familier med barn i grunnskolen er selve skolestarten gratis — skolen dekker bøker, PC og undervisningsmateriell. De variable kostnadene kommer fra: SFO (typisk 845–3 500 kr/mnd avhengig av trinn og kommune), klær og sko (2 000–5 000 kr), gymutstyr, fritidsaktiviteter (1 000–3 000 kr/mnd) og mat/matpakke. Et realistisk anslag for en grunnskolefamilie er 5 000–15 000 kr i august, pluss 3 000–8 000 kr i måneden utover høsten.',
        },
      },
      {
        '@type': 'Question',
        name: 'Hvor mye barnetrygd får jeg i 2026?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Barnetrygden i 2026 er 1 768 kr per måned per barn under 6 år, og 1 088 kr per barn fra 6 år. Overgangsstønad for enslige forsørgere kommer i tillegg. Barnetrygd utbetales automatisk så lenge barnet er registrert i folkeregisteret i Norge — du trenger ikke søke.',
        },
      },
    ],
  }

  const articleLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Skolestart 2026: Hva koster det egentlig for familien?',
    description:
      'Skolestart 2026/2027 er rett rundt hjørnet. Her er hva skolen faktisk dekker, hva du må betale selv, og konkrete budsjetttips for familien.',
    datePublished: '2026-08-11',
    dateModified: '2026-08-11',
    author: { '@type': 'Organization', name: 'Pengepraten', url: 'https://pengepraten.no' },
    publisher: {
      '@type': 'Organization',
      name: 'Pengepraten',
      logo: { '@type': 'ImageObject', url: 'https://pengepraten.no/logo.png' },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://pengepraten.no/artikler/skolestart-2026-familiens-okonomi',
    },
    keywords:
      'skolestart 2026, skolestart 2026/2027, familieøkonomi, skoleutgifter, SFO priser, gratisprinsippet, utstyrsstipend, foreldrefradrag, barnetrygd',
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
      />

      {/* Hero — Nordic Clarity editorial */}
      <section className="bg-paper text-ink py-12 border-b border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <nav className="font-mono text-xs uppercase tracking-wider text-ink-muted mb-6">
            <Link href="/" className="hover:text-forest transition-colors">Hjem</Link>
            <span className="mx-2 text-border-strong">/</span>
            <Link href="/budsjett" className="hover:text-forest transition-colors">Budsjett</Link>
            <span className="mx-2 text-border-strong">/</span>
            <span className="text-ink">Skolestart 2026</span>
          </nav>
          <div className="inline-block bg-forest-soft text-forest text-xs font-bold px-3 py-1 rounded-full mb-4">
            SKOLESTART 2026/2027
          </div>
          <h1 className="text-3xl md:text-4xl font-medium font-display leading-[1.08] mb-4">
            Skolestart 2026: Hva koster det egentlig for familien?
          </h1>
          <p className="text-ink-muted text-lg max-w-2xl leading-relaxed">
            Skolestart er rett rundt hjørnet — uke 33, altså mellom 17. og 21.
            august i de fleste kommuner. Her er hva skolen faktisk dekker, hva
            du må betale selv, og konkrete grep for å holde familieøkonomien
            under kontroll gjennom hele skoleåret.
          </p>
        </div>
      </section>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 py-12 article-content">
        <p className="text-xl text-gray-600 leading-relaxed mb-8">
          <strong>Skolestart 2026/2027</strong> er i uke 33 — for de fleste
          kommuner betyr det mellom <strong>17. og 21. august 2026</strong>.
          Noen skoler, som Bergen, begynner allerede fredag 14. august. Uansett
          når: de neste to ukene er det mange familier som lurer på det samme —
          <em> hva skal jeg egentlig kjøpe, og hva er det skolen som dekker?</em>
        </p>

        <p>
          Svaret koker ned til ett enkelt prinsipp: <strong>gratisprinsippet i
          opplæringsloven § 2-5</strong>. Det betyr at undervisningen er gratis
          — skolen skal dekke lærebøker, PC, skrivesaker, leirskole og
          nødvendige turer. Men det er flere ting foreldre likevel må betale
          for selv, og noen valg du kan gjøre som får store konsekvenser for
          familiebudsjettet utover høsten.
        </p>

        <p>
          I denne artikkelen får du en komplett oversikt: nøyaktig hva skolen
          dekker (og ikke), oppdaterte SFO-priser for 2026, nye regler for
          utstyrsstipend og foreldrefradrag, og konkrete budsjetttips for
          familien — slik at skolestarten blir en god opplevelse, ikke en
          økonomisk overraskelse.
        </p>

        <div className="bg-primary-50 border-l-4 border-primary-400 rounded-r-xl p-6 my-8">
          <p className="text-sm font-medium text-norsk-dark leading-relaxed m-0">
            <strong>Kort oppsummert:</strong> Selve undervisningen er gratis —
            det er det <strong>gratisprinsippet</strong> som sier. De variable
            kostnadene for en grunnskolefamilie ligger typisk i SFO
            (0–3 500 kr/mnd), fritidsaktiviteter (1 000–3 000 kr/mnd) og
            klær/utstyr ved skolestart (2 000–5 000 kr). Et realistisk månedlig
            fast beløp å budsjettere med er 3 000–8 000 kr fra august.
          </p>
        </div>

        {/* Hva skolen dekker */}
        <h2>Hva skolen faktisk dekker — gratisprinsippet</h2>
        <p>
          Opplæringsloven § 2-5 slår fast at <strong>grunnskoleopplæringen er
          gratis for elevene</strong>. Det betyr at kommunen — og ikke
          foreldrene — skal dekke alt som er nødvendig for undervisningen. I
          praksis betyr det ifølge Utdanningsdirektoratet og Bergen kommunes
          veileder:
        </p>
        <ul>
          <li>
            <strong>Lærebøker og skrive-/tegnesaker</strong> — utlånes av
            skolen, og skal leveres tilbake ved skoleslutt.
          </li>
          <li>
            <strong>Digitale læremidler</strong> — PC, nettbrett eller
            Chromebook. Skolen skal ikke kreve at du kjøper dette selv.
          </li>
          <li>
            <strong>Skrivesaker og kalkulator</strong> — dekkes av skolen når
            det er nødvendig for undervisningen.
          </li>
          <li>
            <strong>Transport i skoletiden</strong> — når det er en del av
            undervisningen (f.eks. svømming, museumstur).
          </li>
          <li>
            <strong>Leirskole og skoleturer</strong> — alle kommuner er
            pålagt å tilby leirskole eller tilsvarende tur som del av
            grunnskoleopplæringen. Kost og losji dekkes av kommunen.
          </li>
          <li>
            <strong>Aktivitetsdager og ekskursjoner</strong> i skolens regi —
            for eksempel skidag, teaterbesøk eller museumsbesøk.
          </li>
        </ul>
        <p>
          <strong>Viktig:</strong> Dersom skolen krever betaling for noe som er
          en del av opplæringen, kan du klage. Klagen sendes først til
          skolen, og deretter videre til Statsforvalteren i ditt fylke.
          Gratisprinsippet er ikke til hinder for at skolen kan motta
          <em> frivillige</em> bidrag til klassekasse — men slike bidrag skal
          alltid være anonyme, slik at ingen foreldre føler seg presset.
        </p>

        <h2>Hva du må betale selv</h2>
        <p>
          Selv om undervisningen er gratis, er det flere faste og variable
          kostnader som ligger hos familien. Listen under er hentet fra Bergen
          kommunes informasjon, og gjelder tilsvarende i de fleste norske
          kommuner:
        </p>
        <ul>
          <li>
            <strong>Matpakke/mat i skoletiden</strong> — skolen dekker ikke
            mat. Mange skoler tilbyr skolefrukt eller skolemåltid, men det
            varierer.
          </li>
          <li>
            <strong>Gymtøy og klær</strong> som ikke er undervisningsmateriell.
          </li>
          <li>
            <strong>Eventuelt internett hjemme</strong> — skolen kan ikke
            kreve at du har internett for å gjøre lekser; har du ikke
            tilgang, skal skolen finne en løsning (f.eks. lekser på skolen).
          </li>
          <li>
            <strong>SFO (skolefritidsordning)</strong> — frivillig tilbud
            utenom skoletid for 1.–4. trinn. Fra 1. august 2026 er 12
            timer/uke gratis for 1.–3. trinn.
          </li>
          <li>
            <strong>Fritidsaktiviteter</strong> — idrett, musikk, kultur.
            Dette er den største variable kostnaden for mange familier.
          </li>
        </ul>

        {/* SFO-priser */}
        <h2>SFO-priser 2026 — nye regler fra 1. august</h2>
        <p>
          Fra <strong>1. august 2026</strong> er opplæringsloven endret slik at
          elever på 1.–3. trinn får en lovfestet rett til <strong>12 timer
          gratis SFO i uka</strong>. Dette ble vedtatt i statsbudsjettet 2026
          og er nå en plikt for alle kommuner. Utover de 12 gratistimene
          varierer prisene kraftig mellom kommuner.
        </p>
        <p>
          Eksempel fra <strong>Bergen kommune</strong> for skoleåret 2026/2027:
        </p>
        <div className="overflow-x-auto my-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-primary-50">
                <th className="text-left p-3 border border-gray-200 font-semibold">Plass-type</th>
                <th className="text-left p-3 border border-gray-200 font-semibold">1.–3. trinn</th>
                <th className="text-left p-3 border border-gray-200 font-semibold">4. trinn</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white">
                <td className="p-3 border border-gray-200 font-bold">Hel plass (full SFO)</td>
                <td className="p-3 border border-gray-200">845 kr/mnd</td>
                <td className="p-3 border border-gray-200">3 551 kr/mnd</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="p-3 border border-gray-200 font-bold">Redusert plass (inntil 60 %)</td>
                <td className="p-3 border border-gray-200">0 kr</td>
                <td className="p-3 border border-gray-200">2 706 kr/mnd</td>
              </tr>
              <tr className="bg-white">
                <td className="p-3 border border-gray-200 font-bold">Morgenplass</td>
                <td className="p-3 border border-gray-200">0 kr</td>
                <td className="p-3 border border-gray-200">1 255 kr/mnd</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="p-3 border border-gray-200 font-bold">Mat (i tillegg)</td>
                <td className="p-3 border border-gray-200">375 kr/mnd</td>
                <td className="p-3 border border-gray-200">375 kr/mnd</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          <em>Prisene er eksempler fra Bergen. Sjekk din kommune for eksakte
          satser — og husk at <strong>inntektsgradert foreldrebetaling</strong>{' '}
          og <strong>søskenmoderasjon</strong> kan gi store summer spart.
          Familier med samlet inntekt under 154 917 kr kan få redusert SFO-pris.
          Søknadsfrist og prosedyre varierer — spør SFO-leder eller
          foreldreportalen (Vigilo, IST, m.fl.).</em>
        </p>

        <p>
          To konkrete eksempler — begge fra Bergen, SFO-året 2026/2027:
        </p>
        <ul>
          <li>
            <strong>Barn på 1. trinn, hel plass:</strong> 845 kr/mnd + 375 kr
            mat = <strong>1 220 kr/mnd</strong>. Gratis kjernetid på 12 t/uke
            er inkludert.
          </li>
          <li>
            <strong>Barn på 4. trinn, hel plass:</strong> 3 551 kr/mnd + 375
            kr mat = <strong>3 926 kr/mnd</strong>. <em>Merk:</em> Fra 2026/2027
            er det bevilget midler til gratis halvdagsplass for 4. trinn ved
            utvalgte skoler i levekårsutsatte områder (i Bergen: Fridalen, Ny
            Krohnborg, Slettebakken, Loddefjord, Olsvik og Vadmyra).
          </li>
        </ul>
        <p>
          For et par som har to barn, et på 1. trinn og et på 4. trinn, blir
          SFO-kostnaden dermed <strong>5 146 kr/mnd</strong> — eller 56 606
          kr/året. Søskenmoderasjon (25 % fra barn nummer tre) gjelder ikke
          for to barn, men kan være relevant for større familier.
        </p>

        {/* Utstyrsstipend */}
        <h2>Utstyrsstipend fra Lånekassen — ikke glem denne fristen</h2>
        <p>
          Alle elever i <strong>videregående skole</strong> får utstyrsstipend
          fra Lånekassen — men du må huske å søke. Stipendet går til nødvendig
          utstyr som PC, bøker og yrkesspesifikt utstyr.
        </p>
        <div className="bg-amber-50 border-l-4 border-amber-400 rounded-r-xl p-6 my-8">
          <p className="text-sm font-medium text-norsk-dark leading-relaxed m-0">
            <strong>Søknadsfrist utstyrsstipend:</strong> 15. november 2026.
            Sett en påminnelse i kalenderen nå — fristen gjelder alle
            videregående elever, både Vg1, Vg2 og Vg3, og uavhengig av
            utdanningsprogram.
          </p>
        </div>
        <p>
          Størrelsen på stipendet varierer med utdanningsprogram og
          klassetrinn. For 2026 er de omtrentlige satsene:
        </p>
        <ul>
          <li>
            <strong>Yrkesfag (Vg1):</strong> inntil 3 595 kr
          </li>
          <li>
            <strong>Studiespesialisering (Vg1):</strong> inntil 2 793 kr
          </li>
          <li>
            <strong>Høyere årstrinn</strong> kan ha andre satser — sjekk
            Lånekassen.no for oppdatert oversikt.
          </li>
        </ul>
        <p>
          I tillegg til utstyrsstipend kan du søke om <strong>borteboerstipend</strong>
          {` `}og <strong>inntektsavhengig stipend</strong> fra Lånekassen. Du
          kan også låne mer gjennom studielånet hvis du trenger det for
          dekning av boutgifter.
        </p>

        {/* Foreldrefradrag */}
        <h2>Foreldrefradrag 2026 — 15 000 kr per barn</h2>
        <p>
          Foreldrefradraget i skattemeldingen er en viktig post for de fleste
          barnefamilier. I 2026 er satsene:
        </p>
        <ul>
          <li>
            <strong>15 000 kr</strong> for ett barn (11 år eller yngre ved
            utgangen av inntektsåret).
          </li>
          <li>
            <strong>+ 10 000 kr</strong> per ekstra barn.
          </li>
          <li>
            <strong>25 000 kr</strong> for ett barn over 12 år med særskilt
            behov for omsorg og pleie.
          </li>
        </ul>
        <p>
          Fradraget gjelder både SFO, fritidsordninger (for eksempel kulturskole,
          idrettslag som er «fullverdig alternativ» til SFO), og pass av
          barn. For at kostnadene skal være fradragsberettiget, må utgifter
          over 10 000 kr/år betales via bank eller lønnstrekk, og du må kunne
          dokumentere dem.
        </p>
        <p>
          Eksempel: SFO for et barn koster 3 926 kr/mnd = 47 112 kr/året. Det
          er langt over 15 000 kr — så du får fullt foreldrefradrag, og
          skattebesparelsen er om lag 15 000 kr × 22 % = <strong>3 300 kr per
          barn</strong>. For et par med to barn i SFO er det 6 600 kr i
          skattebesparelse — penger som kan gå rett til neste års SFO.
        </p>

        <h2>Barnetrygd 2026 — kommer automatisk</h2>
        <p>
          Barnetrygden er en universell støtte for alle barn under 18 år som
          er folkeregistrert i Norge. Den utbetales automatisk, så du trenger
          ikke søke. I 2026 er satsene:
        </p>
        <ul>
          <li>
            <strong>1 768 kr/mnd</strong> per barn under 6 år.
          </li>
          <li>
            <strong>1 088 kr/mnd</strong> per barn fra 6 år.
          </li>
        </ul>
        <p>
          Eksempel: To barn på 4 og 9 år = 1 768 + 1 088 ={' '}
          <strong>2 856 kr/mnd</strong>, eller 34 272 kr/året. For enslige
          forsørgere kommer overgangsstønad i tillegg.
        </p>

        {/* Konkrete budsjetttips */}
        <h2>Konkrete budsjetttips for skolestarten</h2>
        <p>
          Skolestart-handlingen trenger ikke være en stor økonomisk smell. Her
          er syv konkrete grep som har størst effekt:
        </p>
        <ol>
          <li>
            <strong>Sjekk hva skolen faktisk krever.</strong> Mange foreldre
            kjøper PC, bøker eller kalkulator «for sikkerhets skyld» — men
            gratisprinsippet sier at skolen skal dekke dette. Vent til du får
            beskjed om noe mangler.
          </li>
          <li>
            <strong>Sjekk SFO-prisen i din kommune — og søk om
            inntektsgradert betaling.</strong> Mange familier betaler full
            pris selv om de har rett på reduksjon. Søknadsfristen er ofte
            tidlig på høsten. Eksempel: Bergen-familier med inntekt under 154
            917 kr får redusert pris.
          </li>
          <li>
            <strong>Husk søknadsfristen for utstyrsstipend (15. november).</strong>
            Sett alarm i kalenderen. For en Vg1-elev på yrkesfag er dette 3 595
            kr — dekker som regel PC eller nødvendig utstyr.
          </li>
          <li>
            <strong>Bruk foreldrefradraget aktivt.</strong> Betal SFO, fritids-
            og kulturskoleavgift via bank eller lønnstrekk — over 10 000 kr
            per år. Da kan du kreve fradrag i skattemeldingen.
          </li>
          <li>
            <strong>Kjøp brukt der det er mulig.</strong> Gymtøy, sko, sekk og
            yttertøy vokser barn fort ut av. Finn en lokal Facebook-gruppe
            («Barna i X kommune», «Foreldre på Y skole») — bruktmarkedet er
            stort, og kvaliteten på barneklær er ofte god nok.
          </li>
          <li>
            <strong>Velg én fritidsaktivitet om gangen.</strong> To-tre
            aktiviteter koster fort 3 000–5 000 kr/mnd. Barn trenger
            konsolidering mer enn timeplan-fyll. Vurder hva som faktisk
            engasjerer barnet — og kutt resten.
          </li>
          <li>
            <strong>Buffér i mai–juni for neste skolestart.</strong> Skolestart-
            utgifter er forutsigbare. Sett av 500–1 000 kr/mnd på en
            høyrentekonto fra nyttår, så er sjekken i august null-stress.
          </li>
        </ol>

        <h2>Sparing til barna — start tidlig, bli tidlig rik</h2>
        <p>
          For familier som har økonomi til det: <strong>start sparing til
          barna nå</strong>. Selv 500 kr/mned over 18 år blir 108 000 kr — og
          med rentes rente på en vanlig høyrentekonto (4,5 %) blir det
          om lag 178 000 kr. I et globalt indeksfond (8 % langsiktig snitt)
          kan det bli over 250 000 kr.
        </p>
        <p>
          Tre konkrete alternativer:
        </p>
        <ul>
          <li>
            <strong>Sparekonto for barn.</strong> Enkel høyrentekonto i
            barnets navn. Tilgjengelig for 18-årsdagen. Les vår{' '}
            <Link href="/sparing/hoyrentekonto" className="text-primary-600 hover:underline font-medium">
              høyrentekonto-guide
            </Link>
            .
          </li>
          <li>
            <strong>BSU for ungdommen selv.</strong> Når barnet fyller 13, kan
            det åpne egen BSU. Skattefradraget på 10 % er Norges beste
            spareform. Les vår{' '}
            <Link href="/sparing/bsu-guide" className="text-primary-600 hover:underline font-medium">
              BSU-guide
            </Link>
            .
          </li>
          <li>
            <strong>Indirekte via foreldrenes sparing.</strong> Ikke
            nødvendigvis en egen konto — det viktigste er at dere sparer
            regelmessig. En indeksfond-portefølje kan stå i foreldrenes navn
            og overføres når barnet blir eldre. Se vår{' '}
            <Link href="/sparing/indeksfond-nybegynnere" className="text-primary-600 hover:underline font-medium">
              guide til indeksfond for nybegynnere
            </Link>
            .
          </li>
        </ul>

        {/* Sjekkliste */}
        <h2>Sjekkliste før skolestart 2026</h2>
        <ul>
          <li>
            <strong>10. august:</strong> Bekreft skolestart-dato med klasselærer
            eller skolens nettside.
          </li>
          <li>
            <strong>14.–18. august:</strong> Sjekk hva skolen faktisk krever av
            utstyr før du kjøper noe.
          </li>
          <li>
            <strong>1. september:</strong> Sjekk om din kommune har egen
            SFO-søknadsfrist for inntektsgradert foreldrebetaling.
          </li>
          <li>
            <strong>15. oktober:</strong> Søk om utstyrsstipend fra Lånekassen
            for videregående-elever (frist 15. november).
          </li>
          <li>
            <strong>15. november:</strong> Siste frist for utstyrsstipend.
          </li>
          <li>
            <strong>31. mars 2027:</strong> Sjekk at SFO-betaling og
            fritidsordninger er registrert i skattemeldingen for
            foreldrefradrag.
          </li>
        </ul>

        {/* FAQ */}
        <h2>Ofte stilte spørsmål om skolestart 2026</h2>

        <h3>Når begynner skolen igjen 2026?</h3>
        <p>
          Skolestart for grunnskolen 2026/2027 er i uke 33 — mellom 17. og 21.
          august 2026 i de fleste kommuner. Bergen starter allerede fredag 14.
          august. Sjekk med din lokale skole for eksakt dato.
        </p>

        <h3>Må foreldre betale for skolebøker?</h3>
        <p>
          Nei. Lærebøker, PC/nettbrett, skrivesaker og annet undervisningsmateriell
          er gratis i grunnskolen — det er det såkalte gratisprinsippet i
          opplæringsloven § 2-5. Dersom skolen krever betaling for noe som er
          en del av opplæringen, kan du klage til Statsforvalteren.
        </p>

        <h3>Hva koster SFO i 2026?</h3>
        <p>
          Fra 1. august 2026 har elever på 1.–3. trinn lovfestet rett på 12
          timer gratis SFO i uka. Utover det varierer prisen mellom kommuner.
          Eksempel fra Bergen: Hel plass 1.–3. trinn koster 845 kr/mnd,
          4. trinn 3 551 kr/mnd, pluss 375 kr/mnd i mat. Sjekk kommunens
          nettsider for eksakte satser.
        </p>

        <h3>Hva er utstyrsstipend fra Lånekassen?</h3>
        <p>
          Alle elever i videregående skole får utstyrsstipend, men du må søke
          for å få det. Søknadsfrist er 15. november. I 2026 er satsene
          inntil 3 595 kr for yrkesfag og 2 793 kr for studieforberedende.
          Stipendet går til nødvendig utstyr.
        </p>

        <h3>Hvor mye koster skolestarten i 2026?</h3>
        <p>
          Selve skolestarten er gratis — skolen dekker bøker, PC og
          undervisningsmateriell. De variable kostnadene for en grunnskole-
          familie er SFO (0–3 500 kr/mnd), fritidsaktiviteter (1 000–3 000
          kr/mnd) og klær/utstyr ved skolestart (2 000–5 000 kr). Et
          realistisk månedlig fast beløp å budsjettere med er 3 000–8 000 kr
          fra august.
        </p>

        <h3>Hvor mye barnetrygd får jeg i 2026?</h3>
        <p>
          Barnetrygden i 2026 er 1 768 kr/mnd per barn under 6 år, og 1 088
          kr/mnd per barn fra 6 år. Utbetales automatisk — du trenger ikke
          søke. For enslige forsørgere kommer overgangsstønad i tillegg.
        </p>

        {/* Konklusjon */}
        <h2>Konklusjon</h2>
        <p>
          <strong>Selve skolestarten er gratis — men høsten koster.</strong>{' '}
          Når du vet hva som er gratis (undervisning, bøker, PC), hva som
          varierer (SFO, fritidsaktiviteter), og hvilke støtteordninger du
          har krav på (utstyrsstipend, foreldrefradrag, barnetrygd), blir
          familieøkonomien langt mer forutsigbar. Bruk sjekklisten over, og
          du er klar for uke 33.
        </p>
        <p>
          Vi oppdaterer denne artikkelen dersom det kommer nye regler for
          skoleåret 2026/2027 — særlig hvis SFO-prisene eller
          utstyrsstipend-satsene endres etter statsbudsjettet for 2027.
        </p>

        {/* Relaterte lenker */}
        <div className="bg-gray-50 rounded-xl p-6 mt-8">
          <h3 className="font-bold text-norsk-dark mb-4">Relaterte artikler</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/budsjett/kom-i-gang-med-budsjett" className="text-primary-600 hover:underline font-medium">
                Kom i gang med budsjett: En komplett guide →
              </Link>
            </li>
            <li>
              <Link href="/sparing/bsu-guide" className="text-primary-600 hover:underline font-medium">
                BSU 2026: Alt du trenger å vite →
              </Link>
            </li>
            <li>
              <Link href="/sparing/hoyrentekonto" className="text-primary-600 hover:underline font-medium">
                Høyrentekonto 2026 — beste rente og oversikt →
              </Link>
            </li>
            <li>
              <Link href="/sparing/indeksfond-nybegynnere" className="text-primary-600 hover:underline font-medium">
                Indeksfond for nybegynnere →
              </Link>
            </li>
            <li>
              <Link href="/sparing/spareplan-guide" className="text-primary-600 hover:underline font-medium">
                Slik setter du opp en spareplan som fungerer →
              </Link>
            </li>
          </ul>
        </div>

        <div className="bg-amber-50 border-l-4 border-amber-400 rounded-r-xl p-6 mt-8">
          <h3 className="font-bold text-norsk-dark mb-2">Viktig å vite</h3>
          <p className="text-sm text-gray-700 leading-relaxed">
            Artikkelen er basert på informasjon fra Utdanningsdirektoratet
            (udir.no), Skatteetaten, Lånekassen, Bergen kommune og aktuelle
            lovendringer per 11. august 2026. SFO-priser og satser for
            utstyrsstipend og foreldrefradrag kan variere mellom kommuner og
            blir justert årlig. Sjekk alltid din kommunes nettsider og
            Lånekassen.no for oppdaterte tall.
          </p>
        </div>

        <p className="text-xs text-gray-400 mt-8">
          Publisert: 11. august 2026 | Sist oppdatert: 11. august 2026
        </p>
      </article>
    </>
  )
}
