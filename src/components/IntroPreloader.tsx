import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

export default function IntroPreloader() {
  const [visible, setVisible] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // 4-second total duration (4000ms)
    const startTime = Date.now();
    const duration = 4000;

    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const calculatedProgress = Math.min((elapsed / duration) * 100, 100);
      setProgress(calculatedProgress);

      if (elapsed >= duration) {
        clearInterval(interval);
        setTimeout(() => {
          setVisible(false);
        }, 300); // Small buffer for exit animation
      }
    }, 45);

    return () => clearInterval(interval);
  }, []);

  const [particles] = useState(() =>
    Array.from({ length: 32 }).map((_, i) => ({
      id: i,
      size: Math.random() * 3.5 + 1.5, // 1.5px to 5px
      x: Math.random() * 100,          // % width
      duration: Math.random() * 7 + 5, // 5s to 12s
      delay: Math.random() * -12,      // negative start delay
      drift: (Math.random() - 0.5) * 12, // drifting horizontal offset
    }))
  );

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          id="custom-intro-preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05, filter: "blur(30px)" }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[9999] bg-[#030303] flex flex-col items-center justify-center overflow-hidden"
        >
          {/* Panoramic Backlights & Matching Logo Background Ambient Glows */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {/* Cinematic Floating Luxury Ember Particles */}
            {particles.map((p) => (
              <motion.div
                key={p.id}
                className="absolute rounded-full bg-gradient-to-r from-gold-lux to-gold-light pointer-events-none"
                style={{
                  width: p.size,
                  height: p.size,
                  left: `${p.x}%`,
                  bottom: "-10px",
                }}
                animate={{
                  y: ["0vh", "-110vh"],
                  x: ["0px", `${p.drift * 10}px`],
                  opacity: [0, 0.7, 0.7, 0],
                  scale: [1, 1.3, 0.8],
                }}
                transition={{
                  duration: p.duration,
                  repeat: Infinity,
                  delay: p.delay,
                  ease: "easeInOut",
                }}
              />
            ))}

            {/* Glowing premium gold ambient backdrop matching logo gradient */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] bg-gradient-to-br from-gold-lux/15 to-gold-dark/5 rounded-full blur-[160px] pointer-events-none mix-blend-screen animate-pulse" />
            <div className="absolute top-1/3 left-1/4 w-[280px] h-[280px] bg-gold-lux/5 rounded-full blur-[140px] pointer-events-none" />
            <div className="absolute bottom-1/3 right-1/4 w-[300px] h-[300px] bg-gold-dark/4 rounded-full blur-[150px] pointer-events-none" />

            {/* Deep linear gradient for seamless bottom styling and visual strength */}
            <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-[#030303] to-transparent" />
          </div>

          {/* Tactical Radar / Scope HUD Background overlay */}
          <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
            {/* Spinning Crosshair / Reticle */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
              className="absolute w-[450px] h-[450px] md:w-[700px] md:h-[700px] rounded-full border border-gold-lux/5 flex items-center justify-center opacity-80"
            >
              {/* Inner scope marks */}
              <div className="absolute top-0 bottom-0 left-1/2 w-[1px] bg-gold-lux/5" />
              <div className="absolute left-0 right-0 top-1/2 h-[1px] bg-gold-lux/5" />
              <div className="w-[85%] h-[85%] rounded-full border-2 border-dashed border-gold-lux/3" />
              <div className="w-[60%] h-[60%] rounded-full border border-gold-lux/8" />
              <div className="w-[30%] h-[30%] rounded-full border border-gold-lux/15" />
            </motion.div>
          </div>

          <div className="relative z-10 max-w-2xl px-6 flex flex-col items-center justify-center space-y-10">
            
            {/* Extremely Large, Robust & Highly Professional Logo Container (Shield Frame design) */}
            <div className="relative p-6 xs:p-10 md:p-14 rounded-full bg-gradient-to-b from-[#0E0E0E] via-[#080808] to-[#040404] border-2 border-gold-lux/35 backdrop-blur-3xl shadow-[0_0_100px_rgba(212,175,55,0.25)] flex flex-col items-center justify-center w-[230px] h-[230px] xs:w-[280px] xs:h-[280px] md:w-[380px] md:h-[380px] overflow-hidden group">
              
              {/* Highlight Sweep reflection effect */}
              <motion.div
                animate={{
                  left: ["-100%", "200%"],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 4,
                  ease: "easeInOut",
                  repeatDelay: 1.5,
                }}
                className="absolute top-0 bottom-0 w-32 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12 z-20 pointer-events-none"
              />

              {/* Pulsating back ring glowing layer */}
              <motion.div
                animate={{
                  scale: [0.95, 1.05, 0.95],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute inset-4 rounded-full border border-gold-lux/20 pointer-events-none"
              />

              {/* Holographic matrix digital mesh */}
              <div className="absolute inset-0 bg-[radial-gradient(#d4af37_1px,transparent_1px)] [background-size:20px_20px] opacity-[0.05] pointer-events-none" />

              {/* Robust Golden Circular Orbit */}
              <div className="absolute inset-1.5 rounded-full border border-gold-lux/30 pointer-events-none opacity-80" />
              <div className="absolute inset-3 rounded-full border-2 border-dashed border-gold-lux/10 pointer-events-none" />

              {/* Huge Logo Image */}
              <motion.img
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: [0.8, 1, 0.9, 1], scale: 1.02 }}
                transition={{ duration: 1.8 }}
                src="https://i.postimg.cc/t4vCT6JN/logo-lub.png"
                alt="Luh Logo"
                referrerPolicy="no-referrer"
                className="w-36 h-36 xs:w-48 xs:h-48 md:w-68 md:h-68 object-contain relative z-10 filter drop-shadow-[0_0_35px_rgba(212,175,55,0.55)] saturate-[1.3] brightness-[1.12]"
              />
            </div>

            {/* Premium Corporate Identity Header */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="text-center space-y-2 px-4"
            >
              <h2 className="font-display text-xl xs:text-2xl md:text-4xl font-black uppercase text-white tracking-[0.15em] xs:tracking-[0.25em] leading-none">
                LUH DESPACHANTE
              </h2>
              <div className="flex items-center justify-center gap-2 xs:gap-3">
                <span className="h-[1.5px] w-4 xs:w-6 bg-gold-lux/50" />
                <p className="font-mono text-[8px] xs:text-[9px] md:text-[10px] text-gold-light tracking-[0.18em] xs:tracking-[0.35em] font-bold uppercase">
                  ASSESSORIA DOCUMENTAL DE ELITE
                </p>
                <span className="h-[1.5px] w-4 xs:w-6 bg-gold-lux/50" />
              </div>
            </motion.div>

            {/* Robust loading progress bar */}
            <div className="w-full flex flex-col items-center space-y-3">
              <div className="relative w-52 xs:w-64 md:w-80 h-2.5 bg-neutral-950 border border-gold-lux/25 rounded-full overflow-hidden shadow-inner">
                {/* Active golden highlight fill */}
                <motion.div
                  initial={{ width: "0%" }}
                  animate={{ width: `${progress}%` }}
                  transition={{ ease: "easeInOut" }}
                  className="h-full bg-gradient-to-r from-[#8a6d25] via-gold-lux to-gold-light rounded-full"
                />
                
                {/* Scanning reflective light streak */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-pulse" />
              </div>

              {/* Progress metric percentage with monospace styling */}
              <motion.span 
                className="text-[11px] font-mono font-black text-gold-lux tracking-widest uppercase bg-gold-lux/10 py-1 px-3.5 border border-gold-lux/20 rounded"
              >
                CARREGANDO SISTEMA ({Math.round(progress)}%)
              </motion.span>
            </div>

          </div>

        </motion.div>
      )}
    </AnimatePresence>
  );
}
