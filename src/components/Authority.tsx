import { motion } from "motion/react";
import { CheckCircle2, ShieldAlert, Award, FileCheck2, UserCheck2, ShieldCheck } from "lucide-react";

export default function Authority() {
  const specialties = [
    "Regularização de Armamentos",
    "Processos Exército Brasileiro (SisGCorp)",
    "Processos Polícia Federal (SINARM / SinarmCac)",
    "Documentação CAC (Atirador, Caçador, Colecionador)",
    "Controle Estrito de Habitualidade",
    "Recursos e Requerimentos Especiais",
  ];

  const statistics = [
    {
      value: "500+",
      label: "Processos Conduzidos",
      icon: UserCheck2,
      sub: "Regularização jurídica absoluta",
    },
    {
      value: "98.7%",
      label: "Índice de Deferimento",
      icon: FileCheck2,
      sub: "Trâmite perfeito em órgãos oficiais",
    },
    {
      value: "Elite",
      label: "Padrão de Atendimento",
      icon: Award,
      sub: "Discrição e agilidade inigualáveis",
    },
  ];

  return (
    <section id="autoridade" className="relative py-24 bg-[#090909] border-b-2 border-gold-lux/20 tactical-grid">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(212,175,55,0.03),transparent_40%)] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Block: Specialties & Description */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 space-y-8"
          >
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-gold-lux/10 border border-gold-lux/30 rounded-full">
                <ShieldCheck className="w-3.5 h-3.5 text-gold-lux" />
                <span className="font-mono text-[8px] xs:text-[9px] text-gold-light tracking-[0.12em] xs:tracking-[0.25em] font-extrabold uppercase">
                  CREDIBILIDADE, RIGOR & PRESTÍGIO
                </span>
              </div>
              <h2 className="font-display text-3.5xl sm:text-5xl font-extrabold uppercase tracking-tight text-white leading-tight">
                COMPROMISSO ABSOLUTO <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-lux to-gold-light font-black">COM A SUA SEGURANÇA.</span>
              </h2>
            </div>
            
            <p className="font-sans text-gray-300 text-sm sm:text-base leading-relaxed max-w-xl font-light">
              Atuamos na assessoria documental mais rigorosa de colecionadores, atiradores civis e profissionais de elite, garantindo que toda a sua documentação e registros estejam em conformidade com as diretrizes vigentes do Exército Brasileiro (SIGMA) e Polícia Federal (SINARM).
            </p>

            <div className="space-y-4 pt-3 border-t border-white/10">
              <span className="text-[11px] uppercase font-mono tracking-widest text-gold-light font-bold block">
                ESPECIALIDADES ADVERSAS DE ALTO PADRÃO:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {specialties.map((spec, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-gold-lux shrink-0 mt-0.5" />
                    <span className="text-[12px] sm:text-xs font-sans font-medium text-gray-200">{spec}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Block: Luxury stats panel */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-3 gap-6">
            {statistics.map((stat, idx) => {
              const StatIcon = stat.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: idx * 0.15 }}
                  className="relative p-6 rounded-lg bg-[#0E0E0E] border-2 border-white/5 shadow-2xl group hover:border-gold-lux/40 transition-all duration-300 overflow-hidden flex flex-col justify-between aspect-auto sm:aspect-[4/5] min-h-0 sm:min-h-[220px]"
                >
                  {/* Subtle inner golden brush/glow effect */}
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gold-lux/5 rounded-full blur-2xl pointer-events-none group-hover:bg-gold-lux/10 transition-colors" />
                  
                  {/* Icon */}
                  <div className="p-3 rounded-lg bg-gold-lux/10 inline-block border-2 border-gold-lux/20 mb-6 group-hover:border-gold-lux/50 transition-colors self-start">
                    <StatIcon className="w-5 h-5 text-gold-lux" />
                  </div>

                  {/* Numbers & label */}
                  <div className="space-y-2 mt-auto">
                    <h3 className="font-display text-3xl sm:text-4xl font-black text-white tracking-tight group-hover:text-gold-lux transition-colors">
                      {stat.value}
                    </h3>
                    <div className="space-y-1">
                      <p className="text-xs sm:text-sm font-sans font-extrabold text-gray-100 leading-none">
                        {stat.label}
                      </p>
                      <p className="text-[10px] font-sans text-gray-400 group-hover:text-gold-light transition-all">
                        {stat.sub}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
