export type BlogSection = {
  heading?: string;
  body: string;
};

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  sections: BlogSection[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "alasan-website-penting-untuk-bisnis",
    title: "5 Alasan Website Penting untuk Bisnis di 2026",
    excerpt: "Media sosial saja tidak cukup. Ini alasan kenapa website tetap jadi aset digital paling penting untuk bisnis Anda.",
    category: "Bisnis",
    date: "2026-01-12",
    readTime: "4 menit baca",
    image: "/images/blog/alasan-website-penting-untuk-bisnis.png",
    sections: [
      {
        heading: "Kredibilitas di mata calon pelanggan",
        body: "Sebelum membeli, kebanyakan orang akan mencari nama bisnis Anda di Google. Website yang profesional memberi kesan bahwa bisnis Anda serius dan bisa dipercaya, jauh lebih meyakinkan dibanding sekadar akun media sosial.",
      },
      {
        heading: "Kendali penuh atas citra brand",
        body: "Di media sosial, tampilan profil Anda dibatasi oleh template platform. Website memberi kebebasan penuh untuk membangun identitas visual dan pengalaman pengguna sesuai karakter bisnis Anda.",
      },
      {
        heading: "Ditemukan lewat pencarian, bukan cuma feed",
        body: "Website yang dioptimasi SEO bisa terus mendatangkan calon pelanggan baru lewat pencarian Google, bahkan saat Anda tidak sedang aktif memposting di media sosial.",
      },
    ],
  },
  {
    slug: "cara-memilih-jasa-pembuatan-website",
    title: "Cara Memilih Jasa Pembuatan Website yang Tepat",
    excerpt: "Banyak pilihan jasa pembuatan website di luar sana. Berikut hal-hal yang perlu dicek sebelum memutuskan.",
    category: "Tips",
    date: "2026-01-20",
    readTime: "5 menit baca",
    image: "/images/blog/cara-memilih-jasa-pembuatan-website.png",
    sections: [
      {
        heading: "Cek portofolio, bukan cuma harga",
        body: "Harga murah tidak selalu berarti hemat. Lihat dulu portofolio dan hasil kerja sebelumnya untuk memastikan kualitas desain dan pengembangan sesuai standar yang Anda butuhkan.",
      },
      {
        heading: "Pastikan ada dukungan setelah website selesai",
        body: "Website yang baik butuh maintenance. Tanyakan apakah jasa yang Anda pilih menyediakan dukungan setelah website live, termasuk untuk update konten dan perbaikan bug.",
      },
      {
        heading: "Perhatikan proses komunikasi",
        body: "Proyek website melibatkan banyak keputusan kecil. Pilih tim yang komunikatif dan mudah dihubungi, supaya proses pengerjaan berjalan lancar tanpa miskomunikasi.",
      },
    ],
  },
  {
    slug: "apa-itu-seo-on-page",
    title: "Apa itu SEO On-Page dan Kenapa Website Anda Membutuhkannya",
    excerpt: "SEO on-page adalah fondasi agar website Anda mudah ditemukan di Google. Ini penjelasan singkatnya.",
    category: "SEO",
    date: "2026-02-02",
    readTime: "6 menit baca",
    image: "/images/blog/apa-itu-seo-on-page.png",
    sections: [
      {
        heading: "Definisi singkat SEO on-page",
        body: "SEO on-page adalah praktik mengoptimasi elemen di dalam halaman website — seperti judul, struktur heading, dan kecepatan loading — agar lebih mudah dipahami mesin pencari dan pengunjung.",
      },
      {
        heading: "Elemen dasar yang perlu diperhatikan",
        body: "Beberapa elemen penting meliputi judul halaman yang jelas, deskripsi meta yang menarik, struktur heading yang rapi, serta gambar dengan teks alternatif yang deskriptif.",
      },
      {
        heading: "Dampaknya bagi bisnis Anda",
        body: "Website dengan SEO on-page yang baik lebih berpeluang muncul di halaman pertama pencarian, yang berarti lebih banyak calon pelanggan menemukan bisnis Anda secara organik tanpa biaya iklan.",
      },
    ],
  },
  {
    slug: "landing-page-vs-company-profile",
    title: "Landing Page vs Company Profile, Mana yang Anda Butuhkan?",
    excerpt: "Dua jenis website ini punya tujuan berbeda. Kenali perbedaannya sebelum menentukan paket yang tepat.",
    category: "Tips",
    date: "2026-02-15",
    readTime: "4 menit baca",
    image: "/images/blog/landing-page-vs-company-profile.png",
    sections: [
      {
        heading: "Landing page untuk satu tujuan spesifik",
        body: "Landing page dirancang untuk satu tujuan konversi, misalnya mengumpulkan leads dari iklan atau mempromosikan satu produk. Strukturnya singkat dan fokus mengarahkan pengunjung ke satu tindakan.",
      },
      {
        heading: "Company profile untuk citra menyeluruh",
        body: "Company profile lebih cocok untuk bisnis yang ingin menampilkan profil lengkap — visi misi, layanan, tim, hingga portofolio — sebagai representasi resmi perusahaan di dunia online.",
      },
      {
        heading: "Cara menentukan pilihan",
        body: "Jika tujuan Anda adalah kampanye iklan dengan target konversi jelas, landing page lebih tepat. Jika Anda ingin membangun kepercayaan jangka panjang, company profile adalah pilihan yang lebih sesuai.",
      },
    ],
  },
  {
    slug: "tips-website-toko-online-meningkatkan-penjualan",
    title: "Tips Membuat Website Toko Online yang Meningkatkan Penjualan",
    excerpt: "Sekadar punya toko online belum cukup. Ini beberapa hal yang bisa mendorong konversi penjualan.",
    category: "E-commerce",
    date: "2026-03-01",
    readTime: "5 menit baca",
    image: "/images/blog/tips-website-toko-online-meningkatkan-penjualan.png",
    sections: [
      {
        heading: "Proses checkout yang singkat",
        body: "Semakin banyak langkah yang harus dilalui pelanggan untuk checkout, semakin besar peluang mereka membatalkan pembelian. Sederhanakan proses checkout sebisa mungkin.",
      },
      {
        heading: "Foto produk yang meyakinkan",
        body: "Karena pelanggan tidak bisa melihat produk secara langsung, foto berkualitas tinggi dari berbagai sudut sangat membantu meyakinkan mereka untuk membeli.",
      },
      {
        heading: "Metode pembayaran yang lengkap",
        body: "Sediakan berbagai metode pembayaran lokal yang familiar bagi target pasar Anda, agar tidak ada pelanggan yang batal membeli hanya karena metode pembayaran favoritnya tidak tersedia.",
      },
    ],
  },
  {
    slug: "kenapa-maintenance-website-penting",
    title: "Kenapa Maintenance Website Tidak Boleh Diabaikan",
    excerpt: "Website yang sudah live bukan berarti selesai. Ini alasan kenapa maintenance rutin tetap penting.",
    category: "Maintenance",
    date: "2026-03-10",
    readTime: "3 menit baca",
    image: "/images/blog/kenapa-maintenance-website-penting.png",
    sections: [
      {
        heading: "Keamanan yang terus berubah",
        body: "Ancaman keamanan di internet terus berkembang. Update rutin pada sistem website membantu menutup celah keamanan sebelum dimanfaatkan pihak yang tidak bertanggung jawab.",
      },
      {
        heading: "Performa yang tetap optimal",
        body: "Seiring bertambahnya konten dan trafik, website bisa melambat jika tidak dirawat. Maintenance rutin membantu menjaga kecepatan loading tetap optimal bagi pengunjung.",
      },
      {
        heading: "Konten yang selalu relevan",
        body: "Informasi seperti harga, produk, atau jadwal perlu selalu diperbarui agar pengunjung tidak mendapat informasi yang sudah tidak berlaku, yang bisa merusak kepercayaan mereka pada bisnis Anda.",
      },
    ],
  },
];
