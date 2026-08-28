'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Calendar, ArrowLeft, AlertTriangle, ChevronRight } from 'lucide-react'

interface Article {
  id: string
  slug: string
  title: string
  content: string
  excerpt?: string
  date?: string
  category?: string
  image?: string
  faq?: { question: string; answer: string }[]
}

export default function BlogArticlePage({ params }: { params: { slug: string } }) {
  const [article, setArticle] = useState<Article | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    fetch(`https://n8n.srv1001557.hstgr.cloud/webhook/blog-article-full?slug=${encodeURIComponent(params.slug)}`)
      .then(r => r.json())
      .then(data => {
        if (data && data.title) {
          setArticle(data)
        } else {
          setError(true)
        }
        setLoading(false)
      })
      .catch(() => {
        setError(true)
        setLoading(false)
      })
  }, [params.slug])

  if (loading) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-20 text-center text-gray-400">
        <div className="animate-pulse text-lg">Loading article…</div>
      </div>
    )
  }

  if (error || !article) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-20 text-center">
        <AlertTriangle className="w-10 h-10 text-amber-500 mx-auto mb-3" />
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Article Not Found</h1>
        <p className="text-gray-500 mb-6">The article you're looking for doesn't exist or may have been removed.</p>
        <Link href="/blog/" className="btn-primary inline-flex">
          <ArrowLeft className="w-4 h-4" /> Back to Blog
        </Link>
      </div>
    )
  }

  const articleSchema = article && {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.excerpt || '',
    datePublished: article.date || '',
    author: { '@type': 'Organization', name: 'AutoRecallCheck' },
    publisher: { '@type': 'Organization', name: 'AutoRecallCheck', url: 'https://autorecallcheck.com' },
    mainEntityOfPage: `https://autorecallcheck.com/blog/${article.slug}/`,
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://autorecallcheck.com/' },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://autorecallcheck.com/blog/' },
      { '@type': 'ListItem', position: 3, name: article.title, item: `https://autorecallcheck.com/blog/${article.slug}/` },
    ],
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-14">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Breadcrumbs */}
      <nav className="flex items-center gap-1.5 text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:text-brand-600">Home</Link>
        <ChevronRight className="w-3 h-3" />
        <Link href="/blog/" className="hover:text-brand-600">Blog</Link>
        <ChevronRight className="w-3 h-3" />
        <span className="text-gray-900 truncate">{article.title}</span>
      </nav>

      {article.image && (
        <div className="aspect-video bg-gray-100 rounded-xl overflow-hidden mb-6">
          <img src={article.image} alt={article.title} className="w-full h-full object-cover" />
        </div>
      )}

      {article.category && (
        <span className="text-xs font-semibold text-brand-600 uppercase tracking-wide">{article.category}</span>
      )}
      <h1 className="text-3xl font-bold text-gray-900 mt-1 mb-3">{article.title}</h1>
      {article.date && (
        <div className="flex items-center gap-1.5 text-sm text-gray-400 mb-8">
          <Calendar className="w-4 h-4" />
          {new Date(article.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
        </div>
      )}

      {article.content && (
        <div
          className="prose prose-gray max-w-none text-gray-700 leading-relaxed
            [&_h2]:text-xl [&_h2]:font-bold [&_h2]:text-gray-900 [&_h2]:mt-8 [&_h2]:mb-3
            [&_h3]:text-lg [&_h3]:font-semibold [&_h3]:text-gray-900 [&_h3]:mt-6 [&_h3]:mb-2
            [&_p]:mb-4 [&_p]:text-sm
            [&_ul]:list-disc [&_ul]:list-inside [&_ul]:space-y-1 [&_ul]:text-sm
            [&_ol]:list-decimal [&_ol]:list-inside [&_ol]:space-y-1 [&_ol]:text-sm
            [&_a]:text-brand-600 [&_a]:underline
            [&_strong]:font-semibold [&_strong]:text-gray-900"
          dangerouslySetInnerHTML={{ __html: article.content }}
        />
      )}

      {/* FAQ Section */}
      {article.faq && article.faq.length > 0 && (
        <div className="mt-10 pt-8 border-t border-gray-200">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
          <div className="space-y-3">
            {article.faq.map((item, i) => (
              <details key={i} className="card p-4 group">
                <summary className="font-semibold text-gray-900 cursor-pointer list-none flex items-center justify-between">
                  {item.question}
                  <span className="text-brand-600 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="mt-2 text-sm text-gray-700 leading-relaxed">{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      )}

      <div className="mt-10 pt-6 border-t border-gray-200">
        <Link href="/blog/" className="inline-flex items-center gap-2 text-brand-600 hover:underline font-medium">
          <ArrowLeft className="w-4 h-4" /> Back to Blog
        </Link>
      </div>
    </div>
  )
}