import Image from "next/image";
import Link from "next/link";
import type { PortfolioProject } from "@/data/portfolio";

export function ProjectCard({ project }: { project: PortfolioProject }) {
  return (
    <Link href={`/portfolio/${project.slug}`} className="group block rounded-xl">
      {/* tangkapan layar website: tampilkan bagian atas halaman */}
      <div className="relative aspect-[16/10] overflow-hidden rounded-xl border border-border bg-surface-strong shadow-sm transition-[border-color,box-shadow] duration-200 group-hover:border-brand/40 group-hover:shadow-md">
        <Image
          src={project.image}
          alt={`Tampilan website ${project.title}`}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
        />
      </div>

      <h3 className="mt-4 text-[17px] leading-snug font-semibold tracking-tight text-foreground transition-colors duration-200 group-hover:text-brand">
        {project.title}
      </h3>
      <div className="mt-1.5 flex flex-wrap items-center gap-x-3 gap-y-2">
        <p className="text-sm text-body">{project.meta}</p>
        <span className="rounded-full border border-border px-2.5 py-0.5 text-xs font-medium text-body">
          {project.category}
        </span>
      </div>
    </Link>
  );
}