import React from "react";

const TEAM = [
  {
    name: "Kartik",
    role: "Creative Strategy",
    description: "Architecting brand narratives that people actually want to engage with.",
    specialization: "Brand Strategy",
    offset: "mt-0"
  },
  {
    name: "Himanshi",
    role: "Content & Influencer Marketing",
    description: "Building the distribution systems that turn attention into equity.",
    specialization: "Viral Mechanics",
    offset: "mt-12 lg:mt-24"
  },
  {
    name: "Bhalu",
    role: "Visual Design",
    description: "Obsessed with grids, typography, and translating strategy into aesthetic.",
    specialization: "Visual Identity",
    offset: "mt-0"
  },
  {
    name: "Bhalu 2",
    role: "Performance & Growth",
    description: "Scaling the math behind the magic without burning cash.",
    specialization: "Paid Social / ROAS",
    offset: "mt-12 lg:mt-24"
  },
  {
    name: "Bhalu 3",
    role: "Development",
    description: "Engineering digital experiences that perform flawlessly.",
    specialization: "Creative Engineering",
    offset: "mt-0"
  },
];

export default function AboutPage() {
  return (
    <main className="w-full bg-richBlack text-warmIvory min-h-screen">
      
      {/* HERO */}
      <section className="px-6 md:px-12 py-32 md:py-48 max-w-7xl mx-auto">
        <h1 className="text-5xl md:text-8xl font-display font-bold leading-[0.9] tracking-tighter uppercase">
          We're not here <br />
          to make <br />
          <span className="text-burntOrange">more noise.</span> <br />
          We're here <br />
          to make brands <br />
          matter.
        </h1>
      </section>

      {/* 01 / STORY */}
      <section className="px-6 md:px-12 py-24 md:py-32 border-t border-softGray/20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-4 flex items-start gap-3">
            <span className="w-2.5 h-2.5 bg-burntOrange block mt-1.5" />
            <span className="text-xs md:text-sm font-bold text-softGray uppercase tracking-widest">
              01 / STORY
            </span>
          </div>
          <div className="md:col-span-8 flex flex-col gap-8">
            <p className="text-2xl md:text-4xl font-display font-bold leading-tight">
              BlockBricks Media was built on a simple observation: most marketing agencies are optimized for output, not outcomes. They build walls of noise.
            </p>
            <p className="text-lg md:text-xl text-softGray leading-relaxed font-medium">
              We believe that every piece of content, every campaign, and every digital experience should be an intentional brick in a larger structure. We don't just chase trends; we leverage them to build lasting brand architecture.
            </p>
          </div>
        </div>
      </section>

      {/* 02 / PHILOSOPHY */}
      <section className="px-6 md:px-12 py-24 md:py-32 border-t border-softGray/20 bg-softGray/5">
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center gap-16">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 bg-burntOrange block" />
            <span className="text-xs md:text-sm font-bold text-softGray uppercase tracking-widest">
              02 / PHILOSOPHY
            </span>
          </div>
          <div className="flex flex-col gap-6 md:gap-12">
            <h2 className="text-4xl md:text-6xl font-display font-bold tracking-tighter">
              STRATEGY BEFORE NOISE.
            </h2>
            <h2 className="text-4xl md:text-6xl font-display font-bold tracking-tighter text-burntOrange">
              CREATIVITY WITH PURPOSE.
            </h2>
            <h2 className="text-4xl md:text-6xl font-display font-bold tracking-tighter">
              RESULTS OVER VANITY METRICS.
            </h2>
          </div>
        </div>
      </section>

      {/* 04 / TEAM - EDITORIAL REDESIGN */}
      <section className="px-6 md:px-12 py-24 md:py-32 border-t border-softGray/20">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 md:mb-24 gap-8">
            <div className="flex items-center gap-3">
              <span className="w-2.5 h-2.5 bg-burntOrange block" />
              <span className="text-xs md:text-sm font-bold text-softGray uppercase tracking-widest">
                04 / TEAM
              </span>
            </div>
            <h2 className="text-5xl md:text-7xl font-display font-bold leading-[0.9] tracking-tighter uppercase">
              Meet The <br />
              Builders.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-8">
            {TEAM.map((member, index) => (
              <div key={index} className={`flex flex-col group cursor-pointer ${member.offset}`}>
                {/* Photo Placeholder */}
                <div className="w-full aspect-[3/4] bg-softGray/10 mb-6 relative overflow-hidden flex items-center justify-center">
                   <span className="text-softGray/40 font-mono text-sm z-10 transition-colors group-hover:text-warmIvory/80">
                     [ {member.name.toUpperCase()} PORTRAIT ]
                   </span>
                   {/* Hover image scale effect (simulated with a background layer for now) */}
                   <div className="absolute inset-0 bg-softGray/20 transform scale-100 group-hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(0.76,0,0.24,1)]" />
                </div>
                
                {/* Info */}
                <div className="flex items-center gap-3 mb-3">
                  <span className="w-1.5 h-1.5 bg-burntOrange block transition-all duration-300 group-hover:w-3 group-hover:h-3" />
                  <span className="text-burntOrange font-mono text-[10px] md:text-xs tracking-widest uppercase">
                    {member.role}
                  </span>
                </div>
                
                <h3 className="text-2xl md:text-3xl font-display font-bold uppercase tracking-tighter mb-4 transform transition-transform duration-300 group-hover:translate-x-1">
                  {member.name}
                </h3>
                
                <p className="text-softGray text-sm md:text-base mb-6 flex-grow max-w-[85%] leading-relaxed">
                  {member.description}
                </p>
                
                <div className="text-[10px] font-mono text-warmIvory/40 uppercase border-t border-softGray/20 pt-4 tracking-widest">
                  Spec / {member.specialization}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}