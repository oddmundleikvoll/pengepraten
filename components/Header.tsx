'use client'

import Link from 'next/link'
import { useState, useRef, useEffect } from 'react'
import { Target, Menu, X, ChevronDown } from 'lucide-react'

/**
 * Nordic Clarity masthead.
 *
 * Visual goals:
 *   - Editorial feel: serif logotype, mono-style nav labels, generous
 *     whitespace. Sticky on scroll, subtle shadow when elevated.
 *   - Independent / not-a-bank: deep-forest primary CTA, warm paper bg.
 *   - Functional back-compat: same dropdowns as before (Sparing, Lån,
 *     Verktøy) so existing pages still link to the same places.
 */

const sparingDropdown = [
  { href: '/sparing', label: 'Alle sparingstips' },
  { href: '/spareutfordring', label: '52-ukers Spareutfordring', icon: Target },
]

const verktøyDropdown = [
  { href: '/verktoy', label: 'Alle verktøy' },
  { href: '/verktoy/lanekalkulator', label: 'Forbrukslånskalkulator' },
  { href: '/verktoy/boliglanskalkulator', label: 'Boliglånskalkulator' },
  { href: '/min-boliglan', label: 'Min boliglånsrente' },
]

const lanDropdown = [
  { href: '/lan', label: 'Forbrukslån' },
  { href: '/boliglan', label: 'Boliglån' },
]

