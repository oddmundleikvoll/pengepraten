import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Beste forbrukslån 2026 — slik finner du det billigste lånet',
  description: 'Forbrukslån kan koste deg tusenvis av kroner mer avhengig av hvem du låner fra. Vi viser deg hvordan du sikrer deg den beste renten.',
}

export default function BesteForbrukslan2026() {
  return (
    <>
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <nav className="text-primary-200 text-sm mb-4">
            <Link href="/" className="hover:text-white">Hjem</Link>
            <span className="mx-2">/</span>
            <Link href="/lan" className="hover:text-white">Lån</Link>
            <span className="mx-2">/</span>
            <span>Beste forbrukslån 2026</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-black mb-4">
            Beste forbrukslån 2026
          </h1>
          <p className="text-primary-100 text-lg">
            Slik finner du det billigste lånet. En forskjell på bare 2% i rente 
            kan spare deg for titusenvis av kroner.
          </p>
        </div>
      </section>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 py-12 article-content">
        <p className="text-xl text-gray-600 leading-relaxed mb-8">
          Å ta opp forbrukslån er ikke noe man bør gjøre på impuls. Men når behovet 
          først er der, er det viktig å velge riktig. Forskjellen mellom det dyreste 
          og billigste lånet kan lett være 50.000-100.000 kroner over lånets levetid.
        </p>

        <h2>Hva påvirker renten på forbrukslån?</h2>
        <p>
          Renten du får tilbudt avhenger av flere faktorer:
        </p>
        <ul>
          <li><strong>Din inntekt:</strong> Høyere inntekt gir vanligvis lavere rente</li>
          <li><strong>Kredittscore:</strong> God betalingshistorikk belønnes med bedre rente</li>
          <li><strong>Gjeld:</strong> Eksisterende gjeld kan øke renten</li>
          <li><strong>Lånebeløp:</strong> Større lån får ofte bedre rente</li>
          <li><strong>Løpetid:</strong> Kortere løpetid gir lavere total kostnad</li>
        </ul>

        <h2>Beste forbrukslån i Norge 2026</h2>
        <p>
          Basert på vår analyse av markedet, her er de beste alternativene:
        </p>

        <h3>Bank Norwegian</h3>
        <p>
          Bank Norwegian tilbyr konkurransedyktige renter, spesielt for kunder med 
          god økonomi. De har ingen etableringsgebyr og fleksibel nedbetaling.
        </p>
        <p>
          <strong>Styrker:</strong> Konkurransedyktig rente, ingen etableringsgebyr, 
          fleksibel nedbetaling, god digital løsning.
        </p>

        <h3>Arcadia Finans</h3>
        <p>
          Arcadia Finans er en låneformidler som sender søknaden din til flere banker. 
          Dette øker sjansen for å få beste mulig rente.
        </p>

        <h3>Axo Finans</h3>
        <p>
          Ligner Arcadia — en formidler som hjelper deg å sammenligne tilbud fra 
          flere banker samtidig. Effektivt for å finne beste rente.
        </p>

        <h3>Santander</h3>
        <p>
          Santander er en av de største aktørene på forbrukslån i Norge. De tilbyr 
          lån fra 10.000 til 350.000 kroner med konkurransedyktige betingelser.
        </p>

        <h2>Sammenligning av renter</h2>
        <div className="overflow-x-auto my-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-gray-50">
                <th className="text-left p-3 border">Bank</th>
                <th className="text-left p-3 border">Nominell rente</th>
                <th className="text-left p-3 border">Effektiv rente</th>
                <th className="text-left p-3 border">Etableringsgebyr</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-3 border font-medium">Bank Norwegian</td>
                <td className="p-3 border">7,90% - 19,90%</td>
                <td className="p-3 border">8,4% - 21,8%</td>
                <td className="p-3 border">0 kr</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="p-3 border font-medium">Santander</td>
                <td className="p-3 border">7,90% - 19,90%</td>
                <td className="p-3 border">8,4% - 21,8%</td>
                <td className="p-3 border">950 kr</td>
              </tr>
              <tr>
                <td className="p-3 border font-medium">Komplett Bank</td>
                <td className="p-3 border">8,90% - 21,90%</td>
                <td className="p-3 border">9,4% - 24,0%</td>
                <td className="p-3 border">0 kr</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-sm text-gray-500">
          Merk: Rentene er veiledende og kan endres. Din faktiske rente avhenger av 
          din økonomiske situasjon.
        </p>

        <h2>Tips for å få best rente</h2>
        <ul>
          <li><strong>Søk hos flere:</strong> Bruk låneformidlere som Arcadia eller Axo for å få flere tilbud</li>
          <li><strong>Forbedre kredittscoren:</strong> Betal regninger i tide og reduser eksisterende gjeld</li>
          <li><strong>Velg kortere løpetid:</strong> Høyere månedlig kostnad, men lavere total kostnad</li>
          <li><strong>Unngå smålån:</strong> Lån hele beløpet du trenger på én gang, ikke flere smålån</li>
          <li><strong>Vurder refinansiering:</strong> Har du dyre lån fra før? Se på refinansiering</li>
        </ul>

        <h2>Hva koster et forbrukslån egentlig?</h2>
        <p>
          La oss se på et eksempel: Du låner 150.000 kroner over 5 år.
        </p>
        <ul>
          <li>Med 8% effektiv rente: Totalt 182.000 kr (32.000 kr i renter)</li>
          <li>Med 15% effektiv rente: Totalt 214.000 kr (64.000 kr i renter)</li>
          <li>Med 20% effektiv rente: Totalt 238.000 kr (88.000 kr i renter)</li>
        </ul>
        <p>
          Forskjellen mellom beste og dårligste rente i dette eksempelet er 
          <strong>56.000 kroner</strong>. Det lønner seg å shoppe rundt!
        </p>

        <div className="bg-primary-50 rounded-xl p-6 my-8">
          <h3 className="font-bold text-norsk-dark mb-2">Vår anbefaling</h3>
          <p className="text-gray-700">
            Start med å søke via en låneformidler som <strong>Arcadia Finans</strong> eller 
            <strong>Axo Finans</strong>. De sender søknaden din til flere banker samtidig, 
            slik at du kan sammenligne tilbud og velge det beste. Husk å sjekke den effektive 
            renten — den inkluderer alle gebyrer.
          </p>
        </div>

        <p className="text-sm text-gray-500 mt-8">
          Sist oppdatert: 1. februar 2026. Rentene er veiledende og kan endres. 
          Din faktiske rente avhenger av din økonomiske situasjon. Sjekk alltid 
          bankens egne nettsider for gjeldende vilkår.
        </p>
      </article>
    </>
  )
}
