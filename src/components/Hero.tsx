import { motion } from "motion/react";
import { MessageSquare, Calendar, ChevronDown, Award, Star, History } from "lucide-react";

interface HeroProps {
  onContactClick: () => void;
}

export default function Hero({ onContactClick }: HeroProps) {
  const handleWhatsApp = () => {
    const message = encodeURIComponent("Olá, gostaria de mais informações sobre regularização de armas.");
    window.open(`https://wa.me/5566996335038?text=${message}`, "_blank", "noopener,noreferrer");
  };

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex flex-col justify-center bg-[#070707] overflow-hidden pt-28 pb-16 tactical-grid"
    >
      {/* Premium subtle glowing background gradients */}
      <div className="absolute top-[10%] left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gold-lux/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute -bottom-10 -right-10 w-96 h-96 bg-gold-dark/5 rounded-full blur-[110px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Portrait image with premium gold framed elements */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-5 order-2 lg:order-1 relative flex justify-center"
          >
            <div className="relative group w-full max-w-[340px] sm:max-w-[400px]">
              {/* Outer decorative gold frame lines */}
              <div className="absolute -inset-4 border-2 border-gold-lux/25 rounded-2xl pointer-events-none transition-all duration-500 group-hover:border-gold-lux/60 group-hover:scale-[1.03]" />
              <div className="absolute -inset-1.5 border border-gold-lux/40 rounded-xl pointer-events-none" />
              
              {/* Corner accent lines in gold */}
              <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-gold-lux rounded-tl-xl" />
              <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-gold-lux rounded-tr-xl" />
              <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-gold-lux rounded-bl-xl" />
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-gold-lux rounded-br-xl" />

              {/* Main image container */}
              <div className="relative overflow-hidden rounded-lg aspect-[3/4] bg-neutral-950 border-2 border-gold-lux/40 shadow-gold-glow">
                <img
                  src="https://i.postimg.cc/KcQXx2Rr/luh.png"
                  alt="Luh Despachante de Armas"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105 contrast-[1.05] brightness-[1.02] saturate-[1.05]"
                  style={{ imageRendering: "auto" }}
                />
                
                {/* Overlay subtle ambient color */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#060606] via-transparent to-transparent opacity-90" />
                
                {/* Floating Badge (Google Stars representation) */}
                <div className="absolute bottom-4 left-4 right-4 bg-black-premium/90 backdrop-blur-md border border-gold-lux/40 p-3 rounded-lg flex items-center justify-between shadow-lg">
                  <div className="flex flex-col">
                    <span className="text-[10px] uppercase tracking-widest text-[#25D366] font-mono font-bold">Feedback Real</span>
                    <span className="text-[11px] font-sans font-medium text-white">Satisfação Certificada</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-gold-lux fill-gold-lux" />
                    <span className="text-xs font-mono font-bold text-white">4.9/5 Estrelas</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Hero copywriting space */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="lg:col-span-7 order-1 lg:order-2 space-y-8 flex flex-col justify-center"
          >
            {/* Top gold tag line */}
            <div className="flex flex-wrap items-center gap-2 xs:gap-3 border-b-2 border-gold-lux/25 pb-3 self-start">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-gold-lux animate-pulse" />
                <span className="text-[9.5px] xs:text-[11px] sm:text-xs font-mono text-gold-light tracking-[0.12em] xs:tracking-[0.25em] uppercase font-bold">
                  ESCRITÓRIO DOCUMENTAL & JURÍDICO PREMIUM
                </span>
              </div>
              <span className="hidden sm:inline text-white/20">|</span>
              <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-gold-lux/10 border border-gold-lux/30 text-[9px] xs:text-[10px] font-mono font-bold text-gold-light uppercase tracking-wider">
                CNPJ {`45.804.890/0001-22`}
              </div>
            </div>

            {/* Display headliner */}
            <div className="space-y-4">
              <h1 className="font-display text-3xl xs:text-4xl sm:text-5xl lg:text-7.5xl font-extrabold tracking-tight text-white leading-[1.15] uppercase">
                Assessoria <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-lux via-gold-light to-gold-dark font-extrabold filter drop-shadow">
                  Elite & Exclusiva
                </span> <br />
                Em Regulamentação.
              </h1>
              <p className="font-sans text-gray-300 text-sm sm:text-base lg:text-lg max-w-xl font-light leading-relaxed">
                Descomplique todo o trâmite legal junto ao Exército Brasileiro (SIGMA) e Polícia Federal (SINARM). Cuidamos do seu processo de ponta a ponta com discrição absoluta, celeridade jurídica e atendimento VIP.
              </p>
            </div>

            {/* Action CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              {/* WhatsApp Premium Bullet Link */}
              <button
                id="hero-whatsapp-btn"
                onClick={handleWhatsApp}
                className="w-full sm:w-auto px-10 py-5 bg-[#25D366] hover:bg-[#20ba59] text-black font-extrabold text-xs tracking-widest uppercase rounded shadow-xl flex items-center justify-center gap-3 active:scale-95 transition-all duration-300 cursor-pointer pointer-events-auto"
              >
                <MessageSquare className="w-5 h-5 text-black" />
                <span>Conversar no WhatsApp</span>
              </button>

              {/* Internal standard contact scroll */}
              <button
                id="hero-atendimento-btn"
                onClick={onContactClick}
                className="w-full sm:w-auto px-10 py-5 bg-transparent border-2 border-gold-lux text-gold-lux hover:bg-gold-lux hover:text-black-premium font-extrabold text-xs tracking-widest uppercase rounded hover:shadow-gold-glow active:scale-95 transition-all duration-300 pointer-events-auto"
              >
                <Calendar className="w-5 h-5 text-gold-lux" />
                <span>Solicitar Atendimento</span>
              </button>
            </div>

            {/* Subtext info indicators */}
            <div className="grid grid-cols-2 gap-4 pt-6 border-t border-white/5 max-w-lg">
              <div className="flex items-center gap-3">
                <div className="p-1.5 rounded bg-gold-lux/10 border border-gold-lux/25">
                  <Award className="w-4 h-4 text-gold-lux" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] text-gray-300 font-mono tracking-wider uppercase font-bold">Foco Legal Máximo</span>
                  <span className="text-[9px] text-gray-500 font-sans">Alinhamento estrito à legislação</span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-1.5 rounded bg-gold-lux/10 border border-gold-lux/25">
                  <History className="w-4 h-4 text-gold-lux" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] text-gray-300 font-mono tracking-wider uppercase font-bold">Processo Acelerado</span>
                  <span className="text-[9px] text-gray-500 font-sans">Trâmites céleres monitorados</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bounce-down navigator icon */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-1.5 cursor-pointer z-10 animate-bounce">
        <a href="#servicos" className="text-gray-500 hover:text-gold-lux transition-colors flex flex-col items-center">
          <span className="text-[9px] uppercase tracking-[0.25em] font-mono mb-1">Ver Serviços</span>
          <ChevronDown className="w-4 h-4 text-gold-lux" />
        </a>
      </div>
    </section>
  );
}
