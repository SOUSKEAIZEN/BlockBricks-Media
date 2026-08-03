"use client";

import { motion, LayoutGroup } from "framer-motion";
import { useEffect, useState } from "react";

// 7-9 Bricks for the initial symbol
const BRICKS = [
  { id: 1, bg: "bg-richBlack", initial: { x: -200, y: 0 }, final: { x: -34, y: -17 }, out: { x: -1000, y: -500 }, delay: 0.35 },
  { id: 2, bg: "bg-richBlack", initial: { x: 200, y: 0 }, final: { x: 34, y: -17 }, out: { x: 1000, y: -500 }, delay: 0.45 },
  { id: 3, bg: "bg-warmIvory border border-softGray/20", initial: { x: 0, y: -200 }, final: { x: 0, y: -34 }, out: { x: 0, y: -1000 }, delay: 0.55 },
  { id: 4, bg: "bg-richBlack", initial: { x: 0, y: 200 }, final: { x: 0, y: 34 }, out: { x: 0, y: 1000 }, delay: 0.65 },
  { id: 5, bg: "bg-warmIvory border border-softGray/20", initial: { x: -200, y: -200 }, final: { x: -68, y: -34 }, out: { x: -1200, y: -1000 }, delay: 0.75 },
  { id: 6, bg: "bg-richBlack", initial: { x: 200, y: 200 }, final: { x: 68, y: 34 }, out: { x: 1200, y: 1000 }, delay: 0.85 },
  { id: 7, bg: "bg-richBlack", initial: { x: -200, y: 200 }, final: { x: -34, y: 17 }, out: { x: -1000, y: 500 }, delay: 0.95 },
  { id: 8, bg: "bg-warmIvory border border-softGray/20", initial: { x: 200, y: -200 }, final: { x: 34, y: 17 }, out: { x: 1000, y: -500 }, delay: 1.05 },
];

export default function OpeningAnimation() {
  const [phase, setPhase] = useState<"build" | "reveal" | "explode">("build");
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // 1.15s: Start revealing wordmark
    const revealTimer = setTimeout(() => setPhase("reveal"), 1150);
    // 2.3s: Explode
    const explodeTimer = setTimeout(() => setPhase("explode"), 2300);
    // 3.0s: Remove from DOM
    const hideTimer = setTimeout(() => setIsVisible(false), 3100);
    
    return () => {
      clearTimeout(revealTimer);
      clearTimeout(explodeTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  if (!isVisible) return null;

  const premiumEase: [number, number, number, number] = [0.76, 0, 0.24, 1]; // cinematic, controlled ease

  return (
    <LayoutGroup>
      <div className={`fixed inset-0 z-[100] flex flex-col items-center justify-center overflow-hidden transition-colors duration-700 ${phase === "explode" ? "bg-transparent pointer-events-none" : "bg-warmIvory"}`}>
        
        {/* ABSTRACT SYMBOL (BRICKS) */}
        <div className="relative w-48 h-48 flex items-center justify-center mb-8">
          
          {/* Center Orange Brick (0.0 - 1.15s) */}
          {phase === "build" && (
            <motion.div
              layoutId="brand-orange-brick"
              initial={{ opacity: 0, scale: 0.5, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.35, ease: premiumEase }}
              className="absolute w-8 h-4 bg-burntOrange z-20"
            />
          )}

          {/* Surrounding Bricks */}
          {BRICKS.map((brick) => (
            <motion.div
              key={brick.id}
              initial={{ opacity: 0, x: brick.initial.x, y: brick.initial.y }}
              animate={
                phase === "explode" 
                  ? { opacity: 0, x: brick.out.x, y: brick.out.y, scale: 1.5 }
                  : { opacity: 1, x: brick.final.x, y: brick.final.y, scale: 1 }
              }
              transition={
                phase === "explode"
                  ? { duration: 0.8, ease: premiumEase } // Explode outward
                  : { duration: 0.8, delay: brick.delay, ease: premiumEase } // Arrival with tiny deceleration
              }
              className={`absolute w-8 h-4 z-10 ${brick.bg}`}
            />
          ))}
        </div>

        {/* WORDMARK */}
        <div className="overflow-hidden h-32 flex items-center justify-center">
          <motion.div
            initial={{ y: "100%" }}
            animate={phase === "build" ? { y: "100%" } : (phase === "reveal" ? { y: 0 } : { y: "-100%", opacity: 0 })}
            transition={{ duration: 0.8, ease: premiumEase }}
            className="flex flex-col items-center leading-none text-richBlack uppercase"
          >
            <span className="text-5xl md:text-6xl font-display font-bold tracking-tighter leading-none">BLOCKBRICKS</span>
            <span className="text-sm md:text-base font-mono font-bold tracking-widest flex items-center gap-3 mt-3">
              MEDIA
              {/* Burnt Orange brick lands here during reveal */}
              {phase !== "build" ? (
                <motion.span 
                  layoutId="brand-orange-brick"
                  className="w-3 h-3 bg-burntOrange block"
                  transition={{ duration: 0.8, ease: premiumEase }}
                />
              ) : (
                <span className="w-3 h-3 block" />
              )}
            </span>
          </motion.div>
        </div>

      </div>
    </LayoutGroup>
  );
}