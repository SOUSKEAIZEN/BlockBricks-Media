"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";

const TESTIMONIALS = [
  {
    quote: "They didn't just create content. They understood what our brand needed to say.",
    name: "SARAH JENKINS",
    role: "CMO / LUMINA",
  },
  {
    quote: "The strategy was flawless. The execution was even better. Our ROAS doubled in 60 days.",
    name: "MARCUS CHEN",
    role: "FOUNDER / NEXUS",
  },
  {
    quote: "Finally, an agency that doesn't rely on generic templates. They build with purpose.",
    name: "ELENA RODRIGUEZ",
    role: "VP MARKETING / FORMA",
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prevIndex) => {
      let nextIndex = prevIndex + newDirection;
      if (nextIndex < 0) nextIndex = TESTIMONIALS.length - 1;
      if (nextIndex >= TESTIMONIALS.length) nextIndex = 0;
      return nextIndex;
    });
  };

  // Variants for Framer Motion slider
  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 100 : -100,
      opacity: 0,
    }),
  };

  return (
    <section className="w-full bg-warmIvory px-6 md:px-12 py-24 md:py-32 relative overflow-hidden">
      
      {/* SECTION HEADER */}
      <div className="flex items-center gap-3 mb-16 md:mb-24 relative z-10">
        <span className="w-2.5 h-2.5 bg-burntOrange block" />
        <span className="text-xs md:text-sm font-bold text-softGray uppercase tracking-widest">
          05 / CLIENTS SAY
        </span>
      </div>

      {/* GIANT SUBTLE QUOTATION MARK */}
      <div className="absolute top-20 md:top-10 left-4 md:left-24 text-[20rem] md:text-[30rem] font-display font-bold text-richBlack/5 leading-none select-none z-0">
        &ldquo;
      </div>

      {/* CAROUSEL CONTAINER */}
      <div className="relative w-full max-w-6xl mx-auto h-[50vh] md:h-[40vh] flex flex-col justify-center z-10">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.5, ease: [0.33, 1, 0.68, 1] }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={1}
            onDragEnd={(e, { offset, velocity }) => {
              const swipe = Math.abs(offset.x) * velocity.x;
              if (swipe < -100) paginate(1); // Swipe left, go next
              else if (swipe > 100) paginate(-1); // Swipe right, go prev
            }}
            className="absolute w-full flex flex-col cursor-grab active:cursor-grabbing"
          >
            <h3 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-richBlack leading-[1.05] tracking-tighter uppercase mb-12">
              "{TESTIMONIALS[currentIndex].quote}"
            </h3>
            
            <div className="flex flex-col gap-1">
              <span className="text-lg md:text-xl font-bold text-richBlack uppercase tracking-widest">
                {TESTIMONIALS[currentIndex].name}
              </span>
              <span className="text-sm font-bold text-burntOrange uppercase tracking-widest">
                {TESTIMONIALS[currentIndex].role}
              </span>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* NAVIGATION CONTROLS */}
      <div className="mt-12 flex items-center justify-between max-w-6xl mx-auto relative z-10">
        <div className="flex items-center gap-2">
          {TESTIMONIALS.map((_, idx) => (
            <div 
              key={idx}
              className={`h-1.5 transition-all duration-300 ${
                idx === currentIndex ? "w-8 bg-burntOrange" : "w-2 bg-richBlack/20"
              }`}
            />
          ))}
        </div>
        
        <div className="flex items-center gap-4">
          <button 
            onClick={() => paginate(-1)}
            className="p-3 border border-richBlack/20 rounded-none hover:border-burntOrange hover:text-burntOrange transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <button 
            onClick={() => paginate(1)}
            className="p-3 border border-richBlack/20 rounded-none hover:border-burntOrange hover:text-burntOrange transition-colors"
          >
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>

    </section>
  );
}