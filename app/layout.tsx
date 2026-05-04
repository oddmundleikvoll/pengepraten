import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  metadataBase: new URL('https://pengepraten.no'),
  title: {
    default: 'Pengepraten — Norges beste guide til personlig økonomi',
    template: '%s | Pengepraten',
  },
  description: 'Få kontroll på økonomien din med våre gratis verktøy, guider og sammenligninger. Lånekalkulator, budsjettmal og tips om kredittkort, lån og sparing.',
  keywords: ['personlig økonomi', 'kredittkort', 'forbrukslån', 'sparing', 'budsjett', 'Norge'],
  authors: [{ name: 'Pengepraten' }],
  creator: 'Pengepraten',
  openGraph: {
    type: 'website',
    locale: 'nb_NO',
    url: 'https://pengepraten.no',
    siteName: 'Pengepraten',
    title: 'Pengepraten — Norges beste guide til personlig økonomi',
    description: 'Få kontroll på økonomien din med våre gratis verktøy, guider og sammenligninger.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pengepraten',
    description: 'Norges beste guide til personlig økonomi',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://pengepraten.no',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="nb">
      <head>
        <link rel="icon" href="/favicon.ico" />
        {/* Google tag (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-RHXXSHTYRH" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-RHXXSHTYRH');
            `,
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-warm-bg text-stone-900 antialiased">
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
