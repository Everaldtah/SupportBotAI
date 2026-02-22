import { NextRequest, NextResponse } from 'next/server'
import { routeTicket, analyzeTicket } from '@/lib/support-agent'

export async function POST(req: NextRequest) {
  try {
    const { message } = await req.json()

    if (!message) {
      return NextResponse.json({ error: 'message is required' }, { status: 400 })
    }

    const analysis = await analyzeTicket(message)
    const routing = await routeTicket(message, analysis.category)

    return NextResponse.json({ routing, category: analysis.category, priority: analysis.priority })
  } catch (error) {
    console.error('Ticket routing error:', error)
    return NextResponse.json({ error: 'Failed to route ticket' }, { status: 500 })
  }
}
