import { motion } from "motion/react";
import { Sparkles, ArrowRight, ShieldCheck, ClipboardCheck } from "lucide-react";

interface HabitualidadeSectionProps {
  onContactClick: () => void;
}

export default function HabitualidadeSection({ onContactClick }: HabitualidadeSectionProps) {
  return (
    <section id="habitualidade" className="relative py-28 bg-[#060606] border-b-2 border-gold-lux/20 overflow-hidden tactical-grid">
      {/* Background radial soft light */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.04),transparent_60%)] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="relative p-6 xs:p-10 sm:p-16 rounded-xl bg-gradient-to-br from-[#0C0C0C] to-[#111111] border-2 border-gold-lux/50 shadow-gold-glow text-center space-y-10 overflow-hidden group"
        >
          {/* Subtle glowing borders */}
          <div className="absolute top-0 left-0 w-20 h-[3px] bg-gradient-to-r from-gold-lux to-gold-light" />
          <div className="absolute top-0 left-0 w-[3px] h-20 bg-gradient-to-b from-gold-lux to-gold-light" />
          <div className="absolute bottom-0 right-0 w-20 h-[3px] bg-gradient-to-l from-gold-lux to-gold-light" />
          <div className="absolute bottom-0 right-0 w-[3px] h-20 bg-gradient-to-t from-gold-lux to-gold-light" />

          {/* Decorative tag */}
          <div className="inline-flex items-center gap-2 px-3 xs:px-4 py-1.5 bg-gold-lux/10 border border-gold-lux/35 rounded-full max-w-full">
            <Sparkles className="w-3.5 h-3.5 text-gold-lux animate-pulse shrink-0" />
            <span className="text-[8px] xs:text-[9.5px] sm:text-xs font-mono font-bold tracking-[0.1em] xs:tracking-widest text-gold-light uppercase break-words text-center">
              CONTROLE DE FREQUÊNCIA & HABITUALIDADE DE NÍVEL NACIONAL
            </span>
          </div>

          <div className="space-y-4 max-w-3xl mx-auto">
            <h2 className="font-display text-2xl xs:text-3xl sm:text-5xl font-black uppercase tracking-tight text-white leading-tight">
              CONTROLE DE HABITUALIDADE IMPECÁVEL
            </h2>
            <div className="h-[3px] w-24 bg-gradient-to-r from-gold-lux via-gold-light to-gold-lux mx-auto rounded" />
            <p className="font-sans text-gray-300 text-sm sm:text-base leading-relaxed font-light">
              Mantenha o seu CR e sua habitualidade em dia, em estrito cumprimento com a nova legislação vigente. Cuidamos do controle de presenças regulatórias em clubes e emissão de Guias de Tráfego eletrônicas com rapidez militar.
            </p>
          </div>

          {/* Key reminders */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-xl mx-auto pt-2">
            <div className="flex items-center gap-3 justify-center sm:justify-start px-5 py-3.5 border-2 border-white/5 rounded-lg bg-black-premium/60">
              <ShieldCheck className="w-5 h-5 text-[#25D366] shrink-0" />
              <span className="text-xs sm:text-sm font-sans text-gray-200 font-medium">Garantia contra suspensão de CR ou CRAF</span>
            </div>
            <div className="flex items-center gap-3 justify-center sm:justify-start px-5 py-3.5 border-2 border-white/5 rounded-lg bg-black-premium/60">
              <ClipboardCheck className="w-5 h-5 text-gold-lux shrink-0" />
              <span className="text-xs sm:text-sm font-sans text-gray-200 font-medium">Emissão expresso de Guia de Tráfego</span>
            </div>
          </div>

          {/* Action Button */}
          <div className="pt-6">
            <button
              id="habitualidade-regularizar-btn"
              onClick={onContactClick}
              className="px-10 py-5 bg-transparent border-2 border-gold-lux text-gold-lux hover:bg-gold-lux hover:text-black-premium font-extrabold text-xs tracking-widest uppercase rounded transition-all duration-300 shadow-xl flex items-center gap-3 mx-auto group-hover:shadow-gold-glow cursor-pointer active:scale-95 pointer-events-auto"
            >
              <span>Regularizar habitualidade</span>
              <ArrowRight className="w-4 h-4 text-gold-lux group-hover:text-black-premium transition-transform group-hover:translate-x-1.5" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
