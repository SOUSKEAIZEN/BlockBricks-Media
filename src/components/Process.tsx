import React from "react";

const PROCESS_STEPS = [
  {
    num: "01",
    title: "DISCOVER",
    description: "Understand the brand.",
    // The indices of the 3x2 grid that should be "filled" for this step
    activeBricks: [3], 
  },
  {
    num: "02",
    title: "STRATEGIZE",
    description: "Create the direction.",
    activeBricks: [3, 4],
  },
  {
    num: "03",
    title: "CREATE",
    description: "Turn strategy into content.",
    activeBricks: [3, 4, 5],
  },
  {
    num: "04",
    title: "DISTRIBUTE",
    description: "Put it in front of the right audience.",
    activeBricks: [3, 4, 5, 1],
  },
  {
    num: "05",
    title: "OPTIMIZE",
    description: "Measure, learn and improve.",
    activeBricks: [3, 4, 5, 1, 2], // Forms a completed geometric structure
  },
];

export default function Process() {
  return (
    <section className="w-full bg-richBlack text-warmIvory px-6 md:px-12 py-24 md:py-32">
      
      {/* SECTION HEADER */}
      <div className="mb-16 md:mb-24">
        <div className="flex items-center gap-3 mb-6">
          <span className="w-2.5 h-2.5 bg-burntOrange block" />
          <span className="text-xs md:text-sm font-bold text-softGray uppercase tracking-widest">
            04 / OUR PROCESS
          </span>
        </div>
        <h2 className="text-5xl md:text-7xl font-display font-bold text-warmIvory leading-[0.9] tracking-tighter uppercase">
          How We <br />
          Build.
        </h2>
      </div>

      {/* HORIZONTAL TIMELINE */}
      {/* On mobile, this becomes a swipeable horizontal row. On desktop, it fills the width. */}
      <div className="flex overflow-x-auto snap-x snap-mandatory hide-scrollbar gap-8 md:gap-4 pb-8 md:pb-0">
        {PROCESS_STEPS.map((step, index) => {
          return (
          <div 
            key={index}
            className="flex-shrink-0 w-[80vw] sm:w-[280px] md:flex-1 snap-start flex flex-col group"
          >
            
            {/* BRICK VISUAL */}
            <div className="mb-8 border-b border-softGray/30 pb-8">
              <div className="grid grid-cols-3 gap-1 w-[60px] h-[35px]">
                {[0, 1, 2, 3, 4, 5].map((brickIndex) => (
                  <div
                    key={brickIndex}
                    className={`transition-colors duration-500 ${
                      step.activeBricks.includes(brickIndex)
                        ? "bg-burntOrange"
                        : "bg-softGray/10"
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* STEP META */}
            <div className="flex flex-col gap-3">
              <span className="text-sm font-mono font-bold text-softGray">
                {step.num} —
              </span>
              <h3 className="text-2xl md:text-3xl font-display font-bold uppercase tracking-tighter text-warmIvory transition-colors group-hover:text-burntOrange">
                {step.title}
              </h3>
              <p className="text-base text-softGray font-medium leading-relaxed mt-2">
                {step.description}
              </p>
            </div>

          </div>
        );
        })}
      </div>

    </section>
  );
}