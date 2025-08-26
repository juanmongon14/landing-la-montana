import { useState } from 'react';
import { Menu, X, Coffee } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md shadow-soft border-b border-border/50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-coffee-gradient rounded-full">
              <Coffee className="h-6 w-6 text-cream" />
            </div>
            <div>
              <h1 className="text-2xl font-playfair font-bold text-gradient">
                Café La Montaña
              </h1>
              <p className="text-xs text-muted-foreground">Artesanal • Bogotá</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('inicio')}
              className="nav-link"
            >
              Inicio
            </button>
            <button 
              onClick={() => scrollToSection('cafe')}
              className="nav-link"
            >
              Café
            </button>
            <button 
              onClick={() => scrollToSection('ubicacion')}
              className="nav-link"
            >
              Ubicación
            </button>
            <button 
              onClick={() => scrollToSection('contacto')}
              className="nav-link"
            >
              Contacto
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 hover:bg-muted rounded-lg transition-colors"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-border pt-4">
            <div className="flex flex-col space-y-3">
              <button 
                onClick={() => scrollToSection('inicio')}
                className="text-left py-2 px-4 hover:bg-muted rounded-lg transition-colors"
              >
                Inicio
              </button>
              <button 
                onClick={() => scrollToSection('cafe')}
                className="text-left py-2 px-4 hover:bg-muted rounded-lg transition-colors"
              >
                Café
              </button>
              <button 
                onClick={() => scrollToSection('ubicacion')}
                className="text-left py-2 px-4 hover:bg-muted rounded-lg transition-colors"
              >
                Ubicación
              </button>
              <button 
                onClick={() => scrollToSection('contacto')}
                className="text-left py-2 px-4 hover:bg-muted rounded-lg transition-colors"
              >
                Contacto
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;