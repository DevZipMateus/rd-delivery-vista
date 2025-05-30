
import { Button } from "@/components/ui/button";
import { Phone, Clock, MapPin } from "lucide-react";

export const Hero = () => {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/5511980852771", "_blank");
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-secondary to-primary/20 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary rounded-full blur-xl"></div>
        <div className="absolute bottom-32 right-16 w-48 h-48 bg-primary rounded-full blur-xl"></div>
      </div>
      
      <div className="container mx-auto px-4 py-20 text-center relative z-10">
        <div className="max-w-4xl mx-auto animate-fade-in">
          {/* Logo */}
          <div className="mb-8 flex justify-center">
            <img 
              src="/lovable-uploads/01bf32bc-b727-4d1f-b47f-5f7ab16376f6.png" 
              alt="RD Bebidas e Salgados Logo" 
              className="w-32 h-32 md:w-40 md:h-40 object-contain animate-bounce-in"
            />
          </div>

          {/* Main heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-accent mb-6 leading-tight">
            RD
            <span className="block text-2xl md:text-3xl lg:text-4xl text-primary font-normal mt-2">
              Bebidas & Salgados
            </span>
          </h1>

          {/* Slogan */}
          <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-2xl mx-auto font-medium">
            "Covarde nunca tenta, fracassado nunca termina, vencedor nunca desiste"
          </p>

          {/* Service info */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10 max-w-3xl mx-auto">
            <div className="flex items-center justify-center md:justify-start space-x-2 bg-white/80 rounded-lg p-4 shadow-sm">
              <Clock className="w-5 h-5 text-primary" />
              <span className="text-sm md:text-base text-gray-800">Seg a Sáb: 8h às 22h</span>
            </div>
            <div className="flex items-center justify-center md:justify-start space-x-2 bg-white/80 rounded-lg p-4 shadow-sm">
              <MapPin className="w-5 h-5 text-primary" />
              <span className="text-sm md:text-base text-gray-800">Delivery Cambuci</span>
            </div>
            <div className="flex items-center justify-center md:justify-start space-x-2 bg-white/80 rounded-lg p-4 shadow-sm">
              <Phone className="w-5 h-5 text-primary" />
              <span className="text-sm md:text-base text-gray-800">Entrega Rápida</span>
            </div>
          </div>

          {/* CTA Button */}
          <Button 
            onClick={handleWhatsAppClick}
            className="bg-primary hover:bg-primary/90 text-accent px-8 py-6 text-lg md:text-xl font-semibold rounded-full shadow-lg transform hover:scale-105 transition-all duration-300"
          >
            Peça Agora pelo WhatsApp
          </Button>
        </div>
      </div>
    </section>
  );
};
