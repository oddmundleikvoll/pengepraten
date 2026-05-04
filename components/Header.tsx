'use client'

import Link from 'next/link'
import { useState } from 'react'

const navItems = [
  { href: '/kredittkort', label: 'Kredittkort' },
  { href: '/lan', label: 'Lån' },
  { href: '/sparing', label: 'Sparing' },
  { href: '/budsjett', label: 'Budsjett' },
  { href: '/verktøy', label: 'Verktøy' },
]

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-warm-surface/80 backdrop-blur-xl border-b border-warm-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-14 md:h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group focus-ring rounded-lg">
            <div className="w-8 h-8 bg-teal-800 rounded-lg flex items-center justify-center shadow-soft">
              <span className="text-white font-bold text-sm tracking-tight">P</span>
            </div>
            <span className="font-semibold text-lg text-stone-900 group-hover:text-teal-800 transition-colors tracking-tight">
              Pengepraten
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-0.5">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-3 py-2 text-sm font-medium text-stone-500 hover:text-stone-900 hover:bg-stone-100/80 rounded-lg transition-all focus-ring"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 text-stone-500 hover:text-stone-900 rounded-lg hover:bg-stone-100/80 transition-colors focus-ring"
            aria-label={mobileOpen ? 'Lukk meny' : 'Åpne meny'}
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <nav className="md:hidden border-t border-warm-border py-3 space-y-0.5 pb-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="block px-3 py-2.5 text-base font-medium text-stone-600 hover:text-stone-900 hover:bg-stone-100/80 rounded-lg transition-all focus-ring"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  )
}
