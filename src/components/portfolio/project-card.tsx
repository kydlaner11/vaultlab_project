"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowDownRight } from "lucide-react";
import { fadeUp } from "@/lib/motion";
import type { PortfolioProject } from "@/data/portfolio";

export function ProjectCard({ project }: { project: PortfolioProject }) {
  return (
    <motion.div variants={fadeUp}>
      <Link href={`/portfolio/${project.slug}`} className="group block">
        <div className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-zinc-200">
          <Image
            src={`https://picsum.photos/seed/${project.seed}/900/700`}
            alt={project.title}
            fill
            sizes="(min-width: 640px) 50vw, 100vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        <div className="mt-4 flex items-start justify-between gap-4">
          <div>
            <h3 className="text-xl font-semibold text-zinc-900">{project.title}</h3>
            <p className="mt-1 text-sm text-zinc-500">{project.meta}</p>
          </div>
          <ArrowDownRight className="mt-1 size-5 shrink-0 text-zinc-400 transition-transform group-hover:translate-x-1 group-hover:translate-y-1" />
        </div>
      </Link>
    </motion.div>
  );
}
