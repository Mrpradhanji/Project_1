'use client';

export function ResourceHints() {
  return (
    <>
      {/* Preconnect to external domains */}
      <link
        rel="preconnect"
        href="https://fonts.googleapis.com"
        crossOrigin="anonymous"
      />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="anonymous"
      />
      
      {/* Preload critical resources */}
      <link
        rel="preload"
        href="/fonts/Inter.var.woff2"
        as="font"
        type="font/woff2"
        crossOrigin="anonymous"
      />
      
      {/* Prefetch DNS for external domains */}
      <link rel="dns-prefetch" href="//www.google-analytics.com" />
      
      {/* Preload above-the-fold images */}
      <link
        rel="preload"
        href="/images/hero.jpg"
        as="image"
        imageSrcSet="
          /images/hero-640.jpg 640w,
          /images/hero-1024.jpg 1024w,
          /images/hero-1920.jpg 1920w
        "
        imageSizes="100vw"
      />
    </>
  );
}
