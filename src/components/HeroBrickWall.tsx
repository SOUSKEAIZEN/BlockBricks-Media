"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

// Architectural grid layout: each brick has custom grid spans and intentional color accents
const BRICK_MODULES = [
  { id: 1, colSpan: "col-span-2", rowSpan: "row-span-1", bg: "bg-warmIvory", border: "border-softGray/20", delay: 0 },
  { id: 2, colSpan: "col-span-1", rowSpan: "row-span-2", bg: "bg-richBlack", border: "border-richBlack", delay: 2 },
  { id: 3, colSpan: "col-span-1", rowSpan: "row-span-1", bg: "bg-warmIvory", border: "border-softGray/20", delay: 4 },
  { id: 4, colSpan: "col-span-2", rowSpan: "row-span-1", bg: "bg-warmIvory", border: "border-softGray/20", delay: 1 },
  { id: 5, colSpan: "col-span-1", rowSpan: "row-span-1", bg: "bg-burntOrange", border: "border-burntOrange", delay: 5 }, // Focal Orange Brick
  { id: 6, colSpan: "col-span-2", rowSpan: "row-span-2", bg: "bg-warmIvory", border: "border-softGray/20", delay: 3 },
  { id: 7, colSpan: "col-span-1", rowSpan: "row-span-1", bg: "bg-richBlack", border: "border-richBlack", delay: 6 },
  { id: 8, colSpan: "col-span-1", rowSpan: "row-span-1", bg: "bg-warmIvory", border: "border-softGray/20", delay: 2.5 },
  { id: 9, colSpan: "col-span-2", rowSpan: "row-span-1", bg: "bg-warmIvory", border: "border-softGray/20", delay: 4.5 },
  { id: 10, colSpan: "col-span-1", rowSpan: "row-span-2", bg: "bg-warmIvory", border: "border-softGray/20", delay: 1.5 },
  { id: 11, colSpan: "col-span-2", rowSpan: "row-span-1", bg: "bg-richBlack", border: "border-richBlack", delay: 3.5 },
  { id: 12, colSpan: "col-span-1", rowSpan: "row-span-1", bg: "bg-warmIvory", border: "border-softGray/20", delay: 5.5 },
];

export default function HeroBrickWall() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { margin: "0px" });
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    // Enable 2-4px hover interactions on desktop only
    const checkDesktop = () => setIsDesktop(window.innerWidth >= 768);
    checkDesktop();
    window.addEventListener("resize", checkDesktop);
    return () => window.removeEventListener("resize", checkDesktop);
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-full h-full max-h-[600px] grid grid-cols-4 grid-rows-6 gap-2 p-6 md:p-12 overflow-hidden pointer-events-auto"
    >
      {BRICK_MODULES.map((brick) => (
        <motion.div
          key={brick.id}
          className={`relative border ${brick.border} ${brick.bg} ${brick.colSpan} ${brick.rowSpan} transition-colors duration-500`}
          // Subtle 2-4px shift on hover (desktop only)
          whileHover={
            isDesktop
              ? {
                  x: 3,
                  y: -3,
                  transition: { duration: 0.2, ease: "easeOut" },
                }
              : undefined
          }
          // Continuous slow breathing / shifting animation
          animate={
            isInView
              ? {
                  opacity: [1, 0.7, 1],
                  x: [0, brick.id % 2 === 0 ? 4 : -4, 0],
                  y: [0, brick.id % 3 === 0 ? -4 : 3, 0],
                }
              : { opacity: 1, x: 0, y: 0 }
          }
          transition={{
            duration: 8 + (brick.id % 4) * 2, // Very slow 8–14s cycles
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut",
            delay: brick.delay,
          }}
        >
          {/* Subtle architectural crosshair accent inside orange/black bricks */}
          {brick.bg !== "bg-warmIvory" && (
            <div className="absolute top-2 right-2 w-1.5 h-1.5 border-t border-r border-warmIvory/40" />
          )}
        </motion.div>
      ))}
    </div>
  );
}