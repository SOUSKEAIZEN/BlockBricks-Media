"use client";

import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const BRICK_MODULES = [
  // 1: wireframe slot, 2: solid ivory, 3: solid black, 4: solid orange
  // ROW 1
  { id: 1, colSpan: "col-span-2", type: "solid-ivory", text: "STRATEGY", delay: 0.1 },
  { id: 2, colSpan: "col-span-1", type: "solid-orange", text: "BUILD.", delay: 0.3, ambient: "retract" },
  { id: 3, colSpan: "col-span-3", type: "wireframe", delay: 0.0 }, // Empty space/wireframe
  // ROW 2
  { id: 4, colSpan: "col-span-1", type: "solid-black", delay: 0.6, ambient: "shiftRight" },
  { id: 5, colSpan: "col-span-2", type: "solid-ivory", text: "CONTENT", delay: 0.5 },
  { id: 6, colSpan: "col-span-1", type: "wireframe", delay: 0.0 },
  { id: 7, colSpan: "col-span-2", type: "solid-ivory", delay: 0.4 },
  // ROW 3
  { id: 8, colSpan: "col-span-3", type: "wireframe", delay: 0.0 },
  { id: 9, colSpan: "col-span-1", type: "solid-black", delay: 0.8 },
  { id: 10, colSpan: "col-span-2", type: "solid-ivory", text: "CREATORS", delay: 0.9 },
  // ROW 4
  { id: 11, colSpan: "col-span-1", type: "solid-ivory", delay: 1.3 },
  { id: 12, colSpan: "col-span-1", type: "wireframe", delay: 0.0 },
  { id: 13, colSpan: "col-span-2", type: "solid-ivory", text: "DESIGN", delay: 1.2 },
  { id: 14, colSpan: "col-span-2", type: "solid-ivory", delay: 1.1 },
  // ROW 5
  { id: 15, colSpan: "col-span-2", type: "wireframe", delay: 0.0 },
  { id: 16, colSpan: "col-span-3", type: "solid-ivory", text: "MEDIA", delay: 1.5 },
  { id: 17, colSpan: "col-span-1", type: "solid-black", delay: 1.6, ambient: "retract" },
  // ROW 6
  { id: 18, colSpan: "col-span-2", type: "solid-ivory", text: "GROWTH", delay: 2.0 },
  { id: 19, colSpan: "col-span-1", type: "wireframe", delay: 0.0 },
  { id: 20, colSpan: "col-span-1", type: "solid-orange", delay: 1.9 },
  { id: 21, colSpan: "col-span-2", type: "solid-black", delay: 1.8, ambient: "shiftLeft" },
];

