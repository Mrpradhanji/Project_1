export interface BlogPost {
  title: string;
  slug: string;
  excerpt: string;
  date: string;
  author: string;
  category: string;
  readTime: string;
  image: string;
  content: string; // Added detailed content field
}

export const blogPosts: BlogPost[] = [
  {
    title: 'The Science Behind Medical-Grade Facials: Why They Outperform Salon Treatments',
    slug: 'science-behind-medical-grade-facials',
    excerpt: 'Discover how medical-grade facials differ from salon facials and why they deliver superior results for your skin. Learn about the advanced technology and clinical protocols that make these treatments more effective.',
    date: '2024-06-01',
    author: 'Dr. Priyanka Mehendiratta',
    category: 'Skin Rejuvenation',
    readTime: '8 min read',
    image: '/images/HydraFacial.jpeg',
    content: `
Medical-grade facials are more than just a pampering experience—they are scientifically designed treatments performed by trained professionals using advanced technology and clinical-grade products. Unlike salon facials, which focus mainly on relaxation and surface cleansing, medical-grade facials target deeper skin concerns such as acne, pigmentation, aging, and dehydration.

**Key Benefits:**
- Use of medical-grade ingredients and devices
- Customization based on skin analysis
- Performed under the supervision of a dermatologist
- Results-driven protocols for long-term improvement

**Why Choose Medical-Grade Facials?**
These facials can address specific skin issues, stimulate collagen production, and improve overall skin health. They are ideal for anyone seeking visible, lasting results beyond what a regular salon can offer.
    `
  },
  {
    title: 'Top 5 Benefits of Chemical Peels for Indian Skin: A Complete Guide',
    slug: 'benefits-of-chemical-peels',
    excerpt: 'Learn why chemical peels are a safe and effective solution for pigmentation, acne, and dullness in Indian skin types. Expert insights on choosing the right peel for your skin concerns.',
    date: '2024-05-20',
    author: 'Dr. Priyanka Mehendiratta',
    category: 'Skin Rejuvenation',
    readTime: '10 min read',
    image: '/images/ChemicalPeel.jpeg',
    content: `
Chemical peels are a popular dermatological treatment in India, especially for those struggling with pigmentation, acne scars, and uneven skin tone. The procedure involves applying a safe chemical solution to exfoliate the top layers of skin, revealing fresher, clearer skin beneath.

**Top 5 Benefits:**
1. Reduces pigmentation and dark spots
2. Treats active acne and prevents breakouts
3. Improves skin texture and radiance
4. Minimizes fine lines and wrinkles
5. Boosts collagen production for firmer skin

**Choosing the Right Peel:**
Consult a dermatologist to select the best peel for your skin type and concerns. Options include glycolic, salicylic, lactic, and TCA peels, each with unique benefits.
    `
  },
  {
    title: 'QR678 Hair Therapy: The Revolutionary Solution for Hair Loss in India',
    slug: 'qr678-hair-therapy-guide',
    excerpt: 'Explore the science behind QR678 Hair Therapy and how this patented treatment is helping thousands of Indians regain their confidence with natural hair regrowth.',
    date: '2024-05-15',
    author: 'Dr. Priyanka Mehendiratta',
    category: 'Hair Restoration',
    readTime: '12 min read',
    image: '/images/Hairqr678.png',
    content: `
QR678 Hair Therapy is a breakthrough, non-surgical treatment for hair loss that uses a patented combination of growth factors to stimulate natural hair regrowth. It is especially effective for androgenetic alopecia and other common hair loss conditions in India.

**How It Works:**
- Microinjections deliver growth factors directly to the scalp
- Stimulates dormant hair follicles
- Improves hair density and thickness

**Why Choose QR678?**
The treatment is safe, virtually painless, and requires no downtime. Most patients see visible results within a few sessions, making it a preferred choice for both men and women.
    `
  },
  {
    title: 'Anti-Aging Solutions: Natural Ways to Maintain Youthful Skin',
    slug: 'anti-aging-solutions-guide',
    excerpt: 'Discover effective anti-aging treatments that help you maintain youthful, radiant skin. From prevention to advanced treatments, learn what works best for Indian skin.',
    date: '2024-05-10',
    author: 'Dr. Priyanka Mehendiratta',
    category: 'Dermatology & Wellness',
    readTime: '9 min read',
    image: '/images/anti-aging.jpg',
    content: `
Aging is a natural process, but with the right skincare and lifestyle choices, you can maintain youthful, glowing skin for years. Indian skin, in particular, benefits from a combination of preventive care and advanced dermatological treatments.

**Natural Anti-Aging Tips:**
- Use broad-spectrum sunscreen daily
- Incorporate antioxidants like Vitamin C
- Stay hydrated and eat a balanced diet
- Avoid smoking and excessive alcohol

**Advanced Solutions:**
- Medical-grade facials and peels
- Microneedling and PRP therapy
- Non-invasive skin tightening treatments

Consult a dermatologist to create a personalized anti-aging plan that suits your skin type and goals.
    `
  },
  {
    title: 'Acne & Pigmentation Management: Holistic Approaches for Clear Skin',
    slug: 'acne-pigmentation-management',
    excerpt: 'Comprehensive guide to managing acne and pigmentation with holistic treatments. Learn about the root causes and effective solutions for lasting results.',
    date: '2024-05-05',
    author: 'Dr. Priyanka Mehendiratta',
    category: 'Skin Rejuvenation',
    readTime: '11 min read',
    image: '/images/Acne.png',
    content: `
Acne and pigmentation are common concerns for Indian skin, often requiring a holistic approach for effective management. Addressing both internal and external factors is key to achieving clear, healthy skin.

**Holistic Strategies:**
- Medical-grade topical treatments
- Chemical peels and laser therapy
- Dietary modifications and stress management
- Regular cleansing and sun protection

**Long-Term Results:**
Consistency is crucial. Work with a dermatologist to identify triggers and develop a comprehensive plan tailored to your skin’s needs.
    `
  },
  {
    title: 'Under Eye & Lip Treatments: Revitalizing Your Most Expressive Features',
    slug: 'under-eye-lip-treatments',
    excerpt: 'Specialized treatments for the delicate areas around your eyes and lips. Learn how to address dark circles, fine lines, and lip dullness effectively.',
    date: '2024-04-30',
    author: 'Dr. Priyanka Mehendiratta',
    category: 'Dermatology & Wellness',
    readTime: '7 min read',
    image: '/images/undereye.jpg',
    content: `
The skin around the eyes and lips is delicate and often the first to show signs of aging or fatigue. Specialized treatments can help rejuvenate these areas, reducing dark circles, fine lines, and dullness.

**Effective Treatments:**
- Under-eye fillers and serums
- Laser therapy for pigmentation
- Lip hydration and enhancement procedures

**Home Care Tips:**
- Use gentle, hydrating products
- Protect with sunscreen and sunglasses
- Stay hydrated and get adequate sleep
    `
  },
  {
    title: 'Microneedling with PRP: The Ultimate Skin Rejuvenation Treatment',
    slug: 'microneedling-prp-guide',
    excerpt: 'Everything you need to know about microneedling with PRP. How this combination treatment stimulates natural collagen production for radiant skin.',
    date: '2024-04-25',
    author: 'Dr. Priyanka Mehendiratta',
    category: 'Skin Rejuvenation',
    readTime: '10 min read',
    image: '/images/prp.png',
    content: `
Microneedling with PRP (Platelet-Rich Plasma) is a powerful skin rejuvenation treatment that combines collagen induction therapy with the healing properties of your own blood’s growth factors.

**How It Works:**
- Microneedling creates micro-injuries to stimulate collagen
- PRP is applied to enhance healing and results

**Benefits:**
- Reduces scars, fine lines, and pigmentation
- Improves skin texture and elasticity
- Minimal downtime and natural results

Consult a dermatologist to see if this treatment is right for your skin concerns.
    `
  },
  {
    title: 'GFC Therapy: Harnessing Your Body\'s Natural Growth Factors',
    slug: 'gfc-therapy-guide',
    excerpt: 'Understanding Growth Factor Concentrate (GFC) therapy and how it uses your own growth factors to promote hair growth and skin rejuvenation.',
    date: '2024-04-20',
    author: 'Dr. Priyanka Mehendiratta',
    category: 'Hair Restoration',
    readTime: '8 min read',
    image: '/images/GFC.jpeg',
    content: `
Growth Factor Concentrate (GFC) therapy is an innovative treatment that uses your own blood’s growth factors to stimulate hair growth and skin repair. It is a safe, natural, and effective option for those seeking non-surgical solutions.

**How GFC Works:**
- Blood is drawn and processed to concentrate growth factors
- Injected into the scalp or skin to promote regeneration

**Benefits:**
- Natural, biocompatible treatment
- Improves hair density and skin quality
- Minimal risk of side effects
    `
  }
];

export const serviceCategories = [
  {
    name: "Skin Rejuvenation",
    description: "Advanced treatments for glowing, healthy skin",
    services: ["Medical-Grade Facials", "Chemical Peels", "Acne Management", "Microneedling"],
  },
  {
    name: "Hair Restoration",
    description: "Innovative solutions for hair loss and thinning",
    services: ["QR678 Therapy", "GFC Therapy", "PRP Treatments", "Hair Consultation"],
  },
  {
    name: "Dermatology & Wellness",
    description: "Comprehensive skin and wellness care",
    services: ["Anti-Aging", "Under Eye Treatments", "Lip Enhancement", "Skin Consultation"],
  }
];
