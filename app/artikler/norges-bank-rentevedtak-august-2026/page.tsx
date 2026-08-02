import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Norges Bank 13. august: Dette bør du gjøre med sparepengene',
  description:
    'Norges Bank holder rentemøte 13. august 2026. Styringsrenten er 4,25 %, og markedet priser ~50 % sjanse for heving. Konkrete råd for sparepengene dine.',
  keywords: [
    'Norges Bank rente august 2026',
    'styringsrente august 2026',
    'høyrentekonto rente 2026',
    'rentevedtak 13. august',
    'bør jeg flytte sparepengene',
  ],
  openGraph: {
    title: 'Norges Bank 13. august: Dette bør du gjøre med sparepengene',
    description:
      'Norges Bank holder rentemøte 13. august 2026. Styringsrenten er 4,25 %, og markedet priser ~50 % sjanse for heving. Konkrete råd for sparepengene dine.',
    type: 'article',
    publishedTime: '2026-08-02T00:00:00+02:00',
    modifiedTime: '2026-08-02T00:00:00+02:00',
  },
}

export default function NorgesBankRentevedtakAugust2026() {
  const faqLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Når hever Norges Bank renten igjen?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Det finner vi ut torsdag 13. august 2026 kl. 10:00. Per nå er markedets forventning omtrent 50/50 mellom uendret (4,25 %) og heving til 4,50 %.',
        },
      },
      {
        '@type': 'Question',
        name: 'Hva skjer med høyrentekonto hvis renten går opp?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Høyrentekontoer følger som regel styringsrenten med 2–8 ukers etterslep. Hvis Norges Bank hever i august, vil de fleste høyrentekontoene typisk justeres opp i løpet av september–oktober.',
        },
      },
      {
        '@type': 'Question',
        name: 'Bør jeg binde boliglånsrenta nå?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Sannsynligvis ikke. Vent til 13. august — da har du et tydeligere bilde. Hvis NB fortsetter å heve og markedet tolker det som starten på en ny opptrappingsrunde, kan det være fornuftig å vurdere fastrente for en del av lånet.',
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
    dateModified: '2026-08-02',
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

      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-600 to-accent-700 text-white py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <nav className="text-primary-200 text-sm mb-4">
            <Link href="/" className="hover:text-white">Hjem</Link>
            <span className="mx-2">/</span>
            <Link href="/sparing" className="hover:text-white">Sparing</Link>
            <span className="mx-2">/</span>
            <span>Norges Bank 13. august 2026</span>
          </nav>
          <div className="inline-block bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full mb-4">
            RENTEVEDTAK 13. AUGUST
          </div>
          <h1 className="text-3xl md:text-4xl font-black mb-4">
            Norges Bank 13. august: Dette bør du gjøre med sparepengene
          </h1>
          <p className="text-primary-100 text-lg max-w-2xl">
            Torsdag 13. august kl. 10:00 bestemmer Norges Bank om styringsrenten
            blir stående på 4,25 % eller heves videre. Her er hva det betyr —
            og hva du kan gjøre med pengene dine nå.
          </p>
        </div>
      </section>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 py-12 article-content">
        <p className="text-xl text-gray-600 leading-relaxed mb-8">
          <strong>Torsdag 13. august 2026 kl. 10:00</strong> setter Norges Banks
          komité seg igjen rundt bordet for å avgjøre hva styringsrenten skal
          være. Per i dag — 2. august — ligger den på{' '}
          <strong>4,25 %</strong>, men komiteens egen Pengepolitisk rapport 2/26
          antyder at renta «trolig skal videre opp på et av de nærmeste møtene».
          Markedet priser inn rundt <strong>50 prosent sannsynlighet for heving</strong>{' '}
          allerede i august.
        </p>

        <p>
          For deg som har penger på en sparekonto, BSU eller i et fond, betyr
          møtet 13. august mest om hva som skjer med renten du faktisk får i
          banken. Bankene bruker som regel 2–8 uker på å justere
          innskuddsrentene etter et rentevedtak — og enkelte har allerede
          begynt å heve på sporet av NB-hevingen 7. mai.
        </p>

        <p>
          I denne artikkelen får du tre ting: en vurdering av hva Norges Bank
          faktisk vedtar 13. august, konkrete råd sortert etter tidshorisont,
          og en oppdatert oversikt over de beste høyrentekontoene akkurat nå —
          uten banker som har forsvunnet ut av det norske privatmarkedet.
        </p>

        <div className="bg-primary-50 border-l-4 border-primary-400 rounded-r-xl p-6 my-8">
          <p className="text-sm font-medium text-norsk-dark leading-relaxed m-0">
            <strong>Kort oppsummert:</strong> Ikke gjør noe panisk, men bruk de
            neste 11 dagene til å flytte pengene som står til 2–3 % i en
            storbank, over i en høyrentekonto som faktisk følger markedet
            (4,30–4,65 %).
          </p>
        </div>

        {/* Scenarier */}
        <h2>Hva er trolig vedtaket 13. august?</h2>
        <p>
          Det er tre mulige utfall. Vi tar dem i rekkefølge etter hvor
          sannsynlige de er.
        </p>

        <h3>Scenario 1: Norges Bank holder renta uendret på 4,25 % (ca. 50 % sannsynlighet)</h3>
        <p>
          Dette er det markedet per i dag «tror» mest på. Etter at NB holdt
          renta uendret på møtet 17. juni — men samtidig strammet rentebanen —
          har mange analytikere tolket signalene som «videre opptrapping, men
          ikke akkurat nå». KPI falt til 3,1 % i mai, noe som gir komiteen
          litt rom til å avvente og se om prisveksten fortsetter ned.
        </p>
        <p>
          <strong>Konsekvens for deg:</strong> Høyrentekonto-rentene holder seg
          der de er i dag. Bankene som allerede har hevet etter mai-hevingen
          (Sbanken, SB1-bankene, BN Bank m.fl.) beholder sine satser. Markedet
          puster litt.
        </p>

        <h3>Scenario 2: Norges Bank hever til 4,50 % (ca. 40 % sannsynlighet)</h3>
        <p>
          Dette er den nest mest prisede muligheten. Hovedargumentet:
          Pengepolitisk rapport 2/26 sier rett ut at komiteen «ser trolig
          behov for å sette renten videre opp på et av de nærmeste møtene».
          Skal renta ligge «i overkant av 4,5 % ved utgangen av 2026», må en
          heving komme relativt snart — og 13. august er det eneste møtet før
          høsten.
        </p>
        <p>
          <strong>Konsekvens for deg:</strong> De fleste høyrentekontoene
          justeres opp med 0,10–0,25 prosentpoeng i løpet av 4–8 uker. Noen
          aktører — typisk Svea Bank, OBOS, BN Bank — har pleid å være
          raskest ute. DNB, Nordea og SB1-bankene bruker gjerne litt lenger
          tid.
        </p>

        <h3>Scenario 3: Norges Bank hever til 4,75 % (ca. 10 % sannsynlighet)</h3>
        <p>
          Dette er «hawkish tail»-scenariet: At komiteen overrasker markedet
          med et 0,50-løft for å signalisere at de mener alvor.
          Sannsynligheten er lav, men ikke null. I så fall vil de beste
          høyrentekontoene raskt bikke 5 %.
        </p>
        <p>
          <strong>Konsekvens for deg:</strong> Høyrentekonto blir enda mer
          attraktivt relativt til andre spareformer. Boliglånsrentene kan stige
          0,20–0,30 prosentpoeng i løpet av høsten.
        </p>

        <p>
          <strong>Én setning-oppsummering:</strong> Halvparten sannsynlighet
          for uendret, halvparten for minst én heving til — uansett hvilket
          utfall bør du handle nå.
        </p>

        {/* Hva bør du gjøre */}
        <h2>Hva bør du gjøre med sparepengene?</h2>
        <p>
          Hovedregelen er enkel: <strong>Flytt pengene som står i en storbank-konto
          med 2–3 % rente, over i en høyrentekonto som gir 4–4,65 % — før 13.
          august</strong>. Markedet reagerer raskt, og enkelte banker strammer
          inn på innskuddsvilkårene (antall frie uttak, rentetrapp) rett etter
          rentevedtak. Men det er forskjell på kort, mellomlang og lang sikt.
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
            <strong>Ikke panikk-flytt midt i møtet den 13. august.</strong>{' '}
            Selv et hevingsvedtak på 0,25 pp betyr bare marginalt høyere
            rente i bankene — og du rekker uansett å flytte etterpå.
          </li>
          <li>
            <strong>Ikke bind renta på boliglånet i panikk.</strong> Les mer
            under.
          </li>
          <li>
            <strong>Ikke selg fond.</strong> Et rentevedtak er ingen grunn til
            å selge langsiktige investeringer. Renten påvirker kortsiktig
            kurs, men ikke den underliggende trenden.
          </li>
          <li>
            <strong>Ikke jakter høyest mulig rente uten å sjekke garantien.</strong>{' '}
            Norske banker er med i Bankenes sikringsfond (inntil 2 millioner
            kroner). Utenlandske nettbanker (tyske, svenske) har ofte lavere
            garanti — sjekk alltid.
          </li>
        </ul>

        {/* Beste høyrentekonto */}
        <h2>Beste høyrentekonto-ene akkurat nå</h2>
        <p>
          Oppdaterte renter per <strong>2. august 2026</strong>, verifisert
          direkte mot bankenes egne sider. Vi har fjernet banker som ikke
          lenger tilbyr høyrentekonto i det norske privatmarkedet (Danske
          Bank, Sandnes Sparebank, Hygga, Front Finance, Milk Money, Salvest,
          Laksefjord). For en enda bredere sammenligning, se vår{' '}
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
          Kortversjonen: <strong>det meste er allerede priset inn.</strong>{' '}
          Når bankene setter boliglånsrente i dag, ser de minst 2–3
          rentevedtak frem i tid. En eventuell heving 13. august er derfor i
          stor grad ventet — og du vil neppe se en like stor økning på
          boliglånet som på styringsrenten.
        </p>
        <p>
          <strong>Men det er tre ting å gjøre nå:</strong>
        </p>
        <ol>
          <li>
            <strong>Sjekk om du har «gammel rente».</strong> Mange boliglån
            har ikke blitt justert siden kutt-runden i 2024–2025. Logg inn i
            nettbanken — du kan ha en godbit.
          </li>
          <li>
            <strong>Ikke bind renta før du vet hva NB vedtar.</strong> Å
            binde i dag er å gamble. Vent til 13. august. Hvis NB holder
            uendret, er det sannsynligvis trygt å vente med å binde. Hvis NB
            hever, kan det faktisk argumenteres for å binde — men da har du
            en tydeligere grunn til å handle.
          </li>
          <li>
            <strong>Vurder reforhandling.</strong> Med rentetoppen kan
            bankene være mer villige til å forhandle ned marginen din. Sjekk
            om du ligger over snittet for din belåningsgrad.
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

        <h3>Når hever Norges Bank renten igjen?</h3>
        <p>
          Det finner vi ut torsdag 13. august 2026 kl. 10:00. Per nå er
          markedets forventning omtrent 50/50 mellom uendret (4,25 %) og
          heving til 4,50 %. Det endelige signalet ligger i
          pressekonferansen og den oppdaterte rentebanen som publiseres
          samme dag.
        </p>

        <h3>Hva skjer med høyrentekonto hvis renten går opp?</h3>
        <p>
          Høyrentekontoer følger som regel styringsrenten — men med{' '}
          <strong>2–8 ukers etterslep</strong>. Hvis Norges Bank hever til
          4,50 % i august, vil de fleste høyrentekontoene typisk justeres opp
          i løpet av september–oktober. Bankene er ikke forpliktet til å
          heve, men i praksis gjør de det for å holde seg konkurransedyktige.
          Noen aktører (spesielt mindre nettbanker) er raskere enn
          storbankene.
        </p>

        <h3>Bør jeg binde boliglånsrenta nå?</h3>
        <p>
          Sannsynligvis ikke. Å binde en fastrente i dag er å ta en
          beslutning på et tidspunkt der Norges Bank kan endre signalene i
          begge retninger. Vent til 13. august — da har du et tydeligere
          bilde. Hvis NB fortsetter å heve og markedet tolker det som
          starten på en ny opptrappingsrunde, kan det være fornuftig å
          vurdere fastrente for en del av lånet. Les mer i vår{' '}
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
            Styringsrenten er 4,25 % — og 13. august er det 50/50 mellom
            uendret og heving til 4,50 %.
          </strong>{' '}
          Uansett utfall er pengene dine bedre tjent i en høyrentekonto enn
          slumrende i en storbank. Nå — ikke etter møtet — er riktig
          tidspunkt å flytte. Sjekk hvilken rente du faktisk får i dag, og
          bytt hvis du ligger under 4 %.
        </p>
        <p>
          Vi oppdaterer denne artikkelen etter rentevedtaket 13. august, og
          igjen i midten av september når bankene typisk har justert sine
          innskuddsrenter. Da vet du nøyaktig hva vedtaket ble, og hvilke
          kontoer som har blitt mer eller mindre attraktive. Følg med.
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
            bankenes nettsider per 2. august 2026. Rentene er veiledende og
            kan variere basert på din individuelle situasjon. Alltid sjekk
            den effektive renten hos banken før du signerer avtaler.{' '}
            Pengepraten.no er en uavhengig informasjonsside og ikke en bank
            eller finansrådgiver.
          </p>
        </div>

        <p className="text-xs text-gray-400 mt-8">
          Publisert: 2. august 2026 | Sist oppdatert: 2. august 2026
        </p>
      </article>
    </>
  )
}