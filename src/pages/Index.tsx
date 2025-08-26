import { useEffect } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Products from '@/components/Products';
import About from '@/components/About';
import Location from '@/components/Location';
import Footer from '@/components/Footer';

const Index = () => {
  useEffect(() => {
    // Animate elements on scroll
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
        }
      });
    }, observerOptions);

    // Observe all fade-in-up elements
    const fadeElements = document.querySelectorAll('.fade-in-up');
    fadeElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <main className="min-h-screen">
      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CafeOrCoffeeShop",
            "name": "Café La Montaña",
            "description": "Café artesanal colombiano con más de 25 años de experiencia, ubicado en el corazón de Bogotá",
            "url": "https://cafelamontana.com",
            "telephone": "+57-1-234-5678",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Carrera 13 #85-32",
              "addressLocality": "Bogotá",
              "addressCountry": "Colombia"
            },
            "openingHours": [
              "Mo-Fr 07:00-20:00",
              "Sa 08:00-21:00", 
              "Su 09:00-19:00"
            ],
            "servesCuisine": "Coffee",
            "priceRange": "$$"
          })
        }}
      />
      
      <Header />
      
      <Hero />
      
      <Products />
      
      <About />
      
      <Location />
      
      <Footer />
    </main>
  );
};

export default Index;
