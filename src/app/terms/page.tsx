import type { Metadata } from 'next'
export const metadata: Metadata = { title: 'Terms of Use — AutoRecallCheck', description: 'Terms of use for AutoRecallCheck.com' }

export default function Terms() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-14">
      <h1 className="text-3xl font-bold text-gray-900 mb-2">Terms of Use</h1>
      <p className="text-gray-500 mb-8">Last updated: June 2025</p>
      <div className="space-y-6 text-sm text-gray-700 leading-relaxed">
        <div className="card p-6"><h2 className="font-bold text-gray-900 text-lg mb-2">1. Informational Purpose Only</h2><p>AutoRecallCheck provides vehicle recall information for informational purposes only. We are not a legal, safety, or automotive authority. Always verify recall information directly at NHTSA.gov or by calling 1-888-327-4236 before making any vehicle-related decisions.</p></div>
        <div className="card p-6"><h2 className="font-bold text-gray-900 text-lg mb-2">2. No Warranties</h2><p>We make no warranties, express or implied, about the accuracy, completeness, or timeliness of information provided. Data is sourced from NHTSA and may not reflect the most recent updates. Use of this service is at your own risk.</p></div>
        <div className="card p-6"><h2 className="font-bold text-gray-900 text-lg mb-2">3. No Affiliation</h2><p>AutoRecallCheck is not affiliated with the National Highway Traffic Safety Administration (NHTSA), any automaker, dealer, or government agency. Use of NHTSA data is subject to NHTSA's own terms and data policies.</p></div>
        <div className="card p-6"><h2 className="font-bold text-gray-900 text-lg mb-2">4. Limitation of Liability</h2><p>AutoRecallCheck shall not be liable for any direct, indirect, incidental, or consequential damages arising from use of this service or reliance on information provided herein.</p></div>
        <div className="card p-6"><h2 className="font-bold text-gray-900 text-lg mb-2">5. Acceptable Use</h2><p>You may use this service for personal, non-commercial informational purposes. Automated scraping, bulk data extraction, or commercial redistribution of results is prohibited.</p></div>
      </div>
    </div>
  )
}
