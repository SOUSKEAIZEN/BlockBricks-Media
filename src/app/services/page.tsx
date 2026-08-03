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
    title: "Website Development",
    whatItIs: "High-performance, premium web experiences built for conversion.",
    whatWeDo: "UX/UI design, frontend development (Next.js/React), animations, and technical SEO.",
    whatYouGet: "A lightning-fast, custom-coded website that doesn't look like a generic template.",
    whoItsFor: "Brands outgrowing Shopify themes or needing a custom digital flagship.",
  },
  {
    title: "Performance Marketing",
    whatItIs: "Data-driven media buying to turn ad spend into profitable revenue.",
    whatWeDo: "Campaign setup, creative testing frameworks, bid management, and scaling strategy.",
    whatYouGet: "Optimized Meta, TikTok, and Google ad accounts with transparent ROAS reporting.",
    whoItsFor: "E-commerce and service brands ready to aggressively scale their customer acquisition.",
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
    tier: "FOUNDATION",
    whoItsFor: "Emerging brands needing consistency.",
    services: "Organic Social, Basic UGC, Graphic Design.",
    deliverables: "15 posts/mo, 4 UGC videos, monthly strategy call.",
    price: "STARTING FROM ₹XX,XXX",
  },
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
      <section className="px-6 md:px-12 py-32 md:py-48 max-w-7xl mx-auto">
        <h1 className="text-5xl md:text-8xl font-display font-bold leading-[0.9] tracking-tighter uppercase">
          Everything <br />
          <span className="text-burntOrange">Your Brand</span> <br />
          Needs To Grow.
        </h1>
      </section>

      {/* SERVICES DETAIL BREAKDOWN */}
      <section className="px-6 md:px-12 py-24 md:py-32 border-t border-softGray/20">
        <div className="max-w-7xl mx-auto flex flex-col gap-24">
          {SERVICES.map((service, index) => (
            <div key={index} className="flex flex-col md:flex-row gap-12 group">
              
              {/* Service Title */}
              <div className="w-full md:w-1/3 flex flex-col gap-4">
                <div className="text-sm font-mono font-bold text-burntOrange">
                  {String(index + 1).padStart(2, "0")} —
                </div>
                <h2 className="text-3xl md:text-5xl font-display font-bold tracking-tighter uppercase">
                  {service.title}
                </h2>
              </div>

              {/* Service Details Grid */}
              <div className="w-full md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                
                <div className="flex flex-col gap-2">
                  <h3 className="text-xs font-bold text-softGray uppercase tracking-widest border-b border-softGray/20 pb-2">
                    What It Is
                  </h3>
                  <p className="text-base text-warmIvory/80 leading-relaxed pt-2">
                    {service.whatItIs}
                  </p>
                </div>

                <div className="flex flex-col gap-2">
                  <h3 className="text-xs font-bold text-softGray uppercase tracking-widest border-b border-softGray/20 pb-2">
                    What We Do
                  </h3>
                  <p className="text-base text-warmIvory/80 leading-relaxed pt-2">
                    {service.whatWeDo}
                  </p>
                </div>

                <div className="flex flex-col gap-2">
                  <h3 className="text-xs font-bold text-softGray uppercase tracking-widest border-b border-softGray/20 pb-2">
                    What You Get
                  </h3>
                  <p className="text-base text-warmIvory/80 leading-relaxed pt-2">
                    {service.whatYouGet}
                  </p>
                </div>

                <div className="flex flex-col gap-2">
                  <h3 className="text-xs font-bold text-softGray uppercase tracking-widest border-b border-softGray/20 pb-2">
                    Who It's For
                  </h3>
                  <p className="text-base text-warmIvory/80 leading-relaxed pt-2">
                    {service.whoItsFor}
                  </p>
                </div>

              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PRICING */}
      <section className="px-6 md:px-12 py-24 md:py-32 border-t border-softGray/20 bg-softGray/5">
        <div className="max-w-7xl mx-auto flex flex-col gap-16">
          <div className="flex items-center gap-3 justify-center md:justify-start">
            <span className="w-2.5 h-2.5 bg-burntOrange block" />
            <span className="text-xs md:text-sm font-bold text-softGray uppercase tracking-widest">
              PACKAGES & PRICING
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {PRICING.map((tier, index) => (
              <div key={index} className="flex flex-col border border-softGray/20 p-8 hover:border-burntOrange transition-colors bg-richBlack group">
                
                {/* Tier Name & Price */}
                <div className="mb-8 border-b border-softGray/20 pb-8">
                  <h3 className="text-2xl font-display font-bold tracking-tighter uppercase mb-4 text-warmIvory">
                    {tier.tier}
                  </h3>
                  <div className="text-sm font-mono text-burntOrange">
                    {tier.price}
                  </div>
                </div>

                {/* Tier Details */}
                <div className="flex flex-col gap-6 flex-grow mb-12">
                  <div className="flex flex-col gap-1">
                    <span className="text-[10px] font-bold text-softGray uppercase tracking-widest">Ideal For</span>
                    <span className="text-sm text-warmIvory/80">{tier.whoItsFor}</span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-[10px] font-bold text-softGray uppercase tracking-widest">Core Services</span>
                    <span className="text-sm text-warmIvory/80">{tier.services}</span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-[10px] font-bold text-softGray uppercase tracking-widest">Deliverables</span>
                    <span className="text-sm text-warmIvory/80">{tier.deliverables}</span>
                  </div>
                </div>

                {/* CTA */}
                <Link href="/contact" className="flex items-center justify-between w-full border border-softGray/40 py-3 px-4 text-xs font-bold uppercase tracking-widest hover:bg-burntOrange hover:border-burntOrange hover:text-richBlack transition-all">
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