import {
  Search,
  Workflow,
  BarChart3,
  Building2,
  Zap,
  ShoppingBag,
  Code2,
  type LucideIcon,
} from "lucide-react";

export type ServiceCard = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export const serviceCards: ServiceCard[] = [
  {
    title: "Konsultasi & Analisis",
    description: "Kami pelajari kebutuhan bisnis Anda untuk menentukan solusi website yang paling tepat.",
    icon: Search,
  },
  {
    title: "Desain & Pengembangan",
    description: "Website dibangun dari nol dengan desain custom, cepat, dan mudah digunakan.",
    icon: Workflow,
  },
  {
    title: "Optimasi & Maintenance",
    description: "Website Anda tetap aman, cepat, dan mudah ditemukan di mesin pencari.",
    icon: BarChart3,
  },
];

export type ServiceTile = {
  index: string;
  title: string;
  icon: LucideIcon;
};

export const serviceTiles: ServiceTile[] = [
  { index: "01 — Company Profile", title: "Website Company Profile", icon: Building2 },
  { index: "02 — Landing Page", title: "Landing Page Konversi", icon: Zap },
  { index: "03 — Toko Online", title: "Website Toko Online", icon: ShoppingBag },
  { index: "04 — Custom", title: "Aplikasi Web Custom", icon: Code2 },
];
