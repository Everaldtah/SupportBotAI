import OpenAI from 'openai'

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY })

export type TicketCategory = 'billing' | 'technical' | 'general' | 'refund' | 'account'
export type SentimentScore = 'positive' | 'neutral' | 'negative' | 'urgent'

export interface SupportTicket {
  id: string
  customerMessage: string
  category: TicketCategory
  sentiment: SentimentScore
  priority: 'low' | 'medium' | 'high'
  suggestedTeam: string
}

export interface TicketAnalysis {
  category: TicketCategory
  sentiment: SentimentScore
  priority: 'low' | 'medium' | 'high'
  suggestedTeam: string
  summary: string
  resolutionTime: string
}

export interface AutoReply {
  subject: string
  body: string
  requiresHuman: boolean
}

export async function analyzeTicket(customerMessage: string): Promise<TicketAnalysis> {
  const prompt = `Analyze this customer support message and return valid JSON only.

Message: "${customerMessage}"

Return this exact JSON structure:
{
  "category": "billing|technical|general|refund|account",
  "sentiment": "positive|neutral|negative|urgent",
  "priority": "low|medium|high",
  "suggestedTeam": "Billing Team|Tech Support|Customer Success|Refunds Team|Account Management",
  "summary": "one sentence summary of the issue",
  "resolutionTime": "estimated resolution e.g. 2-4 hours"
}`

  const completion = await openai.chat.completions.create({
    model: 'gpt-4',
    messages: [{ role: 'user', content: prompt }],
    max_tokens: 300,
    response_format: { type: 'json_object' },
  })

  const raw = completion.choices[0]?.message?.content ?? '{}'
  return JSON.parse(raw) as TicketAnalysis
}

export async function generateAutoReply(
  customerMessage: string,
  category: TicketCategory,
  companyName: string = 'SupportBot AI'
): Promise<AutoReply> {
  const prompt = `You are a friendly customer support agent for ${companyName}.

Customer message (category: ${category}): "${customerMessage}"

Write a helpful, empathetic reply. Return valid JSON only:
{
  "subject": "Re: [brief subject]",
  "body": "the reply body (under 120 words, warm and professional)",
  "requiresHuman": true/false (true if issue needs human escalation)
}`

  const completion = await openai.chat.completions.create({
    model: 'gpt-4',
    messages: [{ role: 'user', content: prompt }],
    max_tokens: 400,
    response_format: { type: 'json_object' },
  })

  const raw = completion.choices[0]?.message?.content ?? '{}'
  return JSON.parse(raw) as AutoReply
}

export async function routeTicket(
  customerMessage: string,
  category: TicketCategory
): Promise<{ team: string; reason: string; escalate: boolean }> {
  const routingMap: Record<TicketCategory, string> = {
    billing: 'Billing Team',
    technical: 'Tech Support',
    general: 'Customer Success',
    refund: 'Refunds Team',
    account: 'Account Management',
  }

  const team = routingMap[category]

  const prompt = `A customer support ticket has been categorized as "${category}".
Message: "${customerMessage}"

Should this be escalated to a senior agent? Return JSON only:
{
  "team": "${team}",
  "reason": "one sentence explaining why it was routed here",
  "escalate": true/false
}`

  const completion = await openai.chat.completions.create({
    model: 'gpt-4',
    messages: [{ role: 'user', content: prompt }],
    max_tokens: 150,
    response_format: { type: 'json_object' },
  })

  const raw = completion.choices[0]?.message?.content ?? '{}'
  return JSON.parse(raw) as { team: string; reason: string; escalate: boolean }
}
