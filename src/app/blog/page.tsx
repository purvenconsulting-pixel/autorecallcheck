'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Calendar, ArrowRight, AlertTriangle } from 'lucide-react'

interface Article {
  id: string
  slug: string
  title: string
  excerpt?: string
  date?: string
  category?: string
  image?: string
}

export default function BlogPage() {
  const [articles, setArticles] = useState<Article[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    fetch('https://n8n.srv1001557.hstgr.cloud/webhook/blog-list')
      .then(r => r.json())
      .then(data => {
        const list = Array.isArray(data) ? data : (data.articles || data.data || [])
        setArticles(list)
        setLoading(false)
      })
      .catch(() => {
        setError(true)
        setLoading(false)
      })
  }, [])

  return (
    <div className="max-w-4xl mx-auto px-4 py-14">
      <h1 className="text-3xl font-bold text-gray-900 mb-2">AutoRecallCheck Blog</h1>
      <p className="text-gray-500 mb-10">Recall news, safety guides, and tips for checking your vehicle.</p>

      {loading && (
        <div className="text-center py-20 text-gray-400">
          <div className="animate-pulse text-lg">Loading articles…</div>
        </div>
      )}

      {error && !loading && (
        <div className="card p-8 text-center">
          <AlertTriangle className="w-10 h-10 text-amber-500 mx-auto mb-3" />
          <h2 className="font-bold text-gray-900 mb-2">Articles temporarily unavailable</h2>
          <p className="text-sm text-gray-500">We're experiencing a temporary issue loading blog content. Please check back shortly.</p>
        </div>
      )}

      {!loading && !error && articles.length === 0 && (
        <div className="card p-8 text-center">
          <p className="text-gray-500">No articles yet. Check back soon for recall news and safety guides!</p>
        </div>
      )}

      {!loading && !error && articles.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {articles.map((article) => (
            <Link
              key={article.id || article.slug}
              href={`/blog/${article.slug}/`}
              className="card overflow-hidden hover:shadow-md transition-shadow group"
            >
              {article.image && (
                <div className="aspect-video bg-gray-100 overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
              )}
              <div className="p-5">
                {article.category && (
                  <span className="text-xs font-semibold text-brand-600 uppercase tracking-wide">{article.category}</span>
                )}
                <h2 className="font-bold text-gray-900 mt-1 mb-2 group-hover:text-brand-600 transition-colors">{article.title}</h2>
                {article.excerpt && <p className="text-sm text-gray-500 line-clamp-2">{article.excerpt}</p>}
                {article.date && (
                  <div className="flex items-center gap-1.5 text-xs text-gray-400 mt-3">
                    <Calendar className="w-3 h-3" />
                    {new Date(article.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                  </div>
                )}
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}