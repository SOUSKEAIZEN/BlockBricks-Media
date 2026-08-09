"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState, useMemo } from "react";

type Brick = { 
  id: string; 
  x: number; 
  y: number; 
  type: "frame" | "plug"; 
  distFromCenter: number;
  rotation: number;
  finalX: number;
  finalY: number;
};

let globalHasBroken = false;
const BRICK_COLOR = "#5A3827";

export default function HeroBrickWall({ onReveal }: { onReveal?: () => void }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { margin: "100px" });
  const prefersReducedMotion = useReducedMotion();
  
  // Single animation state string. React only renders when this changes.
  const [phase, setPhase] = useState<"intact" | "break" | "ambient">("intact");
  
  const [config, setConfig] = useState({ w: 120, h: 48, gap: 8 });
  const [isMounted, setIsMounted] = useState(false);
  const hasPlayedIntro = useRef(false);

  useEffect(() => {
    const mobile = window.innerWidth < 768;
    setConfig({
      w: mobile ? 80 : 124, 
      h: mobile ? 32 : 48, 
      gap: mobile ? 5 : 8 
    });
    setIsMounted(true);
  }, []);

  // Generate bricks exactly ONCE and memoize them.
  const bricks = useMemo(() => {
    if (!isMounted) return [];
    
    const winW = window.innerWidth;
    const winH = window.innerHeight;
    
    const COLS = Math.ceil(winW / (config.w + config.gap)) + 2;
    const ROWS = Math.ceil(winH / (config.h + config.gap)) + 2;

    const items: Brick[] = [];
    const centerX = winW / 2;
    const centerY = winH / 2;

    const mobile = winW < 768;
    const SAFE_W = mobile ? Math.min(winW * 0.9, 360) : winW * 0.68;
    const SAFE_H = mobile ? winH * 0.75 : winH * 0.75;
    
    const a = SAFE_W / 2;
    const b = SAFE_H / 2;

    for (let r = 0; r < ROWS; r++) {
      for (let c = 0; c < COLS; c++) {
        const isOffset = r % 2 !== 0;
        const xOffset = isOffset ? (config.w + config.gap) / 2 : 0;
        
        const bx = c * (config.w + config.gap) - xOffset;
        const by = r * (config.h + config.gap);

        const dx = bx - centerX;
        const dy = by - (centerY - 30);
        
        const jitter = Math.sin(r * 15 + c * 15) * 0.15;
        const ellipseRatio = (dx * dx) / (a * a) + (dy * dy) / (b * b) + jitter;
        const isInsideOval = ellipseRatio <= 1.0;
        const isBoundary = ellipseRatio > 1.0 && ellipseRatio < 1.35;

        let rotation = 0;
        let offsetX = 0;
        let offsetY = 0;
        
        if (isBoundary) {
          rotation = (Math.random() - 0.5) * 12; 
          offsetX = (Math.random() - 0.5) * 15; 
          offsetY = (Math.random() - 0.5) * 15;
        }

        items.push({
          id: `brick_${r}_${c}`,
          x: bx,
          y: by,
          type: isInsideOval ? "plug" : "frame",
          distFromCenter: Math.sqrt(dx * dx + dy * dy),
          rotation,
          finalX: bx - config.w/2 + offsetX,
          finalY: by - config.h/2 + offsetY
        });
      }
    }
    return items;
  }, [isMounted, config]);

  // Increase delay for text reveal to prevent overlap lag
  useEffect(() => {
    if (!isMounted || hasPlayedIntro.current) return;
    
    if (prefersReducedMotion || globalHasBroken) {
      setPhase("ambient");
      hasPlayedIntro.current = true;
      if (onReveal) onReveal();
      return;
    }

    const timers: NodeJS.Timeout[] = [];
    
    const startSequence = () => {
      if (hasPlayedIntro.current) return;
      hasPlayedIntro.current = true;
      globalHasBroken = true;
      
      timers.push(setTimeout(() => {
        setPhase("break");
        
        // Wait until hole is mostly clear before revealing text (2.5s sequence now)
        timers.push(setTimeout(() => {
          if (onReveal) onReveal();
        }, 1600));

        timers.push(setTimeout(() => {
          setPhase("ambient");
        }, 3000));
        
      }, 800)); // Brief hold
    };

    const hasIntroPlayed = sessionStorage.getItem("blockbricks-intro-played");
    if (hasIntroPlayed) {
      startSequence();
    } else {
      window.addEventListener("intro-complete", startSequence, { once: true });
    }

    return () => {
      timers.forEach(clearTimeout);
      window.removeEventListener("intro-complete", startSequence);
    };
  }, [isMounted, prefersReducedMotion, onReveal]);

  // Ambient Animation Loop (Direct DOM manipulation to bypass React entirely)
  useEffect(() => {
    if (phase !== "ambient" || !isInView || prefersReducedMotion) return;

    let isActive = true;
    let rafId: number;
    let timerId: NodeJS.Timeout;

    const frameBricks = bricks.filter(b => b.type === "frame");
    if (frameBricks.length === 0) return;

    const runAmbient = () => {
      if (!isActive) return;

      const targetBrick = frameBricks[Math.floor(Math.random() * frameBricks.length)];
      const element = document.getElementById(targetBrick.id);

      if (element) {
        const shiftY = (Math.random() > 0.5 ? 1 : -1) * (1 + Math.random() * 2);
        
        element.style.willChange = "transform";
        element.style.transition = "transform 1.5s cubic-bezier(0.25, 0.1, 0.25, 1)";
        
        rafId = requestAnimationFrame(() => {
          element.style.transform = `translate3d(${targetBrick.finalX}px, ${targetBrick.finalY + shiftY}px, 0) rotateZ(${targetBrick.rotation}deg)`;
          
          setTimeout(() => {
            if (!isActive || !element) return;
            element.style.transform = `translate3d(${targetBrick.finalX}px, ${targetBrick.finalY}px, 0) rotateZ(${targetBrick.rotation}deg)`;
            
            setTimeout(() => {
              if (!isActive || !element) return;
              element.style.willChange = "auto";
              // Reset transition to normal so it doesn't conflict if phase changes (though it shouldn't)
              element.style.transition = ""; 
            }, 1500);
          }, 2000);
        });
      }

      timerId = setTimeout(runAmbient, 3000 + Math.random() * 4000);
    };

    timerId = setTimeout(runAmbient, 2000);

    return () => {
      isActive = false;
      clearTimeout(timerId);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [phase, isInView, prefersReducedMotion, bricks]);

  if (!isMounted) return null;

  const photorealisticShadow = `
    inset 0 4px 6px rgba(255,255,255,0.06), 
    inset 0 -5px 12px rgba(0,0,0,0.5), 
    inset 4px 0 8px rgba(0,0,0,0.2), 
    inset -4px 0 8px rgba(0,0,0,0.2), 
    0 12px 25px rgba(0,0,0,0.7)
  `;

  return (
    <div 
      ref={containerRef}
      className="absolute inset-0 pointer-events-none overflow-hidden"
      style={{ perspective: "1500px" }}
    >
      {/* 
        Using pure standard <div> elements with dynamically calculated styles.
        This completely removes Framer Motion's JS thread overhead, making it 100% GPU accelerated and buttery smooth.
      */}
      {bricks.map((brick) => {
        const isPlug = brick.type === "plug";
        const isBreaking = phase === "break" || phase === "ambient";
        const isFallen = isBreaking && isPlug;
        
        // Hide fallen bricks in ambient mode to free up rendering slightly, though GPU handles opacity 0 fine
        if (phase === "ambient" && isPlug) return null;

        // Spread out the animation delay for a longer ~2.5s cinematic sequence
        const delay = (brick.distFromCenter * 0.0012) + (Math.random() * 0.15);
        
        // Calculate extreme fall coordinates
        const fallY = brick.finalY + 500 + Math.random() * 300;
        const fallZ = 200 + Math.random() * 200;
        const fallRot = brick.rotation + (Math.random() - 0.5) * 60;

        const currentTransform = isFallen
          ? `translate3d(${brick.finalX}px, ${fallY}px, ${fallZ}px) rotateZ(${fallRot}deg)`
          : `translate3d(${brick.finalX}px, ${brick.finalY}px, 0) rotateZ(${brick.rotation}deg)`;
          
        const currentOpacity = isFallen ? 0 : 1;
        
        const transitionStyle = isBreaking && isPlug
          ? `transform 1.3s cubic-bezier(0.42, 0, 1, 1) ${delay}s, opacity 1s ease ${delay}s`
          : "none";

        return (
          <div
            key={brick.id}
            id={brick.id}
            className="absolute flex items-center justify-center overflow-hidden rounded-[4px] transform-gpu"
            style={{
              left: 0,
              top: 0,
              width: `${config.w}px`,
              height: `${config.h}px`,
              backgroundColor: BRICK_COLOR,
              boxShadow: photorealisticShadow,
              borderTop: "1px solid rgba(255,255,255,0.08)",
              borderBottom: "2px solid rgba(0,0,0,0.6)",
              borderRight: "1px solid rgba(0,0,0,0.3)",
              transform: currentTransform,
              opacity: currentOpacity,
              transition: transitionStyle,
              // Only apply will-change during the breaking phase to ensure GPU compositing without memory bloat
              willChange: isBreaking && isPlug ? "transform, opacity" : "auto",
            }}
          />
        );
      })}
7    </div>
  );
}