import type { Metadata } from 'next'
import { Mail, MessageSquare } from 'lucide-react'
export const metadata: Metadata = { title: 'Contact — AutoRecallCheck', description: 'Contact the AutoRecallCheck team.' }

export default function Contact() {
  return (
    <div className="max-w-xl mx-auto px-4 py-14">
      <h1 className="text-3xl font-bold text-gray-900 mb-2">Contact Us</h1>
      <p className="text-gray-500 mb-8">Questions, feedback, or data corrections? We'd love to hear from you.</p>
      <div className="space-y-4 mb-8">
        <div className="card p-5 flex items-center gap-4">
          <Mail className="w-6 h-6 text-brand-600 shrink-0" />
          <div>
            <p className="font-semibold text-gray-900">Email</p>
            <a href="mailto:hello@autorecallcheck.com" className="text-brand-600 text-sm hover:underline">hello@autorecallcheck.com</a>
          </div>
        </div>
        <div className="card p-5 flex items-center gap-4">
          <MessageSquare className="w-6 h-6 text-brand-600 shrink-0" />
          <div>
            <p className="font-semibold text-gray-900">Response Time</p>
            <p className="text-sm text-gray-500">We typically respond within 1–2 business days.</p>
          </div>
        </div>
      </div>
      <div className="card p-5 bg-amber-50 border-amber-200 text-sm text-amber-800">
        <strong>For urgent recall emergencies:</strong> Do not contact us — call NHTSA directly at <strong>1-888-327-4236</strong> or visit <a href="https://www.nhtsa.gov" target="_blank" rel="noopener noreferrer" className="underline font-semibold">NHTSA.gov</a>.
      </div>
    </div>
  )
}
