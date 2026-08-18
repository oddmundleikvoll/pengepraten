import Link from 'next/link'
import type { Metadata } from 'next'

const sourceArticle = 'https://www.ssb.no/priser-og-prisindekser/konsumpriser/statistikk/konsumprisindeksen/artikler/prisene-pa-strom-og-nettleie-loftet-prisveksten-i-juli'
const sourceStatistics = 'https://www.ssb.no/priser-og-prisindekser/konsumpriser/statistikk/konsumprisindeksen'

export const metadata: Metadata = {
  title: 'Prisveksten steg til 3,0 % i juli — slik beskytter du høstbudsjettet',
  description:
    'Strøm og nettleie løftet prisveksten til 3,0 % i juli 2026. Se hva SSB-tallene betyr for din økonomi, med regneeksempler og fem konkrete grep for høstbudsjettet.',
  keywords: [
    'prisvekst juli 2026',
    'inflasjon Norge 2026',
    'strømpris juli 2026',
    'høstbudsjett privatøkonomi',
    'KPI juli 2026',
    'KPI-JAE 2026',
  ],
  openGraph: {
    title: 'Prisveksten steg til 3,0 % — fem grep for høstbudsjettet',
    description:
      'Strøm og nettleie dro prisveksten opp i juli. Vi forklarer de ferske SSB-tallene og viser hvordan du gjør budsjettet klart for høsten.',
    type: 'article',
    publishedTime: '2026-08-18T21:30:00+02:00',
    modifiedTime: '2026-08-18T21:30:00+02:00',
  },
}

const faqItems = [
  {
    question: 'Betyr 3,0 prosent prisvekst at alt har blitt 3,0 prosent dyrere?',
    answer:
      'Nei. KPI måler prisutviklingen for en gjennomsnittlig handlekurv. Din personlige prisvekst avhenger av hva du bruker penger på. Husholdninger med høyt strømforbruk kan ha merket en større økning, mens andre kan ha opplevd mindre.',
  },
  {
    question: 'Har prisene steget 3,0 prosent bare i juli?',
    answer:
      'Nei. Tallet på 3,0 prosent sammenligner juli 2026 med juli 2025. Fra juni til juli 2026 steg KPI med 1,0 prosent.',
  },
  {
    question: 'Hva er forskjellen på KPI og KPI-JAE?',
    answer:
      'KPI viser den samlede prisutviklingen. KPI-JAE er justert for avgiftsendringer og ser bort fra energivarer. I juli var KPI-JAE 2,7 prosent, det samme som måneden før.',
  },
  {
    question: 'Når kommer neste inflasjonstall?',
    answer:
      'SSB opplyser at konsumprisindeksen for august publiseres 10. september 2026.',
  },
]

