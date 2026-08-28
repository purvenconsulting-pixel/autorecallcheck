import type { Metadata } from 'next'

const SITE_URL = 'https://autorecallcheck.com'

export const metadata: Metadata = {
  title: 'Our Data & Methodology — AutoRecallCheck',
  description: 'How AutoRecallCheck sources, refreshes, and displays vehicle recall data from NHTSA.',
  alternates: { canonical: '/methodology/' },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL + '/' },
    { '@type': 'ListItem', position: 2, name: 'Our Data & Methodology', item: SITE_URL + '/methodology/' },
  ],
}

export default function Methodology() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-14">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
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
          <h2 className="text-xl font-bold text-gray-900 mb-3">Data Refresh Cycle</h2>
          <p className="text-gray-700 text-sm leading-relaxed">Our system queries the NHTSA API in real time when you search for a vehicle. This means you always see the most current data available. There is no cached or stale data — every search result is a live query to the federal database.</p>
          <p className="text-gray-700 text-sm leading-relaxed mt-2">NHTSA typically adds new recalls to their API within 24 hours of an official announcement. If a recall was just announced today, it may not appear until tomorrow.</p>
        </div>

        <div className="card p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-3">What We Display</h2>
          <p className="text-gray-700 text-sm leading-relaxed">For each recall, we show:</p>
          <ul className="text-sm text-gray-600 mt-3 space-y-1 list-disc list-inside">
            <li>Recall number and NHTSA campaign ID</li>
            <li>Component affected (e.g., airbags, brakes, engine)</li>
            <li>Summary of the defect and safety risk</li>
            <li>Consequence of the defect</li>
            <li>Manufacturer's recommended remedy</li>
            <li>Number of potentially affected vehicles</li>
            <li>Recall date and reporting period</li>
          </ul>
        </div>

        <div className="card p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-3">Recall Severity Classification</h2>
          <p className="text-gray-700 text-sm leading-relaxed mb-3">NHTSA classifies recalls into three severity levels. We display these as they are reported by NHTSA:</p>
          <ul className="text-sm text-gray-600 space-y-2">
            <li><strong className="text-red-700">Class I (Most Serious):</strong> A defect that could cause serious injury or death. Immediate attention required.</li>
            <li><strong className="text-yellow-700">Class II (Moderate Risk):</strong> A defect that may create risk of injury. Schedule repair promptly.</li>
            <li><strong className="text-gray-700">Class III (Minor Risk):</strong> Unlikely to cause injury but violates federal safety regulations. Schedule a dealer visit soon.</li>
          </ul>
        </div>

        <div className="card p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-3">Limitations</h2>
          <ul className="text-sm text-gray-600 space-y-2 list-disc list-inside">
            <li>Recall data depends on NHTSA's records. If a recall is very recent, it may not yet be in their API.</li>
            <li>Some recalls may have been already repaired. We show open recalls as reported by NHTSA — we cannot verify whether a specific vehicle has had the repair completed.</li>
            <li>VIN-specific recall lookups via NHTSA's API may not cover every single recall for that exact VIN. Always verify with your dealership.</li>
            <li>We do not provide legal or automotive repair advice. Always consult a qualified professional.</li>
          </ul>
        </div>
      </div>
    </div>
  )
}