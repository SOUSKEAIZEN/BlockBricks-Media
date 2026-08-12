import React from "react";

const SERVICES_DATA = [
  {
    id: "01",
    title: "UGC Content",
    desc: "Authentic, user-generated style content that builds trust and drives engagement.",
    color: "dark"
  },
  {
    id: "02",
    title: "Meta Ads",
    desc: "Targeted ad campaigns across Facebook and Instagram to maximize reach and ROI.",
    color: "orange"
  },
  {
    id: "03",
    title: "Regular Posting",
    desc: "Consistent, on-brand posting to keep your audience engaged and active.",
    color: "dark"
  },
  {
    id: "04",
    title: "Editing",
    desc: "High-quality video and photo editing that keeps content polished and on-brand.",
    color: "orange"
  },
  {
    id: "05",
    title: "Website Designing",
    desc: "Clean, modern website design that reflects your brand and converts visitors.",
    color: "dark"
  },
  {
    id: "06",
    title: "Content Calendar Planning",
    desc: "Organized monthly calendars so your posting stays consistent and strategic.",
    color: "orange"
  },
  {
    id: "07",
    title: "Strategy Development",
    desc: "Custom social media strategies built around your brand goals and audience.",
    color: "dark"
  },
  {
    id: "08",
    title: "Story & Post Editing",
    desc: "Ongoing editing support for daily stories and posts, keeping your feed fresh.",
    color: "orange"
  }
];

const STATS = [
  { number: "8+", label: "CORE SERVICES" },
  { number: "100%", label: "CUSTOM STRATEGY" },
  { number: "1", label: "DEDICATED TEAM" },
  { number: "24/7", label: "SUPPORT" }
];

const PROCESS = [
  {
    num: "1",
    title: "Discover",
    desc: "We learn your brand, audience, and goals.",
    color: "orange"
  },
  {
    num: "2",
    title: "Plan",
    desc: "We build a custom content and ad strategy.",
    color: "dark"
  },
  {
    num: "3",
    title: "Create",
    desc: "We produce and edit content that fits your voice.",
    color: "orange"
  },
  {
    num: "4",
    title: "Grow",
    desc: "We post, run ads, and optimize consistently.",
    color: "dark"
  }
];

export default function ServicesPage() {
  return (
    <main className="w-full bg-warmIvory text-richBlack min-h-screen pt-32 pb-24 font-sans">
      <div className="container max-w-[1000px] mx-auto px-6">
        
        {/* Header */}
        <div className="mb-10">
          <h1 className="text-5xl md:text-6xl font-display font-bold mb-4 tracking-tight">
            Our <span className="text-burntOrange">Services</span>
          </h1>
          <p className="text-softGray text-lg md:text-xl">
            A complete social media growth system — content, ads, and strategy under one roof
          </p>
        </div>

        {/* Intro Box */}
        <div className="border-l-[6px] border-burntOrange bg-[#f6f5f3] p-6 md:p-8 mb-12">
          <p className="text-softGray/90 text-[15px] md:text-[17px] leading-relaxed">
            At Block Bricks Media, we help brands build a strong, consistent digital presence — from scroll-stopping content to data-driven ad campaigns. Every service below works together as one complete growth system tailored to your brand.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {SERVICES_DATA.map((service, index) => (
            <div 
              key={index} 
              className="bg-[#faf9f7] border border-softGray/20 rounded-lg p-5 flex items-start gap-5 hover:border-burntOrange/50 transition-colors"
            >
              <div 
                className={`flex-shrink-0 w-12 h-12 flex items-center justify-center rounded text-warmIvory font-bold text-lg ${
                  service.color === "orange" ? "bg-burntOrange" : "bg-richBlack"
                }`}
              >
                {service.id}
              </div>
              <div className="flex flex-col gap-1.5 mt-0.5">
                <h3 className="font-bold text-[18px] text-richBlack">{service.title}</h3>
                <p className="text-[14px] text-softGray leading-relaxed">{service.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Banner */}
        <div className="bg-[#242220] rounded-lg p-8 md:p-12 flex flex-col md:flex-row justify-between items-center gap-8 md:gap-4 mb-20">
          {STATS.map((stat, idx) => (
            <div key={idx} className="flex flex-col items-center text-center">
              <span className="text-burntOrange text-4xl md:text-5xl font-display font-bold mb-2">
                {stat.number}
              </span>
              <span className="text-warmIvory/80 text-xs md:text-sm font-mono tracking-widest uppercase">
                {stat.label}
              </span>
            </div>
          ))}
        </div>

        {/* How We Work Section */}
        <div className="mb-8">
          <h2 className="text-4xl md:text-5xl font-display font-bold tracking-tight mb-12">
            How We <span className="text-burntOrange">Work</span>
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {PROCESS.map((step, idx) => (
              <div key={idx} className="flex flex-col">
                <div 
                  className={`h-1 w-full mb-6 ${
                    step.color === "orange" ? "bg-burntOrange" : "bg-richBlack"
                  }`} 
                />
                <span className="text-6xl font-display font-bold text-softGray/30 mb-4">
                  {step.num}
                </span>
                <h3 className="text-xl font-bold text-richBlack mb-3">
                  {step.title}
                </h3>
                <p className="text-[15px] text-softGray leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </main>
  );
}