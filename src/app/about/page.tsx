import React from "react";

const TEAM = [
  {
    name: "ALEX MERCER",
    role: "Founder / Creative Director",
    description: "10+ years turning attention into brand equity.",
    specialization: "Brand Strategy",
  },
  {
    name: "SAMANTHA CHEN",
    role: "Content Strategist",
    description: "Architect behind 50M+ organic views this year.",
    specialization: "Viral Mechanics",
  },
  {
    name: "JORDAN ELLIS",
    role: "Performance Marketing",
    description: "Scales ad spend profitably without burning cash.",
    specialization: "Paid Social / ROAS",
  },
  {
    name: "TAYLOR REED",
    role: "Designer",
    description: "Obsessed with grids, typography, and visual systems.",
    specialization: "Visual Identity",
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

      {/* 04 / TEAM */}
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {TEAM.map((member, index) => (
              <div key={index} className="flex flex-col group">
                {/* Photo Placeholder */}
                <div className="w-full aspect-[3/4] bg-softGray/10 mb-6 relative overflow-hidden flex items-center justify-center">
                   <span className="text-softGray/40 font-mono text-sm">
                     Photo Placeholder
                   </span>
                   {/* Hover overlay effect */}
                   <div className="absolute inset-0 bg-burntOrange/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
                </div>
                
                {/* Info */}
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-display font-bold uppercase tracking-tighter">
                    {member.name}
                  </h3>
                  <a href="#" className="text-softGray hover:text-burntOrange transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                  </a>
                </div>
                <div className="text-burntOrange font-mono text-sm mb-4">
                  {member.role}
                </div>
                <p className="text-softGray text-sm mb-6 flex-grow">
                  {member.description}
                </p>
                <div className="text-xs font-mono text-warmIvory/60 uppercase border-t border-softGray/20 pt-4">
                  Spec: {member.specialization}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}