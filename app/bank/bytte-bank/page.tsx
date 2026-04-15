import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Slik bytter du bank i Norge — guiden for 2026',
  description: 'Lær hvordan du bytter bank i Norge uten å miste betalinger eller problemer. Steg-for-steg-guide, og se hvor mye du kan spare på gebyrer og rente.',
}

export default function BytteBank() {
  return (
    <>
      {/* HERO */}
      <section className="bg-gradient-to-br from-teal-600 to-cyan-700 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <nav className="text-teal-100 text-sm mb-4">
            <Link href="/">Hjem</Link>
            <span className="mx-2">/</span>
            <span>Bank</span>
            <span className="mx-2">/</span>
            <span>Bytte bank</span>
          </nav>
          <h1 className="text-3xl md:text-5xl font-black mb-4">
            Slik bytter du bank i Norge — guiden for 2026
          </h1>
          <p className="text-teal-100 text-xl max-w-2xl">
            Bytte av bank er enklere enn du tror — og ofte verdt titusenvis av kroner i året. Her er hele prosessen.
          </p>
        </div>
      </section>

      {/* INNHOLD */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 py-12 article-content space-y-8">

        {/* INTRO */}
        <div className="bg-teal-50 rounded-2xl p-6 border-l-4 border-teal-600">
          <p className="text-lg text-gray-800 leading-relaxed">
            <span className="text-2xl mr-2">🏦</span>
            <strong>Nordmenn er latiske med bankbytte.</strong> Gjennomsnittlig nordmann bruker samme bank i 15+ år, selv om en annen bank kanskje tilbyr 2-3% lavere rente eller 500 kroner mindre i månedlige gebyrer. Det er tusenvis av kroner rett i søpla.
          </p>
        </div>

        {/* INFOBOX */}
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
          <h3 className="font-bold text-amber-800 mb-3 flex items-center gap-2">
            <span className="text-xl">→</span> Bankbytte tar typisk 1-3 dager
          </h3>
          <p className="text-gray-800">
            Du mister <strong>ingen betalinger</strong> i overgangsperioden. Gamle betalingsoppdrag og avtalegiro blir automatisk flyttet. Systemet er designet for at du knapt merker at du bytter bank.
          </p>
        </div>

        {/* HVORFOR */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <span>💰</span> Hvorfor bytte bank? Her er fordelene
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="bg-white rounded-xl p-5 border border-gray-200 text-center">
              <div className="text-4xl mb-3">📉</div>
              <h3 className="font-bold text-gray-900 mb-1">Bedre rente</h3>
              <p className="text-gray-600 text-sm">En lavere boligrente på 0,5% kan spare deg 50.000+ kr/år</p>
            </div>
            <div className="bg-white rounded-xl p-5 border border-gray-200 text-center">
              <div className="text-4xl mb-3">💳</div>
              <h3 className="font-bold text-gray-900 mb-1">Lavere gebyrer</h3>
              <p className="text-gray-600 text-sm">Noen banker tar 100-200 kr/mnd i gebyrer — andre tar null</p>
            </div>
            <div className="bg-white rounded-xl p-5 border border-gray-200 text-center">
              <div className="text-4xl mb-3">📱</div>
              <h3 className="font-bold text-gray-900 mb-1">Bedre digital opplevelse</h3>
              <p className="text-gray-600 text-sm">Moderne apper vs. gamle storbank-løsninger</p>
            </div>
          </div>

          {/* TABELL */}
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse rounded-xl overflow-hidden shadow-sm">
              <thead>
                <tr className="bg-gray-800 text-white">
                  <th className="text-left p-4 font-bold">Bankgebyr-type</th>
                  <th className="text-left p-4 font-bold">Gammel bank (典型)</th>
                  <th className="text-left p-4 font-bold bg-green-600">Digital bank</th>
                  <th className="text-left p-4 font-bold">Besparelse</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white border-b border-gray-100">
                  <td className="p-4 font-semibold">Månedlig kontogebyr</td>
                  <td className="p-4 text-red-600">100-150 kr</td>
                  <td className="p-4 bg-green-50 text-green-700 font-bold">0 kr</td>
                  <td className="p-4 text-green-700 font-bold">1.200-1.800 kr/år</td>
                </tr>
                <tr className="bg-gray-50 border-b border-gray-100">
                  <td className="p-4 font-semibold">Bankkort (debet)</td>
                  <td className="p-4 text-red-600">150-200 kr/år</td>
                  <td className="p-4 bg-green-50 text-green-700 font-bold">0 kr</td>
                  <td className="p-4 text-green-700 font-bold">150-200 kr/år</td>
                </tr>
                <tr className="bg-white border-b border-gray-100">
                  <td className="p-4 font-semibold">Kredittkort</td>
                  <td className="p-4 text-red-600">300-600 kr/år</td>
                  <td className="p-4 bg-green-50 text-green-700 font-bold">0-200 kr</td>
                  <td className="p-4 text-green-700 font-bold">100-400 kr/år</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="p-4 font-semibold">Overføringer</td>
                  <td className="p-4 text-red-600">1-5 kr/hver</td>
                  <td className="p-4 bg-green-50 text-green-700 font-bold">Gratis</td>
                  <td className="p-4 text-green-700 font-bold">Ubegrenset</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-teal-50 rounded-xl p-4 text-sm text-gray-600">
            <strong>Tips:</strong> En gjennomsnittsfamilie kan spare 2.000-5.000 kroner i året bare på gebyrer ved å bytte fra en dyr storbank til en digital bank.
          </div>
        </section>

        {/* STEG FOR STEG */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <span>📋</span> Slik bytter du bank — steg for steg
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Bankbytte er enklere enn du tror takket være <strong>BankID</strong> og norske standarder. Nye banker tar ofte jobben med å flytte alt for deg. Slik går du frem:
          </p>

          <div className="space-y-4">
            <div className="flex items-start gap-4 bg-white rounded-xl p-5 border border-gray-200 shadow-sm">
              <div className="w-10 h-10 rounded-full bg-teal-600 text-white flex items-center justify-center font-bold text-lg flex-shrink-0">1</div>
              <div>
                <h3 className="font-bold text-gray-900 mb-1">Sjekk hva du har i dag</h3>
                <p className="text-gray-600 text-sm">Noter alle dine betalingsoppdrag, faste overføringer, avtalegiro og sparing. Du trenger ikke si opp noe enda.</p>
              </div>
            </div>
            <div className="flex items-start gap-4 bg-white rounded-xl p-5 border border-gray-200 shadow-sm">
              <div className="w-10 h-10 rounded-full bg-teal-600 text-white flex items-center justify-center font-bold text-lg flex-shrink-0">2</div>
              <div>
                <h3 className="font-bold text-gray-900 mb-1">Sjekk boliglånsrenten din</h3>
                <p className="text-gray-600 text-sm">Ringer du banken og ber om 0,5% lavere rente? Det er ofte nok til å få ja. Men hvis de sier nei, er det god grunn til å bytte.</p>
                <Link href="/lan/nar-lonner-refinansiering" className="inline-block mt-2 text-teal-700 font-semibold text-sm hover:underline">
                  → Les om refinansiering og forhandling
                </Link>
              </div>
            </div>
            <div className="flex items-start gap-4 bg-white rounded-xl p-5 border border-gray-200 shadow-sm">
              <div className="w-10 h-10 rounded-full bg-teal-600 text-white flex items-center justify-center font-bold text-lg flex-shrink-0">3</div>
              <div>
                <h3 className="font-bold text-gray-900 mb-1">Velg ny bank og åpne konto</h3>
                <p className="text-gray-600 text-sm">Gå til nettsiden til banken (f.eks. Sbanken, Nordea, DNB) og velg "åpne konto". Du trenger BankID og en norsk folkeregistrert adresse. Prosessen tar 10-15 minutter.</p>
              </div>
            </div>
            <div className="flex items-start gap-4 bg-white rounded-xl p-5 border border-gray-200 shadow-sm">
              <div className="w-10 h-10 rounded-full bg-teal-600 text-white flex items-center justify-center font-bold text-lg flex-shrink-0">4</div>
              <div>
                <h3 className="font-bold text-gray-900 mb-1">Spør om flytting av betalingsoppdrag</h3>
                <p className="text-gray-600 text-sm">Mange banker tilbyr å flytte dine faste betalingsoppdrag automatisk. Bare spør når du åpner kontoen. Alternativt gjør du det selv i nettbanken.</p>
              </div>
            </div>
            <div className="flex items-start gap-4 bg-white rounded-xl p-5 border border-gray-200 shadow-sm">
              <div className="w-10 h-10 rounded-full bg-teal-600 text-white flex items-center justify-center font-bold text-lg flex-shrink-0">5</div>
              <div>
                <h3 className="font-bold text-gray-900 mb-1">Overfør saldo og legg om lønn</h3>
                <p className="text-gray-600 text-sm">Flytt sparepengene fra gammel til ny konto. Deretter ber du arbeidsgiveren om å legge om lønnskonto til den nye banken (eller gjør det selv i din nettbank).</p>
              </div>
            </div>
            <div className="flex items-start gap-4 bg-white rounded-xl p-5 border border-gray-200 shadow-sm">
              <div className="w-10 h-10 rounded-full bg-teal-600 text-white flex items-center justify-center font-bold text-lg flex-shrink-0">6</div>
              <div>
                <h3 className="font-bold text-gray-900 mb-1">Lukk gammel konto (valgfritt)</h3>
                <p className="text-gray-600 text-sm">Når alt er flyttet, kan du bestille nedleggelse av den gamle kontoen. Mange velger å beholde den gamle kontoen en stund først — bare for sikkerhets skyld.</p>
              </div>
            </div>
          </div>
        </section>

        {/* HVA MED */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <span>🔄</span> Hva skjer med betalinger, avtalegiro og lignende?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="bg-white rounded-xl p-5 border border-gray-200">
              <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                <span>📄</span> Betalingsoppdrag
              </h3>
              <p className="text-gray-600 text-sm">
                Disse flyttes vanligvis ikke automatisk. Du må sette opp nye betalingsoppdrag i den nye banken. Heldigvis er dette ofte like enkelt som å kopiere fra en notisblokk.
              </p>
            </div>
            <div className="bg-white rounded-xl p-5 border border-gray-200">
              <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                <span>📅</span> Avtalegiro
              </h3>
              <p className="text-gray-600 text-sm">
                Avtalegiro (faste trekk fra konto) blir <strong>ikke</strong> automatisk flyttet. Du må melde nytt kontonummer til alle som trekker deg (strøm, forsikring, etc.). Mange banker gir deg 60 dagers varsel dersom kontoen legges ned.
              </p>
            </div>
            <div className="bg-white rounded-xl p-5 border border-gray-200">
              <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                <span>🏠</span> Boliglån
              </h3>
              <p className="text-gray-600 text-sm">
                Boliglån kan flyttes, men det krever en ny avtale med den nye banken. Det er verdt å undersøke om din nye bank kan tilby bedre vilkår. <Link href="/lan/nar-lonner-refinansiering" className="text-teal-700 hover:underline">Refinansiering av boliglån</Link> er egen prosess.
              </p>
            </div>
            <div className="bg-white rounded-xl p-5 border border-gray-200">
              <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                <span>💳</span> Kredittkort
              </h3>
              <p className="text-gray-600 text-sm">
                Kredittkort er knyttet til kortutsteder, ikke banken. Du trenger normalt ikke bytte kredittkort når du bytter bank — men sjekk gebyrer og vilkår uansett.
              </p>
            </div>
          </div>

          <div className="bg-amber-50 rounded-xl p-5 border border-amber-200">
            <h3 className="font-bold text-amber-800 mb-2 flex items-center gap-2">
              <span>⏳</span> Tidslinjen
            </h3>
            <div className="space-y-2">
              <div className="flex justify-between items-center py-2 border-b border-amber-100">
                <span className="text-gray-700">Åpne ny konto</span>
                <span className="font-bold text-teal-700">Dag 1</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-amber-100">
                <span className="text-gray-700">Flytt betalingsoppdrag</span>
                <span className="font-bold text-teal-700">Dag 1-3</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-amber-100">
                <span className="text-gray-700">Overfør saldo</span>
                <span className="font-bold text-teal-700">Dag 1-3</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-amber-100">
                <span className="text-gray-700">Legg om lønn</span>
                <span className="font-bold text-teal-700">Dag 3-7</span>
              </div>
              <div className="flex justify-between items-center py-2">
                <span className="text-gray-700 font-semibold">Lukk gammel konto</span>
                <span className="font-bold text-teal-700">Valgfritt, etter 30 dager</span>
              </div>
            </div>
          </div>
        </section>

        {/* VANLIGE SPØRSMÅL */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <span>❓</span> Vanlige spørsmål
          </h2>
          <div className="space-y-4">
            <div className="bg-white rounded-xl p-5 border border-gray-200">
              <h3 className="font-bold text-gray-900 mb-2">Må jeg frykte for betalinger i overgangsperioden?</h3>
              <p className="text-gray-600 text-sm">Nei. Når du setter opp ny konto og flytter betalingsoppdrag, vil ingen betalinger bli forsømt. Betalingsoppdrag som ikke rekker å bli flytt, vil gå fra din gamle konto (som fortsatt er aktiv) til de overføres.</p>
            </div>
            <div className="bg-white rounded-xl p-5 border border-gray-200">
              <h3 className="font-bold text-gray-900 mb-2">Tar det lang tid å åpne ny konto?</h3>
              <p className="text-gray-600 text-sm">Med BankID tar det typisk 10-20 minutter å åpne en ny konto hos de fleste digitale banker. Kredittvurdering og andre steg kan ta noen dager.</p>
            </div>
            <div className="bg-white rounded-xl p-5 border border-gray-200">
              <h3 className="font-bold text-gray-900 mb-2">Kan jeg ha flere banker samtidig?</h3>
              <p className="text-gray-600 text-sm">Ja, det er helt tillatt og vanlig. Mange velger å ha brukskonto i én bank og sparing i en annen. Det er ingen begrensning på antall bankkontoer.</p>
            </div>
            <div className="bg-white rounded-xl p-5 border border-gray-200">
              <h3 className="font-bold text-gray-900 mb-2">Hva med avtalegiro-kontoen min?</h3>
              <p className="text-gray-600 text-sm">Du må oppdatere kontonummeret hos alle som har avtalegirotrekk mot deg. Dette tar typisk 10 minutter per leverandør — og kan gjøres på deres nettsider eller ved å ringe kundeservice.</p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-br from-teal-600 to-cyan-700 rounded-2xl p-8 text-white text-center">
          <h2 className="text-2xl font-black mb-4">Klar til å bytte — eller bare undersøke?</h2>
          <p className="text-teal-100 mb-6 max-w-2xl mx-auto">
            Bytte av bank tar en helg og kan spare deg tusenvis i året. Men først: sjekk om din nåværende bank kan tilby deg bedre vilkår. Forhandle først — bytt hvis de ikke matcher.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/lan/hvor-mye-boliglan-kan-jeg-fa" className="inline-block bg-white text-teal-700 font-bold px-6 py-3 rounded-lg hover:bg-teal-50 transition-colors">
              🧮 Sjekk din lånekraft
            </Link>
            <Link href="/sparing/hoyrentekonto" className="inline-block bg-teal-500 text-white font-bold px-6 py-3 rounded-lg hover:bg-teal-400 transition-colors border border-teal-400">
              💰 Sett sparepengene på høyrentekonto
            </Link>
          </div>
        </section>

        {/* RELATERTE ARTIKLER */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">📚 Relaterte artikler</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link href="/lan/nar-lonner-refinansiering" className="block bg-white rounded-xl p-5 border border-gray-200 hover:border-teal-400 transition-colors group">
              <div className="flex items-center gap-3">
                <span className="text-2xl">🔄</span>
                <div>
                  <h3 className="font-bold text-gray-900 group-hover:text-teal-700">Refinansiering — når det lønner seg</h3>
                  <p className="text-gray-500 text-sm">Bytt boliglån og spar titusenvis</p>
                </div>
              </div>
            </Link>
            <Link href="/sparing/hoyrentekonto" className="block bg-white rounded-xl p-5 border border-gray-200 hover:border-teal-400 transition-colors group">
              <div className="flex items-center gap-3">
                <span className="text-2xl">💰</span>
                <div>
                  <h3 className="font-bold text-gray-900 group-hover:text-teal-700">Høyrentekonto 2026</h3>
                  <p className="text-gray-500 text-sm">Få 5,2% på sparepengene dine</p>
                </div>
              </div>
            </Link>
          </div>
        </section>

        <p className="text-sm text-gray-400 pt-8 border-t">
          Sist oppdatert: 15. april 2026. Bankprodukter og gebyrer endres. Sjekk med banken for oppdaterte opplysninger.
        </p>
      </article>
    </>
  )
}