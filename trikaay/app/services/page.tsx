import Image from 'next/image';
import Link from 'next/link';
import Footer from '../components/Footer';

const allServices = [
  {
    title: "QR678 Hair Growth Therapy",
    description: "Combat hair loss and promote natural hair regrowth with our advanced QR678 Hair Therapy, performed by experienced professionals.",
    image: "/images/Hairqr678.png",
    href: "/services/qr678-hair-therapy",
    category: "Hair Restoration"
  },
  {
    title: "Medical-Grade Facials & Hydrafacials",
    description: "Advanced skin treatments that go far beyond salon facials. Deeply cleanse, exfoliate, hydrate, and rejuvenate your skin.",
    image: "/images/HydraFacial.jpeg",
    href: "/services/facials",
    category: "Skin Rejuvenation"
  },
  {
    title: "Advanced Chemical Peels",
    description: "Safe, dermatologist-approved chemical peels to target acne, pigmentation, scars, and dull skin with minimal downtime.",
    image: "/images/ChemicalPeel.jpeg",
    href: "/services/chemical-peels",
    category: "Skin Rejuvenation"
  },
  {
    title: "Acne & Pigmentation Management",
    description: "Holistic, expert-led treatments to say goodbye to stubborn acne and pigmentation with comprehensive solutions.",
    image: "/images/acne-pigmentation.jpg",
    href: "/services/acne-pigmentation",
    category: "Skin Rejuvenation"
  },
  {
    title: "Anti-Aging Solutions",
    description: "Rediscover youthful, radiant skin with advanced anti-aging treatments targeting fine lines, wrinkles, and loss of elasticity.",
    image: "/images/anti-aging.jpg",
    href: "/services/anti-aging",
    category: "Dermatology & Wellness"
  },
  {
    title: "Microneedling with PRP / Derma Pen",
    description: "Advanced skin rejuvenation using PRP and Derma Pen technology to restore natural glow and boost collagen.",
    image: "/images/microneedle.jpg",
    href: "/services/microneedling",
    category: "Skin Rejuvenation"
  },
  {
    title: "Under Eye & Lip Treatments",
    description: "Revitalize delicate under-eye and lip areas with advanced treatments for dark circles, fine lines, and lip dullness.",
    image: "/images/undereye.jpg",
    href: "/services/under-eye-lip",
    category: "Dermatology & Wellness"
  },
  {
    title: "Growth Factor Concentrate (GFC) Therapy",
    description: "Revitalize your hair and skin with advanced GFC therapy using your own growth factors for natural rejuvenation.",
    image: "/images/GFC.jpeg",
    href: "/services/gfc",
    category: "Hair Restoration"
  }
];

const categories = ["All Services", "Skin Rejuvenation", "Hair Restoration", "Dermatology & Wellness"];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-white py-0">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-playfair text-4xl md:text-5xl font-bold mb-6 text-black">
            Our <span className="gradient-text">Services</span>
          </h1>
          <div className="w-24 h-1 bg-[var(--accent-color)] rounded-full mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Discover our comprehensive range of premium treatments designed to enhance your natural beauty 
            and boost your confidence with cutting-edge technology and expert care.
          </p>
        </div>
      </section>

      {/* Back to Homepage Link */}
      <section className="py-4 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="text-[var(--accent-color)] hover:text-yellow-600 transition-colors font-medium"
          >
            ← Back to Homepage
          </Link>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allServices.map((service, index) => (
              <div key={index} className="group bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-300">
                {/* Service Image */}
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-[var(--accent-color)] text-black px-3 py-1 rounded-full text-sm font-semibold">
                      {service.category}
                    </span>
                  </div>
                </div>

                {/* Service Content */}
                <div className="p-6">
                  <h3 className="font-playfair text-xl font-bold mb-3 text-black group-hover:text-[var(--accent-color)] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  <Link
                    href={service.href}
                    className="inline-flex items-center text-[var(--accent-color)] font-semibold hover:underline group-hover:text-yellow-600 transition-colors"
                  >
                    Learn More
                    <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-gray-900 to-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Start Your <span className="gradient-text">Transformation?</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Schedule a consultation with our expert team and discover how we can help you achieve your aesthetic and wellness goals.
          </p>
          <Link
            href="/#contact"
            className="inline-block bg-[var(--accent-color)] text-black font-semibold py-4 px-8 rounded-full hover:bg-yellow-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            Book Your Consultation
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
} 