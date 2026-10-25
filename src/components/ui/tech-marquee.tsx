import type { IconType } from "react-icons";
import {
  SiDocker,
  SiGooglecloud,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiReact,
  SiRedis,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

type Tech = { name: string; icon: IconType; color: string };

/** Ubah daftar ini sesuai teknologi yang benar-benar Anda pakai. */
const technologies: Tech[] = [
  { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
  { name: "React", icon: SiReact, color: "#149ECA" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
  { name: "Node.js", icon: SiNodedotjs, color: "#5FA04E" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
  { name: "Redis", icon: SiRedis, color: "#DC382D" },
  { name: "Docker", icon: SiDocker, color: "#2496ED" },
  { name: "Google Cloud", icon: SiGooglecloud, color: "#4285F4" },
];

function TechGroup({ hidden = false }: { hidden?: boolean }) {
  return (
    <ul aria-hidden={hidden || undefined} className="flex shrink-0 items-center gap-10 pr-10">
      {technologies.map(({ name, icon: Icon, color }) => (
        <li
          key={name}
          className="flex shrink-0 items-center gap-2.5 text-[15px] font-medium whitespace-nowrap text-foreground"
        >
          <Icon className="size-6" style={{ color }} aria-hidden="true" />
          {name}
        </li>
      ))}
    </ul>
  );
}

/**
 * Slider teknologi yang bergeser otomatis tanpa putus.
 * Daftar digandakan dan digeser -50% agar loop mulus; berhenti saat di-hover
 * dan statis (bisa di-scroll) saat "reduce motion" aktif.
 */
export function TechMarquee({ className }: { className?: string }) {
  return (
    <div
      className={
        "overflow-hidden mask-[linear-gradient(to_right,transparent,black_12%,black_88%,transparent)] motion-reduce:overflow-x-auto " +
        (className ?? "")
      }
    >
      <div className="flex w-max animate-marquee hover:paused motion-reduce:animate-none">
        <TechGroup />
        <TechGroup hidden />
      </div>
    </div>
  );
}