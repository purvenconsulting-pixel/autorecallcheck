import Link from 'next/link'
import { ShieldCheck } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 mt-16">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 text-white font-bold text-lg mb-3">
              <ShieldCheck className="w-6 h-6 text-brand-500" />
              AutoRecallCheck
            </div>
            <p className="text-sm leading-relaxed max-w-sm">
              Free vehicle recall and safety lookup powered by official NHTSA data. 
              Check any car, truck, or SUV before you buy or if you already own it.
            </p>
            <p className="text-xs mt-3 text-gray-500">
              Data source: National Highway Traffic Safety Administration (NHTSA). 
              Last synced: updated daily.
            </p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-3 text-sm uppercase tracking-wide">Tools</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="hover:text-white transition-colors">VIN Lookup</Link></li>
              <li><Link href="/" className="hover:text-white transition-colors">Recall Search</Link></li>
              <li><Link href="/faq" className="hover:text-white transition-colors">FAQ</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-3 text-sm uppercase tracking-wide">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="hover:text-white transition-colors">About</Link></li>
              <li><Link href="/methodology" className="hover:text-white transition-colors">Our Data</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
              <li><Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-white transition-colors">Terms of Use</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-6 text-xs text-gray-500 flex flex-col md:flex-row justify-between gap-2">
          <p>© {new Date().getFullYear()} AutoRecallCheck. All rights reserved.</p>
          <p>Not affiliated with NHTSA or any government agency. For informational purposes only.</p>
        </div>
      </div>
    </footer>
  )
}
