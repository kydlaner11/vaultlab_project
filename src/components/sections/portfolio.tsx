import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PortfolioGrid } from "@/components/portfolio/portfolio-grid";

export function Portfolio() {
  return (
    <section id="portofolio" aria-labelledby="portofolio-heading" className="section-y scroll-mt-24 bg-background">
      <div className="container-page">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between lg:gap-16">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold tracking-wider text-brand uppercase">Portofolio</p>
            <h2 id="portofolio-heading" className="type-h2 mt-3 max-w-xl text-balance text-foreground">
              Proyek yang sudah kami kerjakan untuk berbagai jenis bisnis
            </h2>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-body">
              Pilih jenis website yang paling dekat dengan kebutuhan Anda untuk melihat contoh hasil kerja kami.
            </p>
          </div>

          <Link
            href="/portfolio"
            className="inline-flex h-11 shrink-0 items-center justify-center gap-2 self-start rounded-md border border-border bg-white px-5 text-sm font-semibold text-foreground transition-colors duration-200 hover:bg-surface-soft lg:self-auto"
          >
            Lihat Semua Portofolio
            <ArrowRight className="size-4" />
          </Link>
        </div>

        <div className="mt-10">
          <PortfolioGrid limit={6} />
        </div>
      </div>
    </section>
  );
}