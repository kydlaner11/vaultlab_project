export type PricingPlan = {
  name: string;
  price: string;
  description: string;
  features: string[];
  highlighted?: boolean;
  cta: string;
};

export const pricingPlans: PricingPlan[] = [
  {
    name: "Landing Page",
    price: "Rp 2.500.000",
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
    name: "Company Profile",
    price: "Rp 5.500.000",
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
    name: "Toko Online",
    price: "Rp 9.500.000",
    description: "Solusi lengkap untuk bisnis yang ingin berjualan online dengan sistem yang scalable.",
    features: [
      "Jumlah halaman tidak terbatas",
      "Sistem keranjang & checkout",
      "Integrasi payment gateway",
      "Dashboard kelola produk & pesanan",
      "Optimasi SEO lanjutan",
      "Pengerjaan 20 hari kerja",
    ],
    cta: "Pilih Paket",
  },
];