export default function PrisvekstJuli2026Hostbudsjett() {
  const articleLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Prisveksten steg til 3,0 % i juli — slik beskytter du høstbudsjettet',
    description:
      'Strøm og nettleie løftet prisveksten i juli 2026. Dette betyr tallene for privatøkonomien, og slik kan du tilpasse høstbudsjettet.',
    datePublished: '2026-08-18',
    dateModified: '2026-08-18',
    author: {
      '@type': 'Organization',
      name: 'Pengepraten',
      url: 'https://pengepraten.no',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Pengepraten',
      url: 'https://pengepraten.no',
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://pengepraten.no/artikler/prisvekst-juli-2026-hostbudsjett',
    },
    about: ['Prisvekst', 'Konsumprisindeksen', 'Strømpriser', 'Budsjett'],
    citation: [sourceArticle, sourceStatistics],
  }

  const faqLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map(item => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
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

      <section className="bg-paper text-ink py-12 md:py-16 border-b border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <nav className="font-mono text-xs uppercase tracking-wider text-ink-muted mb-6">
            <Link href="/" className="hover:text-forest transition-colors">Hjem</Link>
            <span className="mx-2 text-border-strong">/</span>
            <Link href="/artikler" className="hover:text-forest transition-colors">Artikler</Link>
            <span className="mx-2 text-border-strong">/</span>
            <span className="text-ink">Prisvekst i juli</span>
          </nav>

          <div className="inline-flex items-center gap-2 bg-amber-warm-soft text-amber-warm text-xs font-bold px-3 py-1 rounded-full mb-5">
            NYE PRISTALL · 18. AUGUST 2026
          </div>

          <h1 className="text-3xl md:text-5xl font-medium font-display leading-[1.08] mb-5">
            Prisveksten steg til 3,0 % i juli — slik beskytter du høstbudsjettet
          </h1>
          <p className="text-ink-muted text-lg md:text-xl max-w-3xl leading-relaxed">
            Strøm og nettleie trakk prisveksten opp, mens den underliggende
            prisveksten holdt seg stabil. Her er hva de ferske tallene faktisk
            betyr for lommeboken — og fem grep du kan ta før høstregningene kommer.
          </p>

          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 mt-7 font-mono text-xs uppercase tracking-wider text-ink-muted">
            <span>Av Pengepraten</span>
            <time dateTime="2026-08-18">18. august 2026</time>
            <span>7 min lesetid</span>
          </div>
        </div>
      </section>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 py-12 article-content">
        <p className="text-xl text-gray-600 leading-relaxed mb-8">
          Konsumprisindeksen steg <strong>3,0 prosent fra juli 2025 til juli
          2026</strong>, opp fra 2,7 prosent i juni. Det var særlig strøm og
          nettleie som løftet tallet. Samtidig var den underliggende
          prisveksten, målt ved KPI-JAE, uendret på <strong>2,7 prosent</strong>.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 my-8 not-prose">
          {[
            { value: '3,0 %', label: 'KPI siste 12 måneder' },
            { value: '2,7 %', label: 'KPI-JAE siste 12 måneder' },
            { value: '+7,3 %', label: 'Strøm og nettleie fra juni' },
            { value: '+3,1 %', label: 'Matvarer fra juni' },
          ].map(item => (
            <div key={item.label} className="bg-paper-surface border border-border rounded-xl p-5">
              <div className="font-display text-3xl font-semibold text-forest">{item.value}</div>
              <div className="text-sm text-ink-muted mt-1 leading-snug">{item.label}</div>
            </div>
          ))}
        </div>

        <div className="bg-forest-soft border-l-4 border-forest rounded-r-xl p-6 my-8">
          <p className="text-sm text-ink leading-relaxed m-0">
            <strong>Kort forklart:</strong> Prisveksten tok seg opp, men juli-tallet
            betyr ikke at alle priser plutselig skyter fart. Økningen kom i stor grad
            fra strøm og nettleie. For husholdningsbudsjettet er det likevel et klart
            signal om å beregne høstens energiutgifter med faktiske regninger — ikke
            med det du brukte i sommer.
          </p>
        </div>

        <h2>Dette viser de nye tallene</h2>
        <p>
          SSBs tall viser at KPI steg 1,0 prosent bare fra juni til juli. Prisene
          på elektrisitet inkludert nettleie steg 7,3 prosent i samme periode.
          Flere store nettselskaper hadde varslet økt nettleie, og strømprisene
          steg i alle prisområder bortsett fra Nord-Norge.
        </p>
        <p>
          Matvareprisene steg også tydelig fra juni til juli, med 3,1 prosent.
          Men fordi matprisene steg enda mer i juli i fjor, falt tolvmånedersveksten
          for matvarer til 0,9 prosent. Det høres paradoksalt ut, men viser hvorfor
          det er viktig å skille mellom <strong>prisendringen siste måned</strong> og
          <strong> prisendringen siste år</strong>.
        </p>

        <div className="overflow-x-auto my-8 not-prose">
          <table className="w-full min-w-[620px] text-sm border-collapse">
            <thead>
              <tr className="bg-forest text-paper">
                <th className="text-left p-3 border border-forest">Utgiftsgruppe</th>
                <th className="text-right p-3 border border-forest">Fra juni</th>
                <th className="text-right p-3 border border-forest">Siste 12 måneder</th>
                <th className="text-left p-3 border border-forest">Hva du bør følge med på</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white">
                <td className="p-3 border border-border font-semibold">Samlet KPI</td>
                <td className="p-3 border border-border text-right">1,0 %</td>
                <td className="p-3 border border-border text-right font-semibold">3,0 %</td>
                <td className="p-3 border border-border">Din egen fordeling av utgifter</td>
              </tr>
              <tr className="bg-paper-alt">
                <td className="p-3 border border-border font-semibold">Bolig, strøm og brensel</td>
                <td className="p-3 border border-border text-right">1,0 %</td>
                <td className="p-3 border border-border text-right font-semibold">4,6 %</td>
                <td className="p-3 border border-border">Total strømregning og vinterforbruk</td>
              </tr>
              <tr className="bg-white">
                <td className="p-3 border border-border font-semibold">Forsikring og finanstjenester</td>
                <td className="p-3 border border-border text-right">1,2 %</td>
                <td className="p-3 border border-border text-right font-semibold">7,9 %</td>
                <td className="p-3 border border-border">Fornyelser, gebyrer og dobbeltdekning</td>
              </tr>
              <tr className="bg-paper-alt">
                <td className="p-3 border border-border font-semibold">Servering og overnatting</td>
                <td className="p-3 border border-border text-right">0,3 %</td>
                <td className="p-3 border border-border text-right font-semibold">5,7 %</td>
                <td className="p-3 border border-border">Småkjøp, takeaway og helgeturer</td>
              </tr>
            </tbody>
          </table>
          <p className="text-xs text-ink-muted mt-2">
            Kilde: SSBs konsumprisindeks for juli 2026. Tallene gjelder en gjennomsnittlig handlekurv.
          </p>
        </div>

        <h2>KPI er ikke det samme som din personlige prisvekst</h2>
        <p>
          KPI er et gjennomsnitt. En familie i en stor enebolig, en student i
          kollektiv og en pensjonist uten boliglån kjøper ikke den samme
          «handlekurven». Derfor bør du bruke 3,0 prosent som et varsellampe-tall,
          ikke som en fasit for hvor mye dyrere akkurat ditt liv har blitt.
        </p>
        <p>
          Tabellen under viser et enkelt tankeeksperiment: Hva tilsvarer 3,0 prosent
          prisvekst dersom hele det månedlige forbruket ditt hadde utviklet seg likt
          som KPI? Dette er <strong>ikke en prognose</strong>, men en måte å se
          størrelsesordenen på.
        </p>

        <div className="overflow-x-auto my-8 not-prose">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-paper-alt">
                <th className="text-left p-3 border border-border">Månedlig forbruk</th>
                <th className="text-right p-3 border border-border">3 % per måned</th>
                <th className="text-right p-3 border border-border">Tilsvarende per år</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['15 000 kr', '450 kr', '5 400 kr'],
                ['25 000 kr', '750 kr', '9 000 kr'],
                ['35 000 kr', '1 050 kr', '12 600 kr'],
              ].map(row => (
                <tr key={row[0]} className="bg-white">
                  <td className="p-3 border border-border font-semibold">{row[0]}</td>
                  <td className="p-3 border border-border text-right">{row[1]}</td>
                  <td className="p-3 border border-border text-right font-semibold text-forest">{row[2]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2>Fem grep for høstbudsjettet</h2>

        <h3>1. Finn din egen prisvekst på 20 minutter</h3>
        <p>
          Hent kontoutskriftene for de tre siste hele månedene og sorter kjøpene i
          fem grupper: bolig og strøm, mat, transport, forsikring og abonnementer,
          og øvrig forbruk. Sammenlign med samme periode i fjor dersom du har
          tallene. Da ser du raskt om det er strøm, mat eller småkjøp som faktisk
          presser økonomien din.
        </p>
        <p>
          Mangler du et oppsett, kan du bruke vår{' '}
          <Link href="/budsjett/kom-i-gang-med-budsjett" className="text-forest font-semibold hover:underline">
            steg-for-steg-guide til budsjett
          </Link>{' '}
          eller laste ned den gratis{' '}
          <Link href="/budsjett" className="text-forest font-semibold hover:underline">
            budsjettmalen
          </Link>.
        </p>

        <h3>2. Bruk vinterforbruket når du budsjetterer strøm</h3>
        <p>
          Sommerregningen er et dårlig utgangspunkt for oktober, november og
          desember. Finn fakturaene fra forrige vinter og noter både antall kWh og
          totalbeløpet du faktisk betalte — inkludert nettleie, avgifter og påslag.
          Sett av differansen mellom sommerregningen og et normalt vinterbeløp på
          en egen regningskonto allerede nå.
        </p>
        <p>
          Sammenlign strømavtaler på <em>total kostnad</em>, ikke bare øre per kWh.
          En lav annonsert kraftpris kan bli spist opp av månedsbeløp og påslag.
        </p>

        <h3>3. Gi matbudsjettet en ukesgrense</h3>
        <p>
          Selv om matvareprisene bare var 0,9 prosent høyere enn for ett år siden,
          steg de kraftig fra juni til juli. En ukesgrense er enklere å styre enn
          ett stort månedsbeløp: del matbudsjettet på 4,3 og overfør ukesbeløpet til
          en egen konto. Planlegg tre middager rundt varer du allerede har, og
          sammenlign kilopris fremfor pakkepris.
        </p>

        <h3>4. Ta en årlig prisrunde på forsikring og bank</h3>
        <p>
          Forsikring og finansielle tjenester lå 7,9 prosent høyere enn i juli i
          fjor. Det gjør denne posten til en naturlig kandidat for en ny prisrunde.
          Be om et oppdatert samlet tilbud, men sammenlign også egenandel og dekning.
          Den billigste forsikringen er ikke billig hvis den viktigste dekningen er
          borte.
        </p>
        <p>
          Har du boliglån, kan du samtidig sjekke renten mot markedet med vår{' '}
          <Link href="/verktoy/boliglanskalkulator" className="text-forest font-semibold hover:underline">
            boliglånskalkulator
          </Link>. Selv en liten renteforskjell kan være større enn alle
          abonnementskuttene til sammen.
        </p>

        <h3>5. Gjør bufferen automatisk</h3>
        <p>
          Når du har funnet beløpet høsten sannsynligvis krever, opprett en fast
          overføring på lønningsdagen. Start heller med et beløp du klarer hver
          måned enn et ambisiøst beløp du stopper etter to uker. Vil du gjøre det
          mer motiverende, kan du bruke{' '}
          <Link href="/spareutfordring" className="text-forest font-semibold hover:underline">
            52-ukers spareutfordringen
          </Link>{' '}
          og krysse av fremdriften underveis.
        </p>

        <div className="bg-amber-warm-soft border border-amber-warm/30 rounded-2xl p-6 my-10 not-prose">
          <h2 className="font-display text-2xl font-semibold text-ink mb-3">En enkel plan før 10. september</h2>
          <ol className="space-y-3 text-sm text-ink leading-relaxed list-decimal pl-5">
            <li><strong>I dag:</strong> Finn tre måneders forbruk og marker de tre postene som har økt mest.</li>
            <li><strong>Denne uken:</strong> Beregn vinterstrøm, innhent ett forsikringstilbud og sett en ukesgrense for mat.</li>
            <li><strong>På neste lønningsdag:</strong> Automatiser overføringen til regningskonto eller buffer.</li>
            <li><strong>10. september:</strong> Sjekk SSBs augusttall og juster bare hvis din egen økonomi faktisk har endret seg.</li>
          </ol>
        </div>

        <h2>Ikke gjør disse fire feilene</h2>
        <ul>
          <li><strong>Ikke les 3,0 prosent som en månedsvekst.</strong> Det er endringen fra juli i fjor. Månedsveksten var 1,0 prosent.</li>
          <li><strong>Ikke kutt nødvendig forsikring blindt.</strong> Fjern dobbeltdekning og forhandle pris før du reduserer beskyttelsen.</li>
          <li><strong>Ikke bruk kredittkortgjeld som buffer.</strong> En dyr strømregning blir langt dyrere hvis den blir stående med høy rente.</li>
          <li><strong>Ikke endre hele økonomien etter én måned.</strong> Se etter trenden i egne utgifter og sammenlign med neste KPI-slipp.</li>
        </ul>

        <h2>Hva bør vi følge med på videre?</h2>
        <p>
          Det mest beroligende i julitallene er at KPI-JAE holdt seg stabil på
          2,7 prosent. Det peker mot at oppgangen i samlet KPI i stor grad var
          energidrevet denne måneden. Samtidig viser tallene at enkelte
          hverdagsutgifter — særlig boligrelaterte kostnader, forsikring og
          servering — fortsatt stiger raskere enn gjennomsnittet.
        </p>
        <p>
          Neste kontrollpunkt er <strong>10. september 2026</strong>, når SSB
          publiserer konsumprisindeksen for august. Frem til da er det mest nyttige
          du kan gjøre å bygge budsjettet på dine egne fakturaer og kontoutskrifter,
          ikke på én overskrift om inflasjonen.
        </p>

        <h2>Ofte stilte spørsmål</h2>
        <div className="space-y-4 not-prose">
          {faqItems.map(item => (
            <details key={item.question} className="group bg-paper-surface border border-border rounded-xl overflow-hidden">
              <summary className="flex items-center justify-between gap-4 px-5 py-4 cursor-pointer font-semibold text-ink list-none">
                <span>{item.question}</span>
                <span className="text-forest group-open:rotate-45 transition-transform text-xl" aria-hidden="true">+</span>
              </summary>
              <p className="px-5 pb-5 pt-1 text-sm text-ink-muted leading-relaxed border-t border-border">
                {item.answer}
              </p>
            </details>
          ))}
        </div>

        <div className="border-t border-border mt-12 pt-8">
          <h2 className="text-xl font-bold text-ink mb-4">Kilder</h2>
          <ul className="space-y-3 text-sm">
            <li>
              <a href={sourceArticle} target="_blank" rel="noopener noreferrer" className="text-forest font-semibold hover:underline">
                SSB: Prisene på strøm og nettleie løftet prisveksten i juli
              </a>{' '}
              — publisert 10. august 2026.
            </li>
            <li>
              <a href={sourceStatistics} target="_blank" rel="noopener noreferrer" className="text-forest font-semibold hover:underline">
                SSB: Konsumprisindeksen, hovedtall for juli 2026
              </a>{' '}
              — oppdatert 10. august 2026.
            </li>
          </ul>
        </div>

        <div className="grid md:grid-cols-2 gap-4 mt-10 not-prose">
          <Link href="/artikler/norges-bank-rentevedtak-august-2026" className="group block bg-paper-surface border border-border rounded-xl p-5 hover:border-forest/40 hover:shadow-sm transition-all">
            <span className="font-mono text-xs uppercase tracking-wider text-ink-muted">Les også</span>
            <h3 className="font-display text-xl font-semibold text-ink group-hover:text-forest mt-2">
              Hva betyr rentevedtaket for økonomien din?
            </h3>
          </Link>
          <Link href="/budsjett/kom-i-gang-med-budsjett" className="group block bg-paper-surface border border-border rounded-xl p-5 hover:border-forest/40 hover:shadow-sm transition-all">
            <span className="font-mono text-xs uppercase tracking-wider text-ink-muted">Praktisk guide</span>
            <h3 className="font-display text-xl font-semibold text-ink group-hover:text-forest mt-2">
              Lag et budsjett som faktisk fungerer
            </h3>
          </Link>
        </div>

        <div className="bg-paper-alt border-l-4 border-border-strong rounded-r-xl p-6 mt-10">
          <h3 className="font-bold text-ink mb-2">Metode og forbehold</h3>
          <p className="text-sm text-ink-muted leading-relaxed m-0">
            Artikkelen bygger på SSBs publiserte KPI-tall for juli 2026. Eksemplene
            er forenklede regnestykker og ikke individuelle økonomiske råd. Din
            faktiske prisvekst avhenger av forbruk, bosted, avtaler og husholdning.
          </p>
        </div>

        <p className="text-xs text-ink-muted mt-8">
          Publisert: 18. august 2026 | Tallgrunnlag sist kontrollert: 18. august 2026
        </p>
      </article>
    </>
  )
}
