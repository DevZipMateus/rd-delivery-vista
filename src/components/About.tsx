
import { Truck, Clock, Star } from "lucide-react";

export const About = () => {
  return (
    <section id="sobre" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-accent mb-8">
            Sobre a RD Bebidas e Salgados
          </h2>
          
          <p className="text-lg text-gray-700 mb-12 max-w-2xl mx-auto">
            Especializados em delivery de bebidas e salgados no bairro do Cambuci. 
            Oferecemos produtos de qualidade com entrega rápida e atendimento personalizado.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-6 shadow-xl hover:shadow-2xl transition-shadow duration-300 border-t-4 border-orange-500">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-accent mb-3">Delivery Rápido</h3>
              <p className="text-gray-600">
                Entregamos seus pedidos de forma rápida e segura na região do Cambuci.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-xl hover:shadow-2xl transition-shadow duration-300 border-t-4 border-orange-500">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-accent mb-3">Horário Amplo</h3>
              <p className="text-gray-600">
                Funcionamos de segunda a sábado, das 8h às 22h, para seu conforto.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-xl hover:shadow-2xl transition-shadow duration-300 border-t-4 border-orange-500">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-accent mb-3">Qualidade</h3>
              <p className="text-gray-600">
                Produtos selecionados e preparados com cuidado para sua satisfação.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
