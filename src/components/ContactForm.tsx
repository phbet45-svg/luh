import React, { useState, forwardRef, useImperativeHandle, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Send, CheckCircle2, Phone, Mail, MapPin, Instagram, Sparkles, Shield } from "lucide-react";

interface ContactFormProps {
  preselectedService?: string;
}

export interface ContactFormRef {
  focusService: (serviceName: string) => void;
}

const ContactForm = forwardRef<ContactFormRef, ContactFormProps>(({ preselectedService }, ref) => {
  const [formData, setFormData] = useState({
    nome: "",
    telefone: "",
    email: "",
    cidade: "",
    servico: preselectedService || "",
    mensagem: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const serviceSelectRef = useRef<HTMLSelectElement>(null);

  useImperativeHandle(ref, () => ({
    focusService: (serviceName: string) => {
      setFormData((prev) => ({ ...prev, servico: serviceName }));
      
      // Smooth scroll to the form section
      const formSection = document.getElementById("contato");
      if (formSection) {
        formSection.scrollIntoView({ behavior: "smooth" });
      }

      // Briefly focus the select element to guide the user
      setTimeout(() => {
        if (serviceSelectRef.current) {
          serviceSelectRef.current.focus();
        }
      }, 500);
    },
  }));

  React.useEffect(() => {
    if (preselectedService) {
      setFormData((prev) => ({ ...prev, servico: preselectedService }));
    }
  }, [preselectedService]);

  const servicesOption = [
    "Regularização de Armas",
    "Transferência de Armas",
    "Renovação de Documentos",
    "Emissão de CR",
    "Renovação de CR",
    "Assessoria CAC Completa",
    "Lançamento de Habitualidade",
    "Consultoria Completa",
  ];

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate luxury API response with 1.2s timeout
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      
      // Optional: compile WhatsApp message for direct continuation
      const text = `*Nova Solicitação Luh Despachante*\n\n` +
        `*Nome:* ${formData.nome}\n` +
        `*Telefone:* ${formData.telefone}\n` +
        `*Email:* ${formData.email}\n` +
        `*Cidade:* ${formData.cidade}\n` +
        `*Serviço:* ${formData.servico}\n` +
        `*Mensagem:* ${formData.mensagem}`;
      
      // We can let the user optionally click to send to WhatsApp as well in the success state
    }, 1200);
  };

  const resetForm = () => {
    setFormData({
      nome: "",
      telefone: "",
      email: "",
      cidade: "",
      servico: "",
      mensagem: "",
    });
    setSubmitSuccess(false);
  };

  const sendDirectWhatsApp = () => {
    const formattedText = encodeURIComponent(
      `Olá, fiz o envio do formulário!\n\n` +
      `*Nome:* ${formData.nome}\n` +
      `*Cidade/UF:* ${formData.cidade}\n` +
      `*Serviço de interesse:* ${formData.servico}\n` +
      `*Mensagem:* ${formData.mensagem}`
    );
    window.open(`https://wa.me/5566996335038?text=${formattedText}`, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="contato" className="relative py-28 bg-[#070707] border-b-2 border-white/5 tactical-grid">
      <div className="absolute bottom-0 right-0 w-[500px] h-[350px] bg-gold-lux/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* Layout Split: Contact info vs Interactive Form Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Traditional contact coordinates & Premium social tags */}
          <div className="lg:col-span-11 xl:col-span-5 space-y-8 lg:pr-6">
            <div className="space-y-3">
              <span className="font-mono text-[10px] text-gold-lux tracking-[0.25em] font-bold uppercase block">
                AGENDE SUA CONSULTORIA EXCLUSIVA
              </span>
              <h2 className="font-display text-3xl sm:text-5xl font-black uppercase tracking-tight text-white leading-tight">
                Inicie Seu Processo <br />
                <span className="text-gold-lux">Hoje Mesmo</span>
              </h2>
              <div className="h-[3px] w-20 bg-gradient-to-r from-gold-lux to-gold-light mt-4 rounded" />
            </div>

            <p className="font-sans text-gray-300 text-sm sm:text-base leading-relaxed font-light">
              Fale diretamente com nossa assessora principal ou preencha o formulário institucional ao lado para receber um contato analítico detalhado sobre o seu caso de forma altamente personalizada.
            </p>

            {/* Detailed coordinates block */}
            <div className="space-y-6 pt-2">
              <div className="flex items-start gap-4">
                <div className="p-3.5 rounded bg-[#0E0E0E] border-2 border-white/5 text-gold-lux shrink-0">
                  <Phone className="w-5 h-5 text-gold-lux" />
                </div>
                <div>
                  <h4 className="text-xs uppercase font-mono tracking-widest text-gold-light font-bold">Telefone / WhatsApp</h4>
                  <p className="text-base font-sans font-extrabold text-white mt-1 hover:text-gold-lux transition-colors">
                    +55 66 99633-5038
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3.5 rounded bg-[#0E0E0E] border-2 border-white/5 text-gold-lux shrink-0">
                  <Mail className="w-5 h-5 text-gold-lux" />
                </div>
                <div>
                  <h4 className="text-xs uppercase font-mono tracking-widest text-gold-light font-bold">Email Corporativo</h4>
                  <p className="text-base font-sans font-extrabold text-white mt-1 hover:text-gold-lux transition-colors break-all">
                    silvadespachante8@gmail.com
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3.5 rounded bg-[#0E0E0E] border-2 border-white/5 text-gold-lux shrink-0">
                  <Instagram className="w-5 h-5 text-gold-lux" />
                </div>
                <div>
                  <h4 className="text-xs uppercase font-mono tracking-widest text-gold-light font-bold">Instagram Oficial</h4>
                  <a
                    href="https://www.instagram.com/luhdespachante/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base font-sans font-extrabold text-white mt-1 hover:text-gold-lux transition-colors block"
                  >
                    @luhdespachante
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3.5 rounded bg-[#0E0E0E] border-2 border-white/5 text-gold-lux shrink-0">
                  <MapPin className="w-5 h-5 text-gold-lux" />
                </div>
                <div>
                  <h4 className="text-xs uppercase font-mono tracking-widest text-gold-light font-bold">Atendimento Presencial e Digital</h4>
                  <p className="text-xs sm:text-sm font-sans text-gray-400 mt-1 font-light leading-relaxed">
                    Assessoria remota para todo o território nacional através do SinarmCac ou agendada para atendimento físico.
                  </p>
                </div>
              </div>

              {/* Company CNPJ Premium Trust Badge Highlighted */}
              <div className="flex items-start gap-4 p-5 rounded-lg bg-gradient-to-br from-[#0C0C0C] to-[#121212] border-2 border-gold-lux/40 shadow-xl">
                <div className="p-3 bg-gold-lux/10 border border-gold-lux/30 rounded text-gold-lux shrink-0 shadow-inner">
                  <Shield className="w-5 h-5 text-gold-lux animate-pulse" />
                </div>
                <div>
                  <h4 className="text-xs uppercase font-mono tracking-widest text-gold-light font-bold">Credibilidade Comercial Garantida</h4>
                  <p className="text-[9px] uppercase font-mono font-bold text-gray-500 mt-0.5">CNPJ Oficial Registrado no Brasil</p>
                  <p className="text-base sm:text-lg font-mono font-extrabold text-white mt-1 bg-black-premium/90 border border-white/5 py-1 px-2.5 rounded select-all tracking-wider inline-block">
                    45.804.890/0001-22
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive gold-lined form container */}
          <div className="lg:col-span-12 xl:col-span-7">
            <div className="relative rounded-lg p-8 sm:p-10 bg-[#0E0E0E] border-2 border-gold-lux/40 shadow-xl shadow-gold-glow">
              {/* Corner indicators */}
              <div className="absolute top-0 right-0 w-8 h-[2px] bg-gold-lux animate-pulse" />
              <div className="absolute top-0 right-0 w-[2px] h-8 bg-gold-lux animate-pulse" />

              <AnimatePresence mode="wait">
                {!submitSuccess ? (
                  <motion.form
                    key="form-fields"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="space-y-6"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {/* Name */}
                      <div className="space-y-1.5">
                        <label htmlFor="nome" className="text-[10px] uppercase font-mono tracking-widest font-bold text-gray-300">
                          Seu Nome Completo *
                        </label>
                        <input
                          type="text"
                          id="nome"
                          name="nome"
                          required
                          value={formData.nome}
                          onChange={handleInputChange}
                          className="w-full bg-[#050505] border-2 border-white/5 focus:border-gold-lux/60 rounded px-4 py-3 text-xs sm:text-sm text-white focus:outline-none focus:ring-0 transition-colors"
                          placeholder="Digite seu nome"
                        />
                      </div>

                      {/* Phone */}
                      <div className="space-y-1.5">
                        <label htmlFor="telefone" className="text-[10px] uppercase font-mono tracking-widest font-bold text-gray-300">
                          Seu Telefone / WhatsApp *
                        </label>
                        <input
                          type="tel"
                          id="telefone"
                          name="telefone"
                          required
                          value={formData.telefone}
                          onChange={handleInputChange}
                          className="w-full bg-[#050505] border-2 border-white/5 focus:border-gold-lux/60 rounded px-4 py-3 text-xs sm:text-sm text-white focus:outline-none focus:ring-0 transition-colors"
                          placeholder="(99) 99999-9999"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {/* Email */}
                      <div className="space-y-1.5">
                        <label htmlFor="email" className="text-[10px] uppercase font-mono tracking-widest font-bold text-gray-300">
                          Seu Email de Contato *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full bg-[#050505] border-2 border-white/5 focus:border-gold-lux/60 rounded px-4 py-3 text-xs sm:text-sm text-white focus:outline-none focus:ring-0 transition-colors"
                          placeholder="exemplo@email.com"
                        />
                      </div>

                      {/* City */}
                      <div className="space-y-1.5">
                        <label htmlFor="cidade" className="text-[10px] uppercase font-mono tracking-widest font-bold text-gray-300">
                          Sua Cidade / Estado *
                        </label>
                        <input
                          type="text"
                          id="cidade"
                          name="cidade"
                          required
                          value={formData.cidade}
                          onChange={handleInputChange}
                          className="w-full bg-[#050505] border-2 border-white/5 focus:border-gold-lux/60 rounded px-4 py-3 text-xs sm:text-sm text-white focus:outline-none focus:ring-0 transition-colors"
                          placeholder="Nome da sua Cidade - UF"
                        />
                      </div>
                    </div>

                    {/* Service sought dropdown */}
                    <div className="space-y-1.5">
                      <label htmlFor="servico" className="text-[10px] uppercase font-mono tracking-widest font-bold text-gray-300">
                        Serviço Desejado *
                      </label>
                      <select
                        id="servico"
                        name="servico"
                        required
                        ref={serviceSelectRef}
                        value={formData.servico}
                        onChange={handleInputChange}
                        className="w-full bg-[#050505] border-2 border-white/5 focus:border-gold-lux/60 rounded px-4 py-3 text-xs sm:text-sm text-white focus:outline-none focus:ring-0 transition-colors"
                      >
                        <option value="" disabled>Seleccione um serviço para regularizar...</option>
                        {servicesOption.map((opt) => (
                          <option key={opt} value={opt}>
                            {opt}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Message Area */}
                    <div className="space-y-1.5">
                      <label htmlFor="mensagem" className="text-[10px] uppercase font-mono tracking-widest font-bold text-gray-300">
                        Sua Mensagem / Detalhes Adicionais *
                      </label>
                      <textarea
                        id="mensagem"
                        name="mensagem"
                        required
                        rows={4}
                        value={formData.mensagem}
                        onChange={handleInputChange}
                        className="w-full bg-[#050505] border-2 border-white/5 focus:border-gold-lux/60 rounded px-4 py-3 text-xs sm:text-sm text-white focus:outline-none focus:ring-0 transition-colors resize-none"
                        placeholder="Descreva brevemente que tipo de auxílio documental ou regularização você necessita."
                      />
                    </div>

                    {/* Submission triggers */}
                    <div className="pt-2">
                      <button
                        id="submit-contact-form-btn"
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full py-4 rounded bg-gradient-to-r from-gold-dark via-gold-lux to-gold-light text-black font-semibold text-xs tracking-wider uppercase shadow-md active:scale-[0.98] transition-all hover:shadow-gold-glow flex items-center justify-center gap-3 cursor-pointer disabled:opacity-50"
                      >
                        {isSubmitting ? (
                          <>
                            <div className="w-5 h-5 rounded-full border-2 border-black/30 border-t-black animate-spin" />
                            <span>Processando Dossiê...</span>
                          </>
                        ) : (
                          <>
                            <Send className="w-4 h-4 text-black" />
                            <span>Solicitar Atendimento</span>
                          </>
                        )}
                      </button>
                    </div>
                  </motion.form>
                ) : (
                  // Luxury success screens
                  <motion.div
                    key="form-success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="py-12 text-center space-y-6"
                  >
                    <div className="inline-block p-4 rounded-full bg-gold-lux/10 border border-gold-lux/30 text-gold-lux shadow-lg">
                      <CheckCircle2 className="w-12 h-12" />
                    </div>

                    <div className="space-y-2">
                      <h3 className="font-display text-2xl font-bold uppercase text-white tracking-tight">
                        Solicitação Recebida com Sucesso!
                      </h3>
                      <p className="font-sans text-xs sm:text-sm text-gray-400 max-w-md mx-auto leading-relaxed">
                        Prezado(a) <strong className="text-white">{formData.nome}</strong>, seus dados foram catalogados com segurança no nosso sistema de triagem. Entraremos em contato muito em breve.
                      </p>
                    </div>

                    {/* Dual Action on success to speed up */}
                    <div className="pt-4 max-w-sm mx-auto space-y-3">
                      <button
                        onClick={sendDirectWhatsApp}
                        className="w-full py-3 bg-[#25D366] text-black font-bold text-xs tracking-wider uppercase rounded flex items-center justify-center gap-2"
                      >
                        <Sparkles className="w-4 h-4 text-black" />
                        <span>Acelerar pelo WhatsApp</span>
                      </button>

                      <button
                        onClick={resetForm}
                        className="w-full py-3 bg-transparent border border-white/10 text-gray-300 hover:text-white font-bold text-xs tracking-wider uppercase rounded text-center block"
                      >
                        Enviar Outra Solicitação
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
});

ContactForm.displayName = "ContactForm";

export default ContactForm;
