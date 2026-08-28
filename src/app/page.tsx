import SearchTool from '@/components/SearchTool'
import { ShieldCheck, Search, AlertTriangle, CheckCircle, Clock, Database } from 'lucide-react'

export default function Home() {
  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'AutoRecallCheck',
    url: 'https://autorecallcheck.com/',
    description: 'Free car recall and safety check tool powered by official NHTSA government data. Search by VIN or make/model.',
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://autorecallcheck.com/?q={search_term_string}',
      'query-input': 'required name=search_term_string',
    },
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />

      {/* Hero */}
      <section className="bg-gradient-to-br from-brand-700 via-brand-600 to-brand-800 text-white py-14 px-4">
        <div className="max-w-4xl mx-auto text-center mb-10">
          <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-4 py-1.5 text-sm font-medium mb-4">
            <ShieldCheck className="w-4 h-4" /> Powered by Official NHTSA Government Data
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight">
            Free Car Recall &amp; Safety Check
          </h1>
          <p className="text-lg text-red-100 max-w-2xl mx-auto">
            Search official NHTSA recall data for any vehicle. Enter your VIN or select year, make, and model — get results in seconds.
          </p>
        </div>

        {/* Search Tool */}
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl p-6 md:p-8">
          <SearchTool />
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-white border-b border-gray-100 py-5 px-4">
        <div className="max-w-5xl mx-auto flex flex-wrap justify-center gap-8 text-sm text-gray-500 font-medium">
          <div className="flex items-center gap-2"><Database className="w-4 h-4 text-brand-600" /> 50M+ Recall Records</div>
          <div className="flex items-center gap-2"><Clock className="w-4 h-4 text-brand-600" /> Updated Daily</div>
          <div className="flex items-center gap-2"><ShieldCheck className="w-4 h-4 text-brand-600" /> Official NHTSA Data</div>
          <div className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-brand-600" /> 100% Free</div>
          <div className="flex items-center gap-2"><Search className="w-4 h-4 text-brand-600" /> VIN + Make/Model Search</div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-14 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-3">How AutoRecallCheck Works</h2>
          <p className="text-center text-gray-500 mb-10 max-w-xl mx-auto">We pull directly from the NHTSA federal database — the same source automakers and dealers use.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: Search, title: '1. Enter Your Vehicle', desc: 'Type your 17-digit VIN or choose the year, make, and model from our dropdowns.' },
              { icon: Database, title: '2. We Check NHTSA', desc: 'Your query instantly searches the official federal recall and complaint database.' },
              { icon: ShieldCheck, title: '3. See Clear Results', desc: 'Get a plain-English summary of any recalls — what\'s affected, the risk, and what to do.' },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="card p-6 text-center hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-brand-50 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-6 h-6 text-brand-600" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{title}</h3>
                <p className="text-sm text-gray-500">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What This Means — Original Value Layer */}
      <section className="bg-gray-50 py-14 px-4 border-y border-gray-200">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">What Do Car Recalls Actually Mean?</h2>
          <p className="text-gray-500 mb-8 max-w-2xl">Understanding recall severity and what action to take can be confusing. Here's what you need to know.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card p-6">
              <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2"><AlertTriangle className="w-5 h-5 text-red-500" /> NHTSA Recall Classes Explained</h3>
              <ul className="space-y-3 text-sm text-gray-700">
                <li><span className="font-semibold text-red-700">Class I (Most Serious):</span> A defect that could cause injury or death. Immediate attention required — stop driving until repaired.</li>
                <li><span className="font-semibold text-yellow-700">Class II (Moderate Risk):</span> A defect that may create risk of injury. Schedule repair promptly with your dealer.</li>
                <li><span className="font-semibold text-gray-700">Class III (Minor Risk):</span> Unlikely to cause injury but violates federal safety regulations. Schedule a dealer visit soon.</li>
              </ul>
            </div>
            <div className="card p-6">
              <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2"><CheckCircle className="w-5 h-5 text-green-500" /> After You Find a Recall</h3>
              <ol className="space-y-2 text-sm text-gray-700 list-decimal list-inside">
                <li>Contact your nearest dealership — recall repairs are always <strong>free</strong>.</li>
                <li>You can call NHTSA's hotline: <strong>1-888-327-4236</strong>.</li>
                <li>Don't wait — some recalls are urgent safety issues.</li>
                <li>Check back periodically — new recalls are issued year-round.</li>
                <li>Keep your VIN handy — dealers will need it to confirm eligibility.</li>
              </ol>
            </div>
            <div className="card p-6">
              <h3 className="font-bold text-gray-900 mb-2">Why Check Before Buying a Used Car?</h3>
              <p className="text-sm text-gray-700">Over <strong>50 million vehicles</strong> on US roads have open recalls that haven't been fixed. When buying used, a previous owner may have ignored recall notices — leaving you with a safety problem you didn't know existed. Always check recalls <em>before</em> signing any purchase agreement.</p>
            </div>
            <div className="card p-6">
              <h3 className="font-bold text-gray-900 mb-2">What to Ask the Seller</h3>
              <ul className="space-y-1 text-sm text-gray-700 list-disc list-inside">
                <li>Has any recall notice been addressed at a dealer?</li>
                <li>Do you have service records showing recall repair?</li>
                <li>Can I verify the VIN and recall status independently?</li>
                <li>Are there any open complaints or known issues?</li>
              </ul>
              <p className="text-xs text-gray-500 mt-3">A legitimate seller will always welcome this due diligence.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Searches */}
      <section className="py-14 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Popular Recall Searches</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              '2020 Toyota Camry', '2019 Ford F-150', '2021 Chevrolet Silverado', '2018 Honda CR-V',
              '2022 Jeep Grand Cherokee', '2017 Dodge Charger', '2023 Tesla Model 3', '2019 Nissan Rogue',
              '2020 Ford Explorer', '2021 RAM 1500', '2018 Hyundai Sonata', '2022 Kia Telluride',
            ].map(v => (
              <button key={v} className="card p-3 text-sm text-gray-700 hover:border-brand-300 hover:text-brand-700 hover:shadow-sm transition-all text-left font-medium">
                🚗 {v}
              </button>
            ))}
          </div>
        3c/div>
      </section>

      {/* Disclaimer */}
      <section className="pb-8 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 text-sm text-amber-800">
            <strong>Disclaimer:</strong> AutoRecallCheck is an independent tool for informational purposes only. Data is sourced from the official NHTSA database. We are not affiliated with NHTSA, any automaker, or government agency. Always verify recall information directly at <a href="https://www.nhtsa.gov" target="_blank" rel="noopener noreferrer" className="underline font-semibold">NHTSA.gov</a> or by calling 1-888-327-4236 before making vehicle decisions.
          </div>
        </div>
      </section>
    </>
  )
}