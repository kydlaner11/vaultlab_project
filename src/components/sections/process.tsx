import { ArrowRight } from "lucide-react";
import { ButtonLink } from "@/components/ui/site-button";
import { SectionHeading } from "@/components/ui/section-heading";
import { siteConfig } from "@/config/site";
import { buildWhatsAppLink } from "@/lib/utils";

const whatsappHref = buildWhatsAppLink(
  siteConfig.whatsapp,
  "Halo, saya ingin konsultasi gratis untuk pembuatan website.",
);

// Edit tahapan di sini.
const steps = [
  {
    title: "Discovery",
    description:
      "Kami memahami tujuan bisnis, target pelanggan, dan kebutuhan website Anda lewat sesi konsultasi.",
    result: "Brief dan ruang lingkup proyek",
  },
  {
    title: "Perancangan",
    description: "Struktur halaman dan desain visual disusun sesuai brand, lalu dibahas bersama Anda.",
    result: "Desain halaman untuk disetujui",
  },
  {
    title: "Pengembangan",
    description: "Desain diterjemahkan menjadi website yang cepat, responsif, dan siap untuk SEO.",
    result: "Website versi pengembangan",
  },
  {
    title: "Pengujian & Revisi",
    description:
      "Kami menguji tampilan dan fungsi di berbagai perangkat, lalu menyempurnakannya sesuai masukan Anda.",
    result: "Website siap rilis",
  },
  {
    title: "Peluncuran",
    description: "Website dipublikasikan dan kami memastikan semuanya berjalan dengan baik.",
    result: "Website online dan bisa diakses pelanggan",
  },
  {
    title: "Dukungan Lanjutan",
    description: "Setelah rilis, kami tetap mendampingi untuk perbaikan dan pertanyaan seputar website Anda.",
    result: "Pendampingan setelah peluncuran",
  },
];

export function Process() {
  return (
    <section id="proses" aria-labelledby="proses-heading" className="section-y scroll-mt-24 bg-background">
      <div className="container-page grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-32">
            <SectionHeading
              id="proses-heading"
              eyebrow="Proses Kerja"
              title="Eksekusi dalam enam tahap yang bisa Anda pantau"
              description="Setiap tahap punya hasil yang jelas, sehingga Anda selalu tahu sampai di mana proyek berjalan."
            />
            <div className="mt-8">
              <ButtonLink href={whatsappHref} variant="secondary" className="w-full sm:w-auto">
                Jadwalkan Konsultasi
                <ArrowRight className="size-4" />
              </ButtonLink>
            </div>
          </div>
        </div>

        <ol className="divide-y divide-border border-y border-border lg:col-span-7">
          {steps.map((step, index) => (
            <li key={step.title} className="flex gap-5 py-6 sm:gap-6 sm:py-7">
              <span
                aria-hidden="true"
                className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-brand-tint text-sm font-semibold text-brand"
              >
                {String(index + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="text-lg font-semibold tracking-tight text-foreground">{step.title}</h3>
                <p className="mt-1.5 text-[15px] leading-relaxed text-muted-foreground">{step.description}</p>
                <p className="mt-3 text-sm text-foreground">
                  <span className="font-semibold text-brand">Hasil:</span> {step.result}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
