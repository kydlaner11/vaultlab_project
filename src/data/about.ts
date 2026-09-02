export type AboutProject = {
  name: string;
  slug: string;
  image: string;
};

export type AboutStat = {
  value: string;
  label: string;
  desc: string;
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
  // Swap image paths for your real screenshots — see sizing notes.
  projects: [
    { name: "Fit Gym", slug: "fit-gym", image: "/images/portfolio/fit-gym.webp" },
    { name: "Billions Coffee", slug: "billions-coffee", image: "/images/portfolio/billions-coffee.webp" },
    { name: "Ahjumma Kitchen", slug: "ahjumma-kitchen", image: "/images/portfolio/ahjumma-kitchen.webp" },
    { name: "Manohara", slug: "manohara", image: "/images/portfolio/manohara.webp" },
    { name: "Hidden Estate", slug: "hidden-estate", image: "/images/portfolio/hidden-estate.webp" },
    // { name: "Mahkota", slug: "mahkota", image: "/images/portfolio/mahkota.webp" },
    // { name: "Manohara", slug: "manohara", image: "/images/portfolio/manohara.webp" },
    // { name: "Manohara", slug: "manohara", image: "/images/portfolio/manohara.webp" },
  ] satisfies AboutProject[],
  statsEyebrow: "PENCAPAIAN KAMI",
  // Verify these numbers before publishing — placeholders carried over from the old copy.
  stats: [
    { value: "120+", label: "Website diluncurkan", desc: "Dari UMKM sampai brand skala nasional." },
    { value: "98%", label: "Klien puas", desc: "Diukur dari repeat order & rekomendasi." },
    { value: "4+", label: "Industri ditangani", desc: "F&B, properti, retail, hingga produk digital." },
    { value: "100%", label: "Custom design", desc: "Tidak ada template generik dipakai ulang." },
  ] satisfies AboutStat[],
};