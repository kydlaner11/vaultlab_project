export type FixedFeature = {
  icon: "page" | "domain" | "duration" | "design" | "copywriting" | "custom" | "integration" | "support";
  label: string;
};

export type PricingPlan = {
  // name: string;
  tier: "Growing" | "Business" | "Professional" | "Enterprise";
  price: string;
  renewalPrice?: string; // teks harga perpanjangan, tampil sebagai subtitle di bawah harga
  description: string;
  fixedFeatures: FixedFeature[];
  features: string[];
  highlighted?: boolean;
  cta: string;
};

export const pricingPlans: PricingPlan[] = [
  {
    tier: "Growing",
    price: "Rp 2,5jt",
    renewalPrice: "Perpanjangan 900.000/tahun",
    description: "Cocok untuk UMKM & personal brand yang butuh halaman promosi cepat dan profesional.",
    fixedFeatures: [
      { icon: "page", label: "1 Halaman Website" },
      { icon: "domain", label: "Free Domain" },
      { icon: "duration", label: "Aktif 1 Tahun" },
      { icon: "design", label: "Basic Landing Page Design" },
      { icon: "copywriting", label: "Basic Copy Writing" },
    ],
    features: [
      "Tombol WhatsApp",
      "Integrasi Google Maps",
      "Integrasi Sosial Media",
      "Pengerjaan 7 hari kerja",
      "Revisi 3x Pengerjaan",
      "SEO Basic",
      "Free Maintenance & Support",
      "Anti Lag & Fast Loading",
    ],
    cta: "Pilih Paket",
  },
  {
    tier: "Business",
    price: "Rp 5jt",
    renewalPrice: "Perpanjangan 1.500.000/tahun",
    description: "Untuk bisnis yang ingin tampil profesional dengan profil perusahaan yang lengkap.",
    fixedFeatures: [
      { icon: "page", label: "2-3 Halaman Website" },
      { icon: "domain", label: "Free Domain" },
      { icon: "duration", label: "Aktif 1 Tahun" },
      { icon: "design", label: "Premium Landing Page Design" },
      { icon: "copywriting", label: "Premium Copy Writing" },
    ],
    features: [
      "Katalog Produk",
      "Optimasi SEO friendly",
      "Integrasi Google Analytics",
      "Pengerjaan 10 hari kerja",
      "Revisi 5x Pengerjaan",
      "VIP Maintenance & Support",
    ],
    highlighted: true,
    cta: "Pilih Paket",
  },
  {
    tier: "Professional",
    price: "Rp 7,5jt",
    renewalPrice: "Perpanjangan 2.000.000/tahun",
    description: "Solusi lengkap untuk bisnis yang ingin berjualan online dengan sistem yang scalable.",
    fixedFeatures: [
      { icon: "page", label: "4-6 Halaman Website" },
      { icon: "domain", label: "Free Domain .com" },
      { icon: "duration", label: "Aktif 1 Tahun" },
      { icon: "design", label: "Pro Landing Page Design" },
      { icon: "copywriting", label: "Pro Copy Writing" },
    ],
    features: [
      "Custom Design",
      "Custom Fitur",
      "Optimasi SEO lanjutan",
      "Pengerjaan 15 hari kerja",
      "VVIP Maintenance & Support",
    ],
    cta: "Pilih Paket",
  },
  {
    tier: "Enterprise",
    price: "Custom Pricing",
    description: "Untuk kebutuhan sistem atau aplikasi web yang disesuaikan dengan proses bisnis Anda.",
    fixedFeatures: [
      { icon: "custom", label: "Custom Jumlah Halaman" },
      { icon: "domain", label: "Free Domain .com" },
      { icon: "duration", label: "Aktif 1 Tahun" },
      { icon: "integration", label: "Custom UI/UX Design" },
      { icon: "support", label: "Prioritas Support" },
    ],
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