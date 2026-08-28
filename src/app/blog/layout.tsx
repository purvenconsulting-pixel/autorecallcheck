import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog — AutoRecallCheck',
  description: 'Recall news, safety guides, and tips for checking your vehicle. Stay informed about the latest NHTSA recalls and vehicle safety issues.',
  alternates: { canonical: '/blog/' },
}

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return children
}