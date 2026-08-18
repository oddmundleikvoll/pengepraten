'use client'

import { useEffect, useState } from 'react'
import { trackEvent } from '@/lib/analytics'

const CONSENT_KEY = 'pengepraten_analytics_consent'

export default function AnalyticsEvents() {
  const [showConsent, setShowConsent] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem(CONSENT_KEY)
    if (!consent) setShowConsent(true)
    if (consent === 'granted') {
      window.gtag?.('consent', 'update', { analytics_storage: 'granted' })
    }

    const startedTools = new Set<string>()

    function handleInteraction(event: Event) {
      const target = event.target
      if (!(target instanceof Element)) return
      const tool = target.closest<HTMLElement>('[data-tool-name]')?.dataset.toolName
      if (tool && !startedTools.has(tool)) {
        startedTools.add(tool)
        trackEvent('tool_start', { tool_name: tool })
      }
    }

    function handleClick(event: MouseEvent) {
      const target = event.target
      if (!(target instanceof Element)) return

      const tracked = target.closest<HTMLElement>('[data-analytics-event]')
      if (tracked?.dataset.analyticsEvent) {
        trackEvent(tracked.dataset.analyticsEvent, {
          content_name: tracked.dataset.analyticsLabel || tracked.textContent?.trim().slice(0, 80),
        })
      }

      const link = target.closest<HTMLAnchorElement>('a[href]')
      if (!link) return
      const url = new URL(link.href, window.location.href)
      if (url.hostname !== window.location.hostname) {
        trackEvent('outbound_click', { link_url: url.toString(), link_domain: url.hostname })
      }
    }

    document.addEventListener('input', handleInteraction, true)
    document.addEventListener('click', handleClick, true)
    return () => {
      document.removeEventListener('input', handleInteraction, true)
      document.removeEventListener('click', handleClick, true)
    }
  }, [])

  function updateConsent(value: 'granted' | 'denied') {
    localStorage.setItem(CONSENT_KEY, value)
    window.gtag?.('consent', 'update', { analytics_storage: value })
    if (value === 'granted') trackEvent('analytics_consent_granted')
    setShowConsent(false)
  }

  if (!showConsent) return null

  return (
    <div className="fixed bottom-4 left-4 right-4 z-[100] mx-auto max-w-2xl rounded-xl border border-border bg-paper-surface p-4 shadow-xl sm:flex sm:items-center sm:gap-5">
      <p className="text-sm text-ink-muted leading-relaxed flex-1">
        Vi bruker anonymisert analyse for å se hvilke guider og verktøy som faktisk er nyttige.
      </p>
      <div className="flex gap-2 mt-3 sm:mt-0 shrink-0">
        <button onClick={() => updateConsent('denied')} className="px-4 py-2 text-sm font-semibold text-ink border border-border rounded-lg hover:bg-paper-alt">
          Nei takk
        </button>
        <button onClick={() => updateConsent('granted')} className="px-4 py-2 text-sm font-semibold text-paper bg-forest rounded-lg hover:bg-forest-mid">
          Tillat analyse
        </button>
      </div>
    </div>
  )
}
