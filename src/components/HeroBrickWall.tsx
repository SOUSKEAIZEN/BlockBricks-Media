"use client";

import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

const BRICK_MODULES = [
  // ROW 1: L -> R (Delays: 0.1, 0.2, 0.3)
  { id: 1, colSpan: "col-span-2", bg: "bg-warmIvory border border-softGray/20 text-softGray/50", text: "STRATEGY", delay: 0.1, direction: -1 },
  { id: 2, colSpan: "col-span-1", bg: "bg-burntOrange border border-burntOrange", delay: 0.2, direction: -1, ambient: "shiftRight" },
  { id: 3, colSpan: "col-span-3", bg: "bg-warmIvory border border-softGray/20 text-softGray/50", delay: 0.3, direction: -1 },
  
  // ROW 2: R -> L (Delays: 0.7, 0.6, 0.5, 0.4)
  { id: 4, colSpan: "col-span-1", bg: "bg-richBlack border border-richBlack", delay: 0.7, direction: 1 },
  { id: 5, colSpan: "col-span-2", bg: "bg-warmIvory border border-softGray/20 text-softGray/50", text: "CONTENT", delay: 0.6, direction: 1 },
  { id: 6, colSpan: "col-span-1", bg: "bg-warmIvory border border-softGray/20", delay: 0.5, direction: 1 },
  { id: 7, colSpan: "col-span-2", bg: "bg-warmIvory border border-softGray/20", delay: 0.4, direction: 1 },

  // ROW 3: L -> R (Delays: 0.8, 0.9, 1.0)
  { id: 8, colSpan: "col-span-3", bg: "bg-warmIvory border border-softGray/20 text-softGray/50", text: "CREATORS", delay: 0.8, direction: -1 },
  { id: 9, colSpan: "col-span-1", bg: "bg-richBlack border border-richBlack", delay: 0.9, direction: -1, ambient: "shiftLeft" },
  { id: 10, colSpan: "col-span-2", bg: "bg-warmIvory border border-softGray/20", delay: 1.0, direction: -1 },

  // ROW 4: R -> L (Delays: 1.4, 1.3, 1.2, 1.1)
  { id: 11, colSpan: "col-span-1", bg: "bg-warmIvory border border-softGray/20", delay: 1.4, direction: 1 },
  { id: 12, colSpan: "col-span-1", bg: "bg-warmIvory border border-softGray/20", delay: 1.3, direction: 1 },
  { id: 13, colSpan: "col-span-2", bg: "bg-burntOrange border border-burntOrange", delay: 1.2, direction: 1, ambient: "retract" },
  { id: 14, colSpan: "col-span-2", bg: "bg-warmIvory border border-softGray/20 text-softGray/50", text: "DESIGN", delay: 1.1, direction: 1 },

  // ROW 5: L -> R (Delays: 1.5, 1.6, 1.7)
  { id: 15, colSpan: "col-span-2", bg: "bg-warmIvory border border-softGray/20", delay: 1.5, direction: -1 },
  { id: 16, colSpan: "col-span-3", bg: "bg-warmIvory border border-softGray/20 text-softGray/50", text: "MEDIA", delay: 1.6, direction: -1 },
  { id: 17, colSpan: "col-span-1", bg: "bg-richBlack border border-richBlack", delay: 1.7, direction: -1 },

  // ROW 6: R -> L (Delays: 2.1, 2.0, 1.9, 1.8)
  { id: 18, colSpan: "col-span-2", bg: "bg-warmIvory border border-softGray/20 text-softGray/50", text: "GROWTH", delay: 2.1, direction: 1 },
  { id: 19, colSpan: "col-span-1", bg: "bg-warmIvory border border-softGray/20", delay: 2.0, direction: 1 },
  { id: 20, colSpan: "col-span-1", bg: "bg-burntOrange border border-burntOrange", delay: 1.9, direction: 1 },
  { id: 21, colSpan: "col-span-2", bg: "bg-richBlack border border-richBlack", delay: 1.8, direction: 1, ambient: "shiftRight" },
];

export default function HeroBrickWall() {
  const controls = useAnimation();

  useEffect(() => {
    const sequence = async () => {
      // Phase 1: Construction
      // Wait 1.4s for the opening animation to start revealing the page
      await new Promise(resolve => setTimeout(resolve, 1400));
      
      await controls.start((i) => ({
        opacity: 1,
        x: 0,
        transition: {
          duration: 0.8,
          delay: BRICK_MODULES[i].delay, // predetermined delays per row direction
          ease: [0.16, 1, 0.3, 1], // Premium snappy ease
        },
      }));

      // Phase 2: Ambient Mode
      controls.start((i) => {
        const ambient = BRICK_MODULES[i].ambient;
        if (!ambient) return {};

        // Shift Right
        if (ambient === "shiftRight") {
          return {
            x: [0, 8, 8, 0, 0],
            transition: { duration: 15, times: [0, 0.05, 0.2, 0.25, 1], repeat: Infinity, ease: "easeInOut", delay: 2 }
          };
        }
        
        // Shift Left
        if (ambient === "shiftLeft") {
          return {
            x: [0, -8, -8, 0, 0],
            transition: { duration: 15, times: [0, 0, 0.3, 0.35, 0.5, 0.55, 1], repeat: Infinity, ease: "easeInOut", delay: 2 }
          };
        }

        // Retract (Scale down slightly)
        if (ambient === "retract") {
          return {
            scale: [1, 0.95, 0.95, 1, 1],
            transition: { duration: 15, times: [0, 0, 0, 0.7, 0.75, 0.9, 0.95, 1], repeat: Infinity, ease: "easeInOut", delay: 2 }
          };
        }

        return {};
      });
    };

    sequence();
  }, [controls]);

  return (
    <div className="w-full h-full grid grid-cols-6 grid-rows-6 gap-3 md:gap-4 pointer-events-none origin-center transform md:scale-125 md:translate-x-12 translate-y-12 md:translate-y-0">
      {BRICK_MODULES.map((brick, i) => (
        <motion.div
          key={brick.id}
          custom={i}
          initial={{ opacity: 0, x: brick.direction * 60 }}
          animate={controls}
          className={`relative ${brick.bg} ${brick.colSpan} flex items-end justify-start p-3 md:p-4 overflow-hidden`}
        >
          {brick.text && (
            <span className="text-[9px] md:text-[10px] font-mono font-bold tracking-widest uppercase">
              {brick.text}
            </span>
          )}
          
          {/* Subtle accent for rich black and orange bricks */}
          {(brick.bg.includes("richBlack") || brick.bg.includes("burntOrange")) && (
            <div className="absolute top-2 md:top-3 right-2 md:right-3 w-1.5 h-1.5 border-t border-r border-warmIvory/30" />
          )}
        </motion.div>
      ))}
    </div>
  );
}