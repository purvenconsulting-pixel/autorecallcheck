import Link from 'next/link'
import { Search } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="max-w-xl mx-auto px-4 py-20 text-center">
      <h1 className="text-6xl font-extrabold text-brand-600 mb-4">404</h1>
      <h2 className="text-2xl font-bold text-gray-900 mb-3">Page Not Found</h2>
      <p className="text-gray-500 mb-8">The page you're looking for doesn't exist or may have been moved.</p>
      <div className="space-y-3">
        <Link href="/" className="btn-primary inline-flex">
          <Search className="w-4 h-4" /> Search Vehicle Recalls
        </Link>
        <div className="flex flex-wrap justify-center gap-3 text-sm text-brand-600">
          <Link href="/faq/" className="hover:underline">FAQ</Link>
          <span className="text-gray-300">•</span>
          <Link href="/about/" className="hover:underline">About</Link>
          <span className="text-gray-300">•</span>
          <Link href="/methodology/" className="hover:underline">Our Data</Link>
          <span className="text-gray-300">•</span>
          <Link href="/blog/" className="hover:underline">Blog</Link>
        </div>
      </div>
    </div>
  )
}