export type PricingPlan = {
  name: string;
  tier: "Silver" | "Gold" | "Diamond" | "Platinum";
  price: string;
  description: string;
  features: string[];
  highlighted?: boolean;
  cta: string;
};

export const pricingPlans: PricingPlan[] = [
  {
    tier: "Silver",
    name: "Landing Page",
    price: "Rp 2,5jt",
    description: "Cocok untuk UMKM & personal brand yang butuh halaman promosi cepat dan profesional.",
    features: [
      "1 halaman (single page)",
      "Desain custom & responsive",
      "Tombol kontak langsung ke WhatsApp",
      "Optimasi kecepatan dasar",
      "Pengerjaan 5 hari kerja",
    ],
    cta: "Pilih Paket",
  },
  {
    tier: "Gold",
    name: "Company Profile",
    price: "Rp 5jt",
    description: "Untuk bisnis yang ingin tampil profesional dengan profil perusahaan yang lengkap.",
    features: [
      "Hingga 6 halaman",
      "Desain custom & responsive",
      "Optimasi SEO dasar",
      "Integrasi Google Analytics",
      "Fitur blog / artikel",
      "Pengerjaan 10 hari kerja",
    ],
    highlighted: true,
    cta: "Pilih Paket",
  },
  {
    tier: "Diamond",
    name: "Toko Online",
    price: "Rp 7,5jt",
    description: "Solusi lengkap untuk bisnis yang ingin berjualan online dengan sistem yang scalable.",
    features: [
      "Jumlah halaman tidak terbatas",
      "Sistem keranjang & checkout",
      "Integrasi payment gateway",
      "Dashboard kelola produk & pesanan",
      "Optimasi SEO lanjutan",
      "Pengerjaan 15 hari kerja",
    ],
    cta: "Pilih Paket",
  },
  {
    tier: "Platinum",
    name: "Aplikasi Web Custom",
    price: "Rp 10jt",
    description: "Untuk kebutuhan sistem atau aplikasi web yang disesuaikan dengan proses bisnis Anda.",
    features: [
      "Fitur & alur kerja custom",
      "Desain UI/UX khusus",
      "Integrasi sistem pihak ketiga",
      "Dashboard admin custom",
      "Dukungan prioritas",
      "Pengerjaan 25 hari kerja",
    ],
    cta: "Konsultasi Dulu",
  },
];
