'use client'
import Link from 'next/link'
import { ShieldCheck, Menu, X } from 'lucide-react'
import { useState } from 'react'

export default function Header() {
  const [open, setOpen] = useState(false)
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-bold text-xl text-brand-600">
          <ShieldCheck className="w-7 h-7" />
          <span>AutoRecallCheck</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-600">
          <Link href="/" className="hover:text-brand-600 transition-colors">Recall Lookup</Link>
          <Link href="/faq" className="hover:text-brand-600 transition-colors">FAQ</Link>
          <Link href="/methodology" className="hover:text-brand-600 transition-colors">Our Data</Link>
          <Link href="/about" className="hover:text-brand-600 transition-colors">About</Link>
          <Link href="/" className="btn-primary text-sm py-2 px-4">Check Your Car →</Link>
        </nav>
        <button className="md:hidden p-2" onClick={() => setOpen(!open)}>
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 py-4 flex flex-col gap-4 text-sm font-medium">
          <Link href="/" onClick={() => setOpen(false)} className="hover:text-brand-600">Recall Lookup</Link>
          <Link href="/faq" onClick={() => setOpen(false)} className="hover:text-brand-600">FAQ</Link>
          <Link href="/methodology" onClick={() => setOpen(false)} className="hover:text-brand-600">Our Data</Link>
          <Link href="/about" onClick={() => setOpen(false)} className="hover:text-brand-600">About</Link>
          <Link href="/contact" onClick={() => setOpen(false)} className="hover:text-brand-600">Contact</Link>
        </div>
      )}
    </header>
  )
}
