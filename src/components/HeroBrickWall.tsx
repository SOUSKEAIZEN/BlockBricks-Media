"use client";

import { motion, AnimatePresence, useInView, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

// Tonal variations of Leather Brown for subtle, matte realism
const BRICK_COLORS = ["#5A3827", "#563525", "#5E3B29", "#533324"];

// Grid dimensions large enough to fully bleed off-screen on all devices
const ROWS = 20;
const COLS = 26;

type Brick = { id: string; row: number; col: number; color: string; shouldCollapse: boolean; dist: number };

export default function HeroBrickWall() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { margin: "200px" });
  const prefersReducedMotion = useReducedMotion();
  
  const [bricks, setBricks] = useState<Brick[]>([]);
  const [phase, setPhase] = useState<"init" | "collapsing" | "ambient">("init");
  const [config, setConfig] = useState({ w: 140, h: 60, gap: 8 });

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      if (mobile) {
        setConfig({ w: 85, h: 36, gap: 5 });
      } else {
        setConfig({ w: 140, h: 60, gap: 8 });
      }
    };
    
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Helper to determine if a brick collapses (falls away)
  const checkShouldCollapse = (r: number, c: number) => {
    const centerR = ROWS / 2;
    const centerC = COLS / 2;
    
    // Normalized distance from center (0 to ~1.4)
    const dr = Math.abs(r - centerR) / (ROWS / 2);
    const dc = Math.abs(c - centerC) / (COLS / 2);
    const dist = Math.sqrt(dr * dr + dc * dc);
    
    // Pseudo-random noise (0 to 1)
    const noise = Math.abs(Math.sin(r * 12.9898 + c * 78.233)); 
    
    // Steep probability curve. 
    // Center (dist=0) -> probabilityToKeep = 0 -> always collapses.
    // Edges (dist=1) -> probabilityToKeep = 1.
    const probabilityToKeep = Math.pow(dist, 2.5) * 0.8; 
    
    const keep = noise < probabilityToKeep;
    
    // Force center to always collapse, force far corners to always keep
    if (dist < 0.4) return true;
    if (dist > 1.2) return false;
    
    return !keep; 
  };

  useEffect(() => {
    const centerR = ROWS / 2;
    const centerC = COLS / 2;

    const initialBricks: Brick[] = [];

    for (let r = 0; r < ROWS; r++) {
      for (let c = 0; c < COLS; c++) {
        const shouldCollapse = checkShouldCollapse(r, c);
        const dr = Math.abs(r - centerR);
        const dc = Math.abs(c - centerC);
        const dist = Math.sqrt(dr * dr + dc * dc);

        initialBricks.push({
          id: `init_${r}_${c}`,
          row: r,
          col: c,
          color: BRICK_COLORS[(r * 7 + c * 3) % BRICK_COLORS.length],
          shouldCollapse,
          dist,
        });
      }
    }

    const hasPlayed = sessionStorage.getItem("blockbricks-hero-collapsed");

    if (hasPlayed || prefersReducedMotion) {
      setPhase("ambient");
      setBricks(initialBricks.filter(b => !b.shouldCollapse));
    } else {
      setBricks(initialBricks);

      setTimeout(() => {
        setPhase("collapsing");
        
        initialBricks.forEach((brick) => {
          if (brick.shouldCollapse) {
            setTimeout(() => {
              setBricks(prev => prev.filter(b => b.id !== brick.id));
            }, brick.dist * 180 + (Math.random() * 120)); 
          }
        });

        setTimeout(() => {
          setPhase("ambient");
          sessionStorage.setItem("blockbricks-hero-collapsed", "true");
        }, 2800);

      }, 2500); 
    }
  }, [prefersReducedMotion]);

  // Ambient Infinite Construction Loop (Outer distant bricks only)
  useEffect(() => {
    if (phase !== "ambient" || !isInView || prefersReducedMotion) return;

    let isActive = true;
    let timeoutId: NodeJS.Timeout;

    const loop = () => {
      if (!isActive) return;

      setBricks((prev) => {
        const outerBricks = prev.filter(b => !b.shouldCollapse);
        const shouldRemove = Math.random() > 0.6;

        if (shouldRemove && outerBricks.length > 30) {
          const target = outerBricks[Math.floor(Math.random() * outerBricks.length)];
          return prev.filter(b => b.id !== target.id);
        } else {
          const emptySlots = [];
          for (let r = 0; r < ROWS; r++) {
            for (let c = 0; c < COLS; c++) {
              const isOccupied = prev.some(b => b.row === r && b.col === c);
              const isCollapsible = checkShouldCollapse(r, c);
              
              if (!isOccupied && !isCollapsible) {
                emptySlots.push({ r, c });
              }
            }
          }

          if (emptySlots.length > 0) {
            const target = emptySlots[Math.floor(Math.random() * emptySlots.length)];
            const newBrick: Brick = {
              id: `amb_${Date.now()}_${target.r}_${target.c}`,
              row: target.r,
              col: target.c,
              color: BRICK_COLORS[(target.r * 7 + target.c * 3) % BRICK_COLORS.length],
              shouldCollapse: false,
              dist: 0
            };
            return [...prev, newBrick];
          }
        }
        return prev;
      });

      timeoutId = setTimeout(loop, 900 + Math.random() * 400);
    };

    timeoutId = setTimeout(loop, 1000);
    return () => {
      isActive = false;
      clearTimeout(timeoutId);
    };
  }, [phase, isInView, prefersReducedMotion]);

  const lockEase = [0.16, 1, 0.3, 1] as const; 
  const removeEase = [0.33, 1, 0.68, 1] as const;
  const fallEase = [0.42, 0, 1, 1] as const; 

  const brickVariants = {
    hidden: { opacity: 0, z: -600 },
    visible: (currentPhase: string) => ({ 
      opacity: currentPhase === "ambient" ? 0.4 : 1, 
      z: currentPhase === "ambient" ? -400 : 0, 
      y: 0, 
      rotateZ: 0, 
      transition: { duration: currentPhase === "ambient" ? 2.0 : 1.0, ease: lockEase } 
    }),
    exit: (currentPhase: string) => {
      if (currentPhase === "collapsing") {
        return {
          opacity: 0,
          y: 400 + Math.random() * 300, 
          z: 100 + Math.random() * 200, 
          rotateZ: (Math.random() - 0.5) * 15, 
          transition: { duration: 1.2, ease: fallEase } 
        };
      }
      return {
        opacity: 0,
        z: -600,
        transition: { duration: 1.0, ease: removeEase } 
      };
    }
  };

  return (
    <div 
      ref={containerRef}
      className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden"
      style={{ perspective: "1200px" }}
    >
      <motion.div 
        className="relative transform-gpu"
        style={{ 
          width: `${COLS * (config.w + config.gap)}px`, 
          height: `${ROWS * (config.h + config.gap)}px`,
          transformStyle: "preserve-3d",
        }}
      >
        <AnimatePresence custom={phase}>
          {bricks.map((brick) => {
            const isOffset = brick.row % 2 !== 0;
            const xOffset = isOffset ? (config.w + config.gap) / 2 : 0;
            const left = brick.col * (config.w + config.gap) - xOffset;
            const top = brick.row * (config.h + config.gap);

            return (
              <motion.div
                key={brick.id}
                custom={phase}
                variants={brickVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="absolute flex items-center justify-center overflow-hidden rounded-[1.5px]"
                style={{
                  left: `${left}px`,
                  top: `${top}px`,
                  width: `${config.w}px`,
                  height: `${config.h}px`,
                  backgroundColor: brick.color,
                  boxShadow: phase === "ambient" ? "none" : "0 2px 4px rgba(17,17,17,0.03), inset 0 1px 0 rgba(255,255,255,0.02)"
                }}
              >
                <div 
                  className="absolute inset-0 opacity-[0.02]" 
                  style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")" }}
                />
              </motion.div>
            );
          })}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}