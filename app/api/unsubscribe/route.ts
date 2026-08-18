import { createHmac, timingSafeEqual } from 'crypto'
import { NextRequest, NextResponse } from 'next/server'

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function getExpectedToken(email: string, apiKey: string) {
  const secret = process.env.UNSUBSCRIBE_SECRET || apiKey
  return createHmac('sha256', secret).update(email.toLowerCase()).digest('hex')
}

function validToken(email: string, token: string, apiKey: string) {
  const expected = getExpectedToken(email, apiKey)
  if (token.length !== expected.length) return false
  return timingSafeEqual(Buffer.from(token), Buffer.from(expected))
}

function resultPage(title: string, message: string, status = 200) {
  return new NextResponse(`<!doctype html><html lang="nb"><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${title}</title><body style="margin:0;background:#f4f1eb;font-family:Arial,sans-serif;color:#1a1916"><main style="max-width:560px;margin:12vh auto;background:#fff;border:1px solid #ded8ce;border-radius:16px;padding:36px"><p style="color:#31551f;font-size:24px;font-weight:700">Pengepraten</p><h1>${title}</h1><p style="color:#625f58;line-height:1.6">${message}</p><a href="https://pengepraten.no" style="color:#31551f">Tilbake til forsiden</a></main></body></html>`, {
    status,
    headers: { 'Content-Type': 'text/html; charset=utf-8' },
  })
}

export async function GET(request: NextRequest) {
  const email = request.nextUrl.searchParams.get('email')?.trim().toLowerCase() || ''
  const token = request.nextUrl.searchParams.get('token') || ''
  const apiKey = process.env.RESEND_API_KEY

  if (!apiKey || !emailPattern.test(email) || !validToken(email, token, apiKey)) {
    return resultPage('Ugyldig avmeldingslenke', 'Lenken er ugyldig eller har blitt endret. Prøv lenken i den siste e-posten du mottok.', 400)
  }

  const audienceIds = Array.from(new Set([
    process.env.RESEND_AUDIENCE_ID_PENGEPRATEN,
    process.env.RESEND_AUDIENCE_ID_RATE_ALERTS,
    process.env.RESEND_AUDIENCE_ID_CHALLENGE,
  ].filter(Boolean))) as string[]

  const results = await Promise.all(audienceIds.map(audienceId =>
    fetch(`https://api.resend.com/audiences/${audienceId}/contacts/${encodeURIComponent(email)}`, {
      method: 'PATCH',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ unsubscribed: true }),
    }),
  ))

  if (!results.some(result => result.ok)) {
    console.error('Could not unsubscribe contact', await Promise.all(results.map(result => result.text())))
    return resultPage('Avmelding feilet', 'Vi klarte ikke å registrere avmeldingen nå. Kontakt oss på kontakt@pengepraten.no, så ordner vi det.', 502)
  }

  return resultPage('Du er avmeldt', 'E-postadressen din er avmeldt og vil ikke motta flere utsendelser fra Pengepraten.')
}

export async function POST(request: NextRequest) {
  try {
    const { email: rawEmail } = await request.json()
    const email = typeof rawEmail === 'string' ? rawEmail.trim().toLowerCase() : ''
    const apiKey = process.env.RESEND_API_KEY

    if (!apiKey || !emailPattern.test(email)) {
      return NextResponse.json({ error: 'Ugyldig e-postadresse' }, { status: 400 })
    }

    const token = getExpectedToken(email, apiKey)
    const url = `https://pengepraten.no/api/unsubscribe?${new URLSearchParams({ email, token })}`
    const emailRes = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { Authorization: `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        from: process.env.FROM_EMAIL || 'Pengepraten <noreply@pengepraten.no>',
        to: email,
        subject: 'Bekreft avmelding fra Pengepraten',
        html: `<p>Du ba om å avslutte e-postene fra Pengepraten.</p><p><a href="${url}">Bekreft avmelding</a></p><p>Hvis du ikke ba om dette, kan du ignorere e-posten.</p>`,
      }),
    })

    if (!emailRes.ok) return NextResponse.json({ error: 'Kunne ikke sende bekreftelsen' }, { status: 502 })
    return NextResponse.json({ success: true })
  } catch {
    return NextResponse.json({ error: 'Noe gikk galt. Prøv igjen.' }, { status: 500 })
  }
}
