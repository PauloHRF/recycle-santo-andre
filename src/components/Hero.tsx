import heroImage from "@/assets/hero-recycling.jpg";

const Hero = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-hero opacity-90" />
      <div 
        className="absolute inset-0 bg-cover bg-center mix-blend-overlay"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="relative container px-4 py-20 md:py-32 md:px-6">
        <div className="max-w-3xl">
          <h2 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-6 animate-fade-in">
            Recicle em Santo André
          </h2>
          <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 animate-fade-in [animation-delay:200ms]">
            Encontre os pontos de coleta mais próximos de você e contribua para um futuro mais sustentável.
          </p>
          <div className="flex gap-4 text-primary-foreground/90 animate-fade-in [animation-delay:400ms]">
            <div className="flex flex-col">
              <span className="text-3xl font-bold">50+</span>
              <span className="text-sm">Pontos de Coleta</span>
            </div>
            <div className="w-px bg-primary-foreground/30" />
            <div className="flex flex-col">
              <span className="text-3xl font-bold">5</span>
              <span className="text-sm">Tipos de Materiais</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
