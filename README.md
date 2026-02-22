# SupportBot AI

AI-powered customer support automation built with Next.js 14. Handle tickets, generate instant replies, analyze sentiment, and route issues to the right team — automatically.

## Features

- **Auto-Reply** — AI generates instant, empathetic responses to common customer questions
- **Smart Routing** — Automatically routes tickets to Billing, Tech Support, Refunds, or Account Management
- **Sentiment Analysis** — Detect tone (positive, neutral, negative, urgent) and set priority
- **24/7 Coverage** — Never miss a customer query, even outside business hours
- **Human Escalation** — AI flags complex issues that need a human agent

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: lucide-react
- **AI**: OpenAI GPT-4

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Set up environment variables

```bash
cp .env.example .env.local
```

Add your keys to `.env.local`:

```env
OPENAI_API_KEY=your_openai_api_key
```

### 3. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Build for production

```bash
npm run build
npm start
```

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| `POST` | `/api/support/analyze` | Analyze ticket: category, sentiment, priority |
| `POST` | `/api/support/reply` | Generate AI auto-reply for a customer message |
| `POST` | `/api/support/route-ticket` | Route ticket to the correct support team |
| `POST` | `/api/support/ticket` | Create a new support ticket |
| `GET`  | `/api/support/ticket?id=` | Get ticket status by ID |

### Example: Analyze a Ticket

```bash
curl -X POST http://localhost:3000/api/support/analyze \
  -H "Content-Type: application/json" \
  -d '{ "message": "I was charged twice for my subscription last month!" }'
```

**Response:**
```json
{
  "analysis": {
    "category": "billing",
    "sentiment": "negative",
    "priority": "high",
    "suggestedTeam": "Billing Team",
    "summary": "Customer reports a duplicate charge on their subscription.",
    "resolutionTime": "2-4 hours"
  }
}
```

### Example: Generate Auto-Reply

```bash
curl -X POST http://localhost:3000/api/support/reply \
  -H "Content-Type: application/json" \
  -d '{ "message": "How do I reset my password?", "companyName": "Acme Corp" }'
```

### Example: Route a Ticket

```bash
curl -X POST http://localhost:3000/api/support/route-ticket \
  -H "Content-Type: application/json" \
  -d '{ "message": "My dashboard keeps crashing on Chrome." }'
```

## Project Structure

```
supportbot-ai/
├── src/
│   ├── app/
│   │   ├── page.tsx                          # Landing page
│   │   ├── layout.tsx                        # Root layout
│   │   ├── globals.css                       # Global styles
│   │   └── api/support/
│   │       ├── analyze/route.ts              # Ticket analysis
│   │       ├── reply/route.ts                # Auto-reply generation
│   │       ├── route-ticket/route.ts         # Smart ticket routing
│   │       └── ticket/route.ts               # Ticket create/status
│   └── lib/
│       └── support-agent.ts                  # Core OpenAI logic
├── public/
├── .env.example
├── package.json
├── next.config.js
├── tailwind.config.js
└── tsconfig.json
```

## Pricing Plans

| Plan | Price | Tickets/mo |
|------|-------|------------|
| Starter | $49/mo | 1,000 |
| Pro | $99/mo | 5,000 |
| Enterprise | $199/mo | Unlimited |

## Part of TheClawVault

This project is part of the [TheClawVault](https://theclawvault.com) AI skills marketplace.

---

Built with ❤️ for businesses that never want to miss a customer.
