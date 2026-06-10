import { Shield, Phone, Mail, Instagram, ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#050505] border-t-2 border-gold-lux/30 py-20 relative overflow-hidden">
      {/* Background soft glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[150px] bg-gold-lux/3 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
          
          {/* Logo & Slogan Column */}
          <div className="md:col-span-5 space-y-5">
            <a href="#inicio" className="flex items-center gap-3 group">
              <div className="relative flex items-center justify-center h-12 w-auto transition-all duration-300 group-hover:drop-shadow-[0_0_10px_rgba(212,175,55,0.45)]">
                <img
                  src="https://i.postimg.cc/t4vCT6JN/logo-lub.png"
                  alt="LUH Logo"
                  referrerPolicy="no-referrer"
                  className="h-12 w-auto object-contain saturate-[1.1] brightness-[1.1]"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-display font-black tracking-widest text-xl text-white leading-none">
                  LUH
                </span>
                <span className="font-mono text-[9px] text-gold-lux tracking-[0.25em] font-bold mt-1 uppercase">
                  Despachante de Armas
                </span>
              </div>
            </a>
            
            <p className="font-sans text-xs sm:text-[13px] text-gray-400 leading-relaxed max-w-sm font-light">
              Assessoria Documental e Legal com foco em agilidade, segurança jurídica e discrição. Especialista credenciada em processos de regularização e CAC perante SINARM e SIGMA.
            </p>

            {/* Quick legal compliance disclosure disclaimer to look extremely elite/legal */}
            <p className="font-sans text-[10px] text-gray-500 leading-relaxed max-w-sm font-light">
              Aviso Legal: Os serviços prestados de consultoria e acompanhamento processual obedecem rigorosamente à legislação brasileira de controle de armas vigente de acordo com a Lei 10.826/2003 e regulamentos emitidos pelo Exército Brasileiro e Polícia Federal.
            </p>
          </div>

          {/* Quick links header */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="font-display font-bold text-xs tracking-widest uppercase text-white">
              Navegação
            </h4>
            <div className="h-[2px] w-8 bg-gold-lux rounded mb-4" />
            <ul className="space-y-3">
              {[
                { label: "Início", href: "#inicio" },
                { label: "Serviços", href: "#servicos" },
                { label: "Explicativo da Lei", href: "#explicativa" },
                { label: "Níveis de Atirador", href: "#niveis" },
                { label: "Dúvidas Frequentes", href: "#duvidas" },
                { label: "Avaliações", href: "#avaliacoes" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="font-sans text-xs sm:text-[13px] text-gray-400 hover:text-gold-lux transition-colors font-light"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column info */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="font-display font-bold text-xs tracking-widest uppercase text-white">
              Canais de Contato
            </h4>
            <div className="h-[2px] w-8 bg-gold-lux rounded mb-4" />
            
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <div className="p-1.5 rounded bg-gold-lux/10 border border-gold-lux/20">
                  <Phone className="w-3.5 h-3.5 text-gold-lux shrink-0" />
                </div>
                <a
                  href="tel:+5566996335038"
                  className="font-sans text-xs sm:text-[13px] text-gray-300 hover:text-gold-lux transition-colors font-medium"
                >
                  +55 66 99633-5038
                </a>
              </li>

              <li className="flex items-center gap-3">
                <div className="p-1.5 rounded bg-gold-lux/10 border border-gold-lux/20">
                  <Mail className="w-3.5 h-3.5 text-gold-lux shrink-0" />
                </div>
                <a
                  href="mailto:silvadespachante8@gmail.com"
                  className="font-sans text-xs sm:text-[13px] text-gray-300 hover:text-gold-lux transition-colors break-all font-medium"
                >
                  silvadespachante8@gmail.com
                </a>
              </li>

              <li className="flex items-center gap-3">
                <div className="p-1.5 rounded bg-gold-lux/10 border border-gold-lux/20">
                  <Instagram className="w-3.5 h-3.5 text-gold-lux shrink-0" />
                </div>
                <a
                  href="https://www.instagram.com/luhdespachante/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-sans text-xs sm:text-[13px] text-gray-300 hover:text-gold-lux transition-colors font-medium"
                >
                  @luhdespachante
                </a>
              </li>
            </ul>

            <div className="pt-6">
              <button
                onClick={scrollToTop}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded border-2 border-white/10 hover:border-gold-lux/40 text-gray-400 hover:text-gold-lux transition-all text-[10px] font-mono tracking-widest uppercase cursor-pointer"
              >
                <span>Voltar ao topo</span>
                <ArrowUp className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>

        {/* Closing copyright footer */}
        <div className="pt-12 mt-12 border-t-2 border-white/5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="flex flex-col gap-1.5">
            <p className="font-mono text-[10px] text-gray-500 font-bold">
              © {new Date().getFullYear()} LUH DESPACHANTE DE ARMAS. Todos os direitos reservados.
            </p>
            <p className="font-mono text-[9.5px] text-gold-lux font-bold uppercase tracking-widest">
              CNPJ: 45.804.890/0001-22
            </p>
          </div>
          <p className="font-mono text-[9px] text-gray-500 uppercase tracking-widest font-bold">
            Desenvolvido sob os mais altos padrões de credibilidade digital.
          </p>
        </div>
      </div>
    </footer>
  );
}
