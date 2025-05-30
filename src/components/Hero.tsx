import { Button } from "@/components/ui/button";
import { Phone, Clock, MapPin } from "lucide-react";
export const Hero = () => {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/5511980852771", "_blank");
  };
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{
      backgroundImage: 'url(https://images.unsplash.com/photo-1561758033-d89a9ad46330?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)'
    }} />
      
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/60"></div>
      
      {/* Orange gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-500/80 via-orange-600/70 to-red-600/80"></div>
      
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-yellow-300 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-32 right-16 w-48 h-48 bg-yellow-300 rounded-full blur-xl animate-pulse delay-700"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-orange-200 rounded-full blur-lg animate-pulse delay-1000"></div>
      </div>
      
      <div className="container mx-auto px-4 py-20 text-center relative z-10">
        <div className="max-w-4xl mx-auto animate-fade-in">
          {/* Logo */}
          <div className="mb-8 flex justify-center">
            <div className="bg-white/20 backdrop-blur-sm rounded-full p-4 shadow-2xl">
              <img alt="RD Bebidas e Salgados Logo" className="w-28 h-28 md:w-36 md:h-36 object-contain animate-bounce-in" src="/lovable-uploads/51c4ccba-8015-4db8-8f0c-2817ceec737e.png" />
            </div>
          </div>

          {/* Main heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-2xl">
            <span className="bg-gradient-to-r from-yellow-200 to-orange-200 bg-clip-text text-transparent">
              RD
            </span>
            <span className="block text-2xl md:text-3xl lg:text-4xl text-yellow-100 font-normal mt-2 drop-shadow-lg">
              Bebidas & Salgados
            </span>
          </h1>

          {/* Slogan */}
          <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 mb-8 max-w-3xl mx-auto shadow-xl border border-white/30">
            <p className="text-lg md:text-xl text-white font-medium leading-relaxed">
              "Covarde nunca tenta, fracassado nunca termina, vencedor nunca desiste"
            </p>
          </div>

          {/* Service info */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10 max-w-4xl mx-auto">
            <div className="flex items-center justify-center space-x-3 bg-white/25 backdrop-blur-md rounded-xl p-4 shadow-xl border border-white/20 hover:bg-white/30 transition-all duration-300">
              <div className="bg-yellow-400 rounded-full p-2">
                <Clock className="w-5 h-5 text-orange-800" />
              </div>
              <span className="text-sm md:text-base text-white font-semibold">Seg a Sáb: 8h às 22h</span>
            </div>
            <div className="flex items-center justify-center space-x-3 bg-white/25 backdrop-blur-md rounded-xl p-4 shadow-xl border border-white/20 hover:bg-white/30 transition-all duration-300">
              <div className="bg-yellow-400 rounded-full p-2">
                <MapPin className="w-5 h-5 text-orange-800" />
              </div>
              <span className="text-sm md:text-base text-white font-semibold">Delivery Cambuci</span>
            </div>
            <div className="flex items-center justify-center space-x-3 bg-white/25 backdrop-blur-md rounded-xl p-4 shadow-xl border border-white/20 hover:bg-white/30 transition-all duration-300">
              <div className="bg-yellow-400 rounded-full p-2">
                <Phone className="w-5 h-5 text-orange-800" />
              </div>
              <span className="text-sm md:text-base text-white font-semibold">Entrega Rápida</span>
            </div>
          </div>

          {/* CTA Button */}
          <div className="space-y-4">
            <Button onClick={handleWhatsAppClick} className="bg-gradient-to-r from-yellow-400 to-orange-400 hover:from-yellow-300 hover:to-orange-300 text-orange-900 px-8 py-6 text-lg md:text-xl font-bold rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300 border-2 border-yellow-300 hover:shadow-yellow-400/50">
              🛵 Peça Agora pelo WhatsApp
            </Button>
            <p className="text-white/80 text-sm">
              Delivery grátis para pedidos acima de R$ 25,00
            </p>
          </div>
        </div>
      </div>
    </section>;
};