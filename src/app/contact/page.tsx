import type { Metadata } from 'next'
import { Mail, MessageSquare } from 'lucide-react'

const SITE_URL = 'https://autorecallcheck.com'

export const metadata: Metadata = {
  title: 'Contact — AutoRecallCheck',
  description: 'Contact the AutoRecallCheck team.',
  alternates: { canonical: '/contact/' },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL + '/' },
    { '@type': 'ListItem', position: 2, name: 'Contact', item: SITE_URL + '/contact/' },
  ],
}

export default function Contact() {
  return (
    <div className="max-w-xl mx-auto px-4 py-14">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
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
            <p className="font-semibold text-gray-900">Feedback</p>
            <p className="text-gray-500 text-sm">We welcome suggestions for improving the recall lookup experience.</p>
          </div>
        </div>
      </div>
      <div className="card p-5 bg-brand-50">
        <p className="text-sm text-gray-700">For urgent safety concerns about your vehicle, contact NHTSA directly at <strong>1-888-327-4236</strong> or visit <a href="https://www.nhtsa.gov" className="text-brand-600 underline" target="_blank" rel="noopener noreferrer">NHTSA.gov</a>.</p>
      </div>
    </div>
  )
}