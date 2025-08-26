import farmerImage from '@/assets/coffee-farmer-portrait.jpg';

const About = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <div className="fade-in-up">
            <div className="relative">
              <img 
                src={farmerImage} 
                alt="Caficultor colombiano"
                className="w-full h-96 lg:h-[500px] object-cover rounded-2xl shadow-warm"
              />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-coffee-gradient rounded-full flex items-center justify-center shadow-glow">
                <div className="text-center text-cream">
                  <div className="text-2xl font-bold">25+</div>
                  <div className="text-sm">Años</div>
                </div>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="fade-in-up delay-1 space-y-6">
            <div>
              <h2 className="text-4xl md:text-5xl font-playfair font-bold text-gradient mb-4">
                Sobre Nosotros
              </h2>
              <div className="w-20 h-1 bg-accent rounded-full mb-6"></div>
            </div>

            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              <p>
                <strong className="text-foreground">Café La Montaña</strong> nace del amor por el café 
                colombiano y la pasión por ofrecer la mejor experiencia a nuestros clientes. 
                Desde hace más de 25 años, trabajamos directamente con caficultores de las 
                montañas de Colombia para traerte los granos más frescos y de la más alta calidad.
              </p>
              
              <p>
                Nuestro proceso artesanal de tostado resalta las características únicas de cada 
                variedad, creando perfiles de sabor excepcionales que reflejan la riqueza de 
                nuestra tierra cafetera.
              </p>
              
              <p>
                En nuestro café en el corazón de Bogotá, cada taza cuenta una historia de 
                tradición, calidad y compromiso con la excelencia.
              </p>
            </div>

            {/* Features */}
            <div className="grid grid-cols-2 gap-6 pt-6">
              <div className="text-center p-4 bg-accent/5 rounded-xl">
                <div className="text-3xl font-bold text-primary mb-2">100%</div>
                <div className="text-sm text-muted-foreground">Café Colombiano</div>
              </div>
              <div className="text-center p-4 bg-secondary/5 rounded-xl">
                <div className="text-3xl font-bold text-secondary mb-2">25+</div>
                <div className="text-sm text-muted-foreground">Años de Experiencia</div>
              </div>
              <div className="text-center p-4 bg-accent/5 rounded-xl">
                <div className="text-3xl font-bold text-primary mb-2">50+</div>
                <div className="text-sm text-muted-foreground">Variedades de Café</div>
              </div>
              <div className="text-center p-4 bg-secondary/5 rounded-xl">
                <div className="text-3xl font-bold text-secondary mb-2">1800m</div>
                <div className="text-sm text-muted-foreground">Altitud Promedio</div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-6">
              <button className="btn-secondary">
                Conoce Nuestra Historia Completa
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;