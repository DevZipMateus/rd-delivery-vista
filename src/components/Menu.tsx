
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Coffee, Sandwich } from "lucide-react";

const bebidas = [
  { nome: "Água Mineral", preco: "R$ 2,00" },
  { nome: "Coca Cola Lata", preco: "R$ 4,00" },
  { nome: "Coca Cola 250 ML", preco: "R$ 6,00" },
  { nome: "Coca Cola 1 Litro Retornável", preco: "R$ 10,00" },
  { nome: "Suco Del Vale Lata", preco: "R$ 5,00" },
  { nome: "Cerveja Itaipava Lata", preco: "R$ 4,00" },
  { nome: "Skol Lata", preco: "R$ 4,00" },
  { nome: "Cerveja Original", preco: "R$ 6,00" },
  { nome: "Cerveja Itaipava", preco: "R$ 6,00" },
  { nome: "Cerveja Skol", preco: "R$ 10,00" },
  { nome: "Heineken Lata", preco: "R$ 7,00" },
  { nome: "Heineken 600 ML", preco: "R$ 15,00" },
  { nome: "Tubaína 600 ML", preco: "R$ 6,00" }
];

const salgados = [
  { nome: "Coxinha", preco: "R$ 4,00" },
  { nome: "Pastel", preco: "R$ 6,00" },
  { nome: "Torta", preco: "R$ 7,00" },
  { nome: "Porção de Peixe", preco: "R$ 6,00" },
  { nome: "Porção de Batata Frita", preco: "R$ 6,00" },
  { nome: "Misto Frito", preco: "R$ 3,00" },
  { nome: "Hambúrguer", preco: "R$ 8,00" }
];

export const Menu = () => {
  return (
    <section id="cardapio" className="py-20 bg-gradient-to-br from-orange-400 via-orange-500 to-red-500">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 drop-shadow-lg">
            Nosso Cardápio
          </h2>
          <p className="text-lg text-white/90 max-w-2xl mx-auto drop-shadow">
            Confira nossa variedade de bebidas e salgados disponíveis para delivery
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Bebidas */}
          <Card className="shadow-2xl hover:shadow-3xl transition-shadow duration-300 bg-white/95 backdrop-blur-sm">
            <CardHeader className="bg-gradient-to-r from-orange-500 to-red-500 text-center rounded-t-lg">
              <CardTitle className="flex items-center justify-center space-x-2 text-2xl text-white">
                <Coffee className="w-6 h-6" />
                <span>Bebidas</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-3">
                {bebidas.map((item, index) => (
                  <div key={index} className="flex justify-between items-center py-2 border-b border-orange-100 last:border-b-0">
                    <span className="text-gray-700 font-medium">{item.nome}</span>
                    <span className="font-bold text-orange-600 text-lg">{item.preco}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Salgados */}
          <Card className="shadow-2xl hover:shadow-3xl transition-shadow duration-300 bg-white/95 backdrop-blur-sm">
            <CardHeader className="bg-gradient-to-r from-orange-500 to-red-500 text-center rounded-t-lg">
              <CardTitle className="flex items-center justify-center space-x-2 text-2xl text-white">
                <Sandwich className="w-6 h-6" />
                <span>Salgados</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-3">
                {salgados.map((item, index) => (
                  <div key={index} className="flex justify-between items-center py-2 border-b border-orange-100 last:border-b-0">
                    <span className="text-gray-700 font-medium">{item.nome}</span>
                    <span className="font-bold text-orange-600 text-lg">{item.preco}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-8">
          <p className="text-white bg-white/20 backdrop-blur-sm inline-block px-6 py-3 rounded-full font-semibold shadow-lg">
            Aceitamos todos os Tickets - Débito, Crédito e Pix
          </p>
        </div>
      </div>
    </section>
  );
};
