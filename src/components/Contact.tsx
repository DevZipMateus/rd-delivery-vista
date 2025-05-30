
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Contact = () => {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/5511980852771", "_blank");
  };

  const handleMapClick = () => {
    window.open("https://maps.google.com/?q=Rua+Eulália+Assunção+94+Cambuci+São+Paulo", "_blank");
  };

  return (
    <section id="contato" className="py-20 bg-gradient-to-br from-orange-400 via-orange-500 to-red-500">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 drop-shadow-lg">
              Entre em Contato
            </h2>
            <p className="text-lg text-white/90 drop-shadow">
              Faça seu pedido pelo WhatsApp ou venha nos visitar
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Informações de contato */}
            <div className="space-y-6">
              <div className="bg-white/95 backdrop-blur-sm rounded-lg p-6 shadow-2xl">
                <h3 className="text-xl font-semibold text-accent mb-4">Informações</h3>
                
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Phone className="w-5 h-5 text-orange-600 mt-1" />
                    <div>
                      <p className="font-medium text-gray-800">Telefone</p>
                      <p className="text-gray-600">(11) 98085-2771</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Mail className="w-5 h-5 text-orange-600 mt-1" />
                    <div>
                      <p className="font-medium text-gray-800">Email</p>
                      <p className="text-gray-600 break-all">rdbebidasesalgados2022@gmail.com</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <MapPin className="w-5 h-5 text-orange-600 mt-1" />
                    <div>
                      <p className="font-medium text-gray-800">Endereço</p>
                      <p className="text-gray-600">Rua Eulália Assunção, 94 - Cambuci</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Clock className="w-5 h-5 text-orange-600 mt-1" />
                    <div>
                      <p className="font-medium text-gray-800">Horário</p>
                      <p className="text-gray-600">Segunda a Sábado: 8h às 22h</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Ações */}
            <div className="space-y-6">
              <div className="bg-white/95 backdrop-blur-sm rounded-lg p-6 shadow-2xl">
                <h3 className="text-xl font-semibold text-accent mb-4">Faça seu Pedido</h3>
                
                <div className="space-y-4">
                  <Button 
                    onClick={handleWhatsAppClick}
                    className="w-full bg-green-600 hover:bg-green-700 text-white py-3 text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    Pedir pelo WhatsApp
                  </Button>

                  <Button 
                    onClick={handleMapClick}
                    variant="outline"
                    className="w-full border-2 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white py-3 text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <MapPin className="w-5 h-5 mr-2" />
                    Ver Localização
                  </Button>
                </div>

                <div className="mt-6 p-4 bg-orange-100 rounded-lg border-l-4 border-orange-600">
                  <p className="text-sm text-gray-700 text-center font-medium">
                    <strong>Responsável:</strong> Ramón de Jesus
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
