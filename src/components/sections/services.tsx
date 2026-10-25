"use client";
import * as React from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  AppWindow,
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  Boxes,
  Building2,
  ChevronRight,
  Code,
  FileText,
  Gauge,
  Globe,
  LayoutDashboard,
  ListChecks,
  MousePointerClick,
  Search,
  ShoppingCart,
  Smartphone,
  Target,
  TrendingUp,
  Users,
  Wallet,
  type LucideIcon,
} from "lucide-react";
import { ButtonLink } from "@/components/ui/site-button";
import { siteConfig } from "@/config/site";
import { buildWhatsAppLink, cn } from "@/lib/utils";

type Scope = { icon: LucideIcon; title: string; description: string };

type Service = {
  id: string;
  icon: LucideIcon;
  title: string;
  summary: string; // teks pendek di daftar kiri
  headline: string; // kalimat utama di panel kanan
  scopes: [Scope, Scope, Scope, Scope];
};

// Edit isi layanan di sini — tata letak menyesuaikan otomatis.
const services: Service[] = [
  {
    id: "website",
    icon: Globe,
    title: "Jasa Pembuatan Website",
    summary: "Company profile, toko online, landing page, dan website custom.",
    headline:
      "Website yang menjelaskan nilai bisnis Anda dengan jelas dan memudahkan calon pelanggan untuk menghubungi Anda.",
    scopes: [
      {
        icon: Building2,
        title: "Company Profile",
        description: "Profil, layanan, dan portofolio bisnis Anda dalam tampilan yang rapi dan meyakinkan.",
      },
      {
        icon: ShoppingCart,
        title: "Toko Online",
        description: "Etalase produk yang mudah dikelola, dengan pemesanan lewat WhatsApp atau checkout.",
      },
      {
        icon: Code,
        title: "Website Custom",
        description: "Fitur khusus yang tidak bisa dipenuhi template, sesuai alur bisnis Anda.",
      },
      {
        icon: MousePointerClick,
        title: "Landing Page",
        description: "Satu halaman untuk satu tujuan, dengan tombol WhatsApp dan formulir calon pelanggan.",
      },
    ],
  },
  {
    id: "aplikasi",
    icon: AppWindow,
    title: "Jasa Pembuatan Aplikasi Custom",
    summary: "Sistem internal, ERP, CRM, dan aplikasi mobile.",
    headline:
      "Aplikasi yang mengikuti cara kerja tim Anda, bukan sebaliknya, supaya pekerjaan harian lebih rapi dan cepat.",
    scopes: [
      {
        icon: LayoutDashboard,
        title: "Sistem Internal",
        description: "Dashboard dan alur kerja untuk menggantikan catatan manual atau spreadsheet yang tersebar.",
      },
      {
        icon: Boxes,
        title: "ERP & Inventori",
        description: "Pantau stok, pesanan, dan operasional dalam satu sistem.",
      },
      {
        icon: Users,
        title: "CRM & Pelanggan",
        description: "Simpan data pelanggan dan riwayat komunikasi agar tindak lanjut tidak terlewat.",
      },
      {
        icon: Smartphone,
        title: "Aplikasi Mobile",
        description: "Aplikasi di ponsel untuk tim lapangan atau pelanggan Anda.",
      },
    ],
  },
  {
    id: "seo",
    icon: Search,
    title: "Jasa SEO",
    summary: "Mudah ditemukan calon pelanggan saat mereka mencari di Google.",
    headline:
      "Bantu bisnis Anda muncul di Google saat calon pelanggan sedang mencari produk atau jasa yang Anda tawarkan.",
    scopes: [
      {
        icon: ListChecks,
        title: "Riset Kata Kunci",
        description: "Menemukan kata yang benar-benar dicari calon pelanggan di bidang Anda.",
      },
      {
        icon: Gauge,
        title: "SEO Teknis",
        description: "Kecepatan, struktur halaman, dan pengaturan teknis agar website mudah dibaca Google.",
      },
      {
        icon: FileText,
        title: "Konten & Artikel",
        description: "Halaman dan artikel yang menjawab pertanyaan calon pelanggan Anda.",
      },
      {
        icon: BarChart3,
        title: "Laporan Peringkat",
        description: "Ringkasan perkembangan posisi dan kunjungan, dengan bahasa yang mudah dipahami.",
      },
    ],
  },
  {
    id: "google-ads",
    icon: Target,
    title: "Jasa Google Ads",
    summary: "Iklan pencarian yang hasilnya bisa diukur dari calon pelanggan.",
    headline:
      "Pasang iklan di hasil pencarian Google dan lihat dengan jelas calon pelanggan mana yang datang dari iklan tersebut.",
    scopes: [
      {
        icon: Search,
        title: "Iklan Pencarian",
        description: "Iklan yang tampil saat orang mencari layanan Anda di Google.",
      },
      {
        icon: Target,
        title: "Pelacakan Konversi",
        description: "Pesan WhatsApp dan pengisian formulir tercatat sebagai hasil iklan.",
      },
      {
        icon: Wallet,
        title: "Pengaturan Anggaran",
        description: "Anggaran diarahkan ke kata kunci dan iklan yang paling banyak menghasilkan.",
      },
      {
        icon: TrendingUp,
        title: "Laporan Berkala",
        description: "Laporan hasil iklan secara rutin beserta saran perbaikan.",
      },
    ],
  },
];

