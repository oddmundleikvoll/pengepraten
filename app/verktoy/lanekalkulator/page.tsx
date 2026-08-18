import type { Metadata } from 'next'
import LanekalkulatorClient from './LanekalkulatorClient'

export const metadata: Metadata = {
  title: 'Forbrukslånskalkulator — beregn kostnad og renter',
  description: 'Beregn nøyaktig hvor mye et forbrukslån vil koste deg. Se månedlig kostnad, total rente og effektiv rente. Helt gratis og uten registrering.',
}

export default function LanekalkulatorPage() {
  return <LanekalkulatorClient />
}
