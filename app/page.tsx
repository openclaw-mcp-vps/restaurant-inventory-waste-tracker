export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-4 pt-20 pb-16 text-center">
        <span className="inline-block bg-[#58a6ff]/10 text-[#58a6ff] text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-6 border border-[#58a6ff]/20">
          For Restaurant Owners & Kitchen Managers
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Stop Throwing Money<br />in the Trash
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          Log food waste in seconds, predict what you need to order, and get smart menu suggestions — all from your phone.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Start Free Trial — $15/mo
        </a>
        <p className="mt-3 text-xs text-[#8b949e]">No credit card required to try. Cancel anytime.</p>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-2xl mb-2">📋</div>
            <h3 className="font-semibold text-white mb-1">Real-Time Waste Log</h3>
            <p className="text-sm text-[#8b949e]">Tap to log spoiled or unused food instantly. Track by item, category, or shift.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-2xl mb-2">📈</div>
            <h3 className="font-semibold text-white mb-1">Inventory Predictions</h3>
            <p className="text-sm text-[#8b949e]">Historical data tells you exactly what to order and when — no more over-buying.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-2xl mb-2">🍽️</div>
            <h3 className="font-semibold text-white mb-1">Menu Optimization</h3>
            <p className="text-sm text-[#8b949e]">Get automated suggestions to repurpose ingredients and increase profit margins.</p>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-4 pb-16">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff]/40 rounded-2xl p-8 text-center shadow-lg">
          <p className="text-[#58a6ff] font-semibold uppercase tracking-widest text-xs mb-3">Pro Plan</p>
          <div className="text-5xl font-bold text-white mb-1">$15</div>
          <p className="text-[#8b949e] text-sm mb-6">per month, per location</p>
          <ul className="text-sm text-[#c9d1d9] space-y-3 mb-8 text-left">
            <li className="flex items-center gap-2"><span className="text-[#58a6ff]">✓</span> Unlimited waste logging</li>
            <li className="flex items-center gap-2"><span className="text-[#58a6ff]">✓</span> Inventory prediction dashboard</li>
            <li className="flex items-center gap-2"><span className="text-[#58a6ff]">✓</span> Weekly menu optimization report</li>
            <li className="flex items-center gap-2"><span className="text-[#58a6ff]">✓</span> Mobile-first, works on any device</li>
            <li className="flex items-center gap-2"><span className="text-[#58a6ff]">✓</span> Export reports as CSV or PDF</li>
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg text-base transition-colors"
          >
            Get Started Free
          </a>
          <p className="mt-3 text-xs text-[#8b949e]">7-day free trial. No contracts.</p>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-4 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <h3 className="font-semibold text-white mb-2">Do I need special hardware or POS integration?</h3>
            <p className="text-sm text-[#8b949e]">No. It works entirely from your phone or tablet browser — no installs, no hardware, no POS required.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <h3 className="font-semibold text-white mb-2">How accurate are the inventory predictions?</h3>
            <p className="text-sm text-[#8b949e]">Predictions improve over time as you log more data. Most kitchens see meaningful accuracy within the first 2–3 weeks of use.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <h3 className="font-semibold text-white mb-2">Can I cancel anytime?</h3>
            <p className="text-sm text-[#8b949e]">Yes. Cancel from your account dashboard at any time. You keep access until the end of your billing period.</p>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#30363d] text-center py-6 text-xs text-[#8b949e]">
        © {new Date().getFullYear()} Restaurant Inventory & Waste Tracker. All rights reserved.
      </footer>
    </main>
  );
}
