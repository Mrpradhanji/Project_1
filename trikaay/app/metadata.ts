import { Metadata } from 'next';

const baseUrl = process.env.NODE_ENV === 'production' 
  ? 'https://trikaayaesthetics.com' 
  : 'http://localhost:3000';

export const defaultMetadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: 'Trikaay Aesthetics - Your Beauty Destination',
    template: '%s | Trikaay Aesthetics',
  },
  description: 'Experience premium aesthetic treatments and beauty services at Trikaay Aesthetics. Expert care with personalized solutions.',
  keywords: ['aesthetics', 'beauty', 'treatments', 'skincare', 'Trikaay', 'cosmetic', 'wellness', 'spa'],
  authors: [{ name: 'Trikaay Aesthetics' }],
  creator: 'Trikaay Aesthetics',
  publisher: 'Trikaay Aesthetics',
  alternates: {
    canonical: baseUrl,
  },
  openGraph: {
    title: 'Trikaay Aesthetics - Your Beauty Destination',
    description: 'Experience premium aesthetic treatments and beauty services.',
    url: baseUrl,
    siteName: 'Trikaay Aesthetics',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: `${baseUrl}/images/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: 'Trikaay Aesthetics',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Trikaay Aesthetics',
    description: 'Experience premium aesthetic treatments and beauty services.',
    creator: '@trikaayaesthetics',
    images: [`${baseUrl}/images/og-image.jpg`],
  },
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
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: `${baseUrl}/site.webmanifest`,
  themeColor: '#ffffff',
};

export default defaultMetadata;
