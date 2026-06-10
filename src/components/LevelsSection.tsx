import { useState } from "react";
import { motion } from "motion/react";
import { Crosshair, Award, Zap, Trophy, ShieldAlert } from "lucide-react";

export default function LevelsSection() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  const levels = [
    {
      level: 1,
      name: "Iniciante",
      subtitle: "Primeiros passos no tiro esportivo",
      description: "Ideal para quem quer aprender as regras de segurança, manipulação básica de armas e os primeiros disparos guiados.",
      icon: Crosshair,
      perks: ["Segurança e Fundamentos", "Primeira filiação a Clube", "Apoio para aquisição da primeira arma"],
    },
    {
      level: 2,
      name: "Intermediário",
      subtitle: "Evolução e competições locais",
      description: "Treinos focados em precisão constante, frequência regular em estandes de tiro e participação nas primeiras provas locais.",
      icon: Zap,
      perks: ["Frequência Monitorada", "Treinos de Precisão", "Garantia de Habitualidade Inicial"],
    },
    {
      level: 3,
      name: "Avançado",
      subtitle: "Domínio técnico e consistência",
      description: "Atirador frequente participando de campeonatos estaduais, com técnica consolidada e portabilidade de equipamentos diversos.",
      icon: Trophy,
      perks: ["Participação em Torneios", "Ajustes Finos de Mira", "Assessoria Completa de Guias"],
    },
    {
      level: 4,
      name: "Master",
      subtitle: "Nível competitivo e alto rendimento",
      description: "Atletas de ponta que buscam títulos nacionais de tiro prático, tático ou de precisão, lidando com munição customizada.",
      icon: Award,
      perks: ["Padrão Competidor Elite", "Apoio Técnico Integrado", "Gestão Absoluta de CR e CRAF"],
    },
  ];

  return (
    <section id="niveis" className="relative py-28 bg-[#070707] border-b-2 border-white/5 overflow-hidden tactical-grid">
      {/* Background ambient glowing line */}
      <div className="absolute top-[20%] right-0 w-[400px] h-[400px] bg-gold-lux/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        
        {/* Header content */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <span className="font-mono text-[10px] text-gold-lux tracking-[0.25em] font-bold uppercase block">
            ESTRUTURA DE EVOLUÇÃO E DESENVOLVIMENTO ESPORTIVO
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold uppercase tracking-tight text-white leading-tight">
            Níveis de Atiradores Desportivos (CAC)
          </h2>
          <p className="font-sans text-gray-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed font-light">
            Acompanhamos toda a sua jornada desportiva do amadorismo ao alto rendimento de competição, garantindo regularização documental para que você foque inteiramente na mira.
          </p>
        </div>

        {/* Level list/grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {levels.map((lvl, index) => {
            const Icon = lvl.icon;
            const isHovered = hoveredIdx === index;
            const isMaster = lvl.level === 4;
            const isAdvanced = lvl.level === 3;
            
            return (
              <motion.div
                key={lvl.level}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onMouseEnter={() => setHoveredIdx(index)}
                onMouseLeave={() => setHoveredIdx(null)}
                className={`relative rounded-lg p-6 transition-all duration-500 flex flex-col justify-between overflow-hidden group border-2 ${
                  isMaster
                    ? "bg-gold-lux text-black border-gold-lux shadow-gold-glow"
                    : isHovered
                    ? "bg-[#0E0E0E] border-gold-lux shadow-gold-glow translate-y-[-8px] text-white"
                    : "bg-[#0E0E0E] border-white/5 text-white"
                } ${isAdvanced && !isHovered ? "border-t-gold-lux" : ""}`}
              >
                {/* Decorative background number label */}
                <div className={`absolute -top-6 -right-4 font-display font-bold text-7xl transition-colors pointer-events-none ${
                  isMaster ? "text-black/10" : "text-white/5 group-hover:text-gold-lux/10"
                }`}>
                  0{lvl.level}
                </div>

                <div className="space-y-4">
                  {/* Icon */}
                  <div className={`p-3 rounded-lg border-2 inline-block transition-colors duration-300 ${
                    isMaster
                      ? "bg-black/10 border-black/20 text-black"
                      : isHovered
                      ? "bg-gold-lux/15 border-gold-lux text-gold-lux"
                      : "bg-white/5 border-white/5 text-gray-400"
                  }`}>
                    <Icon className="w-5 h-5" />
                  </div>

                  {/* Level text */}
                  <div>
                    <span className={`font-mono text-[9px] uppercase tracking-widest block font-bold ${
                      isMaster ? "text-black/60" : "text-[#888]"
                    }`}>
                      Nível {lvl.level}
                    </span>
                    <h3 className={`font-display text-xl font-bold uppercase mt-0.5 tracking-tight ${
                      isMaster ? "text-black" : "text-white group-hover:text-gold-lux transition-colors"
                    }`}>
                      {lvl.name}
                    </h3>
                    <p className={`font-sans text-xs opacity-90 mt-1 font-bold ${
                      isMaster ? "text-black/70" : "text-gold-light"
                    }`}>
                      {lvl.subtitle}
                    </p>
                  </div>

                  {/* Divider line */}
                  <div className={`h-[1px] w-full transition-all duration-500 ${
                    isMaster 
                      ? "bg-black/15" 
                      : isHovered 
                      ? "bg-gradient-to-r from-gold-lux/50 to-transparent" 
                      : "bg-white/5"
                  }`} />

                  {/* Description */}
                  <p className={`font-sans text-xs leading-relaxed ${
                    isMaster ? "text-black/85 font-semibold" : "text-gray-300"
                  }`}>
                    {lvl.description}
                  </p>
                </div>

                {/* Sub perks checked */}
                <div className="pt-6 space-y-2 mt-auto">
                  {lvl.perks.map((perk, pIdx) => (
                    <div key={pIdx} className="flex items-center gap-2">
                       <span className={`h-1.5 w-1.5 rounded-full shrink-0 ${
                         isMaster ? "bg-black" : "bg-gold-lux"
                       }`} />
                      <span className={`text-[11px] font-sans ${
                        isMaster ? "text-black/95 font-semibold" : "text-gray-200"
                      }`}>{perk}</span>
                    </div>
                  ))}
                </div>

                {/* Bottom line-effect decor */}
                {!isMaster && (
                  <div className={`absolute bottom-0 left-0 h-[3px] bg-gradient-to-r from-gold-dark via-gold-lux to-gold-light transition-all duration-500 ${
                    isHovered ? "w-full" : "w-0"
                  }`} />
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
