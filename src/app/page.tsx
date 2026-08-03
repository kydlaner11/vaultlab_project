import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Team } from "@/components/sections/team";
import { ServiceCards } from "@/components/sections/service-cards";
import { ServiceMarquee } from "@/components/sections/service-marquee";
import { LeadForm } from "@/components/sections/lead-form";
import { FreeFeaturesCta } from "@/components/sections/free-features-cta";
import { Pricing } from "@/components/sections/pricing";
import { StatsBanner } from "@/components/sections/stats-banner";
import { Portfolio } from "@/components/sections/portfolio";
import { WhyUs } from "@/components/sections/why-us";
import { Mission } from "@/components/sections/mission";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="overflow-x-clip">
        <Hero />
        <About />
        <Team />
        {/* <ServiceCards /> */}
        <ServiceMarquee />
        <LeadForm />
        <FreeFeaturesCta />
        <Pricing />
        {/* <StatsBanner /> */}
        <Portfolio />
        <WhyUs />
        <Mission />
      </main>
      <Footer />
    </>
  );
}
