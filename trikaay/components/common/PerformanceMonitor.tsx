'use client';

import { useEffect } from 'react';
import { useReportWebVitals } from 'next/web-vitals';

export function PerformanceMonitor() {
  useReportWebVitals((metric) => {
    if (process.env.NODE_ENV === 'development') {
      console.log(metric);
    }
    // In production, you can send these metrics to your analytics
    // Example: sendToAnalytics(metric);
  });

  useEffect(() => {
    // Track time to interactive
    const measureTTI = () => {
      if (window.performance) {
        const timing = window.performance.timing;
        const tti = timing.domInteractive - timing.navigationStart;
        console.log(`Time to Interactive: ${tti}ms`);
      }
    };

    if (document.readyState === 'complete') {
      measureTTI();
    } else {
      window.addEventListener('load', measureTTI);
      return () => window.removeEventListener('load', measureTTI);
    }
  }, []);

  return null;
}
