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
    slug: "kopi-nusantara-toko-online",
    image: "/images/portfolio/kopi-nusantara-toko-online.png",
    title: "Kopi Nusantara — Website Toko Online",
    client: "Kopi Nusantara",
    category: "E-commerce",
    year: "2026",
    meta: "2026 · E-commerce · UI/UX",
    summary:
      "Membangun toko online untuk brand kopi lokal agar bisa menjual produk langsung ke pelanggan di seluruh Indonesia, tanpa bergantung sepenuhnya pada marketplace.",
    challenge:
      "Kopi Nusantara hanya berjualan lewat marketplace dan belum punya kanal penjualan sendiri yang mencerminkan identitas brand mereka. Data pelanggan juga sulit dikelola karena tersebar di banyak platform.",
    solution:
      "Kami rancang toko online custom dengan sistem checkout yang simpel, galeri produk yang kuat secara visual, dan integrasi pembayaran lokal — lengkap dengan dashboard untuk kelola produk dan pesanan sendiri.",
    result:
      "Penjualan online meningkat dan brand mereka kini punya kanal penjualan yang sepenuhnya mereka kendalikan, lengkap dengan data pelanggan yang rapi untuk strategi pemasaran ke depan.",
    services: ["Desain UI/UX", "Pengembangan Toko Online", "Integrasi Pembayaran"],
  },
  {
    slug: "klinik-sehat-company-profile",
    image: "/images/portfolio/klinik-sehat-company-profile.png",
    title: "Klinik Sehat — Company Profile",
    client: "Klinik Sehat",
    category: "Company Profile",
    year: "2026",
    meta: "2026 · Company Profile · SEO",
    summary:
      "Website profil untuk klinik kesehatan agar calon pasien mudah menemukan informasi layanan, dokter, dan jadwal praktik secara online.",
    challenge:
      "Klinik Sehat belum punya kehadiran online yang layak dipercaya — informasi layanan dan jadwal dokter hanya tersebar lewat media sosial dan sering membingungkan pasien baru.",
    solution:
      "Kami bangun website company profile dengan struktur informasi yang jelas: daftar layanan, profil dokter, jadwal praktik, dan lokasi — dioptimasi agar mudah ditemukan lewat pencarian Google di sekitar area klinik.",
    result:
      "Jumlah pasien baru yang datang lewat pencarian online meningkat, dan tim klinik jadi lebih mudah mengarahkan pasien untuk cek informasi lewat website ketimbang menjawab satu per satu lewat chat.",
    services: ["Desain Company Profile", "SEO Lokal", "Integrasi Google Maps"],
  },
  {
    slug: "griya-interior-landing-page",
    image: "/images/portfolio/griya-interior-landing-page.png",
    title: "Griya Interior — Landing Page",
    client: "Griya Interior",
    category: "Landing Page",
    year: "2025",
    meta: "2025 · Landing Page · Konversi",
    summary:
      "Landing page untuk jasa desain interior yang fokus mengubah pengunjung iklan menjadi leads yang siap dihubungi tim sales.",
    challenge:
      "Griya Interior rutin beriklan di media sosial, tapi mengarahkan calon klien ke akun Instagram biasa membuat banyak leads hilang di tengah jalan karena tidak ada alur yang jelas untuk konsultasi.",
    solution:
      "Kami buat satu landing page terarah dengan portofolio proyek terbaik, testimoni klien, dan formulir konsultasi singkat yang langsung terhubung ke WhatsApp tim sales.",
    result:
      "Rasio klik iklan yang berubah jadi konsultasi naik signifikan, dan tim sales kini menerima leads yang jauh lebih siap dan sesuai target pasar.",
    services: ["Desain Landing Page", "Optimasi Konversi", "Integrasi WhatsApp"],
  },
  {
    slug: "warung-digital-aplikasi-custom",
    image: "/images/portfolio/warung-digital-aplikasi-custom.png",
    title: "Warung Digital — Aplikasi Web Custom",
    client: "Warung Digital",
    category: "Web App",
    year: "2025",
    meta: "2025 · Web App · Custom Development",
    summary:
      "Aplikasi web custom untuk mengelola jaringan warung mitra, mulai dari pencatatan stok hingga laporan penjualan harian.",
    challenge:
      "Warung Digital mengelola puluhan warung mitra secara manual lewat spreadsheet, membuat proses pencatatan stok dan laporan penjualan jadi lambat dan rawan salah input.",
    solution:
      "Kami kembangkan aplikasi web custom dengan dashboard terpusat untuk setiap mitra warung, termasuk pencatatan stok otomatis dan laporan penjualan harian yang bisa diakses kapan saja.",
    result:
      "Proses pencatatan yang tadinya memakan waktu berjam-jam kini selesai dalam hitungan menit, dan tim pusat bisa memantau performa semua warung mitra dari satu dashboard.",
    services: ["Pengembangan Web App", "Desain Dashboard", "Sistem Multi-Mitra"],
  },
];
