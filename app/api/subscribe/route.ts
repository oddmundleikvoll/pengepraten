import { createHmac } from 'crypto'
import { readFile } from 'fs/promises'
import { join } from 'path'
import { NextRequest, NextResponse } from 'next/server'

type SubscriptionKind = 'budget' | 'rates' | 'challenge'

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function getAudienceId(kind: SubscriptionKind) {
  if (kind === 'rates') {
    return process.env.RESEND_AUDIENCE_ID_RATE_ALERTS || process.env.RESEND_AUDIENCE_ID_PENGEPRATEN
  }
  if (kind === 'challenge') {
    return process.env.RESEND_AUDIENCE_ID_CHALLENGE || process.env.RESEND_AUDIENCE_ID_PENGEPRATEN
  }
  return process.env.RESEND_AUDIENCE_ID_PENGEPRATEN
}

function createUnsubscribeUrl(email: string, apiKey: string) {
  const secret = process.env.UNSUBSCRIBE_SECRET || apiKey
  const token = createHmac('sha256', secret).update(email.toLowerCase()).digest('hex')
  const params = new URLSearchParams({ email, token })
  return `https://pengepraten.no/api/unsubscribe?${params.toString()}`
}

function emailShell(title: string, intro: string, ctaLabel: string, ctaUrl: string, unsubscribeUrl: string) {
  return `<!doctype html>
<html lang="nb">
  <body style="margin:0;background:#f4f1eb;font-family:Arial,sans-serif;color:#1a1916">
    <table width="100%" cellpadding="0" cellspacing="0" role="presentation">
      <tr><td align="center" style="padding:32px 16px">
        <table width="100%" cellpadding="0" cellspacing="0" role="presentation" style="max-width:600px;background:#fff;border:1px solid #ded8ce;border-radius:16px">
          <tr><td style="padding:36px">
            <p style="margin:0 0 20px;color:#31551f;font-size:24px;font-weight:700">Pengepraten</p>
            <h1 style="margin:0 0 16px;font-size:28px;line-height:1.2">${title}</h1>
            <p style="margin:0 0 28px;color:#625f58;font-size:16px;line-height:1.65">${intro}</p>
            <a href="${ctaUrl}" style="display:inline-block;background:#31551f;color:#fff;text-decoration:none;font-weight:700;padding:14px 22px;border-radius:8px">${ctaLabel}</a>
          </td></tr>
          <tr><td style="padding:20px 36px;background:#f4f1eb;color:#7a766e;font-size:12px;line-height:1.5">
            Du mottar denne e-posten fordi du meldte deg på Pengepraten.<br>
            <a href="${unsubscribeUrl}" style="color:#31551f">Avslutt abonnement</a>
          </td></tr>
        </table>
      </td></tr>
    </table>
  </body>
</html>`
}

async function getEmailContent(kind: SubscriptionKind, unsubscribeUrl: string) {
  if (kind === 'budget') {
    const templatePath = join(process.cwd(), 'emails', 'budsjettmal-velkomst.html')
    const template = await readFile(templatePath, 'utf-8')
    return {
      subject: 'Her er din gratis budsjettmal',
      html: template.replaceAll('https://pengepraten.no/avslutt', unsubscribeUrl),
      message: 'Sjekk innboksen din! Budsjettmalen er på vei.',
    }
  }

  if (kind === 'challenge') {
    return {
      subject: 'Her er ukeplanen til 52-ukersutfordringen',
      html: emailShell(
        'Ukeplanen din er klar',
        'Her får du hele planen med beløp og akkumulert sparing for alle 52 ukene. Fortsett gjerne å krysse av ukene på Pengepraten - fremgangen lagres i nettleseren din.',
        'Last ned utskriftsvennlig ukeplan',
        'https://pengepraten.no/api/challenge-plan',
        unsubscribeUrl,
      ),
      message: 'Sjekk innboksen din! Ukeplanen er på vei.',
    }
  }

  return {
    subject: 'Du er påmeldt Pengepratens rentevarsling',
    html: emailShell(
      'Du er påmeldt rentevarsling',
      'Vi gir deg beskjed når oversikten over høyrentekontoer oppdateres eller rentene endrer seg vesentlig. I mellomtiden kan du se hvilke banker som ligger øverst akkurat nå.',
      'Se oppdaterte sparerenter',
      'https://pengepraten.no/sparing/hoyrentekonto',
      unsubscribeUrl,
    ),
    message: 'Sjekk innboksen din! Du er påmeldt rentevarslingen.',
  }
}

export async function POST(request: NextRequest) {
  try {
    const payload = await request.json()
    const email = typeof payload.email === 'string' ? payload.email.trim().toLowerCase() : ''
    const kind: SubscriptionKind = ['budget', 'rates', 'challenge'].includes(payload.kind)
      ? payload.kind
      : 'budget'

    if (!emailPattern.test(email)) {
      return NextResponse.json({ error: 'Ugyldig e-postadresse' }, { status: 400 })
    }

    const apiKey = process.env.RESEND_API_KEY
    const audienceId = getAudienceId(kind)

    if (!apiKey || !audienceId) {
      console.error('Missing Resend configuration')
      return NextResponse.json({ error: 'Serverkonfigurasjon feilet' }, { status: 500 })
    }

    const contactRes = await fetch(`https://api.resend.com/audiences/${audienceId}/contacts`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, unsubscribed: false }),
    })

    if (!contactRes.ok) {
      const errorText = await contactRes.text()
      if (errorText.toLowerCase().includes('already')) {
        const resubscribeRes = await fetch(
          `https://api.resend.com/audiences/${audienceId}/contacts/${encodeURIComponent(email)}`,
          {
            method: 'PATCH',
            headers: {
              Authorization: `Bearer ${apiKey}`,
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ unsubscribed: false }),
          },
        )
        if (!resubscribeRes.ok) {
          console.error('Resend resubscribe error:', await resubscribeRes.text())
          return NextResponse.json({ error: 'Kunne ikke aktivere abonnementet' }, { status: 502 })
        }
      } else {
        console.error('Resend contact error:', errorText)
        return NextResponse.json({ error: 'Kunne ikke registrere abonnementet' }, { status: 502 })
      }
    }

    const unsubscribeUrl = createUnsubscribeUrl(email, apiKey)
    const content = await getEmailContent(kind, unsubscribeUrl)
    const emailRes = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: process.env.FROM_EMAIL || 'Pengepraten <noreply@pengepraten.no>',
        to: email,
        subject: content.subject,
        html: content.html,
        headers: {
          'List-Unsubscribe': `<${unsubscribeUrl}>`,
        },
      }),
    })

    if (!emailRes.ok) {
      console.error('Resend email error:', await emailRes.text())
      return NextResponse.json({ error: 'Kunne ikke sende e-post' }, { status: 502 })
    }

    return NextResponse.json({ success: true, message: content.message })
  } catch (error) {
    console.error('Subscribe error:', error)
    return NextResponse.json({ error: 'Noe gikk galt. Prøv igjen.' }, { status: 500 })
  }
}
