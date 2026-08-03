"use client";

import { motion, LayoutGroup } from "framer-motion";
import { useEffect, useState } from "react";

// Updated to exclusively use Leather Brown bricks to match the new architectural hero
const BRICKS = [
  { id: 1, bg: "bg-[#5A3827]", initial: { x: -150, y: 0 }, final: { x: -36, y: -18 }, out: { x: -200, y: -100, scale: 0.8 }, delay: 0.4 },
  { id: 2, bg: "bg-[#5A3827]", initial: { x: 150, y: 0 }, final: { x: 36, y: -18 }, out: { x: 200, y: -100, scale: 0.8 }, delay: 0.45 },
  { id: 3, bg: "bg-[#5A3827]", initial: { x: 0, y: -150 }, final: { x: 0, y: -36 }, out: { x: 0, y: -200, scale: 0.8 }, delay: 0.5 },
  { id: 4, bg: "bg-[#5A3827]", initial: { x: 0, y: 150 }, final: { x: 0, y: 36 }, out: { x: 0, y: 200, scale: 0.8 }, delay: 0.55 },
  { id: 5, bg: "bg-[#5A3827]", initial: { x: -150, y: -150 }, final: { x: -72, y: -36 }, out: { x: -250, y: -200, scale: 0.8 }, delay: 0.6 },
  { id: 6, bg: "bg-[#5A3827]", initial: { x: 150, y: 150 }, final: { x: 72, y: 36 }, out: { x: 250, y: 200, scale: 0.8 }, delay: 0.65 },
  { id: 7, bg: "bg-[#5A3827]", initial: { x: -150, y: 150 }, final: { x: -36, y: 18 }, out: { x: -200, y: 200, scale: 0.8 }, delay: 0.7 },
  { id: 8, bg: "bg-[#5A3827]", initial: { x: 150, y: -150 }, final: { x: 36, y: 18 }, out: { x: 200, y: -200, scale: 0.8 }, delay: 0.75 },
];

export default function OpeningAnimation() {
  const [phase, setPhase] = useState<"build" | "reveal" | "transition">("build");
  const [isVisible, setIsVisible] = useState(false);
  const [hasCheckedSession, setHasCheckedSession] = useState(false);

  useEffect(() => {
    const hasPlayed = sessionStorage.getItem("blockbricks-intro-played");
    
    if (hasPlayed) {
      setIsVisible(false);
      setHasCheckedSession(true);
      return;
    }

    sessionStorage.setItem("blockbricks-intro-played", "true");
    setIsVisible(true);
    setHasCheckedSession(true);

    const revealTimer = setTimeout(() => setPhase("reveal"), 1200);
    const transitionTimer = setTimeout(() => setPhase("transition"), 2250);
    const hideTimer = setTimeout(() => setIsVisible(false), 3000);
    
    return () => {
      clearTimeout(revealTimer);
      clearTimeout(transitionTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  if (!hasCheckedSession || !isVisible) return null;

  const cinematicEase = [0.76, 0, 0.24, 1] as const; 
  const outEase = [0.33, 1, 0.68, 1] as const; 

  return (
    <LayoutGroup>
      <motion.div 
        className="fixed inset-0 z-[100] flex flex-col items-center justify-center overflow-hidden pointer-events-none"
        initial={{ backgroundColor: "#F6F0E8" }}
        animate={{ backgroundColor: phase === "transition" ? "rgba(246, 240, 232, 0)" : "#F6F0E8" }}
        transition={{ duration: 0.75, ease: "easeInOut" }}
      >
        <div className="relative w-48 h-48 flex items-center justify-center mb-10">
          {phase === "build" && (
            <motion.div
              layoutId="brand-orange-brick"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.2, ease: cinematicEase }}
              className="absolute w-9 h-4.5 bg-[#C95A21] z-20 rounded-[1.5px]"
            />
          )}

          {BRICKS.map((brick) => (
            <motion.div
              key={brick.id}
              initial={{ x: brick.initial.x, y: brick.initial.y, opacity: 0 }}
              animate={
                phase === "transition" 
                  ? { x: brick.out.x, y: brick.out.y, opacity: 0, scale: brick.out.scale }
                  : { x: brick.final.x, y: brick.final.y, opacity: 1, scale: 1 }
              }
              transition={
                phase === "transition"
                  ? { duration: 0.7, ease: outEase } 
                  : { duration: 0.8, delay: brick.delay, ease: cinematicEase }
              }
              className={`absolute w-9 h-4.5 z-10 rounded-[1.5px] ${brick.bg}`}
              style={{ boxShadow: "0 2px 4px rgba(17,17,17,0.06)" }}
            />
          ))}
        </div>

        <div className="overflow-hidden h-32 flex flex-col items-center justify-center -mt-8">
          <motion.div
            initial={{ y: "100%", opacity: 0 }}
            animate={
              phase === "build" 
                ? { y: "100%", opacity: 0 } 
                : phase === "reveal" 
                  ? { y: 0, opacity: 1 } 
                  : { y: "-15%", opacity: 0, scale: 0.95 }
            }
            transition={{ duration: 0.8, ease: cinematicEase }}
            className="flex flex-row items-baseline gap-[clamp(8px,1.5vw,16px)]"
          >
            <h1 
              className="text-[#111111] uppercase font-display tracking-tight leading-none"
              style={{ fontSize: "clamp(36px, 4vw, 56px)", fontWeight: 700 }}
            >
              BLOCKBRICKS
            </h1>
            
            <div className="flex items-baseline gap-[clamp(6px,1vw,10px)]">
              <span 
                className="text-[#111111] uppercase font-display tracking-tight leading-none"
                style={{ fontSize: "clamp(20px, 2vw, 32px)", fontWeight: 500 }}
              >
                MEDIA
              </span>
              {phase !== "build" ? (
                <motion.span 
                  layoutId="brand-orange-brick"
                  className="w-2.5 h-2.5 md:w-3.5 md:h-3.5 bg-[#C95A21] inline-block relative -top-[2px] md:-top-[4px]"
                  transition={{ duration: 0.8, ease: cinematicEase }}
                />
              ) : (
                <span className="w-2.5 h-2.5 md:w-3.5 md:h-3.5 inline-block opacity-0" />
              )}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </LayoutGroup>
  );
}