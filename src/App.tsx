import { useEffect, useRef } from "react";
import Header from "./components/Header.tsx";
import Hero from "./components/Hero.tsx";
import Authority from "./components/Authority.tsx";
import LevelsSection from "./components/LevelsSection.tsx";
import ExplanatorySection from "./components/ExplanatorySection.tsx";
import HabitualidadeSection from "./components/HabitualidadeSection.tsx";
import Services from "./components/Services.tsx";
import GoogleReviews from "./components/GoogleReviews.tsx";
import FAQ from "./components/FAQ.tsx";
import ContactForm, { ContactFormRef } from "./components/ContactForm.tsx";
import FloatingButtons from "./components/FloatingButtons.tsx";
import Footer from "./components/Footer.tsx";
import IntroPreloader from "./components/IntroPreloader.tsx";

export default function App() {
  const formRef = useRef<ContactFormRef>(null);

  // Configure SEO metadata dynamically on load
  useEffect(() => {
    document.title = "LUH Despachante de Armas | Regularização, CAC e Habitualidade";
    
    // Attempt update description meta tag too
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement("meta");
      metaDesc.setAttribute("name", "description");
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute(
      "content",
      "Especialista em regularização de armas, CAC, CR, habitualidade desportiva e assessoria documental completa junto ao Exército Brasileiro e Polícia Federal."
    );
  }, []);

  const handleContactInitiate = () => {
    if (formRef.current) {
      formRef.current.focusService("");
    }
  };

  const handleServiceSelected = (serviceName: string) => {
    if (formRef.current) {
      formRef.current.focusService(serviceName);
    }
  };

  return (
    <div id="website-root-container" className="min-h-screen text-white bg-black-premium selection:bg-gold-lux selection:text-black">
      {/* 6-second premium tactical loading intro representing firearms, CAC regularisation & elite safety */}
      <IntroPreloader />

      {/* Premium ambient decorative header glows */}
      <div className="absolute top-0 left-0 right-0 h-[500px] bg-gradient-to-b from-gold-lux/5 to-transparent pointer-events-none z-0" />

      {/* Header menu navigation */}
      <Header onContactClick={handleContactInitiate} />

      {/* Main sections */}
      <main className="relative z-10">
        
        {/* Full viewport Hero section */}
        <Hero onContactClick={handleContactInitiate} />

        {/* Credentials and business statistics */}
        <Authority />

        {/* Catalog of specialized firearm services */}
        <Services onServiceSelect={handleServiceSelected} />

        {/* Informative distinction: Posse vs Porte vs CR vs CAC */}
        <ExplanatorySection />

        {/* Sport shooters development levels */}
        <LevelsSection />

        {/* Habituality monitoring segment */}
        <HabitualidadeSection onContactClick={handleContactInitiate} />

        {/* Genuine Google Client Reviews & Statistics */}
        <GoogleReviews />

        {/* Frequently asked compliance questions */}
        <FAQ />

        {/* Interactive golden consult advisory form */}
        <ContactForm ref={formRef} />

      </main>

      {/* Corporate closing footer */}
      <Footer />

      {/* Right side floating channels (WhatsApp, Instagram) */}
      <FloatingButtons />
    </div>
  );
}
