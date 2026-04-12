import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'BSU 2026: Alt du trenger å vite om Boligsparing for Ungdom',
  description: 'BSU er Norges beste spareform for unge under 34. Få opptil 26% effektiv avkastning med skattefradraget. Full guide til BSU i 2026.',
}

export default function BSUGuide() {
  return (
    <>
      {/* HERO */}
      <section className="bg-gradient-to-br from-green-600 to-emerald-700 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <nav className="text-green-100 text-sm mb-4">
            <Link href="/">Hjem</Link>
            <span className="mx-2">/</span>
            <Link href="/sparing">Sparing</Link>
            <span className="mx-2">/</span>
            <span>BSU Guide</span>
          </nav>
          <h1 className="text-3xl md:text-5xl font-black mb-4">
            BSU 2026: Alt du trenger å vite om Boligsparing for Ungdom
          </h1>
          <p className="text-green-100 text-xl max-w-2xl">
            Norges beste spareform for unge boligkjøpere. Lær hvordan du får opptil 26% effektiv avkastning på pengene dine.
          </p>
        </div>
      </section>

      {/* INNHOLD */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 py-12 article-content space-y-8">

        {/* INTRO */}
        <div className="bg-green-50 rounded-2xl p-6 border-l-4 border-green-600">
          <p className="text-lg text-gray-800 leading-relaxed">
            <span className="text-2xl mr-2">🏠</span>
            <strong>BSU</strong> (Boligsparing for Ungdom) er Norges mest fordelaktige spareordning for deg under 34 år som vil eie din egen bolig. Med skattefradrag på 26% av pengene du setter inn, er det rett og slett gratis penger fra staten.
          </p>
        </div>

        {/* HVA ER BSU */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <span>📋</span> Hva er BSU og hvorfor er det den beste spareformen?
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            BSU er en spareordning opprettet av den norske staten for å hjelpe unge å komme inn på boligmarkedet. Ordningen ble innført i 1991 og har siden da vært en av de mest fordelaktige spareformene i Norge.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Det som gjør BSU spesielt er <strong>skattefradraget</strong> — staten gir deg rett og slett penger tilbake på skatten for hver krone du setter inn på BSU-kontoen. Dette er rettferdig, godtgjort, og noe av det nærmeste du kommer gratis penger i det norske skattesystemet.
          </p>
          <div className="bg-white rounded-xl p-5 border border-gray-200 shadow-sm">
            <h3 className="font-bold text-green-700 mb-3">Hvorfor BSU er best for deg:</h3>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-green-600 font-bold mt-0.5">✓</span>
                <span><strong>26% effektiv avkastning</strong> — langt bedre enn noen sparekonto</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 font-bold mt-0.5">✓</span>
                <span><strong>Ingen risiko</strong> — pengene dine er trygge, ingen aksjemarked nødvendig</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 font-bold mt-0.5">✓</span>
                <span><strong>Penger til bolig</strong> — du bygger egenkapital samtidig</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 font-bold mt-0.5">✓</span>
                <span><strong>Flexibilitet</strong> — du kan ta ut pengene hvis du trenger (da mister du fradraget)</span>
              </li>
            </ul>
          </div>
        </section>

        {/* SKATTEFRADRAG */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <span>💰</span> 26% skattefradrag forklart — statens gave
          </h2>
          <div className="bg-gradient-to-br from-green-600 to-emerald-700 rounded-2xl p-6 text-white mb-6">
            <h3 className="font-bold text-green-100 mb-3 uppercase text-sm tracking-wide">Skattefradraget på én titt</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="text-center">
                <div className="text-3xl font-black mb-1">10%</div>
                <div className="text-green-100 text-sm">Skattefradrag per krone</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-black mb-1">27 500 kr</div>
                <div className="text-green-100 text-sm">Maks årlig innskudd</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-black mb-1">2 750 kr</div>
                <div className="text-green-100 text-sm">Maksimalt fradrag per år</div>
              </div>
            </div>
          </div>
          <p className="text-gray-700 leading-relaxed mb-4">
            Hver krone du setter inn på BSU-kontoen gir deg <strong>10% skattefradrag</strong>. Det betyr at hvis du setter inn 27.500 kr i 2026, får du 2.750 kr tilbake på skatten — nesten gratis penger.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Dette fradraget kommer i tillegg til renteinntektene du får på sparepengene. Så hvis du får 4% rente pluss 10% skattefradrag, snakker vi om en <strong>effektiv avkastning på rundt 14%</strong> før skatt.
          </p>

          {/* REGNEKSTYKKE */}
          <div className="bg-green-50 rounded-xl p-5 border border-green-200">
            <h3 className="font-bold text-green-800 mb-4 flex items-center gap-2">
              <span>🧮</span> Regnestykket: Slik vokser BSU-pengene dine
            </h3>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between items-center py-2 border-b border-green-200">
                <span className="text-gray-700">Du setter inn per år:</span>
                <span className="font-bold text-gray-900">27 500 kr</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-green-200">
                <span className="text-gray-700">Skattefradrag (10%):</span>
                <span className="font-bold text-green-700">+ 2 750 kr</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-green-200">
                <span className="text-gray-700">Rente på innskudd (~4%):</span>
                <span className="font-bold text-green-700">+ 1 100 kr</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-green-200 bg-green-100/50 rounded">
                <span className="text-gray-800 font-semibold">Din reelle inntjening per år:</span>
                <span className="font-black text-green-800 text-base">≈ 3 850 kr</span>
              </div>
              <div className="flex justify-between items-center pt-2">
                <span className="text-gray-800 font-bold">Effektiv avkastning:</span>
                <span className="font-black text-green-800 text-lg">~14%</span>
              </div>
            </div>
          </div>
        </section>

        {/* HVEM KAN SPARE */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <span>👤</span> Hvem kan spare i BSU?
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            BSU er kun for <strong>unge som ennå ikke har kommet inn på boligmarkedet</strong>. Her er kravene:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="bg-white rounded-xl p-5 border border-gray-200">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl">🎂</span>
                <h3 className="font-bold text-gray-900">Alder</h3>
              </div>
              <p className="text-gray-700">
                Du må være <strong>mellom 18 og 33 år</strong>. Fra og med det året du fyller 34, kan du ikke lenger sette inn nye penger, men du beholder alt du har spart.
              </p>
            </div>
            <div className="bg-white rounded-xl p-5 border border-gray-200">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl">🏠</span>
                <h3 className="font-bold text-gray-900">Boligstatus</h3>
              </div>
              <p className="text-gray-700">
                Du kan ikke eie bolig fra før. BSU er for deg som <strong>leier eller bor hos foreldre</strong> og drømmer om å komme inn på boligmarkedet.
              </p>
            </div>
          </div>
          <div className="bg-amber-50 rounded-xl p-5 border border-amber-200 mb-6">
            <h3 className="font-bold text-amber-800 mb-2 flex items-center gap-2">
              <span>⚠️</span> OBS: Inntektsbegrensning
            </h3>
            <p className="text-gray-700">
              Det er <strong>ingen direkte inntektsbegrensning</strong> for å starte BSU, men skattefradraget kan tidligere bortfalle hvis du har svært høy inntekt (dog sjenerøst definert). I praksis er BSU tilgjengelig for de aller fleste under 34 år.
            </p>
          </div>

          {/* KJENDT FIGUR */}
          <div className="bg-blue-50 rounded-xl p-5 border border-blue-200">
            <h3 className="font-bold text-blue-800 mb-3">📊 Aldersfordeling for BSU i Norge</h3>
            <div className="space-y-3">
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-700">18-25 år</span>
                  <span className="font-semibold text-green-700">Perfekt tid å starte!</span>
                </div>
                <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                  <div className="h-full bg-green-500 rounded-full" style={{ width: '85%' }} />
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-700">26-30 år</span>
                  <span className="font-semibold text-green-600">Skal absolutt ha BSU</span>
                </div>
                <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                  <div className="h-full bg-green-400 rounded-full" style={{ width: '70%' }} />
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-700">31-33 år</span>
                  <span className="font-semibold text-amber-600">Siste sjanse — start nå!</span>
                </div>
                <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                  <div className="h-full bg-amber-400 rounded-full" style={{ width: '45%' }} />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* BESTE BSU-KONTOER */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <span>🏦</span> Beste BSU-kontoer 2026
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Ikke alle banker tilbyr BSU, og de som gjør det har forskjellige renter. Her er en oversikt over de beste BSU-kontoene i Norge akkurat nå:
          </p>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse rounded-xl overflow-hidden shadow-sm">
              <thead>
                <tr className="bg-green-600 text-white">
                  <th className="text-left p-4 font-bold">Bank</th>
                  <th className="text-left p-4 font-bold">BSU-rente</th>
                  <th className="text-left p-4 font-bold">Maksimalt innskudd</th>
                  <th className="text-left p-4 font-bold">Bonus</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white border-b border-gray-100">
                  <td className="p-4 font-semibold">DNB</td>
                  <td className="p-4 text-green-700 font-bold">3,95%</td>
                  <td className="p-4">27 500 kr/år</td>
                  <td className="p-4 text-sm text-gray-600">God digital løsning</td>
                </tr>
                <tr className="bg-green-50 border-b border-gray-100">
                  <td className="p-4 font-semibold">Norwegian Bank</td>
                  <td className="p-4 text-green-700 font-bold">4,10%</td>
                  <td className="p-4">27 500 kr/år</td>
                  <td className="p-4 text-sm text-gray-600">Cashback på kort</td>
                </tr>
                <tr className="bg-white border-b border-gray-100">
                  <td className="p-4 font-semibold">Sbanken</td>
                  <td className="p-4 text-green-700 font-bold">3,75%</td>
                  <td className="p-4">27 500 kr/år</td>
                  <td className="p-4 text-sm text-gray-600">Ingen gebyrer</td>
                </tr>
                <tr className="bg-green-50 border-b border-gray-100">
                  <td className="p-4 font-semibold">Nordea</td>
                  <td className="p-4 text-green-700 font-bold">3,60%</td>
                  <td className="p-4">27 500 kr/år</td>
                  <td className="p-4 text-sm text-gray-600">Stor bank, god support</td>
                </tr>
                <tr className="bg-white">
                  <td className="p-4 font-semibold">Sparebank 1</td>
                  <td className="p-4 text-green-700 font-bold">3,80%</td>
                  <td className="p-4">27 500 kr/år</td>
                  <td className="p-4 text-sm text-gray-600">Lokalt engasjement</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="bg-green-50 rounded-xl p-4 text-sm text-gray-600">
            <strong>Merk:</strong> Rentene er veiledende per april 2026 og kan endres. Sjekk bankens nettsider for oppdaterte tall.
          </div>
        </section>

        {/* MAKSIMERE BSU */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <span>🚀</span> Hvordan maksimere BSU hvert år
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            For å virkelig høste fra BSU-ordningen, må du være strukturert. Her er de viktigste tipsene:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white rounded-xl p-5 border-2 border-green-200 shadow-sm">
              <div className="text-3xl mb-3">💡</div>
              <h3 className="font-bold text-gray-900 mb-2">Automatisering</h3>
              <p className="text-gray-600 text-sm">
                Sett opp en fast månedlig overføring på <strong>2 292 kr</strong> (27 500 / 12). På den måten fyller du kvoten uten å tenke over det.
              </p>
            </div>
            <div className="bg-white rounded-xl p-5 border-2 border-green-200 shadow-sm">
              <div className="text-3xl mb-3">📅</div>
              <h3 className="font-bold text-gray-900 mb-2">Start tidlig i året</h3>
              <p className="text-gray-600 text-sm">
                Jo før du starter, jo flere renteinntekter får du. Sett inn hele beløpet ved starten av året for maksimal renteeffekt.
              </p>
            </div>
            <div className="bg-white rounded-xl p-5 border-2 border-green-200 shadow-sm">
              <div className="text-3xl mb-3">🔄</div>
              <h3 className="font-bold text-gray-900 mb-2">Samme konto hvert år</h3>
              <p className="text-gray-600 text-sm">
                Ikke bytt bank bare for en høyere rente — flytteprosessen kan være tung. Velg en god bank og bli der.
              </p>
            </div>
            <div className="bg-white rounded-xl p-5 border-2 border-green-200 shadow-sm">
              <div className="text-3xl mb-3">🧾</div>
              <h3 className="font-bold text-gray-900 mb-2">Sjekk skattemeldingen</h3>
              <p className="text-gray-600 text-sm">
                Pass på at BSU-fradraget faktisk kommer med på skattemeldingen. Det skal legges til automatisk, men dobbeltsjekk.
              </p>
            </div>
          </div>

          {/* MAKS-INN SKJEMA */}
          <div className="bg-gradient-to-br from-green-100 to-emerald-100 rounded-xl p-6 mt-6">
            <h3 className="font-bold text-green-800 mb-4 flex items-center gap-2">
              <span>🎯</span> Slik fyller du BSU-kvoten fullstendig
            </h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3 bg-white rounded-lg p-3">
                <div className="w-8 h-8 rounded-full bg-green-600 text-white flex items-center justify-center font-bold text-sm">1</div>
                <span className="text-gray-800"><strong>Mål:</strong> 27 500 kr per kalenderår</span>
              </div>
              <div className="flex items-center gap-3 bg-white rounded-lg p-3">
                <div className="w-8 h-8 rounded-full bg-green-600 text-white flex items-center justify-center font-bold text-sm">2</div>
                <span className="text-gray-800"><strong>Månedlig sparing:</strong> 2 292 kr/måned</span>
              </div>
              <div className="flex items-center gap-3 bg-white rounded-lg p-3">
                <div className="w-8 h-8 rounded-full bg-green-600 text-white flex items-center justify-center font-bold text-sm">3</div>
                <span className="text-gray-800"><strong>Skattefradrag:</strong> 2 750 kr (10% av 27 500)</span>
              </div>
              <div className="flex items-center gap-3 bg-white rounded-lg p-3">
                <div className="w-8 h-8 rounded-full bg-green-600 text-white flex items-center justify-center font-bold text-sm">4</div>
                <span className="text-gray-800"><strong>Total effekt:</strong> 27 500 + 2 750 + renter ≈ 31 250+ kr</span>
              </div>
            </div>
          </div>
        </section>

        {/* BSU VS VANLIG SPARING */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <span>⚖️</span> BSU vs. vanlig sparing: Regnestykket
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Er BSU virkelig så mye bedre enn vanlig sparing? La oss sammenligne:
          </p>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse rounded-xl overflow-hidden shadow-sm">
              <thead>
                <tr className="bg-gray-800 text-white">
                  <th className="text-left p-4 font-bold">Parameter</th>
                  <th className="text-left p-4 font-bold bg-green-600">BSU (anbefalt)</th>
                  <th className="text-left p-4 font-bold">Vanlig sparekonto</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white border-b border-gray-100">
                  <td className="p-4 font-semibold">Effektiv avkastning</td>
                  <td className="p-4 bg-green-50 font-bold text-green-700">~14%</td>
                  <td className="p-4">~3-4%</td>
                </tr>
                <tr className="bg-gray-50 border-b border-gray-100">
                  <td className="p-4 font-semibold">Skattefradrag</td>
                  <td className="p-4 bg-green-50 font-bold text-green-700">Ja (10%)</td>
                  <td className="p-4">Nei</td>
                </tr>
                <tr className="bg-white border-b border-gray-100">
                  <td className="p-4 font-semibold">Maksimalt per år</td>
                  <td className="p-4 bg-green-50 font-bold text-green-700">27 500 kr</td>
                  <td className="p-4">Ubegrenset</td>
                </tr>
                <tr className="bg-gray-50 border-b border-gray-100">
                  <td className="p-4 font-semibold">Binding</td>
                  <td className="p-4 bg-green-50 font-bold text-green-700">Til boligkjøp*</td>
                  <td className="p-4">Ingen</td>
                </tr>
                <tr className="bg-white">
                  <td className="p-4 font-semibold">Alderbegrensning</td>
                  <td className="p-4 bg-green-50 font-bold text-green-700">Ja (under 34)</td>
                  <td className="p-4">Nei</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-500 mb-6">*Du kan spare mer enn 27 500 kr, men da uten skattefradrag. Det kan fortsatt være lurt å spare videre på vanlig sparekonto.</p>

          {/* STOR TABELL */}
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 text-white">
            <h3 className="font-bold mb-4">📈 5-års vs. 10-års sparing: BSU vs. vanlig konto</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-green-400 font-bold mb-2">Med BSU (27 500 kr/år)</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between py-1 border-b border-gray-700">
                    <span className="text-gray-300">År 1:</span>
                    <span className="font-semibold">31 250 kr</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-gray-700">
                    <span className="text-gray-300">År 3:</span>
                    <span className="font-semibold">96 800 kr</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-gray-700">
                    <span className="text-gray-300">År 5:</span>
                    <span className="font-semibold">165 000 kr</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-gray-700">
                    <span className="text-gray-300">År 10:</span>
                    <span className="font-bold text-green-400">360 000 kr</span>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="text-gray-300 font-bold mb-2">Vanlig konto (27 500 kr/år, 4%)</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between py-1 border-b border-gray-700">
                    <span className="text-gray-300">År 1:</span>
                    <span className="font-semibold">28 600 kr</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-gray-700">
                    <span className="text-gray-300">År 3:</span>
                    <span className="font-semibold">87 500 kr</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-gray-700">
                    <span className="text-gray-300">År 5:</span>
                    <span className="font-semibold">148 000 kr</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-gray-700">
                    <span className="text-gray-300">År 10:</span>
                    <span className="font-bold text-amber-400">310 000 kr</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-4 p-3 bg-green-600/20 rounded-lg text-center">
              <span className="font-bold text-green-400">BSU gir deg ~50 000 kr mer etter 10 år!</span>
            </div>
          </div>
        </section>

        {/* VANLIGE FEIL */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <span>❌</span> Vanlige feil å unngå
          </h2>
          <div className="space-y-4">
            <div className="bg-red-50 rounded-xl p-5 border-l-4 border-red-500">
              <h3 className="font-bold text-red-800 mb-1">FEIL #1: Å vent for lenge med å starte</h3>
              <p className="text-gray-700 text-sm">Mange tenker "jeg har god tid" og utsetter BSU til 30-årsalderen. Da har du kun 4 år med full BSU-kvote. <strong>Start så tidlig som mulig!</strong></p>
            </div>
            <div className="bg-red-50 rounded-xl p-5 border-l-4 border-red-500">
              <h3 className="font-bold text-red-800 mb-1">FEIL #2: Å glemme at du må kjøpe bolig for å beholde fradraget</h3>
              <p className="text-gray-700 text-sm">Hvis du tar ut alle BSU-pengene uten å kjøpe bolig, må du betale tilbake skattefradraget. Planlegg boligkjøpet!</p>
            </div>
            <div className="bg-red-50 rounded-xl p-5 border-l-4 border-red-500">
              <h3 className="font-bold text-red-800 mb-1">FEIL #3: Å overføre for sent i året</h3>
              <p className="text-gray-700 text-sm">Sett inn hele beløpet tidlig i januar for å få fullt skattefradrag. Hvis du venter til desember, risikerer du å ikke få fradraget.</p>
            </div>
            <div className="bg-red-50 rounded-xl p-5 border-l-4 border-red-500">
              <h3 className="font-bold text-red-800 mb-1">FEIL #4: Å hoppe over BSU fordi renten er "lav"</h3>
              <p className="text-gray-700 text-sm">Selv med 3-4% rente + 10% skattefradrag = ~13-14% effektiv avkastning. Det er aldri "for lavt" til at BSU lønner seg.</p>
            </div>
          </div>
        </section>

        {/* BSU OG BOLIGLÅN */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <span>🏦</span> BSU og boliglån: Hvordan det henger sammen
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            BSU og boliglån henger nøye sammen. Pengene du sparer i BSU blir ikke bare en buffer — de blir <strong>direkte egenkapital</strong> når du skal kjøpe bolig.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="bg-green-50 rounded-xl p-5 text-center">
              <div className="text-4xl mb-3">💪</div>
              <h3 className="font-bold text-green-800 mb-2">Egenkapital</h3>
              <p className="text-gray-600 text-sm">BSU-penger teller som egenkapital når du søker om boliglån. Banken liker dette!</p>
            </div>
            <div className="bg-green-50 rounded-xl p-5 text-center">
              <div className="text-4xl mb-3">📉</div>
              <h3 className="font-bold text-green-800 mb-2">Lavere rente</h3>
              <p className="text-gray-600 text-sm">Mer egenkapital = lavere risiko = bedre rente på boliglånet ditt.</p>
            </div>
            <div className="bg-green-50 rounded-xl p-5 text-center">
              <div className="text-4xl mb-3">✅</div>
              <h3 className="font-bold text-green-800 mb-2">15% egenkapital</h3>
              <p className="text-gray-600 text-sm">Du trenger 15% av boligprisen i egenkapital. BSU hjelper deg dit.</p>
            </div>
          </div>

          {/* EKSEMPEL */}
          <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
            <h3 className="font-bold text-gray-900 mb-4">Eksempel: Du skal kjøpe en bolig til 3.500.000 kr</h3>
            <div className="space-y-3">
              <div className="flex justify-between py-2 border-b border-gray-100">
                <span className="text-gray-700">Boligpris</span>
                <span className="font-bold">3 500 000 kr</span>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-100">
                <span className="text-gray-700">Nødvendig egenkapital (15%)</span>
                <span className="font-bold text-green-700">525 000 kr</span>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-100">
                <span className="text-gray-700">Med BSU spart over 10 år</span>
                <span className="font-bold">360 000 kr</span>
              </div>
              <div className="flex justify-between py-2 bg-green-50 rounded-lg p-3">
                <span className="text-gray-800 font-semibold">Gjenstår å spare</span>
                <span className="font-bold text-green-800">165 000 kr</span>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-br from-green-600 to-emerald-700 rounded-2xl p-8 text-white text-center">
          <h2 className="text-2xl font-black mb-4">Klar til å ta kontroll over din økonomiske fremtid?</h2>
          <p className="text-green-100 mb-6 max-w-2xl mx-auto">
            BSU er den beste spareformen for unge i Norge. Start i dag og la staten jobbe for deg.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/verktøy/boliglanskalkulator" className="inline-block bg-white text-green-700 font-bold px-6 py-3 rounded-lg hover:bg-green-50 transition-colors">
              🧮 Boliglånskalkulator
            </Link>
            <Link href="/sparing" className="inline-block bg-green-500 text-white font-bold px-6 py-3 rounded-lg hover:bg-green-400 transition-colors border border-green-400">
              📚 Flere spareguider
            </Link>
          </div>
        </section>

        {/* VERKTØY OG RELATERTE ARTIKLER */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">📚 Relaterte artikler og verktøy</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link href="/sparing/beste-sparekonto-2026" className="block bg-white rounded-xl p-5 border border-gray-200 hover:border-green-400 transition-colors group">
              <div className="flex items-center gap-3">
                <span className="text-2xl">🏦</span>
                <div>
                  <h3 className="font-bold text-gray-900 group-hover:text-green-700">Beste sparekonto 2026</h3>
                  <p className="text-gray-500 text-sm">Sammenlign renter fra alle norske banker</p>
                </div>
              </div>
            </Link>
            <Link href="/lan/hvor-mye-boliglan-kan-jeg-fa" className="block bg-white rounded-xl p-5 border border-gray-200 hover:border-green-400 transition-colors group">
              <div className="flex items-center gap-3">
                <span className="text-2xl">🏠</span>
                <div>
                  <h3 className="font-bold text-gray-900 group-hover:text-green-700">Hvor mye boliglån kan jeg få?</h3>
                  <p className="text-gray-500 text-sm">Beregn ditt maksimale lånebeløp i 2026</p>
                </div>
              </div>
            </Link>
            <Link href="/verktøy/boliglanskalkulator" className="block bg-white rounded-xl p-5 border border-gray-200 hover:border-green-400 transition-colors group">
              <div className="flex items-center gap-3">
                <span className="text-2xl">🧮</span>
                <div>
                  <h3 className="font-bold text-gray-900 group-hover:text-green-700">Boliglånskalkulator</h3>
                  <p className="text-gray-500 text-sm">Beregn månedlig kostnad og total rentekostnad</p>
                </div>
              </div>
            </Link>
            <Link href="/budsjett/kom-i-gang-med-budsjett" className="block bg-white rounded-xl p-5 border border-gray-200 hover:border-green-400 transition-colors group">
              <div className="flex items-center gap-3">
                <span className="text-2xl">📊</span>
                <div>
                  <h3 className="font-bold text-gray-900 group-hover:text-green-700">Kom i gang med budsjett</h3>
                  <p className="text-gray-500 text-sm">Lær hvordan du budsjetterer effektivt</p>
                </div>
              </div>
            </Link>
          </div>
        </section>

        <p className="text-sm text-gray-400 pt-8 border-t">
          Sist oppdatert: 12. april 2026. Skattefradragssats og BSU-regler kan endres. Sjekk Skatteetaten for oppdaterte regler.
        </p>
      </article>
    </>
  )
}