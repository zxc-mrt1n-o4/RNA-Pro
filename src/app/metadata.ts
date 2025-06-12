import { Metadata } from 'next'

const defaultMetadata: Metadata = {
  title: {
    default: 'RNA Pro Painting - Professional Painting Services',
    template: '%s | RNA Pro Painting'
  },
  description: 'Professional painting services for residential and commercial properties. Expert interior and exterior painting, custom solutions, and superior quality workmanship.',
  keywords: [
    'professional painting',
    'house painting',
    'commercial painting',
    'interior painting',
    'exterior painting',
    'residential painting',
    'painting services',
    'professional painters',
    'local painters',
    'quality painting'
  ],
  authors: [{ name: 'RNA Pro Painting' }],
  creator: 'RNA Pro Painting',
  publisher: 'RNA Pro Painting',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://rnapropainting.com',
    siteName: 'RNA Pro Painting',
    title: 'RNA Pro Painting - Professional Painting Services',
    description: 'Transform your space with our expert painting services. Quality, reliability, and attention to detail in every project.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'RNA Pro Painting - Professional Painting Services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'RNA Pro Painting - Professional Painting Services',
    description: 'Transform your space with our expert painting services. Quality, reliability, and attention to detail in every project.',
    images: ['/twitter-image.jpg'],
    creator: '@rnapropainting',
  },
  verification: {
    google: 'your-google-verification-code',
  },
  alternates: {
    canonical: 'https://rnapropainting.com',
  },
}

export default defaultMetadata 