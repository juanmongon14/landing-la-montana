import heroImage from '@/assets/hero-coffee-shop.jpg';

const Hero = () => {
  const scrollToCafe = () => {
    const element = document.getElementById('cafe');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="hero-overlay absolute inset-0"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-cream max-w-4xl mx-auto px-6">
        <div className="fade-in-up">
          <h1 className="text-5xl md:text-7xl font-playfair font-bold mb-6 leading-tight">
            El Sabor Auténtico
            <span className="block text-gold">de Colombia</span>
          </h1>
        </div>
        
        <div className="fade-in-up delay-1">
          <p className="text-xl md:text-2xl mb-8 text-cream/90 leading-relaxed max-w-2xl mx-auto">
            Descubre los mejores granos de café artesanal cultivados en las montañas 
            de Colombia, tostados con pasión en el corazón de Bogotá.
          </p>
        </div>

        <div className="fade-in-up delay-2">
          <button 
            onClick={scrollToCafe}
            className="btn-hero group"
          >
            <span className="flex items-center space-x-2">
              <span>Ordena Ahora</span>
              <svg 
                className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-cream animate-bounce">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;