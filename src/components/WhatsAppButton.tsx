
import { MessageCircle } from "lucide-react";

export const WhatsAppButton = () => {
  const handleClick = () => {
    window.open("https://wa.me/5511980852771?text=Olá! Gostaria de fazer um pedido.", "_blank");
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 z-50"
      aria-label="Entrar em contato pelo WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
    </button>
  );
};
