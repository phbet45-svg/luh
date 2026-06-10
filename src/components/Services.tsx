import { motion } from "motion/react";
import {
  Shield,
  ArrowLeftRight,
  FileSignature,
  Fingerprint,
  RotateCw,
  Target,
  History,
  Briefcase,
  Sparkles,
  ShieldCheck,
  Award
} from "lucide-react";

interface ServicesProps {
  onServiceSelect: (serviceName: string) => void;
}

export default function Services({ onServiceSelect }: ServicesProps) {
  const servicesList = [
    {
      id: "regularizacao",
      title: "Regularização de Armas",
      description: "Regularize sua situação legal perante os órgãos de controle SINARM e SIGMA com segurança jurídica total.",
      icon: Shield,
    },
    {
      id: "transferencia",
      title: "Transferência de Armas",
      description: "A transferência de propriedade de uma arma de fogo exige autorização prévia da Polícia Federal (para armas de defesa) ou do Exército (para acervos CAC). O comprador deve comprovar os mesmos requisitos de uma aquisição primária, incluindo capacidade técnica, aptidão psicológica e idoneidade.",
      icon: ArrowLeftRight,
    },
    {
      id: "renovacao_documentos",
      title: "Renovação de Documentos",
      description: "Não deixe vencer seus prazos de CRAF ou porte de trânsito. Renovamos seus documentos de forma ágil.",
      icon: FileSignature,
    },
    {
      id: "emissao_cr",
      title: "Emissão de CR",
      description: "Obtenha seu Certificado de Registro de forma correta e rápida para iniciar suas atividades no tiro legal.",
      icon: Fingerprint,
    },
    {
      id: "renovacao_cr",
      title: "Renovação de CR",
      description: "Acompanhamos a revalidação do seu CR de colecionador, atirador ou caçador dentro de todas as exigências vigentes.",
      icon: RotateCw,
    },
    {
      id: "cac",
      title: "Assessoria CAC Completa",
      description: "Suporte completo para aquisição, registro, apostilamento de equipamentos e emissão de Guias de Tráfego.",
      icon: Target,
    },
    {
      id: "habitualidade",
      title: "Lançamento de Habitualidade",
      description: "Controle e declaração de suas presenças regulatórias em clubes para comprovação legal impecável junto ao Exército.",
      icon: History,
    },
    {
      id: "assessoria_completa",
      title: "Consultoria Completa",
      description: "Planejamento pré-aquisição, treinamento regulamentar e consultoria em toda a legislação militar e civil.",
      icon: Briefcase,
    },
  ];

  return (
    <section id="servicos" className="relative py-28 bg-[#070707] border-b-2 border-white/5 tactical-grid">
      {/* Background soft glow decoration */}
      <div className="absolute top-[40%] right-[15%] w-[450px] h-[300px] bg-gold-lux/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* Header Title Grid */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 gap-6">
          <div className="space-y-4">
            <span className="font-mono text-[10px] text-gold-lux tracking-[0.25em] font-bold uppercase block">
              CATÁLOGO DE SOLUÇÕES DOCUMENTAIS PREMIUM
            </span>
            <h2 className="font-display text-3.5xl sm:text-5xl font-extrabold uppercase tracking-tight text-white">
              Nossos Serviços de Elite
            </h2>
            <div className="h-[3px] w-20 bg-gradient-to-r from-gold-lux to-gold-light" />
          </div>
          <p className="font-sans text-gray-300 text-sm sm:text-base max-w-md leading-relaxed font-light">
            Deixe o trabalho burocrático e operacional com especialistas credenciados de alto padrão. Atendimento focado em celeridade máxima e 100% de conformidade jurídica.
          </p>
        </div>

        {/* Elite Services Quick Summary Block - Refactored into a high premium Bento-style Grid */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 p-6 sm:p-10 rounded-xl bg-gradient-to-b from-[#0E0E0E] to-[#0A0A0A] border border-white/[0.06] shadow-2xl relative overflow-hidden"
        >
          {/* Top highlight line */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gold-lux/50 to-transparent" />
          
          {/* Subtle gold background sweep */}
          <div className="absolute -top-20 -right-20 w-80 h-80 bg-gold-lux/5 rounded-full blur-[100px] pointer-events-none" />
          
          <div className="flex items-center gap-3 mb-8 border-b border-white/[0.06] pb-4">
            <Award className="w-5 h-5 text-gold-lux" />
            <h3 className="font-display text-xs sm:text-sm font-bold uppercase text-white tracking-[0.2em] leading-snug">
              ESPECIALIDADES DE ALTO PADRÃO • PORTFÓLIO COMPLETO
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { text: "Aquisição, Transferência e Registro de Armas de Fogo", isHighlight: false },
              { text: "Posse e Porte de Arma de Fogo", isHighlight: false },
              { text: "Renovação de Porte de Arma", isHighlight: false },
              { text: "CR de Caçador, Atirador e Colecionador (CAC)", isHighlight: false },
              { text: "Guia de Tráfego Eletrônica Especializada", isHighlight: false },
              { text: "Transferência por Inventário, Sucessão e Acordo", isHighlight: false },
              { text: "Aquisição e Transferência de Veículos Blindados", isHighlight: false },
              { text: "Assessoria Especializada para Lojistas, Despachantes, Clubes e Estandes de Tiro, além de Lojas de Armas", isHighlight: true }
            ].map((item, idx) => (
              <div 
                key={idx} 
                className={`p-4 rounded-lg bg-[#070707] border border-white/[0.03] flex items-start gap-3 hover:border-gold-lux/40 hover:bg-[#0E0E0E] transition-all duration-300 group/item ${
                  item.isHighlight 
                    ? "md:col-span-2 lg:col-span-3 border-gold-lux/25 bg-gradient-to-r from-[#0C0C0C] to-[#0E0E0E] hover:border-gold-lux/50" 
                    : ""
                }`}
              >
                <div className="flex-shrink-0 mt-0.5">
                  <ShieldCheck className="w-4 h-4 text-gold-lux group-hover/item:scale-110 transition-transform" />
                </div>
                <div>
                  <p className="text-[13px] font-sans font-medium text-gray-200 leading-normal group-hover/item:text-white transition-colors">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Services premium layout cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {servicesList.map((service, index) => {
            const IconComponent = service.icon;
            
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                onClick={() => onServiceSelect(service.title)}
                className="relative rounded-lg p-6 bg-[#0D0D0D] border-2 border-white/5 shadow-xl shadow-gold-glow-hover cursor-pointer transition-all duration-400 hover:-translate-y-2 group overflow-hidden flex flex-col justify-between"
              >
                {/* Glowing ring/circle behind icon inside cards */}
                <div className="absolute inset-0 bg-gradient-to-tr from-gold-lux/0 via-gold-lux/0 to-gold-lux/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                <div className="space-y-5">
                  {/* Top bar element */}
                  <div className="flex items-center justify-between">
                    <div className="p-3 rounded bg-gold-lux/10 border border-gold-lux/30 text-gold-lux group-hover:bg-gold-lux/20 group-hover:border-gold-lux/50 transition-all duration-300">
                      <IconComponent className="w-5 h-5 text-gold-lux" />
                    </div>
                    <Sparkles className="w-4 h-4 text-gold-lux/30 group-hover:text-gold-lux/80 transition-colors" />
                  </div>

                  {/* Copy content */}
                  <div className="space-y-3">
                    <h3 className="font-display text-sm sm:text-base font-bold uppercase text-white tracking-widest group-hover:text-gold-lux transition-colors duration-200">
                      {service.title}
                    </h3>
                    <p className="font-sans text-xs sm:text-[13px] text-gray-400 leading-relaxed font-light">
                      {service.description}
                    </p>
                  </div>
                </div>

                {/* Foot indicators */}
                <div className="mt-8 flex items-center gap-1.5 text-[9px] sm:text-[10px] uppercase font-mono tracking-widest text-[#777] group-hover:text-gold-light transition-colors font-bold">
                  <span>Falar com Assessor</span>
                  <span className="font-sans font-extrabold group-hover:translate-x-1.5 transition-transform">→</span>
                </div>

                {/* Subtle gold line on left hover */}
                <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-gold-lux scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-center" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
