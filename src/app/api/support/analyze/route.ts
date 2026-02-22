import { NextRequest, NextResponse } from 'next/server'
import { analyzeTicket } from '@/lib/support-agent'

export async function POST(req: NextRequest) {
  try {
    const { message } = await req.json()

    if (!message) {
      return NextResponse.json({ error: 'message is required' }, { status: 400 })
    }

    const analysis = await analyzeTicket(message)
    return NextResponse.json({ analysis })
  } catch (error) {
    console.error('Ticket analysis error:', error)
    return NextResponse.json({ error: 'Failed to analyze ticket' }, { status: 500 })
  }
}
