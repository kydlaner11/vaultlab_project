import { Palette, FileText, Wrench, type LucideIcon } from "lucide-react";

export type FreeFeature = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export const freeFeatures: FreeFeature[] = [
  {
    icon: Palette,
    title: "Gratis Logo Sederhana",
    description: "Dapatkan desain logo sederhana untuk brand Anda tanpa biaya tambahan.",
  },
  {
    icon: FileText,
    title: "Gratis 3 Artikel SEO",
    description: "3 artikel SEO-friendly untuk membantu website Anda lebih mudah ditemukan di Google.",
  },
  {
    icon: Wrench,
    title: "Gratis Maintenance 1 Bulan",
    description: "Maintenance gratis selama 1 bulan pertama setelah website live.",
  },
];
