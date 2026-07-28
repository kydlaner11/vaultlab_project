import { Search, Workflow, BarChart3, type LucideIcon } from "lucide-react";

export type Partner = {
  name: string;
  icon: LucideIcon;
};

export const partners: Partner[] = [
  { name: "NovaTech", icon: Workflow },
  { name: "Cedar & Co", icon: BarChart3 },
  { name: "Brightline", icon: Search },
  { name: "Northwind", icon: Workflow },
  { name: "Aurora Retail", icon: BarChart3 },
  { name: "Nimbus", icon: Search },
];
