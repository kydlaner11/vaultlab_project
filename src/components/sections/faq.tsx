import { ArrowRight, ChevronDown } from "lucide-react";
import { ButtonLink } from "@/components/ui/site-button";
import { SectionHeading } from "@/components/ui/section-heading";
import { siteConfig } from "@/config/site";
import { buildWhatsAppLink } from "@/lib/utils";

const whatsappHref = buildWhatsAppLink(
  siteConfig.whatsapp,
  "Halo, saya punya pertanyaan seputar pembuatan website.",
);

// Sesuaikan jawaban dengan kebijakan nyata Anda.
const faqs = [
  {
    question: "Berapa lama proses pembuatan website?",
    answer:
      "Durasi bergantung pada paket dan kompleksitas halaman. Estimasi waktu setiap paket tercantum di bagian harga, dan jadwal pastinya kami konfirmasi saat konsultasi.",
  },
  {
    question: "Apakah ada biaya tersembunyi?",
    answer:
      "Tidak. Harga paket bersifat transparan, dan rincian yang termasuk di setiap paket bisa Anda lihat di bagian harga.",
  },
  {
    question: "Apakah saya bisa meminta revisi?",
    answer: "Bisa. Semua paket sudah termasuk revisi dan konsultasi gratis.",
  },
  {
    question: "Apakah website saya akan dioptimasi untuk SEO?",
    answer:
      "Kami membangun website dengan struktur dan performa yang ramah SEO sebagai fondasi agar bisnis Anda lebih mudah ditemukan di mesin pencari.",
  },
  {
    question: "Bagaimana cara memulai?",
    answer:
      "Hubungi kami lewat WhatsApp, ceritakan kebutuhan bisnis Anda, dan kami akan menyarankan paket yang paling sesuai.",
  },
];

export function Faq() {
  return (
    <section id="faq" aria-labelledby="faq-heading" className="section-y scroll-mt-24 bg-background">
      <div className="container-page grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <SectionHeading
            id="faq-heading"
            eyebrow="FAQ"
            title="Pertanyaan yang sering diajukan"
            description="Belum menemukan jawabannya? Tanyakan langsung kepada kami."
          />

          <div className="mt-8 rounded-xl border border-border bg-surface-soft p-6">
            <h3 className="text-lg font-semibold text-foreground">Masih ada pertanyaan?</h3>
            <p className="mt-2 text-[15px] leading-relaxed text-muted-foreground">
              Konsultasikan kebutuhan website Anda secara gratis dengan tim kami.
            </p>
            <ButtonLink href={whatsappHref} className="mt-5 w-full sm:w-auto">
              Hubungi via WhatsApp
              <ArrowRight className="size-4" />
            </ButtonLink>
          </div>
        </div>

        <div className="lg:col-span-7">
          {faqs.map((faq) => (
            <details key={faq.question} className="group border-b border-border first:border-t">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 rounded-md py-5 text-base font-semibold text-foreground transition-colors duration-200 hover:text-brand focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand [&::-webkit-details-marker]:hidden">
                {faq.question}
                <ChevronDown className="size-5 shrink-0 text-muted-foreground transition-transform duration-200 group-open:rotate-180 group-open:text-brand" />
              </summary>
              <p className="pr-9 pb-5 text-[15px] leading-relaxed text-muted-foreground">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
