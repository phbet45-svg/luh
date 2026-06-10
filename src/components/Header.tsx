import { useState, useEffect } from "react";
import { Menu, X, Shield } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface HeaderProps {
  onContactClick: () => void;
}

export default function Header({ onContactClick }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { label: "Início", href: "#inicio" },
    { label: "Serviços", href: "#servicos" },
    { label: "CAC", href: "#cac" },
    { label: "Habitualidade", href: "#habitualidade" },
    { label: "Dúvidas", href: "#duvidas" },
    { label: "Avaliações", href: "#avaliacoes" },
    { label: "Contato", href: "#contato" },
  ];

  return (
    <header
      id="navigation-bar"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#090909]/95 backdrop-blur-xl py-4 border-b-2 border-gold-lux/30 shadow-gold-glow"
          : "bg-transparent py-6 border-b border-white/5"
      }`}
    >
      {/* Top golden hairline accent line */}
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-gold-dark via-gold-lux to-gold-light" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo block */}
        <a href="#inicio" className="flex items-center gap-3 group">
          <div className="relative flex items-center justify-center h-12 w-auto transition-all duration-300 group-hover:drop-shadow-[0_0_12px_rgba(212,175,55,0.65)]">
            <img
              src="https://i.postimg.cc/t4vCT6JN/logo-lub.png"
              alt="LUH Logo"
              referrerPolicy="no-referrer"
              className="h-12 w-auto object-contain saturate-[1.2] brightness-[1.1]"
            />
          </div>
          <div className="flex flex-col">
            <span className="font-display font-bold tracking-widest text-lg text-white leading-none uppercase">
              LUH
            </span>
            <span className="font-mono text-[8px] text-gold-lux tracking-[0.25em] font-extrabold mt-1 uppercase">
              Despachante de Elite
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {menuItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="relative text-xs tracking-widest uppercase font-sans text-gray-300 hover:text-gold-lux transition-colors duration-200 font-bold group/item"
            >
              <span>{item.label}</span>
              <span className="absolute -bottom-1.5 left-0 w-0 h-[2px] bg-gold-lux transition-all duration-300 group-hover/item:w-full" />
            </a>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden md:block">
          <button
            id="header-cta-btn"
            onClick={onContactClick}
            className="relative px-7 py-3 text-xs font-bold tracking-widest uppercase border-2 border-gold-lux text-gold-lux bg-transparent hover:bg-gold-lux hover:text-black-premium transition-all duration-300 rounded overflow-hidden group cursor-pointer shadow-gold-glow"
          >
            <span className="relative z-10">Solicitar Atendimento</span>
            <div className="absolute inset-0 bg-gold-lux scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left -z-0" />
          </button>
        </div>

        {/* Mobile menu button */}
        <button
          id="mobile-menu-trigger"
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-300 hover:text-gold-lux p-2 focus:outline-none transition-colors"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-b border-gold-lux/20 bg-black-premium"
          >
            <div className="px-4 pt-2 pb-6 space-y-3">
              {menuItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-2.5 text-sm tracking-wider uppercase text-gray-300 hover:text-gold-lux font-medium border-l border-transparent hover:border-gold-lux pl-4 transition-all"
                >
                  {item.label}
                </a>
              ))}
              <div className="pt-4 px-3">
                <button
                  id="mobile-drawer-cta"
                  onClick={() => {
                    setIsOpen(false);
                    onContactClick();
                  }}
                  className="w-full text-center px-4 py-3 text-xs font-semibold tracking-wider uppercase border border-gold-lux text-gold-lux bg-transparent hover:bg-gold-lux hover:text-black-premium transition-all rounded"
                >
                  Solicitar Atendimento
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
