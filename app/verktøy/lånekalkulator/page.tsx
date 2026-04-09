import type { Metadata } from 'next'
import LanekalkulatorClient from './LanekalkulatorClient'

export const metadata: Metadata = {
  title: 'Lånekalkulator — Beregn månedlig kostnad og total rente',
  description: 'Beregn nøyaktig hvor mye et forbrukslån vil koste deg. Se månedlig kostnad, total rente og effektiv rente. Helt gratis og uten registrering.',
}

export default function LanekalkulatorPage() {
  return <LanekalkulatorClient />
}
