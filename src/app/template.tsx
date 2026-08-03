"use client";

import { motion } from "framer-motion";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <>
      {/* The thin Burnt Orange plane that sweeps across the viewport */}
      <motion.div
        className="fixed top-0 bottom-0 left-0 w-[15vw] md:w-[10vw] bg-burntOrange z-[9999] pointer-events-none"
        initial={{ x: "-100%" }}
        animate={{ x: "100vw" }}
        transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
      >
         {/* Subtle architectural accent on the sweeper */}
         <div className="absolute top-1/2 -translate-y-1/2 right-2 w-1.5 h-1.5 border-t border-r border-warmIvory/30" />
      </motion.div>
      
      {/* Content slightly delays to reveal as the plane passes */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.15 }}
      >
        {children}
      </motion.div>
    </>
  );
}