export default function HeroBrickWall() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { margin: "0px" });
  const controls = useAnimation();
  
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isDesktop, setIsDesktop] = useState(false);
  const [hasBuilt, setHasBuilt] = useState(false);

  useEffect(() => {
    setIsDesktop(window.innerWidth >= 768);
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDesktop || !isInView) return;
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    // Normalize -1 to 1
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
    setMousePos({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0 });
  };

  useEffect(() => {
    if (!isInView) {
      controls.stop();
      return;
    }

    let isActive = true;

    const sequence = async () => {
      if (!hasBuilt) {
        // Wait for opening animation (2.7-3.0s) to finish before bricks arrive
        await new Promise(r => setTimeout(r, 2800));
        if (!isActive) return;

        await controls.start((i) => {
          const delay = BRICK_MODULES[i].delay;
          if (delay === 0) return { opacity: 0.15 }; // Wireframes simply appear faintly
          return {
            opacity: 1,
            z: 0,
            transition: {
              duration: 0.8,
              delay: delay, 
              ease: [0.16, 1, 0.3, 1], // Cinematic ease
            },
          };
        });
        setHasBuilt(true);
      }

      // Start ambient mode only if we are built and in view
      if (hasBuilt && isActive) {
        controls.start((i) => {
          const ambient = BRICK_MODULES[i].ambient;
          if (!ambient) return {};

          if (ambient === "shiftRight") {
            return {
              x: [0, 12, 12, 0, 0],
              transition: { duration: 15, times: [0, 0.05, 0.2, 0.25, 1], repeat: Infinity, ease: "easeInOut" }
            };
          }
          if (ambient === "shiftLeft") {
            return {
              x: [0, -12, -12, 0, 0],
              transition: { duration: 15, times: [0, 0, 0.3, 0.35, 0.5, 0.55, 1], repeat: Infinity, ease: "easeInOut" }
            };
          }
          if (ambient === "retract") {
            return {
              z: [0, -60, -60, 0, 0],
              transition: { duration: 15, times: [0, 0, 0, 0.7, 0.75, 0.9, 0.95, 1], repeat: Infinity, ease: "easeInOut" }
            };
          }
          return {};
        });
      }
    };

    sequence();

    return () => {
      isActive = false;
      controls.stop();
    };
  }, [controls, isInView, hasBuilt]);

  return (
    <div 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="w-full h-full grid grid-cols-6 grid-rows-6 gap-3 md:gap-4 pointer-events-auto transform-gpu origin-center md:scale-[1.15] md:translate-x-12 translate-y-12 md:translate-y-0"
      style={{ perspective: "1400px" }}
    >
      {BRICK_MODULES.map((brick, i) => {
        
        // Resolve styles
        let bg = "";
        let border = "";
        let textCol = "text-softGray/50";
        if (brick.type === "wireframe") {
          bg = "bg-transparent";
          border = "border border-softGray";
        } else if (brick.type === "solid-ivory") {
          bg = "bg-warmIvory";
          border = "border border-softGray/20";
        } else if (brick.type === "solid-black") {
          bg = "bg-richBlack";
          border = "border border-richBlack";
          textCol = "text-softGray/70";
        } else if (brick.type === "solid-orange") {
          bg = "bg-burntOrange";
          border = "border border-burntOrange";
          textCol = "text-warmIvory/80";
        }

        const isSolid = brick.type !== "wireframe";

        // Parallax mouse effect for solid bricks
        const parallaxZ = isDesktop ? (mousePos.x * 12 + mousePos.y * 12) * (isSolid ? 1 : 0) : 0;
        const parallaxX = isDesktop ? mousePos.x * (isSolid ? -8 : 0) : 0;
        const parallaxY = isDesktop ? mousePos.y * (isSolid ? -8 : 0) : 0;

        return (
          <div key={brick.id} className={`relative ${brick.colSpan} ${brick.type === "wireframe" ? "opacity-15" : ""}`} style={{ transformStyle: "preserve-3d" }}>
            {/* The Blueprint Slot */}
            {isSolid && (
              <div className="absolute inset-0 border border-softGray opacity-15" />
            )}

            {/* The Animating Brick */}
            <motion.div
              custom={i}
              initial={isSolid ? { opacity: 0, z: -300 } : { opacity: 0.15 }}
              animate={controls}
              style={{
                x: parallaxX,
                y: parallaxY,
                z: parallaxZ,
                rotateX: mousePos.y * -1.5,
                rotateY: mousePos.x * 1.5,
              }}
              transition={{ type: "spring", stiffness: 70, damping: 25 }} // Extremely smooth spring
              className={`absolute inset-0 flex items-end justify-start p-3 md:p-4 overflow-hidden shadow-sm ${bg} ${border}`}
            >
              {brick.text && (
                <span className={`text-[9px] md:text-[10px] font-mono font-bold tracking-widest uppercase ${textCol}`}>
                  {brick.text}
                </span>
              )}
              
              {/* Architectural accent for rich black and orange bricks */}
              {(brick.type === "solid-black" || brick.type === "solid-orange") && (
                <div className="absolute top-2 md:top-3 right-2 md:right-3 w-1.5 h-1.5 border-t border-r border-warmIvory/30" />
              )}
            </motion.div>
          </div>
        );
      })}
    </div>
  );
}