"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function OpeningAnimation() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // The entire sequence takes roughly 2 seconds before unmounting
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key="intro-screen"
          className="fixed inset-0 z-[100] bg-warmIvory flex flex-col items-center justify-center overflow-hidden"
          exit={{ y: "-100%", opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
        >
          {/* ARCHITECTURAL BRICK ASSEMBLY */}
          <div className="relative w-32 h-32 flex items-center justify-center mb-6">
            {/* Center Orange Brick */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="absolute w-6 h-3 bg-burntOrange z-10"
            />

            {/* Surrounding Rich Black Bricks */}
            {[
              { x: -24, y: -24 },
              { x: 24, y: -12 },
              { x: -12, y: 24 },
              { x: 24, y: 24 },
              { x: 0, y: -36 },
              { x: -36, y: 0 },
            ].map((pos, i) => (
              <motion.div
                key={i}
                initial={{ x: pos.x * 3, y: pos.y * 3, opacity: 0 }}
                animate={{ x: pos.x, y: pos.y, opacity: 1 }}
                exit={{ x: pos.x * 4, y: pos.y * 4, opacity: 0 }}
                transition={{
                  duration: 0.5,
                  delay: 0.1 + i * 0.05,
                  ease: [0.33, 1, 0.68, 1], // Precise, snappy ease
                }}
                className="absolute w-6 h-3 bg-richBlack"
              />
            ))}
          </div>

          {/* WORDMARK REVEAL */}
          <div className="overflow-hidden">
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.5, delay: 0.6, ease: [0.33, 1, 0.68, 1] }}
              className="flex flex-col items-center leading-none font-display font-bold text-richBlack uppercase tracking-tighter"
            >
              <span className="text-4xl md:text-5xl tracking-normal">BLOCK</span>
              <span className="text-xl md:text-2xl flex items-center gap-2">
                BRICKS MEDIA
              </span>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}