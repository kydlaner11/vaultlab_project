import type { Metadata } from "next";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Pricing } from "@/components/sections/pricing";
import { FaqSection } from "@/components/pricing/faq-section";

export const metadata: Metadata = {
  title: "Harga Paket",
  description:
    "Harga paket jasa pembuatan website Vaultlab — Landing Page, Company Profile, dan Toko Online. Transparan tanpa biaya tersembunyi.",
};

export default function PricingPage() {
  return (
    <>
      <Navbar />
      <main className="overflow-x-clip">
        <Pricing />
        <FaqSection />
      </main>
      <Footer />
    </>
  );
}
