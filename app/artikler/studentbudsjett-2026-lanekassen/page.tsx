import Link from 'next/link'
import type { Metadata } from 'next'
import RelatedContent from '@/components/RelatedContent'
import { getArticleBySlug, getRelatedArticles } from '@/lib/articles'

const articleSlug = '/artikler/studentbudsjett-2026-lanekassen'
const sourceRates = 'https://lanekassen.no/nb-NO/laresteder/nyheter/forskriftene-for-2026-2027-er-klare/'
const sourceStudentSupport = 'https://lanekassen.no/nb-NO/hjelp-og-kontakt/tre-ting-du-ma-vite-om-stipend-og-lan-for-2026-2027/'
const sourceConversion = 'https://lanekassen.no/nb-NO/stipend-og-lan/omgjoring-av-basislan/'
const sourcePayments = 'https://lanekassen.no/nb-NO/hjelp-og-kontakt/nar-kommer-pengene/'
const sourceSifo = 'https://www.oslomet.no/om/sifo/referansebudsjettet'
const sourceStudentData = 'https://www.ssb.no/utdanning/hoyere-utdanning/artikler/studentbudsjett-en-analyse-av-studenters-manedlige-inntekter-og-levekostnader'
const sourceTax = 'https://www.skatteetaten.no/rettskilder/type/uttalelser/uttalelser/forskuddsutskrivingen-2026/'

export const metadata: Metadata = {
  title: 'Studentbudsjett 2026: Slik får du 15 488 kr til å vare',
  description:
    'Fulltidsstudenter får 15 488 kr i måneden fra Lånekassen i 2026/2027. Se et realistisk studentbudsjett, inntektsgrenser, frister og konkrete sparetips.',
  keywords: [
    'studentbudsjett 2026',
    'Lånekassen 2026 2027',
    'hvor mye får studenter fra Lånekassen',
    'studentøkonomi',
    'inntektsgrense Lånekassen 2026',
    'budsjett student',
  ],
  alternates: { canonical: articleSlug },
  openGraph: {
    title: 'Studentbudsjett 2026: Slik får du 15 488 kr til å vare',
    description:
      'To realistiske regneeksempler og de viktigste grensene for studiestøtte, jobb og skatt i 2026.',
    type: 'article',
    url: articleSlug,
    publishedTime: '2026-08-21T08:00:00+02:00',
    modifiedTime: '2026-08-21T08:00:00+02:00',
  },
}

const faqItems = [
  {
    question: 'Hvor mye får en fulltidsstudent fra Lånekassen i 2026/2027?',
    answer:
      'Basislånet er 15 488 kroner i måneden, tilsvarende 170 368 kroner gjennom et normalt studieår på 11 måneder. Utbetalingene er større i august og januar, så de andre månedsbeløpene vil avvike fra gjennomsnittet.',
  },
  {
    question: 'Er pengene fra Lånekassen stipend eller lån?',
    answer:
      'Hele basislånet vises først som lån. Opptil 40 prosent kan senere bli gjort om til stipend dersom du bor borte fra foreldrene dine, består utdanningen og er under grensene for inntekt og formue. For full omgjøring må du fullføre en grad.',
  },
  {
    question: 'Hvor mye kan en student tjene i 2026 uten å miste stipend?',
    answer:
      'Mottar du lån og stipend hele kalenderåret, er inntektsgrensen 234 821 kroner brutto i 2026. Har du støtte i sju måneder eller mindre av året, er grensen 587 053 kroner. Over grensen reduseres stipenddelen gradvis; du mister ikke hele beløpet med én gang.',
  },
  {
    question: 'Hva er søknadsfristen for Lånekassen høsten 2026?',
    answer:
      'Fristen er 15. november 2026 for støtte til hele studieåret eller bare høstsemesteret. For bare vårsemesteret 2027 er fristen 15. mars 2027. Det lønner seg å søke så snart studieplassen er klar.',
  },
  {
    question: 'Er frikortgrensen og Lånekassens inntektsgrense det samme?',
    answer:
      'Nei. Frikortgrensen på 100 000 kroner i 2026 handler om når arbeidsgiver skal trekke skatt. Lånekassens inntektsgrense avgjør hvor mye av lånet som kan gjøres om til stipend. Du må følge med på begge.',
  },
]

