import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { ServiceCards } from "@/components/sections/service-cards";
import { ServiceMarquee } from "@/components/sections/service-marquee";
import { Portfolio } from "@/components/sections/portfolio";
import { WhyUs } from "@/components/sections/why-us";
import { Mission } from "@/components/sections/mission";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="overflow-x-hidden">
        <Hero />
        <About />
        <ServiceCards />
        <ServiceMarquee />
        <Portfolio />
        <WhyUs />
        <Mission />
      </main>
      <Footer />
    </>
  );
}
