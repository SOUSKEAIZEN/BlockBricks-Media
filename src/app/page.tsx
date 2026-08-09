import OpeningAnimation from "@/components/OpeningAnimation";
import Hero from "@/components/Hero";
import BrandStatement from "@/components/BrandStatement";
import Services from "@/components/Services";
import Process from "@/components/Process";
import ClientsMarquee from "@/components/ClientsMarquee";
import Numbers from "@/components/Numbers";
import FinalCTA from "@/components/FinalCTA";

export default function Home() {
  return (
    <main>
      {/* Main 1-2s Intro Animation */}
      <OpeningAnimation />
      
      {/* Page Sections */}
      <Hero />
      <BrandStatement />
      <Services />
      <Process />
      <ClientsMarquee />
      <Numbers />
      <FinalCTA />
    </main>
  );
}