const monthlyCosts = [
  ['Mat og husholdning', '3 600 kr'],
  ['Transport', '600 kr'],
  ['Mobil', '250 kr'],
  ['Forsikring', '200 kr'],
  ['Pensum og studieutgifter', '500 kr'],
  ['Helse og personlig pleie', '600 kr'],
  ['Klær og sosialt', '800 kr'],
  ['Buffer', '400 kr'],
]

export default function Studentbudsjett2026() {
  const article = getArticleBySlug(articleSlug)
  const relatedArticles = article?.relatedArticles
    ? getRelatedArticles(article.relatedArticles)
    : []

  const articleLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Studentbudsjett 2026: Slik får du 15 488 kr til å vare',
    description:
      'Et realistisk studentbudsjett for studieåret 2026/2027, med satser, inntektsgrenser, frister og konkrete økonomigrep.',
    datePublished: '2026-08-21',
    dateModified: '2026-08-21',
    author: { '@type': 'Organization', name: 'Pengepraten', url: 'https://pengepraten.no' },
    publisher: { '@type': 'Organization', name: 'Pengepraten', url: 'https://pengepraten.no' },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://pengepraten.no${articleSlug}`,
    },
    about: ['Studentbudsjett', 'Lånekassen', 'Studentøkonomi', 'Studiestøtte'],
    citation: [sourceRates, sourceStudentSupport, sourceConversion, sourcePayments, sourceSifo, sourceStudentData, sourceTax],
  }

  const faqLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map(item => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: { '@type': 'Answer', text: item.answer },
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
            <span className="text-ink">Studentbudsjett 2026</span>
          </nav>

          <div className="inline-flex items-center gap-2 bg-forest-soft text-forest text-xs font-bold px-3 py-1 rounded-full mb-5">
            STUDIESTART · OPPDATERT 21. AUGUST 2026
          </div>

          <h1 className="text-3xl md:text-5xl font-medium font-display leading-[1.08] mb-5">
            Studentbudsjett 2026: Slik får du 15 488 kr til å vare
          </h1>
          <p className="text-ink-muted text-lg md:text-xl max-w-3xl leading-relaxed">
            Studiestøtten har økt, men bolig, mat og pensum spiser raskt opp
            beløpet. Her får du to konkrete studentbudsjett, de viktigste
            grensene for jobb og stipend — og en plan som holder hele semesteret.
          </p>

          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 mt-7 font-mono text-xs uppercase tracking-wider text-ink-muted">
            <span>Av Pengepraten</span>
            <time dateTime="2026-08-21">21. august 2026</time>
            <span>8 min lesetid</span>
          </div>
        </div>
      </section>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 py-12 article-content">
        <p className="text-xl text-gray-600 leading-relaxed mb-8">
          En fulltidsstudent kan få <strong>15 488 kroner i måneden</strong> i
          basislån fra Lånekassen i studieåret 2026/2027. Det tilsvarer
          <strong> 170 368 kroner over 11 måneder</strong>. Beløpet kan se
          romslig ut på utbetalingsdagen, men det er først når husleie, mat og
          semesterkostnader er trukket fra at du ser hva du faktisk har å leve for.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 my-8 not-prose">
          {[
            { value: '15 488 kr', label: 'basislån per måned' },
            { value: '170 368 kr', label: 'basislån for studieåret' },
            { value: '40 %', label: 'kan bli stipend' },
            { value: '234 821 kr', label: 'inntektsgrense i 2026' },
          ].map(item => (
            <div key={item.label} className="bg-paper-surface border border-border rounded-xl p-5">
              <div className="font-display text-2xl font-semibold text-forest">{item.value}</div>
              <div className="text-sm text-ink-muted mt-1 leading-snug">{item.label}</div>
            </div>
          ))}
        </div>

        <div className="bg-forest-soft border-l-4 border-forest rounded-r-xl p-6 my-8">
          <p className="text-sm text-ink leading-relaxed m-0">
            <strong>Kort forklart:</strong> Du får mer penger i august og januar,
            men dette er ikke bonuspenger. De skal dekke blant annet semesteravgift,
            pensum og oppstartskostnader. Fordel den ekstra utbetalingen på egne
            kontoer før du begynner å bruke av den.
          </p>
        </div>

        <h2>Hvor mye får du egentlig fra Lånekassen?</h2>
        <p>
          Basislånet for fulltidsstudenter økte til 15 488 kroner per måned fra
          studieåret 2026/2027. De fleste som studerer et helt studieår får støtte
          i 11 måneder, fra august til og med juni. Lånekassen opplyser også at
          utbetalingene er større i august og januar enn i de øvrige månedene.
        </p>
        <p>
          Det betyr at <strong>15 488 kroner er et månedlig gjennomsnitt</strong>,
          ikke nødvendigvis beløpet som kommer på konto hver måned. Sjekk derfor
          utbetalingsplanen på Dine sider, og lag budsjettet ut fra de faktiske
          utbetalingene.
        </p>

        <h2>To studentbudsjett med samme studiestøtte</h2>
        <p>
          Den største forskjellen mellom studentøkonomier er som regel bolig.
          Tabellen under viser to forenklede eksempler med de samme hverdagsutgiftene,
          men ulik husleie. Beløpene er <strong>eksempler, ikke nasjonale
          gjennomsnitt</strong>. Strøm og internett er her regnet inn i boutgiften.
        </p>

        <div className="overflow-x-auto my-8 not-prose">
          <table className="w-full min-w-[620px] text-sm border-collapse">
            <thead>
              <tr className="bg-forest text-paper">
                <th className="text-left p-3 border border-forest">Post</th>
                <th className="text-right p-3 border border-forest">Kollektiv</th>
                <th className="text-right p-3 border border-forest">Egen liten bolig</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white">
                <td className="p-3 border border-border font-semibold">Bolig inkl. strøm/internett</td>
                <td className="p-3 border border-border text-right">6 500 kr</td>
                <td className="p-3 border border-border text-right">8 400 kr</td>
              </tr>
              {monthlyCosts.map(([label, value], index) => (
                <tr key={label} className={index % 2 === 0 ? 'bg-paper-alt' : 'bg-white'}>
                  <td className="p-3 border border-border font-semibold">{label}</td>
                  <td className="p-3 border border-border text-right">{value}</td>
                  <td className="p-3 border border-border text-right">{value}</td>
                </tr>
              ))}
              <tr className="bg-forest-soft">
                <td className="p-3 border border-border font-bold">Sum utgifter</td>
                <td className="p-3 border border-border text-right font-bold">13 450 kr</td>
                <td className="p-3 border border-border text-right font-bold">15 350 kr</td>
              </tr>
              <tr className="bg-white">
                <td className="p-3 border border-border font-bold">Igjen av 15 488 kr</td>
                <td className="p-3 border border-border text-right font-bold text-forest">2 038 kr</td>
                <td className="p-3 border border-border text-right font-bold text-amber-warm">138 kr</td>
              </tr>
            </tbody>
          </table>
          <p className="text-xs text-ink-muted mt-2 leading-relaxed">
            Eksempelbudsjett laget av Pengepraten. SIFO presiserer at
            referansebudsjettet ikke inkluderer bolig, strøm, ferie eller uteliv.
            Bruk derfor dine egne fakturaer som fasit.
          </p>
        </div>

        <p>
          Regnestykket viser hvorfor en moderat forskjell i husleie kan avgjøre om
          du bygger buffer eller må jobbe ved siden av studiene. I SSBs siste
          studentanalyse, basert på en undersøkelse fra 2022, var bolig den største
          utgiften og sto for nesten halvparten av levekostnadene. Omtrent hver
          fjerde student rapporterte økonomiske utfordringer.
        </p>

        <h2>Slik bygger du et budsjett som varer</h2>

        <h3>1. Del pengene samme dag som de kommer</h3>
        <p>
          Opprett tre kontoer: <strong>regninger</strong>, <strong>hverdagsbruk</strong>
          og <strong>buffer</strong>. Overfør husleie og andre faste beløp til
          regningskontoen med én gang. Del resten på antall uker til neste
          utbetaling. Da ser du hva du faktisk kan bruke uten å gjette.
        </p>

        <h3>2. Spre storutbetalingen over semesteret</h3>
        <p>
          Sett av semesteravgift, pensum og nødvendig utstyr først. Fordel deretter
          resten av den ekstra augustutbetalingen på september, oktober, november
          og desember. Det enkleste er fire automatiske overføringer fra en konto
          uten bankkort.
        </p>

        <h3>3. Bestem ukesbeløpet for mat</h3>
        <p>
          Et månedsbudsjett på 3 600 kroner tilsvarer omtrent 835 kroner per uke.
          Planlegg fire middager før du handler, bruk kilopris og lag to ekstra
          porsjoner. Hvis ukesbeløpet ikke er realistisk for deg, justerer du posten
          før du kutter bufferen til null.
        </p>

        <h3>4. Legg inn ujevne utgifter hver måned</h3>
        <p>
          Pensum, tannlege, reiser hjem og ny vinterjakke kommer ikke hver måned,
          men de kommer. Del anslått årskostnad på 12 og sett av litt hver måned.
          SIFOs referansebudsjett er nettopp et langtidsbudsjett: det regner også
          med at sjeldnere kjøp må finansieres over tid.
        </p>

        <h3>5. Bruk egne tall etter den første måneden</h3>
        <p>
          Standardbudsjettet er bare startpunktet. Etter 30 dager henter du
          transaksjonene fra nettbanken og erstatter anslagene med faktiske tall.
          Vår gratis{' '}
          <Link href="/budsjett" className="text-forest font-semibold hover:underline">
            budsjettmal for Excel og Google Sheets
          </Link>{' '}
          gjør dette enklere å følge gjennom semesteret.
        </p>

        <div className="bg-amber-warm-soft border border-amber-warm/30 rounded-2xl p-6 my-10 not-prose">
          <h2 className="font-display text-2xl font-semibold text-ink mb-3">Planen for første studiedag</h2>
          <ol className="space-y-3 text-sm text-ink leading-relaxed list-decimal pl-5">
            <li>Finn den faktiske utbetalingsplanen på Dine sider hos Lånekassen.</li>
            <li>Flytt husleie, semesteravgift og pensumpenger bort fra brukskontoen.</li>
            <li>Sett ett ukesbeløp for mat, transport og sosialt forbruk.</li>
            <li>Automatiser minst 200–400 kroner til buffer hvis budsjettet tillater det.</li>
            <li>Sjekk forbruket etter fire uker og juster én post om gangen.</li>
          </ol>
        </div>

        <h2>Jobb ved siden av studiene: To grenser du må skille</h2>
        <p>
          I 2026 er frikortgrensen <strong>100 000 kroner</strong>. Tjener du mer,
          skal arbeidsgiveren normalt trekke skatt. Feriepenger teller også med i
          frikortbeløpet. Denne grensen handler bare om skatt — ikke om hvor mye av
          studielånet som kan bli stipend.
        </p>
        <p>
          For Lånekassen er inntektsgrensen <strong>234 821 kroner brutto</strong>
          dersom du mottar støtte hele kalenderåret. Har du fått støtte i sju
          måneder eller mindre, er grensen 587 053 kroner. Tjener du litt over,
          reduseres stipenddelen gradvis. Lånekassen oppgir følgende formel:
        </p>

        <div className="bg-paper-alt border border-border rounded-xl p-6 my-8 not-prose text-center">
          <p className="font-mono text-sm md:text-base font-semibold text-ink m-0">
            Inntekt over grensen × 5 % × antall måneder med støtte
          </p>
          <p className="text-sm text-ink-muted mt-2 mb-0">= reduksjon i mulig stipend</p>
        </div>

        <p>
          Eksempel: Er du 10 000 kroner over grensen og har fått støtte i 11
          måneder, blir mulig stipend redusert med 5 500 kroner. Du mister altså
          ikke automatisk hele stipendet, men ekstra vakter kan få en høyere reell
          kostnad enn skatten alene tilsier.
        </p>

        <h2>Ikke glem at alt kommer som lån først</h2>
        <p>
          Basislånet er et lån når det utbetales. Opptil 40 prosent kan senere bli
          gjort om til stipend dersom du bor borte fra foreldrene dine, består
          utdanningen og holder deg under grensene for inntekt og formue.
        </p>
        <p>
          For studenter ved universitet og høgskole er 15 prosentpoeng av omgjøringen
          knyttet til beståtte studiepoeng, mens de siste 25 prosentpoengene krever
          at du fullfører en grad. Tar du bare enkeltemner eller et årsstudium, kan
          du derfor normalt få omgjort maksimalt 15 prosent. Formuesgrensen for
          ugifte er 534 225 kroner i 2026.
        </p>

        <h2>Frister og sjekkliste for høsten 2026</h2>
        <ul>
          <li><strong>Søk så snart studieplassen er klar:</strong> du må søke på nytt hvert år.</li>
          <li><strong>15. november 2026:</strong> siste frist for hele studieåret eller høstsemesteret.</li>
          <li><strong>15. mars 2027:</strong> siste frist dersom du bare søker for vårsemesteret.</li>
          <li><strong>Før utbetaling:</strong> betal semesteravgift, meld deg opp til fag, signer avtalen med BankID og kontroller kontonummeret.</li>
          <li><strong>Hver måned:</strong> pengene kommer normalt senest den 15. når alt er i orden.</li>
        </ul>

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
            <li><a href={sourceRates} target="_blank" rel="noopener noreferrer">Lånekassen: Nye satser for studieåret 2026/2027</a></li>
            <li><a href={sourceStudentSupport} target="_blank" rel="noopener noreferrer">Lånekassen: Stipend og lån for 2026/2027</a></li>
            <li><a href={sourceConversion} target="_blank" rel="noopener noreferrer">Lånekassen: Omgjøring av basislån til stipend</a></li>
            <li><a href={sourcePayments} target="_blank" rel="noopener noreferrer">Lånekassen: Når kommer pengene?</a></li>
            <li><a href={sourceSifo} target="_blank" rel="noopener noreferrer">SIFO/OsloMet: Referansebudsjettet 2026</a></li>
            <li><a href={sourceStudentData} target="_blank" rel="noopener noreferrer">SSB: Studenters inntekter og levekostnader</a></li>
            <li><a href={sourceTax} target="_blank" rel="noopener noreferrer">Skatteetaten: Frikortgrensen i 2026</a></li>
          </ul>
        </div>

        <div className="mt-12 pt-10 border-t border-border not-prose">
          <RelatedContent tools={article?.relatedTools} articles={relatedArticles} />
        </div>

        <div className="bg-paper-alt border-l-4 border-border-strong rounded-r-xl p-6 mt-10">
          <h3 className="font-bold text-ink mb-2">Metode og forbehold</h3>
          <p className="text-sm text-ink-muted leading-relaxed m-0">
            Satser og frister er kontrollert mot Lånekassen og Skatteetaten
            21. august 2026. Budsjettene er forenklede eksempler og ikke personlig
            økonomisk rådgivning. Boligpris, livssituasjon og forbruk varierer mye.
          </p>
        </div>

        <p className="text-xs text-ink-muted mt-8">
          Publisert: 21. august 2026 | Satser og lenker sist kontrollert: 21. august 2026
        </p>
      </article>
    </>
  )
}