const flatNav = [
  { href: '/kredittkort', label: 'Kredittkort' },
  { href: '/budsjett', label: 'Budsjett' },
  { href: '/artikler', label: 'Artikler' },
]

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [lanOpen, setLanOpen] = useState(false)
  const [sparingOpen, setSparingOpen] = useState(false)
  const [verktøyOpen, setVerktøyOpen] = useState(false)
  const [elevated, setElevated] = useState(false)
  const lanRef = useRef<HTMLDivElement>(null)
  const sparingRef = useRef<HTMLDivElement>(null)
  const verktøyRef = useRef<HTMLDivElement>(null)

  // Close dropdowns on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (lanRef.current && !lanRef.current.contains(event.target as Node)) setLanOpen(false)
      if (sparingRef.current && !sparingRef.current.contains(event.target as Node)) setSparingOpen(false)
      if (verktøyRef.current && !verktøyRef.current.contains(event.target as Node)) setVerktøyOpen(false)
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  // Add a subtle elevation when the page has scrolled
  useEffect(() => {
    function handleScroll() {
      setElevated(window.scrollY > 8)
    }
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu on route change (best-effort: close when resized to desktop)
  useEffect(() => {
    function handleResize() {
      if (window.innerWidth >= 768) setMobileOpen(false)
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 bg-paper/95 backdrop-blur-sm transition-shadow duration-200 ${
        elevated ? 'shadow-[0_1px_0_0_rgba(26,25,22,0.08)]' : ''
      }`}
      style={{ borderBottom: '1px solid var(--border)' }}
    >
      <div className="max-w-editorial mx-auto px-5 md:px-10">
        <div className="flex items-center justify-between h-20">
          {/* Logotype — serif, italic accent on "praten" */}
          <Link href="/" className="flex items-baseline gap-0 group" aria-label="Pengepraten — forside">
            <span
              className="font-display text-3xl md:text-[34px] leading-none"
              style={{ color: 'var(--fg)', letterSpacing: '-0.012em' }}
            >
              Penge
            </span>
            <span
              className="font-display italic text-3xl md:text-[34px] leading-none"
              style={{ color: 'var(--accent)', letterSpacing: '-0.012em' }}
            >
              praten
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {flatNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="font-mono text-[12px] uppercase tracking-[0.10em] transition-colors"
                style={{ color: 'var(--fg-muted)' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--fg)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--fg-muted)')}
              >
                {item.label}
              </Link>
            ))}

            {/* Sparing dropdown */}
            <div className="relative" ref={sparingRef}>
              <button
                onClick={() => setSparingOpen(!sparingOpen)}
                className="flex items-center gap-1 font-mono text-[12px] uppercase tracking-[0.10em] transition-colors"
                style={{ color: 'var(--fg-muted)' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--fg)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--fg-muted)')}
                aria-expanded={sparingOpen}
              >
                Sparing
                <ChevronDown className={`w-3 h-3 transition-transform ${sparingOpen ? 'rotate-180' : ''}`} />
              </button>
              {sparingOpen && (
                <div
                  className="absolute top-full left-0 mt-3 w-64 rounded-card py-2 z-50"
                  style={{
                    background: 'var(--surface)',
                    border: '1px solid var(--border)',
                    boxShadow: '0 8px 24px rgba(0,0,0,0.10)',
                  }}
                >
                  <div
                    className="px-4 py-2 font-mono text-[10px] uppercase tracking-[0.12em]"
                    style={{ color: 'var(--fg-muted)' }}
                  >
                    Sparing
                  </div>
                  {sparingDropdown.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setSparingOpen(false)}
                      className="flex items-center gap-2 px-4 py-2 text-sm transition-colors"
                      style={{ color: 'var(--fg)' }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = 'var(--accent-soft)'
                        e.currentTarget.style.color = 'var(--accent)'
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = 'transparent'
                        e.currentTarget.style.color = 'var(--fg)'
                      }}
                    >
                      {item.icon && <item.icon className="w-4 h-4" style={{ color: 'var(--accent)' }} />}
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
                className="flex items-center gap-1 font-mono text-[12px] uppercase tracking-[0.10em] transition-colors"
                style={{ color: 'var(--fg-muted)' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--fg)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--fg-muted)')}
                aria-expanded={lanOpen}
              >
                Lån
                <ChevronDown className={`w-3 h-3 transition-transform ${lanOpen ? 'rotate-180' : ''}`} />
              </button>
              {lanOpen && (
                <div
                  className="absolute top-full left-0 mt-3 w-48 rounded-card py-2 z-50"
                  style={{
                    background: 'var(--surface)',
                    border: '1px solid var(--border)',
                    boxShadow: '0 8px 24px rgba(0,0,0,0.10)',
                  }}
                >
                  {lanDropdown.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setLanOpen(false)}
                      className="block px-4 py-2 text-sm transition-colors"
                      style={{ color: 'var(--fg)' }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = 'var(--accent-soft)'
                        e.currentTarget.style.color = 'var(--accent)'
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = 'transparent'
                        e.currentTarget.style.color = 'var(--fg)'
                      }}
                    >
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
                className="flex items-center gap-1 font-mono text-[12px] uppercase tracking-[0.10em] transition-colors"
                style={{ color: 'var(--fg-muted)' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--fg)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--fg-muted)')}
                aria-expanded={verktøyOpen}
              >
                Verktøy
                <ChevronDown className={`w-3 h-3 transition-transform ${verktøyOpen ? 'rotate-180' : ''}`} />
              </button>
              {verktøyOpen && (
                <div
                  className="absolute top-full left-0 mt-3 w-60 rounded-card py-2 z-50"
                  style={{
                    background: 'var(--surface)',
                    border: '1px solid var(--border)',
                    boxShadow: '0 8px 24px rgba(0,0,0,0.10)',
                  }}
                >
                  <div
                    className="px-4 py-2 font-mono text-[10px] uppercase tracking-[0.12em]"
                    style={{ color: 'var(--fg-muted)' }}
                  >
                    Verktøy
                  </div>
                  {verktøyDropdown.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setVerktøyOpen(false)}
                      className="block px-4 py-2 text-sm transition-colors"
                      style={{ color: 'var(--fg)' }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = 'var(--accent-soft)'
                        e.currentTarget.style.color = 'var(--accent)'
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = 'transparent'
                        e.currentTarget.style.color = 'var(--fg)'
                      }}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-2">
            <Link
              href="/budsjett"
              className="btn-primary text-sm"
              style={{ padding: '10px 20px' }}
            >
              Last ned budsjettmal
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 transition-colors"
            style={{ color: 'var(--fg)' }}
            aria-label={mobileOpen ? 'Lukk meny' : 'Åpne meny'}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <nav
            className="md:hidden py-4 space-y-1"
            style={{ borderTop: '1px solid var(--border)' }}
          >
            <Link
              href="/budsjett"
              onClick={() => setMobileOpen(false)}
              className="btn-primary w-full justify-center mt-2 mb-4"
            >
              Last ned budsjettmal
            </Link>
            {flatNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="block py-3 font-display text-2xl transition-colors"
                style={{ color: 'var(--fg)' }}
              >
                {item.label}
              </Link>
            ))}
            <div
              className="pt-4 pb-2 font-mono text-[10px] uppercase tracking-[0.12em]"
              style={{ color: 'var(--fg-muted)' }}
            >
              Sparing
            </div>
            {sparingDropdown.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="flex items-center gap-2 py-2 text-base transition-colors"
                style={{ color: 'var(--fg)' }}
              >
                {item.icon && <item.icon className="w-4 h-4" style={{ color: 'var(--accent)' }} />}
                {item.label}
              </Link>
            ))}
            <div
              className="pt-4 pb-2 font-mono text-[10px] uppercase tracking-[0.12em]"
              style={{ color: 'var(--fg-muted)' }}
            >
              Lån
            </div>
            {lanDropdown.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="block py-2 text-base transition-colors"
                style={{ color: 'var(--fg)' }}
              >
                {item.label}
              </Link>
            ))}
            <div
              className="pt-4 pb-2 font-mono text-[10px] uppercase tracking-[0.12em]"
              style={{ color: 'var(--fg-muted)' }}
            >
              Verktøy
            </div>
            {verktøyDropdown.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="block py-2 text-base transition-colors"
                style={{ color: 'var(--fg)' }}
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
