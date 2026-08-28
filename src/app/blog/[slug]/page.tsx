import BlogArticleClient from './BlogArticleClient'

// Pre-generate known blog article slugs for static export.
// These match the 8 articles already live in production and managed via n8n.
export function generateStaticParams() {
  return [
    { slug: 'ford-f150-recalls-complete-owners-guide' },
    { slug: 'how-long-does-car-recall-repair-take-dealer-obligations' },
    { slug: 'how-long-does-car-recall-repair-take-dealer-requirements' },
    { slug: 'how-to-check-car-open-recall-step-by-step' },
    { slug: 'tire-recall-safety-guide-when-your-tires-are-recalled' },
    { slug: 'top-10-most-recalled-vehicles-america-2024' },
    { slug: 'toyota-recall-history-common-issues-check-vin' },
    { slug: 'what-happens-if-you-ignore-car-recall-real-risks' },
  ]
}

export default function Page({ params }: { params: { slug: string } }) {
  return <BlogArticleClient params={params} />
}
