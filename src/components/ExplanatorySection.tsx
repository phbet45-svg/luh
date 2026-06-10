import { motion } from "motion/react";
import { ShieldCheck, HelpCircle, FileDigit, Landmark, Users } from "lucide-react";

export default function ExplanatorySection() {
  const cards = [
    {
      id: "posse",
      title: "Posse de Arma",
      shortDesc: "Autorização para manter a arma exclusivamente dentro da residência ou do local de trabalho.",
      fullDesc: "A Posse de Arma de fogo dá o direito de comprar e manter uma arma em sua casa ou trabalho (sendo você o titular ou responsável legal do estabelecimento). Não autoriza o deslocamento com a arma municiada no cotidiano público.",
      icon: ShieldCheck,
      lawCode: "Lei 10.826/03",
    },
    {
      id: "porte",
      title: "Porte de Arma",
      shortDesc: "Autorização para transitar armado fora de casa ou do ambiente profissional.",
      fullDesc: "Direito de portar, transportar e trazer consigo uma arma carregada de forma velada fora de suas dependências. É concedido em caráter excepcional pela Polícia Federal mediante comprovação de efetiva necessidade ou atividade profissional de risco.",
      icon: landmarkIconHelper(),
      lawCode: "SINARM / PF",
    },
    {
      id: "cr",
      title: "CR (Certificado de Registro)",
      shortDesc: "O documento oficial de identificação emitido pelo Exército Brasileiro para atividades com armas.",
      fullDesc: "O Certificado de Registro é o cadastro que autoriza o cidadão a realizar atividades de Colecionismo, Tiro Desportivo e Caça (atividades CAC). Emitido pelo Comando do Exército, tem validade oficial e exige vistoria e requisitos estritos.",
      icon: FileDigit,
      lawCode: "SIGMA / Exército",
    },
    {
      id: "cac",
      title: "CAC",
      shortDesc: "Sigla para Colecionador, Atirador Desportivo e Caçador.",
      fullDesc: "É a categoria de pessoa física autorizada pelo Exército a exercer as atividades de colecionar material bélico, praticar o esporte de tiro ou realizar o controle de fauna silvestre exótica (caça autorizada), cada uma vinculada ao seu CR correspondente.",
      icon: Users,
      lawCode: "SisGCorp",
    },
  ];

  function landmarkIconHelper() {
    return Landmark;
  }

  return (
    <section id="explicativa" className="relative py-28 bg-[#060606] border-b-2 border-white/5 tactical-grid">
      {/* Background elegant decoration */}
      <div className="absolute top-[35%] left-[10%] w-[500px] h-[300px] bg-gold-lux/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 font-sans">
        
        {/* Title and Badge header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-gold-lux/10 border border-gold-lux/30 rounded-full mb-4">
            <HelpCircle className="w-4 h-4 text-gold-lux" />
            <span className="text-[10px] font-mono font-bold text-gold-light uppercase tracking-widest">INFORMATIVO REGULATÓRIO & JURÍDICO</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4.5xl font-black uppercase text-white leading-tight">
            Você sabe a diferença real entre <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-lux via-gold-light to-gold-dark font-black">
              POSSE, PORTE, CR & CAC?
            </span>
          </h2>
          <p className="font-sans text-gray-300 text-sm sm:text-base mt-4 leading-relaxed max-w-2xl font-light">
            A legislação sobre materiais controlados exige distinção conceitual absoluta. Compreenda as definições oficiais para dar início ao seu processo com base sólida.
          </p>
        </div>

        {/* Dynamic Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {cards.map((card, idx) => {
            const Icon = card.icon;
            
            return (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="relative p-8 rounded-lg bg-[#0E0E0E] border-2 border-white/5 transition-all duration-400 hover:border-gold-lux/40 group shadow-2xl overflow-hidden flex flex-col justify-between"
              >
                {/* Thin gold border indicators for extra class */}
                <div className="absolute top-0 left-0 w-[5px] h-0 bg-gradient-to-b from-gold-light to-gold-dark group-hover:h-full transition-all duration-500" />
                
                <div className="space-y-4">
                  {/* Card head */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="p-3 rounded bg-gold-lux/10 border-2 border-gold-lux/20 group-hover:bg-gold-lux/20 group-hover:border-gold-lux/50 transition-all">
                        <Icon className="w-5 h-5 text-gold-lux" />
                      </div>
                      <h3 className="font-display text-lg sm:text-xl font-bold uppercase text-white tracking-tight group-hover:text-gold-lux transition-colors">
                        {card.title}
                      </h3>
                    </div>
                    <span className="font-mono text-[9px] uppercase tracking-widest bg-white/5 px-2.5 py-1 rounded text-gold-light border border-white/5 font-bold">
                      {card.lawCode}
                    </span>
                  </div>

                  {/* Split explanatory texts */}
                  <p className="font-sans text-sm sm:text-base font-bold text-gray-200">
                    {card.shortDesc}
                  </p>
                  
                  <p className="font-sans text-xs sm:text-sm text-gray-400 leading-relaxed font-light">
                    {card.fullDesc}
                  </p>
                </div>

                {/* Ornamental watermark crosshair inside cards */}
                <div className="absolute bottom-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  <div className="w-14 h-14 rounded-full border-2 border-dashed border-gold-lux flex items-center justify-center">
                    <div className="w-6 h-6 rounded-full border border-gold-lux" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
