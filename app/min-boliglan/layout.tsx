import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Min boliglånsrente — sammenlign med markedet',
  description: 'Registrer boliglånet lokalt i nettleseren og se hvordan renten din ligger an mot markedet. Dataene sendes ikke til Pengepraten.',
}

export default function MinBoliglanLayout({ children }: { children: React.ReactNode }) {
  return children
}
