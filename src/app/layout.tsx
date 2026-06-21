import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'AutoRecallCheck — Free Car Recall & VIN Safety Lookup',
  description: 'Search official NHTSA data for vehicle recalls, safety complaints, and VIN details. Free instant lookup for any car, truck, or SUV.',
  keywords: 'car recall check, VIN recall lookup, NHTSA recall search, vehicle safety check, free VIN decoder',
  openGraph: {
    title: 'AutoRecallCheck — Free Car Recall & VIN Safety Lookup',
    description: 'Search official NHTSA data for vehicle recalls, safety complaints, and VIN details.',
    url: 'https://autorecallcheck.com',
    siteName: 'AutoRecallCheck',
    type: 'website',
  },
  metadataBase: new URL('https://autorecallcheck.com'),
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta name="google-adsense-account" content="ca-pub-XXXXXXXXXXXXXXXX" />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
