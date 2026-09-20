export type TemplateItem = {
  name: string;
  slug: string;
  image: string;
};

export type TemplateCategory = {
  id: string;
  title: string; // tampil sebagai "Template {title}"
  desc: string;
  templates: TemplateItem[];
};

export const about = {
  eyebrow: "SIAPA KAMI",
  headline: {
    lead: "Jasa buat website professional",
    muted: "level up",
    tail: "bisnis mu bersama Vault lab Project!",
  },
  cta: {
    label: "LIHAT SEMUA PROJECT",
    href: "/portfolio",
  },
  templatesEyebrow: "DISPLAY TEMPLATE",

  // Tambah kategori baru = tambah 1 object di array ini.
  // Tambah template baru = tambah 1 item di `templates`. Jumlah item bebas.
  categories: [
    {
      id: "coffee-shop",
      title: "Coffee Shop",
      desc: "Menu, lokasi, dan suasana kedai dalam satu halaman.",
      templates: [
        { name: "Billions Coffee", slug: "billions-coffee", image: "/images/portfolio/billions-coffee.webp" },
        // { name: "Template Coffee 2", slug: "coffee-2", image: "/images/portfolio/coffee-2.webp" },
      ],
    },
    {
      id: "fitness",
      title: "Gym & Fitness",
      desc: "Paket membership, jadwal kelas, dan tombol daftar yang jelas.",
      templates: [
        { name: "Fit Gym", slug: "fit-gym", image: "/images/portfolio/fit-gym.webp" },
      ],
    },
    {
      id: "fnb",
      title: "Restoran & Kuliner",
      desc: "Tampilkan menu andalan dan permudah pemesanan.",
      templates: [
        { name: "Ahjumma Kitchen", slug: "ahjumma-kitchen", image: "/images/portfolio/ahjumma-kitchen.webp" },
      ],
    },
    {
      id: "properti",
      title: "Properti & Hospitality",
      desc: "Galeri, fasilitas, dan form kontak untuk calon penghuni atau tamu.",
      templates: [
        { name: "Manohara", slug: "manohara", image: "/images/portfolio/manohara.webp" },
        { name: "Hidden Estate", slug: "hidden-estate", image: "/images/portfolio/hidden-estate.webp" },
      ],
    },
  ] satisfies TemplateCategory[],
};