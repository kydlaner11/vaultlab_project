import type { Metadata } from "next";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { PageHeader } from "@/components/layout/page-header";
import { PortfolioGrid } from "@/components/portfolio/portfolio-grid";

export const metadata: Metadata = {
  title: "Portofolio",
  description:
    "Kumpulan hasil kerja Vaultlab dalam membangun website untuk berbagai jenis bisnis — dari company profile, landing page, hingga toko online.",
};

export default function PortfolioPage() {
  return (
    <>
      <Navbar />
      <main className="overflow-x-clip">
        <section className="bg-[#faf6ef] pt-36 pb-16 sm:pt-44">
          <PageHeader
            eyebrow="PORTOFOLIO"
            title="Karya yang sudah kami wujudkan."
            description="Setiap proyek punya tantangan berbeda. Berikut beberapa website yang telah kami kembangkan untuk klien dari berbagai industri."
          />
        </section>
        <section className="bg-[#faf6ef] pb-24 sm:pb-32">
          <PortfolioGrid />
        </section>
      </main>
      <Footer />
    </>
  );
}
