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
        <div className="container max-w-[1400px]">
          {/* HEADER */}
          <div className="flex flex-col items-start mb-16 gap-6">
            <div className="flex items-center gap-3">
              <span className="w-2.5 h-2.5 bg-burntOrange block" />
              <span className="text-[11px] md:text-[12px] font-mono font-bold text-softGray uppercase tracking-[0.15em]">
                TEAM
              </span>
            </div>
            <h2 className="text-[clamp(64px,8vw,120px)] font-display font-bold leading-[0.85] tracking-tighter uppercase">
              MEET THE<br />
              BUILDERS.
            </h2>
          </div>

          {/* GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
            {TEAM.map((member, index) => (
              <div key={index} className="flex flex-col group cursor-pointer border border-softGray/10 bg-[#161514]">
                
                {/* Visual Area */}
                <div className="w-full aspect-[4/3] relative overflow-hidden flex items-center justify-center bg-[#1e1c1a]">
                   {/* Floating Bricks (Decorative) */}
                   <div className="absolute top-[25%] right-[20%] w-[120px] h-[40px] bg-[#7F533F] rotate-[10deg] opacity-80" />
                   <div className="absolute bottom-[25%] left-[15%] w-[140px] h-[45px] bg-[#7F533F] -rotate-[8deg] opacity-80" />
                   
                   {/* Center Circle Initial */}
                   <div className="w-[100px] h-[100px] rounded-full border border-softGray/10 bg-[#161514] flex items-center justify-center shadow-2xl z-10 relative">
                     <span className="text-4xl font-display font-bold text-warmIvory">
                       {member.name.charAt(0)}
                     </span>
                   </div>

                   {/* Portrait Placeholder Text */}
                   <div className="absolute bottom-4 right-4 z-10">
                     <span className="text-softGray/40 font-mono text-[9px] tracking-[0.2em] uppercase">
                       REPLACE WITH {member.name} PORTRAIT
                     </span>
                   </div>
                </div>
                
                {/* Info Area */}
                <div className="p-6 md:p-8 flex flex-col border-t border-softGray/10">
                  {/* Top Meta Row */}
                  <div className="flex justify-between items-center mb-6">
                    <span className="text-burntOrange font-mono text-[10px] md:text-[11px] tracking-[0.15em] uppercase font-bold">
                      {member.role}
                    </span>
                    <span className="text-softGray/60 font-mono text-[10px] md:text-[11px] tracking-[0.15em] uppercase">
                      Spec / {member.specialization}
                    </span>
                  </div>
                  
                  {/* Name */}
                  <h3 className="text-[clamp(32px,4vw,48px)] font-display font-bold uppercase tracking-tight mb-4 text-warmIvory">
                    {member.name}
                  </h3>
                  
                  {/* Bio */}
                  <p className="text-softGray text-[14px] md:text-[15px] leading-relaxed max-w-[85%]">
                    {member.description}
                  </p>
                </div>
                
              </div>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}