import { CheckCircle } from 'lucide-react';
import Image from 'next/image';
import Footer from '../../components/Footer';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import ServiceHero from '../../components/ServiceHero';

export default function GFCPage() {
  return (
    <main className="min-h-screen bg-white py-0">
      {/* Breadcrumbs */}
      <div className="py-4 flex justify-center">
        <Breadcrumbs aria-label="breadcrumb">
          <Link underline="hover" color="inherit" href="/">
            Home
          </Link>
          <Typography color="text.primary">Services</Typography>
          <Typography color="text.primary">Growth Factor Concentrate</Typography>
        </Breadcrumbs>
      </div>
      {/* Hero Section */}
      <ServiceHero
        title="Growth Factor Concentrate (GFC) Therapy"
        description="Revitalize your hair and skin with advanced Growth Factor Concentrate (GFC) therapy at Trikaay Aesthetics. Harness the power of your own growth factors for natural, safe, and effective rejuvenation."
        imageSrc="/images/GFC.jpeg"
        imageAlt="Growth Factor Concentrate Therapy"
        ctaText="Book Consultation"
        ctaHref="/contact"
      />
      {/* Add extra spacing between hero and details section */}
      <div className="h-12 md:h-20"></div>
      {/* Details Section */}
      <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16 -mt-10 mb-12 flex flex-col gap-12">
        {/* What is GFC Therapy? */}
        <div className="flex flex-col gap-4">
          <h2 className="text-2xl md:text-3xl font-semibold text-black mb-1 leading-snug">What is Growth Factor Concentrate (GFC) Therapy?</h2>
          <div className="w-16 h-1 bg-[var(--accent-color)] rounded-full mb-2"></div>
          <p className="text-black text-lg leading-relaxed">
            GFC therapy is a cutting-edge, non-surgical treatment that uses concentrated growth factors derived from your own blood to stimulate hair regrowth and skin rejuvenation. It is highly effective for hair loss, thinning, and improving skin texture and elasticity.
          </p>
        </div>
        {/* Benefits */}
        <div className="flex flex-col gap-4">
          <h2 className="text-2xl md:text-3xl font-semibold text-black mb-1 leading-snug">Benefits of GFC Therapy</h2>
          <div className="w-12 h-1 bg-[var(--accent-color)] rounded-full mb-2"></div>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-3">
            {[
              'Promotes natural hair regrowth',
              'Improves hair density and thickness',
              'Reduces hair fall',
              'Enhances skin texture and glow',
              'Minimally invasive and safe',
              'No risk of allergy (autologous)',
            ].map((item) => (
              <li key={item} className="flex items-center text-black text-lg py-1">
                <span className="w-3 h-3 bg-[var(--accent-color)] rounded-full mr-3 inline-block"></span>
                {item}
              </li>
            ))}
          </ul>
        </div>
        {/* Who is it For? */}
        <div className="flex flex-col gap-4">
          <h2 className="text-2xl md:text-3xl font-semibold text-black mb-1 leading-snug">Who is it For?</h2>
          <div className="w-12 h-1 bg-[var(--accent-color)] rounded-full mb-2"></div>
          <p className="text-black text-lg leading-relaxed">
            GFC therapy is ideal for men and women experiencing hair thinning, early-stage baldness, or those seeking non-surgical facial rejuvenation. A consultation with our experts will help determine your suitability.
          </p>
        </div>
        {/* Treatment Process */}
        <div className="flex flex-col gap-4">
          <h2 className="text-2xl md:text-3xl font-semibold text-black mb-1 leading-snug">Treatment Process</h2>
          <div className="w-12 h-1 bg-[var(--accent-color)] rounded-full mb-2"></div>
          <p className="text-black text-lg leading-relaxed">
            The procedure involves drawing a small amount of your blood, processing it to concentrate the growth factors, and injecting it into the scalp or skin. The process is quick, safe, and requires minimal downtime.
          </p>
        </div>
        {/* Results and Aftercare */}
        <div className="flex flex-col gap-4">
          <h2 className="text-2xl md:text-3xl font-semibold text-black mb-1 leading-snug">Results and Aftercare</h2>
          <div className="w-12 h-1 bg-[var(--accent-color)] rounded-full mb-2"></div>
          <p className="text-black text-lg leading-relaxed">
            Most clients notice visible improvements in hair growth or skin quality after 2–3 sessions. For best results, follow the aftercare instructions provided by our dermatologists.
          </p>
        </div>
        {/* Why Choose Trikaay Aesthetics? */}
        <div className="flex flex-col gap-4 mb-4">
          <h2 className="text-2xl md:text-3xl font-semibold text-black mb-1 leading-snug">Why Choose Trikaay Aesthetics?</h2>
          <div className="w-12 h-1 bg-[var(--accent-color)] rounded-full mb-2"></div>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-3">
            {[
              'Experienced dermatologists and trichologists',
              'State-of-the-art technology',
              'Personalized treatment plans',
              'Safe, hygienic, and comfortable environment',
            ].map((item) => (
              <li key={item} className="flex items-center text-black text-lg py-1">
                <span className="w-3 h-3 bg-[var(--accent-color)] rounded-full mr-3 inline-block"></span>
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex justify-center mt-8">
          <a href="/contact" className="px-8 py-3 rounded-full bg-[var(--accent-color)] text-white font-semibold shadow-lg hover:bg-yellow-600 transition-all text-lg">Book Your Consultation</a>
        </div>
      </section>
      <Footer />
    </main>
  );
}
