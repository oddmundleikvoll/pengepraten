import type { Metadata } from 'next'
import { Fraunces, DM_Sans, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

/**
 * Nordic Clarity type system — loaded once at the root via next/font.
 * Variables are exposed to globals.css through --font-fraunces,
 * --font-dm-sans and --font-jetbrains.
 */
const fraunces = Fraunces({
  subsets: ['latin', 'latin-ext'],
  display: 'swap',
  variable: '--font-fraunces',
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
})

const dmSans = DM_Sans({
  subsets: ['latin', 'latin-ext'],
  display: 'swap',
  variable: '--font-dm-sans',
  weight: ['400', '500', '600', '700'],
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-jetbrains',
  weight: ['400', '500', '600'],
})

export const metadata: Metadata = {
  metadataBase: new URL('https://pengepraten.no'),
  title: {
    default: 'Pengepraten — Norges beste guide til personlig økonomi',
    template: '%s | Pengepraten',
  },
  description: 'Få kontroll på økonomien din med våre gratis verktøy, guider og sammenligninger. Forbrukslånskalkulator, boliglånskalkulator, budsjettmal og tips om kredittkort, lån og sparing.',
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
    <html lang="nb" className={`${fraunces.variable} ${dmSans.variable} ${jetbrainsMono.variable}`}>
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
      <body className="min-h-screen flex flex-col bg-paper text-ink">
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}