'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState, useRef, useEffect } from 'react'

const navItems = [
  { href: '/kredittkort', label: 'Kredittkort' },
  { href: '/budsjett', label: 'Budsjett' },
]

const sparingDropdown = [
  { href: '/sparing', label: 'Alle sparingstips' },
  { href: '/spareutfordring', label: '🎯 52-ukers Spareutfordring' },
]

const verktøyDropdown = [
  { href: '/verktøy', label: 'Alle verktøy' },
  { href: '/verktøy/lånekalkulator', label: 'Forbrukslånskalkulator' },
  { href: '/verktøy/boliglånskalkulator', label: 'Boliglånskalkulator' },
  { href: '/min-boliglån', label: 'Min boliglånsrente' },
]

const lanDropdown = [
  { href: '/lan', label: 'Forbrukslån' },
  { href: '/boliglan', label: 'Boliglån' },
]

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [lanOpen, setLanOpen] = useState(false)
  const [sparingOpen, setSparingOpen] = useState(false)
  const [verktøyOpen, setVerktøyOpen] = useState(false)
  const lanRef = useRef<HTMLDivElement>(null)
  const sparingRef = useRef<HTMLDivElement>(null)
  const verktøyRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (lanRef.current && !lanRef.current.contains(event.target as Node)) {
        setLanOpen(false)
      }
      if (sparingRef.current && !sparingRef.current.contains(event.target as Node)) {
        setSparingOpen(false)
      }
      if (verktøyRef.current && !verktøyRef.current.contains(event.target as Node)) {
        setVerktøyOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <header className="bg-white sticky top-0 z-50 border-b border-gray-100 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <Image src="/logo.png" alt="Pengepraten" width={380} height={128} className="h-12 md:h-16 w-auto" />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-3 py-2 text-sm font-medium text-gray-600 hover:text-primary-600 hover:bg-primary-50 rounded-lg transition-all"
              >
                {item.label}
              </Link>
            ))}

            {/* Sparing dropdown */}
            <div className="relative" ref={sparingRef}>
              <button
                onClick={() => setSparingOpen(!sparingOpen)}
                className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-gray-600 hover:text-primary-600 hover:bg-primary-50 rounded-lg transition-all"
              >
                Sparing
                <svg className={`w-4 h-4 transition-transform ${sparingOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {sparingOpen && (
                <div className="absolute top-full left-0 mt-1 w-64 bg-white rounded-lg shadow-lg border border-gray-100 py-2 z-50">
                  <div className="px-4 py-2 text-xs font-semibold text-gray-400 uppercase tracking-wide">Sparing</div>
                  {sparingDropdown.map((item) => (
                    <Link key={item.href} href={item.href} onClick={() => setSparingOpen(false)}
                      className="block px-4 py-2 text-sm font-medium text-gray-600 hover:text-primary-600 hover:bg-primary-50 transition-all">
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Lån dropdown */}
            <div className="relative" ref={lanRef}>
              <button
                onClick={() => setLanOpen(!lanOpen)}
                className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-gray-600 hover:text-primary-600 hover:bg-primary-50 rounded-lg transition-all"
              >
                Lån
                <svg className={`w-4 h-4 transition-transform ${lanOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {lanOpen && (
                <div className="absolute top-full left-0 mt-1 w-48 bg-white rounded-lg shadow-lg border border-gray-100 py-2 z-50">
                  {lanDropdown.map((item) => (
                    <Link key={item.href} href={item.href} onClick={() => setLanOpen(false)}
                      className="block px-4 py-2 text-sm font-medium text-gray-600 hover:text-primary-600 hover:bg-primary-50 transition-all">
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Verktøy dropdown */}
            <div className="relative" ref={verktøyRef}>
              <button
                onClick={() => setVerktøyOpen(!verktøyOpen)}
                className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-gray-600 hover:text-primary-600 hover:bg-primary-50 rounded-lg transition-all"
              >
                Verktøy
                <svg className={`w-4 h-4 transition-transform ${verktøyOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {verktøyOpen && (
                <div className="absolute top-full left-0 mt-1 w-56 bg-white rounded-lg shadow-lg border border-gray-100 py-2 z-50">
                  <div className="px-4 py-2 text-xs font-semibold text-gray-400 uppercase tracking-wide">Verktøy</div>
                  {verktøyDropdown.map((item) => (
                    <Link key={item.href} href={item.href} onClick={() => setVerktøyOpen(false)}
                      className="block px-4 py-2 text-sm font-medium text-gray-600 hover:text-primary-600 hover:bg-primary-50 transition-all">
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 text-gray-600 hover:text-primary-600"
            aria-label={mobileOpen ? 'Lukk meny' : 'Åpne meny'}
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <nav className="md:hidden border-t border-gray-100 py-3 space-y-1">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} onClick={() => setMobileOpen(false)}
                className="block px-3 py-3 text-base font-medium text-gray-700 hover:text-primary-600 hover:bg-primary-50 rounded-lg transition-all">
                {item.label}
              </Link>
            ))}
            <div className="px-3 py-2 text-xs font-semibold text-gray-400 uppercase tracking-wide">Sparing</div>
            {sparingDropdown.map((item) => (
              <Link key={item.href} href={item.href} onClick={() => setMobileOpen(false)}
                className="block px-6 py-3 text-base font-medium text-gray-700 hover:text-primary-600 hover:bg-primary-50 rounded-lg transition-all">
                {item.label}
              </Link>
            ))}
            <div className="px-3 py-2 text-xs font-semibold text-gray-400 uppercase tracking-wide">Lån</div>
            {lanDropdown.map((item) => (
              <Link key={item.href} href={item.href} onClick={() => setMobileOpen(false)}
                className="block px-6 py-3 text-base font-medium text-gray-700 hover:text-primary-600 hover:bg-primary-50 rounded-lg transition-all">
                {item.label}
              </Link>
            ))}
            <div className="px-3 py-2 text-xs font-semibold text-gray-400 uppercase tracking-wide">Verktøy</div>
            {verktøyDropdown.map((item) => (
              <Link key={item.href} href={item.href} onClick={() => setMobileOpen(false)}
                className="block px-6 py-3 text-base font-medium text-gray-700 hover:text-primary-600 hover:bg-primary-50 rounded-lg transition-all">
                {item.label}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  )
}
