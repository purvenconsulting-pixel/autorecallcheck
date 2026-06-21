import type { Metadata } from 'next'
import { ChevronDown } from 'lucide-react'

export const metadata: Metadata = {
  title: 'FAQ — AutoRecallCheck',
  description: 'Frequently asked questions about car recalls, VIN lookup, and how AutoRecallCheck works.',
}

const faqs = [
  { q: 'What is a car recall?', a: 'A car recall is issued when a manufacturer or the NHTSA determines that a vehicle has a safety-related defect or does not comply with federal safety standards. The automaker is required to notify owners and fix the problem at no charge.' },
  { q: 'How do I find my VIN number?', a: "Your 17-character VIN (Vehicle Identification Number) is located in several places: on the driver's side dashboard (visible through the windshield), on the driver's side door jamb sticker, on your vehicle title, on your insurance card, and in your vehicle registration documents." },
  { q: 'Is AutoRecallCheck free to use?', a: 'Yes, completely free. We provide instant access to official NHTSA recall data at no cost. There are no signups, no subscriptions, and no fees.' },
  { q: 'Where does your data come from?', a: 'All recall data comes directly from the National Highway Traffic Safety Administration (NHTSA), the official U.S. federal agency responsible for vehicle safety. We pull from their public API and display it in a more readable format.' },
  { q: 'How current is the recall data?', a: 'Our database is synced daily with NHTSA. New recalls are added as soon as they appear in the federal database, typically within 24 hours of official announcement.' },
  { q: 'If no recalls are found, is my car safe?', a: "No recall found means there are no open recall campaigns in the NHTSA database for that vehicle. It does not guarantee the vehicle has no defects or issues. Always review the vehicle's full service history and have a qualified mechanic inspect any used vehicle before purchase." },
  { q: 'Are recall repairs really free?', a: "Yes. By law, manufacturers must repair recall defects at no charge to the owner. This applies regardless of whether you are the original owner, how old the vehicle is, or whether you purchased it used. Simply contact any authorized dealer for that brand." },
  { q: 'What is the difference between a recall and a complaint?', a: 'A recall is an official safety campaign issued by the automaker or NHTSA requiring a free repair. A complaint is a report filed by an individual owner about a problem they experienced. Complaints are recorded by NHTSA and may trigger investigations that lead to recalls, but they are not recalls themselves.' },
  { q: 'How long do I have to get a recall fixed?', a: 'There is no strict deadline, but you should address recalls promptly — especially Class I recalls which can pose immediate safety risks. Parts are sometimes unavailable immediately after a recall announcement; call your dealer to check availability and schedule service.' },
  { q: 'Can I check a car I am thinking about buying?', a: 'Absolutely — and you should. Search by VIN or by year/make/model before purchasing any used vehicle. If there are open recalls, ask the seller whether they have been completed and request service records as proof.' },
  { q: 'What if the recall repair is not available yet?', a: "Sometimes a recall is announced before parts are ready. NHTSA requires manufacturers to notify you when the remedy becomes available. In the meantime, follow any interim safety guidance from the manufacturer. You can also check NHTSA.gov or call 1-888-327-4236 for updates." },
  { q: 'Does AutoRecallCheck cover motorcycles and trucks?', a: 'Yes. NHTSA recall data covers cars, trucks, SUVs, motorcycles, buses, and other motor vehicles. Our tool searches all vehicle types in the NHTSA database.' },
]

export default function FAQ() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-14">
      <h1 className="text-3xl font-bold text-gray-900 mb-2">Frequently Asked Questions</h1>
      <p className="text-gray-500 mb-10">Everything you need to know about car recalls and using AutoRecallCheck.</p>
      <div className="space-y-4">
        {faqs.map(({ q, a }) => (
          <div key={q} className="card p-6">
            <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
              <ChevronDown className="w-4 h-4 text-brand-600 shrink-0" />{q}
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed pl-6">{a}</p>
          </div>
        ))}
      </div>
      <p className="text-xs text-gray-400 mt-8 text-center">
        For official recall information, always verify at <a href="https://www.nhtsa.gov" target="_blank" rel="noopener noreferrer" className="underline">NHTSA.gov</a> or call 1-888-327-4236.
      </p>
    </div>
  )
}
