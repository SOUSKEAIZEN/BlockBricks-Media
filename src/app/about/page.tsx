import React from "react";

const TEAM = [
  {
    name: "Kartik",
    role: "Creative Strategy / Founder",
    description: "Architecting brand narratives that people actually want to engage with.",
    specialization: "Brand Strategy",
    offset: "mt-0"
  },
  {
    name: "Himanshi",
    role: "Content & Influencer Marketing / Founder",
    description: "Building the distribution systems that turn attention into equity.",
    specialization: "Viral Mechanics",
    offset: "mt-12 md:mt-24"
  },
];

export default function AboutPage() {
  return (
    <main className="w-full bg-richBlack text-warmIvory min-h-screen">
      
      {/* HERO */}
      <section className="w-full py-[120px] min-h-[85vh] flex flex-col justify-center">
        <div className="container">
          <h1 className="text-[clamp(48px,7vw,92px)] font-display font-bold leading-[0.9] tracking-tighter uppercase max-w-[1000px]">
            We're not here <br />
            to make <br />
            <span className="text-burntOrange">more noise.</span> <br />
            We're here <br />
            to make brands <br />
            matter.
          </h1>
        </div>
      </section>

      {/* STORY */}
      <section className="w-full py-[120px] border-t border-softGray/20">
        <div className="container grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-4 flex items-start gap-3">
            <span className="w-2.5 h-2.5 bg-burntOrange block mt-1.5" />
            <span className="text-[11px] md:text-[12px] font-mono font-bold text-softGray uppercase tracking-[0.15em]">
              STORY
            </span>
          </div>
          <div className="md:col-span-8 flex flex-col gap-8">
            <p className="text-[clamp(28px,3vw,42px)] font-display font-bold leading-tight max-w-[800px]">
              BlockBricks Media was built on a simple observation: most marketing agencies are optimized for output, not outcomes. They build walls of noise.
            </p>
            <p className="text-[17px] md:text-[19px] text-softGray leading-relaxed font-sans max-w-[700px]">
              We believe that every piece of content, every campaign, and every digital experience should be an intentional brick in a larger structure. We don't just chase trends; we leverage them to build lasting brand architecture.
            </p>
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="w-full py-[120px] border-t border-softGray/20">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
            <div className="flex items-center gap-3">
              <span className="w-2.5 h-2.5 bg-burntOrange block" />
              <span className="text-[11px] md:text-[12px] font-mono font-bold text-softGray uppercase tracking-[0.15em]">
                TEAM
              </span>
            </div>
            <h2 className="text-[clamp(48px,5vw,72px)] font-display font-bold leading-[0.95] tracking-tighter uppercase">
              Meet The <br />
              Builders.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 w-full max-w-[1000px] mx-auto">
            {TEAM.map((member, index) => (
              <div key={index} className={`flex flex-col group cursor-pointer ${member.offset}`}>
                {/* Photo Placeholder */}
                <div className="w-full aspect-[3/4] bg-softGray/10 mb-6 relative overflow-hidden flex items-center justify-center">
                   <span className="text-softGray/40 font-mono text-[11px] tracking-[0.15em] z-10 transition-colors group-hover:text-warmIvory/80">
                     [ {member.name.toUpperCase()} PORTRAIT ]
                   </span>
                   {/* Hover image scale effect (simulated with a background layer for now) */}
                   <div className="absolute inset-0 bg-softGray/20 transform scale-100 group-hover:scale-[1.035] transition-transform duration-700 ease-[0.2,0.7,0.2,1]" />
                </div>
                
                {/* Info */}
                <div className="flex items-center gap-3 mb-3">
                  <span className="w-1.5 h-1.5 bg-burntOrange block transition-all duration-300 group-hover:scale-150" />
                  <span className="text-burntOrange font-mono text-[10px] md:text-[11px] tracking-[0.15em] uppercase">
                    {member.role}
                  </span>
                </div>
                
                <h3 className="text-[clamp(28px,3vw,42px)] font-display font-bold uppercase tracking-tight mb-4 transform transition-colors duration-300 group-hover:text-burntOrange">
                  {member.name}
                </h3>
                
                <p className="text-softGray text-[17px] md:text-[19px] mb-6 flex-grow leading-relaxed">
                  {member.description}
                </p>
                
                <div className="text-[10px] md:text-[11px] font-mono text-warmIvory/40 uppercase border-t border-softGray/20 pt-4 tracking-[0.15em]">
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