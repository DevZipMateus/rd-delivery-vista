
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
      <img 
        src="/lovable-uploads/3b75b4eb-0f90-4d00-bd77-03bad6511e6a.png" 
        alt="WhatsApp" 
        className="w-6 h-6" 
      />
    </button>
  );
};
