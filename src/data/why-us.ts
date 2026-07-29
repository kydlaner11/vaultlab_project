import { Users, ShieldCheck, Gauge, type LucideIcon } from "lucide-react";

export type ValuePoint = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export const valuePoints: ValuePoint[] = [
  {
    icon: Users,
    title: "Komunikasi langsung dengan developer",
    description: "Tanpa perantara — Anda bicara langsung dengan tim yang mengerjakan website Anda.",
  },
  {
    icon: Gauge,
    title: "Desain berdasarkan kebutuhan bisnis",
    description: "Setiap elemen dirancang untuk mendukung tujuan bisnis Anda, bukan sekadar tampil bagus.",
  },
  {
    icon: ShieldCheck,
    title: "Pendampingan setelah website live",
    description: "Kami tetap mendampingi Anda untuk maintenance dan pengembangan setelah website diluncurkan.",
  },
];
