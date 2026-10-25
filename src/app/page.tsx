import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { MotionProvider } from "@/components/ui/motion-provider";
import { Hero } from "@/components/sections/hero";
import { ClientLogos } from "@/components/sections/client-logos";
import { Services } from "@/components/sections/services";
import { AboutOther } from "@/components/sections/about-other";
import { Process } from "@/components/sections/process";
import { Portfolio } from "@/components/sections/portfolio";
import { Pricing } from "@/components/sections/pricing";
import { WhyUs } from "@/components/sections/why-us";
import { Faq } from "@/components/sections/faq";
import { FreeFeaturesCta } from "@/components/sections/free-features-cta";
// Section lama (belum dipakai, dibiarkan agar mudah diaktifkan lagi):
// About, Team, ServiceCards, ServiceMarquee, LeadForm, StatsBanner, Portfolio, Mission

export default function Home() {
  return (
    <MotionProvider>
      <Navbar />
      <main className="overflow-x-clip">
        <Hero />
        <ClientLogos />
        <Services />
        <Portfolio />
        {/* <AboutOther /> */}
        <Process />
        <Pricing />
        {/* <WhyUs /> */}
        <Faq />
        {/* <FreeFeaturesCta /> */}
      </main>
      <Footer />
    </MotionProvider>
  );
}
