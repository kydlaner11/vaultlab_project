export type FaqItem = {
  question: string;
  answer: string;
};

export const pricingFaq: FaqItem[] = [
  {
    question: "Apakah harga di atas sudah termasuk domain & hosting?",
    answer:
      "Harga paket belum termasuk biaya domain dan hosting tahunan. Kami akan bantu rekomendasikan provider terbaik sesuai kebutuhan Anda.",
  },
  {
    question: "Berapa lama proses pengerjaan website?",
    answer:
      "Tergantung paket yang dipilih, mulai dari 5 hari kerja untuk paket Silver hingga 25 hari kerja untuk paket Platinum. Estimasi bisa berubah sesuai kompleksitas kebutuhan.",
  },
  {
    question: "Apakah ada revisi desain?",
    answer:
      "Ya, setiap paket sudah termasuk sesi revisi agar hasil akhir sesuai dengan kebutuhan dan brand bisnis Anda.",
  },
  {
    question: "Bagaimana jika kebutuhan saya di luar 4 paket ini?",
    answer:
      "Kami juga melayani proyek custom. Hubungi kami untuk konsultasi gratis dan penawaran harga yang disesuaikan dengan kebutuhan Anda.",
  },
];
