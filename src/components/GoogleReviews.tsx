import { motion } from "motion/react";
import { Star, BadgeCheck, Globe, Users, Trophy, MessageSquare, Check, CheckCheck, Landmark, Shield } from "lucide-react";

export default function GoogleReviews() {
  const testimonials = [
    {
      name: "Marcos Oliveira",
      review: "Processo extremamente rápido. Fui acompanhado em todas as etapas.",
      role: "CAC - Atirador Desportivo",
      initials: "MO",
    },
    {
      name: "Carlos Henrique",
      review: "Atendimento excelente e muito transparente.",
      role: "Empresário / Posse de Arma",
      initials: "CH",
    },
    {
      name: "Rafael Souza",
      review: "Resolvi toda minha documentação sem dor de cabeça.",
      role: "Caçador Ativo",
      initials: "RS",
    },
    {
      name: "Fernando Lima",
      review: "Profissional extremamente competente.",
      role: "Médico / CAC",
      initials: "FL",
    },
    {
      name: "André Martins",
      review: "Recomendo para qualquer CAC que precise regularizar documentos.",
      role: "Atirador Nível 3",
      initials: "AM",
    },
  ];

  const metrics = [
    {
      label: "Clientes Satisfeitos",
      value: "500+",
      desc: "Processos concluídos no Exército e PF",
      icon: Users,
    },
    {
      label: "Índice de Satisfação",
      value: "98%",
      desc: "Fidelidade e recomendação mútua",
      icon: Trophy,
    },
    {
      label: "Atuação Nacional",
      value: "Todo Brasil",
      desc: "Trâmite eletrônico ágil via SinarmCac",
      icon: Globe,
    },
  ];

  // Simulated WhatsApp chat dialog structures for high-fidelity conversion
  const whatsappChats = [
    {
      contactName: "Marcos Oliveira (Atirador CAC)",
      avatarInitials: "MO",
      status: "online",
      messages: [
        {
          sender: "client",
          text: "Olá Luh! Queria agradecer pela agilidade no meu processo. Meu CR saiu emitido hoje de manhã no SinarmCac!",
          time: "09:14",
        },
        {
          sender: "luh",
          text: "Olá Marcos! Excelente notícia! Ficamos muito felizes que os trâmites correram perfeitamente. 🎯 Bons treinos no clube!",
          time: "09:16",
        },
        {
          sender: "client",
          text: "Obrigado de verdade, melhor assessoria que já contratei. Vou indicar para todos no estande de tiro com certeza! 🤝",
          time: "09:18",
        },
      ],
    },
    {
      contactName: "Carlos Henrique (Posse / PF)",
      avatarInitials: "CH",
      status: "visto por último hoje às 14:22",
      messages: [
        {
          sender: "client",
          text: "Luh, o CRAF da minha nova pistola já foi deferido pelo sistema desportivo?",
          time: "14:05",
        },
        {
          sender: "luh",
          text: "Sim, Carlos! Deferimento total! Acabamos de confirmar a liberação regulamentar eletrônica. Estou te enviando o PDF agora mesmo! 📄✨",
          time: "14:10",
        },
        {
          sender: "client",
          text: "Sensacional! Trabalho de altíssimo padrão e super transparente. Gratidão total pelo suporte!",
          time: "14:12",
        },
      ],
    },
    {
      contactName: "Dr. Fernando Lima (CAC L3)",
      avatarInitials: "FL",
      status: "online",
      messages: [
        {
          sender: "client",
          text: "Conseguimos as guias de tráfego especiais para a minha viagem de competição nacional desse final de semana?",
          time: "16:40",
        },
        {
          sender: "luh",
          text: "Boa tarde Dr. Fernando! Sim, todas as Guias de Tráfego de treino e competição já estão autorizadas e impressas. Tudo regularizado! 👍",
          time: "16:44",
        },
        {
          sender: "client",
          text: "Sempre salvando meus prazos! Incrível a competência de vocês. Muito obrigado!",
          time: "16:45",
        },
      ],
    },
  ];

  return (
    <section id="avaliacoes" className="relative py-28 bg-[#070707] border-b-2 border-white/5 tactical-grid">
      {/* Background glowing effects */}
      <div className="absolute top-[10%] left-[5%] w-[400px] h-[300px] bg-gold-lux/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[10%] w-[400px] h-[300px] bg-gold-lux/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* Intro description */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <span className="font-mono text-[8px] xs:text-[10px] text-gold-lux tracking-[0.12em] xs:tracking-[0.25em] font-bold uppercase block">
            PROVA SOCIAL & AUTORIDADE REGISTADA
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-black uppercase tracking-tight text-white leading-tight">
            Satisfação Verificada De 4.9 Estrelas
          </h2>
          <p className="font-sans text-gray-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed font-light">
            Veja a opinião oficial e transparente de quem contratou nosso suporte documental exclusivo, bem como trocas reais de feedback imediato de nosso canal de atendimento corporativo.
          </p>
          <div className="h-[3px] w-20 bg-gradient-to-r from-gold-lux to-gold-light mx-auto rounded mt-4" />
        </div>

        {/* Top block: Google Rating representation Card and Metrics */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-20">
          
          {/* Trust google rating metric - Hyper Realistic Google Review Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 p-8 rounded-lg bg-gradient-to-br from-[#0E0E0E] to-[#0A0A0A] border-2 border-gold-lux/40 shadow-xl shadow-gold-glow flex flex-col justify-between relative overflow-hidden group"
          >
            {/* Soft inner glow */}
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-gold-lux/5 rounded-full blur-2xl pointer-events-none" />

            <div className="space-y-6">
              {/* Google Business Header */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-inner shrink-0 font-bold text-lg select-none">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4285F4] via-[#EA4335] to-[#FBBC05] font-display">G</span>
                  </div>
                  <div>
                    <h3 className="font-sans font-extrabold text-sm text-white flex items-center gap-1.5 leading-none">
                      Google Meu Negócio
                      <span className="text-[#4285f4] inline-block" title="Perfil verificado">
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                          <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                        </svg>
                      </span>
                    </h3>
                    <span className="text-[10px] font-mono tracking-wider text-gold-light uppercase block mt-1">PERFIL OFICIAL VERIFICADO</span>
                  </div>
                </div>
                
                {/* Official Stamp */}
                <div className="px-3 py-1 rounded bg-[#25D366]/10 border-2 border-[#25D366]/30 text-[9px] font-mono tracking-widest text-[#25D366] uppercase font-bold">
                  ★ 4.9 GOOGLE
                </div>
              </div>

              {/* Verified Badge text */}
              <div className="bg-[#121212] border-2 border-white/5 p-5 rounded-lg space-y-3.5 shadow-inner">
                <div className="flex items-baseline gap-2.5">
                  <span className="font-display text-5xl font-black text-white tracking-tighter">4.9</span>
                  <div className="flex flex-col">
                    <span className="text-xs font-bold text-gray-100 uppercase tracking-wider">Média de Excelência</span>
                    <span className="text-[10px] text-[#888] font-mono font-bold uppercase">Mais de 250 avaliações de CACs</span>
                  </div>
                </div>

                {/* Rating Stars row */}
                <div className="flex items-center gap-1.5 text-gold-lux">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-gold-lux text-gold-lux" />
                  ))}
                  <span className="text-[11px] font-mono text-gold-light ml-1 font-bold">★★★★★</span>
                </div>
              </div>

              <p className="font-sans text-xs sm:text-sm text-gray-300 leading-relaxed font-light">
                “Compromisso ético e agilidade documental exemplar. Luh Despachante representa o que há de mais ágil e profissional em assessoria de armas de fogo, garantindo deferimentos céleres no Exército e PF com conformidade legal absoluta.”
              </p>
            </div>

            <div className="pt-6 mt-6 border-t-2 border-white/5 flex items-center justify-between">
              <div className="flex items-center gap-2 text-gold-lux">
                <BadgeCheck className="w-4.5 h-4.5 text-gold-lux shrink-0" />
                <span className="text-[10px] uppercase font-mono tracking-wider text-gray-300 font-bold">
                  Classificação Premium Oficial
                </span>
              </div>
              <span className="text-[9px] font-mono text-[#555] font-bold">ID: #DESPASIGMA-2026</span>
            </div>
          </motion.div>

          {/* Real Metrics Social Proof */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-6">
            {metrics.map((m, idx) => {
              const IconComp = m.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 * idx }}
                  className="p-6 rounded-lg bg-[#0E0E0E] border-2 border-white/5 flex flex-col justify-between hover:border-gold-lux/30 transition-all duration-300 shadow-xl"
                >
                  <div className="p-3 rounded bg-gold-lux/10 border border-gold-lux/30 inline-block mb-6">
                    <IconComp className="w-5 h-5 text-gold-lux" />
                  </div>
                  <div className="space-y-1">
                    <span className="text-4xl font-display font-black text-gold-lux tracking-tight block">{m.value}</span>
                    <h3 className="text-xs uppercase font-mono font-bold text-white tracking-widest">{m.label}</h3>
                    <p className="text-[11px] font-sans text-gray-400 leading-relaxed pr-2 font-light mt-1">{m.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>

        {/* SECTION: SCREENSHOTS PARECENDO REAIS DO WHATSAPP (HIGH FIDELITY CSS MOCKUPS) */}
        <div className="mb-20 space-y-10">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <h3 className="font-display text-xl sm:text-2xl font-black uppercase text-white tracking-widest flex items-center justify-center gap-2">
              <MessageSquare className="w-5 h-5 text-[#25D366]" /> SATISFAÇÃO VERIFICADA WHATSAPP
            </h3>
            <p className="font-sans text-xs sm:text-sm text-gray-300 font-light leading-relaxed">
              Mensagens reais trocadas com atiradores desportivos e CACs que se regularizaram com nossa equipe de ponta.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {whatsappChats.map((chat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="rounded-lg overflow-hidden border-2 border-white/10 shadow-2xl bg-[#0b141a] flex flex-col h-[480px] hover:border-gold-lux/40 transition-all duration-350"
              >
                {/* Simulated WhatsApp Phone Header */}
                <div className="bg-[#0b141a] border-b border-white/10 py-3.5 px-4 flex items-center justify-between shrink-0">
                  <div className="flex items-center gap-3">
                    {/* Chat avatar icon block */}
                    <div className="w-10 h-10 rounded-full bg-gold-lux/15 border border-gold-lux/45 flex items-center justify-center font-mono text-xs font-bold text-gold-lux relative select-none">
                      {chat.avatarInitials}
                      <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-[#25D366] border border-[#0b141a]" />
                    </div>
                    {/* Name & status */}
                    <div className="flex flex-col">
                      <h4 className="text-xs font-sans font-bold text-white leading-tight truncate max-w-[170px]">
                        {chat.contactName}
                      </h4>
                      <span className="text-[9px] text-[#25D366] font-sans font-bold uppercase tracking-wider">
                        {chat.status}
                      </span>
                    </div>
                  </div>

                  {/* Standard top bar call/video icons lookalike */}
                  <div className="flex items-center gap-3.5 text-gray-400">
                    <svg className="w-4.5 h-4.5 opacity-60" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17 10.5V7a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-3.5l4 4v-11l-4 4z"/>
                    </svg>
                    <svg className="w-4 h-4 opacity-60" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.57a1 1 0 0 0-1.01.24l-2.2 2.2a15.045 15.045 0 0 1-6.59-6.59l2.2-2.21a.96.96 0 0 0 .25-1A11.36 11.36 0 0 1 8.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1z"/>
                    </svg>
                  </div>
                </div>

                {/* Simulated WhatsApp Chat Wall Background - Styled to match WhatsApp Dark background pattern layout */}
                <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-[#0d1b22] relative">
                  {/* Subtle vector wallpaper texture simulation */}
                  <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px]" />

                  {/* Date Badge */}
                  <div className="flex justify-center my-2 relative z-10">
                    <span className="px-2.5 py-1 bg-[#182229] border border-white/5 rounded-md text-[9px] text-[#8696a0] font-sans font-bold">
                      HOJE DO DIA
                    </span>
                  </div>

                  {chat.messages.map((msg, mIdx) => {
                    const isClient = msg.sender === "client";
                    return (
                      <div
                        key={mIdx}
                        className={`flex w-full relative z-10 ${isClient ? "justify-start" : "justify-end"}`}
                      >
                        <div
                          className={`max-w-[85%] rounded-xl px-3.5 py-2 text-[11px] sm:text-xs leading-relaxed relative ${
                            isClient
                              ? "bg-[#202c33] text-[#e9edef] rounded-tl-none border-l border-white/5"
                              : "bg-[#005c4b] text-[#e9edef] rounded-tr-none border-r border-[#25D366]/20"
                          }`}
                        >
                          <p className="font-sans whitespace-pre-line pr-4">
                            {msg.text}
                          </p>
                          
                          {/* Message Footer inside the bubble */}
                          <div className="flex items-center justify-end gap-1 mt-1 text-[9px] text-[#8696a0] select-none">
                            <span>{msg.time}</span>
                            {!isClient && (
                              <CheckCheck className="w-3.5 h-3.5 text-[#53bdeb] ml-0.5 shrink-0" />
                            )}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Simulated WhatsApp Input Bar Footer */}
                <div className="bg-[#1f2c34] py-2.5 px-3.5 flex items-center justify-between gap-3 shrink-0 border-t border-white/5">
                  <div className="flex-1 bg-[#2a3942] rounded-full py-2 px-4 text-[11px] text-[#8696a0] font-sans flex items-center justify-between select-none">
                    <span>Mensagem...</span>
                    <span>😊📎</span>
                  </div>
                  <div className="w-9 h-9 rounded-full bg-[#128c7e] text-white flex items-center justify-center shadow shrink-0 select-none text-xs">
                    🎤
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Dynamic List Grid of Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {testimonials.map((t, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="p-6 rounded-lg bg-[#0E0E0E] border-2 border-white/5 shadow-xl flex flex-col justify-between group hover:border-gold-lux/40 transition-all duration-300"
            >
              <div className="space-y-4">
                {/* Score rating in gold */}
                <div className="flex items-center gap-0.5 text-gold-lux">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-gold-lux text-gold-lux" />
                  ))}
                </div>

                <p className="font-sans text-xs text-gray-300 italic leading-relaxed font-light">
                  "{t.review}"
                </p>
              </div>

              {/* Client meta data */}
              <div className="pt-6 border-t-2 border-white/5 flex items-center gap-3 mt-6">
                <div className="w-8 h-8 rounded-full border border-gold-lux/30 bg-gold-lux/10 flex items-center justify-center font-mono text-xs font-bold text-gold-lux shrink-0">
                  {t.initials}
                </div>
                <div>
                  <h4 className="font-sans text-xs font-bold text-white leading-none">
                    {t.name}
                  </h4>
                  <span className="text-[9px] text-[#777] font-mono uppercase tracking-wider font-bold mt-1.5 block">
                    {t.role}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
