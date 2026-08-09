import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const SERVICES = [
  {
    title: "UGC Content",
    whatItIs: "User-Generated Content designed to feel native, authentic, and native to the feed.",
    whatWeDo: "We source creators, write non-boring hooks, script videos, and handle all editing and compliance.",
    whatYouGet: "A monthly library of ready-to-post, high-converting short-form videos.",
    whoItsFor: "DTC brands and apps needing scalable creative for paid ads or organic TikTok/Reels.",
  },
  {
    title: "Social Media Management",
    whatItIs: "End-to-end management of your brand's social presence and community.",
    whatWeDo: "Content calendaring, grid planning, copywriting, posting, and active community engagement.",
    whatYouGet: "Consistent brand voice, daily activity, and comprehensive monthly growth reports.",
    whoItsFor: "Founders who need to step away from the timeline and trust their brand is growing.",
  },
  {
    title: "Influencer Marketing",
    whatItIs: "Strategic creator partnerships to drive massive brand awareness and conversions.",
    whatWeDo: "Creator vetting, outreach, negotiation, brief creation, and campaign tracking.",
    whatYouGet: "High-ROI influencer campaigns with full usage rights and performance analytics.",
    whoItsFor: "Brands ready to scale beyond their immediate audience and borrow established trust.",
  },
  {
    title: "Brand Collaborations",
    whatItIs: "Strategic B2B partnerships and co-marketing campaigns.",
    whatWeDo: "Identify synergistic brands, pitch collaboration concepts, and execute joint campaigns.",
    whatYouGet: "Cross-pollinated audiences, shared resources, and unique limited-edition drops.",
    whoItsFor: "Established brands looking for explosive PR moments and lateral audience growth.",
  },
  {
    title: "Creative Design",
    whatItIs: "Premium visual assets that elevate your brand perception.",
    whatWeDo: "Digital assets, ad creatives, out-of-home design, and packaging design.",
    whatYouGet: "Pixel-perfect files, layered source files, and brand-compliant visual systems.",
    whoItsFor: "Any brand that understands that good design is a competitive advantage.",
  },
  {
    title: "Brand Strategy",
    whatItIs: "The foundational blueprint for how your brand looks, sounds, and acts.",
    whatWeDo: "Market positioning, competitor analysis, tone of voice, and visual identity mapping.",
    whatYouGet: "A comprehensive brand book and strategic roadmap for long-term equity.",
    whoItsFor: "Startups building from scratch or legacy brands needing a modern repositioning.",
  },
];

const PRICING = [
  {
    tier: "GROWTH",
    whoItsFor: "Scaling brands ready for aggressive acquisition.",
    services: "Performance Marketing, Advanced UGC, Influencer Sourcing.",
    deliverables: "Ad management, 10 UGC videos, 5 micro-influencer posts.",
    price: "STARTING FROM ₹XX,XXX",
  },
  {
    tier: "SCALE",
    whoItsFor: "Established brands dominating their market.",
    services: "Omnichannel Management, Web Dev Retainer, Brand Collabs.",
    deliverables: "Custom scope, dedicated account manager, daily reporting.",
    price: "STARTING FROM ₹XX,XXX",
  },
  {
    tier: "CUSTOM",
    whoItsFor: "Unique projects requiring a tailored approach.",
    services: "Select à la carte services.",
    deliverables: "Built entirely around your specific brief and timeline.",
    price: "BASED ON SCOPE",
  },
];

