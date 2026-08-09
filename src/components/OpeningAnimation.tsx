"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function OpeningAnimation() {
  const [isVisible, setIsVisible] = useState(false);
  const [hasCheckedSession, setHasCheckedSession] = useState(false);
  const [phase, setPhase] = useState<"assemble" | "hold" | "exit">("assemble");

  useEffect(() => {
    const hasPlayed = sessionStorage.getItem("blockbricks-intro-played");
    
    // For development, you can comment these lines out to replay it on every refresh
    if (hasPlayed) {
      setIsVisible(false);
      setHasCheckedSession(true);
      return;
    }
    
    setIsVisible(true);
    setHasCheckedSession(true);

    const holdTimer = setTimeout(() => setPhase("hold"), 2600);
    const exitTimer = setTimeout(() => setPhase("exit"), 3000);
    const removeTimer = setTimeout(() => {
      setIsVisible(false);
      sessionStorage.setItem("blockbricks-intro-played", "true");
      window.dispatchEvent(new Event("intro-complete"));
    }, 3800);
    
    return () => {
      clearTimeout(holdTimer);
      clearTimeout(exitTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  if (!hasCheckedSession || !isVisible) return null;

  const cinematicEase = [0.16, 1, 0.3, 1] as const;

  // Exact proportions derived from the reference image
  const U = 32; // base unit (height and small square width)
  const G = 8;  // uniform gap
  
  // Total dimensions for the 4-brick logo
  const width = 3 * U + 2 * G;
  const height = 2 * U + G;

  const blocks = [
    // Top Left: Small Dark Square
    { id: 1, color: "bg-[#111111]", left: 0, top: 0, w: U, h: U, initX: -150, initY: -200, delay: 0.1 },
    // Top Right: Long Orange Rect
    { id: 2, color: "bg-[#C95A21]", left: U + G, top: 0, w: 2*U + G, h: U, initX: 200, initY: -100, delay: 0.2 },
    // Bottom Left: Long Orange Rect
    { id: 3, color: "bg-[#C95A21]", left: 0, top: U + G, w: 2*U + G, h: U, initX: -200, initY: 100, delay: 0.3 },
    // Bottom Right: Small Dark Square
    { id: 4, color: "bg-[#111111]", left: 2*U + 2*G, top: U + G, w: U, h: U, initX: 150, initY: 200, delay: 0.35 },
  ];

  return (
    <motion.div 
      className="fixed inset-0 z-[2000] flex flex-col items-center justify-center overflow-hidden bg-[#F6F0E8] pointer-events-none"
      initial={{ opacity: 1 }}
      animate={{ opacity: phase === "exit" ? 0 : 1 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      <div className="flex flex-col items-center justify-center w-full max-w-[400px]">
        
        {/* FOUR-BRICK LOGO ASSEMBLY */}
        <div 
          className="relative mb-12"
          style={{ width: `${width}px`, height: `${height}px` }}
        >
          {blocks.map((b) => (
            <motion.div
              key={b.id}
              initial={{ x: b.initX, y: b.initY, opacity: 0 }}
              animate={{ x: 0, y: 0, opacity: 1 }}
              transition={{ duration: 1.1, delay: b.delay, ease: cinematicEase }}
              className={`absolute rounded-[3px] ${b.color}`}
              style={{
                left: `${b.left}px`,
                top: `${b.top}px`,
                width: `${b.w}px`,
                height: `${b.h}px`,
              }}
            />
          ))}
        </div>

        {/* TEXT REVEALS */}
        <div className="flex flex-col items-center overflow-hidden w-full">
          {/* BLOCK BRICKS */}
          <motion.div
            initial={{ y: "120%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.45, ease: cinematicEase }}
          >
            <h1 className="text-[#111111] font-display uppercase font-semibold text-3xl md:text-[34px] tracking-[0.25em] ml-[0.25em]">
              BLOCK BRICKS
            </h1>
          </motion.div>
        </div>

        <div className="flex flex-col items-center overflow-hidden w-full mt-4">
          {/* BUILD TO STAND OUT */}
          <motion.div
            initial={{ y: "120%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 2.05, ease: cinematicEase }}
          >
            <h2 className="text-[#111111]/70 font-sans uppercase font-normal text-[10px] md:text-xs tracking-[0.45em] ml-[0.45em] text-center">
              BUILD TO STAND OUT
            </h2>
          </motion.div>
        </div>

      </div>
    </motion.div>
  );
}