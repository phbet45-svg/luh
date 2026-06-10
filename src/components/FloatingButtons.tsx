import { motion } from "motion/react";
import { MessageCircle, Instagram } from "lucide-react";

export default function FloatingButtons() {
  const handleWhatsApp = () => {
    const message = encodeURIComponent("Olá, gostaria de mais informações sobre regularização de armas.");
    window.open(`https://wa.me/5566996335038?text=${message}`, "_blank", "noopener,noreferrer");
  };

  const handleInstagram = () => {
    window.open("https://www.instagram.com/luhdespachante/", "_blank", "noopener,noreferrer");
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3.5 items-center pointer-events-auto">
      {/* Instagram Button */}
      <motion.button
        id="floating-instagram-action"
        onClick={handleInstagram}
        whileHover={{ scale: 1.1, translateY: -2 }}
        whileTap={{ scale: 0.9 }}
        aria-label="Abrir Instagram"
        className="w-12 h-12 rounded-full bg-gradient-to-tr from-[#f09433] via-[#e1306c] to-[#bc1888] text-white flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
      >
        <Instagram className="w-5 h-5 text-white" />
      </motion.button>

      {/* WhatsApp Button */}
      <motion.button
        id="floating-whatsapp-action"
        onClick={handleWhatsApp}
        whileHover={{ scale: 1.1, translateY: -2 }}
        whileTap={{ scale: 0.9 }}
        aria-label="Abrir WhatsApp"
        className="w-14 h-14 rounded-full bg-[#25D366] text-black flex items-center justify-center shadow-lg shadow-[#25D366]/20 hover:shadow-2xl transition shadow-golden cursor-pointer"
      >
        <MessageCircle className="w-7 h-7 text-black fill-black/10" />
      </motion.button>
    </div>
  );
}
