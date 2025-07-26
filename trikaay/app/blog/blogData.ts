export interface BlogPost {
  title: string;
  slug: string;
  excerpt: string;
  date: string;
  author: string;
  category: string;
  readTime: string;
  image: string;
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
    image: '/images/HydraFacial.jpeg'
  },
  {
    title: 'Top 5 Benefits of Chemical Peels for Indian Skin: A Complete Guide',
    slug: 'benefits-of-chemical-peels',
    excerpt: 'Learn why chemical peels are a safe and effective solution for pigmentation, acne, and dullness in Indian skin types. Expert insights on choosing the right peel for your skin concerns.',
    date: '2024-05-20',
    author: 'Dr. Priyanka Mehendiratta',
    category: 'Skin Rejuvenation',
    readTime: '10 min read',
    image: '/images/ChemicalPeel.jpeg'
  },
  {
    title: 'QR678 Hair Therapy: The Revolutionary Solution for Hair Loss in India',
    slug: 'qr678-hair-therapy-guide',
    excerpt: 'Explore the science behind QR678 Hair Therapy and how this patented treatment is helping thousands of Indians regain their confidence with natural hair regrowth.',
    date: '2024-05-15',
    author: 'Dr. Priyanka Mehendiratta',
    category: 'Hair Restoration',
    readTime: '12 min read',
    image: '/images/Hairqr678.png'
  },
  {
    title: 'Anti-Aging Solutions: Natural Ways to Maintain Youthful Skin',
    slug: 'anti-aging-solutions-guide',
    excerpt: 'Discover effective anti-aging treatments that help you maintain youthful, radiant skin. From prevention to advanced treatments, learn what works best for Indian skin.',
    date: '2024-05-10',
    author: 'Dr. Priyanka Mehendiratta',
    category: 'Dermatology & Wellness',
    readTime: '9 min read',
    image: '/images/anti-aging.jpg'
  },
  {
    title: 'Acne & Pigmentation Management: Holistic Approaches for Clear Skin',
    slug: 'acne-pigmentation-management',
    excerpt: 'Comprehensive guide to managing acne and pigmentation with holistic treatments. Learn about the root causes and effective solutions for lasting results.',
    date: '2024-05-05',
    author: 'Dr. Priyanka Mehendiratta',
    category: 'Skin Rejuvenation',
    readTime: '11 min read',
    image: '/images/Acne.png'
  },
  {
    title: 'Under Eye & Lip Treatments: Revitalizing Your Most Expressive Features',
    slug: 'under-eye-lip-treatments',
    excerpt: 'Specialized treatments for the delicate areas around your eyes and lips. Learn how to address dark circles, fine lines, and lip dullness effectively.',
    date: '2024-04-30',
    author: 'Dr. Priyanka Mehendiratta',
    category: 'Dermatology & Wellness',
    readTime: '7 min read',
    image: '/images/undereye.jpg'
  },
  {
    title: 'Microneedling with PRP: The Ultimate Skin Rejuvenation Treatment',
    slug: 'microneedling-prp-guide',
    excerpt: 'Everything you need to know about microneedling with PRP. How this combination treatment stimulates natural collagen production for radiant skin.',
    date: '2024-04-25',
    author: 'Dr. Priyanka Mehendiratta',
    category: 'Skin Rejuvenation',
    readTime: '10 min read',
    image: '/images/prp.png'
  },
  {
    title: 'GFC Therapy: Harnessing Your Body\'s Natural Growth Factors',
    slug: 'gfc-therapy-guide',
    excerpt: 'Understanding Growth Factor Concentrate (GFC) therapy and how it uses your own growth factors to promote hair growth and skin rejuvenation.',
    date: '2024-04-20',
    author: 'Dr. Priyanka Mehendiratta',
    category: 'Hair Restoration',
    readTime: '8 min read',
    image: '/images/GFC.jpeg'
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
