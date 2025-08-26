import { Instagram, MessageCircle, Coffee, Heart } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contacto" className="bg-coffee-gradient text-cream">
      {/* Main Footer */}
      <div className="section-padding">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-2 space-y-6">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-cream/20 rounded-full">
                  <Coffee className="h-6 w-6 text-cream" />
                </div>
                <div>
                  <h3 className="text-2xl font-playfair font-bold">
                    Café La Montaña
                  </h3>
                  <p className="text-cream/80 text-sm">Artesanal • Bogotá</p>
                </div>
              </div>
              
              <p className="text-cream/90 leading-relaxed max-w-md">
                Más de 25 años llevando el mejor café colombiano a tu mesa. 
                Cada grano cuenta una historia de pasión, tradición y calidad excepcional.
              </p>
              
              {/* Social Media */}
              <div className="space-y-4">
                <h4 className="font-semibold text-cream">Síguenos</h4>
                <div className="flex space-x-4">
                  <a 
                    href="https://instagram.com/cafelamontana" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="group p-3 bg-cream/10 hover:bg-cream/20 rounded-full transition-all duration-300 hover:scale-110"
                  >
                    <Instagram className="h-5 w-5 text-cream group-hover:text-accent transition-colors" />
                  </a>
                  <a 
                    href="https://wa.me/5712345678" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="group p-3 bg-cream/10 hover:bg-cream/20 rounded-full transition-all duration-300 hover:scale-110"
                  >
                    <MessageCircle className="h-5 w-5 text-cream group-hover:text-accent transition-colors" />
                  </a>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-6">
              <h4 className="text-lg font-playfair font-semibold">Enlaces Rápidos</h4>
              <nav className="space-y-3">
                <button 
                  onClick={() => document.getElementById('inicio')?.scrollIntoView({ behavior: 'smooth' })}
                  className="block text-cream/80 hover:text-accent transition-colors"
                >
                  Inicio
                </button>
                <button 
                  onClick={() => document.getElementById('cafe')?.scrollIntoView({ behavior: 'smooth' })}
                  className="block text-cream/80 hover:text-accent transition-colors"
                >
                  Nuestro Café
                </button>
                <button 
                  onClick={() => document.getElementById('ubicacion')?.scrollIntoView({ behavior: 'smooth' })}
                  className="block text-cream/80 hover:text-accent transition-colors"
                >
                  Ubicación
                </button>
                <a 
                  href="tel:+5712345678"
                  className="block text-cream/80 hover:text-accent transition-colors"
                >
                  Contacto
                </a>
              </nav>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <h4 className="text-lg font-playfair font-semibold">Contáctanos</h4>
              <div className="space-y-3 text-cream/80">
                <p>
                  <strong className="text-cream">Dirección:</strong><br />
                  Carrera 13 #85-32<br />
                  Zona Rosa, Bogotá
                </p>
                <p>
                  <strong className="text-cream">Teléfono:</strong><br />
                  +57 1 234-5678
                </p>
                <p>
                  <strong className="text-cream">Horarios:</strong><br />
                  Lun-Vie: 7:00 AM - 8:00 PM<br />
                  Sáb: 8:00 AM - 9:00 PM<br />
                  Dom: 9:00 AM - 7:00 PM
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-cream/20 py-6">
        <div className="container mx-auto max-w-6xl px-6">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <p className="text-cream/70 text-sm">
              © 2024 Café La Montaña. Todos los derechos reservados.
            </p>
            
            <div className="flex items-center space-x-2 text-cream/70 text-sm">
              <span>Hecho con</span>
              <Heart className="h-4 w-4 text-accent" />
              <span>en Bogotá, Colombia</span>
            </div>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 p-3 bg-accent hover:bg-gold rounded-full shadow-warm hover:shadow-glow transition-all duration-300 hover:scale-110 z-40"
      >
        <svg 
          className="w-5 h-5 text-accent-foreground" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </button>
    </footer>
  );
};

export default Footer;