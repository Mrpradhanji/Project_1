
import type { Metadata, Viewport } from "next";
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/react';
import { GoogleAnalytics } from '@next/third-parties/google';
import Script from 'next/script';

// Import components
import { PerformanceMonitor } from "@/components/common/PerformanceMonitor";
import { ResourceHints } from "@/components/common/ResourceHints";
import { WebsiteSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";

// Import metadata
import defaultMetadata from "./metadata";

// Import styles
import "./globals.css";

// Viewport configuration
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#1a1a1a' },
  ],
  colorScheme: 'light dark',
};

// Clean up metadata to remove themeColor
export const metadata = {
  ...defaultMetadata,
  themeColor: undefined, // Remove themeColor from metadata as it's now in viewport
};

// Default breadcrumb items for the website
const defaultBreadcrumbItems = [
  { name: 'Home', item: 'https://trikaayaesthetics.com' },
  { name: 'Aesthetic Clinic', item: 'https://trikaayaesthetics.com' },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

  return (
    <html 
      lang="en" 
      className="font-sans antialiased"
      suppressHydrationWarning
    >
      <head>
        <ResourceHints />
        
        {/* Structured Data */}
        <WebsiteSchema />
        <BreadcrumbSchema items={defaultBreadcrumbItems} />
        
        {/* Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />

        {/* Favicon and icons */}
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        {/* Optionally keep the .ico for legacy support */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <meta name="theme-color" content="#1a1a1a" />
      </head>
      
      <body className="min-h-screen bg-background font-sans antialiased" suppressHydrationWarning={true}>
        {children}
        
        {/* Performance Monitoring */}
        <PerformanceMonitor />
        
        {/* Analytics */}
        <SpeedInsights />
        <Analytics />
        {GA_MEASUREMENT_ID && (
          <>
            <GoogleAnalytics gaId={GA_MEASUREMENT_ID} />
            <Script
              id="google-analytics"
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${GA_MEASUREMENT_ID}', {
                    page_path: window.location.pathname,
                  });
                `,
              }}
            />
          </>
        )}

        {/* Tawk.to Chat Widget */}
        <Script
          id="tawk-to"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
              (function(){
                var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
                s1.async=true;
                s1.src='https://embed.tawk.to/688b118f92f8b9191d312590/1j1fjp6a5';
                s1.charset='UTF-8';
                s1.setAttribute('crossorigin','*');
                s0.parentNode.insertBefore(s1,s0);
              })();
            `,
          }}
        />
      </body>
    </html>
  );
}
