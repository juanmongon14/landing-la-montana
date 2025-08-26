import { MapPin, Clock, Phone } from 'lucide-react';

const Location = () => {
  return (
    <section id="ubicacion" className="section-padding bg-warm-gradient">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-gradient mb-4">
            Nuestra Ubicación
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Visítanos en el corazón de Bogotá y disfruta de la mejor experiencia cafetera
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <div className="space-y-8 fade-in-up">
            <div className="coffee-card">
              <h3 className="text-2xl font-playfair font-semibold mb-6 text-gradient">
                Información de Contacto
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Dirección</h4>
                    <p className="text-muted-foreground">
                      Carrera 13 #85-32<br />
                      Zona Rosa, Bogotá<br />
                      Colombia
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-secondary/10 rounded-lg">
                    <Clock className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Horarios</h4>
                    <div className="text-muted-foreground space-y-1">
                      <p>Lunes - Viernes: 7:00 AM - 8:00 PM</p>
                      <p>Sábados: 8:00 AM - 9:00 PM</p>
                      <p>Domingos: 9:00 AM - 7:00 PM</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-accent/10 rounded-lg">
                    <Phone className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Teléfono</h4>
                    <p className="text-muted-foreground">
                      +57 1 234-5678
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-border">
                <button className="btn-primary w-full">
                  <span className="flex items-center justify-center space-x-2">
                    <MapPin className="w-4 h-4" />
                    <span>Ver Direcciones en Google Maps</span>
                  </span>
                </button>
              </div>
            </div>
          </div>

          {/* Map Section */}
          <div className="fade-in-up delay-1">
            <div className="coffee-card p-0 overflow-hidden h-96 lg:h-[500px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.8168462051546!2d-74.05707928570615!3d4.628594596650235!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f99a7b3b5b5b5%3A0x1b2b3b4b5b6b7b8b!2sCarrera%2013%20%2385-32%2C%20Bogot%C3%A1%2C%20Colombia!5e0!3m2!1ses!2sco!4v1620000000000!5m2!1ses!2sco"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación Café La Montaña"
                className="grayscale hover:grayscale-0 transition-all duration-500"
              ></iframe>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-16 fade-in-up delay-2">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-card rounded-xl shadow-soft">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Fácil Acceso</h3>
              <p className="text-sm text-muted-foreground">
                Ubicados en la Zona Rosa, cerca de TransMilenio y múltiples rutas de transporte
              </p>
            </div>

            <div className="text-center p-6 bg-card rounded-xl shadow-soft">
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Horario Extendido</h3>
              <p className="text-sm text-muted-foreground">
                Abierto todos los días para tu comodidad, desde muy temprano hasta la noche
              </p>
            </div>

            <div className="text-center p-6 bg-card rounded-xl shadow-soft">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="h-8 w-8 text-accent" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Reservas</h3>
              <p className="text-sm text-muted-foreground">
                Llámanos para reservar tu mesa o realizar pedidos para llevar
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;