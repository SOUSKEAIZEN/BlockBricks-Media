"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

// Bricks configuration (Black, Ivory, Orange)
const BRICKS = [
  // L/R/T/B slide-ins
  { id: 1, bg: "bg-richBlack", initial: { x: -200, y: 0 }, final: { x: -34, y: -17 }, out: { x: -800, y: -400 }, delay: 0.3 },
  { id: 2, bg: "bg-richBlack", initial: { x: 200, y: 0 }, final: { x: 34, y: -17 }, out: { x: 800, y: -400 }, delay: 0.35 },
  { id: 3, bg: "bg-warmIvory border border-softGray/20", initial: { x: 0, y: -200 }, final: { x: 0, y: -34 }, out: { x: 0, y: -800 }, delay: 0.4 },
  { id: 4, bg: "bg-richBlack", initial: { x: 0, y: 200 }, final: { x: 0, y: 34 }, out: { x: 0, y: 800 }, delay: 0.45 },
  { id: 5, bg: "bg-burntOrange", initial: { x: -200, y: 200 }, final: { x: -34, y: 17 }, out: { x: -800, y: 800 }, delay: 0.5 },
  { id: 6, bg: "bg-richBlack", initial: { x: 200, y: -200 }, final: { x: 34, y: 17 }, out: { x: 800, y: -800 }, delay: 0.55 },
  { id: 7, bg: "bg-warmIvory border border-softGray/20", initial: { x: -200, y: -200 }, final: { x: -68, y: -34 }, out: { x: -1000, y: -800 }, delay: 0.6 },
  { id: 8, bg: "bg-richBlack", initial: { x: 200, y: 200 }, final: { x: 68, y: 34 }, out: { x: 1000, y: 800 }, delay: 0.65 },
];

export default function OpeningAnimation() {
  const [phase, setPhase] = useState<"build" | "explode">("build");
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Hold briefly at 1.3s, start explode at 1.4s
    const explodeTimer = setTimeout(() => setPhase("explode"), 1400);
    // Remove from DOM completely after explode finishes
    const hideTimer = setTimeout(() => setIsVisible(false), 2200);
    return () => {
      clearTimeout(explodeTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div className={`fixed inset-0 z-[100] flex flex-col items-center justify-center overflow-hidden transition-colors duration-700 ${phase === "explode" ? "bg-transparent pointer-events-none" : "bg-warmIvory"}`}>
      
      {/* ABSTRACT SYMBOL (BRICKS) */}
      <div className="relative w-48 h-48 flex items-center justify-center mb-8">
        
        {/* Center Orange Brick at 0.15s */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={phase === "build" ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 2, y: -500 }}
          transition={phase === "build" ? { duration: 0.4, delay: 0.15, ease: [0.16, 1, 0.3, 1] } : { duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="absolute w-8 h-4 bg-burntOrange z-20"
        />

        {/* Surrounding Bricks */}
        {BRICKS.map((brick) => (
          <motion.div
            key={brick.id}
            initial={{ opacity: 0, x: brick.initial.x, y: brick.initial.y }}
            animate={
              phase === "build" 
                ? { opacity: 1, x: brick.final.x, y: brick.final.y }
                : { opacity: 0, x: brick.out.x, y: brick.out.y }
            }
            transition={
              phase === "build"
                ? { duration: 0.6, delay: brick.delay, ease: [0.16, 1, 0.3, 1] }
                : { duration: 0.8, ease: [0.76, 0, 0.24, 1] } // Premium exit ease
            }
            className={`absolute w-8 h-4 z-10 ${brick.bg}`}
          />
        ))}
      </div>

      {/* WORDMARK */}
      <div className="overflow-hidden h-24 flex items-center justify-center">
        <motion.div
          initial={{ y: "100%" }}
          animate={phase === "build" ? { y: 0 } : { y: "-100%", opacity: 0 }}
          transition={
            phase === "build"
              ? { duration: 0.6, delay: 0.8, ease: [0.16, 1, 0.3, 1] }
              : { duration: 0.6, ease: [0.76, 0, 0.24, 1] }
          }
          className="flex flex-col items-center leading-none text-richBlack uppercase"
        >
          <span className="text-4xl md:text-5xl font-display font-bold tracking-tighter leading-none">BLOCKBRICKS</span>
          <span className="text-xs md:text-sm font-mono font-medium tracking-widest flex items-center gap-2 mt-2">
            MEDIA
            <span className="w-2.5 h-2.5 bg-burntOrange block"></span>
          </span>
        </motion.div>
      </div>

    </div>
  );
}