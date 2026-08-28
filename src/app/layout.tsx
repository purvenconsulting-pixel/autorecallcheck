import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const SITE_URL = 'https://autorecallcheck.com'

export const metadata: Metadata = {
  title: {
    default: 'AutoRecallCheck — Free Car Recall & VIN Safety Lookup',
    template: '%s — AutoRecallCheck',
  },
  description: 'Search official NHTSA data for vehicle recalls, safety complaints, and VIN details. Free instant lookup for any car, truck, or SUV.',
  keywords: 'car recall check, VIN recall lookup, NHTSA recall search, vehicle safety check, free VIN decoder, recall lookup, safety recall',
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'AutoRecallCheck — Free Car Recall & VIN Safety Lookup',
    description: 'Search official NHTSA data for vehicle recalls, safety complaints, and VIN details.',
    url: SITE_URL,
    siteName: 'AutoRecallCheck',
    type: 'website',
  },
  robots: { index: true, follow: true },
}

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'AutoRecallCheck',
  url: SITE_URL,
  description: 'Free vehicle recall and safety lookup powered by official NHTSA government data.',
  email: 'hello@autorecallcheck.com',
}

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'AutoRecallCheck',
  url: SITE_URL,
  description: 'Free car recall and VIN safety lookup powered by official NHTSA data.',
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: SITE_URL + '/?q={search_term_string}',
    },
    'query-input': 'required name=search_term_string',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta name="google-adsense-account" content="ca-pub-8995675464812587" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}