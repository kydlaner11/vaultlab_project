import { Search, Workflow, BarChart3, Zap, Share2, PenTool, type LucideIcon } from "lucide-react";

export type ServiceCard = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export const serviceCards: ServiceCard[] = [
  {
    title: "Audits & Insights",
    description: "Identify gaps and opportunities in your current setup to unlock performance and growth.",
    icon: Search,
  },
  {
    title: "Growth Systems",
    description: "Build scalable marketing funnels and automated systems that turn visitors into loyal clients.",
    icon: Workflow,
  },
  {
    title: "Data-Driven Decisions",
    description: "Transform complex analytics into actionable insight for faster, smarter decision-making.",
    icon: BarChart3,
  },
];

export type ServiceTile = {
  index: string;
  title: string;
  icon: LucideIcon;
};

export const serviceTiles: ServiceTile[] = [
  { index: "01 — SEO", title: "SEO Optimization", icon: Search },
  { index: "02 — Performance", title: "Performance Marketing", icon: Zap },
  { index: "03 — Social", title: "Content & Social", icon: Share2 },
  { index: "04 — Design", title: "Brand & UI Design", icon: PenTool },
];
