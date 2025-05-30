
import { Button } from "@/components/ui/button";
import { Phone, Clock, MapPin } from "lucide-react";

export const Hero = () => {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/5511980852771", "_blank");
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-400 via-orange-500 to-red-500 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-yellow-300 rounded-full blur-xl"></div>
        <div className="absolute bottom-32 right-16 w-48 h-48 bg-yellow-300 rounded-full blur-xl"></div>
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
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
            RD
            <span className="block text-2xl md:text-3xl lg:text-4xl text-yellow-200 font-normal mt-2">
              Bebidas & Salgados
            </span>
          </h1>

          {/* Slogan */}
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto font-medium drop-shadow">
            "Covarde nunca tenta, fracassado nunca termina, vencedor nunca desiste"
          </p>

          {/* Service info */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10 max-w-3xl mx-auto">
            <div className="flex items-center justify-center md:justify-start space-x-2 bg-white/20 backdrop-blur-sm rounded-lg p-4 shadow-lg">
              <Clock className="w-5 h-5 text-yellow-200" />
              <span className="text-sm md:text-base text-white font-medium">Seg a Sáb: 8h às 22h</span>
            </div>
            <div className="flex items-center justify-center md:justify-start space-x-2 bg-white/20 backdrop-blur-sm rounded-lg p-4 shadow-lg">
              <MapPin className="w-5 h-5 text-yellow-200" />
              <span className="text-sm md:text-base text-white font-medium">Delivery Cambuci</span>
            </div>
            <div className="flex items-center justify-center md:justify-start space-x-2 bg-white/20 backdrop-blur-sm rounded-lg p-4 shadow-lg">
              <Phone className="w-5 h-5 text-yellow-200" />
              <span className="text-sm md:text-base text-white font-medium">Entrega Rápida</span>
            </div>
          </div>

          {/* CTA Button */}
          <Button 
            onClick={handleWhatsAppClick}
            className="bg-white hover:bg-yellow-100 text-orange-600 px-8 py-6 text-lg md:text-xl font-bold rounded-full shadow-xl transform hover:scale-105 transition-all duration-300 border-2 border-yellow-300"
          >
            Peça Agora pelo WhatsApp
          </Button>
        </div>
      </div>
    </section>
  );
};
