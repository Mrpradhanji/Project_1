'use client';

import Script from 'next/script';

interface SchemaProps {
  schema: Record<string, any>;
  type?: 'application/ld+json' | 'application/json';
}

export const Schema = ({ schema, type = 'application/ld+json' }: SchemaProps) => {
  return (
    <Script
      id={`schema-${Math.random().toString(36).substring(2, 9)}`}
      type={type}
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema, null, 2)
      }}
    />
  );
};

export const WebsiteSchema = () => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'MedicalBusiness',
    name: 'Trikaay Aesthetics',
    image: 'https://trikaayaesthetics.com/images/logo.png',
    '@id': 'https://trikaayaesthetics.com',
    url: 'https://trikaayaesthetics.com',
    telephone: '+91-XXXXXXXXXX',
    priceRange: '₹₹₹',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Your Clinic Address',
      addressLocality: 'City',
      postalCode: '110001',
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 28.6139,
      longitude: 77.2090,
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '10:00',
      closes: '19:00',
    },
    sameAs: [
      'https://www.instagram.com/trikaayaesthetics',
      'https://www.facebook.com/trikaayaesthetics',
      'https://www.linkedin.com/company/trikaay-aesthetics',
    ],
  };

  return <Schema schema={schema} />;
};

interface BreadcrumbItem {
  name: string;
  item: string;
}

export const BreadcrumbSchema = ({ items }: { items: BreadcrumbItem[] }) => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.item,
    })),
  };

  return <Schema schema={schema} />;
};

interface FAQItem {
  question: string;
  answer: string;
}

export const FAQSchema = ({ faqItems }: { faqItems: FAQItem[] }) => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };

  return <Schema schema={schema} />;
};
