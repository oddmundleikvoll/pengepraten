/* eslint-disable @next/next/next-script-for-ga -- custom inline initialization keeps Consent Mode denied before GA config */
import type { Metadata } from 'next'
import { Fraunces, DM_Sans, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import AnalyticsEvents from '@/components/AnalyticsEvents'

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
    default: 'Pengepraten — norsk guide til personlig økonomi',
    template: '%s | Pengepraten',
  },
  description: 'Få kontroll på økonomien din med våre gratis verktøy, guider og sammenligninger. Forbrukslånskalkulator, boliglånskalkulator, budsjettmal og tips om kredittkort, lån og sparing.',
  keywords: ['personlig økonomi', 'kredittkort', 'forbrukslån', 'sparing', 'budsjett', 'Norge'],
  authors: [{ name: 'Pengepraten' }],
  creator: 'Pengepraten',
  openGraph: {
    type: 'website',
    locale: 'nb_NO',
    siteName: 'Pengepraten',
    title: 'Pengepraten — norsk guide til personlig økonomi',
    description: 'Få kontroll på økonomien din med våre gratis verktøy, guider og sammenligninger.',
    images: [
      {
        url: '/hero-control.png',
        width: 1200,
        height: 630,
        alt: 'Pengepraten — få kontroll på økonomien din',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pengepraten',
    description: 'Norsk guide til personlig økonomi',
    images: ['/hero-control.png'],
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
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="nb" className={`${fraunces.variable} ${dmSans.variable} ${jetbrainsMono.variable}`}>
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        {/* Google tag (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-RHXXSHTYRH" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('consent', 'default', {
                analytics_storage: 'denied',
                ad_storage: 'denied',
                ad_user_data: 'denied',
                ad_personalization: 'denied'
              });
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
        <AnalyticsEvents />
      </body>
    </html>
  )
}
