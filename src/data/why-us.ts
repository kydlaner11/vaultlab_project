import { Users, ShieldCheck, Gauge, type LucideIcon } from "lucide-react";

export type ValuePoint = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export const valuePoints: ValuePoint[] = [
  {
    icon: Users,
    title: "You talk to the person doing the work",
    description: "No account managers in between — direct access from strategy to execution.",
  },
  {
    icon: Gauge,
    title: "Decisions backed by data, not guesses",
    description: "Every recommendation is tied to a metric you already care about.",
  },
  {
    icon: ShieldCheck,
    title: "Built to compound, not just spike",
    description: "Systems that keep paying off long after the campaign ends.",
  },
];