const wa = (message: string) => buildWhatsAppLink(siteConfig.whatsapp, message);

export function Services() {
  const [activeId, setActiveId] = React.useState(services[0].id);
  const tabRefs = React.useRef<Array<HTMLButtonElement | null>>([]);
  const activeIndex = services.findIndex((s) => s.id === activeId);
  const active = services[activeIndex];
  const ActiveIcon = active.icon;

  function handleKeyDown(event: React.KeyboardEvent) {
    const last = services.length - 1;
    let next = activeIndex;
    if (event.key === "ArrowDown" || event.key === "ArrowRight") next = activeIndex === last ? 0 : activeIndex + 1;
    else if (event.key === "ArrowUp" || event.key === "ArrowLeft") next = activeIndex === 0 ? last : activeIndex - 1;
    else if (event.key === "Home") next = 0;
    else if (event.key === "End") next = last;
    else return;
    event.preventDefault();
    setActiveId(services[next].id);
    tabRefs.current[next]?.focus();
  }

  return (
    <section id="layanan" aria-labelledby="layanan-heading" className="section-y scroll-mt-24 bg-surface-soft">
      <div className="container-page">
        <div className="grid gap-6 lg:grid-cols-[1.2fr_1fr] lg:items-start lg:gap-16">
          <div>
            <p className="text-xs font-semibold tracking-wider text-brand uppercase">Layanan</p>
            <h2 id="layanan-heading" className="type-h2 mt-3 max-w-xl text-balance text-foreground">
              Semua yang dibutuhkan bisnis Anda untuk tampil dan tumbuh di internet
            </h2>
          </div>
          <p className="max-w-lg text-base leading-relaxed text-body lg:pt-2">
            Dari website dan aplikasi sampai SEO dan Google Ads, semuanya dikerjakan satu tim. Bisnis Anda jadi
            lebih mudah ditemukan dan lebih mudah dihubungi.
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:mt-12 lg:grid-cols-[20rem_minmax(0,1fr)] lg:items-start">
          {/* daftar layanan: kolom di desktop, baris yang bisa digeser di mobile */}
          <div
            role="tablist"
            aria-label="Pilih layanan"
            aria-orientation="vertical"
            onKeyDown={handleKeyDown}
            className="-mx-5 flex gap-2 overflow-x-auto px-5 pb-1 sm:-mx-6 sm:px-6 lg:mx-0 lg:flex-col lg:overflow-visible lg:px-0 lg:pb-0"
          >
            {services.map((service, index) => {
              const Icon = service.icon;
              const selected = service.id === activeId;
              return (
                <button
                  key={service.id}
                  ref={(node) => {
                    tabRefs.current[index] = node;
                  }}
                  type="button"
                  role="tab"
                  id={`tab-${service.id}`}
                  aria-selected={selected}
                  aria-controls={`panel-${service.id}`}
                  tabIndex={selected ? 0 : -1}
                  onClick={() => setActiveId(service.id)}
                  className={cn(
                    "flex shrink-0 items-center gap-3 rounded-xl border p-3 text-left transition-[background-color,border-color,box-shadow] duration-200 lg:items-start lg:gap-4 lg:p-4",
                    selected
                      ? "border-border bg-white shadow-sm"
                      : "border-transparent hover:bg-white/60",
                  )}
                >
                  <span
                    className={cn(
                      "flex size-10 shrink-0 items-center justify-center rounded-lg transition-colors duration-200 lg:size-11",
                      selected ? "bg-brand text-white" : "bg-brand-tint text-brand",
                    )}
                  >
                    <Icon className="size-5" strokeWidth={1.75} />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span
                      className={cn(
                        "block text-sm font-semibold lg:text-[15px]",
                        selected ? "text-foreground" : "text-foreground/80",
                      )}
                    >
                      {service.title}
                    </span>
                    <span className="mt-1 hidden text-sm leading-snug text-body lg:block">{service.summary}</span>
                  </span>
                  <ChevronRight
                    className={cn(
                      "hidden size-4 shrink-0 self-center transition-colors duration-200 lg:block",
                      selected ? "text-brand" : "text-body/30",
                    )}
                  />
                </button>
              );
            })}
          </div>

          {/* detail layanan */}
          <div className="rounded-2xl border border-border bg-white p-6 sm:p-8 lg:p-10">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={active.id}
                role="tabpanel"
                id={`panel-${active.id}`}
                aria-labelledby={`tab-${active.id}`}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
              >
                <span className="inline-flex items-center gap-2 rounded-md bg-brand-tint px-3 py-1.5 text-sm font-medium text-brand">
                  <ActiveIcon className="size-4" />
                  {active.title}
                </span>

                <p className="mt-5 max-w-xl text-xl leading-snug font-semibold tracking-tight text-balance text-foreground sm:text-2xl">
                  {active.headline}
                </p>

                <p className="mt-8 text-xs font-semibold tracking-wider text-body uppercase">Mencakup</p>
                <ul className="mt-3 grid gap-4 sm:grid-cols-2">
                  {active.scopes.map((scope) => {
                    const Icon = scope.icon;
                    return (
                      <li key={scope.title}>
                        <a
                          href={wa(`Halo, saya tertarik dengan ${scope.title}.`)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group flex h-full gap-3.5 rounded-xl border border-border p-4 transition-[border-color,box-shadow] duration-200 hover:border-brand/40 hover:shadow-sm"
                        >
                          <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-brand-tint text-brand">
                            <Icon className="size-[18px]" strokeWidth={1.75} />
                          </span>
                          <span className="min-w-0 flex-1">
                            <span className="flex items-start justify-between gap-2">
                              <span className="text-[15px] font-semibold text-foreground">{scope.title}</span>
                              <ArrowUpRight className="mt-0.5 size-4 shrink-0 text-body transition-colors duration-200 group-hover:text-brand" />
                            </span>
                            <span className="mt-1 block text-sm leading-relaxed text-body">
                              {scope.description}
                            </span>
                          </span>
                        </a>
                      </li>
                    );
                  })}
                </ul>

                <div className="mt-8">
                  <ButtonLink href={wa(`Halo, saya ingin konsultasi tentang ${active.title}.`)}>
                    Konsultasi layanan ini
                    <ArrowRight className="size-4" />
                  </ButtonLink>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}