import coffeeBeans from '@/assets/coffee-beans-premium.jpg';
import cappuccino from '@/assets/cappuccino-latte-art.jpg';
import coffeeCake from '@/assets/coffee-cake-slice.jpg';

const Products = () => {
  const products = [
    {
      id: 1,
      name: "Café Premium Montañas",
      description: "Granos 100% arábica cultivados a 1,800 metros de altura en las montañas colombianas. Notas de chocolate y frutas rojas.",
      price: "$25.000",
      image: coffeeBeans,
      features: ["100% Arábica", "Tostado Artesanal", "250g"]
    },
    {
      id: 2,
      name: "Cappuccino Especial",
      description: "Nuestra especialidad de la casa con espresso doble, leche vaporizada cremosa y arte latte personalizado.",
      price: "$8.500",
      image: cappuccino,
      features: ["Espresso Doble", "Arte Latte", "Leche Premium"]
    },
    {
      id: 3,
      name: "Torta de Café Artesanal",
      description: "Deliciosa torta húmeda con café colombiano, cubierta de crema de mantequilla y granos de café tostados.",
      price: "$12.000",
      image: coffeeCake,
      features: ["Receta Artesanal", "Café Colombiano", "Porción Individual"]
    }
  ];

  return (
    <section id="cafe" className="section-padding bg-warm-gradient">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-gradient mb-4">
            Nuestros Productos Destacados
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Cada producto es cuidadosamente seleccionado y preparado con la mejor calidad 
            para ofrecerte una experiencia única de sabor.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div 
              key={product.id}
              className={`coffee-card fade-in-up delay-${index + 1} group`}
            >
              {/* Product Image */}
              <div className="relative overflow-hidden rounded-lg mb-6">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-coffee-gradient opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              </div>

              {/* Product Info */}
              <div className="space-y-4">
                <div className="flex items-start justify-between">
                  <h3 className="text-2xl font-playfair font-semibold text-foreground">
                    {product.name}
                  </h3>
                  <span className="text-2xl font-bold text-primary bg-accent/10 px-3 py-1 rounded-full">
                    {product.price}
                  </span>
                </div>

                <p className="text-muted-foreground leading-relaxed">
                  {product.description}
                </p>

                {/* Features */}
                <div className="flex flex-wrap gap-2">
                  {product.features.map((feature, idx) => (
                    <span 
                      key={idx}
                      className="px-3 py-1 bg-secondary/20 text-secondary text-sm rounded-full"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                {/* Order Button */}
                <button className="btn-primary w-full group">
                  <span className="flex items-center justify-center space-x-2">
                    <span>Ordenar Ahora</span>
                    <svg 
                      className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" 
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;