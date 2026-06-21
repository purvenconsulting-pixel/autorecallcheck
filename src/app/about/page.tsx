import type { Metadata } from 'next'
import { ShieldCheck, Database, RefreshCw, Heart } from 'lucide-react'

export const metadata: Metadata = {
  title: 'About AutoRecallCheck',
  description: 'AutoRecallCheck is a free vehicle recall lookup tool powered by official NHTSA government data.',
}

export default function About() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-14">
      <h1 className="text-3xl font-bold text-gray-900 mb-3">About AutoRecallCheck</h1>
      <p className="text-gray-500 text-lg mb-10">Our mission: make official vehicle safety data easy to access and understand for every driver.</p>

      <div className="space-y-8">
        <div className="card p-6">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 bg-brand-50 rounded-lg flex items-center justify-center">
              <Heart className="w-5 h-5 text-brand-600" />
            </div>
            <h2 className="text-xl font-bold text-gray-900">Why We Built This</h2>
          </div>
          <p className="text-gray-700 leading-relaxed">Over 50 million vehicles on U.S. roads have open recalls that have never been repaired. Many owners simply don't know their vehicle has a safety issue — because finding and understanding recall data on government websites can be confusing and time-consuming. AutoRecallCheck was built to change that. We take the official NHTSA data and present it in a clear, actionable format that anyone can understand in seconds.</p>
        </div>

        <div className="card p-6">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 bg-brand-50 rounded-lg flex items-center justify-center">
              <Database className="w-5 h-5 text-brand-600" />
            </div>
            <h2 className="text-xl font-bold text-gray-900">Our Data Source</h2>
          </div>
          <p className="text-gray-700 leading-relaxed mb-3">All data on AutoRecallCheck comes directly from the <strong>National Highway Traffic Safety Administration (NHTSA)</strong> — the official U.S. federal agency responsible for vehicle safety regulations and enforcement. We use their public API to access the same recall data that automakers, dealers, and insurance companies rely on.</p>
          <p className="text-gray-700 leading-relaxed">We do not create, modify, or editorialize recall records. We display official government records in a more readable, user-friendly format and add context to help you understand what each recall means.</p>
        </div>

        <div className="card p-6">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 bg-brand-50 rounded-lg flex items-center justify-center">
              <RefreshCw className="w-5 h-5 text-brand-600" />
            </div>
            <h2 className="text-xl font-bold text-gray-900">How Current Is Our Data?</h2>
          </div>
          <p className="text-gray-700 leading-relaxed">Our database syncs with NHTSA daily. New recalls are typically reflected within 24 hours of official announcement. Each result shows the data retrieval timestamp so you always know how fresh the information is.</p>
        </div>

        <div className="card p-6">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 bg-brand-50 rounded-lg flex items-center justify-center">
              <ShieldCheck className="w-5 h-5 text-brand-600" />
            </div>
            <h2 className="text-xl font-bold text-gray-900">Important Disclaimer</h2>
          </div>
          <p className="text-gray-700 leading-relaxed">AutoRecallCheck is an independent informational tool. We are not affiliated with NHTSA, any automaker, or any government agency. Our tool is designed to help you quickly access and understand public safety data — but you should always verify information directly at <a href="https://www.nhtsa.gov" target="_blank" rel="noopener noreferrer" className="text-brand-600 underline font-medium">NHTSA.gov</a> before making any vehicle-related decisions. For emergencies, call NHTSA at 1-888-327-4236.</p>
        </div>
      </div>
    </div>
  )
}
