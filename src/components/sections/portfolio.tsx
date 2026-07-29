"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowDownRight } from "lucide-react";
import { fadeUp, staggerContainer } from "@/lib/motion";
import { portfolioProjects } from "@/data/portfolio";
import { ProjectCard } from "@/components/portfolio/project-card";

export function Portfolio() {
  const featuredProjects = portfolioProjects.slice(0, 4);

  return (
    <section className="bg-[#faf6ef] py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          variants={staggerContainer}
          className="flex flex-wrap items-end justify-between gap-6"
        >
          <motion.h2 variants={fadeUp} className="max-w-2xl text-4xl font-semibold tracking-tight text-zinc-900 sm:text-5xl">
            Pilihan karya, hasil nyata.
          </motion.h2>
          <motion.div variants={fadeUp}>
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 text-sm font-medium text-zinc-700 transition-colors hover:text-brand"
            >
              Lihat Semua Karya
              <ArrowDownRight className="size-4" />
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          variants={staggerContainer}
          className="mt-14 grid gap-x-8 gap-y-14 sm:grid-cols-2"
        >
          {featuredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
