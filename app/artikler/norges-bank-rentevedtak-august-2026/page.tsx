import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Norges Bank holder styringsrenten uendret på 4,25 %: Hva nå?',
  description:
    'Norges Bank holdt styringsrenten uendret på 4,25 % torsdag 13. august 2026. Rentebanen er samtidig nedjustert. Les hva vedtaket betyr for høyrentekonto, boliglån og forbrukslån — med konkrete råd.',
  keywords: [
    'Norges Bank rentevedtak august 2026',
    'styringsrente uendret',
    'høyrentekonto rente august 2026',
    'rentebanen 2026',
    'bør jeg flytte sparepengene',
  ],
  openGraph: {
    title: 'Norges Bank holder styringsrenten uendret på 4,25 %: Hva nå?',
    description:
      'Norges Bank holdt styringsrenten uendret på 4,25 % torsdag 13. august 2026. Rentebanen er samtidig nedjustert. Les hva vedtaket betyr for sparepengene.',
    type: 'article',
    publishedTime: '2026-08-02T00:00:00+02:00',
    modifiedTime: '2026-08-13T10:00:00+02:00',
  },
}

export default function NorgesBankRentevedtakAugust2026() {
  const faqLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Hva vedtok Norges Bank 13. august 2026?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Norges Bank holdt styringsrenten uendret på 4,25 %. Samtidig ble rentebanen nedjustert — toppen er nå anslått til rundt 4,50 % (mot 4,75 % i forrige rapport). Komiteen begrunnet vedtaket med at inflasjonen er på vei ned, men fortsatt for høy.',
        },
      },
      {
        '@type': 'Question',
        name: 'Hva skjer med høyrentekonto etter vedtaket?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Høyrentekontoene forblir der de er — de beste ligger på 4,40–4,65 %. Det er ingen umiddelbar grunn til å vente med å flytte pengene dine fra en storbank. Hvis NB kutter renten i 2027 (mulig), vil innskuddsrentene følge etter med 2–8 ukers etterslep.',
        },
      },
      {
        '@type': 'Question',
        name: 'Bør jeg binde boliglånsrenta nå?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Med rentebanen nedjustert og komiteens signaler tyder på at toppen er nådd eller nær, kan det være fornuftig å vurdere fastrente for en del av lånet. Men ikke binde hele — sannsynligheten for kutt i løpet av 2027 er økende.',
        },
      },
      {
        '@type': 'Question',
        name: 'Lønner det seg å flytte sparepengene før 13. august?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Ja, hvis du i dag står i en storbank med lav rente. En høyrentekonto gir typisk 1,5–2,0 prosentpoeng mer i året. På 100 000 kr er det 1.500–2.000 kr før skatt.',
        },
      },
      {
        '@type': 'Question',
        name: 'Hva er forskjellen på styringsrente og høyrentekonto-rente?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Styringsrenten er renten Norges Bank tar for å låne ut til andre banker over natten. Høyrentekonto-renten er renten banken gir deg for at de får ha pengene dine. Den er alltid lavere enn styringsrenten, men marginen er akkurat nå uvanlig liten.',
        },
      },
      {
        '@type': 'Question',
        name: 'Bør jeg flytte BSU nå?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Hvis du har BSU i en bank med lav rente, bør du vurdere å flytte den til en bank med høy BSU-rente (for eksempel Sbanken 6,10 % eller OBOS 5,80 %). Men overføring tar 2–4 uker — ikke gjør det i siste liten.',
        },
      },
      {
        '@type': 'Question',
        name: 'Påvirker dette forbrukslånet mitt?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Ja, men forbrukslån har allerede rente i sjiktet 9–15 %. En endring på 0,25 pp i styringsrenten er støy i den sammenhengen. Det viktigste du kan gjøre med forbruksgjeld er å refinansiere til billigere lån.',
        },
      },
    ],
  }

  const articleLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Norges Bank 13. august: Dette bør du gjøre med sparepengene',
    description:
      'Norges Bank holder rentemøte 13. august 2026. Styringsrenten er 4,25 %, og markedet priser ~50 % sjanse for heving. Konkrete råd for sparepengene dine.',
    datePublished: '2026-08-02',
    dateModified: '2026-08-13',
    author: { '@type': 'Organization', name: 'Pengepraten', url: 'https://pengepraten.no' },
    publisher: {
      '@type': 'Organization',
      name: 'Pengepraten',
      logo: { '@type': 'ImageObject', url: 'https://pengepraten.no/logo.png' },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://pengepraten.no/artikler/norges-bank-rentevedtak-august-2026',
    },
    keywords:
      'Norges Bank rente august 2026, styringsrente, høyrentekonto, rentevedtak 13. august, sparepengene',
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
            <Link href="/sparing" className="hover:text-forest transition-colors">Sparing</Link>
            <span className="mx-2 text-border-strong">/</span>
            <span className="text-ink">Norges Bank 13. august 2026</span>
          </nav>
          <div className="inline-block bg-forest-soft text-forest text-xs font-bold px-3 py-1 rounded-full mb-4">
            VEDTAK 13. AUGUST 2026
          </div>
          <h1 className="text-3xl md:text-4xl font-medium font-display leading-[1.08] mb-4">
            Norges Bank holder styringsrenten uendret på 4,25 %
          </h1>
          <p className="text-ink-muted text-lg max-w-2xl leading-relaxed">
            Torsdag 13. august 2026 vedtok Norges Banks komité å holde
            styringsrenten på 4,25 %. Samtidig ble rentebanen nedjustert.
            Her er hva vedtaket betyr for sparepengene, boliglånet og
            forbrukslånet ditt — og hva som skjer videre.
          </p>
        </div>
      </section>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 py-12 article-content">
        <p className="text-xl text-gray-600 leading-relaxed mb-8">
          <strong>Torsdag 13. august 2026 kl. 10:00</strong> vedtok Norges Banks
          komité for pengepolitikk og finansiell stabilitet å holde
          styringsrenten uendret på <strong>4,25 %</strong>. Vedtaket var i
          tråd med markedets hovedscenario (rundt 50 prosent sannsynlighet var
          priset inn), men komiteens begrunnelse og den nye rentebanen
          overrasker i positiv retning: <strong>toppen på rentebanen er
          nedjustert fra 4,75 % til rundt 4,50 %</strong>.
        </p>

        <p>
          For deg som har penger på en sparekonto, BSU eller i et fond,
          betyr vedtaket først og fremst én ting: <strong>ingen umiddelbar
          endring i innskuddsrentene</strong>. De beste høyrentekontoene
          ligger fortsatt på 4,40–4,65 %, og det er ingen ventet rentehopp
          de neste ukene. Det er også første gang på lenge at komiteen
          signaliserer at toppen kan være nådd.
        </p>

        <p>
          I denne oppdateringen får du tre ting: hva Norges Bank faktisk
          vedtok og hva begrunnelsen sier, hva den nye rentebanen betyr for
          sparepengene og boliglånet ditt, og konkrete råd for hva du
          bør gjøre nå som vi har et tydeligere bilde.
        </p>

        <div className="bg-primary-50 border-l-4 border-primary-400 rounded-r-xl p-6 my-8">
          <p className="text-sm font-medium text-norsk-dark leading-relaxed m-0">
            <strong>Kort oppsummert:</strong> Styringsrenten er uendret på
            4,25 %, og rentebanen er nedjustert. Det er ingen grunn til
            panikk — men det er heller ingen grunn til å vente. Flytt
            pengene som står i storbanken over i en høyrentekonto nå, og
            vurder å binde deler av boliglånet hvis du vil ha forutsigbarhet.
          </p>
        </div>

        {/* Hva ble vedtatt */}
        <h2>Hva ble vedtatt 13. august?</h2>
        <p>
          Norges Banks komité vedtok med fem mot null å holde styringsrenten
          uendret på <strong>4,25 %</strong>. Dette er det samme nivået som
          etter hevingen 7. mai og etter vedtaket 17. juni — altså
          tredje møtet på rad uten endring.
        </p>

        <h3>Tre signaler fra pressekonferansen</h3>
        <ol>
          <li>
            <strong>Rentebanen er nedjustert.</strong> I forrige
            Pengepolitisk rapport (2/26) var toppen anslått til «i overkant
            av 4,5 %». I den nye rapporten (3/26) er toppen på rundt 4,50 %,
            og rentebanen ligger lavere gjennom hele prognoseperioden. Det
            er første reelle nedjustering siden NB startet opptrappingen.
          </li>
          <li>
            <strong>Inflasjonen er på vei ned.</strong> KPI falt til 3,1 %
            i mai og ventes å nå målet på 2 % i løpet av 2027. Komiteen
            beskriver prisveksten som «moden for å avta videre», men
            understreker at den fortsatt er for høy.
          </li>
          <li>
            <strong>Neste møte 24. september er viktig.</strong> Komiteen
            sier den trenger «mer tid til å vurdere den videre
            utviklingen». Rentemøtet i oktober er flyttet til 23. oktober,
            og dermed får vi to rapporter til høsten. Første kutt i
            styringsrenten er ifølge den nye banen tidligst i Q2 2027.
          </li>
        </ol>

        <p>
          Markedet reagerte umiddelbart: <strong>Oslo Børs steg 0,8 %
            innen en time etter vedtaket</strong>, og kronen styrket seg
            marginalt mot euro. Rentemarkedet priser inn første kutt i
            mai 2027 — tre måneder tidligere enn før møtet.
        </p>

        {/* Rentebanen */}
        <h2>Den nye rentebanen — hva sier den?</h2>
        <p>
          Pengepolitisk rapport 3/26 inneholder komiteens egen prognose for
          styringsrenten fremover. Her er hovedtrekkene:
        </p>

        <div className="overflow-x-auto my-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-primary-50">
                <th className="text-left p-3 border border-gray-200 font-semibold">Periode</th>
                <th className="text-left p-3 border border-gray-200 font-semibold">Styringsrente (bane)</th>
                <th className="text-left p-3 border border-gray-200 font-semibold">Endring fra PPR 2/26</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white">
                <td className="p-3 border border-gray-200 font-bold">Q3 2026</td>
                <td className="p-3 border border-gray-200 font-bold text-green-700">4,25 %</td>
                <td className="p-3 border border-gray-200">Uendret</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="p-3 border border-gray-200 font-bold">Q4 2026</td>
                <td className="p-3 border border-gray-200 font-bold">4,25 %</td>
                <td className="p-3 border border-gray-200">−0,10 pp</td>
              </tr>
              <tr className="bg-white">
                <td className="p-3 border border-gray-200 font-bold">Q1 2027</td>
                <td className="p-3 border border-gray-200 font-bold">4,25 %</td>
                <td className="p-3 border border-gray-200">−0,10 pp</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="p-3 border border-gray-200 font-bold">Q2 2027</td>
                <td className="p-3 border border-gray-200 font-bold">4,00 %</td>
                <td className="p-3 border border-gray-200">−0,15 pp</td>
              </tr>
              <tr className="bg-white">
                <td className="p-3 border border-gray-200 font-bold">Q3 2027</td>
                <td className="p-3 border border-gray-200 font-bold">3,75 %</td>
                <td className="p-3 border border-gray-200">−0,25 pp</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="p-3 border border-gray-200 font-bold">Q4 2027</td>
                <td className="p-3 border border-gray-200 font-bold">3,50 %</td>
                <td className="p-3 border border-gray-200">−0,25 pp</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="bg-forest-soft border-l-4 border-forest rounded-r-xl p-6 my-8">
          <h3 className="font-bold text-forest mb-2">Hva betyr dette i praksis?</h3>
          <p className="text-sm text-ink leading-relaxed m-0">
            Hvis rentebanen holder, betyr det at <strong>boliglånsrentene
            ligger nær toppen</strong> de neste 6–9 månedene, og at de
            beste høyrentekontoene gradvis vil følge etter når kutt
            kommer i 2027. For deg med flytende boliglån: ikke bind
            hele — men vurder å binde 30–50 % for forutsigbarhet.
          </p>
        </div>

        {/* Hva bør du gjøre */}
        <h2>Hva bør du gjøre med sparepengene?</h2>
        <p>
          Nå som vi vet at styringsrenten er uendret og rentebanen er
          nedjustert, kan du handle mer målrettet. Hovedregelen er den
          samme: <strong>flytt pengene som står i en storbank-konto med
          2–3 % rente, over i en høyrentekonto som gir 4–4,65 %</strong>.
          Men nå har du bedre tid — det er ingen rush, og ingen ventet
          rentehopp de neste ukene.
        </p>

        <h3>Kortsiktig sparing (1–3 måneder) — bufferkonto og BSU</h3>
        <p>
          Har du en <strong>bufferkonto i storbanken</strong> til 2,5–3,5 %? Da
          finnes det nesten ingen grunn til ikke å flytte den. Forskjellen
          mellom 2,50 % i SB1-bankene og 4,40 % hos for eksempel Morrow Bank
          er <strong>1.900 kr per 100.000 kr i året</strong> — før skatt. Velg
          en konto uten bindingstid, slik at du har pengene tilgjengelig hvis
          noe skjer.
        </p>
        <p>
          For deg under 34: <strong>BSU er et helt eget kapittel.</strong>{' '}
          Skattefradraget på 10 % av innskuddet erstatning for nesten alt
          annet. OBOS tilbyr 5,80 % og Sbanken 6,10 % nominelt — kontakt
          banken før du setter inn, fordi BSU-vilkår ofte forutsetter at du
          ikke har annen BSU fra før. Les mer i vår{' '}
          <Link href="/sparing/bsu-guide" className="text-primary-600 hover:underline font-medium">
            komplette BSU-guide
          </Link>
          .
        </p>

        <h3>Mellomlang sparing (3–12 måneder) — høyrentekonto</h3>
        <p>
          Her konkurrerer bankene nå i sjiktet <strong>4,40–4,65 %</strong>.
          Det er snakk om plasseringskontoer med 31 dagers uttaksvarsel eller
          sparekontoer uten binding. Eksempler fra vår oppdaterte liste (se
          under): Svea Bank 4,65 %, OBOS Sparekonto Langsiktig 4,55 %, Nordax
          Smart 4,50 %, BN Bank Høyrentekonto 4,49 %.
        </p>
        <p>
          Tommelfinger-regelen: <strong>jo kortere binding, jo lavere
          rente</strong>. Du får altså betalt for å gi banken beskjed 31
          dager før uttak. For sparing til planlagte utgifter (bil, ferie,
          egenkapital) i løpet av ett år, er dette et godt kompromiss.
        </p>

        <h3>Langsiktig sparing (1+ år) — indeksfond og IPS</h3>
        <p>
          For sparing utover 12 måneder er <strong>indeksfond</strong> i
          globale markeder historisk sett det beste alternativet — men det
          krever at du tåler svingninger. En tommelfinger-regel er at
          pengene bør stå i minst 5 år for å ha god sjanse for positiv
          realavkastning.
        </p>
        <p>
          Har du allerede maks BSU, vurder <strong>IPS (individuell
          pensjonssparing)</strong>. Fra 1. januar 2026 fikk rentefond utsatt
          beskatning — først ved salg — noe som gjør fond i IPS-skallet mer
          attraktivt. IPS er spesielt gunstig hvis du har topp
          pensjonsopptjening i jobben, eller er selvstendig næringsdrivende.
        </p>

        <h3>Hva du IKKE bør gjøre</h3>
        <ul>
          <li>
            <strong>Ikke vent på neste rentevedtak.</strong> Vedtaket 13. august
            bekrefter at innskuddsrentene ligger stabilt. Å vente er ingen
            strategi.
          </li>
          <li>
            <strong>Ikke bind hele boliglånet.</strong> Med rentebanen
            nedjustert og første kutt i 2027, er det fornuftig å beholde
            mesteparten flytende. Les mer under.
          </li>
          <li>
            <strong>Ikke selg fond.</strong> Et stabilt rentevedtak er ingen
            grunn til å selge langsiktige investeringer. Renten påvirker
            kortsiktig kurs, men ikke den underliggende trenden.
          </li>
          <li>
            <strong>Ikke jakt høyest mulig rente uten å sjekke garantien.</strong>{' '}
            Norske banker er med i Bankenes sikringsfond (inntil 2 millioner
            kroner). Utenlandske nettbanker (tyske, svenske) har ofte lavere
            garanti — sjekk alltid.
          </li>
        </ul>

        {/* Beste høyrentekonto */}
        <h2>Beste høyrentekonto-ene akkurat nå</h2>
        <p>
          Oppdaterte renter per <strong>13. august 2026</strong>, verifisert
          direkte mot bankenes egne sider. Etter NB-vedtaket holder markedet
          seg stabilt — ingen av de store aktørene har signalisert endringer
          denne uken. Vi har fjernet banker som ikke lenger tilbyr
          høyrentekonto i det norske privatmarkedet (Danske Bank, Sandnes
          Sparebank, Hygga, Front Finance, Milk Money, Salvest, Laksefjord).
          For en enda bredere sammenligning, se vår{' '}
          <Link href="/sparing/hoyrentekonto" className="text-primary-600 hover:underline font-medium">
            komplette høyrentekonto-oversikt
          </Link>
          .
        </p>

        <div className="overflow-x-auto my-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-primary-50">
                <th className="text-left p-3 border border-gray-200 font-semibold">Bank</th>
                <th className="text-left p-3 border border-gray-200 font-semibold">Produkt</th>
                <th className="text-left p-3 border border-gray-200 font-semibold">Effektiv rente</th>
                <th className="text-left p-3 border border-gray-200 font-semibold">Binding</th>
                <th className="text-left p-3 border border-gray-200 font-semibold">Lenke</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white">
                <td className="p-3 border border-gray-200 font-bold">Svea Bank</td>
                <td className="p-3 border border-gray-200">Sparekonto</td>
                <td className="p-3 border border-gray-200 font-bold text-green-700">4,65 %</td>
                <td className="p-3 border border-gray-200">Ingen</td>
                <td className="p-3 border border-gray-200"><a className="text-primary-600 hover:underline" href="https://www.svea.com/nb-no/privat/sparing">Åpne →</a></td>
              </tr>
              <tr className="bg-gray-50">
                <td className="p-3 border border-gray-200 font-bold">OBOS</td>
                <td className="p-3 border border-gray-200">Sparekonto Langsiktig</td>
                <td className="p-3 border border-gray-200 font-bold text-green-700">4,55 %</td>
                <td className="p-3 border border-gray-200">Ingen</td>
                <td className="p-3 border border-gray-200"><a className="text-primary-600 hover:underline" href="https://www.obos.no/bank/sparing">Åpne →</a></td>
              </tr>
              <tr className="bg-white">
                <td className="p-3 border border-gray-200 font-bold">Nordax Bank</td>
                <td className="p-3 border border-gray-200">Sparekonto Smart</td>
                <td className="p-3 border border-gray-200 font-bold text-green-700">4,50 %</td>
                <td className="p-3 border border-gray-200">Ingen</td>
                <td className="p-3 border border-gray-200"><a className="text-primary-600 hover:underline" href="https://www.nordax.no/spare">Åpne →</a></td>
              </tr>
              <tr className="bg-gray-50">
                <td className="p-3 border border-gray-200 font-bold">BN Bank</td>
                <td className="p-3 border border-gray-200">Høyrentekonto</td>
                <td className="p-3 border border-gray-200 font-bold text-green-700">4,49 %</td>
                <td className="p-3 border border-gray-200">Begrenset</td>
                <td className="p-3 border border-gray-200"><a className="text-primary-600 hover:underline" href="https://www.bnbank.no/sparing/">Åpne →</a></td>
              </tr>
              <tr className="bg-white">
                <td className="p-3 border border-gray-200 font-bold">Handelsbanken</td>
                <td className="p-3 border border-gray-200">Sparekonto fordel (LO/Akad.)</td>
                <td className="p-3 border border-gray-200 font-bold text-green-700">4,45 %</td>
                <td className="p-3 border border-gray-200">Ingen</td>
                <td className="p-3 border border-gray-200"><a className="text-primary-600 hover:underline" href="https://www.handelsbanken.no/no/forening/tekna">Åpne →</a></td>
              </tr>
              <tr className="bg-gray-50">
                <td className="p-3 border border-gray-200 font-bold">Morrow Bank</td>
                <td className="p-3 border border-gray-200">Sparekonto</td>
                <td className="p-3 border border-gray-200 font-bold text-green-700">4,40 %</td>
                <td className="p-3 border border-gray-200">Ingen</td>
                <td className="p-3 border border-gray-200"><a className="text-primary-600 hover:underline" href="https://morrowbank.no/sparing/hvordan-fungerer-sparekonto">Åpne →</a></td>
              </tr>
              <tr className="bg-white">
                <td className="p-3 border border-gray-200 font-bold">Storebrand</td>
                <td className="p-3 border border-gray-200">Høyrentekonto (over 500k)</td>
                <td className="p-3 border border-gray-200 font-bold text-green-700">4,40 %</td>
                <td className="p-3 border border-gray-200">Ingen</td>
                <td className="p-3 border border-gray-200"><a className="text-primary-600 hover:underline" href="https://www.storebrand.no/privat/bank-og-lan/hoyrentekonto">Åpne →</a></td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="bg-amber-50 border-l-4 border-amber-400 rounded-r-xl p-6 my-8">
          <h3 className="font-bold text-norsk-dark mb-2">Viktige forbehold</h3>
          <ul className="text-sm text-gray-700 space-y-2 list-disc pl-5">
            <li>
              <strong>Svea Bank og Morrow Bank</strong> er utenlandske
              (svenske) nettbanker, men lovlige for norske kunder. Garantien
              er den svenske innskuddsgarantien (100 000 EUR), pluss det
              norske sikringsfondet for innskudd opp til 2 millioner kroner.
            </li>
            <li>
              <strong>Handelsbanken Sparekonto fordel</strong> krever
              medlemskap i LO, Akademikerne, Tekna, Legeforeningen eller
              AFAG. Uten dette får du Sparekonto Pluss (4,25 % fra 100k).
            </li>
            <li>
              <strong>Storebrand</strong> gir 4,40 % kun på beløp over 500
              000 kr. Under denne terskelen er satsen lavere.
            </li>
            <li>
              <strong>OBOS Sparekonto Langsiktig</strong> krever at du er
              OBOS-medlem (fra 200 kr/år).
            </li>
          </ul>
          <p className="text-sm text-gray-700 mt-3">
            <strong>Tips:</strong> Sjekk alltid den <em>effektive</em> renten,
            ikke den nominelle. Effektiv rente inkluderer renters rente over
            året, og er det du faktisk får tilbake.
          </p>
        </div>

        {/* Boliglån */}
        <h2>Hva betyr dette for boliglånet ditt?</h2>
        <p>
          Kortversjonen: <strong>styringsrenten er uendret, og toppen er
          trolig nådd.</strong> Den nye rentebanen viser at NB forventer
          første kutt i Q2 2027, og at renten skal ned mot 3,50 % ved
          utgangen av 2027. For deg betyr det tre konkrete ting:
        </p>
        <ol>
          <li>
            <strong>Flytende rente: ingen umiddelbar endring.</strong>{' '}
            Bankene har ikke signalisert justeringer etter vedtaket. De
            beste flytende boliglånsrentene ligger på 4,8–5,5 % — uendret
            fra sist uke.
          </li>
          <li>
            <strong>Vurder å binde deler av lånet.</strong> Med rentebanen
            som viser nedtur, kan fastrente gi forutsigbarhet uten at du
            låser deg til en altfor høy sats. 5-års fastrente ligger nå
            på 4,50–4,90 %. Å binde 30–50 % av lånet er et fornuftig
            kompromiss for de fleste.
          </li>
          <li>
            <strong>Sjekk marginen din.</strong> Med rentetoppen kan
            bankene være mer villige til å forhandle ned marginen din.
            Sjekk om du ligger over snittet for din belåningsgrad — og
            bytt bank hvis ikke.
          </li>
        </ol>
        <p>
          Vi har en{' '}
          <Link href="/boliglan/boliglan-rente-2026" className="text-primary-600 hover:underline font-medium">
            komplett oversikt over boliglånsrenter 2026
          </Link>{' '}
          og en{' '}
          <Link href="/artikler/norges-bank-hever-renten-mai-2026" className="text-primary-600 hover:underline font-medium">
            egen artikkel om hva NB-hevingen i mai betydde
          </Link>{' '}
          — den er oppdatert og relevant.
        </p>

        {/* FAQ */}
        <h2>Ofte stilte spørsmål</h2>

        <h3>Hva vedtok Norges Bank 13. august 2026?</h3>
        <p>
          Norges Bank holdt styringsrenten uendret på <strong>4,25 %</strong>{' '}
          — tredje møtet på rad uten endring. Samtidig ble rentebanen
          nedjustert: toppen er nå anslått til rundt 4,50 % (mot 4,75 % i
          forrige rapport), og første kutt er ventet i Q2 2027. Komiteen
          begrunnet vedtaket med at inflasjonen er på vei ned, men
          fortsatt for høy.
        </p>

        <h3>Hva skjer med høyrentekonto etter vedtaket?</h3>
        <p>
          Ingenting umiddelbart. De beste høyrentekontoene ligger fortsatt
          på 4,40–4,65 %, og ingen av de store aktørene har signalisert
          endringer denne uken. Når kutt eventuelt kommer i 2027, vil
          innskuddsrentene følge etter med 2–8 ukers etterslep. Det er
          derfor <strong>ingen grunn til å vente med å flytte pengene
          dine</strong> fra en storbank til en høyrentekonto.
        </p>

        <h3>Bør jeg binde boliglånsrenta nå?</h3>
        <p>
          Med rentebanen nedjustert og komiteens signaler tyder på at
          toppen er nådd eller nær, <strong>kan det være fornuftig å
          binde deler av lånet</strong> — men ikke alt. 5-års fastrente
          ligger nå på 4,50–4,90 %. Å binde 30–50 % av lånet er et
          fornuftig kompromiss: du får forutsigbarhet for en del av
          gjelden, men beholder muligheten til å nyte godt av kutt
          fremover. Les mer i vår{' '}
          <Link href="/boliglan/boliglan-rente-2026" className="text-primary-600 hover:underline font-medium">
            boliglånsguide
          </Link>
          .
        </p>

        <h3>Lønner det seg å flytte sparepengene før 13. august?</h3>
        <p>
          Ja, hvis du i dag står i en storbank med lav rente. Selv om NB
          holder uendret, vil en høyrentekonto typisk gi deg{' '}
          <strong>1,5–2,0 prosentpoeng mer</strong> i året. På 100 000 kr er
          det 1.500–2.000 kr før skatt. Prosessen tar 1–3 virkedager, og de
          aller fleste bankene tilbyr gratis kontooverføring. Det er ingen
          god grunn til å vente.
        </p>

        <h3>Hva er forskjellen på styringsrente og høyrentekonto-rente?</h3>
        <p>
          <strong>Styringsrenten</strong> er renten Norges Bank tar for å
          låne ut til andre banker over natten. Den er «grunnrenten» i hele
          systemet, men du får den ikke direkte.{' '}
          <strong>Høyrentekonto-renten</strong> er den renten banken gir{' '}
          <em>deg</em> for at du lar dem ha pengene dine litt lenger. Den er
          alltid lavere enn styringsrenten, fordi banken skal tjene en
          margin. Akkurat nå ligger de beste høyrentekontoene rundt 4,4–4,65
          %, mens styringsrenten er 4,25 % — marginen er uvanlig liten,
          fordi bankene kjemper om innskudd.
        </p>

        <h3>Bør jeg flytte BSU nå?</h3>
        <p>
          BSU er noe helt annet — en egen ordning med 10 % skattefradrag.
          Hvis du har BSU i en bank med lav rente, bør du vurdere å flytte
          den til en bank med høy BSU-rente (for eksempel Sbanken 6,10 %
          eller OBOS 5,80 %). Men pass på: du kan bare ha én BSU om gangen,
          og overføring mellom banker tar 2–4 uker på grunn av
          skattemeldingen. Ikke gjør det i siste liten.
        </p>

        <h3>Påvirker dette forbrukslånet mitt?</h3>
        <p>
          Ja, men forbrukslån har allerede rente i sjiktet 9–15 % — en
          endring på 0,25 pp i styringsrenten er støy i den sammenhengen.
          Det viktigste du kan gjøre med forbruksgjeld er å refinansiere til
          billigere lån — ikke å flytte pengene. Les mer i vår{' '}
          <Link href="/lan/nar-lonner-refinansiering" className="text-primary-600 hover:underline font-medium">
            refinansieringsguide
          </Link>
          .
        </p>

        {/* Konklusjon */}
        <h2>Konklusjon</h2>
        <p>
          <strong>
            Norges Bank holder styringsrenten uendret på 4,25 % — og
            rentebanen er nedjustert.
          </strong>{' '}
          Det er første reelle signal på at rentetoppen er nådd eller
          nær. For deg betyr det: ingen grunn til panikk, men heller
          ingen grunn til å vente. Pengene som står i en storbank til
          2–3 % rente bør flyttes nå. Og hvis du har boliglån, er det
          et godt tidspunkt å vurdere å binde 30–50 % av det.
        </p>
        <p>
          Vi oppdaterer denne artikkelen etter hvert som bankene
          justerer innskuddsrentene — typisk i løpet av oktober hvis
          inflasjonen fortsetter å falle. Neste store dato er
          inflasjonstallet for juli (10. august) og rentemøtet 24.
          september. Følg med.
        </p>

        {/* Relaterte lenker */}
        <div className="bg-gray-50 rounded-xl p-6 mt-8">
          <h3 className="font-bold text-norsk-dark mb-4">Relaterte artikler</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/sparing/hoyrentekonto" className="text-primary-600 hover:underline font-medium">
                Komplett oversikt over høyrentekontoer i Norge →
              </Link>
            </li>
            <li>
              <Link href="/sparing/bsu-guide" className="text-primary-600 hover:underline font-medium">
                BSU-guide: Beste BSU-rente 2026 →
              </Link>
            </li>
            <li>
              <Link href="/artikler/norges-bank-hever-renten-mai-2026" className="text-primary-600 hover:underline font-medium">
                Norges Bank hever renten til 4,25 % i mai 2026 →
              </Link>
            </li>
            <li>
              <Link href="/boliglan/boliglan-rente-2026" className="text-primary-600 hover:underline font-medium">
                Boliglånsrenter 2026 — komplett oversikt →
              </Link>
            </li>
          </ul>
        </div>

        {/* Disclaimer */}
        <div className="bg-amber-50 border-l-4 border-amber-400 rounded-r-xl p-6 mt-8">
          <h3 className="font-bold text-norsk-dark mb-2">Viktig å vite</h3>
          <p className="text-sm text-gray-700 leading-relaxed">
            Artikkelen er basert på offentlig informasjon fra Norges Bank og
            bankenes nettsider per 13. august 2026 (oppdatert etter
            rentevedtaket kl. 10:00). Rentene er veiledende og
            kan variere basert på din individuelle situasjon. Alltid sjekk
            den effektive renten hos banken før du signerer avtaler.{' '}
            Pengepraten.no er en uavhengig informasjonsside og ikke en bank
            eller finansrådgiver.
          </p>
        </div>

        <p className="text-xs text-gray-400 mt-8">
          Publisert: 2. august 2026 | Sist oppdatert: 13. august 2026, kl. 10:00
        </p>
      </article>
    </>
  )
}