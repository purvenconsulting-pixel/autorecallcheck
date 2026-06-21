import type { Metadata } from 'next'
export const metadata: Metadata = { title: 'Privacy Policy — AutoRecallCheck', description: 'Privacy policy for AutoRecallCheck.com' }

export default function PrivacyPolicy() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-14">
      <h1 className="text-3xl font-bold text-gray-900 mb-2">Privacy Policy</h1>
      <p className="text-gray-500 mb-8">Last updated: June 2025</p>
      <div className="space-y-6 text-sm text-gray-700 leading-relaxed">
        <div className="card p-6">
          <h2 className="font-bold text-gray-900 text-lg mb-2">1. Information We Collect</h2>
          <p>AutoRecallCheck does not require account registration or collect personally identifiable information. We may collect anonymized usage data through Google Analytics (page views, search queries, device type) to improve the service.</p>
        </div>
        <div className="card p-6">
          <h2 className="font-bold text-gray-900 text-lg mb-2">2. Google AdSense</h2>
          <p>This site uses Google AdSense to display advertisements. Google AdSense may use cookies and web beacons to serve ads based on your prior visits to this website or other websites. You may opt out of personalized advertising by visiting <a href="https://www.google.com/settings/ads" className="text-brand-600 underline" target="_blank" rel="noopener noreferrer">Google Ads Settings</a>. For more information about how Google uses data, visit <a href="https://policies.google.com/technologies/partner-sites" className="text-brand-600 underline" target="_blank" rel="noopener noreferrer">Google's Privacy Policy</a>.</p>
        </div>
        <div className="card p-6">
          <h2 className="font-bold text-gray-900 text-lg mb-2">3. Cookies</h2>
          <p>We use cookies for analytics and advertising purposes. Third-party vendors (including Google) may use cookies to serve ads based on your browsing history. You can control cookies through your browser settings.</p>
        </div>
        <div className="card p-6">
          <h2 className="font-bold text-gray-900 text-lg mb-2">4. Data Security</h2>
          <p>We do not store VIN numbers, vehicle searches, or personal information on our servers. Search queries are sent directly to the NHTSA public API and results are displayed in real time.</p>
        </div>
        <div className="card p-6">
          <h2 className="font-bold text-gray-900 text-lg mb-2">5. Contact</h2>
          <p>For privacy-related questions, contact us via our <a href="/contact" className="text-brand-600 underline">Contact page</a>.</p>
        </div>
      </div>
    </div>
  )
}
