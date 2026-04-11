import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const { name, email, message } = await request.json()

    // Validate
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Alle felt må fylles ut' },
        { status: 400 }
      )
    }

    if (!email.includes('@')) {
      return NextResponse.json(
        { error: 'Ugyldig e-postadresse' },
        { status: 400 }
      )
    }

    const apiKey = process.env.RESEND_API_KEY

    if (!apiKey) {
      console.error('Missing RESEND_API_KEY')
      return NextResponse.json(
        { error: 'Serverkonfigurasjon feilet' },
        { status: 500 }
      )
    }

    // Send email to wntviral@gmail.com
    const emailRes = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'Pengepraten <noreply@pengepraten.no>',
        to: 'wntviral@gmail.com',
        subject: `Ny melding fra ${name} — pengepraten.no`,
        html: `
          <h2>Ny melding fra pengepraten.no</h2>
          <p><strong>Navn:</strong> ${name}</p>
          <p><strong>E-post:</strong> ${email}</p>
          <p><strong>Melding:</strong></p>
          <p>${message}</p>
        `,
        reply_to: email,
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

    return NextResponse.json({ success: true, message: 'Melding sendt! Vi svarer snart.' })
  } catch (err) {
    console.error('Contact error:', err)
    return NextResponse.json(
      { error: 'Noe gikk galt. Prøv igjen.' },
      { status: 500 }
    )
  }
}
