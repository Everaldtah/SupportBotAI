import { NextRequest, NextResponse } from 'next/server'
import { generateAutoReply, analyzeTicket } from '@/lib/support-agent'

export async function POST(req: NextRequest) {
  try {
    const { message, companyName } = await req.json()

    if (!message) {
      return NextResponse.json({ error: 'message is required' }, { status: 400 })
    }

    // Analyze first to get category, then generate reply
    const analysis = await analyzeTicket(message)
    const reply = await generateAutoReply(message, analysis.category, companyName)

    return NextResponse.json({ reply, analysis })
  } catch (error) {
    console.error('Auto-reply error:', error)
    return NextResponse.json({ error: 'Failed to generate reply' }, { status: 500 })
  }
}
