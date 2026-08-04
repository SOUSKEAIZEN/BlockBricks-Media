"use client";

import { motion, AnimatePresence, useInView, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const BRICK_COLORS = ["#5A3827", "#563525", "#5E3B29", "#533324", "#613D2D"];

const ROWS = 24;
const COLS = 28;

type Brick = { id: string; row: number; col: number; color: string; shouldCollapse: boolean; dist: number };

export default function HeroBrickWall() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { margin: "200px" });
  const prefersReducedMotion = useReducedMotion();
  
  const [bricks, setBricks] = useState<Brick[]>([]);
  const [phase, setPhase] = useState<"init" | "collapsing" | "ambient">("init");
  const [config, setConfig] = useState({ w: 120, h: 50, gap: 5 });
  const [isMobile, setIsMobile] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const mobile = window.innerWidth < 768;
    setIsMobile(mobile);
    if (mobile) {
      setConfig({ w: 80, h: 32, gap: 4 });
    } else {
      setConfig({ w: 120, h: 50, gap: 5 });
    }
    setIsMounted(true);
  }, []);

  const checkShouldCollapse = (r: number, c: number, mobile: boolean) => {
    const dr = r - ROWS / 2;
    const dc = c - COLS / 2;
    const a = mobile ? 4.5 : 5.8; 
    const b = mobile ? 4.5 : 5.0; 
    const jitter = Math.sin(r * 13.5 + c * 17.2) * 0.15; 
    
    return (dc * dc) / (a * a) + (dr * dr) / (b * b) + jitter <= 1.0;
  };

  useEffect(() => {
    if (!isMounted) return;

    const initialBricks: Brick[] = [];
    const centerR = ROWS / 2;
    const centerC = COLS / 2;

    for (let r = 0; r < ROWS; r++) {
      for (let c = 0; c < COLS; c++) {
        const shouldCollapse = checkShouldCollapse(r, c, isMobile);
        const physicalX = Math.abs(c - centerC) * config.w;
        const physicalY = Math.abs(r - centerR) * config.h;
        const dist = Math.sqrt(physicalX * physicalX + physicalY * physicalY);

        initialBricks.push({
          id: `init_${r}_${c}`,
          row: r,
          col: c,
          color: BRICK_COLORS[(r * 11 + c * 7) % BRICK_COLORS.length],
          shouldCollapse,
          dist,
        });
      }
    }

    if (prefersReducedMotion) {
      setPhase("ambient");
      setBricks(initialBricks.filter(b => !b.shouldCollapse));
    } else {
      setPhase("init");
      setBricks(initialBricks);

      setTimeout(() => {
        setPhase("collapsing");
        
        initialBricks.forEach((brick) => {
          if (brick.shouldCollapse) {
            setTimeout(() => {
              setBricks(prev => prev.filter(b => b.id !== brick.id));
            }, (brick.dist * 0.6) + (Math.random() * 50)); 
          }
        });

        setTimeout(() => {
          setPhase("ambient");
        }, 2800);

      }, 2500); 
    }
  }, [isMounted, isMobile, prefersReducedMotion, config]);

  // Ambient Infinite Construction Loop (Build -> Break -> Rebuild)
  useEffect(() => {
    if (phase !== "ambient" || !isInView || prefersReducedMotion) return;

    let isActive = true;
    let timeoutId: NodeJS.Timeout;
    
    let ambientMode: "building" | "breaking" | "rebuilding" = "building";

    const loop = () => {
      if (!isActive) return;

      setBricks((prev) => {
        const allOuterSlots = [];
        for (let r = 0; r < ROWS; r++) {
          for (let c = 0; c < COLS; c++) {
            if (!checkShouldCollapse(r, c, isMobile)) {
              allOuterSlots.push({ r, c });
            }
          }
        }
        
        const currentOuterBricks = prev.filter(b => !b.shouldCollapse);
        const fillPercentage = currentOuterBricks.length / allOuterSlots.length;

        // Triggers break faster (at 92% full instead of 94%)
        if (ambientMode === "building" && fillPercentage > 0.92) {
          ambientMode = "breaking";
        } else if (ambientMode === "rebuilding" && fillPercentage > 0.85) {
          ambientMode = "building";
        }

        if (ambientMode === "breaking") {
          const quadrants = [
            { r: [0, ROWS/2], c: [0, COLS/2] },
            { r: [0, ROWS/2], c: [COLS/2, COLS] },
            { r: [ROWS/2, ROWS], c: [0, COLS/2] },
            { r: [ROWS/2, ROWS], c: [COLS/2, COLS] },
          ];
          const q = quadrants[Math.floor(Math.random() * quadrants.length)];
          
          const bricksInQuadrant = currentOuterBricks.filter(
            b => b.row >= q.r[0] && b.row < q.r[1] && b.col >= q.c[0] && b.col < q.c[1]
          );
          
          // Break more bricks at once (6 to 15 bricks)
          const numToRemove = Math.min(bricksInQuadrant.length, Math.floor(Math.random() * 10) + 6);
          const shuffled = bricksInQuadrant.sort(() => 0.5 - Math.random());
          const toRemoveIds = new Set(shuffled.slice(0, numToRemove).map(b => b.id));
          
          ambientMode = "rebuilding";
          return prev.filter(b => !toRemoveIds.has(b.id));
        }

        const emptySlots = allOuterSlots.filter(
          slot => !prev.some(b => b.row === slot.r && b.col === slot.c)
        );

        if (emptySlots.length > 0) {
          // Add much faster: 4-6 bricks at once during building, up to 8 during rebuilding
          const numToAdd = ambientMode === "rebuilding" 
            ? Math.floor(Math.random() * 5) + 4 
            : Math.floor(Math.random() * 3) + 4;
            
          const shuffledEmpty = emptySlots.sort(() => 0.5 - Math.random());
          const toAdd = shuffledEmpty.slice(0, numToAdd);
          
          const newBricks = toAdd.map(target => ({
            id: `amb_${Date.now()}_${target.r}_${target.c}`,
            row: target.r,
            col: target.c,
            color: BRICK_COLORS[(target.r * 11 + target.c * 7) % BRICK_COLORS.length],
            shouldCollapse: false,
            dist: 0
          }));
          
          return [...prev, ...newBricks];
        }

        return prev;
      });

      // Much faster delay between loops (400ms to 800ms)
      const nextDelay = ambientMode === "rebuilding" 
        ? 300 + Math.random() * 200 
        : 600 + Math.random() * 300;
        
      timeoutId = setTimeout(loop, nextDelay);
    };

    // Start loop instantly when phase turns ambient
    timeoutId = setTimeout(loop, 400);
    return () => {
      isActive = false;
      clearTimeout(timeoutId);
    };
  }, [phase, isInView, isMobile, prefersReducedMotion]);

  if (!isMounted) return null;

  const lockEase = [0.16, 1, 0.3, 1] as const; 
  const fallEase = [0.42, 0, 1, 1] as const; 

  const brickVariants = {
    hidden: { opacity: 0, z: -150 },
    visible: { 
      opacity: 1, 
      z: 0, 
      y: 0, 
      rotateZ: 0, 
      transition: { duration: 0.8, ease: lockEase } 
    },
    exit: (currentPhase: string) => {
      if (currentPhase === "collapsing") {
        return {
          opacity: 0,
          y: 400 + Math.random() * 150, 
          z: 50, 
          rotateZ: (Math.random() - 0.5) * 15, 
          transition: { duration: 1.0, ease: fallEase } 
        };
      }
      return {
        opacity: 0,
        transition: { duration: 0.6 } 
      };
    }
  };

  return (
    <div 
      ref={containerRef}
      className="absolute inset-0 pointer-events-none overflow-hidden"
      style={{ perspective: "1200px" }}
    >
      <motion.div 
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        style={{ 
          width: `${COLS * (config.w + config.gap)}px`, 
          height: `${ROWS * (config.h + config.gap)}px`
        }}
      >
        <AnimatePresence custom={phase}>
          {bricks.map((brick) => {
            const isOffset = brick.row % 2 !== 0;
            const xOffset = isOffset ? (config.w + config.gap) / 2 : 0;
            const left = brick.col * (config.w + config.gap) - xOffset;
            const top = brick.row * (config.h + config.gap);

            // Highly optimized CSS: Single shadow + borders for 3D bevel. 
            // This is virtually free for the GPU compared to inset box-shadows.
            const boxShadow3D = "0 8px 12px rgba(0,0,0,0.35)";

            return (
              <motion.div
                key={brick.id}
                custom={phase}
                variants={brickVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="absolute flex items-center justify-center overflow-hidden rounded-[2px] transform-gpu"
                style={{
                  left: `${left}px`,
                  top: `${top}px`,
                  width: `${config.w}px`,
                  height: `${config.h}px`,
                  backgroundColor: brick.color,
                  boxShadow: boxShadow3D,
                  borderTop: "1px solid rgba(255,255,255,0.06)",
                  borderBottom: "2px solid rgba(0,0,0,0.25)",
                  borderRight: "1px solid rgba(0,0,0,0.15)"
                }}
              />
            );
          })}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}