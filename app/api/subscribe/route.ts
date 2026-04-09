import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json()

    // Validate email
    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { error: 'Ugyldig e-postadresse' },
        { status: 400 }
      )
    }

    const apiKey = process.env.RESEND_API_KEY
    const audienceId = process.env.RESEND_AUDIENCE_ID_PENGEPRATEN

    if (!apiKey || !audienceId) {
      console.error('Missing RESEND_API_KEY or RESEND_AUDIENCE_ID_PENGEPRATEN')
      return NextResponse.json(
        { error: 'Serverkonfigurasjon feilet' },
        { status: 500 }
      )
    }

    // Add subscriber to Resend audience
    const contactRes = await fetch(`https://api.resend.com/audiences/${audienceId}/contacts`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email }),
    })

    if (!contactRes.ok) {
      const errData = await contactRes.json()
      // Ignore if already subscribed
      if (errData.error?.includes('already')) {
        return NextResponse.json({ success: true, message: 'Allerede påmeldt!' })
      }
      console.error('Resend contact error:', errData)
      return NextResponse.json(
        { error: 'Kunne ikke legge til abonnement' },
        { status: 500 }
      )
    }

    // Read the email template
    const templatePath = `${process.cwd()}/emails/budsjettmal-velkomst.html`
    let htmlContent = ''
    try {
      htmlContent = await import('fs').then(fs => fs.readFileSync(templatePath, 'utf-8'))
    } catch {
      htmlContent = '<p>Takk for påmeldingen! Budsjettmalen er på vei til deg.</p>'
    }

    // Send welcome email
    const emailRes = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: process.env.FROM_EMAIL || 'Pengepraten <noreply@pengepraten.no>',
        to: email,
        subject: 'Her er din gratis budsjettmal! 📊',
        html: htmlContent,
      }),
    })

    if (!emailRes.ok) {
      const errData = await emailRes.json()
      console.error('Resend email error:', errData)
      return NextResponse.json(
        { error: 'Kunne ikke sende e-post' },
        { status: 500 }
      )
    }

    return NextResponse.json({ success: true, message: 'Sjekk innboksen din! Budsjettmalen er på vei.' })
  } catch (err) {
    console.error('Subscribe error:', err)
    return NextResponse.json(
      { error: 'Noe gikk galt. Prøv igjen.' },
      { status: 500 }
    )
  }
}