export default function ServicesPage() {
  return (
    <main className="w-full bg-richBlack text-warmIvory min-h-screen">
      
      {/* HERO */}
      <section className="w-full py-[120px] min-h-[85vh] flex flex-col justify-center">
        <div className="container">
          <h1 className="text-[clamp(48px,7vw,92px)] font-display font-bold leading-[0.9] tracking-tighter uppercase max-w-[1200px]">
            Everything <br />
            <span className="text-burntOrange">Your Brand</span> <br />
            Needs To Grow.
          </h1>
        </div>
      </section>

      {/* SERVICES DETAIL BREAKDOWN */}
      <section className="w-full py-[120px] border-t border-softGray/20">
        <div className="container flex flex-col gap-24 max-w-[1200px]">
          {SERVICES.map((service, index) => (
            <div key={index} className="flex flex-col lg:flex-row gap-12 lg:gap-24 group">
              
              {/* Service Title */}
              <div className="w-full lg:w-5/12 flex flex-col gap-4">
                <h2 className="text-[clamp(32px,4vw,48px)] font-display font-bold tracking-tighter uppercase leading-[0.95]">
                  {service.title}
                </h2>
              </div>

              {/* Service Details Grid */}
              <div className="w-full lg:w-7/12 grid grid-cols-1 md:grid-cols-2 gap-12">
                
                <div className="flex flex-col gap-2">
                  <h3 className="text-[11px] font-bold text-softGray uppercase tracking-[0.15em] border-b border-softGray/20 pb-2">
                    What It Is
                  </h3>
                  <p className="text-[15px] md:text-[17px] text-warmIvory/80 leading-relaxed pt-2">
                    {service.whatItIs}
                  </p>
                </div>

                <div className="flex flex-col gap-2">
                  <h3 className="text-[11px] font-bold text-softGray uppercase tracking-[0.15em] border-b border-softGray/20 pb-2">
                    What We Do
                  </h3>
                  <p className="text-[15px] md:text-[17px] text-warmIvory/80 leading-relaxed pt-2">
                    {service.whatWeDo}
                  </p>
                </div>

                <div className="flex flex-col gap-2">
                  <h3 className="text-[11px] font-bold text-softGray uppercase tracking-[0.15em] border-b border-softGray/20 pb-2">
                    What You Get
                  </h3>
                  <p className="text-[15px] md:text-[17px] text-warmIvory/80 leading-relaxed pt-2">
                    {service.whatYouGet}
                  </p>
                </div>

                <div className="flex flex-col gap-2">
                  <h3 className="text-[11px] font-bold text-softGray uppercase tracking-[0.15em] border-b border-softGray/20 pb-2">
                    Who It's For
                  </h3>
                  <p className="text-[15px] md:text-[17px] text-warmIvory/80 leading-relaxed pt-2">
                    {service.whoItsFor}
                  </p>
                </div>

              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PRICING */}
      <section className="w-full py-[120px] border-t border-softGray/20 bg-softGray/5">
        <div className="container flex flex-col gap-16 max-w-[1200px]">
          <div className="flex items-center gap-3 justify-center md:justify-start">
            <span className="w-2.5 h-2.5 bg-burntOrange block" />
            <span className="text-[11px] md:text-[12px] font-mono font-bold text-softGray uppercase tracking-[0.15em]">
              PACKAGES & PRICING
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {PRICING.map((tier, index) => (
              <div key={index} className="flex flex-col border border-softGray/20 p-8 hover:border-burntOrange transition-colors bg-richBlack group">
                
                {/* Tier Name & Price */}
                <div className="mb-8 border-b border-softGray/20 pb-8">
                  <h3 className="text-[clamp(28px,3vw,36px)] font-display font-bold tracking-tight uppercase mb-4 text-warmIvory">
                    {tier.tier}
                  </h3>
                  <div className="text-[11px] md:text-[12px] font-mono text-burntOrange tracking-[0.1em]">
                    {tier.price}
                  </div>
                </div>

                {/* Tier Details */}
                <div className="flex flex-col gap-6 flex-grow mb-12">
                  <div className="flex flex-col gap-1">
                    <span className="text-[10px] font-bold text-softGray uppercase tracking-[0.15em]">Ideal For</span>
                    <span className="text-sm text-warmIvory/80 leading-relaxed">{tier.whoItsFor}</span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-[10px] font-bold text-softGray uppercase tracking-[0.15em]">Core Services</span>
                    <span className="text-sm text-warmIvory/80 leading-relaxed">{tier.services}</span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-[10px] font-bold text-softGray uppercase tracking-[0.15em]">Deliverables</span>
                    <span className="text-sm text-warmIvory/80 leading-relaxed">{tier.deliverables}</span>
                  </div>
                </div>

                {/* CTA */}
                <Link href="/contact" className="flex items-center justify-between w-full border border-softGray/40 py-3 px-4 text-[10px] font-bold uppercase tracking-[0.15em] hover:bg-burntOrange hover:border-burntOrange hover:text-richBlack transition-all">
                  <span>SELECT TIER</span>
                  <ArrowUpRight size={16} />
                </Link>

              </div>
            ))}
          </div>

        </div>
      </section>

    </main>
  );
}