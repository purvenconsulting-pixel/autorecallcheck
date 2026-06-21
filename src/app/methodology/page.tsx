import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Our Data & Methodology — AutoRecallCheck',
  description: 'How AutoRecallCheck sources, refreshes, and displays vehicle recall data from NHTSA.',
}

export default function Methodology() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-14">
      <h1 className="text-3xl font-bold text-gray-900 mb-2">Our Data &amp; Methodology</h1>
      <p className="text-gray-500 mb-10">Transparency about where our data comes from and how we use it.</p>
      <div className="prose prose-gray max-w-none space-y-8">
        <div className="card p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-3">Primary Data Source</h2>
          <p className="text-gray-700 text-sm leading-relaxed">All vehicle recall, complaint, and VIN data displayed on AutoRecallCheck is retrieved directly from the <strong>National Highway Traffic Safety Administration (NHTSA)</strong> public API. The NHTSA is the U.S. federal agency responsible for vehicle safety standards. Their recall database is the authoritative, legally mandated repository of all safety-related defect campaigns.</p>
          <ul className="text-sm text-gray-600 mt-3 space-y-1 list-disc list-inside">
            <li>Recall data: <code className="bg-gray-100 px-1 rounded">api.nhtsa.gov/recalls/recallsByVehicle</code></li>
            <li>VIN decoding: <code className="bg-gray-100 px-1 rounded">api.nhtsa.gov/vehicles/DecodeVinValues</code></li>
            <li>Complaints: <code className="bg-gray-100 px-1 rounded">api.nhtsa.gov/complaints/complaintsByVehicle</code></li>
          </ul>
        </div>

        <div className="card p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-3">Data Freshness</h2>
          <p className="text-gray-700 text-sm leading-relaxed">Our backend syncs with NHTSA daily. Recall records are typically reflected within 24 hours of official announcement. All result cards display the data retrieval timestamp. For the most current information — especially for recently announced recalls — always verify at NHTSA.gov directly.</p>
        </div>

        <div className="card p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-3">How We Add Value</h2>
          <p className="text-gray-700 text-sm leading-relaxed">NHTSA data is public but can be difficult to interpret. AutoRecallCheck adds the following original editorial layer:</p>
          <ul className="text-sm text-gray-600 mt-3 space-y-2 list-disc list-inside">
            <li>Plain-English summaries of what each recall means</li>
            <li>Severity classification to help prioritize action</li>
            <li>"What to do" guidance for each recall found</li>
            <li>Contextual FAQs explaining recall classes and processes</li>
            <li>Seller questions checklist for used car buyers</li>
          </ul>
        </div>

        <div className="card p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-3">Limitations</h2>
          <ul className="text-sm text-gray-600 space-y-2 list-disc list-inside">
            <li>We display the NHTSA database as-is; if a recall is not yet in NHTSA's system, it will not appear here.</li>
            <li>Complaint data is self-reported by vehicle owners and is not verified by NHTSA or AutoRecallCheck.</li>
            <li>VIN decoding accuracy depends on NHTSA's manufacturer-reported data.</li>
            <li>A "no recalls found" result means no open campaigns in the NHTSA database — not a guarantee of safety.</li>
          </ul>
        </div>

        <div className="card p-6 bg-gray-50">
          <h2 className="text-xl font-bold text-gray-900 mb-3">Official Sources</h2>
          <ul className="text-sm space-y-2">
            <li><a href="https://www.nhtsa.gov" className="text-brand-600 underline" target="_blank" rel="noopener noreferrer">NHTSA.gov — Official vehicle safety agency</a></li>
            <li><a href="https://api.nhtsa.gov" className="text-brand-600 underline" target="_blank" rel="noopener noreferrer">NHTSA Public API Documentation</a></li>
            <li><a href="https://www.nhtsa.gov/vehicle-safety/recalls" className="text-brand-600 underline" target="_blank" rel="noopener noreferrer">NHTSA Recall Search</a></li>
          </ul>
        </div>
      </div>
    </div>
  )
}
