export type NavItem = {
  name: string;
  href: string;
  children?: { name: string; href: string }[];
};

export const navItems: NavItem[] = [
  { name: "Beranda", href: "/" },
  { name: "Tentang", href: "/#about" },
  {
    name: "Halaman",
    href: "#",
    children: [
      { name: "Layanan", href: "/#services" },
      { name: "Harga", href: "/pricing" },
      { name: "Karya", href: "/portfolio" },
    ],
  },
  { name: "Blog", href: "/blog" },
  { name: "Kontak", href: "/#contact" },
];

export const siteConfig = {
  name: "Vaultlab",
  tagline: "Jasa Pembuatan Website Profesional & SEO Friendly",
  description:
    "Vaultlab adalah jasa pembuatan website untuk bisnis yang ingin tampil profesional secara online — company profile, landing page, hingga toko online yang cepat, modern, dan teroptimasi untuk SEO.",
  url: "https://vaultlab.vercel.app",
  email: "vaultlabproject@gmail.com",
  locale: "id_ID",
  keywords: [
    "jasa pembuatan website",
    "jasa bikin website",
    "jasa website perusahaan",
    "jasa landing page",
    "jasa toko online",
    "website SEO friendly",
    "web developer profesional",
  ],
} as const;
