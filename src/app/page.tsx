import { MessageSquare, Zap, BarChart, Shield, ArrowRight, CheckCircle } from 'lucide-react'

export default function Home() {
  const features = [
    { icon: MessageSquare, title: 'Auto-Reply', desc: 'Instant responses to common questions' },
    { icon: Zap, title: 'Smart Routing', desc: 'Route tickets to the right team' },
    { icon: BarChart, title: 'Analytics', desc: 'Track sentiment and resolution time' },
    { icon: Shield, title: '24/7 Support', desc: 'Never miss a customer query' },
  ]

  const pricing = [
    { name: 'Starter', price: '$49', features: ['1,000 tickets/mo', 'Email support', 'Basic analytics'] },
    { name: 'Pro', price: '$99', features: ['5,000 tickets/mo', 'Priority support', 'Advanced analytics', 'Custom training'] },
    { name: 'Enterprise', price: '$199', features: ['Unlimited tickets', 'Dedicated support', 'Custom integrations', 'SLA guarantee'] },
  ]

  return (
    <main className="min-h-screen">
      {/* Header */}
      <nav className="fixed top-0 w-full bg-slate-900/80 backdrop-blur-md z-50 border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <MessageSquare className="w-8 h-8 text-purple-400" />
            <span className="text-xl font-bold">SupportBot AI</span>
          </div>
          <div className="flex items-center gap-6">
            <a href="#pricing" className="text-gray-400 hover:text-white">Pricing</a>
            <a href="#features" className="text-gray-400 hover:text-white">Features</a>
            <button className="bg-purple-600 hover:bg-purple-500 px-4 py-2 rounded-lg font-medium">
              Get Started
            </button>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block px-4 py-1 bg-purple-500/20 rounded-full text-purple-400 text-sm mb-6">
            ✨ AI-Powered Support
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Automate Your <span className="text-purple-400">Customer Support</span>
          </h1>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            SupportBot AI handles common questions, routes tickets, and analyzes sentiment.
            Your team focuses on what matters.
          </p>
          <div className="flex gap-4 justify-center">
            <button className="bg-purple-600 hover:bg-purple-500 px-8 py-4 rounded-xl font-medium flex items-center gap-2">
              Start Free Trial <ArrowRight className="w-5 h-5" />
            </button>
            <button className="border border-white/20 hover:bg-white/5 px-8 py-4 rounded-xl font-medium">
              Watch Demo
            </button>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-20 px-6 bg-black/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Why SupportBot AI?</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {features.map((f, i) => (
              <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-purple-500/50 transition-colors">
                <f.icon className="w-10 h-10 text-purple-400 mb-4" />
                <h3 className="text-lg font-semibold mb-2">{f.title}</h3>
                <p className="text-gray-400 text-sm">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-4xl font-bold text-purple-400 mb-2">85%</div>
            <div className="text-gray-400">Tickets Automated</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-purple-400 mb-2">2min</div>
            <div className="text-gray-400">Avg Response Time</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-purple-400 mb-2">500+</div>
            <div className="text-gray-400">Happy Customers</div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20 px-6 bg-black/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">Simple Pricing</h2>
          <p className="text-gray-400 text-center mb-12">Start free, scale as you grow</p>
          <div className="grid md:grid-cols-3 gap-6">
            {pricing.map((plan, i) => (
              <div key={i} className={`rounded-2xl p-8 ${i === 1 ? 'bg-purple-600/20 border-2 border-purple-500' : 'bg-white/5 border border-white/10'}`}>
                <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
                <div className="text-4xl font-bold mb-6">{plan.price}<span className="text-lg text-gray-400">/mo</span></div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((f, j) => (
                    <li key={j} className="flex items-center gap-2 text-gray-300">
                      <CheckCircle className="w-5 h-5 text-purple-400" /> {f}
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 rounded-lg font-medium ${i === 1 ? 'bg-purple-600 hover:bg-purple-500' : 'border border-white/20 hover:bg-white/5'}`}>
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-white/10">
        <div className="max-w-6xl mx-auto text-center text-gray-400">
          <p>© 2026 SupportBot AI. Built for TheClawVault.</p>
        </div>
      </footer>
    </main>
  )
}
