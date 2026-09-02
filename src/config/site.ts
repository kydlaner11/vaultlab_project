export type NavItem = {
  name: string;
  href: string;
  children?: { name: string; href: string }[];
};

export const navItems: NavItem[] = [
  { name: "Beranda", href: "/" },
  { name: "Tentang", href: "/#about" },
  // {
  //   name: "Halaman",
  //   href: "#",
  //   children: [
  //     { name: "Layanan", href: "/#services" },
  //     { name: "Harga", href: "/pricing" },
  //     { name: "Karya", href: "/portfolio" },
  //   ],
  // },
  { name: "Blog", href: "/blog" },
  { name: "Kontak", href: "/#contact" },
];

export const siteConfig = {
  name: "Vaultlab",
  tagline: "Jasa Buat Website Profesional & SEO Friendly",
  description:
    "Jasa buat website profesional untuk bisnis dan UMKM — company profile, landing page, hingga toko online. Desain modern, cepat, dan teroptimasi SEO agar bisnis kamu mudah ditemukan di Google.",
  url: "https://vaultlabproject.com",
  email: "vaultlabproject@gmail.com",
  whatsapp: "6281805755331",
  locale: "id_ID",
  social: {
    instagram: "https://www.instagram.com/vaultlabproject",
    tiktok: "https://www.tiktok.com/@vaultlabproject",
  },
  keywords: [
    "jasa buat website",
    "jasa buat website profesional",
    "jasa pembuatan website profesional",
    "jasa bikin website",
    "jasa buat website murah",
    "jasa website perusahaan",
    "jasa landing page",
    "jasa toko online",
    "jasa buat website UMKM",
    "website SEO friendly",
    "web developer profesional",
  ],
} as const;

export const promoConfig = {
  id: "promo-agustus-2026",
  active: true,
  headline: "Diskon 30% Jasa buat Website Profesional",
  ctaLabel: "Klaim Voucher Sekarang",
  discountPercent: 30,
  originalPrice: "Rp 3.500.000",
  discountedPrice: "Rp 2.450.000",
  endDate: "2026-09-15T23:59:59+07:00",
  whatsappMessage:
    "Min vault, aku mau klaim Voucher ini gimana caranya?\nNama : \nNama Bisnis : \nButuh Website seperti apa : ",
} as const;