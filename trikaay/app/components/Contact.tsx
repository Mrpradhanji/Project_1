'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import emailjs from 'emailjs-com';
import { toast } from 'react-toastify';

const Contact = () => {
  const contactRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    date: '',
    time: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({
    email: '',
    phone: '',
    date: '',
  });

  // Helper to get today's date in yyyy-mm-dd format
  const todayStr = new Date().toISOString().split('T')[0];

  useEffect(() => {
    // Initialize EmailJS with environment variables
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;
    if (publicKey) {
      emailjs.init(publicKey);
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = contactRef.current?.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const validate = () => {
    let valid = true;
    const newErrors = { email: '', phone: '', date: '' };
    // Email validation
    if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,}$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address.';
      valid = false;
    }
    // Phone validation (exactly 10 digits, only numbers)
    if (!/^\d{10}$/.test(formData.phone.replace(/\D/g, ''))) {
      newErrors.phone = 'Phone number must be exactly 10 digits.';
      valid = false;
    }
    // Date validation (today or after)
    if (formData.date) {
      const today = new Date();
      today.setHours(0,0,0,0);
      const selected = new Date(formData.date);
      if (selected < today) {
        newErrors.date = 'Date must be today or later.';
        valid = false;
      }
    }
    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    
    // Check if EmailJS is configured
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;
    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
  
    if (!publicKey || !serviceId || !templateId) {
      alert('EmailJS is not configured. Please check your environment variables.');
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // EmailJS template parameters
      const templateParams = {
        user_name: formData.fullName,
        user_email: formData.email,
        user_phone: formData.phone,
        user_date: formData.date,
        user_time: formData.time,
        user_message: formData.message,
        reply_to: formData.email
      };

      // Send email using EmailJS
      const result = await emailjs.send(serviceId, templateId, templateParams);

      // Reset form
      setFormData({
        fullName: '',
        phone: '',
        email: '',
        date: '',
        time: '',
        message: ''
      });
      
      toast.success('Your consultation request was submitted!');
    } catch (error) {
      console.error('Email sending failed:', error);
      toast.error('Failed to submit request.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: "Visit Us",
      details: "SE - 86 Jaipuria Sunrise Plaza, Ahinsa Khand 1, Indirapuram, Ghaziabad, Uttar Pradesh, India",
      link: "#",
      type: "address"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      title: "Call Us",
      phoneNumbers: [
        { label: "India", number: "+91 98765 43210", link: "tel:+919876543210" },
        { label: "International", number: "+971 4 123 4567", link: "tel:+97141234567" },
      ],
      type: "phone"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: "Email Us",
      details: "lenteasers@gmail.com",
      link: "mailto:lenteasers@gmail.com",
      type: "email"
    }
  ];

  return (
    <section id="contact" ref={contactRef} className="section-padding bg-gradient-to-br from-gray-900 to-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-accent-color/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-accent-color/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container-custom relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="fade-in">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-white mb-6">
              Get In{' '}
              <span className="gradient-text">Touch</span>
            </h2>
            <div className="w-20 h-1 bg-accent-color rounded-full mx-auto mb-6"></div>
            <p className="font-inter text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Ready to start your transformation journey? Contact us today to schedule your consultation 
              and discover how we can help you achieve your aesthetic and wellness goals.
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Contact Form */}
          <div className="slide-in-left">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 flex flex-col min-h-[500px]">
              <h3 className="font-playfair text-center text-2xl font-bold text-white mb-6">
                Book Your <span className='text-yellow-600'>Consultation</span>
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="fullName" className="block font-inter font-medium text-gray-300 mb-2">
                      Full Name *
                    </label>
                    <input
                      id="fullName"
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      required
                      className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:ring-offset-2 transition-colors duration-300"
                      placeholder="Enter your full name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block font-inter font-medium text-gray-300 mb-2">
                      Phone Number *
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:ring-offset-2 transition-colors duration-300"
                      placeholder="Enter your number"
                    />
                    {errors.phone && (
                      <div className="mt-2 bg-red-500/90 text-white text-xs rounded px-3 py-2 animate-fade-in">
                        {errors.phone}
                      </div>
                    )}
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block font-inter font-medium text-gray-300 mb-2">
                    Email Address *
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:ring-offset-2 transition-colors duration-300"
                    placeholder="Enter your email address"
                  />
                  {errors.email && (
                    <div className="mt-2 bg-red-500/90 text-white text-xs rounded px-3 py-2 animate-fade-in">
                      {errors.email}
                    </div>
                  )}
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="date" className="block font-inter font-medium text-gray-300 mb-2">
                      Preferred Date
                    </label>
                    <input
                      id="date"
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleInputChange}
                      min={todayStr}
                      className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:ring-offset-2 transition-colors duration-300"
                    />
                    {errors.date && (
                      <div className="mt-2 bg-red-500/90 text-white text-xs rounded px-3 py-2 animate-fade-in">
                        {errors.date}
                      </div>
                    )}
                  </div>
                  
                  <div>
                    <label htmlFor="time" className="block font-inter font-medium text-gray-300 mb-2">
                      Preferred Time
                    </label>
                    <input
                      id="time"
                      type="time"
                      name="time"
                      value={formData.time}
                      onChange={handleInputChange}
                      className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:ring-offset-2 transition-colors duration-300"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block font-inter font-medium text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:ring-offset-2 transition-colors duration-300 resize-none"
                    placeholder="Tell us about your concerns or goals..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gray-300 text-black py-4 px-8 rounded-full font-semibold text-lg hover:bg-yellow-600 transition-all duration-300 transform hover:scale-105 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:ring-offset-2"
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center space-x-2">
                      <span>Submitting</span>
                      <span className="loading-dots"></span>
                    </span>
                  ) : (
                    'Submit Consultation Request'
                  )}
                </button>
              </form>
            </div>
          </div>

          {/* Contact Information & Map */}
          <div className="slide-in-right flex flex-col min-h-[500px]">
            {/* Contact Info Cards */}
            <div className="space-y-6 mb-8">
              {contactInfo.map((info, index) => (
                <div key={index} className="group">
                  <div className="flex items-start space-x-4 p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300 hover-lift">
                    <div className="flex-shrink-0 w-12 h-12 bg-accent-color/20 rounded-lg flex items-center justify-center text-accent-color group-hover:bg-accent-color group-hover:text-white transition-all duration-300">
                      {info.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-inter font-semibold text-white mb-1">
                        {info.title}
                      </h4>
                      {info.type === "phone" && info.phoneNumbers ? (
                        <div className="space-y-2">
                          {info.phoneNumbers.map((phone, phoneIndex) => (
                            <div key={phoneIndex} className="flex items-center space-x-2">
                              <span className="font-inter text-gray-300 text-sm">{phone.label}:</span>
                              <a 
                                href={phone.link}
                                className="font-inter text-white font-medium hover:text-accent-color transition-colors duration-300"
                              >
                                {phone.number}
                              </a>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <a 
                          href={info.link}
                          className="font-inter text-gray-300 hover:text-accent-color transition-colors duration-300"
                        >
                          {info.details}
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Google Map Card */}
            <div className="w-full overflow-hidden rounded-2xl shadow-md border border-gray-700 bg-gray-100" style={{ minHeight: '200px' }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.619502324454!2d77.37340887601667!3d28.64116388368785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfbf75094f5cd%3A0xdbe0e296258d838!2sLens%20Teasers%20Professional%20Baby%20and%20Maternity%20Photography%20Studio!5e0!3m2!1sen!2sin!4v1750594834911!5m2!1sen!2sin"
                width="100%"
                height="200"
                style={{ border: 0, width: '100%', minHeight: '240px' }}
                allowFullScreen
                title="Lensteasers"
              ></iframe>
              <noscript>
                <div className="p-4 text-center text-gray-700 bg-white rounded-b-2xl">
                  Map could not be loaded. <a href="https://goo.gl/maps/2w6k8Qw2QwQ2" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">View on Google Maps</a>
                </div>
              </noscript>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 