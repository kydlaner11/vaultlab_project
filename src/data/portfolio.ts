export type PortfolioProject = {
  slug: string;
  image: string;
  title: string;
  client: string;
  category: string;
  year: string;
  meta: string;
  summary: string;
  challenge: string;
  solution: string;
  result: string;
  services: string[];
};

export const portfolioProjects: PortfolioProject[] = [
  {
    slug: "fit-gym",
    image: "/images/portfolio/fit-gym.webp",
    title: "Fit Gym — Website Company Profile",
    client: "Fit Gym",
    category: "Company Profile",
    year: "2026",
    meta: "2026 · Company Profile · Fitness",
    summary:
      "PLACEHOLDER — belum ada detail proyek. Ganti dengan ringkasan asli sebelum publish.",
    challenge: "PLACEHOLDER — apa masalah yang dihadapi Fit Gym sebelum website ini dibuat?",
    solution: "PLACEHOLDER — apa yang kalian bangun untuk mereka?",
    result: "PLACEHOLDER — hasil atau dampak nyatanya apa?",
    services: ["Desain Company Profile"],
  },
  {
    slug: "billions-coffee",
    image: "/images/portfolio/billions-coffee.webp",
    title: "Billions Coffee — Website Company Profile",
    client: "Billions Coffee",
    category: "Company Profile",
    year: "2026",
    meta: "2026 · Company Profile · F&B",
    summary:
      "Pengelolaan dan pengembangan website billionscoffee.co.id sebagai kanal informasi resmi untuk brand kopi Billions Coffee.",
    challenge:
      "Billions Coffee butuh website yang stabil dan mudah dikelola jangka panjang sebagai titik kontak resmi brand, di luar kanal media sosial mereka.",
    solution:
      "Kami kelola dan kembangkan website di hosting Hostinger, memastikan performa tetap stabil dan konten mudah diperbarui sesuai kebutuhan brand berjalan.",
    result:
      "Billions Coffee memiliki kanal online resmi yang konsisten terjaga dan siap dikembangkan lebih lanjut seiring pertumbuhan brand.",
    services: ["Pengelolaan Website", "Web Hosting & Maintenance"],
  },
  {
    slug: "ahjumma-kitchen",
    image: "/images/portfolio/ahjumma-kitchen.webp",
    title: "Ahjumma Kitchen — Website Brand Kuliner",
    client: "Ahjumma Kitchen",
    category: "Company Profile",
    year: "2026",
    meta: "2026 · Company Profile · F&B",
    summary:
      "Website untuk Ahjumma Kitchen, resto masakan rumahan Korea dengan lebih dari satu cabang, menonjolkan kehangatan dan keaslian resep khas rumahan.",
    challenge:
      "Ahjumma Kitchen punya beberapa cabang (Mulyorejo, Lenmarc) dan menu yang beragam — dari menu harian hingga paket keluarga/sharing — tapi belum punya satu kanal yang merapikan semua informasi ini untuk pelanggan.",
    solution:
      "Kami bangun website dengan look bersih dan terang (dominan putih, aksen coral/salmon secukupnya) terinspirasi referensi Hello Binggrae, lengkap dengan tab kategori menu, galeri produk, dan info tiap cabang.",
    result:
      "Pelanggan kini lebih mudah cek menu, cabang terdekat, dan opsi delivery atau paket keluarga tanpa harus scroll panjang di Instagram.",
    services: ["Desain Company Profile", "UI/UX Multi-Cabang", "Menu Digital"],
  },
  {
    slug: "manohara",
    image: "/images/portfolio/manohara.webp",
    title: "Manohara — Website",
    client: "Manohara",
    category: "Company Profile",
    year: "2026",
    meta: "2026 · Company Profile",
    summary:
      "PLACEHOLDER — belum ada detail proyek. Ganti dengan ringkasan asli sebelum publish.",
    challenge: "PLACEHOLDER — apa masalah yang dihadapi Manohara sebelum website ini dibuat?",
    solution: "PLACEHOLDER — apa yang kalian bangun untuk mereka?",
    result: "PLACEHOLDER — hasil atau dampak nyatanya apa?",
    services: ["Desain Company Profile"],
  },
];