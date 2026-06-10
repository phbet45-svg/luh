import { useState } from "react";
import { HelpCircle, ChevronRight, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface FAQItem {
  question: string;
  answer: string;
}

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  const faqs: FAQItem[] = [
    {
      question: "O que é CAC?",
      answer: "CAC é a sigla para Colecionador, Atirador Desportivo e Caçador. Trata-se de categorias de registro concedidas pelo Exército Brasileiro para cidadãos que preenchem requisitos de idoneidade, aptidão mental/física, capacitação técnica de tiro e filiação a clubes oficiais de tiro desportivo.",
    },
    {
      question: "Como obter o CR junto ao Exército?",
      answer: "A obtenção do CR (Certificado de Registro) exige a preparação de um dossiê completo de idoneidade (certidões criminais negativas), filiação regular a um clube de tiro, aprovação em laudo psicológico com profissional credenciado e aprovação em teste de capacidade técnica de tiro conduzido por instrutor credenciado. Nossa assessoria cuida de toda essa papelada e acompanha a validação no SisGCorp.",
    },
    {
      question: "Posso transferir minha arma de fogo para outra pessoa?",
      answer: "Sim, porém exige um trâmite rigoroso. A pessoa que receberá o armamento precisa ter aprovação de compra válida (seja autorização de compra da Polícia Federal ou autorização de aquisição do SIGMA pelo Exército). Realizar a entrega da arma sem a emissão do novo CRAF e guia de tráfego correspondente constitui infração penal grave.",
    },
    {
      question: "Como renovar meus documentos de CRAF e CR?",
      answer: "Tanto o CR do Exército quanto os CRAFs (Certificados de Registro de Arma de Fogo) possuem períodos de vigência legais obrigatórios. Para renovar, o interessado deve revalidar as certidões exigidas na lei, os testes psicológicos e técnicos de tiro, além de submeter o pedido de apostilamento/revalidação com antecedência adequada aos órgãos competentes antes do vencimento.",
    },
    {
      question: "Quanto tempo demora o processo?",
      answer: "O prazo médio de resposta varia de acordo com o órgão regulador e a região militar (R.M.) do país. Geralmente, processos digitais pelo SisGCorp/SIGMA levam entre 30 a 90 dias após o protocolo protocolar integral. Fornecemos códigos de rastreamento e monitoramento ativo semanal para agilizar respostas e sanar exigências adicionais dos analistas.",
    },
    {
      question: "Preciso declarar habitualidade com que frequência?",
      answer: "Atiradores desportivos registrados estão subordinados à frequência periódica mínima em clubes de tiro para comprovação de atividade regular. Sob as regras atuais, a habitualidade deve obedecer ao plano de nível de atirador (geralmente de 8 a 20 frequências anuais decorrentes das categorias de armas detidas). Cuidamos dessas emissões e ajudamos você a gerir seus comprovantes eletronicamente.",
    },
  ];

  const handleToggle = (index: number) => {
    setOpenIdx(openIdx === index ? null : index);
  };

  return (
    <section id="duvidas" className="relative py-28 bg-[#070707] border-b-2 border-white/5 tactical-grid">
      <div className="absolute top-[30%] right-[5%] w-[400px] h-[300px] bg-gold-lux/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* Title */}
        <div className="text-center max-w-2xl mx-auto mb-20 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-gold-lux/10 border border-gold-lux/30 rounded-full mb-2 animate-pulse">
            <HelpCircle className="w-4 h-4 text-gold-lux" />
            <span className="text-[10px] font-mono font-bold text-gold-light uppercase tracking-widest">CENTRAL DE SUPORTE & CONSULTORIA</span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-black uppercase tracking-tight text-white">
            Perguntas Frequentes
          </h2>
          <p className="font-sans text-gray-300 text-sm sm:text-base leading-relaxed font-light">
            Esclareça suas principais dúvidas sobre os critérios legais, operacionais e cronogramas para a regularização do seu armamento de elite.
          </p>
        </div>

        {/* List of Accordions */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className={`rounded-lg border-2 transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? "bg-[#0D0D0D] border-gold-lux/55 shadow-gold-glow"
                    : "bg-[#0E0E0E] border-white/5 hover:border-gold-lux/30"
                }`}
              >
                {/* Accordion header trigger */}
                <button
                  onClick={() => handleToggle(idx)}
                  className="w-full flex items-center justify-between p-6 text-left focus:outline-none cursor-pointer group"
                >
                  <span className="font-sans font-bold text-sm sm:text-base text-gray-100 pr-4 group-hover:text-gold-lux transition-colors">
                    {faq.question}
                  </span>
                  <div className={`p-2 rounded bg-white/5 border border-white/5 text-gold-lux transition-all duration-300 ${
                    isOpen ? "rotate-90 text-gold-light bg-gold-lux/15 border-gold-lux/40" : ""
                  }`}>
                    <ChevronRight className="w-4 h-4 text-gold-lux" />
                  </div>
                </button>

                {/* Collapsible panel with motion animation */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 text-xs sm:text-[13px] text-gray-300 leading-relaxed font-light border-t-2 border-white/5 pt-5">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
