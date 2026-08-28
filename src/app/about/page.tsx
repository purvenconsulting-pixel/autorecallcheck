import type { Metadata } from 'next'
import { ShieldCheck, Database, RefreshCw, Heart } from 'lucide-react'

const SITE_URL = 'https://autorecallcheck.com'

export const metadata: Metadata = {
  title: 'About AutoRecallCheck',
  description: 'AutoRecallCheck is a free vehicle recall lookup tool powered by official NHTSA government data.',
  alternates: { canonical: '/about/' },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL + '/' },
    { '@type': 'ListItem', position: 2, name: 'About', item: SITE_URL + '/about/' },
  ],
}

export default function About() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-14">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <h1 className="text-3xl font-bold text-gray-900 mb-3">About AutoRecallCheck</h1>
      <p className="text-gray-500 text-lg mb-10">Our mission: make official vehicle safety data easy to access and understand for every driver.</p>

      <div className="space-y-8">
        <div className="card p-6">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 bg-brand-50 rounded-lg flex items-center justify-center">
              <Heart className="w-5 h-5 text-brand-600" />
            </div>
            <h2 className="text-xl font-bold text-gray-900">Our Mission</h2>
          </div>
          <p className="text-gray-700 text-sm leading-relaxed">Every year, millions of vehicles are recalled for safety defects — yet many owners never find out. AutoRecallCheck exists to bridge that gap. We make it simple for anyone to check their vehicle against the official NHTSA recall database in seconds, for free, with no signup required.</p>
        </div>

        <div className="card p-6">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 bg-brand-50 rounded-lg flex items-center justify-center">
              <Database className="w-5 h-5 text-brand-600" />
            </div>
            <h2 className="text-xl font-bold text-gray-900">Our Data Source</h2>
          </div>
          <p className="text-gray-700 text-sm leading-relaxed">All recall data is retrieved directly from the <strong>National Highway Traffic Safety Administration (NHTSA)</strong> public API. NHTSA is the U.S. federal agency responsible for vehicle safety standards. Their recall database is the authoritative, legally mandated repository of all safety-related defect campaigns. We do not modify or filter the data — we present it in a clear, readable format.</p>
        </div>

        <div className="card p-6">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 bg-brand-50 rounded-lg flex items-center justify-center">
              <RefreshCw className="w-5 h-5 text-brand-600" />
            </div>
            <h2 className="text-xl font-bold text-gray-900">Always Up to Date</h2>
          </div>
          <p className="text-gray-700 text-sm leading-relaxed">Our database syncs daily with NHTSA. When a new recall is announced, it appears on AutoRecallCheck within 24 hours. We also display consumer complaints filed with NHTSA, giving you a fuller picture of potential issues with any vehicle.</p>
        </div>

        <div className="card p-6">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 bg-brand-50 rounded-lg flex items-center justify-center">
              <ShieldCheck className="w-5 h-5 text-brand-600" />
            </div>
            <h2 className="text-xl font-bold text-gray-900">Free &amp; Private</h2>
          </div>
          <p className="text-gray-700 text-sm leading-relaxed">AutoRecallCheck is completely free to use — no account, no subscription, no paywall. We do not require personal information to search for recalls. The service is supported by advertising (Google AdSense), which allows us to keep it free for everyone.</p>
        </div>

        <div className="card p-6 bg-brand-50">
          <h2 className="text-xl font-bold text-gray-900 mb-2">Not Affiliated with NHTSA</h2>
          <p className="text-gray-700 text-sm leading-relaxed">AutoRecallCheck is an independent service. We are not affiliated with, endorsed by, or connected to the National Highway Traffic Safety Administration, any automaker, or any government agency. We use NHTSA's publicly available API under their data policies. For official information, visit <a href="https://www.nhtsa.gov" className="text-brand-600 underline" target="_blank" rel="noopener noreferrer">NHTSA.gov</a> or call 1-888-327-4236.</p>
        </div>
      </div>
    </div>
  )
}