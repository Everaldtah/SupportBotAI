import { NextRequest, NextResponse } from 'next/server'

// Stub endpoint — connect to your DB/ticketing system in production
export async function POST(req: NextRequest) {
  try {
    const { customerName, email, message } = await req.json()

    if (!customerName || !email || !message) {
      return NextResponse.json(
        { error: 'customerName, email, and message are required' },
        { status: 400 }
      )
    }

    const ticketId = `TKT-${Date.now().toString().slice(-6)}`

    return NextResponse.json({
      ticketId,
      status: 'open',
      message: 'Ticket created. Connect this endpoint to your database to persist tickets.',
    })
  } catch (error) {
    console.error('Ticket creation error:', error)
    return NextResponse.json({ error: 'Failed to create ticket' }, { status: 500 })
  }
}

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url)
  const ticketId = searchParams.get('id')

  if (!ticketId) {
    return NextResponse.json({ error: 'Ticket id is required' }, { status: 400 })
  }

  return NextResponse.json({
    ticketId,
    status: 'open',
    message: 'Connect this endpoint to your database to return real ticket data.',
  })
}
