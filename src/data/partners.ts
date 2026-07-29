import { Search, Workflow, BarChart3, type LucideIcon } from "lucide-react";

export type Partner = {
  name: string;
  icon: LucideIcon;
};

export const partners: Partner[] = [
  { name: "Kopi Nusantara", icon: Workflow },
  { name: "Griya Sehat", icon: BarChart3 },
  { name: "Berkah Retail", icon: Search },
  { name: "Nusantara Fashion", icon: Workflow },
  { name: "Cahaya Konsultan", icon: BarChart3 },
  { name: "Warung Digital", icon: Search },
];
